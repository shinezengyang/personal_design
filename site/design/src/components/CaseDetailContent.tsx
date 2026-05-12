import { publicUrl } from '../lib/publicUrl';
import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';

const paper = '#07111d';
const ink = '#e8ffff';
const muted = '#9db7c8';
const blue = '#4d6eeb';
const accent = '#ff2a6d';

const hudShots = [
  'pencil/xingji-aodaisai/panel-2.png',
  'pencil/xingji-aodaisai/panel.png',
  'pencil/xingji-aodaisai/panel-1.png',
] as const;

function SectionFrame({ children, bg = paper, height = 900 }: { children: React.ReactNode; bg?: string; height?: number }) {
  return (
    <div className="overflow-hidden">
      <ResponsiveScaleFrame minDesignWidth={1280} maxScale={1}>
        <section className="relative w-[1280px] overflow-hidden" style={{ backgroundColor: bg, height }}>
          {children}
        </section>
      </ResponsiveScaleFrame>
    </div>
  );
}

function FigmaBlock({ src, alt, height = 900 }: { src: string; alt: string; height?: number }) {
  return (
    <SectionFrame bg="#fbfcfd" height={height}>
      <img
        src={publicUrl(`pencil/xingji-aodaisai/${src}`)}
        alt={alt}
        className="absolute inset-0 h-full w-full object-fill"
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function Label({ cn, en }: { cn: string; en: string }) {
  return (
    <>
      <div className="absolute left-[90px] top-[70px] text-[30px] font-black leading-[38px] text-[#2e3338]">{cn}</div>
      <div className="absolute left-[90px] top-[112px] text-[18px] leading-[23px] tracking-[10px] text-[#858a91]">{en}</div>
    </>
  );
}

function PhoneShot({ src, className }: { src: string; className: string }) {
  return <img src={publicUrl(src)} alt="" className={`absolute object-cover shadow-[0_4px_10px_rgba(0,0,0,0.25)] ${className}`} loading="lazy" decoding="async" />;
}

function CoverSection() {
  return (
    <SectionFrame bg="#06102b">
      <div className="absolute left-[30px] top-[250px] text-center text-[210px] font-bold leading-none text-[#4667dd]/35">∞</div>
      <div className="absolute left-[520px] top-[252px] text-center text-[250px] font-bold leading-none text-[#4667dd]/30">∞</div>
      <div className="absolute left-[960px] top-[250px] text-center text-[210px] font-bold leading-none text-[#4667dd]/30">∞</div>
      <div className="absolute left-[132px] top-[286px] h-[166px] w-[166px] rounded-full bg-[#ff2a6d] blur-[18px]" />
      <div className="absolute left-[158px] top-[300px] w-[120px] text-center text-[150px] font-bold leading-none text-[#00f5ff] [text-shadow:0_0_24px_rgba(0,245,255,.75)]">1</div>
      <h2 className="absolute left-[340px] top-[330px] text-[54px] font-bold leading-[72px] text-white [text-shadow:0_0_18px_rgba(0,245,255,.45)]">HUD-改版设计</h2>
      <p className="absolute left-[340px] top-[420px] w-[770px] text-[24px] leading-[32px] text-white">HUD，是游戏里的第一入口，把最重要的功能统一收纳起来，让玩家在战斗、基地、地图之间快速切换，同时通过红点提醒玩家去做任务、领奖励、升级、消费</p>
    </SectionFrame>
  );
}

function BackgroundSection() {
  const cards = [
    ['玩家', '入口太多，容易迷路，当前状态不够清楚'],
    ['策划', '功能层级不清晰，影响玩法引导'],
    ['美术', '视觉噪音太多，画面不够高级'],
    ['实现', '耦合太重，会影响性能'],
  ];

  return (
    <SectionFrame>
      <div className="absolute inset-x-0 bottom-0 h-[295px] bg-white" />
      <div className="absolute left-[90px] top-[82px] text-[28px] font-bold" style={{ color: ink }}>改版背景</div>
      <div className="absolute left-[90px] top-[130px] text-[18px] tracking-[7px] text-[#383d40]/45">T H E&nbsp;&nbsp; B A C K G R O U N D</div>
      <h3 className="absolute left-[88px] top-[250px] text-[46px] font-bold leading-[62px]" style={{ color: ink }}>为什么要进行改版？</h3>
      {hudShots.map((shot, index) => <PhoneShot key={shot} src={shot} className={`top-[332px] h-[350px] ${index === 0 ? 'left-[90px] w-[197px]' : index === 1 ? 'left-[314px] w-[195px]' : 'left-[538px] w-[196px]'}`} />)}
      <div className="absolute left-[90px] top-[705px] text-[23px]" style={{ color: muted }}>改版前的HUD</div>
      {cards.map(([title, copy], index) => {
        const x = index % 2 === 0 ? 775 : 990;
        const y = index < 2 ? 250 : 545;
        return (
          <div key={title} className="absolute h-[230px] w-[196px] rounded-[16px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]" style={{ left: x, top: y }}>
            <div className={`absolute inset-x-0 h-[70px] ${index < 2 ? 'top-0 rounded-t-[16px] bg-[#fab89e]' : 'bottom-0 rounded-b-[16px] bg-[#4d6eeb]'}`} />
            <div className={`absolute left-0 w-full text-center text-[25px] font-bold text-white ${index < 2 ? 'top-[22px]' : 'bottom-[18px]'}`}>{title}</div>
            <div className="absolute left-[28px] top-[82px] w-[140px] text-center text-[24px] leading-[30px]" style={{ color: muted }}>{copy}</div>
          </div>
        );
      })}
    </SectionFrame>
  );
}

function GoalsSection() {
  const goals = [
    ['1', '经营资源', '采集', '收资源、清待办\n领收益、排队列'],
    ['2', '提升战力', '养成', '资源转成战力\n持续提升基地'],
    ['3', '扩张领土', '占领', '扩大势力范围\n争夺关键位置'],
    ['4', '联盟协作', '对抗', '大规模的战争体验\n服务器里获得地位'],
  ];
  return (
    <SectionFrame>
      <Label cn="玩家目标" en="THE GOALS" />
      <div className="absolute inset-x-0 bottom-0 h-[445px] bg-[#4974f0]" />
      {goals.map(([no, stage, keyword, desc], index) => {
        const left = 34 + index * 324;
        return (
          <div key={no} className="absolute top-[248px] h-[430px] w-[240px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]" style={{ left }}>
            <div className="absolute left-[77px] top-[-58px] h-[88px] w-[88px] rounded-full bg-[#f78472]" />
            <div className="absolute left-[87px] top-[-58px] h-[72px] w-[72px] rounded-full bg-[#ffd29a]" />
            <div className="absolute left-[77px] top-[-34px] w-[88px] text-center text-[54px] font-black leading-[68px] text-white">{no}</div>
            <div className="absolute top-[102px] w-full text-center text-[30px] font-black leading-[38px]" style={{ color: accent }}>{stage}</div>
            <div className="absolute top-[164px] w-full text-center text-[54px] font-black leading-[68px] text-[#668ffa]">{keyword}</div>
            <div className="absolute top-[274px] w-full whitespace-pre-line text-center text-[25px] font-bold leading-[31px] text-[#858a91]">{desc}</div>
            {index < goals.length - 1 ? <div className="absolute left-[218px] top-[110px] w-[137px] border-t-2 border-dashed border-[#f78472]" /> : null}
          </div>
        );
      })}
    </SectionFrame>
  );
}

function CompetitorSection() {
  return <FigmaBlock src="figma-block-competitor.png" alt="竞品分析" />;
}

function WireframeDiagram({ variant = 'base' }: { variant?: 'base' | 'map' }) {
  const labels = variant === 'base'
    ? [['个人信息区域', 0, 0, 74, 25], ['货币栏', 79, 0, 118, 11], ['常规功能菜单栏', 0, 29, 74, 62], ['活动功能菜单栏', 137, 14, 60, 109], ['Toast区域', 78, 74, 55, 55], ['养成功能显示区域', 0, 198, 197, 34], ['装置区域', 0, 236, 197, 32], ['系统功能导航栏', 0, 312, 197, 38]]
    : [['个人信息区域', 0, 0, 74, 25], ['货币栏', 79, 0, 118, 11], ['行军信息区域', 0, 28, 74, 137], ['常规功能菜单栏', 0, 168, 74, 114], ['Toast区域', 78, 74, 55, 55], ['快捷操作按钮区域', 170, 152, 27, 104], ['系统功能导航栏', 0, 312, 197, 38]];
  return (
    <div className="relative h-[350px] w-[197px] bg-[#707070]">
      {labels.map(([text, x, y, w, h]) => <div key={text as string} className="absolute border border-dashed border-[#505070] bg-[#939393] text-center text-[8px] font-bold leading-[10px] text-white" style={{ left: x as number, top: y as number, width: w as number, height: h as number, paddingTop: Math.max(2, ((h as number) - 10) / 2) }}>{text as string}</div>)}
    </div>
  );
}

function ProblemBackdrop({ variant = 'down' }: { variant?: 'down' | 'up' }) {
  return (
    <div
      className="absolute left-0 top-0 h-[480px] w-[1280px] bg-white"
      style={{
        clipPath: variant === 'up'
          ? 'polygon(0 0, 100% 0, 100% 58%, 0 100%)'
          : 'polygon(0 0, 100% 0, 100% 72%, 0 28%)',
      }}
    />
  );
}

function ProblemHeaderWide({ no, quote, copy }: { no: string; quote: string; copy: string }) {
  return (
    <>
      <div className="absolute left-[90px] top-[82px] w-[190px] text-[28px] font-bold leading-normal text-[#383d40]">明确问题</div>
      <div className="absolute left-[90px] top-[130px] h-[24px] w-[350px] text-[18px] leading-normal tracking-[7px] text-[#383d40]/45">D E F I N I T I O N</div>
      <div className="absolute left-[90px] top-[225px] h-[42px] w-[150px] text-[34px] font-bold leading-normal text-[#b8d1fa]">问题{no}</div>
      <div className="absolute left-[90px] top-[282px] h-[42px] w-[900px] text-[32px] font-bold leading-normal text-[#4d6eeb]">{quote}</div>
      <p className="absolute left-[90px] top-[350px] h-[106px] w-[1040px] whitespace-pre-line text-[22px] leading-normal text-[#858f99]">{copy}</p>
    </>
  );
}

function ProblemHeaderSide({ no, quote, copy }: { no: string; quote: string; copy: string }) {
  return (
    <>
      <div className="absolute left-[88px] top-[50px] w-[220px] text-[31px] font-bold leading-[36px] tracking-[1.5px] text-[#383b42]">明确问题</div>
      <div className="absolute left-[90px] top-[91px] w-[300px] text-[19px] leading-[24px] tracking-[7px] text-[#6d727b]/75">D E F I N I T I O N</div>
      <div className="absolute left-[88px] top-[285px] w-[240px] text-[42px] font-bold leading-[50px] tracking-[1px] text-[#b9c9f9]">问题{no}</div>
      <div className="absolute left-[88px] top-[344px] w-[650px] text-[31px] font-bold leading-[42px] tracking-[1px] text-[#5f86e9]">{quote}</div>
      <p className="absolute left-[88px] top-[420px] w-[560px] whitespace-pre-line text-[22px] leading-[35px] text-[#7e838b]">{copy}</p>
    </>
  );
}

function ProblemOneSection() {
  return <FigmaBlock src="figma-block-problem-1.png" alt="明确问题一" />;
}

function ProblemTwoSection() {
  return <FigmaBlock src="figma-block-problem-2.png" alt="明确问题二" />;
}

function ProblemThreeSection() {
  return <FigmaBlock src="figma-block-problem-3.png" alt="明确问题三" />;
}

function ProblemFourSection() {
  return <FigmaBlock src="figma-block-problem-4.png" alt="明确问题四" />;
}

function SingleImageProblemSection({
  no,
  quote,
  copy,
  image,
  imageBox,
  diagonal = 'up',
}: {
  no: string;
  quote: string;
  copy: string;
  image: string;
  imageBox: { left: number; top: number; width: number; height: number };
  diagonal?: 'down' | 'up';
}) {
  return (
    <SectionFrame bg="#edeffe">
      <ProblemBackdrop variant={diagonal} />
      <ProblemHeaderSide no={no} quote={quote} copy={copy} />
      <img
        src={publicUrl(image)}
        alt=""
        className="absolute object-cover shadow-[0_8px_22px_rgba(0,0,0,0.28)]"
        style={{ left: imageBox.left, top: imageBox.top, width: imageBox.width, height: imageBox.height }}
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function ProblemFiveSection() {
  return <FigmaBlock src="figma-block-problem-5.png" alt="明确问题五" />;
}

// ─── New sections ────────────────────────────────────────────────────────────

function RedesignDirectionSection() {
  return <FigmaBlock src="figma-block-redesign-direction.png" alt="改版方向" />;
}

function PathOptimizationSection() {
  return <FigmaBlock src="figma-block-path-optimization.png" alt="信息减负 HUD 操作路径优化" />;
}

function InfoPanelText({ subtitle, title, copy }: { subtitle: string; title: string; copy: string }) {
  return (
    <>
      <div className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">信息减负</div>
      <div className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">{subtitle}</div>
      <div className="absolute left-[88px] top-[220px] w-[260px] text-[34px] font-bold leading-[41px] tracking-[1px] text-[#5e7fed]">{title}</div>
      <p className="absolute left-[88px] top-[305px] w-[245px] text-[24px] leading-[36px] text-[#8c9097]">{copy}</p>
    </>
  );
}

function HudZoneMap({ className = '', variant = 'priority' }: { className?: string; variant?: 'priority' | 'field' | 'cabin' | 'focus' }) {
  const field = variant === 'field';
  const cabin = variant === 'cabin';
  const focus = variant === 'focus';
  const zones = focus ? [
    ['顶部信息区域', 0, 0, 46, 52, '#8c8c8c'],
    ['中部内容区域', 0, 7, 46, 73, '#9b9b9b'],
    ['底部导航区域', 0, 80, 46, 20, '#8c8c8c'],
    ['重点展示区域', 29, 5, 35, 42, '#b6b6b6'],
    ['重点操作区域', 29, 45, 35, 29, '#b6b6b6'],
    ['行军信息区域', 62, 5, 26, 31, '#858585'],
    ['挂机场景', 78, 5, 22, 31, '#858585'],
    ['商业运营\n活动功能\n菜单栏', 88, 0, 12, 41, '#858585'],
    ['常规玩法\n入口区域', 62, 36, 22, 19, '#858585'],
    ['常规系统入口区域', 78, 42, 22, 14, '#858585'],
    ['养成功能显示区域', 62, 57, 38, 31, '#858585'],
    ['快捷任务区域', 62, 88, 16, 12, '#858585'],
    ['挂机玩法操作区域', 78, 88, 22, 12, '#858585'],
  ] : [
    ['个人信息区域', 0, 0, 38, 7, '#888'],
    [cabin ? '船舱资源栏' : '货币栏', 39, 0, 61, 3, '#888'],
    ['行军信息区域', 0, 8, 38, 32, '#888'],
    [cabin ? '船舱场景' : field ? '野外场景' : '挂机场景', 38, 8, field || cabin ? 34 : 31, 64, '#777'],
    ['商业运营\n活动功能\n菜单栏', 72, 4, 28, 31, '#888'],
    ['常规玩法\n入口区域', 0, field || cabin ? 48 : 32, 38, field || cabin ? 20 : 15, '#888'],
    [field || cabin ? '野外快捷操作区域' : '常规系统入口区域', field || cabin ? 72 : 38, field || cabin ? 43 : 36, field || cabin ? 13 : 34, field || cabin ? 38 : 11, '#888'],
    [field || cabin ? '常规系统入口区域' : '养成功能显示区域', field || cabin ? 86 : 48, field || cabin ? 43 : 48, field || cabin ? 14 : 52, field || cabin ? 38 : 24, '#888'],
    ['快捷任务区域', 0, 72, 29, 9, '#888'],
    [field ? '坐标区域' : '挂机玩法操作区域', field ? 29 : 29, 76, field ? 42 : 71, field ? 5 : 5, '#888'],
    ['快捷聊天区域', 0, 81, 100, 8, '#aaa'],
    ['系统功能导航栏', 0, 89, 100, 11, '#888'],
  ];
  return (
    <div className={`absolute overflow-hidden bg-[#707070] ${className}`}>
      {zones.map(([text, x, y, w, h, color]) => (
        <div
          key={`${text}-${x}-${y}`}
          className="absolute flex items-center justify-center whitespace-pre-line border border-dashed border-[#505070] px-1 text-center text-[16px] font-extrabold leading-[16px] text-white"
          style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%`, backgroundColor: color as string }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

function InfoLayeringSection() {
  return <FigmaBlock src="figma-block-info-layering.png" alt="信息减负 信息分层" />;
}

function EmphasisSection() {
  return <FigmaBlock src="figma-block-emphasis.png" alt="信息减负 重点突出" />;
}

function PriorityInfoSection() {
  return <FigmaBlock src="figma-block-priority-info.png" alt="信息减负 先看到最重要的信息" />;
}

function AreaUnificationSection() {
  return <FigmaBlock src="figma-block-area-unification.png" alt="信息减负 区域统一" />;
}

function FunctionZoneSection() {
  return <FigmaBlock src="figma-block-usability-zone.png" alt="易用性重构功能分区" />;
}

function HudComparisonSection() {
  return <FigmaBlock src="figma-block-usability-compare.png" alt="HUD界面改版对比" />;
}

function NavigationGuideSection() {
  return <FigmaBlock src="figma-block-guide.png" alt="引导化重构功能分区" />;
}

function GrowthInterfaceSection() {
  return <FigmaBlock src="figma-block-growth-interface.png" alt="其他设计展示 养成界面" height={720} />;
}

function ReflectionSection() {
  return <FigmaBlock src="figma-block-reflection.png" alt="项目反思" />;
}

// ─────────────────────────────────────────────────────────────────────────────

function SpecSection() {
  return <FigmaBlock src="figma-block-spec.png" alt="规范性 制定界面规范" />;
}

function OverlaySection() {
  return <FigmaBlock src="figma-block-overlay.png" alt="其他设计展示 弹窗界面展示" />;
}

function VisualSection({ compact = false }: { compact?: boolean }) {
  return compact
    ? <FigmaBlock src="figma-block-visual-2.png" alt="视觉稿欣赏 公会界面" />
    : <FigmaBlock src="figma-block-visual-1.png" alt="视觉稿欣赏" />;
}

export function CaseDetailContent() {
  return (
    <div className="case-detail-content flex flex-col overflow-hidden">
      <CoverSection />
      <BackgroundSection />
      <GoalsSection />
      <CompetitorSection />
      <ProblemOneSection />
      <ProblemTwoSection />
      <ProblemThreeSection />
      <ProblemFourSection />
      <ProblemFiveSection />
      <RedesignDirectionSection />
      <PathOptimizationSection />
      <InfoLayeringSection />
      <EmphasisSection />
      <PriorityInfoSection />
      <AreaUnificationSection />
      <FunctionZoneSection />
      <HudComparisonSection />
      <NavigationGuideSection />
      <GrowthInterfaceSection />
      <SpecSection />
      <OverlaySection />
      <VisualSection />
      <VisualSection compact />
      <ReflectionSection />
    </div>
  );
}
