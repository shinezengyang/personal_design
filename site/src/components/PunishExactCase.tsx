import type { CSSProperties, ReactNode } from 'react';
import './PunishExactCase.css';

/* ===== Game-screenshot / image-fill assets (interaction-doc originals) ===== */
const A: Record<string, string> = {
  // P06 入口强化
  p06_main: 'https://www.figma.com/api/mcp/asset/bba0f220-4a00-4af8-a542-1c9faf33290e',
  p06_popup: 'https://www.figma.com/api/mcp/asset/89f4e3a3-7b3c-4f25-87b5-f2c32328e745',
  // P07 入口界面
  p07_panel: 'https://www.figma.com/api/mcp/asset/a137f2c3-b83b-487b-843c-fa0e9225e12a',
  p07_stagebar: 'https://www.figma.com/api/mcp/asset/4aa89d89-73bc-4957-b989-fe16176c0067',
  p07_buttons: 'https://www.figma.com/api/mcp/asset/495725d7-c0bf-4154-9a94-8d17792725ea',
  // P08 镜像副本 — 4 steps
  p08_s1: 'https://www.figma.com/api/mcp/asset/f5443df7-4b66-4ace-82db-2ddda3cd0c70',
  p08_s2: 'https://www.figma.com/api/mcp/asset/71d6731f-c457-47b0-bf18-89f712e44ea8',
  p08_s3: 'https://www.figma.com/api/mcp/asset/323ada56-0849-47cd-a256-c1535619a5ef',
  p08_s4: 'https://www.figma.com/api/mcp/asset/a68f3b83-7043-42ec-a64c-093de756b647',
  // P09 追踪栏
  p09_t1: 'https://www.figma.com/api/mcp/asset/276dd71c-3ff0-43f9-bc21-750a6d057761',
  p09_t2: 'https://www.figma.com/api/mcp/asset/977565ec-76ae-4ca5-b5a0-f23aec181883',
  // P10 BOSS共斗
  p10_rank: 'https://www.figma.com/api/mcp/asset/412bfaa1-07ff-4c81-8cfb-8686f3cc04be',
  // P11 结算
  p11_screen: 'https://www.figma.com/api/mcp/asset/8fd6dcb5-a696-4bfc-942d-673077f8eb60',
  p11_row: 'https://www.figma.com/api/mcp/asset/4f56fa15-f9c7-447f-8a48-8c30338c9571',
  // P12 容错
  p12_enter: 'https://www.figma.com/api/mcp/asset/223beef5-d8bd-4269-853d-8607501b6952',
  p12_exit: 'https://www.figma.com/api/mcp/asset/25a2a1b7-9ba8-49b0-9f3d-d3a258e659bd',
};

type CSS = CSSProperties;

/* color tokens */
const INK = '#1b1822';
const GOLD = '#c99b45';
const RED = '#c8322b';
const WHITE = '#fff';

/* image-fill helper */
function Img({ k, l, t, w, h, r = 8, style }: { k: string; l: number; t: number; w: number; h: number; r?: number; style?: CSS }) {
  return (
    <div className="pe-shot" style={{ left: l, top: t, width: w, height: h, borderRadius: r, ...style }}>
      <img src={A[k]} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

/* absolutely-positioned div */
function D({ l, t, w, h, style, className, children }: { l: number; t: number; w?: number; h?: number; style?: CSS; className?: string; children?: ReactNode }) {
  return (
    <div className={className ? `pe-abs ${className}` : 'pe-abs'} style={{ left: l, top: t, width: w, height: h, ...style }}>
      {children}
    </div>
  );
}

/* absolutely-positioned text */
function T({ l, t, w, h, style, className, children }: { l: number; t: number; w?: number; h?: number; style?: CSS; className?: string; children?: ReactNode }) {
  return (
    <p className={className ? `pe-abs ${className}` : 'pe-abs'} style={{ left: l, top: t, width: w, height: h, whiteSpace: w ? undefined : 'nowrap', ...style }}>
      {children}
    </p>
  );
}

/* numbered annotation badge (vermilion disc, white digit) */
function Badge({ l, t, n, size = 22 }: { l: number; t: number; n: number | string; size?: number }) {
  return (
    <div className="pe-badge" style={{ left: l, top: t, width: size, height: size, fontSize: size >= 24 ? 13 : 12 }}>{n}</div>
  );
}

/* section header: tag pill + zh black title + en sub */
function PointHead({ tag, tagBg = RED, tagColor = WHITE, title, titleColor = INK, en, enColor = '#9e7329' }: { tag: string; tagBg?: string; tagColor?: string; title: string; titleColor?: string; en: string; enColor?: string }) {
  return (
    <>
      <div className="pe-abs" style={{ left: 120, top: 90, width: 90, height: 26, background: tagBg, borderRadius: 13 }} />
      <T l={131} t={93} style={{ fontFamily: "'Noto Sans SC'", fontWeight: 700, fontSize: 16, color: tagColor }}>{tag}</T>
      <T l={120} t={128} className="pe-serif" style={{ fontFamily: "'Noto Serif SC'", fontWeight: 900, fontSize: 44, color: titleColor }}>{title}</T>
      <T l={122} t={186} className="pe-inter" style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, letterSpacing: 3, color: enColor }}>{en}</T>
    </>
  );
}

/* eyebrow header for P02-P05: diamond + en eyebrow + black serif title */
function EyebrowHead({ diamond, en, enColor, title, titleColor }: { diamond: string; en: string; enColor: string; title: string; titleColor: string }) {
  return (
    <>
      <div className="pe-diamond" style={{ left: 122, top: 89.5, width: 12, height: 12, background: diamond }} />
      <T l={150} t={95} className="pe-inter" style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, letterSpacing: 5, color: enColor, whiteSpace: 'pre' }}>{en}</T>
      <T l={120} t={128} className="pe-serif" style={{ fontFamily: "'Noto Serif SC'", fontWeight: 900, fontSize: 46, color: titleColor }}>{title}</T>
    </>
  );
}

/* shared text styles */
const sBody = (color: string, size = 16, lh = 1.4): CSS => ({ fontFamily: "'Noto Sans SC'", fontWeight: 400, fontSize: size, color, lineHeight: typeof lh === 'number' && lh > 3 ? `${lh}px` : lh });
const sBold = (color: string, size = 16): CSS => ({ fontFamily: "'Noto Sans SC'", fontWeight: 700, fontSize: size, color });
const sMed = (color: string, size = 16): CSS => ({ fontFamily: "'Noto Sans SC'", fontWeight: 500, fontSize: size, color });
const sSerifB = (color: string, size = 22): CSS => ({ fontFamily: "'Noto Serif SC'", fontWeight: 700, fontSize: size, color });
const sInterSB = (color: string, size = 16, ls = 2): CSS => ({ fontFamily: "'Inter'", fontWeight: 600, fontSize: size, letterSpacing: ls, color });
const sMa = (color: string, size: number): CSS => ({ fontFamily: "'Ma Shan Zheng'", fontWeight: 400, fontSize: size, color });

/* ===== a small rationale card (dark) used on point slides ===== */
function DarkCard({ l, t, w, h, accentW = 28, zh, en, enAlign = 'left', body, bodyW, border }: { l: number; t: number; w: number; h: number; accentW?: number; zh: string; en: string; enAlign?: 'left' | 'right'; body: string; bodyW: number; border?: string }) {
  return (
    <>
      <D l={l} t={t} w={w} h={h} style={{ background: '#1e1a26', borderRadius: 16, border }} />
      <D l={l + 13} t={t + 15} w={accentW} h={4} style={{ background: GOLD }} />
      <T l={l + 13} t={t + 31} style={{ ...sSerifB(GOLD, 22) }}>{zh}</T>
      {enAlign === 'left'
        ? <T l={l + 13} t={t + 61} style={{ ...sInterSB('rgba(201,155,69,0.7)', 16, 2) }}>{en}</T>
        : <T l={l + w - 13} t={t + 61} style={{ ...sInterSB('rgba(201,155,69,0.6)', 16, 2), transform: 'translateX(-100%)' }}>{en}</T>}
      <T l={l + 13} t={t + 85} w={bodyW} style={{ ...sBody('rgba(255,255,255,0.8)', 16, 22) }}>{body}</T>
    </>
  );
}

/* =================================================================== */
/* P01 封面                                                            */
/* =================================================================== */
function P01() {
  // decorative dot grid 6 cols × 4 rows (x: 965..1225 step 52, y: 88..244 step 52)
  const cols = [965, 1017, 1069, 1121, 1173, 1225];
  const rows = [88, 140, 192, 244];
  return (
    <section className="punish-slide pe-bg-ink" data-node-id="8844:7607">
      {/* giant ghost 惩 */}
      <T l={640} t={150} className="pe-ma" style={{ fontSize: 588, lineHeight: 1, color: 'rgba(201,155,69,0.05)' }}>惩</T>
      {/* dot grid */}
      {rows.map((y) => cols.map((x) => (
        <div key={`${x}-${y}`} className="pe-dot" style={{ left: x, top: y, width: 5, height: 5, background: 'rgba(201,155,69,0.5)' }} />
      )))}
      {/* corner ring bottom-left */}
      <div className="pe-abs" style={{ left: -170, top: 730, width: 340, height: 340, borderRadius: '50%', border: '1px solid rgba(201,155,69,0.15)' }} />
      {/* accent stick + cap */}
      <div className="pe-abs" style={{ left: 140, top: 235, width: 3, height: 200, background: RED }} />
      <div className="pe-abs" style={{ left: 136, top: 225, width: 11, height: 11, background: GOLD }} />
      {/* eyebrow */}
      <T l={140} t={470} style={{ ...sMed(GOLD, 21), letterSpacing: 3 }}>限时多人玩法</T>
      {/* title */}
      <T l={134} t={505} className="pe-ma" style={{ fontSize: 185, lineHeight: 1, color: WHITE }}>惩凶除恶</T>
      {/* 优化 stamp */}
      <div className="pe-abs" style={{ left: 886, top: 532, width: 96, height: 96, background: RED, borderRadius: 10, transform: 'rotate(7deg)' }} />
      <T l={877} t={555} className="pe-ma" style={{ fontSize: 48, color: WHITE, transform: 'rotate(7deg)', transformOrigin: 'left top' }}>优化</T>
      {/* footer kicker */}
      <T l={140} t={712} className="pe-inter" style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, letterSpacing: 6, color: 'rgba(255,255,255,0.45)' }}>PUNISH THE WICKED · GAMEPLAY INTERACTION REDESIGN</T>
    </section>
  );
}

/* =================================================================== */
/* P02 系统目的                                                        */
/* =================================================================== */
function P02() {
  const ReqRow = ({ t, label, tag, tagFilled }: { t: number; label: string; tag: string; tagFilled: boolean }) => (
    <>
      <div className="pe-diamond" style={{ left: 951, top: t + 1.6, width: 9, height: 9, background: RED }} />
      <T l={972} t={t} style={{ ...sMed(INK, 16) }}>{label}</T>
      <div className="pe-abs" style={{ left: 950, top: t + 30, width: 52, height: 24, borderRadius: 20, background: tagFilled ? RED : 'transparent', border: tagFilled ? 'none' : '1px solid rgba(27,24,34,0.5)' }} />
      <T l={959} t={t + 33} style={{ ...sBold(tagFilled ? WHITE : 'rgba(27,24,34,0.7)', 16) }}>{tag}</T>
    </>
  );
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7608">
      <div className="pe-diamond" style={{ left: 122, top: 89.5, width: 12, height: 12, background: RED }} />
      <T l={150} t={95} className="pe-inter" style={{ ...sInterSB(RED, 16, 5) }}>O R I G I N</T>
      <T l={120} t={128} style={{ ...sSerifB(INK, 46), fontWeight: 900 }}>起因 · 为什么要改</T>
      <T l={120} t={249} style={{ ...sSerifB(INK, 32) }}>「 热闹的限时活动，玩家为何不来玩？ 」</T>
      <div className="pe-abs" style={{ left: 124, top: 302, width: 560, height: 6, background: 'rgba(201,155,69,0.45)' }} />

      {/* STAGE 1 card */}
      <D l={120} t={354} w={370} h={330} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <T l={152} t={382} className="pe-inter" style={{ ...sInterSB(GOLD, 16, 3) }}>STAGE 1</T>
      <div className="pe-abs" style={{ left: 152, top: 404, width: 60, height: 28, background: RED, borderRadius: 4 }} />
      <T l={159} t={408} style={{ ...sBold(WHITE, 16) }}>阶段一</T>
      <T l={152} t={446} style={{ ...sBold(WHITE, 24) }}>野外精英怪 · 全服争抢</T>
      <T l={152} t={490} w={306} style={{ ...sBody('rgba(255,255,255,0.72)', 16, 26) }}>精英野怪数量有限、先到先得。后到的玩家无怪可打，「参与」变成「围观」，积极性断崖下跌。</T>
      <div className="pe-abs" style={{ left: 152, top: 584, width: 306, height: 1, background: 'rgba(201,155,69,0.35)' }} />
      <T l={152} t={600} style={{ ...sMed(GOLD, 16) }}>↓ 优化方向</T>
      <T l={152} t={624} w={300} style={{ ...sBold(GOLD, 16) }}>重做阶段一玩法机制，提升参与积极性</T>

      {/* STAGE 2 card */}
      <D l={520} t={354} w={370} h={330} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <T l={552} t={382} className="pe-inter" style={{ ...sInterSB(GOLD, 16, 3) }}>STAGE 2</T>
      <div className="pe-abs" style={{ left: 552, top: 404, width: 60, height: 28, background: RED, borderRadius: 4 }} />
      <T l={559} t={408} style={{ ...sBold(WHITE, 16) }}>阶段二</T>
      <T l={552} t={446} style={{ ...sBold(WHITE, 24) }}>共斗匪首 · 赢了也无感</T>
      <T l={552} t={490} w={320} style={{ ...sBody('rgba(255,255,255,0.72)', 16, 26) }}>匪首倒下即活动结束，没有结算、没有排名、没有回报展示，玩家的付出得不到确认。</T>
      <div className="pe-abs" style={{ left: 552, top: 584, width: 306, height: 1, background: 'rgba(201,155,69,0.35)' }} />
      <T l={552} t={600} style={{ ...sMed(GOLD, 16) }}>↓ 优化方向</T>
      <T l={552} t={624} w={300} style={{ ...sBold(GOLD, 16) }}>新增阶段二结算反馈，让付出被看见</T>

      {/* 界面需求 list */}
      <T l={950} t={362} style={{ fontFamily: "'Noto Serif SC'", fontWeight: 600, fontSize: 23, color: INK }}>界面需求</T>
      <div className="pe-abs" style={{ left: 950, top: 396, width: 210, height: 2, background: 'rgba(27,24,34,0.8)' }} />
      <ReqRow t={422} label="活动入口界面" tag="优 化" tagFilled={false} />
      <div className="pe-abs" style={{ left: 950, top: 488, width: 210, height: 1, background: 'rgba(27,24,34,0.12)' }} />
      <ReqRow t={508} label="任务栏 · 游历页签" tag="优 化" tagFilled={false} />
      <div className="pe-abs" style={{ left: 950, top: 574, width: 210, height: 1, background: 'rgba(27,24,34,0.12)' }} />
      <ReqRow t={594} label="阶段二结算界面" tag="新 增" tagFilled />
      <div className="pe-abs" style={{ left: 950, top: 660, width: 210, height: 1, background: 'rgba(27,24,34,0.12)' }} />
    </section>
  );
}

/* =================================================================== */
/* P03 玩法解构                                                        */
/* =================================================================== */
function P03() {
  const cities: { name: string; ny: number; cells: { x: number; ch: string }[] }[] = [
    { name: '澹州', ny: 586, cells: [{ x: 180, ch: '甲' }, { x: 234, ch: '乙' }, { x: 288, ch: '丙' }] },
    { name: '青州', ny: 642, cells: [{ x: 180, ch: '丁' }, { x: 234, ch: '戊' }, { x: 288, ch: '己' }] },
    { name: '杭州', ny: 698, cells: [{ x: 180, ch: '庚' }, { x: 234, ch: '辛' }, { x: 288, ch: '壬' }] },
  ];
  return (
    <section className="punish-slide pe-bg-ink" data-node-id="8844:7609">
      <EyebrowHead diamond={GOLD} en="D E C O N S T R U C T I O N" enColor={GOLD} title="玩法解构 · 一小时里发生什么" titleColor={WHITE} />
      {/* timeline */}
      <div className="pe-abs" style={{ left: 120, top: 420, width: 1040, height: 2, background: 'rgba(201,155,69,0.55)' }} />
      <T l={108} t={438} className="pe-inter" style={{ ...sInterSB(GOLD, 16, 1) }}>16:00</T>
      <T l={1118} t={438} className="pe-inter" style={{ ...sInterSB(GOLD, 16, 1) }}>17:00</T>
      <div className="pe-dot" style={{ left: 114, top: 414, width: 12, height: 12, background: GOLD }} />
      <div className="pe-dot" style={{ left: 1148, top: 414, width: 12, height: 12, background: GOLD }} />

      {/* phase card 壹 */}
      <D l={170} t={218} w={380} h={176} style={{ background: '#221e2c', border: '1px solid rgba(201,155,69,0.35)', borderRadius: 14 }} />
      <T l={200} t={242} className="pe-ma" style={{ fontSize: 60, lineHeight: 1, color: GOLD }}>壹</T>
      <T l={266} t={250} style={{ ...sBold(WHITE, 25) }}>追踪线索</T>
      <div className="pe-abs" style={{ left: 266, top: 288, width: 120, height: 26, background: RED, borderRadius: 20 }} />
      <T l={277} t={292} style={{ ...sBold(WHITE, 16) }}>⏱ 10 分 50 秒</T>
      <T l={200} t={326} style={{ ...sBody('rgba(255,255,255,0.78)', 16) }}>三城九怪 · 每怪 25 次镜像挑战</T>
      <T l={200} t={354} style={{ ...sBody('rgba(255,255,255,0.78)', 16) }}>击败 3 只异党 → 拼出匪首线索</T>
      <div className="pe-abs" style={{ left: 358, top: 394, width: 2, height: 26, background: 'rgba(201,155,69,0.5)' }} />

      {/* phase card 贰 */}
      <D l={620} t={218} w={380} h={176} style={{ background: '#221e2c', border: '1px solid rgba(201,155,69,0.35)', borderRadius: 14 }} />
      <T l={650} t={242} className="pe-ma" style={{ fontSize: 60, lineHeight: 1, color: GOLD }}>贰</T>
      <T l={716} t={250} style={{ ...sBold(WHITE, 25) }}>挑战匪首</T>
      <div className="pe-abs" style={{ left: 716, top: 288, width: 121, height: 26, background: RED, borderRadius: 20 }} />
      <T l={727} t={292} style={{ ...sBold(WHITE, 16) }}>⏱ 10 分 00 秒</T>
      <T l={650} t={326} style={{ ...sBody('rgba(255,255,255,0.78)', 16) }}>全服共斗世界 BOSS · 一根血条</T>
      <T l={650} t={354} style={{ ...sBody('rgba(255,255,255,0.78)', 16) }}>队伍伤害实时排行，人人可见</T>
      <div className="pe-abs" style={{ left: 808, top: 394, width: 2, height: 26, background: 'rgba(201,155,69,0.5)' }} />

      {/* settle node */}
      <div className="pe-abs" style={{ left: 1010, top: 393, width: 56, height: 56, borderRadius: '50%', background: RED, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ ...sBold(WHITE, 18) }}>结算</span>
      </div>
      <T l={998} t={453} w={100} style={{ ...sBody('rgba(255,255,255,0.75)', 16, 18), textAlign: 'center', left: 1038, transform: 'translateX(-50%)' }}>输出量排行<br />邮件发奖</T>
      <T l={588} t={412} style={{ ...sBold('rgba(201,155,69,0.9)', 16) }}>▶</T>
      <T l={968} t={412} style={{ ...sBold('rgba(201,155,69,0.9)', 16) }}>▶</T>

      {/* map */}
      <T l={120} t={540} style={{ ...sBold(GOLD, 18) }}>征伐版图 · 三城九怪</T>
      {cities.map((c) => (
        <div key={c.name}>
          <T l={120} t={c.ny} style={{ ...sMed('rgba(255,255,255,0.85)', 16) }}>{c.name}</T>
          {c.cells.map((cell) => (
            <div key={cell.ch} className="pe-abs" style={{ left: cell.x, top: c.ny - 10, width: 38, height: 38, borderRadius: '50%', border: `1px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="pe-ma" style={{ fontSize: 21, color: GOLD }}>{cell.ch}</span>
            </div>
          ))}
        </div>
      ))}
      <T l={120} t={748} style={{ ...sBody('rgba(255,255,255,0.6)', 16) }}>× 每只精英野怪可挑战 25 次</T>

      {/* takeaway */}
      <T l={470} t={560} w={690} style={{ fontFamily: "'Noto Serif SC'", fontWeight: 700, fontSize: 25, lineHeight: '44px', color: WHITE }}>
        把<span style={{ color: '#eb7366' }}>「抢怪的零和竞争」</span>变成<span style={{ color: GOLD }}>「人人有份的镜像挑战」</span><br />
        把<span style={{ color: '#eb7366' }}>「共斗的喧嚣」</span>沉淀为<span style={{ color: GOLD }}>「可见的荣耀」</span>
      </T>
      <div className="pe-abs" style={{ left: 470, top: 690, width: 80, height: 4, background: RED }} />
    </section>
  );
}

/* =================================================================== */
/* P04 体验全流程                                                      */
/* =================================================================== */
function P04() {
  // step circles. kind: 'auto' = gold filled (system-auto) | 'plain' = outlined
  type Step = { n: string; l: number; t: number; size: number; kind: 'auto' | 'plain'; title: string; sub: string; subGold?: boolean; bolt?: boolean };
  const topRow: Step[] = [
    { n: '1', l: 159, t: 268, size: 62, kind: 'plain', title: '公告广播', sub: '全服横幅' },
    { n: '2', l: 384, t: 268, size: 62, kind: 'plain', title: '图标扫光', sub: '活动入口' },
    { n: '3', l: 609, t: 268, size: 62, kind: 'plain', title: '入口面板', sub: '三城选点' },
    { n: '4', l: 834, t: 268, size: 62, kind: 'auto', title: '自动寻路', sub: '免跑图', subGold: true, bolt: true },
    { n: '5', l: 1059, t: 268, size: 62, kind: 'plain', title: '确认挑战', sub: '弹窗二次确认' },
  ];
  const botRow: Step[] = [
    { n: '6', l: 1059, t: 488, size: 62, kind: 'plain', title: '镜像副本', sub: '独立战斗' },
    { n: '7', l: 834, t: 488, size: 62, kind: 'auto', title: '击败奖励', sub: 'Toast·自动退出', subGold: true, bolt: true },
    { n: '8', l: 609, t: 488, size: 62, kind: 'plain', title: '倒计时归零', sub: '阶段二开启' },
    { n: '9', l: 384, t: 488, size: 62, kind: 'plain', title: '共斗匪首', sub: '实时排名' },
    { n: '10', l: 148, t: 482, size: 74, kind: 'auto', title: '结算荣耀', sub: '自动弹出·邮件', subGold: true, bolt: true },
  ];
  const node = (s: Step) => {
    const isAuto = s.kind === 'auto';
    const numColor = isAuto && s.size >= 74 ? WHITE : (isAuto ? WHITE : INK);
    const titleTop = s.t + (s.size === 74 ? 86 : 74);
    const subTop = titleTop + 26;
    const cx = s.l + s.size / 2;
    return (
      <div key={s.n}>
        <div className="pe-abs" style={{ left: s.l, top: s.t, width: s.size, height: s.size, borderRadius: '50%', background: isAuto ? GOLD : '#fff', border: isAuto ? 'none' : '2px solid rgba(27,24,34,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="pe-inter" style={{ fontWeight: 900, fontSize: s.size >= 74 ? 28 : 23, color: numColor }}>{s.n}</span>
        </div>
        <T l={cx} t={titleTop} style={{ ...sBold(INK, 18), textAlign: 'center', transform: 'translateX(-50%)' }}>{s.title}</T>
        <T l={cx} t={subTop} style={{ ...sBody(s.subGold ? '#9e7329' : 'rgba(27,24,34,0.55)', 16), textAlign: 'center', transform: 'translateX(-50%)' }}>{s.sub}</T>
        {s.bolt ? <T l={s.size >= 74 ? s.l + 71 : s.l + 54} t={s.t - 6} style={{ ...sBold(s.size >= 74 ? RED : GOLD, 16) }}>⚡</T> : null}
      </div>
    );
  };
  // horizontal connectors with arrow ▶
  const topConn = [226, 451, 676, 901];
  const botConn = [221, 446, 670, 895];
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7610">
      <div className="pe-diamond" style={{ left: 122, top: 89.5, width: 12, height: 12, background: RED }} />
      <T l={150} t={95} className="pe-inter" style={{ ...sInterSB(RED, 16, 5), whiteSpace: 'pre' }}>U S E R   J O U R N E Y</T>
      <T l={120} t={128} style={{ ...sSerifB(INK, 46), fontWeight: 900 }}>体验全流程 · 从公告到荣耀</T>

      {/* legend */}
      <div className="pe-abs" style={{ left: 880, top: 140, width: 280, height: 34, border: '1px solid rgba(27,24,34,0.25)', borderRadius: 17 }} />
      <div className="pe-abs" style={{ left: 897, top: 148, width: 18, height: 18, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: WHITE }}>⚡</div>
      <T l={922} t={148} style={{ ...sMed('rgba(27,24,34,0.75)', 16) }}>= 系统代劳 · 玩家零操作</T>

      {topRow.map(node)}
      {botRow.map(node)}

      {/* top connectors (left → right) */}
      {topConn.map((x) => (
        <div key={`tc${x}`}>
          <div className="pe-abs" style={{ left: x, top: 298, width: 145, height: 2, background: 'rgba(27,24,34,0.4)' }} />
          <T l={x + 143} t={289} style={{ ...sBold('rgba(27,24,34,0.5)', 16) }}>▶</T>
        </div>
      ))}
      {/* bottom connectors (right → left, arrow on left) */}
      {botConn.map((x) => (
        <div key={`bc${x}`}>
          <div className="pe-abs" style={{ left: x + 14, top: 518, width: 145, height: 2, background: 'rgba(27,24,34,0.4)' }} />
          <T l={x} t={509} style={{ ...sBold('rgba(27,24,34,0.5)', 16), transform: 'scaleX(-1)' }}>▶</T>
        </div>
      ))}
      {/* right vertical drop connector (step 5 → 6) */}
      <div className="pe-abs" style={{ left: 1089, top: 395, width: 2, height: 75, background: 'rgba(27,24,34,0.4)' }} />
      <T l={1082} t={466} style={{ ...sBold('rgba(27,24,34,0.5)', 16) }}>▼</T>
      {/* loop connector (step 7 → step 3) — dashed red */}
      <div className="pe-abs" style={{ left: 640, top: 434, width: 225, height: 0, borderTop: `1.5px dashed ${RED}` }} />
      <div className="pe-abs" style={{ left: 865, top: 434, width: 0, height: 54, borderLeft: `1.5px dashed ${RED}` }} />
      <div className="pe-abs" style={{ left: 640, top: 389, width: 0, height: 45, borderLeft: `1.5px dashed ${RED}` }} />
      <T l={631} t={384} style={{ ...sBold(RED, 16) }}>▲</T>
      <T l={676} t={411} style={{ ...sBold(RED, 16) }}>↻ 剩余次数内循环挑战</T>

      {/* before/after panel */}
      <D l={120} t={700} w={1040} h={120} style={{ background: 'rgba(27,24,34,0.06)', borderRadius: 16 }} />
      <T l={160} t={734} style={{ ...sBold('rgba(27,24,34,0.6)', 16) }}>优化前</T>
      <T l={250} t={734} style={{ ...sBody('rgba(27,24,34,0.6)', 16) }}>跑图找怪 → 被人抢先 → 蹲守刷新 → 乘兴而来，败兴而归</T>
      <div className="pe-abs" style={{ left: 250, top: 762, width: 420, height: 1, background: 'rgba(27,24,34,0.2)' }} />
      <T l={160} t={776} style={{ ...sBold(RED, 16) }}>优化后</T>
      <T l={250} t={776} style={{ ...sBold(INK, 16) }}>打开面板 → 前往 → 挑战，三步直达战斗</T>
      <div className="pe-abs" style={{ left: 704, top: 716, width: 2, height: 88, background: 'rgba(27,24,34,0.12)' }} />
      <T l={1056} t={707} className="pe-inter" style={{ ...sInterSB('rgba(27,24,34,0.4)', 16, 2) }}>操作成本</T>
      <T l={1010} t={735} className="pe-inter" style={{ fontFamily: "'Inter'", fontWeight: 900, fontSize: 46, color: RED }}>-70%</T>
      <T l={950} t={795} style={{ ...sBody('rgba(27,24,34,0.5)', 16) }}>从找怪到开打的路径长度</T>
    </section>
  );
}

/* =================================================================== */
/* P05 心流历程                                                        */
/* =================================================================== */
function P05() {
  // points along the curve: x, dotY (top of 12px dot), label, labelX
  const pts = [
    { x: 200, dy: 454, lh: 80, lt: 460, label: '公告' },
    { x: 330, dy: 426, lh: 108, lt: 432, label: '选点' },
    { x: 460, dy: 456, lh: 78, lt: 462, label: '寻路' },
    { x: 590, dy: 374, lh: 160, lt: 380, label: '挑战' },
    { x: 720, dy: 312, lh: 222, lt: 318, label: '击败', peak: true },
    { x: 850, dy: 354, lh: 180, lt: 360, label: '循环' },
    { x: 980, dy: 286, lh: 248, lt: 292, label: 'BOSS共斗', peak: true, w: 90 },
    { x: 1110, dy: 239, lh: 292, lt: 248, label: '结算', end: true },
  ];
  const cards = [
    { l: 120, ch: '闲', title: '挂机 · 养成玩家', body: '自动寻路＋副本自动战斗，挂机也能完整参与，不被玩法淘汰。' },
    { l: 476, ch: '快', title: '碎片时间玩家', body: '三步直达战斗、随到随打，10 分钟一阶段，不被时间绑架。' },
    { l: 832, ch: '争', title: '团队 · 竞技玩家', body: '组队共斗＋实时排名＋结算榜，有得争、有得晒。' },
  ];
  // SVG curve path through dot centers (dot center = x+6, dy+6)
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x + 6} ${p.dy + 6}`).join(' ');
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7611">
      <div className="pe-diamond" style={{ left: 122, top: 89.5, width: 12, height: 12, background: GOLD }} />
      <T l={150} t={95} className="pe-inter" style={{ ...sInterSB('#9e7329', 16, 5), whiteSpace: 'pre' }}>F L O W   E X P E R I E N C E</T>
      <T l={120} t={128} style={{ ...sSerifB(INK, 44), fontWeight: 900 }}>心流体验历程 · 情绪为玩法节奏背书</T>

      {/* flow channel band + axes */}
      <D l={140} t={268} w={1010} h={118} style={{ background: 'rgba(201,155,69,0.12)', borderRadius: 8 }} />
      <T l={155} t={314} style={{ ...sBody('#9e7329', 16) }}>心流通道（挑战与数值的平衡带）</T>
      <div className="pe-abs" style={{ left: 140, top: 540, width: 1010, height: 2, background: 'rgba(27,24,34,0.45)' }} />
      <div className="pe-abs" style={{ left: 140, top: 230, width: 2, height: 312, background: 'rgba(27,24,34,0.45)' }} />
      <T l={128} t={206} style={{ ...sMed('rgba(27,24,34,0.7)', 16) }}>情绪唤起 ↑</T>

      {/* curve */}
      <svg className="pe-abs" style={{ left: 0, top: 0, width: 1280, height: 900, pointerEvents: 'none', overflow: 'visible' }} viewBox="0 0 1280 900">
        <path d={path} fill="none" stroke={RED} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* vertical drop lines + dots + labels */}
      {pts.map((p) => (
        <div key={p.label}>
          <div className="pe-abs" style={{ left: p.x - 0.5, top: p.lt, width: 1, height: p.lh, background: 'rgba(201,155,69,0.5)' }} />
          {p.end
            ? <div className="pe-abs" style={{ left: p.x - 11, top: p.dy - 8, width: 34, height: 34, borderRadius: '50%', border: `1.5px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="pe-dot" style={{ position: 'static', width: 18, height: 18, background: RED }} />
              </div>
            : <div className="pe-dot" style={{ left: p.x - 6, top: p.dy, width: 12, height: 12, background: p.peak ? RED : '#f6f1e8', border: p.peak ? 'none' : `2px solid ${RED}` }} />}
          <T l={p.x} t={554} w={p.w ?? 60} style={{ ...sMed('rgba(27,24,34,0.8)', 16), textAlign: 'center', transform: 'translateX(-50%)' }}>{p.label}</T>
        </div>
      ))}

      {/* annotations */}
      <T l={417} t={470} style={{ ...sBody('rgba(27,24,34,0.6)', 16) }}>省力 · 放松谷</T>
      <T l={680} t={284} style={{ ...sBold(RED, 16) }}>成就感小高峰</T>
      <div className="pe-abs" style={{ left: 1063, top: 194, width: 96, height: 26, background: RED, borderRadius: 13 }} />
      <T l={1079} t={197} style={{ ...sBold(WHITE, 16) }}>峰终时刻</T>
      <T l={851} t={374} w={120} style={{ ...sBody('rgba(27,24,34,0.55)', 16, 16), textAlign: 'center', transform: 'translateX(-50%)' }}>循环挑战<br />维持节奏</T>

      {/* usage scenarios */}
      <T l={120} t={628} style={{ ...sBold(INK, 21) }}>使用场景印证</T>
      <div className="pe-abs" style={{ left: 120, top: 660, width: 40, height: 3, background: RED }} />
      {cards.map((c) => (
        <div key={c.ch}>
          <D l={c.l} t={684} w={330} h={150} style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(27,24,34,0.1)', borderRadius: 14 }} />
          <div className="pe-abs" style={{ left: c.l + 24, top: 708, width: 46, height: 46, borderRadius: '50%', background: INK, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="pe-ma" style={{ fontSize: 28, color: GOLD }}>{c.ch}</span>
          </div>
          <T l={c.l + 84} t={720} style={{ ...sBold(INK, 18) }}>{c.title}</T>
          <T l={c.l + 24} t={766} w={290} style={{ ...sBody('rgba(27,24,34,0.7)', 16, 22) }}>{c.body}</T>
        </div>
      ))}
    </section>
  );
}

/* =================================================================== */
/* P06 设计点1 入口强化                                                */
/* =================================================================== */
function P06() {
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7612">
      <PointHead tag="设计点 ①" title="让活动「被看见」" en="ENTRY AWARENESS · 三通道触达" />

      {/* main screenshot panel */}
      <D l={140} t={250} w={640} h={400} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <Img k="p06_main" l={160} t={269} w={600} h={338} />
      <T l={160} t={624} w={328} style={{ ...sBody('rgba(255,255,255,0.55)', 16) }}>大世界主界面 · 活动开启瞬间（交互稿原图）</T>
      <Badge l={460} t={283} n="1" /><Badge l={301} t={350} n="2" /><Badge l={629} t={360} n="3" />

      {/* leader from popup callout */}
      <div className="pe-abs" style={{ left: 668, top: 383, width: 205, height: 1.5, background: 'rgba(201,155,69,0.5)', transform: 'rotate(17deg)', transformOrigin: 'left center' }} />
      <T l={793} t={418} style={{ ...sBody('rgba(27,24,34,0.65)', 16) }}>展开弹窗</T>

      {/* popup panel */}
      <D l={873} t={250} w={286.5} h={400} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <Img k="p06_popup" l={885.6} t={261.5} w={260.2} h={343.8} />
      <T l={885.6} t={619} style={{ ...sBold(GOLD, 16) }}>活动玩法入口快捷弹窗</T>
      <Badge l={1059} t={525} n="4" />

      {/* annotation list */}
      <Badge l={140} t={689} n="1" />
      <T l={173} t={690} style={{ ...sBold(INK, 18) }}>公告横幅 · 全服广播</T>
      <T l={173} t={716} w={224} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 21) }}>活动开启即推送，所有在线玩家第一时间获知。</T>
      <Badge l={459} t={690} n="2" />
      <T l={492} t={691} style={{ ...sBold(INK, 18) }}>追踪栏提示 · 个人指引</T>
      <T l={492} t={717} w={226} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 21) }}>游历页签同步给出「三地一线」前往指引。</T>
      <Badge l={140} t={780} n="3" />
      <T l={173} t={781} style={{ ...sBold(INK, 18) }}>活动图标 · 蓝色扫光</T>
      <T l={173} t={807} w={224} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 21) }}>活动开启，图标蓝色扫光提示。</T>
      <Badge l={460} t={780} n="4" />
      <T l={493} t={781} style={{ ...sBold(INK, 18) }}>活动入口按钮</T>
      <T l={493} t={807} w={267} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 21) }}>点击进入「惩凶除恶」入口界面</T>

      {/* rationale card */}
      <DarkCard l={780} t={666} w={380} h={170} zh="冯 · 雷斯托夫效应" en="VON RESTORFF EFFECT" body="在恒定不变的 HUD 中，一道「运动的扫光」是最显著的注意力信号；公告、追踪栏、扫光三条提示互为冗余，确保不同习惯的玩家都能被活动触达。" bodyW={357} />
    </section>
  );
}

/* =================================================================== */
/* P07 设计点2 入口界面                                                */
/* =================================================================== */
function P07() {
  const list: { l: number; t: number; n: string; title: string; body: string; bw?: number }[] = [
    { l: 140, t: 654, n: '1', title: '阶段条＋倒计时', body: '当前进度与紧迫感一眼可读 — 状态可见性', bw: 249 },
    { l: 470, t: 654, n: '2', title: '三城分组', body: '按城市分组陈列，降低选择成本 — 希克定律', bw: 210 },
    { l: 140, t: 719, n: '3', title: '置灰不可点', body: '次数耗尽即置灰，错误被提前拦截 — 防错', bw: 226 },
    { l: 470, t: 719, n: '4', title: '选中态高亮', body: '当前选择即时反馈，所见即所选' },
    { l: 140, t: 786, n: '5', title: '已击败打勾', body: '次数变化同步显示，识别优于回忆', bw: 249 },
    { l: 470, t: 786, n: '6', title: '奖励预览', body: '行动前先见回报，强化前往动机' },
  ];
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7613">
      <PointHead tag="设计点 ②" title="一屏看懂，一键出发" en="STAGE-1 PANEL · 状态可见 × 降低决策成本" />

      {/* main panel */}
      <D l={140} t={240} w={640} h={400} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <Img k="p07_panel" l={160} t={260} w={600} h={337} />
      <T l={160} t={612} style={{ ...sBody('rgba(255,255,255,0.55)', 16) }}>惩凶除恶入口界面 [阶段1]</T>
      <Badge l={442} t={310} n="1" /><Badge l={436} t={371} n="2" /><Badge l={691} t={390} n="3" />
      <Badge l={691} t={440} n="4" /><Badge l={596} t={433} n="5" /><Badge l={486} t={537} n="6" />

      {/* detail card top */}
      <D l={809} t={240} w={350} h={154} style={{ background: '#1e1a26', borderRadius: 14 }} />
      <Img k="p07_stagebar" l={824} t={260} w={320} h={101} r={6} />
      <T l={824} t={361} style={{ ...sBold(GOLD, 16) }}>细节 · 征伐阶段条＋倒计时</T>

      {/* detail card bottom */}
      <D l={809} t={407} w={350} h={233} style={{ background: '#1e1a26', borderRadius: 14 }} />
      <Img k="p07_buttons" l={824} t={422} w={320} h={190} r={6} />
      <T l={824} t={612} style={{ ...sBold(GOLD, 16) }}>细节 · 征伐地点三组九按钮</T>

      {/* annotation list */}
      {list.map((it) => (
        <div key={it.n}>
          <Badge l={it.l} t={it.t} n={it.n} />
          <T l={it.l + 32} t={it.t + 1} style={{ ...sBold(INK, 16) }}>{it.title}</T>
          <T l={it.l + 32} t={it.t + 23} w={it.bw} style={{ ...sBody('rgba(27,24,34,0.6)', 16) }}>{it.body}</T>
        </div>
      ))}

      {/* rationale card */}
      <DarkCard l={809} t={672} w={351} h={156} zh="希克定律" en="HICK'S LAW" body="决策时间随选项数量与复杂度增长。分组、置灰、打勾，都是在为玩家的选择做减法。" bodyW={327} />
    </section>
  );
}

/* =================================================================== */
/* P08 设计点3 镜像副本                                                */
/* =================================================================== */
function P08() {
  const steps = [
    { l: 120, img: 'p08_s1', no: 'STEP 1', label: '自动寻路 · 系统代跑' },
    { l: 386, img: 'p08_s2', no: 'STEP 2', label: '抵达 · 头顶「挑战」入口' },
    { l: 652, img: 'p08_s3', no: 'STEP 3', label: '确认弹窗 · 二次确认' },
    { l: 918, img: 'p08_s4', no: 'STEP 4', label: '镜像副本 · 自动战斗' },
  ];
  const arrows = [368, 634, 900];
  // mirror boxes
  const mirrors = [
    { t: 506, name: '镜像副本 A', who: '玩家 甲 · 25次', deg: -24.54, len: 101 },
    { t: 568, name: '镜像副本 B', who: '玩家 乙 · 25次', deg: 12.26, len: 94 },
    { t: 630, name: '镜像副本 C', who: '玩家 丙 · 25次', deg: 41.71, len: 123 },
  ];
  return (
    <section className="punish-slide pe-bg-ink" data-node-id="8844:7614">
      <PointHead tag="设计点 ③" tagBg={GOLD} tagColor={INK} title="把「抢怪」变成「人人有份」" titleColor={WHITE} en="MIRROR INSTANCE · 公平性 × 用户控制" enColor={GOLD} />

      {steps.map((s, i) => (
        <div key={s.no}>
          <D l={s.l} t={240} w={242} h={196} style={{ background: '#221e2c', borderRadius: 12 }} />
          <Img k={s.img} l={s.l + 12} t={252} w={218} h={123} r={6} />
          <T l={s.l + 12} t={384} className="pe-inter" style={{ ...sInterSB(GOLD, 16, 2) }}>{s.no}</T>
          <T l={s.l + 12} t={402} w={218} style={{ ...sMed('rgba(255,255,255,0.85)', 16) }}>{s.label}</T>
          {i < 3 ? <T l={arrows[i]} t={330} style={{ ...sBold(GOLD, 16) }}>▶</T> : null}
        </div>
      ))}

      {/* mechanism diagram */}
      <T l={122} t={496} style={{ ...sBold(GOLD, 18) }}>机制透视 · 一怪多镜</T>
      <div className="pe-abs" style={{ left: 179, top: 540, width: 64, height: 64, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="pe-ma" style={{ fontSize: 35, color: INK }}>怪</span>
      </div>
      <T l={211} t={614} w={120} style={{ ...sBody('rgba(255,255,255,0.6)', 16), textAlign: 'center', transform: 'translateX(-50%)' }}>同一只精英野怪</T>
      {mirrors.map((m) => (
        <div key={m.name}>
          <div className="pe-abs" style={{ left: 247, top: m.t + 17, width: m.len, height: 0, borderTop: '1.4px dashed rgba(201,155,69,0.5)', transform: `rotate(${m.deg}deg)`, transformOrigin: 'left center' }} />
          <div className="pe-abs" style={{ left: 339, top: m.t, width: 210, height: 48, border: '1px solid rgba(201,155,69,0.5)', borderRadius: 10 }} />
          <T l={355} t={m.t + 5} style={{ ...sBold(WHITE, 16) }}>{m.name}</T>
          <T l={355} t={m.t + 24} style={{ ...sBody('rgba(201,155,69,0.9)', 16) }}>{m.who}</T>
        </div>
      ))}

      {/* takeaway */}
      <T l={608} t={496} style={{ fontFamily: "'Noto Serif SC'", fontWeight: 700, fontSize: 28, lineHeight: '42px', color: WHITE }}>
        每位玩家拥有每怪 25 次的<span style={{ color: GOLD }}>「独立镜像挑战」</span><br />
        开放世界的怪被打死了<span style={{ color: RED }}>≠</span> 没得打
      </T>
      <div className="pe-abs" style={{ left: 608, top: 588, width: 80, height: 4, background: RED }} />

      {/* two rationale cards (P08-specific compact layout: accent +22 w24, zh +36 size20, EN same row, body +66) */}
      {/* 用户控制与自由 */}
      <D l={124} t={716} w={508} h={130} style={{ background: '#221e2c', borderRadius: 14, border: '1px solid rgba(201,155,69,0.25)' }} />
      <D l={148} t={738} w={24} h={4} style={{ background: GOLD }} />
      <T l={148} t={752} style={{ ...sSerifB(GOLD, 20) }}>用户控制与自由</T>
      <T l={344} t={758} className="pe-inter" style={{ ...sInterSB('rgba(201,155,69,0.6)', 16, 2) }}>USER CONTROL & FREEDOM</T>
      <T l={148} t={782} w={460} style={{ ...sBody('rgba(255,255,255,0.8)', 16, 20) }}>进入副本有确认、退出副本有确认；击败后自动退出 — 便利与控制权同时交还玩家。</T>
      {/* 即时反馈 */}
      <D l={648} t={716} w={508} h={130} style={{ background: '#221e2c', borderRadius: 14, border: '1px solid rgba(201,155,69,0.25)' }} />
      <D l={672} t={738} w={24} h={4} style={{ background: GOLD }} />
      <T l={672} t={752} style={{ ...sSerifB(GOLD, 20) }}>即时反馈</T>
      <T l={1132} t={758} className="pe-inter" style={{ ...sInterSB('rgba(201,155,69,0.6)', 16, 2), transform: 'translateX(-100%)' }}>IMMEDIATE FEEDBACK</T>
      <T l={672} t={782} w={460} style={{ ...sBody('rgba(255,255,255,0.8)', 16, 20) }}>击败瞬间 Toast「恭喜获得 XXX 道具」，奖励落袋即时可见，强化每一次循环的动力。</T>
    </section>
  );
}

/* =================================================================== */
/* P09 设计点4 追踪栏                                                  */
/* =================================================================== */
function P09() {
  const rights: { t: number; n: string; title: string; body: string; rule?: number }[] = [
    { t: 251, n: '1', title: '剩余次数 25/25', body: '甲乙丙逐怪计数、实时更新，无需玩家心算。' },
    { t: 341, n: '2', title: '状态三层文案', body: '「发现点 / 还未被击败 / 已经被击败」，三地进度一句话讲清。', rule: 324 },
    { t: 431, n: '3', title: 'BOSS 剩余血量', body: '全服共享的进度条，一根血条凝聚所有人的目标。', rule: 414 },
    { t: 521, n: '4', title: '当前队伍排名', body: '名次实时可见，每一刀的价值即时反馈。', rule: 504 },
    { t: 611, n: '5', title: '排行入口', body: '点击柱状图图标，随时查看完整实时榜单。', rule: 594 },
  ];
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7615">
      <PointHead tag="设计点 ④" title="状态外显，零记忆负担" en="TASK TRACKER · 识别优于回忆" />

      {/* stage1 tracker card */}
      <D l={140} t={240} w={330} h={430} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <div className="pe-abs" style={{ left: 155, top: 262, width: 70, height: 24, background: GOLD, borderRadius: 12 }} />
      <T l={166} t={265} style={{ ...sBold(INK, 16) }}>阶段一</T>
      <Img k="p09_t1" l={155} t={293} w={300} h={324} />
      <T l={164} t={637} style={{ ...sBody('rgba(255,255,255,0.55)', 16) }}>游历页签 · 阶段1 追踪栏</T>
      <Badge l={171} t={467} n="1" /><Badge l={429} t={533} n="2" />

      {/* stage2 tracker card */}
      <D l={510} t={240} w={330} h={430} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <div className="pe-abs" style={{ left: 525, top: 262, width: 70, height: 24, background: RED, borderRadius: 12 }} />
      <T l={536} t={265} style={{ ...sBold(WHITE, 16) }}>阶段二</T>
      <Img k="p09_t2" l={525} t={296} w={300} h={265} />
      <T l={536} t={637} style={{ ...sBody('rgba(255,255,255,0.55)', 16) }}>游历页签 · 阶段2BOSS追踪栏</T>
      <Badge l={539} t={451} n="3" /><Badge l={539} t={485} n="4" /><Badge l={767} t={507} n="5" />

      {/* right annotation stack */}
      {rights.map((r) => (
        <div key={r.n}>
          {r.rule ? <div className="pe-abs" style={{ left: 892, top: r.rule, width: 268, height: 1, background: 'rgba(27,24,34,0.12)' }} /> : null}
          <Badge l={881} t={r.t} n={r.n} />
          <T l={914} t={r.t + 1} style={{ ...sBold(INK, 16) }}>{r.title}</T>
          <T l={914} t={r.t + 25} w={246} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 20) }}>{r.body}</T>
        </div>
      ))}

      {/* theory chip + takeaway */}
      <div className="pe-abs" style={{ left: 140, top: 717, width: 300, height: 58, border: '1.2px solid rgba(200,50,43,0.6)', borderRadius: 12 }} />
      <T l={164} t={729} style={{ ...sBold(RED, 16) }}>理论 · 识别优于回忆</T>
      <T l={164} t={749} className="pe-inter" style={{ ...sInterSB('rgba(200,50,43,0.7)', 16, 1.5) }}>RECOGNITION OVER RECALL</T>
      <T l={140} t={791} w={1020} style={{ fontFamily: "'Noto Serif SC'", fontWeight: 700, fontSize: 26, lineHeight: '38px', color: INK }}>
        <span style={{ color: RED }}>「我还能打几次、哪里还有怪、我们排第几」</span>这些记忆负担，全部在界面上实时显示。
      </T>
      <div className="pe-abs" style={{ left: 140, top: 837, width: 80, height: 4, background: GOLD }} />
    </section>
  );
}

/* =================================================================== */
/* P10 设计点5 BOSS共斗                                                */
/* =================================================================== */
function P10() {
  const badges = [
    { l: 374, t: 314, n: '1' }, { l: 230, t: 384, n: '2' }, { l: 371, t: 395, n: '3' },
    { l: 490, t: 360, n: '4' }, { l: 702, t: 404, n: '5' },
  ];
  const rights: { t: number; n: string; title: string; body: string; rule?: number }[] = [
    { t: 251, n: '1', title: '城市页签', body: '甲乙丙逐怪计数、实时更新，无需玩家心算。' },
    { t: 341, n: '2', title: '队伍排名', body: '「发现点 / 还未被击败 / 已经被击败」，三地进度一句话讲清。', rule: 324 },
    { t: 431, n: '3', title: '队伍成员', body: '全服共享的进度条，一根血条凝聚所有人的目标。', rule: 414 },
    { t: 521, n: '4', title: '队伍输出量', body: '对匪首输出量 %，贡献可视化，排名公平感的来源。', rule: 504 },
    { t: 611, n: '5', title: '队伍奖励', body: '努力与回报的直接映射，所见即所得。', rule: 594 },
  ];
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7616">
      <PointHead tag="设计点 ⑤" title="让竞争实时可见" en="WORLD BOSS HUD · 即时反馈 × 社会比较" />

      {/* ranking screenshot panel */}
      <D l={140} t={240} w={680} h={433} style={{ background: '#1e1a26', borderRadius: 16 }} />
      <Img k="p10_rank" l={161} t={271} w={638} h={358} />
      {badges.map((b) => <Badge key={b.n} l={b.l} t={b.t} n={b.n} />)}
      <T l={160} t={636} style={{ ...sBody('rgba(255,255,255,0.55)', 16) }}>阶段2 · 排行榜</T>
      <T l={140} t={784} style={{ ...sSerifB('rgba(27,24,34,0.85)', 26) }}>排名把个人的努力，放进群体的荣耀里。</T>
      <div className="pe-abs" style={{ left: 140, top: 829, width: 60, height: 3, background: RED }} />

      {/* right annotation stack */}
      {rights.map((r) => (
        <div key={r.n}>
          {r.rule ? <div className="pe-abs" style={{ left: 892, top: r.rule, width: 268, height: 1, background: 'rgba(27,24,34,0.12)' }} /> : null}
          <Badge l={881} t={r.t} n={r.n} />
          <T l={914} t={r.t + 1} style={{ ...sBold(INK, 16) }}>{r.title}</T>
          <T l={914} t={r.t + 25} w={246} style={{ ...sBody('rgba(27,24,34,0.65)', 16, 20) }}>{r.body}</T>
        </div>
      ))}

      {/* theory chip */}
      <div className="pe-abs" style={{ left: 140, top: 707, width: 350, height: 60, border: '1.2px solid rgba(200,50,43,0.6)', borderRadius: 12 }} />
      <T l={164} t={719} style={{ ...sBold(RED, 16) }}>理论 · 社会比较 × 即时反馈</T>
      <T l={164} t={739} className="pe-inter" style={{ ...sInterSB('rgba(200,50,43,0.7)', 16, 1.5) }}>SOCIAL COMPARISON / FEEDBACK</T>
    </section>
  );
}

/* =================================================================== */
/* P11 设计点6 结算界面                                                */
/* =================================================================== */
function P11() {
  const rights: { t: number; n: string; title: string; body: string; rule?: number; bw?: number }[] = [
    { t: 245, n: '1', title: '自动弹出', body: '匪首被击败时，附近触发器内的玩家自动弹出此界面；在副本中则自动退出。', bw: 276 },
    { t: 335, n: '2', title: '「胜利」金字大标题', body: '情绪峰值的定格 — 进场即高潮。', rule: 318, bw: 276 },
    { t: 429, n: '3', title: '邮件发放兜底', body: '「以最终结算排行为准，邮件发送」— 离线不漏奖。', rule: 412, bw: 276 },
  ];
  return (
    <section className="punish-slide pe-bg-ink" data-node-id="8844:7617">
      <PointHead tag="设计点 ⑥" tagBg={GOLD} tagColor={INK} title="峰终时刻的荣耀剧场" titleColor={WHITE} en="SETTLEMENT · 峰终定律的落地" enColor={GOLD} />

      {/* settlement screenshot panel */}
      <D l={140} t={240} w={680} h={420} style={{ background: '#221e2c', border: '1px solid rgba(201,155,69,0.3)', borderRadius: 16 }} />
      <Img k="p11_screen" l={161} t={261} w={638} h={358} />
      <T l={160} t={630} style={{ ...sBody('rgba(255,255,255,0.5)', 16) }}>惩凶除恶 [阶段2] 结算界面 · 新增（交互稿原图）</T>
      <Badge l={236} t={275} n="1" /><Badge l={425} t={318} n="2" /><Badge l={214} t={582} n="3" />

      {/* zoomed header row screenshot */}
      <Img k="p11_row" l={140} t={685} w={680} h={108} />
      <T l={140} t={803} w={464} style={{ ...sBody('rgba(255,255,255,0.5)', 16) }}>放大 · 表头与第一名行（队伍五人 · 输出 23.10% · 四件奖励）</T>

      {/* right annotation stack (white text on dark) */}
      {rights.map((r) => (
        <div key={r.n}>
          {r.rule ? <div className="pe-abs" style={{ left: 862, top: r.rule, width: 298, height: 1, background: 'rgba(255,255,255,0.1)' }} /> : null}
          <Badge l={851} t={r.t} n={r.n} />
          <T l={884} t={r.t + 1} style={{ ...sBold(WHITE, 16) }}>{r.title}</T>
          <T l={884} t={r.t + 25} w={r.bw} style={{ ...sBody('rgba(255,255,255,0.62)', 16, 20) }}>{r.body}</T>
        </div>
      ))}
      <div className="pe-abs" style={{ left: 862, top: 502, width: 298, height: 1, background: 'rgba(255,255,255,0.1)' }} />

      {/* rationale card */}
      <D l={840} t={672} w={320} h={150} style={{ background: 'transparent', border: '1.2px solid rgba(201,155,69,0.5)', borderRadius: 16 }} />
      <div className="pe-abs" style={{ left: 866, top: 696, width: 28, height: 4, background: GOLD }} />
      <T l={866} t={710} style={{ ...sSerifB(GOLD, 22) }}>峰终定律</T>
      <T l={983} t={718} className="pe-inter" style={{ ...sInterSB('rgba(201,155,69,0.7)', 16, 2) }}>PEAK-END RULE</T>
      <T l={866} t={744} w={268} style={{ ...sBody('rgba(255,255,255,0.8)', 16, 22) }}>体验的记忆，由「峰值」与「结尾」决定。这块结算界面，就是为整场活动设计的「终」。</T>
    </section>
  );
}

/* =================================================================== */
/* P12 容错与边界                                                      */
/* =================================================================== */
function P12() {
  const branches = [
    { dy: 327, q: '正在副本中？', toast: 'Toast ·「当前正在副本中，请退出副本才可重新选择」', sy: 354 },
    { dy: 409, q: '剩余次数不足？', toast: 'Toast ·「该精英野怪的镜像副本剩余次数不足」', sy: 436 },
    { dy: 491, q: '该城市无怪？', toast: 'Toast · 「该城市野怪数量不足，请切换其他城市」', sy: 518 },
  ];
  return (
    <section className="punish-slide pe-bg-cream" data-node-id="8844:7618">
      <PointHead tag="细节兜底" title="每一条歧路，都有出口" en="ERROR PREVENTION & RECOVERY · 防错三层兜底" />

      {/* entry confirm card */}
      <D l={140} t={240} w={372} h={236} style={{ background: '#1e1a26', borderRadius: 14 }} />
      <Img k="p12_enter" l={156} t={256} w={340} h={191} r={6} />
      <T l={156} t={452} style={{ ...sBody('rgba(255,255,255,0.6)', 16) }}>进入确认 ·「是否挑战甲字精英野怪镜像副本？」</T>

      {/* exit confirm card */}
      <D l={140} t={496} w={372} h={236} style={{ background: '#1e1a26', borderRadius: 14 }} />
      <Img k="p12_exit" l={156} t={512} w={340} h={191} r={6} />
      <T l={156} t={708} style={{ ...sBody('rgba(255,255,255,0.6)', 16) }}>退出确认 ·「是否退出甲字精英野怪镜像副本？」</T>

      {/* decision tree */}
      <T l={580} t={238} style={{ ...sBold(INK, 18) }}>异常分支决策树</T>
      <div className="pe-abs" style={{ left: 580, top: 266, width: 220, height: 40, background: '#1b1822', borderRadius: 20 }} />
      <T l={614} t={277} style={{ ...sBold(WHITE, 16) }}>点击「挑战 / 前往」</T>
      {/* spine */}
      <div className="pe-abs" style={{ left: 599, top: 306, width: 2, height: 302, background: 'rgba(27,24,34,0.5)' }} />

      {branches.map((b) => (
        <div key={b.q}>
          <div className="pe-diamond" style={{ left: 589, top: b.dy - 2.7, width: 16, height: 16, background: RED, border: `1.6px solid ${RED}` }} />
          <T l={622} t={b.dy} style={{ ...sBold(INK, 16) }}>{b.q}</T>
          <T l={622} t={b.sy + 6} style={{ ...sBody('rgba(200,50,43,0.9)', 16) }}>是 ▸</T>
          <div className="pe-abs" style={{ left: 660, top: b.sy, width: 500, height: 30, background: 'rgba(27,24,34,0.92)', borderRadius: 15 }} />
          <T l={676} t={b.sy + 6} w={460} style={{ ...sBody(WHITE, 16) }}>{b.toast}</T>
        </div>
      ))}

      {/* success branch */}
      <T l={622} t={577} style={{ ...sBody('rgba(27,24,34,0.55)', 16) }}>三问皆「否」</T>
      <div className="pe-abs" style={{ left: 580, top: 608, width: 580, height: 42, background: GOLD, borderRadius: 21 }} />
      <T l={616} t={620} style={{ ...sBold(INK, 16) }}>⚔ 顺利进入镜像副本</T>
      <div className="pe-abs" style={{ left: 580, top: 680, width: 580, height: 52, border: '1.4px solid rgba(201,155,69,0.8)', borderRadius: 12 }} />
      <T l={600} t={696} style={{ ...sMed('#9e7329', 16) }}>⏱ 倒计时归零时仍在副本 → 自动退出副本，状态永不卡死</T>

      {/* principle bar */}
      <D l={140} t={760} w={1020} h={90} style={{ background: 'rgba(27,24,34,0.06)', borderRadius: 14 }} />
      <T l={172} t={786} style={{ ...sSerifB(RED, 20) }}>防错原则</T>
      <T l={268} t={790} style={{ ...sBody('rgba(27,24,34,0.7)', 16) }}>与其等玩家犯错，不如让错误无法发生 — 置灰、二次确认、Toast，三层兜底。</T>
      <div className="pe-abs" style={{ left: 172, top: 822, width: 40, height: 2, background: 'rgba(200,50,43,0.6)' }} />
      <T l={1123} t={790} className="pe-inter" style={{ ...sInterSB('rgba(27,24,34,0.4)', 16, 2), transform: 'translateX(-100%)' }}>(POKA-YOKE)</T>
    </section>
  );
}

/* =================================================================== */
/* P14 封底                                                            */
/* =================================================================== */
function P14() {
  const cols = [85, 137, 189, 241, 293, 345];
  const rows = [620, 672, 724, 776];
  return (
    <section className="punish-slide pe-bg-ink" data-node-id="8844:7620">
      {/* dot grid */}
      {rows.map((y) => cols.map((x) => (
        <div key={`${x}-${y}`} className="pe-dot" style={{ left: x, top: y, width: 5, height: 5, background: 'rgba(201,155,69,0.5)' }} />
      )))}
      {/* top-right ring */}
      <div className="pe-abs" style={{ left: 1110, top: -170, width: 340, height: 340, borderRadius: '50%', border: '1px solid rgba(201,155,69,0.15)' }} />
      {/* accent bar */}
      <div className="pe-abs" style={{ left: 600, top: 250, width: 80, height: 3, background: 'rgba(201,155,69,0.8)' }} />
      {/* closing lines */}
      <T l={640} t={310} w={600} className="pe-ma" style={{ fontSize: 46, lineHeight: 1, color: GOLD, textAlign: 'center', transform: 'translateX(-50%)' }}>让玩家把时间花在快乐上，</T>
      <T l={640} t={375} w={600} className="pe-ma" style={{ fontSize: 46, lineHeight: 1, color: GOLD, textAlign: 'center', transform: 'translateX(-50%)' }}>而不是花在寻找快乐的路上。</T>
      <T l={640} t={490} w={560} className="pe-inter" style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: 16, letterSpacing: 6, color: 'rgba(255,255,255,0.45)', textAlign: 'center', transform: 'translateX(-50%)' }}>T H A N K S   F O R   R E A D I N G</T>
      {/* logo stamp */}
      <div className="pe-abs" style={{ left: 612, top: 560, width: 56, height: 56, background: RED, borderRadius: 8, transform: 'rotate(7deg)' }} />
      <T l={616} t={571} className="pe-ma" style={{ fontSize: 35, color: WHITE, transform: 'rotate(7deg)', transformOrigin: 'left top' }}>惩</T>
      <T l={640} t={680} w={200} style={{ ...sBold(WHITE, 16), textAlign: 'center', transform: 'translateX(-50%)' }}>惩凶除恶 · 玩法优化</T>
    </section>
  );
}

/* =================================================================== */
export function PunishExactCase() {
  return (
    <div className="punish-canvas" data-node-id="8721:7612">
      <P01 />
      <P02 />
      <P03 />
      <P04 />
      <P05 />
      <P06 />
      <P07 />
      <P08 />
      <P09 />
      <P10 />
      <P11 />
      <P12 />
      <P14 />
    </div>
  );
}

export default PunishExactCase;
