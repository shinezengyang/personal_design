import './TempleExactCase.css';

/* ===== Assets ===== */
const A = {
  p06:  'https://www.figma.com/api/mcp/asset/ba4aba38-8a25-4341-bf0f-a0305677d2d6',
  p07a: 'https://www.figma.com/api/mcp/asset/58d16b28-f6db-411a-82a9-0e6ae4a5ab43',
  p07b: 'https://www.figma.com/api/mcp/asset/105e7c81-55f6-4203-bd7b-3bec173b5202',
  p08:  'https://www.figma.com/api/mcp/asset/ae317e57-681b-4376-b8c9-cb58f9a90058',
  p09:  'https://www.figma.com/api/mcp/asset/cc0440b5-d0af-47f8-8f6c-5cadf73fc2b7',
  p10a: 'https://www.figma.com/api/mcp/asset/950f15bb-f269-4e48-b327-573c5d3d2236',
  p10b: 'https://www.figma.com/api/mcp/asset/54c67320-351d-4d6a-ad74-60cadc3040c1',
  p10c: 'https://www.figma.com/api/mcp/asset/1e237a78-2bcd-4a14-9ccc-b5510c4fa13a',
  p11a: 'https://www.figma.com/api/mcp/asset/5fc01912-6137-4ff5-bb19-297ab601cdfc',
  p11b: 'https://www.figma.com/api/mcp/asset/65fb2086-f981-481e-b51e-d6bcace22056',
  p11c: 'https://www.figma.com/api/mcp/asset/ca2e3938-06ec-43e4-bfc9-57c4c187d5d4',
  p12a: 'https://www.figma.com/api/mcp/asset/10315bae-5ef5-4981-95cd-52376f0924b4',
  p12b: 'https://www.figma.com/api/mcp/asset/b0d409fe-d3b7-4e70-a9e6-e9813b2ef9d5',
  p12c: 'https://www.figma.com/api/mcp/asset/5cbae542-9407-428f-8803-871b9188e0ce',
  p13a: 'https://www.figma.com/api/mcp/asset/03f6db79-1269-46fd-95c6-0cc327a65247',
  p13b: 'https://www.figma.com/api/mcp/asset/bcc5e0d3-98b6-4cd3-85f4-3db99f668e2a',
  p14a: 'https://www.figma.com/api/mcp/asset/9fbc3cb5-c50c-4575-98b3-1d921440de9b',
  p14b: 'https://www.figma.com/api/mcp/asset/9b8556db-e936-4d82-bdb4-29ffbaf1c70a',
  p15:  'https://www.figma.com/api/mcp/asset/a8a82edc-75bf-41e3-86c6-2a941e854fba',
  p16a: 'https://www.figma.com/api/mcp/asset/753c8927-ad96-40bf-a688-efef3164bc87',
  p16b: 'https://www.figma.com/api/mcp/asset/88bb0ca1-3143-4dc7-be22-e061c6d4fdd6',
  p16c: 'https://www.figma.com/api/mcp/asset/b7b4f345-1590-4ace-8957-43d56f96b968',
  p16d: 'https://www.figma.com/api/mcp/asset/0be31ae4-c909-4e99-884d-e61b91ac8b62',
};

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

/* ===== Section Header ===== */
type Tone = 'teal' | 'gold' | 'red';

function SectionHeader({
  no, eng, title, tone = 'teal', left = 96, top = 80,
}: {
  no: string; eng: string; title: string;
  tone?: Tone; left?: number; top?: number;
}) {
  const numColor: Record<Tone, string> = {
    teal: 'rgba(111,216,224,.10)',
    gold: 'rgba(217,164,65,.10)',
    red:  'rgba(225,88,79,.10)',
  };
  const engColor: Record<Tone, string> = {
    teal: '#6fd8e0',
    gold: '#d9a441',
    red:  '#e1584f',
  };
  return (
    <div className="tp-sec-hdr" style={{ left, top }}>
      <span className="tp-num" style={{ color: numColor[tone] }}>{no}</span>
      <span className="tp-eng" style={{ color: engColor[tone] }}>{eng}</span>
      <h2>{title}</h2>
    </div>
  );
}

/* ===== Number circle annotation ===== */
function Num({ n, tone = 'teal' }: { n: string; tone?: Tone }) {
  return <span className={`tp-num-circle ${tone}`}>{n}</span>;
}

/* ===== Annotation card ===== */
function Anno({
  num, title, desc, tone = 'teal', style,
}: {
  num: string; title: string; desc: string; tone?: Tone;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`tp-anno ${tone}`} style={style}>
      <div className="tp-anno-head">
        <Num n={num} tone={tone} />
        <h4>{title}</h4>
      </div>
      <p>{desc}</p>
    </div>
  );
}

/* ===== Design Intent bar ===== */
function IntentBar({ text }: { text: string }) {
  return (
    <div className="tp-intent">
      <span className="tp-intent-label">设计意图</span>
      <p>{text}</p>
    </div>
  );
}

/* ===== Screenshot box ===== */
function Shot({
  src, style,
}: {
  src: string; style?: React.CSSProperties;
}) {
  return (
    <div className="tp-shot" style={style}>
      <Img src={src} />
    </div>
  );
}

/* ===== Flow bar ===== */
function FlowBar({ steps }: { steps: string[] }) {
  return (
    <div className="tp-flow-bar">
      {steps.map((s, i) => (
        <span key={i} className="tp-flow-step">
          {s}
          {i < steps.length - 1 && <span className="tp-flow-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export function TempleExactCase() {
  return (
    <div className="tp-canvas">

      {/* ===== P01 · Cover ===== */}
      <section className="tp-sec tp-cover">
        <div className="tp-cover-deco" />
        {/* Badge */}
        <div className="tp-cover-badge" style={{ left: 108, top: 104 }}>庆</div>
        <p className="tp-cover-subtitle" style={{ left: 192, top: 122 }}>
          《庆余年》手游 · 玩法交互设计案
        </p>
        <h1 className="tp-cover-title" style={{ left: 90, top: 270 }}>神庙遗迹</h1>
        <p className="tp-cover-tagline" style={{ left: 96, top: 492 }}>跨服玩法 · 交互设计复盘</p>
        <p className="tp-cover-eng" style={{ left: 96, top: 566 }}>
          TEMPLE RUINS · CROSS-SERVER GAMEPLAY DESIGN
        </p>
        <p className="tp-cover-footer-l" style={{ left: 96, top: 867 }}>GAME UX PORTFOLIO</p>
        <p className="tp-cover-footer-r" style={{ left: 940, top: 865 }}>
          一次日常 · 一服能量 · 一界之门
        </p>
      </section>

      {/* ===== P02 · Overview ===== */}
      <section className="tp-sec tp-overview">
        <SectionHeader no="01" eng="OVERVIEW · THREE-LAYER GOAL NESTING" title="玩法总览" tone="teal" />
        <p className="tp-quote" style={{ left: 96, top: 224 }}>
          " 让个人的每一次日常，都成为跨服之门的一次充能 "
        </p>
        <p className="tp-body" style={{ left: 96, top: 286, width: 1080 }}>
          神庙遗迹是一套三层嵌套目标设计：个人探索事件推动全服能量积累，全服能量达标解锁秘境入口，秘境内触发限时跨服首领决战。三个目标首尾咬合，形成一周完整的玩法循环。
        </p>

        {/* Three stat cards */}
        <div className="tp-stat-row" style={{ left: 96, top: 420 }}>
          <div className="tp-stat-card gold">
            <div className="tp-stat-val gold">6000 / 10000</div>
            <div className="tp-stat-sub">全服能量 · 达 100% 解锁「进入秘境」</div>
          </div>
          <div className="tp-stat-card teal">
            <div className="tp-stat-val teal">1000 点</div>
            <div className="tp-stat-sub">周探索值 · 达成后激活遗迹首领</div>
          </div>
          <div className="tp-stat-card red">
            <div className="tp-stat-val red">周六 20:00-20:30</div>
            <div className="tp-stat-sub">遗迹首领限时刷新 · 全服同屏决战</div>
          </div>
        </div>

        {/* Three-layer node diagram */}
        <div className="tp-node-diagram" style={{ left: 96, top: 620 }}>
          <div className="tp-node-col">
            <div className="tp-node red">
              <span className="tp-node-label">跨服秘境</span>
              <span className="tp-node-eng">CROSS-SERVER SANCTUM</span>
            </div>
            <div className="tp-node-line v" />
          </div>
          <div className="tp-node-col mid">
            <div className="tp-node-line h" />
            <div className="tp-node gold">
              <span className="tp-node-label">全服能量</span>
              <span className="tp-node-eng">SERVER ENERGY</span>
            </div>
            <div className="tp-node-line h right" />
          </div>
          <div className="tp-node-col">
            <div className="tp-node-line v" />
            <div className="tp-node teal">
              <span className="tp-node-label">个人日常</span>
              <span className="tp-node-eng">PERSONAL DAILY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== P03 · System Breakdown ===== */}
      <section className="tp-sec tp-breakdown">
        <SectionHeader no="02" eng="SYSTEM BREAKDOWN · FOUR MODULES" title="系统解构" tone="teal" />
        <p className="tp-breakdown-center" style={{ left: 0, top: 220 }}>神庙遗迹</p>

        <div className="tp-module-row" style={{ left: 80, top: 280 }}>
          {/* Module 1 */}
          <div className="tp-module teal">
            <div className="tp-module-hdr teal">
              <h3>遗迹探索</h3>
              <span>SERVER ENERGY</span>
            </div>
            <ul>
              <li>全服能量进度条</li>
              <li>里程碑宝箱奖励</li>
              <li>服务器进度排行</li>
            </ul>
          </div>
          {/* Module 2 */}
          <div className="tp-module teal">
            <div className="tp-module-hdr teal">
              <h3>个人探索</h3>
              <span>PERSONAL EVENTS</span>
            </div>
            <ul>
              <li>周探索事件清单</li>
              <li>特殊奇遇事件</li>
              <li>副本地图·自动寻路</li>
            </ul>
          </div>
          {/* Module 3 */}
          <div className="tp-module red">
            <div className="tp-module-hdr red">
              <h3>遗迹首领</h3>
              <span>WEEKLY BOSS</span>
            </div>
            <ul>
              <li>探索值1000激活</li>
              <li>周六限时决战</li>
              <li>伤害/奖励排行</li>
            </ul>
          </div>
          {/* Module 4 */}
          <div className="tp-module gold">
            <div className="tp-module-hdr gold">
              <h3>遗迹使者</h3>
              <span>ROAMING ENVOY</span>
            </div>
            <ul>
              <li>多实例1-4号</li>
              <li>刷新倒计时</li>
              <li>参与·尾刀次数上限</li>
            </ul>
          </div>
        </div>

        {/* Support bar */}
        <div className="tp-support-bar" style={{ left: 80, top: 680 }}>
          <span className="tp-support-label">通用支撑</span>
          {['排行榜', '邮件发放', '红点提示', '系统播报Toast', '二次确认弹窗', '奖励预览'].map((t) => (
            <span key={t} className="tp-support-tag">{t}</span>
          ))}
        </div>

        <p className="tp-caption" style={{ left: 0, top: 800 }}>
          四大模块通过共享能量值与周期节奏形成一套完整的跨服玩法闭环
        </p>
      </section>

      {/* ===== P04 · Weekly Loop ===== */}
      <section className="tp-sec tp-weekly">
        <SectionHeader no="03" eng="WEEKLY LOOP & SCREEN FLOW" title="一周玩法循环" tone="teal" />

        {/* Day labels */}
        <div className="tp-days" style={{ left: 80, top: 230 }}>
          {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((d, i) => (
            <span key={d} className={`tp-day ${i === 5 ? 'red' : i === 6 ? 'gold' : 'teal'}`}>{d}</span>
          ))}
        </div>

        {/* Phase labels */}
        <div className="tp-phase teal" style={{ left: 80, top: 292 }}>
          <span className="tp-phase-title">探索期 · 周一至周五</span>
          <span className="tp-phase-desc">个人探索事件 · 积累全服能量</span>
        </div>
        <div className="tp-phase red" style={{ left: 873, top: 292 }}>
          <span className="tp-phase-title">决战 · 周六</span>
        </div>
        <div className="tp-phase gold" style={{ left: 1033, top: 292 }}>
          <span className="tp-phase-title">结算 · 周日</span>
        </div>

        {/* 8 flow steps */}
        <div className="tp-steps-row" style={{ left: 80, top: 380 }}>
          {[
            { no: '1', t: '大世界入口', d: '活动矩阵触达' },
            { no: '2', t: '神庙主界面', d: '全服能量+任务' },
            { no: '3', t: '能量100%', d: '解锁秘境入口' },
            { no: '4', t: '副本地图', d: '选择探索目标' },
          ].map((s) => (
            <div key={s.no} className="tp-step-card teal">
              <span className="tp-step-no teal">{s.no}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="tp-steps-row" style={{ left: 80, top: 580 }}>
          {[
            { no: '5', t: '探索副本', d: '事件/奇遇战斗', c: 'teal' },
            { no: '6', t: '激活首领', d: '探索值达1000', c: 'teal' },
            { no: '7', t: '周六决战', d: '遗迹首领限时战', c: 'red' },
            { no: '8', t: '邮件结算', d: '排行奖励发放', c: 'gold' },
          ].map((s) => (
            <div key={s.no} className={`tp-step-card ${s.c}`}>
              <span className={`tp-step-no ${s.c}`}>{s.no}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>

        <div className="tp-loop-label" style={{ left: 0, top: 800 }}>
          <span className="tp-loop-badge">周循环</span>
          <span className="tp-loop-desc">每周重置 · 下一轮能量积累从零开始</span>
        </div>
      </section>

      {/* ===== P05 · Flow Curve ===== */}
      <section className="tp-sec tp-flowcurve">
        <SectionHeader no="04" eng="FLOW CURVE · ONE WEEK" title="玩家心流历程" tone="teal" />

        <div className="tp-curve-chart" style={{ left: 80, top: 230 }}>
          {/* Axis labels */}
          <span className="tp-curve-y-label">FLOW</span>
          <span className="tp-curve-x-label">T · 一周</span>
          <span className="tp-curve-hi">高心流区</span>
          <span className="tp-curve-lo">低心流区</span>

          {/* Curve SVG */}
          <svg className="tp-curve-svg" viewBox="0 0 1100 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6fd8e0" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#d9a441" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#e1584f" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Fill area */}
            <path
              d="M0,260 C60,250 100,230 180,220 C260,210 280,180 340,185 C400,190 420,170 500,155 C580,140 620,110 700,95 C760,82 820,60 900,40 C950,28 1000,35 1100,280 Z"
              fill="url(#curveGrad)" opacity="0.15"
            />
            {/* Curve line */}
            <path
              d="M0,260 C60,250 100,230 180,220 C260,210 280,180 340,185 C400,190 420,170 500,155 C580,140 620,110 700,95 C760,82 820,60 900,40 C950,28 1000,35 1100,280"
              fill="none" stroke="url(#curveGrad)" strokeWidth="3"
            />
            {/* Peak marker */}
            <circle cx="900" cy="40" r="6" fill="#e1584f" />
            {/* Small bump marker */}
            <circle cx="340" cy="182" r="5" fill="#d9a441" />
          </svg>

          {/* Annotations on curve */}
          <div className="tp-curve-anno" style={{ left: 260, top: 60 }}>
            <span className="tp-curve-tag gold">奇遇触发 · 小高峰</span>
          </div>
          <div className="tp-curve-anno" style={{ left: 580, top: 20 }}>
            <span className="tp-curve-tag teal">首领激活 · 期待爬升</span>
          </div>
          <div className="tp-curve-anno" style={{ left: 830, top: 0 }}>
            <span className="tp-curve-tag red">周六决战 · 体验巅峰</span>
          </div>
          <div className="tp-curve-anno" style={{ left: 980, top: 140 }}>
            <span className="tp-curve-tag gold">邮件结算 · 回落蓄力</span>
          </div>
        </div>

        {/* Three info cards */}
        <div className="tp-flow-cards" style={{ left: 80, top: 610 }}>
          <div className="tp-flow-card teal">
            <h4>碎片日常 · 周一至周五</h4>
            <p>每日探索事件低摩擦可完成，积累感知通过能量条可视化，化整为零、聚沙成塔。</p>
          </div>
          <div className="tp-flow-card gold">
            <h4>奇遇时刻 · 随机触发</h4>
            <p>随机触发的特殊奇遇事件打破日常节奏，制造意外惊喜感，拉高单日情绪峰值。</p>
          </div>
          <div className="tp-flow-card red">
            <h4>周六之夜 · 全服赴约</h4>
            <p>固定时间窗口的全服同屏决战，将一周积累的期待在30分钟内集中释放为高峰体验。</p>
          </div>
        </div>
      </section>

      {/* ===== P06 · Entry HUD ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="05" eng="SCREEN ANALYSIS 01 — WORLD HUD ENTRY" title="入口 · 玩法第一触点" tone="teal" />
        <div className="tp-badge-label teal" style={{ left: 96, top: 210 }}>界面分析 ①②</div>

        <Shot src={A.p06} style={{ left: 424, top: 232, width: 760, height: 428 }} />

        <Anno num="①" title="活动矩阵·同类聚合" tone="teal"
          desc="同类活动归组展示，降低用户在信息矩阵中的搜寻成本，一眼定位神庙遗迹入口。"
          style={{ left: 96, top: 280 }} />
        <Anno num="②" title="红点提示·外部触发" tone="teal"
          desc="红点信号在大世界 HUD 层就触达玩家，无需进入活动大厅即可感知状态更新。"
          style={{ left: 96, top: 430 }} />

        <IntentBar text="第一触点的核心任务是「让玩家知道今天有事做」—— 红点+矩阵聚合把感知成本压到最低，确保日常进入率。" />
      </section>

      {/* ===== P07 · Server Energy Hub ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="06" eng="SCREEN ANALYSIS 02 — SERVER ENERGY HUB" title="主界面 · 全服能量 · 共同的目标" tone="teal" />
        <div className="tp-badge-label teal" style={{ left: 96, top: 185 }}>界面分析 ①②③④⑤</div>

        <Shot src={A.p07a} style={{ left: 96, top: 210, width: 760, height: 428 }} />
        <div className="tp-screen-label teal" style={{ left: 757, top: 600 }}>能量 100% · 解锁时刻</div>
        <Shot src={A.p07b} style={{ left: 757, top: 629, width: 427, height: 240 }} />

        <Anno num="①" title="全服进度+里程碑" tone="teal"
          desc="进度条+里程碑节点可视化全服共同目标，化抽象数字为具体进展感。"
          style={{ left: 870, top: 215 }} />
        <Anno num="②" title="能量气泡·数据场景化" tone="gold"
          desc="浮动气泡将各服贡献量具象展示，让「自己的探索在影响全局」的感知清晰可见。"
          style={{ left: 870, top: 330 }} />
        <Anno num="③" title="任务清单·行动闭环" tone="teal"
          desc="任务列表就地展示在主界面，减少跳转层级，降低从「知道该做」到「开始做」的摩擦。"
          style={{ left: 870, top: 445 }} />
        <Anno num="④" title="未达条件·防错置灰" tone="gold"
          desc="秘境入口在能量未满时保持置灰状态，明确告知条件而非让玩家碰壁试错。"
          style={{ left: 96, top: 680 }} />
        <Anno num="⑤" title="解锁状态可见性" tone="teal"
          desc="能量达标瞬间入口亮起、弹出提示，解锁时刻有明确的系统反馈。"
          style={{ left: 96, top: 790 }} />
      </section>

      {/* ===== P08 · Server Ranking ===== */}
      <section className="tp-sec tp-screen">
        <SectionHeader no="07" eng="SCREEN ANALYSIS 03 — SERVER RANKING" title="进度排行 · 服务器的较量" tone="teal" />
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
        <SectionHeader no="08" eng="SCREEN ANALYSIS 04 — SANCTUM HUB LAYOUT" title="秘境主界面 · 三区动线" tone="teal" />
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
        <SectionHeader no="09" eng="SCREEN ANALYSIS 05 — EXPLORATION PIPELINE" title="探索事件 · 从战场→地图→战场" tone="teal" />
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
        <SectionHeader no="10" eng="SCREEN ANALYSIS 06 — SURPRISE EVENTS" title="奇遇事件 · 惊喜的设计" tone="gold" />
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
        <SectionHeader no="11" eng="SCREEN ANALYSIS 07 — WEEKLY BOSS" title="遗迹首领 · 激活" tone="red" />
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
        <SectionHeader no="12" eng="SCREEN ANALYSIS 08 — REWARD & SETTLEMENT" title="奖励与结算 · 期望管理" tone="gold" />
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
        <SectionHeader no="13" eng="SCREEN ANALYSIS 09 — ROAMING ENVOY" title="遗迹使者 · 稀缺与公平" tone="gold" />
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
        <SectionHeader no="14" eng="FAULT TOLERANCE & LIVE-OPS FLEXIBILITY" title="容错与运营弹性" tone="gold" />

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
        <SectionHeader no="15" eng="ART DIRECTION & MARKET REFERENCES" title="界面美术 · 风格溯源" tone="teal" />
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
