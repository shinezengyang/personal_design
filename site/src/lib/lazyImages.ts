/**
 * Transform-proof lazy image loading.
 *
 * Every case page renders inside `.qingyu-figma-case-shell` — an `overflow: hidden`
 * box holding an absolutely positioned panel with `transform: scale(...)`. A page
 * authored at 23 500 layout px is squeezed into an 18 000 px shell that way.
 *
 * Both native `loading="lazy"` and IntersectionObserver decide visibility from the
 * clip rect in *layout* coordinates, so everything past the shell's clip is judged
 * off-screen forever: images stay unloaded even while plainly on screen. Measured on
 * the guild page — 47 pending images, 0 intersections reported, 0 ever fetched.
 *
 * `getBoundingClientRect()` does account for ancestor transforms, so this walks the
 * pending images on scroll and promotes the ones actually near the viewport to eager,
 * which is what kicks off the fetch. Native lazy still runs first wherever it works;
 * this only ever rescues images it left behind.
 */

const MARGIN = 1.25; // viewport heights of lookahead
const pending = new Set<HTMLImageElement>();
let scheduled = false;
let started = false;

function isLoaded(img: HTMLImageElement) {
  return img.complete && img.naturalWidth > 0;
}

function collect(root: ParentNode = document) {
  for (const img of root.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
    if (!isLoaded(img)) pending.add(img);
  }
}

function sweep() {
  scheduled = false;
  if (!pending.size) return;
  const lookahead = window.innerHeight * MARGIN;
  for (const img of pending) {
    if (!img.isConnected || isLoaded(img)) {
      pending.delete(img);
      continue;
    }
    const r = img.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue; // not laid out yet
    if (r.bottom > -lookahead && r.top < window.innerHeight + lookahead) {
      img.loading = 'eager';
      pending.delete(img);
    }
  }
}

/* A timer rather than requestAnimationFrame: rAF is throttled to zero in a tab that
   is not painting, which would leave images unloaded exactly when someone restores
   the tab and starts reading. 100ms also coalesces a burst of scroll events. */
function schedule() {
  ensurePoll();
  if (scheduled) return;
  scheduled = true;
  setTimeout(sweep, 100);
}

/* Safety net. Scroll events are the primary trigger, but these pages also move content
   under a stationary viewport (tab switches, reveal animations, the stage recomputing
   its scale on resize), and a missed event would leave a reader staring at a blank
   frame. A twice-a-second rect check over the pending set is a few dozen reads — far
   cheaper than the failure it prevents — and it stops once everything has loaded. */
let poll: ReturnType<typeof setInterval> | null = null;

function ensurePoll() {
  if (poll !== null) return;
  poll = setInterval(() => {
    if (!pending.size) {            // idle — stop until a tab switch adds more
      clearInterval(poll!);
      poll = null;
      return;
    }
    if (document.visibilityState === 'visible') sweep();
  }, 500);
}

export function startLazyImageRescue() {
  if (started || typeof window === 'undefined') return;
  started = true;

  collect();
  schedule();

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });

  // Tabs swap whole subtrees in and out, so keep the pending set current.
  new MutationObserver((records) => {
    for (const rec of records) {
      for (const node of rec.addedNodes) {
        if (node.nodeType !== 1) continue;
        const el = node as Element;
        if (el.tagName === 'IMG') {
          const img = el as HTMLImageElement;
          if (img.loading === 'lazy' && !isLoaded(img)) pending.add(img);
        } else {
          collect(el);
        }
      }
    }
    schedule();
  }).observe(document.body, { childList: true, subtree: true });
}
