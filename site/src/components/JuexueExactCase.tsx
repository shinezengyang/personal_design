import './JuexueExactCase.css';

const jxAssets = {
  loadout: 'https://www.figma.com/api/mcp/asset/04eb8dcb-e281-4d8e-aeec-0eb07042e8cd',
  bag: 'https://www.figma.com/api/mcp/asset/87d58600-8e0c-4fe7-8f77-fee6e6148b50',
  upgrade: 'https://www.figma.com/api/mcp/asset/6bb53464-189b-440d-bffa-a5a1006859bf',
  context: 'https://www.figma.com/api/mcp/asset/f1c6c6b1-585a-4f59-aca9-03917f961970',
  contextPopup: 'https://www.figma.com/api/mcp/asset/fc2cdde5-7ec1-44fa-96d7-0354d9116b15',
  finalA: 'https://www.figma.com/api/mcp/asset/867f4cd3-40d8-4257-a8bc-7d8b21ccff90',
  finalB: 'https://www.figma.com/api/mcp/asset/05d8aef8-3adb-4794-88ad-ba4fcdb5c830',
};

type Tone = 'red' | 'gold' | 'amber' | 'brown' | 'muted';

type Principle = {
  title: string;
  text: string;
  tone?: Tone;
};

function Header({ eyebrow, title, desc, dark = false }: { eyebrow: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className={`jx-header ${dark ? 'dark' : ''}`}>
      <i />
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {desc ? <h3>{desc}</h3> : null}
    </div>
  );
}

function Marker({ n, x, y, gold = false }: { n: number; x: number; y: number; gold?: boolean }) {
  return (
    <span className={`jx-marker ${gold ? 'gold' : ''}`} style={{ left: x, top: y }}>{n}</span>
  );
}

function Shot({ src, label, className = '' }: { src: string; label?: string; className?: string }) {
  return (
    <figure className={`jx-shot ${className}`}>
      <img src={src} alt={label ?? ''} />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

function FeatureCard({ tone, icon, title, children }: { tone: Tone; icon: string; title: string; children: string }) {
  return (
    <article className={`jx-feature ${tone}`}>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Rationale({ title, subtitle, principles, tall = false }: { title: string; subtitle: string; principles: Principle[]; tall?: boolean }) {
  return (
    <div className={`jx-rationale ${tall ? 'tall' : ''}`}>
      <p className="jx-rationale-eyebrow">{subtitle}</p>
      <h3>{title}</h3>
      <div className="jx-rationale-grid" style={{ gridTemplateColumns: `repeat(${principles.length}, 1fr)` }}>
        {principles.map((item) => (
          <article key={item.title} className={item.tone ?? 'gold'}>
            <i />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Notes({ title, items, dark = false }: { title: string; items: string[]; dark?: boolean }) {
  return (
    <div className={`jx-notes ${dark ? 'dark' : ''}`}>
      <p className="jx-notes-over">界面解读 · WHAT YOU SEE</p>
      <h3>{title}</h3>
      {items.map((item, index) => {
        const [head, body] = item.split('|');
        return (
          <article key={item}>
            <b>{index + 1}</b>
            <div>
              <h4>{head}</h4>
              <p>{body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function LoadoutDiagram() {
  const nodes = [
    ['乾', 352, 372], ['坤', 452, 470], ['离', 352, 568], ['坎', 252, 470],
  ] as const;
  return (
    <div className="jx-loadout-diagram">
      <svg viewBox="0 0 260 260">
        <path d="M130 25 L230 130 L130 235 L30 130 Z" />
        <path d="M130 25 L130 235" />
        <path d="M30 130 L230 130" />
      </svg>
      {nodes.map(([label, x, y]) => <span key={label} style={{ left: x, top: y }}>{label}</span>)}
      <b>主</b>
    </div>
  );
}

function LayerBars() {
  return (
    <div className="jx-layer-bars">
      {[
        ['三重', 40, 'c1'], ['五重', 75, 'c2'], ['七重', 110, 'c3'], ['九重', 145, 'c4'], ['十重', 180, 'c5'],
      ].map(([label, height, cls]) => (
        <article className={String(cls)} key={label} style={{ height: Number(height) }}>
          <b>{label}</b>
        </article>
      ))}
    </div>
  );
}

function JourneyCurve() {
  const steps = [
    ['1', '期待', '解锁槽位', '达成境界 · 修为', 152, 534],
    ['2', '投入', '领悟绝学', '碎片领悟到手', 347, 499],
    ['3', '成型', '装配成型', '装入大无相槽位', 542, 464],
    ['4', '进阶', '升重 · 三五七', '逐级解锁效果', 737, 436],
    ['5', '质变', '九重质变', '关键效果跃升', 932, 404],
    ['6', '✦ 满重之巅', '满重 · 十重', '十重效果全开', 1127, 366],
  ] as const;
  return (
    <div className="jx-journey-card">
      <p className="axis">情绪强度</p>
      <svg viewBox="0 0 1140 520" preserveAspectRatio="none">
        <line x1="82" y1="352" x2="1057" y2="352" className="base" />
        <path d="M82 255 C240 235 320 215 472 184 C610 155 738 138 862 112 C963 91 1008 66 1057 96" className="area" />
        <path d="M82 255 C240 235 320 215 472 184 C610 155 738 138 862 112 C963 91 1008 66 1057 96" className="curve" />
      </svg>
      <div className="summit" />
      {steps.map(([n, mood, title, desc, x, y], idx) => (
        <article key={n} className={`s${idx + 1}`} style={{ left: Number(x) }}>
          <i style={{ top: Number(y) - 292 }} />
          <p className="mood">{mood}</p>
          <span>{n}</span>
          <h4>{title}</h4>
          <small>{desc}</small>
        </article>
      ))}
    </div>
  );
}

function Ladder() {
  const items = [
    ['三', '第 三 重', '防御 +1%', 'red'],
    ['五', '第 五 重', '减伤 20% · 3秒', 'gold'],
    ['七', '第 七 重', '防御 +10%', 'amber'],
    ['九', '第 九 重', '减伤 20% · 5秒', 'brown'],
    ['十', '第 十 重', '减伤 20% · 10秒', 'hot'],
  ] as const;
  return (
    <div className="jx-ladder">
      <div className="track" />
      {items.map(([glyph, title, desc, cls], index) => (
        <article key={glyph} className={cls} style={{ left: index * 205 }}>
          <h4>{title}</h4>
          <b>{glyph}</b>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
}

export function JuexueExactCase() {
  return (
    <div className="juexue-exact-canvas" data-node-id="8626:8140">
      <section className="jx-hero">
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="glow g3" />
        <div className="hero-bar" />
        <p className="hero-calligraphy">绝 学</p>
        <h1>绝学系统 · 成长线设计</h1>
        <p className="hero-desc">大无相主、小无相辅 —— 一套绝学装配，靠「重数」层层突破，越练越强。</p>
        <div className="hero-pill">装配 · 领悟 · 升重 · 满重</div>
      </section>

      <section className="jx-purpose">
        <Header eyebrow="BACKGROUND · 系统目的" title="为什么要做绝学系统" desc="「增加成长线的深度」。绝学，是给高玩准备的终极养成。" />
        <div className="jx-feature-row">
          <FeatureCard tone="red" icon="01" title="后期养成趋于平淡">顶尖玩家练满常规系统后，缺少更高的追求。</FeatureCard>
          <FeatureCard tone="gold" icon="02" title="重数 · 阶梯式突破">大无相主、小无相辅，靠「重数」一重重解锁更强效果。</FeatureCard>
          <FeatureCard tone="brown" icon="03" title="流派化构筑">五相自由搭配绝学，打造专属于自己的终极流派。</FeatureCard>
        </div>
        <div className="jx-objective">
          <p>设计目标 · OBJECTIVE</p>
          <h3>给顶尖玩家一条「越练越强」的终极养成线</h3>
          <span>用 装配 + 领悟 + 升重 三步，把绝学做成 深度 · 收集 · 自我表达 兼具的长线追求。</span>
        </div>
      </section>

      <section className="jx-system dark-section">
        <Header dark eyebrow="SYSTEM MAP · 系统全景" title="两条深度线，叠出一套绝学" desc="绝学的深度来自两个维度：横向「五相」装配的广度，纵向「重数」突破的深度。" />
        <div className="jx-system-card loadout">
          <p>装配 · 五相 LOADOUT</p>
          <LoadoutDiagram />
          <span>1 主（大无相）+ 4 辅（小无相），主次分明</span>
        </div>
        <div className="jx-multiply">×</div>
        <div className="jx-system-card layers">
          <p>重数 · 阶梯 LAYERS</p>
          <LayerBars />
          <span>一重重突破，效果逐级解锁（三 / 五 / 七 / 九 / 十重）</span>
        </div>
        <Rationale
          title="两个维度相乘，养成空间被指数级放大"
          subtitle="为什么是「广度 × 深度」· WHY"
          principles={[
            { title: '主次分明', text: '大无相定核心，小无相补短板，构筑有重点。', tone: 'red' },
            { title: '目标梯度', text: '重数 三五七九十，每一重都是看得见的下一个目标。', tone: 'gold' },
            { title: '收集驱动', text: '碎片领悟与升重，把养成拆成可积累的小步。', tone: 'brown' },
          ]}
        />
      </section>

      <section className="jx-journey">
        <Header eyebrow="PLAYER JOURNEY × FLOW · 玩家旅程" title="一条由「重数」推着上升的曲线" desc="每一次升重都解锁更强的效果，玩家被「下一重」牵引着，情绪稳步攀向满重之巅。" />
        <JourneyCurve />
        <div className="jx-journey-note">
          <p>目标梯度效应 · GOAL–GRADIENT</p>
          <h3>「下一重」永远在不远处，动力从不断档</h3>
          <span>三、五、七、九、十重，把一条养成线切成五个看得见的里程碑。每跨一重都有即时变强的回报，越接近满重，期待越浓 —— 直到十重封顶的高光时刻。</span>
          <div><b>蔡格尼克 · 碎片收集</b><b>沉没成本 · 升重投入</b><b>目标梯度 · 满重封顶</b></div>
        </div>
      </section>

      <section className="jx-interface">
        <Header eyebrow="INTERFACE · 绝学界面" title="五相一体 · 一套绝学装配" desc="中心大无相、四向小无相 —— 用一张菱形布局，一眼分清谁是核心、谁是辅助。" />
        <div className="jx-shot-wrap">
          <Shot src={jxAssets.loadout} />
          <Marker n={1} x={206} y={484} />
          <Marker n={2} x={115} y={470} />
          <Marker n={3} x={560} y={501} />
          <Marker n={4} x={536} y={610} />
          <Marker n={5} x={136} y={649} />
        </div>
        <Notes title="菱形布局，主次一眼分明" items={[
          '大无相 · 主槽|居中的核心槽位，承载最强绝学',
          '小无相 · 辅槽|四向辅助槽位，补足流派短板',
          '解锁条件|境界 + 修为双门槛，达标即亮勾',
          '解锁消耗|所需材料透明，一键解锁',
          '绝学背包|入口常驻左下，随时挑选装配',
        ]} />
        <Rationale title="用布局本身，说清「谁主谁辅」" subtitle="为什么这样设计 · WHY IT WORKS" principles={[
          { title: '主次分明', text: '模拟棱形法阵，中心主、四向辅，构筑有重点一目了然。', tone: 'red' },
          { title: '可见性', text: '解锁条件与消耗清晰，达标用 √ 即时提示。', tone: 'gold' },
          { title: '目标梯度', text: '槽位逐个解锁，始终给到清晰的下一步。', tone: 'amber' },
          { title: '防错原则', text: '未解锁槽位有空状态与 Toast，避免误操作。', tone: 'brown' },
        ]} />
      </section>

      <section className="jx-bag">
        <Header eyebrow="FLOW · 绝学背包" title="领悟与装配 · 从碎片到绝学" desc="选中一个槽位，背包就切到它能装的绝学 —— 品质、碎片、效果阶梯，一屏看全。" />
        <div className="jx-shot-wrap">
          <Shot src={jxAssets.bag} />
          <Marker n={1} x={132} y={414} />
          <Marker n={2} x={436} y={371} />
          <Marker n={3} x={626} y={376} />
          <Marker n={4} x={694} y={487} />
          <Marker n={5} x={556} y={646} />
        </div>
        <Notes title="选槽位，就切到它能装的绝学" items={[
          '槽位页签|切槽位即联动切换对应绝学背包',
          '绝学网格|品质用颜色区分，碎片数量直观',
          '绝学详情|名称 · 重数 · 主属性，选中即看',
          '效果阶梯|三五七九十重效果，未达成灰显',
          '装配 / 已装配|一键装配，当前状态清晰可辨',
        ]} />
        <Rationale title="挑选装配绝学变得毫不费力" subtitle="为什么这样设计 · WHY IT WORKS" principles={[
          { title: '就近联动', text: '选槽位直接切背包，减少跳转与迷失。', tone: 'red' },
          { title: '品质可视化', text: '颜色编码区分品质，降低识别成本。', tone: 'gold' },
          { title: '决策可见', text: '装配前看全效果阶梯，所选有据可依。', tone: 'amber' },
          { title: '收集驱动', text: '碎片数量外显，引导玩家持续积累。', tone: 'brown' },
        ]} />
      </section>

      <section className="jx-upgrade">
        <Header eyebrow="FLOW · 升重" title="升重 · 一重一重往上走" desc="每跨一道重数，就解锁一条更强的效果 —— 这是绝学最核心的成长循环。" />
        <div className="jx-shot-wrap">
          <Shot src={jxAssets.upgrade} />
          <Marker n={1} x={280} y={474} />
          <Marker n={2} x={599} y={404} />
          <Marker n={3} x={450} y={424} />
          <Marker n={4} x={464} y={504} />
          <Marker n={5} x={585} y={638} />
        </div>
        <Notes title="重数，就是绝学的成长刻度" items={[
          '已装配绝学|大无相已装「百无禁忌」，居中点亮',
          '当前重数|重数：3重 —— 已走到第二道刻度',
          '主属性|领悟带来的基础加成（防御+100）',
          '效果阶梯|三/五/七/九/十重，逐级解锁效果',
          '升重 / 更换|材料够即可升重，也可随时更换',
        ]} />
        <div className="jx-ladder-panel">
          <p>重数阶梯 · LAYER LADDER</p>
          <h3>一条重数线，五重质变</h3>
          <span>每一重都是即时变强的小奖励，积累碎片让人不舍得停 —— 促使玩家一路升到满重。</span>
          <Ladder />
          <small>升重方向</small>
          <div className="ladder-tags"><b>损失厌恶 · 越强越想要</b><b>沉没成本 · 碎片不舍弃</b><b>目标梯度 · 直冲满重</b></div>
        </div>
      </section>

      <section className="jx-context dark-section">
        <div className="glow ctx" />
        <Header dark eyebrow="CONTEXT · 招式联动" title="绝学，长在招式体系的最顶层" desc="与 内功 / 心法 / 绣身 并列，绝学是这套「招式」框架里最硬核的一层。" />
        <div className="jx-shot-wrap dark">
          <Shot src={jxAssets.context} />
          <Marker n={1} x={623} y={432} gold />
        </div>
        <div className="jx-context-notes">
          <Notes dark title="同一套框架，分层各司其职" items={[
            '绝学|当前“大无相”槽位装配的绝学技能图标和等级，点击后可显示详情弹窗',
          ]} />
          <img src={jxAssets.contextPopup} alt="绝学详情弹窗" />
        </div>
        <Rationale title="用统一框架，承载分层的深度" subtitle="为什么这样设计 · WHY IT WORKS" principles={[
          { title: '体系一致', text: '绝学与招式共用「招式」框架，认知统一。', tone: 'red' },
          { title: '顶层深度', text: '绝学是体系里最硬核的一层，专给高玩，数值展示要明显。', tone: 'gold' },
          { title: '自由装配', text: '绝学搭配 = 终极流派，构筑专属强度。', tone: 'amber' },
          { title: '分层养成', text: '招式养成线分层（招式/绝学/内功…），各司其职。', tone: 'brown' },
        ]} />
      </section>

      <section className="jx-final">
        <div className="final-glow" />
        <p className="final-eyebrow">EPILOGUE · 结语</p>
        <h2>把养成，做成一道道重数关卡</h2>
        <p className="final-desc">从解锁第一个槽位，到把绝学练满十重 —— 绝学用「五相装配 × 重数突破」的双层结构，给顶尖玩家留出一条够长、够深、够个性的终极养成线。</p>
        <div className="jx-final-cards">
          <article className="red"><b>01</b><h3>成长深度</h3><p>五相 × 重数，养成空间足够深。</p></article>
          <i>→</i>
          <article className="gold"><b>02</b><h3>收集驱动</h3><p>碎片领悟与升重，长线有积累。</p></article>
          <i>→</i>
          <article className="amber"><b>03</b><h3>自我表达</h3><p>流派化搭配，构筑专属强度。</p></article>
        </div>
        <p className="final-loop">—— 深度 · 收集 · 表达，一重重练成自己的绝学 ——</p>
        <div className="final-line" />
        <p className="final-calligraphy">绝 学</p>
        <p className="final-gallery-title">视觉稿展示</p>
        <img className="final-img a" src={jxAssets.finalA} alt="绝学视觉稿 1" />
        <img className="final-img b" src={jxAssets.finalB} alt="绝学视觉稿 2" />
      </section>
    </div>
  );
}
