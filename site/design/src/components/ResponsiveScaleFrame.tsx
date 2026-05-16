import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

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
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [height, setHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    const content = contentRef.current;
    if (!host || !content) return;

    const measure = () => {
      const nextScale = Math.min(maxScale, host.clientWidth / minDesignWidth);
      const contentHeight = content.scrollHeight;
      setScale(nextScale);
      setOffsetX(Math.max(0, (host.clientWidth - minDesignWidth * nextScale) / 2));
      setHeight(contentHeight * nextScale);
    };

    measure();

    const hostObserver = new ResizeObserver(measure);
    const contentObserver = new ResizeObserver(measure);
    hostObserver.observe(host);
    contentObserver.observe(content);

    window.addEventListener('resize', measure);
    return () => {
      hostObserver.disconnect();
      contentObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [maxScale, minDesignWidth]);

  return (
    <div
      ref={hostRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={height ? { height } : undefined}
    >
      <div
        ref={contentRef}
        className="absolute left-0 top-0"
        style={{
          width: minDesignWidth,
          transform: `translateX(${offsetX}px) scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
