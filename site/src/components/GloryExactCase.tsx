import './GloryExactCase.css';

/* ===== Image assets (game screenshots / references) ===== */
const asset = (name: string) => `/assets/qingyu-glory/${name}`;

const A: Record<string, string> = {
  // S4 main path
  s4_01: asset('s4_01.webp'),
  s4_02: asset('s4_02.webp'),
  s4_03: asset('s4_03.webp'),
  s4_04: asset('s4_04.webp'),
  s4_05: asset('s4_05.webp'),
  s4_s1: asset('s4_s1.webp'),
  s4_s2: asset('s4_s2.webp'),
  s4_s3: asset('s4_s3.webp'),
  // S5A entry world
  s5a: asset('s5a.webp'),
  // S5B season home
  s5b: asset('s5b.webp'),
  // S5C reward
  s5c_overview: asset('s5c_overview.webp'),
  s5c_popup: asset('s5c_popup.webp'),
  // S5D tasks
  s5d: asset('s5d.webp'),
  // S5E ranking
  s5e: asset('s5e.webp'),
  // S5F honor
  s5f: asset('s5f.webp'),
  // S5G social
  s5g_mine: asset('s5g_mine.webp'),
  s5g_other: asset('s5g_other.webp'),
  // S7 art reference
  s7_a: asset('s7_a.webp'),
  s7_b: asset('s7_b.webp'),
};

const px = (n: number) => `${n}px`;

function Img({ k, alt = '' }: { k: string; alt?: string }) {
  return <img src={A[k]} alt={alt} loading="lazy" decoding="async" />;
}

/* Diamond marker */
function Diamond({ left, top, size = 14 }: { left: number; top: number; size?: number }) {
  return <div className="gl-diamond" style={{ left: px(left), top: px(top), width: px(size), height: px(size) }} />;
}

/* Section header (zh title, en sub, rule, big index number) */
function Header({
  zh, en, num, dark, titleLeft = 128, subColor, numLeft = 1064,
}: {
  zh: string; en: string; num: string; dark: boolean;
  titleLeft?: number; subColor?: string; numLeft?: number;
}) {
  const titleColor = dark ? '#f4efe3' : '#12151b';
  const subC = subColor || (dark ? '#e2b54b' : '#a87e22');
  const numColor = dark ? 'rgba(244,239,227,0.05)' : 'rgba(18,21,27,0.07)';
  return (
    <>
      <p className="gl-bignum gl-bebas" style={{ left: px(numLeft), top: px(10), color: numColor }}>{num}</p>
      <Diamond left={96} top={92.1} />
      <h2 className="gl-h-title gl-serif" style={{ left: px(titleLeft), top: px(78), color: titleColor }}>{zh}</h2>
      <p className="gl-h-sub gl-bebas" style={{ color: subC }}>{en}</p>
      <div className={`gl-h-rule ${dark ? 'gl-rule-light' : 'gl-rule-dark'}`} />
    </>
  );
}

/* Annotation: dot + horizontal leader line + text block */
function Anno({
  dotX, dotY, red, children,
}: { dotX: number; dotY: number; red?: boolean; children?: React.ReactNode }) {
  return (
    <>
      <div className={`gl-dot ${red ? 'gl-dot-red' : ''}`} style={{ left: px(dotX), top: px(dotY) }} />
      {children}
    </>
  );
}

/* Dark driver card with top accent bar */
function DriverCard({
  left, top, width = 352, height = 304, topColor = '#e2b54b', icon,
  zh, en, zhColor = '#e2b54b', body, bodyTop = 200,
}: {
  left: number; top: number; width?: number; height?: number; topColor?: string;
  icon?: React.ReactNode; zh: string; en: string; zhColor?: string; body: string; bodyTop?: number;
}) {
  return (
    <div className="gl-card-dark" style={{ left: px(left), top: px(top), width: px(width), height: px(height) }}>
      <div className="gl-card-top" style={{ background: topColor }} />
      {icon}
      <p className="gl-card-title gl-serif" style={{ left: px(32), top: px(120), fontSize: '30px', color: zhColor }}>{zh}</p>
      <p className="gl-card-en gl-bebas" style={{ left: px(32), top: px(164), letterSpacing: '4px', color: '#8d99a8' }}>{en}</p>
      <p className="gl-card-body" style={{ left: px(32), top: px(bodyTop), width: px(288), lineHeight: 1.75, color: 'rgba(244,239,227,0.8)' }}>{body}</p>
    </div>
  );
}

/* Light rationale card (left accent) */
function RatCardL({
  left, top, width = 352, height = 180, zh, en, body,
}: { left: number; top: number; width?: number; height?: number; zh: string; en: string; body: string }) {
  return (
    <div className="gl-card-light" style={{ left: px(left), top: px(top), width: px(width), height: px(height) }}>
      <div className="gl-card-left" />
      <p className="gl-card-title gl-serif" style={{ left: px(25), top: px(23), fontSize: '23px', color: '#12151b' }}>{zh}</p>
      <p className="gl-card-en gl-bebas" style={{ left: px(25), top: px(53), color: '#a87e22' }}>{en}</p>
      <p className="gl-card-body" style={{ left: px(25), top: px(85), width: px(width - 48), color: '#4a4538' }}>{body}</p>
    </div>
  );
}

/* Dark rationale card (top accent) */
function RatCardD({
  left, top, width = 352, height = 196, zh, en, body,
}: { left: number; top: number; width?: number; height?: number; zh: string; en: string; body: string }) {
  return (
    <div className="gl-card-dark" style={{ left: px(left), top: px(top), width: px(width), height: px(height) }}>
      <div className="gl-card-top" />
      <p className="gl-card-title gl-serif" style={{ left: px(26), top: px(26), fontSize: '23px', color: '#e2b54b' }}>{zh}</p>
      <p className="gl-card-en gl-bebas" style={{ left: px(26), top: px(62), color: '#8d99a8' }}>{en}</p>
      <p className="gl-card-body" style={{ left: px(26), top: px(96), width: px(300), color: 'rgba(244,239,227,0.82)' }}>{body}</p>
    </div>
  );
}

/* ===================== S0 — Cover ===================== */
function S0() {
  // dot grid 6x4
  const dots: React.ReactNode[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      dots.push(
        <div key={`d${r}-${c}`} style={{ position: 'absolute', left: px(96 + c * 26), top: px(772 + r * 26), width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(226,181,75,0.5)' }} />
      );
    }
  }
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(900) }}>
      {/* decorative rings */}
      <div style={{ position: 'absolute', left: px(820), top: px(-260), width: px(700), height: px(700), borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,181,75,0.10), rgba(226,181,75,0) 70%)' }} />
      <div style={{ position: 'absolute', left: px(1108), top: px(560), width: px(72), height: px(72), borderRadius: '50%', border: '1px solid rgba(226,181,75,0.4)' }} />
      <div style={{ position: 'absolute', left: px(1090), top: px(640), width: px(12), height: px(12), borderRadius: '50%', background: '#e2b54b' }} />
      {/* vertical gold bar */}
      <div style={{ position: 'absolute', left: px(64), top: px(78), width: px(2), height: px(340), background: 'rgba(226,181,75,0.8)' }} />
      {/* red diagonal accent ribbon */}
      <div style={{ position: 'absolute', left: px(-50), top: px(470), width: px(560), height: px(54), background: 'rgba(224,73,47,0.9)', transform: 'rotate(10deg)', transformOrigin: 'left top' }} />
      {dots}
      <p className="gl-bebas" style={{ position: 'absolute', left: px(96), top: px(82), color: '#e2b54b', fontSize: '21px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>GAME UX PORTFOLIO — CASE</p>
      <p style={{ position: 'absolute', left: px(896), top: px(84), width: px(320), textAlign: 'right', color: '#8d99a8', fontSize: '23px', letterSpacing: '2px' }}>赛季制荣誉玩法</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(92), top: px(120), color: '#f4efe3', fontSize: '221px', letterSpacing: '6px', lineHeight: 1, whiteSpace: 'nowrap' }}>HONOR</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(92), top: px(354), fontSize: '221px', letterSpacing: '6px', lineHeight: 1, whiteSpace: 'nowrap', background: 'linear-gradient(90deg,#e2b54b,#f4d98a)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>SEASON</p>
      <div style={{ position: 'absolute', left: px(96), top: px(614), width: px(120), height: px(3), background: '#e2b54b' }} />
      <p className="gl-serif" style={{ position: 'absolute', left: px(65), top: px(638), color: '#e2b54b', fontSize: '60px', fontWeight: 900, whiteSpace: 'nowrap' }}>荣耀赛季</p>
    </div>
  );
}

/* ===================== S1 — 项目概述 ===================== */
function S1() {
  const delivs = [
    { x: 96, y: 626, n: '01', zh: '荣耀赛季 · 主界面', en: 'SEASON HOME' },
    { x: 464, y: 626, n: '02', zh: '赛季任务界面', en: 'SEASON TASKS' },
    { x: 832, y: 626, n: '03', zh: '赛季排行界面', en: 'RANKING' },
    { x: 96, y: 782, n: '04', zh: '赛季荣誉界面', en: 'HONOR GALLERY' },
    { x: 464, y: 782, n: '05', zh: '他人荣誉 · 社交查看', en: 'SOCIAL VIEW' },
    { x: 832, y: 782, n: '06', zh: '赛季奖励预览', en: 'REWARD PREVIEW' },
  ];
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1080), color: '#12151b' }}>
      <Header zh="项目概述" en="OVERVIEW / PROJECT" num="01" dark={false} numLeft={1080} />
      <div style={{ position: 'absolute', left: px(96), top: px(242), width: px(6), height: px(108), background: '#e0492f' }} />
      <p className="gl-serif" style={{ position: 'absolute', left: px(130), top: px(244), fontSize: '35px', fontWeight: 700, lineHeight: 1.6, whiteSpace: 'nowrap' }}>「 新增赛季荣誉功能，增加用户粘性 」</p>
      <p style={{ position: 'absolute', left: px(132), top: px(310), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>—— 系统目的 · 帮助游离性玩家寻找成就目标</p>
      <p style={{ position: 'absolute', left: px(132), top: px(370), width: px(578), color: '#4a4538', fontSize: '18px', lineHeight: 1.8 }}>玩家通过赛季任务获得段位积分，积分满额自动晋升段位；段位决定可领取的奖励档次；排行榜与荣誉陈列让成就被看见、被沉淀——以两个月为一季，驱动一季接一季的长线参与。</p>
      {/* MY PART panel */}
      <div style={{ position: 'absolute', left: px(760), top: px(232), width: px(424), height: px(322), background: '#12151b', borderRadius: '16px', overflow: 'hidden' }}>
        <p className="gl-bebas" style={{ position: 'absolute', left: px(36), top: px(32), color: '#e2b54b', fontSize: '21px', letterSpacing: '5px' }}>MY PART</p>
        {[['系统交互设计 · 界面拆分', 74], ['界面流程与信息架构', 114], ['红点规则 · 注释与配置说明', 154]].map(([t, y]) => (
          <div key={t as string}>
            <div style={{ position: 'absolute', left: px(36), top: px((y as number) + 12), width: '6px', height: '6px', borderRadius: '50%', background: '#e2b54b' }} />
            <p style={{ position: 'absolute', left: px(54), top: px(y as number), color: '#f4efe3', fontSize: '18px', fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</p>
          </div>
        ))}
        <p className="gl-bebas" style={{ position: 'absolute', left: px(36), top: px(196), color: '#e2b54b', fontSize: '97px', lineHeight: 1 }}>6</p>
        <p style={{ position: 'absolute', left: px(90), top: px(252), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>个界面 · 全链路交付</p>
      </div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(96), top: px(574), fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>交付界面一览</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(276), top: px(582), color: '#a87e22', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>DELIVERABLES ×6</p>
      {delivs.map((d) => (
        <div key={d.n} className="gl-deliv" style={{ left: px(d.x), top: px(d.y) }}>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(23), top: px(17), color: '#e2b54b', fontSize: '39px' }}>{d.n}</p>
          <Diamond left={315} top={20} size={8} />
          <p className="gl-serif" style={{ position: 'absolute', left: px(23), top: px(72), color: '#12151b', fontSize: '22px', fontWeight: 700, whiteSpace: 'nowrap' }}>{d.zh}</p>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(23), top: px(106), color: 'rgba(111,103,84,0.85)', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{d.en}</p>
        </div>
      ))}
      <p className="gl-serif" style={{ position: 'absolute', left: 0, top: px(986), width: '1280px', textAlign: 'center', fontSize: '35px', fontWeight: 900 }}>
        「 让<span style={{ color: '#a87e22' }}>变强可量化</span> · 让<span style={{ color: '#a87e22' }}>荣耀可展示</span> 」
      </p>
    </div>
  );
}

/* ===================== S2 — 玩法核心 ===================== */
function S2() {
  // 5 nodes around ring; positions from metadata (ellipse top-left + label)
  const nodes = [
    { n: '01', cx: 400, cy: 340, l1: '接取', l2: '赛季任务' },
    { n: '02', cx: 637.76, cy: 512.75, l1: '完成任务', l2: '获得积分' },
    { n: '03', cx: 546.95, cy: 792.25, l1: '积分满额', l2: '自动晋升' },
    { n: '04', cx: 253.05, cy: 792.25, l1: '领取段位', l2: '赛季奖励' },
    { n: '05', cx: 162.24, cy: 512.75, l1: '赛季结算', l2: '荣誉沉淀' },
  ];
  const steps = [
    { y: 340, zh: '目标', en: 'GOAL', body: '段位徽章与奖励预览先行可见，玩家始终知道「为什么玩」。' },
    { y: 460, zh: '行动', en: 'ACTION', body: '赛季任务把大目标切成 15 积分一档的小步子，随做随得。' },
    { y: 580, zh: '反馈', en: 'FEEDBACK', body: '积分到账、红点点亮、Toast 弹出，每一步行为提供即时回应。' },
    { y: 700, zh: '展示', en: 'DISPLAY', body: '排行与荣誉陈列把结果展示为可被炫耀的社交资产。' },
  ];
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1500) }}>
      <Header zh="玩法核心 · 赛季循环" en="CORE LOOP — HOW THE SEASON WORKS" num="02" dark />
      {/* ring */}
      <div style={{ position: 'absolute', left: px(150), top: px(340), width: px(500), height: px(500), borderRadius: '50%', border: '1px dashed rgba(226,181,75,0.3)' }} />
      {/* center */}
      <div style={{ position: 'absolute', left: px(316), top: px(506), width: px(168), height: px(168), borderRadius: '50%', background: 'radial-gradient(circle,#f4d98a,#e2b54b)' }} />
      <p className="gl-serif" style={{ position: 'absolute', left: px(400), top: px(558), transform: 'translateX(-50%)', color: '#12151b', fontSize: '30px', fontWeight: 900, whiteSpace: 'nowrap' }}>荣耀赛季</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(400.5), top: px(611), transform: 'translateX(-50%)', color: 'rgba(13,20,17,0.7)', fontSize: '16px', letterSpacing: '1px', whiteSpace: 'nowrap' }}>SEASON LOOP</p>
      {nodes.map((nd) => (
        <div key={nd.n}>
          <div style={{ position: 'absolute', left: px(nd.cx - 62), top: px(nd.cy - 62), width: px(124), height: px(124), borderRadius: '50%', background: '#181d25', border: '1px solid rgba(226,181,75,0.45)' }} />
          <p className="gl-bebas" style={{ position: 'absolute', left: px(nd.cx), top: px(nd.cy - 44), transform: 'translateX(-50%)', color: '#e2b54b', fontSize: '21px', textAlign: 'center', whiteSpace: 'nowrap' }}>{nd.n}</p>
          <div style={{ position: 'absolute', left: px(nd.cx), top: px(nd.cy - 18), transform: 'translateX(-50%)', width: px(96), textAlign: 'center', color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.45 }}>
            <p>{nd.l1}</p><p>{nd.l2}</p>
          </div>
        </div>
      ))}
      {/* right side step list */}
      {steps.map((s) => (
        <div key={s.zh}>
          <div style={{ position: 'absolute', left: px(782), top: px(s.y + 4), width: px(2), height: px(72), background: 'rgba(226,181,75,0.55)' }} />
          <p className="gl-serif" style={{ position: 'absolute', left: px(806), top: px(s.y), color: '#e2b54b', fontSize: '30px', fontWeight: 900, whiteSpace: 'nowrap' }}>{s.zh}</p>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(872), top: px(s.y + 12), color: '#8d99a8', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{s.en}</p>
          <p style={{ position: 'absolute', left: px(806), top: px(s.y + 44), width: px(378), color: 'rgba(244,239,227,0.85)', fontSize: '16px', lineHeight: 1.65 }}>{s.body}</p>
        </div>
      ))}
      <p className="gl-serif" style={{ position: 'absolute', left: px(96), top: px(998), color: '#f4efe3', fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>循环成立的三大体验驱动</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(416), top: px(1006), color: '#e2b54b', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>THREE DRIVERS</p>
      <DriverCard left={96} top={1056} zh="成长驱动" en="GROWTH" body="段位积分是确定性成长，做任务必得积分，积分满额必晋升，付出即有回报。"
        icon={<div style={{ position: 'absolute', left: px(32), top: px(40), display: 'flex', alignItems: 'flex-end', gap: px(6) }}><span style={{ width: '10px', height: '18px', background: '#e2b54b', borderRadius: '2px' }} /><span style={{ width: '10px', height: '32px', background: '#e2b54b', borderRadius: '2px' }} /><span style={{ width: '10px', height: '46px', background: '#e2b54b', borderRadius: '2px' }} /></div>} />
      <DriverCard left={464} top={1056} zh="收集驱动" en="COLLECTION" body="每个段位、每个赛季都有专属奖励档位，徽章与奖励随赛季不断累积成收藏。"
        icon={<><div style={{ position: 'absolute', left: px(50), top: px(28), width: '30px', height: '30px', border: '2.5px solid #e2b54b', transform: 'rotate(45deg)' }} /><div style={{ position: 'absolute', left: px(57), top: px(46), width: '14px', height: '14px', background: '#e2b54b', transform: 'rotate(45deg)' }} /></>} />
      <DriverCard left={832} top={1056} topColor="#e0492f" zhColor="#e0492f" zh="社交驱动" en="SOCIAL" body="排行榜提供比较页面，荣誉页的成就被他人阅览——荣耀的价值在被看见时兑现。"
        icon={<><div style={{ position: 'absolute', left: px(32), top: px(42), width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #e0492f' }} /><div style={{ position: 'absolute', left: px(52), top: px(52), width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #e0492f' }} /></>} />
    </div>
  );
}

/* ===================== S3 — 信息架构 ===================== */
function S3() {
  const tabs = [
    { y: 240, t: '主页 HOME' }, { y: 306, t: '任务 TASKS' }, { y: 372, t: '排行 RANKING' }, { y: 438, t: '荣耀 HONOR' },
  ];
  const popups = [
    { y: 210, t: '段位奖励弹窗', dash: false }, { y: 266, t: '赛季奖励总览', dash: false }, { y: 336, t: '前往对应玩法', dash: true },
  ];
  const node = (key: string, left: number, top: number, w: number, h: number, txt: string, opts?: { gold?: boolean; dark?: boolean; red?: boolean; dash?: boolean; small?: boolean }) => {
    const o = opts || {};
    const bg = o.gold ? '#e2b54b' : o.dark ? '#12151b' : 'rgba(255,255,255,0.6)';
    const color = o.dark ? '#f4efe3' : o.red ? '#e0492f' : '#12151b';
    const border = o.gold || o.dark ? 'none' : o.red ? '1.5px solid rgba(224,73,47,0.9)' : `1.2px ${o.dash ? 'dashed' : 'solid'} rgba(18,21,27,0.45)`;
    return (
      <div key={key} style={{ position: 'absolute', left: px(left), top: px(top), width: px(w), height: px(h), background: bg, border, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color, fontSize: px(o.small ? 16 : 20), fontWeight: 500 }}>{txt}</span>
      </div>
    );
  };
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1080), color: '#12151b' }}>
      <Header zh="信息架构" en="SYSTEM MAP — ONE CONTAINER, FOUR TABS" num="03" dark={false} />
      {/* connector lines (decorative) */}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1080px', pointerEvents: 'none' }} stroke="rgba(18,21,27,0.45)" fill="none" strokeWidth="1.2">
        <path d="M306 452 C 360 452 360 324 400 324" />
        <path d="M600 324 L 700 265" /><path d="M600 324 L 700 324" /><path d="M600 324 L 700 397" /><path d="M600 324 L 700 463" />
        <path d="M860 248 L 950 232" /><path d="M860 288 L 950 288" /><path d="M860 358 L 950 358" />
        <path d="M200 484 C 200 648 220 648 400 648" />
        <path d="M590 648 L 660 648" /><path d="M890 648 L 960 648" />
      </svg>
      {node('world', 96, 420, 210, 64, '大世界主界面', { dark: true })}
      {node('sys', 400, 290, 200, 68, '荣耀赛季系统', { gold: true })}
      {tabs.map((tb) => node(`tab-${tb.t}`, 700, tb.y, 160, 50, tb.t, { small: true }))}
      {popups.map((p) => node(`pop-${p.t}`, 950, p.y, 210, 44, p.t, { small: true, dash: p.dash }))}
      {node('card1', 400, 620, 190, 56, '玩家快捷信息卡', { small: true })}
      {node('card2', 660, 620, 230, 56, '角色信息 · 荣耀页签', { small: true })}
      {node('card3', 960, 620, 200, 56, '他人荣誉界面', { small: true, red: true })}
      <p style={{ position: 'absolute', left: px(222), top: px(626), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>大世界中点击其他玩家</p>
      {/* red-dot chain note */}
      <p style={{ position: 'absolute', left: 0, top: px(808), width: '1280px', textAlign: 'center', color: '#4a4538', fontSize: '20px' }}>
        <span style={{ display: 'inline-block', width: px(8), height: px(8), borderRadius: '50%', background: '#e0492f', marginRight: px(12), verticalAlign: 'middle' }} />
        红点三级链路：大世界入口 → 系统页签 → 任务按钮，逐级指向「有奖励可领」，领完即灭。
      </p>
      <p className="gl-serif" style={{ position: 'absolute', left: 0, top: px(920), width: '1280px', textAlign: 'center', fontSize: '30px', fontWeight: 900 }}>
        四个页签收纳全部赛季行为 —— <span style={{ color: '#a87e22' }}>做任务 · 看排名 · 领奖励 · 晒荣誉</span>，一站式完成
      </p>
    </div>
  );
}

/* ===================== S4 — 流程总览 ===================== */
function S4() {
  const Shot = ({ left, top, w, h, k, red }: { left: number; top: number; w: number; h: number; k: string; red?: boolean }) => (
    <div className="gl-shot" style={{ left: px(left), top: px(top), width: px(w), height: px(h), border: `1.5px solid ${red ? 'rgba(224,73,47,0.9)' : 'rgba(226,181,75,0.9)'}`, borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
      <Img k={k} />
    </div>
  );
  const lbl = (numL: number, num: string, txtL: number, txt: string, top: number, red?: boolean) => (
    <>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(numL), top: px(top), color: red ? '#e0492f' : '#e2b54b', fontSize: '23px' }}>{num}</p>
      <p style={{ position: 'absolute', left: px(txtL), top: px(top + 2), color: '#f4efe3', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>{txt}</p>
    </>
  );
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1200) }}>
      <Header zh="界面流程总览" en="SCREEN FLOW — MAIN PATH + SOCIAL PATH" num="04" dark numLeft={1058} />
      <div className="gl-tag" style={{ left: px(96), top: px(216), background: '#e2b54b', color: '#12151b' }}>主线 MAIN PATH</div>
      <Shot left={96} top={268} w={330} h={186} k="s4_01" />
      {lbl(96, '01', 128, '大世界主界面 · 新增入口', 464)}
      <Shot left={475} top={268} w={330} h={186} k="s4_02" />
      {lbl(475, '02', 507, '荣耀赛季 · 主页', 464)}
      <Shot left={854} top={268} w={330} h={186} k="s4_03" />
      {lbl(854, '03', 886, '赛季任务', 464)}
      <Shot left={854} top={560} w={330} h={186} k="s4_04" />
      {lbl(854, '04', 886, '赛季排行', 756)}
      <Shot left={475} top={560} w={330} h={186} k="s4_05" />
      {lbl(475, '05', 507, '赛季荣誉', 756)}
      {/* main path connectors */}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1200px', pointerEvents: 'none' }} stroke="rgba(226,181,75,0.7)" fill="none" strokeWidth="1.5">
        <path d="M426 361 L 475 361" /><path d="M805 361 L 854 361" />
        <path d="M1019 454 L 1019 560" /><path d="M854 653 L 475 653" />
      </svg>
      <div style={{ position: 'absolute', left: px(96), top: px(584), width: px(330), color: 'rgba(244,239,227,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
        <p>主线一条 S 线走完五屏：</p><p>入口 → 主页 → 任务 → 排行 → 荣誉。</p><p>页签平级切换，任意一屏可直接退出，</p><p>路径无死角、无回头路。</p>
      </div>
      <div className="gl-tag" style={{ left: px(96), top: px(859), background: '#e0492f', color: '#f4efe3' }}>社交支线 SOCIAL PATH</div>
      <p style={{ position: 'absolute', left: px(299), top: px(865), width: px(208), color: '#8d99a8', fontSize: '16px' }}>入口：大世界中点击任意玩家</p>
      <Shot left={96} top={927} w={330} h={186} k="s4_s1" red />
      {lbl(96, 'S1', 124, '快捷信息卡', 1123, true)}
      <Shot left={475} top={927} w={330} h={186} k="s4_s2" red />
      {lbl(475, 'S2', 503, '其他玩家 · 角色信息', 1123, true)}
      <Shot left={854} top={927} w={330} h={186} k="s4_s3" red />
      {lbl(854, 'S3', 882, '其他玩家 · 荣誉', 1123, true)}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1200px', pointerEvents: 'none' }} stroke="rgba(224,73,47,0.8)" fill="none" strokeWidth="1.5">
        <path d="M313 1020 L 475 1020" /><path d="M805 1020 L 854 1020 L 854 1020" />
      </svg>
    </div>
  );
}

/* ===================== Screen-detail header (S5x) ===================== */
function ScreenHead({ no, title, dark }: { no: string; title: string; dark: boolean }) {
  return (
    <>
      <div className="gl-screentag gl-bebas" style={{ left: px(96), top: px(84), background: '#e2b54b', color: '#12151b' }}>{`SCREEN ${no}`}</div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(200), top: px(80), fontSize: '30px', fontWeight: 700, color: dark ? '#f4efe3' : '#12151b', whiteSpace: 'nowrap' }}>{title}</p>
      <div style={{ position: 'absolute', left: px(96), top: px(148), width: px(1088), height: '1px', background: dark ? 'rgba(244,239,227,0.12)' : 'rgba(18,21,27,0.15)' }} />
    </>
  );
}

/* ===================== S5A — 入口与召回 ===================== */
function S5A() {
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1020), color: '#12151b' }}>
      <Header zh="逐屏解析" en="SCREEN BY SCREEN — DESIGN RATIONALE" num="05" dark={false} />
      <div className="gl-screentag gl-bebas" style={{ left: px(96), top: px(222), background: '#12151b', color: '#e2b54b' }}>SCREEN 01</div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(200), top: px(218), fontSize: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>入口与召回 —— 系统的第一次见面</p>
      <div className="gl-shot" style={{ left: px(96), top: px(300), width: px(720), height: px(406), border: '1px solid rgba(18,21,27,0.25)', borderRadius: '10px', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}><Img k="s5a" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(718), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 常规大世界主界面（交互稿原图）：荣耀赛季入口位于左上玩法入口组</p>
      {/* highlight circle on entry + magnifier */}
      <div style={{ position: 'absolute', left: px(280), top: px(317), width: px(64), height: px(64), borderRadius: '50%', border: '2px solid #e0492f' }} />
      <div style={{ position: 'absolute', left: px(880), top: px(300), width: px(240), height: px(240), borderRadius: '50%', border: '2px solid rgba(18,21,27,0.3)', background: 'rgba(255,255,255,0.4)' }} />
      <div style={{ position: 'absolute', left: px(1008), top: px(348), width: px(21), height: px(21), borderRadius: '50%', background: '#e0492f' }} />
      <div style={{ position: 'absolute', left: px(347), top: px(343), width: px(560), height: '0', borderTop: '1.5px dashed rgba(18,21,27,0.4)' }} />
      <p style={{ position: 'absolute', left: px(972), top: px(550), color: '#a87e22', fontSize: '16px', whiteSpace: 'nowrap' }}>× 3 放大</p>
      <div style={{ position: 'absolute', left: px(853), top: px(599), width: px(260), color: '#12151b', fontSize: '16px', fontWeight: 500, lineHeight: 1.6 }}>
        <p>新增「荣耀赛季」入口</p><p>与相邻玩法入口同形制、同组排布</p>
      </div>
      <p style={{ position: 'absolute', left: px(924), top: px(696), width: px(260), textAlign: 'right', color: '#e0492f', fontSize: '16px', fontWeight: 500 }}>红点：有可领取的奖励时才显示</p>
      <RatCardL left={96} top={790} zh="可见性" en="VISIBILITY" body="入口常驻主界面第一屏，系统状态「有奖可领」外化为红点，不需要玩家主动回忆。" />
      <RatCardL left={464} top={790} zh="行为触发" en="TRIGGER" body="红点是外部触发器：奖励就绪才亮、领完即灭——只在「行动有回报」时打扰玩家。" />
      <RatCardL left={832} top={790} zh="一致性" en="CONSISTENCY" body="沿用既有入口的图标形制与排布规则，玩家无需学习任何新的图形语言。" />
    </div>
  );
}

/* annotation text helper (right-aligned to dot at left) */
function AnnoTxt({ left, top, w, align, title, sub, titleColor }: { left: number; top: number; w?: number; align?: 'left' | 'right'; title: string; sub?: string; titleColor?: string }) {
  return (
    <div style={{ position: 'absolute', left: px(left), top: px(top), width: w ? px(w) : undefined, textAlign: align || 'left' }}>
      <p style={{ color: titleColor || '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>{title}</p>
      {sub && <p style={{ color: '#8d99a8', fontSize: '16px', lineHeight: 1.5 }}>{sub}</p>}
    </div>
  );
}

/* ===================== S5B — 赛季主界面 ===================== */
function S5B() {
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1000) }}>
      <ScreenHead no="02" title="荣耀赛季主页 —— 我是谁 · 我在哪 · 下一步去哪" dark />
      <div className="gl-shot" style={{ left: px(250), top: px(210), width: px(760), height: px(428), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '10px', boxShadow: '0 12px 36px rgba(0,0,0,0.45)' }}><Img k="s5b" /></div>
      <p style={{ position: 'absolute', left: px(250), top: px(650), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 荣耀赛季主界面（交互稿原图）</p>
      {/* left annotations */}
      <div className="gl-dot" style={{ left: px(384), top: px(231.8) }} /><div className="gl-line" style={{ left: px(244), top: px(236.8), width: px(140) }} />
      <AnnoTxt left={56} top={224} w={140} align="right" title="帮助按钮" sub="弹出系统玩法说明" />
      <div className="gl-dot" style={{ left: px(511), top: px(405.3) }} /><div className="gl-line" style={{ left: px(244), top: px(410.3), width: px(267) }} />
      <AnnoTxt left={56} top={400} w={140} align="right" title="当前段位徽章" sub="全屏唯一视觉焦点" />
      <div className="gl-dot" style={{ left: px(252), top: px(528.8) }} /><div className="gl-line" style={{ left: px(244), top: px(534), width: px(15) }} />
      <AnnoTxt left={56} top={522} w={140} align="right" title="赛季奖励预览" sub="点击查看各段位奖励" />
      {/* right annotations */}
      <div className="gl-dot" style={{ left: px(645), top: px(273) }} /><div className="gl-line" style={{ left: px(651), top: px(279), width: px(373) }} />
      <AnnoTxt left={1032} top={267} w={148} title="赛季名称与时间" sub="运营可配置，赛季感先行" />
      <div className="gl-dot" style={{ left: px(991), top: px(342) }} /><div className="gl-line" style={{ left: px(997), top: px(347), width: px(27) }} />
      <AnnoTxt left={1032} top={335} w={198} title="四页签导航" sub="主页 · 任务 · 排行 · 荣耀" />
      <div className="gl-dot gl-dot-red" style={{ left: px(872), top: px(561.8) }} /><div className="gl-line gl-line-red" style={{ left: px(877), top: px(567), width: px(147) }} />
      <AnnoTxt left={1032} top={554} w={160} title="段位奖励 + 红点" sub="有可领取奖励时点亮" titleColor="#e0492f" />
      <div className="gl-dot" style={{ left: px(672), top: px(623) }} /><div className="gl-line" style={{ left: px(672), top: px(628), width: px(353) }} />
      <AnnoTxt left={1032} top={616} w={198} title="段位积分" sub="积分满额自动晋升下一段位" />
      <RatCardD left={96} top={740} zh="视觉层级" en="HIERARCHY" body="徽章居中、明度最高，赛季名居顶、积分居底——玩家一眼回答「我是谁、我到哪了」。" />
      <RatCardD left={464} top={740} zh="目标梯度" en="GOAL GRADIENT" body="50/100 让「还差一半就晋升」始终可见；离目标越近，继续做任务的动力越强。" />
      <RatCardD left={832} top={740} zh="状态外化" en="STATUS VISIBLE" body="「有奖可领」翻译成红点、「能不能领」翻译成按钮态——系统状态永远不需要猜。" />
    </div>
  );
}

/* ===================== S5C — 奖励链路 ===================== */
function S5C() {
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1000), color: '#12151b' }}>
      <div className="gl-screentag gl-bebas" style={{ left: px(96), top: px(84), background: '#12151b', color: '#e2b54b' }}>SCREEN 03</div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(200), top: px(80), fontSize: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>奖励链路 —— 看得见的目标，领得明白的回报</p>
      <div style={{ position: 'absolute', left: px(96), top: px(148), width: px(1088), height: '1px', background: 'rgba(18,21,27,0.15)' }} />
      <div className="gl-shot" style={{ left: px(619), top: px(210), width: px(360), height: px(430), border: '1px solid rgba(18,21,27,0.25)', borderRadius: '10px', boxShadow: '0 10px 28px rgba(0,0,0,0.25)' }}><Img k="s5c_overview" /></div>
      <div className="gl-shot" style={{ left: px(318), top: px(210), width: px(271), height: px(260), border: '1px solid rgba(18,21,27,0.25)', borderRadius: '10px', boxShadow: '0 10px 28px rgba(0,0,0,0.25)' }}><Img k="s5c_popup" /></div>
      <p style={{ position: 'absolute', left: px(320), top: px(482), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 段位奖励弹窗 · 细节（交互稿原图）</p>
      <p style={{ position: 'absolute', left: px(619), top: px(652), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 赛季奖励总览（交互稿原图）</p>
      {/* annotations */}
      <div className="gl-dot" style={{ left: px(507), top: px(432), background: '#292924' }} /><div className="gl-line" style={{ left: px(308), top: px(437), width: px(199), background: 'rgba(41,41,36,0.45)' }} />
      <div style={{ position: 'absolute', left: px(96), top: px(408), width: px(208), textAlign: 'right', color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}><p>已领取：盖「已领取」印章，</p><p>状态不可误读</p></div>
      <div className="gl-dot gl-dot-red" style={{ left: px(512), top: px(255) }} /><div className="gl-line gl-line-red" style={{ left: px(308), top: px(261), width: px(204) }} />
      <p style={{ position: 'absolute', left: px(63), top: px(247), color: '#e0492f', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>可领取：金色「领取」按钮 + 红点</p>
      <div className="gl-dot" style={{ left: px(665), top: px(272), background: '#2aa86a' }} /><div className="gl-line" style={{ left: px(668), top: px(277), width: px(323), background: 'rgba(42,168,106,0.45)' }} />
      <p style={{ position: 'absolute', left: px(999), top: px(266), width: px(176), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>「当前」绿标，自己段位永远置顶</p>
      <div className="gl-dot" style={{ left: px(794), top: px(611), background: '#2aa86a' }} /><div className="gl-line" style={{ left: px(800), top: px(616), width: px(191), background: 'rgba(42,168,106,0.45)' }} />
      <div style={{ position: 'absolute', left: px(999), top: px(602), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}><p>奖励均以邮件形式发放 ，</p><p> 结算统一、不打断当前操作</p></div>
      <RatCardL left={96} top={740} zh="识别优于回忆" en="RECOGNITION" body="打开即见「当前」绿标置顶，玩家不需要记住、也不需要寻找自己所在的段位。" />
      <RatCardL left={464} top={740} zh="期望管理" en="EXPECTATION" body="高档奖励提前可见——先看见想要的，再用积分一步步去兑现。" />
      <RatCardL left={832} top={740} zh="闭环反馈" en="CLOSURE" body="可领 → 领取 → 已领取盖章：一条操作链的三种状态各有专属视觉语言，绝不误读。" />
    </div>
  );
}

/* ===================== S5D — 赛季任务 ===================== */
function S5D() {
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1000) }}>
      <ScreenHead no="04" title="赛季任务 —— 把两个月的大目标切成小步子" dark />
      <div className="gl-shot" style={{ left: px(96), top: px(200), width: px(790), height: px(445), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '10px', boxShadow: '0 12px 36px rgba(0,0,0,0.45)' }}><Img k="s5d" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(657), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 荣耀赛季任务界面（交互稿原图）</p>
      <div className="gl-dot" style={{ left: px(344), top: px(250) }} /><div className="gl-line" style={{ left: px(349), top: px(255), width: px(574) }} />
      <AnnoTxt left={926} top={241} w={258} title="积分奖励前置展示" sub="回报先于行动可见，做不做一眼可判" />
      <div className="gl-dot" style={{ left: px(765), top: px(360.5) }} /><div className="gl-line" style={{ left: px(770), top: px(366), width: px(148) }} />
      <div style={{ position: 'absolute', left: px(926), top: px(352), width: px(258) }}>
        <p style={{ color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>任务三态：领取 / 前往 / 已完成</p>
        <p style={{ color: '#8d99a8', fontSize: '16px', lineHeight: 1.55 }}>金色＝可收获（带红点）｜蓝色＝可行动</p>
        <p style={{ color: '#8d99a8', fontSize: '16px', lineHeight: 1.55 }}>灰色＝已结束，色彩编码一眼分层</p>
      </div>
      <div className="gl-dot gl-dot-red" style={{ left: px(777), top: px(619) }} /><div className="gl-line gl-line-red" style={{ left: px(783), top: px(624), width: px(135) }} />
      <AnnoTxt left={926} top={610} w={258} title="一键领取所有可领积分" sub="批量弹出通用 Toast，减少逐条点击" titleColor="#e0492f" />
      <RatCardD left={96} top={760} zh="小步快跑" en="CHUNKING" body="15 积分一档的任务粒度，把两个月的赛季切成「随手可完成」的日常小目标。" />
      <RatCardD left={464} top={760} zh="即时反馈" en="FEEDBACK" body="点击领取立刻 Toast 确认、红点熄灭、积分上涨——行为与回报零延迟对账。" />
      <RatCardD left={832} top={760} zh="最短路径" en="SHORTCUT" body="「前往」一键直达对应玩法，不让玩家自己找路；想做的事永远只差一次点击。" />
    </div>
  );
}

/* ===================== S5E — 赛季排行 ===================== */
function S5E() {
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1000), color: '#12151b' }}>
      <div className="gl-screentag gl-bebas" style={{ left: px(96), top: px(84), background: '#12151b', color: '#e2b54b' }}>SCREEN 05</div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(200), top: px(80), fontSize: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>赛季排行 —— 看见对手，更要看见自己</p>
      <div style={{ position: 'absolute', left: px(96), top: px(148), width: px(1088), height: '1px', background: 'rgba(18,21,27,0.15)' }} />
      <div className="gl-shot" style={{ left: px(394), top: px(200), width: px(790), height: px(444), border: '1px solid rgba(18,21,27,0.25)', borderRadius: '10px', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}><Img k="s5e" /></div>
      <p style={{ position: 'absolute', left: px(394), top: px(658), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 荣耀赛季排行界面（交互稿原图）</p>
      {/* self-row highlight */}
      <div style={{ position: 'absolute', left: px(571.75), top: px(578.3), width: px(514), height: px(44), border: '2px dashed #e0492f', borderRadius: '6px' }} />
      {/* annotations (leaders) */}
      <div className="gl-dot" style={{ left: px(537), top: px(296), background: '#2aa86a' }} /><div className="gl-vline" style={{ left: px(541), top: px(301), height: px(105), background: 'rgba(42,168,106,0.45)' }} />
      <p style={{ position: 'absolute', left: px(110), top: px(290), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.55, whiteSpace: 'nowrap' }}>「当前」绿标 — 默认选中当前赛季</p>
      <div className="gl-dot" style={{ left: px(480.5), top: px(394.8) }} /><div className="gl-vline" style={{ left: px(485), top: px(399), height: px(110) }} />
      <div style={{ position: 'absolute', left: px(100), top: px(389) }}>
        <p style={{ color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.55, whiteSpace: 'nowrap' }}>赛季列表：由新到旧、自上而下排列</p>
        <p style={{ color: '#6f6754', fontSize: '16px', lineHeight: 1.55, whiteSpace: 'nowrap' }}>历史赛季可回看，但近的永远更近</p>
      </div>
      <div className="gl-dot gl-dot-red" style={{ left: px(602), top: px(582) }} /><div className="gl-line gl-line-red" style={{ left: px(366), top: px(587), width: px(241) }} />
      <div style={{ position: 'absolute', left: px(142), top: px(572) }}>
        <p style={{ color: '#e0492f', fontSize: '16px', fontWeight: 500, lineHeight: 1.55, whiteSpace: 'nowrap' }}>玩家自己排名 — 常驻底部悬浮</p>
      </div>
      <div style={{ position: 'absolute', left: px(196), top: px(596), width: px(160), textAlign: 'right' }}>
        <p style={{ color: '#6f6754', fontSize: '16px', lineHeight: 1.55 }}>无论翻到第几页，</p>
        <p style={{ color: '#6f6754', fontSize: '16px', lineHeight: 1.55 }}>「我在哪」零滚动可见</p>
      </div>
      <RatCardL left={96} top={740} zh="社会比较" en="SOCIAL PROOF" body="排行榜给「我有多强」一个客观坐标——与同服玩家的比较，本身就是持续参与的动机。" />
      <RatCardL left={464} top={740} zh="自我优先" en="SELF FIRST" body="自己的名次永远悬浮在列表底部，省去「翻几页找自己」——最常查的信息成本最低。" />
      <RatCardL left={832} top={740} zh="合理默认" en="GOOD DEFAULT" body="进入即选中当前赛季并打绿标；历史赛季由新到旧排，与玩家的时间心智完全一致。" />
    </div>
  );
}

/* ===================== S5F — 荣誉沉淀 ===================== */
function S5F() {
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1000) }}>
      <ScreenHead no="06" title="荣誉沉淀 —— 每一季都值得被陈列" dark />
      <div className="gl-shot" style={{ left: px(96), top: px(200), width: px(790), height: px(444), borderRadius: '10px', boxShadow: '0 12px 36px rgba(0,0,0,0.45)' }}><Img k="s5f" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(658), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 荣耀赛季荣誉界面（交互稿原图）</p>
      {/* annotations w/ vertical leaders */}
      <div className="gl-dot" style={{ left: px(294), top: px(234) }} /><div className="gl-vline" style={{ left: px(298), top: px(239), height: px(616) }} />
      <p style={{ position: 'absolute', left: px(926), top: px(227), width: px(300), color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>「当前」标记 — 进行中的赛季同样在列</p>
      <div className="gl-dot" style={{ left: px(666), top: px(263) }} /><div className="gl-vline" style={{ left: px(670), top: px(268), height: px(243) }} />
      <p style={{ position: 'absolute', left: px(926), top: px(254), width: px(260), color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>赛季由新到旧 · 从左到右</p>
      <div className="gl-dot" style={{ left: px(637), top: px(455) }} /><div className="gl-vline" style={{ left: px(641), top: px(460), height: px(274) }} />
      <div style={{ position: 'absolute', left: px(926), top: px(444), width: px(360) }}>
        <p style={{ color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.55 }}>各赛季结束时的最终段位 — 徽章永久定格</p>
        <p style={{ color: '#8d99a8', fontSize: '16px', lineHeight: 1.55 }}>打到哪一段，墙上就挂哪一枚</p>
      </div>
      <div className="gl-dot gl-dot-red" style={{ left: px(659), top: px(582) }} /><div className="gl-line gl-line-red" style={{ left: px(665), top: px(587), width: px(252) }} />
      <AnnoTxt left={926} top={573} w={258} title="当季领取的赛季奖励记录" sub="收获被陈列成资产，可随时回看" titleColor="#e0492f" />
      <RatCardD left={96} top={740} zh="峰终定律" en="PEAK-END" body="赛季的「终点」被做成颁奖时刻：最终段位与奖励永久定格，这段经历的记忆停在最高点。" />
      <RatCardD left={464} top={740} zh="禀赋效应" en="ENDOWMENT" body="荣誉卡逐季累积，弃坑等于放弃整面陈列墙——沉淀下来的荣耀本身就是留存的理由。" />
      <RatCardD left={832} top={740} zh="可回溯档案" en="ARCHIVE" body="赛季名称与起止时间（运营可配置）让每段经历可回溯、可讲述，成为玩家的江湖履历。" />
    </div>
  );
}

/* ===================== S5G — 社交分支 ===================== */
function S5G() {
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(900), color: '#12151b' }}>
      <div className="gl-screentag gl-bebas" style={{ left: px(96), top: px(84), background: '#12151b', color: '#e2b54b' }}>SCREEN 07</div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(200), top: px(80), fontSize: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>社交分支 —— 同一套布局，让荣耀被别人看见，别人也被自己看</p>
      <div style={{ position: 'absolute', left: px(96), top: px(148), width: px(1088), height: '1px', background: 'rgba(18,21,27,0.15)' }} />
      <div className="gl-tag" style={{ left: px(96), top: px(200), background: '#a87e22', color: '#fcfaf5', padding: '5px 12px' }}>我的荣誉 · 荣耀页签</div>
      <div className="gl-shot" style={{ left: px(96), top: px(229), width: px(462), height: px(260), border: '1.5px solid rgba(168,126,34,0.8)', borderRadius: '8px' }}><Img k="s5g_mine" /></div>
      <div className="gl-tag" style={{ left: px(722), top: px(200), background: '#e0492f', color: '#fcfaf5', padding: '5px 12px' }}>他人荣誉 · 角色信息</div>
      <div className="gl-shot" style={{ left: px(722), top: px(229), width: px(462), height: px(260), border: '1.5px solid rgba(224,73,47,0.8)', borderRadius: '8px' }}><Img k="s5g_other" /></div>
      <p className="gl-serif" style={{ position: 'absolute', left: px(616), top: px(326), color: '#a87e22', fontSize: '46px', fontWeight: 900 }}>＝</p>
      <div style={{ position: 'absolute', left: px(584), top: px(372), color: '#6f6754', fontSize: '16px', lineHeight: 1.55, whiteSpace: 'nowrap' }}><p>沿用通用信息卡</p><p>入口零新增控件</p></div>
      <p style={{ position: 'absolute', left: px(223), top: px(540), color: '#4a4538', fontSize: '16px', lineHeight: 1.85, whiteSpace: 'nowrap' }}>同一布局 · 同一卡片 · 同一排序。看别人就像看自己，无需任何新的学习；而「能被围观」让荣誉的价值真正兑现。</p>
      <RatCardL left={96} top={650} width={536} height={170} zh="一致性与标准" en="CONSISTENCY" body="他人荣誉完全复用「我的荣誉」的布局与控件——同一图形语言下，认知迁移成本为零，开发成本也为零。" />
      <div style={{ position: 'absolute', left: px(648), top: px(650) }}>
        <RatCardL left={0} top={0} width={536} height={170} zh="社交地位激励" en="STATUS DISPLAY" body="荣誉的价值在「被看见」时兑现：可被围观的成就构成地位信号，也是下个赛季继续冲分的最强理由。" />
        <div style={{ position: 'absolute', left: 0, top: 0, width: '3px', height: '170px', background: '#e0492f' }} />
      </div>
    </div>
  );
}

/* ===================== S6 — 心流历程 ===================== */
function S6() {
  const ticks = [['赛季初', 230, 251], ['赛季中', 610, 631], ['赛季末', 1010, 1031]] as const;
  const flowNodes = [
    { n: '01', red: false, cx: 380, cy: 600, numX: 342, txtX: 368, labY: 628, body: '入口红点引导，认识新赛季与奖励', bodyY: 654, vTop: 609, vH: 21 },
    { n: '02', red: false, cx: 520, cy: 565, numX: 482, txtX: 508, labY: 449, body: '每日任务小步快跑，积分稳定上涨', bodyY: 475, vTop: 523, vH: 33 },
    { n: '03', red: true, cx: 660, cy: 480, numX: 622, txtX: 648, labY: 364, body: '积分满额自动晋升 — 峰值体验', bodyY: 390, vTop: 438, vH: 33 },
    { n: '04', red: false, cx: 840, cy: 442, numX: 802, txtX: 828, labY: 472, body: '排行对比激发追赶，投入再升级', bodyY: 498, vTop: 451, vH: 21 },
    { n: '05', red: true, cx: 1080, cy: 318, numX: 1042, txtX: 1068, labY: 204, body: '结算领奖 · 荣誉上墙 — 峰终时刻', bodyY: 230, vTop: 276, vH: 33 },
  ];
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(1280) }}>
      <Header zh="玩家心流历程" en="FLOW JOURNEY — ACROSS ONE SEASON" num="06" dark numLeft={1058} />
      {/* axes + flow channel */}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1280px', pointerEvents: 'none' }}>
        <path d="M140 260 L 140 700 L 1150 700" fill="none" stroke="rgba(244,239,227,0.3)" strokeWidth="1.5" />
        {/* flow channel band */}
        <path d="M160 540 L 1130 290" fill="none" stroke="rgba(226,181,75,0.25)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M160 700 L 1130 450" fill="none" stroke="rgba(226,181,75,0.25)" strokeWidth="1.5" strokeDasharray="6 6" />
        {/* engagement curve — passes through all five milestone nodes */}
        <path d="M200,655 C230,645.8 326.7,615 380,600 C433.3,585 473.3,585 520,565 C566.7,545 606.7,500.5 660,480 C713.3,459.5 770,469 840,442 C910,415 1040,338.7 1080,318" fill="none" stroke="#e2b54b" strokeWidth="2.5" />
        {/* dotted baseline */}
        {Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={220 + i * 76} cy={689.5} r={1.5} fill="rgba(244,239,227,0.4)" />)}
      </svg>
      <p style={{ position: 'absolute', left: px(66), top: px(244), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>投入强度</p>
      <p style={{ position: 'absolute', left: px(1084), top: px(716), color: '#8d99a8', fontSize: '16px', whiteSpace: 'nowrap' }}>赛季时间线 →</p>
      <p style={{ position: 'absolute', left: px(1010), top: px(388), color: '#8d99a8', fontSize: '16px', letterSpacing: '2px', transform: 'rotate(-14deg)', whiteSpace: 'nowrap' }}>心流通道</p>
      <p style={{ position: 'absolute', left: px(190), top: px(480), color: 'rgba(141,153,168,0.7)', fontSize: '16px', whiteSpace: 'nowrap' }}>焦虑（挑战过高）</p>
      <p style={{ position: 'absolute', left: px(560), top: px(672), color: 'rgba(141,153,168,0.7)', fontSize: '16px', whiteSpace: 'nowrap' }}>无聊（挑战过低）</p>
      {ticks.map(([t, lx, tx]) => (
        <div key={t}>
          <p style={{ position: 'absolute', left: px(lx), top: px(716), color: 'rgba(244,239,227,0.8)', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</p>
          <div style={{ position: 'absolute', left: px(tx), top: px(692), width: '1px', height: '8px', background: 'rgba(244,239,227,0.5)' }} />
        </div>
      ))}
      {flowNodes.map((f) => (
        <div key={f.n}>
          <div style={{ position: 'absolute', left: px(f.cx - 9), top: px(f.cy - 9), width: '18px', height: '18px', borderRadius: '50%', background: f.red ? '#e0492f' : '#e2b54b', border: '3px solid #12151b', boxShadow: `0 0 0 2px ${f.red ? '#e0492f' : '#e2b54b'}, 0 0 14px ${f.red ? 'rgba(224,73,47,0.7)' : 'rgba(226,181,75,0.7)'}` }} />
          <div style={{ position: 'absolute', left: px(f.cx), top: px(f.vTop), width: '1px', height: px(f.vH), background: f.red ? 'rgba(224,73,47,0.6)' : 'rgba(226,181,75,0.6)' }} />
          <p className="gl-bebas" style={{ position: 'absolute', left: px(f.numX), top: px(f.labY + 2), color: f.red ? '#e0492f' : '#e2b54b', fontSize: '18px' }}>{f.n}</p>
          <p style={{ position: 'absolute', left: px(f.txtX), top: px(f.labY), color: '#f4efe3', fontSize: '18px', fontWeight: 500, whiteSpace: 'nowrap' }}>{['知新', '日常', '晋升', '冲段', '沉淀'][Number(f.n) - 1]}</p>
          <p style={{ position: 'absolute', left: px(f.numX), top: px(f.bodyY), width: px(150), color: '#8d99a8', fontSize: '16px', lineHeight: 1.5 }}>{f.body}</p>
        </div>
      ))}
      <p className="gl-serif" style={{ position: 'absolute', left: px(96), top: px(812), color: '#f4efe3', fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>三个真实使用场景，印证同一条曲线</p>
      <p className="gl-bebas" style={{ position: 'absolute', left: px(556), top: px(820), color: '#e2b54b', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>USE SCENARIOS</p>
      {[
        { x: 96, s: 'S1', zh: '通勤碎片 · 10 分钟', en: 'MORNING COMMUTE', b1: '红点直达任务页 → 一键领取 → 即走。', b2: '小目标+即时反馈，碎片时间有完整行为闭环。', tag: '对应设计：红点链路 / 一键领取', red: false },
        { x: 464, s: 'S2', zh: '周末组队 · 长局', en: 'WEEKEND PARTY', b1: '「前往」直达组队玩法，积分名次同步上涨。', b2: '挑战与能力同步升级，正是心流通道的中段。', tag: '对应设计：任务直达 / 排行对比', red: false },
        { x: 832, s: 'S3', zh: '赛季末 · 结算之夜', en: 'SEASON FINALE', b1: '段位定格 → 奖励邮件到账 → 荣誉卡上墙。', b2: '峰终时刻把整季记忆停在最高点，盼下一季。', tag: '对应设计：赛季结算 / 荣誉沉淀', red: true },
      ].map((c) => (
        <div key={c.s} style={{ position: 'absolute', left: px(c.x), top: px(870), width: px(352), height: px(258), background: '#181d25', borderRadius: '16px', overflow: 'hidden' }}>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(16), top: px(16), color: c.red ? '#e0492f' : '#e2b54b', fontSize: '35px' }}>{c.s}</p>
          <p className="gl-serif" style={{ position: 'absolute', left: px(16), top: px(66), color: '#f4efe3', fontSize: '23px', fontWeight: 700, whiteSpace: 'nowrap' }}>{c.zh}</p>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(16), top: px(102), color: '#8d99a8', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{c.en}</p>
          <p style={{ position: 'absolute', left: px(16), top: px(134), width: px(320), color: 'rgba(244,239,227,0.9)', fontSize: '16px', fontWeight: 500, lineHeight: 1.65, whiteSpace: 'nowrap' }}>{c.b1}</p>
          <p style={{ position: 'absolute', left: px(16), top: px(168), width: px(320), color: '#8d99a8', fontSize: '16px', lineHeight: 1.65, whiteSpace: 'nowrap' }}>{c.b2}</p>
          <div style={{ position: 'absolute', left: px(16), top: px(210), padding: '6px 12px', border: `1px solid ${c.red ? 'rgba(224,73,47,0.7)' : 'rgba(226,181,75,0.7)'}`, borderRadius: '999px', display: 'inline-flex' }}>
            <span style={{ color: c.red ? '#e0492f' : '#e2b54b', fontSize: '16px', whiteSpace: 'nowrap' }}>{c.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===================== S7 — 视觉风格 ===================== */
function S7() {
  const reasons = [
    { n: '01', zh: '世界观', y: 236, body: '《庆余年》的庙堂与江湖——金色在中式语境里，本身就是皇权与荣耀的颜色。' },
    { n: '02', zh: '功能性', y: 344, body: '低明度暗灰底板，把唯一的高光留给徽章与奖励——视觉焦点即荣耀本体。' },
    { n: '03', zh: '稀有感', y: 452, body: '金色稀缺使用：白银灰 → 黄金金 → 白金亮，颜色本身成为段位进度的语言。' },
  ];
  const swatches = [
    { x: 654, c: 'radial-gradient(circle,#2a2f38,#12151b)', l1: '暗灰底', l2: '聚光舞台' },
    { x: 758, c: 'radial-gradient(circle,#f4d98a,#e2b54b)', l1: '鎏金', l2: '荣耀 · 可收获' },
    { x: 862, c: 'radial-gradient(circle,#e9edf2,#b9c0cc)', l1: '白银', l2: '段位档位' },
    { x: 966, c: 'radial-gradient(circle,#5fd699,#2aa86a)', l1: '翠绿', l2: '当前 · 标记' },
    { x: 1070, c: 'radial-gradient(circle,#f4745c,#e0492f)', l1: '警示红', l2: '红点 · 催促' },
  ];
  return (
    <div className="glory-sec gl-bg-cream" style={{ height: px(1200), color: '#12151b' }}>
      <Header zh="界面美术风格推导" en="ART DIRECTION — DARK STAGE, GOLDEN HONOR" num="07" dark={false} numLeft={1058} />
      {reasons.map((r) => (
        <div key={r.n}>
          <p className="gl-bebas" style={{ position: 'absolute', left: px(96), top: px(r.y), color: '#e2b54b', fontSize: '35px' }}>{r.n}</p>
          <p className="gl-serif" style={{ position: 'absolute', left: px(146), top: px(r.y + 2), color: '#12151b', fontSize: '24px', fontWeight: 700, whiteSpace: 'nowrap' }}>{r.zh}</p>
          <p style={{ position: 'absolute', left: px(146), top: px(r.y + 38), width: px(404), color: '#4a4538', fontSize: '16px', lineHeight: 1.75 }}>{r.body}</p>
        </div>
      ))}
      <p className="gl-serif" style={{ position: 'absolute', left: px(670), top: px(238), color: '#12151b', fontSize: '21px', fontWeight: 700, whiteSpace: 'nowrap' }}>美术参考功能色</p>
      {swatches.map((s) => (
        <div key={s.l1} style={{ position: 'absolute', left: px(s.x), top: px(284), width: px(104), height: px(91) }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: px(44), height: px(44), borderRadius: '50%', background: s.c, border: '1px solid rgba(18,21,27,0.1)' }} />
          <p style={{ position: 'absolute', left: '50%', top: px(54), transform: 'translateX(-50%)', color: '#12151b', fontSize: '16px', fontWeight: 500, textAlign: 'center', whiteSpace: 'nowrap' }}>{s.l1}</p>
          <p style={{ position: 'absolute', left: '50%', top: px(72), transform: 'translateX(-50%)', color: '#6f6754', fontSize: '16px', textAlign: 'center', whiteSpace: 'nowrap' }}>{s.l2}</p>
        </div>
      ))}
      <p className="gl-serif" style={{ position: 'absolute', left: px(96), top: px(630), color: '#12151b', fontSize: '21px', fontWeight: 700, whiteSpace: 'nowrap' }}>参考 ·《王者荣耀》王者段位徽章焕新</p>
      <div className="gl-shot" style={{ left: px(96), top: px(676), width: px(436), height: px(200), border: '1px solid rgba(18,21,27,0.2)', borderRadius: '10px', boxShadow: '0 10px 26px rgba(0,0,0,0.22)' }}><Img k="s7_a" /></div>
      <div className="gl-shot" style={{ left: px(534), top: px(676), width: px(324), height: px(200), border: '1px solid rgba(18,21,27,0.12)', borderRadius: '8px' }}><Img k="s7_b" /></div>
      <div className="gl-shot" style={{ left: px(860), top: px(676), width: px(318), height: px(200), border: '1px solid rgba(18,21,27,0.12)', borderRadius: '8px' }}><Img k="s7_b" /></div>
      <div className="gl-card-light" style={{ left: px(96), top: px(931), width: px(1082), height: px(193) }}>
        <div className="gl-card-left" style={{ background: '#e0492f' }} />
        <p className="gl-serif" style={{ position: 'absolute', left: px(27), top: px(23), color: '#12151b', fontSize: '23px', fontWeight: 700, whiteSpace: 'nowrap' }}>为什么可借鉴</p>
        <p className="gl-bebas" style={{ position: 'absolute', left: px(27), top: px(56), color: '#a87e22', fontSize: '16px', letterSpacing: '3px' }}>why</p>
        <div style={{ position: 'absolute', left: px(27), top: px(87), color: '#4a4538', fontSize: '16px', lineHeight: 1.7 }}>
          <p>· 同样的「暗场聚光」：深底之上只让金徽发光，玩家视线无处可逃；</p>
          <p>· 星数细分（0-24 / 25-49 / 50-99 / 100+）把顶级段位切成平滑阶梯，与本案「段位 × 积分」的成长粒度一致；</p>
          <p>· 徽章即身份：图形复杂度随段位上升，颜色与形制双重编码荣耀等级。</p>
        </div>
      </div>
    </div>
  );
}

/* ===================== S8 — 封底 ===================== */
function S8() {
  return (
    <div className="glory-sec gl-bg-dark" style={{ height: px(400) }}>
      <div style={{ position: 'absolute', left: px(96), top: 0, width: px(1088), height: px(2), background: '#e2b54b' }} />
      <p className="gl-bebas" style={{ position: 'absolute', left: px(96), top: px(84), fontSize: '101px', letterSpacing: '4px', lineHeight: 1, whiteSpace: 'nowrap', background: 'linear-gradient(90deg,#e2b54b,#f4d98a)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>THANKS FOR WATCHING</p>
      <p className="gl-serif" style={{ position: 'absolute', left: px(96), top: px(226), color: '#f4efe3', fontSize: '23px', fontWeight: 700, whiteSpace: 'nowrap' }}>《庆余年》荣耀赛季 · 交互设计</p>
      <div className="gl-diamond" style={{ left: px(1100), top: px(112), width: px(16), height: px(16), background: '#e0492f' }} />
      {[1060, 1082, 1104].map((x) => (
        <div key={x} style={{ position: 'absolute', left: px(x), top: px(170), width: '6px', height: '6px', borderRadius: '50%', background: '#e2b54b' }} />
      ))}
    </div>
  );
}

/* ===================== Root ===================== */
export function GloryExactCase() {
  return (
    <div className="glory-canvas">
      <S0 /><S1 /><S2 /><S3 /><S4 /><S5A /><S5B /><S5C /><S5D /><S5E /><S5F /><S5G /><S6 /><S7 /><S8 />
    </div>
  );
}

export default GloryExactCase;
