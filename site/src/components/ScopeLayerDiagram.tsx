export function ScopeLayerDiagram() {
  const lineColor = '#3E7E90';
  const panel = '#162236';
  const borderColor = '#3E7E90';

  const lines: Array<{ x: number; y: number; w: number; h: number }> = [
    { x: 380, y: 345, w: 135, h: 5 },
    { x: 513, y: 230, w: 5, h: 199 },
    { x: 515, y: 230, w: 93, h: 5 },
    { x: 515, y: 424, w: 93, h: 5 },
    { x: 740, y: 232, w: 113, h: 5 },
    { x: 740, y: 427, w: 113, h: 5 },
    { x: 853, y: 172, w: 123, h: 5 },
    { x: 853, y: 232, w: 123, h: 5 },
    { x: 853, y: 292, w: 123, h: 5 },
    { x: 850, y: 366, w: 5, h: 244 },
    { x: 850, y: 172, w: 5, h: 125 },
    { x: 853, y: 366, w: 123, h: 5 },
    { x: 853, y: 426, w: 123, h: 5 },
    { x: 853, y: 485, w: 123, h: 5 },
    { x: 853, y: 545, w: 123, h: 5 },
    { x: 853, y: 605, w: 123, h: 5 },
  ];

  type Box = { x: number; y: number; w: number; h: number; rx?: number; label: string };
  const boxes: Box[] = [
    { x: 160, y: 315, w: 220, h: 63, rx: 5, label: 'High Seas Hero' },
    { x: 608, y: 208, w: 133, h: 49, rx: 3, label: '常规功能' },
    { x: 608, y: 402, w: 133, h: 49, rx: 3, label: '玩法系统' },
    { x: 975, y: 150, w: 133, h: 49, rx: 3, label: '背包' },
    { x: 975, y: 210, w: 133, h: 49, rx: 3, label: '设置' },
    { x: 975, y: 270, w: 133, h: 49, rx: 3, label: '商店' },
    { x: 975, y: 344, w: 133, h: 49, rx: 3, label: '船舱系统' },
    { x: 975, y: 403, w: 133, h: 49, rx: 3, label: '探险系统' },
    { x: 975, y: 463, w: 133, h: 49, rx: 3, label: '养成系统' },
    { x: 975, y: 523, w: 133, h: 49, rx: 3, label: '工会系统' },
    { x: 975, y: 583, w: 133, h: 49, rx: 3, label: '世界系统' },
  ];

  return (
    <svg
      viewBox="100 120 1040 540"
      className="block h-auto w-full"
      role="img"
      aria-label="High Seas Hero 范围层：常规功能、玩法系统与外围系统连接示意"
    >
      {lines.map((l, i) => (
        <rect key={i} x={l.x} y={l.y} width={l.w} height={l.h} fill={lineColor} />
      ))}

      {boxes.map((b, i) => (
        <g key={`${b.label}-${i}`}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={b.rx ?? 3}
            fill={panel}
            stroke={borderColor}
            strokeWidth={2}
          />
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FFFFFF"
            fontSize={20}
            fontWeight={500}
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
