import { publicUrl } from '../lib/publicUrl';
import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';

const paper = '#07111d';
const ink = '#e8ffff';
const muted = '#9db7c8';
const blue = '#4d6eeb';
const accent = '#ff2a6d';

const hudShots = [
  'pencil/xingji-aodaisai/panel-2.webp',
  'pencil/xingji-aodaisai/panel.webp',
  'pencil/xingji-aodaisai/panel-1.webp',
] as const;

const caseOneAssets = {
  cpaLastwarTop: 'https://www.figma.com/api/mcp/asset/081c1193-374b-4613-b318-81120294b4c0',
  cpaLastwarBottom: 'https://www.figma.com/api/mcp/asset/b876732b-86ba-43c2-9c25-48d1ae029935',
  cpaWinter: [
    'https://www.figma.com/api/mcp/asset/aabe154e-8049-4c5e-9e24-d048f601584c',
    'https://www.figma.com/api/mcp/asset/6517659e-5407-49ed-a0c9-09b8a9eee712',
  ],
  cpaAfk: [
    'https://www.figma.com/api/mcp/asset/cf7ca347-b748-4827-bf4c-1dc7486802e6',
    'https://www.figma.com/api/mcp/asset/f7a989e2-6591-4278-8926-e10da0f1e4f0',
    'https://www.figma.com/api/mcp/asset/ae03a78b-ecec-4eb5-b348-e92cdd526615',
    'https://www.figma.com/api/mcp/asset/9549383d-9047-45ed-addb-8f5012d8af81',
  ],
  cpaBrave: [
    'https://www.figma.com/api/mcp/asset/c4b0357b-cd51-4058-9349-35702890ddac',
    'https://www.figma.com/api/mcp/asset/3c92bd98-d5c4-40e4-a607-8d6a5073b05d',
  ],
  cpaHeroes: [
    'https://www.figma.com/api/mcp/asset/483feb5f-801d-4562-8cc0-b9f616a7a063',
    'https://www.figma.com/api/mcp/asset/2320e6b4-8cd6-4355-b0d8-e43dfb967846',
    'https://www.figma.com/api/mcp/asset/824dc964-f879-4afc-a91c-86b344faf481',
    'https://www.figma.com/api/mcp/asset/84ff2b14-f8cb-4ef9-b172-22eadd381c7e',
  ],
  cpaDao: 'https://www.figma.com/api/mcp/asset/a18f66a8-d582-4007-9205-bf1d33f44f83',
  cpaCapy: [
    'https://www.figma.com/api/mcp/asset/7193a2c5-993d-444a-a881-462fea4ff446',
    'https://www.figma.com/api/mcp/asset/40807870-a316-4afa-abe1-96e044dc7a54',
    'https://www.figma.com/api/mcp/asset/2b8ec0fe-1a06-4480-b304-49680575000b',
    'https://www.figma.com/api/mcp/asset/76cf0dc1-5362-4955-84ed-ba9bceca56da',
    'https://www.figma.com/api/mcp/asset/408b0851-f610-4048-b09d-14ab71d81941',
    'https://www.figma.com/api/mcp/asset/958fdb80-be62-48f1-9c46-2d3864b93fc6',
  ],
  definitionOneBefore: 'https://www.figma.com/api/mcp/asset/1b91d702-4c0e-412c-8fbb-50a02e96e4ae',
  definitionOneAfter: 'https://www.figma.com/api/mcp/asset/c8285212-bfc0-4ffd-95e6-a111f7b096f6',
  problemOneBase: 'https://www.figma.com/api/mcp/asset/7b850f5d-a0b6-4906-b794-46b7aff187da',
  problemOneMap: 'https://www.figma.com/api/mcp/asset/149c2393-c80d-41c7-9ff2-7bb8c565be84',
  problemOneMapMarker: 'https://www.figma.com/api/mcp/asset/c0f8c692-a394-4c01-8bd7-83f07651f551',
  problemTwoHud: 'https://www.figma.com/api/mcp/asset/a076d83b-c492-480e-90fe-a02addc4541a',
  problemTwoDiagonal: 'https://www.figma.com/api/mcp/asset/470991da-5237-4a79-a9ae-b59b890e7a72',
  problemThreeHud: 'https://www.figma.com/api/mcp/asset/17a23418-026a-49c2-b2f2-104aeed0a7c1',
  problemThreeDiagonal: 'https://www.figma.com/api/mcp/asset/36826f0e-cc0c-44ea-aa3c-3dfca05a4261',
  problemThreeMarker: 'https://www.figma.com/api/mcp/asset/a0c42290-a530-413d-91a0-19ed3726da9c',
  problemFourHud: 'https://www.figma.com/api/mcp/asset/c54b3b0e-ffc8-43a6-90b2-d5ab721d575d',
  problemFourDiagonal: 'https://www.figma.com/api/mcp/asset/ad1904e1-6ca6-4971-b708-3f8f6e14d75e',
  problemFiveDiagonal: 'https://www.figma.com/api/mcp/asset/140cd464-0e34-43e5-a4da-21d6b307de69',
  problemFiveImages: [
    'https://www.figma.com/api/mcp/asset/fa75bfe9-379e-418a-869b-5f5f3c38419c',
    'https://www.figma.com/api/mcp/asset/b48e5155-cdd6-4765-a3f1-9c3bb7d7cf04',
    'https://www.figma.com/api/mcp/asset/77ada754-3d30-487f-bf91-eac5e3dc49d8',
  ],
  problemFiveMarker: 'https://www.figma.com/api/mcp/asset/79398ec4-0655-4617-b10d-ea19a2704135',
  revisedWarmOrbTopLeft: 'https://www.figma.com/api/mcp/asset/fb22d611-30b1-4fb0-8121-82c9e444bff1',
  revisedThinCircleTopLeft: 'https://www.figma.com/api/mcp/asset/12ce38ed-e567-4e8c-bb93-3ce192f76096',
  revisedWarmOrbBottomRight: 'https://www.figma.com/api/mcp/asset/6643fece-543e-465c-b274-ddbef9f2edf9',
  revisedThinCircleBottomRight: 'https://www.figma.com/api/mcp/asset/68715a38-36f0-426a-86c9-5d64166f39b4',
  revisedCardDash: 'https://www.figma.com/api/mcp/asset/647b3b86-d371-4c43-b822-14ab28d92ad0',
  revisedIcons: [
    'https://www.figma.com/api/mcp/asset/c019240e-0ad7-46eb-b630-51b89ca895c4',
    'https://www.figma.com/api/mcp/asset/a2656f4d-878b-4dfa-a9ea-15619398f805',
    'https://www.figma.com/api/mcp/asset/815fcb65-fb1b-4e31-b959-4668aa294834',
    'https://www.figma.com/api/mcp/asset/6797c45a-d9be-470f-8392-cc7132c2dc3d',
  ],
  pathBlueStepCircle: 'https://www.figma.com/api/mcp/asset/14ef26ec-ebc8-4880-9820-6ad3033ea824',
  pathArrowA: 'https://www.figma.com/api/mcp/asset/2dbbb0b1-f92a-4136-9fca-389408c13648',
  pathArrowB: 'https://www.figma.com/api/mcp/asset/48da68dd-b5ed-44a9-8192-121a462f6d29',
  pathDivider: 'https://www.figma.com/api/mcp/asset/46b233df-ed71-4a55-8c9c-500368cbec01',
  pathBeforeCircle: 'https://www.figma.com/api/mcp/asset/c1be1f88-d634-4d86-a106-91f91703dd68',
  pathBeforeArrow: 'https://www.figma.com/api/mcp/asset/c2f08d2d-0b67-47a7-b988-6dcdd4c1d48b',
  layeringPaperLeft: 'https://www.figma.com/api/mcp/asset/4f7def61-5681-4d95-a3d4-1f8df13a4d04',
  layeringPaperRight: 'https://www.figma.com/api/mcp/asset/c653cef1-a829-4cc4-b8c8-ee4b827980c6',
  layeringSlices: [
    'https://www.figma.com/api/mcp/asset/84c02f5c-41ba-4924-a705-a15fac49cdd3',
    'https://www.figma.com/api/mcp/asset/ac6f9d93-b607-42e0-a3bb-c5c9238cc24c',
    'https://www.figma.com/api/mcp/asset/ed5b0257-9f89-4119-9547-e93e2d462634',
    'https://www.figma.com/api/mcp/asset/83069555-1d42-4ee4-a69e-3312cb7d3dc8',
  ],
  emphasisOverlay: 'https://www.figma.com/api/mcp/asset/f5747d94-967c-4cc4-b2fc-265383f20ed4',
  areaDiagonalWhite: 'https://www.figma.com/api/mcp/asset/c8362351-0242-4c73-a072-c10fd849c28f',
  areaDiagonalWhiteTop: 'https://www.figma.com/api/mcp/asset/f6cd3b06-0b13-40e1-a340-7f9aac2520b5',
  areaDiagonalWhiteBottom: 'https://www.figma.com/api/mcp/asset/4fc73b49-b312-4746-8077-3f9b6ae7f5a7',
  functionZoneSkews: [
    'https://www.figma.com/api/mcp/asset/caabed28-5614-4a9c-a9d2-f0945b481149',
    'https://www.figma.com/api/mcp/asset/b584ce93-d41c-46a7-8ef9-f98ecc7d3073',
    'https://www.figma.com/api/mcp/asset/075e29e0-56b0-401c-a37f-a0fb1c0057a8',
  ],
  functionZoneHudBg: 'https://www.figma.com/api/mcp/asset/8f07f80b-b44a-4248-9ad7-b6ed8644850d',
  functionZoneAnnotLong: 'https://www.figma.com/api/mcp/asset/2eb7b281-8bd5-4994-bff0-d59332ffcd58',
  functionZoneAnnotShort: 'https://www.figma.com/api/mcp/asset/8dcd7860-1ca4-493e-8192-033c275b588c',
  functionZoneArrow: 'https://www.figma.com/api/mcp/asset/f9356fab-1b2a-4668-8349-6b5948321b8e',
  functionZoneDot: 'https://www.figma.com/api/mcp/asset/9725422e-f3a9-4252-9c18-95a6f9a1cae4',
  functionZoneFull: 'https://www.figma.com/api/mcp/asset/f9f8a88c-c887-4d80-9a60-09853475c43c',
  hudCompareBefore: 'https://www.figma.com/api/mcp/asset/e5428cb7-cfe8-44b0-95a1-6aea0c771907',
  hudCompareAfter: 'https://www.figma.com/api/mcp/asset/f0f43f1b-b304-4be3-8507-362c67e977c6',
  hudCompareCurve: 'https://www.figma.com/api/mcp/asset/62f9367f-a6b8-4d04-8546-2e19324b2430',
  guideCircles: [
    'https://www.figma.com/api/mcp/asset/4db123f2-a0d4-4720-a004-cadd2286a45a',
    'https://www.figma.com/api/mcp/asset/7b2a3bf8-fe9b-484f-91c3-aebd0d84baa5',
    'https://www.figma.com/api/mcp/asset/07198644-3c3a-4ccc-a659-66b75925605f',
    'https://www.figma.com/api/mcp/asset/54e8dbcf-5ed6-4eac-b2c2-290813b44946',
  ],
  guideArrowTop: 'https://www.figma.com/api/mcp/asset/f85e98c6-0ef0-4beb-945d-1dd9eeed163e',
  guideArrowBottom: 'https://www.figma.com/api/mcp/asset/730341b6-f54c-406b-87a2-757e91a41124',
  guideHudScreens: [
    'https://www.figma.com/api/mcp/asset/d88cd9f2-668c-45ba-9a44-931f3b4ded7d',
    'https://www.figma.com/api/mcp/asset/d97a6438-a995-41f2-ae8e-ec13adb3ff52',
  ],
  growthShipPanel: 'https://www.figma.com/api/mcp/asset/b2e88727-f4db-4430-a71a-58959f778098',
  growthWeaponPanel: 'https://www.figma.com/api/mcp/asset/e5591d3f-28f6-4dca-b08b-8314235392b9',
  specControlsImage: 'https://www.figma.com/api/mcp/asset/119d7273-41c5-4523-abc8-75b7f54d366e',
  specLabelImage: 'https://www.figma.com/api/mcp/asset/e50696e5-93e5-4eda-9f99-23510da2be2a',
  overlayPlainPanel: 'https://www.figma.com/api/mcp/asset/4bd6eb2d-f6d2-4e96-86f9-baabad91e55e',
  overlayTabbedPanel: 'https://www.figma.com/api/mcp/asset/09c70bb8-4a43-4271-be4d-92f3aa670048',
  visualHudImages: [
    'https://www.figma.com/api/mcp/asset/bdfc999b-9db4-4bc4-80c2-2cdf0ee7a64b',
    'https://www.figma.com/api/mcp/asset/68cf60d9-dd85-4a92-a108-b5c770813e89',
    'https://www.figma.com/api/mcp/asset/34dea545-6029-4d4e-83b5-69ca0561aed5',
  ],
  visualSystemImages: [
    'https://www.figma.com/api/mcp/asset/f0ab083f-55cf-4cbb-bd72-3b2095d9be22',
    'https://www.figma.com/api/mcp/asset/96c15571-10a9-4e7d-904a-e588316a5804',
    'https://www.figma.com/api/mcp/asset/64c29954-9209-4d8a-9b9c-5c8ecb520bcf',
    'https://www.figma.com/api/mcp/asset/1061f2b2-a7a4-4688-95f5-e49dd7e085df',
  ],
  definitionFive: [
    'https://www.figma.com/api/mcp/asset/301de37a-093c-4bdb-903e-b9539476b834',
    'https://www.figma.com/api/mcp/asset/f92dee6a-3c59-415a-8dd1-3e08a7d19f8f',
    'https://www.figma.com/api/mcp/asset/8e9f52ab-4c4a-481e-a232-314a15090e34',
  ],
} as const;

function SectionFrame({ children, bg = paper, height = 900 }: { children: React.ReactNode; bg?: string; height?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-transparent">
      <ResponsiveScaleFrame minDesignWidth={1280} maxScale={1}>
        <section className="relative w-[1280px] overflow-hidden" style={{ backgroundColor: bg, height }}>
          {children}
        </section>
      </ResponsiveScaleFrame>
    </div>
  );
}

function FigmaBlock({ src, alt, height = 720 }: { src: string; alt: string; height?: number }) {
  return (
    <div className="overflow-hidden">
      <ResponsiveScaleFrame minDesignWidth={1024} maxScale={1}>
        <section className="relative w-[1024px] overflow-hidden" style={{ backgroundColor: '#edeffe', height }}>
        <img
          src={publicUrl(`pencil/xingji-aodaisai/${src}`)}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        </section>
      </ResponsiveScaleFrame>
    </div>
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

function HudBeforeSketch({ variant, width }: { variant: 'base' | 'task' | 'map'; width: number }) {
  const isMap = variant === 'map';
  const isTask = variant === 'task';
  const markers = [
    { left: 42, top: 82, color: '#ffcf5c' },
    { left: 104, top: 118, color: '#68d6ff' },
    { left: 74, top: 170, color: '#ff7f74' },
    { left: 128, top: 216, color: '#8cf38e' },
  ];

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
            {markers.map((marker) => (
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
              <div key={item} className={`h-[38px] rounded-[8px] p-[5px] text-[8px] font-bold text-white ${index === 0 ? 'bg-[#ffb950]' : 'bg-[#31527e]'}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="absolute right-[10px] top-[46px] flex w-[52px] flex-col gap-[8px]">
            {['活动', '礼包', '任务', '排行'].map((item, index) => (
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

function CoverSection() {
  return (
    <SectionFrame bg="#4d6eeb">
      {[
        { left: 130, top: 250, width: 260, size: 210, opacity: 0.34 },
        { left: 680, top: 252, width: 360, size: 250, opacity: 0.32 },
        { left: 1115, top: 250, width: 320, size: 210, opacity: 0.32 },
      ].map((item) => (
        <p
          key={`${item.left}-${item.top}`}
          className="absolute -translate-x-1/2 text-center font-bold leading-none text-[#4667dd]"
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
      <div className="absolute left-[218px] top-[300px] w-[120px] -translate-x-1/2 text-center text-[150px] font-bold leading-none text-[#fff7e6]">1</div>
      <h2 className="absolute left-[340px] top-[330px] text-[54px] font-bold leading-none text-white">HUD-改版设计</h2>
      <p className="absolute left-[340px] top-[420px] w-[770px] text-[24px] leading-[1.35] text-white">
        HUD，是游戏里的第一入口，把最重要的功能统一收纳起来，让玩家在战斗、基地、地图之间快速切换，同时通过红点提醒玩家去做任务、领奖励、升级、消费
      </p>
    </SectionFrame>
  );
}

function BackgroundSection() {
  const cards = [
    ['玩家', '入口太多，容易迷路，\n当前状态也不够清楚'],
    ['策划', '功能层级不清晰，\n会直接影响玩法引导'],
    ['美术', '视觉噪音偏多，\n整体画面不够高级'],
    ['实现', '模块耦合太重，\n会影响后续性能与维护'],
  ];

  return (
    <div className="overflow-hidden">
      <ResponsiveScaleFrame minDesignWidth={1024} maxScale={1}>
        <section className="relative h-[720px] w-[1024px] overflow-hidden bg-[#eef1ff]">
        <div className="absolute left-[804px] top-[-92px] h-[292px] w-[292px] rounded-full bg-[radial-gradient(circle,rgba(97,128,250,0.14)_0%,rgba(97,128,250,0.08)_42%,rgba(97,128,250,0)_74%)]" />
        <div className="absolute left-[-82px] top-[548px] h-[214px] w-[214px] rounded-full bg-[radial-gradient(circle,rgba(244,162,125,0.12)_0%,rgba(244,162,125,0.06)_48%,rgba(244,162,125,0)_74%)]" />
        <div className="absolute left-0 top-[430px] h-[290px] w-[1024px] bg-white/72" />

        <div className="absolute left-[58px] top-[44px] text-[32px] font-bold leading-none text-[#212126]">改版背景</div>
        <div className="absolute left-[58px] top-[90px] text-[13px] tracking-[9px] text-[#80808c]">THE BACKGROUND</div>
        <div className="absolute left-[58px] top-[118px] h-[3px] w-[60px] rounded-[2px] bg-[#6180fa]" />

        <h3 className="absolute left-[58px] top-[162px] w-[470px] text-[42px] font-bold leading-[50px] text-[#212126]">
          旧版 HUD 已经难以承接持续增加的玩法入口。
        </h3>
        <p className="absolute left-[58px] top-[276px] w-[448px] text-[19px] leading-[31px] text-[#666878]">
          入口、状态、提醒与场景操作混在一起，玩家需要反复扫视界面，首页主路径也逐渐失去清晰层级。
        </p>

        <div className="absolute left-[58px] top-[350px] h-[300px] w-[514px] rounded-[26px] border border-[#dbe0f2] bg-white/[0.92] px-[22px] pt-[24px] shadow-[0_22px_42px_-30px_rgba(38,46,73,0.22)]">
          {hudShots.map((shot, index) => (
            <PhoneShot
              key={shot}
              src={shot}
              className={`top-[24px] h-[193px] ${index === 0 ? 'left-[22px] w-[146px]' : index === 1 ? 'left-[184px] w-[144px]' : 'left-[344px] w-[146px]'} rounded-[10px] border border-[#d8def8]`}
            />
          ))}
          <div className="absolute left-[24px] top-[248px] h-px w-[466px] bg-[#dfe4f4]" />
          <div className="absolute left-[24px] top-[262px] text-[18px] font-bold text-[#2f3445]">改版前的 HUD</div>
          <p className="absolute left-[24px] top-[286px] w-[458px] text-[13px] leading-[20px] text-[#8a8f9f]">
            高频入口持续叠加后，红点、状态与功能层级开始互相干扰，玩家难以迅速判断下一步操作。
          </p>
        </div>

        <div className="absolute left-[620px] top-[208px] grid grid-cols-2 gap-[18px]">
          {cards.map(([title, copy], index) => (
            <div
              key={title}
              className="relative h-[164px] w-[166px] overflow-hidden rounded-[20px] border border-white/72 bg-white/92 px-[18px] py-[18px] shadow-[0_18px_32px_-28px_rgba(34,40,70,0.32)]"
            >
              <div
                className="absolute left-[18px] top-[18px] h-[9px] w-[9px] rounded-full"
                style={{ backgroundColor: index < 2 ? '#f4a27d' : '#6180fa' }}
              />
              <div className="absolute left-[36px] top-[13px] text-[20px] font-bold text-[#2c3140]">{title}</div>
              <div className="absolute left-[18px] top-[58px] w-[126px] whitespace-pre-line text-[16px] leading-[25px] text-[#7b8192]">
                {copy}
              </div>
              <div className="absolute right-[16px] top-[14px] text-[22px] font-semibold leading-none text-[#d7deff]">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-[620px] top-[580px] w-[330px]">
          <div className="text-[22px] font-bold leading-[30px] text-[#5d77ef]">为什么必须重做这张首页？</div>
          <p className="mt-[12px] text-[16px] leading-[28px] text-[#7e8597]">
            HUD 本应帮助玩家快速进入目标场景，但旧版已经从“功能入口”变成“信息堆叠”，必须重新梳理主路径、状态反馈和功能归类。
          </p>
        </div>
        </section>
      </ResponsiveScaleFrame>
    </div>
  );
}

function GoalsSection() {
  return <FigmaBlock src="figma-block-goals.webp" alt="玩家目标" />;
}

function CompetitorSection() {
  return <FigmaBlock src="figma-block-competitor.webp" alt="竞品分析" />;
}

function WireframeDiagram({ variant = 'base' }: { variant?: 'base' | 'map' }) {
  const labels = variant === 'base'
    ? [
        ['个人信息区域', 0, 0, 74, 25],
        ['货币栏', 79, 0, 118, 11],
        ['buff区域', 79, 14, 44, 11],
        ['商业运营/\n活动功能\n菜单栏', 137, 14, 60, 109],
        ['常规功能菜单栏', 0, 29, 74, 69],
        ['常规玩法\n入口区域', 0, 103, 74, 62],
        ['Toast区域', 78, 74, 55, 55],
        ['提示按钮区域', 137, 145, 60, 22],
        ['快捷聊天区域', 0, 169, 197, 25],
        ['养成功能显示区域', 0, 198, 197, 34],
        ['装置区域', 0, 236, 197, 32],
        ['快捷任务区域', 0, 271, 74, 38],
        ['坐标区域', 78, 279, 55, 31],
        ['挂机玩法\n操作区域', 137, 271, 60, 38],
        ['系统功能导航栏', 0, 312, 197, 38],
      ]
    : [
        ['个人信息区域', 0, 0, 74, 25],
        ['货币栏', 79, 0, 118, 11],
        ['buff区域', 79, 14, 44, 11],
        ['商业运营/\n活动功能\n菜单栏', 137, 14, 60, 109],
        ['行军信息区域', 0, 28, 74, 137],
        ['Toast区域', 78, 74, 55, 55],
        ['快捷操作按钮区域', 170, 152, 27, 104],
        ['常规功能\n菜单栏', 0, 168, 74, 114],
        ['坐标区域', 81, 268, 60, 14],
        ['快捷任务区域', 0, 284, 57, 25],
        ['快捷聊天区域', 64, 284, 133, 25],
        ['提示按钮区域', 148, 260, 49, 22],
        ['系统功能导航栏', 0, 312, 197, 38],
      ];
  return (
    <div className="relative h-[350px] w-[197px] bg-[#707070]">
      {labels.map(([text, x, y, w, h]) => (
        <div
          key={text as string}
          className="absolute flex items-center justify-center border border-dashed border-[#505070] bg-[#939393] px-[1px] text-center text-[8px] font-bold leading-[10px] text-white"
          style={{ left: x as number, top: y as number, width: w as number, height: h as number }}
        >
          <span className="whitespace-pre-wrap">{text as string}</span>
        </div>
      ))}
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

function ProblemHeaderSide({
  no,
  quote,
  copy,
  copyClassName = 'absolute left-[88px] top-[420px] w-[560px] whitespace-pre-line text-[22px] leading-[normal] text-[#858f99]',
}: {
  no: string;
  quote: string;
  copy: string;
  copyClassName?: string;
}) {
  return (
    <>
      <div className="absolute left-[88px] top-[50px] w-[220px] text-[31px] font-bold leading-[36px] tracking-[1.5px] text-[#383b42]">明确问题</div>
      <div className="absolute left-[90px] top-[91px] w-[300px] text-[19px] leading-[24px] tracking-[7px] text-[#6d727b]/75">D E F I N I T I O N</div>
      <div className="absolute left-[88px] top-[285px] w-[240px] text-[42px] font-bold leading-[50px] tracking-[1px] text-[#b9c9f9]">问题{no}</div>
      <div className="absolute left-[88px] top-[344px] whitespace-nowrap text-[31px] font-bold leading-[42px] tracking-[1px] text-[#5f86e9]">{quote}</div>
      <p className={copyClassName}>{copy}</p>
    </>
  );
}

function ProblemOneSection() {
  return (
    <SectionFrame bg="#edeffe">
      <div className="absolute left-0 top-0 h-[480px] w-[1280px] bg-white [clip-path:polygon(0_0,100%_0,100%_72%,0_28%)]" />
      <ProblemHeaderWide
        no="一"
        quote="“ 功能入口分布零散，缺少清晰的系统归类 ”"
        copy={
          '1.核心功能入口分散在顶部、左右两侧和底部区域，缺少统一的功能分区。\n2.玩家想进入某个系统时，需要反复扫视整个屏幕，增加了寻找成本，也削弱了 HUD 的操作效率。'
        }
      />

      <div className="absolute left-[97px] top-[482px] flex items-center gap-[20px]">
        <img src={caseOneAssets.problemOneBase} alt="" className="h-[350px] w-[197px] object-cover" />
        <div className="h-0 w-0 border-b-[19px] border-l-[30px] border-t-[19px] border-b-transparent border-l-[#4d6eeb] border-t-transparent" />
        <WireframeDiagram variant="base" />
      </div>

      <div className="absolute left-[723px] top-[482px] flex items-center gap-[20px]">
        <div className="relative h-[350px] w-[196px]">
          <img src={caseOneAssets.problemOneMap} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute left-[8.56px] top-[53.67px] h-[11.67px] w-[11.67px] bg-[#0f3644]" />
          <img src={caseOneAssets.problemOneMapMarker} alt="" className="absolute left-[7px] top-[52.11px] h-[15.56px] w-[15.56px]" />
          <div className="absolute left-[7px] top-[90.22px] h-[14px] w-[14.78px] rounded-[2px] bg-[#0f3644]" />
          <img src={caseOneAssets.problemOneMapMarker} alt="" className="absolute left-[7px] top-[89.44px] h-[15.56px] w-[15.56px]" />
        </div>
        <div className="h-0 w-0 border-b-[19px] border-l-[30px] border-t-[19px] border-b-transparent border-l-[#4d6eeb] border-t-transparent" />
        <WireframeDiagram variant="map" />
      </div>
    </SectionFrame>
  );
}

function ProblemTwoSection() {
  return (
    <SectionFrame bg="#edeffe">
      <div className="absolute left-0 top-0 flex h-[480px] w-[1280px] items-center justify-center">
        <div className="h-[480px] w-[1280px] rotate-180">
          <img src={caseOneAssets.problemTwoDiagonal} alt="" className="h-full w-full" />
        </div>
      </div>
      <ProblemHeaderSide
        no="二"
        quote="“信息堆叠过多，核心目标被稀释 ”"
        copy={
          '1.当前界面同时承载资源、角色、任务、活动、邮件、礼包、聊天、导航、战斗操作等大量信息。\n2.各模块都在争夺注意力，导致玩家进入界面后，很难第一时间判断当前最重要的信息和下一步操作。'
        }
      />
      <img
        src={caseOneAssets.problemTwoHud}
        alt=""
        className="absolute left-[814px] top-[142px] h-[600px] w-[337px] object-cover"
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function ProblemThreeSection() {
  return (
    <SectionFrame bg="#edeffe">
      <div className="absolute left-0 top-0 flex h-[480px] w-[1280px] items-center justify-center">
        <div className="h-[480px] w-[1280px] -scale-y-100">
          <img src={caseOneAssets.problemThreeDiagonal} alt="" className="h-full w-full" />
        </div>
      </div>
      <ProblemHeaderSide
        no="三"
        quote="“ 全局入口与场景操作混杂，行为路径不清晰”"
        copy={
          '1.HUD 中同时存在跨系统入口和当前场景操作，例如基地、地图、战斗、邮件、活动、自动战斗、出售装备等功能混在一起。\n2.玩家不容易区分哪些是“切换系统”，哪些是“当前场景可执行操作”，导致操作路径不够直观。'
        }
        copyClassName="absolute left-[88px] top-[420px] w-[560px] whitespace-pre-line text-[23px] leading-[35px] tracking-[1px] text-[#7e838b]"
      />
      <div className="absolute left-[815px] top-[146px] h-[600px] w-[336px]">
        <img
          src={caseOneAssets.problemThreeHud}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute left-[14px] top-[92px] h-[20px] w-[20px] bg-[#0f3644]" />
        <img src={caseOneAssets.problemThreeMarker} alt="" className="absolute left-[11px] top-[89px] h-[27px] w-[27px]" />
        <div className="absolute left-[15px] top-[155px] h-[24px] w-[24px] rounded-[2px] bg-[#0f3644]" />
        <img src={caseOneAssets.problemThreeMarker} alt="" className="absolute left-[11px] top-[167px] h-[27px] w-[27px]" />
      </div>
    </SectionFrame>
  );
}

function ProblemFourSection() {
  return (
    <SectionFrame bg="#edeffe">
      <div className="absolute left-0 top-0 flex h-[480px] w-[1280px] items-center justify-center">
        <div className="h-[480px] w-[1280px] rotate-180">
          <img src={caseOneAssets.problemFourDiagonal} alt="" className="h-full w-full" />
        </div>
      </div>
      <ProblemHeaderSide
        no="四"
        quote="“ 提醒体系缺少优先级，重要信息被稀释 ”"
        copy={
          '1.当前界面中大量入口使用红点、气泡、动效和高亮提示，提醒密度过高。\n2.普通提醒和重要提醒缺少优先级区分，容易造成视觉噪音，也会让玩家逐渐对红点提醒产生麻木感。'
        }
        copyClassName="absolute left-[88px] top-[420px] w-[560px] whitespace-pre-line text-[23px] leading-[35px] tracking-[1px] text-[#7e838b]"
      />
      <img
        src={caseOneAssets.problemFourHud}
        alt=""
        className="absolute left-[816px] top-[150px] h-[600px] w-[335px] object-cover"
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function SingleImageProblemSection({
  no,
  quote,
  copy,
  image,
  imageBox,
  diagonal = 'up',
  objectPosition = 'center',
}: {
  no: string;
  quote: string;
  copy: string;
  image: string;
  imageBox: { left: number; top: number; width: number; height: number };
  diagonal?: 'down' | 'up';
  objectPosition?: string;
}) {
  return (
    <SectionFrame bg="#edeffe">
      <ProblemBackdrop variant={diagonal} />
      <div className="absolute left-[54px] top-[168px] h-[608px] w-[642px] rounded-[26px] bg-white shadow-[0_16px_36px_rgba(45,73,151,0.08)]" />
      <div className="absolute left-[728px] top-[144px] h-[650px] w-[430px] rounded-[26px] bg-[#eef3ff] shadow-[inset_0_0_0_1px_rgba(134,155,230,0.16)]" />
      <ProblemHeaderSide no={no} quote={quote} copy={copy} />
      <img
        src={publicUrl(image)}
        alt=""
        className="absolute rounded-[18px] object-cover shadow-[0_8px_22px_rgba(0,0,0,0.18)]"
        style={{ left: imageBox.left, top: imageBox.top, width: imageBox.width, height: imageBox.height, objectPosition }}
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function ProblemFiveSection() {
  return (
    <SectionFrame bg="#edeffe">
      <div className="absolute left-0 top-0 flex h-[480px] w-[1280px] items-center justify-center">
        <div className="h-[480px] w-[1280px] rotate-180">
          <img src={caseOneAssets.problemFiveDiagonal} alt="" className="h-full w-full" />
        </div>
      </div>
      <ProblemHeaderWide
        no="五"
        quote="“ 视觉包装不统一，整体 HUD 品质感不足 ”"
        copy={
          '1.不同模块的按钮样式、图标风格、底板材质和信息呈现方式不够统一。\n2.部分区域更偏功能堆叠，缺少统一的题材包装和视觉秩序，导致整体界面显得杂乱，难以形成稳定的游戏气质。'
        }
      />
      <div className="absolute left-[206px] top-[482px] flex items-center gap-[140px]">
        {caseOneAssets.problemFiveImages.map((src, index) => (
          <div key={src} className="relative h-[350px]" style={{ width: index === 0 ? 195 : index === 1 ? 197 : 196 }}>
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            {index === 2 ? (
              <>
                <div className="absolute left-[8.56px] top-[53.67px] h-[11.667px] w-[11.667px] bg-[#0f3644]" />
                <img src={caseOneAssets.problemFiveMarker} alt="" className="absolute left-[7px] top-[52.11px] h-[15.556px] w-[15.556px]" />
                <div className="absolute left-[7px] top-[90.22px] h-[14px] w-[14.778px] rounded-[2px] bg-[#0f3644]" />
                <img src={caseOneAssets.problemFiveMarker} alt="" className="absolute left-[7px] top-[89.44px] h-[15.556px] w-[15.556px]" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

// ─── New sections ────────────────────────────────────────────────────────────

function RedesignDirectionSection() {
  const cards = [
    { title: '信息减负', copy: ['减少界面干扰', '突出核心目标'], left: 49, center: 190 },
    { title: '易用性', copy: ['重组功能分区', '降低寻找成本'], left: 348, center: 489 },
    { title: '引导化', copy: ['围绕 SLG 循环', '引导下一步操作'], left: 647, center: 788 },
    { title: '规范化', copy: ['视觉统一', '提升品质'], left: 946, center: 1087 },
  ] as const;

  return (
    <SectionFrame bg="#4f72e7">
      <img src={caseOneAssets.revisedWarmOrbTopLeft} alt="" className="absolute left-0 top-[27px] size-[145px]" loading="lazy" decoding="async" />
      <img src={caseOneAssets.revisedThinCircleTopLeft} alt="" className="absolute left-[31px] top-[31px] size-[110px]" loading="lazy" decoding="async" />
      <img src={caseOneAssets.revisedWarmOrbBottomRight} alt="" className="absolute left-[927px] top-[681px] h-[300px] w-[330px]" loading="lazy" decoding="async" />
      <img src={caseOneAssets.revisedThinCircleBottomRight} alt="" className="absolute left-[910px] top-[628px] size-[410px]" loading="lazy" decoding="async" />

      <p className="absolute left-[88px] top-[89px] w-[240px] text-[32px] font-bold leading-[38px] tracking-[1.5px] text-white">改版方向</p>
      <p className="absolute left-[89px] top-[132px] w-[440px] whitespace-pre-wrap text-[21px] font-normal leading-[26px] tracking-[8px] text-[#dbe4ff]/90">{`R E V I S E D   T A R G E T`}</p>

      {cards.map(({ title, copy, left, center }, index) => (
        <div key={title}>
          <div className="absolute top-[257px] h-[431px] w-[282px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]" style={{ left }} />
          <img src={caseOneAssets.revisedCardDash} alt="" className="absolute top-[413px] h-[4px] w-[242px]" style={{ left: left + 20 }} loading="lazy" decoding="async" />
          <img src={caseOneAssets.revisedIcons[index]} alt="" className="absolute top-[278px] size-[126px]" style={{ left: left + 78 }} loading="lazy" decoding="async" />
          <p
            className="absolute top-[450px] w-[222px] -translate-x-1/2 text-center text-[52px] font-bold leading-[65px] tracking-[1px] text-[#f19a91]"
            style={{ left: center }}
          >
            {title}
          </p>
          <div
            className="absolute top-[569px] w-[198px] -translate-x-1/2 text-center text-[30px] font-bold leading-[38px] tracking-[1px] text-[#8f9399]"
            style={{ left: center }}
          >
            <p>{copy[0]}</p>
            <p>{copy[1]}</p>
          </div>
        </div>
      ))}
    </SectionFrame>
  );
}

function PathOptimizationSection() {
  const steps = [
    { step: 'Step.1', title: '目标识别', left: 160, center: 282 },
    { step: 'Step.2', title: '入口定位', left: 502, center: 624 },
    { step: 'Step.3', title: '操作执行', left: 842, center: 964 },
  ] as const;

  return (
    <SectionFrame bg="#d9e0fb">
      <p className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">信息减负</p>
      <p className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">HUD 操作路径优化</p>

      <div className="absolute left-[88px] top-[171px] w-[1060px] whitespace-pre-wrap text-[25px] leading-[36px] text-[#858991]">
        <p>1. 重新梳理 HUD 中的资源、任务、活动、导航与场景操作入口，减少玩家全屏寻找成本。 </p>
        <p>2. 通过固定功能分区与核心入口收束，让玩家形成稳定操作习惯，提升战斗、基地、大地图之间的切换效率。</p>
      </div>

      <div className="absolute left-[284px] top-[314px] h-[244px] w-[342px] bg-gradient-to-r from-[rgba(89,121,247,0.5)] to-[rgba(89,121,247,0)]" />
      <div className="absolute left-[627px] top-[314px] h-[244px] w-[342px] bg-gradient-to-r from-[rgba(89,121,247,0.5)] to-[rgba(89,121,247,0)]" />
      {steps.map((step) => (
        <div key={step.step}>
          <img src={caseOneAssets.pathBlueStepCircle} alt="" className="absolute top-[314px] h-[244px] w-[244px]" style={{ left: step.left }} />
          <p
            className="absolute top-[378px] w-[114px] -translate-x-1/2 text-center text-[24px] font-bold leading-[28px] tracking-[3px] text-white"
            style={{ left: step.center }}
          >
            {step.step}
          </p>
          <p
            className="absolute top-[437px] -translate-x-1/2 whitespace-nowrap text-center text-[43px] font-bold leading-[52px] tracking-[2px] text-white"
            style={{ left: step.center }}
          >
            {step.title}
          </p>
        </div>
      ))}
      <img src={caseOneAssets.pathArrowA} alt="" className="absolute left-[408px] top-[366px] h-[30px] w-[93px]" />
      <img src={caseOneAssets.pathArrowB} alt="" className="absolute left-[750px] top-[366px] h-[30px] w-[92px]" />

      <img src={caseOneAssets.pathDivider} alt="" className="absolute left-[55px] top-[615px] h-[4px] w-[1160px]" />
      <p className="absolute left-[626px] top-[569px] w-[120px] -translate-x-1/2 text-center text-[25px] font-bold leading-[30px] tracking-[2px] text-[#5576e7]">优化后</p>

      <div className="absolute left-[380px] top-[653px] h-[200px] w-[200px]">
        <img src={caseOneAssets.pathBeforeCircle} alt="" className="absolute inset-0 h-full w-full" />
        <p className="absolute left-1/2 top-[84px] w-[115px] -translate-x-1/2 text-center text-[28px] font-bold leading-[33px] tracking-[1px] text-[#8e9296]">入口分散</p>
      </div>
      <div className="absolute left-[670px] top-[653px] h-[200px] w-[200px]">
        <img src={caseOneAssets.pathBeforeCircle} alt="" className="absolute inset-0 h-full w-full" />
        <p className="absolute left-1/2 top-[84px] -translate-x-1/2 whitespace-nowrap text-center text-[27px] font-bold leading-[33px] tracking-[1px] text-[#8e9296]">全屏寻找</p>
      </div>
      <img src={caseOneAssets.pathBeforeArrow} alt="" className="absolute left-[580px] top-[805px] h-[24px] w-[90px]" />
      <p className="absolute left-[626px] top-[853px] w-[120px] -translate-x-1/2 text-center text-[25px] font-bold leading-[30px] tracking-[2px] text-[#858991]">优化前</p>
    </SectionFrame>
  );
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
  const layers = [
    { label: '按钮入口', left: 849, top: 253, width: 374.014, height: 95.014, textLeft: 945, textTop: 272, textWidth: 191 },
    { label: '功能区域', left: 725, top: 326, width: 498.685, height: 126.685, textLeft: 897, textTop: 360, textWidth: 191 },
    { label: '通用信息区域', left: 600, top: 431, width: 623.356, height: 158.357, textLeft: 765, textTop: 482, textWidth: 284 },
    { label: '通用系统区域', left: 507, top: 567, width: 748.028, height: 190.028, textLeft: 739, textTop: 632, textWidth: 284 },
  ];
  return (
    <SectionFrame bg="#fbfcff">
      <img src={caseOneAssets.layeringPaperLeft} alt="" className="absolute left-0 top-0 h-[900px] w-[737.5px]" />
      <img src={caseOneAssets.layeringPaperRight} alt="" className="absolute left-[426px] top-0 h-[900px] w-[854px]" />
      <InfoPanelText subtitle="HUD 信息层级重构" title="“信息分层”" copy="按照使用频率和功能属性重新归类层级，高频核心功能保留在固定位置，低频功能统一收纳，降低玩家全屏寻找功能的成本。" />
      <p className="absolute left-[849px] top-[83px] w-[245px] -translate-x-1/2 text-center text-[24px] leading-[36px] text-[#8c9097]">界面层级拆分</p>
      {layers.map((layer, index) => (
        <div key={layer.label}>
          <img
            src={caseOneAssets.layeringSlices[index]}
            alt=""
            className="absolute"
            style={{ left: layer.left, top: layer.top, width: layer.width, height: layer.height }}
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute flex h-[58.68px] items-center justify-center text-center text-[32px] font-medium tracking-[-0.608px] text-white"
            style={{ left: layer.textLeft, top: layer.textTop, width: layer.textWidth }}
          >
            {layer.label}
          </div>
        </div>
      ))}
    </SectionFrame>
  );
}

function EmphasisSection() {
  return (
    <SectionFrame bg="#fbfcff">
      <div className="absolute left-0 top-0 h-full w-[426px] bg-[#f3f5f8]" />
      <InfoPanelText subtitle="HUD 信息层级重构" title="“重点突出”" copy="梳理 HUD 信息优先级，将资源、状态、任务、活动、操作等内容分为核心常驻、场景相关、阶段提醒和可收纳信息，减少同屏信息堆叠，突出当前重点。" />
      <p className="absolute left-[849px] top-[91px] w-[245px] -translate-x-1/2 text-center text-[24px] leading-[36px] text-[#8c9097]">界面重点拆分</p>

      <div className="absolute left-[482px] top-[258px] h-[400px] w-[225px] overflow-hidden bg-[#707070]">
        <div className="absolute inset-x-0 top-0 h-[28px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute left-[35px] top-[10px] text-center text-[16px] font-extrabold text-white">顶部信息区域</p>
        <p className="absolute inset-x-0 top-[169px] text-center text-[16px] font-extrabold text-white">中部内容区域</p>
        <div className="absolute inset-x-0 bottom-0 h-[79.3px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute inset-x-0 bottom-[26px] text-center text-[16px] font-extrabold text-white">底部导航区域</p>
      </div>

      <div className="absolute left-[621px] top-[252px] h-[385px] w-[296.725px]">
        <div className="absolute inset-x-0 top-0 h-[213px] border border-dashed border-[#505070] bg-[#afafaf]/80" />
        <p className="absolute inset-x-0 top-[76px] text-center text-[16px] font-extrabold text-white">重点展示区域</p>
        <div className="absolute inset-x-0 bottom-0 h-[172px] border border-dashed border-[#505070] bg-[#afafaf]/80" />
        <p className="absolute inset-x-0 bottom-[62px] text-center text-[16px] font-extrabold text-white">重点操作区域</p>
      </div>

      <div className="absolute left-[816px] top-[198px] h-[519px] w-[400px] bg-[#888]">
        <div className="absolute left-0 top-[28px] h-[154px] w-[150px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute left-[19px] top-[94px] text-center text-[16px] font-extrabold text-white">行军信息区域</p>
        <p className="absolute left-[153px] top-[94px] text-center text-[16px] font-extrabold text-white">挂机场景</p>
        <div className="absolute right-0 top-0 h-[213px] w-[122px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute right-[24px] top-[78px] text-center text-[16px] font-extrabold leading-normal text-white">商业运营<br />活动功能<br />菜单栏</p>
        <div className="absolute left-0 top-[189px] h-[102px] w-[150px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute left-[16px] top-[218px] text-center text-[16px] font-extrabold leading-normal text-white">常规玩法<br />入口区域</p>
        <div className="absolute right-0 top-[219px] h-[72px] w-[242px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute right-[38px] top-[244px] text-center text-[16px] font-extrabold text-white">常规系统入口区域</p>
        <div className="absolute inset-x-0 top-[296px] h-[164px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute inset-x-0 top-[371px] text-center text-[16px] font-extrabold text-white">养成功能显示区域</p>
        <div className="absolute left-0 bottom-0 h-[53px] w-[117px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute left-[2px] bottom-[18px] text-center text-[16px] font-extrabold leading-[10px] text-white">快捷任务区域</p>
        <div className="absolute right-0 bottom-0 h-[53px] w-[278px] border border-dashed border-[#505070] bg-[#939393]/70" />
        <p className="absolute right-[44px] bottom-[17px] text-center text-[16px] font-extrabold text-white">挂机玩法操作区域</p>
      </div>

      <img src={caseOneAssets.emphasisOverlay} alt="" className="absolute left-[482px] top-[198px] h-[519px] w-[334px]" />
    </SectionFrame>
  );
}

function PriorityHudMap() {
  const box = 'absolute border border-dashed border-[#505070] bg-[#939393]/70';
  const label = 'absolute text-center text-[16px] font-extrabold leading-normal text-white';
  return (
    <div className="absolute left-[129px] top-[188px] h-[600px] w-[338px] overflow-hidden bg-[#707070]">
      <div className="absolute left-0 top-[285px] h-[196px] w-[338px] bg-[#6f6f6f]" />
      <div className="absolute left-0 top-[481px] h-[119px] w-[338px] bg-[#d9d9d9]" />

      <div className={`${box} left-[134.7px] top-0 h-[18.7px] w-[203.3px]`} />
      <p className={`${label} left-[212px] top-[2px] whitespace-nowrap`}>货币栏</p>

      <div className={`${box} left-0 top-0 h-[42.2px] w-[126.8px]`} />
      <p className={`${label} left-[15px] top-[11px] whitespace-nowrap`}>个人信息区域</p>

      <div className={`${box} left-[234.7px] top-[24.4px] h-[187.5px] w-[103.3px]`} />
      <p className={`${label} left-[252px] top-[93px] leading-normal`}>商业运营<br />活动功能<br />菜单栏</p>

      <div className={`${box} left-0 top-[534.4px] h-[65.6px] w-[338px]`} />
      <p className={`${label} left-[104px] top-[565px] w-[130px]`}>系统功能导航栏</p>

      <div className={`${box} left-0 top-[285px] h-[144px] w-[338px]`} />
      <p className={`${label} left-[84px] top-[335px] w-[170px]`}>养成功能显示区域</p>

      <div className={`${box} left-[103px] top-[434.4px] h-[47.2px] w-[235px]`} />
      <p className={`${label} left-[138px] top-[452px] w-[162px]`}>挂机玩法操作区域</p>

      <div className={`${box} left-0 top-[434.4px] h-[46.9px] w-[98.6px]`} />
      <p className={`${label} left-[2px] top-[453px] w-[96px] leading-[10px] whitespace-nowrap`}>快捷任务区域</p>

      <div className={`${box} left-[133.8px] top-[217.7px] h-[63.4px] w-[204.2px]`} />
      <p className={`${label} left-[177px] top-[241px] w-[128px] leading-[16px] whitespace-nowrap`}>常规系统入口区域</p>

      <div className={`${box} left-0 top-[191px] h-[90px] w-[126.8px]`} />
      <p className={`${label} left-[14px] top-[217px] leading-normal`}>常规玩法<br />入口区域</p>

      <div className={`${box} left-0 top-[49px] h-[136px] w-[126.9px]`} />
      <p className={`${label} left-[16px] top-[107px] whitespace-nowrap`}>行军信息区域</p>

      <div className={`${box} left-0 top-[486.8px] h-[42.2px] w-[338px]`} />
      <p className={`${label} left-[104px] top-[501px] w-[130px]`}>快捷聊天区域</p>

      <p className={`${label} left-[121px] top-[107px] w-[114px]`}>挂机场景</p>
    </div>
  );
}

function PriorityInfoSection() {
  return (
    <SectionFrame bg="#f3f5f8">
      <div className="absolute left-0 top-0 h-full w-[405px] bg-white" />
      <div className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">信息减负</div>
      <div className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">HUD 信息层级重构</div>

      <PriorityHudMap />
      <p className="absolute left-[303.5px] top-[811px] w-[245px] -translate-x-1/2 text-center text-[24px] leading-[36px] text-[#8c9097]">挂机界面</p>

      <h3 className="absolute left-[850.5px] top-[356px] -translate-x-1/2 whitespace-nowrap text-center text-[48px] font-bold leading-[64px] tracking-[2px] text-[#5d7fec]">
        “让玩家先看到最重要的信息”
      </h3>
      <p className="absolute left-[832px] top-[460px] w-[560px] -translate-x-1/2 text-center text-[26px] leading-[38px] tracking-[1px] text-[#8b9097]">
        建立明确的信息优先级，让界面“先看什么”更清晰。通过信息层级权重控制，让核心内容自然成为第一视觉焦点。
      </p>
    </SectionFrame>
  );
}

function AreaUnifiedHudMap({ variant }: { variant: 'field' | 'cabin' }) {
  const isCabin = variant === 'cabin';
  const zones = [
    { text: '个人信息区域', left: 0, top: 0, width: 37.5, height: 7.03 },
    { text: isCabin ? '船舱资源栏' : '货币栏', left: 39.86, top: 0, width: 60.14, height: 3.12 },
    { text: '行军信息\n区域', left: 0, top: 7.97, width: 37.5, height: 39.06 },
    { text: '商业运营\n活动功能\n菜单栏', left: 69.44, top: 4.06, width: 30.56, height: 31.25 },
    { text: '常规玩法\n入口区域', left: 0, top: 47.97, width: 37.5, height: 23.75 },
    { text: '快捷任务区域', left: 0, top: 72.33, width: 29.17, height: 7.82 },
    { text: '快捷聊天区域', left: 0, top: 81.17, width: 100, height: 7.03 },
    { text: '系统功能导\n航栏', left: 0, top: 89.06, width: 100, height: 10.94 },
    ...(isCabin
      ? [
          { text: '野外快捷操作区域', left: 75.63, top: 43.43, width: 12.2, height: 36.57 },
          { text: '常规系统入口区域', left: 87.83, top: 43.43, width: 12.17, height: 36.57 },
        ]
      : [
          { text: '坐标区域', left: 30.56, top: 76.17, width: 39.95, height: 3.9 },
          { text: '野外快捷操作区域', left: 72.7, top: 43.5, width: 12.76, height: 36.5 },
          { text: '常规系统入口区域', left: 87.24, top: 43.5, width: 12.76, height: 36.5 },
        ]),
  ];

  return (
    <div className="relative h-[600px] w-[337px] overflow-hidden bg-[#707070]">
      <div className="absolute left-0 top-[487px] h-[113px] w-[338px] bg-[#d9d9d9]" />
      {zones.map((zone) => (
        <div
          key={`${variant}-${zone.text}-${zone.left}-${zone.top}`}
          className="absolute flex items-center justify-center whitespace-pre-line border border-dashed border-[#505070] bg-[#939393]/70 px-1 text-center text-[16px] font-extrabold leading-[16px] text-white"
          style={{ left: `${zone.left}%`, top: `${zone.top}%`, width: `${zone.width}%`, height: `${zone.height}%` }}
        >
          {zone.text}
        </div>
      ))}
      <p className="absolute left-[121px] top-[227px] w-[114px] text-center text-[16px] font-extrabold leading-normal text-white">
        {isCabin ? '船舱场景' : '野外场景'}
      </p>
    </div>
  );
}

function AreaUnificationSection() {
  return (
    <SectionFrame bg="#e8eaf9">
      <div className="absolute left-[330.11px] top-[-29.92px] flex h-[1035.183px] w-[605.336px] items-center justify-center">
        <img
          src={caseOneAssets.areaDiagonalWhite}
          alt=""
          className="h-[970.62px] w-[412.548px] max-w-none"
          style={{ transform: 'rotate(-12deg)' }}
        />
      </div>
      <div className="absolute left-[967px] top-[-236px] flex h-[669.311px] w-[687.641px] items-center justify-center">
        <img
          src={caseOneAssets.areaDiagonalWhiteTop}
          alt=""
          className="h-[437.689px] w-[531.177px] max-w-none"
          style={{ transform: 'rotate(-37.03deg)' }}
        />
      </div>
      <div className="absolute left-[-338px] top-[373px] flex h-[1054.642px] w-[755.674px] items-center justify-center">
        <img
          src={caseOneAssets.areaDiagonalWhiteBottom}
          alt=""
          className="h-[970.62px] w-[412.548px] max-w-none"
          style={{ transform: 'rotate(-22.74deg) scaleY(-1)' }}
        />
      </div>

      <div className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">信息减负</div>
      <div className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">其余界面信息区分</div>
      <div className="absolute left-[88px] top-[220px] w-[260px] text-[34px] font-bold leading-[41px] tracking-[1px] text-[#5e7fed]">“ 区域统一 ”</div>
      <p className="absolute left-[88px] top-[279px] w-[325px] text-[24px] leading-[36px] text-[#8c9097]">
        统一不同界面的信息区域规则，<br />
        减少玩家重新学习。
      </p>

      <div className="absolute left-[490px] top-[191px]">
        <AreaUnifiedHudMap variant="field" />
      </div>
      <p className="absolute left-[549px] top-[809px] w-[245px] text-center text-[24px] leading-[36px] text-[#8c9097]">野外界面</p>

      <div className="absolute left-[894px] top-[191px]">
        <AreaUnifiedHudMap variant="cabin" />
      </div>
      <p className="absolute left-[940px] top-[809px] w-[245px] text-center text-[24px] leading-[36px] text-[#8c9097]">船舱界面</p>
    </SectionFrame>
  );
}

function FunctionZoneHudMap() {
  const zone = 'absolute flex items-center justify-center whitespace-pre-line border border-dashed border-[#505070] px-1 text-center text-[10px] font-extrabold leading-[normal] text-white';
  const blueZone = `${zone} bg-[rgba(84,118,238,0.3)]`;
  const darkZone = `${zone} bg-black/30`;
  return (
    <div className="absolute left-[277px] top-[412px] h-[450px] w-[253px] bg-[#707070]">
      <div className="absolute left-1/2 top-0 aspect-[253/214] w-[253px] -translate-x-1/2 overflow-hidden opacity-40 mix-blend-luminosity">
        <img src={caseOneAssets.functionZoneHudBg} alt="" className="absolute left-[-2.64%] top-[-174.97%] h-[368.1%] w-[208.13%] max-w-none" />
      </div>

      <div className={`${darkZone} left-[39.86%] top-0 h-[3.12%] w-[60.14%]`}>货币栏</div>
      <div className={`${darkZone} left-0 top-0 h-[7.03%] w-[37.5%]`}>个人信息区域</div>
      <div className={`${blueZone} left-[69.44%] top-[4.06%] h-[31.25%] w-[30.56%]`}>商业运营<br />活动功能<br />菜单栏</div>
      <div className={`${blueZone} left-0 top-[89.06%] h-[10.94%] w-full`}>系统功能导航栏</div>
      <div className={`${blueZone} left-0 top-[47.5%] h-[24%] w-full`}>养成功能显示区域</div>
      <div className={`${blueZone} left-[30.46%] top-[72.4%] h-[7.87%] w-[69.54%]`}>挂机玩法操作区域</div>
      <div className={`${blueZone} left-0 top-[72.4%] h-[7.82%] w-[29.17%] leading-[10px]`}>快捷任务区域</div>
      <div className={`${blueZone} left-[39.59%] top-[36.29%] h-[10.57%] w-[60.41%]`}>常规系统入口区域</div>
      <div className={`${blueZone} left-0 top-[31.83%] h-[15%] w-[37.5%]`}>常规玩法<br />入口区域</div>
      <div className={`${blueZone} left-0 top-[8.17%] h-[22.66%] w-[37.57%]`}>行军信息区域</div>
      <div className={`${blueZone} left-0 top-[81.14%] h-[7.03%] w-full`}>快捷聊天区域</div>
      <div className="absolute left-[96px] top-[188px] w-[80px] text-center text-[10px] font-extrabold leading-[normal] text-white">船舱场景</div>
    </div>
  );
}

function FunctionZoneLayerDiagram() {
  const labels = [
    { text: '场景', left: 604, top: 80, lineLeft: 621, lineTop: 94, lineWidth: 95 },
    { text: '信息展示', left: 454, top: 213, lineLeft: 466, lineTop: 228, lineWidth: 250, long: true },
    { text: 'UI交互层', left: 604, top: 294, lineLeft: 621, lineTop: 309, lineWidth: 95 },
  ];
  return (
    <div className="absolute left-0 top-0">
      <img src={caseOneAssets.functionZoneSkews[0]} alt="" className="absolute left-[710px] top-[552px] h-[197px] w-[250px] object-cover" />
      <img src={caseOneAssets.functionZoneSkews[1]} alt="" className="absolute left-[640px] top-[492px] h-[223px] w-[283px] object-cover opacity-50" />
      <img src={caseOneAssets.functionZoneSkews[2]} alt="" className="absolute left-[677px] top-[611px] h-[128px] w-[65px] object-cover opacity-80" />

      {labels.map((label) => (
        <div key={label.text}>
          <img
            src={label.long ? caseOneAssets.functionZoneAnnotLong : caseOneAssets.functionZoneAnnotShort}
            alt=""
            className="absolute h-[6px]"
            style={{ left: label.lineLeft, top: label.lineTop, width: label.lineWidth }}
          />
          <img
            src={caseOneAssets.functionZoneArrow}
            alt=""
            className="absolute left-[704px] h-[24px] w-[22px]"
            style={{ top: label.top, transform: 'rotate(-90deg) scaleY(-1)' }}
          />
          <img src={caseOneAssets.functionZoneDot} alt="" className="absolute size-[22px]" style={{ left: label.left, top: label.top + 3 }} />
          <p className="absolute left-[736px] w-[120px] text-[23px] leading-[28px] text-[#8e9299]" style={{ top: label.top }}>
            {label.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function FunctionZoneSection() {
  return (
    <SectionFrame bg="#fbfcfd">
      <img
        src={caseOneAssets.functionZoneFull}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute opacity-0">
        易用性 重构功能分区 重新定义界面分区，明确功能模块，清晰信息层级
        1.界面利用率提高，核心区域展示核心内容，把生成装置按钮与挂机页签按钮相结合。
        2.结构上，底部导航栏由原来的7个页签改成5个页签，把战舰、船员、武器整合进一个养成入口。
        3.次级系统性的功能归为一类，把商店入口位置显示在邮件、背包同一区域
        个人信息区域 货币栏 行军信息区域 商业运营活动功能菜单栏 常规玩法入口区域 常规系统入口区域
        养成功能显示区域 挂机玩法操作区域 快捷任务区域 快捷聊天区域 系统功能导航栏 场景 信息展示 UI交互层
      </div>
    </SectionFrame>
  );
}

function HudComparisonSection() {
  return (
    <SectionFrame bg="#fbfcfd">
      <div className="absolute left-0 top-0 h-[446px] w-full bg-[#e5e7f6]" />
      <div className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">易用性</div>
      <div className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">重构功能分区</div>
      <p className="absolute left-[88px] top-[176px] w-[720px] text-[25px] leading-[36px] text-[#858991]">HUD界面改版对比</p>

      <img
        src={caseOneAssets.hudCompareBefore}
        alt=""
        className="absolute left-[88px] top-[262px] h-[350px] w-[197px] object-cover"
        loading="lazy"
        decoding="async"
      />
      <svg
        className="absolute left-[182px] top-[591px] h-[219px] w-[266px] overflow-visible"
        viewBox="0 0 266 219"
        aria-hidden="true"
      >
        <path
          d="M 0 0 C 44 86 112 126 178 132 C 210 135 237 132 266 126"
          fill="none"
          stroke="#6b8cff"
          strokeWidth="4"
          strokeDasharray="9 9"
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="8" fill="#6b8cff" opacity="0.82" />
        <path d="M 266 126 L 243 113 L 245 141 Z" fill="#6b8cff" />
      </svg>
      <img
        src={caseOneAssets.hudCompareAfter}
        alt=""
        className="absolute left-[473px] top-[262px] h-[600px] w-[336px] object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute left-[950px] top-[50px] h-[536px] w-[286px] font-bold">
        {[
          ['1', '信息层级\n更清晰'],
          ['2', '界面布局\n更合理'],
          ['3', '界面品质\n更可控'],
        ].map(([no, copy], index) => (
          <div key={no} className="absolute flex items-start text-[#5e7fee]" style={{ left: index === 2 ? 0 : index === 1 ? 3 : 6, top: index === 2 ? 410 : index === 1 ? 195 : 0 }}>
            <span className="w-[84px] text-[66px] font-bold leading-[86px] text-[#9db2f7]">{no}</span>
            <span className="mt-[20px] whitespace-pre-line text-[42px] font-bold leading-[53px]">{copy}</span>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

function GuideFlowDiagram() {
  return (
    <div className="absolute inset-0">
      <img src={caseOneAssets.guideCircles[0]} alt="" className="absolute left-[38px] top-[233px] size-[244px]" loading="lazy" decoding="async" />
      <p className="absolute left-[71px] top-[329px] w-[178px] text-center text-[43px] font-bold leading-[52px] tracking-[2px] text-white">功能归类</p>

      <img src={caseOneAssets.guideCircles[1]} alt="" className="absolute left-[99px] top-[405px] size-[300px]" loading="lazy" decoding="async" />
      <img src={caseOneAssets.guideCircles[2]} alt="" className="absolute left-[127px] top-[433px] size-[244px]" loading="lazy" decoding="async" />
      <p className="absolute left-[138px] top-[529px] w-[223px] text-center text-[43px] font-bold leading-[52px] tracking-[2px] text-white">主路径聚焦</p>

      <img src={caseOneAssets.guideCircles[3]} alt="" className="absolute left-[249px] top-[630px] size-[244px]" loading="lazy" decoding="async" />
      <p className="absolute left-[282px] top-[726px] w-[178px] text-center text-[43px] font-bold leading-[52px] tracking-[2px] text-white">扩展预留</p>

      <img src={caseOneAssets.guideArrowTop} alt="" className="absolute left-[277px] top-[287px] h-[205px] w-[143px]" loading="lazy" decoding="async" />
      <img src={caseOneAssets.guideArrowBottom} alt="" className="absolute left-[370px] top-[470px] h-[228px] w-[179px]" loading="lazy" decoding="async" />
    </div>
  );
}

function NavigationGuideSection() {
  return (
    <SectionFrame bg="#fbfcfd">
      <div className="absolute left-0 top-0 h-[489px] w-full bg-[#e7e9f8]" />
      <div className="absolute left-[88px] top-[50px] w-[330px] text-[28px] font-black leading-[34px] tracking-[2px] text-[#3d3f44]">引导化</div>
      <div className="absolute left-[88px] top-[95px] w-[420px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">重构功能分区</div>
      <h3 className="absolute left-[88px] top-[165px] w-[980px] text-[35px] font-bold leading-[48px] tracking-[1px] text-[#5c7df0]">
        提取关键功能，明确导航层级，方便卡牌和SLG部分交互统一
      </h3>

      <GuideFlowDiagram />

      {caseOneAssets.guideHudScreens.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute top-[245px] h-[600px] w-[336px] object-contain"
          style={{ left: index === 0 ? 552 : 916 }}
          loading="lazy"
          decoding="async"
        />
      ))}
    </SectionFrame>
  );
}

function GrowthInterfaceSection() {
  return (
    <SectionFrame bg="#fbfcfd" height={720}>
      <div className="absolute left-0 top-0 h-[74px] w-[100px] bg-[#c7b9f9]" />
      <div className="absolute left-[438px] top-0 h-[720px] w-[842px] bg-[#e7e9f8]" />
      <p className="absolute left-[88px] top-[71px] w-[270px] text-[34px] font-normal leading-[43px] tracking-[1px] text-[#b8adf2]">其他设计展示</p>
      <p className="absolute left-[88px] top-[114px] w-[270px] text-[34px] font-bold leading-[43px] tracking-[1px] text-[#b8adf2]">一些细节</p>
      <p className="absolute left-[88px] top-[230px] w-[350px] text-[50px] font-bold leading-[61px] tracking-[1px] text-[#44464a]">养成界面</p>
      <div className="absolute left-[88px] top-[301px] w-[300px] text-[28px] leading-[43px] text-[#80858c]">
        <p>细节调整：</p>
        <p>战舰/武器/英雄整合在一个框架层中，通过页签进行切换界面；</p>
        <p>整体结构保持统一，上半部分展示模型，下半部分放置交互按钮，切换有动效过渡</p>
      </div>
      <img
        src={caseOneAssets.growthShipPanel}
        alt=""
        className="absolute left-[497px] top-[59px] h-[602px] w-[342px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <img
        src={caseOneAssets.growthWeaponPanel}
        alt=""
        className="absolute left-[879px] top-[59px] h-[602px] w-[342px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function ReflectionSection() {
  const reflections = [
    {
      title: '让界面先服务玩家目标',
      copy: 'HUD 改版不是把按钮重新摆一遍，而是先明确玩家当下最常做的事，再决定信息层级、功能入口和视觉主次。',
    },
    {
      title: '兼顾短期体验与长期维护',
      copy: '新模块上线得快很重要，但更重要的是后续能持续扩展、复用和维护，否则每一次活动与版本都会把界面重新拉回复杂状态。',
    },
    {
      title: '一致性的价值高于局部炫技',
      copy: '当不同场景下的导航、反馈和操作逻辑保持一致，玩家适应成本会明显下降，这比单点功能做得花更能提升整体体验。',
    },
  ];

  return (
    <SectionFrame bg="#4f78f1">
      <div className="absolute left-[90px] top-[82px] text-[28px] font-bold text-white/90">项目反思</div>
      <div className="absolute left-[90px] top-[130px] text-[18px] tracking-[7px] text-white/45">R E F L E C T I O N</div>
      <div className="absolute left-[78px] top-[238px] h-[300px] w-[250px] rotate-[-12deg] bg-white/10" style={{ clipPath: 'polygon(26% 0%, 100% 24%, 84% 100%, 0% 80%)' }} />
      <div className="absolute right-[110px] bottom-[96px] text-[128px] font-black leading-none text-[#ffd7a6]/80">?</div>

      <div className="absolute left-[170px] top-[280px] h-[480px] w-[900px] rounded-[10px] bg-[#5d84f3]/55" />
      <div className="absolute left-[132px] top-[244px] h-[480px] w-[900px] rounded-[10px] bg-[#dcecff] px-[82px] py-[60px] shadow-[0_18px_30px_rgba(39,78,173,0.22)]">
        <div className="flex h-full flex-col justify-center gap-10 text-center">
          {reflections.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-[28px] font-black leading-[36px] text-[#5476ef]">{item.title}</h3>
              <p className="mx-auto max-w-[700px] text-[20px] leading-[31px] text-[#7f94aa]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function SpecSection() {
  return (
    <SectionFrame bg="#f3f5f8">
      <p className="absolute left-[88px] top-[50px] text-[28px] font-bold leading-[34px] tracking-[2px] text-[#3d3f44]">规范性</p>
      <p className="absolute left-[88px] top-[95px] text-[24px] font-bold leading-[31px] tracking-[5px] text-[#3d3f44]">制定界面规范</p>
      <p className="absolute left-[88px] top-[181px] text-[35px] font-black leading-[48px] tracking-[1px] text-[#5c7df0]">明确界面信息类型与资源规范</p>
      <p className="absolute left-[88px] top-[240px] w-[900px] text-[24px] font-medium leading-[36px] text-[#838890]">
        规范界面中需要的资源内容，提高界面更迭的设计与美术的工作效率，
        <br />
        同时也能保证功能界面，有比较好的连续性及品质感。
      </p>

      <div className="absolute left-[43px] top-[326px] h-[526px] w-[1195px] rounded-[9px] bg-white" />
      <img
        src={caseOneAssets.specLabelImage}
        alt=""
        className="absolute left-[100px] top-[352px] h-[488px] w-[131px] object-contain"
        loading="lazy"
        decoding="async"
      />

      <img
        src={caseOneAssets.specControlsImage}
        alt=""
        className="absolute left-[300px] top-[337px] h-[517px] w-[689px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute opacity-0">
        页签 按钮 道具框 资源道具 聊天栏 头像框 战力值 标题栏 套装激活
      </div>
    </SectionFrame>
  );
}

function OverlaySection() {
  return (
    <SectionFrame bg="#f3f5f8">
      <div className="absolute left-0 top-0 h-full w-[405px] bg-white" />
      <p className="absolute left-[88px] top-[90px] w-[270px] text-[34px] font-normal leading-[43px] tracking-[1px] text-[#44464a]">其他设计展示</p>
      <p className="absolute left-[88px] top-[135px] w-[210px] text-[23px] font-bold leading-[31px] tracking-[5px] text-[#44464a]">一些细节</p>
      <p className="absolute left-[88px] top-[250px] w-[300px] text-[34px] font-bold leading-[41px] tracking-[1px] text-[#5d7fee]">“ 弹窗界面展示 ”</p>
      <div className="absolute left-[88px] top-[310px] w-[260px] text-[28px] leading-[43px] text-[#80858c]">
        <p>细节调整：</p>
        <p>弹窗结构统一性，界面上方放置标题和关闭以及帮助按钮，页签显示在弹窗界面下方，方便交互；</p>
        <p>宽度尽量保持一致，高度可以根据内容进行合理调整</p>
      </div>

      <img
        src={caseOneAssets.overlayPlainPanel}
        alt=""
        className="absolute left-[528px] top-[18px] h-[359px] w-[652px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <img
        src={caseOneAssets.overlayTabbedPanel}
        alt=""
        className="absolute left-[534px] top-[390px] h-[497px] w-[640px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </SectionFrame>
  );
}

function VisualSection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    const imageWidths = [279, 278, 279, 280];

    return (
      <SectionFrame bg="#fbfcfd">
        <p className="absolute left-[88px] top-[61px] w-[300px] text-[35px] font-black leading-[44px] tracking-[2px] text-[#46484d]">视觉稿欣赏</p>
        <p className="absolute left-[88px] top-[105px] w-[430px] text-[24px] font-medium leading-[31px] tracking-[5px] text-[#3d3f44]">其他系统功能界面</p>

        <div className="absolute left-[37px] top-[203px] flex items-start gap-[30px]">
          {caseOneAssets.visualSystemImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-[500px] object-cover"
              style={{ width: imageWidths[index] }}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <p className="absolute left-[973px] top-[716px] w-[260px] text-[16px] font-medium leading-[20px] text-[#80858c]">
          公会界面与原来结构保持一致，只调整了底部页签栏和聊天栏
        </p>
      </SectionFrame>
    );
  }

  const imageWidths = [336, 334, 335];

  return (
    <SectionFrame bg="#fbfcfd">
      <p className="absolute left-[88px] top-[61px] w-[300px] text-[35px] font-black leading-[44px] tracking-[2px] text-[#46484d]">视觉稿欣赏</p>
      <p className="absolute left-[88px] top-[105px] w-[430px] text-[24px] font-medium leading-[31px] tracking-[5px] text-[#3d3f44]">核心-HUD界面</p>

      <div className="absolute left-[83px] top-[203px] flex items-start gap-[54px]">
        {caseOneAssets.visualHudImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className="h-[600px] object-cover"
            style={{ width: imageWidths[index] }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </SectionFrame>
  );
}

export function HudRedesignTailContent() {
  return (
    <>
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
    </>
  );
}

export function CaseDetailContent() {
  return (
    <div className="case-detail-content flex flex-col overflow-hidden">
      <CoverSection />
      <BackgroundSection />
      <GoalsSection />
      <CompetitorSection />
      <HudRedesignTailContent />
    </div>
  );
}
