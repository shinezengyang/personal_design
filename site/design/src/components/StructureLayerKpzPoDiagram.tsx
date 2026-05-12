import { publicUrl } from '../lib/publicUrl';

const VB = { w: 1280, h: 920 };
const COL = { text: '#8FD3C7', badge: '#87C8BC', badgeText: '#0b1320', line: '#87C8BC' };
const LINE_TEXT_GAP = 18;

function Note({
  x, y, w, label, n, align,
}: {
  x: number; y: number; w: number; label: string; n: string; align: 'left' | 'right';
}) {
  return (
    <foreignObject x={x} y={y} width={w} height={35}>
      <div
        className={`slk-note ${align === 'left' ? 'slk-note-left' : 'slk-note-right'}`}
        style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 14 }}
      >
        {align === 'left' && <span className="slk-note-badge">{n}</span>}
        <span className="slk-note-label">{label}</span>
        {align === 'right' && <span className="slk-note-badge">{n}</span>}
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

export function StructureLayerKpzPoDiagram() {
  const RIGHT_TEXT_START_X = 970;
  const RIGHT_LINE_END_X = RIGHT_TEXT_START_X - LINE_TEXT_GAP;
  const LEFT_LINE_X = 303;
  const LEFT_NOTE_W = 320;
  const LEFT_NOTE_X = LEFT_LINE_X - LINE_TEXT_GAP - LEFT_NOTE_W;

  return (
    <div className="relative w-full overflow-visible rounded-xl">
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="block h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-label="全屏界面标注（kpzPo）"
      >
        <style>{`
          .slk-note { height: 100%; display: flex; align-items: center; gap: 14px; font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif; }
          .slk-note-left { justify-content: flex-end; text-align: right; }
          .slk-note-right { justify-content: flex-start; text-align: left; }
          .slk-note-label { font-size: clamp(14px, 2.4cqi, 24px); font-weight: 600; color: ${COL.text}; white-space: nowrap; }
          .slk-note-badge { width: 24px; height: 24px; border-radius: 9999px; background: ${COL.badge}; color: ${COL.badgeText}; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; line-height: 1; flex: 0 0 24px; font-size: 13px; }
          .slk-title { font-size: 56px; font-weight: 700; fill: ${COL.text}; text-anchor: middle; text-align: center; }
        `}</style>

        <title>全屏界面标注（kpzPo）</title>
        <rect width={VB.w} height={VB.h} fill="transparent" />

        <text x={VB.w / 2} y={76} className="slk-title">
          全屏界面
        </text>

        <image
          href={publicUrl('pencil/xingji-aodaisai/panel5.png')}
          x={500}
          y={158}
          width={280}
          height={607}
          preserveAspectRatio="xMidYMid meet"
        />
        <rect x={490} y={148} width={300} height={627} rx="12" fill="none" stroke="rgba(135,200,188,0.35)" />

        <Note x={RIGHT_TEXT_START_X} y={144} w={280} label="界面标题栏" n="6" align="right" />
        <Note x={RIGHT_TEXT_START_X} y={498} w={300} label="战舰信息详情栏" n="4" align="right" />
        <Note x={LEFT_NOTE_X} y={248} w={LEFT_NOTE_W} label="战舰主要信息展示区域" n="5" align="left" />
        <Note x={LEFT_NOTE_X} y={613} w={LEFT_NOTE_W} label="操作栏" n="3" align="left" />
        <Note x={RIGHT_TEXT_START_X} y={658} w={240} label="页签栏" n="2" align="right" />
        <Note x={LEFT_NOTE_X} y={722} w={LEFT_NOTE_W} label="系统功能导航栏" n="1" align="left" />

        <HLine x={760} y={162} w={RIGHT_LINE_END_X - 760} />
        <HLine x={760} y={516} w={RIGHT_LINE_END_X - 760} />
        <HLine x={303} y={266} w={217} />
        <HLine x={303} y={631} w={247} />
        <HLine x={760} y={676} w={RIGHT_LINE_END_X - 760} />
        <HLine x={303} y={740} w={217} thick={1} />
      </svg>
    </div>
  );
}
