import './BianjingExactCase.css';

/* Local copies of the Figma exports. These used to point at
   https://www.figma.com/api/mcp/asset/... URLs, which Figma expires after ~7 days —
   every screenshot on this page had gone dead. Node ids noted for re-pulling.
   (`frame663` used to sit here too but was never referenced, so it is gone.) */
const BJ = '/images/qingyu/bianjing';
const assets = {
  mainHub: `${BJ}/main-hub.webp`,             // Figma 9817:8530 img_main_hub
  /* S4 shows three distinct entry states; A and B both used to point at `mainWorld`,
     so the 大世界HUD screenshot was shown twice and 活动主界面 never appeared. */
  entryWorld: `${BJ}/entry-a-world-hud.webp`, // Figma 9817:8645 A 大世界HUD
  entryActivity: `${BJ}/entry-b-activity.webp`, // Figma 9817:8638 B 活动主界面
  entryHub: `${BJ}/entry-c-hub.webp`,         // Figma 9817:8643 C 边境战场主界面
  personalInfo: `${BJ}/personal-info.webp`,   // Figma 9817:8688
  buffSelect: `${BJ}/buff-select.webp`,       // Figma 9817:8858
  battle1: `${BJ}/battle1.webp`,              // Figma 9817:8814
  battle2: `${BJ}/battle2.webp`,              // Figma 9817:8815
  battle3: `${BJ}/battle3.webp`,              // Figma 9817:8818
  battle4: `${BJ}/battle4.webp`,              // Figma 9817:8816
  battle5: `${BJ}/battle5.webp`,              // Figma 9817:8817
  victoryA: `${BJ}/victory-a.webp`,           // Figma 9817:8820 img_victory
  victoryB: `${BJ}/victory-b.webp`,           // Figma 9817:8821 img_victory
  publicStage: `${BJ}/public-stage.webp`,     // Figma 9817:8889 img_public_stage
  public1: `${BJ}/public1.webp`,              // Figma 9817:8952
  public2: `${BJ}/public2.webp`,              // Figma 9817:8953
  public3: `${BJ}/public3.webp`,              // Figma 9817:8954
  public4: `${BJ}/public4.webp`,              // Figma 9817:8955
  public5: `${BJ}/public5.webp`,              // Figma 9817:8956
  boss: `${BJ}/boss.webp`,                    // Figma 9817:8960 img_boss_combat
};

type Tone = 'red' | 'gold' | 'blue' | 'green' | 'purple' | 'gray';

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

function Header({ no, title, desc, gold = false }: { no: string; title: string; desc?: string; gold?: boolean }) {
  return (
    <div className="bj-header">
      <p>{no}</p>
      <h2>{title}</h2>
      <i className={gold ? 'gold' : ''} />
      {desc ? <span>{desc}</span> : null}
    </div>
  );
}

function Dot({ tone = 'red' }: { tone?: Tone }) {
  return <i className={`bj-dot ${tone}`} />;
}

// Figma's ARROW_EQUILATERAL cap on the connector polylines: side 6, apex on the vertex.
function ArrowHead({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="5.2" markerHeight="6" refX="5.196" refY="3" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
        <path d="M0 0 5.196 3 0 6Z" fill="#00a0e9" />
      </marker>
    </defs>
  );
}

function InfoRow({ label, value, tone = 'red' }: { label: string; value: string; tone?: Tone }) {
  return (
    <article className="bj-info-row">
      <i className={tone} />
      <p>{label}</p>
      <b>{value}</b>
    </article>
  );
}

function TierCard({ no, en, title, body, points, tone }: { no: string; en: string; title: string; body: string; points: string[]; tone: Tone }) {
  return (
    <article className={`bj-tier-card ${tone}`}>
      <i />
      <em>{en}</em>
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      {points.map((point) => (
        <span key={point}><Dot tone={tone} />{point}</span>
      ))}
      <strong>{no}</strong>
    </article>
  );
}

function SmallAnno({ title, body, tone = 'red' }: { title: string; body: string; tone?: Tone }) {
  return (
    <article className={`bj-small-anno ${tone}`}>
      <i />
      <Dot tone={tone} />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function FeatureCard({ en, title, body, points, tone }: { en: string; title: string; body: string; points: string[]; tone: Tone }) {
  return (
    <article className={`bj-feature-card ${tone}`}>
      <i />
      <em>{en}</em>
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      {points.map((point) => <span key={point}><Dot tone={tone} />{point}</span>)}
    </article>
  );
}

export function BianjingExactCase() {
  return (
    <div className="bj-canvas" data-node-id="8328:14223">
      <section className="bj-section bj-cover">
        <div className="bj-cover-bg" />
        <div className="bj-cover-label">INTERACTION DESIGN</div>
        <h1>边境战场</h1>
        <div className="bj-cover-divider" />
        <p className="bj-cover-copy">以「个人关卡+公共关卡+限时BOSS」三层递进架构为核心，<br />融合增益成长系统与组队社交机制，构建高复杂度、<br />强策略性的大型PVP/PVE混合活动玩法。</p>
        <div className="bj-cover-orb" />
      </section>

      <section className="bj-section bj-overview">
        <Header no="01" title="项目概述与设计目标" />
        <p className="bj-overview-copy">「边境战场」是庆余年手游中大型多人PVP/PVE混合活动玩法。系统以三层递进架构(个人关卡→公共关卡→限时BOSS)为核心骨架，配合增益成长系统与便捷组队机制，实现单人与多人、PVE与PVP的有机融合。</p>
        <div className="bj-info-list">
          <InfoRow label="玩法类型" value="PVP/PVE混合活动" />
          <InfoRow label="关卡结构" value="个人5关 + 公共3关 + 限时BOSS" />
          <InfoRow label="核心系统" value="增益成长 + 便捷组队" tone="gold" />
          <InfoRow label="设计目标" value="高复杂度、强社交、高留存" tone="gold" />
        </div>
        <p className="bj-caption main-hub">边境战场主界面 — 活动入口与关卡总览</p>
        <div className="bj-shot bj-main-hub"><Img src={assets.mainHub} /></div>
        <div className="bj-callout overview-note"><b>设计思路</b><p>「分层递进、由简到难」——通过个人关卡培养基础能力，公共关卡引入社交协作，限时BOSS创造高潮体验。采用【山水画卷】的包装设计，关卡入口放在画卷中间，个人关卡对应小山门，公共关卡对应大山门，层层递进闯关门。</p></div>
      </section>

      <section className="bj-section bj-architecture">
        <Header no="02" title="系统架构总览" desc="三层递进架构：由个人到团队，由PVE到PVP，由常规到限时" />
        <div className="bj-tier-row">
          <TierCard no="1" tone="blue" en="PERSONAL STAGES" title="第一层：个人关卡" body="5个独立PVE关卡，由简到难。包含关卡说明、推荐修为、通关奖励。完成后显示「已完成」标记。培养玩家基础战斗能力。" points={['5个独立关卡','推荐修为门槛','通关奖励(可配置)','关卡信息详情页','关卡重置机制']} />
          <TierCard no="2" tone="gold" en="PUBLIC STAGES" title="第二层：公共关卡" body="完成任意2个个人关卡后解锁。包含采集宝箱、运送物资、击败强敌三类事件。引入组队机制，支持多人协作与PVP对抗。" points={['采集宝箱','运送物资','击败强敌','便捷组队系统','完成2个人关解锁']} />
          <TierCard no="3" tone="red" en="TIMED BOSS" title="第三层：限时BOSS" body="限时出现的超级BOSS战。需组队挑战，实时伤害排行。尾刀奖励机制激励竞争，3个BOSS每队仅一次尾刀机会，创造活动高潮。" points={['3个限时BOSS','实时伤害排名','尾刀奖励(每队1次)','参与奖+排名奖','聊天栏公告']} />
        </div>
        <div className="bj-tier-conn a" /><div className="bj-tier-conn b" />
        <div className="bj-callout architecture-buff green"><b>贯穿系统：增益成长</b><p>每次通关可选择增益，增益贯穿整个活动周期。可装配/丢弃/覆盖，高品质增益来自公共关卡尾刀奖励，形成「挑战→成长→更强挑战」的正向循环。</p></div>
        <div className="bj-callout theory blue"><b>Scaffolding & Zone of Proximal Development</b><p>Vygotsky最近发展区理论——三层架构精确匹配不同能力水平的玩家：个人关卡为脚手架，公共关卡为协作区，限时BOSS为挑战峰值。</p></div>
      </section>

      <section className="bj-section bj-entry">
        <Header no="03" title="主界面与入口设计" desc="从大世界入口到边境战场主界面的完整交互路径" />
        <p className="bj-state-title green">A. 大世界HUD</p>
        <p className="bj-state-title blue">B. 活动主界面</p>
        <p className="bj-state-title red">C. 边境战场主界面</p>
        <div className="bj-shot bj-entry-shot a"><Img src={assets.entryWorld} /></div>
        <div className="bj-shot bj-entry-shot b"><Img src={assets.entryActivity} /></div>
        <div className="bj-shot bj-entry-shot c"><Img src={assets.entryHub} /></div>
        <svg className="bj-entry-links" viewBox="0 0 1280 940" fill="none" aria-hidden>
          <ArrowHead id="bjArrowEntry" />
          <path d="M310.5 272H448.5V335H463" stroke="#00a0e9" strokeWidth="1" markerStart="url(#bjArrowEntry)" />
          <path d="M710 379H831.5V335H847" stroke="#00a0e9" strokeWidth="1" markerStart="url(#bjArrowEntry)" />
        </svg>
        <div className="bj-anno-grid four">
          <SmallAnno tone="blue" title="活动入口" body="日常商业区域点击活动入口进入边疆战场界面。入口位置符合玩家已有心智模型。" />
          <SmallAnno tone="gold" title="增益Tips" body="点击弹出当前增益tips，展示已装配增益状态、增益图标/名称/效果。" />
          <SmallAnno tone="red" title="奖励预览" body="点击弹出奖励预览tips。红点逻辑：当有可领取奖励时显示，引导玩家及时领取。" />
          <SmallAnno tone="green" title="关卡总览" body="所有副本关卡名称一目了然。5个个人关卡+公共关卡入口清晰排列。" />
        </div>
        <div className="bj-route-label">入口交互流</div>
        <div className="bj-route"><b>大世界</b><span>活动入口</span><span>边境战场</span><span>选择关卡</span><span>进入副本</span></div>
        <div className="bj-callout entry-theory blue"><b>Information Scent & Wayfinding</b><p>信息气味理论——活动入口、增益tips、奖励预览、红点逻辑层层引导，让玩家在复杂系统中始终知道「去哪」和「为什么」。</p></div>
      </section>

      <section className="bj-section bj-personal">
        <Header no="04" title="个人关卡系统" desc="5个独立PVE关卡，承担基础能力培养与活动引导的角色" />
        <p className="bj-caption personal">个人关卡详情界面 — 关卡信息与通关奖励</p>
        <div className="bj-shot bj-personal-shot"><Img src={assets.personalInfo} /></div>
        <div className="bj-field-list">
          {[['副本标题','可配置的关卡名称，清晰标识每个关卡身份','blue'],['关卡说明','点击弹出帮助界面，详细描述副本目标与规则','blue'],['推荐修为','配置化门槛参考值，点击可跳转「我要变强」界面','gold'],['通关记录','最低修为玩家/最短通关时间，无记录时显示「暂无」','green'],['副本图片','可配置的关卡预览图，增强场景沉浸感','red'],['通关奖励','可配置奖励列表，完成后按钮变为「已完成」','red']].map(([t,b,tone]) => <SmallAnno key={t} title={t} body={b} tone={tone as Tone} />)}
        </div>
        <h3 className="bj-mini-title stage">5关卡递进结构</h3>
        <div className="bj-stage-progress">{[1,2,3,4,5].map((n)=><article key={n}><em>{n}</em><b>个人关卡{n}</b><span>难度递增</span></article>)}</div>
        <div className="bj-callout personal-reset gold"><b>关卡重置机制</b><p>点击可重置所有个人关卡（「已完成」标签去除），公共关卡不会重新上锁。为玩家提供重复挑战获取增益的路径。</p></div>
        <div className="bj-callout personal-theory blue"><b>Competence & Autonomy (Self-Determination Theory)</b><p>5关由简到难满足胜任感需求，推荐修为+自主选关满足自主感需求，共同驱动内在动机。</p></div>
      </section>

      <section className="bj-section bj-combat">
        <Header no="05" title="战斗与结算流程" desc="战斗场景到通关结算再到增益选择的完整闭环" />
        <p className="bj-state-title red">A. 战斗场景</p>
        <div className="bj-battle-grid">
          {[assets.battle1, assets.battle2, assets.battle4, assets.battle3, assets.battle5].map((src, i) => <div className={`bj-shot battle b${i}`} key={src}><Img src={src} /></div>)}
          {['采集资源关卡','守卫据点','躲避巡查关卡','突袭敌将关卡','保护援军关卡'].map((t,i)=><p className={`battle-cap c${i}`} key={t}>{t}</p>)}
        </div>
        <p className="bj-state-title green settle">B. 通关结算</p>
        <div className="bj-shot bj-victory a"><Img src={assets.victoryA} /></div>
        <div className="bj-shot bj-victory b"><Img src={assets.victoryB} /></div>
        <p className="bj-caption victory-a">个人关卡通关结算</p><p className="bj-caption victory-b">公共关卡通关结算</p>
        <div className="bj-anno-grid three combat-anno">
          <SmallAnno title="任务目标" body="可配置的关卡目标实时显示在HUD中，让玩家始终清楚当前任务。" tone="red" />
          <SmallAnno title="增益Tips" body="战斗中可查看当前已装配增益状态，确认增益效果是否生效。" tone="gold" />
          <SmallAnno title="退出机制" body="副本退出按钮弹出二次确认弹窗，防止误触退出造成进度丢失。" tone="blue" />
        </div>
        <div className="bj-settle-flow">{['通关判断\n成功/失败','结算展示\n奖励列表','关闭结算\n点击空白','增益选择\n自动弹出','返回主界面\n流程闭环'].map((s,i)=>{const [a,b]=s.split('\n');return <article key={a}><Dot tone="green"/><b>{i+1}</b><strong>{a}</strong><span>{b}</span></article>})}</div>
        <div className="bj-callout combat-fail red"><p>失败路径：通关失败弹出提示(文本可配置)，点击确定按钮重新开始当前关卡。不可使用轻功和闪避的限制增加了策略深度。</p></div>
        <div className="bj-callout combat-theory green"><b>Error Prevention & Recovery (Nielsen)</b><p>二次确认弹窗防误操作，失败可重试机制降低挫败感。结算→增益自动衔接减少认知断裂。</p></div>
      </section>

      <section className="bj-section bj-buff">
        <Header no="06" title="增益系统设计" desc="贯穿整个活动的成长线，连接战斗与奖励的核心纽带" />
        <p className="bj-caption buff">增益选择界面 — 通关后自动弹出</p>
        <div className="bj-shot bj-buff-shot"><Img src={assets.buffSelect} /></div>
        <div className="bj-buff-logic">
          <h3>增益操作逻辑</h3>
          {['选择增益 → 只有一个时自动选中','丢弃增益 → 点击已装配增益可丢弃','覆盖增益 → 高品质覆盖同类型低级增益','品质层级 → 公共关卡尾刀获高品质增益'].map((t)=><p key={t}><Dot tone="purple" />{t}</p>)}
        </div>
        <div className="bj-buff-tags">{[['增益图标','可配置的增益视觉标识'],['增益名称','文本和品质色均可配置'],['增益效果','效果描述文本可配置'],['增益数量','可配置的增益槽位数量'],['已装配态','显示当前装配的增益列表'],['未装配态','空槽位等待选择装配']].map(([a,b],i)=><SmallAnno key={a} tone={i>3?'green':i>1?'gold':'purple'} title={a} body={b} />)}</div>
        <h3 className="bj-mini-title buff-loop">增益成长循环</h3>
        <div className="bj-growth-flow"><b>挑战关卡</b><span>通关结算</span><span>选择增益</span><span>装备增益</span><span>更强战斗</span><em>↻ 正向循环</em></div>
        <div className="bj-callout buff-theory purple"><b>Positive Feedback Loop & Endowment Effect</b><p>正向反馈循环驱动持续参与。玩家对已获得的增益赋予更高价值，丢弃机制制造策略决策，覆盖机制创造成长感。</p></div>
      </section>

      <section className="bj-section bj-public">
        <Header no="07" title="公共关卡与组队" desc="完成任意2个个人关卡后解锁，引入PVP对抗与团队协作" />
        <p className="bj-caption public">公共关卡详情界面 — 限时事件关卡信息</p>
        <div className="bj-shot bj-public-shot"><Img src={assets.publicStage} /></div>
        <div className="bj-public-cards">
          <FeatureCard en="COLLECT" tone="green" title="采集宝箱" body="到达采集区域后开始采集。采集进度条可被打断。已采集到宝箱后显示标识。" points={['到达指定区域','采集进度条','可被敌方打断','已采集标识']} />
          <FeatureCard en="TRANSPORT" tone="gold" title="运送物资" body="运送物资到目标NPC处。运送中玩家有特殊标识，被击败后物资转移给击败者。" points={['运送玩家标识','被击败掉落物资','击败者获得物资','PVP对抗核心']} />
          <FeatureCard en="DEFEAT BOSS" tone="red" title="击败强敌" body="前往强敌区域击败精英怪。尾刀队伍可获得高品质增益奖励，激励团队竞争。" points={['精英怪尾刀机制','高品质增益奖励','全服公告','队伍详情查看']} />
        </div>
        <div className="bj-public-gallery">
          {[assets.public1,assets.public2,assets.public4,assets.public3,assets.public5].map((src,i)=><div className={`bj-shot p${i}`} key={src}><Img src={src}/></div>)}
          <svg className="bj-public-links" viewBox="0 0 1280 1840" fill="none" aria-hidden>
            <ArrowHead id="bjArrowPublic" />
            <path d="M640 1138V1043H686" stroke="#00a0e9" strokeWidth="1" markerStart="url(#bjArrowPublic)" />
            <path d="M640 1345V1250H725" stroke="#00a0e9" strokeWidth="1" markerStart="url(#bjArrowPublic)" />
          </svg>
        </div>
        <div className="bj-callout public-team blue"><p>组队机制：进入组队界面弹出便捷组队窗口。支持单人进入副本(部分关卡)。关闭组队界面回到公共关卡详情界面，操作路径清晰。</p></div>
        <div className="bj-callout public-theory gold"><b>Social Facilitation & Meaningful Choices</b><p>社会助长效应——组队环境提升个体表现。三类事件提供差异化选择，每种选择对应不同策略，实现有意义的决策空间。</p></div>
      </section>

      <section className="bj-section bj-boss">
        <Header no="08" title="限时BOSS机制" desc="每日最终首领在指定时间出现" />
        <p className="bj-caption boss">限时BOSS战斗</p>
        <div className="bj-shot bj-boss-shot"><Img src={assets.boss} /></div>
        <div className="bj-boss-list">
          {[
            ['BOSS 1','首个限时BOSS，难度较低\n全服玩家可自由攻击','green'],
            ['BOSS 2','中等难度，需组队配合\n伤害排行实时更新','blue'],
            ['BOSS 3','最高难度终极BOSS\n尾刀奖励丰厚','red'],
          ].map(([t,b,tone])=><article className={tone} key={t}><Dot tone={tone as Tone}/><h3>{t}</h3><p>{b}</p></article>)}
        </div>
        <h3 className="bj-mini-title boss-core">核心机制</h3>
        <div className="bj-boss-mechs">{[['限时开启','固定时段刷新\n全服广播通知','gold'],['实时伤害排行','伤害贡献实时排名\n激励竞争参与','blue'],['尾刀奖励','最后一击额外奖励\n策略性保留技能','red'],['参与/排名奖励','参与即有奖励\n排名越高越丰厚','green']].map(([a,b,tone])=><SmallAnno key={a} title={a} body={b} tone={tone as Tone}/>)}</div>
        <h3 className="bj-mini-title boss-time">BOSS事件时间线</h3>
        <div className="bj-timeline">{['全服广播','玩家集结','战斗开始','伤害排行','BOSS击杀','奖励结算'].map((t,i)=><span key={t} className={`n${i}`}>{t}</span>)}</div>
        <div className="bj-callout boss-theory purple"><b>Social Facilitation</b><p>社会促进效应——他人在场时个体表现会受到影响。限时BOSS通过全服可见的伤害排行和尾刀奖励，激发玩家竞争意识与社交动力。实时排名创造被观察感，促使玩家发挥更高水平，参与奖励保证所有人的正向反馈。</p></div>
      </section>

      <section className="bj-section bj-conclusion">
        {/* data-qy-static: empty spans get classified as "lines" by the reveal pass, and
            qy-line-enter ends on filter: blur(0), which beats the 80px blur these rely on. */}
        <span className="bj-cc-glow g1" data-qy-static />
        <span className="bj-cc-glow g2" data-qy-static />
        <span className="bj-cc-glow g3" data-qy-static />

        <h2 className="bj-cc-title">让每一层玩法都有清晰的</h2>
        <h2 className="bj-cc-title gold">「来这里的理由」和「留下来的动力」</h2>
        <p className="bj-cc-sub">个人关卡靠数值成长，公共关卡靠社交归属，限时BOSS靠稀缺竞争 —— 三种动力交替接棒。</p>

        <svg className="bj-cc-lines" viewBox="0 0 1280 1000" width="1280" height="1000" aria-hidden>
          <line x1="640" y1="470" x2="200" y2="390" stroke="rgba(242,178,77,.25)" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="640" y1="470" x2="200" y2="550" stroke="rgba(102,191,128,.25)" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="640" y1="470" x2="1080" y2="390" stroke="rgba(89,140,229,.25)" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="640" y1="470" x2="1080" y2="550" stroke="rgba(166,102,217,.25)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="382" cy="427" r="2" fill="#f2b24d" fillOpacity=".5" /><circle cx="462" cy="440" r="2" fill="#f2b24d" fillOpacity=".5" />
          <circle cx="382" cy="517" r="2" fill="#66bf80" fillOpacity=".5" /><circle cx="462" cy="504" r="2" fill="#66bf80" fillOpacity=".5" />
          <circle cx="902" cy="427" r="2" fill="#598ce5" fillOpacity=".5" /><circle cx="822" cy="440" r="2" fill="#598ce5" fillOpacity=".5" />
          <circle cx="902" cy="517" r="2" fill="#a666d9" fillOpacity=".5" /><circle cx="822" cy="504" r="2" fill="#a666d9" fillOpacity=".5" />
        </svg>

        <div className="bj-cc-hub"><b>后台配置</b><em>CONFIG HUB</em></div>

        <article className="bj-cc-node gold" style={{ left: 100, top: 350 }}><i className="bj-dot gold" /><b>关卡配置</b><span>名称·战力·奖励·通关</span></article>
        <article className="bj-cc-node green" style={{ left: 100, top: 510 }}><i className="bj-dot green" /><b>BUFF配置</b><span>增益·数值·时长·上限</span></article>
        <article className="bj-cc-node blue" style={{ left: 980, top: 350 }}><i className="bj-dot blue" /><b>BOSS配置</b><span>属性·刷新·排名·尾刀</span></article>
        <article className="bj-cc-node purple" style={{ left: 980, top: 510 }}><i className="bj-dot purple" /><b>UI配置</b><span>红点·飘字·弹窗·计时</span></article>

        <article className="bj-cc-card gold" style={{ left: 100, top: 686 }}><em>01</em><i className="bj-dot gold" /><h3>三层递进架构</h3><p>三层由浅入深，自然过渡，每层都有独立的「来的理由」与「玩下去的钩子」。</p></article>
        <article className="bj-cc-card green" style={{ left: 470, top: 686 }}><em>02</em><i className="bj-dot green" /><h3>成长驱动留存</h3><p>BUFF增益贯穿全线：关卡产出→增益提升→战力解锁，正向闭环。</p></article>
        <article className="bj-cc-card blue" style={{ left: 840, top: 686 }}><em>03</em><i className="bj-dot blue" /><h3>配置驱动迭代</h3><p>关卡·BUFF·BOSS·UI 全部后台可配，运营无需等版本，快速验证。</p></article>

        <p className="bj-cc-summary">→&nbsp;&nbsp;从 0 到 1 搭建完整 PvE 系统，覆盖信息架构、交互流程、状态反馈全链路&nbsp;←</p>

      </section>
    </div>
  );
}
