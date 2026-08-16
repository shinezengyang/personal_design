import type { CSSProperties } from 'react';
import { publicUrl } from '../lib/publicUrl';
import './QingyuPartnerExactCase.css';

/* 伙伴系统 · 交互设计作品集 — rebuilt in code from Figma 10327:1994.
   The frame is 1440 x 39115 and highly componentised: 12 uniform 260px 章节封面,
   83 流程胶囊, 11 小节标题组. Those repeats are driven from data below rather than
   transcribed node by node. Coordinates are the Figma values, absolute within
   each section, so a section can be checked against its frame in isolation. */

type Accent = 'gold' | 'teal' | 'purple';

const ACCENT: Record<Accent, { base: string; dim: string; ghost: string }> = {
  gold: { base: '#e0a33e', dim: 'rgba(224,163,62,0.35)', ghost: 'rgba(224,163,62,0.12)' },
  teal: { base: '#4fb6a6', dim: 'rgba(79,182,166,0.35)', ghost: 'rgba(79,182,166,0.12)' },
  purple: { base: '#9a7bd6', dim: 'rgba(154,123,214,0.35)', ghost: 'rgba(154,123,214,0.12)' },
};

type Chapter = {
  num: string;
  label: string;
  title: string;
  desc: string[];
  aim: string;
  accent: Accent;
};

const CHAPTERS: Record<string, Chapter> = {
  overview: {
    num: '00',
    label: 'SYSTEM MAP',
    title: '系统总览 · 一个中枢，三条线',
    desc: ['伙伴主界面是唯一中枢，向下分出「养成 / 情感 / 收集」三条体验线 —— 每个子系统各归其位，玩家按动机分流。'],
    aim: '系统目的｜对伙伴主界面的易用性方面进行优化',
    accent: 'gold',
  },
  home: {
    num: '01',
    label: 'COMPANION HOME',
    title: '伙伴主界面 · 枢纽',
    desc: [
      '一切从这里开始：看板娘迎面而立，五大入口一屏尽收。',
      '优化命题 —— 让「见到伙伴」先于「使用功能」，让每个入口自己说明来意。',
    ],
    aim: '系统目的｜主界面易用性优化 · 新增看板娘设置',
    accent: 'gold',
  },
  interact: {
    num: '02',
    label: 'INTERACT',
    title: '伙伴互动 · 好感度核心循环',
    desc: [
      '新增「行动点」，把闲谈、送礼、踏青收拢为同一种可规划的日常资源；',
      '皮肤支持一天试穿 —— 付费转化的第一扇门从「先体验」打开。',
    ],
    aim: '系统目的｜互动易用性优化 · 优化踏青 · 新增好感度历程',
    accent: 'gold',
  },
  relationship: {
    num: '02',
    label: 'RELATIONSHIP',
    title: '伙伴交往 · 从数值到关系',
    desc: [
      '「想成为林婉儿的什么？」—— 蓝颜、义女、挚友、哥哥，目标由玩家自己选。',
      '默契度、攻略与助攻层层铺垫，让关系达成像一场被见证的仪式。',
    ],
    aim: '系统目的｜伙伴关系攻略与助攻的易用性提升',
    accent: 'gold',
  },
  travel: {
    num: '03',
    label: 'TRAVEL',
    title: '伙伴同游 · 结伴而行的故事',
    desc: [
      '卡片墙上，每位伙伴都有自己的同游点；章节故事随好感度逐级解锁，',
      '所有人的同游点又汇入一条 60000 点的全局里程碑长河。',
    ],
    aim: '系统目的｜对伙伴同游系统功能增加细节',
    accent: 'gold',
  },
  draw: {
    num: '04',
    label: 'DRAW CARD',
    title: '伙伴拜访 · 一期一会的仪式',
    desc: [
      '圆窗庭院里，影视人气角色迎面而立。保底写在明处、重复当场转化 ——',
      '抽卡的期待与安全感被同时照顾。',
    ],
    aim: '系统目的｜对伙伴拜访系统功能增加细节',
    accent: 'gold',
  },
  cultivate: {
    num: '05',
    label: 'DEPLOY',
    title: '伙伴培养 · 成长主线',
    desc: [
      '上阵 — 升级 — 升星 — 技能 — 秘籍，一条线打通；',
      '红点只发给上阵伙伴 —— 把玩家的注意力留给正在使用的角色。',
    ],
    aim: '系统目的｜伙伴升级易用性优化 · 优化上阵界面',
    accent: 'teal',
  },
  star: {
    num: '06',
    label: 'STAR',
    title: '宗师星阵 · 让每次升星都有回响',
    desc: [
      '全新系统：付费深度聚焦四位红品宗师；同时回答一个长期痛点 ——',
      '非上阵伙伴升星无收益。任何一次升星，都会化作星阵的经验与粒子。',
    ],
    aim: '系统目的｜突出四个红色品质宗师的付费深度 · 解决非上阵伙伴升星无收益',
    accent: 'teal',
  },
  dispatch: {
    num: '07',
    label: 'DISPATCH',
    title: '伙伴派遣 · 离线也在产出',
    desc: [
      '让闲置伙伴去跑腿：品质分色的任务列表、智能匹配与额外奖励成功率 ——',
      '「设定即收益」的异步玩法，把下线时间也纳入循环。',
    ],
    aim: '系统目的｜增加伙伴产出资源的挂机玩法',
    accent: 'teal',
  },
  shop: {
    num: '08',
    label: 'SHOP',
    title: '伙伴商店 · 经济闭环的终点',
    desc: [
      '碎片与秘籍的定向兑换：限购、每日刷新、背包与批量分解 ——',
      '所有系统溢出的资源，最终都能在这里换成确定的进度。',
    ],
    aim: '系统目的｜完善伙伴商店的兑换与分解闭环',
    accent: 'teal',
  },
  memory: {
    num: '09',
    label: 'MEMORY',
    title: '伙伴回忆 · 收集系统的重构',
    desc: [
      '原稿命题：区分「养成」与「收集」，把私语、书信、传记、信物、插画',
      '整合进同一座回忆馆 —— 学一次交互，逛五个展厅。',
    ],
    aim: '系统目的｜区分养成与收集 · 整合收集类功能（新增五个界面）',
    accent: 'purple',
  },
  scroll: {
    num: '10',
    label: 'SCROLL',
    title: '余年绘卷 · 图鉴即成长',
    desc: [
      '谋士、权贵、侠客、红颜 —— 原著人物在一幅横向长卷上徐徐展开。',
      '新增收集计数与分段奖励，图鉴从陈列册变成有回报的收集目标。',
    ],
    aim: '系统目的｜对伙伴绘卷系统功能增加细节',
    accent: 'purple',
  },
};

function ChapterCover({ chapter }: { chapter: Chapter }) {
  const accent = ACCENT[chapter.accent];
  return (
    <section
      className="pt-chapter"
      style={
        {
          '--pt-accent': accent.base,
          '--pt-accent-dim': accent.dim,
          '--pt-accent-ghost': accent.ghost,
        } as CSSProperties
      }
    >
      <div className="pt-chapter-rule" data-qy-static />
      <p className="pt-abs pt-chapter-num">{chapter.num}</p>
      <p className="pt-abs pt-chapter-label">{chapter.label}</p>
      <p className="pt-abs pt-chapter-title">{chapter.title}</p>
      <div className="pt-abs pt-chapter-desc">
        {chapter.desc.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="pt-abs pt-chapter-aim">{chapter.aim}</p>
    </section>
  );
}

/* ---------- S00 封面 ---------- */

const DUST = [
  { x: 150, y: 180, r: 2, o: 0.5 },
  { x: 210, y: 240, r: 3.5, o: 0.7 },
  { x: 290, y: 210, r: 5, o: 0.85 },
  { x: 360, y: 300, r: 2, o: 0.5 },
  { x: 430, y: 260, r: 3.5, o: 0.7 },
  { x: 520, y: 340, r: 5, o: 0.85 },
  { x: 600, y: 310, r: 2, o: 0.5 },
  { x: 690, y: 390, r: 3.5, o: 0.7 },
];

function CoverSection() {
  return (
    <section style={{ height: 900 }}>
      {/* Concentric orbits standing in for the three experience lines: each coloured
          body sits exactly on the ring whose radius matches its lane. */}
      <svg className="pt-cover-orbits" viewBox="0 0 640 640" aria-hidden="true" data-qy-static>
        <g fill="none">
          <circle cx="320" cy="320" r="320" stroke="rgba(224,163,62,0.10)" strokeWidth="1" />
          <circle
            cx="320"
            cy="320"
            r="270"
            stroke="rgba(224,163,62,0.32)"
            strokeWidth="1.5"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
          <circle cx="320" cy="320" r="235" stroke="rgba(224,163,62,0.16)" strokeWidth="1" />
          <circle cx="320" cy="320" r="150" stroke="rgba(224,163,62,0.55)" strokeWidth="1.5" />
        </g>
        <circle cx="320" cy="170" r="9" fill="#e0a33e" />
        <circle cx="555" cy="320" r="9" fill="#4fb6a6" />
        <circle cx="229" cy="539" r="9" fill="#9a7bd6" />
        <circle cx="522.5" cy="42.5" r="2.5" fill="rgba(237,239,245,0.55)" />
        <circle cx="542" cy="582" r="2" fill="rgba(237,239,245,0.4)" />
      </svg>

      {/* Matches the exported asset exactly: r=149.5, #E5484D at 0.3, 1px stroke. */}
      <svg className="pt-cover-ring-deco" viewBox="0 0 300 300" aria-hidden="true" data-qy-static>
        <circle
          cx="150"
          cy="150"
          r="149.5"
          fill="none"
          stroke="#E5484D"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      </svg>

      <svg className="pt-cover-dust" viewBox="0 0 1440 900" aria-hidden="true" data-qy-static>
        {DUST.map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill={`rgba(217,164,74,${d.o})`} />
        ))}
      </svg>

      <p className="pt-abs pt-cover-kicker">PARTNER SYSTEM · INTERACTION DESIGN CASE</p>
      <p className="pt-abs pt-cover-title">伙伴</p>
      <p className="pt-abs pt-cover-sub">伙伴系统全链路交互设计</p>
    </section>
  );
}

/* ---------- P01 系统总览 ---------- */

type Lane = {
  x: number;
  name: string;
  en: string;
  accent: Accent;
  cards: { badge: string; title: string; desc: string }[];
};

const LANES: Lane[] = [
  {
    x: 90,
    name: '养成线',
    en: 'CULTIVATE · 变强',
    accent: 'teal',
    cards: [
      { badge: '03', title: '培养 · 上阵', desc: '阵位/五行属性转化，升级升星' },
      { badge: '04', title: '宗师星阵', desc: '盘活非上阵伙伴，集齐成战力' },
      { badge: '10', title: '伙伴派遣', desc: '挂机限时任务，非上阵也产出' },
      { badge: '11', title: '伙伴商店', desc: '碎片兑换/技能书，刷新限购' },
    ],
  },
  {
    x: 520,
    name: '情感线',
    en: 'BOND · 相处',
    accent: 'gold',
    cards: [
      { badge: '02', title: '伙伴互动', desc: '行动点驱动闲谈/送礼/踏青→好感度' },
      { badge: '05', title: '伙伴交往', desc: '攻略达成关系：蓝颜/挚友/哥哥' },
      { badge: '06', title: '伙伴同游', desc: '同游点带伙伴出行，深化羁绊' },
      { badge: '07', title: '伙伴拜访', desc: '五品质卡池抽取，结识新伙伴' },
    ],
  },
  {
    x: 950,
    name: '收集线',
    en: 'COLLECT · 回味',
    accent: 'purple',
    cards: [
      { badge: '08', title: '伙伴回忆', desc: '整合 私语/书信/传记/信物' },
      { badge: '09', title: '余年绘卷', desc: '集齐伙伴里程碑奖励' },
    ],
  },
];

const CARD_TOPS = [292, 390, 488, 586];

const LOOPS: { top: number; name: string; color: string; steps: string[] }[] = [
  {
    top: 758,
    name: '情感循环',
    color: '#e5484d',
    steps: ['行动点', '闲谈 / 送礼 / 踏青', '好感度 ↑', '解锁私语·书信·皮肤', '更深互动'],
  },
  {
    top: 834,
    name: '关系循环',
    color: '#d9a44a',
    steps: ['攻略事件', '默契度 ↑', '激活重要事件', '关系达成', '换个关系'],
  },
  {
    top: 910,
    name: '成长循环',
    color: '#4cc2ff',
    steps: ['拜访抽卡', '碎片 / 伙伴', '上阵·升级·升星', '星阵经验 ↑', '结识红品宗师'],
  },
  {
    top: 986,
    name: '产出循环',
    color: '#6bc78c',
    steps: ['派遣任务', '奖励道具', '商店兑换', '培养资源回流'],
  },
];

function SystemMapSection() {
  return (
    <section className="pt-map">
      <div className="pt-abs pt-map-hub" data-qy-static />
      <p className="pt-abs pt-map-hub-text">伙伴主界面</p>
      <p className="pt-abs pt-map-hub-note">看板娘中枢</p>
      <div className="pt-abs pt-map-stem" data-qy-static />
      <div className="pt-abs pt-map-bus" data-qy-static />

      {LANES.map((lane) => {
        const accent = ACCENT[lane.accent];
        const vars = {
          '--pt-lane': accent.base,
          '--pt-lane-wash': accent.ghost.replace('0.12', '0.14'),
          '--pt-lane-edge': accent.dim.replace('0.35', '0.25'),
        } as CSSProperties;
        return (
          <div className="pt-abs" key={lane.name} style={{ left: 0, top: 0, ...vars }}>
            <div className="pt-abs pt-map-drop" style={{ left: lane.x + 179 }} />
            <div className="pt-abs pt-map-node" style={{ left: lane.x + 175 }} />
            <div className="pt-abs pt-map-lane" style={{ left: lane.x }} />
            <p className="pt-abs pt-map-lane-name" style={{ left: lane.x + 20 }}>
              {lane.name}
            </p>
            <p className="pt-abs pt-map-lane-en" style={{ left: lane.x + 118 }}>
              {lane.en}
            </p>
            {lane.cards.map((card, i) => {
              const top = CARD_TOPS[i];
              return (
                <div key={card.title}>
                  <div className="pt-abs pt-map-card" style={{ left: lane.x, top }} />
                  <div
                    className="pt-abs pt-map-card-badge"
                    style={{ left: lane.x + 18, top: top + 22 }}
                  >
                    {card.badge}
                  </div>
                  <p className="pt-abs pt-map-card-title" style={{ left: lane.x + 74, top: top + 16 }}>
                    {card.title}
                  </p>
                  <p className="pt-abs pt-map-card-desc" style={{ left: lane.x + 74, top: top + 46 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}

      {LOOPS.map((loop) => (
        <div
          className="pt-loop"
          key={loop.name}
          style={{ top: loop.top, '--pt-loop-color': loop.color } as CSSProperties}
        >
          <div className="pt-loop-tag">
            <span>{loop.name}</span>
          </div>
          {loop.steps.map((step, i) => (
            <div key={step} style={{ display: 'contents' }}>
              {i > 0 && <p className="pt-arrow">→</p>}
              <div className="pt-pill">{step}</div>
            </div>
          ))}
          <p className="pt-loop-back">↺</p>
        </div>
      ))}

      <p className="pt-abs pt-map-caption">四条体验闭环 —— 资源在系统间循环，玩家始终有下一步</p>
    </section>
  );
}

/* ---------- shared content primitives ----------
   The 13 content frames are assembled almost entirely from these: 61 截图卡,
   15 注释列表, 11 小节标题组, 7 心流曲线. */

/* `mark` is the chapter's marker gold. The frame uses two near-identical values
   (#e0a33e and #d9a44a) for pins, note badges and this label; carrying it as a
   variable keeps each section faithful without duplicating the primitives. */
function SectionTitle({
  x,
  y,
  zh,
  en,
  mark,
}: {
  x: number;
  y: number;
  zh: string;
  en: string;
  mark?: string;
}) {
  return (
    <div className="pt-sec-title" style={{ left: x, top: y, '--pt-mark': mark } as CSSProperties}>
      <b>{zh}</b>
      <i>{en}</i>
    </div>
  );
}

type Pin = { n: number; x: number; y: number };

function Shot({
  x,
  y,
  w,
  h,
  src,
  cap,
  pins = [],
  edge,
  mark,
  lifted,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  src: string;
  cap: string;
  pins?: Pin[];
  edge?: string;
  mark?: string;
  /* Some chapters lift their lead screenshot off the page the way the hero does. */
  lifted?: boolean;
}) {
  return (
    <div className="pt-shot" style={{ left: x, top: y, '--pt-mark': mark } as CSSProperties}>
      <div
        className="pt-shot-frame"
        style={{
          width: w,
          height: h,
          borderColor: edge,
          borderWidth: lifted ? 1.5 : undefined,
          boxShadow: lifted ? '0 14px 40px -8px rgba(0,0,0,0.5)' : undefined,
        }}
      >
        <img src={publicUrl(src)} alt={cap.replace(/^△\s*/, '')} loading="lazy" decoding="async" />
        {pins.map((p) => (
          <div className="pt-pin" key={p.n} style={{ left: p.x, top: p.y }}>
            {p.n}
          </div>
        ))}
      </div>
      <p className="pt-shot-cap">{cap}</p>
    </div>
  );
}

function Notes({
  x,
  y,
  items,
  mark,
  wrap,
  width,
}: {
  x: number;
  y: number;
  items: string[][];
  mark?: string;
  /* S12 runs its annotations as a wrapping row under a screenshot pair rather than
     as a column beside a single one. */
  wrap?: boolean;
  width?: number;
}) {
  return (
    <div
      className={`pt-notes${wrap ? ' is-wrap' : ''}`}
      style={{ left: x, top: y, width, '--pt-mark': mark } as CSSProperties}
    >
      {items.map((lines, i) => (
        <div className="pt-note" key={lines[0]}>
          <div className="pt-note-badge">{i + 1}</div>
          <div className="pt-note-body">
            {lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CardRow({
  x,
  y,
  w,
  cards,
  accent = '#d9a44a',
  edge = 'rgba(217,164,74,0.4)',
}: {
  x: number;
  y: number;
  w: number;
  /* 下阵Tips in S04 colours each card by severity, so accent/edge are per-card
     overrides on top of the row default. */
  cards: { title: string; lines: string[]; accent?: string; edge?: string }[];
  accent?: string;
  edge?: string;
}) {
  return (
    <div
      className="pt-card-row"
      style={
        { left: x, top: y, width: w, '--pt-card-accent': accent, '--pt-card-edge': edge } as CSSProperties
      }
    >
      {cards.map((c) => (
        <div
          className="pt-card"
          key={c.title}
          style={{ '--pt-card-accent': c.accent, '--pt-card-edge': c.edge } as CSSProperties}
        >
          <h4>{c.title}</h4>
          <div className="pt-card-body">
            {c.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Defaults to the blue 场景卡; S11's 兜底规则卡 is the same object stretched to the
   content width and recoloured gold. */
function SceneCard({
  x,
  y,
  title,
  lines,
  w,
  accent,
  edge,
  lh,
  wrap,
}: {
  x: number;
  y: number;
  title: string;
  lines: string[];
  w?: number;
  accent?: string;
  edge?: string;
  lh?: number;
  /* Wide cards carry paragraphs longer than the card; Figma wraps them (min-content),
     so nowrap would push the text straight out of the plate. */
  wrap?: boolean;
}) {
  return (
    <div
      className="pt-scene"
      style={{ left: x, top: y, width: w, borderColor: edge, '--pt-card-accent': accent } as CSSProperties}
    >
      <h4 style={{ color: accent }}>{title}</h4>
      <div className="pt-card-body" style={{ lineHeight: lh, whiteSpace: wrap ? 'normal' : undefined }}>
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </div>
  );
}

/* Catmull-Rom through the plotted points, converted to cubic Beziers. The curve has
   to pass exactly through each labelled emotion dot, so it is derived from the dots
   rather than drawn freehand — which also keeps all seven curves consistent. */
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return '';
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i += 1) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d +=
      ` C${p1.x + (p2.x - p0.x) / 6},${p1.y + (p2.y - p0.y) / 6}` +
      ` ${p2.x - (p3.x - p1.x) / 6},${p2.y - (p3.y - p1.y) / 6}` +
      ` ${p2.x},${p2.y}`;
  }
  return d;
}

/* `lx`/`ly` override where the label sits. S02 hangs its labels to the upper right of
   the dot; S06 sets them upper *left* so they clear the rising curve. */
type Dot = { x: number; y: number; label?: string; lx?: number; ly?: number };

function FlowCurve({
  x,
  y,
  w = 800,
  h = 320,
  axis,
  curve,
  dots,
  steps,
  stepsY,
  stepsSize = 16,
  yLabel,
  caption,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  axis: { top: number; height: number; baseTop: number; baseWidth: number };
  /* Explicit spine. S02 rises monotonically to each dot; S03 oscillates, so the
     troughs between peaks are real points that no dot marks. */
  curve: { x: number; y: number }[];
  dots: Dot[];
  steps: { x: number; label: string }[];
  stepsY: number;
  stepsSize?: number;
  yLabel?: string;
  caption?: { x: number; y: number; text: string; color?: string };
}) {
  return (
    <div className="pt-flow-curve" style={{ left: x, top: y, width: w, height: h }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <rect x="40" y={axis.top} width="2" height={axis.height} fill="#525c73" />
        <rect x="40" y={axis.baseTop} width={axis.baseWidth} height="2" fill="#525c73" />
        <path
          d={smoothPath(curve)}
          fill="none"
          stroke="#e5484d"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {dots.map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x + 5} cy={d.y + 5} r="5" fill="#d9a44a" />
        ))}
      </svg>
      {yLabel && (
        <p className="pt-flow-note" style={{ left: 10, top: 6, fontSize: 14 }}>
          {yLabel}
        </p>
      )}
      {steps.map((s) => (
        <p
          className="pt-flow-note"
          key={s.label}
          style={{ left: s.x, top: stepsY, fontWeight: 500, fontSize: stepsSize }}
        >
          {s.label}
        </p>
      ))}
      {dots
        .filter((d) => d.label)
        .map((d) => (
          <p
            className="pt-flow-note"
            key={d.label}
            style={{
              left: d.lx ?? d.x + 13,
              top: d.ly ?? d.y - 17,
              fontSize: 14,
              fontWeight: 700,
              color: '#d9a44a',
            }}
          >
            {d.label}
          </p>
        ))}
      {caption && (
        <p
          className="pt-flow-note"
          style={{
            left: caption.x,
            top: caption.y,
            fontWeight: 500,
            color: caption.color ?? '#d9a44a',
          }}
        >
          {caption.text}
        </p>
      )}
    </div>
  );
}

/* ---------- S02_01 主界面 ---------- */

const S02_NOTES: string[][] = [
  ['看板娘会说话：台词气泡追随立绘', '锚点，功能菜单被「人格化」'],
  ['总好感度可点击，查看全局属性', '加成 —— 数值出口前置'],
  ['「今日总踏青次数：8」等资源数', '内嵌卡片，不进子界面即可决策'],
  ['红点逐入口配置：有新别传 / 可达', '成关系 / 可领奖励时才亮'],
  ['抽卡入口以伙伴群像剪影导视，', '占据整行 —— 商业权重可视化'],
  ['十二明星·回忆·绘卷·商店沉底，', '低频收集与高频养成分层'],
];

const S02_PINS: Pin[] = [
  { n: 1, x: 76, y: 134 },
  { n: 2, x: 352, y: 87 },
  { n: 3, x: 573, y: 164 },
  { n: 4, x: 568, y: 49 },
  { n: 5, x: 811, y: 337 },
  { n: 6, x: 576.53, y: 475.47 },
];

function HomeSection() {
  return (
    <section style={{ height: 2560 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" />

      <Shot
        x={96}
        y={190}
        w={980}
        h={551}
        src="/assets/qingyu-partner/partner-s02-main.webp"
        cap="△ 伙伴主界面 —— 左看板娘 · 右五宫格 · 底部收集扩展坞"
        pins={S02_PINS}
      />
      <Notes x={1112} y={210} items={S02_NOTES} />

      <CardRow
        x={96}
        y={840}
        w={1248}
        cards={[
          {
            title: '「 菲茨定律 」',
            lines: [
              '入口卡片的尺寸与距离按使用频率与商业',
              '权重分配 —— 高价值目标更大、更近、',
              '更易命中。',
            ],
          },
          {
            title: '「 状态可见性 · 尼尔森第一原则 」',
            lines: [
              '踏青/攻略余量、当前章节、红点全部前',
              '置到入口上 —— 玩家在枢纽即可掌握全',
              '局状态。',
            ],
          },
          {
            title: '「 亲密性分组 · 格式塔 」',
            lines: [
              '养成五宫格居中、收集扩展坞沉底 ——',
              '功能按「高频养成 / 低频收集」亲疏分',
              '区，动线一目了然。',
            ],
          },
        ]}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 1120 }}>
        看板娘：可更换、可调整 —— 把「陪伴对象」交还给玩家
      </p>
      <Shot
        x={96}
        y={1180}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s02-swap.webp"
        cap="△ 更换伙伴界面 —— 宫格选择 + 解锁条件前置展示"
      />
      <Shot
        x={744}
        y={1180}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s02-adjust.webp"
        cap="△ 看板娘调整界面 —— 大小滑块 X0.5~X1.5 + 拖拽站位"
      />
      <div className="pt-gloss" style={{ left: 96, top: 1560, width: 600 }}>
        <p>不可用项不隐藏：未解锁的伙伴以置灰态陈列，并直接写明解锁条件(如「好感度6级</p>
        <p>解锁」)—— 识别优于回忆，同时把解锁条件变成一份可浏览的目标清单。</p>
      </div>
      <p className="pt-gloss" style={{ left: 744, top: 1560, width: 600, whiteSpace: 'normal' }}>
        大小滑块 X0.5~X1.5 / 拖拽站位 / 一键还原默认 ——「用户控制与自由」(尼尔森原则):装饰层面完全交给玩家，且任何调整都可退出、可还原，无不可逆操作。
      </p>

      <p className="pt-abs pt-head" style={{ left: 96, top: 1780 }}>
        关键流程 —— 更换看板娘（防错闭环：报错必给出口）
      </p>
      <div className="pt-flow" style={{ left: 96, top: 1840, width: 1248, height: 220 }}>
        <div className="pt-pill" style={{ left: 57, top: 30 }}>
          伙伴主界面
        </div>
        <p className="pt-flow-arrow" style={{ left: 198, top: 40 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 219, top: 30 }}>
          更换伙伴界面
        </div>
        <p className="pt-flow-arrow" style={{ left: 378, top: 40 }}>
          →
        </p>
        <div className="pt-diamond" style={{ left: 409.26, top: 19.26 }} />
        <div className="pt-diamond-label" style={{ left: 441, top: 34, transform: 'translateX(-50%)' }}>
          <p>是否满足</p>
          <p>解锁条件?</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 490, top: 40, color: '#4cc2ff' }}>
          是 →
        </p>
        <div className="pt-pill" style={{ left: 534, top: 30 }}>
          确认更换
        </div>
        <p className="pt-flow-arrow" style={{ left: 657, top: 40 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 678, top: 18 }}>
          <p>看板娘调整</p>
          <p>大小 / 站位</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 819, top: 40 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 840, top: 30 }}>
          确定生效
        </div>
        <p className="pt-flow-arrow" style={{ left: 969, top: 40 }}>
          ↺ 随时退出调整 / 还原默认
        </p>
        <p className="pt-flow-arrow" style={{ left: 411, top: 97, color: '#e5484d' }}>
          否 ↓
        </p>
        <div className="pt-pill" style={{ left: 415, top: 127, borderColor: '#e5484d' }}>
          弹窗 Tips：需要好感度达到 4 级，是否前往？
        </div>
        <p className="pt-flow-arrow" style={{ left: 837, top: 140, color: '#e5484d' }}>
          前往 →
        </p>
        <div className="pt-pill" style={{ left: 904, top: 127, borderColor: '#e5484d' }}>
          跳转至能解锁该条件的界面
        </div>
        <p className="pt-flow-note" style={{ left: 415, top: 196 }}>
          不满足条件不是死路：弹窗给出确切数值缺口 + 一键跳转补足路径，错误信息本身成为导航。
        </p>
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2110 }}>
        玩家心流历程 —— 每日进入伙伴系统的 10 秒仪式
      </p>
      <FlowCurve
        x={96}
        y={2150}
        w={800}
        h={320}
        axis={{ top: 30, height: 220, baseTop: 248, baseWidth: 720 }}
        curve={[
          { x: 42, y: 215 },
          { x: 260, y: 170 },
          { x: 470, y: 100 },
          { x: 700, y: 60 },
        ]}
        dots={[
          { x: 255, y: 165, label: '愉悦' },
          { x: 465, y: 95, label: '好奇' },
          { x: 695, y: 55, label: '投入' },
        ]}
        stepsY={266}
        yLabel="情绪唤醒度"
        steps={[
          { x: 55, label: '进入' },
          { x: 200, label: '看板娘台词' },
          { x: 380, label: '红点牵引' },
          { x: 520, label: '浏览入口' },
          { x: 650, label: '进入子系统' },
        ]}
      />
      <SceneCard
        x={960}
        y={2170}
        title="使用场景印证"
        lines={[
          '每日登录后的第一站：看一眼看板娘、',
          '听一句台词、扫一遍红点 —— 10 秒内',
          '完成「见面仪式」，再决定去哪个子系',
          '统。主界面不承载操作，只负责让玩家',
          '「想留下来」。',
        ]}
      />
    </section>
  );
}

/* ---------- S03_02 互动 ---------- */

const S03_NOTES: string[][] = [
  ['总好感度 12056/12200：', '全伙伴情感资产的总账'],
  ['新增「行动点 20/80」：', '统一的互动货币，可规划'],
  ['名帖人设卡：身份/性格/', '爱好/信条/关系，一屏读懂'],
  ['右缘六页签：名帖·送礼·', '闲谈·踏青·别传·皮肤'],
  ['「可在交往界面达成关系」', '—— 跨系统的软引导入口'],
  ['提升好感度主按钮：', '左下常驻，动线终点，', '好感度升级后弹出'],
];

const S03_PINS: Pin[] = [
  { n: 1, x: 45, y: 57 },
  { n: 2, x: 379, y: 11 },
  { n: 3, x: 545, y: 93 },
  { n: 4, x: 808, y: 180 },
  { n: 5, x: 405, y: 339 },
  { n: 6, x: 10, y: 313 },
];

const S03_RULES: { text: string; color?: string }[] = [
  { text: '上限 80', color: '#d9a44a' },
  { text: '闲谈 −20' },
  { text: '踏青 −15~20' },
  { text: '送礼 ×N 可叠加' },
  { text: '道具恢复 +10', color: '#4cc2ff' },
  { text: '不足 0 → 按钮置灰', color: '#e5484d' },
];

const S03_FUNNEL: { title: string; desc: string; accent: string; edge: string }[] = [
  {
    title: '① 浏览皮肤卡牌',
    desc: '特性≤3 · 收集属性写明 · 立绘随选中实时切换',
    accent: '#edeff5',
    edge: 'rgba(237,239,245,0.5)',
  },
  {
    title: '② 免费试穿 1 天',
    desc: '低门槛道具即可体验，立绘+出战模型全套生效',
    accent: '#4cc2ff',
    edge: 'rgba(76,194,255,0.5)',
  },
  {
    title: '③ 拥有感建立',
    desc: '倒计时标签「可试穿23小时」持续提醒即将失去',
    accent: '#d9a44a',
    edge: 'rgba(217,164,74,0.5)',
  },
  {
    title: '④ 解锁穿戴',
    desc: '试穿结束属性消失 —— 损失厌恶推动付费闭环',
    accent: '#e5484d',
    edge: 'rgba(229,72,77,0.5)',
  },
];

const S03_SHOTS: { x: number; y: number; src: string; cap: string }[] = [
  { x: 96, y: 1080, src: 'partner-s03-chat', cap: '△ 闲谈 —— 每次消耗行动点 20' },
  { x: 522, y: 1080, src: 'partner-s03-chat-options', cap: '△ 闲谈 —— 玩家回答选项' },
  { x: 948, y: 1080, src: 'partner-s03-chat-dialog', cap: '△ 闲谈 —— NPC对话框(白底)、玩家对话框(绿底)' },
  { x: 96, y: 1364, src: 'partner-s03-outing', cap: '△ 踏青 —— 温泉 / 烟花 / 西湖 · 消耗 15~20' },
  { x: 522, y: 1364, src: 'partner-s03-journey', cap: '△ 历程 —— 每次消耗行动点 20' },
  { x: 948, y: 1364, src: 'partner-s03-restore', cap: '△ 恢复行动点 —— 道具预览式补给' },
];

function InteractSection() {
  return (
    <section style={{ height: 2997 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" />
      <Notes x={96} y={205} items={S03_NOTES} />
      <img
        className="pt-plate"
        src={publicUrl('/assets/qingyu-partner/partner-s03-badge.webp')}
        alt=""
        aria-hidden="true"
        style={{ left: 130, top: 619, width: 278, height: 77 }}
      />

      <Shot
        x={444}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s03-main.webp"
        cap="△ 伙伴互动界面 —— 名帖人设卡 + 右缘六页签 + 行动点资源栏"
        pins={S03_PINS}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 810 }}>
        「行动点」经济 —— 用一种货币简化所有互动决策
      </p>
      <div className="pt-rule-row" style={{ left: 96, top: 870, width: 1248 }}>
        {S03_RULES.map((r) => (
          <div className="pt-pill" key={r.text} style={{ color: r.color }}>
            {r.text}
          </div>
        ))}
      </div>
      <div className="pt-flow-note" style={{ left: 96, top: 940, width: 1248, whiteSpace: 'normal', lineHeight: 1.75 }}>
        <p>席克定律：三种互动原本各有各的次数限制，决策维度多而混乱；统一为行动点后，玩家只需回答一个问题 ——「今天的 80 点花给谁、花在哪」。</p>
        <p>防错细节：行动点为 0 时按钮置灰且点击弹 Toast「请增加行动点」；恢复界面默认选中第一个道具并实时预览「18(+10)/100」—— 先看清，再消费。</p>
      </div>

      {S03_SHOTS.map((s) => (
        <Shot
          key={s.src}
          x={s.x}
          y={s.y}
          w={396}
          h={223}
          src={`/assets/qingyu-partner/${s.src}.webp`}
          cap={s.cap}
        />
      ))}

      <p className="pt-abs pt-head" style={{ left: 96, top: 1712 }}>
        皮肤试穿 —— 一条「先拥有，后付费」的转化漏斗（待开发）
      </p>
      <Shot
        x={96}
        y={1762}
        w={600}
        h={338}
        src="/assets/qingyu-partner/partner-s03-skin.webp"
        cap="△ 伙伴皮肤界面 —— 卡牌滑选 · 特性 ≤3 · 收集属性永久加成"
        edge="rgba(224,163,62,0.25)"
      />
      <div className="pt-funnel" style={{ left: 744, top: 1772 }}>
        {S03_FUNNEL.map((f) => (
          <div
            className="pt-funnel-step"
            key={f.title}
            style={{ '--pt-step-accent': f.accent, '--pt-step-edge': f.edge } as CSSProperties}
          >
            <b>{f.title}</b>
            <span>{f.desc}</span>
          </div>
        ))}
      </div>
      <div className="pt-flow-note" style={{ left: 96, top: 2152, lineHeight: 1.7 }}>
        <p>禀赋效应：人会高估「已经拥有」之物的价值。先给一整天完整体验（连出战模型都换），再用倒计时收回 ——</p>
        <p>付费不再是「买新东西」，而是「留住已有的」。看板娘立绘独立于皮肤替换，保证情感锚点不因试穿结束而闪变。</p>
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2284 }}>
        关键流程 —— 一次互动的资源判定
      </p>
      {/* Children's y values come from the Figma render, not get_design_context — the
          latter reports this frame's contents 14px higher than they actually sit. */}
      <div className="pt-flow" style={{ left: 96, top: 2361, width: 1248, height: 190 }}>
        <div className="pt-pill" style={{ left: 77, top: 13 }}>
          <p>选择互动</p>
          <p>闲谈 / 送礼 / 踏青</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 274, top: 33 }}>
          →
        </p>
        <div className="pt-diamond" style={{ left: 316.84, top: 12.84, width: 62, height: 62 }} />
        <div className="pt-diamond-label" style={{ left: 348, top: 29, transform: 'translateX(-50%)' }}>
          <p>行动点</p>
          <p>足够？</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 404, top: 33, color: '#4cc2ff' }}>
          是 →
        </p>
        <div className="pt-pill" style={{ left: 456, top: 13 }}>
          <p>消耗行动点</p>
          <p>执行互动</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 604, top: 33 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 636, top: 23 }}>
          好感度 +55/+110
        </div>
        <p className="pt-flow-arrow" style={{ left: 832, top: 33 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 864, top: 23 }}>
          解锁台词 / 私语 / 关系条件
        </div>
        <p className="pt-flow-arrow" style={{ left: 334, top: 89, color: '#e5484d' }}>
          否 ↓
        </p>
        <div className="pt-pill" style={{ left: 264, top: 123, borderColor: '#e5484d' }}>
          Toast「行动点不足」
        </div>
        <p className="pt-flow-arrow" style={{ left: 504, top: 133, color: '#e5484d' }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 536, top: 123, borderColor: '#4cc2ff' }}>
          恢复行动点界面：道具 +10 · 预览 18(+10)/100
        </div>
        <p className="pt-flow-arrow" style={{ left: 990, top: 133 }}>
          ↺ 回到互动
        </p>
      </div>
      <p className="pt-flow-note" style={{ left: 367, top: 2534 }}>
        规则约束：每日仅首次闲谈提升好感度 —— 防沉迷式的节流阀，保证循环「日日有份、日日有度」。
      </p>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2631 }}>
        玩家心流历程 —— 小挑战 · 小奖励 · 高频节拍
      </p>
      <FlowCurve
        x={96}
        y={2681}
        w={800}
        h={236}
        axis={{ top: 36, height: 150, baseTop: 186, baseWidth: 720 }}
        curve={[
          { x: 42, y: 160 },
          { x: 160, y: 114 },
          { x: 265, y: 150 },
          { x: 370, y: 94 },
          { x: 475, y: 135 },
          { x: 580, y: 78 },
          { x: 702, y: 140 },
        ]}
        dots={[
          { x: 155, y: 109 },
          { x: 365, y: 89 },
          { x: 575, y: 73 },
        ]}
        stepsY={202}
        steps={[
          { x: 140, label: '闲谈' },
          { x: 340, label: '送礼' },
          { x: 550, label: '踏青' },
        ]}
        caption={{
          x: 60,
          y: 16,
          text: '每次互动 = 一个小峰值，行动点上限决定每日峰值数量 —— 心流以「可预期的小波浪」持续，而非一次性透支',
        }}
      />
      <SceneCard
        x={960}
        y={2681}
        title="使用场景印证"
        lines={[
          '通勤、午休的 5 分钟碎片时间：',
          '花完今天的行动点、听一段新台词，',
          '即可安心退出 —— 单次会话短、',
          '情感反馈足，适配手游的碎片化',
          '使用节奏。',
        ]}
      />
    </section>
  );
}

/* ---------- S06_05 交往 ---------- */

type Callout = {
  dot: { x: number; y: number };
  line: { x: number; y: number; w: number };
  title: string;
  body: string[];
  tx: number;
  ty: number;
  align?: 'right';
};

const S06_CALLOUTS: Callout[] = [
  {
    dot: { x: 309, y: 266 },
    line: { x: 278, y: 274, w: 33 },
    title: '每日攻略次数',
    body: ['20/20 限次，把关系推进做成需要规划的日常。'],
    tx: 90,
    ty: 266,
  },
  {
    dot: { x: 334.5, y: 427.74 },
    line: { x: 246, y: 436, w: 90 },
    title: '今日事件 · 心事',
    body: ['入口红点提示新内容，给玩家每天回访的理由。'],
    tx: 90,
    ty: 425,
  },
  {
    dot: { x: 905, y: 353 },
    line: { x: 918, y: 359, w: 337 },
    title: '关系结局',
    body: ['蓝颜/挚友/哥哥/义女 —— 玩家自选要成为「谁」。'],
    tx: 1350,
    ty: 350,
    align: 'right',
  },
  {
    dot: { x: 1096, y: 589 },
    line: { x: 1109, y: 597, w: 154 },
    title: '羁绊总览',
    body: ['沉淀已达成的关系，', '把进度变成可回看纪念。'],
    tx: 1350,
    ty: 585,
    align: 'right',
  },
];

const S06_NOTES: string[][] = [
  ['「你想成为林婉儿的___」', '关系目标由玩家自己选定'],
  ['当前追求：哥哥 ——', '身份感先于数值'],
  ['激活条件三件套：默契度', '200 / 好感度9级 / 道具'],
  ['攻略 8/8：每日事件次数，', '红点提示新事件刷新'],
  ['默契度达 20 → 解锁助攻：', '其他伙伴帮你快速攻略'],
  ['关系图谱页签：全部伙伴', '关系一览（收集感）'],
];

const S06_PINS: Pin[] = [
  { n: 1, x: 542.47, y: 48.88 },
  { n: 2, x: 592, y: 110 },
  { n: 3, x: 563, y: 239 },
  { n: 4, x: 591.69, y: 380.75 },
  { n: 5, x: 549.5, y: 429.97 },
  { n: 6, x: 827, y: 92 },
];

const S06_SHOTS: { x: number; y: number; src: string; cap: string }[] = [
  { x: 96, y: 1658, src: 'partner-s06-guide', cap: '△ 攻略界面 —— 事件三选一 · 倒计时刷新' },
  { x: 522, y: 1658, src: 'partner-s06-event', cap: '△ 攻略事件 —— 说话者的立绘点亮，以及对话选项' },
  { x: 948, y: 1658, src: 'partner-s06-settle', cap: '△ 攻略结算 —— 玩家回答的选项会影响默契度提升/减少' },
  { x: 96, y: 1942, src: 'partner-s06-assist', cap: '△ 助攻界面 —— 有关系的伙伴帮你攻略' },
  { x: 522, y: 1942, src: 'partner-s06-done', cap: '△ 关系达成 —— 称号 + 奖励的庆典页（有出场动效）' },
  { x: 948, y: 1942, src: 'partner-s06-failed', cap: '△ 关系未达成 —— 遗憾提示（有出场动效）' },
];

const S06_STATES: { title: string; lines: string[]; accent: string; edge: string }[] = [
  { title: '可助攻 · 选中', lines: ['高亮描边'], accent: '#d9a44a', edge: 'rgba(217,164,74,0.5)' },
  { title: '可助攻 · 未选中', lines: ['正常头像'], accent: '#edeff5', edge: 'rgba(237,239,245,0.5)' },
  {
    title: '好感度不足 5 级',
    lines: ['置灰 + 弹窗', '→ 前往互动界面'],
    accent: '#4cc2ff',
    edge: 'rgba(76,194,255,0.5)',
  },
  {
    title: '未结识',
    lines: ['置灰 + 弹窗', '→ 前往拜访抽卡'],
    accent: '#e5484d',
    edge: 'rgba(229,72,77,0.5)',
  },
];

function RelationshipSection() {
  return (
    <section style={{ height: 3438 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" />

      <div className="pt-hero" style={{ left: 290, top: 201, width: 860 }}>
        <div className="pt-hero-frame" style={{ height: 472 }}>
          <img
            src={publicUrl('/assets/qingyu-partner/partner-s06-hero.webp')}
            alt="伙伴交往界面 · 多种关系结局"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="pt-hero-cap">▲ 伙伴交往界面 · 多种关系结局（蓝颜 / 挚友 / 哥哥 / 义女）</p>
      </div>

      {S06_CALLOUTS.map((c) => (
        <div key={c.title}>
          <div className="pt-callout-dot" style={{ left: c.dot.x, top: c.dot.y }} />
          <div className="pt-callout-line" style={{ left: c.line.x, top: c.line.y, width: c.line.w }} />
          <p
            className="pt-callout-title"
            style={{
              left: c.tx,
              top: c.ty,
              width: 190,
              textAlign: c.align,
              transform: c.align === 'right' ? 'translateX(-100%)' : undefined,
            }}
          >
            {c.title}
          </p>
          <div
            className="pt-callout-body"
            style={{
              left: c.tx,
              top: c.ty + 26,
              width: 190,
              textAlign: c.align,
              transform: c.align === 'right' ? 'translateX(-100%)' : undefined,
            }}
          >
            {c.body.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>
      ))}

      <Shot
        x={96}
        y={792}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s06-main.webp"
        cap="△ 伙伴交往界面 —— 关系目标 + 激活条件 + 攻略入口"
        pins={S06_PINS}
      />
      <Notes x={1040} y={802} items={S06_NOTES} />

      <CardRow
        x={96}
        y={1412}
        w={1248}
        accent="#e0a33e"
        cards={[
          {
            title: '「 自我决定论 · 内在动机 」',
            lines: [
              '目标不是系统指派的任务，而是玩家的',
              '自主选择 ——「我想当她哥哥」比「完',
              '成关系任务」有更强的驱动力。',
            ],
          },
          {
            title: '「 目标梯度 · 可视化 」',
            lines: [
              '默契度 0/200 持续累积；条件满足的一',
              '刻，激活按钮点亮并播放向上扫光特效',
              '—— 把「就差一步」做成看得见的光。',
            ],
          },
          {
            title: '「 社会临场感 · 助攻 」',
            lines: [
              '与她有羁绊的伙伴（兄妹等）可以帮你',
              '攻略 —— 关系网被叙事化，数值增长有',
              '了「人情味」的来源。',
            ],
          },
        ]}
      />

      {S06_SHOTS.map((s) => (
        <Shot
          key={s.src}
          x={s.x}
          y={s.y}
          w={396}
          h={223}
          src={`/assets/qingyu-partner/${s.src}.webp`}
          cap={s.cap}
        />
      ))}

      <p className="pt-abs pt-head" style={{ left: 96, top: 2358 }}>
        助攻伙伴四态 + 全链路跳转闭环 —— 每一个「不行」都通向「怎么行」
      </p>
      <div className="pt-state-row" style={{ left: 96, top: 2418, width: 1248 }}>
        {S06_STATES.map((s) => (
          <div
            className="pt-state"
            key={s.title}
            style={{ '--pt-step-accent': s.accent, '--pt-step-edge': s.edge } as CSSProperties}
          >
            <b>{s.title}</b>
            <span>
              {s.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </span>
          </div>
        ))}
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2588 }}>
        关键流程 —— 关系达成的仪式链（失败可挽回）
      </p>
      <div className="pt-flow" style={{ left: 96, top: 2648, width: 1248, height: 230 }}>
        <div className="pt-pill" style={{ left: 0, top: 16 }}>
          <p>选定关系</p>
          <p>目标</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 132, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 164, top: 16 }}>
          <p>攻略 / 助攻</p>
          <p>默契度累积</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 316, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 348, top: 16, borderColor: '#d9a44a' }}>
          <p>条件满足</p>
          <p>按钮点亮+扫光</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 520, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 552, top: 16 }}>
          <p>激活弹窗</p>
          <p>确认消耗</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 682, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 714, top: 16 }}>
          <p>重要事件</p>
          <p>对话式副本</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 854, top: 36 }}>
          →
        </p>
        <div className="pt-diamond" style={{ left: 899.26, top: 15.26 }} />
        <div className="pt-diamond-label" style={{ left: 931, top: 34, transform: 'translateX(-50%)' }}>
          <p>是否通过</p>
          <p>事件？</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 988, top: 36, color: '#4cc2ff' }}>
          是 →
        </p>
        <div className="pt-pill" style={{ left: 1040, top: 16, borderColor: '#d9a44a' }}>
          <p>恭喜达成！</p>
          <p>称号+道具奖励</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 910, top: 100, color: '#e5484d' }}>
          否 ↓
        </p>
        <div className="pt-pill" style={{ left: 418, top: 140, borderColor: '#e5484d' }}>
          很遗憾，关系未达成 —— 重要事件刷新倒计时 2时20分 后可再试
        </div>
        <p className="pt-flow-arrow" style={{ left: 988, top: 150 }}>
          ↺ 达成后：换个关系，循环再启
        </p>
        <p className="pt-flow-note" style={{ left: 418, top: 204 }}>
          失败不清空默契度，只需等待刷新再来一次 —— 挫败被限制在「这一次」，长线投入永远安全（心流不因失败断裂）。
        </p>
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2968 }}>
        玩家心流历程 —— 全系统情绪最高峰（Hook 模型完整闭环）
      </p>
      <FlowCurve
        x={96}
        y={2998}
        w={800}
        h={360}
        axis={{ top: 70, height: 230, baseTop: 300, baseWidth: 720 }}
        curve={[
          { x: 42, y: 265 },
          { x: 200, y: 235 },
          { x: 330, y: 205 },
          { x: 440, y: 170 },
          { x: 505, y: 190 },
          { x: 580, y: 140 },
          { x: 660, y: 92 },
          { x: 712, y: 135 },
        ]}
        dots={[
          { x: 435, y: 165, label: '扫光=期待峰', lx: 400, ly: 142 },
          { x: 655, y: 87, label: '庆典页=情绪顶点', lx: 620, ly: 64 },
        ]}
        stepsY={316}
        stepsSize={15}
        steps={[
          { x: 40, label: '立目标' },
          { x: 200, label: '日常积累' },
          { x: 380, label: '激活·期待' },
          { x: 490, label: '事件·紧张' },
          { x: 590, label: '达成·高潮' },
          { x: 680, label: '新目标' },
        ]}
        caption={{
          x: 42,
          y: 23,
          text: '触发（今日事件红点）→ 行动（攻略）→ 多变奖励（默契值 -1~4 随机）→ 投入（默契度沉淀）',
          color: '#4cc2ff',
        }}
      />
      <SceneCard
        x={960}
        y={3028}
        title="使用场景印证"
        lines={[
          '像追一部连续剧：每天 20 次攻略次数',
          '是「今日更新」，重要事件是一季的悬',
          '念收尾。达成「哥哥」后还可以换个关',
          '系再追 —— 同一角色被反复消费，内容',
          '寿命成倍延长。',
        ]}
      />
    </section>
  );
}

/* ---------- S07_06 同游 ---------- */

/* Figma places these pins as percentages of the 900px shot rather than in px. */
const S07_PINS: Pin[] = [
  { n: 1, x: 0.1418 * 900, y: 197.94 },
  { n: 2, x: 0.4133 * 900, y: 377 },
  { n: 3, x: 0.0715 * 900, y: 447.55 },
  { n: 4, x: 0.84 * 900, y: 435 },
];

const S07_NOTES: string[][] = [
  ['立绘卡片墙：选中卡放大，', '焦点与上下文并存'],
  ['同游点数：单人故事的收集进度'],
  ['筛选：按完成度快速过滤'],
  ['总同游点：当满足一定的数值时，', '可获得分段奖励'],
];

const S07_FLOW = [
  '卡片墙选伙伴',
  '单人页选章节',
  '点击前往 · 进入任务',
  '完成 · Toast 同游点+10',
  '卡面进度 10/40 更新',
  '总点数里程碑领奖',
];

function TravelSection() {
  return (
    <section style={{ height: 2000 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#d9a44a" />

      <Shot
        x={96}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s07-wall.webp"
        cap="△ 伙伴同游界面 —— 立绘卡片墙 · 选中卡放大"
        pins={S07_PINS}
        mark="#d9a44a"
      />
      <Notes x={1040} y={210} items={S07_NOTES} mark="#d9a44a" />
      <img
        className="pt-plate"
        src={publicUrl('/assets/qingyu-partner/partner-s07-reward.webp')}
        alt=""
        aria-hidden="true"
        style={{ left: 1077, top: 430, width: 240, height: 266, borderRadius: 4 }}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 830 }}>
        内容节奏 —— 三段分组 + 好感度门槛，故事永远「还有下一章」
      </p>
      {/* One text node that soft-wraps, as in Figma. Splitting it into two <p> forced a
          hard break mid-sentence; the first half then overran 1276px on its own and
          wrapped again, giving three lines where the design has two. */}
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 868, width: 1276, whiteSpace: 'normal', lineHeight: 1.75 }}
      >
        单人页把章节分为「进行中的故事 / 新的故事 / 已完成的故事」——正在做的置顶、可开启的其次、回忆沉底(时间维度的信息架构)。每章标注引语台词与「完成奖励：同游点+10」，未达标的章节直接写明「好感度10级解锁」——内容门槛同时是养成动机：想看下一章，就去互动。
      </p>

      <Shot
        x={96}
        y={952}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s07-solo-a.webp"
        cap="△ 单个伙伴同游 —— 新的故事 / 进行中 / 已完成 三段分组"
      />
      <Shot
        x={744}
        y={952}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s07-solo-b.webp"
        cap="△ 单个伙伴同游 —— 新的故事 / 进行中 / 已完成 三段分组"
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 1416 }}>
        关键流程 —— 一次同游的完整闭环
      </p>
      {/* Centred single-track flow: no branch, so it is a plain centred row. Unlike the
          P01 循环 rows this one sets no gap — the spacing between a pill and the next
          arrow comes from the arrow glyph's own side bearings.
          Centred by justify-content rather than translateX(-50%): as a direct child of
          <section> this is a qy-reveal-item, and the reveal animation ends on
          transform: none, which would silently drop the centring. */}
      <div
        className="pt-loop"
        style={{ left: 0.5, top: 1476, width: 1440, gap: 0, justifyContent: 'center' }}
      >
        {S07_FLOW.map((step, i) => (
          <div key={step} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">→</p>}
            <div className="pt-pill" style={{ color: i >= 4 ? '#d9a44a' : undefined }}>
              {step}
            </div>
          </div>
        ))}
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 1596 }}>
        玩家心流历程 —— 低挑战 · 高沉浸的叙事时段
      </p>
      <FlowCurve
        x={96}
        y={1656}
        w={800}
        h={240}
        axis={{ top: 10, height: 180, baseTop: 190, baseWidth: 720 }}
        /* Deliberately flat: the copy calls this the system's 慢板乐章. */
        curve={[
          { x: 42, y: 148 },
          { x: 180, y: 122 },
          { x: 330, y: 100 },
          { x: 500, y: 86 },
          { x: 702, y: 76 },
        ]}
        /* get_design_context omitted these two Ellipse nodes and their labels for this
           curve; positions recovered from the Figma render. */
        dots={[
          { x: 355, y: 93, label: '期待峰', lx: 339, ly: 71 },
          { x: 623, y: 74, label: '情绪顶点', lx: 600, ly: 51 },
        ]}
        stepsY={206}
        stepsSize={15}
        steps={[
          { x: 71, label: '选伙伴' },
          { x: 300, label: '读故事·平缓沉浸' },
          { x: 560, label: '章节完成·温和满足' },
        ]}
        caption={{
          x: 60,
          y: 0,
          text: '不设峰值陡坡 —— 同游是全系统的「慢板乐章」，与交往的高峰曲线互补',
          color: '#4cc2ff',
        }}
      />
      <SceneCard
        x={960}
        y={1656}
        title="使用场景印证"
        lines={[
          '周末晚间的长会话：不赶进度、不拼',
          '数值，挑一位喜欢的伙伴把故事读下',
          '去。40 点的单人上限确保单角色内容',
          '不被一口气刷完 —— 细水长流。',
        ]}
      />
    </section>
  );
}

/* ---------- S08_07 拜访 ---------- */

const S08_PINS: Pin[] = [
  { n: 1, x: 93, y: 128 },
  { n: 2, x: 470, y: 128 },
  { n: 3, x: 568, y: 329 },
  { n: 4, x: 371, y: 451 },
  { n: 5, x: 665, y: 464 },
];

const S08_NOTES: string[][] = [
  ['竖排卡池签「影视人气角色', '·获得概率提升」—— UP 明示'],
  ['UP 角色三人立绘群像：', '先卖人，再卖概率'],
  ['双保底文案写进主界面：', '30 次必得 / 12/30 额外奖励'],
  ['拜访一次 ×1 —— 低价试探'],
  ['拜访五次 ×10 —— 批量优惠', '（金色按钮，视觉加权）'],
];

const S08_FLOW: { text: string; color?: string; lines?: string[] }[] = [
  { text: '拜访 ×1 / ×5' },
  { text: '结算翻卡揭晓' },
  { text: '新伙伴 → 入队可用', color: '#4cc2ff' },
  { text: '已拥有 → 当场转化碎片', color: '#d9a44a', lines: ['已拥有 → 当场转化碎片', '（转化动效）'] },
  { text: '碎片 → 升星 / 商店兑换' },
  { text: '再拜访一次 ↺', color: '#e5484d' },
];

function VisitSection() {
  return (
    <section style={{ height: 2260 }}>
      <SectionTitle
        x={96}
        y={80}
        zh="界面结构拆解 与 美术表达"
        en="UI BREAKDOWN & ART DIRECTION"
        mark="#d9a44a"
      />

      <Shot
        x={96}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s08-main.webp"
        cap="△ 伙伴拜访主界面 —— 高保真美术稿（圆窗构图 · 暖纸底 · 鎏金点缀）"
        pins={S08_PINS}
      />
      <Notes x={1040} y={200} items={S08_NOTES} />

      <p className="pt-abs pt-head" style={{ left: 96, top: 830 }}>
        为什么是「圆窗」？—— 界面美术的三层意图
      </p>
      <CardRow
        x={96}
        y={890}
        w={1248}
        cards={[
          {
            title: '「 借景 · 画框效应 」',
            lines: [
              '中式园林「月洞门」构图：圆窗天然聚焦，',
              '角色如画中人 ——「拜访」的叙事被建筑',
              '语言坐实。',
            ],
          },
          {
            title: '「 留白 · 暖纸底色 」',
            lines: [
              '宣纸色大面积留白降低信息密度，反衬',
              '立绘与鎏金粒子 —— 高价值感来自克制，',
              '而非堆砌特效。',
            ],
          },
          {
            title: '「 动势引导 」',
            lines: [
              '锦鲤与金箔的运动方向自右上洒向左下，',
              '视线顺势落在保底文案与拜访按钮 ——',
              '装饰同时是动线。',
            ],
          },
        ]}
      />

      <Shot
        x={96}
        y={1140}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s08-result.webp"
        cap="△ 拜访结算 —— 品质翻卡 · 重复伙伴当场转化碎片"
      />
      <Shot
        x={744}
        y={1140}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s08-pool.webp"
        cap="△ 卡池详情 —— 品质五色底板 · 伙伴 Spine 动画预览"
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 1610 }}>
        关键流程 —— 抽卡的期待管理（挫败当场转化）
      </p>
      <div className="pt-loop" style={{ left: 96, top: 1670, gap: 0 }}>
        {S08_FLOW.map((s, i) => (
          <div key={s.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">→</p>}
            <div className="pt-pill" style={{ color: s.color }}>
              {s.lines ? s.lines.map((l) => <p key={l}>{l}</p>) : s.text}
            </div>
          </div>
        ))}
      </div>
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 1748, width: 1248, whiteSpace: 'normal', lineHeight: 1.7 }}
      >
        可变比率强化带来期待峰值；而「歪了」的瞬间，转化动效立刻把挫败翻译成收益 —— 负反馈被压缩到最短，玩家的每一次拜访都有确定的所得。
      </p>

      <p className="pt-abs pt-head" style={{ left: 96, top: 1910 }}>
        市场参照 —— 抽卡仪式感的两种范式
      </p>
      <div className="pt-flow-note" style={{ left: 96, top: 1980, fontSize: 20, lineHeight: 1.8 }}>
        <p>《原神》祈愿：流星划空的动态仪式，以「过程动画」制造心跳；</p>
        <p>《阴阳师》召唤：画符结印的交互仪式，以「亲手参与」制造投入。</p>
        <p>庆余年的拜访选择第三条路 —— 以「空间叙事」制造仪式：</p>
        <p>推开月洞窗，角色已在庭院中等你。三者殊途同归：</p>
        <p>抽卡的本质不是概率，是被精心编排的期待。</p>
      </div>
      <Shot
        x={744}
        y={1980}
        w={290}
        h={163}
        src="/assets/qingyu-partner/partner-s08-ref-genshin.webp"
        cap="△ 参考 ·《原神》祈愿"
      />
      <Shot
        x={1054}
        y={1980}
        w={290}
        h={163}
        src="/assets/qingyu-partner/partner-s08-ref-onmyoji.webp"
        cap="△ 参考 ·《阴阳师》召唤"
      />
    </section>
  );
}

/* ---------- S04_03 培养 ---------- */

const S04_PINS: Pin[] = [
  { n: 1, x: 352.63, y: 169.81 },
  { n: 2, x: 35, y: 303 },
  { n: 3, x: 802.63, y: 310.44 },
  { n: 4, x: 286, y: 387 },
  { n: 5, x: 763.95, y: 408.88 },
];

const S04_NOTES: string[][] = [
  ['阵位槽 50 / 60 级逐个解锁：', '成长的下一格永远可见'],
  ['属性转化：上阵伙伴的属性', '按比例转为主角战力'],
  ['「阵位 / 培养」右缘页签，', '与互动界面同构（一致性）'],
  ['全伙伴列表：五行标识 +', '等级 + 碎片进度 5/20'],
  ['新增上阵标记；红点只发给', '上阵伙伴 —— 注意力降噪'],
];

const S04_SHOTS: { x: number; y: number; src: string; cap: string }[] = [
  { x: 96, y: 1177, src: 'partner-s04-level', cap: '△ 培养·升级 —— 升1级 / 升5级 批量操作' },
  { x: 522, y: 1177, src: 'partner-s04-skill', cap: '△ 培养·技能 —— 技能详情' },
  { x: 948, y: 1177, src: 'partner-s04-book', cap: '△ 培养·秘籍 —— 点击装配 · 直达背包' },
  { x: 96, y: 1461, src: 'partner-s04-decompose-a', cap: '△ 秘籍分解 —— 只可分解的状态' },
  { x: 522, y: 1461, src: 'partner-s04-decompose-b', cap: '△ 秘籍分解 —— 可装配和可分解的状态' },
  { x: 948, y: 1461, src: 'partner-s04-decompose-c', cap: '△ 秘籍分解 —— 分解进行的状态' },
];

function CultivateSection() {
  return (
    <section style={{ height: 2600 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#4fb6a6" />

      <Shot
        x={96}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s04-main.webp"
        cap="△ 伙伴上阵界面 —— 阵位槽 + 全伙伴列表 + 新增上阵标记"
        pins={S04_PINS}
        mark="#4fb6a6"
        edge="rgba(79,182,166,0.3)"
        lifted
      />
      <Notes x={1040} y={205} items={S04_NOTES} mark="#4fb6a6" />

      <p className="pt-abs pt-head" style={{ left: 96, top: 830 }}>
        三种下阵情景 · 三份差异化文案 —— 损失在发生之前说清楚
      </p>
      <CardRow
        x={96}
        y={890}
        w={1248}
        cards={[
          {
            title: '拖拽直接下阵',
            lines: ['「下阵后等级初始化，消耗的升级道具返还」'],
            accent: '#e0a33e',
            edge: 'rgba(217,164,74,0.45)',
          },
          {
            title: '低品质 → 高品质替换',
            lines: ['「替换后经验不足，等级降低」'],
            accent: '#e5484d',
            edge: 'rgba(229,72,77,0.45)',
          },
          {
            title: '高品质 → 低品质替换',
            lines: ['「替换后经验溢出，消耗的升级道具返还」'],
            accent: '#e0a33e',
            edge: 'rgba(217,164,74,0.45)',
          },
        ]}
      />
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 1045, width: 1248, whiteSpace: 'normal', lineHeight: 1.7 }}
      >
        预期管理：同一个「下阵」动作按后果分成三份弹窗文案，把「会失去什么、会返还什么」逐字写明 —— 玩家永远在知情下做选择（尼尔森#5 防错 + #1 状态可见）。
      </p>

      {S04_SHOTS.map((s) => (
        <Shot
          key={s.src}
          x={s.x}
          y={s.y}
          w={396}
          h={223}
          src={`/assets/qingyu-partner/${s.src}.webp`}
          cap={s.cap}
        />
      ))}

      <p className="pt-abs pt-head" style={{ left: 96, top: 1849 }}>
        关键流程 —— 秘籍批量分解的分级确认链
      </p>
      <div className="pt-flow" style={{ left: 96, top: 1909, width: 1248, height: 210 }}>
        <div className="pt-pill" style={{ left: 61, top: 16 }}>
          <p>勾选秘籍</p>
          <p>支持全选</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 191, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 223, top: 16 }}>
          <p>系统实时算出</p>
          <p>可得代币数</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 391, top: 36 }}>
          →
        </p>
        <div className="pt-pill" style={{ left: 423, top: 26 }}>
          一次确认：是否分解，可获得10?
        </div>
        <p className="pt-flow-arrow" style={{ left: 748, top: 36 }}>
          →
        </p>
        {/* Decision node is red here, and 66px rather than the usual 64px. */}
        <div
          className="pt-diamond"
          style={{ left: 791.67, top: 12.67, width: 66, height: 66, borderColor: '#e5484d' }}
        />
        <div
          className="pt-diamond-label"
          style={{ left: 825, top: 26, transform: 'translateX(-50%)', color: '#e5484d' }}
        >
          <p>含紫品</p>
          <p>以上？</p>
        </div>
        <p className="pt-flow-arrow" style={{ left: 804, top: 96, color: '#e5484d' }}>
          是 ↓
        </p>
        <div className="pt-pill" style={{ left: 778, top: 130, borderColor: '#e5484d' }}>
          二次确认：含紫色品质以上秘籍，是否继续？
        </div>
        <p className="pt-flow-arrow" style={{ left: 883, top: 36, color: '#4cc2ff' }}>
          否 →
        </p>
        <div className="pt-pill" style={{ left: 936, top: 16, borderColor: '#d9a44a' }}>
          <p>获得代币</p>
          <p>Toast 反馈</p>
        </div>
      </div>
      <p className="pt-flow-note" style={{ left: 157, top: 2119 }}>
        分级确认：普通批量操作一次确认即可（效率优先）；一旦包含高价值资产，追加第二道闸门（安全优先）——「确认成本」与「误操作损失」成正比。
      </p>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2219 }}>
        玩家心流历程 —— 数值成长的即时可见
      </p>
      <FlowCurve
        x={96}
        y={2279}
        w={800}
        h={260}
        axis={{ top: 10, height: 200, baseTop: 210, baseWidth: 720 }}
        curve={[
          { x: 42, y: 172 },
          { x: 200, y: 160 },
          { x: 330, y: 140 },
          { x: 460, y: 70 },
          { x: 560, y: 105 },
          { x: 640, y: 85 },
          { x: 700, y: 50 },
        ]}
        dots={[
          { x: 455, y: 65, label: '「当前 200 → 下一级 +20」对比爽点', lx: 470, ly: 20 },
          { x: 695, y: 45, label: '循环再启', lx: 480, ly: 0 },
        ]}
        stepsY={226}
        steps={[
          { x: 60, label: '攒道具（商店/派遣回流）' },
          { x: 360, label: '升5级批量跳变' },
          { x: 580, label: '新目标：升星/秘籍' },
        ]}
      />
      <SceneCard
        x={960}
        y={2279}
        title="使用场景印证"
        lines={[
          '大版本 / 新伙伴上线后的集中养成时',
          '段：玩家囤积的道具一次性投放。批',
          '量按钮（升5级、全选分解）把重复点',
          '击压缩成一次决策 —— 高强度时段的',
          '效率就是体验。',
        ]}
      />
    </section>
  );
}

/* ---------- S05_04 宗师星阵 ---------- */

const S05_PINS: Pin[] = [
  { n: 1, x: 169, y: 206 },
  { n: 2, x: 625, y: 62 },
  { n: 3, x: 780, y: 126 },
  { n: 4, x: 719, y: 227 },
  { n: 5, x: 798, y: 313 },
  { n: 6, x: 268.25, y: 447.55 },
];

const S05_NOTES: string[][] = [
  ['当前宗师大立绘 + 详情入口：', '先立人设，再谈数值'],
  ['星阵等级 5级 → 6级：', '全局成长刻度'],
  ['星阵经验 25/60 ——', '任何伙伴升星都会累积'],
  ['升级产出：宗师碎片兑换', '道具 ×2，数字翻滚动效'],
  ['兑换入口 → 四选一定向', '兑换宗师碎片'],
  ['宗师轮播队列：五种状态', '穷举（右下状态矩阵）'],
];

/* Border opacity climbs 0.25 → 0.9 across the chain. */
const S05_CHAIN: { text: string; gold?: boolean }[] = [
  { text: '任意伙伴升星' },
  { text: '粒子特效飞入星阵入口' },
  { text: '进度条上涨动效' },
  { text: '经验满 → 呼吸特效提示' },
  { text: '升级 · 碎片数字翻滚 +2', gold: true },
  { text: '集齐 → 宗师激活特效', gold: true },
];
const CHAIN_ALPHA = [0.25, 0.38, 0.51, 0.64, 0.77, 0.9];

const S05_STATES: { title: string; lines: string[]; accent: string; edge: string }[] = [
  { title: '已解锁 · 选中', lines: ['金框高亮'], accent: '#d9a44a', edge: 'rgba(217,164,74,0.5)' },
  { title: '已解锁 · 未选中', lines: ['正常显示'], accent: '#edeff5', edge: 'rgba(237,239,245,0.5)' },
  { title: '未解锁 · 选中', lines: ['剪影+条件'], accent: '#4cc2ff', edge: 'rgba(76,194,255,0.5)' },
  { title: '未解锁 · 未选中', lines: ['剪影置灰'], accent: '#99a1b3', edge: 'rgba(153,161,179,0.5)' },
  {
    title: '暂未开启',
    lines: ['不入轮播', '点击 Toast 提示'],
    accent: '#e5484d',
    edge: 'rgba(229,72,77,0.5)',
  },
];

const S05_GOALS: {
  y: number;
  w: number;
  label: string;
  note: string;
  accent: string;
  wash: string;
  edge: string;
}[] = [
  {
    y: 10,
    w: 300,
    label: '短期 · 下一级星阵（+2 兑换道具）',
    note: '每次升星立刻看见进度条动',
    accent: '#e5484d',
    wash: 'rgba(229,72,77,0.18)',
    edge: 'rgba(229,72,77,0.7)',
  },
  {
    y: 76,
    w: 520,
    label: '中期 · 星阵 20 级满级',
    note: '呼吸特效反复召回',
    accent: '#d9a44a',
    wash: 'rgba(217,164,74,0.18)',
    edge: 'rgba(217,164,74,0.7)',
  },
  {
    y: 142,
    w: 740,
    label: '长期 · 集齐 60 伙伴 · 结识四红品宗师',
    note: '绘卷集齐数联动',
    accent: '#4cc2ff',
    wash: 'rgba(76,194,255,0.18)',
    edge: 'rgba(76,194,255,0.7)',
  },
];

const S05_VFUNNEL: { title: string; lines: string[]; accent: string; edge: string }[] = [
  {
    title: '① 点亮小圆点',
    lines: ['每个小点点亮后，会给宗师星阵提升小量经验'],
    accent: '#edeff5',
    edge: 'rgba(237,239,245,0.5)',
  },
  {
    title: '② 激活星星',
    lines: ['每颗星星点亮后，会给宗师星阵提升大量经验'],
    accent: '#4cc2ff',
    edge: 'rgba(76,194,255,0.5)',
  },
  {
    title: '③ 升级宗师星阵',
    lines: [
      '每次右侧栏的伙伴升星中的小点，或星星点亮后，都有粒子特效飞至此处，',
      '并且进度条有上涨和数值提升的动效，当进度条满了以后，宗师星阵可以升级',
    ],
    accent: '#d9a44a',
    edge: 'rgba(217,164,74,0.5)',
  },
];

/* Figma's Polygon 8: a solid 27.7128 x 24 triangle filled #99A1B3, drawn apex-up and
   then flipped with -scale-y-100. Flipping it here directly rather than stroking a
   chevron, which is a different mark entirely. */
function Caret() {
  return (
    <svg className="pt-caret" viewBox="0 0 27.7128 24" aria-hidden="true">
      <path d="M13.8564 24L27.7128 0H0L13.8564 24Z" fill="#99A1B3" />
    </svg>
  );
}

function StarArraySection() {
  return (
    <section style={{ height: 2600 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#4fb6a6" />

      <Shot
        x={96}
        y={197}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s05-main.webp"
        cap="△ 伙伴宗师星阵界面 —— 大立绘 + 星阵等级 + 碎片产出"
        pins={S05_PINS}
        mark="#4fb6a6"
      />
      <Notes x={1040} y={207} items={S05_NOTES} mark="#4fb6a6" />

      <p className="pt-abs pt-head" style={{ left: 96, top: 811 }}>
        五级反馈链 —— 把抽象数值翻译成可感知的仪式
      </p>
      <div className="pt-chain" style={{ left: 96, top: 871 }}>
        {S05_CHAIN.map((s, i) => (
          <div key={s.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">→</p>}
            <div
              className="pt-chain-step"
              style={
                {
                  '--pt-step-edge': `rgba(217,164,74,${CHAIN_ALPHA[i]})`,
                  '--pt-step-accent': s.gold ? '#d9a44a' : undefined,
                } as CSSProperties
              }
            >
              {s.text}
            </div>
          </div>
        ))}
      </div>
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 941, width: 1248, whiteSpace: 'normal', lineHeight: 1.7 }}
      >
        多层次反馈（诺曼：本能层-行为层-反思层）：粒子回应单次行为，进度条回应累积，呼吸特效召唤下一步，翻滚数字确认收益，激活特效完成仪式 —— 每一层都在告诉玩家「你的投入被记住了」。
      </p>

      <Shot
        x={96}
        y={1026}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s05-starup.webp"
        cap="△ 伙伴升星 —— 通过升星能够激活宗师星阵"
      />
      <div className="pt-vfunnel" style={{ left: 720, top: 1036 }}>
        {S05_VFUNNEL.map((f, i) => (
          <div key={f.title} style={{ display: 'contents' }}>
            {i > 0 && <Caret />}
            <div
              className="pt-funnel-step"
              style={{ '--pt-step-accent': f.accent, '--pt-step-edge': f.edge } as CSSProperties}
            >
              <b>{f.title}</b>
              <span>
                {f.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Shot
        x={96}
        y={1422}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s05-exchange.webp"
        cap="△ 碎片兑换界面 —— 通用进步器 + 智能默认值"
      />
      <Shot
        x={744}
        y={1422}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s05-unlock.webp"
        cap="△ 宗师解锁 —— 播放一次激活特效，出现「结识」按钮"
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 1900 }}>
        宗师头像五态穷举 + 进步器的智能默认值
      </p>
      <div className="pt-state-row" style={{ left: 96, top: 1960, width: 1248 }}>
        {S05_STATES.map((s) => (
          <div
            className="pt-state"
            key={s.title}
            style={{ '--pt-step-accent': s.accent, '--pt-step-edge': s.edge } as CSSProperties}
          >
            <b>{s.title}</b>
            <span>
              {s.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div
        className="pt-flow-note"
        style={{ left: 96, top: 2058, width: 1248, whiteSpace: 'normal', lineHeight: 1.75 }}
      >
        <p>进步器规则原文：从哪个宗师的兑换入口进入，该宗师碎片默认为 1、其余为 0；兑换总量不得超过持有道具数；全为 0 时点击兑换 → Toast「请选择想要兑换的宗师碎片」。</p>
        <p>识别优于回忆：系统替玩家记住「你是为谁而来」，同时用约束把错误挡在发生之前。</p>
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 2226 }}>
        玩家心流历程 —— 三层目标梯度，沉没成本变成期待
      </p>
      <div className="pt-flow" style={{ left: 96, top: 2286, width: 800, height: 260 }}>
        {S05_GOALS.map((g) => (
          <div key={g.label} style={{ display: 'contents' }}>
            <div
              className="pt-goal"
              style={
                {
                  left: 0,
                  top: g.y,
                  width: g.w,
                  '--pt-goal-wash': g.wash,
                  '--pt-goal-edge': g.edge,
                  '--pt-goal-accent': g.accent,
                } as CSSProperties
              }
            >
              <span>{g.label}</span>
            </div>
            <p className="pt-flow-note" style={{ left: g.w + 16, top: g.y + 14, fontSize: 15 }}>
              {g.note}
            </p>
          </div>
        ))}
        <p className="pt-flow-note" style={{ left: 0, top: 216 }}>
          目标梯度效应：离目标越近，动力越强。三层目标彼此嵌套，任何时刻都有一个「快到了」。
        </p>
      </div>
      <SceneCard
        x={960}
        y={2286}
        title="使用场景印证"
        lines={[
          '过去：给冷板凳伙伴升星 = 纯浪费，',
          '玩家不敢投资源。现在：任何升星都',
          '给星阵喂经验 ——「反正不亏」让囤',
          '积的碎片敢花了，四位红品宗师则给',
          '重度玩家一条超长线的追求。',
        ]}
      />
    </section>
  );
}

/* ---------- S11_10 派遣 ---------- */

const S11_PINS: Pin[] = [
  { n: 1, x: 41, y: 50 },
  { n: 2, x: 159, y: 124 },
  { n: 3, x: 360, y: 92 },
  { n: 4, x: 611, y: 202 },
  { n: 5, x: 185, y: 216 },
  { n: 6, x: 694, y: 409 },
];

const S11_NOTES: string[][] = [
  ['四列表头：任务 / 奖励 /', '条件 / 状态 —— 扫读友好'],
  ['任务名按品质分色：', 'A橙 B紫 C蓝 D绿'],
  ['确定奖励 +「额外」奖励：', '条件未满置灰、满足点亮'],
  ['条件角标（监/庆…）：', '需要的伙伴特征一眼可辨'],
  ['倒计时进度条 02:05:20，', '结束即完成'],
  ['刷新：每日 5 次 · 消耗道具', '只能刷未派遣的任务'],
];

const S11_RATES: { text: string; color?: string; sep?: string }[] = [
  { text: '0 人满足 → 成功率 0%', color: '#99a1b3' },
  { text: '1 人满足 → 成功率 50%', color: '#4cc2ff' },
  { text: '2 人满足 → 成功率 100%', color: '#6bc78c', sep: '｜' },
  { text: '「智能匹配」一键放入最优组合', color: '#d9a44a' },
];

function DispatchSection() {
  return (
    <section style={{ height: 2220 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#d9a44a" />

      <Shot
        x={96}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s11-main.webp"
        cap="△ 伙伴派遣列表 —— 任务 / 奖励 / 条件 / 状态 四列结构"
        pins={S11_PINS}
        mark="#4fb6a6"
      />
      <Notes x={1040} y={200} items={S11_NOTES} mark="#4fb6a6" />

      <p className="pt-abs pt-head" style={{ left: 96, top: 830 }}>
        额外奖励成功率 —— 概率透明，且永远允许「明知故派」
      </p>
      {/* The separator before the last pill is 「｜」, not an arrow: 智能匹配 is an
          alternative to the three outcomes, not the next step after them. */}
      <div className="pt-loop" style={{ left: 96, top: 890, gap: 32 }}>
        {S11_RATES.map((r, i) => (
          <div key={r.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">{S11_RATES[i - 1].sep ?? '→'}</p>}
            <div className="pt-pill" style={{ color: r.color }}>
              {r.text}
            </div>
          </div>
        ))}
      </div>
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 960, width: 1248, whiteSpace: 'normal', lineHeight: 1.75 }}
      >
        弱约束设计：条件不满足也能派遣，只弹一次确认「无法获得额外奖励，是否确认派遣？」—— 系统给出建议（智能匹配）、说明后果（成功率），但从不替玩家做决定。
      </p>

      <Shot
        x={96}
        y={1078}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s11-detail.webp"
        cap="△ 派遣详情 —— 派遣条件 + 两个伙伴槽位 + 智能匹配"
      />
      <Shot
        x={744}
        y={1078}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s11-pick.webp"
        cap="△ 选择伙伴 —— 符合 / 不符合条件分组 · 已派遣「派」角标"
      />

      <SceneCard
        x={96}
        y={1521}
        w={1248}
        accent="#d9a44a"
        edge="rgba(217,164,74,0.4)"
        lh={1.8}
        title="零损失兜底（原文规则）"
        lines={[
          '列表排序：橙＞紫＞蓝＞绿；领取奖励＞可派遣＞派遣中 —— 待办永远浮在最上',
          '每日凌晨 5 点系统结算：未做完的派遣自动完成、未领取的奖励统一邮件发出 —— 玩家忘了也不亏，领取完奖励的任务位自动刷新新任务 —— 队列永不空转',
        ]}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 1776 }}>
        玩家心流历程 —— 布置与回收的双峰节奏
      </p>
      <FlowCurve
        x={96}
        y={1815}
        w={800}
        h={280}
        axis={{ top: 10, height: 210, baseTop: 220, baseWidth: 720 }}
        /* Two peaks with a long flat trough: the offline stretch is deliberately
           uneventful, which is the point the chapter is making. */
        curve={[
          { x: 42, y: 190 },
          { x: 100, y: 150 },
          { x: 180, y: 115 },
          { x: 280, y: 160 },
          { x: 380, y: 190 },
          { x: 480, y: 170 },
          { x: 560, y: 120 },
          { x: 650, y: 62 },
          { x: 712, y: 110 },
        ]}
        dots={[
          { x: 175, y: 110, label: '设定的掌控感', lx: 150, ly: 87 },
          { x: 645, y: 57, label: '收获峰值', lx: 620, ly: 34 },
        ]}
        stepsY={236}
        stepsSize={15}
        steps={[
          { x: 90, label: '下线前布置' },
          { x: 330, label: '离线（无感）' },
          { x: 560, label: '上线回收惊喜' },
        ]}
      />
      <SceneCard
        x={960}
        y={1815}
        title="使用场景印证"
        lines={[
          '睡前 30 秒：智能匹配 + 出发，三个任',
          '务安排完毕；早晨通勤打开游戏先收',
          '菜。派遣把「不玩的时间」变成了产',
          '出，也给了闲置伙伴存在的意义 ——',
          '养成投资全员保值。',
        ]}
      />
    </section>
  );
}

/* ---------- S12_11 商店 ---------- */

const S12_NOTES: string[][] = [
  ['「兑换」页 + 新增页签栏：', '碎片 / 秘籍两类商品'],
  ['商品卡「限购 5/5」标签：', '稀缺与公平的双重信号'],
  ['详情 = 功能说明 + 人物小传', '—— 商品即内容'],
  ['数量选择器 + 消耗实时计算', '—— 决策信息不出卡片'],
  ['免费刷新 · 每日 05:00 重置', '（与派遣同一结算时刻）'],
];

const S12_ECONOMY: { text: string; color?: string }[] = [
  { text: '拜访重复 → 碎片' },
  { text: '派遣产出 → 道具' },
  { text: '分解冗余 → 代币' },
  { text: '商店限购兑换', color: '#d9a44a' },
  { text: '集齐 20 枚 → 结交伙伴', color: '#e5484d' },
  { text: '养成 / 收集反哺 ↺', color: '#4cc2ff' },
];

/* Two parallel stacks — 碎片 on the left, 秘籍 on the right — walking the same
   四步 sequence, with the economy loop running down the gutter between them. */
const S12_SHOTS: { x: number; y: number; src: string; cap: string }[] = [
  { x: 96, y: 900, src: 'frag-bag', cap: '△ 碎片背包 —— 已拥有 / 未拥有分区 · 批量分解入口' },
  { x: 96, y: 1242, src: 'frag-pick', cap: '△ 碎片分解 —— 勾选 · 已选计数 · 最大 · 分解预览' },
  { x: 96, y: 1583.83, src: 'frag-sel', cap: '△ 碎片分解 —— 勾选 · 已选计数 · 最大 · 分解预览' },
  { x: 93, y: 1925.67, src: 'frag-ok', cap: '△ 碎片分解 —— 确认分解，点击按钮后即刻分解' },
  { x: 844, y: 900, src: 'book-bag', cap: '△ 秘籍分解 —— 已拥有 / 未拥有分区 · 批量分解入口' },
  { x: 844, y: 1242, src: 'book-pick', cap: '△ 秘籍分解 —— 勾选 · 已选计数 · 最大 · 分解预览' },
  { x: 844, y: 1584, src: 'book-sel', cap: '△ 秘籍分解 —— 勾选 · 已选计数 · 最大 · 分解预览' },
  { x: 844, y: 1926, src: 'book-ok', cap: '△ 秘籍分解 —— 确认分解，点击按钮后即刻分解' },
];

function ShopSection() {
  return (
    <section style={{ height: 2600 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#4fb6a6" />

      <Shot
        x={96}
        y={190}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s12-ex-frag.webp"
        cap="△ 兑换界面 · 碎片 —— 新增页签栏 + 商品详情 + 数量选择"
        pins={[
          { n: 1, x: 524, y: 62 },
          { n: 4, x: 486, y: 149 },
        ]}
        mark="#4fb6a6"
      />
      <Shot
        x={744}
        y={190}
        w={600}
        h={337}
        src="/assets/qingyu-partner/partner-s12-ex-book.webp"
        cap="△ 兑换界面 · 秘籍 —— 新增页签栏 + 商品详情 + 数量选择"
        pins={[
          { n: 6, x: 0.5133 * 600, y: 22 },
          { n: 5, x: 0.7317 * 600, y: 188 },
        ]}
        mark="#4fb6a6"
      />
      {/* Pin 2 is parented to the section, not to a 截图卡, so it keeps its own
          absolute position rather than riding along with a screenshot. */}
      <div
        className="pt-pin"
        style={{ left: 243, top: 339, '--pt-mark': '#4fb6a6' } as CSSProperties}
      >
        2
      </div>

      <Notes x={96} y={611} items={S12_NOTES} mark="#4fb6a6" wrap width={1248} />

      <p className="pt-abs pt-head" style={{ left: 96, top: 751 }}>
        经济总闭环 —— 溢出资源的唯一出口，随机世界里的确定通道
      </p>
      <div
        className="pt-flow-note"
        style={{ left: 96, top: 800, width: 1248, whiteSpace: 'normal', lineHeight: 1.75 }}
      >
        <p>组件复用的语境裁剪：同一个「秘籍背包」在培养与商店两处调用，从兑换商店进入时隐藏「装配」按钮 —— 一套组件、多种语境，功能随入口收敛（一致性 ≠ 一模一样）。</p>
        <p>限购 + 每日刷新构成温和的稀缺节奏：既防止一次性清空破坏经济，也给了每天回来看一眼的理由。</p>
      </div>

      {S12_SHOTS.map((s) => (
        <Shot
          key={s.src}
          x={s.x}
          y={s.y}
          w={500}
          h={281}
          src={`/assets/qingyu-partner/partner-s12-${s.src}.webp`}
          cap={s.cap}
        />
      ))}

      {/* left = 720 - 300/2. Not translateX(-50%): this is a direct child of <section>
          and the reveal animation would wipe the transform. */}
      <div className="pt-stack" style={{ left: 570, top: 900, width: 300 }}>
        {S12_ECONOMY.map((e, i) => (
          <div key={e.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-stack-arrow">⇩</p>}
            <div className="pt-pill" style={{ color: e.color }}>
              {e.text}
            </div>
          </div>
        ))}
      </div>

      <SceneCard
        x={96}
        y={2308}
        w={1248}
        lh={1.75}
        wrap
        title="使用场景印证"
        lines={[
          '「集齐20枚碎片后能够与上衫虎结交，也可以消耗此碎片提升上衫虎的品质，提高助战属性。',
          '〈人物介绍·上衫虎〉上京城郊，率领一百亲兵营救肖恩。上京城，联合范闲除掉沈重。」—— 一段兑换说明同时回答了三件事：有什么用、还能怎么用、他是谁。数值与叙事在货架上完成合流。',
          '抽卡连续歪了十次的夜晚，商店是情绪的安全垫：把重复碎片和冗余秘籍换成想要的那个人的碎片，「20 枚就能结交」是随机性世界里唯一写死的承诺 —— 保底之外的第二条确定性通道。',
        ]}
      />
    </section>
  );
}

/* ---------- S09_08 回忆 ----------
   Five galleries sharing one shape: an 800x450 entry wall with its own annotation
   list, and (for four of the five) a purple-rimmed detail plate overlapping it. */

type Gallery = {
  y: number;
  wall: string;
  wallCap: string;
  wallPins: Pin[];
  notes: string[][];
  detail?: { y: number; src: string; cap: string; pins: Pin[] };
};

const S09_GALLERIES: Gallery[] = [
  {
    y: 190,
    wall: 'whisper-wall',
    wallCap: '△ 伙伴回忆 · 私语入口墙 —— 每位伙伴一张卡 + 8/8 收集计数',
    wallPins: [
      { n: 1, x: 118, y: 177 },
      { n: 2, x: 322, y: 33 },
    ],
    notes: [
      ['入口墙：每位伙伴一张卡 +「8/8」收集计数'],
      ['红点：有新解锁的私语时亮起，查看后即熄'],
      ['已解锁可点播；未解锁直接写明解锁条件'],
      ['「设为默认」：进馆时自动选中并置顶该条'],
    ],
    detail: {
      y: 467,
      src: 'whisper',
      cap: '△ 伙伴私语界面 —— 语音台词 · 配音演员 · 设为默认',
      pins: [
        { n: 3, x: 43, y: 183 },
        { n: 4, x: 106, y: 299 },
      ],
    },
  },
  {
    y: 950,
    wall: 'letter-wall',
    wallCap: '△ 伙伴回忆 · 书信入口墙 —— 信封卡片 + 8/8 收集计数',
    wallPins: [
      { n: 1, x: 97, y: 183 },
      { n: 2, x: 286, y: 44 },
    ],
    notes: [
      ['信封卡片标注「来自」与 8/8 收集计数'],
      ['红点：已解锁但未读的书信亮起'],
      ['左侧选中 → 右侧展开竖排信笺'],
      ['朗读按钮：点击播放书信语音，再点暂停'],
    ],
    detail: {
      y: 1227,
      src: 'letter',
      cap: '△ 伙伴书信界面 —— 信封展开 · 竖排信笺 · 可朗读',
      pins: [
        { n: 3, x: 298, y: 118 },
        { n: 4, x: 303, y: 284 },
      ],
    },
  },
  {
    y: 1710,
    wall: 'bio-wall',
    wallCap: '△ 伙伴回忆 · 传记入口墙 —— 圆形卡片 + 4/4 收集计数',
    wallPins: [
      { n: 1, x: 82, y: 162 },
      { n: 2, x: 304, y: 59 },
    ],
    notes: [
      ['圆形卡面 + 4/4 计数，与私语 / 书信分层'],
      ['红点：有新解锁的传记时亮起'],
      ['手风琴展开：点另一条时上一条自动收起'],
      ['未解锁条目直接写明解锁条件'],
    ],
    detail: {
      y: 1987,
      src: 'bio',
      cap: '△ 伙伴传记界面 —— 标题列表 · 点击展开 / 收起',
      pins: [
        { n: 3, x: 43, y: 63 },
        { n: 4, x: 43, y: 207 },
      ],
    },
  },
  {
    y: 2470,
    wall: 'art-wall',
    wallCap: '△ 伙伴回忆 · 插画入口墙 —— 横幅卡片 +「新!」角标',
    wallPins: [
      { n: 1, x: 122, y: 53 },
      { n: 2, x: 377, y: 192 },
    ],
    notes: [
      ['「新!」角标：新收集的插画，查看后消失'],
      ['未解锁插画保留锁形占位，形成收集缺口'],
      ['全屏大图，打开时水墨晕开过渡'],
      ['左右箭头只在已收集的插画间轮播'],
    ],
    detail: {
      y: 2747,
      src: 'art',
      cap: '△ 插画详情 —— 全屏大图 · 左右箭头切换',
      pins: [
        { n: 3, x: 303, y: 103 },
        { n: 4, x: 555, y: 171 },
      ],
    },
  },
  {
    y: 3230,
    wall: 'relic-wall',
    wallCap: '△ 伙伴回忆 · 信物界面 —— 道具网格与详情同屏',
    /* 信物 puts the grid and the detail on one screen, so it needs no detail plate. */
    wallPins: [
      { n: 1, x: 30, y: 137 },
      { n: 2, x: 487, y: 287 },
      { n: 3, x: 157, y: 47 },
    ],
    notes: [
      ['网格与详情同屏，左选右看'],
      ['此处有 2 种状态：已拥有 / 未获得（???）'],
      ['红点：已获得但未查看的信物亮起'],
    ],
  },
];

const S09_HALLS: { title: string; lines: string[] }[] = [
  { title: '私语', lines: ['语音台词收藏', '自动播放默认条', '切换自动暂停上一条', '可「设为默认」'] },
  { title: '书信', lines: ['信封 → 竖排信笺', '开启动效过渡', '可切换语音朗读'] },
  { title: '传记', lines: ['标题列表', '点击展开详情', '再点收起'] },
  { title: '信物', lines: ['专属道具图鉴', '未获得显示「???」', '写明获取途径'] },
  { title: '插画', lines: ['1280×720 大图', '左右箭头切换', '水墨晕开特效', '「新!」角标'] },
];

const S09_FLOW: { text: string; color?: string; lines?: string[] }[] = [
  { text: '入口墙选伙伴' },
  { text: '进入任意展厅' },
  { text: '已解锁 → 播放 / 阅读', color: '#4cc2ff' },
  {
    text: '未解锁 → Tips',
    color: '#e5484d',
    lines: ['未解锁 → Tips：需要好感度10级，', '是否前往提升？'],
  },
  { text: '前往互动界面补足', color: '#d9a44a' },
  { text: '回馆收下这条回忆 ↺' },
];

function MemorySection() {
  return (
    <section style={{ height: 5000 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#9a7bd6" />

      {S09_GALLERIES.map((g) => (
        <div key={g.wall} style={{ display: 'contents' }}>
          <Shot
            x={96}
            y={g.y}
            w={800}
            h={450}
            src={`/assets/qingyu-partner/partner-s09-${g.wall}.webp`}
            cap={g.wallCap}
            pins={g.wallPins}
            mark="#9a7bd6"
          />
          <Notes x={934} y={g.y} items={g.notes} mark="#9a7bd6" />
          {g.detail && (
            <div className="pt-inset" style={{ left: 718, top: g.detail.y }}>
              <div className="pt-shot-frame" style={{ width: 600, height: 338 }}>
                <img
                  src={publicUrl(`/assets/qingyu-partner/partner-s09-${g.detail.src}.webp`)}
                  alt={g.detail.cap.replace(/^△\s*/, '')}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="pt-shot-cap">{g.detail.cap}</p>
              {g.detail.pins.map((p) => (
                <div
                  className="pt-pin"
                  key={p.n}
                  style={{ left: p.x, top: p.y, '--pt-mark': '#9a7bd6' } as CSSProperties}
                >
                  {p.n}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <p className="pt-abs pt-head" style={{ left: 96, top: 3809 }}>
        五馆同构 —— 一套「入口墙 → 详情」模式，五种收藏语法
      </p>
      <div className="pt-state-row" style={{ left: 96, top: 3869, width: 1248 }}>
        {S09_HALLS.map((h) => (
          <div
            className="pt-state"
            key={h.title}
            style={{ '--pt-step-accent': '#d9a44a', '--pt-step-edge': 'rgba(217,164,74,0.4)' } as CSSProperties}
          >
            <b style={{ fontSize: 20 }}>{h.title}</b>
            <span style={{ fontSize: 15, lineHeight: 1.55 }}>
              {h.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </span>
          </div>
        ))}
      </div>

      <SceneCard
        x={96}
        y={4056}
        w={1248}
        lh={1.75}
        wrap
        title="排序规则全部写死并对玩家透明（原文摘录）"
        lines={[
          '一致性与标准（尼尔森第四原则）：五个展厅共享「入口墙(计数) → 详情页」与「未解锁 → 弹窗 → 前往」两条通用语法，学习成本只付一次；',
          '媒体细节独立打磨 —— 点开新私语时上一条语音自动暂停、信件开启有动效、插画切换只轮播已收集项（无空白挫败）。',
          '入口墙：已获得伙伴 ＞ 好感度等级（高→低） ＞ 稀有度（高→低） ＞ 语音配置表首条语音 id（小→大）',
          '馆内条目：先解锁 ＞ 后解锁 ＞ 未解锁（按配置 id 升序）；默认私语永远置顶，且每次进入自动选中 —— 确定性的排序让「找一条回忆」永远不需要翻找记忆（识别优于回忆，尼尔森第六原则）。',
        ]}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 4373 }}>
        关键流程 —— 逛馆动线（死路清零）
      </p>
      <div className="pt-loop" style={{ left: 40, top: 4433, gap: 0 }}>
        {S09_FLOW.map((s, i) => (
          <div key={s.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">→</p>}
            <div className="pt-pill" style={{ color: s.color }}>
              {s.lines ? s.lines.map((l) => <p key={l}>{l}</p>) : s.text}
            </div>
          </div>
        ))}
      </div>

      <p className="pt-abs pt-head" style={{ left: 96, top: 4601 }}>
        玩家心流历程 —— 翻相册式的舒缓体验
      </p>
      <FlowCurve
        x={96}
        y={4661}
        w={800}
        h={240}
        axis={{ top: 10, height: 180, baseTop: 190, baseWidth: 720 }}
        /* The flattest curve in the frame — collection is explicitly not a task. */
        curve={[
          { x: 42, y: 132 },
          { x: 250, y: 112 },
          { x: 450, y: 95 },
          { x: 702, y: 78 },
        ]}
        /* Same omission as S07: the section-level design context dropped these two
           Ellipse nodes and their labels; fetching 10489:2904 on its own returns them. */
        dots={[
          { x: 355, y: 97, label: '期待峰', lx: 339, ly: 74 },
          { x: 603, y: 77, label: '情绪顶点', lx: 580, ly: 54 },
        ]}
        stepsY={206}
        stepsSize={15}
        steps={[
          { x: 60, label: '进馆·期待' },
          { x: 280, label: '听语音·读信·缓慢升温' },
          { x: 540, label: '收齐一格·安静满足' },
        ]}
        caption={{
          x: 60,
          y: 0,
          text: '收藏不是任务 —— 曲线平缓向上，情绪价值来自「被保存的时光」',
          color: '#4cc2ff',
        }}
      />
      <SceneCard
        x={960}
        y={4661}
        w={317}
        wrap
        title="使用场景印证"
        lines={[
          '深夜睡前的安静时段：戴上耳机听一段新解锁的私语、读一封信。收集系统从养成里剥离后，这里没有数值焦虑 —— 只有已经攒下的情感资产，它是长期留存的真正锚点。',
        ]}
      />
    </section>
  );
}

/* ---------- S10_09 绘卷 ---------- */

const S10_PINS: Pin[] = [
  { n: 1, x: 53.8, y: 183.88 },
  { n: 2, x: 64.34, y: 370.2 },
  { n: 3, x: 437, y: 197.94 },
  { n: 4, x: 816, y: 426 },
  { n: 5, x: 717, y: 475 },
];

const S10_NOTES: string[][] = [
  ['竖排「伙伴绘卷」题字：', '卷轴隐喻，横向长卷阅读'],
  ['四分类：谋士 / 权贵 /', '侠客 / 红颜（原著阵营）'],
  ['人物立绘横向排布，', '未获得以剪影留位（悬念）'],
  ['属性入口：收集齐数', '反哺战力加成'],
  ['新增「集齐伙伴数 10/60」', '—— 收集进度全局可见'],
];

const S10_MILESTONES: { text: string; color?: string }[] = [
  { text: '集齐 5 · 已领取', color: '#99a1b3' },
  { text: '集齐 10 · 可领取', color: '#d9a44a' },
  { text: '集齐 15 · 待达成' },
  { text: '……', color: '#99a1b3' },
  { text: '集齐 60 · 联动宗师星阵', color: '#e5484d' },
];

function ScrollSection() {
  return (
    <section style={{ height: 1300 }}>
      <SectionTitle x={96} y={80} zh="界面结构拆解" en="UI BREAKDOWN" mark="#9a7bd6" />

      <Shot
        x={96}
        y={190}
        w={900}
        h={506}
        src="/assets/qingyu-partner/partner-s10-scroll.webp"
        cap="△ 余年绘卷 —— 竖排卷轴题字 + 四类人物长卷"
        pins={S10_PINS}
        mark="#9a7bd6"
      />
      <Notes x={1040} y={205} items={S10_NOTES} mark="#9a7bd6" />
      <img
        className="pt-plate"
        src={publicUrl('/assets/qingyu-partner/partner-s10-reward.webp')}
        alt=""
        aria-hidden="true"
        style={{ left: 1074, top: 524, width: 300, height: 333, borderRadius: 6 }}
      />

      <p className="pt-abs pt-head" style={{ left: 96, top: 900 }}>
        分段奖励 —— 蔡格尼克效应：未完成的格子最让人惦记
      </p>
      <div className="pt-loop" style={{ left: 96, top: 960, gap: 32 }}>
        {S10_MILESTONES.map((m, i) => (
          <div key={m.text} style={{ display: 'contents' }}>
            {i > 0 && <p className="pt-arrow">→</p>}
            <div className="pt-pill" style={{ color: m.color }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <p
        className="pt-flow-note"
        style={{ left: 96, top: 1029, width: 1248, whiteSpace: 'normal', lineHeight: 1.75 }}
      >
        领取即弹 Toast「获得XXX」——即时确认；「10/60」的分母同时是宗师星阵的长线目标，两套系统共享同一条收集进度，一次收集、两处回报。
      </p>

      <SceneCard
        x={96}
        y={1100}
        w={1215}
        wrap
        title="使用场景印证"
        lines={[
          '抽卡结束后顺路来看一眼：新伙伴在长卷上点亮、剪影少了一格。原著读者在这里按阵营找人 ——「范闲的人都齐了吗」本身就是一种收集动机。',
        ]}
      />
    </section>
  );
}

/* ---------- S13 效果图 ---------- */

type Tile = { src: string; cap: string; plain?: boolean; square?: boolean };

const S13_TILES: Tile[] = [
  { src: 'home', cap: '伙伴主界面' },
  { src: 'swap', cap: '伙伴更换' },
  { src: 'file', cap: '伙伴档案' },
  { src: 'detail1', cap: '伙伴详情' },
  { src: 'detail2', cap: '伙伴详情' },
  { src: 'detail3', cap: '伙伴详情' },
  { src: 'act1', cap: '伙伴互动' },
  { src: 'act2', cap: '伙伴互动' },
  { src: 'act3', cap: '伙伴互动' },
  { src: 'act4', cap: '伙伴互动' },
  { src: 'act5', cap: '伙伴互动' },
  { src: 'act6', cap: '伙伴互动' },
  { src: 'act7', cap: '伙伴互动' },
  { src: 'rel1', cap: '伙伴交往' },
  { src: 'rel2', cap: '伙伴交往' },
  { src: 'rel3', cap: '伙伴交往' },
  { src: 'rel4', cap: '伙伴交往' },
  { src: 'rel5', cap: '伙伴交往' },
  { src: 'rel6', cap: '伙伴交往' },
  { src: 'rel7', cap: '伙伴交往' },
  { src: 'rel8', cap: '伙伴交往' },
  { src: 'rel9', cap: '伙伴交往' },
  { src: 'trav1', cap: '伙伴同游' },
  { src: 'trav2', cap: '伙伴同游', plain: true },
  { src: 'visit1', cap: '伙伴拜访' },
  { src: 'visit2', cap: '伙伴拜访' },
  { src: 'visit3', cap: '伙伴拜访' },
  { src: 'visit4', cap: '伙伴拜访' },
  { src: 'deploy', cap: '伙伴上阵' },
  { src: 'cult1', cap: '伙伴培养' },
  { src: 'cult2', cap: '伙伴培养' },
  { src: 'cult3', cap: '伙伴培养' },
  { src: 'cult4', cap: '伙伴培养' },
  { src: 'cult5', cap: '伙伴培养' },
  { src: 'disp1', cap: '伙伴派遣' },
  { src: 'disp2', cap: '伙伴派遣', square: true },
  { src: 'star1', cap: '十二明星' },
  { src: 'star2', cap: '十二明星' },
  { src: 'star3', cap: '十二明星' },
  { src: 'star4', cap: '十二明星' },
  { src: 'mem1', cap: '伙伴回忆' },
  { src: 'mem2', cap: '伙伴回忆' },
  { src: 'mem3', cap: '伙伴回忆' },
  { src: 'mem4', cap: '伙伴回忆' },
  { src: 'mem5', cap: '伙伴回忆' },
  { src: 'mem6', cap: '伙伴回忆' },
  { src: 'mem7', cap: '伙伴回忆' },
  { src: 'mem8', cap: '伙伴回忆' },
  { src: 'mem9', cap: '伙伴回忆' },
  { src: 'scroll1', cap: '余年绘卷' },
  { src: 'scroll2', cap: '余年绘卷' },
];

/* Figma declares this frame at 3500px, but 51 tiles at 3-per-row need ~4700 and the
   frame clips them. Sizing to the content instead — a truncated gallery is the exact
   complaint this rebuild exists to fix. */
const S13_HEIGHT = 4760;

function ShowcaseSection() {
  return (
    <section style={{ height: S13_HEIGHT }}>
      <p className="pt-abs pt-gallery-title">效果图欣赏</p>
      <div className="pt-gallery" style={{ left: 96, top: 208, width: 1264 }}>
        {S13_TILES.map((t) => (
          <figure
            className={`pt-gallery-card${t.plain ? ' is-plain' : ''}${t.square ? ' is-square' : ''}`}
            key={t.src}
          >
            <div className="pt-gallery-shot">
              <img
                src={publicUrl(`/assets/qingyu-partner/partner-s13-${t.src}.webp`)}
                alt={t.cap}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>{t.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- S14 封底 ---------- */

const BACK_DOTS = [
  { x: 200, y: 160, r: 3 },
  { x: 1240, y: 180, r: 2.5 },
  { x: 1260, y: 620, r: 2 },
  { x: 180, y: 640, r: 2.5 },
  { x: 420, y: 140, r: 2 },
  { x: 1040, y: 660, r: 2 },
];

function BackCoverSection() {
  return (
    <section style={{ height: 820 }}>
      {/* Three concentric rings centred on (720, 400), echoing the cover's orbits. */}
      <svg className="pt-back-rings" viewBox="0 0 1440 820" aria-hidden="true" data-qy-static>
        <g fill="none">
          <circle cx="720" cy="400" r="360" stroke="rgba(224,163,62,0.12)" strokeWidth="1" />
          <circle
            cx="720"
            cy="400"
            r="250"
            stroke="rgba(224,163,62,0.3)"
            strokeWidth="1.5"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
          <circle cx="720" cy="400" r="150" stroke="rgba(224,163,62,0.16)" strokeWidth="1" />
        </g>
        {BACK_DOTS.map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill="rgba(237,239,245,0.45)" />
        ))}
      </svg>
      <p className="pt-abs pt-back-title">愿你与每个伙伴，都有故事</p>
      <p className="pt-abs pt-back-sub">THANKS FOR READING</p>
    </section>
  );
}

export function QingyuPartnerExactCase() {
  return (
    <div className="pt-canvas" data-node-id="10327:1994">
      <CoverSection />
      <ChapterCover chapter={CHAPTERS.overview} />
      <SystemMapSection />
      <ChapterCover chapter={CHAPTERS.home} />
      <HomeSection />
      <ChapterCover chapter={CHAPTERS.interact} />
      <InteractSection />
      <ChapterCover chapter={CHAPTERS.relationship} />
      <RelationshipSection />
      <ChapterCover chapter={CHAPTERS.travel} />
      <TravelSection />
      <ChapterCover chapter={CHAPTERS.draw} />
      <VisitSection />
      <ChapterCover chapter={CHAPTERS.cultivate} />
      <CultivateSection />
      <ChapterCover chapter={CHAPTERS.star} />
      <StarArraySection />
      <ChapterCover chapter={CHAPTERS.dispatch} />
      <DispatchSection />
      <ChapterCover chapter={CHAPTERS.shop} />
      <ShopSection />
      <ChapterCover chapter={CHAPTERS.memory} />
      <MemorySection />
      <ChapterCover chapter={CHAPTERS.scroll} />
      <ScrollSection />
      <ShowcaseSection />
      <BackCoverSection />
    </div>
  );
}
