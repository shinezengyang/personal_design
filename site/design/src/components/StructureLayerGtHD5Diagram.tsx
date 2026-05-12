import { StructureLayerVLUazExactSvg } from './StructureLayerVLUazExactSvg';

const COL = {
  fillStrong: 'rgba(0,232,255,0.32)',
  fillSoft: 'rgba(0,232,255,0.16)',
  line: '#00E8FF',
  text: '#A7E4D6',
  textBright: '#E0FFF8',
  dark: '#0B1320',
};

const BREADCRUMB = '全屏界面>半弹界面>窗口>次弹窗口>提示';

type LayerPath = {
  d: string;
  x: number;
  y: number;
  opacity: number;
};

const GTHD5_LAYERS: LayerPath[] = [
  {
    d: 'M0 13.22299l484.44501-13.22299 124.55005 160.00098-537.32898 23.77697-71.66608-170.55496z',
    x: 493.483,
    y: 305.898,
    opacity: 0.32,
  },
  {
    d: 'M0 0.00101l370.11096-0.00101 115.55603 168-410.112 15.22302-75.55499-183.22201z',
    x: 503.151,
    y: 280.12,
    opacity: 0.28,
  },
  {
    d: 'M0 8.43399l253.55499-8.43399 80.55597 115-289.44501 15.65701-44.66595-122.22302z',
    x: 486.151,
    y: 170.464,
    opacity: 0.24,
  },
  {
    d: 'M0 5.66699l181.77802-5.66699 47.22198 67.66699-203 9.44501-26-71.44501z',
    x: 486.037,
    y: 134.898,
    opacity: 0.2,
  },
  {
    d: 'M0 2l84.44403-2 22.11102 31.22201-94.22198 4.77802-12.33307-34.00003z',
    x: 485.815,
    y: 89.454,
    opacity: 0.34,
  },
];

const GTHD5_LINES = [
  { x: 181.037, y: 107.454, w: 311, label: '提示' },
  { x: 188.369, y: 161.01, w: 305.556, label: '次弹窗口' },
  { x: 197.705, y: 234.565, w: 309.223, label: '窗口' },
  { x: 205.928, y: 312.565, w: 309.889, label: '半弹界面' },
  { x: 212.483, y: 426.565, w: 326.666, label: '全屏界面' },
];

const VLUAZ_NODES = [
  { x: 640, y: 22, w: 67, h: 37, label: '提示' },
  { x: 291, y: 190, w: 69, h: 38, label: '次弹窗口' },
  { x: 0, y: 367, w: 68, h: 37, label: '窗口' },
  { x: 0, y: 417, w: 68, h: 37, label: '半弹界面' },
  { x: 0, y: 467, w: 68, h: 38, label: '全屏界面' },
  { x: 0, y: 532, w: 68, h: 36, label: '系统' },
  { x: 0, y: 581, w: 68, h: 37, label: '菜单' },
  { x: 278, y: 631, w: 68, h: 37, label: '窗口' },
  { x: 0, y: 681, w: 68, h: 37, label: '列表' },
  { x: 0, y: 731, w: 68, h: 37, label: '提示' },
  { x: 768, y: 768, w: 68, h: 38, label: '面板' },
  { x: 640, y: 839, w: 67, h: 37, label: '浮层' },
  { x: 768, y: 839, w: 68, h: 37, label: '弹窗' },
  { x: 122, y: 878, w: 67, h: 38, label: '按钮' },
  { x: 768, y: 911, w: 68, h: 36, label: '结果' },
  { x: 122, y: 928, w: 67, h: 37, label: '确认' },
  { x: 278, y: 917, w: 68, h: 37, label: '提示' },
  { x: 122, y: 977, w: 67, h: 38, label: '反馈' },
  { x: 768, y: 982, w: 68, h: 38, label: '详情' },
  { x: 122, y: 1027, w: 67, h: 37, label: '返回' },
  { x: 768, y: 1031, w: 68, h: 37, label: '二级' },
  { x: 768, y: 1080, w: 68, h: 38, label: '提示' },
  { x: 768, y: 1130, w: 68, h: 36, label: '关闭' },
  { x: 768, y: 1178, w: 68, h: 37, label: '完成' },
  { x: 122, y: 1378, w: 67, h: 37, label: '确认' },
  { x: 122, y: 1520, w: 67, h: 38, label: '提示' },
  { x: 284, y: 1520, w: 69, h: 38, label: '状态' },
  { x: 640, y: 1576, w: 67, h: 36, label: '结束' },
];

const VLUAZ_PATHS = [
  'M283 209l-19 0c-13.255 0-24-10.745-24-24l0-95.5c0-13.255-10.745-24-24-24l-19 0',
  'M283 209l-19 0c-13.255 0-24 10.745-24 24l0 128c0 13.255-10.745 24-24 24l-19 0',
  'M715 40.5c12.426 0 22.5 10.074 22.5 22.5l0 506.5c0 12.426 10.074 22.5 22.5 22.5',
  'M197 40.5h518',
  'M197 209h242c13.255 0 24 10.745 24 24v624.5',
  'M76 385.5c10.493 0 19 8.507 19 19v226.5c0 10.493 8.507 19 19 19h84',
  'M76 435.5c10.493 0 19 8.507 19 19v176c0 10.493 8.507 19 19 19h84',
  'M76 486c10.493 0 19 8.507 19 19v125.5c0 10.493 8.507 19 19 19h84',
  'M76 550c10.493 0 19 8.507 19 19v61.5c0 10.493 8.507 19 19 19h84',
  'M76 599.5c10.493 0 19 8.507 19 19v12c0 10.493 8.507 19 19 19h164',
  'M715 40.5c12.426 0 22.5 10.074 22.5 22.5v100.5c0 12.426 10.074 22.5 22.5 22.5h84',
  'M715 40.5c12.426 0 22.5 10.074 22.5 22.5v298c0 12.426 10.074 22.5 22.5 22.5h84',
  'M715 40.5c12.426 0 22.5 10.074 22.5 22.5v410c0 12.426 10.074 22.5 22.5 22.5h84',
  'M197 787h73c13.255 0 24 10.745 24 24v100',
  'M76 1266c10.493 0 19 8.51 19 19v77.5c0 10.49 8.507 19 19 19h8',
  'M76 1539h200',
  'M197 1498h518',
  'M715 1545c12.426 0 22.5 10.07 22.5 22.5v4c0 12.43 10.074 22.5 22.5 22.5',
];

function Text({
  children,
  x,
  y,
  size = 22,
  weight = 800,
  anchor = 'start',
  fill = COL.text,
}: {
  children: string;
  x: number;
  y: number;
  size?: number;
  weight?: number;
  anchor?: 'start' | 'middle' | 'end';
  fill?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
      dominantBaseline="middle"
    >
      {children}
    </text>
  );
}

function renderGtHD5() {
  return (
    <svg viewBox="0 0 1120 520" className="block h-auto w-full" style={{ overflow: 'visible' }} role="img" aria-label="框架关系层级示意（GtHD5）">
      <title>框架关系层级示意（GtHD5）</title>
      <defs>
        <filter id="sl-gt-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="1120" height="520" fill="transparent" />
      <rect x="22" y="20" width="1012" height="54" rx="8" fill="rgba(11,19,32,0.62)" stroke="rgba(0,232,255,0.24)" />
      <Text x={44} y={49} size={24} fill={COL.textBright}>{BREADCRUMB}</Text>

      {GTHD5_LAYERS.map((layer, idx) => (
        <g key={`layer-${idx}`}>
          <path
            d={layer.d}
            transform={`translate(${layer.x} ${layer.y})`}
            fill={idx === GTHD5_LAYERS.length - 1 ? COL.fillStrong : COL.fillSoft}
            stroke={COL.line}
            strokeWidth={idx === GTHD5_LAYERS.length - 1 ? 2.8 : 2}
            strokeOpacity={0.9}
            filter={idx === GTHD5_LAYERS.length - 1 ? 'url(#sl-gt-glow)' : undefined}
          />
        </g>
      ))}

      {GTHD5_LINES.map((line) => (
        <g key={line.label}>
          <line x1={line.x} y1={line.y} x2={line.x + line.w} y2={line.y} stroke={COL.line} strokeWidth="2.4" />
          <circle cx={line.x} cy={line.y} r="4.5" fill={COL.line} />
          <Text x={line.x - 30} y={line.y} size={18} anchor="end" fill={COL.textBright}>{line.label}</Text>
        </g>
      ))}
    </svg>
  );
}

function renderVLUaz() {
  return <StructureLayerVLUazExactSvg />;
}

export function StructureLayerGtHD5Diagram({ pencilNode = 'GtHD5' }: { pencilNode?: 'GtHD5' | 'VLUaz' }) {
  return (
    <div className="w-full overflow-visible">
      {pencilNode === 'GtHD5' ? renderGtHD5() : renderVLUaz()}
    </div>
  );
}
