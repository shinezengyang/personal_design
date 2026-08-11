import type { CSSProperties } from 'react';
import './SancaiExactCase.css';

/* Local copies of the Figma exports. These used to point at
   https://www.figma.com/api/mcp/asset/... URLs, which Figma expires after ~7 days —
   every image on this page had gone dead. Node ids noted for re-pulling.
   The orbit rings and节点 are plain stroked circles, kept as SVG so they stay crisp. */
const SC = '/images/qingyu/sancai';
const A = {
  heroOrbit1: `${SC}/hero-orbit1.svg`,   // Figma 9817:10741
  heroOrbit2: `${SC}/hero-orbit2.svg`,   // Figma 9817:10742
  heroOrbit3: `${SC}/hero-orbit3.svg`,   // Figma 9817:10743
  s2Orbit1: `${SC}/s2-orbit1.svg`,       // Figma 9817:10817
  s2Orbit2: `${SC}/s2-orbit2.svg`,       // Figma 9817:10818
  s2Center: `${SC}/s2-center.svg`,       // Figma 9817:10835 s2_center
  s2NodeGold: `${SC}/s2-node-gold.svg`,  // Figma 9817:10827 s2_node_日
  s2NodeGold2: `${SC}/s2-node-gold2.svg`,// Figma 9817:10829 s2_node_星
  s2NodeBlue: `${SC}/s2-node-blue.svg`,  // Figma 9817:10831 s2_node_月 (also used for 辰)
  main: `${SC}/main.webp`,                // Figma 9817:10856
  decompose: `${SC}/decompose.webp`,      // Figma 9817:10955 s6_decompose_img
  exchange: `${SC}/exchange.webp`,        // Figma 9817:10968 s6_exchange_img
  set: `${SC}/set.webp`,                  // Figma 9817:11060
  visual1: `${SC}/visual1-main-state1.webp`,      // Figma 9817:11152 三才主界面状态1
  visual2: `${SC}/visual2-main-state2.webp`,      // Figma 9817:11159 三才主界面状态2
  visual3: `${SC}/visual3-di.webp`,               // Figma 9817:11158 主界面_地才
  visual4: `${SC}/visual4-ren.webp`,              // Figma 9817:11157 主界面_人才
  visual5: `${SC}/visual5-shen.webp`,             // Figma 9817:11160 主界面_神才
  visual6: `${SC}/visual6-exchange-popup.webp`,   // Figma 9817:11153 兑换弹窗
  visual7: `${SC}/visual7-decompose-popup.webp`,  // Figma 9817:11154 分解弹窗
  visual8: `${SC}/visual8-attr-popup.webp`,       // Figma 9817:11155 属性弹窗
};

function Img({ src, className = '', alt = '' }: { src: string; className?: string; alt?: string }) {
  return <img src={src} className={className} alt={alt} loading="lazy" decoding="async" />;
}

function SectionHeader({ no, eyebrow, title, desc }: { no: string; eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="sc-header">
      <div className="sc-header-no">{no}</div>
      <p className="sc-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {desc ? <p className="sc-desc">{desc}</p> : null}
    </div>
  );
}

function PrincipleCard({ title, en, children }: { title: string; en: string; children: string }) {
  return (
    <article className="sc-principle-card">
      <i />
      <h3>{title}</h3>
      <em>{en}</em>
      <p>{children}</p>
    </article>
  );
}

/* Callout: text block + leader line + marker dot, each placed at its own Figma
   coordinate (section-relative). The line lengths run 35–349px in the board, so a
   single fixed-length rule can't stand in for them. */
function Annot({
  side, x, y, w, tone, title, text, line, dot, ring = false, marker = true,
}: {
  side: 'left' | 'right';
  x: number; y: number; w: number; tone?: string;
  title: string; text: string;
  line: [number, number, number];
  dot: [number, number];
  ring?: boolean;
  marker?: boolean;
}) {
  return (
    <>
      <div
        className={`sc-annot ${side}`}
        style={{ left: x, top: y, width: w, ...(tone ? ({ '--tone': tone } as CSSProperties) : null) }}
      >
        <b>{title}</b>
        <span>{text}</span>
      </div>
      <i className="sc-annline" style={{ left: line[0], top: line[1], width: line[2] }} />
      {marker ? <i className={`sc-anndot${ring ? ' ring' : ''}`} style={{ left: dot[0], top: dot[1] }} /> : null}
    </>
  );
}

const tiers = [
  ['Ⅰ', '良品', 'COMMON', 'green'],
  ['Ⅱ', '精品', 'FINE', 'blue'],
  ['Ⅲ', '优品', 'SUPERIOR', 'purple'],
  ['Ⅳ', '圣品', 'EPIC', 'gold'],
  ['Ⅴ', '神品', 'LEGENDARY', 'red'],
] as const;

const journey = [
  ['好奇', '踏入大世界，瞥见三才入口', 'j0'],
  ['探索', '解构 天地人 × 日月星辰', 'j1'],
  ['成就', '首次镶嵌，属性即时跃升', 'j2'],
  ['挑战', '遭遇品阶门槛，目标显现', 'j3'],
  ['经营', '分解兑换，闭环资源运作', 'j4'],
  ['精通', '集齐神品，属性登顶巅峰', 'j5'],
] as const;

export function SancaiExactCase() {
  return (
    <div className="sancai-case" data-node-id="8606:2028">
      <section className="sc-section sc-hero">
        <div className="sc-hero-bg" />
        <Img src={A.heroOrbit1} className="sc-hero-orbit orbit1" />
        <Img src={A.heroOrbit2} className="sc-hero-orbit orbit2" />
        <Img src={A.heroOrbit3} className="sc-hero-orbit orbit3" />
        <div className="sc-stars left"><span /><span /><span /><span /><span /></div>
        <div className="sc-stars right"><span /><span /><span /><span /></div>
        <div className="sc-stars bottom"><span /><span /><span /></div>
        <div className="sc-constellation left"><i /><i /><i /></div>
        <div className="sc-constellation right"><i /><i /></div>
        <p className="sc-hero-en">SANCAI · CELESTIAL GEAR SYSTEM</p>
        <h1>三才系统</h1>
        <div className="sc-title-rule" />
        <h3>天 · 地 · 人&nbsp;&nbsp; × &nbsp;&nbsp;日 · 月 · 星 · 辰</h3>
        <p className="sc-hero-copy">以中华「三才」宇宙观为内核的装备养成系统：将天地人三象与日月星辰四曜融入装配、兑换、分解的资源闭环，构建一套既有文化质感、又自循环驱动的养成体验。</p>
      </section>

      <section className="sc-section sc-overview">
        <SectionHeader no="01" eyebrow="SYSTEM OVERVIEW" title="系统概述" />
        <p className="sc-overview-lead">三才系统是一套以「天地人」宇宙观为骨架的装备养成玩法 —— 玩家收集日月星辰属性道具，镶嵌于三才天穹之中，通过装配、兑换、分解的资源闭环，逐步强化角色并集齐套装。</p>
        <div className="sc-overview-cards">
          <article><em>三</em><h3>文化内核</h3><b>CULTURAL CORE</b><p>以「天地人」三才与「日月星辰」四曜立意，将中华宇宙观转化为可交互的养成框架，赋予系统独特的东方质感与记忆点。</p></article>
          <article><em>环</em><h3>资源闭环</h3><b>CLOSED LOOP</b><p>分解产出碎片，碎片兑换道具，道具装配上身 —— 三态资源自循环，让每一件冗余装备都有去处，驱动持续投入。</p></article>
          <article><em>阶</em><h3>养成深度</h3><b>PROGRESSION</b><p>五品阶 × 多凹槽 × 套装激活，构建从单件强化到整套收集的长线目标，支撑玩家由浅入深的成长曲线。</p></article>
        </div>
      </section>

      <section className="sc-section sc-theme">
        <SectionHeader no="02" eyebrow="DESIGN THEME" title="设计主题 · 天地人与日月星辰" />
        <div className="sc-theme-copy">
          <p>「三才」取自《易经》——天、地、人为构成万物的三种力量；「日月星辰」为悬于天穹的四曜。系统将这套国人耳熟能详的宇宙观直接映射为玩法结构：</p>
          <p><b>· 天才 / 地才 / 人才</b> → 三类道具与套装</p>
          <p><b>· 日 / 月 / 星 / 辰</b> → 天穹之上的四个镶嵌凹槽</p>
          <p>玩家无需阅读说明，仅凭文化直觉便能理解「把星辰镶进天穹」这一核心动作。</p>
        </div>
        <div className="sc-orbit-panel">
          <Img src={A.s2Orbit1} className="sc-o-ring ring1" />
          <Img src={A.s2Orbit2} className="sc-o-ring ring2" />
          <div className="sc-o-diamond" />
          <div className="sc-o-spoke h" /><div className="sc-o-spoke v" />
          <div className="sc-o-node sun"><Img src={A.s2NodeGold} /><b>日</b></div>
          <div className="sc-o-node moon"><Img src={A.s2NodeBlue} /><b>月</b></div>
          <div className="sc-o-node star"><Img src={A.s2NodeGold2} /><b>星</b></div>
          <div className="sc-o-node chen"><Img src={A.s2NodeBlue} /><b>辰</b></div>
          <div className="sc-o-center"><Img src={A.s2Center} /><b>三才</b></div>
          <p>天穹镶嵌结构 · 概念示意</p>
        </div>
        <h3 className="sc-shot-title">参考天穹镶嵌结构设计</h3>
        <div className="sc-main-shot-wrap">
          <Img src={A.main} className="sc-main-shot" alt="三才主界面" />
        </div>
        <Annot side="left" x={0} y={822} w={180} title="三才页签" text="天·地·人 三类切换" line={[181, 847, 62]} dot={[242, 841]} ring marker={false} />
        <Annot side="left" x={0} y={960} w={180} title="天穹 · 日月星辰四曜" text="四曜即四个镶嵌凹槽" line={[180, 971, 349]} dot={[528, 964]} ring marker={false} />
        <Annot side="left" x={0} y={1057} w={180} title="已镶嵌道具" text="凹槽亮起对应品阶色" line={[180, 1068, 198]} dot={[377, 1061]} ring marker={false} />
        <Annot side="left" x={0} y={1197} w={180} tone="#8cd9e0" title="选中凹槽" text="蓝环高亮当前操作位" line={[178, 1208, 334]} dot={[511, 1201]} ring marker={false} />
        <Annot side="right" x={1100} y={897} w={190} title="道具详情" text="名称·品阶·属性一览" line={[1065, 909, 35]} dot={[1052, 903]} ring marker={false} />
        <Annot side="right" x={1100} y={1074} w={190} title="智能背包" text="仅列该凹槽可装配道具" line={[1021, 1085, 79]} dot={[1008, 1078]} ring marker={false} />
        <Annot side="right" x={1100} y={1241} w={190} tone="#8cd9e0" title="情境化按钮" text={'装配·卸下·替换 \n随态变化'} line={[1056, 1252, 44]} dot={[1043, 1246]} ring marker={false} />
        <p className="sc-shot-caption">▲ 三才界面</p>
        <div className="sc-principles three">
          <PrincipleCard title="交互原则 · 匹配心智模型" en="MATCH BETWEEN SYSTEM & THE REAL WORLD">借用真实世界已有的概念模型，系统语言贴合用户既有认知，学习成本趋近于零。</PrincipleCard>
          <PrincipleCard title="交互原则 · 情境化操作" en="CONTEXTUAL ACTION">同一按钮依凹槽状态自动切换「装配/卸下/替换」，操作选项永远匹配当前情境。</PrincipleCard>
          <PrincipleCard title="交互原则 · 识别优于回忆" en="RECOGNITION OVER RECALL">背包只显示当前凹槽「装得上」的道具，玩家无需记忆复杂规则，看见即可选。</PrincipleCard>
        </div>
      </section>

      <section className="sc-section sc-loop">
        <SectionHeader no="03" eyebrow="CORE ECONOMY LOOP" title="核心闭环 · 装配·兑换·分解" desc="三大子系统首尾相接，构成一个无废料的资源循环" />
        <div className="sc-loop-diagram">
          <article className="assemble"><em>装</em><h3>装配</h3><b>ASSEMBLE</b><p>将道具镶入凹槽，强化角色属性</p></article>
          <article className="decompose"><em>分</em><h3>分解</h3><b>DECOMPOSE</b><p>拆解冗余道具，回收为碎片</p></article>
          <article className="exchange"><em>兑</em><h3>兑换</h3><b>EXCHANGE</b><p>消耗碎片，换取目标道具</p></article>
          <div className="hub">资源<br />自循环</div>
          <i className="edge e1" /><i className="edge e2" /><i className="edge e3" />
          <span className="loop-arrow la0">↙</span><span className="loop-arrow la1">→</span><span className="loop-arrow la2">↖</span>
          <span className="loop-label l1">冗余道具</span><span className="loop-label l2">三才碎片</span><span className="loop-label l3">新道具</span>
        </div>
        <div className="sc-step-heading top"><em>1</em><span>分解 · 回收冗余装备，产出通用碎片</span></div>
        <div className="sc-interface decomp"><Img src={A.decompose} alt="三才分解界面" /></div>
        <Annot side="left" x={16} y={988} w={180} title="全色阶背包" text="五色阶一览 · 批量多选" line={[202.3, 1012, 85.3]} dot={[284, 1009]} />
        <Annot side="left" x={16} y={1266} w={180} title="三才 × 品级" text="双维度组合筛选" line={[202.4, 1298, 220.2]} dot={[419, 1295]} />
        <Annot side="right" x={1124} y={1260} w={190} title="分解后获得" text="碎片产出实时预览" line={[1006.7, 1280, 112.5]} dot={[1004, 1277]} />
        <p className="sc-caption decomp">▲ 三才分解界面 · 全色阶背包批量回收</p>
        <div className="sc-token"><em>碎</em><div><b>碎片 · 系统通用结算货币</b><span>FRAGMENT · THE UNIVERSAL CURRENCY</span></div><i className="topline" /><i className="botline" /></div>
        <span className="sc-token-flow in">分解 产出 ↓</span>
        <span className="sc-token-flow out">↓ 兑换 消耗</span>
        <div className="sc-step-heading bottom"><em>2</em><span>兑换 · 定向消耗碎片，获取目标装备</span></div>
        <div className="sc-interface exch"><Img src={A.exchange} alt="三才兑换界面" /></div>
        <Annot side="left" x={16} y={1722} w={180} title="标签页筛选" text="天 / 地 / 人 分类" line={[202.6, 1745, 123.8]} dot={[323, 1742]} />
        <Annot side="left" x={16} y={1904} w={180} tone="#73d98c" title="拥有 / 需求" text="双数值标注成本" line={[203, 1916, 163]} dot={[363, 1913]} />
        <Annot side="right" x={1124} y={1722} w={190} title="全品阶下拉" text="按品阶快速定位" line={[993.6, 1745, 125.8]} dot={[991, 1742]} />
        <Annot side="right" x={1124} y={1904} w={190} tone="#f26b6b" title="绿足红缺" text="颜色即兑换决策" line={[970, 1916, 149]} dot={[967, 1913]} />
        <p className="sc-caption exch">▲ 三才兑换界面 · 定向兑换目标道具</p>
        <div className="sc-principles loopp">
          <PrincipleCard title="交互原则 · 闭环反馈与心流维系" en="CLOSED-LOOP FEEDBACK">每完成一环都立即获得「可继续行动」的反馈，玩家的目标永不落空。</PrincipleCard>
          <PrincipleCard title="交互原则 · 即时反馈" en="IMMEDIATE FEEDBACK">分解后获得的碎片数实时结算，兑换成本随拥有量动态转换。</PrincipleCard>
          <PrincipleCard title="交互原则 · 防错设计" en="ERROR PREVENTION">碎片不足时成本即转红预警，从源头阻断无效点击。</PrincipleCard>
        </div>
      </section>

      <section className="sc-section sc-tier">
        <SectionHeader no="04" eyebrow="QUALITY TIERS" title="品阶系统 · 五色识阶" desc="三才道具分为五个品阶，以一套固定色阶贯穿全系统 —— 从背包、兑换到分解，同一颜色始终代表同一稀有度。" />
        <div className="sc-tier-bars">
          {tiers.map(([roman, name, en, color], i) => <article key={name} className={`tier-${color}`} style={{ '--h': `${100 + i * 35}px` } as CSSProperties}><i /><em>{roman}</em><h3>{name}</h3><b>{en}</b></article>)}
        </div>
        <div className="sc-set-shot"><Img src={A.set} alt="套装属性总览" /></div>
        <p className="sc-set-caption">▲ 套装属性总览界面 — 同一色阶在全系统保持一致</p>
        <div className="sc-tier-copy"><h3>交互原则 · 预注意处理</h3><b>PRE-ATTENTIVE PROCESSING</b><p>颜色是人眼在「聚焦注意」之前就能并行处理的视觉通道。用色阶编码稀有度，玩家无需逐字阅读，扫一眼即可在上百件道具中锁定高价值目标，大幅降低决策负荷。</p><div><strong>行业参照</strong><p>「稀有度色阶」是 RPG 的通用语言 —— 暗黑破坏神、魔兽世界皆以白绿蓝紫橙区分品质。沿用这一行业惯例，老玩家零学习成本，新玩家也能在跨游戏经验中快速建立认知。</p><span /><span /><span /><span /><span /></div></div>
      </section>

      <section className="sc-section sc-journey">
        <SectionHeader no="07" eyebrow="THE FLOW JOURNEY" title="心流历程 · 从好奇到精通" desc="沿游戏进程铺展的情绪曲线 —— 挑战与技能同步攀升，玩家始终行进在心流通道之中。" />
        <div className="sc-flow-panel">
          <div className="flow-channel" />
          <i className="axis y" /><i className="axis x" />
          <svg className="flow-curve" viewBox="0 0 760 252" preserveAspectRatio="none"><path d="M0,235 C120,210 140,170 190,180 C260,190 270,100 320,110 C390,120 410,185 470,150 C550,105 570,90 620,62 C680,28 720,15 760,0" /></svg>
          {journey.map(([title, text, cls], i) => <div className={`flow-point ${cls}`} key={title}><i /><b>{title}</b><span>{text}</span></div>)}
          <p className="flow-label anx">焦虑区 · 挑战 &gt; 技能</p>
          <p className="flow-label bore">无聊区 · 挑战 &lt; 技能</p>
          <p className="flow-label channel">心流通道 FLOW CHANNEL</p>
          <p className="flow-label ytext">↑ 投入 / 情绪强度</p>
          <p className="flow-label xtext">游戏进程 →</p>
        </div>
        <div className="sc-flow-note"><h3>交互原则 · 心流理论</h3><b>FLOW THEORY · CHALLENGE–SKILL BALANCE</b><p>三才系统让「挑战」与「技能」同步攀升 —— 每解锁一层品阶难度，玩家恰好也积累起应对的碎片资源与系统认知，使体验稳定落在心流通道。</p></div>
      </section>

      <section className="sc-section sc-final">
        <div className="final-orbits" />
        <p className="final-eyebrow">结语 · IN CLOSING</p>
        <h2>把复杂的养成系统<br />收束成一眼就懂的宇宙</h2>
        <p className="final-copy">三才系统 —— 以天地人的秩序，让每一次镶嵌都成为可理解、可预期、可回味的体验。</p>
        <div className="final-metrics"><article><b>3</b><span>三才维度</span></article><article><b>4</b><span>日月星辰镶位</span></article><article><b>5</b><span>色彩品阶</span></article><article><b>1</b><span>自循环经济</span></article></div>
        <h3>视觉稿展示</h3>
        <div className="sc-gallery">
          {[A.visual1, A.visual3, A.visual4, A.visual5, A.visual2, A.visual6, A.visual7, A.visual8].map((src, i) => <Img key={src} src={src} className={`g${i}`} alt="三才系统视觉稿" />)}
        </div>
      </section>
    </div>
  );
}
