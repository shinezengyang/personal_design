import './JuejingExactCase.css';

const assets = {
  entryOverview: 'https://www.figma.com/api/mcp/asset/24865515-8518-4055-96b9-b14406493db8',
  entryLocked: 'https://www.figma.com/api/mcp/asset/b1449929-0345-4836-9eee-3bccc5df1618',
  combatInitial: 'https://www.figma.com/api/mcp/asset/1f38e2ed-c1f7-43bf-8adc-68c00f75cd0b',
  combatDefeated: 'https://www.figma.com/api/mcp/asset/d61a1f66-8549-4957-8e00-7853800b4c6c',
  mapView: 'https://www.figma.com/api/mcp/asset/a3c14aef-cf1d-4921-abf3-b4ef6dcd9bab',
  outcome: 'https://www.figma.com/api/mcp/asset/9991e2cd-651b-464c-9e82-1a215371eb8b',
};

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

function Header({ no, title, desc }: { no: string; title: string; desc?: string }) {
  return (
    <div className="jj-header">
      <p className="jj-header-no">{no}</p>
      <h2>{title}</h2>
      <i />
      {desc ? <p className="jj-header-desc">{desc}</p> : null}
    </div>
  );
}

function Dot({ tone = 'blue' }: { tone?: 'blue' | 'gold' | 'green' | 'red' | 'purple' | 'gray' }) {
  return <span className={`jj-dot jj-dot-${tone}`} />;
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="jj-info-card">
      <i />
      <p>{label}</p>
      <b>{value}</b>
    </article>
  );
}

function PrincipleCard({ en, title, body, foot, tone = 'blue' }: { en: string; title: string; body: string; foot: string; tone?: 'blue' | 'gold' }) {
  return (
    <article className={`jj-principle-card jj-tone-${tone}`}>
      <i />
      <em>{en}</em>
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{foot}</small>
      <Dot tone={tone === 'gold' ? 'gold' : 'blue'} />
    </article>
  );
}

function FlowNode({ index, title, sub, tone = 'blue' }: { index: number; title: string; sub: string; tone?: 'blue' | 'gold' | 'green' }) {
  return (
    <article className="jj-flow-node">
      <Dot tone={tone} />
      <b>{index}</b>
      <strong>{title}</strong>
      <span>{sub}</span>
    </article>
  );
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="jj-insight-card">
      <i />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function AnnoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="jj-anno-card">
      <Dot />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function StageCard({ index, name, locked = false }: { index: number; name: string; locked?: boolean }) {
  return (
    <article className={`jj-stage-card ${locked ? 'locked' : ''}`}>
      <Dot tone={locked ? 'gray' : 'blue'} />
      <b>{index}</b>
      <strong>{name}</strong>
      {locked ? <i /> : null}
    </article>
  );
}

function ConditionPanel({ title, ok }: { title: string; ok?: boolean }) {
  const rows = ok
    ? [
        ['按钮状态', '高亮激活（可点击）'],
        ['点击反馈', '进入副本 + 自动战斗'],
        ['关卡显示', '可前往的状态（可配置）'],
        ['视觉差异', '亮色调 + 发光特效'],
        ['设计目的', '正向激励，强化成就感'],
      ]
    : [
        ['按钮状态', '置灰（不可点击）'],
        ['点击反馈', '弹出通用Toast提示'],
        ['关卡显示', '不可前往的状态（可配置）'],
        ['视觉差异', '灰色调 + 锁定图标'],
        ['设计目的', '明确告知阻塞原因，引导成长'],
      ];
  return (
    <div className="jj-condition">
      <h3 className={ok ? 'ok' : 'bad'}>{title}</h3>
      <div className={`jj-condition-box ${ok ? 'ok' : 'bad'}`}>
        {rows.map(([k, v]) => (
          <div className="jj-condition-row" key={k}>
            <b>{k}</b>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonsterState({ en, title, body, tone }: { en: string; title: string; body: string; tone: 'green' | 'red' | 'gold' }) {
  return (
    <article className={`jj-monster-state ${tone}`}>
      <i />
      <em>{en}</em>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function MechanismCard({ en, title, items, tone }: { en: string; title: string; items: string[]; tone: 'blue' | 'gold' | 'purple' }) {
  return (
    <article className={`jj-mech-card ${tone}`}>
      <i />
      <em>{en}</em>
      <h3>{title}</h3>
      <hr />
      {items.map((item) => (
        <p key={item}><Dot tone={tone === 'purple' ? 'purple' : tone} />{item}</p>
      ))}
    </article>
  );
}

function SummaryCard({ no, title, body, tone }: { no: string; title: string; body: string; tone: 'blue' | 'gold' | 'green' | 'purple' }) {
  return (
    <article className={`jj-summary-card ${tone}`}>
      <em>{no}</em>
      <h3>{title}</h3>
      <p>{body}</p>
      <Dot tone={tone} />
    </article>
  );
}

export function JuejingExactCase() {
  return (
    <div className="jj-canvas" data-node-id="8328:13706" data-name="玩法-庆余年·绝境试炼 交互设计作品集 精修版">
      <section className="jj-section jj-cover" data-node-id="8328:13707">
        <div className="jj-cover-bg" />
        <div className="jj-cover-lines"><i /><i /></div>
        <div className="jj-cover-label">INTERACTION DESIGN</div>
        <h1>绝境试炼</h1>
        <i className="jj-cover-divider" />
        <p className="jj-cover-copy">以「日常活跃度驱动」为核心设计目标，通过渐进式关卡体系、<br />自动战斗寻路机制和条件门控系统，打造低操作成本高回报的<br />PVE副本玩法，提升玩家长线留存与活跃参与度。</p>
        <div className="jj-tags">
          {['PVE副本', '渐进关卡', '自动战斗', '条件门控'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="jj-cover-circle" />
        <div className="jj-side-dashes"><i /><i /><i /><i /></div>
      </section>

      <section className="jj-section jj-overview">
        <Header no="01" title="项目概述" />
        <p className="jj-overview-copy">「绝境试炼」是庆余年手游中的核心PVE副本玩法系统。系统以提升玩家日常活跃度为核心目标，设计了9个渐进式关卡（试炼·壹 至 试炼·玖），结合自动战斗与自动寻路机制，降低玩家操作成本的同时保障玩法丰富度。</p>
        <div className="jj-info-list">
          <InfoCard label="玩法类型" value="PVE副本" />
          <InfoCard label="关卡数量" value="9个渐进关卡" />
          <InfoCard label="核心机制" value="自动战斗 + 条件门控" />
        </div>
        <p className="jj-image-caption overview-caption">绝境试炼入口界面 — 关卡选择与条件展示</p>
        <div className="jj-shot jj-overview-shot"><Img src={assets.entryOverview} alt="绝境试炼入口界面" /></div>
        <div className="jj-callout overview-callout">
          <b>设计理念</b>
          <p>遵循「低成本高回报」设计哲学，通过自动化减少重复操作，让玩家聚焦核心决策。9级渐进关卡配合条件门控，构建清晰的成长动力曲线。</p>
        </div>
      </section>

      <section className="jj-section jj-principles">
        <Header no="02" title="设计目标与原则" desc="核心目标：提升玩家日常活跃度，构建可持续的PVE副本参与循环" />
        <div className="jj-principle-grid">
          <PrincipleCard en="Flow Theory" title="渐进式难度曲线" body="9级关卡从简到难，配合条件门控，确保玩家始终处于「心流」区间——既不因太简单而无聊，也不因太难而焦虑。" foot="基于Csikszentmihalyi心流理论，在技能与挑战间维持动态平衡" />
          <PrincipleCard en="Cognitive Load" title="降低操作成本" body="自动战斗+自动寻路双重自动化，将玩家从繁琐的手动操作中解放。进入副本后自动寻找怪物战斗，击败后自动寻路至下一目标。" foot="减少外在认知负荷(Extraneous Load)，释放工作记忆给策略决策" />
          <PrincipleCard en="Feedback Loop" title="即时状态反馈" body="怪物存活/被击败/复活倒计时三态实时可见；资源次数、刷新倒计时全程透明展示，杜绝信息黑箱。" foot="Norman可视性原则(Visibility)：系统状态变化需即时、可感知" tone="gold" />
          <PrincipleCard en="Progressive Disclosure" title="条件门控与引导" body="不满足条件时按钮置灰+Toast提示；满足条件后高亮激活。通过视觉差异化引导玩家理解进度路径。" foot="渐进展示(Progressive Disclosure)减少初始认知负担" tone="gold" />
        </div>
      </section>

      <section className="jj-section jj-flow-section">
        <Header no="03" title="核心交互流程" desc="玩家从大世界进入绝境试炼到完成挑战返回的完整路径" />
        <div className="jj-flow-row">
          <FlowNode index={1} title="大世界主界面" sub="玩法入口" />
          <FlowNode index={2} title="绝境试炼入口" sub="关卡选择" />
          <FlowNode index={3} title="条件判断" sub="是否满足" tone="gold" />
          <FlowNode index={4} title="进入副本" sub="自动战斗" />
          <FlowNode index={5} title="击败怪物" sub="自动寻路" />
          <FlowNode index={6} title="查看地图" sub="怪物分布" tone="green" />
          <FlowNode index={7} title="退出副本" sub="返回入口" />
          <FlowNode index={8} title="返回大世界" sub="流程闭环" />
        </div>
        <div className="jj-branch-note">
          <i />
          <p><span className="ok">满足 → 进入副本</span><span className="bad">不满足 → 按钮置灰 + Toast提示</span></p>
        </div>
        <div className="jj-insight-grid">
          <InsightCard title="自动化闭环" body="进入副本后自动寻找怪物战斗，击败后自动寻路下一目标。全程无需手动操作，实现「进入即挂机」的轻量化体验。" />
          <InsightCard title="分支决策点" body="条件判断是核心分支节点，满足条件时按钮高亮可点击，不满足时置灰并通过Toast提示差距，形成清晰引导。" />
          <InsightCard title="地图辅助系统" body="战斗过程中可随时查看地图，了解各怪物分布位置和当前状态。为玩家提供战场全局视野，增强掌控感。" />
        </div>
        <div className="jj-callout flow-callout">
          <b>Hick-Hyman Law</b>
          <p>选择越少，决策越快。线性流程将复杂系统拆解为单一路径，每个节点仅需一次决策，降低选择焦虑。</p>
        </div>
      </section>

      <section className="jj-section jj-entry-section">
        <Header no="04" title="入口界面设计" desc="通过两种状态对比，展示条件门控系统的交互反馈机制" />
        <p className="jj-state-title bad">A. 进入条件不满足</p>
        <p className="jj-state-title ok">B. 进入条件满足</p>
        <div className="jj-shot jj-entry-shot left"><Img src={assets.entryLocked} alt="进入条件不满足" /></div>
        <div className="jj-shot jj-entry-shot right"><Img src={assets.entryOverview} alt="进入条件满足" /></div>
        <div className="jj-entry-anno-grid">
          <AnnoCard title="按钮置灰反馈" body="进入条件不满足时，「前往」按钮置灰不可点击。点击置灰按钮弹出通用Toast，明确告知玩家差距。" />
          <AnnoCard title="关卡选中态" body="关卡选中时高亮展示，显示该关卡入口背景图（可配置）、可获得奖励、伙伴装备次数等关键信息。" />
          <AnnoCard title="按钮高亮激活" body="条件满足后按钮变为可点击的高亮态，点击即进入副本并自动寻找怪物进行自动战斗。状态切换即时可见。" />
        </div>
        <div className="jj-bullets entry-bullets">
          <h3>界面核心要素</h3>
          {['帮助按钮 — 点击弹出通用帮助界面（可配置）','关卡选中态/未选中态 — 文本可配置，视觉差异明显','副本入口背景图 — 可配置，增强沉浸感','关卡奖励预览 — 展示可能掉落的奖励（可配置）','伙伴装备次数 — 所有关卡共享，次数不足时不可获得','次数刷新倒计时 — 结束后次数恢复至10次（可配置）'].map((item) => <p key={item}><i />{item}</p>)}
        </div>
        <div className="jj-callout entry-callout">
          <b>Visibility of System Status</b>
          <p>Nielsen十大可用性原则之首：系统应始终让用户了解当前状态。按钮置灰/高亮、Toast反馈、倒计时均是状态可见性的具体体现。</p>
        </div>
      </section>

      <section className="jj-section jj-stage-section">
        <Header no="05" title="关卡与条件系统" />
        <div className="jj-stage-line" />
        <div className="jj-stage-row">
          {['试炼·壹','试炼·贰','试炼·叁','试炼·肆','试炼·伍','试炼·陆','试炼·柒','试炼·捌','试炼·玖'].map((name, i) => <StageCard key={name} index={i + 1} name={name} locked={i > 3} />)}
        </div>
        <p className="jj-stage-caption">← 已解锁&nbsp;&nbsp;&nbsp;&nbsp;未解锁 →</p>
        <div className="jj-condition-wrap">
          <ConditionPanel title="条件不满足状态" />
          <ConditionPanel title="条件满足状态" ok />
        </div>
        <div className="jj-config-note">
          <h3>可配置化设计</h3>
          <p>关卡文本、入口背景图、奖励内容、进入条件均支持后台配置，策划可灵活调整而无需开发介入。这体现了「配置驱动」的系统设计思维，提高运营效率。</p>
          <div className="jj-chip-row">{['关卡文本','入口背景图','奖励内容','进入条件','伙伴装备次数','刷新倒计时'].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="jj-callout stage-callout">
          <b>Progressive Disclosure + Affordance</b>
          <p>渐进展示降低认知负担——仅在合适时机解锁下一关卡。按钮的置灰/高亮切换是经典的Affordance设计，用视觉差异传达可操作性。</p>
        </div>
      </section>

      <section className="jj-section jj-combat-section">
        <Header no="06" title="副本战斗设计" desc="自动战斗 + 自动寻路双重机制，最大化降低玩家操作成本" />
        <p className="jj-state-title blue">A. 进入副本 — 自动战斗</p>
        <p className="jj-state-title gold">B. 怪物被击败 — 自动寻路</p>
        <div className="jj-shot jj-combat-shot left"><Img src={assets.combatInitial} alt="自动战斗" /></div>
        <div className="jj-shot jj-combat-shot right"><Img src={assets.combatDefeated} alt="自动寻路" /></div>
        <div className="jj-entry-anno-grid combat">
          <AnnoCard title="自动战斗机制" body="进入副本后，系统自动寻找最近怪物并发起战斗。玩家无需手动操作，降低重复劳动。" />
          <AnnoCard title="怪物存活状态" body="怪物在副本中以实时存活状态展示，包含血量、位置信息。被击败后显示「被击败」标签。" />
          <AnnoCard title="自动寻路衔接" body="击败当前怪物后，玩家角色自动寻路至下一个存活怪物位置，实现战斗→寻路→战斗的无缝循环。" />
        </div>
        <div className="jj-combat-loop">
          {['进入副本','自动战斗','击败怪物','自动寻路','循环/退出'].map((item, i) => <article key={item}><Dot /><b>{i + 1}</b><span>{item}</span></article>)}
        </div>
        <div className="jj-callout combat-callout">
          <b>Minimal Interaction Cost</b>
          <p>Fitts定律延伸——减少交互步骤数比优化单步效率更有效。自动化将5步操作(选怪→移动→攻击→选怪→移动)压缩为0步，从根本上消除操作成本。</p>
        </div>
      </section>

      <section className="jj-section jj-map-section">
        <Header no="07" title="地图与怪物系统" desc="地图界面展示各怪物分布位置与实时状态，增强玩家战场掌控感" />
        <p className="jj-image-caption map-caption">通用地图界面 — 显示各怪物分布位置</p>
        <div className="jj-shot jj-map-shot"><Img src={assets.mapView} alt="地图与怪物状态" /></div>
        <div className="jj-monster-list">
          <h3>怪物三态设计</h3>
          <MonsterState en="ALIVE" title="存活" tone="green" body="怪物在副本中正常存活，可被攻击。自动战斗系统会自动寻路至最近的存活怪物。" />
          <MonsterState en="DEFEATED" title="被击败" tone="red" body="怪物被玩家击败后的状态，显示「被击败」标签。系统自动寻路至下一个存活怪物。" />
          <MonsterState en="RESPAWN" title="复活倒计时" tone="gold" body="怪物被击败后进入复活倒计时，倒计时结束后怪物重新出现，为持续挑战提供可能。" />
        </div>
        <div className="jj-bullets map-bullets">
          <h3>地图功能要点</h3>
          {['点击打开通用地图界面，显示各怪物分布位置','怪物位置标注实时更新，反映当前存活/击败状态','地图为二级界面，不中断战斗进程','支持玩家快速判断当前战场局势，辅助决策'].map((item) => <p key={item}><Dot tone="green" />{item}</p>)}
        </div>
        <div className="jj-callout map-callout green">
          <b>Situational Awareness</b>
          <p>Endsley态势感知理论三层级：感知(Perception)→理解(Comprehension)→预测(Projection)。地图提供感知层，状态标签提供理解层，倒计时提供预测层。</p>
        </div>
      </section>

      <section className="jj-section jj-mech-section">
        <Header no="08" title="状态反馈与资源机制" desc="透明的资源计数与倒计时机制，让玩家对成本收益一目了然" />
        <div className="jj-mech-grid">
          <MechanismCard tone="blue" en="Companion Equipment Count" title="伙伴装备次数" items={['所有关卡共享装备获取次数','挑战关卡时可获得伙伴装备','次数不足时，伙伴装备不可获得','当前次数 / 总次数 实时显示']} />
          <MechanismCard tone="gold" en="Timer-Based Refresh" title="次数刷新倒计时" items={['倒计时结束后次数恢复至10次','刷新周期可由策划后台配置','倒计时全程可见，杜绝信息黑箱','引导玩家合理规划挑战节奏']} />
          <MechanismCard tone="purple" en="Rare Drop Preview" title="稀有掉落展示" items={['关卡中可能掉落的奖励（可配置）','稀有掉落高亮展示，激励挑战欲','奖励预览降低不确定性焦虑','结合沉没成本效应驱动持续参与']} />
        </div>
        <div className="jj-resource-loop">
          <h3>资源循环模型</h3>
          <div>{['挑战关卡','消耗次数','获得奖励','次数耗尽','等待刷新','次数恢复'].map((item) => <span key={item}>{item}</span>)}<em>↻ 循环</em></div>
        </div>
        <div className="jj-callout mech-callout purple">
          <b>Loss Aversion + Variable Ratio Schedule</b>
          <p>次数限制利用损失厌恶心理——玩家不愿浪费已有次数，驱动每日消耗。稀有掉落采用变率强化程序(VR Schedule)，不确定的高价值回报是最强的行为驱动力，配合倒计时刷新形成「日常打卡」的参与惯性。</p>
        </div>
      </section>

      <section className="jj-section jj-summary-section">
        <Header no="09" title="设计总结" />
        <div className="jj-summary-grid">
          <SummaryCard no="01" tone="blue" title="低操作成本" body="自动战斗+自动寻路双重自动化，将玩家从繁琐操作中解放，实现「一键挂机」式轻量体验。" />
          <SummaryCard no="02" tone="gold" title="渐进式成长" body="9级关卡从简到难，条件门控精准控制节奏，确保玩家始终处于心流区间。" />
          <SummaryCard no="03" tone="green" title="全透明反馈" body="怪物三态实时可见、资源次数倒计时全程展示。消除信息黑箱，建立用户信任。" />
          <SummaryCard no="04" tone="purple" title="配置化驱动" body="文本、图片、条件、奖励全面可配置，策划可灵活调整而无需开发介入，提升运营效率。" />
        </div>
        <div className="jj-final-band">
          <h3>绝境试炼</h3>
          <p>以「日常活跃度驱动」为核心，通过自动化降低操作成本、渐进式关卡构建成长动力、<br />全透明反馈建立用户信任，打造低门槛高留存的PVE副本体验。</p>
          <Dot tone="gold" />
        </div>
        <h2 className="jj-visual-title">视觉稿展示</h2>
        <div className="jj-final-shot"><Img src={assets.outcome} alt="绝境试炼视觉稿展示" /></div>
      </section>
    </div>
  );
}
