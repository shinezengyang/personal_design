import { publicUrl } from '../lib/publicUrl';

const VB = { w: 1280, h: 648 };
const COL = { text: '#8FD3C7', badge: '#87C8BC', badgeText: '#0b1320', line: '#87C8BC' };

const DESC_ROWS: [string, string][] = [
  ['系统功能导航栏：', '能够切换各个功能模块的区域。'],
  ['快捷聊天栏：', '玩家聊天快捷显示的区域。'],
  ['坐标栏：', '野外当前坐标和收藏坐标的功能。'],
  ['任务栏：', '当前任务区域。'],
  ['常规功能菜单栏：', '商店、背包、邮件等常规按钮显示的区域。'],
  ['玩法功能菜单栏：', '野外侦察、海雾特工队、野外搜索、贸易货船等玩法入口按钮显示的区域。'],
  ['行军信息状态栏：', '战舰在海上战斗的进度。'],
  ['运营活动菜单栏：', '常规活动和节日活动等按钮显示的区域。'],
  ['增益状态栏：', '玩家基地上的增益状态。'],
  ['货币栏：', '金币、钻石等显示的区域。'],
  ['个人信息栏：', '玩家头像、玩家等级、精力值显示的区域。'],
];

const PHONE = { x: 540, y: 157, w: 200, h: 433 };

const LABELS = [
  { id: 'sTWaC', text: '个人信息栏', x: 167, y: 142, width: 128, anchor: 'end' as const },
  { id: 'FYtaT', text: '增益状态栏', x: 167, y: 173, width: 128, anchor: 'end' as const },
  { id: 'ElBTU', text: '行军信息状态栏', x: 119, y: 234, width: 176, anchor: 'end' as const },
  { id: 'bxyE5', text: '玩法功能菜单栏', x: 119, y: 419, width: 176, anchor: 'end' as const },
  { id: '44fr0', text: '任务栏', x: 215, y: 487, width: 80, anchor: 'end' as const },
  { id: '4yFgX', text: '快捷聊天栏', x: 167, y: 527, width: 128, anchor: 'end' as const },
  { id: 'lGhfY', text: '系统功能导航栏', x: 119, y: 567, width: 176, anchor: 'end' as const },
  { id: 'N3m5R', text: '货币栏', x: 972, y: 145, width: 80, anchor: 'start' as const },
  { id: 'APLyw', text: '运营活动菜单栏', x: 972, y: 203, width: 176, anchor: 'start' as const },
  { id: 'qZvKW', text: '常规功能菜单栏', x: 972, y: 453, width: 176, anchor: 'start' as const },
  { id: 'cYKXs', text: '坐标栏', x: 972, y: 502, width: 80, anchor: 'start' as const },
];

const BADGES = [
  { id: 'lgS6Q', n: '11', x: 135, y: 147.5 },
  { id: 'xaGGx', n: '9', x: 135, y: 180 },
  { id: 'RoUmC', n: '7', x: 87, y: 239.5 },
  { id: 'O00f1', n: '6', x: 87, y: 424.5 },
  { id: 'h1ivE', n: '4', x: 183, y: 494 },
  { id: 'r4IPD', n: '2', x: 135, y: 534 },
  { id: '3dBAe', n: '1', x: 87, y: 574 },
  { id: '1BNsC', n: '10', x: 1060, y: 150.5 },
  { id: 'aU58p', n: '8', x: 1156, y: 208.5 },
  { id: '5BT5h', n: '5', x: 1156, y: 458.5 },
  { id: 'A0J1C', n: '3', x: 1060, y: 509 },
];

const LEADERS = [
  { id: 'OpPGb', x: 303, y: 158.5, width: 246, height: 2 },
  { id: 'z6Go1', x: 303, y: 191, width: 270, height: 2 },
  { id: 'jrruG', x: 303, y: 250.5, width: 246, height: 2 },
  { id: 'okTnC', x: 303, y: 436, width: 250, height: 1 },
  { id: 'yh4xP', x: 303, y: 505, width: 246, height: 2 },
  { id: 'G7w6A', x: 303, y: 545, width: 240, height: 2 },
  { id: '2ea7I', x: 303, y: 585.5, width: 245, height: 1 },
  { id: 'AKJda', x: 663, y: 161.5, width: 301, height: 2 },
  { id: 'fGVUO', x: 714, y: 219.5, width: 250, height: 2 },
  { id: 'FzAWw', x: 727, y: 469.5, width: 237, height: 2 },
  { id: 'cQLCF', x: 663, y: 520, width: 301, height: 2 },
];

function SvgText({
  children,
  x,
  y,
  anchor = 'start',
  size = 24,
  weight = 800,
  fill = COL.text,
}: {
  children: string;
  x: number;
  y: number;
  anchor?: 'start' | 'middle' | 'end';
  size?: number;
  weight?: number;
  fill?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="middle"
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
    >
      {children}
    </text>
  );
}

export function StructureLayer8qvkJDiagram() {
  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="block h-auto w-full"
        role="img"
        aria-label="主界面 HUD 框架层标注（8qvkJ）"
      >
        <title>主界面 HUD 框架层标注（8qvkJ）</title>
        <defs>
          <linearGradient id="sl8-bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0D3141" stopOpacity="0.66" />
            <stop offset="100%" stopColor="#14254A" stopOpacity="0.72" />
          </linearGradient>
          <filter id="sl8-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <SvgText x={640} y={78} anchor="middle" size={48}>主要游戏画面</SvgText>

        <g data-pencil-group="TSRQc" data-pencil-node-ids="TSRQc,I9Vys,kqzRS">
          <image
            href={publicUrl('pencil/xingji-aodaisai/panel0.png')}
            x={PHONE.x}
            y={PHONE.y}
            width={PHONE.w}
            height={PHONE.h}
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {LEADERS.map((leader) => (
          <rect
            key={leader.id}
            data-pencil-node-id={leader.id}
            x={leader.x}
            y={leader.y}
            width={leader.width}
            height={leader.height}
            fill={COL.line}
          />
        ))}

        {LABELS.map((label) => (
          <SvgText
            key={label.id}
            x={label.anchor === 'end' ? label.x + label.width : label.x}
            y={label.y + 17.5}
            anchor={label.anchor}
            size={24}
            weight={600}
          >
            {label.text}
          </SvgText>
        ))}

        {BADGES.map((badge) => (
          <g key={badge.id} data-pencil-node-id={badge.id}>
            <circle cx={badge.x + 12} cy={badge.y + 12} r="12" fill={COL.badge} />
            <SvgText x={badge.x + 12} y={badge.y + 13} anchor="middle" size={13} weight={900} fill={COL.badgeText}>{badge.n}</SvgText>
          </g>
        ))}

      </svg>

      <div className="mt-4 rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-center text-[16px] font-semibold leading-relaxed text-[#E8E8E8]">
          操作时需要玩家反复注意的元素放在同一区域，具有整体性，可以使玩家的注意力集中
        </p>
        <div className="mt-4 space-y-3 text-[16px] font-[600] leading-relaxed text-[#C1D4CE]">
          {DESC_ROWS.map(([title, desc], idx) => (
            <p key={`desc-html-${idx}`} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] text-[12px] font-bold leading-none text-[#0b1320]">
                {idx + 1}
              </span>
              <span>
                <span className="font-semibold text-[#8FD3C7]">{title}</span>
                {desc}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
