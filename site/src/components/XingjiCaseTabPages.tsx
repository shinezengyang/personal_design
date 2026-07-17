import { publicUrl } from '../lib/publicUrl';
import { HudRedesignTailContent } from './CaseDetailContent';
import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';
import './XingjiCaseTabPages.css';

import { renderStarFigmaCase } from './StarFigmaCases';

const resolveAsset = (src: string) => (src.startsWith('http') ? src : publicUrl(src));

const caseOneAssets = {
  backgroundBefore: [
    'pencil/xingji-aodaisai/panel-2.webp',
    'pencil/xingji-aodaisai/panel.webp',
    'pencil/xingji-aodaisai/panel-1.webp',
  ],
  cpaLastwarTop: 'images/xingji/hud/assets/cpa-lastwar.webp',
  cpaLastwarBottom: 'images/xingji/hud/assets/cpa-lastwar.webp',
  cpaWinter: [
    'images/xingji/hud/assets/cpa-winter.webp',
    'images/xingji/hud/assets/cpa-winter.webp',
  ],
  cpaAfk: [
    'images/xingji/hud/assets/cpa-afk.webp',
    'images/xingji/hud/assets/cpa-afk.webp',
    'images/xingji/hud/assets/cpa-afk.webp',
    'images/xingji/hud/assets/cpa-afk.webp',
  ],
  cpaBrave: [
    'images/xingji/hud/assets/cpa-brave.webp',
    'images/xingji/hud/assets/cpa-brave.webp',
  ],
  cpaHeroes: [
    'images/xingji/hud/assets/cpa-heroes.webp',
    'images/xingji/hud/assets/cpa-heroes.webp',
    'images/xingji/hud/assets/cpa-heroes.webp',
    'images/xingji/hud/assets/cpa-heroes.webp',
  ],
  cpaDao: 'images/xingji/hud/assets/cpa-dao.webp',
  cpaCapy: [
    'images/xingji/hud/assets/cpa-capy.webp',
    'images/xingji/hud/assets/cpa-capy.webp',
    'images/xingji/hud/assets/cpa-capy.webp',
    'images/xingji/hud/assets/cpa-capy.webp',
    'images/xingji/hud/assets/cpa-capy.webp',
    'images/xingji/hud/assets/cpa-capy.webp',
  ],
  definitionOneBefore: 'pencil/xingji-aodaisai/figma-usability-old-hud.webp',
  definitionOneAfter: 'pencil/xingji-aodaisai/figma-usability-new-hud.webp',
  definitionFive: [
    'pencil/xingji-aodaisai/panel-2.webp',
    'pencil/xingji-aodaisai/panel.webp',
    'pencil/xingji-aodaisai/panel-1.webp',
  ],
  blockGoals: 'pencil/xingji-aodaisai/figma-block-goals.webp',
  blockCompetitor: 'pencil/xingji-aodaisai/figma-block-competitor.webp',
  blockProblem1: 'pencil/xingji-aodaisai/figma-block-problem-1.webp',
  blockProblem2: 'pencil/xingji-aodaisai/figma-block-problem-2.webp',
} as const;


const crossServerAssets = {
  fullPage: 'images/xingji/cross-server/figma-7181-7484-full.webp',
  fieldEntryA: 'https://www.figma.com/api/mcp/asset/a17b577c-7af7-40df-82b1-7d9b89969a09',
  fieldEntryB: 'https://www.figma.com/api/mcp/asset/4ce70988-cee5-4ca8-a14c-76c14641becc',
  loadingScreen: 'https://www.figma.com/api/mcp/asset/1d67c231-6afc-4aa1-a998-2cd51b4cbf93',
  moveClickSea: 'https://www.figma.com/api/mcp/asset/6eab3182-7e38-43b7-b958-9d8bb96a4371',
  moveMask: 'https://www.figma.com/api/mcp/asset/6270b469-3a78-43c1-b7ca-2865c4b27685',
  moveConfirm: 'https://www.figma.com/api/mcp/asset/44956ba7-e517-41d1-a6a4-bbbd91761c3f',
  moveComplete: 'https://www.figma.com/api/mcp/asset/bc214c1c-a4c1-42db-9b0d-e943c9f87819',
  confirmPopup: 'https://www.figma.com/api/mcp/asset/fc82110b-2a8e-43b7-ba18-3da4840e63ef',
  popupInfo: 'https://www.figma.com/api/mcp/asset/74e55cbf-5781-4567-b522-ad5d73af6005',
  popupReward: 'https://www.figma.com/api/mcp/asset/c8a1917e-f214-4d74-951c-849b78d098ba',
  chatSystem: 'https://www.figma.com/api/mcp/asset/95701011-5545-4f75-88f9-2b46a7f17384',
} as const;

const caseEightAssets = {
  fieldEntry: publicUrl('images/xingji/wish-tree/field-entry.webp'),
  mainPanel: publicUrl('images/xingji/wish-tree/main-panel.webp'),
  countOne: publicUrl('images/xingji/wish-tree/main-panel.webp'),
  countZero: publicUrl('images/xingji/wish-tree/count-zero.webp'),
  rewardPreview: publicUrl('images/xingji/wish-tree/reward-preview.webp'),
  resultFeedback: publicUrl('images/xingji/wish-tree/result-feedback.webp'),
  coreLoopHome: publicUrl('images/xingji/wish-tree/main-panel.webp'),
  coreLoopPreview: publicUrl('images/xingji/wish-tree/reward-preview.webp'),
  coreLoopResult: publicUrl('images/xingji/wish-tree/core-result.webp'),
  finalGallery: publicUrl('images/xingji/wish-tree/final-gallery.webp'),
} as const;

const caseNineAssets = {
  heroBg: 'images/xingji/embermine/figma-7645-7491-full.webp',
  entryIdle: 'images/xingji/embermine/entry-idle-corrected.webp',
  mainPanel: 'pencil/xingji-aodaisai/panel5.webp',
  timeSelectA: 'images/xingji/embermine/time-select-a-corrected.webp',
  timeSelectB: 'pencil/xingji-aodaisai/modal-screen.webp',
  trialPanel: 'pencil/xingji-aodaisai/panel-1.webp',
  preBattleReminder: 'pencil/xingji-aodaisai/panel.webp',
  preBattleCountdown: 'pencil/xingji-aodaisai/panel-2.webp',
  battleHudA: 'pencil/xingji-aodaisai/panel-2.webp',
  battleHudB: 'pencil/xingji-aodaisai/panel.webp',
  battleHudC: 'pencil/xingji-aodaisai/panel-1.webp',
  mapSystemDetail: 'pencil/xingji-aodaisai/figma-area-cabin-map.webp',
  mapSystemField: 'pencil/xingji-aodaisai/figma-area-field-map.webp',
  mapInteractMoveTown: 'pencil/xingji-aodaisai/panel0.webp',
  mapInteractMarch: 'pencil/xingji-aodaisai/panel.webp',
  mapInteractBuilding: 'pencil/xingji-aodaisai/panel-1.webp',
  mapInteractTeleport: 'pencil/xingji-aodaisai/panel-2.webp',
  skillTreeOverview: 'pencil/xingji-aodaisai/panel.webp',
  skillTreeAdvanced: 'pencil/xingji-aodaisai/panel-1.webp',
  miningHudA: 'pencil/xingji-aodaisai/panel-2.webp',
  miningHudB: 'pencil/xingji-aodaisai/panel.webp',
  smeltingPanel: 'pencil/xingji-aodaisai/panel-1.webp',
  rankingLode: 'pencil/xingji-aodaisai/panel.webp',
  rankingStay: 'pencil/xingji-aodaisai/panel-1.webp',
  rankingReward: 'pencil/xingji-aodaisai/panel5.webp',
  settlementRewardA: 'pencil/xingji-aodaisai/panel5.webp',
  settlementRankA: 'images/xingji/embermine/settlement-rank-a-corrected.webp',
  settlementCollectA: 'images/xingji/embermine/settlement-collect-a-corrected.webp',
  settlementRewardB: 'pencil/xingji-aodaisai/modal-screen.webp',
  settlementRankB: 'pencil/xingji-aodaisai/half-screen.webp',
  settlementCollectB: 'pencil/xingji-aodaisai/panel-2.webp',
} as const;

const navalTrialAsset = (name: string) => publicUrl(`images/xingji/naval-trial/${name}`);

const caseFiveAssets = {
  allianceNo: navalTrialAsset('alliance-no.webp'),
  allianceYes: navalTrialAsset('alliance-yes.webp'),
  confirmBig: navalTrialAsset('confirm-big.webp'),
  difficultyCardCheck: navalTrialAsset('difficulty-card-check.svg'),
  difficultyCardImage: navalTrialAsset('difficulty-card-image.webp'),
  difficultyCardLocked: navalTrialAsset('difficulty-card-locked.svg'),
  difficultyCardStar: navalTrialAsset('difficulty-card-star.svg'),
  difficultyCardTop: navalTrialAsset('difficulty-card-top.svg'),
  difficultyPre: navalTrialAsset('difficulty-pre.webp'),
  difficultySelected: navalTrialAsset('difficulty-selected.webp'),
  iconBattle: navalTrialAsset('icon-battle.svg'),
  iconButtons: navalTrialAsset('icon-buttons.svg'),
  iconEntry: navalTrialAsset('icon-entry.svg'),
  iconHistory: navalTrialAsset('icon-history.svg'),
  iconInfo: navalTrialAsset('icon-info.svg'),
  iconMedal: navalTrialAsset('icon-medal.svg'),
  iconMonster: navalTrialAsset('icon-monster.svg'),
  iconProgress: navalTrialAsset('icon-progress.svg'),
  iconRank: navalTrialAsset('icon-rank.svg'),
  iconRoute: navalTrialAsset('icon-route.svg'),
  iconWarning: navalTrialAsset('icon-warning.svg'),
  instructorPanel: navalTrialAsset('instructor-panel.webp'),
  mapPanel: navalTrialAsset('map-panel.webp'),
  monsterInfo: navalTrialAsset('monster-info.webp'),
  monsterPlace: navalTrialAsset('monster-place.webp'),
  outcomeAlliance: navalTrialAsset('outcome-alliance.webp'),
  outcomeDetail: navalTrialAsset('outcome-detail.webp'),
  outcomePersonal: navalTrialAsset('outcome-personal.webp'),
  personalConfirm: navalTrialAsset('personal-confirm.webp'),
  personalSelect: navalTrialAsset('personal-select.webp'),
  quickAccess: navalTrialAsset('quick-access.webp'),
  recordEmpty: navalTrialAsset('record-empty.webp'),
  recordList: navalTrialAsset('record-list.webp'),
  rewardClaimed: navalTrialAsset('reward-claimed.webp'),
  rewardFlow: navalTrialAsset('reward-flow.webp'),
  rewardPreview: navalTrialAsset('reward-preview.webp'),
} as const;

function LongPageSection({
  children,
  height,
  bg,
}: {
  children: React.ReactNode;
  height: number;
  bg: string;
}) {
  return (
    <div className="xingji-motion-section overflow-hidden rounded-2xl bg-transparent">
      <ResponsiveScaleFrame minDesignWidth={1280} maxScale={1}>
        <section className="relative w-[1280px] overflow-hidden" style={{ height, background: bg }}>
          {children}
        </section>
      </ResponsiveScaleFrame>
    </div>
  );
}

function LightSectionHeader({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) {
  return (
    <>
      <p className="absolute left-[72px] top-[52px] text-[32px] font-bold leading-none text-[#262633]">{title}</p>
      <p className="absolute left-[72px] top-[94px] font-['Inter',sans-serif] text-[13px] tracking-[0.42em] text-[#80808c]">
        {eyebrow}
      </p>
      <div className="absolute left-[72px] top-[125px] h-[3px] w-[60px] rounded-[2px] bg-[#6180fa]" />
    </>
  );
}

function DarkSectionHeader({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) {
  return (
    <>
      <p className="absolute left-[80px] top-[60px] text-[32px] font-bold leading-none text-white">{title}</p>
      <p className="absolute left-[80px] top-[102px] font-['Inter',sans-serif] text-[13px] tracking-[0.3em] text-[#b2bfe5]">
        {eyebrow}
      </p>
      <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-white/90" />
    </>
  );
}

function CaseFiveSectionHeader({
  title,
  eyebrow,
  theme = 'light',
  accent = '#617dfa',
  variant = 'standard',
}: {
  title: string;
  eyebrow: string;
  theme?: 'light' | 'dark';
  accent?: string;
  variant?: 'standard' | 'overview' | 'outcome';
}) {
  const isDark = theme === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-[#212126]';
  const eyebrowColor = isDark ? 'text-white/40' : 'text-[#808080]';
  const titleSize = variant === 'outcome' ? 'text-[40px]' : 'text-[32px]';
  const accentTop = variant === 'overview' ? 80 : variant === 'outcome' ? 64 : 60;
  const titleTop = variant === 'overview' ? 96 : variant === 'outcome' ? 84 : 76;
  const eyebrowTop = variant === 'overview' ? 140 : variant === 'outcome' ? 139 : 120;
  const eyebrowTracking = variant === 'outcome' ? 'tracking-[4px]' : 'tracking-[3px]';

  return (
    <>
      <div className="absolute left-[120px] h-[3px] w-[60px]" style={{ top: accentTop, backgroundColor: accent }} />
      <p className={`absolute left-[120px] font-bold leading-none ${titleSize} ${titleColor}`} style={{ top: titleTop }}>
        {title}
      </p>
      <p className={`absolute left-[120px] font-['Inter',sans-serif] text-[13px] ${eyebrowTracking} ${eyebrowColor}`} style={{ top: eyebrowTop }}>
        {eyebrow}
      </p>
    </>
  );
}

function PhoneFrame({
  left,
  top,
  width,
  height,
  src,
  alt = '',
  imageClassName,
  rounded = '',
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  src: string;
  alt?: string;
  imageClassName: string;
  rounded?: string;
}) {
  return (
    <div
      className={`absolute overflow-hidden ${rounded}`}
      style={{ left, top, width, height }}
    >
      <img
        src={resolveAsset(src)}
        alt={alt}
        className={`absolute max-w-none ${imageClassName}`}
      />
    </div>
  );
}

function TitleHero({
  title,
  copy,
  ellipse,
  useCssEllipse = false,
}: {
  title: string;
  copy: string[];
  ellipse: string;
  useCssEllipse?: boolean;
}) {
  return (
    <LongPageSection height={900} bg="linear-gradient(180deg, #3847A6 0%, #262E73 100%)">
      {useCssEllipse ? (
        <div className="absolute left-[165px] top-[300px] h-[240px] w-[240px] bg-[radial-gradient(circle_at_58%_54%,rgba(255,239,195,0.72),rgba(255,231,176,0.38)_18%,rgba(255,221,154,0.16)_34%,rgba(255,210,134,0.06)_50%,rgba(255,255,255,0)_74%)] blur-[2px]" />
      ) : ellipse ? (
        <img
          src={publicUrl(ellipse)}
          alt=""
          className="absolute left-[180px] top-[320px] h-[200px] w-[200px]"
        />
      ) : null}
      <p className="absolute left-[380px] top-[320px] text-[72px] font-black leading-none text-white">{title}</p>
      <div className="absolute left-[380px] top-[420px] text-[24px] leading-[40px] text-white/80">
        {copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </LongPageSection>
  );
}

function SimpleInfoCard({
  x,
  y,
  title,
  accent,
  lines,
  width = 260,
  height = 240,
}: {
  x: number;
  y: number;
  title: string;
  accent: string;
  lines: string[];
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-[12px] bg-white shadow-[0_8px_20px_rgba(43,56,93,0.08)]"
      style={{ left: x, top: y, width, height }}
    >
      <div className="absolute left-0 top-0 h-[4px] w-full" style={{ backgroundColor: accent }} />
      <p className="absolute left-[20px] top-[24px] text-[18px] font-bold" style={{ color: accent }}>
        {title}
      </p>
      <div className="absolute left-[20px] top-[60px] text-[20px] font-bold text-[#262633]">
        {lines[0]}
      </div>
      <div className="absolute left-[20px] top-[100px] text-[15px] leading-[28px] text-[#737380]">
        {lines.slice(1).map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function StepCard({
  x,
  title,
  keyword,
  lines,
  number,
}: {
  x: number;
  title: string;
  keyword: string;
  lines: string[];
  number: string;
}) {
  return (
    <div className="absolute top-[290px] h-[320px] w-[240px] overflow-hidden rounded-[12px] bg-white" style={{ left: x }}>
      <div className="absolute left-[92px] top-[24px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f4a742] text-[28px] font-black text-white">
        {number}
      </div>
      <p className="absolute left-1/2 top-[100px] w-[200px] -translate-x-1/2 text-center text-[22px] font-bold text-[#4059d9]">
        {title}
      </p>
      <p className="absolute left-1/2 top-[140px] w-[200px] -translate-x-1/2 text-center text-[36px] font-black text-[#4059d9]">
        {keyword}
      </p>
      <div className="absolute left-1/2 top-[205px] w-[200px] -translate-x-1/2 text-center text-[14px] leading-[24px] text-[#737380]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function AnnotationCard({
  x,
  y,
  title,
  accent,
  lines,
  align = 'left',
}: {
  x: number;
  y: number;
  title: string;
  accent: string;
  lines: string[];
  align?: 'left' | 'right';
}) {
  return (
    <div
      className="absolute h-[110px] w-[346px] overflow-hidden rounded-[10px] bg-white shadow-[0_6px_16px_rgba(42,55,89,0.08)]"
      style={{ left: x, top: y }}
    >
      <div
        className="absolute top-0 h-full w-[4px]"
        style={{
          backgroundColor: accent,
          left: align === 'left' ? 0 : 'auto',
          right: align === 'right' ? 0 : 'auto',
        }}
      />
      <p
        className="absolute top-[16px] text-[18px] font-bold"
        style={{
          color: accent,
          left: align === 'left' ? 20 : 'auto',
          right: align === 'right' ? 20 : 'auto',
          textAlign: align,
        }}
      >
        {title}
      </p>
      <div
        className="absolute top-[50px] text-[14px] leading-[24px] text-[#666673]"
        style={{
          left: align === 'left' ? 20 : 'auto',
          right: align === 'right' ? 20 : 'auto',
          textAlign: align,
        }}
      >
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function CaseOneTitleHero() {
  return (
    <LongPageSection height={900} bg="#4d6eeb">
      {[
        { left: 130, top: 250, width: 260, size: 210, opacity: 0.34 },
        { left: 680, top: 252, width: 360, size: 250, opacity: 0.32 },
        { left: 1115, top: 250, width: 320, size: 210, opacity: 0.32 },
      ].map((item) => (
        <p
          key={`${item.left}-${item.top}`}
          className="absolute -translate-x-1/2 text-center font-['Inter',sans-serif] font-bold leading-none text-[#4667dd]"
          style={{
            left: item.left,
            top: item.top,
            width: item.width,
            height: 150,
            fontSize: item.size,
            opacity: item.opacity,
          }}
        >
          ∞
        </p>
      ))}
      <div className="pointer-events-none absolute left-[100px] top-[254px] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(255,247,230,0.96)_0%,rgba(255,215,196,0.82)_24%,rgba(250,184,158,0.42)_42%,rgba(250,184,158,0.16)_58%,rgba(250,184,158,0)_74%)] blur-[10px]" />
      <p className="absolute left-[218px] top-[300px] -translate-x-1/2 font-['Inter',sans-serif] text-[150px] font-bold leading-none text-[#fff7e6]">
        1
      </p>
      <p className="absolute left-[340px] top-[330px] text-[54px] font-bold leading-none text-white">HUD-改版设计</p>
      <p className="absolute left-[340px] top-[420px] w-[770px] text-[24px] leading-[1.35] text-white">
        HUD，是游戏里的第一入口，把最重要的功能统一收纳起来，让玩家在战斗、基地、地图之间快速切换，同时通过红点提醒玩家去做任务、领奖励、升级、消费
      </p>
    </LongPageSection>
  );
}

function CaseOneHudBeforePhone({
  variant,
  width,
}: {
  variant: 'base' | 'map' | 'task';
  width: number;
}) {
  const isMap = variant === 'map';
  const isTask = variant === 'task';
  const mapMarkers = [
    { left: 42, top: 82, color: '#ffcf5c' },
    { left: 104, top: 118, color: '#68d6ff' },
    { left: 74, top: 170, color: '#ff7f74' },
    { left: 128, top: 216, color: '#8cf38e' },
  ];
  const sideButtons = ['活动', '礼包', '任务', '排行'];

  return (
    <div
      className="relative h-[350px] overflow-hidden rounded-[10px] border border-[#d8def8] bg-[#17283f] shadow-[0_10px_26px_rgba(55,69,120,0.16)]"
      style={{ width }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_36%,rgba(87,146,255,0.28),transparent_36%),linear-gradient(180deg,#213b63_0%,#102034_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[28px] bg-[#0b1627]/85">
        <div className="absolute left-[9px] top-[8px] h-[11px] w-[45px] rounded-full bg-[#ecf4ff]/80" />
        <div className="absolute right-[9px] top-[7px] h-[13px] w-[58px] rounded-full bg-[#f7c76d]" />
      </div>

      {isMap ? (
        <>
          <div className="absolute left-[20px] top-[58px] h-[230px] w-[156px] rounded-[8px] bg-[#315e6f]/70">
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(45deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
            {mapMarkers.map((marker) => (
              <div
                key={`${marker.left}-${marker.top}`}
                className="absolute h-[16px] w-[16px] rounded-full border-2 border-white/80 shadow-[0_0_16px_rgba(255,255,255,0.55)]"
                style={{ left: marker.left, top: marker.top, backgroundColor: marker.color }}
              />
            ))}
          </div>
          <div className="absolute bottom-[18px] left-[13px] right-[13px] grid grid-cols-5 gap-[5px]">
            {['世界', '基地', '联盟', '英雄', '更多'].map((item) => (
              <div key={item} className="rounded-[5px] bg-[#101d30]/90 py-[5px] text-center text-[7px] font-bold text-[#cfe1ff]">
                {item}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="absolute left-[14px] top-[46px] h-[84px] w-[84px] rounded-full bg-[radial-gradient(circle,#f8db88_0%,#b76d35_46%,rgba(183,109,53,0)_70%)]" />
          <div className="absolute left-[22px] top-[150px] grid w-[92px] grid-cols-2 gap-[8px]">
            {['建造', '科研', '训练', '仓库'].map((item, index) => (
              <div key={item} className={`h-[38px] rounded-[8px] ${index === 0 ? 'bg-[#ffb950]' : 'bg-[#31527e]'} p-[5px] text-[8px] font-bold text-white`}>
                {item}
              </div>
            ))}
          </div>
          <div className="absolute right-[10px] top-[46px] flex w-[52px] flex-col gap-[8px]">
            {sideButtons.map((item, index) => (
              <div key={item} className="relative h-[34px] rounded-[8px] bg-[#20395d] text-center text-[8px] font-bold leading-[34px] text-[#dce8ff]">
                {item}
                {index < 3 ? <span className="absolute right-[-3px] top-[-3px] h-[9px] w-[9px] rounded-full bg-[#ff5363]" /> : null}
              </div>
            ))}
          </div>
        </>
      )}

      {isTask ? (
        <div className="absolute bottom-[65px] left-[13px] right-[13px] rounded-[8px] bg-[#f0f4ff]/90 p-[8px]">
          <div className="mb-[6px] h-[8px] w-[56px] rounded-full bg-[#4d6eeb]" />
          {[72, 104, 88].map((bar, index) => (
            <div key={bar} className="mb-[5px] flex items-center gap-[6px]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#ff9d6b]" />
              <span className="h-[6px] rounded-full bg-[#9ca9c5]" style={{ width: bar }} />
              {index === 0 ? <span className="ml-auto h-[14px] w-[36px] rounded-full bg-[#4d6eeb]" /> : null}
            </div>
          ))}
        </div>
      ) : null}

      <div className="absolute bottom-0 left-0 right-0 h-[44px] bg-[#081323]/95 px-[8px] py-[7px]">
        <div className="grid grid-cols-5 gap-[5px]">
          {['基地', '战舰', '世界', '联盟', '菜单'].map((item, index) => (
            <div key={item} className={`rounded-[6px] py-[6px] text-center text-[7px] font-bold ${index === 2 ? 'bg-[#4d6eeb] text-white' : 'bg-[#182841] text-[#b8c9e8]'}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseOneBackground() {
  const reasonCards = [
    { left: 775, top: 250, title: '玩家', copy: '入口太多，\n容易迷路，\n当前状态不\n够清楚', color: '#fab89e', head: true },
    { left: 990, top: 250, title: '策划', copy: '功能层级不\n清晰，影响\n玩法引导', color: '#fab89e', head: true },
    { left: 775, top: 545, title: '美术', copy: '视觉噪音太\n多，画面不\n够高级', color: '#4d6eeb', head: false },
    { left: 990, top: 545, title: '实现', copy: '耦合太重，\n会影响性能', color: '#4d6eeb', head: false },
  ];

  return (
    <LongPageSection height={900} bg="#edeffe">
      <div className="absolute left-0 top-[605px] h-[295px] w-[1280px] bg-white" />
      <p className="absolute left-[90px] top-[82px] text-[28px] font-bold text-[#383d40]">改版背景</p>
      <p className="absolute left-[90px] top-[130px] font-['Inter',sans-serif] text-[18px] tracking-[0.42em] text-[#383d4073]">
        T H E&nbsp;&nbsp; B A C K G R O U N D
      </p>
      <p className="absolute left-[88px] top-[250px] text-[46px] font-bold leading-none text-[#383d40]">为什么要进行改版？</p>
      <div className="absolute left-[90px] top-[332px] flex items-start gap-[27px]">
        {caseOneAssets.backgroundBefore.map((src, index) => (
          <img
            key={src}
            src={resolveAsset(src)}
            alt=""
            className="object-cover"
            style={{ width: index === 1 ? 195 : index === 2 ? 196 : 197, height: 350 }}
          />
        ))}
      </div>
      <p className="absolute left-[90px] top-[705px] text-[23px] text-[#858f99]">改版前的HUD</p>

      {reasonCards.map((card) => (
        <div
          key={card.title}
          className="absolute h-[230px] w-[196px] rounded-[16px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
          style={{ left: card.left, top: card.top }}
        >
          <div
            className={`absolute left-0 h-[70px] w-[196px] ${card.head ? 'top-0 rounded-t-[16px]' : 'bottom-0 rounded-b-[16px]'}`}
            style={{ backgroundColor: card.color }}
          />
          <p
            className="absolute left-1/2 w-[92px] -translate-x-1/2 text-center text-[25px] font-bold leading-[32px] text-white"
            style={{ top: card.head ? 22 : 178 }}
          >
            {card.title}
          </p>
          <p
            className="absolute left-1/2 w-[140px] -translate-x-1/2 whitespace-pre-line text-center text-[24px] leading-[33px] text-[#858f99]"
            style={{ top: card.head ? 82 : card.title === '实现' ? 82 : 60 }}
          >
            {card.copy}
          </p>
        </div>
      ))}
    </LongPageSection>
  );
}

function CaseOneGoals() {
  const goals = [
    ['1', '经营资源', '采集', ['收资源、清待办', '领收益、排队列']],
    ['2', '提升战力', '养成', ['资源转成战力', '持续提升基地']],
    ['3', '扩张领土', '占领', ['扩大势力范围', '争夺关键位置']],
    ['4', '联盟协作', '对抗', ['大规模的战争体验', '服务器里获得地位']],
  ];

  return (
    <LongPageSection height={900} bg="#edeffe">
      <div className="absolute left-0 top-[455px] h-[445px] w-[1280px] bg-[#4974f0]" />
      <p className="absolute left-[88px] top-[70px] text-[30px] font-black leading-[38px] text-[#2e3338]">玩家目标</p>
      <p className="absolute left-[90px] top-[112px] font-['Inter',sans-serif] text-[18px] leading-[23px] tracking-[0.56em] text-[#858a91]">
        THE GOALS
      </p>
      {goals.map(([num, stage, keyword, desc], index) => {
        const left = 34 + index * 324;
        return (
          <div key={num as string} className="absolute top-[248px] h-[430px] w-[240px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]" style={{ left }}>
            <div className="absolute left-[76px] top-[-45px] z-[1] h-[88px] w-[88px] rounded-full bg-[radial-gradient(circle,rgba(255,198,148,0.82)_0%,rgba(250,135,116,0.62)_58%,rgba(250,135,116,0)_72%)]" />
            <div className="absolute left-[86px] top-[-58px] z-[2] h-[72px] w-[72px] rounded-full bg-[linear-gradient(180deg,#ffd8a8_0%,#ff8a74_100%)] shadow-[0_10px_16px_rgba(242,140,122,0.28)]" />
            <p className="absolute left-[120px] top-[-34px] z-[3] w-[50px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[54px] font-black leading-[68px] text-white">
              {num}
            </p>
            <p className="absolute left-1/2 top-[102px] w-[150px] -translate-x-1/2 text-center text-[30px] font-black leading-[38px] text-[#f28c7a]">
              {stage}
            </p>
            <p className="absolute left-1/2 top-[164px] w-[150px] -translate-x-1/2 text-center text-[54px] font-black leading-[68px] text-[#668ffa]">
              {keyword}
            </p>
            <div className="absolute left-1/2 top-[274px] w-[286px] -translate-x-1/2 text-center text-[25px] font-bold leading-[31px] text-[#858a91]">
              {(desc as string[]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {index < goals.length - 1 ? (
              <div className="absolute left-[205px] top-[103px] z-[4] h-[22px] w-[150px]">
                <div className="absolute left-0 top-[2px] h-[16px] w-[16px] rounded-full bg-[#f28c7a]" />
                <div className="absolute left-[16px] top-[10px] h-px w-[112px] border-t-2 border-dashed border-[#f28c7a]" />
                <div className="absolute left-[128px] top-[3px] h-0 w-0 border-b-[8px] border-l-[13px] border-t-[8px] border-b-transparent border-l-[#f28c7a] border-t-transparent" />
              </div>
            ) : null}
          </div>
        );
      })}
    </LongPageSection>
  );
}

function CaseOneCompetitorAnalysis() {
  const competitors = [
    { name: 'lastwar', left: 90, width: 68, images: [caseOneAssets.cpaLastwarTop, caseOneAssets.cpaLastwarBottom] },
    { name: '无尽冬日', left: 211, width: 63, images: caseOneAssets.cpaWinter },
    { name: '剑与远征', left: 332, width: 158, images: caseOneAssets.cpaAfk },
    { name: '菇勇者', left: 521, width: 79, images: caseOneAssets.cpaBrave },
    { name: '英雄没有闪', left: 642, width: 158, images: caseOneAssets.cpaHeroes },
    { name: '寻道大千', left: 831, width: 79, images: [caseOneAssets.cpaDao] },
    { name: '卡皮巴拉GO', left: 952, width: 237, images: caseOneAssets.cpaCapy },
  ];
  const flows = ['经营建设', '收益处理', '战力养成', '地图扩张', '联盟协作'];
  const arrowLefts = [128, 383, 638, 893];

  return (
    <LongPageSection height={900} bg="#edeffe">
      <div className="absolute left-0 top-0 h-[525px] w-[1280px] bg-white" />
      <p className="absolute left-[88px] top-[70px] text-[30px] font-black leading-[38px] text-[#2e3338]">竞品分析</p>
      <p className="absolute left-[90px] top-[112px] font-['Inter',sans-serif] text-[18px] leading-[23px] tracking-[0.56em] text-[#858a91]">CPA</p>
      {competitors.map((item) => (
        <div key={item.name} className="absolute top-[149px]" style={{ left: item.left, width: item.width }}>
          <p className="mb-[7px] text-[15px] font-black leading-[34px] text-[#2e3338]">{item.name}</p>
          <div className="flex flex-wrap">
            {item.images.map((src, index) => (
              <img
                key={src}
                src={resolveAsset(src)}
                alt=""
                className="h-[140px] object-cover"
                style={{ width: item.width > 100 ? 79 : item.width, flexBasis: item.width > 100 ? 79 : item.width }}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="absolute left-0 top-[525px] h-[375px] w-[1280px] bg-[#edeffe]" />
      {arrowLefts.map((left) => (
        <svg
          key={left}
          className="absolute top-[505px] h-[54px] w-[255px] overflow-visible"
          style={{ left }}
          viewBox="0 0 255 54"
          aria-hidden="true"
        >
          <path
            d="M8 42 C58 6 190 6 247 42"
            fill="none"
            stroke="#6f8cff"
            strokeWidth="2.5"
            strokeDasharray="9 8"
            strokeLinecap="round"
            opacity="0.68"
          />
          <circle cx="8" cy="42" r="7" fill="#6f8cff" opacity="0.9" />
          <path d="M247 42 L229 29 L232 53 Z" fill="#6f8cff" opacity="0.9" />
        </svg>
      ))}
      {flows.map((flow, index) => (
        <div key={flow}>
          <div className="absolute top-[555px] flex h-[86px] w-[205px] items-center justify-center bg-[#4974f0] text-[30px] font-black text-white" style={{ left: 46 + index * 245 }}>
            {flow}
          </div>
        </div>
      ))}
      <p className="absolute left-[55px] top-[748px] w-[1160px] text-[25px] leading-[36px] text-[#383d40]">
        本页选取多款头部 SLG / 策略手游，围绕玩家在HUD中的核心行为路径进行对比，重点分析「经营建设、收益处理、战力养成、地图扩张、联盟协作」等高频入口的布局方式。通过拆解竞品在功能承载、红点提示、当前状态反馈和场景切换上的设计差异，明确当前版本底部导航栏的优化方向。
      </p>
    </LongPageSection>
  );
}

function CaseOneDefinition({
  problemNo,
  quote,
  copy,
  background = 'linear-gradient(157deg, #ffffff 0%, #ffffff 36%, #e8ecff 36%, #e8ecff 100%)',
  beforeImage,
  afterImage,
  showAfterAnnotation = false,
  blockImage,
}: {
  problemNo: string;
  quote: string;
  copy: string[];
  background?: string;
  beforeImage: string;
  afterImage?: string;
  showAfterAnnotation?: boolean;
  blockImage?: string;
}) {
  if (blockImage) {
    return (
      <LongPageSection height={900} bg="#edeffe">
        <img src={resolveAsset(blockImage)} alt="" className="absolute left-[128px] top-[90px] h-[720px] w-[1024px]" />
      </LongPageSection>
    );
  }

  return (
    <LongPageSection height={900} bg={background}>
      <p className="absolute left-[90px] top-[82px] text-[28px] font-bold text-[#383d40]">明确问题</p>
      <p className="absolute left-[90px] top-[130px] font-['Inter',sans-serif] text-[18px] tracking-[0.42em] text-[#383d4073]">D E F I N I T I O N</p>
      <p className="absolute left-[90px] top-[225px] text-[34px] font-bold text-[#b8d1fa]">{problemNo}</p>
      <p className="absolute left-[90px] top-[282px] text-[32px] font-bold text-[#4d6eeb]">{quote}</p>
      <div className="absolute left-[90px] top-[350px] text-[22px] leading-[34px] text-[#858f99]">
        {copy.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {afterImage ? (
        <div className="absolute left-[97px] top-[482px] flex items-center gap-[20px]">
          <img src={beforeImage} alt="" className="h-[350px] w-[197px]" />
          <div className="flex h-[38px] w-[30px] items-center justify-center">
            <div className="rotate-90 text-[38px] leading-none text-[#6180fa]">▶</div>
          </div>
          <div className="relative h-[350px] w-[197px] overflow-hidden bg-[#707070]">
            <img src={afterImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
            {showAfterAnnotation ? (
              <>
                {[
                  { left: 0, top: 0, width: 74, height: 24, text: '个人信息区域' },
                  { left: 79, top: 0, width: 118, height: 11, text: '货币栏' },
                  { left: 0, top: 25, width: 74, height: 41, text: '常规功能菜单栏' },
                  { left: 137, top: 14, width: 60, height: 109, text: '商业运营/\n活动功能\n菜单栏' },
                  { left: 78, top: 74, width: 55, height: 55, text: 'Toast区域' },
                  { left: 0, top: 198, width: 197, height: 34, text: '养成功能显示区域' },
                  { left: 0, top: 236, width: 197, height: 32, text: '装置区域' },
                  { left: 0, top: 272, width: 74, height: 31, text: '快捷任务区域' },
                  { left: 78, top: 279, width: 55, height: 45, text: '坐标区域' },
                  { left: 137, top: 152, width: 60, height: 107, text: '提示按钮区域' },
                  { left: 137, top: 263, width: 60, height: 61, text: '挂机玩法\n操作区域' },
                  { left: 0, top: 312, width: 197, height: 38, text: '系统功能导航栏' },
                ].map((box) => (
                  <div
                    key={`${box.left}-${box.top}-${box.text}`}
                    className="absolute border border-dashed border-[#505070] bg-[#939393]/85 text-center text-[8px] leading-[10px] text-white"
                    style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
                  >
                    <div className="flex h-full items-center justify-center whitespace-pre-wrap px-1">{box.text}</div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="absolute left-[206px] top-[482px] flex items-center gap-[140px]">
          {caseOneAssets.definitionFive.map((src) => (
            <img key={src} src={src} alt="" className="h-[350px] w-[196px]" />
          ))}
        </div>
      )}
    </LongPageSection>
  );
}

function CaseOneReflection() {
  const reflections = [
    {
      title: '让界面先服务玩家目标',
      copy:
        'HUD 改版不是把按钮重新摆一遍，而是先明确玩家当下最常做的事，再决定信息层级、功能入口和视觉主次。',
    },
    {
      title: '兼顾短期体验与长期维护',
      copy:
        '新模块上线得快很重要，但更重要的是后续能持续扩展、复用和维护，否则每一次活动与版本都会把界面重新拉回复杂状态。',
    },
    {
      title: '一致性的价值高于局部炫技',
      copy:
        '当不同场景下的导航、反馈和操作逻辑保持一致，玩家适应成本会明显下降，这比单点功能做得花更能提升整体体验。',
    },
  ];

  return (
    <LongPageSection height={900} bg="#3f57c4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.04),transparent_22%),radial-gradient(circle_at_86%_78%,rgba(255,210,148,0.1),transparent_18%),linear-gradient(180deg,#4560d0_0%,#3a50bd_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(93,213,255,0.65)_1px,transparent_1px)] [background-size:97px_53px]" />
      <div className="absolute left-[84px] top-[72px] h-[330px] w-[260px] rotate-[-12deg] rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]" />
      <p className="absolute left-[92px] top-[88px] font-['Inter',sans-serif] text-[36px] font-bold tracking-[2px] text-white">
        项目反思
      </p>
      <p className="absolute left-[92px] top-[136px] font-['Inter',sans-serif] text-[13px] tracking-[0.42em] text-white/75">
        R E F L E C T I O N
      </p>

      <div className="absolute left-[158px] top-[250px] h-[490px] w-[1023px] rounded-[8px] bg-[#8ea4f7]/30" />
      <div className="absolute left-[117px] top-[208px] h-[500px] w-[1024px] rounded-[6px] bg-white shadow-[0_14px_34px_rgba(30,40,86,0.12)]" />

      <div className="absolute left-[202px] top-[267px] w-[840px] text-center">
        <p className="text-[31px] font-bold leading-[39px] tracking-[1px] text-[#5f7fee]">{reflections[0].title}</p>
        <p className="mt-[4px] text-[20px] leading-[34px] tracking-[1px] text-[#92969d]">{reflections[0].copy}</p>
      </div>
      <div className="absolute left-[202px] top-[410px] w-[840px] text-center">
        <p className="text-[31px] font-bold leading-[39px] tracking-[1px] text-[#5f7fee]">{reflections[1].title}</p>
        <p className="mt-[4px] text-[20px] leading-[34px] tracking-[1px] text-[#92969d]">{reflections[1].copy}</p>
      </div>
      <div className="absolute left-[202px] top-[553px] w-[840px] text-center">
        <p className="text-[31px] font-bold leading-[39px] tracking-[1px] text-[#5f7fee]">{reflections[2].title}</p>
        <p className="mt-[4px] text-[20px] leading-[34px] tracking-[1px] text-[#92969d]">{reflections[2].copy}</p>
      </div>

      <p className="absolute left-[1108px] top-[610px] w-[170px] text-center font-['Inter',sans-serif] text-[160px] font-bold leading-[210px] text-[#ffd1a4]">
        ?
      </p>
    </LongPageSection>
  );
}

function HudRedesignCase() {
  return (
    <div className="space-y-6">
      <CaseOneTitleHero />
      <CaseOneBackground />
      <CaseOneGoals />
      <CaseOneCompetitorAnalysis />
      <HudRedesignTailContent />
    </div>
  );
}

function OfficialRecommendationCase() {
  const backgroundCards = [
    {
      x: 72,
      y: 320,
      accent: '#fa9933',
      title: '玩家',
      lines: ['配装选择困难', '武器英雄种类多', '缺少搭配参考', '决策成本高'],
    },
    {
      x: 356,
      y: 320,
      accent: '#6180fa',
      title: '策划',
      lines: ['降低上手门槛', '提供官方推荐方案', '引导养成方向', '减少资源浪费'],
    },
    {
      x: 72,
      y: 584,
      accent: '#fa9933',
      title: '留存',
      lines: ['提升玩家体验', '一键替换阵容', '快速体验最优搭配', '增强游戏乐趣'],
    },
    {
      x: 356,
      y: 584,
      accent: '#6180fa',
      title: '运营',
      lines: ['灵活配置能力', '可按职业配置', '支持多方案切换', '版本更新可调整'],
    },
  ];

  return (
    <div className="space-y-6">
      <TitleHero
        title="官方推荐阵容"
        copy={[
          '为玩家提供官方推荐的武器、英雄、珍宝阵容搭配方案，',
          '降低配装决策成本，提升养成体验。',
        ]}
        ellipse="figma/xingji-aodaisai/assets/ellipse-large-2.webp"
        useCssEllipse
      />

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="设计背景" eyebrow="T H E   B A C K G R O U N D" />
        <p className="absolute left-[72px] top-[160px] text-[36px] font-bold text-[#4059d9]">
          "为什么需要推荐阵容？"
        </p>
        <div className="absolute left-[72px] top-[220px] text-[18px] leading-[32px] text-[#4d4d59]">
          <p>游戏中武器、英雄、珍宝种类繁多，玩家在配装时面临选择困难。</p>
          <p>新手和回归玩家缺少配装参考，养成方向不明确，容易浪费资源。</p>
        </div>
        {backgroundCards.map((card) => (
          <SimpleInfoCard key={`${card.title}-${card.x}`} {...card} />
        ))}
        <p className="absolute left-[700px] top-[340px] text-[28px] font-bold text-[#d97333]">核心问题</p>
        <div className="absolute left-[700px] top-[400px] text-[28px] font-bold leading-[48px] text-[#333340]">
          <p>"配装种类繁多，</p>
          <p>玩家选择困难，</p>
          <p>缺少官方指引"</p>
        </div>
        <div className="absolute left-[700px] top-[620px] text-[16px] leading-[28px] text-[#666673]">
          <p>设计目标：提供一套完整的官方推荐阵容系统，</p>
          <p>覆盖武器、英雄、珍宝三大维度，支持一键替换。</p>
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="操作流程" eyebrow="U S E R   F L O W" />
        <div className="absolute left-0 top-[520px] h-[380px] w-full bg-gradient-to-b from-[#3847a6] to-[#262e73]" />
        <StepCard x={80} number="1" title="选择推荐阵容" keyword="选择" lines={['从养成界面进入', '推荐阵容系统', '选择职业查看推荐']} />
        <StepCard x={370} number="2" title="查看推荐配置" keyword="查看" lines={['查看官方推荐的', '武器/英雄/珍宝', '了解最优搭配方案']} />
        <StepCard x={660} number="3" title="确认阵容替换" keyword="确认" lines={['选择已装配的阵容', '确认替换操作', '系统提示不足项目']} />
        <StepCard x={950} number="4" title="替换完成" keyword="替换" lines={['阵容替换成功', '查看替换结果', '开始使用新阵容']} />
        {['332', '622', '912'].map((left) => (
          <p key={left} className="absolute top-[436px] text-[28px] text-[#d98033]" style={{ left: `${left}px` }}>
            →
          </p>
        ))}
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="功能入口" eyebrow="E N T R Y   P O I N T" />
        <p className="absolute left-[72px] top-[170px] text-[24px] font-bold text-[#333340]">养成界面 → 推荐阵容</p>
        <div className="absolute left-[72px] top-[220px] text-[16px] leading-[30px] text-[#595966]">
          <p>在养成界面左侧增加"推荐阵容"入口图标，</p>
          <p>玩家可快速进入官方推荐阵容系统。</p>
          <p> </p>
          <p>入口设计原则：</p>
          <p>· 位置醒目，不干扰主流程</p>
          <p>· 图标语义清晰，降低认知成本</p>
          <p>· 支持从养成界面和武器搭配界面两处进入</p>
        </div>
        <PhoneFrame
          left={640}
          top={170}
          width={319}
          height={688}
          src="figma/xingji-aodaisai/assets/official-phone-mockup-1.webp"
          imageClassName="left-0 top-[-5.3%] h-[105.37%] w-[100.31%]"
        />
        <div className="absolute left-[460px] top-[220px] rounded-[15px] bg-[#fa9933] px-[22px] py-[10px] text-[11px] font-bold text-white">
          推荐阵容入口按钮位置
        </div>
        <div className="absolute left-[593px] top-[234px] h-[2px] w-[47px] bg-[#fa993366]" />
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="推荐阵容界面" eyebrow="R E C O M M E N D A T I O N" />
        <p className="absolute left-[72px] top-[176px] text-[15px] leading-[28px] text-[#4d66cc]">
          <span className="font-medium">设计原则：</span>信息分层清晰，操作路径最短，
          <br />
          支持按职业维度快速切换方案。
        </p>
        <PhoneFrame
          left={480}
          top={176}
          width={320}
          height={679}
          src="figma/xingji-aodaisai/assets/official-phone-recommend.webp"
          imageClassName="left-0 top-[-4.93%] h-[106.77%] w-full"
        />
        <AnnotationCard
          x={862}
          y={231}
          title="① 职业信息区"
          accent="#6180fa"
          lines={['展示当前职业名称、核心属性标签、', '职业特色描述，帮助玩家快速了解职业定位']}
        />
        <div className="absolute left-[800px] top-[286px] h-[2px] w-[60px] bg-[#6180fa66]" />
        <AnnotationCard
          x={72}
          y={338}
          title="推荐阵容区②"
          accent="#fa9933"
          lines={['分为武器推荐、英雄推荐、珍宝推荐三个板块', '每个板块展示5-6个推荐单位，支持一键替换']}
          align="right"
        />
        <div className="absolute left-[420px] top-[393px] h-[2px] w-[60px] bg-[#fa993366]" />
        <AnnotationCard
          x={862}
          y={516}
          title="③ 一键推荐按钮"
          accent="#6180fa"
          lines={['点击"推荐"按钮可一键将官方推荐阵容', '替换到玩家当前装配方案中']}
        />
        <div className="absolute left-[800px] top-[571px] h-[2px] w-[60px] bg-[#6180fa66]" />
        <AnnotationCard
          x={72}
          y={710}
          title="职业切换区④"
          accent="#fa9933"
          lines={['底部 Tab 切换不同职业（战士/法师/刺客）', '每个职业独立推荐方案']}
          align="right"
        />
        <div className="absolute left-[420px] top-[765px] h-[2px] w-[60px] bg-[#fa993366]" />
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="阵容替换确认" eyebrow="R E P L A C E M E N T   F L O W" />
        <PhoneFrame
          left={72}
          top={180}
          width={280}
          height={540}
          src="figma/xingji-aodaisai/assets/official-phone-replace.webp"
          rounded="rounded-[20px]"
          imageClassName="inset-0 h-full w-full object-cover"
        />
        <PhoneFrame
          left={440}
          top={180}
          width={280}
          height={540}
          src="figma/xingji-aodaisai/assets/official-phone-settle.webp"
          rounded="rounded-[20px]"
          imageClassName="inset-0 h-full w-full object-cover"
        />
        <p className="absolute left-[164px] top-[740px] text-[16px] text-[#333340]">阵容替换确认</p>
        <p className="absolute left-[532px] top-[740px] text-[16px] text-[#333340]">替换成功结算</p>
        <div className="absolute left-[371px] top-[430px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6180fa] text-[24px] text-white">
          →
        </div>
        <div className="absolute left-[760px] top-[180px] text-[20px] font-bold text-[#4059d9]">替换确认弹窗</div>
        <div className="absolute left-[760px] top-[215px] text-[14px] leading-[28px] text-[#595966]">
          <p>· 清晰告知用户当前阵容将被替换</p>
          <p>· 下拉菜单选择替换方案</p>
          <p>· 展示推荐阵容的具体单位</p>
          <p>· 标记未解锁/未拥有的单位</p>
          <p>· 底部"存在未拥有"的友好提示</p>
        </div>
        <div className="absolute left-[760px] top-[490px] text-[20px] font-bold text-[#4059d9]">替换成功结算</div>
        <div className="absolute left-[760px] top-[525px] text-[14px] leading-[28px] text-[#595966]">
          <p>· 顶部"阵容替换成功"状态提示</p>
          <p>· 展示替换后的完整阵容结果</p>
          <p>· 点击空白区域即可关闭</p>
          <p>· 操作反馈明确，路径闭环</p>
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="视觉稿欣赏" eyebrow="F I N A L   D E S I G N" />
        <div className="absolute left-[72px] top-[203px] flex items-start gap-[10px]">
          {[
            'official-show-1.webp',
            'official-show-2.webp',
            'official-show-3.webp',
            'official-show-4.webp',
          ].map((name) => (
            <div key={name} className="relative h-[607px] w-[280px] overflow-hidden bg-[#e8e5f0]">
              <img
                src={publicUrl(`figma/xingji-aodaisai/assets/${name}`)}
                alt=""
                className="absolute inset-0 h-full w-full object-contain object-top"
              />
            </div>
          ))}
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="linear-gradient(180deg, #3847A6 0%, #262E73 100%)">
        <p className="absolute left-[72px] top-[52px] text-[32px] font-bold text-white">设计总结</p>
        <p className="absolute left-[72px] top-[94px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-white/60">
          S U M M A R Y
        </p>
        <div className="absolute left-[72px] top-[125px] h-[2px] w-[1136px] bg-white/30" />
        {[
          ['01', '降低决策成本', '官方推荐方案为新手和', '回归玩家提供配装参考，', '减少试错成本。'],
          ['02', '操作路径最短', '一键替换设计让玩家', '4步完成阵容切换，', '操作效率大幅提升。'],
          ['03', '信息层级清晰', '职业→武器/英雄/珍宝', '三维度分层展示，', '信息结构一目了然。'],
          ['04', '容错机制完善', '未拥有提示、方案选择、', '结算确认等环节保证', '用户操作安全可控。'],
        ].map(([no, title, a, b, c], index) => (
          <div
            key={no}
            className="absolute top-[180px] h-[320px] w-[265px] rounded-[16px] bg-white/[0.12] px-[24px] py-[24px]"
            style={{ left: 72 + index * 290 }}
          >
            <p className="text-[48px] font-black text-[#ffcc66]">{no}</p>
            <p className="mt-[28px] text-[22px] font-bold text-white">{title}</p>
            <div className="mt-[23px] text-[15px] leading-[28px] text-white/75">
              <p>{a}</p>
              <p>{b}</p>
              <p>{c}</p>
            </div>
          </div>
        ))}
        <p className="absolute left-[72px] top-[560px] text-[18px] text-white/80">
          通过系统化的推荐阵容设计，让每位玩家都能轻松找到最优配装方案。
        </p>
        <div className="absolute left-[72px] top-[610px] h-[3px] w-[200px] rounded-[2px] bg-[#ffcc66]" />
      </LongPageSection>
    </div>
  );
}

function NeedCard({
  x,
  label,
  color,
  variant,
  items,
}: {
  x: number;
  label: string;
  color: string;
  variant: 'user' | 'guild' | 'ops';
  items: string[];
}) {
  return (
    <div
      className="absolute top-[520px] h-[250px] w-[350px] overflow-hidden rounded-[20px] border border-[#d8dae8] bg-white px-[24px] py-[22px] shadow-[0_18px_45px_rgba(65,73,120,0.08)]"
      style={{ left: x }}
    >
      <div className="absolute left-0 top-0 h-[5px] w-full" style={{ backgroundColor: color }} />
      <div className="inline-flex h-[40px] items-center rounded-[10px] px-[16px] text-[16px] font-bold text-white" style={{ backgroundColor: color }}>
        {label}
      </div>
      <NeedIcon variant={variant} color={color} />
      <div className="mt-[28px] space-y-[15px] text-[16px] font-medium leading-[24px] text-[#333743]">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-[12px]">
            <span className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: color }} />
            <p>{`${index + 1}. ${item}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NeedIcon({ variant, color }: { variant: 'user' | 'guild' | 'ops'; color: string }) {
  return (
    <div className="absolute right-[24px] top-[24px] flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-[#f4f5fb]">
      <svg viewBox="0 0 48 48" className="h-[34px] w-[34px]" fill="none" aria-hidden="true">
        {variant === 'user' ? (
          <>
            <circle cx="24" cy="17" r="8" fill={color} opacity="0.95" />
            <path d="M12 38c2.6-8 21.4-8 24 0" stroke={color} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : null}
        {variant === 'guild' ? (
          <>
            <path d="M15 40V10" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <path d="M18 11h18l-5 8 5 8H18V11Z" fill={color} opacity="0.95" />
            <path d="M10 40h20" stroke={color} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : null}
        {variant === 'ops' ? (
          <>
            <path d="M10 15h28M10 24h28M10 33h28" stroke={color} strokeWidth="4" strokeLinecap="round" />
            <circle cx="19" cy="15" r="5" fill={color} />
            <circle cx="30" cy="24" r="5" fill={color} />
            <circle cx="23" cy="33" r="5" fill={color} />
          </>
        ) : null}
      </svg>
    </div>
  );
}

function CoordBookmarkCase() {
  return (
    <div className="space-y-6">
      <TitleHero
        title="野外坐标收藏"
        copy={[
          '为 SLG 玩家提供地图坐标快速收藏与标记系统，',
          '支持分类管理、一键跳转、公会协作标记，提升野外探索效率。',
        ]}
        ellipse="figma/xingji-aodaisai/assets/ellipse-large-3.webp"
        useCssEllipse
      />

      <LongPageSection height={900} bg="#e8e5f0">
        <div className="absolute left-[980px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(97,125,250,0.13)_0%,rgba(97,125,250,0.09)_44%,rgba(97,125,250,0)_74%)]" />
        <div className="absolute left-[-140px] top-[720px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(242,153,51,0.13)_0%,rgba(242,153,51,0.08)_44%,rgba(242,153,51,0)_74%)]" />
        <p className="absolute left-[72px] top-[56px] w-[200px] text-[32px] font-bold leading-[38px] text-[#212126]">设计背景</p>
        <p className="absolute left-[72px] top-[98px] w-[220px] font-['Inter',sans-serif] text-[13px] tracking-[0.34em] text-[#80808c]">THE BACKGROUND</p>
        <div className="absolute left-[72px] top-[126px] h-[3px] w-[64px] rounded-[2px] bg-[#617dfa]" />
        <p className="absolute left-[72px] top-[188px] w-[1136px] text-[42px] font-bold leading-[50px] text-[#212126]">
          地图信息越来越多，但记录、协作和跳转仍然是分散的。
        </p>
        <p className="absolute left-[74px] top-[280px] w-[1134px] text-[24px] leading-[29px] text-[#5b5b69]">
          玩家不是缺少信息，而是缺少一套更顺手的地图管理方式。
        </p>
        {[
          {
            left: 72,
            iconLeft: 100,
            titleLeft: 148,
            copyLeft: 100,
            accent: '#f29933',
            title: '记忆负担',
            lines: ['坐标靠手记或截图，', '信息容易散落。'],
            icon: 'bookmark',
          },
          {
            left: 470,
            iconLeft: 498,
            titleLeft: 546,
            copyLeft: 498,
            accent: '#617dfa',
            title: '协作困难',
            lines: ['标记不能共享，', '团队沟通成本高。'],
            icon: 'nodes',
          },
          {
            left: 868,
            iconLeft: 896,
            titleLeft: 944,
            copyLeft: 896,
            accent: '#7a86ff',
            title: '导航低效',
            lines: ['输入和查找反复发生，', '定位流程太长。'],
            icon: 'target',
          },
        ].map((card) => (
          <div key={card.title}>
            <div
              className="absolute top-[403px] h-[188px] w-[340px] rounded-[24px] border border-[#d8dceb] bg-white/[0.92] shadow-[0_14px_26px_-20px_rgba(38,46,61,0.07)]"
              style={{ left: card.left }}
            />
            <div
              className="absolute top-[431px] flex h-[36px] w-[36px] items-center justify-center rounded-[11px] border"
              style={{ left: card.iconLeft, borderColor: `${card.accent}2e`, backgroundColor: `${card.accent}1a` }}
            >
              {card.icon === 'bookmark' ? (
                <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" aria-hidden="true">
                  <path d="M8 5.5h8v13l-4-2.8-4 2.8v-13Z" stroke={card.accent} strokeWidth="2" strokeLinejoin="round" />
                </svg>
              ) : null}
              {card.icon === 'nodes' ? (
                <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="none" aria-hidden="true">
                  <path d="M8 8l8 0M10 10.5l4 5" stroke={card.accent} strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="7" cy="8" r="3" fill={card.accent} opacity="0.82" />
                  <circle cx="17" cy="8" r="3" fill={card.accent} opacity="0.82" />
                  <circle cx="12" cy="17" r="3" fill={card.accent} opacity="0.82" />
                </svg>
              ) : null}
              {card.icon === 'target' ? (
                <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="7" stroke={card.accent} strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3" stroke={card.accent} strokeWidth="1.8" />
                  <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" stroke={card.accent} strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : null}
            </div>
            <p className="absolute top-[431px] w-[180px] text-[28px] font-bold leading-[34px] text-[#212126]" style={{ left: card.titleLeft }}>
              {card.title}
            </p>
            <div className="absolute top-[489px] w-[250px] text-[16px] leading-[26px] text-[#666675]" style={{ left: card.copyLeft }}>
              <p>{card.lines[0]}</p>
              <p>{card.lines[1]}</p>
            </div>
          </div>
        ))}
        <div className="absolute left-[72px] top-[730px] h-[84px] w-[1136px] rounded-[20px] bg-[#e1e3f7]" />
        <p className="absolute left-[104px] top-[758px] w-[92px] text-[18px] font-bold leading-[22px] text-[#4660e6]">设计目标</p>
        <p className="absolute left-[220px] top-[758px] w-[760px] text-[18px] leading-[29px] text-[#51608f]">
          把记录、标记、跳转和协作收进一套更顺的地图信息链路。
        </p>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="用户需求" eyebrow="U S E R   N E E D S" />
        <div className="absolute left-[1020px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#73bf7314]" />
        <div className="absolute left-[-120px] top-[700px] h-[280px] w-[280px] rounded-full bg-[#6180fa12]" />
        <h3 className="absolute left-[72px] top-[188px] whitespace-nowrap text-[40px] font-black leading-[52px] tracking-[-0.8px] text-[#24252c]">
          同一张地图，三类角色要解决的，其实是不同问题。
        </h3>
        <p className="absolute left-[74px] top-[286px] text-[23px] font-medium leading-[32px] text-[#666b75]">
          个人看效率，公会看协同，策划看配置。
        </p>
        <div className="absolute left-[72px] top-[388px] flex h-[70px] w-[1136px] items-center rounded-[14px] bg-[#6180fa14] px-[32px] text-[17px] font-bold leading-[26px] text-[#4059d9]">
          核心洞察：坐标收藏不是单点功能，而是一套同时服务个人、团队和运营的信息系统。
        </div>
        <NeedCard x={91} label="个人玩家" color="#f28033" variant="user" items={['快速收藏坐标', '分类管理关系', '一键跳转位置']} />
        <NeedCard x={465} label="公会成员" color="#6180fa" variant="guild" items={['查看公会标记', '收到变更通知', '邮件直达坐标']} />
        <NeedCard x={839} label="运营策划" color="#73bf73" variant="ops" items={['图标后台配置', '文本自定义', '类型持续扩展']} />
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[72px] top-[52px] text-[32px] font-bold leading-none text-[#262633]">信息架构</p>
        <p className="absolute left-[72px] top-[94px] font-['Inter',sans-serif] text-[13px] tracking-[0.42em] text-[#80808c]">
          I N F O R M A T I O N   A R C H I T E C T U R E
        </p>
        <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-[#617dfa]" />
        <div className="absolute left-[495px] top-[190px] flex h-[56px] w-[220px] items-center justify-center rounded-[10px] bg-[#6180fa] text-[20px] font-bold text-white">
          坐标收藏系统
        </div>
        <div className="absolute left-[220px] top-[218px] h-[122px] w-[2px] bg-[#6180fa4d]" />
        <div className="absolute left-[222px] top-[218px] h-[2px] w-[273px] bg-[#6180fa4d]" />
        <div className="absolute left-[690px] top-[218px] h-[2px] w-[312px] bg-[#6180fa4d]" />
        <div className="absolute left-[535px] top-[246px] h-[94px] w-[2px] bg-[#6180fa4d]" />
        <div className="absolute left-[680px] top-[246px] h-[94px] w-[2px] bg-[#6180fa4d]" />
        <div className="absolute left-[1000px] top-[220px] h-[120px] w-[2px] bg-[#6180fa4d]" />
        {[
          { x: 120, title: '坐标定位', items: ['X/Y 输入', '前往跳转'] },
          { x: 380, title: '收藏管理', items: ['4类分类', '收藏列表', '删除/分享'] },
          { x: 640, title: '标记系统', items: ['3种标记', '自定义命名', '地图气泡'] },
          { x: 900, title: '公会标记', items: ['盟主设置', '邮件通知', '光效显示'] },
        ].map((group) => (
          <div key={group.title}>
            <div className="absolute top-[340px] flex h-[50px] w-[200px] items-center justify-center rounded-[8px] bg-white text-[16px] font-bold text-[#4059d9]" style={{ left: group.x }}>
              {group.title}
            </div>
            {group.items.map((item, itemIndex) => (
              <div
                key={item}
                className="absolute flex h-[36px] w-[170px] items-center justify-center rounded-[6px] bg-[#f2f2f7] text-[14px] text-[#4d4d59]"
                style={{ left: group.x + 15, top: 420 + itemIndex * 48 }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
        <div className="absolute left-[156px] top-[620px] text-[16px] leading-[28px] text-[#595966]">
          <p>系统分为四大模块：坐标定位（输入跳转）、收藏管理（分类列表）、标记系统（个人标记）、公会标记（团队协作）。</p>
          <p>各模块独立运作，通过地图界面统一入口衔接。</p>
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="#ececf5">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[72px] top-[52px] text-[32px] font-bold leading-none text-[#262633]">功能入口</p>
        <p className="absolute left-[72px] top-[94px] font-['Inter',sans-serif] text-[13px] tracking-[0.42em] text-[#80808c]">E N T R Y   P O I N T</p>
        <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-[#617dfa]" />
        <p className="absolute left-[72px] top-[170px] text-[24px] font-bold text-[#333340]">野外大世界 → 建筑信息卡</p>
        <div className="absolute left-[72px] top-[220px] text-[16px] leading-[30px] text-[#595966]">
          <p>在野外大世界中，点击任意建筑弹出信息卡片，</p>
          <p>卡片右上角新增三个操作图标：</p>
          <p className="mt-[28px]">· 标记图标 — 添加个人收藏标记</p>
          <p>· 收藏图标 — 快速收藏当前坐标</p>
          <p>· 分享图标 — 将坐标分享到聊天频道</p>
          <p className="mt-[28px]">同时在世界界面左侧增加"坐标&收藏"入口图标，</p>
          <p>以及"公会标记"入口图标。</p>
        </div>
        <PhoneFrame
          left={510}
          top={170}
          width={300}
          height={649}
          src="figma/xingji-aodaisai/assets/coord-phone-field.webp"
          imageClassName="left-0 top-[-4.75%] h-[104.72%] w-full"
        />
        <PhoneFrame
          left={900}
          top={170}
          width={300}
          height={649}
          src="figma/xingji-aodaisai/assets/coord-phone-building.webp"
          imageClassName="left-0 top-[-4.75%] h-[104.72%] w-full"
        />
        <p className="absolute left-[625px] top-[843px] text-[14px] font-medium text-[#4d4d59]">野外主界面</p>
        <p className="absolute left-[1015px] top-[843px] text-[14px] font-medium text-[#4d4d59]">建筑信息卡</p>
        <div className="absolute left-[830px] top-[449px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6180fa] font-['Inter',sans-serif] text-[24px] text-white">→</div>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[80px] top-[60px] text-[32px] font-bold leading-none text-[#212121]">坐标收藏面板</p>
        <p className="absolute left-[80px] top-[102px] font-['Inter',sans-serif] text-[13px] tracking-[0.3em] text-[#80808c]">COORDINATE  &  BOOKMARK  PANEL</p>
        <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-[#617dfa]" />
        <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
          <p>玩家可通过坐标输入快速跳转至目标位置，</p>
          <p>并对感兴趣的坐标进行收藏管理。收藏列表</p>
          <p>支持 4 种分类（中立/友好/敌对/公会），</p>
          <p>便于战略规划与快速定位。</p>
        </div>
        <PhoneFrame
          left={367}
          top={246}
          width={260}
          height={561}
          src="figma/xingji-aodaisai/assets/coord-phone-popup.webp"
          rounded="rounded-[16px]"
          imageClassName="left-0 top-[-4.9%] h-[105%] w-full"
        />
        <PhoneFrame
          left={687}
          top={245}
          width={260}
          height={558}
          src="figma/xingji-aodaisai/assets/coord-phone-bookmark-empty.webp"
          rounded="rounded-[16px]"
          imageClassName="left-0 top-[-4.75%] h-[105.56%] w-full"
        />
        <p className="absolute left-[442px] top-[827px] text-[12px] font-medium text-[#80808c]">坐标输入 & 收藏列表</p>
        <p className="absolute left-[768px] top-[827px] text-[12px] font-medium text-[#80808c]">空状态 & 添加收藏</p>
        {[
          { top: 390, lines: ['坐标 X/Y 输入', '支持快速跳转'] },
          { top: 457, lines: ['4 种分类标签', '中立/友好/敌对/公会'] },
          { top: 541, lines: ['收藏条目支持', '删除与分享操作'] },
        ].map((item) => (
          <div key={item.top}>
            <div className="absolute left-[190px] w-[113px] text-right text-[11px] font-medium leading-[18px] text-[#617dfa]" style={{ top: item.top }}>
              <p>{item.lines[0]}</p>
              <p>{item.lines[1]}</p>
            </div>
            <div className="absolute left-[307px] h-[2px] w-[60px] bg-[#6180fa4d]" style={{ top: item.top + 17 }} />
          </div>
        ))}
        <div className="absolute left-[947px] top-[577px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[1011px] top-[560px] text-[11px] font-medium leading-[18px] text-[#617dfa]">
          <p>空状态引导</p>
          <p>提升可发现性</p>
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[80px] top-[60px] text-[32px] font-bold leading-none text-[#212126]">添加标记</p>
        <p className="absolute left-[80px] top-[102px] font-['Inter',sans-serif] text-[13px] tracking-[0.3em] text-[#80808c]">
          ADD  MARK  SYSTEM
        </p>
        <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-[#617dfa]" />
        <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
          <p>玩家可对地图坐标添加标记，标记分为 3 种</p>
          <p>类型：中立、友好、敌对。每种标记配有独立</p>
          <p>图标与颜色区分，支持自定义命名，所有图标</p>
          <p>和文本均可由运营团队后台配置。</p>
        </div>
        <PhoneFrame
          left={320}
          top={263}
          width={280}
          height={588}
          src="figma/xingji-aodaisai/assets/coord-phone-add-mark.webp"
          rounded="rounded-[16px]"
          imageClassName="left-0 top-[-4.96%] h-[107.88%] w-full"
        />
        <PhoneFrame
          left={680}
          top={263}
          width={280}
          height={588}
          src="figma/xingji-aodaisai/assets/coord-phone-add-mark-2.webp"
          rounded="rounded-[16px]"
          imageClassName="left-0 top-[-4.96%] h-[107.88%] w-full"
        />
        {[
          { top: 432, name: '中立标记', color: '#f29933', lines: ['蓝色图标', '通用坐标标注'] },
          { top: 532, name: '友好标记', color: '#73bf73', lines: ['绿色图标', '盟友与资源点'] },
          { top: 632, name: '敌对标记', color: '#ff5a66', lines: ['红色图标', '敌方据点警示'] },
        ].map((item) => (
          <div key={item.name}>
            <span
              className="absolute left-[208px] h-[12px] w-[12px] rounded-full border border-white/45 shadow-[0_0_10px_rgba(255,255,255,0.18)]"
              style={{ top: item.top, backgroundColor: item.color }}
              aria-hidden
            />
            <p className="absolute left-[230px] text-[14px] font-bold text-[#212126]" style={{ top: item.top - 4 }}>{item.name}</p>
            <div className="absolute left-[230px] text-[11px] leading-[18px] text-[#595966]" style={{ top: item.top + 18 }}>
              <p>{item.lines[0]}</p>
              <p>{item.lines[1]}</p>
            </div>
          </div>
        ))}
        <div className="absolute left-[1024px] top-[443px] text-[11px] leading-[18px] text-[#617dfa]">
          <p>标记文本自定义</p>
          <p>支持玩家命名</p>
        </div>
        <div className="absolute left-[1024px] top-[545px] text-[11px] leading-[18px] text-[#617dfa]">
          <p>10 个标记图标</p>
          <p>运营可配置</p>
        </div>
        <div className="absolute left-[960px] top-[461px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[960px] top-[562px] h-[2px] w-[60px] bg-[#6180fa4d]" />
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <LightSectionHeader title="地图可视化" eyebrow="MAP  VISUALIZATION" />
        <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
          <p>收藏与标记信息直接呈现在世界地图上：</p>
          <p>收藏以气泡形式显示在建筑上方，标记则以</p>
          <p>光效形式附着于建筑，实现信息的空间化表达，</p>
          <p>帮助玩家快速识别目标区域。</p>
        </div>
        <PhoneFrame
          left={352}
          top={245}
          width={260}
          height={583}
          src="figma/xingji-aodaisai/assets/coord-phone-bookmark-bubble.webp"
          imageClassName="left-0 top-[-0.26%] h-[101.03%] w-full"
        />
        <PhoneFrame
          left={679}
          top={245}
          width={260}
          height={584}
          src="figma/xingji-aodaisai/assets/coord-phone-mark-effect.webp"
          imageClassName="left-0 top-[-0.09%] h-[100.86%] w-full"
        />
        <p className="absolute left-[428px] top-[850px] text-[12px] text-[#80808c]">建筑上显示收藏气泡</p>
        <p className="absolute left-[755px] top-[850px] text-[12px] text-[#80808c]">建筑上显示标记光效</p>
        <div className="absolute left-[939px] top-[572px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[1003px] top-[555px] text-[11px] leading-[18px] text-[#617dfa]">
          <p>标记光效</p>
          <p>直观区分类型</p>
        </div>
        <div className="absolute left-[292px] top-[572px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[228px] top-[555px] text-right text-[11px] leading-[18px] text-[#617dfa]">
          <p>收藏气泡</p>
          <p>悬浮于建筑上方</p>
        </div>
      </LongPageSection>

      <LongPageSection height={900} bg="#e8e5f0">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[80px] top-[60px] text-[32px] font-bold leading-none text-[#212126]">公会标记协作</p>
        <p className="absolute left-[80px] top-[102px] font-['Inter',sans-serif] text-[13px] tracking-[0.3em] text-[#80808c]">
          GUILD  MARK  COLLABORATION
        </p>
        <div className="absolute left-[80px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-[#617dfa]" />
        <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
          <p>公会盟主可在地图上设置公会级标记，标记</p>
          <p>信息通过邮件系统推送至全体成员。成员可</p>
          <p>通过邮件一键跳转至标记坐标，实现团队级</p>
          <p>战术信息共享与快速响应。</p>
        </div>
        <PhoneFrame
          left={245}
          top={273}
          width={260}
          height={557}
          src="figma/xingji-aodaisai/assets/coord-phone-guild-mark-map.webp"
          imageClassName="left-0 top-[-4.94%] h-[105.75%] w-full"
        />
        <PhoneFrame
          left={768}
          top={273}
          width={260}
          height={557}
          src="figma/xingji-aodaisai/assets/coord-phone-guild-mail.webp"
          imageClassName="left-0 top-[-4.94%] h-[105.75%] w-full"
        />
        <p className="absolute left-[327px] top-[852px] text-[12px] text-[#8c8c99]">盟主设置公会标记</p>
        <p className="absolute left-[850px] top-[852px] text-[12px] text-[#8c8c99]">成员收到邮件通知</p>
        <p className="absolute left-[621px] top-[502px] text-[32px] text-[#f29933]">→</p>
        <div className="absolute left-[115px] top-[575px] text-right text-[11px] leading-[18px] text-[#617dfa]">
          <p>盟主权限</p>
          <p>设置公会标记</p>
        </div>
        <div className="absolute left-[185px] top-[592px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[1028px] top-[744px] h-[2px] w-[60px] bg-[#6180fa4d]" />
        <div className="absolute left-[1092px] top-[727px] text-[11px] leading-[18px] text-[#617dfa]">
          <p>邮件一键跳转</p>
          <p>快速响应战术</p>
        </div>
        <div className="absolute left-[604px] top-[544px] text-[11px] leading-[18px] text-[#617dfa]">通过邮件进入</div>
      </LongPageSection>

      <LongPageSection height={2010} bg="linear-gradient(180deg, #3847A6 0%, #262E73 100%)">
        <div className="absolute left-[1030px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[1057px] top-[1062px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(115,191,115,0.16)_0%,rgba(115,191,115,0.12)_42%,rgba(115,191,115,0)_72%)]" />
        <div className="absolute left-[-100px] top-[700px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <div className="absolute left-[-73px] top-[1882px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.16)_0%,rgba(97,128,250,0.10)_44%,rgba(97,128,250,0)_74%)]" />
        <p className="absolute left-[77px] top-[60px] text-[32px] font-bold leading-none text-white">设计成果</p>
        <p className="absolute left-[77px] top-[102px] font-['Inter',sans-serif] text-[13px] tracking-[0.3em] text-[#b2bfe5]">DESIGN  OUTCOME</p>
        <div className="absolute left-[77px] top-[130px] h-[3px] w-[60px] rounded-[2px] bg-white" />
        <div className="absolute left-1/2 top-[180px] flex -translate-x-1/2 gap-[93px]">
          {[
            ['6', '核心交互页面'],
            ['4', '收藏分类体系'],
            ['3', '标记类型设计'],
          ].map(([num, label]) => (
            <div key={num} className="relative h-[120px] w-[200px] rounded-[16px] bg-white/[0.08] text-center">
              <p className="font-['Inter',sans-serif] text-[72px] font-bold leading-[92px] text-white">{num}</p>
              <p className="text-[14px] font-medium text-[#b2bfe5]">{label}</p>
            </div>
          ))}
        </div>
        {[
          { left: 797, top: 353, height: 607, offset: 2238 },
          { left: 497, top: 353, height: 608, offset: 319 },
          { left: 197, top: 353, height: 608, offset: 638 },
          { left: 47, top: 993, height: 608, offset: 967 },
          { left: 347, top: 993, height: 608, offset: 1287 },
          { left: 947, top: 993, height: 607, offset: 1601 },
          { left: 647, top: 993, height: 607, offset: 1919 },
        ].map((shot) => (
          <div
            key={`${shot.left}-${shot.top}`}
            className="absolute w-[280px] overflow-hidden"
            style={{ left: shot.left, top: shot.top, height: shot.height }}
          >
            <img
              src={publicUrl('figma/xingji-aodaisai/assets/coord-show-strip.webp')}
              alt=""
              className="absolute top-0 max-w-none"
              style={{ left: -shot.offset, height: shot.height }}
            />
          </div>
        ))}
        <p className="absolute left-[107px] top-[1707px] whitespace-nowrap text-[40px] font-bold text-[#b2bfe5]">以空间化信息设计，赋能 SLG 玩家的战略决策</p>
        <div className="absolute left-[107px] top-[1786px] space-y-[8px] text-[20px] text-[#e5ebf7]">
          {[
            '建立个人收藏 → 公会标记的分层信息架构',
            '通过邮件通知闭环实现团队协作信息同步',
            '地图可视化反馈提升玩家空间认知效率',
          ].map((line) => (
            <div key={line} className="flex items-center gap-[14px]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#f5b34f]" aria-hidden />
              <p>{line}</p>
            </div>
          ))}
        </div>
      </LongPageSection>
    </div>
  );
}

const caseFourAssets = {
  staticBase: 'https://www.figma.com/api/mcp/asset/6be4cbfa-e527-4754-920b-5057f9bace02',
  staticRule: 'https://www.figma.com/api/mcp/asset/4b0d5b0a-a714-4bd1-8e2f-31a67e2a301d',
  staticOld: 'https://www.figma.com/api/mcp/asset/c4c91cb1-a10f-4f03-b901-5f5bdf51ab53',
  popupRule1: 'https://www.figma.com/api/mcp/asset/dca4ebb1-99ba-4a9a-a66a-fef4735b08bc',
  popupRule2: 'https://www.figma.com/api/mcp/asset/7665a2c0-db74-4dc4-b2af-04bf45e1ad1a',
  popupRule3: 'https://www.figma.com/api/mcp/asset/27aa650d-7af5-4697-b120-ea474a34e8b3',
  popupRule4: 'https://www.figma.com/api/mcp/asset/8f808c6d-0ac0-4546-bf39-ceb5c87486ff',
  popupRule5: 'https://www.figma.com/api/mcp/asset/f34b8ee8-0ddb-49c5-ae32-6f4d5dba8642',
  movingTrade: 'https://www.figma.com/api/mcp/asset/94b7c8da-676c-40c0-82ac-833317facf19',
  movingFleet: 'https://www.figma.com/api/mcp/asset/5c0139e2-2641-42fd-845d-6a3ed3c0e6d4',
  minimapNear: 'https://www.figma.com/api/mcp/asset/12ebb2db-7e1b-49f7-aa0f-d76aedfa6409',
  minimapFar: 'https://www.figma.com/api/mcp/asset/5e0a7675-9a8b-4a55-be52-87657ae6996f',
  minimapOld: 'https://www.figma.com/api/mcp/asset/b9e31ae4-f4e4-4655-8f4c-f70498457699',
  minimapCurrent: 'https://www.figma.com/api/mcp/asset/482c88d0-2558-4297-832a-50f1cabc9375',
  minimapFilter: 'https://www.figma.com/api/mcp/asset/11338d5b-2102-47f0-9b1b-c3a5ac02ee32',
};

function CaseFourTitleHero() {
  return (
    <LongPageSection height={900} bg="linear-gradient(180deg, #3847A6 0%, #262E73 100%)">
      <div className="absolute left-[900px] top-[-210px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(245,183,112,0.18)_0%,rgba(245,183,112,0.14)_32%,rgba(245,183,112,0.08)_54%,rgba(245,183,112,0)_76%)]" />
      <div className="absolute left-[-180px] top-[650px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(128,150,255,0.14)_0%,rgba(128,150,255,0.08)_45%,rgba(128,150,255,0)_74%)]" />
      <div className="absolute left-[180px] top-[320px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,239,195,0.7)_0%,rgba(255,231,176,0.36)_18%,rgba(255,221,154,0.16)_36%,rgba(255,255,255,0)_72%)] blur-[2px]" />
      <h2 className="absolute left-[380px] top-[310px] text-[72px] font-black leading-none text-white">
        世界地图交互优化
      </h2>
      <div className="absolute left-[380px] top-[415px] text-[24px] leading-[40px] text-white/80">
        <p>针对 SLG 游戏世界地图中静态物件、动态物件与小地图的交互体验</p>
        <p>进行系统性优化，提升信息获取效率与操作流畅度</p>
      </div>
    </LongPageSection>
  );
}

function CaseFourPainCard({
  y,
  index,
  title,
  body,
}: {
  y: number;
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="absolute left-[560px] h-[132px] w-[560px] rounded-[24px] border border-[#d8dceb] bg-white/90 shadow-[0_18px_38px_-24px_rgba(46,51,71,0.1)]"
      style={{ top: y }}
    >
      <div className="absolute left-[32px] top-[30px] text-[22px] font-semibold leading-[26px] text-[#617dfa]">{index}</div>
      <div className="absolute left-[106px] top-[26px] text-[24px] font-bold leading-[29px] text-[#212126]">{title}</div>
      <p className="absolute left-[106px] top-[68px] w-[360px] text-[15px] leading-[23px] text-[#666675]">{body}</p>
    </div>
  );
}

function CaseFourBackground() {
  return (
    <LongPageSection height={900} bg="#ECECF5">
      <div className="absolute left-[870px] top-[-190px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(204,214,255,0.56)_0%,rgba(204,214,255,0.28)_45%,rgba(204,214,255,0)_76%)]" />
      <div className="absolute left-[-180px] top-[610px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,200,166,0.34)_0%,rgba(245,200,166,0.16)_46%,rgba(245,200,166,0)_76%)]" />
      <LightSectionHeader title="项目背景" eyebrow="PROJECT BACKGROUND" />
      <div className="absolute left-[80px] top-[220px] text-[42px] font-bold leading-[50px] text-[#212126]">
        <p>地图信息变多后，</p>
        <p>开始打断玩家判断。</p>
      </div>
      <p className="absolute left-[84px] top-[346px] w-[420px] text-[16px] leading-[26px] text-[#595966]">
        问题不在于信息不够，而在于弹窗、目标和小地图的反馈方式，逐渐影响玩家操作。
      </p>
      <CaseFourPainCard y={198} index="01" title="遮挡目标" body="静态物件弹窗位置固定，信息会压住模型与判断焦点。" />
      <CaseFourPainCard y={378} index="02" title="追踪断裂" body="动态物件移动时信息无法持续跟随，玩家需要反复点击。" />
      <CaseFourPainCard y={558} index="03" title="导航混乱" body="小地图缩放突兀、入口不清晰，增加误触和理解成本。" />
    </LongPageSection>
  );
}

function CaseFourStrategyCard({
  x,
  index,
  keyword,
  title,
  body,
  accent,
}: {
  x: number;
  index: string;
  keyword: string;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div
      className="absolute top-[444px] h-[286px] w-[300px] rounded-[26px] border border-white/10 bg-[rgba(22,27,37,0.8)] shadow-[0_20px_42px_-26px_rgba(0,0,0,0.16)]"
      style={{ left: x }}
    >
      <div className="absolute left-[28px] top-[28px] text-[24px] font-semibold leading-[29px]" style={{ color: accent }}>
        {index}
      </div>
      <div className="absolute left-[28px] top-[84px] text-[40px] font-bold leading-[46px] text-[#f5f7ff]">{keyword}</div>
      <div className="absolute left-[28px] top-[152px] h-[3px] w-[54px] rounded-[2px]" style={{ backgroundColor: accent }} />
      <div className="absolute left-[28px] top-[182px] text-[18px] font-bold leading-[23px] text-[#f5f7ff]">{title}</div>
      <p className="absolute left-[28px] top-[222px] w-[230px] text-[15px] leading-[25px] text-[#a8afbf]">{body}</p>
    </div>
  );
}

function CaseFourStrategy() {
  return (
    <LongPageSection height={900} bg="linear-gradient(180deg, #1E2027 0%, #111827 100%)">
      <div className="absolute left-[900px] top-[-210px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(242,153,51,0.2)_0%,rgba(242,153,51,0.1)_44%,rgba(242,153,51,0)_78%)]" />
      <div className="absolute left-[-180px] top-[650px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(101,228,196,0.1)_0%,rgba(101,228,196,0.05)_42%,rgba(101,228,196,0)_76%)]" />
      <DarkSectionHeader title="设计策略" eyebrow="DESIGN STRATEGY" />
      <div className="absolute left-[80px] top-[220px] text-[42px] font-bold leading-[50px] text-[#f5f7ff]">
        <p>用三组规则，</p>
        <p>回应三个体验断点。</p>
      </div>
      <p className="absolute left-[84px] top-[344px] w-[430px] text-[16px] leading-[26px] text-[#b4bacb]">
        让信息出现的位置、时机和密度都变得可预期。
      </p>
      <CaseFourStrategyCard x={80} index="01" keyword="避让" title="自适应弹窗布局" body="根据目标屏幕位置调整弹窗方向，覆盖上、下、左、右、中。" accent="#f29933" />
      <CaseFourStrategyCard x={490} index="02" keyword="跟随" title="动态物件信息连续" body="移动目标信息锁定在目标上方；静态目标取消镜头跟随。" accent="#65e4c4" />
      <CaseFourStrategyCard x={900} index="03" keyword="分级" title="小地图 LOD 规则" body="缩放时分层展示信息，并把功能入口从地图操作中独立出来。" accent="#7f96ff" />
    </LongPageSection>
  );
}

function CaseFourStaticPopup() {
  return (
    <LongPageSection height={900} bg="#E8E5F0">
      <div className="absolute left-[-180px] top-[610px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,200,166,0.34)_0%,rgba(245,200,166,0.16)_46%,rgba(245,200,166,0)_76%)]" />
      <div className="absolute left-[870px] top-[-190px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(204,214,255,0.56)_0%,rgba(204,214,255,0.28)_45%,rgba(204,214,255,0)_76%)]" />
      <LightSectionHeader title="静态物件信息弹窗" eyebrow="STATIC  OBJECT  INFO  POPUP" />
      <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
        <p>重新设计基地、国会、城市争霸等静态建筑的信息弹窗，弹窗位置根据目标在屏幕中的位置</p>
        <p>自适应调整，避免遮挡目标模型。同时取消静态目标的镜头跟随，防止快速切换时画面晃动。</p>
      </div>
      <PhoneFrame left={80} top={266} width={258} height={562} src={caseFourAssets.staticOld} imageClassName="left-0 top-0 h-full w-full object-cover" />
      <PhoneFrame left={527} top={266} width={260} height={562} src={caseFourAssets.staticBase} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <PhoneFrame left={811} top={266} width={260} height={562} src={caseFourAssets.staticRule} imageClassName="left-0 top-[-8.3%] h-[108.41%] w-full" />
      <div className="absolute left-[408px] top-[522px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6180fa] text-[24px] text-white">→</div>
      <p className="absolute left-[149px] top-[846px] text-[12px] text-[#80808c]">基地信息弹窗（旧版）</p>
      <p className="absolute left-[597px] top-[846px] text-[12px] text-[#80808c]">基地信息弹窗（新版）</p>
      <p className="absolute left-[881px] top-[846px] text-[12px] text-[#80808c]">弹窗偏下时显示在上方</p>
      <div className="absolute left-[1071px] top-[593px] h-[60px] w-[2px] bg-[#617dfa4d]" />
      <div className="absolute left-[1135px] top-[585px] text-[11px] leading-[18px] text-[#617dfa]">
        <p>信息弹窗跟随</p>
        <p>目标位置自适应</p>
      </div>
      <div className="absolute left-[1135px] top-[629px] text-[11px] leading-[18px] text-[#617dfa]">
        <p>取消镜头跟随</p>
        <p>减少画面晃动</p>
      </div>
    </LongPageSection>
  );
}

function CaseFourPopupRules() {
  const items = [
    { left: 90, title: '目标 偏下', body: ['弹窗显示在', '目标模型上方'], src: caseFourAssets.popupRule1 },
    { left: 330, title: '目标 居中', body: ['弹窗过长时', '可超出屏幕外'], src: caseFourAssets.popupRule2 },
    { left: 570, title: '目标 靠右', body: ['弹窗显示在', '目标模型左方'], src: caseFourAssets.popupRule3 },
    { left: 810, title: '目标 偏上', body: ['弹窗显示在', '目标模型下方'], src: caseFourAssets.popupRule4 },
    { left: 1050, title: '目标 靠左', body: ['弹窗显示在', '目标模型右方'], src: caseFourAssets.popupRule5 },
  ];
  return (
    <LongPageSection height={900} bg="#212126">
      <div className="absolute left-[-180px] top-[650px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(128,150,255,0.12)_0%,rgba(128,150,255,0.06)_42%,rgba(128,150,255,0)_76%)]" />
      <div className="absolute left-[900px] top-[-210px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(242,153,51,0.2)_0%,rgba(242,153,51,0.1)_44%,rgba(242,153,51,0)_78%)]" />
      <DarkSectionHeader title="弹窗自适应规则" eyebrow="ADAPTIVE  POPUP  RULES" />
      <p className="absolute left-[80px] top-[160px] text-[13px] text-[#8c8c99]">核心原则：弹窗始终避让目标模型，确保玩家视线不被遮挡</p>
      <p className="absolute left-[80px] top-[176px] text-[12px] text-[#737380]">静态物件取消镜头跟随 → 防止快速切换多个目标时镜头晃动</p>
      {items.map((item, idx) => (
        <div key={item.title}>
          <div className="absolute top-[232px] h-[140px] w-[140px] rounded-full bg-[#2e303d]" style={{ left: item.left }}>
            <div className="pt-[29px] text-center text-[15px] font-bold text-[#f29933]">{item.title}</div>
            <div className="pt-[18px] text-center text-[13px] leading-[22px] text-[#a6a6b2]">
              <p>{item.body[0]}</p>
              <p>{item.body[1]}</p>
            </div>
          </div>
          <div className="absolute top-[373px] h-[49px] w-[2px] bg-[#5f6787]" style={{ left: item.left + 69 }} />
          <PhoneFrame
            left={60 + idx * 240}
            top={422}
            width={200}
            height={433}
            src={item.src}
            rounded="rounded-[8px]"
            imageClassName={idx === 4 ? 'left-[-2.36%] top-0 h-full w-[102.36%]' : 'left-0 top-0 h-full w-full object-cover'}
          />
        </div>
      ))}
    </LongPageSection>
  );
}

function CaseFourMovingObject() {
  return (
    <LongPageSection height={900} bg="#E8E5F0">
      <div className="absolute left-[-180px] top-[610px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,200,166,0.34)_0%,rgba(245,200,166,0.16)_46%,rgba(245,200,166,0)_76%)]" />
      <div className="absolute left-[870px] top-[-190px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(204,214,255,0.56)_0%,rgba(204,214,255,0.28)_45%,rgba(204,214,255,0)_76%)]" />
      <LightSectionHeader title="动态物件交互" eyebrow="MOVING  OBJECT  INTERACTION" />
      <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
        <p>对移动中的舰队、贸易车队、野外 BOSS 等动态目标的信息弹窗进行优化。弹窗锁定在目标正上</p>
        <p>方并跟随移动，同时增加文本信息显示，确保玩家在追踪过程中始终获得关键信息。</p>
      </div>
      <PhoneFrame left={350} top={269} width={260} height={562} src={caseFourAssets.movingTrade} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <PhoneFrame left={670} top={269} width={260} height={562} src={caseFourAssets.movingFleet} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <div className="absolute left-[170px] top-[419px] text-right text-[11px] leading-[18px] text-[#617dfa]">
        <p>弹窗锁定正上方</p>
        <p>实时跟随移动</p>
      </div>
      <div className="absolute left-[290px] top-[425px] h-[2px] w-[60px] bg-[#617dfa4d]" />
      <div className="absolute left-[994px] top-[486px] text-[11px] leading-[18px] text-[#617dfa]">
        <p>增加文本信息</p>
        <p>提升信息可读性</p>
      </div>
      <div className="absolute left-[930px] top-[494px] h-[60px] w-[2px] bg-[#617dfa4d]" />
      <p className="absolute left-[432px] top-[848px] text-[12px] text-[#80808c]">贸易车队信息弹窗</p>
      <p className="absolute left-[752px] top-[848px] text-[12px] text-[#80808c]">移动舰队镜头跟随</p>
    </LongPageSection>
  );
}

function CaseFourMinimapLod() {
  return (
    <LongPageSection height={900} bg="#212126">
      <div className="absolute left-[-180px] top-[650px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(128,150,255,0.12)_0%,rgba(128,150,255,0.06)_42%,rgba(128,150,255,0)_76%)]" />
      <div className="absolute left-[900px] top-[-210px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(242,153,51,0.2)_0%,rgba(242,153,51,0.1)_44%,rgba(242,153,51,0)_78%)]" />
      <DarkSectionHeader title="小地图 LOD 优化" eyebrow="MINIMAP  LOD  OPTIMIZATION" />
      <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#b2b2bf]">
        <p>引入 LOD（Level of Detail）分级概念，根据缩放层级动态切换地图显示内容。近景显示完</p>
        <p>整建筑细节，远景简化为图标标记，减少视觉噪音，同时加入 LOD 切换过渡动画。</p>
      </div>
      <PhoneFrame left={279} top={248} width={260} height={562} src={caseFourAssets.minimapNear} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <PhoneFrame left={752} top={248} width={260} height={562} src={caseFourAssets.minimapFar} imageClassName="left-0 top-0 h-full w-full object-cover" />
      <div className="absolute left-[112px] top-[485px] text-right text-[11px] leading-[18px] text-[#f29933]">
        <p>近景：完整建筑</p>
        <p>+ 详细信息</p>
      </div>
      <div className="absolute left-[219px] top-[492px] h-[2px] w-[60px] bg-[#f2993366]" />
      <div className="absolute left-[630px] top-[498px] text-[32px] text-[#f29933]">→</div>
      <p className="absolute left-[578px] top-[537px] w-[133px] text-center text-[14px] leading-[24px] text-[#b2b2bf]">LOD 切换过渡动画</p>
      <div className="absolute left-[1075px] top-[458px] text-[11px] leading-[18px] text-[#f29933]">
        <p>远景：图标标记</p>
        <p>+ 简化显示</p>
      </div>
      <div className="absolute left-[1011px] top-[467px] h-[2px] w-[60px] bg-[#f2993366]" />
      <p className="absolute left-[371px] top-[832px] text-[12px] text-[#8c8c99]">LOD 近景层级</p>
      <p className="absolute left-[844px] top-[832px] text-[12px] text-[#8c8c99]">LOD 远景层级</p>
    </LongPageSection>
  );
}

function CaseFourMinimapDetail() {
  const bullets = ['新增回到基地按钮', '新增收藏气泡显示', '新增位置标记功能', '资源筛选复选框', '降低误触风险'];
  return (
    <LongPageSection height={900} bg="#E8E5F0">
      <div className="absolute left-[-180px] top-[610px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(245,200,166,0.34)_0%,rgba(245,200,166,0.16)_46%,rgba(245,200,166,0)_76%)]" />
      <div className="absolute left-[870px] top-[-190px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(204,214,255,0.56)_0%,rgba(204,214,255,0.28)_45%,rgba(204,214,255,0)_76%)]" />
      <LightSectionHeader title="小地图交互细节" eyebrow="MINIMAP  INTERACTION  DETAILS" />
      <div className="absolute left-[80px] top-[155px] text-[14px] leading-[24px] text-[#595966]">
        <p>在小地图中新增多项功能入口与交互优化：</p>
        <p>回到基地按钮、收藏气泡显示、位置标记、资源筛选复选框等，降低误触风险，提升地图导航效率。</p>
      </div>
      <PhoneFrame left={80} top={262} width={260} height={568} src={caseFourAssets.minimapOld} imageClassName="left-0 top-0 h-full w-full object-cover" />
      <PhoneFrame left={488} top={268} width={260} height={562} src={caseFourAssets.minimapCurrent} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <PhoneFrame left={808} top={268} width={260} height={562} src={caseFourAssets.minimapFilter} imageClassName="left-0 top-[-4.72%] h-[104.81%] w-full" />
      <div className="absolute left-[389px] top-[521px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6180fa] text-[24px] text-white">→</div>
      <p className="absolute left-[168px] top-[847px] text-[12px] text-[#80808c]">旧版小地图界面</p>
      <p className="absolute left-[576px] top-[847px] text-[12px] text-[#80808c]">新版小地图界面</p>
      <p className="absolute left-[884px] top-[847px] text-[12px] text-[#80808c]">资源筛选与标记跳转</p>
      {bullets.map((item, index) => (
        <div key={item} className="absolute left-[1100px] flex items-start gap-[8px]" style={{ top: 268 + index * 36 }}>
          <div className="mt-[5px] h-[6px] w-[6px] rounded-full bg-[#617dfa]" />
          <p className="text-[12px] text-[#617dfa]">{item}</p>
        </div>
      ))}
    </LongPageSection>
  );
}

function CaseFourSummary() {
  const cards = [
    { x: 84, y: 360, index: '01', title: '看不清', result: '弹窗避让目标，信息不再挡住判断。', accent: '#7f96ff' },
    { x: 330, y: 504, index: '02', title: '跟不住', result: '动态目标信息保持连续，减少镜头打断。', accent: '#65e4c4' },
    { x: 644, y: 648, index: '03', title: '传不出', result: '地点、坐标、标记可被团队快速同步。', accent: '#f2b86b' },
  ];
  return (
    <LongPageSection height={900} bg="linear-gradient(180deg, #080D18 0%, #101A31 100%)">
      <div className="absolute left-[825px] top-[-260px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(110,132,255,0.16)_0%,rgba(110,132,255,0.08)_46%,rgba(110,132,255,0)_78%)]" />
      <div className="absolute left-[-240px] top-[620px] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(101,228,196,0.12)_0%,rgba(101,228,196,0.05)_42%,rgba(101,228,196,0)_78%)]" />
      <div className="absolute left-[760px] top-0 h-[900px] w-[520px] bg-[#6e84ff0d]" />
      <div className="absolute left-[80px] top-[92px] text-[50px] font-bold leading-[58px] text-[#f5f7ff]">
        <p>最终解决的</p>
        <p>体验问题</p>
      </div>
      <div className="absolute left-[84px] top-[230px] h-[4px] w-[72px] rounded-[2px] bg-[#7f96ff]" />
      <p className="absolute left-[84px] top-[278px] w-[480px] text-[22px] leading-[33px] text-[#aab6d6]">
        世界地图不再只是堆信息，而是让玩家更顺地看、跟、传。
      </p>
      <div className="absolute left-[1020px] top-[68px] text-[56px] font-bold leading-[70px] text-white/[0.1]">
        <p>看不清</p>
        <p>跟不住</p>
        <p>传不出</p>
      </div>
      {cards.map((card) => (
        <div
          key={card.index}
          className="absolute h-[128px] w-[560px] rounded-[26px] border border-white/10 bg-[rgba(16,26,48,0.78)] shadow-[0_18px_34px_-22px_rgba(0,0,0,0.18)]"
          style={{ left: card.x, top: card.y }}
        >
          <div className="absolute left-0 top-0 h-full w-[8px] rounded-[26px]" style={{ backgroundColor: card.accent }} />
          <div className="absolute left-[34px] top-[28px] text-[20px] font-semibold" style={{ color: card.accent }}>{card.index}</div>
          <div className="absolute left-[96px] top-[24px] text-[28px] font-bold leading-[32px] text-[#f5f7ff]">{card.title}</div>
          <p className="absolute left-[96px] top-[70px] text-[18px] leading-[26px] text-[#c7d0ea]">{card.result}</p>
        </div>
      ))}
      <p className="absolute left-[802px] top-[818px] text-[26px] font-bold leading-[33px] text-[#f5f7ff]">
        最终体验从“找信息”变成“用信息”。
      </p>
    </LongPageSection>
  );
}

function WorldMapInteractionCase() {
  return (
    <div className="space-y-10">
      <CaseFourTitleHero />
      <CaseFourBackground />
      <CaseFourStrategy />
      <CaseFourStaticPopup />
      <CaseFourPopupRules />
      <CaseFourMovingObject />
      <CaseFourMinimapLod />
      <CaseFourMinimapDetail />
      <CaseFourSummary />
    </div>
  );
}

function CaseFiveTitleHero() {
  return (
    <LongPageSection height={900} bg="#212126">
      <div className="absolute left-[900px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(97,125,250,0.18)_0%,rgba(97,125,250,0.12)_34%,rgba(97,125,250,0.05)_58%,rgba(97,125,250,0)_76%)]" />
      <div className="absolute left-[-60px] top-[700px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(242,153,51,0.18)_0%,rgba(242,153,51,0.08)_44%,rgba(242,153,51,0)_72%)]" />
      <div className="absolute left-[80px] top-[80px] grid grid-cols-8 gap-x-[12px] gap-y-[12px]">
        {Array.from({ length: 40 }).map((_, index) => (
          <span key={index} className="h-[4px] w-[4px] rounded-full bg-[#617dfa]/35" />
        ))}
      </div>
      <div className="absolute left-[120px] top-[340px] h-[2px] w-[120px] bg-[#617dfa]" />
      <p className="absolute left-[120px] top-[360px] text-[14px] font-normal tracking-[4px] text-[#617dfa]">
        SLG 活动系统 · 交互设计
      </p>
      <h2 className="absolute left-[120px] top-[390px] text-[72px] font-black leading-none tracking-[8px] text-white">
        海军试炼
      </h2>
      <p className="absolute left-[120px] top-[480px] font-['Inter',sans-serif] text-[18px] tracking-[8px] text-white/30">
        NAVAL TRIAL
      </p>
      <p className="absolute left-[120px] top-[520px] text-[16px] text-white/50">
        九重难度递进 × 个人联盟双轨 × 世界地图实战
      </p>
      <div className="absolute left-[120px] top-[570px] h-[3px] w-[60px] bg-[#f29933]" />
    </LongPageSection>
  );
}

function CaseFiveOverview() {
  const cards = [
    {
      icon: '⚡',
      title: '设计挑战',
      body: '活动包含九重难度、个人与联盟双模式、世界地图实战等多层规则，需要让玩家快速理解挑战路径。',
      accent: '#617dfa',
    },
    {
      icon: '🎯',
      title: '设计目标',
      body: '打通“选难度 → 进地图 → 战斗 → 领奖”的完整链路，降低学习成本，同时保留策略深度。',
      accent: '#f29933',
    },
    {
      icon: '👤',
      title: '目标用户',
      body: '面向中重度 SLG 玩家，既追求挑战成就，也需要清晰状态反馈和稳定的协作入口。',
      accent: '#617dfa',
    },
  ];

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="设计概述" eyebrow="DESIGN OVERVIEW" variant="overview" />
      <div className="absolute left-[120px] top-[245px] flex gap-[55px]">
        {cards.map((card) => (
          <div key={card.title} className="relative h-[360px] w-[310px] overflow-hidden rounded-[12px] bg-white px-[28px] py-[28px] shadow-[0_18px_40px_rgba(65,73,120,0.08)]">
            <div className="absolute left-0 top-0 h-[4px] w-full" style={{ backgroundColor: card.accent }} />
            <p className="text-[32px] leading-none">{card.icon}</p>
            <p className="mt-[24px] text-[20px] font-bold text-[#212126]">{card.title}</p>
            <p className="mt-[20px] text-[14px] leading-[24px] text-[#666]">{card.body}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-[120px] top-[731px] flex gap-[29px]">
        {['九重难度', '双轨模式', '世界地图实战', '高配置化', '渐进挑战'].map((tag) => (
          <div key={tag} className="flex h-[36px] w-[185px] items-center justify-center rounded-full bg-[#617dfa14] text-[13px] font-medium text-[#617dfa]">
            {tag}
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CaseFiveSystemFlow() {
  const steps = [
    ['活动入口', 'Entry', '#617dfa'],
    ['难度选择', 'Difficulty', '#f29933'],
    ['模式分流', 'Mode Split', '#617dfa'],
    ['世界地图', 'World Map', '#f29933'],
    ['战斗交互', 'Combat', '#617dfa'],
    ['奖励循环', 'Reward', '#f29933'],
  ];
  const metrics = [
    ['9', '难度等级', '渐进式挑战递进'],
    ['2', '挑战模式', '个人 + 联盟双轨'],
    ['∞', '配置自由度', '全参数后台可配'],
    ['3', '核心闭环', '选择→战斗→奖励'],
  ] as const;
  const modeBranches: [string, number, string][] = [
    ['个人挑战', 359, '#617dfa'],
    ['联盟挑战', 579, '#f29933'],
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <div className="absolute left-[120px] top-[60px] h-[3px] w-[60px] bg-[#617dfa]" />
      <p className="absolute left-[120px] top-[76px] text-[32px] font-bold leading-none text-white">系统架构</p>
      <p className="absolute left-[120px] top-[120px] font-['Inter',sans-serif] text-[13px] tracking-[3px] text-white/40">
        SYSTEM ARCHITECTURE
      </p>
      <div className="absolute left-[120px] top-[271px] flex items-center">
        {steps.map(([title, en, color], index) => (
          <div key={title} className="flex items-center">
            <div
              className="flex h-[70px] w-[130px] flex-col items-center justify-center rounded-[10px] border-[1.5px] text-center"
              style={{
                backgroundColor: `${color}26`,
                borderColor: `${color}80`,
              }}
            >
              <p className="text-[14px] font-bold text-white">{title}</p>
              <p className="mt-[8px] font-['Inter',sans-serif] text-[10px] text-white/50">{en}</p>
            </div>
            {index < steps.length - 1 ? (
              <div className="mx-[10px] flex items-center">
                <div className="h-[2px] w-[32px] bg-white/25" />
                <div className="h-0 w-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-white/35 border-t-transparent" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="absolute left-[548px] top-[341px] h-[40px] w-[2px] bg-white/20" />
      <div className="absolute left-[440px] top-[379px] h-[2px] w-[218px] bg-white/20" />
      <div className="absolute left-[438px] top-[379px] h-[25px] w-[2px] bg-white/20" />
      <div className="absolute left-[658px] top-[379px] h-[25px] w-[2px] bg-white/20" />
      {modeBranches.map(([label, left, color]) => (
        <div
          key={label}
          className="absolute top-[406px] flex h-[44px] w-[160px] items-center justify-center rounded-[8px] border text-[14px] font-medium"
          style={{
            left,
            color,
            borderColor: `${color}59`,
            backgroundColor: `${color}1A`,
          }}
        >
          {label}
        </div>
      ))}
      <div className="absolute left-[120px] top-[560px] flex">
        {metrics.map(([num, title, sub], index) => (
          <div key={title} className="relative w-[260px]">
            {index > 0 ? <div className="absolute left-[67px] top-[10px] h-[80px] w-px bg-white/[0.08]" /> : null}
            <div className="pl-[97px]">
              <p className="font-['Inter',sans-serif] text-[48px] font-semibold leading-none text-[#617dfa]">{num}</p>
              <p className="mt-[16px] text-[16px] font-bold text-white">{title}</p>
              <p className="mt-[10px] text-[12px] text-white/40">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CaseFivePhoneShot({
  src,
  left,
  top,
  width,
  height,
  caption,
  dark = false,
  imageHeight,
  imageTop,
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  caption?: string;
  dark?: boolean;
  imageHeight?: string;
  imageTop?: string;
}) {
  return (
    <>
      <div
        className={`${dark ? 'bg-[#111]' : 'bg-[#151515]'} absolute overflow-hidden rounded-[16px] shadow-[0_22px_46px_rgba(20,24,38,0.18)]`}
        style={{ left, top, width, height }}
      >
        {imageHeight || imageTop ? (
          <img
            src={src}
            alt=""
            className="absolute left-0 w-full max-w-none"
            style={{
              top: imageTop ?? 0,
              height: imageHeight ?? '100%',
            }}
          />
        ) : (
          <img src={src} alt="" className="h-full w-full object-cover" />
        )}
      </div>
      {caption ? (
        <p className="absolute text-center text-[12px] font-medium text-[#737373]" style={{ left, top: top + height + 20, width }}>
          {caption}
        </p>
      ) : null}
    </>
  );
}

function CaseFiveArrowLabel({ left, top, label, color = '#617dfa' }: { left: number; top: number; label: string; color?: string }) {
  return (
    <div className="absolute" style={{ left, top }}>
      <p className="absolute left-[5px] top-[-20px] whitespace-nowrap text-[10px]" style={{ color }}>
        {label}
      </p>
      <div className="h-[2px] w-[49px]" style={{ backgroundColor: color }} />
      <div
        className="absolute left-[45px] top-[-3px] h-0 w-0 border-b-[4px] border-l-[8px] border-t-[4px] border-b-transparent border-t-transparent"
        style={{ borderLeftColor: color }}
      />
    </div>
  );
}

function CaseFiveInfoCard({
  title,
  body,
  icon,
  accent = '#617dfa',
  left,
  top,
  width = 400,
  height = 100,
  dark = false,
}: {
  title: string;
  body: React.ReactNode;
  icon?: string;
  accent?: string;
  left: number;
  top: number;
  width?: number;
  height?: number;
  dark?: boolean;
}) {
  const contentWidth = width - 80;
  return (
    <div
      className={`absolute overflow-hidden rounded-[10px] ${dark ? 'bg-[#2c2c31]' : 'bg-white'}`}
      style={{ left, top, width, height }}
    >
      <div className="absolute left-0 top-0 h-full w-[4px]" style={{ backgroundColor: accent }} />
      {icon ? <img src={icon} alt="" className="absolute left-[20px] top-[14px] h-[24px] w-[24px]" /> : <div className="absolute left-[20px] top-[18px] h-[12px] w-[12px] rounded-full" style={{ backgroundColor: accent }} />}
      <p
        className={`absolute left-[60px] top-[14px] whitespace-normal break-words text-[15px] font-bold leading-[18px] ${dark ? 'text-white' : 'text-[#212126]'}`}
        style={{ width: contentWidth }}
      >
        {title}
      </p>
      <div
        className={`absolute left-[60px] top-[42px] whitespace-normal break-words text-[12px] leading-[20px] ${dark ? 'text-white/45' : 'text-[#737373]'}`}
        style={{ width: contentWidth }}
      >
        {body}
      </div>
    </div>
  );
}

function CaseFiveDifficultySelection() {
  const states = [
    ['已解锁', '可选择', '#617dfa'],
    ['已选中', '高亮+详情', '#f29933'],
    ['已通关', '完成标记', '#5bcb76'],
    ['未解锁', '灰色置灰', '#8b8b95'],
  ];
  const difficultyCards = [
    { border: false, glow: false, check: false, locked: false, valueColor: '#263b4d', imageClassName: '' },
    { border: true, glow: true, check: false, locked: false, valueColor: '#263b4d', imageClassName: '' },
    { border: false, glow: false, check: true, locked: false, valueColor: '#263b4d', imageClassName: '' },
    { border: false, glow: false, check: false, locked: true, valueColor: '#445765', imageClassName: 'brightness-[0.68] saturate-[0.7]' },
  ] as const;

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="难度选择系统" eyebrow="DIFFICULTY SELECTION" accent="#f29933" />
      <CaseFivePhoneShot src={caseFiveAssets.difficultyPre} left={120} top={206} width={240} height={519} caption="初始状态 · 自动定位" imageHeight="104.76%" imageTop="-4.79%" />
      <CaseFivePhoneShot src={caseFiveAssets.difficultySelected} left={441} top={205} width={240} height={520} caption="选中状态 · 挑战详情" />
      <CaseFiveArrowLabel left={374} top={591} label="点击选择" />
      <p className="absolute left-[783px] top-[243px] text-[18px] font-bold text-[#212126]">难度卡片状态机</p>
      <div className="absolute left-[783px] top-[283px] flex w-[482px]">
        {states.map(([title, sub, color], index) => (
          <div key={title} className="relative w-[114px]">
            {index < states.length - 1 ? <div className="absolute left-[14px] top-[29px] h-[2px] w-[94px] rounded-[1px]" style={{ backgroundColor: color }} /> : null}
            <div className="absolute left-0 top-[26px] h-[12px] w-[12px] rounded-full" style={{ backgroundColor: color }} />
            <p className="absolute left-0 top-[42px] text-[14px] font-semibold" style={{ color }}>{title}</p>
            <p className="absolute left-0 top-[61px] text-[11px] leading-[13px] text-[#b8bcc8]">{sub}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-[783px] top-[363px] flex gap-[14px]">
        {difficultyCards.map((card, index) => (
          <div
            key={states[index][0]}
            className="relative h-[125px] w-[100px] overflow-hidden rounded-[10px] bg-[#d5eef4] text-center"
            style={{
              border: card.border ? '2px solid #fdb915' : '0',
              boxShadow: card.glow ? '0 0 10px #ffe45e' : undefined,
              backgroundColor: card.locked ? '#a8bbc3' : '#d5eef4',
            }}
          >
            <img src={caseFiveAssets.difficultyCardTop} alt="" className="absolute left-0 top-0 h-[80px] w-full" />
            {card.check ? <img src={caseFiveAssets.difficultyCardCheck} alt="" className="absolute left-[5px] top-[5px] h-[20px] w-[27px]" /> : null}
            <img
              src={caseFiveAssets.difficultyCardImage}
              alt=""
              className={`absolute left-[15.4px] top-[19.2px] h-[52px] w-[74.9px] object-cover ${card.imageClassName}`}
            />
            {card.locked ? <img src={caseFiveAssets.difficultyCardLocked} alt="" className="absolute left-0 top-0 h-[124.8px] w-[100px]" /> : null}
            <p className={`absolute left-0 top-[80px] flex h-[20px] w-full items-center justify-center text-[12px] font-semibold ${card.locked ? 'text-[#445765]' : 'text-[#263b4d]'}`}>难度</p>
            <div className="absolute left-[32px] top-[95.5px] h-[25px] w-[38px]">
              <img src={caseFiveAssets.difficultyCardStar} alt="" className={`absolute left-0 top-[2px] h-[21px] w-[21px] ${card.locked ? 'opacity-70 saturate-[0.85]' : ''}`} />
              <p className="absolute left-[19px] top-[5.2px] text-[12px] font-semibold" style={{ color: card.valueColor }}>
                X5
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="absolute left-[783px] top-[591px] text-[16px] font-bold text-[#212126]">设计要点</p>
      <div className="absolute left-[783px] top-[621px] w-[480px] text-[13px] leading-[26px] text-[#666]">
        <p>• 进入页面自动定位最新解锁难度，减少选择成本</p>
        <p>• 九个等级渐进排列，已通关项展示完成标记</p>
        <p>• 未解锁难度卡片灰度处理，附提示文案引导</p>
        <p>• 图标、难度名称、奖励预览均支持后台配置</p>
      </div>
    </LongPageSection>
  );
}

function CaseFivePersonalFlow() {
  const flowOffsetX = 20;
  const steps = [
    { num: '01', title: '选择难度', desc: '自动定位\n最新解锁', src: caseFiveAssets.personalSelect, top: 290, height: 455 },
    { num: '02', title: '确认出战', desc: '二次确认\n不可更改', src: caseFiveAssets.personalConfirm, top: 290, height: 452, imageHeight: '105.25%', imageTop: '-5.28%' },
    { num: '03', title: '进入地图', desc: '镜头跳转\n定位教官', src: caseFiveAssets.mapPanel, top: 286, height: 455 },
    { num: '04', title: '战斗领奖', desc: '击败教官\n领取奖励', src: caseFiveAssets.rewardFlow, top: 286, height: 456, imageHeight: '104.33%', imageTop: '-4.8%' },
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <CaseFiveSectionHeader title="个人挑战流程" eyebrow="PERSONAL CHALLENGE FLOW" theme="dark" />
      <p className="absolute left-[120px] top-[150px] text-[14px] text-white/45">从选择难度到领取奖励，四步完成完整挑战闭环</p>
      {steps.map((step, index) => {
        const left = 90 + flowOffsetX + index * 270;
        return (
          <div key={step.num}>
            <p className="absolute top-[200px] font-['Inter',sans-serif] text-[36px] font-semibold text-[#617dfa]/30" style={{ left }}>{step.num}</p>
            <p className="absolute top-[208px] text-[16px] font-bold text-white" style={{ left: left + 50 }}>{step.title}</p>
            <p className="absolute top-[235px] whitespace-pre-line text-[11px] leading-[18px] text-white/40" style={{ left: left + 50 }}>{step.desc}</p>
            {index < steps.length - 1 ? <CaseFiveArrowLabel left={left + 220} top={220} label="" color="rgba(97,125,250,0.3)" /> : null}
            <CaseFivePhoneShot src={step.src} left={left} top={step.top} width={210} height={step.height} dark imageHeight={step.imageHeight} imageTop={step.imageTop} />
          </div>
        );
      })}
      <div className="absolute top-[770px] h-px w-[980px] bg-[#617dfa]/15" style={{ left: 90 + flowOffsetX }} />
      <p className="absolute top-[830px] w-[900px] text-[13px] text-white/50" style={{ left: 90 + flowOffsetX }}>
        整个流程强调<span className="font-black text-white">不可逆选择设计</span>：确认出战后难度锁定，引导玩家认真思考策略，提升决策的仪式感与紧张感。
      </p>
    </LongPageSection>
  );
}

function CaseFiveConfirmationSafety() {
  const cards = [
    ['不可逆提示', '明确告知“选择后不可更改”，强化决策仪式感', caseFiveAssets.iconWarning],
    ['双按钮对比', '取消按钮弱化处理，确认按钮高亮引导，降低误操作率', caseFiveAssets.iconButtons],
    ['信息前置', '弹窗内展示已选难度与预期挑战内容，帮助玩家做最终确认', caseFiveAssets.iconInfo],
  ];

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="确认机制与安全设计" eyebrow="CONFIRMATION & SAFETY" accent="#f29933" />
      <CaseFivePhoneShot src={caseFiveAssets.confirmBig} left={120} top={152} width={280} height={605} imageHeight="104.85%" imageTop="-4.82%" />
      {cards.map(([title, body, icon], index) => {
        const top = 240 + index * 130;
        return (
          <div key={title}>
            <div className="absolute left-[410px] top-[300px] h-px w-[60px] bg-[#f29933]/40" style={{ top: top + 60 }} />
            <div className="absolute left-[406px] h-[8px] w-[8px] rounded-full bg-[#f29933]/80" style={{ top: top + 56 }} />
            <CaseFiveInfoCard title={title} body={<p>{body}</p>} icon={icon} accent="#f29933" left={490} top={top} />
          </div>
        );
      })}
      <p className="absolute left-[120px] top-[776px] text-[16px] font-bold text-[#212126]">为什么需要二次确认？</p>
      <p className="absolute left-[120px] top-[802px] w-[760px] text-[13px] leading-[24px] text-[#737373]">
        海军试炼采用“选定即锁定”机制，每个难度仅一次挑战机会。通过二次确认弹窗，引导玩家在出战前认真评估自身实力与难度匹配度，减少因误触导致的负面体验，同时增强决策重量感。
      </p>
    </LongPageSection>
  );
}

function CaseFiveQuickAccess() {
  const cards = [
    ['快捷按钮组', '一键跳转教官位置，减少地图寻找成本'],
    ['镜头自动跳转', '确认出战后镜头自动移至先锋教官所在区域'],
    ['任务进度浮层', '右侧常驻显示当前挑战任务完成进度'],
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <CaseFiveSectionHeader title="野外快捷入口" eyebrow="QUICK ACCESS" theme="dark" />
      <CaseFivePhoneShot src={caseFiveAssets.quickAccess} left={120} top={200} width={300} height={650} />
      <div className="absolute left-[512px] top-[200px] w-[768px] text-[13px] leading-[normal] text-white/50">
        <p>{`野外地图作为战斗载体，加入"快捷入口"，可实现"镜头跳转 + 快捷定位 + 浮层引导"三重设计，`}</p>
        <p>确保玩家从选择难度到找到目标教官的路径最短化。</p>
      </div>
      {cards.map(([title, body], index) => (
        <CaseFiveInfoCard key={title} title={title} body={<p>{body}</p>} accent="#f29933" left={512} top={367 + index * 131} width={340} height={83} dark />
      ))}
      <div className="absolute left-[204px] top-[692px] h-px w-[308px] bg-[#617dfa]/35" />
    </LongPageSection>
  );
}

function CaseFiveFlatIcon({ type }: { type: 'portrait' | 'sword' | 'power' | 'pin' | 'gift' }) {
  const common = 'h-[20px] w-[20px] text-[#f2a23a]';

  if (type === 'portrait') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 15l3-3 2 2 2-3 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'sword') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M14 5h5v5L9 20l-5-5L14 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 12l-4 4M7 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'power') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'pin') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M12 21s6-6.2 6-11a6 6 0 10-12 0c0 4.8 6 11 6 11z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M4 10h16v10H4V10zM6 6h12v4H6V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 6v14M8 6c-1.4-2 1.2-4 4 0M16 6c1.4-2-1.2-4-4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CaseFiveInstructorSystem() {
  const configs = [
    ['portrait', '教官立绘', '后台配置不同难度对应的教官形象'],
    ['sword', '教官等级', '战力数值随难度递增，明确挑战门槛'],
    ['power', '战力展示', '直观显示教官实力，辅助玩家判断'],
    ['pin', '地图坐标', '教官在世界地图的固定刷新位置'],
    ['gift', '掉落预览', '击败后可获得的奖励物品列表'],
  ];
  const flow = ['点击教官 → 弹出信息面板', '查看教官战力与掉落预览', '选择“攻击”或“集结”', '进入战斗 / 等待队友响应'];

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="先锋教官系统" eyebrow="PIONEER INSTRUCTOR" accent="#f29933" />
      <p className="absolute left-[120px] top-[194px] text-[18px] font-bold text-[#212126]">可配置元素</p>
      {configs.map(([icon, title, body], index) => (
        <div key={title} className="absolute left-[120px] flex items-center" style={{ top: 244 + index * 70 }}>
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#f2a23a]/25 bg-[#f2a23a]/18 shadow-[0_8px_18px_rgba(242,162,58,0.12)]">
            <CaseFiveFlatIcon type={icon as 'portrait' | 'sword' | 'power' | 'pin' | 'gift'} />
          </div>
          <div className="ml-[16px]">
            <p className="text-[14px] font-bold text-[#212126]">{title}</p>
            <p className="mt-[6px] text-[12px] text-[#808080]">{body}</p>
          </div>
        </div>
      ))}
      {[325, 395, 465].map((top) => (
        <div key={top} className="absolute left-[410px] h-px w-[80px] bg-[#f29933]/15" style={{ top }} />
      ))}
      <CaseFivePhoneShot src={caseFiveAssets.instructorPanel} left={500} top={193} width={280} height={607} />
      <p className="absolute left-[840px] top-[194px] text-[18px] font-bold text-[#212126]">交互流程</p>
      {flow.map((text, index) => (
        <div key={text} className="absolute left-[840px] flex items-center" style={{ top: 244 + index * 50 }}>
          <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#f29933] font-['Inter',sans-serif] text-[12px] text-white">{index + 1}</span>
          <p className="ml-[12px] text-[13px] text-[#666]">{text}</p>
        </div>
      ))}
      {[270, 320, 370].map((top) => (
        <div key={top} className="absolute left-[852px] h-[22px] w-px bg-[#f29933]/20" style={{ top }} />
      ))}
      <div className="absolute left-[1060px] top-[740px] grid grid-cols-5 gap-[11px] opacity-80">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="h-[3px] w-[3px] rounded-full bg-[#f29933]/45" />
        ))}
      </div>
    </LongPageSection>
  );
}

function CaseFiveAllianceChallenge() {
  const features = [
    ['联盟准入', '未加入联盟时，联盟挑战 Tab 灰色不可选，引导加入', caseFiveAssets.iconEntry, '#617dfa'],
    ['公会怪物', '盟主/官员在地图放置怪物，成员协力击败', caseFiveAssets.iconMonster, '#f29933'],
    ['协同战斗', '支持集结攻击，多人同时对同一目标发起进攻', caseFiveAssets.iconRoute, '#617dfa'],
    ['联盟排名', '联盟维度统计挑战成绩，激发组织荣誉感', caseFiveAssets.iconRank, '#f29933'],
  ];

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="联盟挑战模式" eyebrow="ALLIANCE CHALLENGE" accent="#f29933" />
      <CaseFivePhoneShot src={caseFiveAssets.allianceNo} left={120} top={193} width={240} height={519} caption="未加入联盟" imageHeight="104.76%" imageTop="-4.79%" />
      <CaseFivePhoneShot src={caseFiveAssets.allianceYes} left={440} top={192} width={240} height={520} caption="已加入联盟" />
      <CaseFiveArrowLabel left={373} top={467} label="点击选择" />
      <p className="absolute left-[760px] top-[225px] text-[18px] font-bold text-[#212126]">联盟模式特性</p>
      {features.map(([title, body, icon, accent], index) => (
        <CaseFiveInfoCard key={title} title={title} body={<p>{body}</p>} icon={icon} accent={accent} left={760} top={275 + index * 105} width={420} height={85} />
      ))}
      <div className="absolute left-[72px] top-[789px] flex h-[70px] w-[1136px] items-center rounded-[18px] bg-white/80 px-[20px] text-[18px] font-semibold leading-[28px] text-[#212126]/50">
        个人与联盟双轨并行设计，非联盟玩家不受影响，联盟玩家获得额外社交玩法，两种模式共享同一套难度体系与奖励逻辑，降低理解成本。
      </div>
    </LongPageSection>
  );
}

function CaseFiveAllianceMonster() {
  const flow = [
    ['选择挑战等级', '在同盟挑战的页面里选择当前可挑战的等级'],
    ['野外布置怪物', '选中未完成的挑战任务，跳转至野外布置怪物模型'],
    ['公会集结怪物', '召集公会成员前往怪物坐标位置'],
    ['完成联盟挑战', '击败怪物后模型消失'],
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <CaseFiveSectionHeader title="联盟怪物" eyebrow="ALLIANCE MONSTER" theme="dark" />
      <p className="absolute left-[123px] top-[193px] text-[18px] font-bold text-white">流程逻辑</p>
      {flow.map(([title, body], index) => (
        <div key={title} className="absolute left-[123px]" style={{ top: 233 + index * 110 }}>
          <span className="absolute left-0 top-0 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#617dfa] font-['Inter',sans-serif] text-[14px] font-semibold text-white">{index + 1}</span>
          {index < flow.length - 1 ? <div className="absolute left-[14px] top-[30px] h-[75px] w-px bg-[#617dfa]/15" /> : null}
          <p className="absolute left-[44px] top-[2px] w-[180px] text-[15px] font-bold text-white">{title}</p>
          <p className="absolute left-[44px] top-[28px] w-[190px] text-[12px] leading-[20px] text-white/40">{body}</p>
        </div>
      ))}
      <CaseFivePhoneShot src={caseFiveAssets.monsterPlace} left={500} top={166} width={280} height={607} caption="怪物布置操作" dark />
      <CaseFiveArrowLabel left={798} top={464} label="布置完成" color="#f29933" />
      <CaseFivePhoneShot src={caseFiveAssets.monsterInfo} left={882} top={166} width={280} height={607} caption="怪物信息面板" dark />
    </LongPageSection>
  );
}

function CaseFiveRewardSystem() {
  const logic = [
    ['难度分 Tab', '每个难度对应独立奖励页签，清晰展示各级别回报差异'],
    ['预览驱动挑战', '先展示奖励再挑战，用预期回报激发挑战动机'],
    ['领取状态区分', '已领/未领/不可领三态视觉分明，减少认知负担'],
    ['通关奖励', '全难度通关额外奖励，为高水平玩家提供终极目标'],
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <CaseFiveSectionHeader title="奖励系统" eyebrow="REWARD SYSTEM" theme="dark" />
      <CaseFivePhoneShot src={caseFiveAssets.rewardPreview} left={120} top={194} width={260} height={562} caption="奖励预览" dark imageHeight="104.81%" imageTop="-4.9%" />
      <CaseFivePhoneShot src={caseFiveAssets.rewardClaimed} left={440} top={193} width={260} height={563} caption="已领取状态" dark imageHeight="104.62%" imageTop="-4.71%" />
      <CaseFiveArrowLabel left={384} top={436} label="领取" color="#f29933" />
      <p className="absolute left-[836px] top-[232px] text-[18px] font-bold text-white">奖励设计逻辑</p>
      {logic.map(([title, body], index) => (
        <div key={title} className="absolute left-[836px]" style={{ top: 286 + index * 100 }}>
          <span className="absolute left-0 top-[5px] h-[10px] w-[10px] rounded-full bg-[#617dfa]" />
          {index < logic.length - 1 ? <span className="absolute left-[5px] top-[18px] h-[82px] w-px bg-[#617dfa]/15" /> : null}
          <p className="ml-[24px] text-[15px] font-bold text-white">{title}</p>
          <p className="ml-[24px] mt-[10px] w-[240px] text-[12px] leading-[22px] text-white/45">{body}</p>
        </div>
      ))}
    </LongPageSection>
  );
}

function CaseFiveRecord() {
  const cards = [
    ['挑战历史', '记录每次挑战的难度、结果、用时，帮助玩家复盘策略', caseFiveAssets.iconHistory, '#617dfa'],
    ['成就展示', '累计通关次数、最高难度等数据，激发挑战成就感', caseFiveAssets.iconMedal, '#f29933'],
    ['进度总览', '各难度通关状态一目了然，明确下一步挑战方向', caseFiveAssets.iconProgress, '#617dfa'],
    ['战场回顾', '公会战场数据记录，展示联盟协作战果', caseFiveAssets.iconBattle, '#f29933'],
  ];

  return (
    <LongPageSection height={900} bg="#e8e5f0">
      <CaseFiveSectionHeader title="战绩记录" eyebrow="CHALLENGE RECORD" accent="#f29933" />
      <CaseFivePhoneShot src={caseFiveAssets.recordEmpty} left={120} top={195} width={260} height={561} caption="挑战详情记录（空状态）" imageHeight="105%" imageTop="-4.73%" />
      <CaseFivePhoneShot src={caseFiveAssets.recordList} left={437} top={195} width={260} height={563} caption="挑战详情记录" />
      <p className="absolute left-[813px] top-[238px] text-[18px] font-bold text-[#212126]">数据呈现设计</p>
      {cards.map(([title, body, icon, accent], index) => (
        <CaseFiveInfoCard key={title} title={title} body={<p>{body}</p>} icon={icon} accent={accent} left={813} top={288 + index * 105} width={380} height={85} />
      ))}
    </LongPageSection>
  );
}

function CaseFivePrinciples() {
  const cards = [
    ['01', '高配置化架构', 'Highly Configurable', '难度数量、教官形象、任务内容、奖励配置均支持后台热更新，策划团队无需客户端发版即可灵活调整活动参数，大幅提升运营效率。', '#617dfa'],
    ['02', '双轨并行体验', 'Dual-Track Design', '个人挑战与联盟挑战共享底层系统但独立运作，非联盟玩家不受限制，联盟玩家获得社交增值。两种模式的复用减少了学习成本，同时满足不同社交偏好的用户需求。', '#f29933'],
    ['03', '渐进式挑战设计', 'Progressive Challenge', '九重难度形成清晰的成长阶梯，“选定即锁定”机制赋予每次挑战策略权重，从难度选择到战斗领奖的完整闭环设计让玩家在每一轮循环中感受到成长与成就。', '#617dfa'],
  ];

  return (
    <LongPageSection height={900} bg="#212126">
      <CaseFiveSectionHeader title="设计原则" eyebrow="DESIGN PRINCIPLES" theme="dark" />
      <div className="absolute left-[120px] top-[196px] flex gap-[40px]">
        {cards.map(([num, title, en, body, accent]) => (
          <div key={num} className="relative h-[560px] w-[320px] overflow-hidden rounded-[16px] border bg-white/[0.04] px-[31px] pt-[156px]" style={{ borderColor: `${accent}26` }}>
            <p className="absolute left-[19px] top-[19px] font-['Inter',sans-serif] text-[120px] font-semibold leading-none" style={{ color: `${accent}0f` }}>{num}</p>
            <p className="text-[18px] font-semibold" style={{ color: accent }}>{num}</p>
            <div className="mt-[14px] h-[3px] w-[40px]" style={{ backgroundColor: accent }} />
            <p className="mt-[16px] text-[24px] font-black text-white">{title}</p>
            <p className="mt-[10px] font-['Inter',sans-serif] text-[12px] tracking-[2px]" style={{ color: `${accent}99` }}>{en}</p>
            <p className="mt-[28px] text-[14px] leading-[26px] text-white/55">{body}</p>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CaseFiveOutcome() {
  return (
    <LongPageSection height={900} bg="linear-gradient(158deg, #334799 0%, #4d66d9 36%, #617dfa 73%)">
      <div className="absolute left-[850px] top-[-80px] h-[400px] w-[400px] rounded-full bg-white/10" />
      <div className="absolute left-[-50px] top-[650px] h-[250px] w-[250px] rounded-full bg-white/10" />
      <CaseFiveSectionHeader title="设计成果" eyebrow="DESIGN OUTCOME" theme="dark" accent="rgba(255,255,255,0.6)" variant="outcome" />
      <div className="absolute left-[121px] top-[182px] h-[6px] w-[6px] rounded-full bg-white/55" />
      <p className="absolute left-[136px] top-[176px] w-[960px] text-[14px] leading-[24px] text-white/72">
        完成难度选择、个人挑战、联盟挑战、先锋教官、奖励预览、战绩记录等核心系统的交互设计。
      </p>
      <div className="absolute left-[121px] top-[211px] h-[6px] w-[6px] rounded-full bg-white/55" />
      <p className="absolute left-[136px] top-[205px] w-[960px] text-[14px] leading-[24px] text-white/72">
        全链路闭环体验：选择难度 → 确认出战 → 地图定位 → 战斗交互 → 领取奖励。
      </p>
      <div className="absolute left-[120px] top-[252px]">
        <div className="h-[180px] w-[136px] rounded-[24px] border border-white/10 bg-white/[0.09] px-[22px] py-[42px] shadow-[0_14px_30px_rgba(20,24,38,0.08)]">
          <p className="font-['Inter',sans-serif] text-[36px] font-semibold leading-none text-white">3+</p>
          <p className="mt-[12px] text-[16px] font-bold text-white/92">核心界面</p>
          <p className="mt-[7px] text-[12px] text-white/52">完成交付</p>
        </div>
      </div>
      <CaseFivePhoneShot src={caseFiveAssets.outcomePersonal} left={300} top={252} width={280} height={607} dark />
      <CaseFivePhoneShot src={caseFiveAssets.outcomeDetail} left={612} top={252} width={280} height={607} dark />
      <CaseFivePhoneShot src={caseFiveAssets.outcomeAlliance} left={924} top={252} width={280} height={607} dark />
      <div className="absolute left-[120px] top-[810px] h-px w-[1040px] bg-white/10" />
    </LongPageSection>
  );
}

function GeneralTrialCase() {
  return (
    <div className="space-y-10">
      <CaseFiveTitleHero />
      <CaseFiveOverview />
      <CaseFiveSystemFlow />
      <CaseFiveDifficultySelection />
      <CaseFivePersonalFlow />
      <CaseFiveConfirmationSafety />
      <CaseFiveQuickAccess />
      <CaseFiveInstructorSystem />
      <CaseFiveRewardSystem />
      <CaseFiveAllianceChallenge />
      <CaseFiveAllianceMonster />
      <CaseFiveRecord />
      <CaseFiveOutcome />
    </div>
  );
}

function EmbermineHero() {
  return (
    <LongPageSection height={900} bg="linear-gradient(180deg,#10071e 0%,#0b0614 100%)">
      <div className="absolute left-[700px] top-[-210px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(244,120,32,0.14)_0%,rgba(244,120,32,0.06)_42%,rgba(244,120,32,0)_72%)]" />
      <div className="absolute left-[80px] top-[180px] h-[360px] w-[840px] rounded-[32px] border border-white/[0.04] bg-[rgba(255,255,255,0.02)]" />
      <p className="absolute left-[88px] top-[408px] text-[72px] font-black leading-none tracking-[2px] text-white">燃海矿区</p>
      <p className="absolute left-[92px] top-[495px] font-['Inter',sans-serif] text-[18px] font-bold tracking-[5px] text-[#f47820]">
        EMBERMINE BATTLEGROUND
      </p>
      <div className="absolute left-[88px] top-[540px] h-[4px] w-[86px] rounded-[2px] bg-[#f47820]" />
      <p className="absolute left-[88px] top-[572px] text-[16px] text-[#d9d9de]">30分钟限时PvP策略玩法 · 交互设计全流程解析</p>
      <div className="absolute left-[1060px] top-[780px] flex gap-[13px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="h-[3px] w-[3px] rounded-full bg-white/55" />
        ))}
      </div>
    </LongPageSection>
  );
}

function EmbermineOverview() {
  const chips = ['多阶段节奏', '资源闭环', '技能成长', '实时对抗', '高配置化', '多入口导航'] as const;
  const cards = [
    [
      '01',
      '设计挑战',
      ['玩家要在限时战场中同时判断阶段、矿脉价值、队列、', '迁城和奖励。难点不是堆信息，而是让系统主', '动告诉玩家下一步。'],
      '#f47820',
      'rgba(244,120,32,0.12)',
      'rgba(244,120,32,0.28)',
    ],
    [
      '02',
      '设计目标',
      ['拆解为 报名→准备→搜索→采集→结算 的可感知闭环。'],
      '#617dfa',
      'rgba(97,125,250,0.12)',
      'rgba(97,125,250,0.3)',
    ],
    [
      '03',
      '目标用户',
      ['中重度 SLG 玩家：追求效率与协作，关注操作成', '本、战斗反馈与奖励确定性。'],
      '#4dc7a6',
      'rgba(77,199,166,0.1)',
      'rgba(77,199,166,0.28)',
    ],
  ] as const;

  return (
    <LongPageSection height={920} bg="#130a21">
      <p className="absolute left-[82px] top-[86px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.28em] text-[#f47820]">
        DESIGN OVERVIEW
      </p>
      <p className="absolute left-[80px] top-[124px] text-[46px] font-bold leading-none text-white">设计概述</p>
      <div className="absolute left-[80px] top-[182px] h-[4px] w-[74px] rounded-full bg-[#f47820]" />
      <div className="absolute left-[80px] top-[236px] w-[1108px] text-[17px] leading-[32px] text-[#bbb9c7]">
        <p>燃海矿区是一个限时 PvP 策略活动，每日定时开放两个时段。玩家在冰火交织的矿区战场中，围绕矿脉资源展开多人竞争。活动融合了</p>
        <p>即时策略、资源管理、角色养成三大核心系统，通过精密的时间节奏和空间布局设计，在短暂的 30 分钟内创造出丰富的策略深度和</p>
        <p>情感张力。</p>
      </div>

      <div className="absolute left-[78px] top-[354px] flex w-[1122px] items-center justify-between">
        {chips.map((chip) => (
          <div
            key={chip}
            className="flex h-[36px] w-[148px] items-center justify-center rounded-[18px] border border-[#4c5878] bg-[#2e2d3a] text-[13px] font-medium text-[#ececf2]"
          >
            {chip}
          </div>
        ))}
      </div>

      <div className="absolute left-[84px] top-[470px]">
        {cards.map(([num, title, bodyLines, accent, overlay, borderColor], index) => {
          const widths = [548, 522, 500] as const;
          const heights = [144, 120, 120] as const;
          const offsets = [0, 204, 396] as const;
          const tops = [0, 132, 242] as const;
          const bodyWidth = widths[index] - 140;
          return (
            <div
              key={title}
              className="absolute overflow-hidden rounded-[16px] border bg-[#2b2b36]/90 px-[22px] py-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
              style={{
                left: offsets[index],
                top: tops[index],
                width: widths[index],
                height: heights[index],
                borderColor,
                backgroundColor: index === 2 ? '#2c3943' : 'rgba(43,43,54,0.78)',
              }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: overlay }} />
              <div className="absolute left-0 top-0 h-full w-[5px]" style={{ backgroundColor: accent }} />
              <p className="relative text-[20px] font-bold leading-[30px] text-white">{title}</p>
              <div className="relative mt-[12px] text-[14px] leading-[28px] text-[#d0d1da]" style={{ width: bodyWidth }}>
                {bodyLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p
                className="absolute right-[22px] top-[18px] font-['Inter',sans-serif] text-[58px] font-semibold leading-none"
                style={{ color: accent === '#f47820' ? 'rgba(244,120,32,0.18)' : accent === '#617dfa' ? 'rgba(97,125,250,0.18)' : 'rgba(77,199,166,0.18)' }}
              >
                {num}
              </p>
            </div>
          );
        })}
      </div>

      <div className="absolute right-[86px] top-[74px] grid grid-cols-6 gap-[10px] opacity-70">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="h-[3px] w-[3px] rounded-full bg-white/45" />
        ))}
      </div>
    </LongPageSection>
  );
}

function EmbermineLifecycle() {
  const phases = [
    ['报名阶段', 'Registration', '活动开启前', '选择参战时段', 'up', '#617dfa'],
    ['预备阶段', 'Standby', '报名后', '等待开战倒计时', 'down', '#f26633'],
    ['准备阶段', 'Preparation', '开战前3分钟', '进入战场布局', 'up', '#617dfa'],
    ['开战阶段', 'Battle', '正式开始', '占领矿脉采集', 'down', '#f26633'],
    ['迸发阶段', 'Burst', '开战8分钟后', '高价值矿脉出现', 'up', '#617dfa'],
    ['最终阶段', 'Final', '开战25分钟', '冶炼厂争夺', 'down', '#f26633'],
    ['结算阶段', 'Settlement', '活动结束', '排名奖励发放', 'up', '#617dfa'],
  ] as const;

  return (
    <LongPageSection height={980} bg="#150b23">
      <div className="absolute right-[130px] top-[40px] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(244,120,32,0.18)_0%,rgba(244,120,32,0.08)_42%,rgba(244,120,32,0)_74%)]" />
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.25em] text-[#f47820]">
        GAMEPLAY FLOW
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">活动生命周期</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f47820]" />

      <div className="absolute left-[124px] top-[470px] h-[3px] w-[1018px] rounded-full bg-white/20" />
      <div className="absolute left-[70px] top-[255px] flex w-[1142px] justify-between">
        {phases.map(([title, en, time, focus, position, color]) => (
          <div key={title} className="relative w-[140px]">
            {(() => {
              const isUp = position === 'up';
              const dotTop = isUp ? 201 : 215;
              const connectorTop = isUp ? 130 : 229;
              const connectorHeight = isUp ? 72 : 61;
              return (
                <>
            <div
              className="absolute left-[62px] h-[14px] w-[14px] rounded-full"
              style={{
                top: dotTop,
                backgroundColor: color,
                boxShadow: `0 0 0 3px ${color}22, 0 0 10px ${color}66`,
              }}
            />
            <div
              className="absolute left-[68px] w-[3px] rounded-full"
              style={{
                top: connectorTop,
                height: connectorHeight,
                backgroundColor: color,
              }}
            />
                </>
              );
            })()}
            <div
              className="absolute w-[140px] rounded-[12px] border px-[14px] py-[14px] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              style={{
                top: position === 'up' ? 0 : 290,
                backgroundColor: color === '#f26633' ? 'rgba(242,102,51,0.1)' : 'rgba(97,125,250,0.1)',
                borderColor: color === '#f26633' ? 'rgba(242,102,51,0.3)' : 'rgba(97,125,250,0.3)',
              }}
            >
              <p className="text-[16px] font-bold text-white">{title}</p>
              <p
                className="mt-[4px] font-['Inter',sans-serif] text-[10px] tracking-[1px]"
                style={{ color: color === '#f26633' ? 'rgba(242,102,51,0.7)' : 'rgba(97,125,250,0.7)' }}
              >
                {en}
              </p>
              <p className="mt-[18px] text-[11px] text-white/42">{time}</p>
              <p className="mt-[8px] text-[13px] leading-[22px]" style={{ color }}>
                {focus}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="absolute left-[140px] top-[805px] w-[1000px] text-[20px] leading-[30px] text-white/50">
        💡 七个阶段形成完整的活动节奏曲线，从平静的报名期逐步升温，经开战与迸发阶段达到高潮，最终在冶炼厂争夺中推向顶点，结算阶段收束情绪。每个阶段切换都通过倒计时、跑马灯与顶部提示三重感知同步，让玩家知道“现在是什么阶段、该做什么事”。
      </p>
    </LongPageSection>
  );
}

function EmbermineEntryDiscovery() {
  return (
    <LongPageSection height={980} bg="#140920">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.25em] text-[#f47820]">
        ENTRY DISCOVERY
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">入口发现与活动曝光</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f47820]" />
      <div className="absolute left-[80px] top-[175px] w-[1108px] text-[20px] leading-[28px] text-[#a6a6ab]">
        <p>玩家在游戏主界面的空闲状态下即可发现燃海矿区入口。</p>
        <p>设计上采用了渐进式披露（Progressive Disclosure）策略——活动提醒以“小气泡”持续传递信息，不打断当前操作流程。</p>
        <p>这种非侵入式曝光降低了玩家的决策疲劳，让他们在预览活动概况后再自主决定是否参与，而非一进入游戏就被强制弹窗打断。</p>
      </div>
      <div className="absolute left-[764px] top-[310px] h-[545px] w-[240px] overflow-hidden rounded-[16px] border border-[#f47820] bg-[#161c2a] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img src={resolveAsset(caseNineAssets.entryIdle)} alt="" className="absolute inset-0 h-full w-full object-contain" />
      </div>
      <div className="absolute left-[80px] top-[495px] h-[360px] w-[600px] rounded-[6px] bg-[linear-gradient(180deg,rgba(38,46,71,0.6)_0%,rgba(26,31,46,0)_100%)]" />
      <p className="absolute left-[100px] top-[515px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#f47820]">DESIGN INSIGHT</p>
      <div className="absolute left-[100px] top-[543px] h-px w-[560px] bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_100%)]" />
      <p className="absolute left-[100px] top-[560px] text-[20px] font-bold text-white">渐进式披露 Progressive Disclosure</p>
      <p className="absolute left-[100px] top-[595px] w-[540px] text-[17px] leading-[30px] text-[#a6a6ad]">
        核心思想：不要一次性展示所有信息，而是按用户当前任务需求逐步呈现。在游戏入口场景中，这意味着：
      </p>
      {[
        '活动图标常驻但不打断 → 被动感知',
        '点击后展开活动概要 → 主动了解',
        '确认参与后才显示详细规则 → 深度理解',
      ].map((item, index) => (
        <div key={item}>
          <div className="absolute left-[110px] h-[8px] w-[8px] bg-[#f47820]" style={{ top: 672 + index * 36 }} />
          <p className="absolute left-[130px] w-[520px] text-[17px] leading-[normal] text-[#ccccd1]" style={{ top: 665 + index * 36 }}>
            {item}
          </p>
        </div>
      ))}
      <p className="absolute left-[100px] top-[788px] text-[16px] text-[#80808c]">
        每一层信息的呈现都以玩家的主动选择为触发条件，尊重用户的注意力节奏。
      </p>
      <p className="absolute left-[1015px] top-[342px] w-[173px] text-[14px] text-[#f47820]">
        “小气泡”提醒
      </p>
    </LongPageSection>
  );
}

function EmbermineMainPanel() {
  return (
    <LongPageSection height={1050} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.25em] text-[#45c4e9]">
        ACTIVITY HUB
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">活动主界面设计</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#45c4e9]" />
      <p className="absolute left-[80px] top-[175px] w-[1110px] text-[20px] leading-[28px] text-[#a6a6ab]">
        活动主界面是玩家进入燃海矿区后的信息中枢，采用卡片化布局将规则、报名入口、历史排名分层展示。设计遵循F型视觉扫描模式（F-Pattern）——顶部赛季赛季标题、赛季说明最先被注意到，中部核心部分赛季阶段、赛季时间、赛季奖励以高对比度吸引操作，底部报名按钮功能方便操作。这种信息优先级的梯度设计，让新手不必一次理解全部规则就能完成报名。
      </p>

      <div className="absolute left-[80px] top-[305px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#45c4e9] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.mainPanel)}
          alt="活动主界面截图"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="absolute left-[496px] top-[305px] text-[22px] font-bold text-white">信息分层策略</p>
      {[
        {
          top: 345,
          accent: 'rgba(69,196,233,1)',
          title: '第一层 · 时间紧迫感',
          body: '赛季倒计时置顶，利用损失厌恶驱动即时行动',
        },
        {
          top: 425,
          accent: 'rgba(69,196,233,0.7)',
          title: '第二层 · 核心操作入口',
          body: '报名按钮高对比度突出，降低决策到行动的路径长度',
        },
        {
          top: 505,
          accent: 'rgba(69,196,233,0.4)',
          title: '第三层 · 辅助信息',
          body: '规则详情、历史战绩按需探索，不干扰主线操作',
        },
      ].map(({ top, accent, title, body }) => (
        <div key={title} className="absolute left-[496px] h-[60px] w-[660px] rounded-[12px] bg-[linear-gradient(90deg,rgba(38,46,71,0.4)_0%,rgba(38,46,71,0)_100%)]" style={{ top }}>
          <div className="absolute left-0 top-0 h-[60px] w-[5px]" style={{ backgroundColor: accent }} />
          <p className="absolute left-[20px] top-[5px] text-[17px] font-bold text-[#d1d1d6]">{title}</p>
          <p className="absolute left-[20px] top-[30px] w-[640px] text-[16px] text-[#80808c]">{body}</p>
        </div>
      ))}
      <div className="absolute left-[496px] top-[595px] h-px w-[640px] bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_100%)]" />
      <div className="absolute left-[484px] top-[596px] h-[360px] w-[670px] rounded-[6px] bg-[linear-gradient(180deg,rgba(38,46,71,0.6)_0%,rgba(26,31,46,0)_100%)]">
        <p className="absolute left-[12px] top-[7px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#45c4e9]">DESIGN INSIGHT</p>
        <p className="absolute left-[12px] top-[37px] text-[20px] font-bold text-white">卡片化布局的深层考量</p>
        <p className="absolute left-[12px] top-[72px] w-[640px] text-[17px] text-[#a6a6ad]">
          活动主界面选择卡片化而非列表式布局，基于两个交互考量：
        </p>
        {[
          { top: 134, text: '视觉分块降低认知负荷 — 每张卡片是一个独立的信息单元，玩家可以选择性关注' },
          { top: 184, text: '空间记忆辅助导航 — 固定位置的卡片形成空间锚点，再次进入时无需重新扫描' },
          { top: 234, text: '操作可预期性 — 卡片的可点击区域明确，降低了"这个能不能点"的试错成本' },
        ].map(({ top, text }) => (
          <div key={text}>
            <div className="absolute left-[22px] h-[8px] w-[8px] bg-[#45c4e9]" style={{ top }} />
            <p className="absolute left-[42px] w-[620px] text-[16px] text-[#a6a6ad]" style={{ top: top - 7 }}>
              {text}
            </p>
          </div>
        ))}
        <div className="absolute left-[12px] top-[297px] h-[50px] w-[658px] rounded-[12px]">
          <div className="absolute left-0 top-[11px] h-[28px] w-[3px] bg-[#45c4e9]/50" />
          <p className="absolute left-[18px] top-[5px] text-[17px] font-medium text-[#80cce5]">"让用户在3秒内找到他要做的事"</p>
          <p className="absolute left-[18px] top-[32px] w-[640px] text-[15px] text-[#80808c]">— 活动主界面的核心设计目标</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function EmbermineTimeSelection() {
  return (
    <LongPageSection height={1040} bg="#0f071c">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.25em] text-[#45c4e9]">
        TIME SELECTION
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">时段选择与报名确认</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#45c4e9]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        时段选择提供多个时间场次，玩家根据自身时间安排自主选择。这一看似简单的功能背后是"感知控制"（Perceived Control）理论的应用——Deci与Ryan的自我决定理论指出，当个体感到对行为拥有选择权时，内在动机和承诺度显著提升。清晰的时段状态（可选/已满/已报名）和实时人数显示辅助决策，确认后Toast反馈闭合操作环路。
      </p>

      <div className="absolute left-[80px] top-[294px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#45c4e9] bg-[#0c0a12] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <img src={resolveAsset(caseNineAssets.timeSelectA)} alt="时段选择弹窗 — 选择前" className="absolute inset-0 h-full w-full object-cover object-top" />
      </div>
      <div className="absolute left-[460px] top-[294px] h-[650px] w-[300px] overflow-hidden rounded-[16px] border border-[#45c4e9]">
        <img src={resolveAsset(caseNineAssets.timeSelectB)} alt="时段选择弹窗 — 确认后" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <p className="absolute left-[80px] top-[955px] text-[17px] font-medium text-[#45c4e9]">时段选择弹窗 — 选择前</p>
      <p className="absolute left-[460px] top-[955px] text-[17px] font-medium text-[#45c4e9]">时段选择弹窗 — 确认后</p>

      <div className="absolute left-[840px] top-[294px] w-[309px] text-[17px] leading-[normal] text-[#45c4e9]/60">
        <p>自主选择 → 更高参与承诺</p>
        <p>先选时间，再进入战前准备。入口决策要把“什么时候能打、能不能报名、现在该做什么”说清楚。</p>
      </div>

      <p className="absolute left-[840px] top-[560px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#45c4e9]">PERCEIVED CONTROL</p>
      <p className="absolute left-[840px] top-[585px] text-[20px] font-bold text-white">感知控制理论</p>
      <p className="absolute left-[840px] top-[620px] w-[321px] text-[16px] leading-[28px] text-[#a6a6ad]">
        Deci & Ryan的自我决定理论（SDT）指出，自主性是内在动机的三大基本需求之一。时段选择赋予玩家的不仅是便利，更是心理上的"我选择参与"。
      </p>

      {[
        {
          top: 729,
          width: 320,
          title: '明确状态标签',
          lines: ['可选 / 已满 / 已报名', '消除选择前的不确定性'],
        },
        {
          top: 803,
          width: 256,
          title: '实时人数显示',
          lines: ['辅助决策，同时制造', '"热门场次"的社交暗示'],
        },
        {
          top: 877,
          width: 256,
          title: 'Toast确认反馈',
          lines: ['报名完成即时闭合', '操作环路，安心等待'],
        },
      ].map(({ top, width, title, lines }) => (
        <div key={title} className="absolute left-[840px] h-[60px] rounded-[12px] bg-[linear-gradient(90deg,rgba(38,46,71,0.4)_0%,rgba(38,46,71,0)_100%)]" style={{ top, width }}>
          <div className="absolute left-0 top-0 h-[60px] w-[4px] bg-[#45c4e9]/60" />
          <p className="absolute left-[16px] top-px text-[16px] font-bold text-[#d1d1d6]">{title}</p>
          <div className="absolute left-[16px] top-[25px] w-[240px] text-[14px] leading-[normal] text-[#80808c]">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </LongPageSection>
  );
}

function EmbermineBattleField() {
  return (
    <LongPageSection height={1040} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[0.25em] text-[#38ad85]">
        PRE-BATTLE
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">赛前准备与开战引导</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#38ad85]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        报名成功后，系统在开战前5分钟推送弹窗提醒，展示本场规则摘要和推荐策略。这个过渡环节运用了预期构建（Anticipation Building）手法——心理学研究表明，适度的等待期配合信息预告能显著提升后续体验的主观评价。倒计时动效营造仪式感，帮助玩家从日常状态切换到竞技心态。历史战绩面板提供表现基准，激活"我能比上次更好"的自我超越动机。
      </p>

      <div className="absolute left-[80px] top-[282px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#38ad85] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img src={resolveAsset(caseNineAssets.trialPanel)} alt="历史战绩面板" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <p className="absolute left-[80px] top-[943px] text-[17px] font-medium text-[#38ad85]">历史战绩面板</p>

      <div className="absolute left-[501px] top-[282px] h-[240px] w-[699px] rounded-[6px] bg-[linear-gradient(180deg,rgba(38,46,71,0.6)_0%,rgba(26,31,46,0)_100%)]" />
      <p className="absolute left-[521px] top-[302px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#38ad85]">ANTICIPATION BUILDING</p>
      <p className="absolute left-[521px] top-[327px] text-[20px] font-bold text-white">预期构建与心态切换</p>
      <p className="absolute left-[521px] top-[362px] w-[650px] text-[16px] leading-[28px] text-[#a6a6ad]">
        心理学研究表明，适度的等待期配合信息预告能显著提升后续体验的主观评价。赛前5分钟的提醒弹窗不仅传递信息，更是一个"心态切换仪式"：
      </p>
      <div className="absolute left-[531px] top-[411px] flex items-center gap-[22px] text-[15px] font-medium text-[#38ad85]">
        <p>日常游戏状态</p>
        <p className="font-['Inter',sans-serif] text-[#80808c]">→</p>
        <p>规则回顾</p>
        <p className="font-['Inter',sans-serif] text-[#80808c]">→</p>
        <p>策略准备</p>
      </div>
      <div className="absolute left-[521px] top-[454px] w-[288px] text-[15px] leading-[28px] text-[#80808c]">
        <p>倒计时动效营造仪式感，</p>
        <p>历史战绩面板激活自我超越动机。</p>
      </div>

      <div className="absolute left-[501px] top-[621px] h-[227px] w-[300px] overflow-hidden">
        <img src={resolveAsset(caseNineAssets.preBattleReminder)} alt="开战提醒弹窗" className="absolute left-0 top-[-36.63%] h-[285.71%] w-full max-w-none" />
      </div>
      <p className="absolute left-[596px] top-[943px] text-[17px] font-medium text-[#38ad85]">开战提醒弹窗</p>

      <div className="absolute left-[841px] top-[621px] h-[379px] w-[300px] overflow-hidden">
        <img src={resolveAsset(caseNineAssets.preBattleCountdown)} alt="开战战斗倒计时弹窗" className="absolute left-0 top-[-7.95%] h-[108.51%] w-full max-w-none" />
      </div>
      <p className="absolute left-[896px] top-[943px] text-[17px] font-medium text-[#38ad85]">开战战斗倒计时弹窗</p>
    </LongPageSection>
  );
}

function EmbermineMapOps() {
  return (
    <LongPageSection height={1010} bg="#0f071c">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#8b5cf6]">
        BATTLE INTERFACE
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">战场主界面</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#8b5cf6]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        战场主界面是30分钟内最高频交互的核心画面。设计难点在于信息密度——需同时呈现地图、状态、队伍、资源和操作栏。参照Miller定律（7±2法则），HUD将信息分为四个空间区块：顶部全局计时、中部战场视口、底部操作栏、四角辅助面板。选中敌人时自动切换战斗模式收起非核心UI，靠近矿脉时浮现采集按钮——上下文敏感设计让界面随场景“呼吸”。
      </p>

      {[
        [caseNineAssets.battleHudA, 80, '默认战斗状态'],
        [caseNineAssets.battleHudB, 380, '战斗交互状态'],
        [caseNineAssets.battleHudC, 680, '资源采集状态'],
      ].map(([src, left, label], index) => (
        <div key={label as string}>
          <div
            className="absolute top-[309px] h-[608px] w-[280px] overflow-hidden rounded-[8px] border border-[#8b5cf6] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            style={{ left: left as number }}
          >
            <img
              src={resolveAsset(src as string)}
              alt={label as string}
              className={index < 2 ? 'absolute left-[-0.01%] top-[-4.61%] h-[104.61%] w-[100.02%] max-w-none' : 'absolute inset-0 h-full w-full rounded-[8px] object-cover'}
            />
          </div>
          <p className="absolute top-[927px] text-[16px] font-medium text-[#8b5cf6]" style={{ left: left as number }}>
            {label as string}
          </p>
        </div>
      ))}

      <div className="absolute left-[980px] top-[309px] w-[238px] text-[17px] leading-[22px] text-[#8c8c94]">
        <p>三种状态的HUD信息对比：</p>
        <p>从左到右，信息密度递减、操作聚焦度递增。</p>
        <p>这体现了“渐进式聚焦”设计——随着行为从巡逻→战斗→采集，界面自动过滤无关信息。</p>
      </div>

      <p className="absolute left-[980px] top-[499px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#8b5cf6]">MILLER'S LAW</p>
      <p className="absolute left-[980px] top-[524px] text-[18px] font-bold text-white">7±2 法则应用</p>

      {[
        [559, '顶部', '全局计时 + 资源总量'],
        [607, '中部', '战场视口 + 目标标记'],
        [655, '底部', '操作栏 + 技能快捷'],
        [703, '四角', '辅助面板按需展开'],
      ].map(([top, title, body]) => (
        <div
          key={title as string}
          className="absolute left-[980px] h-[40px] w-[195px] rounded-[12px] bg-[linear-gradient(90deg,rgba(38,46,71,0.4)_0%,rgba(38,46,71,0)_100%)]"
          style={{ top: top as number }}
        >
          <div className="absolute left-0 top-0 h-[40px] w-[4px] bg-[#8b5cf699]" />
          <p className="absolute left-[15px] top-0 text-[15px] font-bold text-[#d1d1d6]">{title as string}</p>
          <p className="absolute left-[15px] top-[22px] w-[180px] text-[14px] leading-[normal] text-[#80808c]">{body as string}</p>
        </div>
      ))}

      <div className="absolute left-[980px] top-[761px] w-[226px] text-[15px] leading-[20px] text-[#a6a6ad]">
        <p>将信息分组至4个空间区块，</p>
        <p>每个区块不超过3个信息元素，</p>
        <p>确保始终在认知负荷安全范围内。</p>
      </div>
    </LongPageSection>
  );
}

function EmbermineBuildingsSkills() {
  return (
    <LongPageSection height={1030} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#8b5cf6]">
        MAP SYSTEM
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">战场地图与空间导航</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#8b5cf6]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        地图系统承载空间策略维度。设计运用空间认知理论——通过一致的方位锚点（中央堡垒为原点）和颜色编码（绿/蓝/紫对应三级矿脉），帮助玩家首次进入时建立空间心智模型。矿脉详情面板提供各区域矿脉密度，将抽象策略转化为直观视觉信息。
      </p>

      <div className="absolute left-[80px] top-[285px] h-[650px] w-[300px] overflow-hidden rounded-[16px] border border-[#8b5cf6] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.mapSystemDetail)}
          alt="据点信息地图详情"
          className="absolute left-0 top-[-4.94%] h-[104.95%] w-full max-w-none"
        />
      </div>
      <div className="absolute left-[587px] top-[284px] h-[650px] w-[301px] overflow-hidden rounded-[16px] border border-[#8b5cf6] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.mapSystemField)}
          alt="矿脉详情面板"
          className="absolute left-0 top-[-4.95%] h-[104.96%] w-full max-w-none"
        />
      </div>

      <p className="absolute left-[483.5px] top-[576px] -translate-x-1/2 text-center text-[14px] font-medium text-[#a680f2]/50">
        颜色编码矿脉 → 快速空间定位
      </p>
      <p className="absolute left-[389px] top-[606px] text-[14px] font-medium text-[#a680f2]/50">
        方位锚点系统 → 降低迷路焦虑
      </p>

      <div className="absolute left-[920px] top-[390px] h-[380px] w-[296px] rounded-[6px] bg-gradient-to-b from-[rgba(38,46,71,0.6)] to-[rgba(26,31,46,0)]">
        <p className="absolute left-[8px] top-[10px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#8b5cf6]">SPATIAL DESIGN</p>
        <div className="absolute left-[8px] top-[35px] h-px w-[280px] bg-white/10" />
        <div className="absolute left-[8px] top-[50px] text-[22px] font-bold leading-[30px] text-white">
          <p>空间认知</p>
          <p>设计策略</p>
        </div>
        {[
          ['中心锚点', '堡垒作为地图原点，为所有方位判断提供参照系'],
          ['色彩编码', 'Ⅰ级/Ⅱ级/Ⅲ级矿脉一目了然，无需文字解读'],
          ['热力密度', '矿脉分布热力图将抽象威胁转化为直觉判断'],
          ['视口保持', '所有弹窗叠加显示，不切断空间上下文'],
        ].map(([title, body], index) => (
          <div key={title} className="absolute left-[8px] w-[278px]" style={{ top: 120 + index * 70 }}>
            <div className="absolute left-0 top-[5px] h-[6px] w-[6px] bg-[#8b5cf6]" />
            <p className="absolute left-[18px] top-0 text-[17px] font-bold text-[#d1d1d6]">{title}</p>
            <p className="absolute left-[18px] top-[25px] w-[260px] text-[15px] leading-[20px] text-[#80808c]">{body}</p>
          </div>
        ))}
      </div>

      <div className="absolute left-[920px] top-[800px] h-[3px] w-[280px] bg-[#8b5cf64d]" />
      <div className="absolute left-[920px] top-[815px] text-[16px] font-medium leading-[22px] text-[#a680f2]">
        <p>"玩家不该在地图上迷路——</p>
        <p>迷路产生的焦虑会直接</p>
        <p>吞噬策略思考的认知资源"</p>
      </div>

      <p className="absolute left-[80px] top-[945px] text-[17px] font-medium text-[#8b5cf6]">据点信息地图详情</p>
      <p className="absolute left-[587px] top-[945px] text-[17px] font-medium text-[#8b5cf6]">矿脉详情面板</p>
    </LongPageSection>
  );
}

function EmbermineEndgame() {
  return (
    <LongPageSection height={1010} bg="#0f071c">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#8b5cf6]">
        MAP INTERACTIONS
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">地图交互与行军系统</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#8b5cf6]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        地图交互涵盖据点查看、建筑信息、行军派遣、自由传送等多种操作。每种交互都采用弹窗叠加模式，保持地图视口可见，确保玩家在执行操作时不失去空间方位感。行军确认界面展示预计路程、队伍配置和风险提示。
      </p>

      {[
        [caseNineAssets.mapInteractMoveTown, 80, '迁城确认'],
        [caseNineAssets.mapInteractMarch, 373, '行军派遣'],
        [caseNineAssets.mapInteractBuilding, 666, '建筑详情'],
        [caseNineAssets.mapInteractTeleport, 960, '自由传送'],
      ].map(([src, left, label]) => (
        <div key={label as string}>
          <div
            className="absolute top-[310px] h-[520px] w-[240px] overflow-hidden rounded-[16px] border border-[#8b5cf6] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            style={{ left: left as number }}
          >
            <img
              src={resolveAsset(src as string)}
              alt={label as string}
              className="absolute left-[-0.03%] top-[-4.81%] h-[104.81%] w-[100.06%] max-w-none"
            />
          </div>
          <p className="absolute top-[839px] text-[16px] font-medium text-[#9999a3]" style={{ left: left as number }}>
            {label as string}
          </p>
        </div>
      ))}

      <p className="absolute left-[80px] top-[927px] w-[1120px] text-[17px] leading-[24px] text-[#a6a6ab]">
        所有地图交互都采用弹窗叠加模式，保持地图视口可见，确保操作时不失去空间方位感——这是空间导航中“位置记忆保持”原则的直接体现。
      </p>
    </LongPageSection>
  );
}

function EmbermineGameplayFlow() {
  return (
    <LongPageSection height={1010} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#38ad85]">
        SKILL SYSTEM
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">局内技能树系统</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#38ad85]" />
      <div className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ab]">
        <p>技能树是赛内独立养成系统——每局重置，无跨局积累。玩家通过采矿、战斗获取技能点，沿攻击/防御/采集三条路径分配。</p>
        <p>这里运用了Csikszentmihalyi的心流理论（Flow Theory）：早期技能快速解锁建立即时成就感，中期分支选择制造有意义的策略纠结，</p>
        <p>后期高阶技能需要更多点数维持挑战-能力的动态平衡。30分钟内完整经历“从零到强”的成长弧线，是心流体验的精髓。</p>
      </div>

      <div className="absolute left-[80px] top-[295px] h-[650px] w-[300px] overflow-hidden rounded-[16px] border border-[#38ad85] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.skillTreeOverview)}
          alt="技能树总览"
          className="absolute left-0 top-[-4.73%] h-[104.74%] w-full max-w-none"
        />
      </div>

      <div className="absolute left-[392px] top-[295px] h-[370px] w-[398px] rounded-[8px] border border-[#38ad8540] bg-[rgba(26,31,46,0.8)]">
        <p className="absolute left-[12px] top-[17px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#38ad85]">FLOW THEORY</p>
        <p className="absolute left-[12px] top-[42px] text-[18px] font-bold text-white">心流体验曲线</p>
        {[
          ['0-5分钟', '快速解锁 → 即时成就感', 86, 0.3],
          ['5-15分钟', '分支抉择 → 策略纠结', 126, 0.5],
          ['15-25分钟', '深度培养 → 能力成长', 166, 0.7],
          ['25-30分钟', '满级冲刺 → 峰值体验', 206, 0.9],
        ].map(([time, body, top, opacity]) => (
          <div key={time as string} className="absolute left-[12px] h-[24px] w-[360px]" style={{ top: top as number }}>
            <div className="absolute left-0 top-[3px] h-[6px] w-[6px] bg-[#38ad85]" style={{ opacity: opacity as number }} />
            <p className="absolute left-[18px] top-[-1px] w-[78px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-bold leading-[18px] text-[#38ad85]">
              {time as string}
            </p>
            <p className="absolute left-[104px] top-[-1px] w-[244px] whitespace-nowrap text-[15px] leading-[18px] text-[#80808c]">
              {body as string}
            </p>
          </div>
        ))}
        <div className="absolute left-[12px] top-[272px] w-[350px] text-[15px] leading-[22px] text-[#a6a6ad]">
          <p>30分钟内完整经历</p>
          <p>“从零到强”的成长弧线，技能重置</p>
          <p>保证每局体验的新鲜感和平等性。</p>
        </div>
      </div>

      <div className="absolute left-[867px] top-[294px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#38ad85] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.skillTreeAdvanced)}
          alt="技能进阶状态"
          className="absolute left-0 top-[-4.63%] h-[104.64%] w-full max-w-none"
        />
      </div>

      <p className="absolute left-[80px] top-[955px] text-[17px] font-medium text-[#38ad85]">技能树总览</p>
      <p className="absolute left-[867px] top-[955px] text-[17px] font-medium text-[#38ad85]">技能进阶状态</p>
    </LongPageSection>
  );
}

function EmbermineSummary() {
  return (
    <LongPageSection height={1010} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#f44444]">
        MINING SYSTEM
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">矿脉采集系统</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f44444]" />
      <p className="absolute left-[80px] top-[175px] w-[1100px] text-[20px] leading-[28px] text-[#a6a6ab]">
        矿脉采集是核心资源获取方式。冶炼厂加工是生产出成品评最终胜负阶段。Ⅰ级/Ⅱ级/三级/迸发矿脉以及冶炼厂通过差异化的产出概率和争夺成本，形成风险梯度。这背后是B.F. Skinner的可变比率强化（Variable-Ratio Reinforcement）机制——心理学中产生最高行为频率的强化模式。矿脉掉落的随机品质让每一次采集都充满期待，“也许下一个就是传说级”的念头驱动着持续投入。采集HUD实时显示进度和周围威胁，环形进度条配合小气泡振动反馈提供双通道感知。
      </p>

      <div className="absolute left-[80px] top-[295px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#f44444] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.miningHudA)}
          alt="Ⅰ级/Ⅱ级/Ⅲ级矿脉采集HUD"
          className="absolute left-0 top-[-4.62%] h-[104.63%] w-full max-w-none"
        />
      </div>
      <div className="absolute left-[412px] top-[295px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#f44444] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img src={resolveAsset(caseNineAssets.miningHudB)} alt="迸发矿脉采集HUD" className="absolute inset-0 h-full w-full rounded-[16px] object-cover" />
      </div>

      <div
        className="absolute left-[828px] top-[375px] h-[480px] w-[352px] rounded-[6px]"
        style={{ background: 'linear-gradient(180deg, rgba(38,46,71,0.6) 0%, rgba(26,31,46,0) 100%)' }}
      >
        <p className="absolute left-[20px] top-[20px] font-['Inter',sans-serif] text-[14px] font-semibold leading-none text-[#f44444]">
          REWARD MECHANISM
        </p>
        <div className="absolute left-[20px] top-[45px] h-px w-[296px] bg-white/10" />
        <p className="absolute left-[20px] top-[60px] text-[22px] font-bold leading-none text-white">可变比率强化机制</p>
        <div className="absolute left-[20px] top-[100px] w-[296px] text-[16px] leading-[normal] text-[#a6a6ad]">
          <p>B.F. Skinner的研究表明，不可预测的奖励</p>
          <p>比固定奖励更能驱动持续行为。燃霜矿区</p>
          <p>的矿脉系统正是这一原理的游戏化应用：</p>
        </div>
        {[
          ['Ⅰ级/Ⅱ级/Ⅲ级矿脉', '低风险 → 稳定产出', 'rgba(102,204,102,0.12)', '#6c6', 171],
          ['迸发矿脉', '中风险 → 概率翻倍', 'rgba(77,153,255,0.12)', '#4d99ff', 231],
          ['冶炼厂', '高风险 → 胜负评判', 'rgba(204,102,255,0.12)', '#c6f', 291],
        ].map(([title, body, bg, color, top]) => (
          <div key={title as string} className="absolute left-[20px] h-[50px] w-[180px] rounded-[8px]" style={{ top: top as number, backgroundColor: bg as string }}>
            <p className="absolute left-[15px] top-[5px] whitespace-nowrap text-[16px] font-bold leading-none" style={{ color: color as string }}>
              {title as string}
            </p>
            <p className="absolute left-[15px] top-[28px] whitespace-nowrap text-[14px] leading-none text-[#80808c]">{body as string}</p>
          </div>
        ))}
        <div className="absolute left-[20px] top-[357px] w-[258px] text-[16px] leading-[normal] text-[#a6a6ad]">
          <p>每次采集结果的不确定性制造了持续</p>
          <p>的期待感——“也许下一个就是传说</p>
          <p>级”。这种心理驱动力比任何按钮设</p>
          <p>计都更能让玩家保持投入。</p>
        </div>
        <p className="absolute left-[20px] top-[452px] whitespace-nowrap text-[15px] font-medium leading-none text-[#f44444]">
          环形进度条 + 小气泡振动反馈 = 双通道感知设计
        </p>
      </div>

      <p className="absolute left-[80px] top-[956px] text-[17px] font-medium text-[#f44444]">Ⅰ级/Ⅱ级/Ⅲ级矿脉采集HUD</p>
      <p className="absolute left-[412px] top-[956px] text-[17px] font-medium text-[#f44444]">迸发矿脉采集HUD</p>
    </LongPageSection>
  );
}

function EmbermineSmeltingSystem() {
  const feedbackSteps = [
    ['1', '投入矿石', '拟物化投料动效', 585],
    ['2', '等待熔炼', '进度条+温度变化', 650],
    ['3', '产出结果', '暴击金色特效', 715],
    ['4', '评估收益', '数字放大+音效', 780],
  ] as const;

  return (
    <LongPageSection height={1012} bg="#0f071c">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#f44444]">
        SMELTING SYSTEM
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">熔炉熔炼系统</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f44444]" />
      <p className="absolute left-[80px] top-[175px] w-[700px] text-[20px] leading-[32px] text-[#a6a6ab]">
        矿石通过熔炉转化为最终积分。熔炼引入随机加成系数（1.0x-2.5x），高品质矿石暴击概率更高——暴击以金色特效和放大数字呈现，制造多巴胺奖励时刻。熔炉界面采用拟物化设计语言，熔炼动效传递"炼化"的物理质感。支持一键全部熔炼和单个精炼两种操作模式，适应不同节奏需求。背包容量可视化提示驱动玩家在采集与熔炼之间做节奏切换，形成"采→炼→再采"的行为闭环。
      </p>

      <div className="absolute left-[819px] top-[227px] h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#f44444] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.smeltingPanel)}
          alt="熔炉熔炼界面"
          className="absolute left-0 top-[-4.62%] h-[104.63%] w-full max-w-none"
        />
      </div>
      <p className="absolute left-[819px] top-[888px] text-[17px] font-medium text-[#f44444]">熔炉熔炼界面</p>

      <div className="absolute left-[80px] top-[400px] h-[519px] w-[540px] rounded-[6px] bg-[linear-gradient(180deg,rgba(38,46,71,0.6)_0%,rgba(26,31,46,0)_100%)]" />
      <p className="absolute left-[100px] top-[420px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#f44444]">FEEDBACK DESIGN</p>
      <div className="absolute left-[100px] top-[445px] h-px w-[500px] bg-white/10" />
      <p className="absolute left-[100px] top-[460px] text-[22px] font-bold text-white">即时反馈与多巴胺奖励</p>
      <p className="absolute left-[100px] top-[500px] w-[500px] text-[16px] leading-[24px] text-[#a6a6ad]">
        熔炼系统的交互设计围绕一个核心目标：让每次操作都产生令人满足的即时反馈。
      </p>
      <p className="absolute left-[100px] top-[555px] text-[17px] font-bold text-[#d1d1d6]">反馈循环</p>

      {feedbackSteps.map(([num, title, body, top]) => (
        <div key={num}>
          <p className="absolute left-[110px] text-[28px] font-bold text-[#f44444]" style={{ top }}>
            {num}
          </p>
          <p className="absolute left-[140px] text-[17px] font-bold text-white" style={{ top }}>
            {title}
          </p>
          <p className="absolute left-[140px] text-[15px] text-[#80808c]" style={{ top: top + 24 }}>
            {body}
          </p>
          {num !== '4' ? (
            <p className="absolute left-[115px] text-[16px] text-[#80808c]" style={{ top: top + 50 }}>
              ↓
            </p>
          ) : null}
        </div>
      ))}

      <div className="absolute left-[100px] top-[855px] h-[3px] w-[500px] bg-[rgba(244,68,68,0.3)]" />
      <p className="absolute left-[100px] top-[870px] w-[500px] text-[16px] leading-[24px] text-[#a6a6ad]">
        暴击系数（1.0x-2.5x）的随机性延续了采矿阶段的可变奖励机制，让资源转化过程本身也成为一种游戏体验，而非纯粹的数值计算。
      </p>
    </LongPageSection>
  );
}

function EmbermineRankingSystem() {
  return (
    <LongPageSection height={965} bg="#0d0617">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#f59e26]">
        RANKING SYSTEM
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">排名系统与社交激励</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f59e26]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ad]">
        排名系统将个人表现转化为可见的社交地位。积分排行榜触发追赶动机，段位徽章建立群体归属感，赛季专属奖励提供优越感——三者协同构成完整的社交激励闭环。驻守时长排名额外为非战斗型玩家提供了可达成的成就路径。
      </p>

      {[
        [caseNineAssets.rankingLode, 80, '矿区详情'],
        [caseNineAssets.rankingStay, 336, '驻守时长排名'],
        [caseNineAssets.rankingReward, 592, '赛季排名奖励'],
      ].map(([src, left, label]) => (
        <div key={label as string}>
          <div
            className="absolute top-[334px] h-[521px] w-[240px] overflow-hidden rounded-[16px] border border-[#f59e26] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            style={{ left: left as number }}
          >
            <img src={resolveAsset(src as string)} alt={label as string} className="absolute inset-0 h-full w-full rounded-[16px] object-cover" />
          </div>
          <p className="absolute top-[865px] text-[17px] font-medium text-[#f59e26]" style={{ left: left as number }}>
            {label as string}
          </p>
        </div>
      ))}

      <div className="absolute left-[880px] top-[334px] h-[520px] w-[320px]">
        <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#f59e26]">SOCIAL COMPARISON</p>
        <p className="mt-[8px] text-[22px] font-bold text-white">社会比较理论</p>

        {[
          ['上行比较', '#f59e26', '积分排行榜', '看到比自己强的人', '激发追赶动机', 75],
          ['平行比较', '#45c4e9', '段位徽章系统', '找到同水平群体', '建立归属感', 180],
          ['下行比较', '#38ad85', '赛季专属奖励', '对比未参与者', '获得优越感', 285],
        ].map(([title, color, a, b, c, top]) => (
          <div key={title as string} className="absolute left-0 w-[320px]" style={{ top: top as number }}>
            <div className="absolute left-0 top-0 h-[80px] w-[5px]" style={{ backgroundColor: color as string }} />
            <p className="absolute left-[18px] top-0 text-[18px] font-bold" style={{ color: color as string }}>
              {title as string}
            </p>
            <div className="absolute left-[18px] top-[28px] text-[15px] leading-[22px] text-[#80808c]">
              <p>{a as string}</p>
              <p>{b as string}</p>
              <p>{c as string}</p>
            </div>
          </div>
        ))}

        <div className="absolute left-0 top-[405px] h-px w-[320px] bg-white/10" />
        <p className="absolute left-0 top-[425px] text-[17px] font-medium leading-[28px] text-[#f5bf4d]">
          "排名不仅是结果的展示，
          <br />
          更是下一局的动力来源"
        </p>
        <p className="absolute left-0 top-[485px] w-[318px] text-[15px] leading-[22px] text-[#80808c]">
          Leon Festinger 的社会比较理论指出，人们通过与他人比较来评估自身能力和观点。排名系统的三个维度精准对应了三种比较方向，为不同类型的玩家都提供了持续参与的社交动力。
        </p>
      </div>
    </LongPageSection>
  );
}

function EmbermineRewardsSettlement() {
  const cards = [
    [caseNineAssets.settlementRewardA, 80, 263, '战斗结算 · 奖励发放', '通过结算页逐步揭示奖励', '强化战斗收尾的成就感'],
    [caseNineAssets.settlementRankA, 460, 263, '占领排名榜', '占领时长维度的排名', '为防守型玩家提供成就路径'],
    [caseNineAssets.settlementCollectA, 840, 263, '采集总排行', '综合采集量排行', '触发社会比较的核心驱动力'],
    [caseNineAssets.settlementRewardB, 80, 1059, '邮件详情 · 奖励发放', '通过邮件承接排名奖励', '让结算反馈延续到领取动作'],
    [caseNineAssets.settlementRankB, 460, 1059, '邮件详情 · 采集报告', '按矿脉明细回顾采集收益', '帮助玩家复盘资源获取路径'],
    [caseNineAssets.settlementCollectB, 840, 1059, '详情对比', '并列展示双方采集与排行结果', '把胜负差距讲得更直观'],
  ] as const;

  return (
    <LongPageSection height={2015} bg="#0f071c">
      <p className="absolute left-[80px] top-[60px] font-['Inter',sans-serif] text-[16px] font-semibold tracking-[4px] text-[#f59e26]">
        REWARDS & SETTLEMENT
      </p>
      <p className="absolute left-[80px] top-[90px] text-[42px] font-bold text-white">结算奖励与持续激励</p>
      <div className="absolute left-[80px] top-[148px] h-[4px] w-[80px] rounded-[2px] bg-[#f59e26]" />
      <p className="absolute left-[80px] top-[175px] w-[1120px] text-[20px] leading-[28px] text-[#a6a6ad]">
        结算界面是整场体验的情感终点。奖励弹窗采用级联展开动效逐步揭示内容，最大化惊喜感。设计运用了禀赋效应（Endowment Effect）——30分钟内积累的资源和排名形成了心理所有权，结算时的奖励兑现强化"这是我赢得的"的拥有感。
      </p>

      {cards.map(([src, left, top, title, line1, line2]) => (
        <div key={`${title}-${top}`}>
          <div
            className="absolute h-[651px] w-[300px] overflow-hidden rounded-[16px] border border-[#f59e26] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            style={{ left, top }}
          >
            <img
              src={resolveAsset(src)}
              alt={title}
              className={
                title === '占领排名榜' || title === '采集总排行'
                  ? 'absolute inset-0 h-full w-full object-contain'
                  : 'absolute inset-0 h-full w-full rounded-[16px] object-cover'
              }
            />
          </div>
          <p className="absolute text-[17px] font-bold text-[#f59e26]" style={{ left, top: top + 661 }}>
            {title}
          </p>
          <div className="absolute text-[15px] leading-[22px] text-[#80808c]" style={{ left, top: top + 689, width: 320 }}>
            <p>{line1}</p>
            <p>{line2}</p>
          </div>
        </div>
      ))}

      <div className="absolute left-[80px] top-[1853px] h-[140px] w-[1120px] bg-[linear-gradient(90deg,rgba(31,36,56,0.6)_0%,rgba(38,46,71,0.8)_50%,rgba(31,36,56,0.6)_100%)]">
        <p className="absolute left-[18px] top-[15px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#f59e26]">ENDOWMENT EFFECT</p>
        <p className="absolute left-[18px] top-[43px] text-[22px] font-bold text-white">禀赋效应与情感闭环</p>
        <p className="absolute left-[18px] top-[80px] w-[1084px] text-[18px] leading-[28px] text-[#a6a6ad]">
          玩家在30分钟内投入的时间和精力转化为对资源、排名的心理所有权。结算环节的设计目标是将这种"虚拟拥有感"最大化——级联展开的奖励动效制造仪式感，排名榜的社交曝光满足表现欲，下赛季倒计时则将"满足"转化为"期待"，完成从本局到下局的情感桥接。
        </p>
      </div>
    </LongPageSection>
  );
}

function EmbermineQuickEntry() {
  const flowSteps = [
    ['01', '临时退出', false],
    ['02', '局外主界面', false],
    ['03', '抽屉入口', true],
    ['04', '返回局内', false],
  ] as const;

  const valueCards = [
    ['不打扰', '收起贴边', 578, 'rgba(69,196,233,0.55)'],
    ['不断线', '入口保留', 781, '#45c4e9'],
    ['快返回', '一键回流', 984, 'rgba(69,196,233,0.55)'],
  ] as const;

  return (
    <LongPageSection height={1035} bg="#0d0617">
      <p className="absolute left-[80px] top-[58px] font-['Inter',sans-serif] text-[15px] font-semibold tracking-[0.18em] text-[#75e1ff]">
        RETURN PATH
      </p>
      <p className="absolute left-[80px] top-[92px] text-[42px] font-bold leading-[54px] text-white">快捷入口</p>
      <div className="absolute left-[80px] top-[146px] h-[4px] w-[96px] rounded-[2px] bg-[#45c4e9]" />
      <p className="absolute left-[80px] top-[174px] w-[760px] text-[20px] leading-[30px] text-[#91919e]">
        局外保留抽屉入口：收起不打扰，点击即回流。
      </p>

      <div className="absolute left-[170px] top-[270px] h-[694px] w-[320px] overflow-hidden rounded-[18px] border-[1.5px] border-[rgba(69,196,233,0.9)] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <img
          src={resolveAsset(caseNineAssets.entryIdle)}
          alt="燃海矿区快捷入口"
          className="absolute inset-0 h-full w-full rounded-[18px] object-cover"
        />
      </div>
      <div className="absolute left-[158px] top-[371px] -translate-x-full text-right text-[13px] font-bold leading-[26px] text-[#75e1ff]">
        <p>快捷入口</p>
        <p>点击回到局内</p>
      </div>

      <div className="absolute left-[578px] top-[292px] h-[300px] w-[590px] rounded-[18px] border border-[rgba(69,196,233,0.28)] bg-[rgba(18,12,32,0.9)]">
        <p className="absolute left-[36px] top-[34px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#75e1ff]">FLOW</p>
        <p className="absolute left-[36px] top-[62px] w-[420px] text-[28px] font-bold leading-[36px] text-white">从局内退出，不丢失返回路径</p>

        {flowSteps.map(([num, label, active], index) => {
          const left = 42 + index * 145;
          const accent = active ? '#45c4e9' : '#1e4f73';
          const numberColor = active ? '#0d0617' : '#75e1ff';
          const labelColor = active ? '#ffffff' : '#d2d2dc';
          return (
            <div key={num}>
              <div
                className="absolute top-[150px] flex h-[64px] w-[64px] items-center justify-center rounded-full border"
                style={{
                  left,
                  borderColor: '#45c4e9',
                  backgroundColor: accent,
                }}
              >
                <span className="font-['Inter',sans-serif] text-[20px] font-semibold leading-[16px]" style={{ color: numberColor }}>
                  {num}
                </span>
              </div>
              <p className="absolute top-[225px] whitespace-nowrap text-[17px] font-bold leading-[22px]" style={{ left: left - 2, color: labelColor }}>
                {label}
              </p>
              {index < flowSteps.length - 1 ? (
                <div className="absolute top-[181px] h-[2px] w-[58px] rounded-[1px] bg-[rgba(69,196,233,0.5)]" style={{ left: left + 74 }} />
              ) : null}
            </div>
          );
        })}
      </div>

      {valueCards.map(([title, subtitle, left, accent]) => (
        <div key={title} className="absolute top-[640px] h-[140px] w-[184px] rounded-[16px] border border-[rgba(69,196,233,0.22)] bg-[rgba(22,18,38,0.88)]" style={{ left }}>
          <div className="absolute left-0 top-0 h-[4px] w-[184px] rounded-[2px]" style={{ backgroundColor: accent }} />
          <p className="absolute left-[22px] top-[39px] text-[28px] font-bold leading-[34px] text-white">{title}</p>
          <p className="absolute left-[22px] top-[77px] text-[17px] leading-[24px] text-[#91919e]">{subtitle}</p>
        </div>
      ))}

      <div className="absolute left-[578px] top-[852px] h-[54px] w-[4px] rounded-[2px] bg-[rgba(69,196,233,0.85)]" />
      <p className="absolute left-[600px] top-[846px] w-[500px] text-[28px] font-bold leading-[36px] text-white">离开矿区 ≠ 断开矿区</p>
      <p className="absolute left-[600px] top-[890px] w-[460px] text-[18px] leading-[28px] text-[#91919e]">
        保留一个低干扰入口，让玩家随时回到局内。
      </p>
    </LongPageSection>
  );
}

function EmbermineDesignReview() {
  return (
    <LongPageSection height={2140} bg="#0d0617">
      <p className="absolute left-[80px] top-[80px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#f47820]">DESIGN SUMMARY</p>
      <p className="absolute left-[80px] top-[115px] text-[48px] font-black text-white">设计回顾</p>
      <div className="absolute left-[80px] top-[178px] h-[5px] w-[80px] bg-[#f47820]" />
      <p className="absolute left-[80px] top-[210px] w-[1120px] text-[20px] leading-[32px] text-[#a6a6ad]">
        燃海矿区是一场在30分钟内完成的限时PvP策略活动。它的交互设计核心挑战在于：如何在极短的时间窗口内，让玩家完成"理解规则→制定策略→执行操作→获取反馈→调整方向"的完整决策循环，同时保持持续的紧张感和掌控感。
      </p>
      <p className="absolute left-[80px] top-[295px] text-[20px] font-medium text-[#ccccd1]">以下是贯穿整个设计过程的三个关键思考。</p>
      <div className="absolute left-[80px] top-[360px] h-px w-[1120px] bg-white/10" />

      <p className="absolute left-[80px] top-[400px] text-[64px] font-bold text-[#f47820]/15">01</p>
      <p className="absolute left-[170px] top-[420px] text-[28px] font-bold text-white">时间压力下的信息架构</p>
      <p className="absolute left-[80px] top-[480px] w-[540px] text-[20px] leading-[32px] text-[#a6a6ad]">
        30分钟的限时机制意味着玩家没有时间"慢慢探索"。每一层信息都必须在玩家需要的时刻精准呈现——不早也不晚。
      </p>
      <p className="absolute left-[80px] top-[570px] w-[540px] text-[18px] leading-[30px] text-[#80808c]">
        入口阶段通过渐进式披露，将活动规则、时间选择、技能配置分步呈现，避免信息过载；战斗阶段则将关键状态（矿车进度、剩余时间、技能冷却）始终保持在视觉焦点区域，让玩家无需主动搜索就能获取决策所需信息。
      </p>
      <p className="absolute left-[80px] top-[700px] w-[540px] text-[20px] font-medium leading-[32px] text-[#f47820]">
        这种"被动获取"的信息设计，本质上是在时间压力下对认知负荷的精确管理。
      </p>
      <div className="absolute left-[700px] top-[480px] h-[280px] w-[480px] rounded-[16px] bg-[#120a1f]">
        <p className="absolute left-[20px] top-[30px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#f47820]">关键数据</p>
        <div className="absolute left-[20px] top-[60px] h-px w-[440px] bg-white/10" />
        <p className="absolute left-[20px] top-[90px] text-[72px] font-bold text-[#f47820]">5</p>
        <p className="absolute left-[110px] top-[125px] text-[20px] font-medium text-[#d1d1d6]">个阶段</p>
        <div className="absolute left-[20px] top-[182px] text-[17px] leading-[28px] text-[#80808c]">
          <p>从报名到结算的完整流程分解</p>
          <p>每个阶段承担明确的信息传递任务</p>
        </div>
        <p className="absolute left-[220px] top-[90px] text-[72px] font-bold text-[#45c4e9]">39</p>
        <p className="absolute left-[320px] top-[125px] text-[20px] font-medium text-[#d1d1d6]">个独立界面</p>
      </div>

      <div className="absolute left-[80px] top-[841px] h-px w-[1120px] bg-white/10" />
      <p className="absolute left-[80px] top-[881px] text-[64px] font-bold text-[#38ad85]/15">02</p>
      <p className="absolute left-[170px] top-[901px] text-[28px] font-bold text-white">策略深度与操作简洁的平衡</p>
      <p className="absolute left-[80px] top-[971px] w-[540px] text-[20px] leading-[32px] text-[#a6a6ad]">
        燃海矿区包含采矿、熔炼、战斗、建筑占领、技能释放等多个子系统。设计的关键不是让每个系统都"很复杂"，而是让它们在组合时产生策略深度。
      </p>
      <p className="absolute left-[80px] top-[1083px] w-[540px] text-[18px] leading-[30px] text-[#80808c]">
        单个操作尽可能简洁——一次点击完成采集、一次拖拽完成行军、一次选择确认技能。但这些简单操作之间的时序关系、资源竞争和空间博弈，构成了真正的策略层。
      </p>
      <div className="absolute left-[700px] top-[971px] h-[280px] w-[480px] rounded-[16px] bg-[#120a1f]">
        <p className="absolute left-[20px] top-[30px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#38ad85]">操作设计哲学</p>
        <div className="absolute left-[20px] top-[60px] h-px w-[440px] bg-white/10" />
        <p className="absolute left-[20px] top-[80px] text-[36px] font-bold text-[#38ad85]">简单操作</p>
        <p className="absolute left-[210px] top-[88px] text-[28px] font-bold text-[#80808c]">×</p>
        <p className="absolute left-[250px] top-[80px] text-[36px] font-bold text-white">复杂组合</p>
        <div className="absolute left-[20px] top-[130px] h-px w-[440px] bg-white/10" />
        <p className="absolute left-[20px] top-[150px] text-[17px] text-[#80808c]">点击采集 · 拖拽行军 · 选择技能</p>
        <p className="absolute left-[20px] top-[178px] text-[17px] text-[#80808c]">单步操作控制在 1-2 次交互内完成</p>
        <div className="absolute left-[20px] top-[210px] h-[8px] w-[8px] bg-[#38ad85]" />
        <p className="absolute left-[40px] top-[206px] w-[420px] text-[17px] text-[#d1d1d6]">
          95 屏完整状态覆盖，确保每个操作都有即时反馈
        </p>
      </div>
      <p className="absolute left-[80px] top-[1301px] w-[1120px] text-[20px] font-medium leading-[32px] text-[#66d9a6]">
        地图系统的设计尤其体现这一点：移动、建造、传送三种操作各自简单，但组合使用时能产生丰富的战术变化。
      </p>

      <div className="absolute left-[80px] top-[1401px] h-px w-[1120px] bg-white/10" />
      <p className="absolute left-[80px] top-[1441px] text-[64px] font-bold text-[#f59e26]/15">03</p>
      <p className="absolute left-[170px] top-[1461px] text-[28px] font-bold text-white">情感节奏的设计</p>
      <p className="absolute left-[80px] top-[1531px] w-[1120px] text-[20px] leading-[32px] text-[#a6a6ad]">
        好的限时活动不是30分钟的持续高压，而是有起有伏的情感曲线。这条曲线不是偶然形成的，而是通过每个阶段的视觉密度、信息节奏和交互频率精心编排的。
      </p>

      {[
        [80, 1719, 72, 'rgba(244,120,32,0.2)', '报名', '#f47820', '期待', '倒计时预告', '营造期待'],
        [290, 1692, 99, 'rgba(69,196,233,0.2)', '备战', '#45c4e9', '掌控', '自由配置技能', '给予掌控感'],
        [500, 1620, 171, 'rgba(56,173,133,0.2)', '开战', '#38ad85', '兴奋', '全屏地图展开', '推向兴奋峰值'],
        [710, 1665, 126, 'rgba(139,92,246,0.2)', '采矿', '#8b5cf6', '紧张', '实时进度反馈', '维持紧张节奏'],
        [920, 1647, 144, 'rgba(245,158,38,0.2)', '结算', '#f59e26', '成就', '排名揭晓', '奖励发放'],
      ].map(([left, top, height, bg, title, color, mood, a, b]) => (
        <div key={title as string}>
          <div className="absolute w-[190px] rounded-[8px]" style={{ left: left as number, top: top as number, height: height as number, backgroundColor: bg as string }} />
          <p className="absolute text-[20px] font-bold text-white" style={{ left: (left as number) + 10, top: 1806 }}>
            {title as string}
          </p>
          <p className="absolute text-[17px] font-medium" style={{ left: (left as number) + 140, top: 1806, color: color as string }}>
            {mood as string}
          </p>
          <div className="absolute text-[15px] leading-[24px] text-[#80808c]" style={{ left: (left as number) + 10, top: 1839 }}>
            <p>{a as string}</p>
            <p>{b as string}</p>
          </div>
        </div>
      ))}

      <div className="absolute left-[80px] top-[1921px] h-px w-[1120px] bg-white/10" />
      <p className="absolute left-[80px] top-[1951px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#80808c]">OUTCOME</p>
      {[
        [80, '#f47820', '30', '分钟', '限时策略闭环'],
        [360, '#45c4e9', '39', '界面', '独立交互设计'],
        [640, '#38ad85', '95', '屏', '状态全覆盖'],
        [920, '#f59e26', '5', '阶段', '情感节奏编排'],
      ].map(([left, color, num, unit, label]) => (
        <div key={num as string}>
          <p className="absolute top-[1986px] text-[48px] font-bold" style={{ left: left as number, color: color as string }}>
            {num as string}
          </p>
          <p className="absolute top-[2004px] text-[18px] font-medium text-[#d1d1d6]" style={{ left: (left as number) + (num === '30' ? 73 : num === '39' ? 72 : num === '95' ? 71 : 39) }}>
            {unit as string}
          </p>
          <p className="absolute top-[2042px] text-[16px] text-[#80808c]" style={{ left: left as number }}>
            {label as string}
          </p>
        </div>
      ))}
    </LongPageSection>
  );
}

function EmbermineGallery() {
  const gallery = [
    caseNineAssets.entryIdle,
    caseNineAssets.mainPanel,
    caseNineAssets.timeSelectA,
    caseNineAssets.timeSelectB,
    caseNineAssets.trialPanel,
    caseNineAssets.preBattleReminder,
    caseNineAssets.preBattleCountdown,
    caseNineAssets.battleHudA,
    caseNineAssets.battleHudB,
    caseNineAssets.battleHudC,
    caseNineAssets.mapSystemDetail,
    caseNineAssets.mapSystemField,
    caseNineAssets.mapInteractMoveTown,
    caseNineAssets.mapInteractMarch,
    caseNineAssets.mapInteractBuilding,
    caseNineAssets.mapInteractTeleport,
    caseNineAssets.skillTreeOverview,
    caseNineAssets.skillTreeAdvanced,
    caseNineAssets.miningHudA,
    caseNineAssets.miningHudB,
    caseNineAssets.smeltingPanel,
    caseNineAssets.rankingReward,
    caseNineAssets.settlementRankA,
    caseNineAssets.settlementCollectA,
  ];

  return (
    <LongPageSection height={3650} bg="#0d0617">
      <p className="absolute left-[80px] top-[80px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#f47820]">DESIGN SUMMARY</p>
      <p className="absolute left-[80px] top-[115px] text-[48px] font-black text-white">视觉稿欣赏</p>
      <div className="absolute left-[80px] top-[178px] h-[5px] w-[80px] bg-[#f47820]" />

      <div className="absolute left-[80px] top-[262px] grid w-[1140px] grid-cols-4 gap-x-[50px] gap-y-[50px]">
        {gallery.map((src, index) => (
          <div key={`${src}-${index}`} className={`relative w-[240px] overflow-hidden ${index === 19 ? 'h-[525px]' : 'h-[520px]'}`}>
            <img src={resolveAsset(src)} alt={`视觉稿 ${index + 1}`} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function WishTreeCover() {
  return (
    <LongPageSection height={760} bg="#fbfaf4">
      <p className="absolute left-[88px] top-[287px] whitespace-nowrap font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        CASE STUDY
      </p>
      <div className="absolute left-[88px] top-[318px] flex h-[72px] w-[360px] flex-col justify-center font-['Inter',sans-serif] text-[72px] font-bold leading-none text-[#151515]">
        <p className="leading-[41px]">元旦许愿树</p>
      </div>
      <p className="absolute left-[88px] top-[404px] whitespace-nowrap font-['Inter',sans-serif] text-[20px] leading-[26px] text-[#66625a]">
        基于节日特性，设计相关活动，展示活动入口、许愿树状态、奖励预览与结算反馈的设计思路。
      </p>
      <div className="absolute left-[88px] top-[453px] h-[34px] w-[140px] rounded-[17px] bg-[#151515]" />
      <p className="absolute left-[98px] top-[462px] w-[120px] text-center font-['Inter',sans-serif] text-[14px] font-bold leading-[18px] text-white">限时活动</p>
      <div className="absolute left-[244px] top-[453px] h-[34px] w-[140px] rounded-[17px] bg-[#1f5b50]" />
      <p className="absolute left-[254px] top-[462px] w-[120px] text-center font-['Inter',sans-serif] text-[14px] font-bold leading-[18px] text-white">三段奖励</p>
    </LongPageSection>
  );
}

function WishTreeFactLock() {
  const cards = [
    {
      title: '已确认界面',
      accent: '#1f5b50',
      left: 88,
      copy: '野外大世界入口、活动主界面、奖励预览弹窗、恭喜获得结算弹窗、次数为 1 与次数为 0 两种状态。',
    },
    {
      title: '已确认文案',
      accent: '#c7973a',
      left: 475,
      copy: '2026年元旦许愿树、23:59:59、奖励预览、当前许愿树次数、元旦许愿、许愿结果、恭喜获得。',
    },
    {
      title: '已确认注释',
      accent: '#d65f2a',
      left: 862,
      copy: '点击弹出通用Toast；倒计时结束，当前许愿树可许愿；高级许愿树解锁。',
    },
  ] as const;

  return (
    <LongPageSection height={730} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] w-[170px] font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        00 / SOURCE READING
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        先锁定事实，再做表达
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        只把源稿中能确认的界面、文案、状态和注释放进案例；没有在稿里出现的规则，不扩写成设定。
      </p>
      {cards.map((card) => (
        <div
          key={card.title}
          className="absolute top-[260px] h-[170px] w-[330px] rounded-[5px] border border-[#e7e0d1] bg-[#fffdfa]"
          style={{ left: card.left }}
        >
          <div className="absolute left-0 top-0 h-[170px] w-[4px] rounded-[2px]" style={{ background: card.accent }} />
          <p className="absolute left-[18px] top-[18px] w-[294px] text-[20px] font-bold leading-[24px] text-[#151515]">
            {card.title}
          </p>
          <p className="absolute left-[18px] top-[52px] w-[294px] text-[16px] leading-[21px] text-[#66625a]">
            {card.copy}
          </p>
        </div>
      ))}
      <div className="absolute left-[88px] top-[565px] h-[120px] w-[1104px] rounded-[6px] bg-[#151817]" />
      <p className="absolute left-[210px] top-[609px] whitespace-nowrap text-[20px] font-bold leading-[32px] text-[#fff4d7]">
        不补设定原则：许愿次数来源、完整奖励权重、活动任务链、付费入口等，源稿未确认就不推演。
      </p>
    </LongPageSection>
  );
}

function WishTreeEntryReveal() {
  return (
    <LongPageSection height={900} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] w-[170px] font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        01 / ENTRY
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        入口：在野外主界面里露出活动
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        活动入口嵌在玩家日常停留的野外 HUD 中，右侧活动矩阵给“元旦许愿”一个可见但不打断探索的入口。
      </p>
      <PhoneFrame
        left={127}
        top={200}
        width={304}
        height={659}
        src={caseEightAssets.fieldEntry}
        rounded="rounded-[8px]"
        imageClassName="left-[-0.09%] top-[-4.7%] h-[104.7%] w-[100.19%]"
      />
      <div className="absolute left-[540px] top-[378px] h-[112px] w-[310px] rounded-[5px] border border-[#d65f2a] bg-[#fffaf0]" />
      <p className="absolute left-[556px] top-[392px] w-[278px] text-[18px] font-bold leading-[21px] text-[#151515]">入口位置</p>
      <p className="absolute left-[556px] top-[422px] w-[278px] text-[16px] leading-[19px] text-[#66625a]">
        右侧活动矩阵中出现“元旦许愿”，承接日常 HUD 的扫描路径。
      </p>
      <div className="absolute left-[367px] top-[434px] h-[2px] w-[173px] rounded-[1px] bg-[#d65f2a]" />
      <div className="absolute left-[367px] top-[319px] h-[117px] w-[2px] rounded-[1px] bg-[#d65f2a]" />
      <div className="absolute left-[364px] top-[315px] h-[8px] w-[8px] rounded-full bg-[#d65f2a]" />
      <div className="absolute left-[540px] top-[520px] h-[112px] w-[310px] rounded-[5px] border border-[#d65f2a] bg-[#fffaf0]" />
      <p className="absolute left-[556px] top-[534px] w-[278px] text-[18px] font-bold leading-[21px] text-[#151515]">场景不剥离</p>
      <p className="absolute left-[556px] top-[564px] w-[278px] text-[16px] leading-[19px] text-[#66625a]">
        底部聊天、导航、坐标仍保留，说明入口发生在玩家常驻主界面。
      </p>
      <div className="absolute left-[300px] top-[576px] h-[2px] w-[240px] rounded-[1px] bg-[#d65f2a]" />
      <div className="absolute left-[300px] top-[576px] h-[203px] w-[2px] rounded-[1px] bg-[#d65f2a]" />
      <div className="absolute left-[297px] top-[775px] h-[8px] w-[8px] rounded-full bg-[#d65f2a]" />
      <div className="absolute left-[540px] top-[200px] w-[576px] text-[16px] font-bold leading-[32px] text-[#151515]">
        <p>设计判断：</p><p>入口层保持克制，真正的节日氛围留给活动页展开；这样既不破坏主界面的效率，也能让点击后的转场更有奖励感。</p>
      </div>
    </LongPageSection>
  );
}

function WishTreeMainPanel() {
  const callouts = [
    { left: 95, top: 286, width: 300, title: '活动时间', desc: '顶部直接显示倒计时 23:59:59，给活动页建立紧迫感。', lineLeft: 395, lineTop: 342, lineWidth: 115, dotLeft: 504, dotTop: 339 },
    { left: 875, top: 296, width: 300, title: '奖励预览', desc: '入口在标题区域右侧，先看奖励再决定是否消耗次数。', lineLeft: 790, lineTop: 352, lineWidth: 85, dotLeft: 788, dotTop: 349 },
    { left: 875, top: 586, width: 300, title: '许愿树页签', desc: '位于许愿树模型下方，表示许愿树的等级，到达指定时间会自行解锁，奖励也会不同', lineLeft: 774, lineTop: 642, lineWidth: 101, dotLeft: 770, dotTop: 639 },
    { left: 95, top: 665, width: 300, title: '次数条', desc: '当前许愿树次数是行动判断的核心条件，位于按钮正上方。', lineLeft: 395, lineTop: 721, lineWidth: 195, dotLeft: 587, dotTop: 718 },
    { left: 875, top: 720, width: 300, title: '主按钮', desc: '有次数时显示“元旦许愿”，视觉权重高于底部标签。', lineLeft: 709, lineTop: 776, lineWidth: 166, dotLeft: 703, dotTop: 773 },
  ] as const;

  return (
    <LongPageSection height={930} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] w-[170px] font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        02 / HOME ANATOMY
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        主界面：所有信息向许愿树收束
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        时间、奖励、等级树、次数、按钮形成自上而下的决策路径，玩家无需阅读长说明即可判断“现在能不能许愿”。
      </p>

      <div className="absolute left-[500px] top-[220px] h-[650px] w-[300px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.mainPanel} alt="许愿树主界面" className="absolute inset-0 h-full w-full object-contain" />
      </div>

      {callouts.map((item) => (
        <div key={`${item.title}-${item.top}`}>
          <div className="absolute rounded-[5px] border border-[#d65f2a] bg-[#fffaf0]" style={{ left: item.left, top: item.top, width: item.width, height: 112 }} />
          <p className="absolute text-[18px] font-bold leading-[21px] text-[#151515]" style={{ left: item.left + 16, top: item.top + 14, width: item.width - 32 }}>
            {item.title}
          </p>
          <p className="absolute text-[16px] leading-[19px] text-[#66625a]" style={{ left: item.left + 16, top: item.top + 44, width: item.width - 32 }}>
            {item.desc}
          </p>
          <div className="absolute h-[2px] rounded-[1px] bg-[#d65f2a]" style={{ left: item.lineLeft, top: item.lineTop, width: item.lineWidth }} />
          <div className="absolute h-[8px] w-[8px] rounded-full bg-[#d65f2a]" style={{ left: item.dotLeft, top: item.dotTop }} />
        </div>
      ))}
    </LongPageSection>
  );
}

function WishTreeCountState() {
  return (
    <LongPageSection height={900} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] w-[170px] font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        03 / COUNT STATE
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        次数驱动按钮语义
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        同一主界面通过次数变化改变 CTA：有次数时鼓励立即许愿，次数为 0 时转向查看结果。
      </p>

      <div className="absolute left-[190px] top-[210px] h-[563px] w-[260px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.countOne} alt="次数为1状态" className="absolute inset-0 h-full w-full object-contain" />
      </div>
      <div className="absolute left-[795px] top-[210px] h-[563px] w-[260px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.countZero} alt="次数为0状态" className="absolute inset-0 h-full w-full object-contain" />
      </div>

      <p className="absolute left-[577px] top-[450px] whitespace-nowrap text-[18px] font-bold leading-[23px] text-[#d65f2a]">
        次数归零后
      </p>
      <div className="absolute left-[512px] top-[488px] h-[3px] w-[220px] rounded-[1.5px] bg-[#d65f2a]" />
      <div
        className="absolute left-[713px] top-[479px] h-0 w-0 border-y-[10px] border-l-[14px] border-y-transparent border-l-[#d65f2a]"
        style={{ transform: 'rotate(0deg)' }}
      />

      <div className="absolute left-[125px] top-[790px] h-[90px] w-[390px] rounded-[5px] border border-[#e7e0d1] bg-[#fffdfa]" />
      <div className="absolute left-[125px] top-[790px] h-[90px] w-[4px] rounded-[2px] bg-[#d65f2a]" />
      <p className="absolute left-[143px] top-[808px] w-[314px] text-[19px] font-bold leading-[24px] text-[#151515]">次数 = 1</p>
      <p className="absolute left-[143px] top-[842px] whitespace-nowrap text-[16px] leading-[21px] text-[#66625a]">
        按钮文案为“元旦许愿”，行动明确、结果未发生。
      </p>

      <div className="absolute left-[730px] top-[790px] h-[90px] w-[390px] rounded-[5px] border border-[#e7e0d1] bg-[#fffdfa]" />
      <div className="absolute left-[730px] top-[790px] h-[90px] w-[4px] rounded-[2px] bg-[#1f5b50]" />
      <p className="absolute left-[748px] top-[808px] w-[354px] text-[19px] font-bold leading-[24px] text-[#151515]">次数 = 0</p>
      <p className="absolute left-[748px] top-[842px] whitespace-nowrap text-[16px] leading-[21px] text-[#66625a]">
        按钮文案为“许愿结果”，从发起动作转入查看反馈。
      </p>
    </LongPageSection>
  );
}

function WishTreeRewardPreview() {
  const notes = [
    { top: 358, title: '三级标签', body: '低级 / 中级 / 高级对应三棵树，减少玩家在奖励层级上的认知转换。', lineLeft: 451, lineTop: 414, lineWidth: 109, dotLeft: 445, dotTop: 411 },
    { top: 485, title: '稀有奖励说明', body: '“每次许愿最多出现两个稀有奖励”是源稿可见规则，需要放在概率格之前。', lineLeft: 435, lineTop: 541, lineWidth: 125, dotLeft: 431, dotTop: 538 },
    { top: 644, title: '概率格', body: '源稿可见 20% 概率信息，案例中只保留已确认比例，不补全未知奖励表。', lineLeft: 325, lineTop: 700, lineWidth: 235, lineVLeft: 325, lineVTop: 648, lineVHeight: 54, dotLeft: 322, dotTop: 648 },
  ] as const;

  return (
    <LongPageSection height={880} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] whitespace-nowrap font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        04 / REWARD PREVIEW
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        奖励预览：让概率与稀有说明先被看见
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        预览弹窗用标签页区分低级、中级、高级奖励，并单独强调稀有奖励规则。
      </p>

      <div className="absolute left-[170px] top-[200px] h-[649px] w-[300px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.rewardPreview} alt="奖励预览弹窗" className="absolute left-0 top-[-4.75%] h-[104.72%] w-full max-w-none" />
      </div>

      {notes.map((note) => (
        <div key={`${note.title}-${note.top}`}>
          <div className="absolute left-[560px] h-[112px] w-[330px] rounded-[5px] border border-[#d65f2a] bg-[#fffaf0]" style={{ top: note.top }} />
          <p className="absolute left-[576px] text-[18px] font-bold leading-[21px] text-[#151515]" style={{ top: note.top + 14, width: 298 }}>
            {note.title}
          </p>
          <p className="absolute left-[576px] text-[16px] leading-[19px] text-[#66625a]" style={{ top: note.top + 44, width: 298 }}>
            {note.body}
          </p>
          <div className="absolute h-[2px] rounded-[1px] bg-[#d65f2a]" style={{ left: note.lineLeft, top: note.lineTop, width: note.lineWidth }} />
          {'lineVLeft' in note ? (
            <div className="absolute w-[2px] rounded-[1px] bg-[#d65f2a]" style={{ left: note.lineVLeft, top: note.lineVTop, height: note.lineVHeight }} />
          ) : null}
          <div className="absolute h-[8px] w-[8px] rounded-full bg-[#d65f2a]" style={{ left: note.dotLeft, top: note.dotTop }} />
        </div>
      ))}

      <div className="absolute left-[560px] top-[200px] w-[560px] text-[16px] font-bold leading-[32px] text-[#151515]"><p>弹窗的价值在于预期管理：</p><p>玩家不是被动抽奖，而是在行动前知道奖励层级、稀有提示与概率线索。</p></div>
    </LongPageSection>
  );
}

function WishTreeResultFeedback() {
  const notes = [
    { top: 305, title: '结果标题', body: '“恭喜获得”作为单一情绪反馈，强化抽奖完成感。', lineLeft: 316, lineTop: 361, lineWidth: 244, lineVLeft: 316, lineVTop: 361, lineVHeight: 74, dotLeft: 313, dotTop: 427 },
    { top: 486, title: '奖励网格', body: '奖励以格子呈现，包含 Lv.99 等可见物品等级信息。', lineLeft: 436, lineTop: 542, lineWidth: 124, dotLeft: 430, dotTop: 539 },
    { top: 640, title: '关闭方式', body: '源稿文案为“点击空白区域关闭”，说明关闭动作依赖遮罩区域而非额外按钮。', lineLeft: 372, lineTop: 696, lineWidth: 188, dotLeft: 368, dotTop: 693 },
  ] as const;

  return (
    <LongPageSection height={880} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] whitespace-nowrap font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        05 / RESULT FEEDBACK
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        结算弹窗：把许愿动作压缩成一次明确反馈
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        许愿后的结果面板只保留“获得了什么”和“如何关闭”，避免在奖励瞬间塞入新任务。
      </p>

      <div className="absolute left-[168px] top-[204px] h-[650px] w-[300px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.resultFeedback} alt="许愿结果反馈" className="absolute inset-0 h-full w-full rounded-[8px] object-cover" />
      </div>

      {notes.map((note) => (
        <div key={`${note.title}-${note.top}`}>
          <div className="absolute left-[560px] h-[112px] w-[310px] rounded-[5px] border border-[#d65f2a] bg-[#fffaf0]" style={{ top: note.top }} />
          <p className="absolute left-[576px] text-[18px] font-bold leading-[21px] text-[#151515]" style={{ top: note.top + 14, width: 278 }}>
            {note.title}
          </p>
          <p className="absolute left-[576px] text-[16px] leading-[19px] text-[#66625a]" style={{ top: note.top + 44, width: 278 }}>
            {note.body}
          </p>
          <div className="absolute h-[2px] rounded-[1px] bg-[#d65f2a]" style={{ left: note.lineLeft, top: note.lineTop, width: note.lineWidth }} />
          {'lineVLeft' in note ? (
            <div className="absolute w-[2px] rounded-[1px] bg-[#d65f2a]" style={{ left: note.lineVLeft, top: note.lineVTop, height: note.lineVHeight }} />
          ) : null}
          <div className="absolute h-[8px] w-[8px] rounded-full bg-[#d65f2a]" style={{ left: note.dotLeft, top: note.dotTop }} />
        </div>
      ))}
    </LongPageSection>
  );
}

function WishTreeClosedLoop() {
  const steps = [
    { left: 88, title: '野外入口', desc: '右侧活动入口' },
    { left: 308, title: '活动首页', desc: '树与次数判断' },
    { left: 528, title: '奖励预览', desc: '标签页与概率' },
    { left: 748, title: '元旦许愿', desc: '消耗可用次数' },
    { left: 968, title: '结果反馈', desc: '恭喜获得弹窗' },
  ] as const;

  return (
    <LongPageSection height={840} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] whitespace-nowrap font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        06 / CORE LOOP
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        从入口到反馈的闭环
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        把零散画板重新组织成一个可复述的玩家路径：发现活动、进入活动、预览奖励、执行许愿、查看结果、等待下一次。
      </p>

      {steps.map((step, index) => (
        <div key={step.title}>
          <div className="absolute top-[235px] h-[116px] w-[180px] rounded-[4px] border border-[#e7e0d1] bg-[#fffdfa]" style={{ left: step.left }} />
          <div className="absolute top-[257px] h-[8px] w-[8px] rounded-full bg-[#1f5b50]" style={{ left: step.left + 20 }} />
          <p className="absolute top-[249px] text-[18px] font-bold leading-[23px] text-[#151515]" style={{ left: step.left + 44, width: 120 }}>
            {step.title}
          </p>
          <p className="absolute top-[287px] text-[16px] leading-[19px] text-[#66625a]" style={{ left: step.left + 44, width: 120 }}>
            {step.desc}
          </p>
          {index < steps.length - 1 ? (
            <div className="absolute left-[268px] top-[292px] h-[3px] w-[40px] rounded-[1.5px] bg-[#d65f2a]" style={{ left: step.left + 180 }} />
          ) : null}
        </div>
      ))}

      <div className="absolute left-[88px] top-[384px] h-[433px] w-[200px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.coreLoopHome} alt="活动首页流程图" className="absolute inset-0 h-full w-full object-contain" />
      </div>
      <div className="absolute left-[308px] top-[385px] h-[432px] w-[200px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.coreLoopPreview} alt="奖励预览流程图" className="absolute left-0 top-[-4.87%] h-[104.88%] w-full max-w-none" />
      </div>
      <div className="absolute left-[528px] top-[384px] h-[433px] w-[200px] overflow-hidden rounded-[8px]">
        <img src={caseEightAssets.coreLoopResult} alt="结果反馈流程图" className="absolute left-0 top-[-4.77%] h-[104.71%] w-full max-w-none" />
      </div>

      <div className="absolute left-[792px] top-[385px] w-[280px] text-[16px] font-bold leading-[32px] text-[#151515]">
        <p>每一步都回答玩家一个问题：</p><p>在哪进入？</p><p>能不能许愿？</p><p>奖励是什么？</p><p>许愿后得到什么？</p><p>下一次什么时候可许愿？</p>
      </div>
    </LongPageSection>
  );
}

function WishTreeSpecToDev() {
  const headers = [
    { left: 118, label: '触发点' },
    { left: 388, label: '条件' },
    { left: 658, label: '界面响应' },
    { left: 928, label: '设计目的' },
  ] as const;
  const rows = [
    ['活动入口', '点击“元旦许愿”', '进入“元旦许愿树”界面', '入口放在主界面，清晰可见，方便玩家知晓活动'],
    ['奖励预览', '点击奖励预览', '打开奖励预览弹窗', '低/中/高级标签可见，方便玩家知道活动奖励'],
    ['次数可用', '当前许愿树次数: 1', '按钮显示“元旦许愿”', '进入许愿结果流程'],
    ['次数为 0', '当前许愿树次数: 0', '按钮显示“许愿结果”', '避免继续消耗'],
    ['结算反馈', '许愿后', '弹出“恭喜获得”', '空白区域关闭，方便玩家关闭界面'],
    ['倒计时/解锁', '计时结束或高级解锁', 'Toast/状态提示', '不补充未知解锁条件，所见即所得，简化和降低参与门槛。'],
  ] as const;

  return (
    <LongPageSection height={880} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] whitespace-nowrap font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        07 / INTERACTION SPEC
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">
        交互说明要能落回开发与特效
      </h2>
      <p className="absolute left-[88px] top-[142px] whitespace-nowrap text-[20px] leading-[26px] text-[#66625a]">
        把源稿里的程序、UI、特效关注点转译成可执行说明：触发、界面响应、反馈、未知项。
      </p>

      {headers.map((header) => (
        <p key={header.label} className="absolute top-[245px] w-[230px] text-[17px] font-bold leading-[21px] text-[#d65f2a]" style={{ left: header.left }}>
          {header.label}
        </p>
      ))}

      {rows.map((row, index) => {
        const top = 300 + index * 72;
        const bg = index % 2 === 0 ? '#17231f' : '#1d2924';
        return (
          <div key={row[0]}>
            <div className="absolute left-[98px] h-[56px] w-[1084px] rounded-[3px] border border-[#e7e0d1]" style={{ top, background: bg }} />
            <p className="absolute left-[118px] text-[18px] font-bold leading-[18px] text-[#151515]" style={{ top: top + 19, width: 235 }}>{row[0]}</p>
            <p className="absolute left-[388px] text-[16px] leading-[18px] text-[#66625a]" style={{ top: top + 19, width: 235 }}>{row[1]}</p>
            <p className="absolute left-[658px] text-[16px] leading-[18px] text-[#66625a]" style={{ top: top + 19, width: 235 }}>{row[2]}</p>
            <p className="absolute left-[928px] text-[16px] leading-[18px] text-[#66625a]" style={{ top: top + 12, width: 235 }}>{row[3]}</p>
          </div>
        );
      })}

      <div className="absolute left-[88px] top-[770px] h-[90px] w-[1104px] rounded-[6px] bg-[#151817]" />
      <p className="absolute left-[304px] top-[799px] whitespace-nowrap text-[16px] font-bold leading-[32px] text-[#fff4d7]">
        核心精髓：用树承载节日、等级、时间和奖励，把复杂活动压缩成玩家一眼能理解的状态判断。
      </p>
    </LongPageSection>
  );
}

function WishTreeGallery() {
  const frames = [
    { left: 88, cropLeft: '-113.9%' },
    { left: 375, cropLeft: '-228.49%' },
    { left: 662, cropLeft: '-343.89%' },
    { left: 949, cropLeft: '-457.63%' },
  ] as const;

  return (
    <LongPageSection height={840} bg="#fbfaf4">
      <div className="absolute left-[88px] top-[30px] h-[2px] w-[1104px] rounded-[1px] bg-[#151515]" />
      <p className="absolute left-[88px] top-[52px] whitespace-pre font-['Inter',sans-serif] text-[15px] font-bold leading-[19px] text-[#d65f2a]">
        {'07 / F I N A L   D E S I G N'}
      </p>
      <h2 className="absolute left-[88px] top-[84px] w-[860px] text-[38px] font-bold leading-[41px] text-[#151515]">效果图欣赏</h2>
      {frames.map((frame, index) => (
        <div key={index} className="absolute top-[208px] h-[520px] w-[240px] overflow-hidden" style={{ left: frame.left }}>
          <img
            src={caseEightAssets.finalGallery}
            alt={`效果图 ${index + 1}`}
            className="absolute left-0 top-0 h-full max-w-none"
            style={{ width: '557.78%', left: frame.cropLeft }}
          />
        </div>
      ))}
    </LongPageSection>
  );
}

function WishTreeCase() {
  return (
    <div className="wish-tree-dark space-y-8">
      <WishTreeCover />
      <WishTreeFactLock />
      <WishTreeEntryReveal />
      <WishTreeMainPanel />
      <WishTreeCountState />
      <WishTreeRewardPreview />
      <WishTreeResultFeedback />
      <WishTreeClosedLoop />
      <WishTreeSpecToDev />
      <WishTreeGallery />
    </div>
  );
}

function EmbermineCase() {
  return (
    <div className="space-y-10">
      <EmbermineHero />
      <EmbermineOverview />
      <EmbermineLifecycle />
      <EmbermineEntryDiscovery />
      <EmbermineMainPanel />
      <EmbermineTimeSelection />
      <EmbermineBattleField />
      <EmbermineMapOps />
      <EmbermineBuildingsSkills />
      <EmbermineEndgame />
      <EmbermineGameplayFlow />
      <EmbermineSummary />
      <EmbermineSmeltingSystem />
      <EmbermineRankingSystem />
      <EmbermineRewardsSettlement />
      <EmbermineQuickEntry />
      <EmbermineDesignReview />
      <EmbermineGallery />
    </div>
  );
}

function CrossServerCover() {
  return (
    <LongPageSection height={900} bg="#292e3d">
      <div className="absolute left-[900px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(84,102,191,0.18)_0%,rgba(84,102,191,0.1)_42%,rgba(84,102,191,0)_72%)]" />
      <div className="absolute left-[-80px] top-[650px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(84,102,191,0.18)_0%,rgba(84,102,191,0.08)_44%,rgba(84,102,191,0)_74%)]" />
      <div className="absolute left-[780px] top-0 h-[900px] w-[500px] bg-gradient-to-r from-[#5466bf00] to-[#5466bf0f]" />
      <div className="absolute left-[900px] top-[-50px] h-[300px] w-[300px] rounded-full border border-[#5466bf]/20" />
      <div className="absolute left-[1050px] top-[150px] h-[160px] w-[160px] rounded-full border border-[#5466bf]/18" />
      <div className="absolute left-[780px] top-0 h-[1px] w-[500px] origin-left rotate-[30deg] bg-[#5466bf]/25" />
      <div className="absolute left-[850px] top-0 h-[1px] w-[400px] origin-left rotate-[30deg] bg-[#5466bf]/18" />
      <div className="absolute left-0 top-[800px] h-px w-full bg-[#5466bf]/18" />

      <div className="absolute left-[100px] top-[300px] h-[5px] w-[80px] rounded-[2px] bg-[#5466bf]" />
      <h2 className="absolute left-[100px] top-[320px] text-[82px] font-bold leading-none tracking-[12px] text-white">
        跨服海战
      </h2>
      <p className="absolute left-[106px] top-[438px] font-['Inter',sans-serif] text-[18px] font-semibold tracking-[6px] text-[#8c9ee0]">
        CROSS-SERVER SYSTEM
      </p>
      <div className="absolute left-[120px] top-[478px] h-px w-[520px] bg-white/20" />
      <div className="absolute left-[100px] top-[500px] text-[16px] leading-[28px] text-white/70">
        <p>SLG游戏跨服玩法交互设计方案</p>
        <p>基于多战区联动的大世界交互体验重构</p>
      </div>
      <div className="absolute left-[100px] top-[580px] flex h-[32px] w-[164px] items-center justify-center rounded-full bg-[#5466bf] text-[14px] font-bold text-white">
        打通服务器壁垒
      </div>

      <div className="absolute left-[950px] top-[400px] grid grid-cols-6 gap-[16px]">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-[4px] w-[4px] rounded-full bg-[#8c9ee0]/60" />
        ))}
      </div>
      {[950, 1010, 1070, 1130, 1190].map((left, index) => (
        <span
          key={left}
          className="absolute h-[6px] w-[6px] rounded-[1px] bg-[#5466bf]"
          style={{ left, top: index % 2 === 0 ? 700 : 740, opacity: 0.15 + index * 0.03 }}
        />
      ))}
    </LongPageSection>
  );
}

function CrossServerBackground() {
  const goals: [string, string, [string, string]][] = [
    ['#5466bf', '状态感知', ['战区标识常驻 + 页签样式区分', '让玩家随时知道「我在哪个服」']],
    ['#4db28c', '流程顺畅', ['1秒云雾过渡 + 四层决策树自动判断', '切换零感知，无需理解跨服逻辑']],
    ['#e58c40', '规则透明', ['免消耗 + 5分钟冷却 + 二次确认', '鼓励探索但约束滥用']],
  ];

  return (
    <LongPageSection height={650} bg="#1a1c29">
      <div className="absolute left-[100px] top-[44px] h-[340px] w-[2px] bg-[#5466bf]/15" />
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">设计背景</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#808594]">
        DESIGN BACKGROUND
      </p>
      <div className="absolute left-[120px] top-[184px] text-[36px] font-bold leading-[52px] text-[#5466bf]">
        <p>如何让跨服切换</p>
        <p>「无感」？</p>
      </div>
      <div className="absolute left-[120px] top-[314px] w-[360px] text-[14px] leading-[24px] text-[#b2b8c2]">
        <p>跨服系统需要在不打断玩家治理节奏的</p>
        <p>前提下，实现多服务器间的无缝切换与协作。</p>
      </div>
      <div className="absolute left-[542px] top-[125px] flex flex-col gap-[24px]">
        {goals.map(([color, title, lines]) => (
          <div key={title} className="relative h-[150px] w-[600px] overflow-hidden rounded-[10px] bg-[#242636]">
            <div className="absolute left-0 top-0 h-full w-[4px]" style={{ background: color }} />
            <p className="absolute left-[28px] top-[30px] text-[20px] font-bold text-white">{title}</p>
            <div className="absolute left-[28px] top-[72px] text-[14px] leading-[24px] text-[#999ead]">
              <p>{lines[0]}</p>
              <p>{lines[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CrossServerFlow() {
  const steps: [string, string][] = [
    ['STEP 1', '玩家操作'],
    ['STEP 2', '跨服判断'],
    ['STEP 3', '转场切换'],
    ['STEP 4', '执行操作'],
    ['STEP 5', '状态恢复'],
  ];
  const decisions: [string, string, string, string][] = [
    ['是否在跨服战区？', '是 → 跨服流程', '否 → 本服逻辑', '80'],
    ['目标是否在本服？', '是 → 跨服流程', '否 → 本服逻辑', '360'],
    ['是否允许攻击？', '是 → 跨服流程', '否 → 本服逻辑', '640'],
    ['是否允许迁城？', '是 → 跨服流程', '否 → 本服逻辑', '920'],
  ];

  return (
    <LongPageSection height={650} bg="#333d6b">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[40px] bg-[#8c9ee0]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">核心流程总览</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#8c9ee0]">
        CORE FLOW OVERVIEW
      </p>
      {steps.map(([step, title], index) => {
        const left = [80, 315, 550, 785, 1020][index];
        return (
          <div key={title} className="absolute top-[183px] h-[120px] w-[180px] overflow-hidden rounded-[12px] bg-[#5466bf]/80 p-[16px]" style={{ left }}>
            <p className="font-['Inter',sans-serif] text-[10px] tracking-[0.2em] text-[#8c9ee0]">{step}</p>
            <p className="mt-[10px] text-[18px] font-bold text-white">{title}</p>
          </div>
        );
      })}
      {[272.5, 507.5, 742.5, 977.5].map((left) => (
        <div key={left} className="absolute top-[238px] flex h-[10px] items-center" style={{ left }}>
          <div className="h-[2px] w-[20px] bg-[#8c9ee0]" />
          <div className="h-0 w-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-[#8c9ee0] border-t-transparent" />
        </div>
      ))}
      <p className="absolute left-[124px] top-[355px] text-[16px] font-bold text-white">关键决策节点</p>
      {decisions.map(([title, yes, no], index) => (
        <div key={title} className="absolute top-[378px]" style={{ left: [124, 404, 684, 964][index] }}>
          <div className="relative h-[42px] w-[42px]">
            <div className="absolute left-[6px] top-[6px] h-[30px] w-[30px] rotate-45 rounded-[4px] bg-[#8c9ee0]" />
          </div>
          <p className="absolute left-[46px] top-[27px] whitespace-nowrap text-[13px] font-medium text-white">{title}</p>
          <p className="absolute left-[46px] top-[52px] whitespace-nowrap text-[11px] text-[#66cc80]">{yes}</p>
          <p className="absolute left-[46px] top-[70px] whitespace-nowrap text-[11px] text-[#e58066]">{no}</p>
        </div>
      ))}
      <div className="absolute left-[80px] top-[517px] h-[96px] w-[1120px] rounded-[8px] bg-[#3d4775] px-[20px] py-[12px]">
        <p className="text-[13px] font-bold text-[#8c9ee0]">为什么用多层决策树而非一次性弹窗？</p>
        <div className="mt-[10px] text-[12px] leading-[20px] text-[#ccd1e5]">
          <p>交互稿中设定了「是否在跨服战区→目标是否在本服→是否允许攻击→是否允许迁城」</p>
          <p>四层判断，系统自动逐层执行，玩家无感。一次性弹窗会暴露全部复杂度。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerEntryDecisionFigma() {
  const strategyRows = [
    ['01', '先识别所处战区', '入口触发后，先确认当前是否已在跨服战区。', 'bg-[#f3f5ff] border-[#d8def6]', '#5466bf'],
    ['02', '本服目标保持原链路', '目标仍在本服时，不增加额外提示与跳转。', 'bg-[#f7f7fa] border-[#e6e7ee]', '#737380'],
    ['03', '跨服目标进入转场', '需要跨服时，先转场再进入对应战区流程。', 'bg-[#eefaf3] border-[#cfeeda]', '#2fa66c'],
  ] as const;

  return (
    <LongPageSection height={650} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">入口决策逻辑</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        ENTRY DECISION LOGIC
      </p>
      <p className="absolute left-[120px] top-[140px] text-[22px] font-bold text-[#5466bf]">
        多层决策树，自动判断跨服/本服逻辑
      </p>

      <div className="absolute left-[120px] top-[201px] h-[262px] w-[330px] rounded-[10px] border border-[#e1e4ef] bg-white px-[26px] pt-[16px] shadow-[0_16px_34px_rgba(31,33,46,0.07)]">
        <p className="text-[20px] font-bold leading-[28px] text-[#212126]">设计要点</p>
        <div className="mt-[8px] space-y-[8px]">
          {strategyRows.map(([index, title, body, className, color]) => (
            <div key={index} className={`h-[46px] w-[276px] rounded-[8px] border px-[12px] py-[8px] ${className}`}>
              <p className="absolute w-[28px] font-['Inter',sans-serif] text-[13px] font-medium leading-[18px]" style={{ color }}>{index}</p>
              <div className="ml-[40px]">
                <p className="text-[12px] font-bold leading-[18px] text-[#212126]">{title}</p>
                <p className="text-[9px] leading-[13px] text-[#737380]">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[15px] whitespace-nowrap text-[12px] font-bold leading-[25px] text-[#5466bf]">
          系统自动判断入口归属，玩家只感知「能否直接执行」
        </p>
      </div>

      <div className="absolute left-[530px] top-[367px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#5466bf] bg-[#596bd0] text-center shadow-[0_12px_22px_rgba(53,70,166,0.24)]">
        <p className="text-[14px] font-bold leading-[20px] text-white">点击系统/玩法</p>
        <p className="text-[10px] font-medium leading-[15px] text-[#dfe5ff]">任意入口触发</p>
      </div>
      <div className="absolute left-[702px] top-[403px] h-[2px] w-[60px] rounded-full bg-[#858590]" />
      <span className="absolute left-[757px] top-[399px] h-[9px] w-[9px] rounded-full bg-[#858590]" />

      <div className="absolute left-[762px] top-[367px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#e5b24d] bg-[#fff7e8] text-center shadow-[0_8px_12px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">当前是否处于</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">跨服战区？</p>
      </div>
      <div className="absolute left-[847px] top-[439px] h-[56px] w-[2px] rounded-full bg-[#858590]" />
      <div className="absolute left-[835px] top-[453px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#2fa66c] bg-[#e5f5eb] text-[11px] font-bold text-[#2fa66c]">
        是
      </div>
      <div className="absolute left-[762px] top-[494px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#33b66f] bg-[#e7f9ee] text-center shadow-[0_8px_12px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">执行跨服流程</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">进入跨服链路</p>
      </div>

      <div className="absolute left-[934px] top-[403px] h-[2px] w-[64px] rounded-full bg-[#858590]" />
      <span className="absolute left-[993px] top-[399px] h-[9px] w-[9px] rounded-full bg-[#858590]" />
      <div className="absolute left-[951px] top-[389px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#d9594d] bg-[#fdebe8] text-[11px] font-bold text-[#d9594d]">
        否
      </div>
      <div className="absolute left-[998px] top-[367px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#e5b24d] bg-[#fff7e8] text-center shadow-[0_8px_12px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">目标是否在</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">本服？</p>
      </div>

      <div className="absolute left-[1084px] top-[314px] h-[53px] w-[2px] rounded-full bg-[#858590]" />
      <span className="absolute left-[1080px] top-[310px] h-[9px] w-[9px] rounded-full bg-[#858590]" />
      <div className="absolute left-[1071px] top-[329px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#2fa66c] bg-[#e5f5eb] text-[11px] font-bold text-[#2fa66c]">
        是
      </div>
      <div className="absolute left-[998px] top-[240px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#e1e4ef] bg-[#f1f2f6] text-center shadow-[0_8px_12px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">本服逻辑执行</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">保持原路径</p>
      </div>

      <div className="absolute left-[1084px] top-[439px] h-[54px] w-[2px] rounded-full bg-[#858590]" />
      <span className="absolute left-[1080px] top-[487px] h-[9px] w-[9px] rounded-full bg-[#858590]" />
      <div className="absolute left-[1071px] top-[449px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#d9594d] bg-[#fdebe8] text-[11px] font-bold text-[#d9594d]">
        否
      </div>
      <div className="absolute left-[998px] top-[494px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.3px] border-[#33b66f] bg-[#e7f9ee] text-center shadow-[0_8px_12px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">显示转场</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">跳转战区</p>
      </div>

      <div className="absolute left-[472px] top-[506px] h-[68px] w-[68px] rounded-full bg-[#f0f2ff]/75" />
    </LongPageSection>
  );
}

function CrossServerEntryDecisionV2() {
  const entrySources = [
    ['系统按钮', '入口按钮触发'],
    ['地图对象', '攻击 / 迁城 / 查看'],
    ['坐标链接', '聊天坐标跳转'],
  ] as const;
  const outputs = [
    ['本服直达', '目标仍在本服', '保持原操作路径', '#e9edf7', '#5362ba'],
    ['跨服转场', '目标位于外服', '先转场再执行', '#e8f7ef', '#2fa66c'],
    ['规则提示', '权限或状态受限', '弹出原因反馈', '#fff1e6', '#e18a31'],
  ] as const;
  const checks = [
    ['01', '当前位置', '玩家是否已处于跨服战区'],
    ['02', '目标归属', '目标是否属于当前服务器'],
    ['03', '操作权限', '当前行为是否允许执行'],
  ] as const;

  return (
    <LongPageSection height={720} bg="#eef1f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">入口决策逻辑</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        ENTRY DECISION LOGIC
      </p>
      <p className="absolute left-[120px] top-[140px] text-[22px] font-bold text-[#5466bf]">
        多层决策树，自动判断跨服/本服逻辑
      </p>

      <div className="absolute left-[72px] top-[214px] h-[438px] w-[1136px] overflow-hidden rounded-[30px] bg-[#171b2b] shadow-[0_28px_70px_rgba(31,36,58,0.24)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(97,125,250,0.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(47,166,108,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="absolute left-[36px] top-[36px] h-[88px] w-[88px] rounded-full border border-white/10" />
        <div className="absolute right-[68px] top-[48px] grid grid-cols-7 gap-[12px] opacity-50">
          {Array.from({ length: 35 }).map((_, index) => (
            <span key={index} className="h-[3px] w-[3px] rounded-full bg-[#92a2ff]" />
          ))}
        </div>

        <p className="absolute left-[56px] top-[38px] font-['Inter',sans-serif] text-[11px] font-semibold tracking-[0.32em] text-[#93a2ff]">
          SYSTEM ROUTER
        </p>
        <p className="absolute left-[56px] top-[66px] text-[26px] font-bold text-white">入口不分叉，系统在后台分流</p>
        <p className="absolute left-[56px] top-[105px] w-[360px] text-[13px] leading-[24px] text-[#b8bed8]">
          玩家从任意入口进入，界面不解释复杂规则，只根据战区、目标和权限把行为送到正确结果。
        </p>

        <div className="absolute left-[60px] top-[176px]">
          <p className="mb-[16px] font-['Inter',sans-serif] text-[10px] font-semibold tracking-[0.26em] text-[#737b9f]">INPUT LAYER</p>
          <div className="space-y-[14px]">
            {entrySources.map(([title, desc]) => (
              <div key={title} className="relative h-[56px] w-[234px] rounded-[18px] border border-white/10 bg-white/[0.06] px-[18px] py-[10px]">
                <span className="absolute left-[-6px] top-[24px] h-[8px] w-[8px] rounded-full bg-[#93a2ff]" />
                <p className="text-[15px] font-bold leading-[20px] text-white">{title}</p>
                <p className="text-[11px] leading-[17px] text-[#9ba3c1]">{desc}</p>
                <span className="absolute right-[-74px] top-[27px] h-px w-[74px] bg-gradient-to-r from-[#93a2ff] to-transparent" />
                <span className="absolute right-[-80px] top-[24px] h-[7px] w-[7px] rounded-full bg-[#93a2ff]" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[448px] top-[132px] h-[234px] w-[234px] rounded-full border border-[#93a2ff]/20 bg-[#222842] shadow-[0_0_0_20px_rgba(147,162,255,0.04),0_0_0_44px_rgba(147,162,255,0.025),0_30px_50px_rgba(0,0,0,0.28)]">
          <div className="absolute left-[29px] top-[29px] h-[176px] w-[176px] rounded-full border border-dashed border-[#93a2ff]/32" />
          <div className="absolute left-[57px] top-[57px] flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#596bd0] text-center shadow-[0_14px_30px_rgba(89,107,208,0.42)]">
            <p className="font-['Inter',sans-serif] text-[12px] font-semibold tracking-[0.26em] text-[#dfe5ff]">AUTO</p>
            <p className="mt-[8px] text-[22px] font-bold leading-[26px] text-white">判定器</p>
            <p className="mt-[4px] text-[10px] text-[#dfe5ff]">零学习切换</p>
          </div>
          <div className="absolute left-[105px] top-[-8px] h-[18px] w-[18px] rounded-full bg-[#2fa66c] shadow-[0_0_18px_rgba(47,166,108,0.75)]" />
          <div className="absolute left-[196px] top-[142px] h-[12px] w-[12px] rounded-full bg-[#e18a31] shadow-[0_0_16px_rgba(225,138,49,0.72)]" />
          <div className="absolute left-[34px] top-[184px] h-[10px] w-[10px] rounded-full bg-[#93a2ff] shadow-[0_0_14px_rgba(147,162,255,0.68)]" />
        </div>

        <div className="absolute left-[736px] top-[84px]">
          <p className="mb-[14px] font-['Inter',sans-serif] text-[10px] font-semibold tracking-[0.26em] text-[#737b9f]">OUTPUT LAYER</p>
          <div className="space-y-[18px]">
            {outputs.map(([title, condition, result, bg, accent]) => (
              <div key={title} className="relative h-[82px] w-[332px] rounded-[18px] bg-white px-[18px] py-[14px] shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
                <span className="absolute left-0 top-[18px] h-[46px] w-[5px] rounded-r-full" style={{ background: accent }} />
                <span className="absolute left-[-88px] top-[41px] h-px w-[88px] bg-gradient-to-l from-white/60 to-transparent" />
                <p className="text-[18px] font-bold leading-[24px] text-[#212126]">{title}</p>
                <p className="mt-[4px] text-[11px] leading-[16px] text-[#737380]">{condition}</p>
                <p className="absolute right-[18px] top-[28px] rounded-full px-[12px] py-[5px] text-[11px] font-bold" style={{ background: bg, color: accent }}>
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[368px] top-[394px] flex gap-[12px]">
          {checks.map(([num, title, desc]) => (
            <div key={num} className="h-[70px] w-[170px] border-t border-white/15 pt-[12px]">
              <p className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#93a2ff]">{num}</p>
              <p className="mt-[3px] text-[13px] font-bold text-white">{title}</p>
              <p className="mt-[3px] text-[10px] leading-[15px] text-[#8f98b8]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[120px] top-[674px] flex items-center gap-[14px]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#5466bf]" />
        <p className="text-[13px] font-medium text-[#737380]">设计重点：把跨服复杂度藏进系统路由，玩家只看到入口、结果和必要反馈。</p>
      </div>
    </LongPageSection>
  );
}

function CrossServerEntryDecision() {
  const strategyRows = [
    ['01', '先识别所处战区', '入口触发后，先确认当前是否已在跨服战区。', 'bg-[#f3f5ff] border-[#d8def6] text-[#5466bf]'],
    ['02', '本服目标保持原链路', '目标仍在本服时，不增加额外提示与跳转。', 'bg-[#f7f7fa] border-[#e6e7ee] text-[#737380]'],
    ['03', '跨服目标进入转场', '需要跨服时，先转场再进入对应战区流程。', 'bg-[#eefaf3] border-[#cfeeda] text-[#2fa66c]'],
  ] as const;

  return (
    <LongPageSection height={650} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">入口决策逻辑</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        ENTRY DECISION LOGIC
      </p>
      <p className="absolute left-[120px] top-[140px] text-[22px] font-bold text-[#5466bf]">
        多层决策树，自动判断跨服/本服逻辑
      </p>

      <div className="absolute left-[96px] top-[188px] h-px w-[1088px] bg-[#d9dce8]" />
      <div className="absolute left-[96px] top-[520px] h-px w-[1088px] bg-[#dfe3ef]" />

      <div className="absolute left-[96px] top-[196px] h-[378px] w-[326px] rounded-[10px] border border-[#e1e4ef] bg-white shadow-[0_16px_34px_rgba(31,33,46,0.07)]" />
      <div className="absolute left-[452px] top-[196px] h-[378px] w-[732px] rounded-[10px] border border-[#e1e4ef] bg-white shadow-[0_16px_34px_rgba(31,33,46,0.07)]" />

      <div className="absolute left-[124px] top-[224px]">
        <p className="text-[20px] font-bold leading-[28px] text-[#212126]">设计判断</p>
        <p className="mt-[2px] font-['Inter',sans-serif] text-[10px] tracking-[0.24em] text-[#8b8b98]">DESIGN DECISION</p>
        <p className="mt-[28px] w-[272px] text-[18px] font-bold leading-[25px] text-[#5466bf]">
          系统自动判断入口归属<br />
          玩家只感知「能否直接执行」
        </p>
      </div>

      <div className="absolute left-[124px] top-[366px] space-y-[12px]">
        {strategyRows.map(([index, title, body, style]) => (
          <div key={index} className={`h-[46px] w-[258px] rounded-[8px] border px-[12px] py-[8px] ${style}`}>
            <p className="absolute w-[28px] font-['Inter',sans-serif] text-[13px] font-medium leading-[18px]">{index}</p>
            <div className="ml-[40px]">
              <p className="text-[12px] font-bold leading-[18px] text-[#212126]">{title}</p>
              <p className="text-[9px] leading-[13px] text-[#737380]">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-[124px] top-[540px] flex h-[24px] w-[258px] items-center justify-center rounded-full border border-[#d9def7] bg-[#f0f2ff] text-[10px] font-bold text-[#5466bf]">
        减少解释成本，保留操作连续性
      </div>

      <div className="absolute left-[488px] top-[224px]">
        <p className="text-[20px] font-bold leading-[28px] text-[#212126]">决策地图</p>
        <p className="mt-[2px] font-['Inter',sans-serif] text-[10px] tracking-[0.24em] text-[#8b8b98]">DECISION MAP</p>
      </div>
      <div className="absolute left-[968px] top-[226px] flex h-[28px] w-[78px] items-center justify-center rounded-full border border-[#5466bf] bg-[#f3f5ff] text-[11px] font-bold text-[#5466bf]">
        自动判断
      </div>
      <div className="absolute left-[1060px] top-[226px] flex h-[28px] w-[82px] items-center justify-center rounded-full border border-[#2fa66c] bg-[#eefaf3] text-[11px] font-bold text-[#2fa66c]">
        玩家无感
      </div>

      <div className="absolute left-[488px] top-[292px] h-[230px] w-[656px] rounded-[12px] border border-[#e7ebf5] bg-[#fbfcff] shadow-[0_10px_22px_rgba(31,33,46,0.05)]" />

      <div className="absolute left-[520px] top-[380px] flex h-[60px] w-[148px] flex-col items-center justify-center rounded-[10px] border border-[#5466bf] bg-[#596bd0] text-center shadow-[0_12px_18px_rgba(53,70,166,0.24)]">
        <p className="text-[14px] font-bold leading-[20px] text-white">点击系统/玩法</p>
        <p className="text-[10px] font-medium leading-[15px] text-[#dfe5ff]">任意入口触发</p>
      </div>

      <div className="absolute left-[668px] top-[409px] h-[2px] w-[48px] rounded-full bg-[#858590]" />
      <div className="absolute left-[710px] top-[405px] h-[9px] w-[9px] rounded-full bg-[#858590]" />

      <div className="absolute left-[716px] top-[352px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.5px] border-[#e5b24d] bg-[#fff7e8] text-center shadow-[0_8px_8px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">当前是否处于</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">跨服战区？</p>
      </div>

      <div className="absolute left-[801px] top-[424px] h-[34px] w-[2px] rounded-full bg-[#858590]" />
      <div className="absolute left-[788px] top-[430px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#2fa66c] bg-[#e5f5eb] text-[11px] font-bold text-[#2fa66c]">
        是
      </div>
      <div className="absolute left-[716px] top-[458px] flex h-[54px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.5px] border-[#33b66f] bg-[#e7f9ee] text-center shadow-[0_8px_8px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#20874f]">执行跨服流程</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">进入跨服链路</p>
      </div>

      <div className="absolute left-[888px] top-[388px] h-[2px] w-[64px] rounded-full bg-[#858590]" />
      <div className="absolute left-[900px] top-[374px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#d9594d] bg-[#fdebe8] text-[11px] font-bold text-[#d9594d]">
        否
      </div>
      <div className="absolute left-[886px] top-[384px] h-[9px] w-[9px] rounded-full bg-[#858590]" />

      <div className="absolute left-[952px] top-[352px] flex h-[72px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.5px] border-[#e5b24d] bg-[#fff7e8] text-center shadow-[0_8px_8px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">目标是否在</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">本服？</p>
      </div>

      <div className="absolute left-[1038px] top-[338px] h-[14px] w-[2px] rounded-full bg-[#858590]" />
      <div className="absolute left-[1025px] top-[334px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#2fa66c] bg-[#e5f5eb] text-[11px] font-bold text-[#2fa66c]">
        是
      </div>
      <div className="absolute left-[952px] top-[284px] flex h-[54px] w-[172px] flex-col items-center justify-center rounded-[10px] border border-[#e1e4ef] bg-[#f1f2f6] text-center shadow-[0_8px_8px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#212126]">本服逻辑执行</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">保持原路径</p>
      </div>

      <div className="absolute left-[1038px] top-[424px] h-[34px] w-[2px] rounded-full bg-[#858590]" />
      <div className="absolute left-[1025px] top-[430px] flex h-[28px] w-[26px] items-center justify-center rounded-full border border-[#d9594d] bg-[#fdebe8] text-[11px] font-bold text-[#d9594d]">
        否
      </div>
      <div className="absolute left-[952px] top-[458px] flex h-[54px] w-[172px] flex-col items-center justify-center rounded-[10px] border-[1.5px] border-[#33b66f] bg-[#e7f9ee] text-center shadow-[0_8px_8px_rgba(31,33,46,0.05)]">
        <p className="text-[14px] font-bold leading-[20px] text-[#20874f]">显示转场</p>
        <p className="text-[10px] leading-[15px] text-[#737380]">跳转战区</p>
      </div>

      <div className="absolute left-[488px] top-[536px] flex h-[24px] w-[656px] items-center justify-center rounded-full border border-[#dde3fb] bg-[#f3f5ff] text-[10px] font-medium text-[#5466bf]">
        将复杂跨服规则隐藏在系统判断里，只把关键结果反馈给玩家。
      </div>
    </LongPageSection>
  );
}

function CrossServerWorldChanges() {
  const changes = [
    ['1', '服务区标识变化', ['顶部显示“目前正处于跨服战区 #1009”', '明确告知玩家当前所在战区编号']],
    ['2', '页签样式修改', ['界面页签切换为跨服专用样式', '区分本服与跨服操作入口']],
    ['3', '允许迁城标记', ['跨服战区中显示迁城相关标记', '引导玩家了解迁城规则']],
    ['4', '功能互斥提示', ['“点击挑战”气泡与跨服功能互斥', '显示跨服功能时隐藏挑战气泡']],
  ] as const;

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">世界界面变化</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        WORLD INTERFACE CHANGES
      </p>
      <p className="absolute left-[120px] top-[148px] text-[24px] font-bold text-[#5466bf]">跨服状态下，4处关键视觉差异提醒玩家</p>

      <div className="absolute left-[120px] top-[202px] h-[519px] w-[240px] overflow-hidden rounded-[14px] shadow-[0_10px_28px_rgba(33,33,38,0.08)]">
        <PhoneFrame
          left={0}
          top={0}
          width={240}
          height={519}
          src={crossServerAssets.fieldEntryA}
          imageClassName="left-0 top-[-4.8%] h-[104.9%] w-full max-w-none"
          rounded="rounded-[14px]"
        />
      </div>
      <p className="absolute left-[216px] top-[727px] text-[14px] text-[#737380]">本服状态</p>
      <p className="absolute left-[390px] top-[423px] font-['Inter',sans-serif] text-[32px] font-semibold text-[#5466bf]">VS</p>
      <div className="absolute left-[452px] top-[202px] h-[519px] w-[240px] overflow-hidden rounded-[14px] shadow-[0_10px_28px_rgba(33,33,38,0.08)]">
        <PhoneFrame
          left={0}
          top={0}
          width={240}
          height={519}
          src={crossServerAssets.fieldEntryB}
          imageClassName="left-0 top-[-4.8%] h-[104.9%] w-full max-w-none"
          rounded="rounded-[14px]"
        />
      </div>
      <p className="absolute left-[547px] top-[729px] text-[14px] text-[#737380]">跨服状态</p>

      {changes.map(([num, title, lines], index) => {
        const top = [275, 373, 480, 578][index];
        return (
          <div key={title} className="absolute left-[702px]" style={{ top }}>
            <div className="absolute left-0 top-[7px] h-[8px] w-[8px] rounded-full bg-[#5466bf]" />
            <div className="absolute left-[4px] top-[10px] h-[2px] w-[40px] bg-[#5466bf]" />
            <div className="absolute left-[52px] top-[-2px] h-[32px] w-[32px] rounded-full bg-[#5466bf]/12" />
            <div className="absolute left-[54px] top-0 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#5466bf] font-['Inter',sans-serif] text-[16px] font-bold text-white shadow-[0_2px_8px_rgba(84,102,191,0.24)]">
              {num}
            </div>
            <p className="absolute left-[94px] top-[2px] whitespace-nowrap text-[18px] font-bold text-[#212126]">{title}</p>
            <div className="absolute left-[94px] top-[26px] w-[380px] text-[14px] leading-[22px] text-[#737380]">
              <p>{lines[0]}</p>
              <p>{lines[1]}</p>
            </div>
          </div>
        );
      })}

      <div className="absolute left-[120px] top-[764px] h-[94px] w-[1040px] rounded-[12px] bg-white px-[16px] py-[12px] shadow-[0_8px_24px_rgba(33,33,38,0.06)]">
        <p className="text-[16px] font-bold text-[#212126]">为什么跨服界面不做大改，只改标识？</p>
        <div className="mt-[10px] text-[13px] leading-[20px] text-[#737380]">
          <p>交互稿中跨服/本服界面几乎一致，仅修改战区号、页签样式、迁城标记三处。</p>
          <p>若跨服界面完全不同，玩家每次切换都要重新学习，认知成本过高。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerTransition() {
  const steps = [
    ['0s', '触发前', ['执行跨服操作', '系统判断切换战区']],
    ['0-1s', '转场中', ['显示跳转提示', '云雾动画1秒']],
    ['1s+', '到达后', ['切换至目标战区', 'Toast确认提示']],
  ] as const;

  return (
    <LongPageSection height={900} bg="#292e3d">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[40px] bg-[#8c9ee0]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">跨服转场设计</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#8c9ee0]">
        CROSS-SERVER TRANSITION
      </p>
      <p className="absolute left-[120px] top-[148px] text-[18px] font-bold text-[#99a6d9]">云雾过渡 + Toast确认，减少切换焦虑</p>

      {steps.map(([tag, title, lines], index) => {
        const left = [87, 470, 853][index];
        const connectorLeft = [427, 810][index];
        const connectorWidth = [43, 43][index];
        return (
          <div key={title}>
            {index < steps.length - 1 ? (
              <div className="absolute top-[265px] h-[2px] bg-[#8c9ee0]" style={{ left: connectorLeft, width: connectorWidth }} />
            ) : null}
            <div className="absolute top-[200px] h-[130px] w-[340px] rounded-[12px] bg-[#383d52]" style={{ left }}>
              <div className="absolute left-[16px] top-[16px] flex h-[24px] w-[60px] items-center rounded-full bg-[#5466bf] pl-[14px] font-['Inter',sans-serif] text-[11px] text-white">
                {tag}
              </div>
              <p className="absolute left-[16px] top-[52px] text-[18px] font-bold text-white">{title}</p>
              <div className="absolute left-[16px] top-[84px] text-[12px] leading-[20px] text-[#bfc4d9]">
                <p>{lines[0]}</p>
                <p>{lines[1]}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute left-[120px] top-[358px] h-[472px] w-[220px] overflow-hidden rounded-[12px]">
        <img
          src={resolveAsset(crossServerAssets.loadingScreen)}
          alt="转场界面"
          className="absolute left-0 top-[-5.54%] h-[105.58%] w-full max-w-none"
        />
      </div>
      <p className="absolute left-[208px] top-[842px] text-[11px] text-[#bfc4d9]">转场界面</p>

      <div className="absolute left-[382px] top-[358px] h-[475px] w-[220px] overflow-hidden rounded-[12px]">
        <img
          src={resolveAsset(crossServerAssets.moveMask)}
          alt="迁城待机界面"
          className="absolute left-0 top-[-4.84%] h-[104.89%] w-full max-w-none"
        />
      </div>
      <p className="absolute left-[459px] top-[842px] text-[11px] text-[#bfc4d9]">迁城待机界面</p>

      <p className="absolute left-[640px] top-[393px] text-[16px] font-bold text-white">转场设计细节</p>
      <div className="absolute left-[640px] top-[428px] w-[320px] text-[13px] leading-[28px] text-[#bfc4d9]">
        <p>· 云雾过渡动画1秒，衔接两个战区</p>
        <p>· 中心显示目标战区号 #1009</p>
        <p>· 结束后Toast通知当前位置</p>
      </div>

      <div className="absolute left-[640px] top-[719px] h-[114px] w-[553px] rounded-[8px] bg-[#3d4775] px-[16px] py-[12px]">
        <p className="text-[13px] font-bold text-[#8c9ee0]">为什么转场要用1秒云雾动画 + Toast？</p>
        <div className="mt-[14px] text-[12px] leading-[20px] text-[#bfc4d9]">
          <p>跨服切换涉及服务器跳转，玩家需要感知「我去了哪里」。</p>
          <p>交互稿设定云雾过渡1秒+目标战区号+到达后Toast，</p>
          <p>把不可见的后端操作变成可感知的视觉过程。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerMoveFlow() {
  const steps = [
    ['01', '点击空白海域', 79, 149, 207],
    ['02', '选择迁城位置', 342, 412, 207],
    ['03', '二次确认弹窗', 605, 675, 207],
    ['04', '迁城动画执行', 868, 938, 200],
    ['05', '到达新位置', 1131, 0, 0],
  ] as const;
  const shots = [
    [120, crossServerAssets.moveClickSea, '点击空白海域'],
    [376, crossServerAssets.moveConfirm, '迁城确认界面'],
    [632, crossServerAssets.moveComplete, '迁城完成'],
  ] as const;

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[40px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">迁城交互流程</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        CITY MIGRATION FLOW
      </p>

      {steps.map(([num, label, left, lineLeft, lineWidth], index) => (
        <div key={num}>
          {index < steps.length - 1 ? (
            <div className="absolute top-[194px] h-[2px] bg-[#ccd1e0]" style={{ left: lineLeft, width: lineWidth }} />
          ) : null}
          <div className="absolute top-[170px]" style={{ left }}>
            <div className="absolute left-[18px] top-0 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#5466bf] font-['Inter',sans-serif] text-[16px] text-white shadow-[0_4px_14px_rgba(84,102,191,0.22)]">
              {num}
            </div>
            <p className="absolute top-[58px] whitespace-nowrap text-[14px] font-bold text-[#212126]">{label}</p>
          </div>
        </div>
      ))}

      {shots.map(([left, src, label]) => (
        <div key={label}>
          <div className="absolute top-[301px] h-[518px] w-[240px] overflow-hidden rounded-[12px]" style={{ left }}>
            <img
              src={resolveAsset(src)}
              alt={label}
              className="absolute left-0 top-[-4.88%] h-[104.92%] w-full max-w-none"
            />
          </div>
          <p className="absolute top-[829px] text-[11px] text-[#737380]" style={{ left: left + 87 }}>
            {label}
          </p>
        </div>
      ))}

      <div className="absolute left-[918px] top-[301px] w-[314px] text-[13px] leading-[26px] text-[#212126]">
        <p>关键设计点</p>
        <p className="mt-[26px]">· 跨服迁城免消耗</p>
        <p>· 目标坐标可视化</p>
        <p>· 镜头过渡 5x 主城宽度</p>
        <p>· 迁城成功 Toast 反馈</p>
      </div>

      <div className="absolute left-[902px] top-[711px] h-[108px] w-[330px] rounded-[8px] bg-[#f0f0ff] px-[16px] py-[12px]">
        <p className="text-[13px] font-bold text-[#5466bf]">为什么跨服迁城免费但需要二次确认？</p>
        <div className="mt-[10px] text-[12px] leading-[20px] text-[#737380]">
          <p>交互稿设定跨服迁城不消耗道具，降低跨服探索门槛；</p>
          <p>但迁城后5分钟冷却，若误操作代价很大，因此保留二次确认弹窗。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerConfirmCooldown() {
  const timeline = [
    ['0:00 冷却开始', 550],
    ['2:30 中途', 700],
    ['5:00 冷却结束', 850],
  ] as const;

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[60px] text-[44px] font-bold tracking-[3px] text-[#212126]">迁城确认与冷却</p>
      <p className="absolute left-[120px] top-[116px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        CONFIRMATION & COOLDOWN
      </p>

      <p className="absolute left-[120px] top-[205px] text-[18px] font-bold text-[#212126]">二次确认弹窗</p>
      <div className="absolute left-[120px] top-[240px] text-[13px] leading-[26px] text-[#737380]">
        <p>· 标题：“提示”</p>
        <p>· 正文：“您确认迁城到这个地点吗？”</p>
        <p>· 按钮：取消 / 确定</p>
      </div>
      <div className="absolute left-[214px] top-[340px] h-[389px] w-[180px] overflow-hidden rounded-[12px]">
        <img
          src={resolveAsset(crossServerAssets.confirmPopup)}
          alt="迁城确认弹窗"
          className="absolute left-[0.12%] top-[-4.8%] h-[104.8%] w-[99.77%] max-w-none"
        />
      </div>

      <p className="absolute left-[550px] top-[205px] text-[18px] font-bold text-[#212126]">5分钟冷却机制</p>
      <div className="absolute left-[550px] top-[240px] text-[13px] leading-[26px] text-[#737380]">
        <p>· 冷却期间禁止再次迁城</p>
        <p>· 图标注水上涨变绿</p>
        <p>· 视觉化进度感知剩余时间</p>
      </div>

      <div className="absolute left-[550px] top-[365px] h-[14px] w-[400px] overflow-hidden rounded-full bg-[#d9dfef]">
        <div className="h-full w-[250px] rounded-full bg-[linear-gradient(90deg,#6f8fff_0%,#45c47a_100%)]" />
      </div>
      {timeline.map(([label, left]) => (
        <div key={label} className="absolute top-[405px]" style={{ left }}>
          <div className="h-[14px] w-[14px] rounded-full bg-[#5466bf]" />
          <p className="absolute left-[22px] top-[-1px] whitespace-nowrap text-[14px] text-[#737380]">{label}</p>
        </div>
      ))}

      <div className="absolute left-[550px] top-[465px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#ebebf5]">
        <div className="relative h-[56px] w-[80px] overflow-hidden rounded-[6px] bg-transparent">
          <div className="absolute bottom-0 left-0 h-[40px] w-full bg-[#4dbf80]/40" />
          <p className="absolute left-1/2 top-[7px] -translate-x-1/2 font-['Inter',sans-serif] text-[22px] font-normal text-[#212126]">5:00</p>
        </div>
      </div>
      <div className="absolute left-[680px] top-[475px] text-[12px] leading-[22px] text-[#737380]">
        <p>注水动效：倒计时图标随时间</p>
        <p>逐渐注水上涨变绿，直观传达</p>
        <p>冷却进度与剩余等待时间</p>
      </div>

      <div className="absolute left-[120px] top-[766px] h-[116px] w-[1026px] rounded-[8px] bg-[#f0f0ff] px-[16px] py-[12px]">
        <p className="text-[13px] font-bold text-[#5466bf]">为什么冷却期要做成「注水动效」？</p>
        <div className="mt-[14px] text-[12px] leading-[20px] text-[#737380]">
          <p>5分钟冷却是硬规则，但纯倒计时数字会放大等待感。</p>
          <p>交互稿中设计注水上涨变绿的动效，把抽象时间转化为直观进度，</p>
          <p>让玩家感知「快好了」而非「还要等」。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerCombatRules() {
  const attackable = [
    '进攻其他战区的玩家',
    '攻击跨服战区的野怪',
    '点击玩法中的搜索 / 前往 / 攻击 / 集结按钮',
    '对当前战区的其他玩家发起进攻',
  ];
  const blocked = [
    '本服战区内依旧执行本服逻辑',
    '战区号可配置，非固定',
    '禁止攻击时显示提示信息',
    '直接显示战斗界面（无需跨服流程）',
  ];
  const flow = ['点击攻击/集结', '判断目标战区', '是否在本服？', '执行对应逻辑'];

  return (
    <LongPageSection height={900} bg="#333d6b">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#8c9ee0]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">战斗规则设计</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#8c9ee0]">
        COMBAT RULES DESIGN
      </p>
      <p className="absolute left-[120px] top-[145px] text-[20px] font-bold text-[#99a6d9]">跨服可战，本服照旧</p>

      <div className="absolute left-[120px] top-[207px] h-[340px] w-[510px] rounded-[12px] bg-[#3d4775] px-[24px] py-[24px]">
        <div className="absolute left-0 top-0 h-[4px] w-full rounded-t-[12px] bg-[#66cc80]" />
        <p className="text-[20px] font-bold text-[#66cc80]">可以攻击</p>
        <div className="mt-[30px] space-y-[36px]">
          {attackable.map((item) => (
            <div key={item} className="flex items-start gap-[12px]">
              <span className="mt-[6px] h-[8px] w-[8px] rounded-full bg-[#66cc80]" />
              <span className="text-[14px] text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[648px] top-[207px] h-[340px] w-[510px] rounded-[12px] bg-[#3d4775] px-[24px] py-[24px]">
        <div className="absolute left-0 top-0 h-[4px] w-full rounded-t-[12px] bg-[#e57366]" />
        <p className="text-[20px] font-bold text-[#e57366]">不可攻击 / 限制</p>
        <div className="mt-[30px] space-y-[36px]">
          {blocked.map((item) => (
            <div key={item} className="flex items-start gap-[12px]">
              <span className="mt-[6px] h-[8px] w-[8px] rounded-full bg-[#e57366]" />
              <span className="text-[14px] text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="absolute left-[120px] top-[590px] text-[16px] font-bold text-white">战斗判断流程</p>
      <div className="absolute left-[120px] top-[615px] flex items-center">
        {flow.map((item, index) => (
          <div key={item} className="flex items-center">
            <div className="flex h-[40px] w-[240px] items-center rounded-[20px] bg-[#5466bf] px-[24px] text-[13px] font-medium text-white">
              {item}
            </div>
            {index < flow.length - 1 ? <div className="h-[2px] w-[24px] bg-[#8c9ee0]" /> : null}
          </div>
        ))}
      </div>

      <div className="absolute left-[120px] top-[723px] h-[114px] w-[1038px] rounded-[8px] bg-[#3d4775] px-[16px] py-[12px]">
        <p className="text-[13px] font-bold text-[#8c9ee0]">为什么本服战区要「依旧执行本服逻辑」？</p>
        <div className="mt-[12px] text-[12px] leading-[20px] text-[#bfc4d9]">
          <p>交互稿中明确：在本服战区内，攻击/集结仍走本服规则；</p>
          <p>只有目标在其他战区时才触发跨服流程。</p>
          <p>操作→结果的映射保持一致，玩家不需要猜「这次打的是本服还是跨服」。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerPopupArchitecture() {
  const topCards = [
    ['气泡Tips', '点击地图元素弹出气泡', '显示基本信息和操作按钮', '点击空白处关闭'],
    ['信息弹窗', '展示详细物体信息', '如贸易货车的掠夺次数', '奖励详情和状态'],
    ['奖励详情', 'popup_reward_detail', '展示掠夺奖励和进度', '点击空白处关闭'],
  ] as const;
  const notes = [
    '1. 气泡tips点击地图元素触发',
    '2. 点击空白处统一关闭',
    '3. 弹窗展示跨服战区标识',
    '4. 弹窗层级：气泡 → 信息 → 确认',
  ];

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">信息弹窗架构</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        INFORMATION POPUP ARCHITECTURE
      </p>
      <p className="absolute left-[120px] top-[140px] text-[24px] text-[#5466bf]">三级弹窗体系：气泡 → 信息 → 确认</p>

      <div className="absolute left-[120px] top-[190px] flex gap-[28px]">
        {topCards.map(([title, l1, l2, l3]) => (
          <div
            key={title}
            className="relative w-[328px] rounded-[14px] bg-white px-[20px] py-[16px] shadow-[0_8px_22px_rgba(33,33,38,0.06)]"
            style={{ height: 136 }}
          >
            <div className="absolute left-0 top-[30px] h-[60px] w-[4px] rounded-r-full bg-[#5466bf]" />
            <p className="text-[19px] font-bold text-[#212126]">{title}</p>
            <div className="mt-[12px] text-[14px] leading-[22px] text-[#737380]">
              <p>{l1}</p>
              <p>{l2}</p>
              <p>{l3}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-[120px] top-[360px] h-[476px] w-[220px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_28px_rgba(33,33,38,0.08)]">
        <PhoneFrame
          left={0}
          top={0}
          width={220}
          height={476}
          src={crossServerAssets.popupInfo}
          imageClassName="left-0 top-[-4.74%] h-[104.85%] w-full max-w-none"
          rounded="rounded-[18px]"
        />
      </div>
      <div className="absolute left-[366px] top-[360px] h-[476px] w-[220px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_28px_rgba(33,33,38,0.08)]">
        <PhoneFrame
          left={0}
          top={0}
          width={220}
          height={476}
          src={crossServerAssets.popupReward}
          imageClassName="left-0 top-[-4.68%] h-[104.74%] w-full max-w-none"
          rounded="rounded-[18px]"
        />
      </div>

      <div className="absolute left-[620px] top-[360px] w-[280px] text-[16px] leading-[22px] text-[#212126]">
        {notes.map((line) => (
          <p key={line} className="mb-[12px]">{line}</p>
        ))}
      </div>

      <div className="absolute left-[620px] top-[713px] h-[114px] w-[580px] rounded-[12px] bg-white px-[16px] py-[12px] shadow-[0_8px_24px_rgba(33,33,38,0.06)]">
        <p className="text-[16px] font-bold text-[#212126]">为什么所有弹窗都统一「点击空白处关闭」？</p>
        <div className="mt-[10px] text-[13px] leading-[20px] text-[#737380]">
          <p>交互稿中气泡tips、信息弹窗、确认弹窗全部用「点击空白处关闭」。</p>
          <p>统一关闭方式让玩家不需要每次寻找关闭按钮，一个手势覆盖所有场景，降低操作成本。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerChatIntegration() {
  const values = [
    ['01', '坐标分享', '分享跨服坐标，格式含战区号+坐标'],
    ['02', '引用位置高亮', '引用位置背景高亮闪烁1次'],
    ['03', '回复气泡', '输入框上方显示引用气泡，可取消'],
    ['04', '气泡表现', '回复气泡含引用文本，点击跳转'],
  ] as const;

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">聊天系统集成</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        CHAT SYSTEM INTEGRATION
      </p>
      <p className="absolute left-[120px] top-[140px] text-[18px] font-bold text-[#5466bf]">坐标分享 + 引用高亮，跨服社交无缝衔接</p>

      <div className="absolute left-[120px] top-[193px] h-[644px] w-[300px] overflow-hidden rounded-[12px]">
        <PhoneFrame
          left={0}
          top={0}
          width={300}
          height={644}
          src={crossServerAssets.chatSystem}
          imageClassName="left-0 top-[-0.67%] h-[100.72%] w-full max-w-none"
          rounded="rounded-[12px]"
        />
      </div>
      <p className="absolute left-[226px] top-[848px] text-[11px] text-[#737380]">聊天气泡互动界面</p>

      {values.map(([num, title, body], index) => {
        const top = 210 + index * 140;
        return (
          <div key={title} className="absolute left-[479px]" style={{ top }}>
            <p className="font-['Inter',sans-serif] text-[36px] font-normal text-[#5466bf]/20">{num}</p>
            <div className="absolute left-[-40px] top-[20px] h-[1.5px] w-[30px] bg-[#5466bf]/40" />
            <p className="absolute left-[60px] top-[6px] whitespace-nowrap text-[16px] font-bold text-[#212126]">{title}</p>
            <p className="absolute left-[60px] top-[34px] whitespace-nowrap text-[12px] leading-[22px] text-[#737380]">{body}</p>
          </div>
        );
      })}

    </LongPageSection>
  );
}

function CrossServerSystemIntegration() {
  const cards = [
    ['模拟经营', '跨服状态下点击打开', '依旧保持跨服状态'],
    ['挂机系统', '跨服时显示跨服功能入口', '与“点击挑战”气泡互斥'],
    ['贸易货船', '搜船运输功能正常运行', '可查看跨服货车详情'],
    ['野外探索', '点击打开玩法/系统界面', '根据场景判断跨服逻辑'],
    ['公会系统', '跨服状态下公会功能', '正常使用不受限制'],
    ['迁城返回', '点击空白处关闭弹窗', '依旧保持在跨服/本服'],
  ] as const;

  return (
    <LongPageSection height={900} bg="#292e3d">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#8c9ee0]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">系统联动设计</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#8c9ee0]">
        SYSTEM INTEGRATION
      </p>
      <p className="absolute left-[120px] top-[145px] text-[18px] font-bold text-[#99a6d9]">跨服/本服，各系统操作逻辑保持一致</p>

      <div className="absolute left-[120px] top-[237px] grid grid-cols-3 gap-x-[24px] gap-y-[25px]">
        {cards.map(([title, line1, line2]) => (
          <div key={title} className="relative h-[165px] w-[330px] rounded-[12px] bg-[#383d52] px-[20px] py-[24px]">
            <div className="absolute left-0 top-[45px] h-[80px] w-[4px] bg-[#5466bf]" />
            <p className="text-[18px] font-bold text-white">{title}</p>
            <div className="mt-[14px] text-[12px] leading-[22px] text-[#bfc4d9]">
              <p>{line1}</p>
              <p>{line2}</p>
            </div>
            <div className="absolute bottom-[20px] left-[20px] flex h-[24px] w-[70px] items-center justify-center rounded-[12px] bg-[#408c66] text-[10px] font-normal text-white">
              正常运作
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-[120px] top-[698px] h-[114px] w-[1038px] rounded-[8px] bg-[#3d4775] px-[16px] py-[12px]">
        <p className="text-[13px] font-bold text-[#8c9ee0]">为什么跨服突袭期间要禁止部分操作？</p>
        <div className="mt-[10px] text-[12px] leading-[20px] text-[#bfc4d9]">
          <p>交互稿设定：跨服突袭期间执行其他玩法时提示「您目前正在其他战区进行突袭，</p>
          <p>不能进行此操作」。因为跨服涉及两个服务器的数据同步，</p>
          <p>允许同时操作会导致状态冲突，不如明确禁止+清晰提示。</p>
        </div>
      </div>
    </LongPageSection>
  );
}

function CrossServerRuleMatrix() {
  const groups: [string, string[]][] = [
    [
      '状态呈现',
      [
        '战区标识常驻在世界界面',
        '页签样式切换为跨服专用样式',
        '允许迁城标记在跨服战区显示',
      ],
    ],
    [
      '弹窗交互',
      [
        '点击空白处统一关闭所有弹窗',
        '二次确认弹窗文本可配置',
        'Toast 提示确认每次状态切换',
      ],
    ],
    [
      '功能互斥',
      [
        '“点击挑战”气泡与跨服功能互斥',
        '跨服迁城不消耗道具',
        '迁城后 5 分钟冷却期间禁止再迁',
      ],
    ],
    [
      '战斗规则',
      [
        '本服战区执行本服攻击逻辑',
        '跨服战区可攻击其他战区玩家',
        '禁止攻击时显示提示信息',
      ],
    ],
  ];

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">界面规则汇总</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        UI RULES SUMMARY
      </p>
      <div className="absolute left-[124px] top-[198px] grid grid-cols-2 gap-[34px]">
        {groups.map(([title, items]) => (
          <div key={title} className="w-[519px] rounded-[16px] bg-white px-[24px] py-[22px] shadow-[0_8px_24px_rgba(33,33,38,0.06)]">
            <div className="rounded-[8px] bg-[#5466bf] px-[16px] py-[10px] text-[15px] font-bold text-white">{title}</div>
            <div className="mt-[16px] flex flex-col gap-[14px]">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-[12px] rounded-[8px] bg-[#f7f8ff] px-[16px] py-[16px] text-[13px] leading-[22px] text-[#212126]">
                  <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#5466bf]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CrossServerPrinciples() {
  const cards: [string, string, string, [string, string]][] = [
    ['01', '可见性', 'Visibility', ['战区标识常驻 + 页签样式区分', '→ 玩家随时知道「我在哪个服」']],
    ['02', '反馈', 'Feedback', ['1秒云雾过渡 + Toast到达提示', '→ 后端跳转变成可感知的过程']],
    ['03', '渐进披露', 'Progressive Disclosure', ['四层决策树自动判断', '→ 玩家无需理解跨服复杂逻辑']],
    ['04', '一致性', 'Consistency', ['跨服仅改标识，操作逻辑不变', '→ 切换后零学习成本']],
    ['05', '约束', 'Constraints', ['免消耗+5分钟冷却+二次确认', '→ 鼓励探索但约束滥用']],
    ['06', '映射', 'Mapping', ['坐标点击直达+高亮闪烁', '→ 把三步操作压缩为一步']],
  ];

  return (
    <LongPageSection height={900} bg="#5466bf">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-white" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-white">交互原则总结</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#d9def2]">
        INTERACTION PRINCIPLES SUMMARY
      </p>
      <div className="absolute left-[120px] top-[205px] grid grid-cols-3 gap-x-[23px] gap-y-[30px]">
        {cards.map(([num, title, en, body]) => (
          <div key={num} className="relative h-[230px] w-[331px] overflow-hidden rounded-[16px] bg-[#4052a6] px-[24px] py-[30px]">
            <p className="absolute right-[28px] top-[10px] font-['Inter',sans-serif] text-[56px] font-semibold text-white/10">{num}</p>
            <p className="text-[24px] font-bold text-white">{title}</p>
            <p className="mt-[10px] font-['Inter',sans-serif] text-[12px] tracking-[2px] text-[#d9def2]">{en}</p>
            <div className="mt-[22px] h-[2px] w-[40px] bg-white/30" />
            <div className="mt-[18px] text-[13px] leading-[20px] text-[#d9def2]">
              <p>{body[0]}</p>
              <p>{body[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CrossServerHighlights() {
  const highlights = [
    ['01', '无缝状态感知', '通过战区标识、页签样式、迁城标记等多维度视觉线索，让玩家始终清楚当前处于跨服还是本服状态。'],
    ['02', '渐进式决策引导', '多层是/否决策树实现渐进式判断，系统自动处理复杂逻辑，玩家只需关注核心操作。'],
    ['03', '视觉化冷却反馈', '迁城冷却采用进度式反馈，将抽象倒计时转化为直观视觉进度，减少等待焦虑。'],
    ['04', '统一交互范式', '所有弹窗统一“点击空白处关闭”的操作范式，跨服/本服界面保持一致。'],
  ];

  return (
    <LongPageSection height={900} bg="#f2f2f7">
      <div className="absolute left-[120px] top-[40px] h-[4px] w-[60px] bg-[#5466bf]" />
      <p className="absolute left-[120px] top-[55px] text-[44px] font-bold tracking-[3px] text-[#212126]">设计亮点回顾</p>
      <p className="absolute left-[124px] top-[112px] font-['Inter',sans-serif] text-[13px] tracking-[0.32em] text-[#737380]">
        DESIGN HIGHLIGHTS
      </p>
      <div className="absolute left-[100px] top-[160px] flex flex-col gap-[50px]">
        {highlights.map(([num, title, body]) => (
          <div key={num} className="relative h-[120px] w-[980px]">
            <p className="absolute left-0 top-[-20px] font-['Inter',sans-serif] text-[80px] text-[#5466bf]/10">{num}</p>
            <div className="absolute left-[92px] top-[28px] h-[10px] w-[10px] rounded-full bg-[#5466bf]" />
            <p className="absolute left-[136px] top-[18px] text-[20px] font-bold text-[#212126]">{title}</p>
            <p className="absolute left-[136px] top-[54px] w-[884px] text-[14px] leading-[26px] text-[#737380]">{body}</p>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function CrossServerThanks() {
  return (
    <LongPageSection height={400} bg="#292e3d">
      <p className="absolute left-[500px] top-[140px] font-['Inter',sans-serif] text-[36px] tracking-[12px] text-white/60">
        THANK YOU
      </p>
      <p className="absolute left-[505px] top-[200px] text-[16px] text-[#8c9ee0]">跨服系统交互设计方案</p>
      <div className="absolute left-[540px] top-[250px] h-px w-[200px] bg-white/15" />
      <div className="absolute left-[590px] top-[320px] h-px w-[100px] bg-[#5466bf]/50" />
      <div className="absolute left-[600px] top-[335px] h-px w-[80px] bg-[#5466bf]/35" />
      <div className="absolute left-[610px] top-[350px] h-px w-[60px] bg-[#5466bf]/25" />
    </LongPageSection>
  );
}

function CrossServerCase() {
  return (
    <div className="space-y-10">
      <CrossServerCover />
      <CrossServerBackground />
      <CrossServerFlow />
      <CrossServerEntryDecisionFigma />
      <CrossServerWorldChanges />
      <CrossServerTransition />
      <CrossServerMoveFlow />
      <CrossServerConfirmCooldown />
      <CrossServerCombatRules />
      <CrossServerPopupArchitecture />
      <CrossServerChatIntegration />
      <CrossServerSystemIntegration />
      <CrossServerRuleMatrix />
      <CrossServerPrinciples />
      <CrossServerHighlights />
    </div>
  );
}

function IPCollabCover() {
  const tags = [
    { label: 'IP联动', left: 84, width: 60 },
    { label: '活动玩法', left: 164, width: 72 },
    { label: '奖励系统', left: 256, width: 72 },
    { label: '状态机设计', left: 348, width: 84 },
    { label: '渐进式披露', left: 452, width: 84 },
  ];

  const largeDots = [84, 184, 284, 384, 484];
  const smallDotColumns = [94, 110, 126, 142, 158, 174, 190, 206];
  const smallDotRows = [480, 496, 512, 528];

  return (
    <LongPageSection height={900} bg="#141424">
      <div className="absolute inset-0 bg-[#151629]" />
      <div className="absolute left-0 top-0 h-[6px] w-[1280px] bg-gradient-to-r from-[#4f93e3] via-[#6f7ded] to-[#9860f1]" />

      <div className="absolute inset-[0_0_0_0] overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#1f3c69_0%,#213e69_58%,#233d68_100%)]">
        <div className="absolute left-[900px] top-[-30px] h-[420px] w-[380px] rounded-full border border-[#6fb9ff]/10 bg-[radial-gradient(circle_at_50%_50%,rgba(119,152,255,0.20)_0%,rgba(87,132,228,0.08)_42%,rgba(0,0,0,0)_72%)]" />
        <div className="absolute left-[1050px] top-[200px] h-[200px] w-[200px] rounded-full border border-[#20d1ff]/45" />
        <div className="absolute left-[790px] top-[30px] h-[830px] w-[400px] rounded-[20px] bg-[radial-gradient(circle_at_56%_18%,rgba(132,178,255,0.24)_0%,rgba(84,120,217,0.12)_34%,rgba(0,0,0,0)_70%)]" />

        <div className="absolute left-[730px] top-[40px] h-[1px] w-[64px] bg-[#5f8fe2]/45" />
        <div className="absolute left-[762px] top-[8px] h-[64px] w-[1px] bg-[#5f8fe2]/45" />
        <div className="absolute left-[759px] top-[37px] h-[6px] w-[6px] rounded-full bg-[#5f8fe2]/80" />

        <p className="absolute left-[80px] top-[80px] font-['Inter',sans-serif] text-[14px] font-medium tracking-[4px] text-[#758cd6]">
          IP COLLABORATION EVENT — INTERACTION DESIGN
        </p>
        <p className="absolute left-[80px] top-[108px] text-[72px] font-black leading-none tracking-[4px] text-[#edf5ff]">
          IP联动活动
        </p>
        <p className="absolute left-[84px] top-[200px] text-[28px] font-medium tracking-[1px] text-[#b9c6e6]">
          游戏交互设计
        </p>
        <div className="absolute left-[84px] top-[252px] h-[3px] w-[60px] rounded-full bg-gradient-to-r from-[#5f99f3] via-[#6d7fec] to-[#7088f5]" />
        <div className="absolute left-[84px] top-[272px] text-[16px] leading-[30px] text-[#a8b3cd]">
          <p>基于韩国漫画《入学佣兵》的IP联动合作，设计限时活动玩法，</p>
          <p>围绕「清理黑帮」核心玩法，构建阶段式进度体系、英雄馈赠</p>
          <p>奖励系统与目标任务驱动机制，打造沉浸式的联动游戏体验。</p>
        </div>

        {tags.map(({ label, left, width }) => (
          <div
            key={label}
            className="absolute top-[370px] flex h-[28px] items-center justify-center rounded-[4px] border border-[#586da0]/45 bg-[#30456d]/45 text-[12px] text-[#aab8df] backdrop-blur-[2px]"
            style={{ left, width }}
          >
            {label}
          </div>
        ))}

        {largeDots.map((left, index) => (
          <div
            key={`large-${left}`}
            className="absolute h-[5px] w-[5px] rounded-full bg-[#617fe3]/40"
            style={{ left, top: index % 2 === 0 ? 442 : 462 }}
          />
        ))}
        {smallDotRows.flatMap((top) =>
          smallDotColumns.map((left) => (
            <div
              key={`${left}-${top}`}
              className="absolute h-[3px] w-[3px] rounded-full bg-[#617fe3]/28"
              style={{ left, top }}
            />
          ))
        )}

        <div className="absolute left-[820px] top-[76px] h-[737px] w-[340px] overflow-hidden rounded-[16px] bg-[#20314e] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
          <img
            src={publicUrl('/images/xingji/ip-collab/scene-bg.webp')}
            alt="IP联动背景场景"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,77,139,0.12)_0%,rgba(18,25,43,0)_22%,rgba(12,18,32,0.08)_100%)]" />
        </div>

        <div className="absolute left-[791px] top-[133px] h-[670px] w-[400px] overflow-hidden">
          <img
            src={publicUrl('/images/xingji/ip-collab/hero-character.webp')}
            alt="IP联动角色立绘"
            className="absolute left-[-50px] top-0 h-full w-[450px] max-w-none object-contain"
          />
        </div>
      </div>
    </LongPageSection>
  );
}

function IPCollabOverview() {
  const cards = [
    {
      num: '01',
      title: '阶段式推进',
      lines: ['1~3阶段渐进解锁', '逐步释放玩法内容', '保持长线新鲜感'],
    },
    {
      num: '02',
      title: '奖励驱动循环',
      lines: ['清理黑帮获取奖励', '英雄馈赠系统激励', '目标任务引导方向'],
    },
    {
      num: '03',
      title: 'IP角色深度融合',
      lines: ['联动英雄立绘展示', '角色养成关联奖励', '情感化体验沉浸'],
    },
  ];

  return (
    <LongPageSection height={620} bg="#141424">
      <div className="absolute inset-0 rounded-[22px] bg-[#17182b]" />
      <p className="absolute left-[80px] top-[44px] font-['Inter',sans-serif] text-[72px] font-bold leading-none text-[#4f7fd8]/10">
        01
      </p>
      <p className="absolute left-[80px] top-[88px] text-[32px] font-bold text-[#f3f6ff]">项目概述</p>
      <p className="absolute left-[80px] top-[130px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#6278cc]">
        PROJECT OVERVIEW
      </p>
      <div className="absolute right-[36px] top-[32px] h-[12px] w-[12px] rotate-45 border border-[#4a62bc]/45" />
      <p className="absolute left-[80px] top-[180px] w-[760px] text-[15px] leading-[32px] text-[#a5afcc]">
        韩国漫画《入学佣兵》IP联动活动「清理黑帮」是一个以多阶段进度推进为核心的
        <br />
        限时活动玩法。玩家通过参与战区清理任务获得奖励，同时解锁联动英雄的专属馈
        <br />
        赠系统。整个活动围绕「玩法参与→进度推进→奖励领取→英雄养成」的核心循环
        <br />
        展开。
      </p>
      <div className="absolute left-[80px] top-[320px] flex gap-[50px]">
        {cards.map(({ num, title, lines }) => (
          <div
            key={num}
            className="flex h-[240px] w-[340px] flex-col rounded-[16px] border border-[#262b43] bg-[#212339] px-[30px] pt-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <p className="font-['Inter',sans-serif] text-[44px] font-bold leading-none text-[#3d68b7]">{num}</p>
            <p className="mt-[18px] text-[18px] font-bold text-[#f4f6ff]">{title}</p>
            <div className="mt-[12px] h-[3px] w-[30px] rounded-full bg-[#4d8cff]" />
            <div className="mt-[16px] text-[14px] leading-[30px] text-[#8f9bb8]">
              {lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function IPCollabMainInterface() {
  const annotations = [
    { top: 188, label: '活动标题区', desc: ['展示活动名称、简介与倒计时，', '建立活动紧迫感与期待感'] },
    { top: 404, label: '核心玩法视窗', desc: ['岛屿地图沉浸式视觉呈现，', '将「清理黑帮」玩法具象化表达'] },
    { top: 620, label: '英雄馈赠入口', desc: ['Q版角色立绘吸引注意力，', '红点+数字提示可领取奖励'] },
    { top: 858, label: '前往按钮', desc: ['核心CTA行动召唤按钮，', '引导玩家进入战斗玩法'] },
  ];
  const leftAnnotation = {
    top: 692,
    label: '进度宝箱',
    desc: ['全战区清理进度可视化，', '宝箱3种状态引导操作反馈'],
  };

  return (
    <LongPageSection height={1080} bg="#141424">
      <div className="absolute inset-0 rounded-[22px] bg-[#17182b]" />
      <p className="absolute left-[80px] top-[38px] font-['Inter',sans-serif] text-[72px] font-bold leading-none text-[#4f7fd8]/10">02</p>
      <p className="absolute left-[80px] top-[82px] text-[32px] font-bold text-[#f3f6ff]">活动主界面设计</p>
      <p className="absolute left-[80px] top-[124px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#6278cc]">
        MAIN ACTIVITY INTERFACE
      </p>
      <div className="absolute right-[122px] top-[4px] grid grid-cols-5 gap-[12px] opacity-55">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-[2px] w-[2px] rounded-full bg-[#5d74d0]" />
        ))}
      </div>
      <div className="absolute left-[80px] top-[172px] w-[352px]">
        <div className="rounded-[8px] bg-[linear-gradient(180deg,rgba(39,46,71,0.9)_0%,rgba(29,33,54,0.78)_100%)] px-[20px] pb-[18px] pt-[10px] shadow-[0_14px_32px_rgba(0,0,0,0.14)]">
          <div className="absolute left-0 top-[8px] h-[160px] w-[3px] rounded-full bg-[#f1b53a]" />
          <p className="font-['Inter',sans-serif] text-[9px] tracking-[3px] text-[#f1b53a]">DESIGN PRINCIPLE</p>
          <p className="mt-[8px] text-[18px] font-bold text-[#f3f6ff]">{`视觉层级 & 信息架构`}</p>
          <div className="mt-[10px] h-px w-[190px] bg-gradient-to-r from-white/20 to-transparent" />
          <p className="mt-[10px] w-[318px] text-[12px] leading-[24px] text-[#b8c0d9]">
            标题区(高权重) → 玩法视窗(中权重) → 功能入口(低权重)
            <br />
            通过视觉权重的三级分层引导视线自然流动，降低认知负担
          </p>
          <div className="mt-[16px] flex flex-col gap-[10px]">
            <div className="flex items-center gap-[8px]">
              <div className="h-[4px] w-[60px] rounded-full bg-[#f1b53a]" />
              <span className="text-[9px] text-[#8f95ad]">高</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="h-[4px] w-[44px] rounded-full bg-[#b98b31]" />
              <span className="text-[9px] text-[#8f95ad]">中</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="h-[4px] w-[28px] rounded-full bg-[#6c5630]" />
              <span className="text-[9px] text-[#8f95ad]">低</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[548px] top-[170px] h-[780px] w-[360px] overflow-hidden rounded-[14px] shadow-[0_18px_38px_rgba(0,0,0,0.28)]">
        <img
          src={publicUrl('/images/xingji/ip-collab/main-screenshot.webp')}
          alt="活动主界面截图"
          className="absolute left-0 top-[-4.8%] h-[104.9%] w-full max-w-none"
        />
      </div>
      {annotations.map(({ top, label, desc }) => (
        <div key={label} className="absolute left-[966px]" style={{ top }}>
          <div className="flex items-center gap-[8px]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#6f82ff] shadow-[0_0_8px_rgba(111,130,255,0.6)]" />
            <div
              className="h-[2px] w-[96px]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, rgba(111,130,255,0.85) 0 6px, transparent 6px 10px)',
              }}
            />
          </div>
          <p className="ml-[116px] mt-[-16px] text-[15px] font-bold text-[#f3f6ff]">{label}</p>
          <div className="ml-[116px] mt-[6px] text-[12px] leading-[23px] text-[#8e99b7]">
            {desc.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
      {/* Left annotation — line + dot */}
      <div className="absolute left-[372px] top-[689px] flex items-center gap-[8px]">
        <div
          className="h-[2px] w-[68px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(111,130,255,0.85) 0 6px, transparent 6px 10px)',
          }}
        />
        <span className="h-[10px] w-[10px] rounded-full bg-[#6f82ff] shadow-[0_0_8px_rgba(111,130,255,0.6)]" />
      </div>
      <p className="absolute left-[294px] top-[680px] text-[15px] font-bold text-[#f3f6ff]">{leftAnnotation.label}</p>
      <div className="absolute left-[215px] top-[704px] text-right text-[12px] leading-[23px] text-[#8e99b7]">
        {leftAnnotation.desc.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </LongPageSection>
  );
}

function IPCollabCoreFlow() {
  const steps = [
    { num: '1', title: '活动主界面', sub: '入口聚合' },
    { num: '2', title: '功能入口', sub: '宝箱/英雄/排名' },
    { num: '3', title: '条件判断', sub: '解锁条件校验' },
    { num: '4', title: '状态分发', sub: '弹窗内容适配' },
    { num: '5', title: '操作反馈', sub: 'Toast/状态更新' },
  ];

  return (
    <LongPageSection height={850} bg="#141424">
      <p className="absolute left-[80px] top-[40px] font-['Inter',sans-serif] text-[64px] font-bold text-[#4a8fd9]/10">03</p>
      <p className="absolute left-[80px] top-[80px] text-[32px] font-bold text-white">核心交互流程</p>
      <p className="absolute left-[80px] top-[122px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#667deb]/60">
        CORE INTERACTION FLOW
      </p>
      <div className="absolute left-[80px] top-[160px] w-[600px] text-[15px] leading-[26px] text-[#8c91ab]">
        <p>活动的交互流程围绕「主界面→子系统弹窗→条件判断→结果反馈」的路径展开。</p>
        <p>通过菱形决策节点（如「解锁条件是否满足？」）实现分支逻辑，</p>
        <p>确保不同状态的玩家都能获得清晰的操作引导与即时反馈。</p>
      </div>
      {/* Flow step cards */}
      <div className="absolute left-[80px] top-[340px] flex items-center gap-0">
        {steps.map(({ num, title, sub }, i) => (
          <div key={num} className="flex items-center">
            <div className="relative h-[130px] w-[180px] overflow-hidden rounded-[10px] border border-[#333859]/40 bg-[#1c1f30]">
              <p className="absolute left-[19px] top-[17px] font-['Inter',sans-serif] text-[32px] font-semibold text-[#6680f2]">
                {num}
              </p>
              <p className="absolute left-[19px] top-[61px] text-[18px] font-bold text-white">{title}</p>
              <p className="absolute left-[19px] top-[91px] text-[13px] text-[#808599]">{sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex w-[55px] items-center justify-center">
                <div className="h-px w-[35px] bg-[#6673b2]/50" />
                <div className="h-[8px] w-[8px] -rotate-45 rounded-[1px] bg-[#6673b2]/80" />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Progressive Disclosure theory */}
      <div className="absolute left-[80px] top-[555px] h-[170px] w-[1120px] bg-gradient-to-r from-[#262e47]/80 to-transparent">
        <div className="absolute left-0 top-0 h-[2px] w-[200px] bg-gradient-to-r from-[#f5b742] to-transparent" />
        <p className="absolute left-[20px] top-[20px] font-['Inter',sans-serif] text-[9px] tracking-[2px] text-[#f5b742]">
          INTERACTION THEORY
        </p>
        <p className="absolute left-[20px] top-[40px] text-[20px] font-bold text-white">渐进式披露</p>
        <p className="absolute left-[20px] top-[70px] font-['Inter',sans-serif] text-[11px] text-[#808ca6]">
          Progressive Disclosure
        </p>
        <p className="absolute left-[360px] top-[30px] w-[500px] text-[12px] leading-[22px] text-[#b2b2bf]">
          活动分1~3阶段逐步解锁玩法内容，避免信息过载。每个阶段仅展示当前可操作的功能与入口，降低玩家的认知成本，提升探索动力与留存率。
        </p>
        {/* Stage dots */}
        <div className="absolute left-[360px] top-[96px] flex items-start gap-[18px]">
          {['阶段1', '阶段2', '阶段3'].map((label, i) => (
            <div key={label} className="flex items-start gap-[8px]">
              <div className="flex flex-col items-center">
                <span
                  className="h-[8px] w-[8px] rounded-full"
                  style={{
                    background: i === 2 ? '#f3c14d' : 'rgba(243,193,77,0.58)',
                  }}
                />
                <span className="mt-[8px] text-[10px] text-[#8a8aa0]">{label}</span>
              </div>
              {i < 2 && (
                <div
                  className="mt-[3px] h-[1px] w-[66px]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to right, rgba(243,193,77,0.42) 0 4px, transparent 4px 8px)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </LongPageSection>
  );
}

function IPCollabRewardStateMachine() {
  const states = [
    {
      label: '状态一: 未解锁',
      img: '/images/xingji/ip-collab/state-locked.webp',
      desc: ['条件未满足', '显示「前往解锁」按钮'],
      dotColor: '#ea8a64',
    },
    {
      label: '状态二: 可领取',
      img: '/images/xingji/ip-collab/state-claimable.webp',
      desc: ['条件已满足', '显示「领取」按钮+红点'],
      dotColor: '#63c976',
    },
    {
      label: '状态三: 已领取',
      img: '/images/xingji/ip-collab/state-claimed.webp',
      desc: ['奖励已领取', '按钮置灰显示'],
      dotColor: '#6a7dff',
    },
    {
      label: '状态四: 已达上限',
      img: '/images/xingji/ip-collab/state-maxed.webp',
      desc: ['全部领完', '显示「已达到上限」'],
      dotColor: '#9a9aad',
    },
  ];

  return (
    <LongPageSection height={1320} bg="#141424">
      <div className="absolute inset-0 rounded-[22px] bg-[#17182b]" />
      <div className="absolute right-[110px] top-[160px] grid grid-cols-4 gap-[12px] opacity-50">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-[#5d74d0]" />
        ))}
      </div>
      <p className="absolute left-[80px] top-[48px] font-['Inter',sans-serif] text-[72px] font-bold leading-none text-[#4f7fd8]/10">04</p>
      <p className="absolute left-[80px] top-[92px] text-[32px] font-bold text-[#f3f6ff]">英雄馈赠奖励状态机</p>
      <p className="absolute left-[80px] top-[134px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#6278cc]">
        HERO GIFT REWARD STATE MACHINE
      </p>
      <p className="absolute left-[80px] top-[194px] w-[980px] text-[15px] leading-[32px] text-[#a5afcc]">
        英雄馈赠系统通过4种状态的精确控制，为玩家提供清晰的行为引导与即时反馈。每种状态对应不同的视觉表现与操作逻
        <br />
        辑，确保玩家始终理解当前可执行的操作。
      </p>

      <div className="absolute left-[80px] top-[338px] flex items-start gap-0">
        {states.map(({ label, img, desc, dotColor }, i) => (
          <div key={label} className="flex items-start">
            <div className="flex w-[216px] flex-col items-start">
              <div className="mb-[18px] flex items-center gap-[10px]">
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: dotColor }} />
                <span className="text-[14px] font-bold text-[#f3f6ff]">{label}</span>
              </div>
              <div className="relative h-[466px] w-[216px] overflow-hidden rounded-[12px] bg-[#161616] shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
                <img
                  src={publicUrl(img)}
                  alt={label}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-[18px] text-[12px] leading-[26px] text-[#a5afcc]">
                {desc.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            {i < states.length - 1 && (
              <p className="mt-[272px] px-[12px] font-['Inter',sans-serif] text-[44px] font-light leading-none text-[#5a67ca]/70">
                →
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="absolute left-[80px] top-[1020px] h-[150px] w-[1120px] bg-[linear-gradient(90deg,#20243b_0%,#262d47_48%,#20243b_100%)]">
        <p className="absolute left-[20px] top-[22px] font-['Inter',sans-serif] text-[10px] tracking-[3px] text-[#6278cc]">
          NIELSEN HEURISTIC #1
        </p>
        <p className="absolute left-[20px] top-[46px] text-[16px] font-bold text-[#f3f6ff]">系统状态可见性</p>
        <div className="absolute left-[20px] top-[90px] flex items-center gap-[4px]">
          {[
            { label: '未解锁', color: '#9a9aad', connColor: 'rgba(154,154,173,0.45)' },
            { label: '可领取', color: '#f3c14d', connColor: 'rgba(243,193,77,0.45)' },
            { label: '已领取', color: '#63c976', connColor: 'rgba(99,201,118,0.45)' },
            { label: '已达上限', color: '#9a9aad', connColor: '' },
          ].map(({ label, color, connColor }, i) => (
            <div key={label} className="flex items-center gap-[4px]">
              <span className="h-[12px] w-[12px] rounded-full border-2" style={{ borderColor: color, background: i === 0 || i === 3 ? 'transparent' : color }} />
              <span className="text-[11px]" style={{ color }}>{label}</span>
              {i < 3 && (
                <>
                  <div className="h-px w-[92px] border-t border-dashed" style={{ borderColor: connColor }} />
                  <span className="text-[11px]" style={{ color: connColor }}>→</span>
                </>
              )}
            </div>
          ))}
        </div>
        <p className="absolute left-[630px] top-[34px] w-[420px] text-[13px] leading-[26px] text-[#a5afcc]">
          4种奖励状态通过差异化的按钮文案、颜色与红点提示，让玩家始终清晰感知当前奖励的领取状态，形成完整的状态闭环。
        </p>
      </div>
    </LongPageSection>
  );
}

function IPCollabTaskSystem() {
  const annotations = [
    { top: 392, label: '任务列表卡片', desc: ['每条任务独立展示名称、进度(N/10)、', '奖励道具与操作按钮，信息密度适中'] },
    { top: 595, label: '差异化按钮状态', desc: ['黄色=待领取，绿色=进行中，', '蓝色=已完成，灰色=不可操作', '通过色彩编码降低认知负担'] },
    { top: 790, label: '底部Tab切换', desc: ['「进度奖励」与「个人成就」双Tab，', '为不同目标导向的玩家提供入口'] },
  ];
  const leftAnnotation = {
    top: 519,
    label: '奖励道具预览',
    desc: ['道具图标+数量直观展示，', '已获得打勾、未解锁显示锁标识'],
  };

  return (
    <LongPageSection height={1080} bg="#141424">
      <div className="absolute inset-0 rounded-[22px] bg-[#17182b]" />
      <div className="absolute left-[36px] top-[88px] h-[12px] w-[12px] rotate-45 border border-[#4a62bc]/45" />
      <p className="absolute left-[80px] top-[48px] font-['Inter',sans-serif] text-[72px] font-bold leading-none text-[#4f7fd8]/10">05</p>
      <p className="absolute left-[80px] top-[92px] text-[32px] font-bold text-[#f3f6ff]">目标任务系统</p>
      <p className="absolute left-[80px] top-[134px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#6278cc]">
        TARGET TASK SYSTEM
      </p>
      {/* Game Design Theory card — left-aligned with title */}
      <div className="absolute left-[80px] top-[172px] w-[384px]">
        <div className="rounded-[6px] bg-gradient-to-b from-[rgba(38,46,71,0.6)] to-transparent px-[15px] py-[10px]">
          <div className="flex">
            <div className="mr-[12px] mt-[2px] h-[80px] w-[3px] rounded-[2px] bg-[#f5b742]" />
            <div>
              <p className="font-['Inter',sans-serif] text-[9px] tracking-[2px] text-[#f5b742]">GAME DESIGN THEORY</p>
              <p className="mt-[4px] text-[16px] font-bold text-white">目标驱动设计</p>
              <p className="mt-[6px] w-[340px] text-[12px] leading-[22px] text-[#a6a6b2]">
                任务列表将活动目标分解为可量化的子目标，进度条(N/10)提供即时成就反馈，利用Zeigarnik效应——未完成的任务更具驱动力。
              </p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="ml-[15px] mt-[16px] flex items-center gap-[10px]">
            <div className="relative h-[4px] w-[180px] rounded-[2px] bg-white/[0.08]">
              <div className="absolute left-0 top-0 h-full w-[126px] rounded-[2px] bg-[rgba(245,183,66,0.7)]" />
            </div>
            <span className="font-['Inter',sans-serif] text-[9px] text-[rgba(245,183,66,0.7)]">7/10</span>
          </div>
        </div>
      </div>

      {/* Phone mockup — shifted right to match 活动主界面 pattern */}
      <div className="absolute left-[548px] top-[176px] h-[780px] w-[360px] overflow-hidden rounded-[16px] bg-black shadow-[0_18px_40px_rgba(0,0,0,0.30)]">
        <div className="absolute left-[20px] top-[150px] h-[490px] w-[320px] overflow-hidden rounded-[8px]">
          <img
            src={publicUrl('/images/xingji/ip-collab/task-panel.webp')}
            alt="目标任务系统截图"
            className="absolute left-[-7%] top-[-28%] h-[158%] w-[114%] max-w-none"
          />
        </div>
      </div>

      {/* Right annotations */}
      {annotations.map(({ top, label, desc }) => (
        <div key={label} className="absolute left-[930px]" style={{ top }}>
          <div className="flex items-center gap-[8px]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#6f82ff] shadow-[0_0_8px_rgba(111,130,255,0.6)]" />
            <div
              className="h-[2px] w-[80px]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, rgba(111,130,255,0.85) 0 6px, transparent 6px 10px)',
              }}
            />
          </div>
          <p className="ml-[100px] mt-[-18px] text-[15px] font-bold text-[#f3f6ff]">{label}</p>
          <div className="ml-[100px] mt-[8px] text-[12px] leading-[23px] text-[#8e99b7]">
            {desc.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Left annotation — dashed line + dot pointing to phone */}
      <div className="absolute left-[380px]" style={{ top: leftAnnotation.top }}>
        <div className="flex items-center gap-[8px]">
          <div
            className="h-[2px] w-[80px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(111,130,255,0.85) 0 6px, transparent 6px 10px)',
            }}
          />
          <span className="h-[10px] w-[10px] rounded-full bg-[#6f82ff] shadow-[0_0_8px_rgba(111,130,255,0.6)]" />
        </div>
      </div>
      <p className="absolute left-[272px] text-[15px] font-bold text-[#f3f6ff]" style={{ top: leftAnnotation.top - 5 }}>{leftAnnotation.label}</p>
      <div className="absolute left-[194px] text-[12px] leading-[23px] text-[#8e99b7]" style={{ top: leftAnnotation.top + 20 }}>
        {leftAnnotation.desc.map((line) => (
          <p key={line} className="text-right">{line}</p>
        ))}
      </div>
    </LongPageSection>
  );
}

function IPCollabHeroSystem() {
  const layers = [
    {
      icon: '♡',
      label: 'VISCERAL LEVEL',
      accentColor: '#f57575',
      borderColor: 'rgba(245,117,117,0.25)',
      title: '本能层',
      desc: '精美立绘引发审美愉悦',
    },
    {
      icon: '⚡',
      label: 'BEHAVIORAL LEVEL',
      accentColor: '#f5b742',
      borderColor: 'rgba(245,183,66,0.25)',
      title: '行为层',
      desc: '清晰的上阵/强化操作路径',
    },
    {
      icon: '✦',
      label: 'REFLECTIVE LEVEL',
      accentColor: '#6d8eff',
      borderColor: 'rgba(109,142,255,0.25)',
      title: '反思层',
      desc: 'IP角色带来情感共鸣与收藏欲',
    },
  ];

  return (
    <LongPageSection height={1150} bg="#141424">
      <p className="absolute left-[80px] top-[40px] font-['Inter',sans-serif] text-[64px] font-bold text-[#4a8fd9]/10">06</p>
      <p className="absolute left-[80px] top-[80px] text-[32px] font-bold text-white">英雄系统设计</p>
      <p className="absolute left-[80px] top-[122px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#667deb]/60">
        HERO SYSTEM DESIGN
      </p>
      <p className="absolute left-[80px] top-[160px] w-[960px] text-[15px] leading-[34px] text-[#a5afcc]">
        联动英雄系统提供「详情查看」与「立绘展示」两个维度的体验。详情面板聚焦功能——属性、技能、养成
        <br />
        进度；立绘面板聚焦情感——全幅艺术画作沉浸展示。两者互补，满足理性决策与感性体验的双重需求。
      </p>
      {/* Hero Detail Panel */}
      <div className="absolute left-[100px] top-[293px] h-[647px] w-[300px] overflow-hidden rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.3)]">
        <img
          src={publicUrl('/images/xingji/ip-collab/hero-detail.webp')}
          alt="英雄详情面板"
          className="absolute left-0 top-[-5.2%] h-[105.2%] w-full max-w-none"
        />
      </div>
      {/* Toggle indicator */}
      <p className="absolute left-[443px] top-[570px] font-['Inter',sans-serif] text-[32px] font-bold text-[#667deb]/40">
        &#8644;
      </p>
      <p className="absolute left-[438px] top-[610px] text-[11px] text-[#667deb]/60">点击切换</p>
      {/* Hero Portrait Panel */}
      <div className="absolute left-[520px] top-[291px] h-[649px] w-[300px] overflow-hidden rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.3)]">
        <img
          src={publicUrl('/images/xingji/ip-collab/hero-portrait.webp')}
          alt="联动英雄立绘"
          className="absolute left-0 top-[-4.8%] h-[104.9%] w-full max-w-none"
        />
      </div>
      {/* Captions */}
      <p className="absolute left-[100px] top-[960px] text-[15px] font-bold text-white">英雄详情面板</p>
      <div className="absolute left-[100px] top-[985px] text-[12px] leading-[20px] text-[#80859e]">
        <p>展示英雄属性、技能、等级</p>
        <p>上阵/强化双CTA按钮</p>
        <p>功能导向的理性决策界面</p>
      </div>
      <p className="absolute left-[520px] top-[960px] text-[15px] font-bold text-white">联动英雄立绘</p>
      <div className="absolute left-[520px] top-[985px] text-[12px] leading-[20px] text-[#80859e]">
        <p>全屏沉浸式立绘展示</p>
        <p>点击空白区域关闭的轻量交互</p>
        <p>情感导向的感性体验界面</p>
      </div>
      {/* Emotional Design Theory */}
      <p className="absolute left-[860px] top-[291px] font-['Inter',sans-serif] text-[9px] tracking-[2px] text-[#808ca6]">{`DON NORMAN'S THREE LEVELS`}</p>
      <p className="absolute left-[860px] top-[311px] text-[18px] font-bold text-white">情感化设计</p>
      <div className="absolute left-[860px] top-[351px] flex flex-col gap-[12px]">
        {layers.map(({ icon, label, accentColor, borderColor, title, desc }) => (
          <div
            key={title}
            className="relative h-[90px] w-[320px] rounded-[8px] bg-[#1a1f2e]/80"
            style={{ borderColor, border: `1px solid ${borderColor}` }}
          >
            <div
              className="absolute left-[12px] top-[12px] h-[66px] w-[3px] rounded-[2px]"
              style={{ background: accentColor }}
            />
            <span className="absolute left-[26px] top-[14px] text-[14px]" style={{ color: accentColor }}>
              {icon}
            </span>
            <p
              className="absolute left-[48px] top-[16px] font-['Inter',sans-serif] text-[8px] tracking-[1.5px]"
              style={{ color: `${accentColor}b3` }}
            >
              {label}
            </p>
            <p className="absolute left-[26px] top-[38px] text-[15px] font-bold text-white">{title}</p>
            <p className="absolute left-[26px] top-[62px] text-[11px] text-[#a6a6b2]">{desc}</p>
          </div>
        ))}
      </div>
    </LongPageSection>
  );
}

function IPCollabDesignOutcomes() {
  return (
    <LongPageSection height={2100} bg="linear-gradient(180deg, #141424 0%, #1f2447 40%, #2e3873 100%)">
      <p className="absolute left-[80px] top-[40px] font-['Inter',sans-serif] text-[64px] font-bold text-white/[0.06]">07</p>
      <p className="absolute left-[80px] top-[80px] text-[32px] font-bold text-white">设计成果</p>
      <p className="absolute left-[80px] top-[122px] font-['Inter',sans-serif] text-[12px] font-medium tracking-[3px] text-[#99b2f2]/60">
        DESIGN OUTCOMES
      </p>
      <p className="absolute left-[80px] top-[180px] w-[794px] text-[16px] leading-[34px] text-[#a6b2d1]">
        本案例完整展示了IP联动活动的交互设计思路：从宏观的阶段式架构设计，到微观的按钮状态机控制，每一个交互决策都有明确的理论依据支撑。通过视觉层级、渐进式披露、系统状态可见性等核心原则的综合运用，打造了一套兼顾功能性、易用性与情感化的活动交互体系。
      </p>
      {/* Metric card */}
      <div className="absolute left-[931px] top-[180px] flex w-[250px] flex-col gap-[8px] rounded-[12px] border border-white/10 bg-white/5 px-[24px] py-[28px]">
        <p className="bg-gradient-to-r from-[#66a6ff] to-[#9973ff] bg-clip-text font-['Inter',sans-serif] text-[48px] font-bold text-transparent">
          5
        </p>
        <p className="text-[16px] font-bold text-white">交互界面</p>
        <p className="text-[12px] text-[#99a6c7]">完整的多界面交互稿</p>
      </div>
      {/* Decorative circles */}
      <div className="absolute left-[950px] top-[100px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(51,77,178,0.1)_0%,rgba(51,77,178,0)_70%)]" />
      <div className="absolute left-[1060px] top-[300px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(51,77,178,0.08)_0%,rgba(51,77,178,0)_70%)]" />
      {/* Screenshots Grid */}
      <div className="absolute left-[79px] top-[405px] flex w-[1121px] flex-wrap items-start justify-center gap-[20px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-[780px] w-[360px] overflow-hidden">
            <img
              src={publicUrl('/images/xingji/ip-collab/screenshots-grid.webp')}
              alt={`活动截图 ${i + 1}`}
              className="absolute max-w-none"
              style={{
                height: '102.83%',
                width: '664.35%',
                top: '-2.8%',
                left: `${-i * 113.87}%`,
              }}
            />
          </div>
        ))}
      </div>
      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 h-[4px] w-full"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(74,143,217,0) 0%, rgb(74,143,217) 30%, rgb(148,89,245) 70%, rgba(148,89,245,0) 100%)',
        }}
      />
    </LongPageSection>
  );
}

function IPCollaborationCase() {
  return (
    <div className="space-y-10">
      <IPCollabCover />
      <IPCollabOverview />
      <IPCollabMainInterface />
      <IPCollabCoreFlow />
      <IPCollabRewardStateMachine />
      <IPCollabTaskSystem />
      <IPCollabHeroSystem />
      <IPCollabDesignOutcomes />
    </div>
  );
}

export function XingjiTabPage({ activeTab }: { activeTab: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' }) {
  if (activeTab === '2') return <OfficialRecommendationCase />;
  if (activeTab === '3') return <CoordBookmarkCase />;
  if (activeTab === '4') return <WorldMapInteractionCase />;
  if (activeTab === '5') return renderStarFigmaCase('海军试炼') ?? <GeneralTrialCase />;
  if (activeTab === '6') return <CrossServerCase />;
  if (activeTab === '7') return <HudRedesignCase />;
  if (activeTab === '8') return <WishTreeCase />;
  if (activeTab === '9') return <EmbermineCase />;
  if (activeTab === '10') return renderStarFigmaCase('清理海盗') ?? <IPCollaborationCase />;
  return <CrossServerCase />;
}
