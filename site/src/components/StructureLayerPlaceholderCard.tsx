import { publicUrl } from '../lib/publicUrl';

const VB = { w: 1280, h: 920 };
const COL = { text: '#8FD3C7', badge: '#87C8BC', badgeText: '#0b1320', line: '#87C8BC' };
const IMAGE = { x: 500, y: 158, w: 280, h: 607 };

type Callout = {
  n: string;
  label: string;
  align: 'left' | 'right';
  x: number;
  centerY: number;
  w: number;
  lineStartX: number;
  lineWidth: number;
  lineThick?: number;
};

type BulletItem = { title: string; desc: string };

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  bullets: BulletItem[];
  callouts: Callout[];
};

function Note({
  x, centerY, w, label, n, align,
}: {
  x: number; centerY: number; w: number; label: string; n: string; align: 'left' | 'right';
}) {
  return (
    <foreignObject x={x} y={centerY - 17} width={w} height={35}>
      <div
        className={`slph-note ${align === 'left' ? 'slph-note-left' : 'slph-note-right'}`}
        style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 14 }}
      >
        {align === 'left' && <span className="slph-note-badge">{n}</span>}
        <span className="slph-note-label">{label}</span>
        {align === 'right' && <span className="slph-note-badge">{n}</span>}
      </div>
    </foreignObject>
  );
}

function HLine({ x, y, w, thick = 2 }: { x: number; y: number; w: number; thick?: number }) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + w}
      y2={y}
      stroke={COL.line}
      strokeWidth={thick}
      strokeLinecap="square"
    />
  );
}

export function StructureLayerPlaceholderCard({
  title,
  imageSrc,
  imageAlt,
  summary,
  bullets,
  callouts,
}: Props) {
  return (
    <div className="project-detail-inner-card mx-auto w-full max-w-[1180px] 2xl:max-w-[1280px]">
      <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
        <div className="relative w-full overflow-visible rounded-xl">
          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="block h-auto w-full"
            style={{ overflow: 'visible' }}
            role="img"
            aria-label={`${title}标注图`}
          >
            <style>{`
              .slph-note { height: 100%; display: flex; align-items: center; gap: 14px; font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif; }
              .slph-note-left { justify-content: flex-end; text-align: right; }
              .slph-note-right { justify-content: flex-start; text-align: left; }
              .slph-note-label { font-size: clamp(14px, 2.4cqi, 24px); font-weight: 600; color: ${COL.text}; white-space: nowrap; }
              .slph-note-badge { width: 24px; height: 24px; border-radius: 9999px; background: ${COL.badge}; color: ${COL.badgeText}; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; line-height: 1; flex: 0 0 24px; font-size: 13px; }
              .slph-title { font-size: 56px; font-weight: 700; fill: ${COL.text}; text-anchor: middle; text-align: center; }
            `}</style>

            <title>{title}标注图</title>
            <rect width={VB.w} height={VB.h} fill="transparent" />

            <text x={VB.w / 2} y={76} className="slph-title">
              {title}
            </text>

            <image
              href={publicUrl(imageSrc)}
              x={IMAGE.x}
              y={IMAGE.y}
              width={IMAGE.w}
              height={IMAGE.h}
              preserveAspectRatio="xMidYMid meet"
              aria-label={imageAlt}
            />
            <rect x={IMAGE.x - 10} y={IMAGE.y - 10} width={IMAGE.w + 20} height={IMAGE.h + 20} rx="12" fill="none" stroke="rgba(135,200,188,0.35)" />

            {callouts.map((item) => (
              <Note
                key={`${title}-${item.n}-${item.label}`}
                x={item.x}
                centerY={item.centerY}
                w={item.w}
                label={item.label}
                n={item.n}
                align={item.align}
              />
            ))}

            {callouts.map((item) => (
              <HLine
                key={`${title}-line-${item.n}`}
                x={item.lineStartX}
                y={item.centerY - (item.lineThick ?? 2) / 2}
                w={item.lineWidth}
                thick={item.lineThick}
              />
            ))}
          </svg>

          <div className="mt-6 rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-center text-[16px] font-semibold leading-relaxed text-[#E8E8E8]">{summary}</p>
            <div className="mt-4 space-y-3 text-[16px] font-[600] leading-relaxed text-[#C1D4CE]">
              {bullets.map((item, idx) => (
                <p key={`${title}-${item.title}`} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#A3D9C1] text-[12px] font-bold leading-none text-[#0b1320]">
                    {idx + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-[#A3D9C1]">{item.title}</span>
                    {item.desc}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
