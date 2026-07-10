import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';
import './QingyuFigmaCases.css';
import { JuejingExactCase } from './JuejingExactCase';
import { BianjingExactCase } from './BianjingExactCase';
import { WeddingExactCase } from './WeddingExactCase';
import { SancaiExactCase } from './SancaiExactCase';
import { JinlanExactCase } from './JinlanExactCase';
import { XiushenExactCase } from './XiushenExactCase';
import { JuexueExactCase } from './JuexueExactCase';
import { QingquanBathExactCase } from './QingquanBathExactCase';
import { RecallExactCase } from './RecallExactCase';
import { TempleExactCase } from './TempleExactCase';
import { GemSocketExactCase } from './GemSocketExactCase';
import { GloryExactCase } from './GloryExactCase';
import { IntelExactCase } from './IntelExactCase';
import { AtlasExactCase } from './AtlasExactCase';
import { PunishExactCase } from './PunishExactCase';
import { GuildSystemExactCase } from './GuildSystemExactCase';

import { renderStarFigmaCase } from './StarFigmaCases';

type QingyuCaseKey = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19';

const houseAssets = {
  worldPet: '/assets/qingyu-house/world-pet.webp',
  houseTab: '/assets/qingyu-house/house-tab-revised.webp',
  houseScene: '/assets/qingyu-house/house-scene.webp',
  layoutPet: '/assets/qingyu-house/layout-pet.webp',
  layoutFurniture: '/assets/qingyu-house/layout-furniture.webp',
  placementA: '/assets/qingyu-house/placement-revised.webp',
  placementB: '/assets/qingyu-house/placement-b.webp',
  capturePet: '/assets/qingyu-house/capture-pet.webp',
  makeEntry: '/assets/qingyu-house/make-entry.webp',
  makeWorld: '/assets/qingyu-house/make-world.webp',
  makeConfirm: '/assets/qingyu-house/make-confirm.webp',
  makeResult: '/assets/qingyu-house/make-result.webp',
  tempStorage: '/assets/qingyu-house/temp-storage.webp',
  emptyPlace: '/assets/qingyu-house/empty-place.webp',
  out1: '/assets/qingyu-house/out-1.webp',
  out2: '/assets/qingyu-house/out-2.webp',
  out3: '/assets/qingyu-house/out-3.webp',
  out4: '/assets/qingyu-house/out-4.webp',
  out5: '/assets/qingyu-house/out-5.webp',
  out6: '/assets/qingyu-house/out-6.webp',
};

const tianmaiAssets = {
  main: 'https://www.figma.com/api/mcp/asset/cbd61953-6648-42af-9191-a1815cc622eb',
  dialog: 'https://www.figma.com/api/mcp/asset/b912c7e8-8900-4ba0-bf8f-88f31a1cc883',
  split: 'https://www.figma.com/api/mcp/asset/01782d7f-a2c4-4afc-90b4-b9e48757bd5f',
  compose: 'https://www.figma.com/api/mcp/asset/cad4668d-3130-429b-aaa8-35168c6d2a6d',
  entry: 'https://www.figma.com/api/mcp/asset/02010d22-64fd-43b7-bef7-223639013461',
  toast: 'https://www.figma.com/api/mcp/asset/f41be282-c4b1-42ee-a588-35d938107135',
  final: 'https://www.figma.com/api/mcp/asset/ae4f7570-e0ff-44e4-a756-deaf2a782afa',
  overview: 'https://www.figma.com/api/mcp/asset/742988d8-f200-4a42-9b52-70401558fb63',
};

function Img({ src, className, alt = '' }: { src: string; className?: string; alt?: string }) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

function SectionTitle({ no, title, desc, dark = false }: { no?: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className="fg-title">
      {no ? <div className="fg-no">{no}</div> : null}
      <div>
        <h2 className={dark ? 'light' : ''}>{title}</h2>
        {desc ? <p>{desc}</p> : null}
      </div>
    </div>
  );
}

// ---- absolute-positioning primitives for the 1:1 Figma house rebuild ----
type CSS = CSSProperties;
function A({ l, t, w, h, style, className, children }: { l: number; t: number; w?: number; h?: number; style?: CSS; className?: string; children?: ReactNode }) {
  return (
    <div className={className} style={{ position: 'absolute', left: l, top: t, width: w, height: h, ...style }}>
      {children}
    </div>
  );
}
function HArrow({ l, t, w, color = '#8fa4f8', thickness = 2, head = 12 }: { l: number; t: number; w: number; color?: string; thickness?: number; head?: number }) {
  return (
    <A l={l} t={t} w={w} h={head} style={{ pointerEvents: 'none' }}>
      <span style={{ position: 'absolute', left: 0, top: head / 2 - thickness / 2, width: Math.max(0, w - head / 2), height: thickness, background: color, borderRadius: thickness }} />
      <span style={{ position: 'absolute', right: 0, top: 0, width: 0, height: 0, borderTop: `${head / 2}px solid transparent`, borderBottom: `${head / 2}px solid transparent`, borderLeft: `${head}px solid ${color}` }} />
    </A>
  );
}
function VArrow({ l, t, h, color = '#8fa4f8', thickness = 2, head = 12 }: { l: number; t: number; h: number; color?: string; thickness?: number; head?: number }) {
  return (
    <A l={l} t={t} w={head} h={h} style={{ pointerEvents: 'none' }}>
      <span style={{ position: 'absolute', left: head / 2 - thickness / 2, top: 0, width: thickness, height: Math.max(0, h - head / 2), background: color, borderRadius: thickness }} />
      <span style={{ position: 'absolute', left: 0, bottom: 0, width: 0, height: 0, borderLeft: `${head / 2}px solid transparent`, borderRight: `${head / 2}px solid transparent`, borderTop: `${head}px solid ${color}` }} />
    </A>
  );
}
function ElbowArrow({ l, t, w, h, color = '#8fa4f8', thickness = 2 }: { l: number; t: number; w: number; h: number; color?: string; thickness?: number }) {
  return (
    <A l={l} t={t} w={w} h={h} style={{ pointerEvents: 'none' }}>
      <span style={{ position: 'absolute', left: 0, top: 0, width: w, height: thickness, background: color, borderRadius: thickness }} />
      <span style={{ position: 'absolute', right: 0, top: 0, width: thickness, height: h - 10, background: color, borderRadius: thickness }} />
      <span style={{ position: 'absolute', right: -5, bottom: 0, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `10px solid ${color}` }} />
    </A>
  );
}
function CalloutLine({ l, t, w, color = '#5b7bf5', dot = 'end' }: { l: number; t: number; w: number; color?: string; dot?: 'start' | 'end' }) {
  return (
    <A l={l} t={t - 4} w={w + 8} h={8} style={{ pointerEvents: 'none' }}>
      {dot === 'start' ? <span style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 8, borderRadius: '50%', background: color }} /> : null}
      <span style={{ position: 'absolute', left: dot === 'start' ? 8 : 0, top: 3, width: w, height: 2, background: color, borderRadius: 2 }} />
      {dot === 'end' ? <span style={{ position: 'absolute', left: w, top: 0, width: 8, height: 8, borderRadius: '50%', background: color }} /> : null}
    </A>
  );
}
function HouseHead({ title, en, sub, subStyle }: { title: string; en: string; sub?: string; subStyle?: CSS }) {
  return (
    <>
      <A l={80} t={60} style={{ fontSize: 36, fontWeight: 800, color: '#333340', whiteSpace: 'nowrap' }}>{title}</A>
      <A l={80} t={108} style={{ fontSize: 16, fontWeight: 600, color: '#5b7bf5', whiteSpace: 'pre' }}>{en}</A>
      {sub ? <A l={80} t={178} style={{ fontSize: 24, fontWeight: 700, color: '#262633', ...subStyle }}>{sub}</A> : null}
    </>
  );
}

function HousePetCase() {
  // text style helpers
  const bold = (size: number, color: string): CSS => ({ fontSize: size, fontWeight: 700, color });
  const reg = (size: number, color: string): CSS => ({ fontSize: size, fontWeight: 400, color });
  const semi = (size: number, color: string): CSS => ({ fontSize: size, fontWeight: 600, color });
  const card: CSS = { background: '#fff', borderRadius: 12 };

  return (
    <div className="fg-canvas house-canvas" data-node-id="8328:11273">
      {/* 1 · 封面 */}
      <section className="hp-sec hp-cover" style={{ height: 900, color: '#fff' }}>
        <A l={0} t={0} w={1280} h={900} className="hp-cover-gradient" />
        <A l={-124} t={284} w={438} h={438} className="hp-cover-orbit hp-cover-orbit-a" />
        <A l={-51} t={356} w={286} h={286} className="hp-cover-orbit hp-cover-orbit-b" />
        <A l={139} t={282} className="hp-cover-letter">F</A>
        <A l={156} t={315} w={222} h={312} className="hp-cover-letter-mask" />
        <A l={278} t={473} w={913} h={2} className="hp-cover-rule" />
        <A l={880} t={248} w={465} h={3} className="hp-cover-speed hp-cover-speed-a" />
        <A l={958} t={343} w={410} h={3} className="hp-cover-speed hp-cover-speed-b" />
        <A l={1032} t={443} w={315} h={3} className="hp-cover-speed hp-cover-speed-c" />
        <A l={1261} t={470} w={6} h={6} className="hp-cover-pin" />
        <A l={320} t={342} className="hp-cover-copy">
          <h1>房屋家具+宠物搜集</h1>
          <p className="hp-cover-subtitle">交互设计</p>
          <p className="hp-cover-desc">通过在大世界捕捉宠物，可将宠物摆放在房屋<br />丰富房屋玩法，提升玩家沉浸感与风雅值</p>
        </A>
        <A l={104} t={810} w={1030} h={10} className="hp-cover-dots">
          {Array.from({ length: 20 }).map((_, i) => <i key={i} style={{ left: i * 55 }} />)}
        </A>
        <A l={0} t={0} w={1280} h={900} className="hp-cover-vignette" />
      </section>

      {/* 2 · 设计背景 */}
      <section className="hp-sec" style={{ height: 800, background: '#f7f2eb' }}>
        <HouseHead title="设计背景" en="THE  BACKGROUND" sub="为什么要做房屋家具+宠物搜集？" subStyle={{ fontSize: 28, whiteSpace: 'nowrap' }} />
        <A l={80} t={248} w={530} h={200} style={card} />
        <A l={80} t={248} w={120} h={40} style={{ background: '#5b7bf5', borderRadius: '16px 0 12px 0' }} />
        <A l={95} t={255} style={{ ...semi(16, '#fff'), whiteSpace: 'nowrap' }}>系统目的</A>
        <A l={105} t={308} w={480} style={reg(16, '#595966')}>通过在大世界捕捉宠物，可将宠物摆放在房屋。<br />增加房屋系统的可玩性和内容深度，<br />提升玩家对房屋的归属感与情感连接。</A>
        <A l={670} t={248} w={530} h={200} style={card} />
        <A l={670} t={248} w={120} h={40} style={{ background: '#fa8c59', borderRadius: '16px 0 12px 0' }} />
        <A l={685} t={255} style={{ ...semi(16, '#fff'), whiteSpace: 'nowrap' }}>界面需求</A>
        <A l={695} t={308} w={480} style={reg(16, '#595966')}>房屋布置界面-物品列表<br />新增宠物Tab与宠物详情面板<br />新增摆放/回收/移动/旋转交互</A>
        {[
          { l: 90, tag: '玩家', tagBg: '#fa7373', tagL: 150, c1: '更丰富的', c2: '房屋装饰体验' },
          { l: 385, tag: '策划', tagBg: '#5b7bf5', tagL: 445, c1: '增加养成深度', c2: '提升留存' },
          { l: 680, tag: '美术', tagBg: '#fa7373', tagL: 740, c1: '宠物模型', c2: '展示场景' },
          { l: 975, tag: '实现', tagBg: '#5b7bf5', tagL: 1035, c1: '复用现有', c2: '布置框架' },
        ].map((s) => (
          <div key={s.tag}>
            <A l={s.l} t={558} w={220} h={160} style={card} />
            <A l={s.tagL} t={538} w={100} h={36} style={{ background: s.tagBg, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#fff') }}>{s.tag}</A>
            <A l={s.l + 40} t={608} w={140} style={{ ...reg(16, '#595966'), textAlign: 'center' }}>{s.c1}<br />{s.c2}</A>
          </div>
        ))}
        <A l={1257} t={445} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
      </section>

      {/* 3 · 玩家目标 */}
      <section className="hp-sec" style={{ height: 800, background: '#e8ebf0' }}>
        <A l={0} t={431} w={1280} h={369} style={{ background: '#5b7bf5' }} />
        <A l={80} t={73} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>玩家目标</A>
        <A l={80} t={121} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>THE  GOALS</A>
        {[
          { l: 130, cl: 245, nl: 271, mt: 260, tl: 232, n: '1', meta: '搜集', title: '抓捕', c1: '在大世界发现并抓捕', c2: '限时出没的宠物', cx: 280 },
          { l: 490, cl: 605, nl: 628, mt: 620, tl: 592, n: '2', meta: '布置', title: '摆放', c1: '将宠物和家具', c2: '摆放在自己的房屋中', cx: 640 },
          { l: 850, cl: 965, nl: 988, mt: 980, tl: 952, n: '3', meta: '成长', title: '风雅', c1: '通过布置提升风雅值', c2: '解锁更多房屋功能', cx: 1000 },
        ].map((s) => (
          <div key={s.n}>
            <A l={s.l} t={314} w={300} h={340} style={{ ...card, borderRadius: 16, boxShadow: '0 4px 8px rgba(0,0,0,0.25)' }} />
            <A l={s.cl} t={259} w={70} h={70} style={{ borderRadius: '50%', background: '#fa7359' }} />
            <A l={s.nl} t={274} style={{ ...bold(36, '#fff'), whiteSpace: 'nowrap' }}>{s.n}</A>
            <A l={s.mt} t={354} style={{ ...semi(20, '#fa7359'), whiteSpace: 'nowrap' }}>{s.meta}</A>
            <A l={s.tl} t={394} style={{ ...bold(48, '#333359'), whiteSpace: 'nowrap' }}>{s.title}</A>
            <A l={s.cx - 100} t={474} w={200} style={{ ...reg(20, '#737380'), textAlign: 'center' }}>{s.c1}<br />{s.c2}</A>
          </div>
        ))}
      </section>

      {/* 4 · 系统架构 */}
      <section className="hp-sec" style={{ height: 700, background: '#f7f2eb' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>系统架构</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>SYSTEM  ARCHITECTURE</A>
        <A l={80} t={180} w={800} style={bold(22, '#33334d')}>从入口到核心玩法，构建完整的宠物搜集与房屋布置体验闭环</A>
        {[
          { l: 100, nl: 147, name: '大世界', bg: '#fa8c59', dl: 130, d1: '宠物出没', d2: '系统广播' },
          { l: 330, nl: 377, name: '三生石', bg: '#5b7bf5', dl: 360, d1: '房屋入口', d2: '房屋信息' },
          { l: 560, nl: 596, name: '房屋布置', bg: '#5b7bf5', dl: 590, d1: '物品列表', d2: '宠物/家具' },
          { l: 790, nl: 826, name: '摆放交互', bg: '#fa7373', dl: 820, d1: '移动/旋转', d2: '回收/确认' },
          { l: 1020, nl: 1056, name: '宠物抓捕', bg: '#fa7373', dl: 1050, d1: '追逐玩法', d2: '成功/失败' },
        ].map((s, i) => (
          <div key={s.name}>
            <A l={s.l} t={283} w={160} h={160} style={{ borderRadius: '50%', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(22, '#fff') }}>{s.name}</A>
            <A l={s.dl} t={456} w={100} style={{ ...reg(16, '#666673'), textAlign: 'center' }}>{s.d1}<br />{s.d2}</A>
            {i < 4 ? <HArrow l={265 + i * 230} t={356} w={62} color="#8fa4f8" thickness={3} /> : null}
          </div>
        ))}
        <A l={381} t={576} w={518} h={2} style={{ background: '#5b7bf5' }} />
        <A l={390} t={586} w={500} style={{ ...semi(20, '#5b7bf5'), textAlign: 'center' }}>抓捕成功后，宠物进入物品列表，可在房屋中摆放</A>
        <A l={1257} t={410} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
      </section>

      {/* 5 · 房屋入口 */}
      <section className="hp-sec" style={{ height: 1200, background: '#e8ebf0' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>房屋入口</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>HOUSE  ENTRY</A>
        <A l={792} t={153} style={{ ...bold(24, '#262633'), whiteSpace: 'nowrap' }}>三生石 · 房屋信息面板</A>
        <A l={80} t={208} w={520} h={293} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.worldPet} alt="大世界入口" className="hp-cover-img" /></A>
        <A l={670} t={205} w={520} h={296} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.houseTab} alt="房屋信息面板" className="hp-cover-img" /></A>
        <A l={380} t={721} w={520} h={296} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.houseScene} alt="房屋场景" className="hp-cover-img" /></A>
        <A l={486} t={281} w={8} h={8} style={{ borderRadius: '50%', background: '#2aa7ff' }} />
        <A l={494} t={284} w={136} h={2} style={{ background: '#2aa7ff', borderRadius: 2 }} />
        <A l={628} t={284} w={2} h={67} style={{ background: '#2aa7ff', borderRadius: 2 }} />
        <A l={628} t={349} w={38} h={2} style={{ background: '#2aa7ff', borderRadius: 2 }} />
        <A l={664} t={344} w={0} h={0} style={{ borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #2aa7ff' }} />
        <A l={785} t={463} w={8} h={8} style={{ borderRadius: '50%', background: '#2aa7ff' }} />
        <A l={670} t={466} w={115} h={2} style={{ background: '#2aa7ff', borderRadius: 2 }} />
        <A l={670} t={466} w={2} h={245} style={{ background: '#2aa7ff', borderRadius: 2 }} />
        <A l={665} t={710} w={0} h={0} style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '11px solid #2aa7ff' }} />
        <A l={80} t={524} w={520} style={{ ...bold(16, '#666673'), textAlign: 'center' }}>用户对“家”有天然认知：<br />从外部世界进入私人空间。<br />设计将房屋入口放在三生石(个人中心)符合用户心智模型——<br />“我的地盘”应该在“关于我”的区域内，降低寻路认知负担。</A>
        <A l={670} t={524} w={520} style={{ ...bold(16, '#666673'), textAlign: 'center' }}>玩家通过三生石界面右侧“房屋”Tab进入房屋系统。<br />房屋面板展示：房屋等级、资源（琳琅/木材/石料）、房屋状态，<br />以及聚宝盆、运势求签、访客、房屋商人等功能入口。<br />点击“前往房屋”可进入房屋场景。</A>
        <A l={390} t={1043} w={520} style={{ ...bold(16, '#666673'), textAlign: 'center' }}>进入了房屋里的场景，HUD的控件也随之发生了改变，只显示房屋里需要显示的内容，其他无关的内容都隐藏。</A>
      </section>

      {/* 6 · 房屋布置界面 */}
      <section className="hp-sec" style={{ height: 2000, background: '#f7f2eb' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>房屋布置界面</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>LAYOUT  INTERFACE</A>
        <A l={554} t={180} style={{ ...bold(20, '#262633'), whiteSpace: 'nowrap' }}>物品列表 · 宠物详情</A>
        <A l={550} t={699} style={{ ...bold(20, '#262633'), whiteSpace: 'nowrap' }}>物品列表 · 家具详情</A>
        <A l={290} t={215} w={700} h={393} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.layoutPet} alt="宠物详情" className="hp-cover-img" /></A>
        <A l={286} t={734} w={700} h={393} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.layoutFurniture} alt="家具详情" className="hp-cover-img" /></A>
        <CalloutLine l={990} t={332} w={45} color="#5b7bf5" dot="end" />
        <CalloutLine l={990} t={485} w={45} color="#5b7bf5" dot="end" />
        <CalloutLine l={986} t={851} w={45} color="#5b7bf5" dot="end" />
        <CalloutLine l={986} t={1004} w={45} color="#5b7bf5" dot="end" />
        <CalloutLine l={237} t={564} w={53} color="#5b7bf5" dot="start" />
        <CalloutLine l={233} t={1083} w={53} color="#5b7bf5" dot="start" />
        {/* right callouts */}
        <A l={1050} t={323} style={{ ...semi(15, '#33334d'), whiteSpace: 'nowrap' }}>宠物详情面板</A>
        <A l={1050} t={345} style={{ ...reg(16, '#737380'), whiteSpace: 'nowrap' }}>展示宠物名称、<br />风雅值加成、模型预览、<br />出没时间、描述文本</A>
        <A l={1050} t={477} style={{ ...semi(15, '#33334d'), whiteSpace: 'nowrap' }}>操作按钮</A>
        <A l={1050} t={499} style={{ ...reg(16, '#737380'), whiteSpace: 'nowrap' }}>“抓捕”前往大世界捕捉<br />“摆放”进入布置模式</A>
        <A l={1046} t={842} style={{ ...semi(15, '#33334d'), whiteSpace: 'nowrap' }}>家具详情面板</A>
        <A l={1046} t={864} style={{ ...reg(16, '#737380'), whiteSpace: 'nowrap' }}>展示家具名称、<br />风雅值加成、模型预览、<br />出没时间、描述文本</A>
        <A l={1046} t={996} style={{ ...semi(15, '#33334d'), whiteSpace: 'nowrap' }}>操作按钮</A>
        <A l={1046} t={1018} style={{ ...reg(16, '#737380'), whiteSpace: 'nowrap' }}>“制作”前往大世界进行绘制<br />“摆放”进入布置模式</A>
        {/* left callouts (right-aligned) */}
        <A l={50} t={556} w={180} style={{ ...semi(15, '#33334d'), textAlign: 'right' }}>物品列表</A>
        <A l={50} t={578} w={180} style={{ ...reg(16, '#737380'), textAlign: 'right' }}>底部横向滚动列表，<br />支持宠物/家具Tab切换<br />持有数量/上限<br />已摆数量/上限<br />控制资源获取与布置平衡</A>
        <A l={46} t={1075} w={180} style={{ ...semi(15, '#33334d'), textAlign: 'right' }}>物品列表</A>
        <A l={46} t={1097} w={180} style={{ ...reg(16, '#737380'), textAlign: 'right' }}>底部横向滚动列表，<br />支持宠物/家具Tab切换<br />持有数量/上限<br />已摆数量/上限<br />控制资源获取与布置平衡</A>
        <A l={1257} t={463} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
        {/* 设计方法 */}
        <A l={100} t={1252} w={1080} h={1} style={{ background: '#d9d9d9' }} />
        <A l={80} t={1274} style={{ ...bold(32, '#262633'), whiteSpace: 'nowrap' }}>设计方法</A>
        <A l={80} t={1340} w={250} style={bold(72, '#5b7bf5')}>7±2</A>
        <A l={80} t={1425} w={200} style={bold(20, '#262626')}>Miller定律</A>
        <A l={80} t={1455} w={250} style={reg(16, '#737373')}>人类工作记忆的容量上限</A>
        <A l={320} t={1350} w={1} h={249} style={{ background: '#d9d9d9' }} />
        {[
          { t0: 1350, tag: 'Tab分类', d: '将家具/宠物拆为独立认知空间，避免一次面对全部物品', s: '分块(Chunking)' },
          { t0: 1450, tag: '4列网格', d: '每屏8-12个物品，控制在认知容量7±2范围内', s: '容量限制' },
          { t0: 1550, tag: '点击展开', d: '默认只显示缩略图，详情按需展开，逐层释放信息', s: '渐进披露' },
        ].map((r, i) => (
          <div key={r.tag}>
            <A l={360} t={r.t0} w={100} h={30} style={{ background: 'rgba(91,123,245,0.1)', borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#5b7bf5') }}>{r.tag}</A>
            <A l={480} t={r.t0 + 5} w={480} style={reg(16, '#333')}>{r.d}</A>
            <A l={480} t={r.t0 + 30} w={200} style={reg(16, '#999')}>{r.s}</A>
            {i < 2 ? <A l={360} t={r.t0 + 65} w={600} h={1} style={{ background: '#e5e5e5' }} /> : null}
          </div>
        ))}
        {/* 决策链 */}
        <A l={80} t={1675} w={200} style={bold(20, '#262626')}>布局设计决策链</A>
        {[
          { l: 80, q: '物品太多怎么办？', a: 'Tab分类拆分认知空间' },
          { l: 370, q: '单类还是太多？', a: '4列网格每屏8-12个' },
          { l: 660, q: '信息看不完？', a: '默认缩略，点击展详情' },
          { l: 950, q: '找不到目标？', a: '搜索+筛选+最近使用' },
        ].map((c) => (
          <div key={c.q}>
            <A l={c.l} t={1707} w={265} h={110} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8 }} />
            <A l={c.l + 12} t={1717} w={240} style={semi(16, '#d98026')}>{c.q}</A>
            <A l={c.l + 12} t={1739} w={20} style={reg(14, '#999')}>↓</A>
            <A l={c.l + 12} t={1759} w={240} style={bold(16, '#404040')}>{c.a}</A>
          </div>
        ))}
        <A l={80} t={1857} w={1135} h={80} style={{ background: 'rgba(91,123,245,0.05)', borderRadius: 8 }} />
        <A l={100} t={1887} w={1014} style={semi(16, '#66738c')}>格式塔接近性: 同类物品间距小于不同类间距，自动形成视觉分组，无需额外标签</A>
      </section>

      {/* 7 · 摆放交互 */}
      <section className="hp-sec" style={{ height: 1900, background: '#ebf0fa' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>摆放交互</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>PLACEMENT  INTERACTION</A>
        <A l={80} t={180} w={800} style={bold(26, '#33334d')}>网格化布置系统，精准控制物品位置</A>
        <A l={80} t={230} w={800} style={reg(16, '#666673')}>进入摆放模式后，房屋场景切换为俯视网格视角。<br />绿色区域为可摆放范围，物品需在此范围内放置。</A>
        <A l={80} t={310} w={560} h={314} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.placementA} alt="摆放网格" className="hp-cover-img" /></A>
        <A l={80} t={677} w={560} h={314} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.placementB} alt="摆放限制" className="hp-cover-img" /></A>
        <A l={705} t={310} style={{ ...bold(20, '#33334d'), whiteSpace: 'nowrap' }}>物品操作</A>
        {[
          { t0: 360, k: 'R', title: '旋转', d: '点击使物品沿Y轴顺时针旋转45°', kl: 739 },
          { t0: 470, k: 'M', title: '移动', d: '拇指长按并滑动可使物品位移', kl: 736 },
          { t0: 580, k: 'C', title: '回收', d: '将物品放进临时收纳处', kl: 738 },
          { t0: 690, k: 'P', title: '摆放', d: '将物品确定/取消摆放选择的位置', kl: 739 },
          { t0: 800, k: 'S', title: '禁止', d: '超出可摆放区域时物品禁止摆放', kl: 739 },
        ].map((o) => (
          <div key={o.k}>
            <A l={705} t={o.t0} w={500} h={96} style={card} />
            <A l={723} t={o.t0 + 26} w={44} h={44} style={{ borderRadius: '50%', background: 'rgba(91,123,245,0.1)' }} />
            <A l={o.kl} t={o.t0 + 37} style={{ ...bold(18, '#5b7bf5'), whiteSpace: 'nowrap' }}>{o.k}</A>
            <A l={780} t={o.t0 + 25} style={{ ...bold(17, '#33334d'), whiteSpace: 'nowrap' }}>{o.title}</A>
            <A l={780} t={o.t0 + 51} w={400} style={reg(16, '#737380')}>{o.d}</A>
          </div>
        ))}
        <A l={1269} t={321} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
        {/* 设计方法 */}
        <A l={100} t={1115} w={1080} h={1} style={{ background: '#d4ddf0' }} />
        <A l={80} t={1149} style={{ ...bold(32, '#262633'), whiteSpace: 'nowrap' }}>设计方法</A>
        <A l={80} t={1215} w={350} style={{ ...bold(42, '#262626'), letterSpacing: -1 }}>T = a + b</A>
        <A l={80} t={1264} w={430} style={{ ...bold(42, '#5b7bf5'), letterSpacing: -1 }}>log<span style={{ fontSize: 22, verticalAlign: 'sub' }}>2</span>(D/W+1)</A>
        <A l={80} t={1320} w={300} style={reg(16, '#808080')}>费茨定律 Fitts's Law</A>
        <A l={80} t={1360} w={550} h={150} style={{ background: '#f5f7fc', borderRadius: 10 }} />
        <A l={110} t={1375} w={400} style={bold(20, '#262626')}>W↑ 目标越大 → T↓ 操作越快</A>
        <A l={110} t={1412} w={450} style={{ ...reg(16, '#666'), lineHeight: '24px' }}>底部操作栏按钮采用全宽设计，高度&gt;=48pt<br />物品网格卡片保证最小触控面积<br />拇指热区覆盖所有高频操作按钮</A>
        <A l={650} t={1360} w={550} h={150} style={{ background: '#f5f7fc', borderRadius: 10 }} />
        <A l={680} t={1375} w={400} style={bold(20, '#262626')}>D↓ 距离越近 → T↓ 操作越快</A>
        <A l={680} t={1412} w={450} style={{ ...reg(16, '#666'), lineHeight: '24px' }}>确认/取消/旋转按钮置于屏幕底部拇指舒适区<br />操作面板紧贴选中物品，缩短视觉-操作距离<br />网格吸附减少微调需求</A>
        <A l={80} t={1488} w={800} style={semi(20, '#5b7bf5')}>大目标 + 近距离 + 直接操纵 = 高效率、低出错的摆放体验</A>
        <A l={80} t={1565} w={200} style={bold(20, '#262626')}>触控热区规范</A>
        {[
          { l: 80, h: '底部操作栏', a: '按钮高度>=48pt，全宽均分', b: '拇指舒适区，最大化命中率' },
          { l: 363, h: '物品网格', a: '卡片>=80pt，间距>=8pt', b: '防止误触相邻物品' },
          { l: 646, h: '旋转手势', a: '双指旋转+按钮旋转双模式', b: '精确+快捷两种需求' },
          { l: 929, h: '确认/取消', a: '主按钮面积>次按钮', b: '高频操作拥有更大热区' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={1598} w={270} h={115} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8 }} />
            <A l={c.l + 12} t={1608} w={250} style={bold(20, '#5b7bf5')}>{c.h}</A>
            <A l={c.l + 12} t={1648} w={250} style={semi(16, '#333')}>{c.a}</A>
            <A l={c.l + 12} t={1673} w={250} style={reg(16, '#808080')}>{c.b}</A>
          </div>
        ))}
        <A l={80} t={1746} w={1120} h={100} style={{ background: 'rgba(245,158,66,0.08)', borderRadius: 8 }} />
        <A l={110} t={1775} w={150} style={bold(16, '#d98026')}>直接操纵原则</A>
        <A l={260} t={1772} w={700} style={reg(20, '#80664d')}>拖拽移动+手势旋转+实时预览 = 所见即所得，零学习成本</A>
        <A l={260} t={1802} w={700} style={reg(16, '#998c80')}>用户直接对物品执行操作，而非通过间接菜单，操作结果即时可见</A>
      </section>

      {/* 8 · 宠物抓捕 */}
      <section className="hp-sec" style={{ height: 1800, background: '#f7f2eb' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>宠物抓捕</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>PET  CAPTURE</A>
        <A l={80} t={180} style={{ ...bold(32, '#262633'), whiteSpace: 'nowrap' }}>大世界限时宠物追逐玩法</A>
        <A l={216} t={257} w={720} h={405} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.capturePet} alt="宠物抓捕" className="hp-cover-img" /></A>
        <A l={80} t={251} w={110} h={28} style={{ background: '#5b7bf5', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', ...semi(14, '#fff') }}>公告栏跑马灯</A>
        <A l={80} t={471} w={110} h={28} style={{ background: '#5b7bf5', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', ...semi(14, '#fff') }}>抓捕宠物按钮</A>
        <A l={80} t={618} w={110} h={28} style={{ background: '#fa8c59', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', ...semi(14, '#fff') }}>系统频道</A>
        <CalloutLine l={190} t={267} w={183} color="#5b7bf5" dot="end" />
        <CalloutLine l={190} t={487} w={472} color="#5b7bf5" dot="end" />
        <CalloutLine l={190} t={632} w={253} color="#fa8c59" dot="end" />
        {/* 抓捕流程 */}
        <A l={1000} t={280} style={{ ...bold(20, '#33334d'), whiteSpace: 'nowrap' }}>抓捕流程</A>
        {[
          { t0: 330, n: '01', tt: 332, h: '宠物出没', d: '系统广播通知，限时出现' },
          { t0: 415, n: '02', tt: 417, h: '前往地点', d: '点击前往，跑向宠物位置' },
          { t0: 500, n: '03', tt: 502, h: '执行抓捕', d: '靠近后点击“抓捕”交互按钮' },
          { t0: 585, n: '04', tt: 587, h: '判定结果', d: '成功获得宠物/失败弹出提示' },
        ].map((s) => (
          <div key={s.n}>
            <A l={1000} t={s.t0} style={{ ...bold(28, '#d1dbf2'), whiteSpace: 'nowrap' }}>{s.n}</A>
            <A l={1050} t={s.tt} style={{ ...bold(16, '#33334d'), whiteSpace: 'nowrap' }}>{s.h}</A>
            <A l={1050} t={s.tt + 22} style={{ ...reg(16, '#737380'), whiteSpace: 'nowrap' }}>{s.d}</A>
            {s.n !== '04' ? <VArrow l={1017} t={s.t0 + 40} h={35} color="#d1dbf2" thickness={3} /> : null}
          </div>
        ))}
        {/* 双通道 */}
        <A l={80} t={703} w={1120} h={150} style={{ background: 'rgba(255,255,255,0.9)', borderRadius: 8 }} />
        <A l={110} t={718} w={200} style={bold(24, '#f59e42')}>为什么双通道？</A>
        <A l={110} t={764} style={reg(16, '#9999a6')}>单通道在高噪音环境下检出率不足40%。视觉跑马灯利用前注意加工中的运动检测自动捕获注意力；系统频道提供持久化文字记录，弥补瞬时遗漏。<br />两条独立通道确保信息触达率接近100%。</A>
        <A l={110} t={811} w={800} style={semi(20, '#5b7bf5')}>原理映射: 冗余编码 → 跑马灯+频道双通道 → 零遗漏通知</A>
        {/* 抓捕判定流程 */}
        <A l={80} t={921} style={{ ...bold(32, '#333340'), whiteSpace: 'nowrap' }}>抓捕判定流程</A>
        <A l={192} t={999} style={{ ...bold(20, '#262633'), whiteSpace: 'nowrap' }}>多条件判定，覆盖各种抓捕结果</A>
        <A l={130} t={1178} w={70} h={70} style={{ borderRadius: '50%', background: '#5e7df6', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', ...semi(16, '#fff') }}>执行<br />抓捕</A>
        <HArrow l={200} t={1206} w={90} color="#5e7df6" />
        <A l={290} t={1178} w={80} h={70} style={{ background: '#ffbf82', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(20, '#fff') }}>判定</A>
        <A l={442} t={1198} w={100} h={30} style={{ background: '#5e7df6', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', ...semi(16, '#fff') }}>玩家追逐中</A>
        <HArrow l={370} t={1206} w={72} color="#5e7df6" />
        <A l={329} t={1093} w={2} h={85} style={{ background: '#62bc74' }} />
        <A l={338} t={1159} style={{ ...semi(16, '#62bc74'), whiteSpace: 'nowrap' }}>成功</A>
        <A l={280} t={1043} w={100} h={50} style={{ background: '#62bc74', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#fff') }}>抓捕成功</A>
        <HArrow l={380} t={1061} w={100} color="#62bc74" />
        <A l={484} t={1049} w={200} style={semi(16, '#62bc74')}>弹出成功Toast<br />宠物进入物品列表</A>
        <A l={329} t={1248} w={2} h={85} style={{ background: '#f16066' }} />
        <A l={338} t={1248} style={{ ...semi(16, '#f16066'), whiteSpace: 'nowrap' }}>失败</A>
        <A l={280} t={1333} w={100} h={50} style={{ background: '#f16066', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#fff') }}>抓捕失败</A>
        <A l={165} t={1360} w={2} h={106} style={{ background: '#f16066' }} />
        <A l={501} t={1360} w={2} h={106} style={{ background: '#f16066' }} />
        <A l={165} t={1361} w={336} h={2} style={{ background: '#f16066' }} />
        {[
          { l: 85, txt: '被其他玩家先行抓捕' },
          { l: 251, txt: '刷新结束时间到了' },
          { l: 417, txt: '网络异常/绘制失败' },
        ].map((c) => (
          <div key={c.txt}>
            <A l={c.l} t={1436} w={160} h={40} style={{ background: '#fff', borderRadius: 8, display: 'flex', alignItems: 'center', paddingLeft: 14, ...semi(16, '#f16066') }}>{c.txt}</A>
          </div>
        ))}
        <A l={183} t={1498} style={{ ...reg(16, '#666673'), whiteSpace: 'nowrap' }}>所有结果均通过通用Toast组件反馈给玩家</A>
        {/* 行为强化循环 */}
        <A l={908} t={1253} style={{ ...bold(20, '#262626'), whiteSpace: 'nowrap' }}>行为强化循环</A>
        {[
          { l: 772, t0: 1057, txt: '随机出没' },
          { l: 1052, t0: 1057, txt: '限时追逐' },
          { l: 1052, t0: 1367, txt: '即时反馈' },
          { l: 772, t0: 1367, txt: '情感绑定' },
        ].map((c) => (
          <div key={c.txt}>
            <A l={c.l} t={c.t0} w={110} h={110} style={{ borderRadius: '50%', background: '#fff', border: '12px solid #e5edff' }} />
            <A l={c.l + 55 - 35} t={c.t0 + 45} w={70} style={{ ...bold(16, '#262626'), textAlign: 'center' }}>{c.txt}</A>
          </div>
        ))}
        <HArrow l={882} t={1106} w={170} color="#dbe6fb" thickness={2} head={10} />
        <HArrow l={882} t={1416} w={170} color="#dbe6fb" thickness={2} head={10} />
        <VArrow l={1100} t={1167} h={200} color="#dbe6fb" thickness={2} head={10} />
        <VArrow l={821} t={1167} h={200} color="#dbe6fb" thickness={2} head={10} />
        <A l={1257} t={447} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
        {/* 体验设计要点 */}
        <A l={77} t={1600} w={200} style={bold(20, '#262626')}>抓捕体验设计要点</A>
        {[
          { l: 77, h: '稀缺性控制', d: '每日出没次数有限，错过即消失，制造FOMO效应驱动即时行动' },
          { l: 369, h: '难度曲线', d: '普通宠物高成功率建立信心，稀有宠物低概率制造挑战和惊喜' },
          { l: 661, h: '收集进度', d: '图鉴系统可视化收集进度，利用目标趋近效应激励完成度' },
          { l: 953, h: '社交展示', d: '稀有宠物在房屋中展示形成社交货币，满足反思层表达需求' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={1633} w={240} h={110} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8 }} />
            <A l={c.l + 14} t={1643} w={140} style={bold(20, '#f59e42')}>{c.h}</A>
            <A l={c.l + 14} t={1677} w={210} style={reg(16, '#595959')}>{c.d}</A>
          </div>
        ))}
      </section>

      {/* 9 · 家具制造 */}
      <section className="hp-sec" style={{ height: 2600, background: '#ecf2fa' }}>
        <A l={80} t={60} w={160} style={{ ...bold(40, '#292e40'), lineHeight: '43px' }}>家具制造</A>
        <A l={80} t={108} w={190} style={{ ...bold(18, '#597aeb'), lineHeight: '20px' }}>FURNITURE MAKING</A>
        <A l={80} t={176} style={{ ...bold(26, '#292e40'), whiteSpace: 'nowrap' }}>大世界家具制造</A>
        <A l={80} t={276} w={90} style={bold(22, '#292e40')}>制作流程</A>
        {[
          { t0: 326, n: '01', h: '获取图纸', d: '任务/玩法获得家具图纸' },
          { t0: 411, n: '02', h: '查看条件', d: '确认材料、数量与消耗' },
          { t0: 496, n: '03', h: '调整数量', d: '步进器控制批量制造' },
          { t0: 581, n: '04', h: '确认制造', d: '消耗材料后即时反馈' },
        ].map((s, i) => (
          <div key={s.n}>
            <A l={80} t={s.t0} w={44} style={{ ...bold(30, '#ccdbff'), lineHeight: '30px' }}>{s.n}</A>
            <A l={130} t={s.t0 + 2} w={150} style={{ ...bold(17, '#292e40'), lineHeight: '19px' }}>{s.h}</A>
            <A l={130} t={s.t0 + 26} w={185} style={{ ...reg(14, '#57617a'), lineHeight: '18px' }}>{s.d}</A>
            {i < 3 ? <VArrow l={97} t={s.t0 + 42} h={35} color="#597aeb" thickness={1} head={8} /> : null}
          </div>
        ))}
        {[
          { t0: 170, src: houseAssets.makeEntry, alt: '制造入口' },
          { t0: 565, src: houseAssets.makeWorld, alt: '大世界制造' },
          { t0: 960, src: houseAssets.makeConfirm, alt: '制造确认' },
          { t0: 1355, src: houseAssets.makeResult, alt: '制造结果' },
        ].map((m) => (
          <A key={m.t0} l={360} t={m.t0} w={560} h={315} style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 16px 28px rgba(26,33,51,0.12)' }}><Img src={m.src} alt={m.alt} className="hp-cover-img" /></A>
        ))}
        <A l={638} t={318} w={96} h={2} style={{ background: '#25a8ff', borderRadius: 2 }} />
        <A l={731} t={314} w={8} h={8} style={{ borderRadius: '50%', background: '#25a8ff' }} />
        <VArrow l={633} t={318} h={238} color="#25a8ff" thickness={2} head={10} />
        <A l={654} t={522} style={{ ...reg(18, '#57617a'), lineHeight: '26px', whiteSpace: 'nowrap' }}>退到大世界，自动寻路到“家具”处</A>
        <A l={746} t={734} w={8} h={8} style={{ borderRadius: '50%', background: '#25a8ff' }} />
        <HArrow l={754} t={737} w={220} color="#25a8ff" thickness={2} head={9} />
        <A l={990} t={720} style={{ ...reg(18, '#57617a'), lineHeight: '26px', whiteSpace: 'nowrap' }}>绘制完成后弹出，弹出通用Toast</A>
        <A l={636} t={876} w={8} h={8} style={{ borderRadius: '50%', background: '#25a8ff' }} />
        <VArrow l={633} t={884} h={76} color="#25a8ff" thickness={2} head={10} />
        <A l={655} t={916} style={{ ...reg(18, '#57617a'), lineHeight: '26px', whiteSpace: 'nowrap' }}>前往房屋制造家具</A>
        <A l={636} t={1272} w={8} h={8} style={{ borderRadius: '50%', background: '#25a8ff' }} />
        <VArrow l={633} t={1280} h={76} color="#25a8ff" thickness={2} head={10} />
        <A l={390} t={1684} w={500} style={{ ...reg(18, '#57617a'), lineHeight: '26px', textAlign: 'center' }}>制造弹窗将“做什么、做几个、缺什么、花多少”压缩在同一屏，<br />减少背包、图纸、材料之间的反复确认。</A>
        {/* 制造判定流程 */}
        <A l={80} t={1816} w={260} style={{ ...bold(32, '#292e40'), lineHeight: '25px' }}>制造判定流程</A>
        <A l={80} t={1873} style={{ ...bold(20, '#262633'), whiteSpace: 'nowrap' }}>多条件判定覆盖可制造、材料不足、数量超限、背包不足等状态。</A>
        <A l={118} t={2015} w={70} h={70} style={{ borderRadius: '50%', background: '#597aeb', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', ...bold(16, '#fff') }}>点击<br />制造</A>
        <HArrow l={188} t={2044} w={92} color="#597aeb" thickness={1} head={10} />
        <A l={280} t={2031} w={80} h={38} style={{ background: '#fff', border: '1px solid rgba(89,122,235,0.7)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#292e40') }}>判定</A>
        <A l={320} t={1951} w={1} h={80} style={{ background: '#597aeb' }} />
        <A l={260} t={1913} w={120} h={38} style={{ background: '#fff', border: '1px solid rgba(31,158,122,0.7)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#292e40') }}>材料充足</A>
        <HArrow l={380} t={1926} w={104} color="#1f9e7a" thickness={1} head={10} />
        <A l={484} t={1913} w={210} style={{ ...reg(16, '#57617a'), lineHeight: '19px' }}>扣除材料<br />生成家具并提示成功</A>
        <A l={320} t={2069} w={1} h={75} style={{ background: '#597aeb' }} />
        <A l={260} t={2144} w={120} h={38} style={{ background: '#fff', border: '1px solid rgba(242,148,31,0.7)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#292e40') }}>材料不足</A>
        <A l={155} t={2163} w={338} h={1} style={{ background: '#f2941f' }} />
        <A l={154} t={2163} w={1} h={70} style={{ background: '#f2941f' }} />
        <A l={320} t={2182} w={1} h={51} style={{ background: '#f2941f' }} />
        <A l={492} t={2163} w={1} h={70} style={{ background: '#f2941f' }} />
        {[
          { l: 80, txt: '缺少材料' },
          { l: 250, txt: '数量超限' },
          { l: 420, txt: '背包不足' },
        ].map((c) => (
          <A key={c.txt} l={c.l} t={2233} w={145} h={38} style={{ background: '#fff', border: '1px solid rgba(242,148,31,0.7)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(16, '#292e40') }}>{c.txt}</A>
        ))}
        <A l={156} t={2284} w={330} style={{ ...reg(16, '#57617a'), lineHeight: '18px', textAlign: 'center' }}>异常用轻提示反馈，不中断玩家当前操作。</A>
        {/* 制作决策循环 */}
        <A l={908} t={2095} w={120} style={{ ...bold(20, '#262633'), textAlign: 'center' }}>制作决策循环</A>
        {[
          { l: 773, t0: 1903, txt: '图纸目标' },
          { l: 1047, t0: 1903, txt: '材料收集' },
          { l: 1047, t0: 2207, txt: '制造反馈' },
          { l: 773, t0: 2207, txt: '空间摆放' },
        ].map((c) => (
          <div key={c.txt}>
            <A l={c.l} t={c.t0} w={104} h={104} style={{ borderRadius: '50%', background: '#fff', border: '2px solid #c6d3f7' }} />
            <A l={c.l + 14} t={c.t0 + 14} w={76} h={76} style={{ borderRadius: '50%', background: '#eef2fc' }} />
            <A l={c.l + 18} t={c.t0 + 43} w={70} style={bold(16, '#292e40')}>{c.txt}</A>
          </div>
        ))}
        <HArrow l={877} t={1949} w={170} color="#597aeb" thickness={1} head={10} />
        <HArrow l={877} t={2253} w={170} color="#597aeb" thickness={1} head={10} />
        <VArrow l={1093} t={2007} h={200} color="#597aeb" thickness={1} head={10} />
        <VArrow l={819} t={2007} h={200} color="#597aeb" thickness={1} head={10} />
        {/* 体验设计要点 */}
        <A l={82} t={2387} w={220} style={bold(18, '#262626')}>家具制造体验设计要点</A>
        {[
          { l: 80, bar: '#597aeb', h: '成本透明', d: '材料、数量、消耗在确认前完整展示，减少不确定感。' },
          { l: 372, bar: '#1f9e7a', h: '操作可控', d: '步进器适合小批量调整，避免输入错误和误触。' },
          { l: 664, bar: '#f2941f', h: '结果归因', d: '成功、材料不足、空间不足分别反馈，让玩家知道下一步。' },
          { l: 956, bar: '#597aeb', h: '长期目标', d: '家具产出连接家园摆放，制造行为转化为空间经营动机。' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={2427} w={240} h={110} style={{ background: '#f6f9ff', border: '1px solid #d1def5', borderRadius: 8 }} />
            <A l={c.l} t={2427} w={240} h={4} style={{ background: c.bar }} />
            <A l={c.l + 19} t={2443} style={{ ...bold(18, '#292e40'), lineHeight: '21px' }}>{c.h}</A>
            <A l={c.l + 19} t={2473} w={200} style={{ ...reg(14, '#57617a'), lineHeight: '19px' }}>{c.d}</A>
          </div>
        ))}
        <A l={1269} t={314} w={6} h={6} style={{ borderRadius: '50%', background: '#597aeb' }} />
      </section>

      {/* 10 · 物品管理 */}
      <section className="hp-sec" style={{ height: 1300, background: '#f7f2eb' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>物品管理</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>ITEM  MANAGEMENT</A>
        <A l={80} t={180} style={{ ...bold(24, '#262633'), whiteSpace: 'nowrap' }}>临时收纳与物品回收机制</A>
        <A l={80} t={230} w={700} style={reg(18, '#666673')}>布置过程中，玩家可将不满意的物品临时收纳。<br />点击“确定布置”后，临时收纳中的物品全部回收至物品列表。</A>
        <A l={80} t={299} w={540} h={303} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.emptyPlace} alt="无临时收纳" className="hp-cover-img" /></A>
        <A l={660} t={299} w={540} h={303} style={{ borderRadius: 12, overflow: 'hidden' }}><Img src={houseAssets.tempStorage} alt="临时收纳" className="hp-cover-img" /></A>
        <A l={882} t={276} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'nowrap' }}>临时收纳界面</A>
        <HArrow l={620} t={450} w={40} color="#d7e2f6" thickness={2} head={9} />
        {/* 设计意图 */}
        <A l={80} t={620} w={1120} h={80} style={{ background: 'rgba(91,123,245,0.06)', borderRadius: 8 }} />
        <A l={110} t={636} w={100} style={bold(20, '#5b7bf5')}>设计意图</A>
        <A l={110} t={665} w={1000} style={reg(16, '#4d5973')}>临时收纳的本质不是“回收功能”，而是“安全感设计”——让玩家相信探索是无代价的，从而释放创造力。</A>
        {/* VS 对比 */}
        <A l={80} t={709} w={500} h={250} style={{ background: '#fff', borderRadius: '0 0 10px 10px' }} />
        <A l={80} t={709} w={500} h={5} style={{ background: '#d95959' }} />
        <A l={110} t={729} w={200} style={bold(20, '#d95959')}>没有临时收纳</A>
        <A l={110} t={764} w={300} style={semi(16, '#4d4d4d')}>回收 = 永久删除</A>
        <A l={110} t={794} w={400} style={{ ...reg(20, '#808080'), lineHeight: '32px' }}>玩家不敢轻易尝试新布局<br />每次操作都担心不可逆<br />探索意愿被恐惧抑制<br />布置频次和创意空间大幅受限</A>
        <A l={700} t={709} w={500} h={250} style={{ background: '#fff', borderRadius: '0 0 10px 10px' }} />
        <A l={700} t={709} w={500} h={5} style={{ background: '#66bf73' }} />
        <A l={730} t={729} w={200} style={bold(20, '#66bf73')}>有临时收纳</A>
        <A l={730} t={764} w={300} style={semi(16, '#4d4d4d')}>回收 = 暂存，随时可恢复</A>
        <A l={730} t={794} w={400} style={{ ...reg(20, '#808080'), lineHeight: '32px' }}>安全感鼓励大胆实验<br />操作完全可逆，零焦虑<br />探索意愿显著提升<br />形成“尝试→回收→再试”的正向循环</A>
        <A l={615} t={809} w={50} h={50} style={{ borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(14, '#5b7bf5') }}>VS</A>
        {/* 交互细节 */}
        <A l={80} t={1018} w={200} style={bold(20, '#262626')}>临时收纳交互细节</A>
        {[
          { l: 80, n: '1', h: '长按物品', d: '触发回收选项浮层', arrow: 358 },
          { l: 370, n: '2', h: '确认回收', d: '物品飞入收纳栏动效', arrow: 648 },
          { l: 660, n: '3', h: '查看收纳', d: '侧滑展开收纳面板', arrow: 938 },
          { l: 950, n: '4', h: '重新摆放', d: '从收纳拖回场景即可', arrow: null },
        ].map((c) => (
          <div key={c.n}>
            <A l={c.l} t={1052} w={265} h={95} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8 }} />
            <A l={c.l + 8} t={1060} w={28} h={28} style={{ borderRadius: '50%', background: '#dbe3fb', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(12, '#5b7bf5') }}>{c.n}</A>
            <A l={c.l + 45} t={1065} w={200} style={bold(16, '#262626')}>{c.h}</A>
            <A l={c.l + 45} t={1095} w={200} style={reg(16, '#737373')}>{c.d}</A>
            {c.arrow !== null ? <HArrow l={c.l + 265} t={1094} w={25} color="#d7e2f6" thickness={2} head={8} /> : null}
          </div>
        ))}
        <A l={80} t={1167} w={800} style={semi(20, '#5b7bf5')}>全程操作可逆，物品可在“场景”和“收纳”之间自由流转</A>
        <A l={1257} t={447} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
      </section>

      {/* 11 · 退出与保存 */}
      <section className="hp-sec" style={{ height: 1230, background: '#e8ebf0' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>退出与保存</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'pre' }}>EXIT  &  SAVE</A>
        <A l={80} t={180} style={{ ...bold(24, '#262633'), whiteSpace: 'nowrap' }}>布置修改保护机制</A>
        <A l={80} t={230} w={700} style={reg(18, '#666673')}>当物品有摆放修改时，关闭界面会弹出确认弹窗，<br />防止玩家误操作丢失布置进度。</A>
        {[
          { l: 50, n: '1', h: '关闭布置界面', d: '点击关闭按钮' },
          { l: 290, n: '2', h: '检测修改', d: '系统判断是否有\n未保存的摆放变动' },
          { l: 530, n: '3', h: '弹窗确认', d: '有修改时弹出\n“是否保存”弹窗' },
          { l: 770, n: '4', h: '执行操作', d: '保存布置/放弃修改\n返回房屋场景' },
          { l: 1010, n: '5', h: '退出房屋副本', d: '确认布置后回到房屋场景。\n再次点击退出可离开房屋副本，返回大世界。' },
        ].map((c, i) => (
          <div key={c.n}>
            <A l={c.l} t={317} w={220} h={130} style={card} />
            <A l={c.l + 4} t={296} w={32} h={32} style={{ borderRadius: '50%', background: '#5b7bf5', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(14, '#fff') }}>{c.n}</A>
            <A l={c.l + 20} t={337} style={{ ...bold(16, '#33334d'), whiteSpace: 'nowrap' }}>{c.h}</A>
            <A l={c.l + 20} t={365} w={c.n === '5' ? 200 : 180} style={{ ...reg(16, '#737380'), whiteSpace: 'pre-line' }}>{c.d}</A>
            {i < 4 ? <HArrow l={c.l + 220} t={382} w={20} color="#d7e2f6" thickness={2} head={8} /> : null}
          </div>
        ))}
        <A l={1257} t={447} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
        {/* 错误预防 */}
        <A l={80} t={534} w={400} style={bold(24, '#262626')}>错误预防</A>
        <A l={80} t={576} w={500} style={reg(18, '#737373')}>比起好的报错信息，更好的设计是预防错误发生</A>
        <A l={480} t={622} w={320} h={45} style={{ background: 'rgba(91,123,245,0.12)', borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(18, '#5b7bf5') }}>玩家点击退出按钮</A>
        <A l={640} t={667} w={1} h={35} style={{ background: '#9eadcc' }} />
        <A l={430} t={702} w={420} h={40} style={{ background: 'rgba(245,158,66,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(18, '#d98026') }}>弹出确认弹窗: 你要保存修改吗？</A>
        <A l={260} t={722} w={1} h={75} style={{ background: '#9eadcc' }} />
        <A l={1020} t={722} w={1} h={75} style={{ background: '#9eadcc' }} />
        <A l={640} t={742} w={1} h={55} style={{ background: '#9eadcc' }} />
        <A l={260} t={722} w={170} h={1} style={{ background: '#9eadcc' }} />
        <A l={850} t={722} w={170} h={1} style={{ background: '#9eadcc' }} />
        {[
          { l: 160, bg: 'rgba(102,191,115,0.08)', h: '保存并退出', d: '保留全部修改\n安全离开', tag: '默认选项(最安全)', tc: '#66bf73' },
          { l: 540, bg: 'rgba(245,158,66,0.08)', h: '不保存退出', d: '放弃本次修改\n恢复进入前状态', tag: '明确放弃', tc: '#f59e42' },
          { l: 920, bg: 'rgba(91,123,245,0.08)', h: '取消', d: '返回继续编辑\n什么都不变', tag: '误触出口', tc: '#5b7bf5' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={797} w={200} h={120} style={{ background: c.bg, borderRadius: 10 }} />
            <A l={c.l + 15} t={807} w={170} style={bold(16, '#262626')}>{c.h}</A>
            <A l={c.l + 15} t={835} w={170} style={{ ...reg(20, '#666'), whiteSpace: 'pre-line' }}>{c.d}</A>
            <A l={c.l + 15} t={892} w={170} style={semi(16, c.tc)}>{c.tag}</A>
          </div>
        ))}
        <A l={160} t={935} w={960} h={55} style={{ background: '#26262e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ ...reg(16, '#bfbfcc'), textAlign: 'center' }}>三选项覆盖所有退出意图——想保存、想放弃、以及误触。默认“保存”确保即使随手点击也不丢数据。</span></A>
        {/* 退出场景全覆盖 */}
        <A l={80} t={1029} w={200} style={bold(18, '#262626')}>退出场景全覆盖</A>
        {[
          { l: 80, h: '正常退出', d1: '点击退出按钮', d2: '弹出三选项确认弹窗', tag: '默认“保存”', tc: '#66bf73' },
          { l: 370, h: '误触返回', d1: '手势返回/物理键', d2: '同样弹出确认弹窗', tag: '拦截意外退出', tc: '#66bf73' },
          { l: 660, h: '断线/切后台', d1: '网络中断/APP切换', d2: '自动保存当前状态', tag: '后台恢复机制', tc: '#66bf73' },
          { l: 950, h: '强制退出', d1: '杀进程/崩溃', d2: '下次登录恢复草稿', tag: '定时自动存档', tc: '#66bf73' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={1060} w={270} h={120} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 8 }} />
            <A l={c.l + 12} t={1070} w={120} style={bold(16, '#d98026')}>{c.h}</A>
            <A l={c.l + 12} t={1100} w={250} style={reg(16, '#808080')}>{c.d1}</A>
            <A l={c.l + 12} t={1120} w={250} style={semi(16, '#404040')}>{c.d2}</A>
            <A l={c.l + 12} t={1154} w={250} style={semi(16, c.tc)}>{c.tag}</A>
          </div>
        ))}
      </section>

      {/* 12 · 总览 */}
      <section className="hp-sec" style={{ height: 883, background: '#f7f2eb' }}>
        <A l={80} t={60} style={{ ...bold(36, '#333340'), whiteSpace: 'nowrap' }}>总览</A>
        <A l={80} t={108} style={{ ...semi(16, '#5b7bf5'), whiteSpace: 'nowrap' }}>OVERVIEW</A>
        <A l={80} t={180} w={800} style={bold(22, '#33334d')}>从发现宠物到完成房屋布置的完整体验链路</A>
        {[
          { l: 70, n: '1', d1: '宠物出没', d2: '广播通知' },
          { l: 240, n: '2', d1: '大世界', d2: '前往抓捕' },
          { l: 410, n: '3', d1: '抓捕判定', d2: '成功/失败' },
          { l: 580, n: '4', d1: '进入房屋', d2: '布置界面' },
          { l: 750, n: '5', d1: '选择物品', d2: '进入摆放' },
          { l: 920, n: '6', d1: '移动/旋转', d2: '确定位置' },
          { l: 1090, n: '7', d1: '确定布置', d2: '保存退出' },
        ].map((s, i) => (
          <div key={s.n}>
            <A l={s.l} t={238} w={110} h={110} style={{ borderRadius: '50%', background: '#5b7bf5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', ...semi(16, '#fff') }}>{s.d1}<br />{s.d2}</A>
            <A l={s.l + 55 - 6} t={358} style={{ ...bold(20, '#9eadcc'), whiteSpace: 'nowrap' }}>{s.n}</A>
            {i < 6 ? <HArrow l={s.l + 110} t={291} w={50} color="#9eadcc" thickness={2} head={8} /> : null}
          </div>
        ))}
        <A l={1257} t={360} w={6} h={6} style={{ borderRadius: '50%', background: '#5b7bf5' }} />
        <A l={80} t={498} w={800} style={bold(20, '#33334d')}>通过房屋家具+宠物搜集系统的交互设计，实现以下价值：</A>
        {[
          { l: 80, ic: '★', h: '玩家体验', d: '丰富房屋系统玩法，宠物搜集+布置装饰双重满足感，提升玩家对游戏世界的沉浸感和对房屋空间的归属感。' },
          { l: 460, ic: '◆', h: '系统拓展', d: '基于现有房屋布置框架扩展，新增宠物Tab与抓捕玩法，为后续更多物品类型预留扩展空间。' },
          { l: 840, ic: '●', h: '开发效率', d: '复用已有布置交互逻辑，关键参数支持后台配置，降低开发与维护成本。' },
        ].map((c) => (
          <div key={c.h}>
            <A l={c.l} t={554} w={360} h={260} style={{ ...card, borderRadius: 16 }} />
            <A l={c.l} t={554} w={360} h={6} style={{ background: '#5b7bf5', borderRadius: '16px 16px 0 0' }} />
            <A l={c.l + 18} t={582} w={43} h={44} style={{ borderRadius: '50%', background: 'rgba(91,123,245,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bold(20, '#5b7bf5') }}>{c.ic}</A>
            <A l={c.l + 73} t={592} style={{ ...bold(20, '#33334d'), whiteSpace: 'nowrap' }}>{c.h}</A>
            <A l={c.l + 24} t={644} w={312} style={{ ...reg(24, '#737380'), lineHeight: '32px' }}>{c.d}</A>
          </div>
        ))}
      </section>

      {/* 13 · 视觉稿展示 */}
      <section className="hp-sec" style={{ height: 1000, background: '#5b7bf5' }}>
        <A l={80} t={70} style={{ ...bold(36, '#fff'), whiteSpace: 'nowrap' }}>视觉稿展示</A>
        <A l={80} t={118} style={{ ...semi(16, '#fff'), whiteSpace: 'nowrap' }}>DESIGN OUTCOME</A>
        {[
          { l: 113, t0: 174, src: houseAssets.out1 },
          { l: 648, t0: 174, src: houseAssets.out2 },
          { l: 113, t0: 430, src: houseAssets.out5 },
          { l: 648, t0: 430, src: houseAssets.out4 },
          { l: 113, t0: 686, src: houseAssets.out3 },
          { l: 648, t0: 686, src: houseAssets.out6 },
        ].map((m) => (
          <A key={`${m.l}-${m.t0}`} l={m.l} t={m.t0} w={519} h={240} style={{ borderRadius: 16, overflow: 'hidden' }}><Img src={m.src} alt="视觉稿" className="hp-cover-img" /></A>
        ))}
      </section>
    </div>
  );
}

function TianmaiCase() {
  const loop = ['入口发现\n大世界入口进入系统', '装备对象\n选择装备与槽位', '晶石背包\n读取可注入材料', '注入替换\n形成可见成长结果', '分解合成\n资源回流与补足', '反馈闭环\n确认与 Toast'];
  const labels = ['层级入口清晰\n一级/三级界面承接常规系统结构。', '材料包独立\n晶石作为可管理材料存在，不和装备信息混杂。', '替换可取消\n通过切换/剥离降低进入替换态后的焦虑。'];
  const callouts = ['渐进披露\n入口只负责进入；具体分解、合成、替换放进对应界面，避免主界面过载。', '心智模型匹配\n装备像目标，晶石像材料，按钮像动作，三者位置关系符合玩家预期。', '反馈可追踪\nToast 与确认弹窗让玩家知道操作是否执行、执行了什么。', '邻近性原则\n选择对象、可用材料和主操作保持空间邻近，玩家能更快建立因果关系。', '可见的系统状态\n选中态、空状态、替换态都被显式呈现，减少“我现在在哪一步”的不确定。', '容错性\n剥离、切换武器、确认弹窗共同构成低风险试错路径。'];
  return (
    <div className="fg-canvas tianmai-canvas" data-node-id="8328:14865">
      <section className="tm-cover">
        <i className="tm-line a" /><i className="tm-line b" /><i className="tm-dot" /><i className="tm-circle" />
        <div className="tm-label">INTERACTION DESIGN</div>
        <h1>天脉系统</h1><b />
        <p>装备成长与材料循环的养成系统</p>
      </section>
      <section className="tm-loop tm-section">
        <SectionTitle no="01" title="玩法闭环：从装备目标到材料回收" desc="把玩家的成长目标、选择对象、消耗材料和结果反馈压缩到一条可理解路径。" dark />
        <div className="tm-loop-grid">{loop.map((it) => {const [a,b]=it.split('\n'); return <article key={a}><i /><h3>{a}</h3><p>{b}</p></article>})}</div>
        <h4>设计思路：不是堆功能，而是把“我想提升哪件装备”与“我手里有什么材料”持续放在同一视线里。</h4>
      </section>
      <section className="tm-interface tm-section">
        <SectionTitle no="02" title="关键界面：目标、背包、操作" desc="展示“对象选择—材料选择—结果反馈”的同步关系。" dark />
        <div className="tm-labels">{labels.map((it) => {const [a,b]=it.split('\n'); return <article key={a}><b>{a}</b><p>{b}</p></article>})}</div>
        <Img src={tianmaiAssets.overview} className="tm-overview-pop" alt="天脉总览弹窗" />
        <Img src={tianmaiAssets.main} className="tm-main-img" alt="天脉界面" />
        <div className="tm-side-note left"><b>天脉总览</b><p>点击会显示如下弹窗</p></div>
        <div className="tm-side-note right r1"><b>天脉晶石背包</b><p>存放天脉晶石的储物袋，会显示天脉名称、品质、数量、图标、适配装备。</p></div>
        <div className="tm-side-note right r2"><b>天脉页签</b><p>切换武器可取消替换态，降低误操作后果。</p></div>
        <div className="tm-side-note right r3"><b>当前角色装备</b><p>角色每个部位的装备，会显示当前装备图标、装备名称、是否已注入晶石。</p></div>
        <div className="tm-callouts">{callouts.map((it, i) => {const [a,b]=it.split('\n'); return <article key={a} className={`c${i}`}><h3>为什么这样设计</h3><b>{a}</b><p>{b}</p></article>})}</div>
      </section>
      <section className="tm-risk tm-section">
        <SectionTitle no="03" title="风险控制：让高成本操作先被看见" desc="分解、合成、替换、剥离都可能影响材料资产，因此需要明确的前置校验。" dark />
        <Img src={tianmaiAssets.dialog} className="tm-risk-img a" alt="二次确认" />
        <Img src={tianmaiAssets.main} className="tm-risk-img b" alt="替换状态" />
        <div className="tm-risk-cards">{['误触成本\n关键操作前确认', '理解成本\n用同品质规则稳定预期', '回退成本\n切换/剥离取消替换态', '等待成本\nToast 快速给出结果'].map((it,i)=>{const [a,b]=it.split('\n');return <article key={a}><em>RISK 0{i+1}</em><h3>{a}</h3><p>{b}</p></article>})}</div>
      </section>
      <section className="tm-resource tm-section">
        <SectionTitle no="04" title="材料循环：晶石与碎片形成回流" desc="源稿中明确出现分解与合成的可配置数量，说明这是服务长期养成的资源闭环。" dark />
        <div className="tm-steps3"><article><b>入口</b><p>只负责触发进入，不提前暴露复杂规则。</p></article><article><b>主界面</b><p>装备目标与晶石背包成为核心工作区。</p></article><article><b>二级操作</b><p>数量、确认、结果反馈进入局部弹窗。</p></article></div>
        <Img src={tianmaiAssets.entry} className="tm-small a" alt="入口" />
        <Img src={tianmaiAssets.toast} className="tm-small b" alt="Toast" />
        <Img src={tianmaiAssets.compose} className="tm-resource-img a" alt="合成天脉晶石" />
        <Img src={tianmaiAssets.split} className="tm-resource-img b" alt="分解天脉晶石" />
        <div className="tm-material-loop"><article><b>晶石碎片</b><p>合成后生成同品质晶石</p></article><span>合成：10 → 1（可配置）<br />分解：1 → 2（可配置）</span><article><b>天脉晶石</b><p>分解后获得同品质碎片</p></article></div>
      </section>
      <section className="tm-final tm-section">
        <SectionTitle no="05" title="设计交付：把成长系统设计成可判断的体验" desc="天脉系统的价值，是让玩家始终知道目标在哪、材料在哪、风险在哪、结果在哪。" dark />
        <div className="tm-delivery">{['系统入口\n大世界进入天脉系统\n可发现性','装备上下文\n左侧选择装备 / 槽位\n识别优于记忆','材料操作\n注入、替换、剥离\n直接操控','资源反馈\n分解、合成、Toast\n闭环反馈'].map((it,i)=>{const [a,b,c]=it.split('\n');return <article key={a}><em>{String(i+1).padStart(2,'0')}</em><h3>{a}</h3><p>{b}</p><span>{c}</span></article>})}</div>
        <div className="tm-three"><article><b>可见</b><p>装备、槽位、背包、选中态同屏建立目标感。</p></article><article><b>可控</b><p>数量、替换、剥离、确认让操作风险被管理。</p></article><article><b>可回收</b><p>晶石与碎片互相转化，支撑长期养成循环。</p></article></div>
        <h3 className="tm-vis-title">视觉稿展示</h3>
        <Img src={tianmaiAssets.final} className="tm-final-img" alt="天脉视觉稿" />
      </section>
    </div>
  );
}


const jinlanAssets = {
  hub: 'https://www.figma.com/api/mcp/asset/1ad07c43-0dc8-47da-928c-d24f42e4a6c2',
  hubBig: 'https://www.figma.com/api/mcp/asset/dc75d068-38e7-4b1c-a0b6-a75ab07274e6',
  main: 'https://www.figma.com/api/mcp/asset/cdd4c6df-d577-4a52-a78d-cf8466f489d4',
  cond: 'https://www.figma.com/api/mcp/asset/847e7d90-6b68-45b1-9e09-8ad12f0e838a',
  fillA: 'https://www.figma.com/api/mcp/asset/6fdf40ba-cc25-4d1e-a24b-30bc994cd0fd',
  fillB: 'https://www.figma.com/api/mcp/asset/d78da8ac-722f-4e10-8a52-6c5bea2965ef',
  fillC: 'https://www.figma.com/api/mcp/asset/a4d371d7-056d-444f-a789-7f81e856a974',
  recruit: 'https://www.figma.com/api/mcp/asset/e3224b20-e6bf-4fec-a5b3-77614c93c6fa',
  panel: 'https://www.figma.com/api/mcp/asset/b8d8c77a-af45-4df7-89d9-3cd8732c33b7',
  list: 'https://www.figma.com/api/mcp/asset/72b19f97-6055-46b5-9e58-7e958c717fa3',
  vote: 'https://www.figma.com/api/mcp/asset/f725f2cd-522b-417f-8712-fb8a8653813c',
  task: 'https://www.figma.com/api/mcp/asset/30827799-be87-4a89-9905-1ac438de205b',
  dungeon: 'https://www.figma.com/api/mcp/asset/6694fd62-3a71-4907-b8aa-dafee0f00097',
  benefit: 'https://www.figma.com/api/mcp/asset/5db93f67-81c6-40a8-b8cc-960726c320f7',
  out1:'https://www.figma.com/api/mcp/asset/fe4b1cab-a2d9-43dd-8417-2284c2a2ffdf',
  out2:'https://www.figma.com/api/mcp/asset/e5a212ff-73cc-4bd9-817b-7d37337b27c6',
  out3:'https://www.figma.com/api/mcp/asset/2b472504-5663-4e75-9dd9-4347d9215320',
  out4:'https://www.figma.com/api/mcp/asset/4c83bf93-08b7-4f1f-8a4b-441aa21d2d0e',
  out5:'https://www.figma.com/api/mcp/asset/de3e2809-4e27-4e2a-bf21-ac6d869467d7',
  out6:'https://www.figma.com/api/mcp/asset/5f758ad4-c54e-4a59-8e86-d5a52b21ad10',
};

const xiushenAssets = {
  tree: 'https://www.figma.com/api/mcp/asset/a139d49c-cc6c-45c4-8d1d-fbfe5145708a',
  equip: 'https://www.figma.com/api/mcp/asset/0191e223-8a88-4703-b744-a0dde39d5b8f',
  up: 'https://www.figma.com/api/mcp/asset/a0f41d96-a539-4198-8f44-c163555b610e',
  ref1: 'https://www.figma.com/api/mcp/asset/a8f8de99-06c4-4ef0-a82f-2eb06419d63b',
  ref2: 'https://www.figma.com/api/mcp/asset/2190b3ab-0506-465a-9f73-1f7380ed10af',
  ref3: 'https://www.figma.com/api/mcp/asset/44423d46-9075-446a-83c6-8ebdf4d80b34',
  out1: 'https://www.figma.com/api/mcp/asset/4b14aa8e-4871-4d46-875b-68b440564a51',
  out2: 'https://www.figma.com/api/mcp/asset/e27c5372-830a-4acf-a1f6-6d8b379fd23c',
  out3: 'https://www.figma.com/api/mcp/asset/2503fb86-ae60-42a7-8003-7052768a8d19',
};

const juexueAssets = {
  loadout: 'https://www.figma.com/api/mcp/asset/9d91c0c1-1619-4855-b147-580c1bb1b06f',
  bag: 'https://www.figma.com/api/mcp/asset/c6bbd2f4-9d08-4197-961c-c402e732d7f3',
  upg: 'https://www.figma.com/api/mcp/asset/f60ba6e3-0469-415a-8682-000cc54ce644',
  ctx: 'https://www.figma.com/api/mcp/asset/07e56bf1-f74e-4ebf-b5c4-36f98be488ed',
  step: 'https://www.figma.com/api/mcp/asset/19223fe8-b281-4ac1-92b0-2980c9bcd296',
  out1: 'https://www.figma.com/api/mcp/asset/39eb2542-23b4-4c05-a034-f4048209c7a5',
  out2: 'https://www.figma.com/api/mcp/asset/a43fb3a6-7ff5-4ad6-9f8d-5d84e9c7de24',
};

const juejingAssets = {
  entry: 'https://www.figma.com/api/mcp/asset/24865515-8518-4055-96b9-b14406493db8',
  locked: 'https://www.figma.com/api/mcp/asset/b1449929-0345-4830-902b-4ced2ec31e01',
  combat: 'https://www.figma.com/api/mcp/asset/1f38e2ed-c1f7-43bf-8adc-68c00f75cd0b',
  defeated: 'https://www.figma.com/api/mcp/asset/d61a1f66-8549-4957-8e00-7853800b4c6c',
  map: 'https://www.figma.com/api/mcp/asset/a3c14aef-cf1d-4921-abf3-b4ef6dcd9bab',
  outcome: 'https://www.figma.com/api/mcp/asset/9991e2cd-651b-464c-9e82-1a215371eb8b',
};

const bianjingAssets = {
  mainHub:'https://www.figma.com/api/mcp/asset/841ef492-88e1-4c3b-93c2-5e44419479d6',
  mainWorld:'https://www.figma.com/api/mcp/asset/7a4619e6-94e8-4db1-9c97-37c349668e3d',
  frame:'https://www.figma.com/api/mcp/asset/9bbff951-3f9b-409b-aa88-38b66106b302',
  step4:'https://www.figma.com/api/mcp/asset/81bb1d9e-2e49-4eed-b1f7-fe9c0b49274b',
  step47:'https://www.figma.com/api/mcp/asset/c6538bf7-2def-4455-aaf0-429adddc24b6',
  step411:'https://www.figma.com/api/mcp/asset/9eadf528-a3f8-448f-9810-4eafde518d40',
  step42:'https://www.figma.com/api/mcp/asset/f59aa862-88e6-44cc-946a-2426c1116f8a',
  step44:'https://www.figma.com/api/mcp/asset/8523ad3a-4dd4-4b52-ab9a-648c4b458500',
  step45:'https://www.figma.com/api/mcp/asset/0e69f478-789b-42db-8f5c-9648c8e55b01',
  step43:'https://www.figma.com/api/mcp/asset/a7af78c6-ff46-480b-a1e6-a056042fe6cc',
  victory:'https://www.figma.com/api/mcp/asset/73aa60a0-cdf6-412c-87b4-1297475dfc08',
  victory2:'https://www.figma.com/api/mcp/asset/98a91765-eae9-413a-92a7-6c744a349540',
  publicStage:'https://www.figma.com/api/mcp/asset/e25d673e-3e33-4ecc-af1a-8d9ae6068e1d',
  boss:'https://www.figma.com/api/mcp/asset/ab883865-c7d4-49d9-bd62-5755cf3ccbfc',
};

const weddingAssets = {
  cover:'https://www.figma.com/api/mcp/asset/bbdd538d-5655-405b-ac0e-8d660c34a3e9',
  schedule:'https://www.figma.com/api/mcp/asset/9dbc8881-97e8-4d43-ad84-8ab3471f4ee4',
  invite:'https://www.figma.com/api/mcp/asset/d57d1a11-9969-4a1d-b0b9-d666cb93dc54',
  scene:'https://www.figma.com/api/mcp/asset/fc488b71-5572-4451-8a46-83af7c6614d9',
  bless:'https://www.figma.com/api/mcp/asset/c0ac64af-fd8d-48e3-aa32-587aa0d74a3f',
  stone:'https://www.figma.com/api/mcp/asset/bb81a438-0c73-41e6-905e-6b6aade289ad',
  ref1:'https://www.figma.com/api/mcp/asset/16305ebc-a21f-4bec-9486-a89a4bdefa1a',
  ref2:'https://www.figma.com/api/mcp/asset/f4186ff7-7dc3-4345-92a7-cb475239e4f5',
  ref3:'https://www.figma.com/api/mcp/asset/b1816d3c-8e5d-49fb-a411-3f04cd35a046',
};

const sancaiAssets = {
  hero:'https://www.figma.com/api/mcp/asset/9e6d01f8-a190-487c-8531-8129cd498d8a',
  main:'https://www.figma.com/api/mcp/asset/461b7e34-4830-4571-8439-7818475e5790',
  decompose:'https://www.figma.com/api/mcp/asset/ba3afa67-cd9b-4a4b-b831-2c59ce22fe36',
  exchange:'https://www.figma.com/api/mcp/asset/63bc84f3-3684-409a-b902-e9b4b0f64646',
  set:'https://www.figma.com/api/mcp/asset/3b14c3f9-4b08-4034-a3fb-303c97aa8a93',
  out1:'https://www.figma.com/api/mcp/asset/084e2812-8a24-4332-8d9b-105c2cf18d79',
  out2:'https://www.figma.com/api/mcp/asset/72b57b27-bbc2-4f8a-9dcc-15bdb511b582',
  out3:'https://www.figma.com/api/mcp/asset/20c8e1dc-bf7c-4c3e-8dc2-685355ecb2d3',
  out4:'https://www.figma.com/api/mcp/asset/5ad09263-475f-4172-8ead-beab929aef4a',
  out5:'https://www.figma.com/api/mcp/asset/5b7c77fd-c034-4835-a87c-8049cb4c7236',
};

function RHeader({ no, eyebrow, title, desc, dark = false }: { no: string; eyebrow: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className={`r-head ${dark ? 'dark' : ''}`}>
      <b>{no}</b>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </div>
  );
}

function RHero({ className, title, kicker, subtitle, desc, tags, glyph }: { className: string; title: string; kicker: string; subtitle: string; desc: string; tags: string[]; glyph?: string }) {
  return (
    <section className={`r-hero ${className}`}>
      <div className="r-hero-orb one" />
      <div className="r-hero-orb two" />
      <div className="r-hero-noise" />
      <div className="r-hero-copy">
        <span className="r-overline">{kicker}</span>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{desc}</p>
        <div className="r-tags">{tags.map((t) => <em key={t}>{t}</em>)}</div>
      </div>
      <div className="r-hero-glyph">{glyph ?? title.slice(0, 1)}</div>
    </section>
  );
}

function RCard({ icon, title, body, tone = '' }: { icon: string; title: string; body: string; tone?: string }) {
  return (
    <article className={`r-card ${tone}`}>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function RFlow({ items, tone = '' }: { items: string[]; tone?: string }) {
  return <div className={`r-flow ${tone}`}>{items.map((it, i) => <div className="r-flow-node" key={it}><b>{i + 1}</b><span>{it}</span></div>)}</div>;
}

function RShot({ src, caption, children }: { src: string; caption: string; children?: ReactNode }) {
  return (
    <div className="r-shot-block">
      <div className="r-shot-frame"><Img src={src} alt={caption} /></div>
      <p>{caption}</p>
      {children}
    </div>
  );
}

function RNote({ x, y, text, align = 'left' }: { x: number; y: number; text: string; align?: 'left' | 'right' }) {
  return (
    <div className={`r-note ${align}`} style={{ left: x, top: y }}>
      <span />
      <p>{text}</p>
    </div>
  );
}

function JinlanCase() {
  return (
    <div className="r-canvas r-gold">
      <RHero className="r-hero-jinlan" title="义结金兰" kicker="SOCIAL SYSTEM DESIGN" subtitle="金兰系统 · 社交关系设计" desc="围绕结义、招募、成员管理、任务、副本与权益，构建一套从陌生人到稳定小团体的长期社交闭环。" tags={['结义创建', '成员管理', '任务副本', '社交留存']} glyph="义" />
      <section className="r-section r-light">
        <RHeader no="01" eyebrow="BACKGROUND" title="为什么要做金兰系统" desc="原有社交关系浅、组织成本高、玩家难以形成稳定小团体，因此需要一条更强的关系绑定链路。" />
        <div className="r-grid3 r-top260">
          <RCard icon="浅" title="社交浅层" body="好友关系缺少共同目标，玩家之间的连接很容易断开。" />
          <RCard icon="留" title="留存乏力" body="单人日常缺少群体约束，回流和持续在线动力不足。" />
          <RCard icon="传" title="自传播弱" body="没有天然的邀请、招募和身份展示场景，难形成扩散。" />
        </div>
        <div className="r-band">设计目标：用“结义身份 + 共同任务 + 成员权益”建立小队归属感。</div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="02" eyebrow="SYSTEM MAP" title="从结义创建到权益成长" desc="金兰不是单一入口，而是一组围绕关系生命周期展开的模块。" dark />
        <div className="r-system-map jinlan-map">
          <div className="r-center"><Img src={jinlanAssets.hub} /><b>金兰</b></div>
          {['结义创建','金兰招募','成员管理','金兰任务','金兰副本','金兰权益'].map((it, i) => <div className={`r-orbit o${i}`} key={it}><span>{it}</span></div>)}
        </div>
        <div className="r-bottom-cards">
          <RCard icon="①" title="情感联结" body="结义仪式与身份称谓，让关系从功能型转为情感型。" />
          <RCard icon="②" title="组织效率" body="招募、审核、管理与投票，降低组队成本。" />
          <RCard icon="③" title="长期目标" body="任务、副本、权益共同驱动持续互动。" />
        </div>
      </section>
      <section className="r-section r-light r-tall">
        <RHeader no="03" eyebrow="CREATE FLOW" title="结义创建：先确认条件，再完成填充" desc="源稿中有主界面、条件、填充、完成三类状态；代码版保留这些状态之间的顺序关系。" />
        <RFlow items={['进入金兰', '确认条件', '填写信息', '邀请成员', '创建成功']} />
        <div className="r-shot-row">
          <RShot src={jinlanAssets.main} caption="金兰主入口" />
          <RShot src={jinlanAssets.cond} caption="结义条件确认" />
          <RShot src={jinlanAssets.fillA} caption="填写结义信息" />
        </div>
        <div className="r-shot-row small">
          <RShot src={jinlanAssets.fillB} caption="成员确认" />
          <RShot src={jinlanAssets.fillC} caption="创建完成" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="04" eyebrow="MEMBER & RECRUIT" title="招募与成员管理" desc="关系系统最容易失控的是成员流动，因此信息发布、申请列表、投票管理需要统一。" dark />
        <div className="r-shot-main">
          <RShot src={jinlanAssets.recruit} caption="金兰招募界面">
            <RNote x={-130} y={100} text="列表筛选" align="right" />
            <RNote x={640} y={146} text="申请入口" />
          </RShot>
          <RShot src={jinlanAssets.panel} caption="金兰面板" />
          <RShot src={jinlanAssets.list} caption="成员列表" />
          <RShot src={jinlanAssets.vote} caption="成员投票" />
        </div>
      </section>
      <section className="r-section r-light">
        <RHeader no="05" eyebrow="TASK · DUNGEON · BENEFIT" title="任务、副本与权益：把关系变成共同目标" />
        <div className="r-shot-row">
          <RShot src={jinlanAssets.task} caption="金兰任务" />
          <RShot src={jinlanAssets.dungeon} caption="金兰副本" />
          <RShot src={jinlanAssets.benefit} caption="金兰权益" />
        </div>
        <div className="r-grid3 r-under">
          <RCard icon="任" title="每日共同任务" body="通过共同贡献维持低门槛互动。" />
          <RCard icon="战" title="多人副本挑战" body="以团队目标提高关系强度。" />
          <RCard icon="益" title="权益成长" body="长期收益把关系沉淀为资产。" />
        </div>
      </section>
      <section className="r-section r-final r-gold-final">
        <RHeader no="06" eyebrow="OUTCOME" title="视觉稿展示" desc="最后保留源稿中的界面结果图，但排版、标题、说明和模块结构均用代码绘制。" dark />
        <div className="r-gallery">
          {[jinlanAssets.out1, jinlanAssets.out2, jinlanAssets.out3, jinlanAssets.out4, jinlanAssets.out5, jinlanAssets.out6].map((src, i) => <Img key={src} src={src} alt={`金兰视觉稿 ${i + 1}`} />)}
        </div>
      </section>
    </div>
  );
}

function XiushenCase() {
  return (
    <div className="r-canvas r-ink">
      <RHero className="r-hero-xiushen" title="绣身" kicker="GROWTH SYSTEM DESIGN" subtitle="绣身系统 · 星图成长线设计" desc="以人纹、地纹、天纹的层级关系构成星图式成长线，让槽位、条件、装备与升级形成清晰的长期追求。" tags={['星图结构', '槽位分层', '背包装配', '升阶反馈']} glyph="纹" />
      <section className="r-section r-light">
        <RHeader no="01" eyebrow="PURPOSE" title="为什么要做绣身系统" />
        <div className="r-grid3 r-top260">
          <RCard icon="浅" title="成长线趋于单一" body="常规养成消耗后，玩家需要更长、更高阶的目标。" />
          <RCard icon="图" title="星图式深度" body="用槽位路径把抽象成长转化为可见节点。" />
          <RCard icon="构" title="自定义构筑" body="不同绣身装配决定属性方向，形成选择空间。" />
        </div>
        <div className="r-star-map">
          {['人纹','地纹','地纹','地纹','天纹'].map((t,i)=><span className={`s${i}`} key={`${t}-${i}`}>{t}</span>)}
          <i className="l1" /><i className="l2" /><i className="l3" /><i className="l4" />
        </div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="02" eyebrow="PLAYER FLOW" title="玩家从入口到升阶的心流路径" dark />
        <RFlow tone="ink" items={['入口触达', '槽位分层', '条件解释', '背包选择', '收益判断', '闭环反馈']} />
        <div className="r-bottom-cards">
          <RCard icon="1" title="先看结构" body="星图让玩家知道自己在哪一层。" />
          <RCard icon="2" title="再看条件" body="未解锁槽位给出明确成长要求。" />
          <RCard icon="3" title="最后行动" body="可装配、可升级、可替换都在当前语境内完成。" />
        </div>
      </section>
      <section className="r-section r-light r-tall">
        <RHeader no="03" eyebrow="INTERFACE" title="绣身主界面：星图、槽位与详情" />
        <div className="r-annotated-shot">
          <RShot src={xiushenAssets.tree} caption="绣身主界面" />
          <RNote x={120} y={240} text="星图层级：人纹 → 地纹 → 天纹" align="right" />
          <RNote x={940} y={280} text="槽位详情与解锁条件" />
          <RNote x={942} y={450} text="按钮随状态切换" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="04" eyebrow="EQUIP & UPGRADE" title="装配与升级：把节点变成可操作目标" dark />
        <div className="r-shot-row">
          <RShot src={xiushenAssets.equip} caption="绣身背包装配" />
          <RShot src={xiushenAssets.up} caption="绣身升阶界面" />
        </div>
        <div className="r-grid3 r-under">
          <RCard icon="显" title="识别优于记忆" body="背包只展示可装配内容，减少规则记忆。" />
          <RCard icon="阶" title="目标梯度" body="下一阶材料与收益同屏展示。" />
          <RCard icon="防" title="防错原则" body="条件不足时按钮置灰并解释原因。" />
        </div>
      </section>
      <section className="r-section r-light">
        <RHeader no="05" eyebrow="ART DIRECTION" title="视觉语言：把纹样做成成长星图" />
        <div className="r-shot-row">
          <RShot src={xiushenAssets.ref1} caption="纹样参考" />
          <RShot src={xiushenAssets.ref2} caption="图案分层" />
          <RShot src={xiushenAssets.ref3} caption="界面气质" />
        </div>
      </section>
      <section className="r-section r-final r-ink-final">
        <RHeader no="06" eyebrow="OUTCOME" title="视觉稿展示" dark />
        <div className="r-gallery three">
          {[xiushenAssets.out1, xiushenAssets.out2, xiushenAssets.out3].map((src, i) => <Img key={src} src={src} alt={`绣身视觉稿 ${i + 1}`} />)}
        </div>
      </section>
    </div>
  );
}

function JuexueCase() {
  return (
    <div className="r-canvas r-martial">
      <RHero className="r-hero-juexue" title="绝学" kicker="ULTIMATE GROWTH SYSTEM" subtitle="绝学系统 · 成长线设计" desc="大无相主、小无相辅，一套绝学装配依靠重数层层突破，给高玩一条越练越强的终极养成线。" tags={['五相装配', '领悟', '升重', '满重']} glyph="绝" />
      <section className="r-section r-light">
        <RHeader no="01" eyebrow="BACKGROUND" title="为什么要做绝学系统" />
        <div className="r-grid3 r-top260">
          <RCard icon="后" title="后期养成趋于平淡" body="高玩练满常规系统后缺少更高追求。" />
          <RCard icon="重" title="重数阶梯式突破" body="三、五、七、九、十重形成看得见的里程碑。" />
          <RCard icon="派" title="流派化构筑" body="五相自由搭配，打造自己的终极流派。" />
        </div>
        <div className="r-band dark">设计目标：装配 + 领悟 + 升重，形成深度、收集、自我表达兼具的长线追求。</div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="02" eyebrow="SYSTEM MAP" title="两条深度线，叠出一套绝学" dark />
        <div className="r-dual-map">
          <div className="r-pentagon"><b>主</b>{['辅','辅','辅','辅'].map((t,i)=><span key={i} className={`p${i}`}>{t}</span>)}</div>
          <div className="r-layer-bars">{['三重','五重','七重','九重','十重'].map((t,i)=><span key={t} style={{height: 60+i*28}}>{t}</span>)}</div>
        </div>
      </section>
      <section className="r-section r-light r-tall">
        <RHeader no="03" eyebrow="INTERFACE" title="绝学界面：五相一体，一套装配" />
        <div className="r-annotated-shot">
          <RShot src={juexueAssets.loadout} caption="五相装配界面" />
          <RNote x={95} y={330} text="中心大无相主槽" align="right" />
          <RNote x={945} y={300} text="四向小无相辅槽" />
          <RNote x={945} y={430} text="解锁条件与消耗透明" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="04" eyebrow="BAG & LAYER" title="背包与升重：从碎片到满重" dark />
        <div className="r-shot-row">
          <RShot src={juexueAssets.bag} caption="绝学背包" />
          <RShot src={juexueAssets.upg} caption="升重界面" />
        </div>
        <div className="r-ladder">{['三重','五重','七重','九重','十重'].map((t,i)=><article key={t}><b>{t}</b><span>效果解锁</span><i style={{height: 36+i*22}} /></article>)}</div>
      </section>
      <section className="r-section r-light">
        <RHeader no="05" eyebrow="CONTEXT" title="绝学长在招式体系的最顶层" />
        <div className="r-shot-row">
          <RShot src={juexueAssets.ctx} caption="招式体系中的绝学入口" />
          <RShot src={juexueAssets.step} caption="技能详情展示" />
        </div>
      </section>
      <section className="r-section r-final r-martial-final">
        <RHeader no="06" eyebrow="EPILOGUE" title="把养成，做成一道道重数关卡" dark />
        <div className="r-gallery two">{[juexueAssets.out1, juexueAssets.out2].map((src)=> <Img key={src} src={src} />)}</div>
      </section>
    </div>
  );
}

function JuejingCase() {
  return (
    <div className="r-canvas r-blue-dark">
      <RHero className="r-hero-juejing" title="绝境试炼" kicker="PVE INSTANCE DESIGN" subtitle="日常活跃驱动的副本交互设计" desc="通过九个渐进关卡、自动战斗、自动寻路和条件门控，打造低操作成本、高状态反馈的日常 PVE 副本。" tags={['PVE副本', '渐进关卡', '自动战斗', '条件门控']} glyph="境" />
      <section className="r-section r-dark">
        <RHeader no="01" eyebrow="OVERVIEW" title="项目概述：入口、关卡与条件展示" desc="关卡选择与进入条件同屏，减少玩家在规则和入口之间的来回确认。" dark />
        <div className="r-shot-row">
          <RShot src={juejingAssets.entry} caption="绝境试炼入口" />
          <RShot src={juejingAssets.locked} caption="条件不满足状态" />
        </div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="02" eyebrow="CORE FLOW" title="核心交互流程" dark />
        <RFlow items={['大世界入口', '关卡选择', '条件判断', '进入副本', '自动战斗', '地图查看', '退出副本', '返回大世界']} tone="blue" />
        <div className="r-band">满足条件 → 高亮进入；不满足条件 → 按钮置灰 + Toast 提示差距。</div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="03" eyebrow="COMBAT" title="副本战斗：自动战斗与自动寻路" dark />
        <div className="r-shot-row">
          <RShot src={juejingAssets.combat} caption="进入副本，自动战斗" />
          <RShot src={juejingAssets.defeated} caption="怪物被击败，自动寻路" />
        </div>
        <div className="r-grid3 r-under">
          <RCard icon="自" title="自动战斗" body="进入后自动寻找最近怪物并发起战斗。" />
          <RCard icon="路" title="自动寻路" body="击败后自动前往下一目标。" />
          <RCard icon="态" title="状态反馈" body="存活、击败、复活倒计时实时可见。" />
        </div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="04" eyebrow="MAP" title="地图与怪物三态" dark />
        <div className="r-shot-row">
          <RShot src={juejingAssets.map} caption="地图界面展示怪物分布" />
          <div className="r-state-list">
            {['存活：自动战斗目标','被击败：显示状态标签','复活倒计时：提供预测信息'].map((t)=> <article key={t}>{t}</article>)}
          </div>
        </div>
      </section>
      <section className="r-section r-final r-blue-final">
        <RHeader no="05" eyebrow="OUTCOME" title="视觉稿展示" dark />
        <div className="r-single-outcome"><Img src={juejingAssets.outcome} /></div>
      </section>
    </div>
  );
}

function BianjingCase() {
  return (
    <div className="r-canvas r-war">
      <RHero className="r-hero-bianjing" title="边境战场" kicker="BATTLEFIELD SYSTEM DESIGN" subtitle="跨服战场 · 阶段推进玩法" desc="从战场入口、个人关卡、公共阶段到限时 Boss，用层层推进的目标结构承载多人战场的节奏控制。" tags={['战场入口', '个人阶段', '公共阶段', '限时BOSS']} glyph="战" />
      <section className="r-section r-dark">
        <RHeader no="01" eyebrow="SYSTEM ARCHITECTURE" title="战场玩法全景" dark />
        <div className="r-shot-row">
          <RShot src={bianjingAssets.mainHub} caption="边境战场入口" />
          <RShot src={bianjingAssets.mainWorld} caption="战场世界界面" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="02" eyebrow="STAGE FLOW" title="个人阶段：由任务推进到奖励结算" dark />
        <RFlow tone="war" items={['进入战场','阶段目标','怪物挑战','积分推进','胜利结算','奖励反馈']} />
        <div className="r-shot-row small">
          {[bianjingAssets.step4, bianjingAssets.step47, bianjingAssets.step411, bianjingAssets.step42].map((src,i)=><RShot key={src} src={src} caption={`阶段界面 ${i+1}`} />)}
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="03" eyebrow="COMBAT & VICTORY" title="战斗反馈与胜利结算" dark />
        <div className="r-shot-row">
          <RShot src={bianjingAssets.step44} caption="战斗过程" />
          <RShot src={bianjingAssets.victory} caption="胜利结算" />
          <RShot src={bianjingAssets.victory2} caption="奖励结果" />
        </div>
        <div className="r-grid3 r-under">
          <RCard icon="目" title="目标清晰" body="当前阶段与下一目标保持常驻可见。" />
          <RCard icon="奖" title="奖励明确" body="积分、掉落、排行形成即时反馈。" />
          <RCard icon="势" title="战局感" body="以地图与阶段变化营造大规模战场推进感。" />
        </div>
      </section>
      <section className="r-section r-dark">
        <RHeader no="04" eyebrow="PUBLIC STAGE" title="公共阶段与限时 Boss" dark />
        <div className="r-shot-row">
          <RShot src={bianjingAssets.publicStage} caption="公共阶段" />
          <RShot src={bianjingAssets.boss} caption="限时 Boss" />
        </div>
      </section>
      <section className="r-section r-final r-war-final">
        <RHeader no="05" eyebrow="SUMMARY" title="边境战场把多人目标拆成可跟随的阶段" dark />
        <div className="r-grid4">
          {['阶段推进','积分反馈','公共目标','限时爆点'].map((t,i)=><RCard key={t} icon={String(i+1)} title={t} body="保持战场节奏可理解、可追踪、可参与。" />)}
        </div>
      </section>
    </div>
  );
}

function WeddingCase() {
  return (
    <div className="r-canvas r-wedding">
      <RHero className="r-hero-wedding" title="婚礼结缘" kicker="WEDDING SOCIAL DESIGN" subtitle="结缘·吉宴 · 婚礼玩法设计" desc="从三生石入口、吉宴平台、邀请关系到婚礼现场，把仪式感、参与感和分享传播串成完整社交链路。" tags={['三生石', '吉宴平台', '婚礼现场', '祝福分享']} glyph="囍" />
      <section className="r-section r-light">
        <RHeader no="01" eyebrow="BACKGROUND" title="为什么要做婚礼结缘" />
        <div className="r-grid3 r-top260">
          <RCard icon="仪" title="关系需要仪式" body="结缘关系需要一个高情绪峰值的公共节点。" />
          <RCard icon="邀" title="朋友需要参与" body="邀请、到场、祝福让关系从双人扩散到社交圈。" />
          <RCard icon="传" title="结果需要传播" body="婚礼现场天然适合截图、分享和社交展示。" />
        </div>
      </section>
      <section className="r-section r-light r-tall">
        <RHeader no="02" eyebrow="SYSTEM MAP" title="从预约吉宴到现场祝福" />
        <RFlow tone="pink" items={['三生石入口','吉宴平台','发出邀请','婚礼现场','祝福互动','分享传播']} />
        <div className="r-shot-row">
          <RShot src={weddingAssets.schedule} caption="吉宴预约 / 排期" />
          <RShot src={weddingAssets.invite} caption="邀请界面" />
        </div>
      </section>
      <section className="r-section r-light r-tall">
        <RHeader no="03" eyebrow="SCENE" title="婚礼现场：仪式感与参与感" />
        <div className="r-annotated-shot">
          <RShot src={weddingAssets.scene} caption="婚礼现场" />
          <RNote x={120} y={320} text="主舞台聚焦新人" align="right" />
          <RNote x={930} y={330} text="宾客聚集与互动" />
          <RNote x={930} y={465} text="场景氛围强化仪式感" />
        </div>
      </section>
      <section className="r-section r-light">
        <RHeader no="04" eyebrow="BLESS & SHARE" title="祝福、三生石与分享传播" />
        <div className="r-shot-row">
          <RShot src={weddingAssets.bless} caption="祝福互动" />
          <RShot src={weddingAssets.stone} caption="三生石入口" />
        </div>
      </section>
      <section className="r-section r-final r-wedding-final">
        <RHeader no="05" eyebrow="REFERENCE" title="视觉稿与气质参考" dark />
        <div className="r-gallery three">
          {[weddingAssets.ref1, weddingAssets.ref2, weddingAssets.ref3].map((src)=> <Img key={src} src={src} />)}
        </div>
      </section>
    </div>
  );
}

function SancaiCase() {
  return (
    <div className="r-canvas r-sancai">
      <RHero className="r-hero-sancai" title="三才系统" kicker="CELESTIAL GEAR SYSTEM" subtitle="天 · 地 · 人 × 日 · 月 · 星 · 辰" desc="以三才宇宙观为内核，将天地人三象与日月星辰四曜融入装配、兑换、分解的资源闭环。" tags={['天地人三象','品阶系统','资源闭环','套装养成']} glyph="三" />
      <section className="r-section r-dark">
        <RHeader no="01" eyebrow="SYSTEM OVERVIEW" title="系统概述" desc="三才系统把文化符号转化为玩家一眼能理解的装配结构。" dark />
        <div className="r-grid3 r-top260">
          <RCard icon="三" title="文化内核" body="天地人三才与日月星辰形成系统记忆点。" />
          <RCard icon="环" title="资源闭环" body="分解产出碎片，碎片兑换道具，道具装配上身。" />
          <RCard icon="阶" title="养成深度" body="五品阶、多凹槽、套装激活构成长线目标。" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="02" eyebrow="DESIGN THEME" title="设计主题：天地人与日月星辰" dark />
        <div className="r-sancai-orbit">
          <b>三才</b>
          {['日','月','星','辰'].map((t,i)=><span className={`q${i}`} key={t}>{t}</span>)}
        </div>
        <div className="r-annotated-shot">
          <RShot src={sancaiAssets.main} caption="三才主界面" />
          <RNote x={105} y={350} text="三才页签：天 / 地 / 人" align="right" />
          <RNote x={940} y={310} text="日月星辰四个凹槽" />
          <RNote x={940} y={450} text="智能背包只显示可装道具" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="03" eyebrow="QUALITY TIERS" title="品阶系统：五色识阶" dark />
        <div className="r-tier-bars">
          {['良品','精品','优品','圣品','神品'].map((t,i)=><article key={t} className={`c${i}`}><i /><b>{t}</b><span>{['COMMON','FINE','SUPERIOR','EPIC','LEGENDARY'][i]}</span></article>)}
        </div>
        <div className="r-single-shot">
          <RShot src={sancaiAssets.set} caption="套装属性总览界面" />
        </div>
      </section>
      <section className="r-section r-dark r-tall">
        <RHeader no="04" eyebrow="CORE LOOP" title="核心闭环：装配、兑换、分解" dark />
        <div className="r-loop-tri">
          {['装配','分解','兑换'].map((t,i)=><article className={`n${i}`} key={t}><b>{t}</b><span>{['强化角色属性','回收为碎片','换取目标道具'][i]}</span></article>)}
        </div>
        <div className="r-shot-row">
          <RShot src={sancaiAssets.decompose} caption="分解界面" />
          <RShot src={sancaiAssets.exchange} caption="兑换界面" />
        </div>
      </section>
      <section className="r-section r-final r-sancai-final">
        <RHeader no="05" eyebrow="OUTCOME" title="视觉稿展示" dark />
        <div className="r-gallery three">
          {[sancaiAssets.out1, sancaiAssets.out2, sancaiAssets.out3, sancaiAssets.out4, sancaiAssets.out5].map((src)=> <Img key={src} src={src} />)}
        </div>
      </section>
    </div>
  );
}

function QingyuFigmaCaseBody({ caseKey }: { caseKey: QingyuCaseKey }) {
  switch (caseKey) {
    case '2':
      return <HousePetCase />;
    case '3':
      return <TianmaiCase />;
    case '4':
      return <JinlanExactCase />;
    case '5':
      return <XiushenExactCase />;
    case '6':
      return <JuexueExactCase />;
    case '7':
      return <JuejingExactCase />;
    case '8':
      return <BianjingExactCase />;
    case '9':
      return <WeddingExactCase />;
    case '10':
      return <SancaiExactCase />;
    case '11':
      return <QingquanBathExactCase />;
    case '12':
      return <RecallExactCase />;
    case '13':
      return <TempleExactCase />;
    case '14':
      return <GemSocketExactCase />;
    case '15':
      return <GloryExactCase />;
    case '16':
      return <IntelExactCase />;
    case '17':
      return <AtlasExactCase />;
    case '18':
      return <PunishExactCase />;
    case '19':
      return <GuildSystemExactCase />;
    default:
      return <HousePetCase />;
  }
}

export function QingyuFigmaCase({ caseKey }: { caseKey: QingyuCaseKey }) {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = shellRef.current;
    if (!root) return undefined;

    root.querySelectorAll<HTMLElement>('.qy-reveal-section, .qy-reveal-item').forEach((el) => {
      el.classList.remove('qy-reveal-section', 'qy-reveal-item', 'qy-reveal-media', 'qy-reveal-text', 'qy-reveal-line', 'is-visible');
      el.style.removeProperty('--qy-delay');
    });

    const sections = Array.from(root.querySelectorAll<HTMLElement>('section'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.classList.remove('is-stage-ready');
    const stageFrame = requestAnimationFrame(() => root.classList.add('is-stage-ready'));

    sections.forEach((section, sectionIndex) => {
      section.classList.add('qy-reveal-section');
      Array.from(section.children).forEach((child, childIndex) => {
        const el = child as HTMLElement;
        const hasMedia = Boolean(el.querySelector('img, video, svg'));
        const hasText = Boolean(el.textContent?.trim());
        const cappedIndex = Math.min(childIndex, 18);
        const baseDelay = sectionIndex === 0 ? 80 : 0;
        const delay = baseDelay + cappedIndex * 42 + (hasMedia ? 90 : hasText ? 0 : 190);

        el.classList.add('qy-reveal-item');
        el.classList.toggle('qy-reveal-media', hasMedia);
        el.classList.toggle('qy-reveal-text', hasText && !hasMedia);
        el.classList.toggle('qy-reveal-line', !hasText && !hasMedia);
        el.style.setProperty('--qy-delay', `${delay}ms`);
      });
    });

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return () => {
        cancelAnimationFrame(stageFrame);
        root.classList.remove('is-stage-ready');
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -12% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      cancelAnimationFrame(stageFrame);
      observer.disconnect();
      root.classList.remove('is-stage-ready');
    };
  }, [caseKey]);

  return (
    <div ref={shellRef} className={`qingyu-figma-case-shell${caseKey === '19' ? ' guild-case-shell' : ''}`}>
      <ResponsiveScaleFrame minDesignWidth={caseKey === '19' ? 1440 : 1280} maxScale={1}>
        <QingyuFigmaCaseBody caseKey={caseKey} />
      </ResponsiveScaleFrame>
    </div>
  );
}
