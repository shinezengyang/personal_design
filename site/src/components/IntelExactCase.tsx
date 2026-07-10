import './IntelExactCase.css';

/* ===== Image assets (game screenshots, Figma img_* frames) ===== */
const A = {
  // S4 — 7 state-flow cards
  s4_1: 'https://www.figma.com/api/mcp/asset/13cf647e-30e9-41e5-b1bd-e301f95af1d7',
  s4_2: 'https://www.figma.com/api/mcp/asset/9b1cdbb4-6942-4445-a24c-388c0c65118f',
  s4_3: 'https://www.figma.com/api/mcp/asset/865c8748-b1f2-4fe0-9f61-44d4cc654065',
  s4_4: 'https://www.figma.com/api/mcp/asset/110b48d8-9a0f-4189-bd5c-b1041f43ece8',
  s4_5: 'https://www.figma.com/api/mcp/asset/3d5fd01a-7214-4c3d-84b9-f3bd397e4074',
  s4_6: 'https://www.figma.com/api/mcp/asset/cf85585e-0d81-4e8c-ad7c-19ed36b6baa1',
  s4_7: 'https://www.figma.com/api/mcp/asset/c07a73e8-3821-45e8-8b16-d9d282a6ecf1',
  // S5A — 8 catalog/detail screenshots
  s5_catalog:  'https://www.figma.com/api/mcp/asset/305bc8dc-8e91-4f42-93ad-b952759f788a', // 9680:2044
  s5_accord:   'https://www.figma.com/api/mcp/asset/f82887a2-8858-42aa-ab05-8895efffe040', // 9680:2045
  s5_intel1:   'https://www.figma.com/api/mcp/asset/2955d6f4-24a6-4499-a862-ef51355987c9', // 9714:3188
  s5_intel2:   'https://www.figma.com/api/mcp/asset/5b85937c-bae5-4bbd-9f99-fd47842b860f', // 9714:3202
  s5_dungeon:  'https://www.figma.com/api/mcp/asset/67baaf69-f34a-4aa4-85be-e30459581b9b', // 9712:3076
  s5_revive:   'https://www.figma.com/api/mcp/asset/dc180ebd-dfc3-4d63-9450-b697bdbe92b4', // 9712:3087
  s5_unlock:   'https://www.figma.com/api/mcp/asset/c82b79c5-fc1f-427f-8e9d-d9f659279a06', // 9714:3260
  s5_archive:  'https://www.figma.com/api/mcp/asset/bc43bd57-501d-4fbf-998d-50bca264b7e3', // 9714:3271
  // S7 — reference image
  s7_ref: 'https://www.figma.com/api/mcp/asset/91eaddc8-98d3-49d5-be5d-a706317fd969',
};

const px = (n: number) => `${n}px`;

function Img({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" />;
}

/* ===== Shared section header (number watermark + rule + eyebrow + title) ===== */
function Header({
  num, eyebrow, title, ruleTop = 96, eyebrowTop = 112, titleTop = 142,
}: {
  num: string; eyebrow: string; title: string;
  ruleTop?: number; eyebrowTop?: number; titleTop?: number;
}) {
  return (
    <>
      <p className="il-abs il-bebas il-wm" style={{ left: px(1000), top: px(70) }}>{num}</p>
      <div className="il-abs il-rule" style={{ left: px(110), top: px(ruleTop), width: px(1060) }} />
      <p className="il-abs il-bebas il-eyebrow" style={{ left: px(110), top: px(eyebrowTop) }}>{eyebrow}</p>
      <h2 className="il-abs il-serif il-h2" style={{ left: px(110), top: px(titleTop) }}>{title}</h2>
    </>
  );
}

/* =================== S0 · 封面 =================== */
function S0() {
  return (
    <div className="intel-sec" style={{ height: px(900) }}>
      {/* decorative gold orbit rings + node dot (top-right) — Figma nodes
          9703:2148 / 9703:2152 (two concentric circles), 9711:2990 (tilted
          orbit ellipse), 9711:2991 (20px gold node dot) */}
      <svg className="il-abs" style={{ left: 0, top: 0, width: px(1280), height: px(900), pointerEvents: 'none' }} viewBox="0 0 1280 900" fill="none">
        {/* concentric rings — centres at (1170,402) / (1170,402), radii 340 / 326 */}
        <circle cx="1170" cy="402" r="340" stroke="rgba(226,181,75,0.45)" strokeWidth="1" />
        <circle cx="1170" cy="402" r="326" stroke="rgba(226,181,75,0.30)" strokeWidth="1" />
        {/* large tilted orbit ellipse: bbox 419,266 → 1279,593 (860×327),
            major axis 430, minor 163.5, centre (849,429.5), rotated ~-22° */}
        <ellipse cx="849" cy="429.5" rx="430" ry="163.5" transform="rotate(-22 849 429.5)" stroke="rgba(226,181,75,0.45)" strokeWidth="1" />
        {/* node dot on the orbit */}
        <circle cx="1170" cy="593" r="10" fill="#e2b54b" />
      </svg>

      <p className="il-abs il-bebas il-nowrap" style={{ left: px(104), top: px(117), fontSize: px(210), letterSpacing: '2px', color: 'transparent', WebkitTextStroke: '1px rgba(244,239,227,0.85)', lineHeight: 'normal' }}>DESIGN</p>
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(104), top: px(327), fontSize: px(210), letterSpacing: '2px', color: '#e2b54b', lineHeight: 'normal' }}>PROCESS</p>
      <h1 className="il-abs il-serif il-nowrap" style={{ left: px(110), top: px(542), fontSize: px(128), fontWeight: 900, letterSpacing: '4px', color: '#e2b54b', lineHeight: 'normal' }}>情报簿</h1>
      <div className="il-abs" style={{ left: px(110), top: px(726), width: px(120), height: px(3), background: '#b43a2e' }} />
      <p className="il-abs il-sans" style={{ left: px(110), top: px(745), width: px(330), fontSize: px(32), letterSpacing: '1px', color: '#8b93a0', lineHeight: 'normal' }}>章回制情报玩法</p>
    </div>
  );
}

/* =================== S1 · 项目概述 =================== */
function S1() {
  const parts = [
    { top: 374, ruleTop: 358, label: '整体布局改版 · 书脊目录方案' },
    { top: 430, ruleTop: 414, label: '章节全状态拆解与按钮规则' },
    { top: 486, ruleTop: 470, label: '红点 · 引导 · 失败兜底链路' },
  ];
  const deliv = [
    { x: 110, y: 647, num: '01', zh: '书脊式目录 · 八章', en: 'SPINE CATALOG' },
    { x: 470, y: 647, num: '02', zh: '章节手风琴展开', en: 'ACCORDION VIEW' },
    { x: 830, y: 647, num: '03', zh: '情报详情 · 四栏', en: 'INTEL DETAIL ×4' },
    { x: 110, y: 757, num: '04', zh: '任务追踪 · 自动寻路', en: 'AUTO PATHFIND' },
    { x: 470, y: 757, num: '05', zh: '挑战 · 归档盖章', en: 'STAMP & ARCHIVE' },
    { x: 830, y: 757, num: '06', zh: '红点 · 引导 · 复活兜底', en: 'GUIDE & FALLBACK' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(900) }}>
      <Header num="01" eyebrow="OVERVIEW" title="项目概述" />
      <p className="il-abs il-serif il-nowrap" style={{ left: px(110), top: px(250), fontSize: px(34), fontWeight: 900, letterSpacing: '1px', color: '#e2b54b' }}>情报簿整体界面布局改版优化</p>
      <div className="il-abs il-sans" style={{ left: px(110), top: px(307), width: px(520), fontSize: px(18), lineHeight: '34px', color: '#cccfd9' }}>
        <p style={{ margin: 0 }}>情报簿是章回制的江湖人物情报玩法：八位人物各占一章，玩家按顺序追查三条情报、解锁并挑战「情报目标」，挑战成功盖章归档、自动翻向下一章。</p>
        <p style={{ margin: '34px 0 0' }}>本次改版把目录、情报、挑战三层信息收纳进同一本「卷宗」，用书脊式目录与手风琴展开，重组全部动线。</p>
      </div>

      {/* PART list (right) */}
      <p className="il-abs il-bebas" style={{ left: px(700), top: px(312), fontSize: px(18), letterSpacing: '3px', color: '#e2b54b' }}>PART</p>
      {parts.map((p) => (
        <div key={p.top}>
          <div className="il-abs il-d10" style={{ left: px(700), top: px(p.ruleTop), width: px(470) }} />
          <div className="il-abs il-dot" style={{ left: px(686), top: px(p.top + 8), width: px(6), height: px(6) }} />
          <p className="il-abs il-sans" style={{ left: px(700), top: px(p.top), width: px(470), fontSize: px(18), fontWeight: 500, color: '#f4efe3' }}>{p.label}</p>
        </div>
      ))}
      <div className="il-abs il-d10" style={{ left: px(700), top: px(526), width: px(470) }} />

      {/* DELIVERABLES */}
      <p className="il-abs il-bebas" style={{ left: px(110), top: px(595), fontSize: px(18), letterSpacing: '3px', color: '#e2b54b' }}>DELIVERABLES</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(238), top: px(589), fontSize: px(24), fontWeight: 900, color: '#f4efe3' }}>交付内容一览</p>
      {deliv.map((d) => (
        <div key={d.num}>
          <div className="il-abs il-d12" style={{ left: px(d.x), top: px(d.y), width: px(320) }} />
          <p className="il-abs il-bebas" style={{ left: px(d.x), top: px(d.y + 12), fontSize: px(30), color: '#e2b54b' }}>{d.num}</p>
          <p className="il-abs il-sans il-nowrap" style={{ left: px(d.x + 52), top: px(d.y + 14), fontSize: px(19), fontWeight: 500, color: '#f4efe3' }}>{d.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(d.x + 52), top: px(d.y + 42), fontSize: px(14), letterSpacing: '1px', color: '#8b93a0' }}>{d.en}</p>
        </div>
      ))}
    </div>
  );
}

/* =================== S2 · 玩法核心 =================== */
function S2() {
  const rows = [
    { ruleTop: 250, zh: '目标', en: 'GOAL', txtTop: 312, txt: '八位江湖人物排成通缉名单，封面在置灰与彩色之间，永远有「下一个要查的人」。' },
    { ruleTop: 380, zh: '行动', en: 'ACTION', txtTop: 442, txt: '三条情报顺序解锁、一条一个任务 —— 前往键直达副本，行动永远只差一次点击。' },
    { ruleTop: 510, zh: '反馈', en: 'FEEDBACK', txtTop: 572, txt: '道具打勾、修为变色、归档盖章 —— 每一步都有明确的视觉回执。' },
    { ruleTop: 640, zh: '展示', en: 'DISPLAY', txtTop: 702, txt: '盖过章的章节即卷宗成就：情报簿本身就是一面可翻阅的战绩墙。' },
  ];
  // loop nodes — ellipse top-left (size 100), absolute to section per Figma
  const nodes = [
    { x: 330, y: 282, num: '01', l1: '翻开情报簿', l2: '锁定目标' },
    { x: 505.9453125, y: 409.8318328857422, num: '02', l1: '顺序追查', l2: '三条情报' },
    { x: 438.7421875, y: 616.6682739257812, num: '03', l1: '集齐解锁', l2: '挑战资格' },
    { x: 221.2578125, y: 616.6682739257812, num: '04', l1: '挑战', l2: '情报目标' },
    { x: 154.0546875, y: 409.8318328857422, num: '05', l1: '盖章归档', l2: '翻下一章' },
  ];
  // 8 diamond markers on the dashed circle (centres), first gold then red
  const diamonds = [
    { cx: 380.5, cy: 259.1, gold: true },
    { cx: 562.5, cy: 334.5, gold: false },
    { cx: 637.9, cy: 516.5, gold: false },
    { cx: 562.5, cy: 698.5, gold: false },
    { cx: 380.5, cy: 773.9, gold: false },
    { cx: 198.5, cy: 698.5, gold: false },
    { cx: 123.1, cy: 516.5, gold: false },
    { cx: 198.5, cy: 334.5, gold: false },
  ];
  // arrow connectors between node edges (centres clockwise 01→02→03→04→05→01)
  const nodeC = nodes.map((n) => ({ cx: n.x + 50, cy: n.y + 50 }));
  const R = 56; // clear node circle (r50) + small gap
  const arrows = nodeC.map((a, i) => {
    const b = nodeC[(i + 1) % nodeC.length];
    const dx = b.cx - a.cx, dy = b.cy - a.cy;
    const len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
    return { x1: a.cx + ux * R, y1: a.cy + uy * R, x2: b.cx - ux * R, y2: b.cy - uy * R };
  });
  const drivers = [
    { x: 110, bar: '#e2b54b', zh: '叙事驱动', zhC: '#e2b54b', en: 'NARRATIVE', w: 320, txt: '人物立绘、座右铭、情报文案把任务包进故事 —— 玩家追的不是进度条，是一个人的下落。' },
    { x: 470, bar: '#e2b54b', zh: '成长驱动', zhC: '#e2b54b', en: 'GROWTH', w: 340, txt: '推荐修为是每章硬门槛：差距用红绿色直接标出，练到了再来，挑战永远「跳一跳够得着」。' },
    { x: 830, bar: '#c74d3d', zh: '收集驱动', zhC: '#c74d3d', en: 'COLLECTION', w: 320, txt: '归档印章逐章累积，八枚印盖满一本卷宗 —— 印章既是结案凭证，也是下一章入场券。' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(1200) }}>
      <Header num="02" eyebrow="CORE LOOP" title="玩法核心 · 章回循环" />

      {/* right column rows */}
      {rows.map((r) => (
        <div key={r.zh}>
          <div className="il-abs il-d12" style={{ left: px(748), top: px(r.ruleTop), width: px(422) }} />
          <p className="il-abs il-serif il-nowrap" style={{ left: px(748), top: px(r.ruleTop + 18), fontSize: px(26), fontWeight: 900, color: '#e2b54b' }}>{r.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(830), top: px(r.ruleTop + 28), fontSize: px(16), letterSpacing: '1px', color: '#8b93a0' }}>{r.en}</p>
          <p className="il-abs il-sans" style={{ left: px(748), top: px(r.txtTop), width: px(422), fontSize: px(16), lineHeight: '25px', color: '#cccfd9' }}>{r.txt}</p>
        </div>
      ))}

      {/* loop diagram — dashed circle (121,264 · 515), diamonds, arrows */}
      <svg className="il-abs" style={{ left: 0, top: 0, width: px(1280), height: px(1200), pointerEvents: 'none' }} viewBox="0 0 1280 1200" fill="none">
        <defs>
          <marker id="ilLoopArrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#e2b54b" />
          </marker>
        </defs>
        <circle cx="378.5" cy="521.5" r="257.5" stroke="rgba(226,181,75,0.25)" strokeWidth="1" strokeDasharray="3 6" />
        {arrows.map((a, i) => (
          <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="rgba(226,181,75,0.7)" strokeWidth="1.5" markerEnd="url(#ilLoopArrow)" />
        ))}
        {diamonds.map((d, i) => (
          <rect key={i} x={d.cx - 5.72} y={d.cy - 5.72} width="11.44" height="11.44"
            transform={`rotate(45 ${d.cx} ${d.cy})`}
            fill={d.gold ? '#e2b54b' : 'rgba(180,58,46,0.7)'} />
        ))}
      </svg>
      {nodes.map((n) => (
        <div key={n.num}>
          <div className="il-loop-node" style={{ left: px(n.x), top: px(n.y) }}>
            <span className="il-bebas" style={{ fontSize: px(22), color: '#e2b54b' }}>{n.num}</span>
            <span className="il-sans" style={{ fontSize: px(15), fontWeight: 500, color: '#f4efe3', lineHeight: '19px', marginTop: '4px' }}>{n.l1}<br />{n.l2}</span>
          </div>
        </div>
      ))}
      <div className="il-loop-center" style={{ left: px(314), top: px(451) }}>
        <span className="il-serif" style={{ fontSize: px(28), fontWeight: 900, color: '#e2b54b' }}>情报簿</span>
        <span className="il-bebas" style={{ fontSize: px(13), letterSpacing: '1px', color: '#8b93a0', marginTop: '6px' }}>CHAPTER LOOP</span>
      </div>

      {/* THREE DRIVERS */}
      <p className="il-abs il-bebas" style={{ left: px(110), top: px(864), fontSize: px(18), letterSpacing: '3px', color: '#e2b54b' }}>THREE DRIVERS</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(290), top: px(858), fontSize: px(24), fontWeight: 900, color: '#f4efe3' }}>章回循环的三大体验驱动</p>
      {drivers.map((d) => (
        <div key={d.zh}>
          <div className="il-abs" style={{ left: px(d.x), top: px(914), width: px(320), height: px(2), background: d.bar }} />
          <p className="il-abs il-serif il-nowrap" style={{ left: px(d.x), top: px(944), fontSize: px(24), fontWeight: 900, color: d.zhC }}>{d.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(d.x), top: px(984), fontSize: px(15), letterSpacing: '1px', color: '#8b93a0' }}>{d.en}</p>
          <p className="il-abs il-sans" style={{ left: px(d.x), top: px(1018), width: px(d.w), fontSize: px(16), lineHeight: '25px', color: '#cccfd9' }}>{d.txt}</p>
        </div>
      ))}
      {/* growth bars deco */}
      <div className="il-abs" style={{ left: px(732), top: px(962), width: px(10), height: px(18), borderRadius: px(2), background: '#e2b54b' }} />
      <div className="il-abs" style={{ left: px(748), top: px(948), width: px(10), height: px(32), borderRadius: px(2), background: '#e2b54b' }} />
      <div className="il-abs" style={{ left: px(764), top: px(934), width: px(10), height: px(46), borderRadius: px(2), background: '#e2b54b' }} />
      {/* narrative quote mark */}
      <p className="il-abs il-serif" style={{ left: px(338), top: px(929), fontSize: px(46), fontWeight: 900, color: '#e2b54b' }}>『』</p>
      {/* collection seal */}
      <div className="il-abs" style={{ left: px(1092), top: px(937), width: px(44), height: px(44), borderRadius: '50%', border: '1.5px solid #b43a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="il-serif" style={{ fontSize: px(25), fontWeight: 700, color: '#b43a2e' }}>印</span>
      </div>
    </div>
  );
}

/* =================== S3 · 信息架构 =================== */
function S3() {
  const states = [
    { x: 110, zh: '锁定 · 置灰', color: '#8b93a0', border: 'rgba(139,147,160,0.6)' },
    { x: 300, zh: '追查中', color: '#f4efe3', border: 'rgba(244,239,227,0.6)' },
    { x: 490, zh: '可领取', color: '#e2b54b', border: 'rgba(226,181,75,0.6)' },
    { x: 680, zh: '可挑战', color: '#e2b54b', border: 'rgba(226,181,75,0.6)' },
    { x: 870, zh: '已归档', color: '#c74d3d', border: 'rgba(199,77,61,0.6)' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(900) }}>
      <Header num="03" eyebrow="SYSTEM MAP" title="信息架构" />

      {/* three layers */}
      <div className="il-abs il-d25" style={{ left: px(110), top: px(265), width: px(280) }} />
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(110), top: px(279), fontSize: px(15), letterSpacing: '1px', color: '#8b93a0' }}>LAYER 1 · ENTRY</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(110), top: px(309), fontSize: px(32), fontWeight: 900, color: '#f4efe3' }}>大世界主界面</p>
      <p className="il-abs il-sans" style={{ left: px(110), top: px(363), width: px(280), fontSize: px(16), color: '#8b93a0' }}>从主界面「情报」入口进入</p>
      <div className="il-abs il-bebas" style={{ left: px(410), top: px(320), width: px(70), fontSize: px(24), color: '#e2b54b', textAlign: 'center' }}>→</div>

      <div className="il-abs" style={{ left: px(505), top: px(265), width: px(280), height: px(2), background: '#e2b54b' }} />
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(505), top: px(279), fontSize: px(15), letterSpacing: '1px', color: '#e2b54b' }}>LAYER 2 · SHELL</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(505), top: px(309), fontSize: px(32), fontWeight: 900, color: '#e2b54b' }}>情报簿</p>
      <p className="il-abs il-sans" style={{ left: px(505), top: px(363), width: px(280), fontSize: px(16), lineHeight: '24px', color: '#cccfd9' }}>一本「卷宗」聚合壳 —— 目录 / 情报 / 挑战三层收进同一本</p>
      <div className="il-abs il-bebas" style={{ left: px(800), top: px(320), width: px(70), fontSize: px(24), color: '#e2b54b', textAlign: 'center' }}>→</div>

      <div className="il-abs il-d25" style={{ left: px(900), top: px(265), width: px(270) }} />
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(900), top: px(279), fontSize: px(15), letterSpacing: '1px', color: '#8b93a0' }}>LAYER 3 · CONTENT</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(900), top: px(309), fontSize: px(32), fontWeight: 900, color: '#f4efe3' }}>章节内容</p>
      <p className="il-abs il-sans" style={{ left: px(900), top: px(365), width: px(270), fontSize: px(16), fontWeight: 500, color: '#f4efe3' }}>· 目录 · 八章书脊</p>
      <p className="il-abs il-sans" style={{ left: px(900), top: px(395), width: px(270), fontSize: px(16), fontWeight: 500, color: '#f4efe3' }}>· 章节手风琴展开</p>
      <p className="il-abs il-sans" style={{ left: px(900), top: px(425), width: px(270), fontSize: px(16), fontWeight: 500, color: '#f4efe3' }}>· 情报详情 · 四栏</p>

      {/* state machine */}
      <div className="il-abs il-d12" style={{ left: px(110), top: px(505), width: px(1060) }} />
      <p className="il-abs il-bebas" style={{ left: px(110), top: px(521), fontSize: px(18), letterSpacing: '3px', color: '#e2b54b' }}>STATE MACHINE</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(300), top: px(515), fontSize: px(24), fontWeight: 900, color: '#f4efe3' }}>每章 = 一台五态状态机</p>
      {states.map((s, i) => (
        <div key={s.x}>
          <div className="il-pill" style={{ left: px(s.x), top: px(585), borderColor: s.border, color: s.color }}>{s.zh}</div>
          {i < states.length - 1 && (
            <div className="il-abs il-bebas" style={{ left: px(s.x + 158), top: px(597), width: px(28), color: '#e2b54b', textAlign: 'center', fontSize: px(20) }}>→</div>
          )}
        </div>
      ))}

      {/* red-dot + zero-lost */}
      <div className="il-abs il-d12" style={{ left: px(110), top: px(705), width: px(1060) }} />
      <p className="il-abs il-sans il-nowrap" style={{ left: px(110), top: px(723), fontSize: px(18), fontWeight: 500, color: '#e2b54b' }}>红点三级链路</p>
      <p className="il-abs il-sans" style={{ left: px(320), top: px(723), width: px(850), fontSize: px(17), color: '#cccfd9' }}>大世界入口 → 章节书脊 → 领取按钮；奖励在屏幕外时，红点箭头指引滚动方向。</p>
      <div className="il-abs il-d12" style={{ left: px(110), top: px(791), width: px(1060) }} />
      <p className="il-abs il-sans il-nowrap" style={{ left: px(110), top: px(809), fontSize: px(18), fontWeight: 500, color: '#e2b54b' }}>新手零迷路</p>
      <p className="il-abs il-sans" style={{ left: px(320), top: px(809), width: px(850), fontSize: px(17), color: '#cccfd9' }}>首次进入由系统引导自动展开第一章 —— 新手的第一眼就是「该追谁」。</p>
    </div>
  );
}

/* =================== S4 · 章节状态流 =================== */
function S4() {
  const intro = [
    { x: 110, zh: '顺序解锁', en: 'SEQUENCE', enX: 200, txt: '「未知 · 需完成上一条情报」把三条情报串成连载 —— 好奇心缺口一条牵着一条走。' },
    { x: 473, zh: '自动衔接', en: 'AUTO FLOW', enX: 563, txt: '任务完成自动打开界面、归档后自动翻向下一章 —— 系统替玩家翻页，循环没有断点。' },
    { x: 836, zh: '盖章仪式', en: 'STAMP RITUAL', enX: 926, txt: '归档印章配专属动效：每章的结案都有一记可见可感的落印，峰终时刻绝不沉默。' },
  ];
  const cards = [
    { x: 96,  y: 448, img: A.s4_1, st: 'ST.1', stC: '#e2b54b', label: '目录 · 红点指引第一章' },
    { x: 475, y: 448, img: A.s4_2, st: 'ST.2', stC: '#e2b54b', label: '情报详情 · 前往追查' },
    { x: 854, y: 448, img: A.s4_3, st: 'ST.3', stC: '#e2b54b', label: '副本 · 游历追踪 + 自动寻路' },
    { x: 854, y: 728, img: A.s4_4, st: 'ST.4', stC: '#e2b54b', label: '情报完成 · 领取（红点）' },
    { x: 475, y: 728, img: A.s4_5, st: 'ST.5', stC: '#e2b54b', label: '三条齐 · 挑战解锁' },
    { x: 96,  y: 728, img: A.s4_6, st: 'ST.6', stC: '#b43a2e', label: '挑战成功 · 归档盖章' },
    { x: 475, y: 1005, img: A.s4_7, st: 'ST.7', stC: '#b43a2e', label: '自动翻向下一章' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(1300) }}>
      <Header num="04" eyebrow="FLOW" title="状态流程" />
      {intro.map((c) => (
        <div key={c.x}>
          <div className="il-abs il-d14" style={{ left: px(c.x), top: px(250), width: px(333) }} />
          <p className="il-abs il-serif il-nowrap" style={{ left: px(c.x), top: px(266), fontSize: px(20), fontWeight: 900, color: '#e2b54b' }}>{c.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(c.enX), top: px(275), fontSize: px(14), letterSpacing: '1px', color: '#8b93a0' }}>{c.en}</p>
          <p className="il-abs il-sans" style={{ left: px(c.x), top: px(306), width: px(333), fontSize: px(16), lineHeight: '24px', color: '#cccfd9' }}>{c.txt}</p>
        </div>
      ))}

      {/* connector arrows (decorative) */}
      <svg className="il-abs" style={{ left: 0, top: 0, width: px(1280), height: px(1300), pointerEvents: 'none' }} fill="none">
        <defs>
          <marker id="ilArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(141,149,168,0.8)" />
          </marker>
        </defs>
        <line x1="146" y1="541" x2="470" y2="541" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" markerEnd="url(#ilArrow)" />
        <line x1="826" y1="541" x2="868" y2="600" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" markerEnd="url(#ilArrow)" />
        <line x1="1019" y1="669" x2="1019" y2="724" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" markerEnd="url(#ilArrow)" />
        <line x1="1023" y1="821" x2="809" y2="821" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" markerEnd="url(#ilArrow)" />
        <path d="M747,841 C600,900 520,860 460,899" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" fill="none" markerEnd="url(#ilArrow)" />
        <path d="M428,914 C400,1000 430,1060 470,1098" stroke="rgba(141,149,168,0.6)" strokeWidth="1.5" fill="none" markerEnd="url(#ilArrow)" />
      </svg>
      <p className="il-abs il-sans" style={{ left: px(435), top: px(512), fontSize: px(16), color: '#8d95a8' }}>展开</p>
      <p className="il-abs il-sans" style={{ left: px(813), top: px(512), fontSize: px(16), color: '#8d95a8' }}>前往</p>
      <p className="il-abs il-sans" style={{ left: px(1034), top: px(689), fontSize: px(16), color: '#8d95a8' }}>任务完成 · 界面自动打开</p>
      <p className="il-abs il-sans" style={{ left: px(813.5), top: px(789), fontSize: px(16), color: '#8d95a8', transform: 'translateX(-50%)' }}>集齐</p>
      <p className="il-abs il-sans" style={{ left: px(450.5), top: px(789), fontSize: px(16), color: '#8d95a8', transform: 'translateX(-50%)' }}>成功</p>
      <p className="il-abs il-sans" style={{ left: px(142), top: px(1113), fontSize: px(16), color: '#8d95a8' }}>领取章节奖励 · 内容左滑，自动展开下一章</p>

      {cards.map((c) => (
        <div key={c.st}>
          <div className="il-shot" style={{ left: px(c.x), top: px(c.y), width: px(330), height: px(186), border: `1.5px solid ${c.stC === '#b43a2e' ? 'rgba(180,58,46,0.9)' : 'rgba(226,181,75,0.9)'}` }}>
            <Img src={c.img} alt={c.label} />
          </div>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(c.x), top: px(c.y + 196), fontSize: px(21), color: c.stC }}>{c.st}</p>
          <p className="il-abs il-sans il-nowrap" style={{ left: px(c.x + 50), top: px(c.y + 198), fontSize: px(16), fontWeight: 500, color: '#f4efe3' }}>{c.label}</p>
        </div>
      ))}
    </div>
  );
}

/* =================== S5A · 目录手风琴 (tall) =================== */
type Rationale = { x: number; ruleTop: number; zh: string; en: string; enX: number; txt: string };
type Note = { x: number; ruleTop: number; mark: string; txt: string; w?: number };
type Badge = { x: number; y: number; n: string };

function ShotPanel({ x, y, w, h, img, alt, badges }: { x: number; y: number; w: number; h: number; img: string; alt: string; badges: Badge[] }) {
  return (
    <>
      <div className="il-shot" style={{ left: px(x), top: px(y), width: px(w), height: px(h) }}>
        <Img src={img} alt={alt} />
      </div>
      {badges.map((b, i) => (
        <div key={i} className="il-badge" style={{ left: px(b.x), top: px(b.y) }}>{b.n}</div>
      ))}
    </>
  );
}

function S5Block({
  title, titleTop, titleX, titleSize = 40, rationale, panels, caps, notes,
}: {
  title: string; titleTop: number; titleX: number; titleSize?: number;
  rationale: Rationale[];
  panels: React.ReactNode;
  caps: { x: number; top: number; txt: string }[];
  notes: Note[];
}) {
  return (
    <>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(titleX), top: px(titleTop), fontSize: px(titleSize), fontWeight: 900, color: '#f4efe3' }}>{title}</p>
      {rationale.map((r) => (
        <div key={r.zh}>
          <div className="il-abs il-rule" style={{ left: px(r.x), top: px(r.ruleTop), width: px(333) }} />
          <p className="il-abs il-serif il-nowrap" style={{ left: px(r.x), top: px(r.ruleTop + 14), fontSize: px(18), fontWeight: 900, color: '#e2b54b' }}>{r.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(r.enX), top: px(r.ruleTop + 23), fontSize: px(13), letterSpacing: '1px', color: '#8b93a0' }}>{r.en}</p>
          <p className="il-abs il-sans" style={{ left: px(r.x), top: px(r.ruleTop + 54), width: px(333), fontSize: px(16), lineHeight: '23px', color: '#cccfd9' }}>{r.txt}</p>
        </div>
      ))}
      {panels}
      {caps.map((c) => (
        <p key={c.x + '-' + c.top} className="il-abs il-sans il-nowrap" style={{ left: px(c.x), top: px(c.top), fontSize: px(15), color: '#8b93a0' }}>{c.txt}</p>
      ))}
      {notes.map((n) => (
        <div key={n.x + '-' + n.ruleTop}>
          <div className="il-abs il-rule" style={{ left: px(n.x), top: px(n.ruleTop), width: px(n.w ?? 510) }} />
          <p className="il-abs il-serif" style={{ left: px(n.x), top: px(n.ruleTop + 14), fontSize: px(15), color: '#e2b54b' }}>{n.mark}</p>
          <p className="il-abs il-sans" style={{ left: px(n.x + 34), top: px(n.ruleTop + 13), width: px((n.w ?? 510) - 34), fontSize: px(15), lineHeight: '22px', color: '#cccfd9' }}>{n.txt}</p>
        </div>
      ))}
    </>
  );
}

function S5A() {
  return (
    <div className="intel-sec" style={{ height: px(3900) }}>
      <p className="il-abs il-bebas il-wm" style={{ left: px(1000), top: px(60) }}>05</p>
      <div className="il-abs il-rule" style={{ left: px(110), top: px(90), width: px(1060) }} />
      <p className="il-abs il-bebas il-eyebrow" style={{ left: px(110), top: px(112), letterSpacing: '2px' }}>DESIGN RATIONALE</p>
      <h2 className="il-abs il-serif il-h2" style={{ left: px(110), top: px(142) }}>逐屏解析</h2>

      {/* ---- Block 1 · catalog & accordion ---- */}
      <S5Block
        title="书脊目录与手风琴 · 一眼八章，一翻看人"
        titleTop={305} titleX={103}
        rationale={[
          { x: 110, ruleTop: 397, zh: '书卷隐喻', en: 'BOOK METAPHOR', enX: 196, txt: '章节是书脊、展开像翻页、结案要盖章 —— 熟悉的实物心智模型，结构无需解释。' },
          { x: 473, ruleTop: 397, zh: '合理默认', en: 'GOOD DEFAULT', enX: 559, txt: '打开即自动展开「当前挑战」章节：最常用的那一页，永远不需要自己找。' },
          { x: 836, ruleTop: 397, zh: '渐进披露', en: 'DISCLOSURE', enX: 922, txt: '锁定章节只露条件不露内容：该知道的先看见，不该看的不抢注意力。' },
        ]}
        panels={<>
          <ShotPanel x={86} y={573} w={536} h={304} img={A.s5_catalog} alt="情报簿目录（交互稿原图）"
            badges={[{ x: 162, y: 614, n: '1' }, { x: 352, y: 585, n: '2' }, { x: 430, y: 785, n: '3' }]} />
          <ShotPanel x={658} y={573} w={536} h={304} img={A.s5_accord} alt="章节手风琴展开态（交互稿原图）"
            badges={[{ x: 712, y: 615, n: '4' }, { x: 823, y: 662, n: '5' }, { x: 834, y: 822, n: '6' }]} />
        </>}
        caps={[
          { x: 86, top: 885, txt: '▲ 情报簿目录（交互稿原图）' },
          { x: 658, top: 885, txt: '▲ 章节手风琴展开态（交互稿原图）' },
        ]}
        notes={[
          { x: 86, ruleTop: 919, mark: '①', txt: '红点落在第一章书脊 —— 有奖可领，开门即知' },
          { x: 86, ruleTop: 983, mark: '②', txt: '八位人物以「书脊」纵排 —— 目录即通缉名单' },
          { x: 86, ruleTop: 1047, mark: '③', txt: '后续章节置灰锁定，彩色 = 可点击' },
          { x: 658, ruleTop: 919, mark: '④', txt: '点击章节原地展开 —— 当前挑战章节默认自动展开' },
          { x: 658, ruleTop: 983, mark: '⑤', txt: '立绘 · 座右铭 · 挑战奖励均为运营可配置' },
          { x: 658, ruleTop: 1047, mark: '⑥', txt: '解锁条件前置：等级达成 45 级 ✓ · 完成主线第二章' },
        ]}
      />

      {/* ---- Block 2 · intel detail ---- */}
      <S5Block
        title="情报详情 · 三条线索，一位目标"
        titleTop={1210} titleX={108} titleSize={38}
        rationale={[
          { x: 108, ruleTop: 1300, zh: '好奇心缺口', en: 'CURIOSITY GAP', enX: 204, txt: '「未知」栏只给一行提示：看得见有后续、看不见是什么 —— 缺口本身就是继续的理由。' },
          { x: 471, ruleTop: 1300, zh: '期望前置', en: 'EXPECT GATE', enX: 567, txt: '推荐修为提前亮出并用红绿标定差距：练不够先别上，挫败被挡在挑战之前。' },
          { x: 834, ruleTop: 1300, zh: '即时反馈', en: 'FEEDBACK', enX: 930, txt: '领取出 Toast、道具打绿勾、按钮态即时替换 —— 每个动作 0.1 秒内被界面回应。' },
        ]}
        panels={<>
          <ShotPanel x={86} y={1476} w={536} h={302} img={A.s5_intel1} alt="情报详情 · 初始态（交互稿原图）"
            badges={[{ x: 216, y: 1580, n: '1' }, { x: 274, y: 1609, n: '2' }, { x: 238, y: 1711, n: '3' }, { x: 156, y: 1745, n: '4' }]} />
          <ShotPanel x={654} y={1476} w={536} h={302} img={A.s5_intel2} alt="情报详情 · 推进态（交互稿原图）"
            badges={[{ x: 1052, y: 1564, n: '5' }, { x: 726, y: 1717, n: '6' }, { x: 901, y: 1739, n: '7' }]} />
        </>}
        caps={[
          { x: 86, top: 1786, txt: '▲ 情报详情 · 初始态（交互稿原图）' },
          { x: 654, top: 1786, txt: '▲ 情报详情 · 推进态（交互稿原图）' },
        ]}
        notes={[
          { x: 86, ruleTop: 1818, mark: '①', txt: '情报标题 + 文案可配置 —— 任务包着故事' },
          { x: 86, ruleTop: 1878, mark: '②', txt: '「未知 · 需完成上一条情报」—— 顺序解锁' },
          { x: 86, ruleTop: 1938, mark: '③', txt: '推荐修为颜色编码：达标绿 / 未达红' },
          { x: 86, ruleTop: 1998, mark: '④', txt: '前往 · 点击自动关闭界面直达任务' },
          { x: 654, ruleTop: 1818, mark: '⑤', txt: '情报目标立绘剪影 ——「收集完毕后可挑战此人」' },
          { x: 654, ruleTop: 1878, mark: '⑥', txt: '完成后变「领取」+ 红点，Toast 确认、道具打勾' },
          { x: 654, ruleTop: 1938, mark: '⑦', txt: '下一条情报同步解锁为「前往」—— 接力不断' },
        ]}
      />

      {/* ---- Block 3 · task path / fallback ---- */}
      <S5Block
        title="任务链路 · 从「前往」到目标，零迷路"
        titleTop={2160} titleX={86} titleSize={38}
        rationale={[
          { x: 86, ruleTop: 2250, zh: '最短路径', en: 'ZERO FRICTION', enX: 182, txt: '「前往」一键直达：关界面、接任务、寻路全部自动 —— 把跑路成本压到零。' },
          { x: 449, ruleTop: 2250, zh: '状态外显', en: 'ALWAYS TRACKED', enX: 545, txt: '游历页签把当前追查目标挂在主界面上，离开情报簿也不会忘记「我在做什么」。' },
          { x: 812, ruleTop: 2250, zh: '失败兜底', en: 'SOFT FALLBACK', enX: 908, txt: '挑战失败只损失一次复活：情报进度原封不动，练好修为随时回来再战。' },
        ]}
        panels={<>
          <ShotPanel x={86} y={2426} w={618} h={348} img={A.s5_dungeon} alt="副本主界面 · 情报任务进行中"
            badges={[{ x: 200, y: 2514, n: '1' }, { x: 419, y: 2688, n: '2' }, { x: 558, y: 2517, n: '3' }]} />
          <ShotPanel x={749} y={2426} w={392} h={220} img={A.s5_revive} alt="挑战失败 · 复活界面"
            badges={[{ x: 1070, y: 2563, n: '4' }, { x: 1033, y: 2619, n: '5' }]} />
        </>}
        caps={[
          { x: 86, top: 2782, txt: '▲ 副本主界面 · 情报任务进行中' },
          { x: 750, top: 2654, txt: '▲ 挑战失败 · 复活界面' },
        ]}
        notes={[
          { x: 86, ruleTop: 2818, mark: '①', txt: '「游历」页签常驻任务状态 —— 我在追谁，主界面一直可见', w: 624 },
          { x: 86, ruleTop: 2878, mark: '②', txt: '自动寻路中 —— 点过「前往」后全程免操作', w: 624 },
          { x: 86, ruleTop: 2938, mark: '③', txt: '副本可随时退出，提示弹窗二次确认', w: 624 },
          { x: 750, ruleTop: 2688, mark: '④', txt: '重伤后双复活选项：出生点 / 原地立即', w: 396 },
          { x: 750, ruleTop: 2748, mark: '⑤', txt: '59 秒倒计时兜底 —— 失败不清情报进度，复活即再战', w: 396 },
        ]}
      />

      {/* ---- Block 4 · challenge & archive ---- */}
      <S5Block
        title="挑战与归档 · 结案要有一记落印"
        titleTop={3101} titleX={110} titleSize={38}
        rationale={[
          { x: 110, ruleTop: 3191, zh: '峰值时刻', en: 'PEAK MOMENT', enX: 218, txt: 'BOSS 挑战是一章的最高点：三条情报的铺垫，都为这一战供能。' },
          { x: 473, ruleTop: 3191, zh: '印章即成就', en: 'SEAL = TROPHY', enX: 581, txt: '「归档」红印把结案变成永久陈列 —— 卷宗上的每一枚印都是战绩。' },
          { x: 836, ruleTop: 3191, zh: '未完成接力', en: 'NEXT HOOK', enX: 944, txt: '领奖后自动展开下一章：上一章的句号，落笔即是下一章的开头。' },
        ]}
        panels={<>
          <ShotPanel x={88} y={3367} w={536} h={302} img={A.s5_unlock} alt="三条情报集齐 · 挑战解锁（交互稿原图）"
            badges={[{ x: 438, y: 3540, n: '1' }, { x: 506, y: 3632, n: '2' }]} />
          <ShotPanel x={656} y={3367} w={536} h={302} img={A.s5_archive} alt="挑战成功 · 归档盖章（交互稿原图）"
            badges={[{ x: 698, y: 3557, n: '3' }, { x: 1155, y: 3632, n: '4' }]} />
        </>}
        caps={[
          { x: 88, top: 3677, txt: '▲ 三条情报集齐 · 挑战解锁（交互稿原图）' },
          { x: 656, top: 3677, txt: '▲ 挑战成功 · 归档盖章（交互稿原图）' },
        ]}
        notes={[
          { x: 88, ruleTop: 3711, mark: '①', txt: '三条情报全部打勾「已完成」—— 资格一眼可验' },
          { x: 88, ruleTop: 3775, mark: '②', txt: '「挑战」解锁，推荐修为 5000 同步亮出' },
          { x: 656, ruleTop: 3711, mark: '③', txt: '章节签盖上「归档」红印 —— 配专属盖章动效' },
          { x: 656, ruleTop: 3775, mark: '④', txt: '章节奖励「领取」+ 红点；领取后内容左滑、自动展开下一章' },
        ]}
      />
    </div>
  );
}

/* =================== S6 · 心流历程 =================== */
function S6() {
  const dots = [
    { x: 164, y: 506, c: '#e2b54b', zh: '翻簿', zhC: '#e2b54b', zhY: 458, sub: '红点引到第一章', subY: 486, cx: 170 },
    { x: 424, y: 426, c: '#e2b54b', zh: '追查', zhC: '#e2b54b', zhY: 378, sub: '三条情报连环解锁', subY: 406, cx: 430 },
    { x: 614, y: 538, c: '#c74d3d', zh: '失败回落', zhC: '#c74d3d', zhY: 560, sub: '复活兜底·进度保留', subY: 588, cx: 620 },
    { x: 784, y: 358, c: '#e2b54b', zh: '挑战', zhC: '#e2b54b', zhY: 310, sub: '一章最高峰·先验资格', subY: 338, cx: 790 },
    { x: 964, y: 306, c: '#e2b54b', zh: '盖章', zhC: '#e2b54b', zhY: 258, sub: '归档落印·峰终时刻', subY: 286, cx: 970 },
    { x: 1104, y: 448, c: '#e2b54b', zh: '翻页', zhC: '#e2b54b', zhY: 470, sub: '自动展开下一章', subY: 498, cx: 1110 },
  ];
  const scenes = [
    { x: 110, s: 'S1', zh: '新手首启 · 被领进门', en: 'FIRST OPEN', txt: '系统引导自动打开情报簿并展开第一章。第一眼就是「该追谁」—— 零学习成本接住新玩家。', tag: '对应设计 · 首次引导 / 自动展开' },
    { x: 473, s: 'S2', zh: '通勤碎片 · 追一条', en: 'COMMUTE BITE', txt: '点前往 → 自动寻路 → 打完领奖关游戏。一条情报 10 分钟一个闭环，碎片时间刚好一口。', tag: '对应设计 · 前往直达 / 顺序解锁' },
    { x: 836, s: 'S3', zh: '卡修为 · 练级再回', en: 'GROW & RETURN', txt: '修为标红就先去练级，练够回来一战盖章。门槛前置不劝退，反而给了练级一个具体理由。', tag: '对应设计 · 修为色码 / 失败兜底' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(1000) }}>
      <Header num="06" eyebrow="FLOW JOURNEY" title="玩家心流历程" />
      <p className="il-abs il-sans" style={{ left: px(110), top: px(282), fontSize: px(15), color: '#8b93a0' }}>投入强度</p>
      <div className="il-abs" style={{ left: px(110), top: px(312), width: px(1060), height: px(140), background: 'rgba(226,181,75,0.05)' }} />
      <p className="il-abs il-bebas" style={{ left: px(120), top: px(318), fontSize: px(14), letterSpacing: '1px', color: 'rgba(226,181,75,0.7)' }}>心流通道</p>
      <div className="il-abs il-d12" style={{ left: px(110), top: px(622), width: px(1060), background: 'rgba(244,239,227,0.18)' }} />
      <p className="il-abs il-sans" style={{ left: px(1010), top: px(634), fontSize: px(15), color: '#8b93a0' }}>一章的追凶旅程 →</p>

      {/* flow curve through dot centers (cream line, section coords) */}
      <svg className="il-abs" style={{ left: 0, top: 0, width: px(1280), height: px(1000), pointerEvents: 'none' }} fill="none">
        <path d="M110,524 C140,516 152,512 170,512 C300,512 360,432 430,432 C520,432 540,544 620,544 C720,544 720,364 790,364 C880,364 900,312 970,312 C1050,312 1060,454 1110,454 C1140,454 1155,470 1170,486"
          stroke="rgba(244,239,227,0.85)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      {dots.map((d) => (
        <div key={d.zh}>
          <div className="il-abs" style={{ left: px(d.x), top: px(d.y), width: px(12), height: px(12), borderRadius: '50%', background: d.c, boxShadow: `0 0 10px ${d.c}` }} />
          <p className="il-abs il-serif" style={{ left: px(d.cx), top: px(d.zhY), width: px(140), fontSize: px(19), fontWeight: 900, color: d.zhC, textAlign: 'center', transform: 'translateX(-50%)' }}>{d.zh}</p>
          <p className="il-abs il-sans" style={{ left: px(d.cx), top: px(d.subY), width: px(180), fontSize: px(14), color: '#8b93a0', textAlign: 'center', transform: 'translateX(-50%)' }}>{d.sub}</p>
        </div>
      ))}

      {/* use scenarios */}
      <p className="il-abs il-bebas" style={{ left: px(110), top: px(706), fontSize: px(18), letterSpacing: '3px', color: '#e2b54b' }}>USE SCENARIOS</p>
      <p className="il-abs il-serif il-nowrap" style={{ left: px(300), top: px(700), fontSize: px(24), fontWeight: 900, color: '#f4efe3' }}>三个真实场景 · 印证同一条曲线</p>
      {scenes.map((s) => (
        <div key={s.s}>
          <div className="il-abs il-gold-bar" style={{ left: px(s.x), top: px(749), width: px(333) }} />
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(s.x), top: px(769), fontSize: px(22), color: '#e2b54b' }}>{s.s}</p>
          <p className="il-abs il-serif il-nowrap" style={{ left: px(s.x + 44), top: px(773), fontSize: px(20), fontWeight: 900, color: '#f4efe3' }}>{s.zh}</p>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(s.x + 44), top: px(803), fontSize: px(13), letterSpacing: '1px', color: '#8b93a0' }}>{s.en}</p>
          <p className="il-abs il-sans" style={{ left: px(s.x), top: px(837), width: px(333), fontSize: px(16), lineHeight: '26px', color: '#cccfd9' }}>{s.txt}</p>
          <p className="il-abs il-sans" style={{ left: px(s.x), top: px(921), width: px(333), fontSize: px(15), fontWeight: 500, color: '#e2b54b' }}>{s.tag}</p>
        </div>
      ))}
    </div>
  );
}

/* =================== S7 · 美术风格 =================== */
function S7() {
  const principles = [
    { numTop: 270, zhTop: 276, txtTop: 314, num: '01', zh: '卷宗质感', txt: '书脊纵排、签条章号、白描立绘 —— 整个系统就是一本可翻阅的武侠卷宗。' },
    { numTop: 388, zhTop: 394, txtTop: 432, num: '02', zh: '留白聚焦', txt: '玄灰底上只保留剪影与文字：人物未现真容，悬念感与想象空间都留给玩家。' },
    { numTop: 506, zhTop: 512, txtTop: 550, num: '03', zh: '一印定音', txt: '全簿唯一的浓色是「归档」红印 —— 把最贵的颜色只给最重要的时刻。' },
  ];
  const palette = [
    { x: 159, c: '#3a4250', zh: '玄灰底', sub: '卷宗底色' },
    { x: 335, c: '#b43a2e', zh: '印泥红', sub: '归档 · 仪式' },
    { x: 511, c: '#e08a3a', zh: '明橙', sub: '可领取' },
    { x: 687, c: '#3a8fd0', zh: '湖蓝', sub: '可行动' },
    { x: 863, c: '#4caf6e', zh: '翠绿', sub: '已达成' },
    { x: 1039, c: '#e0574b', zh: '警示红', sub: '红点 · 召回' },
  ];
  return (
    <div className="intel-sec" style={{ height: px(1000) }}>
      <Header num="07" eyebrow="ART DIRECTION" title="界面美术风格推导" />
      {principles.map((p) => (
        <div key={p.num}>
          <p className="il-abs il-bebas il-nowrap" style={{ left: px(110), top: px(p.numTop), fontSize: px(36), color: '#e2b54b' }}>{p.num}</p>
          <p className="il-abs il-serif il-nowrap" style={{ left: px(176), top: px(p.zhTop), fontSize: px(22), fontWeight: 900, color: '#f4efe3' }}>{p.zh}</p>
          <p className="il-abs il-sans" style={{ left: px(176), top: px(p.txtTop), width: px(404), fontSize: px(16), lineHeight: '25px', color: '#cccfd9' }}>{p.txt}</p>
        </div>
      ))}

      {/* reference image */}
      <div className="il-abs" style={{ left: px(650), top: px(262), width: px(520), height: px(241), borderRadius: px(8), border: '1px solid rgba(244,239,227,0.08)', overflow: 'hidden' }}>
        <img src={A.s7_ref} alt="参考 · 《天地劫》手游卷宗界面" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <p className="il-abs il-sans il-nowrap" style={{ left: px(650), top: px(513), fontSize: px(15), color: '#8b93a0' }}>参考 · 《天地劫》手游——章回式水墨卷宗界面「倒叙书」</p>
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(650), top: px(556), fontSize: px(15), letterSpacing: '2px', color: '#e2b54b' }}>WHY BORROW</p>
      <div className="il-abs il-sans" style={{ left: px(650), top: px(584), width: px(520), fontSize: px(16), lineHeight: '28px', color: '#cccfd9' }}>
        <p style={{ margin: 0 }}>· 同样的「章幕 × 条目」结构：十五幕下挂 15-1…15-5；</p>
        <p style={{ margin: 0 }}>· 书脊 + 签条章号的版式，印证「目录即名单」在武侠语境下成立；</p>
        <p style={{ margin: 0 }}>· 大面积留白 + 单点红印，是「克制用色 · 峰终高光」的现成参考。</p>
      </div>

      {/* functional palette */}
      <div className="il-abs il-d12" style={{ left: px(110), top: px(776), width: px(1060) }} />
      <p className="il-abs il-serif il-nowrap" style={{ left: px(110), top: px(732), fontSize: px(22), fontWeight: 900, color: '#f4efe3' }}>交互稿中的功能色</p>
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(320), top: px(740), fontSize: px(15), letterSpacing: '2px', color: '#e2b54b' }}>FUNCTIONAL PALETTE</p>
      {palette.map((p) => (
        <div key={p.zh}>
          <div className="il-swatch" style={{ left: px(p.x), top: px(803), background: p.c }} />
          <p className="il-abs il-sans il-nowrap" style={{ left: px(p.x), top: px(871), fontSize: px(17), fontWeight: 500, color: '#f4efe3' }}>{p.zh}</p>
          <p className="il-abs il-sans il-nowrap" style={{ left: px(p.x), top: px(897), fontSize: px(15), color: '#8b93a0' }}>{p.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* =================== S8 · 封底 =================== */
function S8() {
  return (
    <div className="intel-sec" style={{ height: px(400) }}>
      <div className="il-abs" style={{ left: px(110), top: px(80), width: px(1060), height: px(1), background: 'rgba(226,181,75,0.5)' }} />
      <p className="il-abs il-bebas il-nowrap" style={{ left: px(110), top: px(140), fontSize: px(100), letterSpacing: '3px', color: '#f4efe3', lineHeight: 'normal' }}>THANKS FOR WATCHING</p>
      <p className="il-abs il-sans il-nowrap" style={{ left: px(110), top: px(296), fontSize: px(16), color: '#8b93a0' }}>盛趣游戏 ·《庆余年》手游 · 情报簿玩法· 交互设计</p>
      <div className="il-abs il-d12" style={{ left: px(110), top: px(318), width: px(1060) }} />
    </div>
  );
}

export function IntelExactCase() {
  return (
    <div className="intel-canvas">
      <S0 />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5A />
      <S6 />
      <S7 />
      <S8 />
    </div>
  );
}
