import './TempleExactCase.css';

/* ===== Assets =====
   Local copies of the Figma exports. These pointed at figma.com/api/mcp/asset URLs, which
   Figma expires after ~7 days — every screenshot on the page had gone dead. Each was
   re-exported at 2x and cropped to its node box: Figma bakes the surrounding page
   background and a downward-offset drop shadow into the PNG. Node ids kept for re-pulling. */
const TP = '/images/qingyu/temple';
const A = {
  p06:  `${TP}/p06-entry.webp`,           // Figma 9817:17769 入口
  p07a: `${TP}/p07a-energy.webp`,         // Figma 9817:17801 全服能量
  p07b: `${TP}/p07b-energy-detail.webp`,  // Figma 9817:17815
  p08:  `${TP}/p08-rank.webp`,            // Figma 9817:17861 进度排行
  p09:  `${TP}/p09-main.webp`,            // Figma 9817:17912 秘境主界面
  p10a: `${TP}/p10a-explore.webp`,        // Figma 9817:17934 探索链路
  p10b: `${TP}/p10b-explore-detail.webp`, // Figma 9817:17943
  p10c: `${TP}/p10c-path.webp`,           // Figma 9817:17994
  p11a: `${TP}/p11a-event.webp`,          // Figma 9817:18041 奇遇事件
  p11b: `${TP}/p11b-event.webp`,          // Figma 9817:18052
  p11c: `${TP}/p11c-event.webp`,          // Figma 9817:18057
  p12a: `${TP}/p12a-boss.webp`,           // Figma 9817:18183 遗迹首领
  p12b: `${TP}/p12b-boss.webp`,           // Figma 9817:18200
  p12c: `${TP}/p12c-boss-card.webp`,      // Figma 9817:18251
  p13a: `${TP}/p13a-reward.webp`,         // Figma 9817:18296 奖励结算
  p13b: `${TP}/p13b-reward.webp`,         // Figma 9817:18302
  p14a: `${TP}/p14a-envoy.webp`,          // Figma 9817:18324 遗迹使者
  p14b: `${TP}/p14b-envoy.webp`,          // Figma 9817:18380
  p15:  `${TP}/p15-fault.webp`,           // Figma 9817:18394 容错与运营弹性
  p16a: `${TP}/p16a-ref.webp`,            // Figma 9817:18464 美术参考 1
  p16b: `${TP}/p16b-ref.webp`,            // Figma 9817:18469 美术参考 2
  p16c: `${TP}/p16c-ref.webp`,            // Figma 9817:18474 美术参考 3
  p16d: `${TP}/p16d-ref.webp`,            // Figma 9817:18479 美术参考 4
};

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

/* ===== Section Header ===== */
type Tone = 'teal' | 'gold' | 'red';

function SectionHeader({ no, eng, title }: { no: string; eng: string; title: string }) {
  return (
    <div className="tp-hdr">
      <span className="tp-hdr-tile">{no}</span>
      <h2>{title}</h2>
      <span className="tp-hdr-eng">{eng}</span>
    </div>
  );
}

/* ===== Number circle annotation ===== */
/* Board primitives shared by the nine screen-analysis pages. */
function Tag({ n }: { n: string }) {
  return <span className="tp-tag">界面分析 {n}</span>;
}

function Shot({ src, x, y, w, h, gold = false, style }: { src: string; x?: number; y?: number; w?: number; h?: number; gold?: boolean; style?: React.CSSProperties }) {
  return (
    <div className={`tp-shot${gold ? ' gold' : ''}`} style={style ?? { left: x, top: y, width: w, height: h }}>
      <Img src={src} />
    </div>
  );
}

function Cap({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return <p className="tp-cap" style={{ left: x, top: y }}>{children}</p>;
}

/** 30px marker sitting on a screenshot, in board coordinates. */
function Pin({ n, x, y }: { n: number; x: number; y: number }) {
  return <b className="tp-pin" style={{ left: x, top: y }}>{n}</b>;
}

/** Numbered legend row: 26px disc, title, body. `sm` is the 19px/24px variant. */
function Legend({ n, x, y, title, body, w, sm = false }: { n: number; x: number; y: number; title: string; body: string; w: number; sm?: boolean }) {
  return (
    <div className={`tp-lg${sm ? ' sm' : ''}`} style={{ left: x, top: y }}>
      <b>{n}</b>
      <h4>{title}</h4>
      <p style={{ width: w }}>{body}</p>
    </div>
  );
}

function FlowBar({ steps }: { steps: string[] }) {
  return (
    <div className="tp-flow-bar">
      {steps.map((t, i) => (
        <span key={t} className="tp-flow-step">{t}{i < steps.length - 1 && <span className="tp-flow-arrow">→</span>}</span>
      ))}
    </div>
  );
}

/* TEMPORARY: P08-P17 still use the pre-rebuild API. Removed once they are converted. */
function Anno({ num, title, desc, style }: { num: string; title: string; desc: string; tone?: Tone; style?: React.CSSProperties }) {
  return (
    <div className="tp-lg" style={style}>
      <b>{num}</b>
      <h4>{title}</h4>
      <p style={{ width: 248 }}>{desc}</p>
    </div>
  );
}

function IntentBar({ text }: { text: string }) {
  return (
    <div className="tp-intent">
      <span>设计意图</span>
      <p>{text}</p>
    </div>
  );
}


/* P04 timeline days: [dot x, label, colour]. */
const templeDays = [
  [169, '周一', '#6fd8e0'], [324, '周二', '#6fd8e0'], [480, '周三', '#6fd8e0'],
  [635, '周四', '#6fd8e0'], [790, '周五', '#6fd8e0'], [946, '周六', '#e1584f'], [1101, '周日', '#d9a441'],
] as const;

/* P04 steps snake across two rows: [no, title, sub, x, y, tone]. */
const templeSteps = [
  ['1', '大世界入口', '活动矩阵 · 红点提示', 96, 487, 'teal'],
  ['2', '神庙主界面', '日常活动攒全服能量', 372, 487, 'teal'],
  ['3', '能量 100%', '「进入秘境」点亮', 648, 487, 'gold'],
  ['4', '副本地图', '选区域目标 · 前往', 924, 487, 'teal'],
  ['5', '探索副本', '自动寻路 · 完成事件', 924, 661, 'teal'],
  ['6', '激活首领', '周探索值达 1000', 648, 661, 'gold'],
  ['7', '周六决战', '限时挑战 · 实时排名', 372, 661, 'red'],
  ['8', '邮件结算', '奖励发放 · 进入下一周', 96, 661, 'gold'],
] as const;

/* P03 modules: [title, eng, three rows, tone] — columns step 296px from x=96. */
const templeModules = [
  ['遗迹探索', 'SERVER ENERGY', ['全服能量进度条', '里程碑宝箱奖励', '服务器进度排行'], 'teal'],
  ['个人探索', 'PERSONAL EVENTS', ['周探索事件清单', '特殊奇遇事件', '副本地图 · 自动寻路'], 'teal'],
  ['遗迹首领', 'WEEKLY BOSS', ['探索值1000激活', '周六限时决战', '伤害 / 奖励排行'], 'red'],
  ['遗迹使者', 'ROAMING ENVOY', ['多实例 1-4号', '刷新倒计时', '参与·尾刀次数上限'], 'gold'],
] as const;

/* [x, y, diameter, opacity] — board coordinates of the cover star field. */
const coverStars = [
  [90, 120, 6, 0.5], [230, 80, 4, 0.3], [420, 150, 5, 0.4], [640, 60, 4, 0.35],
  [1120, 90, 6, 0.5], [1210, 260, 4, 0.3], [1190, 640, 5, 0.35], [150, 540, 4, 0.3],
  [60, 709, 5, 0.3], [330, 640, 4, 0.25], [760, 110, 4, 0.4], [1010, 160, 5, 0.45],
  [520, 260, 4, 0.3], [1240, 460, 4, 0.4], [200, 300, 4, 0.35],
] as const;

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export function TempleExactCase() {
  return (
    <div className="tp-canvas">

      {/* ===== P01 · Cover ===== */}
      <section className="tp-sec tp-cover">
        {/* Concentric rings, star field and the two-layer ridge, all in board coordinates. */}
        <svg className="tp-cover-sky" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <circle cx="880" cy="379" r="339.5" fill="none" stroke="rgba(111,216,224,.10)" strokeWidth="1" />
          <circle cx="880" cy="430" r="279" fill="none" stroke="rgba(111,216,224,.30)" strokeWidth="2" />
          <circle cx="880" cy="430" r="249.25" fill="none" stroke="rgba(217,164,65,.55)" strokeWidth="1.5" />
          <circle cx="880" cy="430" r="209.25" fill="none" stroke="rgba(111,216,224,.18)" strokeWidth="1.5" />
          <circle cx="880" cy="430" r="149.5" fill="none" stroke="rgba(111,216,224,.50)" strokeWidth="1" />
          {coverStars.map(([x, y, d, o]) => (
            <circle key={`${x}-${y}`} cx={x + d / 2} cy={y + d / 2} r={d / 2} fill="#edf4f7" fillOpacity={o} />
          ))}
          <path d="M0 900V800l170-120 130 90 130-120 130 110 80-40 120 90 140-190 140 160 120-70 120 80v110H0Z" fill="#15263c" />
          <path d="M0 900v-40l220-100 140 80 160-100 180 110 180-140 170 130 150-60 80 60v110H0Z" fill="#101d30" />
        </svg>
        <span className="tp-cover-spark" />
        <div className="tp-cover-badge"><span>庆</span></div>
        <p className="tp-cover-subtitle">《庆余年》手游 · 玩法交互设计案</p>
        <p className="tp-cover-eng">TEMPLE RUINS · CROSS-SERVER GAMEPLAY DESIGN</p>
        <h1 className="tp-cover-title">神庙遗迹</h1>
        <p className="tp-cover-tagline">跨服玩法 · 交互设计</p>
      </section>

      {/* ===== P02 · Overview ===== */}
      <section className="tp-sec tp-overview">
        <SectionHeader no="01" title="玩法总览" eng="OVERVIEW · THREE-LAYER GOAL NESTING" />
        <p className="tp-quote">“ 让个人的每一次日常，都成为跨服之门的一次充能 ”</p>
        <p className="tp-lead">神庙遗迹是一套以「全服能量」为钥匙的跨服探索玩法：全服玩家完成日常活动共同充能，能量满后开启跨服秘境；秘境内以个人探索值激活每周六的遗迹首领决战，并以遗迹使者作为全周补充目标。</p>

        <svg className="tp-venn" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <circle cx="370" cy="649" r="219" fill="rgba(200,50,43,.07)" stroke="rgba(200,50,43,.9)" strokeWidth="2" />
          <circle cx="370" cy="649" r="149" fill="rgba(217,164,65,.07)" stroke="rgba(217,164,65,.95)" strokeWidth="2" />
          <circle cx="370" cy="649" r="79" fill="rgba(111,216,224,.07)" stroke="rgba(111,216,224,1)" strokeWidth="2" />
          <line x1="426" y1="593" x2="582" y2="528" stroke="rgba(111,216,224,.6)" strokeWidth="1.5" />
          <line x1="476" y1="755" x2="566" y2="781" stroke="rgba(217,164,65,.6)" strokeWidth="1.5" />
          <line x1="370" y1="429" x2="251" y2="409" stroke="rgba(225,88,79,.6)" strokeWidth="1.5" />
          <circle cx="370" cy="649" r="7" fill="#edf4f7" />
          <circle cx="426" cy="593" r="5" fill="#6fd8e0" />
          <circle cx="476" cy="755" r="5" fill="#d9a441" />
          <circle cx="370" cy="430" r="5" fill="#e1584f" />
        </svg>
        <h3 className="tp-venn-t teal">个人日常</h3>
        <p className="tp-venn-p teal">完成探索事件<br />获得能量与探索值</p>
        <h3 className="tp-venn-t gold">全服能量</h3>
        <p className="tp-venn-p gold">全服共享进度 6000 / 10000</p>
        <h3 className="tp-venn-t red">跨服秘境</h3>
        <p className="tp-venn-p red">能量 100% 后<br />与他服共探新世界</p>

        <article className="tp-kpi gold"><b>6000 / 10000</b><span>全服能量 · 达 100% 解锁「进入秘境」</span></article>
        <article className="tp-kpi teal"><b>1000 点</b><span>周探索值 · 达成后激活遗迹首领</span></article>
        <article className="tp-kpi red"><b>周六 20:00-20:30</b><span>遗迹首领限时刷新 · 全服同屏决战</span></article>
      </section>

      {/* ===== P03 · System Breakdown ===== */}
      <section className="tp-sec tp-breakdown">
        <SectionHeader no="02" title="系统解构" eng="SYSTEM BREAKDOWN · FOUR MODULES" />
        <div className="tp-bd-root">神庙遗迹</div>
        <svg className="tp-bd-tree" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <rect x="639" y="285" width="2" height="72" fill="rgba(217,164,65,.7)" />
          <rect x="196" y="357" width="888" height="2" fill="rgba(143,163,184,.45)" />
          {([[195, '111,216,224'], [491, '111,216,224'], [787, '225,88,79'], [1083, '217,164,65']] as const).map(([x, c]) => (
            <g key={x}>
              <rect x={x} y="357" width="2" height="70" fill={`rgba(${c},.8)`} />
              <circle cx={x + 1} cy="358" r="4" fill={`rgb(${c})`} />
            </g>
          ))}
        </svg>
        {templeModules.map(([title, eng, rows, tone], i) => (
          <div className="tp-mod" key={title} style={{ left: 96 + i * 296 }}>
            <div className={`tp-mod-hd ${tone}`}>
              <h3>{title}</h3>
              <span>{eng}</span>
            </div>
            {rows.map((r, k) => <p key={r} style={{ top: 98 + k * 56 }}>{r}</p>)}
          </div>
        ))}
        <p className="tp-bd-note">四大模块共用一套支撑系统，保证反馈与奖励链路在任何模块下行为一致，降低学习成本</p>
        <div className="tp-support">
          <b>通用支撑</b>
          {([['排行榜', 317, 84], ['邮件发放', 417, 100], ['红点提示', 533, 100], ['系统播报 Toast', 649, 144], ['二次确认弹窗', 809, 132], ['奖励预览', 957, 100]] as const).map(([t, x, w]) => (
            <span key={t} style={{ left: x - 193, width: w }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ===== P04 · Weekly Loop ===== */}
      <section className="tp-sec tp-weekly">
        <SectionHeader no="03" title="一周玩法循环" eng="WEEKLY LOOP & SCREEN FLOW" />

        <svg className="tp-wk-svg" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <rect x="174" y="287" width="932.6" height="1.5" fill="rgba(143,163,184,.4)" />
          {templeDays.map(([x, , c]) => <circle key={x} cx={x + 5} cy="287" r="5" fill={c} />)}
          {[340, 616, 892].map((x) => (
            <path key={x} d={`M${x} 535h18M${x + 12} 529l7 6-7 6`} fill="none" stroke="#d9a441" strokeWidth="2.5" />
          ))}
          {[340, 616, 892].map((x) => (
            <path key={`b${x}`} d={`M${x + 24} 709h-18M${x + 12} 703l-7 6 7 6`} fill="none" stroke="#d9a441" strokeWidth="2.5" />
          ))}
          <path d="M1042 613v12M1036 621l6 6 6-6" fill="none" stroke="#d9a441" strokeWidth="2.5" />
          <path d="M82 715H48c-8 0-12-4-12-12V547c0-8 4-12 12-12h34" fill="none" stroke="#6fd8e0" strokeWidth="2" strokeDasharray="5 7" />
        </svg>
        <span className="tp-wk-loop">周循环</span>

        {templeDays.map(([x, label]) => <span className="tp-wk-day" key={label} style={{ left: x - 11 }}>{label}</span>)}

        <div className="tp-wk-phase teal" />
        <div className="tp-wk-phase red" />
        <div className="tp-wk-phase gold" />
        <h4 className="tp-wk-pt teal">探索期 · 周一至周五</h4>
        <p className="tp-wk-pd teal">个人探索事件 · 特殊奇遇 · 积攒探索值与全服能量（周一 05:00 刷新，跨服共享进度）</p>
        <h4 className="tp-wk-pt red">决战 · 周六</h4>
        <p className="tp-wk-pd red">20:00-20:30 首领限时</p>
        <h4 className="tp-wk-pt gold">结算 · 周日</h4>
        <p className="tp-wk-pd gold">奖励邮件发放</p>

        {templeSteps.map(([no, title, sub, x, y, tone]) => (
          <article className={`tp-step ${tone}`} key={no} style={{ left: x, top: y }}>
            <b>{no}</b>
            <h4>{title}</h4>
            <span>{sub}</span>
          </article>
        ))}
      </section>

      {/* ===== P05 · Flow curve ===== */}
      <section className="tp-sec tp-flowcurve">
        <SectionHeader no="04" title="玩家心流历程" eng="FLOW CURVE · ONE WEEK" />

        <div className="tp-fc-band hi" />
        <div className="tp-fc-band lo" />
        <span className="tp-fc-zone hi">高心流区</span>
        <span className="tp-fc-zone lo">低心流区</span>
        <span className="tp-fc-axis-y">FLOW</span>
        <span className="tp-fc-axis-x">T · 一周</span>

        <svg className="tp-fc-svg" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <rect x="140" y="450" width="1010" height="1.5" fill="rgba(237,244,247,.35)" />
          <path d="M138 258v380h1020M132 266l6-10 6 10M1150 632l10 6-10 6" fill="none" stroke="#8fa3b8" strokeWidth="2" />
          <path d="M510 455v175M900 440v190M1020 298v332M1090 410v220" stroke="#d9a441" strokeWidth="1.5" strokeDasharray="4 8" />
          <path
            d="M140 580C190 565 230 590 280 575C330 560 370 585 420 570C460 560 480 520 510 455C530 410 550 470 570 515C610 550 660 570 700 560C780 540 840 500 900 440C950 380 980 310 1020 298C1050 290 1070 330 1090 410C1110 490 1130 550 1150 570"
            fill="none" stroke="#ffe8d3" strokeWidth="4" />
          {[[510, 455], [900, 440], [1020, 298], [1090, 410]].map(([x, y]) => (
            <path key={x} d={`M${x} ${y - 12}l3 8.5h9l-7.2 5.5 2.7 9L${x} ${y + 5.6}l-7.5 5.4 2.7-9-7.2-5.5h9Z`} fill="#d9a441" />
          ))}
        </svg>

        <h4 className="tp-fc-t" style={{ left: 290, top: 366 }}>奇遇触发 · 小高峰</h4>
        <p className="tp-fc-p" style={{ left: 290, top: 394 }}>特殊探索事件 打破重复感</p>
        <h4 className="tp-fc-t" style={{ left: 700, top: 366 }}>首领激活 · 期待爬升</h4>
        <p className="tp-fc-p" style={{ left: 700, top: 394 }}>周探索值达成 目标在望</p>
        <h4 className="tp-fc-t" style={{ left: 810, top: 258 }}>周六决战 · 体验巅峰</h4>
        <p className="tp-fc-p" style={{ left: 843, top: 286 }}>全服同屏 限时 30 分钟</p>
        <h4 className="tp-fc-t" style={{ left: 1007, top: 460 }}>邮件结算 · 回落蓄力</h4>
        <p className="tp-fc-p" style={{ left: 1049, top: 488 }}>奖励落袋 等待下一周</p>

        <article className="tp-scene teal">
          <svg viewBox="0 0 34 34" fill="none" stroke="#6fd8e0" strokeWidth="2.5" aria-hidden>
            <circle cx="17" cy="17" r="14" /><path d="M17 9v8l6 4" />
          </svg>
          <h4>碎片日常 · 周一至周五</h4>
          <p>通勤十分钟：自动寻路+自动战斗，顺手完成 1-2 个探索事件，无压力积累</p>
        </article>
        <article className="tp-scene gold">
          <svg viewBox="0 0 34 34" aria-hidden>
            <path d="M17 2l3 11 11 4-11 4-3 11-3-11-11-4 11-4 3-11Z" fill="#d9a441" />
          </svg>
          <h4>奇遇时刻 · 随机触发</h4>
          <p>特殊探索事件以专属 Toast 开场，可变奖励制造惊喜，重新点燃探索欲</p>
        </article>
        <article className="tp-scene red">
          <svg viewBox="0 0 34 34" fill="none" aria-hidden>
            <path d="M17 3c3 7 10 9 9 17-1 7-6 11-9 11s-8-4-9-11c-1-8 6-10 9-17Z" stroke="#e15850" strokeWidth="2.5" />
            <path d="M17 14c2 4 4 5 3 9-1 3-2 4-3 4s-2-1-3-4c-1-4 1-5 3-9Z" fill="#e15850" />
          </svg>
          <h4>周六之夜 · 全服赴约</h4>
          <p>20:00 黄金时段全服同屏决战，实时排名点燃竞争，构成一周的社交记忆点</p>
        </article>
      </section>

      {/* ===== P06 · Entry HUD ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="05" title="入口 · 玩法第一触点" eng="SCREEN ANALYSIS 01 — WORLD HUD ENTRY" />
        <Tag n="①" />
        <Shot src={A.p06} x={424} y={232} w={760} h={427.5} />
        <Cap x={424} y={668}>常规大世界主界面 · 1920×1080</Cap>
        <Pin n={1} x={1003} y={242} />
        <Pin n={2} x={750} y={312} />
        <Legend n={1} x={96} y={250} w={248} title="活动矩阵 · 同类聚合"
          body="玩法与运营入口统一收纳于右上矩阵，依格式塔邻近原则分组排列，玩家按位置肌肉记忆即可定位，无需逐个辨认" />
        <Legend n={2} x={96} y={415} w={248} title="红点提示 · 外部触发"
          body="新玩法上线以红点打破注意盲区，作为外部触发器引导首次点击，零成本完成新玩法曝光（Fogg 行为模型：触发先行）" />
        <IntentBar text="不改动主线 HUD 结构、不打断战斗操作，仅凭「位置惯例 + 红点」让新玩法获得自然流量" />
      </section>

      {/* ===== P07 · Server Energy Hub ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="06" title="主界面 · 全服能量 · 共同的目标" eng="SCREEN ANALYSIS 02 — SERVER ENERGY HUB" />
        <Tag n="②" />
        <Shot src={A.p07a} x={96} y={210} w={760} h={427.5} />
        <Cap x={96} y={646}>神庙遗迹主界面 · 能量积攒中</Cap>
        <Pin n={1} x={572} y={296} />
        <Pin n={2} x={271} y={334} />
        <Pin n={3} x={619} y={379} />
        <Pin n={4} x={393} y={560} />
        <span className="tp-goldtag" style={{ left: 757, top: 598 }}>能量 100% · 解锁时刻</span>
        <Shot src={A.p07b} x={757} y={629} w={427} h={240} gold />
        <Pin n={5} x={923} y={814} />
        <Legend sm n={1} x={900} y={210} w={244} title="全服进度 + 里程碑" body="目标梯度效应：越近终点动机越强；里程碑把长目标切成短反馈" />
        <Legend sm n={2} x={900} y={298} w={244} title="能量气泡 · 数据场景化" body="各服能量化作雪山灯环，抽象数值变成可感知的世界状态" />
        <Legend sm n={3} x={900} y={386} w={244} title="任务清单 · 行动闭环" body="「前往」一键直达，「已完成」即时置灰，行为与反馈一一对应" />
        <Legend sm n={4} x={900} y={474} w={244} title="未达条件 · 防错置灰" body="条件未达时按钮置灰，预先消除无效点击" />
        <div className="tp-lg sm wide" style={{ left: 98, top: 801 }}>
          <b>5</b>
          <h4>未达条件 · 防错置灰</h4>
          <p style={{ width: 560 }}>能量 100%：「进入秘境」由置灰点亮为鎏金 —— 用状态可见性宣告解锁，<br />让全服共同努力的结果落在一颗按钮的仪式感上</p>
        </div>
      </section>

      {/* ===== P08 · Server Ranking ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="07" eng="SCREEN ANALYSIS 03 — SERVER RANKING" title="进度排行 · 服务器的较量" />
        <div className="tp-badge-label teal" style={{ left: 96, top: 200 }}>界面分析 ①②③</div>

        <Shot src={A.p08} style={{ left: 96, top: 225, width: 740, height: 416 }} />

        <Anno num="①" title="服务器维度·集体较量" tone="teal"
          desc="排行以服务器为单位，将个人行动升华为集体荣誉竞争，激活社会认同驱动力。"
          style={{ left: 870, top: 260 }} />
        <Anno num="②" title="永远看得见自己" tone="gold"
          desc="用户所在服务器始终固定显示在列表可视区域，无论排名高低都能感知自己的位置。"
          style={{ left: 870, top: 390 }} />
        <Anno num="③" title="更新频率前置说明" tone="teal"
          desc="「每小时更新」的说明前置，管理玩家对实时性的预期，避免因数据延迟产生误解。"
          style={{ left: 870, top: 520 }} />

        <IntentBar text="排行榜的核心是让每个参与者都能「看见自己在哪里」—— 永久置顶自身服务器，确保个人感知与集体竞争同步在场。" />
      </section>

      {/* ===== P09 · Sanctum Hub Layout ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="08" eng="SCREEN ANALYSIS 04 — SANCTUM HUB LAYOUT" title="秘境主界面 · 三区动线" />
        <div className="tp-badge-label teal" style={{ left: 96, top: 162 }}>界面分析 A · B · C</div>

        <Shot src={A.p09} style={{ left: 150, top: 187, width: 980, height: 551 }} />

        {/* Zone annotations */}
        <div className="tp-zone-anno teal" style={{ left: 96, top: 300 }}>
          <span className="tp-zone-badge teal">A</span>
          <div>
            <h4>个人区·视线起点</h4>
            <p>探索值进度居左置顶，玩家打开界面第一眼先看到「自己做了多少」。</p>
          </div>
        </div>
        <div className="tp-zone-anno gold" style={{ left: 430, top: 760 }}>
          <span className="tp-zone-badge gold">B</span>
          <div>
            <h4>目标区·情感锚点</h4>
            <p>首领立绘+解锁进度居中，高对比度设计强化本周终极目标的存在感。</p>
          </div>
        </div>
        <div className="tp-zone-anno red" style={{ left: 960, top: 300 }}>
          <span className="tp-zone-badge red">C</span>
          <div>
            <h4>导航区·低频右置</h4>
            <p>排行榜/规则等低频功能入口靠右，不抢占主视区注意力。</p>
          </div>
        </div>
      </section>

      {/* ===== P10 · Exploration Pipeline ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="09" eng="SCREEN ANALYSIS 05 — EXPLORATION PIPELINE" title="探索事件 · 从战场→地图→战场" />
        <div className="tp-badge-label teal" style={{ left: 96, top: 215 }}>界面分析 ①②③④⑤⑥</div>

        <Shot src={A.p10c} style={{ left: 96, top: 271, width: 182, height: 263 }} />
        <Shot src={A.p10a} style={{ left: 338, top: 271, width: 463, height: 260 }} />
        <Shot src={A.p10b} style={{ left: 651, top: 549, width: 533, height: 300 }} />

        <FlowBar steps={['选定目标', '前往', '自动寻路', '抵达战斗', '小地图', '任务详情', '计数达成']} />

        <Anno num="①" title="任务列表·锁定目标" tone="teal"
          desc="战斗中任务面板始终可见，明确当前应做什么、还差多少。"
          style={{ left: 96, top: 580 }} />
        <Anno num="②" title="自动寻路·零摩擦前往" tone="teal"
          desc="一键触发自动寻路，省去手动导航步骤，降低探索门槛。"
          style={{ left: 96, top: 700 }} />
        <Anno num="③" title="战斗界面·计数反馈" tone="gold"
          desc="击败目标后计数即时更新，行动→反馈闭环清晰，保持心流。"
          style={{ left: 310, top: 570 }} />
        <Anno num="④" title="战斗胜利·推进感" tone="teal"
          desc="战斗结算时同步显示探索值进度，让每场战斗都与大目标直接挂钩。"
          style={{ left: 310, top: 690 }} />
        <Anno num="⑤" title="小地图·全局感知" tone="gold"
          desc="小地图展示周边事件点，方便就近选择下一目标，减少空跑时间。"
          style={{ left: 870, top: 580 }} />
        <Anno num="⑥" title="任务详情·进度可查" tone="teal"
          desc="随时可查看当前周任务完成情况，掌握整体进度不需要返回主界面。"
          style={{ left: 870, top: 700 }} />
      </section>

      {/* ===== P11 · Surprise Events ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="10" eng="SCREEN ANALYSIS 06 — SURPRISE EVENTS" title="奇遇事件 · 惊喜的设计" />
        <div className="tp-badge-label gold" style={{ left: 96, top: 215 }}>界面分析 ①②③④⑤⑥</div>

        <Shot src={A.p11a} style={{ left: 96, top: 265, width: 498, height: 280 }} />
        <Shot src={A.p11b} style={{ left: 686, top: 265, width: 498, height: 280 }} />
        <Shot src={A.p11c} style={{ left: 686, top: 588, width: 498, height: 280 }} />

        <FlowBar steps={['个人探索副本完成', '奇遇事件', '前往', '自动寻路', '抵达战斗', '任务达成']} />

        <Anno num="①" title="奇遇触发·打破预期" tone="gold"
          desc="奇遇事件随机触发于副本完成后，意外性制造情绪高点，防止探索日常化。"
          style={{ left: 96, top: 590 }} />
        <Anno num="②" title="时限机制·制造紧迫" tone="red"
          desc="奇遇事件设有倒计时，敦促玩家立即响应，防止拖延导致错过。"
          style={{ left: 96, top: 710 }} />
        <Anno num="③" title="奖励前置·驱动行动" tone="gold"
          desc="弹窗首屏直接展示奖励内容，明确告知「去了有什么」，降低行动门槛。"
          style={{ left: 96, top: 800 }} />
        <Anno num="④" title="进度可视·过程感知" tone="teal"
          desc="奇遇进行中显示阶段进度，让玩家感知「快完成了」的临近感。"
          style={{ left: 650, top: 590 }} />
        <Anno num="⑤" title="完成态·仪式感收尾" tone="gold"
          desc="完成弹窗设计独特，与普通任务结算区分，强化奇遇事件的特殊体验感。"
          style={{ left: 650, top: 710 }} />
        <Anno num="⑥" title="探索值联动·大目标串联" tone="teal"
          desc="奇遇完成同步贡献探索值，让单个惊喜事件也与全周目标保持关联。"
          style={{ left: 650, top: 800 }} />
      </section>

      {/* ===== P12 · Weekly Boss ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="11" eng="SCREEN ANALYSIS 07 — WEEKLY BOSS" title="遗迹首领 · 激活" />
        <div className="tp-badge-label red" style={{ left: 96, top: 170 }}>界面分析 ①②③④⑤⑥⑦</div>

        <Shot src={A.p12a} style={{ left: 96, top: 198, width: 560, height: 315 }} />
        <Shot src={A.p12c} style={{ left: 877, top: 171, width: 188, height: 221 }} />
        <div className="tp-screen-label red" style={{ left: 624, top: 375 }}>遗迹首领已击败状态</div>
        <Shot src={A.p12b} style={{ left: 624, top: 399, width: 560, height: 315 }} />

        <Anno num="①" title="首领立绘·仪式感激活" tone="red"
          desc="高质量立绘在激活时全屏呈现，制造「重要事件」的仪式感与期待值。"
          style={{ left: 96, top: 555 }} />
        <Anno num="②" title="倒计时·限时压迫" tone="red"
          desc="周六限时30分钟窗口倒计时显示，制造稀缺感，驱动玩家在线时间集中。"
          style={{ left: 96, top: 680 }} />
        <Anno num="③" title="全服参与进度可见" tone="teal"
          desc="显示当前全服伤害总量，让个人行为与集体战绩直接挂钩。"
          style={{ left: 96, top: 800 }} />
        <Anno num="④" title="伤害排行·竞争激励" tone="red"
          desc="实时伤害排行可见，激活社会竞争本能，驱动玩家输出最大化。"
          style={{ left: 650, top: 460 }} />
        <Anno num="⑤" title="已击败状态·清晰反馈" tone="gold"
          desc="首领被击败后界面立即切换为击败状态，明确告知本周决战已结束。"
          style={{ left: 650, top: 570 }} />
        <Anno num="⑥" title="首领卡牌·收集感" tone="gold"
          desc="击败后解锁首领卡牌，将战胜体验转化为可保留的成就记录。"
          style={{ left: 650, top: 680 }} />
        <Anno num="⑦" title="奖励预览·行前透明" tone="teal"
          desc="首领激活界面提前展示奖励内容，确保参与决策前信息充分。"
          style={{ left: 650, top: 790 }} />
      </section>

      {/* ===== P13 · Reward & Settlement ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="12" eng="SCREEN ANALYSIS 08 — REWARD & SETTLEMENT" title="奖励与结算 · 期望管理" />
        <div className="tp-badge-label gold" style={{ left: 96, top: 190 }}>界面分析 ①②③④</div>

        <div className="tp-screen-label gold" style={{ left: 96, top: 195 }}>击败后状态</div>
        <Shot src={A.p13a} style={{ left: 96, top: 218, width: 440, height: 248 }} />
        <Shot src={A.p13b} style={{ left: 484, top: 336, width: 700, height: 394 }} />

        <Anno num="①" title="击败后状态·明确感知" tone="gold"
          desc="首领被击败后界面及时更新，玩家无需疑惑「还能打吗」，状态透明。"
          style={{ left: 96, top: 510 }} />
        <Anno num="②" title="奖励排行·公示公平" tone="gold"
          desc="伤害与奖励挂钩的排行结果全服公示，透明机制强化公平感知。"
          style={{ left: 96, top: 640 }} />
        <Anno num="③" title="个人伤害·贡献可查" tone="teal"
          desc="个人伤害量与排名清晰展示，让参与者感知自己的贡献被记录和认可。"
          style={{ left: 96, top: 760 }} />
        <Anno num="④" title="邮件发放·异步兜底" tone="gold"
          desc="奖励通过邮件异步发放，未能及时在线的玩家同样可以完整领取应得奖励。"
          style={{ left: 870, top: 510 }} />

        <IntentBar text="结算是本周玩法体验的收尾 —— 公示排名+邮件发放双通道，既满足竞争玩家的荣誉感需求，也保障普通玩家的利益公平。" />
      </section>

      {/* ===== P14 · Roaming Envoy ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="13" eng="SCREEN ANALYSIS 09 — ROAMING ENVOY" title="遗迹使者 · 稀缺与公平" />
        <div className="tp-badge-label gold" style={{ left: 96, top: 162 }}>界面分析 ①②③④⑤⑥</div>

        <Shot src={A.p14a} style={{ left: 96, top: 187, width: 711, height: 400 }} />
        <Shot src={A.p14b} style={{ left: 650, top: 564, width: 533, height: 300 }} />

        <Anno num="①" title="多实例·1-4号使者" tone="gold"
          desc="多实例设计让不同进度玩家有合适难度的使者可选，拉长玩法生命周期。"
          style={{ left: 830, top: 220 }} />
        <Anno num="②" title="刷新倒计时·稀缺性" tone="gold"
          desc="倒计时提示下次使者刷新时间，制造「错过了要等」的稀缺感知。"
          style={{ left: 830, top: 350 }} />
        <Anno num="③" title="参与次数上限·公平分配" tone="teal"
          desc="每名使者有参与次数上限，防止高频玩家垄断刷取，保护中低频玩家体验。"
          style={{ left: 830, top: 480 }} />
        <Anno num="④" title="尾刀次数限制·止损设计" tone="red"
          desc="单人尾刀次数有上限，防止卡刀投机行为破坏公平竞争环境。"
          style={{ left: 96, top: 640 }} />
        <Anno num="⑤" title="血量可见·参与决策" tone="gold"
          desc="使者当前血量实时显示，玩家可据此判断是否值得加入当前战局。"
          style={{ left: 96, top: 760 }} />
        <Anno num="⑥" title="战斗界面·即时信息" tone="teal"
          desc="战斗中显示实时伤害与排名，让玩家始终掌握自己的竞争位置。"
          style={{ left: 380, top: 760 }} />
      </section>

      {/* ===== P15 · Fault Tolerance ===== */}
      <section className="tp-sec tp-fault">
        <SectionHeader no="14" eng="FAULT TOLERANCE & LIVE-OPS FLEXIBILITY" title="容错与运营弹性" />

        <Shot src={A.p15} style={{ left: 96, top: 200, width: 620, height: 349 }} />

        <Anno num="①" title="防错·二次确认" tone="gold"
          desc="高代价操作（如消耗稀缺道具）触发二次确认弹窗，防止误触造成损失。"
          style={{ left: 96, top: 590 }} />
        <Anno num="②" title="确定可进·不一刀切" tone="teal"
          desc="条件未完全达标但确认可参与时，给出「继续」而非硬性拦截，尊重玩家判断。"
          style={{ left: 96, top: 710 }} />

        {/* Right side: three-channel reminder */}
        <div className="tp-channel-block" style={{ left: 760, top: 200 }}>
          <h3 className="tp-channel-title">奖励提醒 · 三通道兜底</h3>
          <div className="tp-channel-list">
            <div className="tp-channel-item">
              <span className="tp-channel-num teal">1</span>
              <div>
                <h4>Toast即时播报</h4>
                <p>活动关键节点（能量达标/首领激活/使者出现）触发全屏Toast，确保在线玩家零遗漏。</p>
              </div>
            </div>
            <div className="tp-channel-item">
              <span className="tp-channel-num gold">2</span>
              <div>
                <h4>系统聊天播报</h4>
                <p>系统频道滚动播报重要事件，挂机玩家回到游戏可通过聊天记录获知发生了什么。</p>
              </div>
            </div>
            <div className="tp-channel-item">
              <span className="tp-channel-num red">3</span>
              <div>
                <h4>邮件+红点</h4>
                <p>奖励发放后邮件通知+红点双重提示，确保离线玩家登录后第一时间感知并领取。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurable tags */}
        <div className="tp-config-bar" style={{ left: 96, top: 820 }}>
          <span className="tp-config-label">「可配置」贯穿全稿 · 为运营预留调参空间</span>
          <div className="tp-config-tags">
            {['提示文案', '奖励内容与数量', '事件完成次数', '首领立绘/名称', '活动介绍详情', '使者血量/数量', '里程碑数值'].map((t) => (
              <span key={t} className="tp-config-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== P16 · Art Reference ===== */}
      <section className="tp-sec tp-artref">
        <SectionHeader no="15" eng="ART DIRECTION & MARKET REFERENCES" title="界面美术 · 风格溯源" />
        <p className="tp-artref-sub" style={{ left: 96, top: 210 }}>
          为什么是黑白雪山？—— 交互稿的美术基调与玩法原型，皆有出处
        </p>

        {/* 2×2 grid */}
        <div className="tp-ref-grid" style={{ left: 96, top: 258 }}>
          <div className="tp-ref-item">
            <div className="tp-ref-img">
              <Img src={A.p16a} />
            </div>
            <h4 className="teal">《庆余年》手游 · 神庙雪山概念图</h4>
            <p>游戏内官方概念美术确立了「黑白雪山+古典建筑剪影」的视觉基调，交互稿的色彩方案和场景氛围直接来源于此。</p>
          </div>
          <div className="tp-ref-item">
            <div className="tp-ref-img">
              <Img src={A.p16b} />
            </div>
            <h4 className="gold">《魔兽世界》安其拉之门事件</h4>
            <p>经典的全服集体解锁玩法原型：全服玩家共同贡献资源以开启大型内容，验证了「共同目标」驱动玩家协作的玩法设计逻辑。</p>
          </div>
          <div className="tp-ref-item">
            <div className="tp-ref-img">
              <Img src={A.p16c} />
            </div>
            <h4 className="gold">《逆水寒》手游 · 世界首领追踪</h4>
            <p>开放世界首领的全服广播+追踪系统，为神庙首领的「Toast播报+系统频道」三通道提醒机制提供了可行性验证参考。</p>
          </div>
          <div className="tp-ref-item">
            <div className="tp-ref-img">
              <Img src={A.p16d} />
            </div>
            <h4 className="teal">《逆水寒》手游 · 水墨大地图</h4>
            <p>水墨风格的大地图美术语言与《庆余年》IP的古典东方气质高度契合，是副本地图界面美术方向的核心参考坐标。</p>
          </div>
        </div>
      </section>

      {/* ===== P17 · Back Cover ===== */}
      <section className="tp-sec tp-backcover">
        <div className="tp-backcover-deco" />
        <h2 className="tp-backcover-title">心向神庙 · 探索不止</h2>
        <p className="tp-backcover-thanks">THANKS FOR READING</p>
        <p className="tp-backcover-sub">《庆余年》手游 · 神庙遗迹跨服玩法 · 交互设计</p>
      </section>

    </div>
  );
}
