import type { CSSProperties, ReactNode } from 'react';
import './JinlanExactCase.css';

const assets = {
  hub: '/assets/qingyu-jinlan/IMG_hub.webp',
  hubBig: '/assets/qingyu-jinlan/IMG_hub.webp',
  sMain: '/assets/qingyu-jinlan/IMG_s_main.webp',
  sCond: '/assets/qingyu-jinlan/IMG_s_cond.webp',
  sFill: '/assets/qingyu-jinlan/IMG_s_fill.webp',
  sFill1: '/assets/qingyu-jinlan/IMG_s_fill1.webp',
  sFill2: '/assets/qingyu-jinlan/IMG_s_fill2.webp',
  recruit: '/assets/qingyu-jinlan/IMG_recruit.webp',
  mPanel: '/assets/qingyu-jinlan/IMG_m_panel.webp',
  mList: '/assets/qingyu-jinlan/IMG_m_list.webp',
  mVote: '/assets/qingyu-jinlan/IMG_m_vote.webp',
  task: '/assets/qingyu-jinlan/IMG_task.webp',
  dungeon: '/assets/qingyu-jinlan/IMG_dungeon.webp',
  benefit: '/assets/qingyu-jinlan/IMG_benefit.webp',
  specComponent: '/assets/qingyu-jinlan/spec/spec-component.webp',
  specShots: [
    '/assets/qingyu-jinlan/spec/spec-create.webp',
    '/assets/qingyu-jinlan/spec/spec-main.webp',
    '/assets/qingyu-jinlan/spec/spec-recruit.webp',
    '/assets/qingyu-jinlan/spec/spec-members.webp',
    '/assets/qingyu-jinlan/spec/spec-task.webp',
    '/assets/qingyu-jinlan/spec/spec-dungeon.webp',
    '/assets/qingyu-jinlan/spec/spec-benefit.webp',
    '/assets/qingyu-jinlan/spec/spec-vow.webp',
  ],
};

type IntroCard = {
  no: string;
  title: string;
  body: string;
  tone: 'red' | 'orange' | 'blue';
};

type SystemNode = {
  no: string;
  title: string;
  desc: string;
  icon: ModuleIconType;
  side: 'left' | 'right';
  y: number;
};

type ModuleIconType = 'vow' | 'recruit' | 'member' | 'task' | 'dungeon' | 'benefit';

type ExplainItem = {
  no: string;
  title: string;
  body: string;
};

function Header({ eyebrow, en, title, desc, dark = false }: { eyebrow: string; en: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className="jl-header">
      <span className="jl-header-bar" />
      <p className="jl-eyebrow">{eyebrow}</p>
      <p className="jl-en">{en}</p>
      <h2 className={dark ? 'is-dark' : ''}>{title}</h2>
      {desc ? <p className="jl-desc">{desc}</p> : null}
    </div>
  );
}

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

function IntroCard({ no, title, body, tone }: IntroCard) {
  return (
    <article className={`jl-intro-card jl-${tone}`}>
      <div className="jl-intro-top" />
      <div className="jl-intro-num">{no}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function GoalIcon({ tone }: { tone: 'red' | 'gold' | 'blue' }) {
  return (
    <div className={`jl-goal-symbol jl-goal-symbol-${tone}`} aria-hidden="true">
      <span />
      <i />
      <b />
    </div>
  );
}

function GoalCard({ title, en, body, result, tone }: { title: string; en: string; body: string; result: string; tone: 'red' | 'gold' | 'blue' }) {
  return (
    <article className={`jl-goal-card jl-${tone}`}>
      <div className="jl-goal-top" />
      <div className="jl-goal-icon"><GoalIcon tone={tone} /></div>
      <h3>{title}</h3>
      <em>{en}</em>
      <p>{body}</p>
      <strong>{result}</strong>
    </article>
  );
}

function ModuleIcon({ icon }: { icon: ModuleIconType }) {
  const icons: Record<ModuleIconType, ReactNode> = {
    vow: (
      <>
        <circle cx="13" cy="16" r="5.2" />
        <circle cx="19" cy="16" r="5.2" />
        <path d="M10 16h12" />
      </>
    ),
    recruit: (
      <>
        <circle cx="14" cy="11" r="4" />
        <path d="M7.5 24c1.2-5.2 11.8-5.2 13 0" />
        <path d="M24 11v8M20 15h8" />
      </>
    ),
    member: (
      <>
        <circle cx="16" cy="10.5" r="4.5" />
        <path d="M8.5 24c1.5-6 13.5-6 15 0" />
      </>
    ),
    task: (
      <>
        <rect x="10" y="6" width="12" height="20" rx="2.5" />
        <path d="M13 12h6M13 17h6M13 22h4" />
      </>
    ),
    dungeon: (
      <>
        <path d="M16 6l9 4v6.4c0 5.5-3.8 8.7-9 10.6-5.2-1.9-9-5.1-9-10.6V10l9-4z" />
        <path d="M12 16.5l2.8 2.8 5.5-6.1" />
      </>
    ),
    benefit: (
      <>
        <rect x="7" y="13" width="18" height="13" rx="2.5" />
        <path d="M16 13v13M7 18h18" />
        <path d="M16 13c-4 0-6-1.5-6-4 0-1.4 1.2-2.5 2.8-2.5 2.2 0 3.2 2.8 3.2 6.5zM16 13c4 0 6-1.5 6-4 0-1.4-1.2-2.5-2.8-2.5-2.2 0-3.2 2.8-3.2 6.5z" />
      </>
    ),
  };

  return (
    <svg className={`jl-module-symbol jl-module-symbol-${icon}`} viewBox="0 0 32 32" aria-hidden="true">
      {icons[icon]}
    </svg>
  );
}

function SystemCard({ node }: { node: SystemNode }) {
  return (
    <article className={`jl-system-card ${node.side}`} style={{ top: node.y }}>
      <div className="jl-system-icon"><ModuleIcon icon={node.icon} /></div>
      <b>{node.no}</b>
      <h3>{node.title}</h3>
      <p>{node.desc}</p>
      <i className="jl-system-dot" />
      <span className="jl-system-line" />
    </article>
  );
}

function Pin({ n, x, y, gold = false }: { n: number; x: number; y: number; gold?: boolean }) {
  return <span className={`jl-pin ${gold ? 'gold' : ''}`} style={{ left: x, top: y }}>{n}</span>;
}

function LabelPill({ children, x, y, wide = false }: { children: string; x: number; y: number; wide?: boolean }) {
  return <div className="jl-shot-label" style={{ left: x, top: y, width: wide ? 200 : 180 }}>{children}</div>;
}

function StepPills({ active }: { active: number }) {
  const steps = ['条件审核', '填写信息', '队员命名', '创建成功'];
  return (
    <div className="jl-step-pills">
      {steps.map((step, i) => (
        <div key={step} className="jl-step-wrap">
          <span className={i === active ? 'active' : ''}>{step}</span>
          {i !== steps.length - 1 ? <b>→</b> : null}
        </div>
      ))}
    </div>
  );
}

function ExplainList({ title, eyebrow, items, dark = false }: { title: string; eyebrow?: string; items: ExplainItem[]; dark?: boolean }) {
  return (
    <aside className={`jl-explain ${dark ? 'dark' : ''}`}>
      {eyebrow ? <em>{eyebrow}</em> : null}
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="jl-explain-row" key={item.no}>
          <span>{item.no}</span>
          <div>
            <b>{item.title}</b>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}

function Principle({ color, label, title, body }: { color: string; label: string; title: string; body: string }) {
  return (
    <article className="jl-principle">
      <i style={{ background: color }} />
      <em style={{ color }}>{label}</em>
      <h4>{title}</h4>
      <p>{body}</p>
    </article>
  );
}

function PrincipleBand({ title, eyebrow = '为什么这样设计 · DESIGN RATIONALE', marker = '#c8a86b', children }: { title: string; eyebrow?: string; marker?: string; children: ReactNode }) {
  return (
    <div className="jl-principle-band" style={{ '--band-marker': marker } as CSSProperties}>
      <em>{eyebrow}</em>
      <h3>{title}</h3>
      <div className="jl-principle-grid">{children}</div>
    </div>
  );
}

function Shot({ src, x, y, w, h, className = '', children }: { src: string; x: number; y: number; w: number; h: number; className?: string; children?: ReactNode }) {
  return (
    <div className={`jl-shot ${className}`} style={{ left: x, top: y, width: w, height: h }}>
      <Img src={src} />
      {children}
    </div>
  );
}

export function JinlanExactCase() {
  const systemNodes: SystemNode[] = [
    { no: '01', title: '结义创建', desc: '仪式化建立金兰关系', icon: 'vow', side: 'left', y: 342 },
    { no: '02', title: '金兰招募', desc: '发布招募 · 主动邀约', icon: 'recruit', side: 'left', y: 522 },
    { no: '03', title: '成员管理', desc: '职位 · 贡献 · 名册', icon: 'member', side: 'left', y: 702 },
    { no: '04', title: '金兰任务', desc: '共同目标驱动协作', icon: 'task', side: 'right', y: 342 },
    { no: '05', title: '金兰副本', desc: '组队挑战 · 协同战斗', icon: 'dungeon', side: 'right', y: 522 },
    { no: '06', title: '金兰权益', desc: '成长权益 · 荣誉外显', icon: 'benefit', side: 'right', y: 702 },
  ];

  return (
    <div className="jl-case" data-node-id="8328:15243">
      <section className="jl-section jl-cover">
        <div className="jl-cover-orb orb-a" />
        <div className="jl-cover-orb orb-b" />
        <div className="jl-cover-orb orb-c" />
        <p className="jl-cover-kicker">INTERACTION&nbsp;&nbsp;DESIGN&nbsp;&nbsp;CASE</p>
        <h1>义结金兰</h1>
      </section>

      <section className="jl-section jl-bg">
        <Header eyebrow="项目背景" en="BACKGROUND" title="为什么需要「金兰」社交系统？" desc="《庆余年》以国风武侠立意，玩家对「归属感」有强烈诉求。「义结金兰」源自中国传统结拜文化 —— 以仪式确立、以情义维系的深度关系，正是将短期社交升级为长期经营的天然载体。" />
        <div className="jl-intro-grid">
          <IntroCard no="01" tone="red" title="社交浅层" body="好友与组队多为功能性协作，关系缺乏情感沉淀与持续触点，难以转化为长期陪伴。" />
          <IntroCard no="02" tone="orange" title="留存乏力" body="缺少需长期共同经营的关系载体，玩家一旦流失便无「牵挂」，回流动机薄弱。" />
          <IntroCard no="03" tone="blue" title="自传播弱" body="没有强社交绑定，玩家主动拉新、邀约回归的意愿低，社交裂变难以发生。" />
        </div>
        <div className="jl-opportunity">
          <em>设计机会 · OPPORTUNITY</em>
          <strong>将「结义」仪式沉淀为系统内核，用 关系绑定 + 共同目标 + 成长权益 驱动长期留存与社交裂变。</strong>
        </div>
        <div className="jl-tags-line">
          <span>由此推导出三条设计主线：</span>
          <b className="gold">仪式感</b><b className="blue">经营感</b><b className="red">荣誉感</b>
        </div>
      </section>

      <section className="jl-section jl-goals">
        <Header eyebrow="设计目标" en="GOALS" title="从痛点到目标 · 一条闭环" desc="三个痛点对应三个可衡量的设计目标，构成「情感—留存—传播」的增长闭环。" />
        <div className="jl-goal-grid">
          <GoalCard tone="red" title="情感联结" en="EMOTION" body="用结义仪式与共同记忆，把功能性队友升级为有归属感的「金兰」关系。" result="解决「社交浅层」" />
          <GoalCard tone="gold" title="长期留存" en="RETENTION" body="以共同目标与成长权益形成牵挂，让玩家有持续登录与回归的理由。" result="解决「留存乏力」" />
          <GoalCard tone="blue" title="社交裂变" en="FISSION" body="用招募、邀约与荣誉外显，驱动玩家主动拉新，形成自发的社交扩散。" result="解决「自传播弱」" />
        </div>
      </section>

      <section className="jl-section jl-system">
        <Header dark eyebrow="系统全景" en="SYSTEM MAP" title="六大模块 · 一个金兰中枢" desc="「金兰主界面」是统一入口，向外辐射六条业务线 —— 一个中枢、六个模块，构成清晰的信息架构。" />
        <div className="jl-system-orb orb-left" />
        <div className="jl-system-orb orb-center" />
        <div className="jl-system-orb orb-right" />
        <div className="jl-hub-card">
          <Img src={assets.hub} />
        </div>
        <div className="jl-hub-caption">金兰主界面</div>
        {systemNodes.map((node) => <SystemCard node={node} key={node.no} />)}
        <div className="jl-system-links" aria-hidden="true">
          <span className="jl-system-link left link-01" />
          <span className="jl-system-link left link-02" />
          <span className="jl-system-link left link-03" />
          <span className="jl-system-link right link-04" />
          <span className="jl-system-link right link-05" />
          <span className="jl-system-link right link-06" />
        </div>
        <div className="jl-anatomy-title">
          <em>界面解构 · ANATOMY</em>
          <h3>金兰主界面 · 一屏看懂全部控件</h3>
          <p>统一入口里塞下了「关系 + 成长 + 行为」三类控件，却依然清爽 —— 看它如何分区。</p>
        </div>
        <div className="jl-hub-big">
          <Img src={assets.hubBig} />
          <Pin n={1} x={206} y={7} /><Pin n={2} x={519} y={22} /><Pin n={3} x={366} y={117} /><Pin n={4} x={680} y={216} /><Pin n={5} x={159} y={313} /><Pin n={6} x={445} y={394} />
        </div>
        <ExplainList
          dark
          title="主界面控件说明"
          items={[
            { no: '1', title: '金兰等级进度条', body: '团队等级与本周积分上限，成长进度总览' },
            { no: '2', title: '每日豪礼 · 一键领取', body: '每日上线即可领，养成天天打开的习惯钩子' },
            { no: '3', title: '中央祭坛 · 成员席位', body: '五人围坐的仪式中心，把关系摆在视觉正中' },
            { no: '4', title: '金兰技能 / 召唤', body: '右侧常驻增益：技能装配 + 一键召唤队友' },
            { no: '5', title: '五大功能入口', body: '[副本][成员][权益][招募][任务]环形排布于底部' },
            { no: '6', title: '金兰队伍名称', body: '队伍身份外显，可点击查看与编辑' },
          ]}
        />
        <PrincipleBand title="为什么是「中枢式」结构？">
          <Principle color="#ef6b5e" label="HICK’S LAW · 席克定律" title="单层心智模型" body="六大功能收敛到一个金兰界面，单层导航让选项一目了然，决策成本最低 —— 玩家「一眼知道该去哪」。" />
          <Principle color="#7fa0e0" label="PROXIMITY · 接近性" title="中心辐射分区" body="中央是「关系」（成员·祭坛），外圈是「行为」（任务·副本·权益）；越靠中心越情感，越向外越功能。" />
          <Principle color="#5fb89b" label="HOOK · 即时反馈" title="习惯养成钩子" body="顶部常驻「每日豪礼一键领取」，用即时奖励把「打开金兰」养成日常，持续拉动回访与活跃。" />
        </PrincipleBand>
      </section>

      <section className="jl-section jl-create">
        <Header eyebrow="核心流程 01" en="FLOW · CREATION" title="结义创建 · 从组队到歃血为盟" desc="把「建立金兰」拆成一条清晰向导：入口 → 条件审核 → 填写信息 → 队员命名 → 创建成功。" />
        <StepPills active={0} />
        <Shot src={assets.sMain} x={80} y={354} w={520} h={293} />
        <LabelPill x={80} y={654}>① 入口 · 未加入金兰</LabelPill>
        <Shot src={assets.sCond} x={80} y={712} w={520} h={293} />
        <LabelPill x={80} y={1015}>② 条件审核</LabelPill>
        <Shot src={assets.sFill} x={80} y={1073} w={520} h={289} />
        <LabelPill x={80} y={1376}>③ 填写信息</LabelPill>
        <Shot src={assets.sFill1} x={80} y={1456} w={520} h={289} />
        <LabelPill x={80} y={1759}>④ 队员命名</LabelPill>
        <Shot src={assets.sFill2} x={80} y={1839} w={520} h={289} />
        <LabelPill x={80} y={2142}>⑤ 创建成功</LabelPill>
        <div className="jl-flow-notes">
          <article style={{ top: 368 }}><em>01</em><h3>两个清晰入口</h3><p>「结义平台」浏览招募，「前往结义」直接发起。入口仅两项，决策零负担。</p><b>席克定律 · Hick’s Law</b></article>
          <article style={{ top: 734 }}><em>02</em><h3>结义前先验资格</h3><p>系统实时校验「组队人数 / 等级 / 好感度」，达标✓、未达标✗，从源头杜绝无效结义。</p><b className="orange">防错原则 · Error Prevention</b></article>
          <article style={{ top: 1095 }}><em>03</em><h3>亲手为金兰命名</h3><p>玩家设置 6 字前缀，占位示例降低空白焦虑 —— 命名即承诺。</p><b className="red">承诺与一致 · Commitment</b></article>
          <article style={{ top: 1478 }}><em>04</em><h3>大哥给小弟排序</h3><p>将金兰队伍里的金兰们进行称谓排序，强化江湖结义的真实感。</p><b className="red">认同感 · Acceptance</b></article>
          <article style={{ top: 1861 }}><em>05</em><h3>最后确认结义金兰</h3><p>仪式落幕的瞬间即情感峰值 —— 玩家会记住「最高峰」与「结尾」。</p><b className="red">峰终定律 · Peak-End Rule</b></article>
        </div>
        <div className="jl-white-principle">
          <em>设计原理</em>
          <h3>所见即所得 · WYSIWYG</h3>
          <p>步骤清晰，流程明确，不仅简化了金兰结义的繁琐性，还让结义的形式性依旧保留。每一步都明确告知玩家去做什么，不用靠猜。</p>
        </div>
      </section>

      <section className="jl-section jl-recruit">
        <Header eyebrow="核心流程 02" en="FLOW · RECRUIT" title="金兰招募 · 找到对的人" desc="「结义平台」是一座双向招募大厅：玩家既能浏览申请，也能发布招募，让合适的人彼此找到。" />
        <Shot src={assets.recruit} x={80} y={326} w={660} h={371}>
          <Pin n={1} x={190} y={123} /><Pin n={2} x={536} y={191} /><Pin n={3} x={412} y={303} />
        </Shot>
        <LabelPill x={80} y={711}>结义平台界面</LabelPill>
        <ExplainList
          title="双向匹配的招募大厅"
          eyebrow="结义平台"
          items={[
            { no: '1', title: '可筛选队伍列表', body: '按等级 / 人数 / 修为要求 / 类型快速锁定合适金兰。' },
            { no: '2', title: '宣言与荣誉展示', body: '队伍自我表达吸引同好 —— 社会认同驱动选择。' },
            { no: '3', title: '申请 / 发布招募', body: '加入与招新双向并行，形成主动社交裂变。' },
          ]}
        />
        <div className="jl-recruit-flow">
          <span>浏览队伍列表</span>
          <b>→</b>
          <span>查看宣言 / 荣誉</span>
          <b>→</b>
          <span>申请 / 发布招募</span>
          <b>→</b>
          <span>审核通过 · 加入</span>
        </div>
        <div className="jl-white-principle recruit-principle">
          <em>设计原理</em>
          <h3>社会认同 · Social Proof</h3>
          <p>队伍把等级、人数、荣誉与宣言「摆上货架」，玩家凭可见的群体信号判断归属。透明的目标与门槛降低了加入决策的不确定性，也让招募方更易吸引同频玩家。</p>
        </div>
      </section>

      <section className="jl-section jl-members">
        <Header eyebrow="核心流程 03" en="FLOW · MEMBERS" title="成员管理 · 各司其职" desc="加入金兰后，身份、权责与荣誉一屏可见 —— 让长期关系有秩序、可治理地运转。" />
        <Shot src={assets.mPanel} x={80} y={308} w={740} h={416}>
          <Pin n={1} x={41} y={50} /><Pin n={2} x={38} y={278} /><Pin n={3} x={236} y={278} /><Pin n={4} x={596} y={368} />
        </Shot>
        <LabelPill x={80} y={738}>结义成员界面</LabelPill>
        <ExplainList
          title="一屏掌握「我是谁 · 在哪 · 贡献多少」"
          eyebrow="界面解读 · WHAT YOU SEE"
          items={[
            { no: '1', title: '成员身份卡', body: '前缀称号 · 等级 · 在线 · 历史/周贡献，强弱与活跃一眼可辨' },
            { no: '2', title: '金兰公告', body: '仅盟主可编辑发布，是群规与仪式感的载体' },
            { no: '3', title: '荣誉墙', body: '本周排名 / 积分公开，把集体成绩摆上台面' },
            { no: '4', title: '协作入口', body: '退出 · 成员管理 · 一键组队，常用操作前置' },
          ]}
        />
        <div className="jl-subshot-head left"><b>弹窗</b>成员管理 · 权责名册</div>
        <div className="jl-subshot-head right"><b>弹窗</b>请离投票 · 集体决策</div>
        <Shot src={assets.mList} x={80} y={872} w={545} h={307} />
        <Shot src={assets.mVote} x={655} y={872} w={545} h={307} />
        <p className="jl-shot-desc left">按职位与在线状态排成名册；底部「割袍断义」可把队友请离出队伍。</p>
        <p className="jl-shot-desc right">是否把队友请离出去不由金兰大哥独断 —— 全员投票 + 倒计时，到点未同意自动拒绝。</p>
        <PrincipleBand title="把「关系」当成「组织」来经营" eyebrow="为什么这样设计 · WHY IT WORKS">
          <Principle color="#ef6b5e" label="ROLE HIERARCHY" title="角色体系 · 权责对等" body="大哥 / 长老 / 成员分层，决策权与责任绑定，减少「谁说了算」的内耗。" />
          <Principle color="#e8c77a" label="SOCIAL PROOF" title="荣誉墙 · 社会认同" body="排名与贡献公开摆台，用同侪激励驱动长期活跃与留存。" />
          <Principle color="#7fa0e0" label="PROCEDURAL JUSTICE" title="请离投票 · 程序正义" body="不可逆的「踢人」交给全员投票 + 倒计时，防止权力滥用与冲动决策。" />
          <Principle color="#5fb89b" label="LOSS AVERSION" title="退出代价 · 损失厌恶" body="退出清零积分 / 称号、加保护期，把沉没成本摆明，降低冲动流失。" />
        </PrincipleBand>
      </section>

      <section className="jl-section jl-task">
        <Header eyebrow="核心流程 04" en="FLOW · TASKS" title="金兰任务 · 让目标看得见" desc="积分进度条 + 宝箱里程碑 + 多人协作任务，把「一起变强」做成一条看得见、走得动的成长线。" />
        <Shot src={assets.task} x={80} y={329} w={680} h={383}>
          <Pin n={1} x={143} y={23} /><Pin n={2} x={186} y={146} /><Pin n={3} x={415} y={179} /><Pin n={4} x={405} y={354} />
        </Shot>
        <LabelPill x={80} y={726}>金兰任务界面</LabelPill>
        <ExplainList
          title="看得见的成长线"
          eyebrow="金兰任务"
          items={[
            { no: '1', title: '积分进度 · 宝箱里程碑', body: '每一档奖励标注在进度条上，越近越想冲。' },
            { no: '2', title: '多人协作任务', body: '需 ≥2 名成员共同完成（0/2），目标变羁绊。' },
            { no: '3', title: '「前往」一键直达', body: '跳转任务地点，缩短行动路径、降低门槛。' },
            { no: '4', title: '每周刷新倒计时', body: '周期窗口驱动稳定回流与持续登录。' },
          ]}
        />
        <div className="jl-white-principle task-principle">
          <em>设计原理</em>
          <h3>目标梯度效应 · Goal-Gradient Effect</h3>
          <p>当奖励被切分成一档档可见的里程碑，玩家会随着进度临近而加速投入。积分条上的宝箱把「遥远的强大」拆成「下一个就能拿」的近期目标。</p>
        </div>
      </section>

      <section className="jl-section jl-dungeon">
        <Header eyebrow="核心流程 05" en="FLOW · RAID" title="金兰副本 · 一起打更强的怪" desc="一键邀约组队、阶段化首领与伤害榜，把「并肩作战」做成既好上手、又有挑战与荣誉的循环。" />
        <Shot src={assets.dungeon} x={80} y={330} w={680} h={382}>
          <Pin n={1} x={454} y={27} /><Pin n={2} x={55} y={63} /><Pin n={3} x={410} y={224} /><Pin n={4} x={499} y={320} />
        </Shot>
        <LabelPill x={80} y={726}>金兰副本界面</LabelPill>
        <ExplainList
          title="协同 · 竞争 · 荣誉"
          eyebrow="金兰副本"
          items={[
            { no: '1', title: '成员邀请 · 在线状态', body: '看谁在线、一键邀约，把组队摩擦降到最低。' },
            { no: '2', title: '本周之星排行', body: '伤害榜激发良性竞争，名次即荣誉。' },
            { no: '3', title: '伤害积分里程碑', body: '阶段化目标，越打越投入。' },
            { no: '4', title: '便捷组队 / 前往挑战', body: '满 3 人且全为金兰方可开启 —— 门槛即防错。' },
          ]}
        />
        <div className="jl-white-principle task-principle">
          <em>设计原理</em>
          <h3>心流 · Flow</h3>
          <p>首领分阶提供「难度阶梯」，配合一键组队把同伴快速凑齐。当挑战强度与队伍能力相互匹配，玩家更易进入专注而忘我的心流。</p>
        </div>
      </section>

      <section className="jl-section jl-benefit">
        <Header dark eyebrow="核心流程 06" en="FLOW · BENEFITS" title="金兰权益 · 把成长种成一棵树" desc="金兰等级越高，梅树开得越盛 —— 抽象的成长被具象成一棵可被看见、被珍惜的「共同培育之物」。" />
        <Shot src={assets.benefit} x={80} y={347} w={720} h={407} className="gold-shot">
          <Pin n={1} x={172} y={73} gold /><Pin n={2} x={634} y={53} gold /><Pin n={3} x={398} y={306} gold /><Pin n={4} x={579} y={256} gold />
        </Shot>
        <LabelPill x={80} y={768}>金兰权益界面</LabelPill>
        <ExplainList
          dark
          title="成长，看得见"
          eyebrow="BENEFITS TREE"
          items={[
            { no: '1', title: '红点提醒 · 召唤', body: '未领取用红点催促，损失厌恶驱动每日回访。' },
            { no: '2', title: '等级解锁 · 借阅', body: '「5级解锁」的锁定节点制造期待与目标。' },
            { no: '3', title: '当前等级 · 绽放', body: '等级越高梅树越盛，数值进步有了情感载体。' },
            { no: '4', title: '里程碑 · 长期目标', body: '远期锚点，引导持续的共同经营。' },
          ]}
        />
        <div className="jl-benefit-rationale">
          <em>为什么这样设计 · ART DIRECTION</em>
          <h3>用「生长的梅树」，而非一张权益列表</h3>
          <p>常见做法是把权益排成冰冷的列表；这里却让它随等级绽放成一棵梅树 —— 把数值进步翻译成可被看见、被珍惜的画面。玩家为这棵树投入越多，离开的代价就越高。</p>
          <span>损失厌恶 Loss Aversion</span><span>沉没成本 / IKEA 效应</span>
        </div>
      </section>

      <section className="jl-section jl-spec">
        <Header eyebrow="设计交付" en="LEGEND & SPEC" title="效果图与视觉规范" desc="一套统一的设计语言" />
        <div className="jl-spec-layout">
          <div className="jl-spec-card">
            <div className="jl-spec-title">
              <b>视觉规范</b>
              <span>VISUAL SPECIFICATION</span>
            </div>
            <div className="jl-spec-panel">
              <em>主色板 · PALETTE</em>
              <div className="jl-palette">
                {[['水墨', '#0E1426'], ['鎏金', '#C99A3A'], ['浅金', '#E8C77A'], ['按钮蓝', '#00A6E8'], ['琥珀', '#C7841C'], ['朱红', '#D0503E']].map(([name, color]) => <div key={name}><i style={{ background: color }} /><b>{name}</b><span>{color}</span></div>)}
              </div>
            </div>
            <div className="jl-spec-panel jl-type-panel">
              <em>字体 · TYPEFACE</em>
              <div className="jl-type-row"><strong>义结金兰</strong><span>楷体 · 主标题 / 场景标题</span></div>
              <div className="jl-type-row sub"><strong>金兰系统设计</strong><span>宋体 · 正文 / 说明文字</span></div>
            </div>
            <div className="jl-ui-board">
              <em>控件 · COMPONENT</em>
              <Img src={assets.specComponent} className="jl-component-img" />
            </div>
          </div>
          {assets.specShots.map((src, i) => (
            <div key={src} className={`jl-spec-shot jl-spec-shot-${i}`}>
              <Img src={src} className="jl-spec-shot-img" />
            </div>
          ))}
        </div>
      </section>

      <section className="jl-section jl-end">
        <div className="jl-end-orb" />
        <p>EPILOGUE · 结语</p>
        <h2>把「关系」做成「经营」</h2>
        <h3>金兰系统没有发明新玩法，而是用一条「仪式 → 协作 → 成长」的主线，把零散的社交行为，沉淀为可被长期经营的深度关系。</h3>
        <div className="jl-end-chain">
          <article className="red"><i /> <b>情感联结</b><span>从队友到金兰，关系有了归属。</span></article>
          <strong>→</strong>
          <article className="gold"><i /> <b>长期留存</b><span>共同目标与成长权益，给玩家留下来的理由。</span></article>
          <strong>→</strong>
          <article className="blue"><i /> <b>社交裂变</b><span>荣誉与招募外显，驱动主动拉新。</span></article>
        </div>
        <small>—— 三者首尾相扣，构成自我增强的社交增长闭环 ——</small>
      </section>
    </div>
  );
}
