import { useEffect, useRef } from 'react';

/**
 * Page-wide cursor-following glow. A single fixed overlay that tracks the
 * pointer and paints a soft neon radial gradient under the cursor. Uses
 * `mix-blend-mode: screen` so it only adds light (never darkens content) and
 * `pointer-events: none` so it never intercepts clicks. Position is driven via
 * CSS variables updated inside requestAnimationFrame to avoid React re-renders.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip on touch devices (no hover) — there is no cursor to follow.
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    let x = -1000;
    let y = -1000;

    const apply = () => {
      el.style.setProperty('--gx', `${x}px`);
      el.style.setProperty('--gy', `${y}px`);
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        mixBlendMode: 'screen',
        background:
          'radial-gradient(480px circle at var(--gx, -1000px) var(--gy, -1000px), rgba(0,245,255,0.10), rgba(0,245,255,0.04) 32%, transparent 65%)',
      }}
    />
  );
};

export default CursorGlow;
