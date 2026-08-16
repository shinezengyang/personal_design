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

function Shot({ src, x, y, w, h, gold = false, green = false, style }: { src: string; x?: number; y?: number; w?: number; h?: number; gold?: boolean; green?: boolean; style?: React.CSSProperties }) {
  return (
    <div className={`tp-shot${gold ? ' gold' : ''}${green ? ' green' : ''}`} style={style ?? { left: x, top: y, width: w, height: h }}>
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
function Legend({ n, x, y, title, body, w, sm = false, md = false }: { n: number; x: number; y: number; title: string; body: string; w: number; sm?: boolean; md?: boolean }) {
  return (
    <div className={`tp-lg${sm ? ' sm' : ''}${md ? ' md' : ''}`} style={{ left: x, top: y }}>
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

/** The chip rail heading P10 and P11: chips are [label, board x, width]. */
function LinkBar({ label, tone, chips }: { label: string; tone: 'gold' | 'teal'; chips: ReadonlyArray<readonly [string, number, number]> }) {
  const stroke = tone === 'gold' ? '#d9a441' : '#6fd8e0';
  return (
    <div className={`tp-linkbar ${tone}`}>
      <b>{label}</b>
      {chips.map(([t, x, w]) => <span key={t} style={{ left: x - 96, width: w }}>{t}</span>)}
      <svg viewBox="0 0 1088 60" width="1088" height="60" aria-hidden>
        {chips.slice(0, -1).map(([t, x, w]) => {
          const ax = x - 96 + w + 10;
          return <path key={t} d={`M${ax} 30h14M${ax + 9} 25l6 5-6 5`} fill="none" stroke={stroke} strokeWidth="2" />;
        })}
      </svg>
    </div>
  );
}

function IntentBar({ text, tall = false }: { text: string; tall?: boolean }) {
  return (
    <div className={`tp-intent${tall ? ' tall' : ''}`}>
      <span>设计意图</span>
      <p>{text}</p>
    </div>
  );
}


/* P10 / P11 chip rails: [label, board x, width]. */
const templeP10Chips = [
  ['选定目标', 219, 100], ['前往', 359, 68], ['自动寻路', 467, 100], ['抵达战斗', 607, 100],
  ['小地图', 747, 84], ['任务详情', 871, 100], ['计数达成', 1011, 100],
] as const;

const templeP11Chips = [
  ['个人探索副本完成', 219, 164], ['奇遇事件', 423, 100], ['前往', 563, 68],
  ['自动寻路', 671, 100], ['抵达战斗', 811, 100], ['任务达成', 951, 100],
] as const;

/* P11 surprise-event legend cards: [no, x, y, title, body]. */
const templeSurprise = [
  ['1', 96, 594, '专属 Toast · 文字特殊化', '特殊字体+底板特效区别于普通提示，把奇遇的稀有感写在脸上'],
  ['4', 380, 594, '场景物件交互按钮', '靠近场景物件后，HUD会显示新按钮，引导玩家可交互'],
  ['2', 96, 696, '触发区可视化', '绿圈圈定事件范围，空间引导无需一行文字'],
  ['5', 380, 696, '完成 Toast · 高峰收尾', '完成同样配特殊化反馈——峰终定律：结尾的情绪决定整段记忆'],
  ['3', 96, 798, '奇遇任务 · 绿色标识', '[奇遇] 前缀独立配色挂入追踪栏，与日常任务一眼区分'],
  ['6', 380, 798, '三通道播报 · 去向可溯', 'Toast + 系统聊天 + 邮件红点，奖励去向永远查得到'],
] as const;

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
        <SectionHeader no="07" title="进度排行 · 服务器的较量" eng="SCREEN ANALYSIS 03 — SERVER RANKING" />
        <Tag n="③" />
        <Shot src={A.p08} x={96} y={225} w={740} h={416.3} />
        <Cap x={96} y={649}>进度排行榜 · 每半小时更新</Cap>
        <Pin n={1} x={494} y={275} />
        <Pin n={2} x={306} y={571} />
        <Pin n={3} x={479} y={602} />
        <Legend md n={1} x={900} y={241} w={246} title="服务器维度 · 集体较量"
          body="把个人行为聚合成服务器荣誉，社会比较从个人内卷转向集体协作，强化归属感" />
        <Legend md n={2} x={900} y={372} w={246} title="永远看得见自己"
          body="本服高亮显示；未进当前页时固定置底，免去「翻页找自己」的挫败，保证比较的参照系永远在场" />
        <Legend md n={3} x={900} y={503} w={246} title="更新频率前置说明"
          body="「每半小时更新一次」写进界面，预先管理数据延迟的预期，避免被误读为故障" />
        <IntentBar tall text="排行榜不是头名的炫耀板，而是每个服务器的进度镜子 —— 落后可见、追赶有方向，全服能量才有持续增长的动力" />
      </section>

      {/* ===== P09 · Sanctum hub layout ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="08" title="秘境主界面 · 三区动线" eng="SCREEN ANALYSIS 04 — SANCTUM HUB LAYOUT" />
        <Tag n="④" />
        <Shot src={A.p09} x={150} y={187} w={980} h={551.3} />
        <div className="tp-zone teal" style={{ left: 154, top: 232, width: 313, height: 501 }}><span style={{ width: 89.1 }}>A 个人区</span></div>
        <div className="tp-zone gold" style={{ left: 470, top: 232, width: 536, height: 501 }}><span style={{ width: 86.5 }}>B 目标区</span></div>
        <div className="tp-zone red" style={{ left: 1012, top: 232, width: 115, height: 168 }}><span style={{ width: 87, top: 139 }}>C 导航区</span></div>
        <Cap x={150} y={746}>神庙遗迹主界面 · 遗迹探索页签</Cap>
        <article className="tp-zonecard teal" style={{ left: 96 }}>
          <h4>A 个人区 · 视线起点</h4>
          <p>F 型阅读起点放高频内容：我的进度、我的任务，打开即知「现在该做什么」</p>
        </article>
        <article className="tp-zonecard gold" style={{ left: 460 }}>
          <h4>B 目标区 · 情感锚点</h4>
          <p>首领剪影占据最大画幅，锁定状态制造悬念——看得见的目标才有驱动力</p>
        </article>
        <article className="tp-zonecard red" style={{ left: 824 }}>
          <h4>C 导航区 · 低频右置</h4>
          <p>页签贴右缘拇指热区，不与主内容争夺视线，切换成本最低</p>
        </article>
      </section>

      {/* ===== P10 | Exploration pipeline ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="09" title="探索事件 · 从战场→地图→战场" eng="SCREEN ANALYSIS 05 — EXPLORATION PIPELINE" />
        <Tag n="⑤" />
        <LinkBar label="探索事件：" tone="gold" chips={templeP10Chips} />

        <Shot src={A.p10c} x={96} y={271} w={182} h={263} />
        <Shot src={A.p10a} x={338} y={271} w={463} h={260} gold />
        <Cap x={338} y={539}>个人探索副本 · 清理匪患进行中</Cap>
        <Shot src={A.p10b} x={651} y={549} w={533} h={300} />
        <Cap x={651} y={859}>副本地图 · 青州</Cap>

        <svg className="tp-hook" viewBox="0 0 1280 900" width="1280" height="900" aria-hidden>
          <path d="M785.2 321C834.1 345.9 861.8 415.6 868.2 530.1M858.4 518.6l9.3 14.4 8.1-15" fill="none" stroke="#d9a441" strokeWidth="3" />
          <path d="M249 313c8.1 36.9 34.4 61.3 79 73M316.1 393.4l15.6-7.2-13.7-10.2" fill="none" stroke="#d9a441" strokeWidth="3" />
        </svg>

        <Pin n={1} x={427} y={322} />
        <Pin n={2} x={609} y={437} />
        <Pin n={3} x={1088} y={606} />
        <Pin n={4} x={1099} y={711} />
        <Pin n={5} x={1063} y={749} />
        <Pin n={6} x={665} y={793} />

        <Legend sm n={1} x={880} y={275} w={206} title="追踪栏实时计数 · 即时反馈" body={'40/50 持续滚动，每一刀都被\n看见——心流的燃料是反馈'} />
        <Legend sm n={2} x={880} y={366} w={224} title="自动战斗 · 低操作负荷" body={'容纳通勤挂机场景，挑战难度\n贴合大众水位，不破坏心流通道'} />
        <Legend sm n={3} x={96} y={626} w={400} title="区域目标卡片 · 识别优于回忆" body="背景故事 + 任务 + 收益同卡展示，决策所需信息零检索" />
        <Legend sm n={4} x={96} y={693} w={400} title="收益前置 · 明码标价" body="「探索值 50」写在前往之前，付出与回报先讲清楚" />
        <Legend sm n={5} x={96} y={760} w={400} title="一键前往 · 零摩擦衔接" body="点击即关地图、进副本、自动寻路，三步并作一步" />
        <Legend sm n={6} x={96} y={827} w={400} title="追踪开关 · 用户可控" body="日常追踪默认勾选可关闭，把控制权留给玩家" />
      </section>

      {/* ===== P11 | Surprise events ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="10" title="奇遇事件 · 惊喜的设计" eng="SCREEN ANALYSIS 06 — SURPRISE EVENTS" />
        <Tag n="⑥" />
        <LinkBar label="奇遇事件：" tone="teal" chips={templeP11Chips} />

        <Shot src={A.p11a} x={96} y={265} w={498} h={280} green />
        <Cap x={96} y={553}>个人特殊探索事件 · 开启</Cap>
        <Shot src={A.p11b} x={686} y={265} w={498} h={280} gold />
        <Cap x={686} y={553}>个人特殊探索事件 · 进行</Cap>
        <Shot src={A.p11c} x={686} y={588} w={498} h={280} gold />
        <Cap x={688} y={876}>个人特殊探索事件 · 完成</Cap>

        <Pin n={1} x={401} y={295} />
        <Pin n={2} x={350} y={391} />
        <Pin n={3} x={133} y={376} />
        <Pin n={4} x={1021} y={375} />
        <Pin n={5} x={1015} y={648} />
        <Pin n={6} x={849} y={795} />

        {templeSurprise.map(([n, x, y, title, body]) => (
          <article className="tp-scard" key={n} style={{ left: x, top: y }}>
            <b>{n}</b>
            <h4>{title}</h4>
            <p>{body}</p>
          </article>
        ))}
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
