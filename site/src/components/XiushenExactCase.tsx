import './XiushenExactCase.css';

const xsAssets = {
  tree: 'https://www.figma.com/api/mcp/asset/e6fa0660-d376-4139-8c6c-bbd516ab8cef',
  equip: 'https://www.figma.com/api/mcp/asset/d62e9d5d-c03c-4425-8810-83baa9943ac7',
  upgrade: 'https://www.figma.com/api/mcp/asset/10567c53-3334-459a-bffb-5fb6a15580d9',
  genshin: 'https://www.figma.com/api/mcp/asset/04acfca0-ebc1-4f51-b5a5-4da77140b39c',
  ref2: 'https://www.figma.com/api/mcp/asset/76eb5328-50d2-4863-ab60-d7684714e7b7',
  ref3: 'https://www.figma.com/api/mcp/asset/e714129f-94b6-42c6-a6d6-0082508fe6fd',
  finalA: 'https://www.figma.com/api/mcp/asset/ed0affa1-cb39-4098-802f-94c326ef6fa8',
  finalB: 'https://www.figma.com/api/mcp/asset/2a51aaaa-1316-4831-a3ed-370f403692e3',
  finalC: 'https://www.figma.com/api/mcp/asset/38d16d46-086d-4d1a-a4b3-5336ac1f9ad6',
};

type Theme = 'human' | 'earth' | 'heaven' | 'blue' | 'gold' | 'gray';

type Principle = {
  title: string;
  text: string;
  theme?: Theme;
};

const flowSteps = [
  ['1', '入口触达', '从大世界进入绣身系统，红点 / 入口提示成长机会。'],
  ['2', '槽位分层', '人纹、地纹、天纹建立目标阶梯，不同状态承担不同反馈。'],
  ['3', '条件解释', '解锁条件、消耗材料、空状态靠近当前操作点。'],
  ['4', '背包选择', '按特性页签缩小选择范围，道具网格支持快速比较。'],
  ['5', '收益判断', '详情页展示属性、等级、下一等级效果，支撑升级决策。'],
  ['6', '闭环反馈', '解锁、装配、升级、替换后用 Toast 和点亮状态回写成长。'],
] as const;

const starDots = [
  [364, 629, 2], [332, 392, 4], [187, 704, 3], [325, 501, 5], [942, 618, 4], [188, 334, 2],
  [466, 274, 4], [615, 505, 2], [660, 675, 4], [223, 560, 5], [478, 454, 2], [838, 487, 3],
  [844, 334, 3], [833, 509, 4], [365, 529, 4], [743, 691, 2], [873, 675, 4], [538, 481, 1],
  [427, 692, 2], [178, 389, 3], [721, 610, 2], [293, 549, 4], [397, 658, 5], [807, 466, 4],
  [1095, 569, 1], [627, 738, 2], [583, 520, 4], [767, 613, 1], [980, 505, 3], [401, 407, 3],
  [362, 335, 4], [548, 733, 3], [864, 395, 3], [740, 315, 4], [680, 685, 4], [568, 698, 4],
  [1170, 499, 4], [257, 426, 3], [550, 480, 4], [393, 450, 5], [221, 469, 4], [313, 688, 5],
  [969, 364, 4], [872, 675, 4], [841, 600, 2], [814, 419, 4],
] as const;

function Header({ eyebrow, title, desc, dark = false }: { eyebrow: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className="xs-header">
      <i />
      <p className="xs-eyebrow">{eyebrow}</p>
      <h2 className={dark ? 'xs-light' : ''}>{title}</h2>
      {desc ? <p className="xs-desc">{desc}</p> : null}
    </div>
  );
}

function Pill({ children, tone = 'blue' }: { children: string; tone?: Theme }) {
  return <span className={`xs-pill ${tone}`}>{children}</span>;
}

function FeatureCard({ tone, icon, title, children }: { tone: Theme; icon: string; title: string; children: string }) {
  return (
    <article className={`xs-feature-card ${tone}`}>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Rationale({ title, subtitle, principles, dark = true }: { title: string; subtitle: string; principles: Principle[]; dark?: boolean }) {
  return (
    <div className={`xs-rationale ${dark ? 'dark' : 'light'}`}>
      <p className="xs-rationale-sub">{subtitle}</p>
      <h3>{title}</h3>
      <div className="xs-rationale-grid" style={{ gridTemplateColumns: `repeat(${principles.length}, 1fr)` }}>
        {principles.map((item) => (
          <article key={item.title} className={item.theme ?? 'blue'}>
            <i />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Shot({ src, label, className = '' }: { src: string; label?: string; className?: string }) {
  return (
    <figure className={`xs-shot ${className}`}>
      <img src={src} alt={label ?? ''} />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

function Marker({ n, x, y, dark = false }: { n: number; x: number; y: number; dark?: boolean }) {
  return (
    <span className={`xs-marker ${dark ? 'gold' : ''}`} style={{ left: x, top: y }}>
      {n}
    </span>
  );
}

function Notes({ items, title }: { title: string; items: string[] }) {
  return (
    <div className="xs-notes">
      <p className="xs-notes-over">界面解读 · WHAT YOU SEE</p>
      <h3>{title}</h3>
      {items.map((item, index) => {
        const [head, text] = item.split('|');
        return (
          <article key={item}>
            <b>{index + 1}</b>
            <div>
              <h4>{head}</h4>
              <p>{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProcessTimeline() {
  return (
    <div className="xs-process-timeline">
      {flowSteps.map(([id, title, text], index) => {
        const right = index % 2 === 0;
        return (
          <article key={id} className={right ? 'right' : 'left'} style={{ top: index * 174 }}>
            <span>{id}</span>
            <div className="line" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
}

function Constellation() {
  const human = [[420, 660], [530, 675], [640, 665], [760, 665], [880, 675], [990, 655]];
  const earth = [[540, 475], [680, 505], [820, 475]];
  const heaven = [[680, 330]];
  return (
    <div className="xs-constellation">
      {starDots.map(([x, y, s], i) => <i key={i} className="star" style={{ left: x, top: y, width: s, height: s }} />)}
      <div className="halo h1" />
      <div className="halo h2" />
      <div className="halo h3" />
      <svg viewBox="0 0 1280 900" preserveAspectRatio="none">
        <path d="M420 660 C500 560 540 475 680 330 C820 475 880 560 990 655" className="line heaven" />
        <path d="M420 660 C500 650 550 560 540 475 C590 520 630 535 680 505 C720 530 775 520 820 475 C820 560 900 650 990 655" className="line earth" />
        <path d="M420 660 C525 690 600 650 680 505 C760 650 850 690 990 655" className="line human" />
        <path d="M530 675 L640 665 L760 665 L880 675" className="line human soft" />
      </svg>
      {heaven.map(([x, y]) => <b key={`${x}-${y}`} className="node heaven" style={{ left: x - 46, top: y - 46 }}><em /></b>)}
      {earth.map(([x, y]) => <b key={`${x}-${y}`} className="node earth" style={{ left: x - 26, top: y - 26 }}><em /></b>)}
      {human.map(([x, y]) => <b key={`${x}-${y}`} className="node human" style={{ left: x - 17, top: y - 17 }}><em /></b>)}
    </div>
  );
}

function TierDiagram() {
  return (
    <div className="xs-tier-diagram">
      {[
        ['人纹', '基础装配', 'human'],
        ['地纹', '组合激活', 'earth'],
        ['天纹', '最终点亮', 'heaven'],
      ].map(([title, sub, cls]) => (
        <article key={title} className={cls}>
          <div><strong>{title}</strong><span>{sub}</span></div>
        </article>
      ))}
      <i className="line a" /><i className="line b" />
      <p className="caption a">2 人纹 → 1 地纹</p>
      <p className="caption b">3 地纹 → 1 天纹</p>
    </div>
  );
}

function InterfaceSection({
  type,
  eyebrow,
  title,
  desc,
  src,
  shotLabel,
  markers,
  noteTitle,
  notes,
  rationaleTitle,
  principles,
}: {
  type: 'tree' | 'equip' | 'upgrade';
  eyebrow: string;
  title: string;
  desc: string;
  src: string;
  shotLabel?: string;
  markers: Array<[number, number, number]>;
  noteTitle: string;
  notes: string[];
  rationaleTitle: string;
  principles: Principle[];
}) {
  return (
    <section className={`xs-section xs-interface xs-${type}`}> 
      <Header eyebrow={eyebrow} title={title} desc={desc} />
      <div className="xs-interface-stage">
        <Shot src={src} label={shotLabel} />
        {markers.map(([n, x, y]) => <Marker key={n} n={n} x={x} y={y} />)}
      </div>
      <Notes title={noteTitle} items={notes} />
      <Rationale title={rationaleTitle} subtitle="为什么这样设计 · WHY IT WORKS" principles={principles} />
    </section>
  );
}

function JourneyChart() {
  const points = [
    [152, 540, '好奇', '进入星图', '打开绣身界面'],
    [347, 500, '期待', '解锁槽位', '达成境界解锁'],
    [542, 470, '满足', '装配绣身', '背包装配属性'],
    [737, 442, '成就', '点亮花纹', '激活下层点亮'],
    [932, 415, '渐入', '升级强化', '升到下一等级'],
    [1127, 375, '✦ 登顶巅峰', '套装 · 天纹', '集齐效果拉满'],
  ] as const;
  return (
    <div className="xs-journey-card">
      <p className="y-label">情绪强度</p>
      <svg viewBox="0 0 1140 520" preserveAspectRatio="none">
        <line x1="82" y1="352" x2="1057" y2="352" className="axis" />
        <path d="M82 260 C240 225 340 210 472 188 C610 164 718 145 862 126 C950 115 1010 98 1057 90" className="glow-area" />
        <path d="M82 260 C240 225 340 210 472 188 C610 164 718 145 862 126 C950 115 1010 98 1057 90" className="curve" />
      </svg>
      {points.map(([x, y, mood, name, desc], i) => (
        <article key={name} className={i === 5 ? 'peak' : ''} style={{ left: x - 90, top: 0 }}>
          <i style={{ height: 632 - y }} />
          <h4 style={{ top: y - 62 }}>{mood}</h4>
          <b style={{ top: 371 }}>{i + 1}</b>
          <strong style={{ top: 408 }}>{name}</strong>
          <p style={{ top: 438 }}>{desc}</p>
        </article>
      ))}
    </div>
  );
}

export function XiushenExactCase() {
  return (
    <div className="xiushen-exact-canvas">
      <section className="xs-hero">
        <div className="glow g1" /><div className="glow g2" /><div className="glow g3" />
        <div className="hero-bar" />
        <p className="hero-cn">绣 身</p>
        <h1>绣身系统成长线设计</h1>
        <p className="hero-desc">以「天 · 地 · 人」三纹星图为原型的角色养成线 —— 点亮、装配、升级，层层递进，越走越深。</p>
        <div className="hero-pills"><Pill>星图</Pill><Pill>装配</Pill><Pill>升级</Pill><Pill>套装</Pill></div>
      </section>

      <section className="xs-section xs-purpose">
        <Header eyebrow="BACKGROUND · 系统目的" title="为什么要做绣身系统" desc="为了增加「角色成长线」的深度，解决的是养成后期「没目标可追」的问题。" />
        <div className="xs-feature-row">
          <FeatureCard tone="human" icon="线" title="成长线趋于单一">角色养成到后期会缺少持续、可探索的新目标。</FeatureCard>
          <FeatureCard tone="earth" icon="图" title="星图式深度">用「天·地·人」三纹网络，模拟成可点亮的星图，把养成线具象化。</FeatureCard>
          <FeatureCard tone="gold" icon="构" title="自定义构筑">装配 + 升级 + 套装，让玩家按流派定制成长路线，提高强度。</FeatureCard>
        </div>
        <div className="xs-objective">
          <p>设计目标 · OBJECTIVE</p>
          <h3>模拟可点亮的成长星图，补上养成的深度</h3>
          <span>绣身系统同时承载 成长深度 + 收集驱动 + 自我表达 —— 越点越亮，越走越深。</span>
        </div>
      </section>

      <section className="xs-section xs-flow">
        <Header eyebrow="SYSTEM MAP · 系统全景" title="绣身养成流程" desc="用状态可见性降低学习成本，用递进目标延长追求，用轻反馈保持操作节奏。" dark />
        <ProcessTimeline />
      </section>

      <section className="xs-section xs-star-map">
        <Header eyebrow="SYSTEM MAP · 系统全景" title="绣身三阶段星图构思" desc="绣身是「招式」体系下的一个成长维度。它的核心，是一套自下而上、层层激活的三纹结构。" dark />
        <Constellation />
        <div className="xs-map-legend">
          <article className="heaven"><i /> <h3>天纹</h3><p>顶点 · 点亮花纹，给到最强效果</p><Pill tone="heaven">需 3 个地纹激活</Pill></article>
          <article className="earth"><i /> <h3>地纹</h3><p>枢纽 · 连接人与天，承上启下</p><Pill tone="earth">需 2 个人纹激活</Pill></article>
          <article className="human"><i /> <h3>人纹</h3><p>根基 · 数量最多，养成的起点</p><Pill tone="human">达成境界即可解锁</Pill></article>
        </div>
        <TierDiagram />
        <Rationale title="层层递进的结构" subtitle="为什么用三层结构 · WHY THREE TIERS" principles={[
          { title: '目标梯度效应', text: '人→地→天 层层递进，有清晰的下一个目标。', theme: 'human' },
          { title: '格式塔·连续性', text: '连接线把散点组织成星座，结构易读。', theme: 'earth' },
          { title: '天地人心智模型', text: '三才符合东方玄学认知，玩家代入感强。', theme: 'gold' },
        ]} />
      </section>

      <InterfaceSection
        type="tree"
        eyebrow="INTERFACE · 绣身星图"
        title="绣身星图"
        desc="三层节点 + 连接花纹，把养成的全貌摊在一屏里 —— 哪里亮了、哪里还锁着，一眼分明。"
        src={xsAssets.tree}
        shotLabel="绣身星图界面"
        markers={[[2, 172, 486], [1, 244, 552], [4, 580, 596], [3, 406, 500], [5, 730, 533]]}
        noteTitle="一屏看懂「亮到哪 · 锁着哪」"
        notes={[
          '天纹槽位|三层顶点，激活后点亮全图、给最强效果',
          '人纹 / 地纹槽位|根基与枢纽，数量多、入门门槛低',
          '绣身花纹|不同的绣身花纹代表不同的养成路线',
          '未解锁态|未解锁的不能装配，需要前置槽位激活才可解锁',
          '绣身入口|绣身在招式界面内，与内功 / 心法 / 绝学并列切换',
        ]}
        rationaleTitle="让一张图自己把规则讲清楚"
        principles={[
          { title: '格式塔·连续性', text: '连线把节点组织成星座，结构自解释、无需说明书。', theme: 'human' },
          { title: '目标梯度', text: '锁态清楚显示「下一步要什么」，始终给到方向。', theme: 'earth' },
          { title: '进度可见性', text: '花纹点亮 = 进度外显，成就感即时可见。', theme: 'gold' },
          { title: '心智模型', text: '天地人三才，符合东方玄学直觉。', theme: 'gray' },
        ]}
      />

      <InterfaceSection
        type="equip"
        eyebrow="FLOW · 装配绣身"
        title="绣身装配"
        desc="点一个空槽，背包就地弹出 —— 挑选、看属性、装配，所有操作都发生在视线焦点上。"
        src={xsAssets.equip}
        shotLabel="绣身装配界面"
        markers={[[1, 282, 669], [2, 612, 397], [3, 546, 476], [4, 546, 546], [5, 518, 674]]}
        noteTitle="点槽位，就地挑一枚绣身"
        notes={[
          '选中槽位|点击空槽，高亮并唤出背包为它挑绣身',
          '绣身详情|名称、等级、专属标记、当前属性，一览即懂',
          '类型筛选|全部 / 专属 / 通用，快速定位想要的',
          '背包道具|可装配的绣身列表，空状态也会有明确提示',
          '一键装配|装配后自动收起背包 + Toast 反馈“装配成功”',
        ]}
        rationaleTitle="把选择放在视线焦点上完成"
        principles={[
          { title: '就近原则', text: '点槽位即弹背包，操作在焦点处完成，不跳转。', theme: 'human' },
          { title: '所见即所得', text: '装配前完整展示属性，决策不用猜。', theme: 'earth' },
          { title: '自我表达', text: '专属 / 通用自由搭配，构筑个人流派。', theme: 'gold' },
          { title: '即时反馈', text: '装配成功 Toast + 自动收起，闭环利落。', theme: 'gray' },
        ]}
      />

      <InterfaceSection
        type="upgrade"
        eyebrow="FLOW · 升级强化"
        title="绣身升级"
        desc="当前属性与下一级属性并排陈列 —— 让玩家一眼判断「再升一级，值不值」。"
        src={xsAssets.upgrade}
        shotLabel="绣身升级界面"
        markers={[[1, 592, 399], [2, 662, 439], [3, 662, 498], [4, 626, 599], [5, 586, 663]]}
        noteTitle="把「下一级更强」摆在眼前"
        notes={[
          '当前等级|当前等级与上限，进度一目了然',
          '当前属性|这一级实际生效的数值',
          '下一级属性|升级后的数值预览，与当前对比',
          '升级消耗|所需材料与数量，门槛透明',
          '升级 / 收起|一键升级，数值即时刷新；收起可关闭升级弹窗',
        ]}
        rationaleTitle="用「对比」把升级冲动拉满"
        principles={[
          { title: '对比预览·损失厌恶', text: '把「下一级更强」摆在眼前，强化升级冲动。', theme: 'human' },
          { title: '沉没成本·IKEA', text: '投入越多越舍不得换，养成黏性随之增强。', theme: 'earth' },
          { title: '决策可见性', text: '消耗与收益同屏，「值不值」一眼判断。', theme: 'gold' },
          { title: '即时反馈', text: '升级成功 Toast + 数值跳变，正反馈到位。', theme: 'gray' },
        ]}
      />

      <section className="xs-section xs-art">
        <Header eyebrow="ART DIRECTION · 界面美术" title="美术包装" desc="绣身界面的美术，要设计成「暗底 + 发光星图」，让「点亮」这件事看起来值得追 —— 暗底才衬得出光。" />
        <div className="xs-art-choice">
          <p>本作的美术选择 · DESIGN CHOICES</p>
          <article><i className="ink" /><h3>暗底 + 发光节点</h3><span>星图在深色背景上才有「点亮感」，强化进度反馈。</span></article>
          <article><i className="gold" /><i className="cyan" /><i className="green" /><h3>天 / 地 / 人 三色编码</h3><span>金 · 青 · 绿 区分三纹层级，结构一眼分层。</span></article>
          <article><i className="cyan" /><h3>经络 / 星座式连线</h3><span>连线把节点串成「身上的星图」，呼应绣身主题。</span></article>
        </div>
        <div className="xs-art-ref">
          <p>同类参考 · REFERENCE</p>
          <small>* 参考为风格示意图，非他游实机截图</small>
          {[
            [xsAssets.genshin, '《原神》· 命之座', '星座式天赋盘，深色星空 + 发光连线表达解锁。'],
            [xsAssets.ref2, '《永劫无间》· 魂玉经脉', '网格化养成，节点高亮区分激活 / 未激活。'],
            [xsAssets.ref3, '《天涯明月刀》· 心法', '国风纹样 + 流光，养成界面也讲究氛围。'],
          ].map(([src, title, text]) => (
            <article key={title}>
              <img src={src} alt="" />
              <h3>{title}</h3>
              <span>{text}</span>
            </article>
          ))}
        </div>
        <div className="xs-takeaway">
          <p>共性结论 · TAKEAWAY</p>
          <span>养成「星图 / 网络」类界面，普遍用「暗底 + 发光节点 + 连线」表达解锁与进度 —— 绣身把它本地化成东方「天 · 地 · 人」三纹星图，让成长既好看，又一眼能读。</span>
        </div>
      </section>

      <section className="xs-section xs-journey">
        <Header eyebrow="PLAYER JOURNEY × FLOW · 玩家旅程" title="玩家心流体验" desc="绣身养成系统的情绪是稳步上扬，越接近顶点，动力越强。" />
        <JourneyChart />
        <div className="xs-journey-note">
          <p>目标梯度效应 · GOAL–GRADIENT</p>
          <h3>越接近顶点，回报与动力越强 —— 曲线持续上扬</h3>
          <span>绣身养成系统靠「下一级看得见的提升」驱动：每装配、每升级、每点亮一处花纹，都把玩家推向更高的天纹与套装目标，形成稳定的正反馈。</span>
          <div><Pill>蔡格尼克 · 收集开环</Pill><Pill>沉没成本 · 升级投入</Pill><Pill tone="gold">目标梯度 · 登顶</Pill></div>
        </div>
      </section>

      <section className="xs-section xs-final">
        <div className="final-glow" />
        <p className="final-kicker">EPILOGUE · 结语</p>
        <h2>一张越点越亮的星图</h2>
        <p className="final-desc">从解锁第一个人纹，到点亮整张天纹 —— 绣身用「天·地·人」三层结构，三组纹路套装，把养成的深度、收集的乐趣与自我表达，拧成同一条越走越亮的成长线。</p>
        <div className="final-cards">
          <article className="human"><b>01</b><h3>成长深度</h3><p>三层递进，养成后期也有目标可追。</p></article>
          <i>→</i>
          <article className="earth"><b>02</b><h3>收集驱动</h3><p>点亮花纹与套装，激发完成欲。</p></article>
          <i>→</i>
          <article className="heaven"><b>03</b><h3>自我表达</h3><p>装配与流派，构筑独一无二的身。</p></article>
        </div>
        <h3 className="gallery-title">视觉稿展示</h3>
        <div className="final-gallery">
          <img className="main" src={xsAssets.finalA} alt="绣身主界面视觉稿" />
          <img src={xsAssets.finalB} alt="绣身提示视觉稿" />
          <img src={xsAssets.finalC} alt="绣身升级视觉稿" />
        </div>
      </section>
    </div>
  );
}
