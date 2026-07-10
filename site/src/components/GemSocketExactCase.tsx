import './GemSocketExactCase.css';

/* ===== Image assets (game screenshots) ===== */
const A = {
  s02:  'https://www.figma.com/api/mcp/asset/cad01c89-3875-4360-96cb-c5159029e666',
  s05:  'https://www.figma.com/api/mcp/asset/5c55badc-e1d7-4424-a7fc-2eadc0974a78',
  s06:  'https://www.figma.com/api/mcp/asset/35f752ed-c7b9-4827-809c-222edd8c1eaa',
  s08op1: 'https://www.figma.com/api/mcp/asset/a5d0f9d7-8dab-4132-b21b-ff1e5e0394eb',
  s08op2: 'https://www.figma.com/api/mcp/asset/b63f97cf-fc7d-4e0f-884b-13dd8532887e',
  s08op3: 'https://www.figma.com/api/mcp/asset/fdf22273-a743-4585-8f41-ac252d8201fe',
  s10:  'https://www.figma.com/api/mcp/asset/1313b2f9-a3a5-4730-b519-cd597c0c447b',
  s15a: 'https://www.figma.com/api/mcp/asset/e8f8aaea-49c9-465d-bbb6-ee1356b588d5',
  s15b: 'https://www.figma.com/api/mcp/asset/43103d2f-5566-4b6b-b679-b8ff36b6ba79',
};

const px = (n: number) => `${n}px`;

/* hexagon SVG (pointy-top, matches Figma -90deg rotated polygon) */
function Hex({ size, fill, stroke }: { size: number; fill: string; stroke?: string }) {
  const pts = '50,2 95,26 95,74 50,98 5,74 5,26';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon points={pts} fill={fill} stroke={stroke || 'none'} strokeWidth={stroke ? 4 : 0} />
    </svg>
  );
}

/* ===== Section Header ===== */
function Header({
  zh, en, accentTop, titleTop, subTop, rightSub, rightSubTop = 94, rightSubSize = 16,
}: {
  zh: string; en: string; accentTop: number; titleTop: number; subTop: number;
  rightSub?: string; rightSubTop?: number; rightSubSize?: number;
}) {
  return (
    <>
      <div className="gs-accent" style={{ top: px(accentTop) }} />
      <h2 className="gs-title" style={{ top: px(titleTop) }}>{zh}</h2>
      <p className="gs-sub" style={{ top: px(subTop) }}>{en}</p>
      {rightSub && (
        <p className="gs-rightsub" style={{ left: px(1200), top: px(rightSubTop), fontSize: px(rightSubSize), lineHeight: rightSubSize === 18 ? '26px' : '24px' }}>
          {rightSub}
        </p>
      )}
    </>
  );
}

/* =================== S01 Cover =================== */
function S01() {
  const rings = [
    { x: 900, y: 120, d: 560 },
    { x: 990, y: 210, d: 380 },
  ];
  const dots = [
    [1172, 112], [929.5, 252], [929.5, 532], [1172, 672], [1414.5, 532], [1414.5, 252],
  ];
  const pills = [
    { t: '精简路径', x: 381 }, { t: '即时反馈', x: 495 }, { t: '智能引导', x: 609 },
    { t: '路径连续', x: 723 }, { t: '配置驱动', x: 837 },
  ];
  return (
    <div className="gs-sec gs-cover" style={{ height: px(800) }}>
      {rings.map((r, i) => (
        <div key={i} className="gs-cover-ring" style={{ left: px(r.x), top: px(r.y), width: px(r.d), height: px(r.d) }} />
      ))}
      {dots.map(([x, y], i) => (
        <div key={`d${i}`} className="gs-cover-soliddot" style={{ left: px(x), top: px(y) }} />
      ))}
      <div className="gs-cover-bar" />
      <div className="gs-cover-overline gs-en">INTERACTION DESIGN CASE</div>
      <div className="gs-cover-uxring" />
      <div className="gs-cover-ux gs-en">UX</div>
      <h1 className="gs-cover-t1">宝石镶嵌系统</h1>
      <h1 className="gs-cover-t2">体验优化设计</h1>
      {pills.map((p) => (
        <div key={p.t} className="gs-cover-pill" style={{ left: px(p.x) }}>{p.t}</div>
      ))}
      <div className="gs-cover-divider" />
      <div className="gs-cover-foot gs-en" style={{ left: px(80) }}>REDESIGN · GEM SOCKET</div>
      <div className="gs-cover-foot gs-en" style={{ left: px(1010) }}>UX CASE</div>
    </div>
  );
}

/* =================== S02 Project Background =================== */
function S02() {
  const rows = [
    { y: 360, dy: 367, sy: 362, label: '入口层级', val: '装备界面 › 镶嵌页签' },
    { y: 414, dy: 421, sy: 416, label: '操作核心', val: '环形排布的 6 个宝石凹槽' },
    { y: 468, dy: 475, sy: 470, label: '关联系统', val: '宝石合成 · 宝石背包 · 红点引导' },
  ];
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(600) }}>
      <Header zh="项目背景" en="PROJECT BACKGROUND" accentTop={78} titleTop={98} subTop={146} />
      <p className="gs-text" style={{ left: px(80), top: px(210), width: px(520), fontWeight: 400, fontSize: px(20), lineHeight: '30px', color: '#616b80' }}>
        宝石镶嵌是《庆余年》手游装备养成的核心模块之一。玩家将宝石嵌入装备凹槽以获取属性加成，与强化、天脉、洗炼等系统共同构成完整的装备成长链路。
      </p>
      {rows.map((r) => (
        <div key={r.label}>
          <div className="gs-cap-dot" style={{ left: px(84), top: px(r.dy), background: '#4f80f5' }} />
          <div className="gs-info-label" style={{ left: px(108), top: px(r.y) }}>{r.label}</div>
          <div className="gs-info-sep" style={{ left: px(198), top: px(r.sy) }} />
          <div className="gs-info-val" style={{ left: px(222), top: px(r.y) }}>{r.val}</div>
        </div>
      ))}
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(660), top: px(204), width: px(540), height: px(304) }}>
        <img src={A.s02} alt="镶嵌养成界面（旧版）" loading="lazy" decoding="async" />
      </div>
      <div className="gs-cap-dot" style={{ left: px(660), top: px(532), background: '#f56b2e' }} />
      <div className="gs-cap" style={{ left: px(676), top: px(526) }}>镶嵌养成界面（旧版）</div>
    </div>
  );
}

/* =================== S03 Problem Definition =================== */
function S03() {
  const cards = [
    {
      x: 80, num: '01', icon: '⚙', iconTone: '', quote: '“入口杂、按钮多”', tag: '操作路径冗长', tagTone: 'blue',
      desc: '原界面并列陈列「宝石增幅」「镶嵌共鸣」等多个次要按钮，主操作被稀释，玩家难以快速聚焦到镶嵌本身。',
      pill: '决策成本高', pillTone: 'blue',
    },
    {
      x: 460, num: '02', icon: '?', iconTone: 'orange', quote: '“不知道点哪里”', tag: '可操作状态不清', tagTone: 'orange',
      desc: '凹槽是否可镶嵌、哪颗宝石更优，缺乏统一的视觉信号，玩家需要逐一点开试探，依赖记忆与猜测。',
      pill: '认知负担重', pillTone: 'orange',
    },
    {
      x: 840, num: '03', icon: '🔍', iconTone: '', quote: '“宝石找不到”', tag: '查找与合成割裂', tagTone: 'blue',
      desc: '背包宝石排列无序，合成入口层级深，养成动作被频繁打断，难以形成连贯的操作节奏。',
      pill: '链路被打断', pillTone: 'blue',
    },
  ];
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(760) }}>
      <Header zh="问题定位" en="PROBLEM DEFINITION" accentTop={78} titleTop={98} subTop={146}
        rightSub="旧版镶嵌系统在「路径、认知、链路」三个维度积累了体验阻力。" rightSubTop={104} />
      {cards.map((c) => (
        <div key={c.num} className="gs-card" style={{ left: px(c.x), top: px(210), width: px(360), height: px(460) }}>
          <div className="gs-pcard-num gs-en">{c.num}</div>
          <div className={`gs-pc-icon ${c.iconTone}`}>{c.icon}</div>
          <div className="gs-pc-quote">{c.quote}</div>
          <div className={`gs-pc-tag ${c.tagTone}`}>{c.tag}</div>
          <div className="gs-pc-div" />
          <div className="gs-pc-desc">{c.desc}</div>
          <div className={`gs-pc-pill ${c.pillTone}`}><span className="pd" />{c.pill}</div>
        </div>
      ))}
    </div>
  );
}

/* =================== S04 Design Goals =================== */
function S04() {
  const goals = [
    { x: 80, top: '#f56b2e', wide: false, n: '1', numBg: '#4f80f5', eng: 'STREAMLINE', engColor: '#4f80f5', zh: '精简路径', body: '收敛冗余入口与次要按钮，让界面回归「镶嵌」这一核心动作。' },
    { x: 460, top: '#f56b2e', wide: true, n: '2', numBg: '#f56b2e', eng: 'FEEDBACK', engColor: '#f56b2e', zh: '即时反馈', body: '镶嵌、卸下、合成每一步都伴随 Toast 与状态变化，结果可见。' },
    { x: 840, top: '#4f80f5', wide: true, n: '3', numBg: '#4f80f5', eng: 'GUIDANCE', engColor: '#4f80f5', zh: '智能引导', body: '红点提示可操作项，背包按等级智能排序，主动为玩家指路。' },
  ];
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(700) }}>
      <Header zh="设计目标" en="DESIGN GOALS" accentTop={68} titleTop={88} subTop={136}
        rightSub="将三类体验阻力，转化为三条清晰的设计主线。" rightSubTop={94} />
      {goals.map((g) => (
        <div key={g.n} className="gs-card" style={{ left: px(g.x), top: px(210), width: px(360), height: px(365) }}>
          <div className="gs-goal-top" style={{ background: g.top }} />
          <div className="gs-goal-num" style={{ background: g.numBg }}>{g.n}</div>
          <div className="gs-goal-eng" style={{ color: g.engColor }}>{g.eng}</div>
          <div className="gs-goal-title">{g.zh}</div>
          <div className="gs-goal-body">{g.body}</div>
          <div className="gs-goal-track" />
          <div className="gs-goal-fill" />
        </div>
      ))}
      <div className="gs-goal-arrow" style={{ left: px(435), top: px(376), color: '#4f80f5' }}>›</div>
      <div className="gs-goal-arrow" style={{ left: px(815), top: px(375), color: '#f56b2e' }}>›</div>
    </div>
  );
}

/* =================== S05 Core Flow =================== */
function S05() {
  // circle centers (Figma ellipse x + 28)
  const steps = [
    { cx: 173.33, n: '1', t: '进入装备', s: '大世界 › 装备', orange: false },
    { cx: 360, n: '2', t: '切换镶嵌', s: '选择镶嵌页签', orange: false },
    { cx: 546.67, n: '3', t: '选择凹槽', s: '点亮目标凹槽', orange: false },
    { cx: 733.33, n: '4', t: '挑选宝石', s: '背包智能排序', orange: false },
    { cx: 920, n: '5', t: '确认镶嵌', s: 'Toast 即时反馈', orange: true },
    { cx: 1106.67, n: '6', t: '合成进阶', s: '红点引导升级', orange: false },
  ];
  const chevs = [266.67, 453.33, 640, 826.67, 1013.33];
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(800) }}>
      <Header zh="核心流程总览" en="CORE FLOW" accentTop={68} titleTop={88} subTop={136}
        rightSub="从大世界到一颗宝石嵌入生效，全链路梳理为四个关键动作。" rightSubTop={94} />
      <div className="gs-flow-line" style={{ left: px(173.33), top: px(237), width: px(933.33) }} />
      {steps.map((st) => (
        <div key={st.n}>
          <div className={`gs-flow-circle ${st.orange ? 'orange' : ''}`} style={{ left: px(st.cx - 28), top: px(210) }}>{st.n}</div>
          <div className="gs-flow-t" style={{ left: px(st.cx), top: px(284) }}>{st.t}</div>
          <div className="gs-flow-s" style={{ left: px(st.cx), top: px(312) }}>{st.s}</div>
        </div>
      ))}
      {chevs.map((cx, i) => (
        <div key={`c${i}`} className="gs-flow-chev" style={{ left: px(cx), top: px(222) }}>›</div>
      ))}
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(80), top: px(400), width: px(560), height: px(315), borderRadius: px(14) }}>
        <img src={A.s05} alt="大世界主界面" loading="lazy" decoding="async" />
      </div>
      <div className="gs-cap-dot" style={{ left: px(80), top: px(735), background: '#f56b2e' }} />
      <div className="gs-cap" style={{ left: px(104), top: px(731) }}>大世界主界面 — 养成行为的统一入口</div>

      <div className="gs-stat-card">
        <div className="lbl">核心操作步骤</div>
        <div className="big n7 gs-en">7</div>
        <div className="bu" style={{ left: px(82), top: px(119) }}>步</div>
        <div className="arrow gs-en">→</div>
        <div className="big n4 gs-en">4</div>
        <div className="bu" style={{ left: px(460), top: px(119) }}>步</div>
        <div className="note">剔除冗余动作，镶嵌主操作缩短约 43%。</div>
      </div>
      <p className="gs-text" style={{ left: px(680), top: px(628), width: px(520), fontWeight: 400, fontSize: px(16), lineHeight: '26px', color: '#616b80' }}>
        流程以「装备 › 镶嵌」为主轴，合成作为可选支线即时回流，避免玩家在多个界面间反复跳转。
      </p>
    </div>
  );
}

/* =================== S06 Socket Interface =================== */
function S06() {
  const annos = [
    { y: 220, ty: 219, sy: 244, n: '1', t: '装备列表', s: '竖向罗列可镶嵌装备，槽位状态一览', orange: false },
    { y: 292, ty: 291, sy: 316, n: '2', t: '环形凹槽布局', s: '六凹槽环绕装备，呼应格式塔接近律', orange: false },
    { y: 364, ty: 363, sy: 388, n: '3', t: '解锁等级标识', s: '未解锁凹槽直接标注所需装备等级', orange: false },
    { y: 436, ty: 435, sy: 460, n: '4', t: '已镶嵌宝石', s: '显示宝石名称与等级，状态清晰可读', orange: false },
    { y: 508, ty: 507, sy: 532, n: '5', t: '宝石合成入口（新增）', s: '红点提示可合成，一键直达', orange: true },
    { y: 580, ty: 579, sy: 604, n: '6', t: '宝石背包（新增）', s: '按等级智能排序，常用宝石触手可及', orange: true },
  ];
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(1000) }}>
      <Header zh="镶嵌界面设计" en="SOCKET INTERFACE" accentTop={68} titleTop={88} subTop={136}
        rightSub="以装备为中心、凹槽环形排布的一体化界面，让「看清状态」与「直接操作」在同一视野内完成。"
        rightSubTop={94} rightSubSize={18} />
      <div className="gs-img-frame gs-shadow-lg" style={{ left: px(80), top: px(220), width: px(760), height: px(428) }}>
        <img src={A.s06} alt="镶嵌界面设计" loading="lazy" decoding="async" />
      </div>
      {annos.map((a) => (
        <div key={a.n}>
          <div className={`gs-anno-num ${a.orange ? 'orange' : ''}`} style={{ left: px(890), top: px(a.y) }}>{a.n}</div>
          <div className="gs-anno-t" style={{ top: px(a.ty) }}>{a.t}</div>
          <div className="gs-anno-s" style={{ top: px(a.sy) }}>{a.s}</div>
        </div>
      ))}
      {/* theory blue panel */}
      <div className="gs-theory-blue" style={{ left: px(80), top: px(721), width: px(1120), height: px(240) }}>
        <div className="bar" />
        <div className="eyebrow" style={{ left: px(40), top: px(32) }}>交互理论支撑</div>
        <div className="title" style={{ left: px(40), top: px(56), fontSize: px(28), whiteSpace: 'nowrap' }}>为什么「宝石背包常驻」？</div>
        <div className="desc" style={{ left: px(40), top: px(108), width: px(364), lineHeight: '26px' }}>
          旧版的镶嵌界面需要点开具体凹槽才能知道当前拥有的宝石量，操作偏繁琐，新版新增宝石背包常驻让玩家一眼看全，减少来回切换查看的步骤
        </div>
        <div className="gs-mini-card" style={{ left: px(540), top: px(36), width: px(270), height: px(168) }}>
          <div className="gs-mini-icon"><span className="d" /></div>
          <div className="gs-mini-t">格式塔 · 接近律</div>
          <div className="gs-mini-d">空间聚合的元素被感知为一组，凹槽与宝石背包形成强关联，降低视觉搜索成本。</div>
        </div>
        <div className="gs-mini-card" style={{ left: px(830), top: px(36), width: px(270), height: px(168) }}>
          <div className="gs-mini-icon"><span className="d" /></div>
          <div className="gs-mini-t">菲茨定律</div>
          <div className="gs-mini-d">矩阵分布在界面底部，与环形凹槽、拇指热区距离均衡，点击区域更大、更易命中。</div>
        </div>
      </div>
    </div>
  );
}

/* =================== S07 Simplification =================== */
function S07() {
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(760) }}>
      <Header zh="界面精简" en="SIMPLIFICATION" accentTop={68} titleTop={88} subTop={136}
        rightSub="砍掉与主操作竞争注意力的次要按钮，让玩家少做选择。" rightSubTop={94} />

      {/* Before */}
      <div className="gs-card" style={{ left: px(80), top: px(210), width: px(490), height: px(331), boxShadow: 'none' }}>
        <div className="gs-simp-h" style={{ left: px(27), top: px(25) }}>改版前 · 功能堆叠</div>
        <div className="gs-simp-sub" style={{ left: px(27), top: px(57) }}>四个并列按钮，主次不分</div>
        <div className="gs-simp-row" style={{ top: px(97) }}><span className="label">镶嵌</span></div>
        <div className="gs-simp-row remove" style={{ top: px(149) }}><span className="label">宝石增幅</span><span className="gs-simp-remove-badge">移除</span></div>
        <div className="gs-simp-row remove" style={{ top: px(201) }}><span className="label">镶嵌共鸣</span><span className="gs-simp-remove-badge">移除</span></div>
        <div className="gs-simp-row" style={{ top: px(253) }}><span className="label">宝石合成</span></div>
      </div>

      <div className="gs-en" style={{ position: 'absolute', left: px(620), top: px(360), transform: 'translateX(-50%)', fontWeight: 700, fontSize: px(51), color: '#4f80f5' }}>→</div>

      {/* After */}
      <div style={{ position: 'absolute', left: px(710), top: px(210), width: px(490), height: px(331), background: '#fff', border: '1.5px solid #4f80f5', borderRadius: px(16), boxShadow: '0 10px 28px rgba(79,128,245,0.16)', overflow: 'hidden' }}>
        <div className="gs-simp-h" style={{ left: px(26.5), top: px(24.5) }}>改版后 · 聚焦主线</div>
        <div className="gs-simp-sub" style={{ left: px(26.5), top: px(56.5) }}>一个核心 + 一个支线</div>
        <div className="gs-simp-after-core">
          <div className="t">镶嵌</div><div className="s">核心操作 · 默认聚焦</div><div className="dot" />
        </div>
        <div className="gs-simp-after-sub">
          <div className="t">宝石合成</div><div className="s">养成支线 · 红点按需唤起</div>
        </div>
        <div className="gs-simp-sub" style={{ left: px(50.5), top: px(289.5), whiteSpace: 'nowrap' }}>可见决策项</div>
        <div className="gs-en" style={{ position: 'absolute', left: px(150.5), top: px(278.5), transform: 'translateX(-50%)', fontWeight: 700, fontSize: px(35), color: '#616b80' }}>4</div>
        <div className="gs-en" style={{ position: 'absolute', left: px(283.5), top: px(285.5), transform: 'translateX(-50%)', fontWeight: 700, fontSize: px(23), color: '#4f80f5' }}>→</div>
        <div className="gs-en" style={{ position: 'absolute', left: px(416), top: px(275.5), transform: 'translateX(-50%)', fontWeight: 700, fontSize: px(39), color: '#4f80f5' }}>2</div>
      </div>

      {/* dark theory bar */}
      <div className="gs-theory-dark" style={{ left: px(80), top: px(576), width: px(1120), height: px(128) }}>
        <div className="bar" style={{ background: '#f56b2e' }} />
        <div className="eyebrow gs-en" style={{ left: px(40), top: px(28), color: '#f56b2e' }}>HICK'S LAW</div>
        <div className="title" style={{ left: px(40), top: px(52), fontSize: px(25) }}>希克定律</div>
        <div className="vsep" style={{ left: px(300), top: px(32), height: px(64) }} />
        <div className="desc" style={{ left: px(344), top: px(38), width: px(762) }}>
          选项越多，决策时间越长。移除「宝石增幅」「镶嵌共鸣」两个低频按钮后，界面只保留镶嵌主操作与合成支线——玩家的目光与手指都不再被分散。
        </div>
      </div>
    </div>
  );
}

/* =================== S08 Operation & Feedback =================== */
function S08() {
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(1300) }}>
      <Header zh="镶嵌操作与反馈" en="OPERATION & FEEDBACK" accentTop={68} titleTop={88} subTop={136}
        rightSub="每一次点击都给出明确的状态变化与 Toast 提示，让操作结果可被即时感知。"
        rightSubTop={94} rightSubSize={18} />

      {/* Operation loop card */}
      <div className="gs-loop">
        <div className="h">操作闭环</div>
        <div className="chip" style={{ left: px(16), width: px(104) }}>点击凹槽</div>
        <div className="chev" style={{ left: px(131) }}>›</div>
        <div className="chip" style={{ left: px(142), width: px(104) }}>选择宝石</div>
        <div className="chev" style={{ left: px(257) }}>›</div>
        <div className="chip" style={{ left: px(268), width: px(104) }}>镶嵌 / 卸下</div>
        <div className="chev" style={{ left: px(383) }}>›</div>
        <div className="chip orange" style={{ left: px(394), width: px(130) }}>弹出 Toast</div>
        <div className="toastlbl">通用 Toast 反馈</div>
        <div className="toast" style={{ left: px(16), top: px(168), width: px(240) }}><span className="ck">✓</span>镶嵌成功</div>
        <div className="toast" style={{ left: px(284), top: px(169), width: px(240) }}><span className="ck">✓</span>已卸下宝石</div>
        <div className="vsep" />
      </div>

      {/* Op 01 — 卸下 (right top) */}
      <div className="gs-op-badge" style={{ left: px(660), top: px(188), background: '#4f80f5' }}>01</div>
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(660), top: px(229), width: px(540), height: px(304) }}>
        <img src={A.s08op1} alt="卸下宝石" loading="lazy" decoding="async" />
      </div>
      <div className="gs-op-dot" style={{ left: px(660), top: px(553), background: '#4f80f5' }} />
      <div className="gs-op-desc" style={{ left: px(678), top: px(549), width: px(525) }}>
        选中有宝石凹槽 → 凹槽高亮 → 显示「卸下」弹窗 → 确认卸下 → 宝石消失 回到背包处、状态更新
      </div>

      {/* Op 02 — 镶嵌 (left bottom) */}
      <div className="gs-op-badge" style={{ left: px(80), top: px(625), background: '#3eb479' }}>02</div>
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(80), top: px(666), width: px(540), height: px(304) }}>
        <img src={A.s08op2} alt="镶嵌宝石" loading="lazy" decoding="async" />
      </div>
      <div className="gs-op-dot" style={{ left: px(80), top: px(990), background: '#3eb479' }} />
      <div className="gs-op-desc" style={{ left: px(98), top: px(986), width: px(461) }}>
        选中空凹槽 → 凹槽高亮 → 挑选宝石 → 显示「镶嵌」弹窗 → 确认 镶嵌 → 宝石就位、状态更新
      </div>

      {/* Op 03 — 替换 (right bottom) */}
      <div className="gs-op-badge" style={{ left: px(660), top: px(625), background: '#f56b2e' }}>03</div>
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(660), top: px(666), width: px(540), height: px(304) }}>
        <img src={A.s08op3} alt="替换宝石" loading="lazy" decoding="async" />
      </div>
      <div className="gs-op-dot" style={{ left: px(660), top: px(990), background: '#f56b2e' }} />
      <div className="gs-op-desc" style={{ left: px(678), top: px(986), width: px(493) }}>
        选中有宝石凹槽 → 凹槽高亮 → 挑选宝石→ 显示「替换」弹窗 → 确认 镶嵌 → 宝石就位、状态更新
      </div>

      {/* dark theory bar */}
      <div className="gs-theory-dark" style={{ left: px(83), top: px(1100), width: px(1120), height: px(120) }}>
        <div className="bar" style={{ background: '#f56b2e' }} />
        <div className="eyebrow gs-en" style={{ left: px(40), top: px(26), color: '#f56b2e' }}>VISIBILITY OF STATUS</div>
        <div className="title" style={{ left: px(40), top: px(48), fontSize: px(25) }}>即时反馈原则</div>
        <div className="vsep" style={{ left: px(360), top: px(28), height: px(64), background: '#e4e8f1' }} />
        <div className="desc" style={{ left: px(452), top: px(35), width: px(654), lineHeight: '25px' }}>
          系统应在合理时间内，就用户的每个操作给出反馈。镶嵌、卸下后立即高亮状态并弹出 Toast，玩家无需猜测「成功了没有」——确定感来自可见的结果。
        </div>
      </div>
    </div>
  );
}

/* =================== S09 Backpack & Sort =================== */
function S09() {
  const gems = [
    { x: 32, lv: 'Lv7', lvBg: '#fac74d', qty: 'x14' },
    { x: 172, lv: 'Lv6', lvBg: '#a666d9', qty: 'x12' },
    { x: 312, lv: 'Lv5', lvBg: '#598cf2', qty: 'x10' },
    { x: 452, lv: 'Lv4', lvBg: '#33b2b2', qty: 'x8' },
    { x: 592, lv: 'Lv3', lvBg: '#4dbf80', qty: 'x6' },
    { x: 732, lv: 'Lv2', lvBg: '#66b8e5', qty: 'x4' },
    { x: 872, lv: 'Lv1', lvBg: '#9ea8bd', qty: 'x2' },
  ];
  const rules = [
    { y: 75, ty: 69, t: '等级降序：高等级宝石优先展示' },
    { y: 119, ty: 113, t: '同级聚合：相同宝石合并显示数量' },
    { y: 163, ty: 157, t: '即取即用：常用宝石稳定在最前段' },
  ];
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(680) }}>
      <Header zh="宝石背包与智能排序" en="BACKPACK & SMART SORT" accentTop={68} titleTop={88} subTop={136}
        rightSub="可左右滑动，高等级宝石永远排在最前。" rightSubTop={94} />
      <div className="gs-bp">
        <div className="h">宝石背包</div>
        <div className="hi">等级高</div>
        <div className="line" />
        <div className="lo">等级低</div>
        {gems.map((g) => (
          <div key={g.lv} className="gs-gem" style={{ left: px(g.x) }}>
            <div className="hex"><Hex size={46} fill={g.lvBg} /></div>
            <div className="center-dot" />
            <div className="lv" style={{ background: g.lvBg }}>{g.lv}</div>
            <div className="qty gs-en">{g.qty}</div>
          </div>
        ))}
        <div className="gs-gem empty" style={{ left: px(1012) }} />
      </div>
      <div className="gs-rule-card">
        <div className="h">排序规则</div>
        {rules.map((r) => (
          <div key={r.ty}>
            <div className="ri" style={{ top: px(r.y) }} />
            <div className="rt" style={{ top: px(r.ty) }}>{r.t}</div>
          </div>
        ))}
      </div>
      <div className="gs-theory-blue" style={{ left: px(660), top: px(442), width: px(540), height: px(200) }}>
        <div className="bar" />
        <div className="eyebrow gs-en" style={{ left: px(36), top: px(30) }}>RECOGNITION OVER RECALL</div>
        <div className="title" style={{ left: px(36), top: px(54), fontSize: px(25) }}>识别优于回忆</div>
        <div className="desc" style={{ left: px(36), top: px(100), width: px(470), lineHeight: '25px' }}>
          让选项可见，而非依赖记忆。宝石以图标与等级直观呈现并智能排序，玩家「一眼认出」目标，而不必回想它藏在背包第几格。
        </div>
      </div>
    </div>
  );
}

/* =================== S10 Synthesis Path =================== */
function S10() {
  const tags = [
    { x: 680, t: '所需材料可视' },
    { x: 858, t: '成功概率明确' },
    { x: 1036, t: '合成数量可调' },
  ];
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(800) }}>
      <Header zh="宝石合成路径" en="SYNTHESIS PATH" accentTop={68} titleTop={88} subTop={136} />
      <div className="gs-img-frame gs-shadow-md" style={{ left: px(80), top: px(200), width: px(560), height: px(340) }}>
        <img src={A.s10} alt="合成界面" loading="lazy" decoding="async" />
      </div>
      <div className="gs-cap-dot" style={{ left: px(80), top: px(560), background: '#4f80f5' }} />
      <div className="gs-cap" style={{ left: px(98), top: px(556) }}>合成界面 — 按等级罗列，材料 / 概率 / 数量一目了然</div>

      <div className="gs-syn-h">从镶嵌到合成，无缝衔接</div>
      <div className="gs-syn-box white" style={{ left: px(680), top: px(250) }}>
        <div className="t">镶嵌界面</div><div className="s">点击「宝石合成」</div><div className="reddot" />
      </div>
      <div className="gs-syn-chev">›</div>
      <div className="gs-syn-box blue" style={{ left: px(970), top: px(250) }}>
        <div className="t">合成界面</div><div className="s">自动定位目标宝石</div>
      </div>
      {tags.map((t) => (
        <div key={t.t} className="gs-syn-tag" style={{ left: px(t.x) }}><span className="d" />{t.t}</div>
      ))}
      <div className="gs-syn-note">合成红点逻辑：当背包中存在「可合成」的宝石时，入口出现红点，主动提示玩家进阶。</div>

      <div className="gs-theory-blue" style={{ left: px(80), top: px(626), width: px(1120), height: px(120) }}>
        <div className="bar" style={{ background: '#f56b2e' }} />
        <div className="eyebrow gs-en" style={{ left: px(40), top: px(26), color: '#f56b2e' }}>FLOW · 路径连续</div>
        <div className="title" style={{ left: px(40), top: px(48), fontSize: px(25) }}>养成动作一气呵成</div>
        <div style={{ position: 'absolute', left: px(360), top: px(28), width: px(1), height: px(64), background: '#e4e8f1' }} />
        <div className="desc" style={{ left: px(452), top: px(35), width: px(654), lineHeight: '25px' }}>
          合成入口直达当前宝石的合成页，玩家无需层层返回与翻找。减少跳转 = 减少中断，养成节奏不被打散，心流得以延续。
        </div>
      </div>
    </div>
  );
}

/* =================== S11 Red-dot Guidance =================== */
function S11() {
  const rules = [
    { y: 200, accent: '#4f80f5', chip: '镶嵌红点 ①', chipTone: 'blue', tTop: 61, t: '空凹槽可镶嵌', metaRight: true, metaLeft: 539, metaTop: 29, metaW: 230, meta: '装备存在已解锁但仍空置的凹槽' },
    { y: 344, accent: '#4f80f5', chip: '镶嵌红点 ②', chipTone: 'blue', tTop: 74, t: '更优宝石可替换', metaRight: true, metaLeft: 539, metaTop: 29, metaW: 240, meta: '背包中存在等级更高的同类型宝石' },
    { y: 488, accent: '#f56b2e', chip: '合成红点', chipTone: 'orange', tTop: 74, t: '宝石可合成', metaRight: false, metaLeft: 299, metaTop: 29, metaW: 240, meta: '满足材料条件，存在可合成的宝石' },
  ];
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(800) }}>
      <Header zh="红点引导逻辑" en="RED-DOT GUIDANCE" accentTop={68} titleTop={88} subTop={136}
        rightSub="红点逐级下沉，把玩家的视线一路引向「此刻能做的事」。" rightSubTop={94} />

      <div className="gs-rd-card">
        <div className="h">红点层级传导</div>
        <div className="s">父级聚合子级状态，红点一路指向终点</div>
        <div className="gs-rd-node gray" style={{ left: px(27), top: px(92), width: px(464), height: px(76) }}>
          <div className="t">装备入口</div><div className="d" style={{ top: px(45) }}>大世界 › 装备</div>
          <div className="reddot" style={{ left: px(430), top: px(16) }} />
        </div>
        <div className="gs-rd-conn" style={{ left: px(99), top: px(168), height: px(26) }} />
        <div className="gs-rd-node gray" style={{ left: px(87), top: px(194), width: px(404), height: px(76) }}>
          <div className="t">镶嵌页签</div><div className="d" style={{ top: px(45) }}>装备 › 镶嵌</div>
          <div className="reddot" style={{ left: px(370), top: px(16) }} />
        </div>
        <div className="gs-rd-conn" style={{ left: px(159), top: px(270), height: px(26) }} />
        <div className="gs-rd-node alert" style={{ left: px(147), top: px(296), width: px(344), height: px(86) }}>
          <div className="t" style={{ left: px(18.5), top: px(13.5) }}>目标凹槽</div>
          <div className="d" style={{ left: px(18.5), top: px(49.5) }}>可镶嵌 / 可替换</div>
          <div className="reddot" style={{ left: px(308.5), top: px(14.5) }} />
          <div className="can" style={{ left: px(322.5), top: px(49.5), transform: 'translateX(-100%)' }}>可操作</div>
        </div>
      </div>

      {rules.map((r) => (
        <div key={r.chip} className="gs-rd-rule" style={{ top: px(r.y) }}>
          <div className="accent" style={{ background: r.accent }} />
          <div className={`chip ${r.chipTone}`}>{r.chip}</div>
          <div className="reddot" />
          <div className="t" style={{ top: px(r.tTop) }}>{r.t}</div>
          <div className="meta" style={{ left: px(r.metaLeft), top: px(r.metaTop), width: px(r.metaW), textAlign: r.metaRight ? 'right' : 'left', transform: r.metaRight ? 'translateX(-100%)' : 'none' }}>{r.meta}</div>
        </div>
      ))}

      <div className="gs-theory-dark" style={{ left: px(80), top: px(647), width: px(1120), height: px(120) }}>
        <div className="bar" style={{ background: '#eb4646' }} />
        <div className="eyebrow gs-en" style={{ left: px(40), top: px(26), color: '#eb4646' }}>INFORMATION SCENT</div>
        <div className="title" style={{ left: px(40), top: px(48), fontSize: px(25) }}>信息气味</div>
        <div className="vsep" style={{ left: px(260), top: px(28), height: px(64) }} />
        <div className="desc" style={{ left: px(452), top: px(35), width: px(654), lineHeight: '25px' }}>
          用户循着「线索的气味」寻找目标。红点就是最轻量的气味标记——它不打扰、却始终指明哪里有价值可取，把探索成本降到一次点击。
        </div>
      </div>
    </div>
  );
}

/* =================== S12 Data-driven Config =================== */
function S12() {
  const items = [
    { y: 256, t: '数值随表调整', s: '平衡性微调无需改动客户端' },
    { y: 330, t: '文案灵活替换', s: '名称 / 描述按版本即时更新' },
    { y: 404, t: '图标按需替换', s: '新宝石美术资源直接挂接' },
    { y: 478, t: '新增零成本', s: '扩展宝石类型几乎零开发' },
  ];
  return (
    <div className="gs-sec gs-bg-white" style={{ height: px(640) }}>
      <Header zh="配置化设计" en="DATA-DRIVEN" accentTop={68} titleTop={88} subTop={136}
        rightSub="宝石的名称、图标、属性、数量全部由配置驱动。" rightSubTop={94} />

      <div className="gs-cfg-card">
        <div className="hex"><Hex size={56} fill="#4f80f5" /></div>
        <div className="name">宝石名称</div>
        <div className="lvl">Lv.3 · 太古玉</div>
        <div className="gs-cfg-badge" style={{ top: px(40) }}><span className="d" />可配置</div>
        <div className="divline" style={{ top: px(104) }} />
        <div className="grouplbl" style={{ top: px(124) }}>宝石属性</div>
        <div className="gs-cfg-badge" style={{ top: px(120) }}><span className="d" />可配置</div>
        <div className="val" style={{ top: px(152) }}>攻击力  +120</div>
        <div className="val" style={{ top: px(180) }}>暴击率  +5.0%</div>
        <div className="divline" style={{ top: px(222) }} />
        <div className="grouplbl" style={{ top: px(242) }}>持有数量</div>
        <div className="gs-cfg-badge" style={{ top: px(238) }}><span className="d" />可配置</div>
        <div className="val" style={{ top: px(270) }}>拥有  × 6</div>
      </div>
      <div className="gs-cap" style={{ left: px(80), top: px(584) }}>宝石信息浮层 — 标注字段均可后台配置</div>

      <div className="gs-cfg-rh">数据与表现分离</div>
      {items.map((it) => (
        <div key={it.t} className="gs-cfg-item" style={{ top: px(it.y) }}>
          <div className="ck gs-en">✓</div>
          <div className="t">{it.t}</div>
          <div className="s">{it.s}</div>
        </div>
      ))}
    </div>
  );
}

/* =================== S13 Flow Journey =================== */
function S13() {
  // node positions inside .gs-jr (relative). Figma ellipse x+9 center, y+9 center.
  const nodes = [
    { cx: 89, cy: 249, quote: '「这是什么」', qTop: 209, step: '进入装备', peak: false },
    { cx: 249, cy: 229, quote: '「点开看看」', qTop: 189, step: '选择凹槽', peak: false },
    { cx: 409, cy: 207, quote: '「选哪颗」', qTop: 167, step: '挑选宝石', peak: false },
    { cx: 569, cy: 149, quote: '「成功了！」', qTop: 109, step: '确认镶嵌', peak: true },
    { cx: 729, cy: 167, quote: '「还能更强」', qTop: 127, step: '红点进阶', peak: false },
    { cx: 989, cy: 99, quote: '「有成就感」', qTop: 59, step: '养成完成', peak: true },
  ];
  // curve path relative to svg origin (left 89, top 99 in card)
  const pts = nodes.map((n) => ({ x: n.cx - 89, y: n.cy - 99 }));
  const path = pts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
  const area = `${path} L ${pts[pts.length - 1].x} 230 L ${pts[0].x} 230 Z`;
  return (
    <div className="gs-sec gs-bg-gray" style={{ height: px(820) }}>
      <Header zh="心流体验历程" en="PLAYER FLOW JOURNEY" accentTop={68} titleTop={88} subTop={136}
        rightSub="沿着优化后的路径，玩家投入度持续走高、几无断点。" rightSubTop={94} />

      <div className="gs-jr">
        <div className="yaxis">投入 · 愉悦度</div>
        <div className="baseline" />
        <svg className="curve" viewBox="0 0 900 230" preserveAspectRatio="none">
          <path d={area} fill="rgba(79,128,245,0.08)" />
          <path d={path} fill="none" stroke="#4f80f5" strokeWidth={2.5} strokeLinejoin="round" />
        </svg>
        {nodes.map((n) => (
          <div key={n.step}>
            <div className="vline" style={{ left: px(n.cx - 0.5), top: px(n.cy + 9), height: px(329 - (n.cy + 9)) }} />
            <div className={`node ${n.peak ? 'peak' : ''}`} style={{ left: px(n.cx - 9), top: px(n.cy - 9) }} />
            <div className={`quote ${n.peak ? 'peak' : ''}`} style={{ left: px(n.cx), top: px(n.qTop) }}>{n.quote}</div>
            <div className="step" style={{ left: px(n.cx), top: px(343) }}>{n.step}</div>
          </div>
        ))}
        <div className="channel">全程处于「心流通道」</div>
      </div>

      <div className="gs-theory-dark" style={{ left: px(80), top: px(624), width: px(1120), height: px(150) }}>
        <div className="bar" style={{ background: '#4f80f5' }} />
        <div className="eyebrow gs-en" style={{ left: px(40), top: px(28), color: '#4f80f5' }}>USE SCENARIO · 使用场景</div>
        <div className="title" style={{ left: px(40), top: px(52), fontSize: px(23) }}>碎片时间里的一次养成</div>
        <div className="vsep" style={{ left: px(420), top: px(32), height: px(86) }} />
        <div className="desc" style={{ left: px(552), top: px(40), width: px(554), lineHeight: '25px', color: '#ccd6e8' }}>
          玩家清完日常副本，瞥见装备入口的红点，顺手点开；环形凹槽一眼看清空位，背包顶部正是刚掉落的高级宝石，一键镶嵌、Toast 确认，再循红点完成一次合成。整个过程不到半分钟，全程无需思考下一步去哪。
        </div>
      </div>
    </div>
  );
}

/* =================== S15 Ending =================== */
function S15() {
  const rings = [
    { x: 980, y: 60, d: 420 },
    { x: 1050, y: 130, d: 280 },
  ];
  const dots = [
    [1183, 53], [1001.1, 158], [1001.1, 368], [1183, 473], [1364.9, 368], [1364.9, 158],
  ];
  return (
    <div className="gs-sec gs-ending" style={{ height: px(700) }}>
      {rings.map((r, i) => (
        <div key={i} className="gs-cover-ring" style={{ left: px(r.x), top: px(r.y), width: px(r.d), height: px(r.d) }} />
      ))}
      {dots.map(([x, y], i) => (
        <div key={`d${i}`} className="gs-cover-soliddot" style={{ left: px(x), top: px(y), width: px(14), height: px(14) }} />
      ))}
      <div className="gs-end-bar" />
      <div className="gs-end-eyebrow gs-en">DESIGN SHOW</div>
      <div className="gs-end-title">视觉稿欣赏</div>
      <div className="gs-end-img" style={{ left: px(80) }}>
        <img src={A.s15a} alt="视觉稿展示 1" loading="lazy" decoding="async" />
      </div>
      <div className="gs-end-img" style={{ left: px(702) }}>
        <img src={A.s15b} alt="视觉稿展示 2" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

/* ===== Main Export ===== */
export function GemSocketExactCase() {
  return (
    <div className="gs-canvas">
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
      <S06 />
      <S07 />
      <S08 />
      <S09 />
      <S10 />
      <S11 />
      <S12 />
      <S13 />
      <S15 />
    </div>
  );
}
