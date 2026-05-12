import { publicUrl } from '../lib/publicUrl';

const BOARD_WIDTH = 1280;
const BOARD_HEIGHT = 2727;
const FONT_STACK = '"Roboto Condensed", "Noto Sans SC", sans-serif';
const LABEL_COLOR = '#95CEC2';
const MARKER_FILL = '#A5E5D6';
const MARKER_TEXT = '#0B1320';
const BODY_TEXT = '#FFFFFF';
const SHADOW_STROKE = 'rgba(0, 0, 0, 0.9)';

type TopLabel = {
  n: string;
  label: string;
  textX: number;
  textY: number;
  circleX: number;
  circleY: number;
  lineX: number;
  lineY: number;
  lineWidth: number;
  align: 'start' | 'end';
};

type SectionBlock = {
  n: string;
  title: string;
  titleX: number;
  titleY: number;
  circleX: number;
  circleY: number;
  image: string;
  imageAlt: string;
  imageX: number;
  imageY: number;
  imageWidth: number;
  imageHeight: number;
  notesX: number;
  noteYs: readonly number[];
  notes: readonly string[];
};

type LegendRow = {
  y: number;
  label: string;
  color: string;
};

type TextSpec = {
  y: number;
  label: string;
  size: number;
  weight: number;
};

const topLabels: readonly TopLabel[] = [
  {
    n: '2',
    label: '常规按钮样式',
    textX: 135,
    textY: 741,
    circleX: 113,
    circleY: 757,
    lineX: 314,
    lineY: 758,
    lineWidth: 299,
    align: 'start',
  },
  {
    n: '1',
    label: '页签按钮样式',
    textX: 135,
    textY: 838,
    circleX: 113,
    circleY: 854,
    lineX: 314,
    lineY: 855,
    lineWidth: 299,
    align: 'start',
  },
  {
    n: '3',
    label: '特殊按钮样式',
    textX: 1152,
    textY: 271,
    circleX: 1175,
    circleY: 287,
    lineX: 790,
    lineY: 286,
    lineWidth: 182,
    align: 'end',
  },
  {
    n: '4',
    label: '开关按钮样式',
    textX: 1152,
    textY: 542,
    circleX: 1175,
    circleY: 558,
    lineX: 790,
    lineY: 557,
    lineWidth: 182,
    align: 'end',
  },
];

const sections: readonly SectionBlock[] = [
  {
    n: '2',
    title: '常规按钮样式',
    titleX: 168,
    titleY: 997,
    circleX: 146,
    circleY: 1013,
    image: 'pencil/xingji-aodaisai/common-buttons-transparent.png',
    imageAlt: '常规按钮样式',
    imageX: 133,
    imageY: 1056,
    imageWidth: 160,
    imageHeight: 378,
    notesX: 319,
    noteYs: [1074, 1152, 1230, 1308, 1386],
    notes: [
      '文本按钮-正常尺寸（280*115）',
      '文本按钮-小尺寸（180*75）',
      '图标按钮-正常尺寸（115*115）',
      '图标按钮-小尺寸（75*75）',
      '图文按钮-消耗功能（280*115）',
    ],
  },
  {
    n: '3',
    title: '特殊按钮样式',
    titleX: 833,
    titleY: 997,
    circleX: 811,
    circleY: 1013,
    image: 'pencil/xingji-aodaisai/special-buttons-transparent.png',
    imageAlt: '特殊按钮样式',
    imageX: 798,
    imageY: 1047,
    imageWidth: 187,
    imageHeight: 412,
    notesX: 997,
    noteYs: [1071, 1159, 1247, 1335, 1423],
    notes: ['重点功能按钮', '玩法入口按钮', '系统入口按钮', '活动入口按钮', '帮助提示按钮'],
  },
  {
    n: '1',
    title: '页签按钮样式',
    titleX: 168,
    titleY: 1546,
    circleX: 146,
    circleY: 1562,
    image: 'pencil/xingji-aodaisai/tab-buttons-transparent.png',
    imageAlt: '页签按钮样式',
    imageX: 133,
    imageY: 1605,
    imageWidth: 294,
    imageHeight: 376,
    notesX: 447,
    noteYs: [1645, 1741, 1837, 1933],
    notes: ['系统级页签', '底部一级页签', '顶部一级页签', '二级页签'],
  },
  {
    n: '4',
    title: '开关按钮样式',
    titleX: 825,
    titleY: 1546,
    circleX: 803,
    circleY: 1562,
    image: 'pencil/xingji-aodaisai/switch-buttons-updated-transparent.png',
    imageAlt: '开关按钮样式',
    imageX: 790,
    imageY: 1605,
    imageWidth: 178,
    imageHeight: 219,
    notesX: 991,
    noteYs: [1615, 1673, 1731, 1789],
    notes: ['只能选择一个选项', '只能选择多个选项', '点赞', '功能开关'],
  },
];

const buttonLegend: readonly LegendRow[] = [
  { y: 2169, label: '常规', color: '#53AFE6' },
  { y: 2245, label: '推荐', color: '#3FD45A' },
  { y: 2321, label: '警告', color: '#DC4B56' },
  { y: 2397, label: '领取', color: '#F29E45' },
  { y: 2473, label: '支付', color: '#FFCC29' },
  { y: 2549, label: '禁用', color: '#8D8D8D' },
];

const qualityLegend: readonly LegendRow[] = [
  { y: 2169, label: '普通', color: '#D9E1FF' },
  { y: 2245, label: '优质', color: '#A8F000' },
  { y: 2321, label: '精良', color: '#2EBEFF' },
  { y: 2397, label: '史诗', color: '#CC31F5' },
  { y: 2473, label: '传说', color: '#F7A600' },
  { y: 2549, label: '神话', color: '#FF4848' },
];

const typographyLegend: readonly TextSpec[] = [
  { y: 2169, label: '标题1', size: 46, weight: 900 },
  { y: 2243, label: '标题2', size: 36, weight: 700 },
  { y: 2305, label: '标题3', size: 30, weight: 900 },
  { y: 2360, label: '正文1', size: 26, weight: 600 },
  { y: 2410, label: '正文2', size: 24, weight: 600 },
  { y: 2458, label: '正文3', size: 22, weight: 600 },
  { y: 2504, label: '按钮/标签1', size: 40, weight: 900 },
  { y: 2571, label: '按钮/标签2', size: 30, weight: 900 },
];

function Marker({ x, y, n }: { x: number; y: number; n: string }) {
  return (
    <>
      <circle cx={x} cy={y} r={13} fill={MARKER_FILL} />
      <text
        x={x}
        y={y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={MARKER_TEXT}
        fontSize={20}
        fontWeight={700}
        fontFamily={FONT_STACK}
      >
        {n}
      </text>
    </>
  );
}

function StrokeText({
  x,
  y,
  children,
  size,
  weight,
  fill = BODY_TEXT,
  anchor = 'start',
}: {
  x: number;
  y: number;
  children: string;
  size: number;
  weight: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      fontFamily={FONT_STACK}
      textAnchor={anchor}
      dominantBaseline="hanging"
      stroke={SHADOW_STROKE}
      strokeWidth={2}
      paintOrder="stroke"
      letterSpacing={0.2}
    >
      {children}
    </text>
  );
}

function LegendTitle({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill={LABEL_COLOR}
      fontSize={32}
      fontWeight={700}
      fontFamily={FONT_STACK}
      dominantBaseline="hanging"
    >
      {text}
    </text>
  );
}

export function StructureLayerButtonShowcase() {
  return (
    <figure className="project-detail-inner-card mx-auto w-full max-w-[1360px] overflow-hidden rounded-[24px] border border-neon-cyan/25 bg-[#0b1320]/55 2xl:max-w-[1480px]">
      <svg
        viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
        className="block h-auto w-full"
        role="img"
        aria-label="基础控件 Figma 1比1 版式还原"
      >
        <rect width={BOARD_WIDTH} height={BOARD_HEIGHT} fill="#0b1320" fillOpacity={0.55} />

        <text
          x={640}
          y={103}
          fill={LABEL_COLOR}
          fontSize={64}
          fontWeight={700}
          fontFamily={FONT_STACK}
          textAnchor="middle"
          dominantBaseline="hanging"
        >
          基础控件
        </text>

        <image
          href={publicUrl('pencil/xingji-aodaisai/basic-controls-panel.png')}
          x={498}
          y={235}
          width={300}
          height={650}
          preserveAspectRatio="none"
        />
        <rect x={488} y={225} width={320} height={670} rx="12" fill="none" stroke="rgba(135,200,188,0.35)" />

        {topLabels.map((item) => (
          <g key={`${item.n}-${item.label}`}>
            <rect x={item.lineX} y={item.lineY} width={item.lineWidth} height={2} fill={LABEL_COLOR} />
            <StrokeText
              x={item.textX}
              y={item.textY}
              size={28}
              weight={700}
              fill={LABEL_COLOR}
              anchor={item.align}
            >
              {item.label}
            </StrokeText>
            <Marker x={item.circleX} y={item.circleY} n={item.n} />
          </g>
        ))}

        {sections.map((section) => (
          <g key={`${section.n}-${section.title}`}>
            <Marker x={section.circleX} y={section.circleY} n={section.n} />
            <text
              x={section.titleX}
              y={section.titleY}
              fill={LABEL_COLOR}
              fontSize={32}
              fontWeight={700}
              fontFamily={FONT_STACK}
              dominantBaseline="hanging"
            >
              {section.title}
            </text>

            <image
              href={publicUrl(section.image)}
              x={section.imageX}
              y={section.imageY}
              width={section.imageWidth}
              height={section.imageHeight}
              preserveAspectRatio="none"
            />

            {section.notes.map((note, idx) => (
              <StrokeText
                key={`${section.title}-${note}`}
                x={section.notesX}
                y={section.noteYs[idx] ?? section.noteYs[0]}
                size={28}
                weight={600}
              >
                {note}
              </StrokeText>
            ))}
          </g>
        ))}

        <LegendTitle x={133} y={2095} text="按钮颜色说明" />
        {buttonLegend.map((item) => (
          <g key={`button-${item.label}`}>
            <rect
              x={133}
              y={item.y}
              width={60}
              height={60}
              rx={10}
              fill={item.color}
              stroke="rgba(0,0,0,0.75)"
              strokeWidth={3}
            />
            <text
              x={210}
              y={item.y + 18}
              fill={BODY_TEXT}
              fontSize={24}
              fontWeight={600}
              fontFamily={FONT_STACK}
              dominantBaseline="hanging"
              stroke={SHADOW_STROKE}
              strokeWidth={2}
              paintOrder="stroke"
            >
              {item.label}
            </text>
          </g>
        ))}

        <LegendTitle x={494} y={2095} text="文本字号说明" />
        {typographyLegend.map((item) => (
          <g key={`type-${item.label}`}>
            <text
              x={552}
              y={item.y}
              fill={BODY_TEXT}
              fontSize={item.size}
              fontWeight={item.weight}
              fontFamily={FONT_STACK}
              textAnchor="end"
              dominantBaseline="hanging"
              stroke={SHADOW_STROKE}
              strokeWidth={2}
              paintOrder="stroke"
            >
              {item.size}
            </text>
            <text
              x={592}
              y={item.y}
              fill={BODY_TEXT}
              fontSize={item.size}
              fontWeight={item.weight}
              fontFamily={FONT_STACK}
              dominantBaseline="hanging"
              stroke={SHADOW_STROKE}
              strokeWidth={2}
              paintOrder="stroke"
            >
              {item.label}
            </text>
          </g>
        ))}

        <LegendTitle x={921} y={2095} text="颜色品质说明" />
        {qualityLegend.map((item) => (
          <g key={`quality-${item.label}`}>
            <rect
              x={921}
              y={item.y}
              width={60}
              height={60}
              rx={10}
              fill={item.color}
              stroke="rgba(0,0,0,0.75)"
              strokeWidth={3}
            />
            <text
              x={998}
              y={item.y + 18}
              fill={BODY_TEXT}
              fontSize={24}
              fontWeight={600}
              fontFamily={FONT_STACK}
              dominantBaseline="hanging"
              stroke={SHADOW_STROKE}
              strokeWidth={2}
              paintOrder="stroke"
            >
              {item.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">基础控件 Figma 设计稿 1 比 1 布局还原。</figcaption>
    </figure>
  );
}
