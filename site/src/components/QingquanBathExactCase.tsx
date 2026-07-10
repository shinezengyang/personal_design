import type { CSSProperties } from 'react';
import './QingquanBathExactCase.css';

const qqAssets = {
  entryPopup: 'https://www.figma.com/api/mcp/asset/245ed7b0-38fa-472e-8314-a6c60efa6427',
  entryList: 'https://www.figma.com/api/mcp/asset/6f5884a9-d30a-4e36-bb8f-c1563393cce5',
  main: 'https://www.figma.com/api/mcp/asset/8fca63ef-d164-4ea6-9334-c560f4819d46',
  signup: 'https://www.figma.com/api/mcp/asset/0276eced-901a-4317-89a4-c05bc8b3cf8b',
  vote: 'https://www.figma.com/api/mcp/asset/dedbdd13-3ddc-449d-9123-f7b44fe82cdf',
  live: 'https://www.figma.com/api/mcp/asset/fc48daaa-a1a7-4071-bbc3-1c28af5c0617',
  result: 'https://www.figma.com/api/mcp/asset/ec0386b1-f40b-4d74-b925-2929af0b2d66',
  refHotSpring: 'https://www.figma.com/api/mcp/asset/278abcd9-4e99-4bc9-b939-28ff59d18fca',
  refLive: 'https://www.figma.com/api/mcp/asset/c5dca3d0-25c8-42bf-8203-56a534e8c8c3',
  flowCurve: 'https://www.figma.com/api/mcp/asset/1b934eda-a443-4e20-9e41-9cf1e6b7f393',
};

type Accent = 'cyan' | 'pink' | 'gold';

type SectionHeaderProps = {
  no: string;
  eyebrow: string;
  title: string;
  desc: string;
  accent?: Accent;
};

function SectionHeader({ no, eyebrow, title, desc, accent = 'pink' }: SectionHeaderProps) {
  return (
    <div className={`qq-section-header ${accent}`}>
      <div className="qq-hairline" />
      <span className="qq-big-no">{no}</span>
      <p className="qq-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <h3>{desc}</h3>
    </div>
  );
}

function RequirementCard({ code, title, en, desc, accent = 'cyan' }: { code: string; title: string; en: string; desc: string; accent?: Accent }) {
  return (
    <article className={`qq-require-card ${accent}`}>
      <b>{code}</b>
      <h3>{title}</h3>
      <h4>{en}</h4>
      <p>{desc}</p>
    </article>
  );
}

function FlowNode({ n, title, desc, x, accent = 'cyan' }: { n: number; title: string; desc: string; x: number; accent?: Accent }) {
  return (
    <div className={`qq-flow-node ${accent}`} style={{ left: x - 59 }}>
      <span>{n}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Bullet({ children }: { children: string }) {
  return <p className="qq-bullet"><i />{children}</p>;
}

function ImageFrame({ src, className = '', caption, style }: { src: string; className?: string; caption?: string; style?: CSSProperties }) {
  return (
    <figure className={`qq-image-frame ${className}`} style={style}>
      <img src={src} alt={caption ?? ''} loading="lazy" decoding="async" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function PrincipleCard({ title, subtitle, children, accent = 'cyan', style }: { title: string; subtitle: string; children: string; accent?: Accent; style?: CSSProperties }) {
  return (
    <article className={`qq-principle ${accent}`} style={style}>
      <i />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{children}</p>
    </article>
  );
}

type ExactCallout = {
  x: number;
  y: number;
  title: string;
  text: string;
  align?: 'left' | 'right';
  width?: number;
  lineX: number;
  lineY: number;
  lineW: number;
  ringX: number;
  ringY: number;
  accent?: Accent;
};

function Callout({ x, y, title, text, align = 'left', width = 168, lineX, lineY, lineW, ringX, ringY, accent = 'cyan' }: ExactCallout) {
  return (
    <>
      <div className={`qq-callout-copy ${align}`} style={{ left: x, top: y, width }}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <span className={`qq-callout-line ${accent}`} style={{ left: lineX, top: lineY, width: lineW }} />
      <span className={`qq-callout-ring ${accent}`} style={{ left: ringX, top: ringY }} />
    </>
  );
}

function ShotSection({
  no,
  eyebrow,
  title,
  desc,
  src,
  caption,
  accent = 'cyan',
  callouts,
  principles,
  height = 1140,
  imageLeft = 190,
  principleTop = 916,
  principleHeight,
}: {
  no: string;
  eyebrow: string;
  title: string;
  desc: string;
  src: string;
  caption: string;
  accent?: Accent;
  callouts: ExactCallout[];
  principles: Array<{ title: string; subtitle: string; text: string; accent?: Accent }>;
  height?: number;
  imageLeft?: number;
  principleTop?: number;
  principleHeight?: number;
}) {
  return (
    <section className="qq-page qq-shot-page" style={{ height }}>
      <SectionHeader no={no} eyebrow={eyebrow} title={title} desc={desc} accent={accent} />
      <ImageFrame src={src} className="qq-main-shot" caption={caption} style={{ left: imageLeft }} />
      {callouts.map((item) => <Callout key={`${item.title}-${item.x}-${item.y}`} {...item} accent={item.accent ?? accent} />)}
      <div className={`qq-principle-row ${principles.length === 1 ? 'single' : ''}`} style={{ top: principleTop }}>
        {principles.map((p) => <PrincipleCard key={p.title} title={p.title} subtitle={p.subtitle} accent={p.accent ?? accent} style={principleHeight ? { height: principleHeight } : undefined}>{p.text}</PrincipleCard>)}
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="qq-metric">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

export function QingquanBathExactCase() {
  return (
    <div className="qingquan-exact-canvas">
      <section className="qq-hero">
        <span className="qq-hero-glow mist" />
        <span className="qq-hero-glow sakura" />
        <span className="qq-hero-ring r1" />
        <span className="qq-hero-ring r2" />
        <span className="qq-petal p1" /><span className="qq-petal p2" /><span className="qq-petal p3" /><span className="qq-petal p4" /><span className="qq-petal p5" /><span className="qq-petal p8" />
        <p className="qq-hero-over">帮派活动优化&nbsp;&nbsp; | &nbsp;&nbsp;HOT-SPRING GALA</p>
        <h1>清泉沐浴</h1>
        <div className="qq-hero-rule" />
        <h2>一池温泉 · 一场全帮的星光选美</h2>
        <p className="qq-hero-desc">把帮派挂机泡澡，升级成有舞台的社交盛典 —— 喜悦度让全员共享氛围，语音口号让人人皆可登台，限票评选让起哄变成仪式。</p>
        <div className="qq-hero-tags">
          {['帮派社交', '喜悦度氛围', '语音口号 UGC', '限票评选', '选美加冕'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className="qq-scroll">SCROLL ↓</p>
      </section>

      <section className="qq-page qq-brief">
        <SectionHeader no="01" eyebrow="THE BRIEF" title="设计任务" desc="原版清泉沐浴只是「站在水里挂机」—— 玩家无事可做、无话可说。本次优化以「优化玩法体验」为目的，围绕一条主线：给泡温泉一个值得留下来的理由。" />
        <div className="qq-require-row">
          <RequirementCard code="R1" title="优化沐浴主界面" en="REFINE MAIN UI" desc="沐浴时间、喜悦度、互动入口与温泉之星面板一屏整合，氛围一眼可感。" accent="cyan" />
          <RequirementCard code="R2" title="新增报名界面" en="SIGN-UP · VOICE" desc="长按录制语音口号，试听满意再发布 —— 人人都有 15 秒的舞台。" accent="pink" />
          <RequirementCard code="R3" title="新增评选界面" en="VOTING LIST" desc="口号试听 + 心形投票 + 实时排名，让「选美」有据可依。" accent="pink" />
        </div>
      </section>

      <section className="qq-page qq-flow">
        <SectionHeader no="02" eyebrow="GAMEPLAY FLOW" title="玩法全流程 · 从泡澡到加冕" desc="15 分钟一场的帮派盛典 —— 前段轻松互动，后段全员起哄，结尾人人见证。" />
        <div className="qq-flow-band relax">汤池时光 · 放松互动</div>
        <div className="qq-flow-band star">温泉之星 · 全员盛典</div>
        <div className="qq-flow-line"><i /></div>
        <FlowNode n={1} title="双入口进场" desc="弹窗 / 帮派活动" x={134} accent="cyan" />
        <FlowNode n={2} title="入池沐浴" desc="喜悦度持续积累" x={318} accent="cyan" />
        <FlowNode n={3} title="轻互动" desc="花瓣·红包·弹幕" x={502} accent="cyan" />
        <FlowNode n={4} title="报名参选" desc="录制语音口号" x={686} accent="pink" />
        <FlowNode n={5} title="评选投票" desc="试听 + 心形限票" x={870} accent="pink" />
        <FlowNode n={6} title="加冕结算" desc="选美结果全员见证" x={1054} accent="pink" />
        <p className="qq-flow-note">⏱ 单场 15:00 · 评选预告倒计时 02:30 · 全程状态可见</p>
      </section>

      <section className="qq-page qq-entry">
        <SectionHeader no="03" eyebrow="DUAL ENTRY" title="双入口触达" desc="活动开启的那一刻，玩家无论身在大世界还是帮派页，都有一条最短路径进场。" accent="cyan" />
        <div className="qq-entry-grid">
          <ImageFrame src={qqAssets.entryPopup} caption="入口 1 · 大世界弹窗" />
          <ImageFrame src={qqAssets.entryList} caption="入口 2 · 帮派活动列表" />
        </div>
        <div className="qq-entry-notes">
          <div><Bullet>系统公告 + 弹窗直达，25 秒可暂缓</Bullet><Bullet>「前往」一键传送，不打断当前节奏</Bullet></div>
          <div><Bullet>活动列表常驻入口，错过弹窗也能进</Bullet><Bullet>完成沐浴可得 30 帮派活跃度</Bullet></div>
        </div>
        <span className="qq-entry-marker m1" /><span className="qq-entry-marker m2" />
        <div className="qq-wide-principle cyan">
          <i />
          <h3>交互原则 · 多触点可见性</h3>
          <h4>VISIBILITY · MULTI TOUCHPOINT</h4>
          <p>主动推送与常驻入口互为冗余：弹窗抓住「现在」，列表兜住「稍后」，活跃度奖励再补一个非来不可的理由。</p>
        </div>
      </section>

      <ShotSection
        no="04"
        eyebrow="MAIN UI · REFINED"
        title="沐浴主界面 · 氛围一屏可感"
        desc="左侧信息区讲「现在的氛围」，右侧操作区给「随手的互动」—— 中间留白，把画面还给温泉。"
        src={qqAssets.main}
        caption="▲ 清泉沐浴主界面（优化后）· 温泉之星开场前 02:30"
        accent="cyan"
        callouts={[
          { x: 12, y: 322, width: 165, align: 'right', title: '沐浴时间', text: '单场 15:00 实时倒计时', lineX: 183.94, lineY: 338.5, lineW: 103.12, ringX: 286, ringY: 333, accent: 'cyan' },
          { x: 12, y: 385, width: 165, align: 'right', title: '喜悦度 · 宝箱', text: '全员共享的氛围进度', lineX: 183, lineY: 398, lineW: 52, ringX: 234, ringY: 391, accent: 'cyan' },
          { x: 12, y: 482, width: 165, align: 'right', title: '温泉之星预告', text: '02:30 倒计时制造期待', lineX: 182, lineY: 493, lineW: 28, ringX: 209, ringY: 485, accent: 'pink' },
          { x: 12, y: 569, width: 165, align: 'right', title: '双按钮入口', text: '报名参选 / 评选名单', lineX: 182, lineY: 583, lineW: 21, ringX: 202, ringY: 575, accent: 'pink' },
          { x: 1100, y: 352, width: 168, align: 'left', title: '帮助 · 弹幕 · 退出', text: '新增三键 一目了然', lineX: 1062, lineY: 363, lineW: 33, ringX: 1049, ringY: 355, accent: 'cyan' },
          { x: 1100, y: 663, width: 168, align: 'left', title: '轻互动三件套', text: '花瓣·红包·互动 随手可发', lineX: 1034, lineY: 674, lineW: 62, ringX: 1021, ringY: 666, accent: 'cyan' },
        ]}
        principles={[
          { title: '交互原则 · 状态可见性', subtitle: 'VISIBILITY OF STATUS', text: '倒计时、喜悦度、预告三组状态常驻一角 —— 玩家抬眼即知进行到哪。', accent: 'cyan' },
          { title: '交互原则 · 社交润滑剂', subtitle: 'AMBIENT SOCIAL PLAY', text: '花瓣、红包、弹幕是低门槛的轻表达：一次点击就能参与气氛。', accent: 'pink' },
        ]}
      />

      <ShotSection
        no="05"
        eyebrow="SIGN-UP · VOICE SLOGAN"
        title="报名参选 · 录一句口号"
        desc="选美的参赛作品不是面板数据，而是一段受人欢迎的语音 —— 长按录制、试听满意、再行发布，表达零压力。"
        src={qqAssets.signup}
        caption="▲ 报名温泉之星 · 录制完成态（试听 / 发布 / 取消）"
        accent="pink"
        callouts={[
          { x: 12, y: 410, width: 165, align: 'right', title: '弹窗式报名', text: '不离开温泉场景', lineX: 184, lineY: 421, lineW: 186, ringX: 369, ringY: 413, accent: 'pink' },
          { x: 12, y: 546, width: 165, align: 'right', title: '先试听', text: '满意了才往下走', lineX: 184, lineY: 557, lineW: 280, ringX: 463, ringY: 549, accent: 'cyan' },
          { x: 1100, y: 414, width: 168, align: 'left', title: '随时关闭', text: '报名全程可退出', lineX: 883, lineY: 425, lineW: 211, ringX: 870, ringY: 417, accent: 'pink' },
          { x: 1100, y: 546, width: 168, align: 'left', title: '一键重来', text: '取消即可重新录制', lineX: 817, lineY: 557, lineW: 277, ringX: 804, ringY: 549, accent: 'pink' },
          { x: 1100, y: 708, width: 168, align: 'left', title: '长按录制', text: '松手即停 · 防误触', lineX: 707, lineY: 718, lineW: 387, ringX: 694, ringY: 711, accent: 'pink' },
        ]}
        principles={[
          { title: '交互原则 · 控制与自由', subtitle: 'USER CONTROL & FREEDOM', text: '试听、取消、重录、发布前再确认 —— 每一步都有退路，玩家才敢开口。', accent: 'pink' },
          { title: '交互原则 · 防错设计', subtitle: 'ERROR PREVENTION', text: '长按触发录制、松手即停，发布前二次确认，避免一句没准备好的口号被公开。', accent: 'cyan' },
        ]}
      />

      <ShotSection
        no="06"
        eyebrow="VOTING · 5 HEARTS"
        title="评选投票 · 五颗心的分量"
        desc="先听口号、再投心动 —— 每人只有 5 票，投出去的每一颗心都是被认真权衡过的喜欢。"
        src={qqAssets.vote}
        caption="▲ 评选温泉之星 · 投票列表（自己参选行高亮）"
        accent="pink"
        callouts={[
          { x: 12, y: 390, width: 165, align: 'right', title: '四列信息架构', text: '[排名] [玩家]\n[口号] [票数]', lineX: 183.99, lineY: 399.5, lineW: 296.02, ringX: 473, ringY: 391, accent: 'cyan' },
          { x: 12, y: 486, width: 165, align: 'right', title: '口号试听', text: '听了再投，评有所依', lineX: 182, lineY: 497, lineW: 505, ringX: 686, ringY: 490, accent: 'cyan' },
          { x: 12, y: 686, width: 165, align: 'right', title: '自己永远可见', text: '参选行高亮 + 自动定位', lineX: 184, lineY: 695, lineW: 272, ringX: 455, ringY: 687, accent: 'pink' },
          { x: 1100, y: 430, width: 168, align: 'left', title: '心形投票', text: '点心即投 · 即时计票', lineX: 796, lineY: 439, lineW: 298, ringX: 783, ringY: 432, accent: 'pink' },
          { x: 1100, y: 790, width: 168, align: 'left', title: '限票 5 次', text: '稀缺让每票都被珍惜', lineX: 836, lineY: 801, lineW: 258, ringX: 823, ringY: 793, accent: 'gold' },
        ]}
        principles={[
          { title: '交互原则 · 稀缺性投票', subtitle: 'SCARCITY · 5 VOTES ONLY', text: '限定 5 票迫使玩家先试听再抉择 —— 稀缺让评选有了含金量。', accent: 'pink' },
          { title: '交互原则 · 社会比较', subtitle: 'SOCIAL COMPARISON', text: '实时票数与排名公开可见，自己的位置永远高亮，驱动拉票与互动。', accent: 'cyan' },
        ]}
      />

      <ShotSection
        no="07"
        eyebrow="LIVE STANDINGS"
        title="评选进行时 · 边泡边看榜"
        desc="评选不打断沐浴 —— TOP3 与我的排名以边栏形式贴在主界面，泡着温泉就能看着票数起伏。"
        src={qqAssets.live}
        caption="▲ 清泉沐浴主界面 · 评选进行中（TOP3 + 我的排名边栏）"
        accent="pink"
        callouts={[
          { x: 24, y: 355, width: 165, align: 'right', title: '沐浴照常进行', text: '时间 09:30 、喜悦度 2 级', lineX: 190, lineY: 373, lineW: 106.17, ringX: 295, ringY: 365, accent: 'cyan' },
          { x: 24, y: 458, width: 165, align: 'right', title: 'TOP3 实时榜', text: '票数随投随更', lineX: 196, lineY: 469, lineW: 23, ringX: 218, ringY: 461, accent: 'pink' },
          { x: 24, y: 578, width: 165, align: 'right', title: '我的排名常驻', text: '第 6 名、15 票 一眼可见', lineX: 196, lineY: 587, lineW: 32, ringX: 227, ringY: 580, accent: 'pink' },
          { x: 1112, y: 582, width: 168, align: 'left', title: '评选名单入口', text: '随时跳转投票', lineX: 403, lineY: 589, lineW: 703, ringX: 390, ringY: 581, accent: 'cyan' },
        ]}
        height={1100}
        imageLeft={202}
        principleHeight={130}
        principles={[
          { title: '交互原则 · 环境信息流', subtitle: 'AMBIENT INFORMATION · NON-BLOCKING', text: '榜单融进场景，主活动不被打断，竞争的紧张感却时刻在场。', accent: 'pink' },
        ]}
      />

      <ShotSection
        no="08"
        eyebrow="THE CORONATION"
        title="加冕时刻 · 全员见证"
        desc="评选落幕，全屏结算把名次升格成仪式 —— 不止冠军被看见，每个参选者都有姓名。"
        src={qqAssets.result}
        caption="▲ 温泉选美结算 · TOP6 名单（点击空白区域继续）"
        accent="gold"
        callouts={[
          { x: 1107, y: 395, width: 165, align: 'left', title: '仪式化标题', text: '温泉选美结束\n全屏聚焦', lineX: 815, lineY: 405, lineW: 280, ringX: 802, ringY: 397, accent: 'gold' },
          { x: 12, y: 463, width: 165, align: 'right', title: '冠军置顶', text: '30 票、第一行加冕', lineX: 183, lineY: 474, lineW: 281, ringX: 463, ringY: 466, accent: 'pink' },
          { x: 1107, y: 698, width: 168, align: 'left', title: '自己也被点亮', text: '青色高亮 不被淹没', lineX: 1061, lineY: 709, lineW: 34, ringX: 1048, ringY: 701, accent: 'cyan' },
          { x: 9, y: 774, width: 168, align: 'right', title: '轻触即离场', text: '点击空白继续 零打扰', lineX: 183, lineY: 785, lineW: 301, ringX: 483, ringY: 777, accent: 'gold' },
        ]}
        height={1080}
        principleHeight={120}
        principles={[
          { title: '交互原则 · 峰终定律', subtitle: 'PEAK-END RULE', text: '加冕全屏是情绪峰值，名单上自己的高亮是温柔结尾，让这 15 分钟值得下次再来。', accent: 'gold' },
        ]}
      />

      <section className="qq-page qq-journey">
        <SectionHeader no="09" eyebrow="THE FLOW JOURNEY" title="心流历程 · 15 分钟的情绪曲线" desc="从泡进汤池的松弛，到口号登台的表现欲，再到加冕一刻的全场聚焦 —— 节奏层层递进。" />
        <div className="qq-curve-panel">
          <span className="qq-axis-y">↑ 情绪 / 参与度</span>
          <span className="qq-axis-x">单场进程 15:00 →</span>
          <span className="qq-axis-line-y" />
          <span className="qq-axis-line-x" />
          <img className="qq-curve-img" src={qqAssets.flowCurve} alt="清泉沐浴心流曲线" loading="lazy" decoding="async" />

          <span className="qq-journey-dot m1" />
          <span className="qq-journey-dot m2" />
          <span className="qq-journey-dot m3" />
          <span className="qq-journey-dot m4" />
          <span className="qq-journey-dot m5 peak" />
          <span className="qq-journey-dot m6" />

          <div className="qq-journey-copy c1"><b>好奇 · 入场</b><span>弹窗一键赴汤</span></div>
          <div className="qq-journey-copy c2"><b>松弛 · 汤池</b><span>喜悦度静静上涨</span></div>
          <div className="qq-journey-copy c3"><b>表现欲 · 报名</b><span>录下自己的口号</span></div>
          <div className="qq-journey-copy c4"><b>悬念 · 拉票</b><span>票数你追我赶</span></div>
          <div className="qq-journey-copy c5 peak"><b>巅峰 · 加冕</b><span>全场目光聚焦</span></div>
          <div className="qq-journey-copy c6"><b>余韵 · 留念</b><span>名单上有我一行</span></div>
          <p className="qq-caption">▲ 单场清泉沐浴 · 玩家情绪曲线（示意图）</p>
        </div>
        <div className="qq-player-cards">
          <article><b>躺</b><h3>挂机型玩家</h3><p>泡着就涨喜悦度 —— 零操作也有收益与陪伴感，下班挂机正合适。</p></article>
          <article><b>秀</b><h3>表达型玩家</h3><p>口号是 15 秒个人舞台，拉票是社交货币 —— 表现欲有了出口。</p></article>
          <article><b>瓜</b><h3>围观型玩家</h3><p>不参选也能投票起哄、刷花瓣抢红包 —— 看热闹本身就是玩法。</p></article>
        </div>
      </section>

      <section className="qq-page qq-reference">
        <SectionHeader no="10" eyebrow="DESIGN REFERENCES" title="设计参考 · 选美即直播间" desc="温泉之星的互动语言，借自玩家早已熟练的两套体系 —— MMO 温泉社交与直播间打赏文化。" accent="cyan" />
        <article className="qq-ref-card hot"><img src={qqAssets.refHotSpring} alt="剑网3挂机温泉参考" /><h3>《剑网3》挂机温泉</h3><h4>MMO HOT-SPRING SOCIAL</h4><p>夜色汤池 + 暖光水面的松弛场景，验证了「低操作高陪伴」社交的长线生命力。</p></article>
        <article className="qq-ref-card live"><img src={qqAssets.refLive} alt="直播间打赏参考" /><h3>直播间打赏文化</h3><h4>LIVE-STREAMING CULTURE</h4><p>礼物、弹幕、点赞是玩家肌肉记忆级的互动语言 —— 平移进温泉，无需教学就会用。</p></article>
        <div className="qq-map-panel">
          <h3 className="left">直播间</h3><h3 className="right">温泉之星</h3>
          {[['礼物打赏','花瓣 · 红包','pink'],['弹幕刷屏','弹幕开关','cyan'],['连麦才艺','语音口号','pink'],['点赞人气','心形票数','gold']].map((row, i) => (
            <div className="qq-map-row" style={{ top: 70 + i * 82 }} key={row[0]}>
              <span className="qq-chip left">{row[0]}</span><i /><span className={`qq-chip right ${row[2]}`}>{row[1]}</span>
            </div>
          ))}
        </div>
        <div className="qq-art-note">界面美术随之克制：深灰底板退后、只给可操作项上色（蓝 = 报名 / 橙 = 名单 / 粉 = 投票）—— 夜汤场景里，色彩即指引。</div>
      </section>

      <section className="qq-closing">
        <span className="qq-final-glow g1" /><span className="qq-final-glow g2" />
        <span className="qq-final-ring r1" /><span className="qq-final-ring r2" />
        <span className="qq-final-petal fp1" /><span className="qq-final-petal fp2" /><span className="qq-final-petal fp3" /><span className="qq-final-petal fp4" /><span className="qq-final-petal fp5" /><span className="qq-final-petal fp6" />
        <p className="qq-closing-over">结语 · IN CLOSING</p>
        <h2>把一池温水<br />烧成全帮的烟火气</h2>
        <p className="qq-closing-desc">清泉沐浴优化 —— 挂机有了陪伴，表达有了舞台，围观也成了参与。</p>
        <div className="qq-metrics">
          <Metric value="15:00" label="单场时长" />
          <Metric value="3 级" label="喜悦度氛围" />
          <Metric value="5 票" label="稀缺投票" />
          <Metric value="1 位" label="温泉之星" />
        </div>
        <p className="qq-thanks">交互设计案例 · 感谢观看</p>
      </section>
    </div>
  );
}
