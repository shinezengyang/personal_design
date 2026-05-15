import { useLayoutEffect, useRef, type ReactNode } from 'react';

export function ResponsiveScaleFrame({
  children,
  minDesignWidth,
  maxScale = 1.2,
  className = '',
}: {
  children: ReactNode;
  minDesignWidth: number;
  maxScale?: number;
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    const content = contentRef.current;
    if (!host || !content) return;

    const measure = () => {
      const nextScale = Math.min(maxScale, host.clientWidth / minDesignWidth);
      const contentHeight = content.scrollHeight;
      const offsetX = Math.max(0, (host.clientWidth - minDesignWidth * nextScale) / 2);
      content.style.transform = `translateX(${offsetX}px) scale(${nextScale})`;
      content.style.transformOrigin = 'top left';
      host.style.height = `${contentHeight * nextScale}px`;
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(host);
    ro.observe(content);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [maxScale, minDesignWidth]);

  return (
    <div
      ref={hostRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <div
        ref={contentRef}
        className="absolute left-0 top-0"
        style={{ width: minDesignWidth }}
      >
        {children}
      </div>
    </div>
  );
}
