import { useEffect, useRef } from 'react';
import './AtlasExactCase.css';

/* ===== Image assets (game screenshots / references) ===== */
const ATLAS_ASSET_BASE = '/assets/qingyu-atlas';
const atlasAsset = (name: string) => `${ATLAS_ASSET_BASE}/${name}`;

const A: Record<string, string> = {
  // S4 — six state-machine screenshots
  s4_st0: atlasAsset('s_collect25.webp'),
  s4_st1: atlasAsset('s_collect100.webp'),
  s4_st2: atlasAsset('s_synth.webp'),
  s4_st3: atlasAsset('s_reading.webp'),
  s4_st4: atlasAsset('s_readdone.webp'),
  s4_st5: atlasAsset('s_activated.webp'),
  // S5A — main screen
  s5a: atlasAsset('s_collect25.webp'),
  // S5B — channels / borrow / filter
  s5b_channel: atlasAsset('s_getpath.webp'),
  s5b_borrow: atlasAsset('s_borrow.webp'),
  s5b_filter: atlasAsset('s_filter.webp'),
  // S5C — study boost
  s5c_list: atlasAsset('s_help_list.webp'),
  s5c_send: atlasAsset('s_help_send.webp'),
  // S5D — gift / ledger
  s5d_gift: atlasAsset('s_gift.webp'),
  s5d_ledger: atlasAsset('s_record_in.webp'),
  // S5E — comments / ranking / report
  s5e_comment: atlasAsset('s_comments.webp'),
  s5e_rank: atlasAsset('s_ranklist.webp'),
  s5e_report: atlasAsset('s_report.webp'),
  // S7 — art reference
  s7_ref: atlasAsset('ref_yys_codex.webp'),
};

const px = (n: number) => `${n}px`;
const ATLAS_FALLBACK_IMAGE = atlasAsset('c_main.webp');

function Img({ k, alt = '' }: { k: string; alt?: string }) {
  const src = A[k] ?? ATLAS_FALLBACK_IMAGE;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        const image = event.currentTarget;
        if (image.dataset.fallback === '1') return;
        image.dataset.fallback = '1';
        image.src = ATLAS_FALLBACK_IMAGE;
      }}
    />
  );
}

/* Diamond marker */
function Diamond({ left, top, size = 14, color = '#e2b54b' }: { left: number; top: number; size?: number; color?: string }) {
  return <div className="al-diamond" style={{ left: px(left), top: px(top), width: px(size), height: px(size), background: color }} />;
}

/* Numbered step badge */
function Badge({
  left,
  top,
  n,
  kind = 'gold',
  color,
}: {
  left: number;
  top: number;
  n: number | string;
  kind?: 'gold' | 'green' | 'teal';
  color?: string;
}) {
  return <div className={`al-badge al-badge-${kind}`} style={{ left: px(left), top: px(top), color }}>{n}</div>;
}

/* Section header (zh title, en sub, rule, big index number) */
function Header({
  zh, en, num, dark, titleW, numLeft = 1064,
}: {
  zh: string; en: string; num: string; dark: boolean; titleW?: number; numLeft?: number;
}) {
  const titleColor = dark ? '#f4efe3' : '#0d1411';
  const subC = dark ? '#e2b54b' : '#a87e22';
  const numColor = dark ? 'rgba(244,239,227,0.05)' : 'rgba(13,20,17,0.07)';
  return (
    <>
      <p className="al-bignum al-bebas" style={{ left: px(numLeft), top: px(10), color: numColor }}>{num}</p>
      <Diamond left={96} top={92.1} />
      <h2 className="al-h-title al-serif" style={{ left: px(128), top: px(78), color: titleColor, width: titleW ? px(titleW) : undefined }}>{zh}</h2>
      <p className="al-h-sub al-bebas" style={{ color: subC }}>{en}</p>
      <div className={`al-h-rule ${dark ? 'al-rule-light' : 'al-rule-dark'}`} />
    </>
  );
}

/* Screen-detail header (S5x): tag pill + title + rule */
function ScreenHead({ no, title, dark, gold }: { no: string; title: string; dark: boolean; gold?: boolean }) {
  return (
    <>
      <div className="al-screentag al-bebas" style={{ left: px(96), top: px(84), background: gold ? '#e2b54b' : '#0d1411', color: gold ? '#0d1411' : '#e2b54b' }}>{`SCREEN ${no}`}</div>
      <p className="al-serif" style={{ position: 'absolute', left: px(200), top: px(80), fontSize: '30px', fontWeight: 700, color: dark ? '#f4efe3' : '#0d1411', whiteSpace: 'nowrap' }}>{title}</p>
      <div style={{ position: 'absolute', left: px(96), top: px(148), width: px(1088), height: '1px', background: dark ? 'rgba(244,239,227,0.12)' : 'rgba(13,20,17,0.15)' }} />
    </>
  );
}

/* Light rationale card (left accent) */
function RatCardL({
  left, top, width = 352, height = 180, zh, en, body, accent = '#e2b54b', bodyW = 300,
}: { left: number; top: number; width?: number; height?: number; zh: string; en: string; body: string; accent?: string; bodyW?: number }) {
  return (
    <div className="al-card-light" style={{ left: px(left), top: px(top), width: px(width), height: px(height) }}>
      <div className="al-card-left" style={{ background: accent }} />
      <p className="al-card-title al-serif" style={{ left: px(25), top: px(23), fontSize: '23px', color: '#0d1411' }}>{zh}</p>
      <p className="al-card-en al-bebas" style={{ left: px(25), top: px(53), color: '#a87e22' }}>{en}</p>
      <p className="al-card-body" style={{ left: px(25), top: px(85), width: px(bodyW), color: '#4a4538' }}>{body}</p>
    </div>
  );
}

/* Dark rationale card (top accent) */
function RatCardD({
  left, top, width = 352, height = 186, zh, en, body, accent = '#e2b54b',
}: { left: number; top: number; width?: number; height?: number; zh: string; en: string; body: string; accent?: string }) {
  return (
    <div className="al-card-dark" style={{ left: px(left), top: px(top), width: px(width), height: px(height) }}>
      <div className="al-card-top" style={{ background: accent }} />
      <p className="al-card-title al-serif" style={{ left: px(26), top: px(24), fontSize: '23px', color: accent }}>{zh}</p>
      <p className="al-card-en al-bebas" style={{ left: px(26), top: px(60), color: '#8b9c93' }}>{en}</p>
      <p className="al-card-body" style={{ left: px(26), top: px(92), width: px(300), color: 'rgba(244,239,227,0.82)' }}>{body}</p>
    </div>
  );
}

/* ===================== S0 — 封面 ===================== */
function S0() {
  // gold dot grid 6x4
  const dots: React.ReactNode[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      dots.push(
        <Diamond key={`d${r}-${c}`} left={96 + c * 26} top={768 + r * 26} size={6} color="rgba(226,181,75,0.35)" />
      );
    }
  }
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(900) }}>
      {/* decorative rings (top-right glow) */}
      <div style={{ position: 'absolute', left: px(790), top: px(-300), width: px(760), height: px(760), borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,181,75,0.10), rgba(226,181,75,0) 70%)' }} />
      <div style={{ position: 'absolute', left: px(900), top: px(-190), width: px(540), height: px(540), borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,160,139,0.08), rgba(79,160,139,0) 72%)' }} />
      {/* decorative codex-ring on the right */}
      <div style={{ position: 'absolute', left: px(960), top: px(614), width: px(420), height: px(420), borderRadius: '50%', border: '1px solid rgba(226,181,75,0.28)' }} />
      <div style={{ position: 'absolute', left: px(1030), top: px(684), width: px(280), height: px(280), borderRadius: '50%', border: '1px dashed rgba(226,181,75,0.22)' }} />
      {[[1163, 607], [981.13, 712], [981.13, 922], [1163, 1027], [1344.87, 922], [1344.87, 712]].map(([x, y], i) => (
        <div key={i} style={{ position: 'absolute', left: px(x), top: px(y), width: '14px', height: '14px', borderRadius: '50%', background: i === 0 || i === 2 ? '#e2b54b' : 'rgba(226,181,75,0.5)' }} />
      ))}
      {/* vertical gold bar */}
      <div style={{ position: 'absolute', left: px(64), top: px(78), width: px(2), height: px(340), background: 'rgba(226,181,75,0.8)' }} />
      {/* teal diagonal accent ribbon */}
      <div style={{ position: 'absolute', left: px(-59), top: px(470), width: px(560), height: px(54), background: 'rgba(79,160,139,0.92)', transform: 'rotate(10deg)', transformOrigin: 'left top' }} />
      {dots}
      <p className="al-bebas" style={{ position: 'absolute', left: px(96), top: px(82), color: '#e2b54b', fontSize: '21px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>GAME UX</p>
      <p style={{ position: 'absolute', left: px(896), top: px(84), width: px(320), textAlign: 'right', color: '#8d99a8', fontSize: '23px', letterSpacing: '2px' }}>收集系统</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(92), top: px(120), color: '#f4efe3', fontSize: '221px', letterSpacing: '6px', lineHeight: 1, whiteSpace: 'nowrap' }}>card</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(92), top: px(354), fontSize: '221px', letterSpacing: '6px', lineHeight: 1, whiteSpace: 'nowrap', background: 'linear-gradient(90deg,#e2b54b,#f4d98a)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>colletion</p>
      <div style={{ position: 'absolute', left: px(96), top: px(614), width: px(120), height: px(3), background: '#e2b54b' }} />
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(638), color: '#e2b54b', fontSize: '60px', fontWeight: 900, whiteSpace: 'nowrap' }}>图鉴收集</p>
    </div>
  );
}

/* ===================== S1 — 项目概述 ===================== */
function S1() {
  const delivs = [
    { x: 96, y: 626, n: '01', zh: '图鉴主界面 · 六状态', en: 'CODEX HOME ×6 STATES' },
    { x: 464, y: 626, n: '02', zh: '研读助力 · 频道广播', en: 'STUDY BOOST' },
    { x: 832, y: 626, n: '03', zh: '碎片赠送 · 数量选择', en: 'FRAGMENT GIFT' },
    { x: 96, y: 782, n: '04', zh: '往来记录 · 收赠双向', en: 'GIFT LEDGER' },
    { x: 464, y: 782, n: '05', zh: '评论区 · 收集排行', en: 'COMMENTS & RANK' },
    { x: 832, y: 782, n: '06', zh: '金兰借阅 · 筛选 · 获取', en: 'BORROW / FILTER' },
  ];
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(1080), color: '#0d1411' }}>
      <Header zh="项目概述" en="OVERVIEW" num="01" dark={false} numLeft={1080} />
      <div style={{ position: 'absolute', left: px(96), top: px(242), width: px(6), height: px(108), background: '#4fa08b' }} />
      <p className="al-serif" style={{ position: 'absolute', left: px(130), top: px(244), fontSize: '35px', fontWeight: 700, lineHeight: 1.6, whiteSpace: 'nowrap' }}>「 新增图鉴收集系统—延长游玩时间 」</p>
      <p style={{ position: 'absolute', left: px(132), top: px(310), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>—— 系统目的 ·激励玩家收集欲望</p>
      <p style={{ position: 'absolute', left: px(132), top: px(370), width: px(560), color: '#4a4538', fontSize: '18px', lineHeight: 1.8 }}>玩家从各玩法中获取图鉴碎片，集满 100 片合成图鉴，再经一段时间的「研读」激活属性收益；助力、赠送、借阅、评论与排行五条社交线，让收集的每一步都有人同行。</p>
      {/* MY PART panel */}
      <div style={{ position: 'absolute', left: px(760), top: px(232), width: px(424), height: px(322), background: '#0d1411', borderRadius: '16px', overflow: 'hidden' }}>
        <p className="al-bebas" style={{ position: 'absolute', left: px(36), top: px(32), color: '#e2b54b', fontSize: '21px', letterSpacing: '5px' }}>MY PART</p>
        {[['收集系统全链路交互设计', 74], ['图鉴六状态界面与按钮规则', 114], ['社交链路：助力 · 赠送 · 评论 · 排行', 154]].map(([t, y]) => (
          <div key={t as string}>
            <div style={{ position: 'absolute', left: px(36), top: px((y as number) + 12), width: '6px', height: '6px', borderRadius: '50%', background: '#e2b54b' }} />
            <p style={{ position: 'absolute', left: px(54), top: px(y as number), color: '#f4efe3', fontSize: '18px', fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</p>
          </div>
        ))}
        <p className="al-bebas" style={{ position: 'absolute', left: px(36), top: px(196), color: '#e2b54b', fontSize: '97px', lineHeight: 1 }}>18+</p>
        <p style={{ position: 'absolute', left: px(160), top: px(252), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>个界面与弹窗 · 全状态覆盖</p>
      </div>
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(574), fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>交付内容一览</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(276), top: px(582), color: '#a87e22', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>DELIVERABLES</p>
      {delivs.map((d) => (
        <div key={d.n} className="al-deliv" style={{ left: px(d.x), top: px(d.y) }}>
          <p className="al-bebas" style={{ position: 'absolute', left: px(23), top: px(17), color: '#e2b54b', fontSize: '39px' }}>{d.n}</p>
          <Diamond left={315} top={19.34} size={8} />
          <p className="al-serif" style={{ position: 'absolute', left: px(23), top: px(72), color: '#0d1411', fontSize: '22px', fontWeight: 700, whiteSpace: 'nowrap' }}>{d.zh}</p>
          <p className="al-bebas" style={{ position: 'absolute', left: px(23), top: px(106), color: 'rgba(111,103,84,0.85)', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{d.en}</p>
        </div>
      ))}
      <p className="al-serif" style={{ position: 'absolute', left: 0, top: px(986), width: '1280px', textAlign: 'center', fontSize: '35px', fontWeight: 900 }}>
        「 让<span style={{ color: '#a87e22' }}>收集有奔头</span> · 让<span style={{ color: '#a87e22' }}>等待有人</span>帮 」
      </p>
    </div>
  );
}

/* ===================== S2 — 玩法核心 · 收集双环 ===================== */
function S2() {
  // 5 collect nodes (112px circles), center of section ring at (411, 600)
  const nodes = [
    { n: '01', cx: 411, cy: 395, l1: '获取', l2: '图鉴碎片' },
    { n: '02', cx: 605.96, cy: 536.65, l1: '集满 100', l2: '合成图鉴' },
    { n: '03', cx: 531.5, cy: 765.85, l1: '研读', l2: '（需时间）' },
    { n: '04', cx: 290.5, cy: 765.85, l1: '激活属性', l2: '获得收益' },
    { n: '05', cx: 216.04, cy: 536.65, l1: '追逐', l2: '下一本' },
  ];
  // social ring labels (4 corner cards), teal bordered
  const social = [
    { x: 567.74, y: 345.26, zh: '助力加速', sub: '研读期好友助力' },
    { x: 567.74, y: 807, zh: '金兰借阅', sub: '结义专属获取' },
    { x: 122.26, y: 807, zh: '赠送补缺', sub: '溢出碎片送人' },
    { x: 122.26, y: 345.26, zh: '评论与排行', sub: '晒收集 · 比进度' },
  ];
  const steps = [
    { y: 385, zh: '目标', en: 'GOAL', body: '收藏进度 25/100 把「还缺多少」突出显示，用进度数值化表示玩法目标。', w: 378 },
    { y: 505, zh: '行动', en: 'ACTION', body: '活动、商店、派遣、好友赠送——四条获取渠道，提供行动选择多样性。', w: 382 },
    { y: 625, zh: '反馈', en: 'FEEDBACK', body: '碎片入册、合成特效、属性激活，每个里程碑都有确定的视觉回报。', w: 378 },
    { y: 745, zh: '展示', en: 'DISPLAY', body: '评论区与收集排行把藏品变成谈资——收集的快乐需要观众。', w: 378 },
  ];
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(1500) }}>
      <Header zh="玩法核心 · 收集双环" en="CORE LOOP — PERSONAL RING × SOCIAL RING" num="02" dark titleW={420} />
      {/* outer + mid rings */}
      <div style={{ position: 'absolute', left: px(96), top: px(285), width: px(630), height: px(630), borderRadius: '50%', border: '1px dashed rgba(79,160,139,0.3)' }} />
      <div style={{ position: 'absolute', left: px(206), top: px(395), width: px(410), height: px(410), borderRadius: '50%', border: '1px dashed rgba(226,181,75,0.3)' }} />
      <svg className="atlas-loop-arrows" viewBox="0 0 630 630" aria-hidden="true">
        <defs>
          <marker id="atlas-loop-arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
            <path d="M 1 1 L 10 6 L 1 11 Z" className="atlas-loop-arrow-head" />
          </marker>
        </defs>
        <path className="atlas-loop-arrow" d="M 178 222 L 260 162" />
        <path className="atlas-loop-arrow" d="M 360 170 L 456 240" />
        <path className="atlas-loop-arrow" d="M 502 306 L 438 420" />
        <path className="atlas-loop-arrow" d="M 382 456 L 266 456" />
        <path className="atlas-loop-arrow" d="M 186 438 L 142 326" />
      </svg>
      {/* SOCIAL RING label */}
      <p className="al-bebas" style={{ position: 'absolute', left: px(371), top: px(257), color: 'rgba(79,160,139,0.8)', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>SOCIAL RING</p>
      {/* center */}
      <div style={{ position: 'absolute', left: px(336), top: px(525), width: px(150), height: px(150), borderRadius: '50%', background: 'radial-gradient(circle,#f4d98a,#e2b54b)' }} />
      <p className="al-serif" style={{ position: 'absolute', left: px(411), top: px(572), transform: 'translateX(-50%)', color: '#0d1411', fontSize: '28px', fontWeight: 900, whiteSpace: 'nowrap' }}>图鉴收集</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(411), top: px(615), transform: 'translateX(-50%)', color: 'rgba(13,20,17,0.7)', fontSize: '16px', letterSpacing: '1px', whiteSpace: 'nowrap' }}>COLLECT LOOP</p>
      {nodes.map((nd) => (
        <div key={nd.n}>
          <div style={{ position: 'absolute', left: px(nd.cx - 56), top: px(nd.cy - 56), width: px(112), height: px(112), borderRadius: '50%', background: '#14201b', border: '1px solid rgba(226,181,75,0.45)' }} />
          <p className="al-bebas" style={{ position: 'absolute', left: px(nd.cx), top: px(nd.cy - 40), transform: 'translateX(-50%)', color: '#e2b54b', fontSize: '18px', textAlign: 'center', whiteSpace: 'nowrap' }}>{nd.n}</p>
          <div style={{ position: 'absolute', left: px(nd.cx), top: px(nd.cy - 16), transform: 'translateX(-50%)', width: px(92), textAlign: 'center', color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.4 }}>
            <p>{nd.l1}</p><p>{nd.l2}</p>
          </div>
        </div>
      ))}
      {social.map((s) => (
        <div key={s.zh} style={{ position: 'absolute', left: px(s.x), top: px(s.y), width: px(132), height: px(67), background: '#14201b', border: '1.5px solid rgba(79,160,139,0.9)', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ position: 'absolute', left: 0, top: px(10.5), width: '100%', color: '#4fa08b', fontSize: '16px', fontWeight: 500 }}>{s.zh}</p>
          <p style={{ position: 'absolute', left: 0, top: px(37.5), width: '100%', color: '#8b9c93', fontSize: '16px' }}>{s.sub}</p>
        </div>
      ))}
      {/* right side step list */}
      {steps.map((s) => (
        <div key={s.zh}>
          <div style={{ position: 'absolute', left: px(782), top: px(s.y + 4), width: px(2), height: px(72), background: 'rgba(226,181,75,0.55)' }} />
          <p className="al-serif" style={{ position: 'absolute', left: px(806), top: px(s.y), color: '#e2b54b', fontSize: '30px', fontWeight: 900, whiteSpace: 'nowrap' }}>{s.zh}</p>
          <p className="al-bebas" style={{ position: 'absolute', left: px(872), top: px(s.y + 12), color: '#8b9c93', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{s.en}</p>
          <p style={{ position: 'absolute', left: px(806), top: px(s.y + 44), width: px(s.w), color: 'rgba(244,239,227,0.85)', fontSize: '16px', lineHeight: 1.65 }}>{s.body}</p>
        </div>
      ))}
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(998), color: '#f4efe3', fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>双环成立的三大体验驱动</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(416), top: px(1006), color: '#e2b54b', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>THREE DRIVERS</p>
      {/* Driver: 收集驱动 (diamond cluster icon) */}
      <div className="al-card-dark" style={{ left: px(96), top: px(1056), width: px(352), height: px(304) }}>
        <div className="al-card-top" />
        <Diamond left={36} top={32.69} size={16} color="rgba(226,181,75,0.55)" />
        <Diamond left={58} top={32.69} size={16} color="rgba(226,181,75,0.7)" />
        <Diamond left={36} top={54.69} size={16} color="rgba(226,181,75,0.85)" />
        <div style={{ position: 'absolute', left: px(58), top: px(54.69), width: '16px', height: '16px', border: '2px solid #e2b54b', transform: 'rotate(45deg)' }} />
        <p className="al-serif" style={{ position: 'absolute', left: px(32), top: px(120), fontSize: '30px', color: '#e2b54b', fontWeight: 900 }}>收集驱动</p>
        <p className="al-bebas" style={{ position: 'absolute', left: px(32), top: px(164), color: '#8b9c93', fontSize: '16px', letterSpacing: '4px' }}>COLLECTION</p>
        <p style={{ position: 'absolute', left: px(32), top: px(200), width: px(268), color: 'rgba(244,239,227,0.8)', fontSize: '16px', lineHeight: 1.75 }}>100 片的明确缺口 + 列表里一排「未收藏」——齐套冲动是收集系统的第一引擎。</p>
      </div>
      {/* Driver: 成长驱动 (bar chart icon) */}
      <div className="al-card-dark" style={{ left: px(464), top: px(1056), width: px(352), height: px(304) }}>
        <div className="al-card-top" />
        <div style={{ position: 'absolute', left: px(32), top: px(68), width: '10px', height: '18px', background: '#e2b54b', borderRadius: '2px' }} />
        <div style={{ position: 'absolute', left: px(48), top: px(54), width: '10px', height: '32px', background: '#e2b54b', borderRadius: '2px' }} />
        <div style={{ position: 'absolute', left: px(64), top: px(40), width: '10px', height: '46px', background: '#e2b54b', borderRadius: '2px' }} />
        <p className="al-serif" style={{ position: 'absolute', left: px(32), top: px(120), fontSize: '30px', color: '#e2b54b', fontWeight: 900 }}>成长驱动</p>
        <p className="al-bebas" style={{ position: 'absolute', left: px(32), top: px(164), color: '#8b9c93', fontSize: '16px', letterSpacing: '4px' }}>GROWTH</p>
        <p style={{ position: 'absolute', left: px(32), top: px(200), width: px(275), color: 'rgba(244,239,227,0.8)', fontSize: '16px', lineHeight: 1.75 }}>收藏与研读双属性、特殊加成随阶解锁——藏品不是摆设，每一本都让角色变强。</p>
      </div>
      {/* Driver: 社交驱动 (overlapping circles icon, teal) */}
      <div className="al-card-dark" style={{ left: px(832), top: px(1056), width: px(352), height: px(304) }}>
        <div className="al-card-top" style={{ background: '#4fa08b' }} />
        <div style={{ position: 'absolute', left: px(32), top: px(42), width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #4fa08b' }} />
        <div style={{ position: 'absolute', left: px(52), top: px(52), width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #4fa08b' }} />
        <p className="al-serif" style={{ position: 'absolute', left: px(32), top: px(120), fontSize: '30px', color: '#4fa08b', fontWeight: 900 }}>社交驱动</p>
        <p className="al-bebas" style={{ position: 'absolute', left: px(32), top: px(164), color: '#8b9c93', fontSize: '16px', letterSpacing: '4px' }}>SOCIAL</p>
        <p style={{ position: 'absolute', left: px(32), top: px(200), width: px(286), color: 'rgba(244,239,227,0.8)', fontSize: '16px', lineHeight: 1.75 }}>助力、赠送、借阅、评论：把「等」与「缺」设计成求助与馈赠，关系随收集升温。</p>
      </div>
    </div>
  );
}

/* ===================== S3 — 信息架构 ===================== */
function S3() {
  const list = [
    { y: 292, t: '图鉴列表区', teal: false, dash: false },
    { y: 358, t: '图鉴详情 · 六状态', teal: false, dash: false },
    { y: 424, t: '评论区 · 收集排行', teal: true, dash: false },
    { y: 490, t: '碎片赠送', teal: true, dash: false },
  ];
  const sub = [
    { y: 238, t: '筛选：品质 / 属性 / 进度', teal: false, dash: false },
    { y: 302, t: '获取图鉴 · 四渠道', teal: false, dash: false },
    { y: 358, t: '金兰借阅（结义专属）', teal: false, dash: false },
    { y: 414, t: '研读助力 · 频道广播', teal: true, dash: false },
    { y: 470, t: '举报弹窗（内容治理）', teal: false, dash: true },
    { y: 526, t: '往来记录 · 收赠双向', teal: false, dash: false },
  ];
  const states = ['未收藏', '收集中', '可合成', '可研读', '研读中', '已激活'];
  const quality = [
    { x: 241, c: '#c84b3c' }, { x: 271, c: '#d9a23f' }, { x: 301, c: '#9a5bbf' }, { x: 331, c: '#4d7fc4' }, { x: 361, c: '#5fa052' },
  ];
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(1080), color: '#0d1411' }}>
      <Header zh="信息架构" en="SYSTEM MAP — ONE MANUAL, FOUR ZONES" num="03" dark={false} />
      {/* connector lines */}
      <svg
        className="atlas-map-links"
        style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1080px', pointerEvents: 'none' }}
        stroke="rgba(13,20,17,0.45)"
        fill="none"
        strokeWidth="1.2"
      >
        <path d="M306 386 H400" />
        <path d="M600 386 H646" />
        <path d="M646 317 V515" />
        <path d="M646 317 H690" />
        <path d="M646 383 H690" />
        <path d="M646 449 H690" />
        <path d="M646 515 H690" />

        <path d="M870 317 H905" />
        <path d="M905 260 V317" />
        <path d="M905 260 H940" />

        <path d="M870 383 H905" />
        <path d="M905 324 V436" />
        <path d="M905 324 H940" />
        <path d="M905 380 H940" />
        <path d="M905 436 H940" />

        <path d="M870 449 H905" className="atlas-map-link-teal" />
        <path d="M905 449 V492" className="atlas-map-link-teal" />
        <path d="M905 492 H940" className="atlas-map-link-teal" />

        <path d="M870 515 H905" className="atlas-map-link-teal" />
        <path d="M905 515 V548" className="atlas-map-link-teal" />
        <path d="M905 548 H940" className="atlas-map-link-teal" />
      </svg>
      <div className="al-node" style={{ left: px(96), top: px(352), width: px(210), height: px(64), background: '#0d1411' }}>
        <span style={{ color: '#f4efe3', fontSize: '20px', fontWeight: 500 }}>大世界主界面</span>
      </div>
      <div className="al-node" style={{ left: px(400), top: px(352), width: px(200), height: px(68), background: '#e2b54b' }}>
        <span style={{ color: '#0d1411', fontSize: '20px', fontWeight: 500 }}>图鉴手册</span>
      </div>
      {list.map((n) => (
        <div key={n.t} className="al-node" style={{ left: px(690), top: px(n.y), width: px(180), height: px(50), background: 'rgba(255,255,255,0.6)', border: `${n.teal ? '1.4px' : '1.2px'} ${n.dash ? 'dashed' : 'solid'} ${n.teal ? 'rgba(79,160,139,0.95)' : 'rgba(13,20,17,0.45)'}` }}>
          <span style={{ color: n.teal ? '#2e7361' : '#0d1411', fontSize: '16px', fontWeight: 500 }}>{n.t}</span>
        </div>
      ))}
      {sub.map((n) => (
        <div key={n.t} className="al-node" style={{ left: px(940), top: px(n.y), width: px(220), height: px(44), background: 'rgba(255,255,255,0.6)', border: `${n.teal ? '1.4px' : '1.2px'} ${n.dash ? 'dashed' : 'solid'} ${n.teal ? 'rgba(79,160,139,0.95)' : 'rgba(13,20,17,0.45)'}` }}>
          <span style={{ color: n.teal ? '#2e7361' : '#0d1411', fontSize: '16px', fontWeight: 500 }}>{n.t}</span>
        </div>
      ))}
      {/* six-state pill row */}
      <p style={{ position: 'absolute', left: px(196), top: px(669), color: '#4a4538', fontSize: '20px', whiteSpace: 'nowrap' }}>图鉴详情区的六状态</p>
      {states.map((s, i) => {
        const x = 400 + i * 118;
        const active = i === 5;
        return (
          <div key={s}>
            <div className="al-node" style={{ left: px(x), top: px(660), width: px(94), height: px(42), borderRadius: '50px', background: active ? '#e2b54b' : 'rgba(255,255,255,0.65)', border: active ? 'none' : '1.2px solid rgba(13,20,17,0.4)' }}>
              <span style={{ color: '#0d1411', fontSize: '16px', fontWeight: 500 }}>{s}</span>
            </div>
            {i < 5 && <span style={{ position: 'absolute', left: px(x + 100), top: px(670), color: 'rgba(13,20,17,0.5)', fontSize: '14px' }}>▶</span>}
          </div>
        );
      })}
      {/* teal-node note */}
      <div style={{ position: 'absolute', left: px(220), top: px(749), width: '10px', height: '10px', borderRadius: '50%', background: '#4fa08b' }} />
      <p style={{ position: 'absolute', left: px(240), top: px(742), color: '#4a4538', fontSize: '20px', whiteSpace: 'nowrap' }}>青色节点＝社交触点：评论、排行、赠送、助力都长在收集动线上，而不是独立的社交频道。</p>
      {/* quality swatches note */}
      {quality.map((q) => (
        <div key={q.x} style={{ position: 'absolute', left: px(q.x), top: px(807), width: '22px', height: '22px', borderRadius: '5px', background: q.c }} />
      ))}
      <p style={{ position: 'absolute', left: px(405), top: px(806), color: '#4a4538', fontSize: '20px', whiteSpace: 'nowrap' }}>碎片五档品质色，列表与赠送格按品质从高到低排序——颜色即优先级。</p>
      <p className="al-serif" style={{ position: 'absolute', left: 0, top: px(950), width: '1280px', textAlign: 'center', fontSize: '30px', fontWeight: 900 }}>
        一本手册收纳收集的全部动作 —— <span style={{ color: '#a87e22' }}>缺什么 · 去哪拿 · 谁能帮 </span>· 怎么晒
      </p>
    </div>
  );
}

/* ===================== S4 — 图鉴状态机 ===================== */
function S4() {
  const Shot = ({ left, top, k, teal }: { left: number; top: number; k: string; teal?: boolean }) => (
    <div className="al-shot" style={{ left: px(left), top: px(top), width: px(300), height: px(169), border: `1.5px solid ${teal ? 'rgba(79,160,139,0.9)' : 'rgba(226,181,75,0.9)'}`, borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
      <Img k={k} />
    </div>
  );
  const lbl = (left: number, st: string, txtL: number, txt: string, top: number, teal?: boolean) => (
    <>
      <p className="al-bebas" style={{ position: 'absolute', left: px(left), top: px(top), color: teal ? '#4fa08b' : '#e2b54b', fontSize: '21px' }}>{st}</p>
      <p style={{ position: 'absolute', left: px(txtL), top: px(top), color: '#f4efe3', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>{txt}</p>
    </>
  );
  const transLabel = (left: number, top: number, text: string) => (
    <p className="atlas-state-trans-label" style={{ left: px(left), top: px(top) }}>{text}</p>
  );
  const timeline = ['未收藏', '收集中', '可合成', '可研读', '研读中', '已激活'];
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(1780) }}>
      <Header zh="界面流程总览" en="STATE MACHINE — ONE SCREEN, SIX STATES" num="04" dark titleW={300} numLeft={1058} />
      {/* timeline strip with 6 diamonds */}
      <div style={{ position: 'absolute', left: px(117), top: px(257), width: px(1050), height: '1px', background: 'rgba(244,239,227,0.2)' }} />
      {[110, 320, 530, 740, 950, 1160].map((x, i) => (
        <Diamond key={x} left={x} top={257.07} size={10} color={i === 5 ? '#4fa08b' : '#e2b54b'} />
      ))}
      {timeline.map((t, i) => (
        <p key={t} style={{ position: 'absolute', left: px([120, 327, 537, 747, 957, 1167][i]), top: px(285), transform: 'translateX(-50%)', color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>{t}</p>
      ))}
      {/* state cards */}
      <Shot left={96} top={378} k="s4_st0" />
      {lbl(96, 'ST.0', 148, '未收藏', 588)}
      <p style={{ position: 'absolute', left: px(96), top: px(620), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>按钮：金兰借阅 · 获取图鉴</p>
      <Shot left={490} top={378} k="s4_st1" />
      {lbl(490, 'ST.1', 542, '收集中 25/100', 588)}
      <p style={{ position: 'absolute', left: px(490), top: px(620), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>按钮不变，进度条持续外显</p>
      <Shot left={884} top={378} k="s4_st2" />
      {lbl(884, 'ST.2', 936, '收集完成 100/100', 588)}
      <p style={{ position: 'absolute', left: px(884), top: px(620), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>「合成」出现，借阅 / 获取按钮消失</p>
      <Shot left={884} top={818} k="s4_st3" />
      {lbl(884, 'ST.3', 936, '已合成 · 可研读', 1028)}
      <p style={{ position: 'absolute', left: px(884), top: px(1060), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>按钮：研读 · 研读进度（0/5）</p>
      <Shot left={490} top={818} k="s4_st4" />
      {lbl(490, 'ST.4', 542, '研读中 2/5', 1028)}
      <p style={{ position: 'absolute', left: px(490), top: px(1060), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>按钮：帮我助力 · 停止研读</p>
      <Shot left={96} top={818} k="s4_st5" teal />
      {lbl(96, 'ST.5', 148, '研读完成 · 已激活', 1028, true)}
      <p style={{ position: 'absolute', left: px(96), top: px(1060), color: '#8b9c93', fontSize: '15px', whiteSpace: 'nowrap' }}>无按钮，属性标签转为「已激活」</p>
      {/* transition arrows + labels */}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1700px', pointerEvents: 'none' }} stroke="rgba(226,181,75,0.7)" fill="#e2b54b">
        <line x1="398" y1="562" x2="482" y2="562" strokeWidth="1.5" /><path d="M482 557 L 489 562 L 482 567 Z" />
        <line x1="792" y1="562" x2="876" y2="562" strokeWidth="1.5" /><path d="M876 557 L 883 562 L 876 567 Z" />
        <line x1="1188" y1="672" x2="1188" y2="790" strokeWidth="1.5" /><path d="M1183 790 L 1188 797 L 1193 790 Z" />
        <line x1="887" y1="1000" x2="803" y2="1000" strokeWidth="1.5" /><path d="M803 995 L 796 1000 L 803 1005 Z" />
        <line x1="493" y1="1000" x2="409" y2="1000" strokeWidth="1.5" /><path d="M409 995 L 402 1000 L 409 1005 Z" />
      </svg>
      {transLabel(428, 470, '获取碎片')}
      {transLabel(822, 470, '集满100')}
      {transLabel(1208, 674, '点击合成·必配特效反馈')}
      {transLabel(835, 908, '点击研读')}
      {transLabel(441, 908, '进度读满')}
      {/* design points */}
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(1178), color: '#f4efe3', fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>状态机的三个设计要点</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(388), top: px(1186), color: '#e2b54b', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>DESIGN POINTS</p>
      <RatCardD left={96} top={1242} height={226} zh="按钮即状态" en="STATE = BUTTONS" body="六个状态没有一个多余按钮：能做什么，看一眼右下角按钮就知道——用渐进披露替代说明书，也从源头防住误操作。" />
      <RatCardD left={464} top={1242} height={226} zh="唯一研读位" en="SINGLE SLOT" body="同时只能研读一本，开新书必先停旧书——一个约束让「时间」成为稀缺资源，也让助力有了求助的理由。" />
      <RatCardD left={832} top={1242} height={226} zh="里程碑反馈" en="MILESTONE FX" body="合成必配特效：凑满 100 片的长途跋涉，应当以一次确定的高光收尾——把数值时刻变成记忆时刻。" />
      <p className="al-serif" style={{ position: 'absolute', left: 0, top: px(1548), width: '1280px', textAlign: 'center', fontSize: '32px', fontWeight: 900 }}>
        「 一个界面，六种状态 —<span style={{ color: '#e2b54b' }}>— 按钮就是状态的语</span>言 」
      </p>
    </div>
  );
}

/* ===================== S5A — 主界面解构 ===================== */
function S5A() {
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(1100), color: '#0d1411' }}>
      <Header zh="逐屏解析" en="SCREEN BY SCREEN — DESIGN RATIONALE" num="05" dark={false} titleW={300} />
      <div className="al-screentag al-bebas" style={{ left: px(96), top: px(222), background: '#0d1411', color: '#e2b54b' }}>SCREEN 01</div>
      <p className="al-serif" style={{ position: 'absolute', left: px(200), top: px(218), fontSize: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>图鉴主界面 —— 缺口、轨道与常驻入口</p>
      <div className="al-shot" style={{ left: px(250), top: px(290), width: px(760), height: px(428), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '10px', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}><Img k="s5a" /></div>
      <p style={{ position: 'absolute', left: px(250), top: px(732), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 图鉴主界面 · 收集中（交互稿原图）</p>
      {/* left annotations */}
      <div className="al-dot" style={{ left: px(366.6), top: px(417.4) }} /><div className="al-line" style={{ left: px(227), top: px(422.4), width: px(140) }} />
      <div style={{ position: 'absolute', left: px(83), top: px(410), width: px(140), textAlign: 'right' }}>
        <p style={{ color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>图鉴列表</p>
        <p style={{ color: '#6f6754', fontSize: '16px', lineHeight: 1.5 }}>每册「收藏进度 20/100」缺口外显</p>
      </div>
      <div className="al-dot" style={{ left: px(471), top: px(591) }} /><div className="al-line" style={{ left: px(227), top: px(596), width: px(249) }} />
      <p style={{ position: 'absolute', left: px(83), top: px(609), width: px(140), textAlign: 'right', color: '#6f6754', fontSize: '16px', lineHeight: 1.5 }}>每册「收藏进度 20/100」缺口外显</p>
      <p style={{ position: 'absolute', left: px(127), top: px(585), width: px(64), textAlign: 'center', color: '#292924', fontSize: '16px', fontWeight: 500 }}>研读等级</p>
      {/* right annotations */}
      <div className="al-dot al-dot-teal" style={{ left: px(725), top: px(342.78) }} /><div className="al-dot al-dot-teal" style={{ left: px(725), top: px(381.3) }} />
      <div className="al-vline al-line-teal" style={{ left: px(730), top: px(352.78), height: px(28.5) }} /><div className="al-line al-line-teal" style={{ left: px(730), top: px(386), width: px(294) }} />
      <p style={{ position: 'absolute', left: px(1032), top: px(372), width: px(148), color: '#4fa08b', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>评论区 · 研读助力</p>
      <p style={{ position: 'absolute', left: px(1032), top: px(396), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>两个社交入口常驻详情页</p>
      <div className="al-dot" style={{ left: px(946), top: px(464.76) }} /><div className="al-line" style={{ left: px(951), top: px(469.76), width: px(73) }} />
      <p style={{ position: 'absolute', left: px(1032), top: px(456), color: '#292924', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>双属性 +「未激活」标签</p>
      <p style={{ position: 'absolute', left: px(1032), top: px(480), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>收益提前可见，等待解锁</p>
      <div className="al-dot" style={{ left: px(970), top: px(665.92) }} /><div className="al-line" style={{ left: px(975), top: px(670.92), width: px(49) }} />
      <p style={{ position: 'absolute', left: px(1032), top: px(656), color: '#292924', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>金兰借阅 · 获取图鉴</p>
      <p style={{ position: 'absolute', left: px(1032), top: px(680), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>当前状态唯二可用的动作</p>
      <RatCardL left={96} top={860} zh="目标梯度" en="GOAL GRADIENT" body="「收藏进度 20/100」写在每一行：缺口越具体，补齐的冲动越强——列表本身就是任务清单。" />
      <RatCardL left={464} top={860} zh="收益预告" en="EXPECTATION" body="属性面板带着「未激活」标签提前展示数值——先看见奖励，再为它收集，动机先行。" />
      <RatCardL left={832} top={860} zh="入口常驻" en="VISIBILITY" body="评论区与研读助力以固定入口长在详情页，社交行为不必离开收集动线。" />
    </div>
  );
}

/* ===================== S5B — 获取与筛选 ===================== */
function S5B() {
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(1300) }}>
      <ScreenHead no="02" title="获取的三扇门 —— 渠道、借阅与筛选" dark gold />
      {/* channel popup (portrait) */}
      <div className="al-shot" style={{ left: px(96), top: px(230), width: px(240), height: px(321), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '8px', boxShadow: '0 10px 28px rgba(0,0,0,0.4)' }}><Img k="s5b_channel" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(203), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>▼ 获取图鉴 · 玩法入口弹窗</p>
      <div className="al-dot" style={{ left: px(211), top: px(524) }} /><div className="al-vline" style={{ left: px(216), top: px(529), height: px(111) }} />
      <p style={{ position: 'absolute', left: px(80), top: px(648), color: '#f4efe3', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>四条获取渠道：活动 / 商店 / 派遣 / 赠送</p>
      <p style={{ position: 'absolute', left: px(88), top: px(672), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>点击直接跳转对应场景，玩法即矿脉</p>
      {/* borrow popup */}
      <div className="al-shot" style={{ left: px(420), top: px(230), width: px(534), height: px(300), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '8px', boxShadow: '0 10px 28px rgba(0,0,0,0.4)' }}><Img k="s5b_borrow" /></div>
      <p style={{ position: 'absolute', left: px(420), top: px(538), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 金兰借阅 · 三级弹窗</p>
      <div className="al-dot al-dot-teal" style={{ left: px(728), top: px(450) }} /><div className="al-line al-line-teal" style={{ left: px(733), top: px(455), width: px(238) }} />
      <p style={{ position: 'absolute', left: px(976), top: px(443), color: '#4fa08b', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>只有结义 1 级以上金兰可借阅</p>
      <p style={{ position: 'absolute', left: px(976), top: px(468), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>亲密关系专属通道，社交即资源</p>
      <div className="al-dot" style={{ left: px(718), top: px(274.4) }} /><div className="al-line" style={{ left: px(725), top: px(279.4), width: px(246) }} />
      <p style={{ position: 'absolute', left: px(976), top: px(264), color: '#f4efe3', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>借阅 / 已借阅 双态按钮</p>
      <p style={{ position: 'absolute', left: px(976), top: px(288), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>每人只可借一次，状态即记录</p>
      {/* filter popup */}
      <div className="al-shot" style={{ left: px(420), top: px(615), width: px(534), height: px(300), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '8px', boxShadow: '0 10px 28px rgba(0,0,0,0.4)' }}><Img k="s5b_filter" /></div>
      <p style={{ position: 'absolute', left: px(420), top: px(923), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 筛选图鉴 · 三级弹窗</p>
      <div className="al-dot" style={{ left: px(549), top: px(676.15) }} /><div className="al-line" style={{ left: px(554.5), top: px(681.15), width: px(417) }} />
      <p style={{ position: 'absolute', left: px(976), top: px(669), color: '#f4efe3', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>品质 / 属性 / 进度 三组条件</p>
      <p style={{ position: 'absolute', left: px(976), top: px(694), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>勾选确定后，列表即筛选结果</p>
      <RatCardD left={96} top={1040} zh="用户控制与自由" en="USER CONTROL" body="肝活动、逛商店、等派遣、求赠送——四条路任选，不同时间预算的玩家都有一条能走。" />
      <RatCardD left={464} top={1040} accent="#4fa08b" zh="关系即通道" en="RELATIONSHIP" body="金兰借阅把「结义」做成获取渠道：资源加成反哺社交关系，关系越深路越宽。" />
      <RatCardD left={832} top={1040} zh="过滤减负" en="FILTERING" body="大列表必配筛选：品质、属性、进度三组条件直达目标，找书不该比读书更费力。" />
    </div>
  );
}

/* ===================== S5C — 研读与助力 ===================== */
function S5C() {
  const leftList = [
    { y: 629, n: 1, k: 'gold' as const, t: '好友 / 帮派双圈子分页 —— 先帮亲近的人' },
    { y: 669, n: 2, k: 'gold' as const, t: '对方正在研读的图鉴与进度 —— 帮谁，帮得明白' },
    { y: 709, n: 3, k: 'gold' as const, t: '助力 / 已助力双态 —— 杜绝重复消耗' },
    { y: 749, n: 4, k: 'gold' as const, t: '一键助力所有可助力对象 —— 一次点完，已助力自动沉底' },
  ];
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(1100), color: '#0d1411' }}>
      <ScreenHead no="03" title="研读助力 —— 把等待变成社交" dark={false} />
      <div className="al-shot" style={{ left: px(96), top: px(230), width: px(620), height: px(349), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.25)' }}><Img k="s5c_list" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(587), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 研读助力 · 帮人研读列表（交互稿原图）</p>
      <div className="al-shot" style={{ left: px(760), top: px(230), width: px(420), height: px(236), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.25)' }}><Img k="s5c_send" /></div>
      <p style={{ position: 'absolute', left: px(760), top: px(474), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 助力发送 · 频道选择弹窗（交互稿原图）</p>
      {/* badges over screenshots */}
      <Badge left={232} top={304.5} n={1} kind="gold" />
      <Badge left={502} top={348} n={2} kind="gold" />
      <Badge left={652} top={356} n={3} kind="gold" />
      <Badge left={648} top={532} n={4} kind="gold" />
      <Badge left={1002} top={335} n={5} kind="teal" />
      <Badge left={959} top={356} n={6} kind="teal" />
      {/* left list */}
      {leftList.map((l) => (
        <div key={l.n}>
          <Badge left={96} top={l.y + 1} n={l.n} kind={l.k} />
          <p style={{ position: 'absolute', left: px(130), top: px(l.y), width: px(420), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>{l.t}</p>
        </div>
      ))}
      {/* right list (send popup) */}
      <Badge left={760} top={513} n={5} kind="teal" />
      <p style={{ position: 'absolute', left: px(794), top: px(512), width: px(420), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>今日剩余助力 2/10 —— 每日限额</p>
      <Badge left={760} top={552} n={6} kind="teal" />
      <p style={{ position: 'absolute', left: px(794), top: px(551), color: '#292924', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>勾选好友 / 帮派频道，确定即广播求助</p>
      <RatCardL left={96} top={840} accent="#4fa08b" zh="互惠原则" en="RECIPROCITY" body="「帮我助力」发出的是可一键完成的小忙：成本低到不好意思拒绝，欠下的人情下次还回来。" />
      <RatCardL left={464} top={840} zh="限额防扰" en="RATE LIMIT" body="每日 2/10 的助力次数与频道勾选发送：求助有节制、触达有边界，社交不变成骚扰。" />
      <RatCardL left={832} top={840} zh="批量效率" en="BATCH ACTION" body="一键助力 + 已助力自动沉底：把 N 次重复决策压缩成 1 次，列表永远把「还能帮的」排在前面。" />
    </div>
  );
}

/* ===================== S5D — 赠送与往来 ===================== */
function S5D() {
  const badgeTextColor = '#1a140c';
  const leftList = [
    { y: 585, n: 1, k: 'gold' as const, t: '好友 / 帮派收礼对象列表 —— 先选给谁' },
    { y: 625, n: 2, k: 'gold' as const, t: '碎片网格按品质从高到低排列 —— 颜色即价值' },
    { y: 665, n: 3, k: 'gold' as const, t: '「− 2 +」数量选择 —— 只送背包溢出的碎片' },
    { y: 705, n: 4, k: 'green' as const, t: '往来记录入口常驻赠送页' },
    { y: 745, n: 5, k: 'teal' as const, t: '筛选 + 赠送：点击赠送即完成，飘字提示确认' },
  ];
  const rightList = [
    { y: 586, n: 6, t: '收礼 / 赠礼双页签，双向可查' },
    { y: 625, n: 7, t: '品质 × 数量 × 对象 × 时间，按时间降序' },
  ];
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(1100) }}>
      <ScreenHead no="04" title="碎片赠送与往来记录 —— 溢出的碎片，流动的人情" dark gold />
      <div className="al-shot" style={{ left: px(96), top: px(230), width: px(533), height: px(300), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.4)' }}><Img k="s5d_gift" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(536), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 赠送图鉴 · 二级界面（交互稿原图）</p>
      <div className="al-shot" style={{ left: px(650), top: px(230), width: px(534), height: px(300), border: '1px solid rgba(226,181,75,0.5)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.4)' }}><Img k="s5d_ledger" /></div>
      <p style={{ position: 'absolute', left: px(650), top: px(536), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 往来记录 · 三级弹窗（交互稿原图）</p>
      {/* badges over screenshots */}
      <Badge left={241} top={324} n={1} kind="gold" color={badgeTextColor} />
      <Badge left={457} top={265} n={2} kind="gold" color={badgeTextColor} />
      <Badge left={413.6} top={393.5} n={3} kind="gold" color={badgeTextColor} />
      <Badge left={316} top={484} n={4} kind="green" color={badgeTextColor} />
      <Badge left={499} top={476} n={5} kind="teal" color={badgeTextColor} />
      <Badge left={924} top={273} n={6} kind="green" color={badgeTextColor} />
      <Badge left={977} top={327} n={7} kind="green" color={badgeTextColor} />
      {/* left list */}
      {leftList.map((l) => (
        <div key={l.n}>
          <Badge left={96} top={l.y + 1} n={l.n} kind={l.k} color={badgeTextColor} />
          <p style={{ position: 'absolute', left: px(130), top: px(l.y), width: px(420), color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>{l.t}</p>
        </div>
      ))}
      {/* right list */}
      {rightList.map((l) => (
        <div key={l.n}>
          <Badge left={650} top={l.y + 1} n={l.n} kind="green" color={badgeTextColor} />
          <p style={{ position: 'absolute', left: px(684), top: px(l.y), width: px(400), color: '#f4efe3', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>{l.t}</p>
        </div>
      ))}
      <p style={{ position: 'absolute', left: px(650), top: px(669), width: px(548), color: '#8b9c93', fontSize: '16px', lineHeight: 1.5 }}>※ 防错前置：未完成该图鉴研读时，赠送页显示「没有可以赠送的图鉴碎片」空态拦截。</p>
      <RatCardD left={96} top={840} zh="防错前置" en="ERROR PREVENTION" body="只送「溢出」的碎片，未完成研读则直接空态拦截——从源头杜绝「把自己还要用的送出去」。" />
      <RatCardD left={464} top={840} accent="#4fa08b" zh="损失规避" en="LOSS AVERSION" body="多余碎片本是闲置损耗，赠送把它折算成人情——玩家乐意清库存，关系白得一份礼。" />
      <RatCardD left={832} top={840} zh="可追溯" en="TRACEABILITY" body="收礼 / 赠礼双向记录、数量对象时间俱全——人情有账本，信任才有依据。" />
    </div>
  );
}

/* ===================== S5E — 评论与排行 ===================== */
function S5E() {
  const rightList = [
    { y: 570, n: 1, k: 'gold' as const, t: '最新 / 最热双排序 —— 时效与质量两种读法' },
    { y: 610, n: 2, k: 'green' as const, t: '我的评论永远置顶 —— 自己的声音先被看见' },
    { y: 650, n: 3, k: 'gold' as const, t: '点赞与举报长在每条评论上' },
    { y: 690, n: 4, k: 'gold' as const, t: '输入框限 30 字 + 发送 —— 短评低门槛' },
    { y: 730, n: 5, k: 'teal' as const, t: '热门评论 / 收集排行双页签收纳' },
    { y: 770, n: 6, k: 'teal' as const, t: '排行展示前十位研读完成的玩家：排名 · 昵称 · 收集时间 · 帮派' },
  ];
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(1200), color: '#0d1411' }}>
      <ScreenHead no="05" title="评论区与收集排行 —— 收集的观众席" dark={false} />
      <div className="al-shot" style={{ left: px(96), top: px(181), width: px(533), height: px(300), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.25)' }}><Img k="s5e_comment" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(489), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 评论区 · 二级弹窗（交互稿原图）</p>
      <div className="al-shot" style={{ left: px(650), top: px(181), width: px(534), height: px(300), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.25)' }}><Img k="s5e_rank" /></div>
      <p style={{ position: 'absolute', left: px(650), top: px(489), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 收集排行 · 前十榜（交互稿原图）</p>
      {/* badges over comment screenshot */}
      <Badge left={360} top={229} n={1} kind="gold" />
      <Badge left={303} top={254} n={2} kind="green" />
      <Badge left={454} top={304} n={3} kind="gold" />
      <Badge left={390} top={430} n={4} kind="gold" />
      <Badge left={582} top={237} n={5} kind="teal" />
      <Badge left={1068} top={331} n={6} kind="teal" />
      {/* report popup */}
      <div className="al-shot" style={{ left: px(96), top: px(570), width: px(497), height: px(280), border: '1px solid rgba(13,20,17,0.25)', borderRadius: '8px', boxShadow: '0 10px 26px rgba(0,0,0,0.25)' }}><Img k="s5e_report" /></div>
      <p style={{ position: 'absolute', left: px(96), top: px(858), color: '#6f6754', fontSize: '16px', whiteSpace: 'nowrap' }}>▲ 举报确认弹窗：二次确认防误触，一次点击完成上报</p>
      {/* right list */}
      {rightList.map((l) => (
        <div key={l.n}>
          <Badge left={680} top={l.y + 1} n={l.n} kind={l.k} />
          <p style={{ position: 'absolute', left: px(714), top: px(l.y), width: px(470), color: '#292924', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}>{l.t}</p>
        </div>
      ))}
      <RatCardL left={96} top={948} accent="#4fa08b" zh="社会认同" en="SOCIAL PROOF" body="每本图鉴自带评论区：别人的「真好玩」是最有说服力的种草，收集因此有了参照系。" bodyW={306} />
      <RatCardL left={464} top={948} zh="自我相关" en="SELF-RELEVANCE" body="我的评论置顶、收集时间上榜——与「我」有关的信息永远优先呈现，表达欲被正向强化。" bodyW={326} />
      <RatCardL left={832} top={948} zh="轻量治理" en="MODERATION" body="30 字上限压低噪声、举报二次确认防误触——开放表达与内容安全取得平衡。" />
    </div>
  );
}

/* ===================== S6 — 心流历程 ===================== */
function S6() {
  // milestone nodes (18px circles). peaks (02,04) red, others gold
  const nodes = [
    { n: '01', red: false, cx: 320, cy: 620, numX: 282, txtX: 308, labY: 648, body: '缺口与收益同时亮出，目标即刻成立', bodyX: 198, bodyY: 667, vTop: 629, vH: 21 },
    { n: '02', red: true, cx: 575, cy: 460, numX: 537, txtX: 563, labY: 372, body: '100 片落定 · 特效高光（峰值）', bodyX: 466, bodyY: 394, vTop: 418, vH: 33 },
    { n: '03', red: false, cx: 710, cy: 528, numX: 672, txtX: 698, labY: 556, body: '等待被助力填满，无聊期变社交期', bodyX: 596, bodyY: 578, vTop: 537, vH: 21 },
    { n: '04', red: true, cx: 880, cy: 420, numX: 842, txtX: 868, labY: 332, body: '双属性到账，变强可感知（峰值）', bodyX: 766, bodyY: 354, vTop: 378, vH: 33 },
    { n: '05', red: false, cx: 1080, cy: 325, numX: 1042, txtX: 1068, labY: 237, body: '评论晒书 · 盯上下一本', bodyX: 1002, bodyY: 260, vTop: 283, vH: 33 },
  ];
  const ticks = [['收集期', 230, 251], ['研读期', 610, 631], ['激活后', 1146, 1021]] as const;
  const scenes = [
    { x: 96, s: 'S1', sColor: '#e2b54b', zh: '日常刷本 · 顺手收', en: 'DAILY GRIND', b1: '刷活动掉碎片 → 进度 +1 → 列表缺口小一格。', b2: '收集寄生在既有玩法上，有进账，零负担。', tag: '对应设计：四渠道获取 / 进度外显', tagColor: '#e2b54b' },
    { x: 464, s: 'S2', sColor: '#4fa08b', zh: '晚间帮派 · 互助时段', en: 'GUILD HOUR', b1: '上线先清助力列表，再求助广播到帮派频道。', b2: '互惠在固定时段集中发生，帮派多个见面向。', tag: '对应设计：一键助力 / 频道广播', tagColor: '#4fa08b' },
    { x: 832, s: 'S3', sColor: '#e2b54b', zh: '收齐之夜 · 合成晒书', en: 'FINALE NIGHT', b1: '合成 → 属性激活 → 评论盖楼 · 排行留名。', b2: '双峰收尾让图鉴值得讲述，顺手盯上下一本。', tag: '对应设计：合成特效 / 评论与排行', tagColor: '#e2b54b' },
  ];
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(1280) }}>
      <Header zh="玩家心流历程" en="FLOW JOURNEY — LIFE OF ONE CODEX" num="06" dark titleW={300} numLeft={1058} />
      <svg style={{ position: 'absolute', left: 0, top: 0, width: '1280px', height: '1280px', pointerEvents: 'none' }}>
        {/* axes */}
        <path d="M140 260 L 140 700 L 1150 700" fill="none" stroke="rgba(244,239,227,0.3)" strokeWidth="1.5" />
        {/* flow channel band */}
        <path d="M160 540 L 1130 290" fill="none" stroke="rgba(226,181,75,0.25)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M160 700 L 1130 450" fill="none" stroke="rgba(226,181,75,0.25)" strokeWidth="1.5" strokeDasharray="6 6" />
        {/* engagement curve through milestones */}
        <path d="M200,655 C260,640 300,628 320,620 C420,580 500,520 575,460 C640,500 680,512 710,528 C770,500 820,470 880,420 C960,375 1040,345 1080,325" fill="none" stroke="#e2b54b" strokeWidth="2.5" />
        {/* dotted baseline */}
        {[220, 296, 372, 448, 524, 600, 676, 752, 828, 904, 980, 1056].map((x) => <circle key={x} cx={x} cy={689.5} r={1.5} fill="rgba(244,239,227,0.4)" />)}
      </svg>
      <p style={{ position: 'absolute', left: px(112), top: px(330), width: px(64), color: '#8b9c93', fontSize: '16px', transform: 'rotate(-90deg)', transformOrigin: 'left top', whiteSpace: 'nowrap' }}>投入强度</p>
      <p style={{ position: 'absolute', left: px(939), top: px(714), color: '#8b9c93', fontSize: '16px', whiteSpace: 'nowrap' }}>一本图鉴的生命周期 →</p>
      <p style={{ position: 'absolute', left: px(1010), top: px(388), color: '#8b9c93', fontSize: '16px', letterSpacing: '2px', transform: 'rotate(-14deg)', whiteSpace: 'nowrap' }}>心流通道</p>
      <p style={{ position: 'absolute', left: px(190), top: px(480), color: 'rgba(139,156,147,0.7)', fontSize: '16px', whiteSpace: 'nowrap' }}>焦虑（强求肝度）</p>
      <p style={{ position: 'absolute', left: px(560), top: px(672), color: 'rgba(139,156,147,0.7)', fontSize: '16px', whiteSpace: 'nowrap' }}>无聊（纯挂机等待）</p>
      {ticks.map(([t, lx, tx]) => (
        <div key={t}>
          <p style={{ position: 'absolute', left: px(lx), top: px(714), color: 'rgba(244,239,227,0.8)', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</p>
          <div style={{ position: 'absolute', left: px(tx), top: px(692), width: '1px', height: '8px', background: 'rgba(244,239,227,0.5)' }} />
        </div>
      ))}
      {nodes.map((f) => (
        <div key={f.n}>
          <div style={{ position: 'absolute', left: px(f.cx - 9), top: px(f.cy - 9), width: '18px', height: '18px', borderRadius: '50%', background: f.red ? '#e0492f' : '#e2b54b', border: '3px solid #0d1411', boxShadow: `0 0 0 2px ${f.red ? '#e0492f' : '#e2b54b'}, 0 0 14px ${f.red ? 'rgba(224,73,47,0.7)' : 'rgba(226,181,75,0.7)'}` }} />
          <div style={{ position: 'absolute', left: px(f.cx), top: px(f.vTop), width: '1px', height: px(f.vH), background: f.red ? 'rgba(224,73,47,0.6)' : 'rgba(226,181,75,0.6)' }} />
          <p className="al-bebas" style={{ position: 'absolute', left: px(f.numX), top: px(f.labY + 2), color: f.red ? '#e0492f' : '#e2b54b', fontSize: '18px' }}>{f.n}</p>
          <p style={{ position: 'absolute', left: px(f.txtX), top: px(f.labY), color: '#f4efe3', fontSize: '18px', fontWeight: 500, whiteSpace: 'nowrap' }}>{['开册', '合成', '研读', '激活', '余韵'][Number(f.n) - 1]}</p>
          <p style={{ position: 'absolute', left: px(f.bodyX), top: px(f.bodyY), color: '#8b9c93', fontSize: '16px', lineHeight: 1.5, whiteSpace: 'nowrap' }}>{f.body}</p>
        </div>
      ))}
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(812), color: '#f4efe3', fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}>三个真实使用场景，印证同一条曲线</p>
      <p className="al-bebas" style={{ position: 'absolute', left: px(556), top: px(820), color: '#e2b54b', fontSize: '16px', letterSpacing: '4px', whiteSpace: 'nowrap' }}>USE SCENARIOS</p>
      {scenes.map((c) => (
        <div key={c.s} style={{ position: 'absolute', left: px(c.x), top: px(870), width: px(352), height: px(312), background: '#14201b', borderRadius: '16px', overflow: 'hidden' }}>
          <p className="al-bebas" style={{ position: 'absolute', left: px(28), top: px(24), color: c.sColor, fontSize: '35px' }}>{c.s}</p>
          <p className="al-serif" style={{ position: 'absolute', left: px(28), top: px(74), color: '#f4efe3', fontSize: '23px', fontWeight: 700, whiteSpace: 'nowrap' }}>{c.zh}</p>
          <p className="al-bebas" style={{ position: 'absolute', left: px(28), top: px(110), color: '#8b9c93', fontSize: '16px', letterSpacing: '3px', whiteSpace: 'nowrap' }}>{c.en}</p>
          <p style={{ position: 'absolute', left: px(28), top: px(142), color: 'rgba(244,239,227,0.9)', fontSize: '16px', fontWeight: 500, lineHeight: 1.65, whiteSpace: 'nowrap' }}>{c.b1}</p>
          <p style={{ position: 'absolute', left: px(28), top: px(190), color: '#8b9c93', fontSize: '16px', lineHeight: 1.65, whiteSpace: 'nowrap' }}>{c.b2}</p>
          <div style={{ position: 'absolute', left: px(28), top: px(250), padding: '6px 12px', border: `1px solid ${c.tagColor === '#4fa08b' ? 'rgba(79,160,139,0.7)' : 'rgba(226,181,75,0.7)'}`, borderRadius: '999px', display: 'inline-flex' }}>
            <span style={{ color: c.tagColor, fontSize: '16px', whiteSpace: 'nowrap' }}>{c.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===================== S7 — 美术风格 ===================== */
function S7() {
  const reasons = [
    { n: '01', zh: '书房暗底', y: 236, body: '墨色底板如灯下书房——藏品自发光，界面退后一步，让图鉴成为唯一主角。' },
    { n: '02', zh: '颜色即价值', y: 344, body: '红黄紫蓝绿五档品质色直接作碎片底板：扫一眼网格，先看见的永远是最贵的。' },
    { n: '03', zh: '圆形镜面', y: 452, body: '详情区以大圆窗展示单册图鉴，似放大镜亦似印鉴——聚焦、仪式感、古籍气质三者兼得。' },
  ];
  const swatches = [
    { x: 96, c: '#2e2e2e', l1: '暗灰底', l2: '书房舞台' },
    { x: 174, c: '#c84b3c', l1: '品质红', l2: '最高档' },
    { x: 252, c: '#d9a23f', l1: '品质黄', l2: '高档' },
    { x: 330, c: '#9a5bbf', l1: '品质紫', l2: '中高档' },
    { x: 408, c: '#4d7fc4', l1: '品质蓝', l2: '中档' },
    { x: 486, c: '#5fa052', l1: '品质绿', l2: '普通' },
  ];
  return (
    <div className="atlas-sec al-bg-cream" style={{ height: px(900), color: '#0d1411' }}>
      <Header zh="界面美术风格推导" en="ART DIRECTION — DARK STUDY, COLOR AS VALUE" num="07" dark={false} numLeft={1058} />
      {reasons.map((r) => (
        <div key={r.n}>
          <p className="al-bebas" style={{ position: 'absolute', left: px(96), top: px(r.y), color: '#e2b54b', fontSize: '35px' }}>{r.n}</p>
          <p className="al-serif" style={{ position: 'absolute', left: px(146), top: px(r.y + 2), color: '#0d1411', fontSize: '24px', fontWeight: 700, whiteSpace: 'nowrap' }}>{r.zh}</p>
          <p style={{ position: 'absolute', left: px(146), top: px(r.y + 38), width: px(404), color: '#4a4538', fontSize: '16px', lineHeight: 1.75 }}>{r.body}</p>
        </div>
      ))}
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(590), color: '#0d1411', fontSize: '21px', fontWeight: 700, whiteSpace: 'nowrap' }}>交互稿中的功能色</p>
      {swatches.map((s) => (
        <div key={s.l1}>
          <div style={{ position: 'absolute', left: px(s.x), top: px(636), width: px(44), height: px(44), borderRadius: '10px', background: s.c, border: '1px solid rgba(13,20,17,0.15)' }} />
          <p style={{ position: 'absolute', left: px(s.x + 22), top: px(690), transform: 'translateX(-50%)', color: '#0d1411', fontSize: '16px', fontWeight: 500, textAlign: 'center', whiteSpace: 'nowrap' }}>{s.l1}</p>
          <p style={{ position: 'absolute', left: px(s.x + 22), top: px(708), transform: 'translateX(-50%)', color: '#6f6754', fontSize: '16px', textAlign: 'center', whiteSpace: 'nowrap' }}>{s.l2}</p>
        </div>
      ))}
      <p style={{ position: 'absolute', left: px(96), top: px(748), width: px(454), color: '#6f6754', fontSize: '16px', lineHeight: 1.5 }}>碎片网格与往来记录均沿用同一套品质色——跨界面的颜色语言保持一致。</p>
      {/* reference screenshot (portrait) */}
      <div className="al-shot" style={{ left: px(600), top: px(230), width: px(316), height: px(562), border: '2px solid rgba(13,20,17,0.3)', borderRadius: '18px', boxShadow: '0 12px 30px rgba(0,0,0,0.25)' }}><Img k="s7_ref" /></div>
      <p style={{ position: 'absolute', left: px(600), top: px(806), color: '#0d1411', fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>参考 ·《阴阳师：妖怪屋》图鉴页</p>
      {/* why borrow text */}
      <div style={{ position: 'absolute', left: px(927), top: px(238), width: px(321), color: '#4a4538', fontSize: '16px', lineHeight: 1.65 }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 900 }}>为什么可借鉴——</p>
        <p style={{ marginTop: px(16) }}>· 把图鉴做成「分册陈列」：式神、家具、小妖各自一册封面，陈列本身就是目标墙；</p>
        <p style={{ marginTop: px(16) }}>· 每册封面外显收集进度徽章——和本案「列表行内 20/100」同一思路：缺口可见，才有补齐冲动；</p>
        <p style={{ marginTop: px(16) }}>· 入口聚合在一页，逛图鉴像逛书架——收集系统的通用范式：陈列即目标，进度即诱饵。</p>
      </div>
    </div>
  );
}

/* ===================== S8 — 封底 ===================== */
function S8() {
  return (
    <div className="atlas-sec al-bg-dark" style={{ height: px(400) }}>
      <div style={{ position: 'absolute', left: px(96), top: 0, width: px(1088), height: px(2), background: '#e2b54b' }} />
      <p className="al-bebas" style={{ position: 'absolute', left: px(96), top: px(84), fontSize: '101px', letterSpacing: '4px', lineHeight: 1, whiteSpace: 'nowrap', background: 'linear-gradient(90deg,#e2b54b,#f4d98a)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>THANKS FOR WATCHING</p>
      <p className="al-serif" style={{ position: 'absolute', left: px(96), top: px(226), color: '#f4efe3', fontSize: '23px', fontWeight: 700, whiteSpace: 'nowrap' }}>《庆余年》图鉴手册 · 交互设计</p>
      <div className="al-diamond" style={{ left: px(1100), top: px(120), width: px(16), height: px(16), background: '#4fa08b' }} />
      {[1060, 1082, 1104].map((x) => (
        <div key={x} style={{ position: 'absolute', left: px(x), top: px(170), width: '6px', height: '6px', borderRadius: '50%', background: '#e2b54b' }} />
      ))}
    </div>
  );
}

/* ===================== Root ===================== */
export function AtlasExactCase() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('atlas-motion-disabled');
      return;
    }

    root.classList.add('atlas-motion-ready');

    const sections = Array.from(root.querySelectorAll<HTMLElement>('.atlas-sec'));
    sections.forEach((section, sectionIndex) => {
      section.style.setProperty('--atlas-section-order', String(sectionIndex));

      const items = Array.from(section.children).filter((node): node is HTMLElement => node instanceof HTMLElement);
      items
        .map((item, domIndex) => {
          const rect = item.getBoundingClientRect();
          const sectionRect = section.getBoundingClientRect();
          return {
            item,
            domIndex,
            top: rect.height || rect.width ? rect.top - sectionRect.top : Number(item.style.top?.replace('px', '') || 0),
            left: rect.height || rect.width ? rect.left - sectionRect.left : Number(item.style.left?.replace('px', '') || 0),
          };
        })
        .sort((a, b) => (a.top === b.top ? a.left - b.left : a.top - b.top))
        .forEach(({ item }, order) => {
          if (item.dataset.noReveal === 'true') return;
          item.classList.add('atlas-reveal-item');
          item.style.setProperty('--atlas-reveal-order', String(Math.min(order, 28)));
        });
    });

    const revealSection = (section: HTMLElement) => {
      section.classList.add('atlas-reveal-in');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealSection(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -14% 0px', threshold: 0.08 },
    );

    sections.forEach((section) => {
      observer.observe(section);
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82 && rect.bottom > 0) {
        window.requestAnimationFrame(() => revealSection(section));
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="atlas-canvas">
      <S0 /><S1 /><S2 /><S3 /><S4 /><S5A /><S5B /><S5C /><S5D /><S5E /><S6 /><S7 /><S8 />
    </div>
  );
}

export default AtlasExactCase;
