import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { publicUrl } from '../lib/publicUrl';
import './StarFigmaCases.css';

type StageProps = {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
};

function FigmaScaleStage({
  width,
  height,
  className = '',
  children,
  maxScale = 1,
  fitToViewport = false,
  viewportInset = 24,
}: StageProps & { maxScale?: number; fitToViewport?: boolean; viewportInset?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [frameWidth, setFrameWidth] = useState<number | null>(null);
  const [frameOffsetX, setFrameOffsetX] = useState(0);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    let lastWidth = 0;
    let lastFrameOffsetX = 0;
    const update = () => {
      const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
      const parentRect = node.parentElement?.getBoundingClientRect();
      const shouldFitViewport = fitToViewport && viewportWidth < width;
      const safeWidth = Math.max(280, viewportWidth - viewportInset * 2);
      const available = shouldFitViewport ? Math.min(width, safeWidth) : node.clientWidth || width;
      const nextFrameOffsetX = shouldFitViewport && parentRect
        ? Math.round((viewportWidth - available) / 2 - parentRect.left)
        : 0;
      if (available === lastWidth && nextFrameOffsetX === lastFrameOffsetX) return;
      lastWidth = available;
      lastFrameOffsetX = nextFrameOffsetX;
      const nextScale = Math.min(maxScale, Math.max(0.1, available / width));
      setScale(nextScale);
      setFrameWidth(shouldFitViewport ? available : null);
      setFrameOffsetX(nextFrameOffsetX);
      setOffsetX(Math.max(0, (available - width * nextScale) / 2));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [fitToViewport, maxScale, viewportInset, width]);

  return (
    <div
      className="star-figma-shell"
      ref={ref}
      style={{
        height: height * scale,
        width: frameWidth ?? undefined,
        transform: frameOffsetX ? `translateX(${frameOffsetX}px)` : undefined,
      }}
    >
      <div
        className={`star-figma-stage ${className}`}
        style={{ width, height, transform: `translateX(${offsetX}px) scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

/* NavyTrialCase used to live here: the original 我为球狂 (MAD Football) page, built
 * entirely from figma.com/api/mcp/asset URLs. It was superseded by MadCase below
 * (local assets, exact Figma geometry) and had been unreachable ever since —
 * renderStarFigmaCase only ever dispatches to MadCase. Removed with its 22 dead
 * remote URLs and its four Navy* helper components. */
/* ─── CDST assets ────────────────────────────────────────────────
 * The page remains React/CSS driven for the text-heavy sections. The lower
 * process/prototype/visual sections use local Figma exports so their dense
 * images, arrows, annotations, and backplates do not depend on expiring URLs.
 */
const cdst = {
  /* 痛点图标：本地单图资源 */
  pain1: publicUrl('/images/xingji/cdst/assets/pain-1.webp'),
  pain2: publicUrl('/images/xingji/cdst/assets/pain-2.webp'),
  pain3: publicUrl('/images/xingji/cdst/assets/pain-3.webp'),
  pain4: publicUrl('/images/xingji/cdst/assets/pain-4.webp'),
  pain5: publicUrl('/images/xingji/cdst/assets/pain-5.webp'),

  /* 竞品图标卡：底板与 Logo 合并为各自独立的小图 */
  competitorA: publicUrl('/images/xingji/cdst/assets/competitor-a.webp'),
  competitorB: publicUrl('/images/xingji/cdst/assets/competitor-b.webp'),
  competitorC: publicUrl('/images/xingji/cdst/assets/competitor-c.webp'),
  competitorD: publicUrl('/images/xingji/cdst/assets/competitor-d.webp'),
  compDivider: publicUrl('/images/xingji/cdst/assets/competitor-divider.webp'),

  /* 用户画像：每个人物头像都是独立本地图片 */
  personaA: publicUrl('/images/xingji/cdst/assets/persona-a.webp'),
  personaB: publicUrl('/images/xingji/cdst/assets/persona-b.webp'),
  personaC: publicUrl('/images/xingji/cdst/assets/persona-c.webp'),
  personaD: publicUrl('/images/xingji/cdst/assets/persona-d.webp'),

  /* 产品结构：本地单图资源 */
  struct: publicUrl('/images/xingji/cdst/assets/product-structure.webp'),

  /* UI 视觉：独立手机稿/装饰图分层渲染 */
  uiVisionHomeExact: publicUrl('/images/xingji/cdst/layers/ui-vision-home-exact.webp?v=figma-9817-19294'),
  uiVisionLevelExact: publicUrl('/images/xingji/cdst/layers/ui-vision-level-exact.webp?v=figma-9817-19303'),
  uiVisionOtherExact: publicUrl('/images/xingji/cdst/layers/ui-vision-other-exact.webp?v=figma-9817-19322'),
  interactionSalaryFlow: publicUrl('/images/xingji/cdst/layers/interaction/salary-flow.webp?v=figma-9817-19270'),
  interactionSalaryExtraPhone: publicUrl('/images/xingji/cdst/layers/interaction/salary-extra-phone.webp?v=figma-9817-19282'),
  interactionSalaryBottomStrip: publicUrl('/images/xingji/cdst/layers/interaction/salary-bottom-strip.webp?v=figma-9817-19283'),
  interactionSalaryArrowCity: publicUrl('/images/xingji/cdst/layers/interaction/salary-arrow-city.svg?v=figma-9817-19274'),
  interactionSalaryArrowDrag: publicUrl('/images/xingji/cdst/layers/interaction/salary-arrow-drag.webp?v=figma-9817-19278'),
  interactionSalaryLabelEnter: publicUrl('/images/xingji/cdst/layers/interaction/salary-label-enter.svg?v=figma-9817-19286'),
  interactionAssessmentFlow: publicUrl('/images/xingji/cdst/layers/interaction/assessment-flow.webp?v=figma-9817-19254'),
  interactionAssessmentTopStrip: publicUrl('/images/xingji/cdst/layers/interaction/assessment-top-strip.webp?v=figma-9817-19255'),
  interactionAssessmentSidePhone: publicUrl('/images/xingji/cdst/layers/interaction/assessment-side-phone.webp?v=figma-9817-19256'),
  interactionAssessmentArrowSwipe: publicUrl('/images/xingji/cdst/layers/interaction/assessment-arrow-swipe.webp?v=figma-9817-19260'),
  interactionAssessmentArrowDownA: publicUrl('/images/xingji/cdst/layers/interaction/assessment-arrow-down-a.webp?v=figma-9817-19263'),
  interactionAssessmentArrowDownB: publicUrl('/images/xingji/cdst/layers/interaction/assessment-arrow-down-b.webp?v=figma-9817-19268'),
  interactionProfileFlow: publicUrl('/images/xingji/cdst/layers/interaction/profile-flow.webp?v=figma-9817-19247'),
  interactionStatusConsultFlow: publicUrl('/images/xingji/cdst/layers/interaction/status-consult-flow.webp?v=figma-9817-19239'),
  interactionStatusConsultVerticalBg: publicUrl('/images/xingji/cdst/layers/interaction/status-consult-vertical-bg-dark.webp?v=figma-9817-19242'),

  bgStrokeHero: publicUrl('/images/xingji/cdst/bg/stroke-hero.svg'),
  bgStrokeStandard: publicUrl('/images/xingji/cdst/bg/stroke-standard.svg'),
  bgStrokeLate: publicUrl('/images/xingji/cdst/bg/stroke-late.svg'),
  bgStrokeEnd: publicUrl('/images/xingji/cdst/bg/stroke-end.svg'),
};

const cdstIconAsset = (name: string) => publicUrl(`/images/xingji/cdst/layers/icons/${name}.png?v=figma-9817-19330`);

const cdstUiIconLayers = [
  ['icon-27', 425, 4, 113, 147],
  ['icon-10', 834, 15, 137, 127],
  ['icon-11', 1286, 0, 139, 133],
  ['icon-12', 0, 2, 143, 151],
  ['icon-13', 40, 820, 89, 95],
  ['icon-14', 449, 820, 89, 88],
  ['icon-15', 858, 818, 89, 88],
  ['icon-16', 1312, 816, 88, 88],
  ['icon-17', 21, 317, 134, 134],
  ['icon-28', 62, 317, 41, 134],
  ['icon-18', 836, 316, 132, 133],
  ['icon-19', 1306, 327, 109, 135],
  ['icon-20', 422, 324, 132, 129],
  ['icon-22', 455, 592, 74, 88],
  ['icon-23', 865, 603, 77, 77],
  ['icon-24', 43, 589, 77, 79],
  ['icon-25', 1310, 602, 89, 78],
] as const;

const cdstColorSwatches = [
  ['swatch-efc28b', '#efc28b', 0, 190, 376, 131, 74, 46, '#fff'],
  ['swatch-ec965d', '#ec965d', 427, 190, 376, 131, 74, 46, '#fefefe'],
  ['swatch-7f8bd3', '#7f8bd3', 855, 192, 375, 130, 73, 45, '#fff'],
  ['swatch-64a6da', '#64a6da', 1281, 192, 375, 130, 76, 45, '#fff'],
  ['swatch-fb6e5a', '#fb6e5a', 1707, 192, 376, 130, 69, 45, '#fff'],
  ['swatch-04b77f', '#04b77f', 0, 450, 376, 131, 74, 46, '#fff'],
  ['swatch-56c1bb', '#56c1bb', 427, 450, 376, 131, 74, 46, '#fefefe'],
  ['swatch-626a81', '#626a81', 855, 451, 375, 131, 73, 46, '#fff'],
  ['swatch-fdfdfd', '#fdfdfd', 1281, 451, 375, 131, 87, 46, '#000'],
  ['swatch-979797', '#979797', 1707, 451, 376, 131, 70, 46, '#fff'],
] as const;

function CdstCase() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('.cdst-stage > *:not(.cdst-bg-slab):not(.cdst-section-shield):not(.cdst-interaction-shield):not(.cdst-exact-section):not(.cdst-exact-subsection):not(.cdst-color-swatch):not(.cdst-ui-icon-asset)'));
    items.forEach((item, index) => {
      item.classList.add('cdst-reveal-item');
      item.style.setProperty('--cdst-reveal-delay', `${(index % 6) * 55}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  /* stage Y bases per Figma section (frame 9434:2079) */
  const SEC = {
    project: 1495.5,
    pain: 3695.5,
    comp: 5500.5,
    user: 7540.5,
    struct: 10653.5,
    flow: 12691.5,
    inter: 13826.5,
    visual: 24597.5,
  };
  /* 视觉 sub-block bases (frame y inside 视觉) */
  const V = {
    home: SEC.visual + 280.5,   // 组7  -> 24878
    level: SEC.visual + 1861.5, // 组6  -> 26459
    other: SEC.visual + 4923.5, // 组9  -> 29521
    icon: SEC.visual + 6446,    // 组10 -> 31043.5
  };
  const stageHeight = V.icon + 1950;
  const interactionTop = SEC.inter - 153.5;
  const bgSlabs = [
    { src: cdst.bgStrokeHero, left: -260, top: 1411, width: 3000, height: 1490, flip: true },
    { src: cdst.bgStrokeStandard, left: -260, top: 3908, width: 3000, height: 2013.5 },
    { src: cdst.bgStrokeStandard, left: -260, top: 7607, width: 3000, height: 2013.5 },
    { src: cdst.bgStrokeStandard, left: -260, top: 11309, width: 3000, height: 2013.5 },
    { src: cdst.bgStrokeLate, left: -260, top: 15015, width: 3000, height: 2022.3 },
    { src: cdst.bgStrokeLate, left: -260, top: 18731, width: 3000, height: 2022.3 },
    { src: cdst.bgStrokeLate, left: -260, top: 22450, width: 3000, height: 2022.3 },
    { src: cdst.bgStrokeStandard, left: -260, top: 26104, width: 3000, height: 2013.5 },
    { src: cdst.bgStrokeEnd, left: -260, top: 31034, width: 3000, height: stageHeight - 31034 },
  ];

  return (
    <div ref={pageRef} className="star-case-page cdst-page">
      <FigmaScaleStage width={2480} height={stageHeight} className="cdst-stage" fitToViewport viewportInset={0}>
        {bgSlabs.map((slab, index) => (
          <img
            key={`${slab.src}-${index}`}
            src={slab.src}
            className="abs cdst-bg-slab"
            style={{
              left: slab.left,
              top: slab.top,
              width: slab.width,
              height: slab.height,
              transform: slab.flip ? 'scaleX(-1)' : undefined,
            }}
            alt=""
          />
        ))}
        <div
          className="abs cdst-section-shield"
          style={{ left: 0, top: SEC.struct - 80, width: 2480, height: SEC.visual - SEC.struct + 80 }}
        />

        {/* ── 头图 hero (y0 h1471) ── */}
        <div className="abs cdst-hero-cover-frame" style={{ left: 0, top: 0, width: 2480, height: 1471 }}>
          <img
            src={publicUrl('/images/xingji/cdst/cdst-hero-cover.webp')}
            className="abs cdst-hero-cover-img"
            style={{ left: 0, top: -2, width: 2480, height: 1473 }}
            alt=""
          />
        </div>

        {/* ── 项目概括 + 市场分析 (base 1495.5, h1887) ── */}
        <CdstTitle y={SEC.project} title="项目概括" en="Project Overview" w={337} tone="black" />
        <div className="cdst-subtitle blue end" style={{ left: 0, top: SEC.project + 300.5, width: 693 }}>项目介绍 <span>Introduction</span></div>
        <div className="cdst-paragraph black" style={{ left: 210.5, top: SEC.project + 435.5, width: 2060 }}>职力测评(CDST4U)是专门为职场新人提供一战式职业相关能力自测的平台。致力为职场新人提供全方位自测工具，帮助新人建立“知己知彼”的健康职业发展道路。</div>
        <div className="cdst-subtitle blue" style={{ left: 209.5, top: SEC.project + 768.5 }}>市场分析 <span>market analysis</span></div>
        <div className="cdst-paragraph white" style={{ left: 212.5, top: SEC.project + 932.5, width: 1170 }}>经市场调研发现：<br />　　2010-2018年的毕业生人数按照2%-5%的同比增长率逐年增长，近8年间累计毕业生人数达到6526万人。2018年普通高校毕业生人数共计820万人，与2010年相比增长了160万人，再创新高。<br />　　大学生职前教育的主要目标群体为本科毕业生和海归群体，根据2017年中国的本科毕业生和海归学生分别为450万、43万人，以客单价约为4000元来计算，2017年中国的职前教育市场规模约为30亿元。随着我国高校人数的扩招和出国留学热潮，未来职前教育的目标群体将会逐渐扩大，市场规模也将不断攀升。</div>
        <CdstMarketChart left={1378.5} top={SEC.project + 975.5} />

        {/* ── 痛点分析 (base 3695.5, h1373) ── */}
        <CdstTitle y={SEC.pain} title="痛点分析" en="User Pain Points’Analysis" w={488} />
        <img src={cdst.pain1} className="abs img-cover" style={{ left: 813.5, top: SEC.pain + 625.5, width: 359, height: 359 }} />
        <img src={cdst.pain2} className="abs img-cover" style={{ left: 1358.5, top: SEC.pain + 669.5, width: 319, height: 319 }} />
        <img src={cdst.pain4} className="abs img-cover" style={{ left: 1688.5, top: SEC.pain + 735.5, width: 230, height: 230 }} />
        <img src={cdst.pain3} className="abs img-cover" style={{ left: 1112.5, top: SEC.pain + 863.5, width: 293, height: 293 }} />
        <img src={cdst.pain5} className="abs img-cover" style={{ left: 617.5, top: SEC.pain + 850.5, width: 230, height: 230 }} />
        <div className="pain-text" style={{ left: 975.5, top: SEC.pain + 309.5 }}><b>产业教育分离：</b><br />产教分离导致高校教育和企业需求<br />之间产生的信息差，是大部分大学<br />生职业选择困惑的源头。</div>
        <div className="pain-text black" style={{ left: 198.5, top: SEC.pain + 1061.5 }}><b>就业压力巨大：</b><br />宏观经济下行压力加大和结构性改<br />革产生的行业变化，在一定程度上<br />影响就业形势，就业仍然是社会各<br />方都关注的话题。</div>
        <div className="pain-text black" style={{ left: 1579.5, top: SEC.pain + 1009.5 }}><b>职业规划缺失：</b><br />老师基本都是院党委书记或学工教<br />师，老师们本身就缺少社会上相关<br />职业的经验，当然也就无法给出实<br />际中行业发展、企业概况、岗位要<br />求，只能照本宣科。</div>

        {/* ── 竞品分析 (base 5500.5, h1719) ── */}
        <CdstTitle y={SEC.comp} title="竞品分析" en="User Pain Points’Analysis" w={488} />
        <Comp base={SEC.comp} top={288.5} image={cdst.competitorA} name="爱思益" nameX={51}
          body={['专门针对大学生及职场行人提供职前', '教育的新锐互联网平台']} bodyTop={71} />
        <Comp base={SEC.comp} top={674.5} image={cdst.competitorB} name="职业蛙" nameX={48}
          body={['大学生求职服务机构，为海内外大学', '生提供一站式求职解决方案的平台']} bodyTop={66} />
        <Comp base={SEC.comp} top={1058.5} image={cdst.competitorC} name="职优你" nameX={44}
          body={['通过在线职场教育的方式切入职前教', '育 ，联合学校以及企业，打造属于大', '学生以及在职精英的职场生态圈']} bodyTop={25} />
        <Comp base={SEC.comp} top={1441.5} image={cdst.competitorD} name="职梦" nameX={73}
          body={['依托来自全球顶尖投资银行、咨询公', '司、四大会计师事务所和世界五百强', '企业的精英导师人才库，为留学生职', '业咨询的平台']} bodyTop={0} />
        <img src={cdst.compDivider} className="abs" style={{ left: 1374.5, top: SEC.comp + 386.5, width: 7, height: 1131 }} />
        <div className="competitor-summary" style={{ left: 1481.5, top: SEC.comp + 345.5, width: 760 }}>
          <span className="cs-title">总结</span>
          <p>四款都是非常成熟的职前教育型产品</p>
          <p>爱思益是与企业合作进行课程教研，</p>
          <p>甚至将爱思益课程作为新员工入职培</p>
          <p>训课，作为合作企业的全新招聘渠道。</p>
          <p>职业蛙拥有自主研发“在线求职竞争</p>
          <p>力评估系统”，数据覆盖学员求职全</p>
          <p>过程的特色。</p>
          <p>职优你前期在北美独家签约一些高校，</p>
          <p>成为后续和国内高校合作的背书。</p>
          <p>职梦师具有通过每周两场免费在线讲座获</p>
          <p>客，以及付费群体90%是中国留学生</p>
          <p>的优势。</p>
        </div>

        {/* ── 用户画像 (base 7540.5, h2789) ── */}
        <CdstTitle y={SEC.user} title="用户画像" en="User Portrait" w={268} />
        <Persona base={SEC.user} top={294} portrait={cdst.personaA} textTop={61.5}
          lines={['角色：大三学生', '信息：上海外国语大学/俄语', '需求：自己毕业后想做冰球俱乐部的新媒体编辑，但', '         是学校没有就业相关的课程指导，想要到时候', '         去公司官网或者相关的公众号去看看，希望能', '           够提供更多的实习和工作机会。']} />
        <Persona base={SEC.user} top={958} portrait={cdst.personaB} textTop={111.5}
          lines={['角色：大四学生', '信息：上海对外经贸大学/工商管理', '需求：自己的专业很好就业，自己已经拿到了Offer，', '         但是自己喜欢文学，很想去做个调查记者，不', '         知有没有这样的机会。']} />
        <Persona base={SEC.user} top={1620} portrait={cdst.personaC} textTop={64.5}
          lines={['角色：大二学生', '信息：上海外国语大学/统计学', '需求：在学校里学习的只是多数是纸上谈兵，我想通', '         过一些有经验前辈分享一下怎样将这些知识运', '         用到工作当中。另外也想了解怎样处理职场人', '         际关系，怎样融入工作环境这些。']} />
        <Persona base={SEC.user} top={2285} portrait={cdst.personaD} textTop={63.5}
          lines={['角色：研一学生', '信息：上海外国语大学/生化与分子', '需求：抛开自己的化学专业，想了解更多行业和职位，', '        想知道哪方面工作适合自己。而且想了解关于招', '        聘公司的环境和薪资问题。我还是很想知道跨行', '        业的话，研究生的薪资有没有比本科生有优势。']} />

        {/* ── 产品结构 (base 10653.5, h1755) ── */}
        <CdstTitle y={SEC.struct} title="产品结构" en="Product Structure" w={350} />
        <div className="cdst-paragraph white cdst-structure-copy" style={{ left: 201.5, top: SEC.struct + 249.5, width: 1300 }}>说明：<br />　　该项目共分为小程序-用户端、运营后台系统两部分；<br />　　本次设计主要针对小程序-用户端展开。</div>
        <img src={cdst.struct} className="abs img-cover" style={{ left: 198.5, top: SEC.struct + 703.5, width: 2082, height: 1052 }} />

        {/* ── 产品流程 (base 12691.5, h819) ── */}
        <CdstTitle y={SEC.flow} title="产品流程" en="Product Flow" w={268} />
        <div className="cdst-paragraph white" style={{ left: 200.5, top: SEC.flow + 256.5, width: 1400, lineHeight: '50px' }}>用户测试与咨询流程</div>
        <CdstProductFlow left={199.5} top={SEC.flow + 437.5} />

        {/* ── 交互原型 (Figma 9817:19235, y13673 h10800) ── */}
        <div
          className="abs cdst-interaction-shield"
          style={{ left: 0, top: interactionTop, width: 2480, height: 10800 }}
        />
        <CdstTitle y={interactionTop + 154} title="交互原型" en="Interactive Prototype" w={350} />
        <CdstSalaryPrototype top={interactionTop + 446.5} />
        <CdstAssessmentPrototype top={interactionTop + 3442.5} />
        <CdstProfileInteraction top={interactionTop + 5688.5} />
        <CdstStatusConsultPrototype top={interactionTop + 8579.5} />

        {/* ── UI视觉 (base 24597.5, h8607) ── */}
        <CdstTitle y={SEC.visual} title="UI视觉" en="UI Vision" w={201} />
        <div className="visual-note" style={{ left: 1527.5, top: SEC.visual + 2498.5, width: 700 }}>统一视觉风格，设计语言营造品牌基调，加强用户对品牌的认知<br /><br />使用层级化的卡片设计，轻量级的设计让用户长时间翻阅不易引起视觉疲劳</div>

        {/* 主页形象 (组7 base 24878) */}
        <img src={cdst.uiVisionHomeExact} className="abs cdst-exact-subsection" style={{ left: 148, top: V.home, width: 2229, height: 1566 }} alt="" />

        {/* 层级页面 (组6 base 26459) */}
        <img src={cdst.uiVisionLevelExact} className="abs cdst-exact-subsection" style={{ left: 270, top: V.level, width: 1898, height: 2910 }} alt="" />

        {/* 其他界面 (Figma 9817:19322) */}
        <img src={cdst.uiVisionOtherExact} className="abs cdst-exact-subsection" style={{ left: 170, top: V.other, width: 2311, height: 1346 }} alt="" />

        {/* ICON & 配色 (组10 base 30919) */}
        <div className="visual-label" style={{ left: 197.5 + 902, top: V.icon }}>ICONH&amp;配色</div>
        {cdstColorSwatches.map(([asset, label, x, y, w, h, textX, textY, color]) => (
          <span key={asset} className="abs cdst-color-swatch" style={{ left: 197.5 + x, top: V.icon + y, width: w, height: h }}>
            <img src={cdstIconAsset(asset)} className="abs img-fill" alt="" />
            <span className="abs cdst-color-label" style={{ left: textX, top: textY, color }}>{label}</span>
          </span>
        ))}
        {cdstUiIconLayers.map(([asset, ix, iy, iw, ih]) => (
          <img
            key={asset}
            src={cdstIconAsset(asset)}
            className="abs cdst-ui-icon-asset"
            style={{ left: 197.5 + 333 + ix, top: V.icon + 771 + iy, width: iw, height: ih }}
            alt=""
          />
        ))}
      </FigmaScaleStage>
    </div>
  );
}

const profilePhones = [
  { x: 0, y: 0, screen: 'industryTiles', mark: 'top' },
  { x: 255, y: 0, screen: 'schoolRecommend', mark: 'mid' },
  { x: 535, y: 0, screen: 'profile', mark: 'lower' },
  { x: 815, y: 0, screen: 'cityList', mark: 'top' },
  { x: 1095, y: 0, screen: 'cityOverlay', mark: 'top' },
  { x: 1375, y: 0, screen: 'citySearchOverlay', mark: 'top' },
  { x: 0, y: 610, screen: 'profileCity', mark: 'mid' },
  { x: 255, y: 610, screen: 'cityList', mark: 'top' },
  { x: 535, y: 610, screen: 'citySearch', mark: 'top' },
  { x: 815, y: 610, screen: 'profileCityDone', mark: 'mid' },
  { x: 1095, y: 610, screen: 'industryList', mark: 'top' },
  { x: 1375, y: 610, screen: 'profileIndustry', mark: 'mid' },
  { x: 0, y: 1214, screen: 'profileBottomPicker', dimmed: true, mark: 'none' },
  { x: 255, y: 1214, screen: 'profileSchool', mark: 'bottom' },
  { x: 535, y: 1214, screen: 'profileBottomPicker', dimmed: true, mark: 'none' },
  { x: 815, y: 1214, screen: 'profileYear', mark: 'bottom' },
  { x: 1095, y: 1214, screen: 'profileBottomPicker', dimmed: true, mark: 'none' },
  { x: 1375, y: 1214, screen: 'profileYearDone', mark: 'mid' },
  { x: 0, y: 1826, screen: 'profileBottomPicker', dimmed: true, mark: 'none' },
  { x: 255, y: 1826, screen: 'profileMajor', mark: 'bottom' },
  { x: 535, y: 1826, screen: 'profileSwitchOff', mark: 'switch' },
  { x: 815, y: 1826, screen: 'profileToast', mark: 'none' },
] as const;

const salaryPhones = [
  { x: 0, y: 0, screen: 'salaryCalc', mark: 'mid' },
  { x: 300, y: 0, screen: 'cityList', mark: 'bottom' },
  { x: 600, y: 0, screen: 'citySearch', mark: 'bottom' },
  { x: 900, y: 0, screen: 'salaryCalcCity', mark: 'mid' },
  { x: 0, y: 610, screen: 'industryList', mark: 'mid' },
  { x: 300, y: 610, screen: 'salaryCalcCity', mark: 'mid' },
  { x: 600, y: 610, screen: 'cityList', mark: 'bottom' },
  { x: 900, y: 610, screen: 'citySearch', mark: 'bottom' },
  { x: 0, y: 1214, screen: 'cityOverlay', dimmed: true, mark: 'none' },
  { x: 300, y: 1214, screen: 'salaryCalcIndustry', mark: 'mid' },
  { x: 600, y: 1214, screen: 'profileSchool', mark: 'bottom' },
  { x: 900, y: 1214, screen: 'profileYearDone', mark: 'mid' },
  { x: 0, y: 1935, screen: 'profileBottomPicker', dimmed: true, mark: 'none' },
  { x: 300, y: 1935, screen: 'profileSwitchOff', mark: 'switch' },
  { x: 600, y: 1935, screen: 'industryTiles', mark: 'top' },
] as const;

const assessmentPhones = [
  { x: 0, y: 0, screen: 'assessmentHome', mark: 'mid' },
  { x: 320, y: 0, screen: 'assessmentHomeActive', mark: 'mid' },
  { x: 640, y: 0, screen: 'assessmentList', mark: 'bottom' },
  { x: 960, y: 0, screen: 'assessmentList', mark: 'bottom' },
  { x: 1280, y: 0, screen: 'assessmentArticle', mark: 'mid' },
  { x: 0, y: 665, screen: 'assessmentTiles', mark: 'mid' },
  { x: 320, y: 665, screen: 'assessmentTiles', mark: 'mid' },
  { x: 640, y: 665, screen: 'assessmentArticle', mark: 'bottom' },
  { x: 960, y: 665, screen: 'reportList', mark: 'bottom' },
  { x: 0, y: 1288, screen: 'reportList', mark: 'bottom' },
  { x: 320, y: 1288, screen: 'assessmentArticle', mark: 'mid' },
  { x: 640, y: 1288, screen: 'assessmentQuestion', mark: 'mid' },
  { x: 960, y: 1288, screen: 'assessmentQuestionOpen', mark: 'mid' },
  { x: 1280, y: 1288, screen: 'assessmentQuestion', mark: 'mid' },
] as const;

const statusConsultPhones = [
  { x: 0, y: 0, screen: 'industryTiles', mark: 'mid' },
  { x: 320, y: 0, screen: 'statusList', mark: 'mid' },
  { x: 640, y: 0, screen: 'assessmentArticle', mark: 'bottom' },
  { x: 960, y: 0, screen: 'assessmentQuestionOpen', mark: 'mid' },
  { x: 1280, y: 0, screen: 'assessmentQuestion', mark: 'mid' },
  { x: 320, y: 1400, screen: 'consultAbout', mark: 'bottom' },
  { x: 640, y: 1400, screen: 'consultCategories', mark: 'bottom' },
  { x: 960, y: 1400, screen: 'consultOnline', mark: 'bottom' },
  { x: 1280, y: 1400, screen: 'blankConsult', mark: 'none' },
] as const;

type CdstPhoneScreen =
  | (typeof profilePhones)[number]['screen']
  | (typeof salaryPhones)[number]['screen']
  | (typeof assessmentPhones)[number]['screen']
  | (typeof statusConsultPhones)[number]['screen'];

function CdstProductFlow({ left, top }: { left: number; top: number }) {
  const nodes = [
    { kind: 'rect', x: 0, y: 112, w: 120, h: 64, label: '用户' },
    { kind: 'rect', x: 246, y: 112, w: 120, h: 64, label: '职力测评', accent: true },
    { kind: 'rect', x: 0, y: 252, w: 120, h: 64, label: '薪资计算器' },
    { kind: 'rect', x: 246, y: 252, w: 120, h: 64, label: '方案分析' },
    { kind: 'para', x: 470, y: 86, w: 160, h: 92, label: '选择兴趣\n项目类型' },
    { kind: 'diamond', x: 745, y: 92, w: 132, h: 132, label: '是否做测试' },
    { kind: 'para', x: 745, y: 248, w: 160, h: 94, label: '选择感兴趣\n的职业话题' },
    { kind: 'rect', x: 1032, y: 112, w: 120, h: 64, label: '微信登录' },
    { kind: 'rect', x: 1243, y: 112, w: 120, h: 64, label: '开始测试', accent: true },
    { kind: 'rect', x: 1465, y: 112, w: 120, h: 64, label: '查看报告' },
    { kind: 'diamond', x: 1703, y: 92, w: 132, h: 132, label: '是否咨询' },
    { kind: 'rect', x: 1946, y: 112, w: 120, h: 64, label: '职业咨询', accent: true },
    { kind: 'rect', x: 1032, y: 252, w: 120, h: 64, label: '填资料' },
    { kind: 'rect', x: 1243, y: 252, w: 120, h: 64, label: '我的状态' },
    { kind: 'rect', x: 1465, y: 252, w: 120, h: 64, label: '微信登录' },
  ] as const;
  const arrows = [
    'M120 144H246', 'M120 284H246', 'M306 252V176', 'M366 144H470',
    'M630 132H745', 'M877 158H1032', 'M1152 144H1243', 'M1363 144H1465',
    'M1585 144H1703', 'M1835 158H1946', 'M811 224V248', 'M905 294H1032',
    'M1152 284H1243', 'M1363 284H1465', 'M1585 284H1770V224',
    'M1784 92V34H575V86', 'M1770 92V34H811',
  ];

  return (
    <svg className="abs cdst-product-flow" style={{ left, top }} viewBox="0 0 2080 382" aria-label="用户测试与咨询流程">
      <defs>
        <marker id="cdst-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0 0L10 5L0 10Z" />
        </marker>
      </defs>
      {arrows.map((path) => <path key={path} className="cdst-flow-line" d={path} />)}
      <text className="cdst-flow-decision-label" x="944" y="132">是</text>
      <text className="cdst-flow-decision-label" x="811" y="238">否</text>
      <text className="cdst-flow-decision-label" x="1814" y="132">是</text>
      <text className="cdst-flow-decision-label" x="1268" y="22">否</text>
      {nodes.map((node) => (
        <g key={`${node.label}-${node.x}-${node.y}`} className={`cdst-flow-node${'accent' in node && node.accent ? ' is-accent' : ''}`}>
          {node.kind === 'diamond' ? (
            <polygon points={`${node.x + node.w / 2},${node.y} ${node.x + node.w},${node.y + node.h / 2} ${node.x + node.w / 2},${node.y + node.h} ${node.x},${node.y + node.h / 2}`} />
          ) : node.kind === 'para' ? (
            <polygon points={`${node.x + 30},${node.y} ${node.x + node.w},${node.y} ${node.x + node.w - 30},${node.y + node.h} ${node.x},${node.y + node.h}`} />
          ) : (
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="4" />
          )}
          <text x={node.x + node.w / 2} y={node.y + node.h / 2}>
            {node.label.split('\n').map((line, index, arr) => (
              <tspan key={line} x={node.x + node.w / 2} dy={index === 0 ? `${(1 - arr.length) * 13}px` : '26px'}>{line}</tspan>
            ))}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CdstSalaryPrototype({ top }: { top: number }) {
  return (
    <div className="abs cdst-salary-prototype cdst-interaction-code" style={{ left: 0.5, top }}>
      <div className="interaction-title cdst-salary-copy" style={{ left: 280.5, top: 0.5 }}>
        <p>|&nbsp;&nbsp;&nbsp;&nbsp;薪资计算器&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <span>用户选择自己所期望的城市、期望的行业、毕业院校、最高学历，系统将估算出用户毕业后大</span>
        <span>概的工资水平，从而对自身能够有基本的判断，并且了解当地的五险一金情况。</span>
      </div>
      <CdstSalaryPhoneFlow left={292.5} top={248.5} />
      <img src={cdst.interactionSalaryArrowCity} className="abs cdst-interaction-asset" style={{ left: 1250.5, top: 420.5, width: 46, height: 201 }} alt="" />
      {/* Figma 9817:19275 — the text node's own frame, not the 9817:19273 group box */}
      <div className="cdst-interaction-note vertical" style={{ left: 1263, top: 437 }}>
        <span>计算该城市的开支</span>
      </div>
      <div className="cdst-interaction-note vertical" style={{ left: 244, top: 2257 }}>
        <span>当地五险一金明细参考</span>
      </div>
      <img src={cdst.interactionSalaryArrowDrag} className="abs cdst-interaction-asset" style={{ left: 573.5, top: 2366.5, width: 30, height: 100 }} alt="" />
      {/* Figma 9817:19279 */}
      <div className="cdst-interaction-note vertical" style={{ left: 577, top: 2374 }}>
        <span>向下拖动</span>
      </div>
      {/* Figma draws this plate white with dark text (矩形 5), but every label on a
          connector line is dark-plate/white-text here, so it uses .dark-label like the rest. */}
      <div className="cdst-interaction-note dark-label" style={{ left: 864.5, top: 2099.5, width: 256, height: 41 }}>
        计算出最低的薪资水平
      </div>
      <img src={cdst.interactionSalaryLabelEnter} className="abs cdst-interaction-asset" style={{ left: 814.5, top: 2700.5, width: 228, height: 44 }} alt="" />
      <div className="cdst-interaction-note" style={{ left: 829.5, top: 2709.5 }}>
        进入职力测评小程序
      </div>
      <div className="cdst-interaction-side-note" style={{ left: 1625.5, top: 1191.5 }}>
        <p>位置：右部（Home</p>
        <p>Indicator 上方）</p>
        <p>&nbsp;</p>
        <p>交互：页面隐出遮罩</p>
        <p>层，向左滑出，点击</p>
        <p>遮罩处操作列表关闭</p>
      </div>
      <div className="cdst-interaction-side-note" style={{ left: 306.5, top: 2684.5 }}>
        <p>位置：底部（Home</p>
        <p>Indicator 上方）</p>
        <p>&nbsp;</p>
        <p>交互：页面隐出遮罩</p>
        <p>层，底部弹出，可</p>
        <p>手动关闭</p>
      </div>
    </div>
  );
}

function CdstAssessmentPrototype({ top }: { top: number }) {
  return (
    <div className="abs cdst-assessment-prototype cdst-interaction-code" style={{ left: 0.5, top }}>
      <div className="interaction-title cdst-assessment-copy" style={{ left: 273.5, top: -0.5 }}>
        <p>|&nbsp;&nbsp;&nbsp;&nbsp;测评&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <span>了解自己适合的职业、职业竞争力上的优劣势以及自我内心的强度；了解职场社会，发现自我</span>
        <span>职业道路选择项。借力自测工具，不断开发自己的职业潜能，获得更好的职业生涯。</span>
      </div>
      <CdstAssessmentPhoneFlow left={199.5} top={238.5} />
      {/* Figma 9817:19260 renders this 37x96 and *then* rotates -90deg, landing on 96x37.
          The pre-rotation box goes here; centred rotation shifts it by ±29.5 to sit at 531,328. */}
      <img src={cdst.interactionAssessmentArrowSwipe} className="abs cdst-interaction-asset rotate-neg-90" style={{ left: 560.5, top: 298.5, width: 37, height: 96 }} alt="" />
      {/* Notes below sit at their own Figma text-node frames (9817:19261 / 19264 / 19269 / 10312:1998),
          not at the enclosing group boxes the arrows use. */}
      <div className="cdst-interaction-note" style={{ left: 534, top: 336 }}>左右滑动</div>
      <img src={cdst.interactionAssessmentArrowDownA} className="abs cdst-interaction-asset" style={{ left: 900.5, top: 419.5, width: 37, height: 98 }} alt="" />
      <div className="cdst-interaction-note vertical" style={{ left: 907, top: 429 }}><span>向下滑动</span></div>
      <img src={cdst.interactionAssessmentArrowDownB} className="abs cdst-interaction-asset" style={{ left: 1239.5, top: 421.5, width: 37, height: 98 }} alt="" />
      <div className="cdst-interaction-note vertical" style={{ left: 1247, top: 429 }}><span>向下滑动</span></div>
      <img src={cdst.interactionAssessmentArrowDownB} className="abs cdst-interaction-asset" style={{ left: 1239.5, top: 1078.5, width: 37, height: 98 }} alt="" />
      <div className="cdst-interaction-note vertical" style={{ left: 1247, top: 1086 }}><span>向下滑动</span></div>
      {/* Figma 10312:1999 — plate is 166×39, not the 256×41 default the class assumes */}
      <div className="cdst-interaction-note dark-label" style={{ left: 1172.5, top: 742.5, width: 166, height: 39 }}>进入测试页面</div>
      <div className="cdst-interaction-side-note" style={{ left: 1936.5, top: 1849 }}>
        <p className="large">点击单选按钮</p>
        <p>&nbsp;</p>
        <p>位置：底部</p>
        <p>&nbsp;</p>
        <p>交互：底部弹出</p>
      </div>
      <div className="cdst-interaction-note" style={{ left: 667.5, top: 847.5, opacity: .8 }}>交互：向下推拉</div>
    </div>
  );
}

function CdstProfileInteraction({ top }: { top: number }) {
  return (
    <div className="abs cdst-profile-interaction cdst-interaction-code" style={{ left: 0.5, top }}>
      <div className="interaction-title plain" style={{ left: 284.5, top: -0.5 }}>
        <p>|&nbsp;&nbsp;&nbsp;&nbsp;个人资料&nbsp;&nbsp;&nbsp;&nbsp;|</p>
      </div>
      <CdstProfilePrototype left={281.5} top={131.5} />
      {/* Figma 10312:2001 — plate is 101×33 */}
      <div className="cdst-interaction-note dark-label" style={{ left: 912.5, top: 2587.5, width: 101, height: 33 }}>滑动按钮</div>
      <div className="cdst-interaction-side-note" style={{ left: 308.5, top: 2565.5 }}>
        <p>位置：底部</p>
        <p>&nbsp;</p>
        <p>交互：页面隐出遮罩</p>
        <p>层，底部弹出，可滚</p>
        <p>动操作列表，点击取</p>
        <p>消关闭(以上与此类页</p>
        <p>面相同的交互一致）</p>
      </div>
      <div className="cdst-interaction-side-note" style={{ left: 1361.5, top: 2602.5 }}>
        <p>位置：页面中部偏上</p>
        <p>&nbsp;</p>
        <p>交互：5S后渐隐消失</p>
      </div>
    </div>
  );
}

function CdstStatusConsultPrototype({ top }: { top: number }) {
  return (
    <div className="abs cdst-status-consult-prototype cdst-interaction-code" style={{ left: 0.5, top }}>
      <div className="interaction-title cdst-status-copy" style={{ left: 287.5, top: -0.5 }}>
        <p>|&nbsp;&nbsp;&nbsp;&nbsp;状态&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <span>选择职业状态</span>
      </div>
      <CdstStatusConsultFlow left={235.5} top={169.5} />
      <img src={cdst.interactionStatusConsultVerticalBg} className="abs cdst-interaction-asset" style={{ left: 218.5, top: 1108.5, width: 38, height: 273 }} alt="" />
      {/* Figma 9817:19243 — text node, inset from the 9817:19241 backing bar the image above draws.
          Bar recoloured white -> #141414 so this reads white-on-dark like every other line label. */}
      <div className="cdst-interaction-note vertical" style={{ left: 226, top: 1130 }}>
        <span>咨询职前教育心理学导师</span>
      </div>
      <div className="interaction-title plain" style={{ left: 292.5, top: 1568.5 }}>
        <p>|&nbsp;&nbsp;&nbsp;&nbsp;咨询&nbsp;&nbsp;&nbsp;&nbsp;|</p>
      </div>
      <div className="cdst-interaction-side-note" style={{ left: 1989.5, top: 510.5 }}>
        <p>位置：页面中部</p>
        <p>&nbsp;</p>
        <p>交互：底部弹出,</p>
        <p>可手动关闭</p>
      </div>
      <div className="cdst-interaction-note" style={{ left: 1028.5, top: 127.5, opacity: .8 }}>交互：向下推拉</div>
    </div>
  );
}

function CdstProfilePrototype({ left, top }: { left: number; top: number }) {
  return (
    <div className="abs cdst-profile-prototype proto" style={{ left, top }}>
      <img src={cdst.interactionProfileFlow} className="abs cdst-interaction-asset" style={{ left: 0, top: 0, width: 1999, height: 2476 }} alt="" />
    </div>
  );
}

function CdstAssessmentPhoneFlow({ left, top }: { left: number; top: number }) {
  return (
    <div className="abs cdst-assessment-phone-flow proto" style={{ left, top }}>
      <img src={cdst.interactionAssessmentFlow} className="abs cdst-interaction-asset" style={{ left: 0, top: 0, width: 1696, height: 1844 }} alt="" />
      <img src={cdst.interactionAssessmentTopStrip} className="abs cdst-interaction-asset" style={{ left: 592, top: 337, width: 1020, height: 190 }} alt="" />
      <img src={cdst.interactionAssessmentSidePhone} className="abs cdst-interaction-asset" style={{ left: 1454, top: 0, width: 240, height: 486 }} alt="" />
    </div>
  );
}

function CdstSalaryPhoneFlow({ left, top }: { left: number; top: number }) {
  return (
    <div className="abs cdst-salary-phone-flow proto" style={{ left, top }}>
      <img src={cdst.interactionSalaryFlow} className="abs cdst-interaction-asset" style={{ left: 0, top: 0, width: 1311, height: 2422 }} alt="" />
      <img src={cdst.interactionSalaryExtraPhone} className="abs cdst-interaction-asset" style={{ left: 683, top: 1935, width: 240, height: 486 }} alt="" />
      <img src={cdst.interactionSalaryBottomStrip} className="abs cdst-interaction-asset" style={{ left: 463, top: 2389, width: 349, height: 82 }} alt="" />
    </div>
  );
}

function CdstStatusConsultFlow({ left, top }: { left: number; top: number }) {
  return (
    <div className="abs cdst-status-consult-flow proto" style={{ left, top }}>
      <img src={cdst.interactionStatusConsultFlow} className="abs cdst-interaction-asset" style={{ left: 0, top: 0, width: 1727, height: 1817 }} alt="" />
    </div>
  );
}

const marketChartBars = [
  { year: '2010', graduates: 631, rate: 3.4 },
  { year: '2011', graduates: 660, rate: 4.6 },
  { year: '2012', graduates: 680, rate: 3.0 },
  { year: '2013', graduates: 699, rate: 2.8 },
  { year: '2014', graduates: 727, rate: 4.0 },
  { year: '2015', graduates: 749, rate: 2.9 },
  { year: '2016', graduates: 765, rate: 2.1 },
  { year: '2017', graduates: 795, rate: 3.9 },
  { year: '2018', graduates: 820, rate: 3.1 },
] as const;

function CdstMarketChart({ left, top }: { left: number; top: number }) {
  const minGraduates = 600;
  const maxGraduates = 900;
  const points = marketChartBars.map((item, index) => {
    const x = 98 + index * 78;
    const y = 382 - ((item.rate - 1.5) / 3.5) * 258;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="abs cdst-market-chart" style={{ left, top }}>
      <div className="cdst-market-title">图表4：2010-2018年全国高校毕业生人数变化情况（单位：万人，%）</div>
      <div className="cdst-market-plot">
        <div className="cdst-market-y-left">
          {[900, 800, 700, 600].map((value) => <span key={value}>{value}</span>)}
        </div>
        <div className="cdst-market-y-right">
          {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5].map((value) => <span key={value}>{value}</span>)}
        </div>
        <svg className="cdst-market-grid" viewBox="0 0 760 420" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6].map((line) => <path key={line} d={`M70 ${70 + line * 45}H715`} />)}
          <polyline points={points} />
          {marketChartBars.map((item, index) => {
            const x = 98 + index * 78;
            const y = 382 - ((item.rate - 1.5) / 3.5) * 258;
            return <circle key={item.year} cx={x} cy={y} r="6" />;
          })}
        </svg>
        <div className="cdst-market-bars">
          {marketChartBars.map((item, index) => {
            const height = ((item.graduates - minGraduates) / (maxGraduates - minGraduates)) * 250 + 52;
            return (
              <div className="cdst-market-bar-slot" key={item.year}>
                <span className="cdst-market-bar-value" style={{ bottom: height + 8 }}>{item.graduates}</span>
                <i style={{ height }} />
                <b>{item.year}</b>
                <em className="cdst-market-rate" style={{ bottom: 342 - ((item.rate - 1.5) / 3.5) * 258 }}>{item.rate}%</em>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cdst-market-legend">
        <span><i />全国高校毕业生(万人)</span>
        <span><b />同比增长（%）</span>
      </div>
    </div>
  );
}

function CdstPhone({
  x,
  y,
  screen,
  mark = 'mid',
  dimmed = false,
}: {
  x: number;
  y: number;
  screen: CdstPhoneScreen;
  mark?: 'top' | 'mid' | 'lower' | 'bottom' | 'switch' | 'none';
  dimmed?: boolean;
}) {
  return (
    <div className="cdst-phone abs" style={{ left: x, top: y }}>
      <div className="cdst-phone-shell">
        <div className="cdst-phone-notch" />
        <div className="cdst-phone-status">
          <span>9:00</span>
          <span>•••</span>
        </div>
        <div className="cdst-phone-screen">
          <PhoneScreen type={screen} />
          {mark !== 'none' ? <i className={`cdst-screen-callout is-${mark}`} /> : null}
          {dimmed ? <div className="cdst-phone-dim" /> : null}
        </div>
      </div>
    </div>
  );
}

function PhoneScreen({ type }: { type: CdstPhoneScreen }) {
  if (type === 'salaryCalc' || type === 'salaryCalcCity' || type === 'salaryCalcIndustry') {
    return (
      <>
        <PhoneHeader title="薪资计算器" />
        <div className="cdst-salary-form">
          <SalaryChoice icon="city" label="期望城市" value={type === 'salaryCalc' ? '请选择期望城市' : '北京'} />
          <SalaryChoice icon="industry" label="期望行业" value={type === 'salaryCalcIndustry' ? '制造' : '请选择期望行业'} />
          <SalaryChoice icon="school" label="毕业院校" value="请选择毕业院校" />
          <SalaryChoice icon="degree" label="最高学历" value="请选择最高学历" />
          <div className="cdst-salary-metrics">
            <span><b>月度住房开销</b><em>￥ 368</em></span>
            <span><b>五险一金参考</b><em>￥ 2350</em></span>
          </div>
          <button type="button">开始计算</button>
          <small>此处显示为市场平均水平</small>
        </div>
      </>
    );
  }

  if (type === 'assessmentHome' || type === 'assessmentHomeActive') {
    return (
      <>
        <PhoneHeader title="职力测评" />
        <div className="cdst-assessment-home">
          <div className="cdst-mini-hero">发现你的职业兴趣</div>
          <div className="cdst-phone-tabs"><span>做测试</span><span>看报告</span><span>填资料</span><span>去咨询</span></div>
          <b>最新上线</b>
          <div className="cdst-card-row"><i /><i /><i /></div>
          <b>热门测试</b>
          <div className="cdst-card-list"><span /><span /></div>
          {type === 'assessmentHomeActive' ? <div className="cdst-phone-dim subtle" /> : null}
        </div>
      </>
    );
  }

  if (type === 'assessmentList') {
    return (
      <>
        <PhoneHeader title="职力测评" />
        <div className="cdst-report-list">
          {['你适合哪一种工作方式？', '你的职场脑洞有多大？', '你是社交型人才吗？', '你会为了兴趣换方向吗？', '职场小白的你适合什么？'].map((item) => (
            <div className="cdst-report-row" key={item}><i /><span>{item}</span></div>
          ))}
        </div>
      </>
    );
  }

  if (type === 'assessmentArticle') {
    return (
      <>
        <PhoneHeader title="职业详情" />
        <div className="cdst-article-screen">
          <div className="cdst-article-cover" />
          <h4>什么职业和你的气质更配？</h4>
          <button type="button">开始测试</button>
          <p>职业发展、能力模型和行业信息，帮助用户理解不同方向的真实要求。</p>
        </div>
      </>
    );
  }

  if (type === 'assessmentQuestion' || type === 'assessmentQuestionOpen') {
    return (
      <>
        <PhoneHeader title="职业测试" />
        <div className="cdst-question-screen">
          <h4>最近一题</h4>
          <div className="cdst-question-panel">
            {['非常不符合', '不确定', '比较符合', '重要'].map((item, index) => (
              <span key={item} className={index === 3 ? 'active' : ''}>{item}</span>
            ))}
          </div>
          {type === 'assessmentQuestionOpen' ? <div className="cdst-test-modal"><b>确认提交结果</b><button type="button">确定</button></div> : null}
        </div>
      </>
    );
  }

  if (type === 'assessmentTiles') {
    return (
      <>
        <PhoneHeader title="职业选择" />
        <div className="cdst-tile-list compact">
          {['选择期望工作的行业', '选择期望职业状态', '选择测评方向', '进入咨询'].map((item) => (
            <div className="cdst-blue-tile" key={item}><span>{item}</span><i /></div>
          ))}
        </div>
      </>
    );
  }

  if (type === 'reportList') {
    return (
      <>
        <PhoneHeader title="全部报告" />
        <div className="cdst-report-list">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="cdst-report-row" key={item}><i /><span>职场竞争力报告 {item}</span></div>
          ))}
        </div>
      </>
    );
  }

  if (type === 'statusList') {
    return (
      <>
        <PhoneHeader title="选择职业状态" />
        <div className="cdst-tile-list compact">
          {['暂时没想好，什么都看看', '我有想做的，但还不确定', '我很清楚自己要什么', '已经工作了，但不太满意'].map((item) => (
            <div className="cdst-blue-tile" key={item}><span>{item}</span><i /></div>
          ))}
        </div>
      </>
    );
  }

  if (type === 'consultAbout' || type === 'consultCategories' || type === 'consultOnline' || type === 'blankConsult') {
    return (
      <>
        <PhoneHeader title={type === 'blankConsult' ? '职力咨询' : '职业咨询'} />
        {type === 'blankConsult' ? (
          <div className="cdst-blank-screen" />
        ) : type === 'consultAbout' ? (
          <div className="cdst-consult-copy">
            <h4>关于我们</h4>
            <p>提供职业规划、行业认知、求职准备和职场适应相关咨询服务。</p>
            <p>通过线上问答与导师资源，帮助用户获得可执行建议。</p>
          </div>
        ) : (
          <div className="cdst-report-list">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="cdst-report-row" key={item}><i /><span>{type === 'consultOnline' ? '在线咨询问题' : '浏览类别'} {item}</span></div>
            ))}
          </div>
        )}
      </>
    );
  }

  if (type === 'industryTiles') {
    return (
      <>
        <PhoneHeader title="选择您期望工作的行业" />
        <div className="cdst-tile-list">
          {['互联网', '房地产', '服务业', '金融'].map((item) => (
            <div className="cdst-blue-tile" key={item}>
              <span>{item}</span>
              <i />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (type === 'schoolRecommend') {
    return (
      <>
        <PhoneHeader title="根据您的学校查看" />
        <div className="cdst-school-tabs"><span>自测</span><span>推荐</span><span>关注</span></div>
        {[1, 2, 3, 4].map((item) => (
          <div className="cdst-school-row" key={item}>
            <b />
            <div><span /><span /></div>
          </div>
        ))}
      </>
    );
  }

  if (type === 'cityList' || type === 'cityOverlay' || type === 'citySearch' || type === 'citySearchOverlay') {
    return (
      <>
        <PhoneHeader title="期望城市" />
        {type.includes('Search') ? <div className="cdst-phone-search">北京</div> : null}
        <SimpleList items={['北京', '上海', '天津', '重庆', '黑龙江', '吉林', '辽宁', '内蒙古', '河北', '新疆', '甘肃', '青海', '陕西', '宁夏']} />
        {type.includes('Overlay') ? <div className="cdst-left-overlay" /> : null}
      </>
    );
  }

  if (type === 'industryList') {
    return (
      <>
        <PhoneHeader title="期望行业" />
        <SimpleList items={['制造', '化工', '医药', '快消', '房地产', '服饰', '汽车', '物流', '金融', '高科技']} />
      </>
    );
  }

  return (
    <>
      <PhoneHeader title="个人资料" />
      <ProfileRows
        city={type === 'profileCity' || type === 'profileCityDone' ? '北京' : '点击选择期望工作地点'}
        industry={type === 'profileIndustry' ? '制造' : '点击选择期望工作行业'}
        school={type === 'profileSchool' ? '清华大学' : '点击选择毕业院校'}
        degree={type === 'profileYear' || type === 'profileYearDone' || type === 'profileSwitchOff' || type === 'profileToast' ? '本科' : '点击选择最高学历'}
        year={type === 'profileYearDone' || type === 'profileSwitchOff' || type === 'profileToast' ? '2015' : '点击选择入学年份'}
        major={type === 'profileMajor' || type === 'profileSwitchOff' || type === 'profileToast' ? '输入专业' : '点击输入专业'}
        switchOn={type === 'profileSwitchOff' || type === 'profileToast'}
      />
      {type === 'profileBottomPicker' ? <BottomPicker /> : null}
      {type === 'profileToast' ? <div className="cdst-toast">保存成功</div> : null}
    </>
  );
}

function PhoneHeader({ title }: { title: string }) {
  return (
    <div className="cdst-phone-header">
      <span className="cdst-back">‹</span>
      <span>{title}</span>
      <span className="cdst-more">••</span>
    </div>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <div className="cdst-simple-list">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

function ProfileRows({
  city,
  industry,
  school,
  degree,
  year,
  major,
  switchOn,
}: {
  city: string;
  industry: string;
  school: string;
  degree: string;
  year: string;
  major: string;
  switchOn: boolean;
}) {
  return (
    <div className="cdst-profile-form">
      <FormSection title="选择您期望工作的行业">
        <FormRow label="期望城市" value={city} />
        <FormRow label="期望行业" value={industry} />
      </FormSection>
      <FormSection title="选择您的学历信息">
        <FormRow label="毕业院校" value={school} />
        <FormRow label="最高学历" value={degree} />
        <FormRow label="入学年份" value={year} />
        <FormRow label="专业" value={major} />
      </FormSection>
      <FormSection title="求职状态">
        <FormRow label="正在找工作" value={switchOn ? '' : '点击选择'} switchOn={switchOn} />
      </FormSection>
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="cdst-form-section">
      <b>{title}</b>
      {children}
    </div>
  );
}

function FormRow({ label, value, switchOn }: { label: string; value: string; switchOn?: boolean }) {
  return (
    <div className="cdst-form-row">
      <span>{label}</span>
      {switchOn ? <i className="cdst-switch" /> : <em>{value}</em>}
    </div>
  );
}

function BottomPicker() {
  return (
    <div className="cdst-bottom-picker">
      <div><span>取消</span><span>确定</span></div>
      {['硕士', '本科', '博士'].map((item) => <b key={item}>{item}</b>)}
    </div>
  );
}

/* section title — left 199.5, white; gold-teal accent bar above */
function CdstTitle({ y, title, en, w, tone }: { y: number; title: string; en: string; w?: number; tone?: 'black' }) {
  return (
    <div className={`cdst-section-title${tone === 'black' ? ' black' : ''}`} style={{ top: y, left: 199.5, width: w }}>
      <strong>{title}</strong>
      <small>{en}</small>
      <i />
    </div>
  );
}

/* competitor row — icon plate (with name beneath) on the left, body paragraph to the right */
function Comp({ base, top, image, name, nameX, body, bodyTop }: {
  base: number; top: number; image: string;
  name: string; nameX: number; body: string[]; bodyTop: number;
}) {
  return (
    <>
      <div className="comp-plate abs" style={{ left: 234.5, top: base + top }}>
        <img className="comp-bg" src={image} alt="" />
        <span className="comp-name" style={{ left: nameX }}>{name}</span>
      </div>
      <div className="comp-body abs" style={{ left: 234.5 + 280, top: base + top + bodyTop }}>
        {body.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </>
  );
}

/* user-portrait card — white rounded card with avatar ring at left */
function Persona({ base, top, portrait, lines, textTop }: {
  base: number; top: number; portrait: string; lines: string[]; textTop: number;
}) {
  return (
    <div className="persona-card abs" style={{ left: 252, top: base + top }}>
      <div className="persona-body" />
      <div className="avatar-ring"><img className="portrait" src={portrait} alt="" /></div>
      <div className="persona-text" style={{ top: textTop }}>
        {lines.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </div>
  );
}

/* interaction annotation — plain text label (white default), optional vertical / black / dim / multiline */
function Anno({ x, y, text, lines, vertical = false, black = false, dim = false, multiline = false, firstBig = false, hidden = false, bar }: {
  x: number; y: number; text?: string; lines?: string[];
  vertical?: boolean; black?: boolean; dim?: boolean; multiline?: boolean; firstBig?: boolean; hidden?: boolean;
  bar?: { dir: 'v' | 'h'; len: number; at: number };
}) {
  if (hidden) return null;
  const cls = ['cdst-anno', vertical && 'vertical', black && 'black', dim && 'dim', firstBig && 'first-big'].filter(Boolean).join(' ');
  return (
    <div className={cls} style={{ left: x, top: y }}>
      {bar && <i className="anno-bar" style={bar.dir === 'v'
        ? { left: '50%', top: bar.at, width: 2, height: bar.len }
        : { top: '50%', left: bar.at, height: 2, width: bar.len }} />}
      {multiline && lines ? lines.map((l, i) => <p key={i}>{l}</p>) : text}
    </div>
  );
}

/* ─── MAD assets (我为球狂 / 原型作品, Figma 9817:19381) ─── */
const mad = {
  coverBg:        publicUrl('/images/xingji/mad/cover-bg.webp'),
  coverBadgeClean: publicUrl('/images/xingji/mad/cover-badge-transparent.webp'),
  analyst:        publicUrl('/images/xingji/mad/analyst.webp'),
  iconBg:         publicUrl('/images/xingji/mad/icon-bg.webp'),
  iconMark:       publicUrl('/images/xingji/mad/icon-mark.webp'),
  iconBig:        publicUrl('/images/xingji/mad/icon-big.webp'),
  guideCard1:     publicUrl('/images/xingji/mad/guide-card-1.webp'),
  guideCard2:     publicUrl('/images/xingji/mad/guide-card-2.webp'),
  guideCard3:     publicUrl('/images/xingji/mad/guide-card-3.webp'),
  guideCard4:     publicUrl('/images/xingji/mad/guide-card-4.webp'),
  productBg:      publicUrl('/images/xingji/mad/product-bg.webp'),
  productPhoneClean: publicUrl('/images/xingji/mad/product-phone-transparent.webp'),
  recommendGlow:  publicUrl('/images/xingji/mad/recommend-bg.webp'),
  recommendScreen: publicUrl('/images/xingji/mad/recommend-screen.webp'),
  recommendStatusBar: publicUrl('/images/xingji/mad/recommend-statusbar.webp'),
  recommendPhone: publicUrl('/images/xingji/mad/recommend-phone-transparent.webp'),
  mePhones:       publicUrl('/images/xingji/mad/me-phones.webp'),
  rechargeBg:     publicUrl('/images/xingji/mad/recharge-bg.webp'),
  rechargePhone:  publicUrl('/images/xingji/mad/recharge-phone-transparent.webp'),
  dialogPhone:    publicUrl('/images/xingji/mad/dialog-phone.webp'),
  structChart:    publicUrl('/images/xingji/mad/structure-chart.webp'),
  flowChart:      publicUrl('/images/xingji/mad/flow-chart.webp'),
  wireframe:      publicUrl('/images/xingji/mad/wireframe-chart.webp'),
  endBg:          publicUrl('/images/xingji/mad/end-bg.webp'),
  endLaptopClean: publicUrl('/images/xingji/mad/end-laptop-transparent.webp'),
  endIcons:       publicUrl('/images/xingji/mad/end-icons.webp'),
};

/* MAD section title — 128px Inter, #f9f7f2 @ 50% */
function MadTitle({ x, y, w, align, tracking, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; tracking?: number; children: React.ReactNode }) {
  return <div className="mad-sec-title abs" style={{ left: x, top: y, width: w, textAlign: align, letterSpacing: tracking }}>{children}</div>;
}

/* MAD section sub-label — 96px Inter, #f9f7f2 @ 50% */
function MadLabel({ x, y, w, align, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; children: React.ReactNode }) {
  return <div className="mad-sec-label abs" style={{ left: x, top: y, width: w, textAlign: align }}>{children}</div>;
}

function SalaryChoice({ icon, label, value }: { icon: 'city' | 'industry' | 'school' | 'degree'; label: string; value: string }) {
  return (
    <div className="cdst-salary-choice">
      <i className={`salary-icon ${icon}`} />
      <span>{label}</span>
      <em>{value}</em>
    </div>
  );
}

type MadDividerDot = number | [number, number] | { x: number; y?: number; tone?: 'gold' | 'light' };

/* The rule and its dots sit 12px below their Figma y. Kept as one constant so the
   call sites can stay on the raw Figma coordinates. */
const MAD_DIVIDER_NUDGE_Y = 12;

function MadDivider({ x, y, w, dots }: { x: number; y: number; w: number; dots: MadDividerDot[] }) {
  return (
    <>
      <span className="mad-divider-line abs" style={{ left: x, top: y + MAD_DIVIDER_NUDGE_Y, width: w }} />
      {dots.map((dot, index) => {
        const left = Array.isArray(dot) ? dot[0] : typeof dot === 'number' ? dot : dot.x;
        const top = (Array.isArray(dot) ? dot[1] : typeof dot === 'number' ? y - 23 : dot.y ?? y - 23) + MAD_DIVIDER_NUDGE_Y;
        const tone = typeof dot === 'object' && !Array.isArray(dot) ? dot.tone : undefined;
        return <span key={`${left}-${top}-${index}`} className={`mad-divider-dot abs${tone === 'light' ? ' is-light' : ''}`} style={{ left, top }} />;
      })}
    </>
  );
}

function MadSplitDivider({ y, segments }: { y: number; segments: Array<{ x: number; w: number }> }) {
  return (
    <>
      {segments.map(({ x, w }, index) => (
        <span key={`${x}-${w}-${index}`} className="mad-divider-line abs" style={{ left: x, top: y, width: w }} />
      ))}
    </>
  );
}

/* one concise-guide perspective card: skewed plate + screenshot + nav-label text */
function MadGuideCard({ x, y, card, shot, shotStyle, num, numPos, label, labelPos, sign }: {
  x: number; y: number; card: string; shot: string;
  shotStyle: { left: number; top: number; width: number; height: number };
  num: string; numPos: { left: number; top: number };
  label: string; labelPos: { left: number; top: number; w: number };
  sign: { inX: number; inY: number; upX: number; upY: number };
}) {
  return (
    <div className="mad-guide-card abs" style={{ left: x, top: y }}>
      <img src={card} className="abs" style={{ left: 0, top: 0, width: 626, height: 1432 }} />
      <img src={shot} className="abs mad-guide-shot" style={shotStyle} />
      <span className="mad-guide-num abs" style={numPos}>{num}</span>
      <span className="mad-guide-label abs" style={{ left: labelPos.left, top: labelPos.top, width: labelPos.w }}>{label}</span>
      <span className="mad-guide-sign in abs" style={{ left: sign.inX, top: sign.inY }}>SIGN IN</span>
      <span className="mad-guide-sign up abs" style={{ left: sign.upX, top: sign.upY }}>SIGN UP</span>
    </div>
  );
}

function MadCase() {
  /* stage Y base per Figma section (frame 9434:2339) */
  const S = {
    cover: 0,
    analyst: 2555,
    icon: 3788,
    guide: 6004,
    product: 8605,
    recommend: 10583,
    me: 14467,
    recharge: 17286,
    dialog: 20051,
    charts: 23696,
    end: 31852,
  };
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = root?.querySelector<HTMLElement>('.mad-stage');
    if (!root || !stage || typeof IntersectionObserver === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      root.classList.add('mad-motion-disabled');
      return;
    }

    root.classList.add('mad-motion-ready');

    const starts = Object.values(S).sort((a, b) => a - b);
    const groups = new Map<number, HTMLElement[]>();
    const directItems = Array.from(stage.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    directItems.forEach((item, domIndex) => {
      const top = Number.parseFloat(item.style.top || '0') || item.offsetTop || 0;
      const left = Number.parseFloat(item.style.left || '0') || item.offsetLeft || 0;
      const group = starts.reduce((active, start, index) => (top >= start ? index : active), 0);
      const finalOpacity = Number.parseFloat(window.getComputedStyle(item).opacity || '1') || 1;

      item.dataset.madMotionGroup = String(group);
      item.dataset.madMotionDomIndex = String(domIndex);
      item.dataset.madMotionTop = String(top);
      item.dataset.madMotionLeft = String(left);
      item.dataset.madMotionOpacity = String(finalOpacity);

      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(item);
    });

    const textSelector = '.mad-sec-title, .mad-sec-label, .mad-cover-badge, .mad-cover-intro';
    const lineSelector = '.mad-divider-line, .mad-leader-ln';
    const pointSelector = '.mad-divider-dot, .mad-leader-sq';
    const frameSelector = '.mad-cover-frame, .mad-dialog-titleplate, .mad-end-badge';

    const setInitialState = (items: HTMLElement[]) => {
      const images = items.filter((item) => item.tagName === 'IMG');
      const texts = items.filter((item) => item.matches(textSelector));
      const lines = items.filter((item) => item.matches(lineSelector));
      const points = items.filter((item) => item.matches(pointSelector));
      const frames = items.filter((item) => item.matches(frameSelector));
      const handled = new Set<HTMLElement>([...images, ...texts, ...lines, ...points, ...frames]);
      const rest = items.filter((item) => !handled.has(item));

      if (images.length) gsap.set(images, { opacity: 0, y: 44, scale: 0.985, filter: 'blur(8px)', transformOrigin: '50% 50%' });
      if (texts.length) gsap.set(texts, { opacity: 0, y: 34, filter: 'blur(6px)' });
      if (lines.length) gsap.set(lines, { opacity: 0, scaleX: 0, transformOrigin: 'left center' });
      if (points.length) gsap.set(points, { opacity: 0, scale: 0.28, transformOrigin: '50% 50%' });
      if (frames.length) gsap.set(frames, { opacity: 0, scaleX: 0.92, transformOrigin: 'left center' });
      if (rest.length) gsap.set(rest, { opacity: 0, y: 22, filter: 'blur(4px)' });
    };

    groups.forEach((items) => setInitialState(items));

    const revealGroup = (group: number) => {
      const items = groups.get(group);
      if (!items?.length || stage.dataset[`madGroup${group}`] === 'shown') return;
      stage.dataset[`madGroup${group}`] = 'shown';

      const ordered = [...items].sort((a, b) => {
        const topA = Number(a.dataset.madMotionTop || 0);
        const topB = Number(b.dataset.madMotionTop || 0);
        if (Math.abs(topA - topB) > 18) return topA - topB;
        const leftA = Number(a.dataset.madMotionLeft || 0);
        const leftB = Number(b.dataset.madMotionLeft || 0);
        if (Math.abs(leftA - leftB) > 18) return leftA - leftB;
        return Number(a.dataset.madMotionDomIndex || 0) - Number(b.dataset.madMotionDomIndex || 0);
      });

      const images = ordered.filter((item) => item.tagName === 'IMG');
      const texts = ordered.filter((item) => item.matches(textSelector));
      const frames = ordered.filter((item) => item.matches(frameSelector));
      const lines = ordered.filter((item) => item.matches(lineSelector));
      const points = ordered.filter((item) => item.matches(pointSelector));
      const handled = new Set<HTMLElement>([...images, ...texts, ...frames, ...lines, ...points]);
      const rest = ordered.filter((item) => !handled.has(item));
      const targetOpacity = (item: HTMLElement) => Number(item.dataset.madMotionOpacity || 1);
      const clear = (targets: HTMLElement[]) => {
        const liveTargets = targets.filter((target) => target.isConnected);
        if (liveTargets.length) gsap.set(liveTargets, { clearProps: 'opacity,transform,filter,transformOrigin' });
      };

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (images.length) {
        tl.to(images, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.72,
          stagger: 0.055,
          onComplete: () => clear(images),
        }, 0);
      }
      if (frames.length) {
        tl.to(frames, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          scaleX: 1,
          duration: 0.5,
          stagger: 0.045,
          onComplete: () => clear(frames),
        }, 0.1);
      }
      if (texts.length) {
        tl.to(texts, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          y: 0,
          filter: 'blur(0px)',
          duration: 0.55,
          stagger: 0.045,
          onComplete: () => clear(texts),
        }, 0.18);
      }
      if (rest.length) {
        tl.to(rest, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          stagger: 0.04,
          onComplete: () => clear(rest),
        }, 0.26);
      }
      if (lines.length) {
        tl.to(lines, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          scaleX: 1,
          duration: 0.62,
          stagger: 0.055,
          ease: 'power2.out',
          onComplete: () => clear(lines),
        }, 0.36);
      }
      if (points.length) {
        tl.to(points, {
          opacity: (index, target) => targetOpacity(target as HTMLElement),
          scale: 1,
          duration: 0.38,
          stagger: 0.055,
          ease: 'back.out(2.2)',
          onComplete: () => clear(points),
        }, 0.52);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = Number((entry.target as HTMLElement).dataset.madMotionGroup || 0);
          revealGroup(group);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
    );

    directItems.forEach((item) => {
      observer.observe(item);
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        window.requestAnimationFrame(() => revealGroup(Number(item.dataset.madMotionGroup || 0)));
      }
    });

    return () => {
      observer.disconnect();
      gsap.killTweensOf(directItems);
    };
  }, []);

  return (
    <div ref={rootRef} className="star-case-page mad-page">
      <FigmaScaleStage width={2480} height={34946} className="mad-stage" fitToViewport viewportInset={0}>

        {/* ── 组 10 cover (y0 h2318) ── */}
        <img src={mad.coverBg} className="abs mad-exact-img" style={{ left: 0, top: S.cover, width: 2480, height: 1655 }} />
        <img src={mad.coverBadgeClean} className="abs mad-exact-img" style={{ left: 1994, top: S.cover + 1187, width: 286, height: 351 }} />
        <div className="mad-cover-frame mad-cover-badge abs" style={{ left: 60, top: S.cover + 49, width: 596, height: 207 }}>My Production<br />我的作品</div>
        <div className="mad-cover-intro abs" style={{ left: 219, top: S.cover + 1763, width: 2043 }}>通过调查了解，许多球友对于比赛结果推断不准，导致足球博彩逢赌必输，即使他们能询问一些看球经验很丰富的老球迷，甚至向专业的分析师请教，但是由于不同的比赛有不同的体制，所以很多情况下是凭借运气来购买足球彩票，运气不好就预测不准，造成了很大的经济损失以及浪费了大量的时间精力，所以，对于一些没有太多时间来分析球赛的球友来说，特别是经验水平不足的新人，这款应用是为了广大球友设计的。</div>

        {/* ── 组 13 analyst (y2555 h1312) ── */}
        <img src={mad.analyst} className="abs img-cover" style={{ left: 498, top: S.analyst + 196, width: 1489, height: 1116 }} />
        <MadTitle x={497} y={S.analyst + 106} w={1501} align="center">Your Personal Analyst<br />你的私人分析师</MadTitle>

        {/* ── 组 12 icon design (y3788 h2200) ── */}
        <img src={mad.iconBg} className="abs img-cover mad-icon-bg" style={{ left: 0, top: S.icon, width: 2480, height: 2200 }} />
        <img src={mad.iconBig} className="abs img-cover" style={{ left: 384, top: S.icon + 953, width: 678, height: 829 }} />
        <img src={mad.iconMark} className="abs img-cover" style={{ left: 1470, top: S.icon + 957, width: 833, height: 833 }} />
        <MadTitle x={252} y={S.icon + 409} w={833}>Icon Design<br />图标设计</MadTitle>

        {/* ── 组 5 concise guide — 4 perspective cards (y6004 h2146) ── */}
        <img src={mad.guideCard1} className="abs img-cover mad-guide-export" style={{ left: -5, top: S.guide + 716, width: 623, height: 1430 }} />
        <img src={mad.guideCard2} className="abs img-cover mad-guide-export" style={{ left: 616, top: S.guide + 750, width: 623, height: 1381 }} />
        <img src={mad.guideCard3} className="abs img-cover mad-guide-export" style={{ left: 1236, top: S.guide + 750, width: 627, height: 1384 }} />
        <img src={mad.guideCard4} className="abs img-cover mad-guide-export" style={{ left: 1861, top: S.guide + 750, width: 619, height: 1391 }} />
        <MadTitle x={290} y={S.guide} w={1026}>Concise Guide<br />简介引导</MadTitle>

        {/* ── 组 14 product detail (y8605 h1662) ── */}
        <img src={mad.productBg} className="abs mad-exact-img" style={{ left: 0, top: S.product + 426, width: 2480, height: 1237 }} />
        <img src={mad.productPhoneClean} className="abs mad-exact-img mad-phone" style={{ left: 1119, top: S.product + 611, width: 592, height: 916 }} />
        <MadTitle x={32} y={S.product + 2} w={2480} align="center">Product Detail<br />产品细节</MadTitle>

        {/* ── 组 15 recommend (y10583 h3487) ── */}
        <img src={mad.recommendGlow} className="abs mad-exact-img mad-rec-glow" style={{ left: 1101, top: S.recommend + 313, width: 1379, height: 3060 }} />
        {/* Figma 10333:3853 "Group 2359" — three stacked layers. The screen sits behind a
            device frame whose screen area is a cut-out; only the frame was here before,
            sized to the screen's box, so the phone rendered as a solid black slab. */}
        <img src={mad.recommendScreen} className="abs mad-exact-img" style={{ left: 1327, top: S.recommend + 1106, width: 772.6, height: 2331.9 }} />
        <img src={mad.recommendStatusBar} className="abs mad-exact-img" style={{ left: 1300.3, top: S.recommend + 1123.5, width: 768.9, height: 135.7 }} />
        <img src={mad.recommendPhone} className="abs mad-exact-img mad-phone" style={{ left: 1300.3, top: S.recommend + 1044.4, width: 904.6, height: 2442.3 }} />
        <MadDivider
          x={573}
          y={S.recommend + 178}
          w={1707}
          dots={[
            { x: 554, y: S.recommend + 155, tone: 'gold' },
            { x: 1406, y: S.recommend + 155, tone: 'light' },
            { x: 2258, y: S.recommend + 155, tone: 'light' },
          ]}
        />
        <MadTitle x={200} y={S.recommend + 39} w={854}>Recommend<br />推荐</MadTitle>
        <MadLabel x={207} y={S.recommend + 786} w={558}>Forecast<br />预测赛果</MadLabel>
        <MadLabel x={207} y={S.recommend + 1444} w={421}>Live<br />实时比赛</MadLabel>

        {/* ── 组 16 me (y14467 h2345) ── */}
        <img src={mad.mePhones} className="abs mad-me-phones" style={{ left: 633, top: S.me + 413, width: 1670, height: 1768 }} />
        <MadDivider
          x={574}
          y={S.me + 157}
          w={1706}
          dots={[
            { x: 555, y: S.me + 134, tone: 'light' },
            { x: 1406, y: S.me + 134, tone: 'gold' },
            { x: 2258, y: S.me + 134, tone: 'light' },
          ]}
        />
        {/* leader-line connectors: gold square node + thin line per label */}
        <span className="mad-leader-sq abs" style={{ left: 1398, top: S.me + 519, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 1424, top: S.me + 534, width: 347 }} />
        <span className="mad-leader-sq abs" style={{ left: 935, top: S.me + 952, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 641, top: S.me + 967, width: 302 }} />
        <span className="mad-leader-sq abs" style={{ left: 965, top: S.me + 1683, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 645, top: S.me + 1698, width: 328 }} />
        <span className="mad-leader-sq abs" style={{ left: 1474, top: S.me + 2056, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 1500, top: S.me + 2071, width: 275 }} />
        <MadTitle x={204} y={S.me} w={269}>Me<br />我的</MadTitle>
        <MadLabel x={1616} y={S.me + 437} w={638} align="right">Classify<br />分类</MadLabel>
        <MadLabel x={204} y={S.me + 867} w={421}>Record<br />充值记录</MadLabel>
        <MadLabel x={209} y={S.me + 1587} w={527}>Invitation<br />邀请码</MadLabel>
        <MadLabel x={1616} y={S.me + 1988} w={638} align="right">Unlock<br />已解锁的比赛</MadLabel>

        {/* ── 组 18 recharge (y17286 h2147) ── */}
        <img src={mad.rechargeBg} className="abs img-cover" style={{ left: 45, top: S.recharge + 421, width: 2420, height: 1726 }} />
        <img src={mad.rechargePhone} className="abs img-cover mad-phone" style={{ left: 298, top: S.recharge + 519, width: 1952, height: 1391 }} />
        <MadDivider
          x={573}
          y={S.recharge + 154}
          w={1707}
          dots={[
            { x: 554, y: S.recharge + 131, tone: 'light' },
            { x: 1405, y: S.recharge + 131, tone: 'light' },
            { x: 2258, y: S.recharge + 131, tone: 'gold' },
          ]}
        />
        <MadTitle x={151} y={S.recharge} w={660}>Recharge<br />充值</MadTitle>

        {/* ── 组 20 dialog (y20051 h3065) ── */}
        <img src={mad.dialogPhone} className="abs img-cover mad-dialog-phone" style={{ left: 633, top: S.dialog + 565, width: 1209, height: 2500 }} />
        <MadSplitDivider y={S.dialog + 68} segments={[{ x: 0, w: 520 }, { x: 1958, w: 522 }]} />
        <MadTitle x={0} y={S.dialog + 20} w={2480} align="center">Dialog Box Pops Up<br />弹出对话框</MadTitle>

        {/* ── 组 21 charts (y23696 h7579) ── */}
        <MadTitle x={151} y={S.charts - 2} w={1111}>Structure Chart<br />结构图</MadTitle>
        <img src={mad.structChart} className="abs img-cover" style={{ left: 2, top: S.charts + 482, width: 2480, height: 1402 }} />
        <MadTitle x={155} y={S.charts + 2314} w={770}>Flow Chart<br />流程图</MadTitle>
        <img src={mad.flowChart} className="abs img-cover" style={{ left: 0, top: S.charts + 2730, width: 2480, height: 400 }} />
        <MadTitle x={155} y={S.charts + 3618} w={1172}>Wireframe Chart<br />线框图</MadTitle>
        <img src={mad.wireframe} className="abs img-cover" style={{ left: 25, top: S.charts + 4119, width: 2433, height: 3460 }} />

        {/* ── 组 22 end (y31852 h3094) ── */}
        <img src={mad.endBg} className="abs img-cover" style={{ left: 0, top: S.end, width: 2480, height: 1504 }} />
        <img src={mad.endLaptopClean} className="abs img-cover" style={{ left: 957, top: S.end + 539, width: 765, height: 512 }} />
        {/* Figma 9817:19385 — one unbroken rule, masked in the middle by the plate below */}
        <div className="mad-divider-line abs" style={{ left: 3.7, top: S.end + 1699.6, width: 2480.1 }} />
        {/* Figma 9817:19389 — a solid #131313 plate, not a bordered frame: it punches the gap for ICON */}
        <span className="mad-end-badge abs" style={{ left: 1006.3, top: S.end + 1635.5, width: 474.9, height: 143.2 }} />
        <img src={mad.endIcons} className="abs img-cover" style={{ left: 444, top: S.end + 2031, width: 1600, height: 379 }} />
        {/* Figma trims this text to its cap box (cap top at 1675.1); `top` here is the 160px line box, 31.7px higher */}
        <MadTitle x={1080} y={S.end + 1643.4} w={350} align="center" tracking={9.54}>ICON</MadTitle>

      </FigmaScaleStage>
    </div>
  );
}



/* ─── High Seas Hero exact detail cases from Figma 9817:4765 / 9817:6955 ─── */
const hsTrial = {
  prototypeFrames: Array.from({ length: 28 }, (_, index) =>
    publicUrl(`/images/xingji/naval-trial/prototype-${String(index + 1).padStart(2, '0')}.webp`),
  ),
  phoneDifficultyPre: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre.webp'),
  panel2341: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre1.webp'),
  personalSelect: publicUrl('/images/xingji/naval-trial/personal-select.webp'),
  difficultySelected: publicUrl('/images/xingji/naval-trial/difficulty-selected.webp'),
  mapPanel: publicUrl('/images/xingji/naval-trial/map-panel.webp'),
  instructorPanel: publicUrl('/images/xingji/naval-trial/instructor-panel.webp'),
  flowPhoneConfirm: publicUrl('/images/xingji/naval-trial/confirm-big.webp'),
  popupFieldInfoPanel1: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre4.webp'),
  flowPhoneReward: publicUrl('/images/xingji/naval-trial/reward-flow.webp'),
  panel4561: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre2.webp'),
  personalConfirm: publicUrl('/images/xingji/naval-trial/personal-confirm.webp'),
  quickAccess: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre4.webp'),
  rewardPreview: publicUrl('/images/xingji/naval-trial/reward-preview.webp'),
  popupFieldInfoPanel31: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre5.webp'),
  phoneAllianceNo: publicUrl('/images/xingji/naval-trial/phone-difficulty-pre6.webp'),
  panel671: publicUrl('/images/xingji/naval-trial/alliance-yes.webp'),
  panel3212: publicUrl('/images/xingji/naval-trial/monster-info.webp'),
  panel4331: publicUrl('/images/xingji/naval-trial/monster-place.webp'),
  phoneRewardClaimed: publicUrl('/images/xingji/naval-trial/reward-claimed.webp'),
  phoneRecord: publicUrl('/images/xingji/naval-trial/record-empty.webp'),
  panel3451: publicUrl('/images/xingji/naval-trial/record-list.webp'),
  outcome1: publicUrl('/images/xingji/naval-trial/outcome-personal.webp'),
  outcome2: publicUrl('/images/xingji/naval-trial/outcome-detail.webp'),
  outcome3: publicUrl('/images/xingji/naval-trial/outcome-alliance.webp'),
  difficultyCard: publicUrl('/images/xingji/naval-trial/difficulty-card-image.webp'),
  difficultyCardCheck: publicUrl('/images/xingji/naval-trial/difficulty-card-check.svg'),
  difficultyCardLocked: publicUrl('/images/xingji/naval-trial/difficulty-card-locked.svg'),
  difficultyCardStar: publicUrl('/images/xingji/naval-trial/difficulty-card-star.svg'),
  difficultyCardTop: publicUrl('/images/xingji/naval-trial/difficulty-card-top.svg'),
  iconSafetyWarning: publicUrl('/images/xingji/naval-trial/icon-safety-warning.svg'),
  iconSafetyButtons: publicUrl('/images/xingji/naval-trial/icon-safety-buttons.svg'),
  iconSafetyInfo: publicUrl('/images/xingji/naval-trial/icon-safety-info.svg'),
  iconAllianceEntry: publicUrl('/images/xingji/naval-trial/icon-alliance-entry.svg'),
  iconAllianceMonster: publicUrl('/images/xingji/naval-trial/icon-alliance-monster.svg'),
  iconAllianceBattle: publicUrl('/images/xingji/naval-trial/icon-alliance-battle.svg'),
  iconAllianceRank: publicUrl('/images/xingji/naval-trial/icon-alliance-rank.svg'),
  iconRecordHistory: publicUrl('/images/xingji/naval-trial/icon-record-history.svg'),
  iconRecordMedal: publicUrl('/images/xingji/naval-trial/icon-record-medal.svg'),
  iconRecordProgress: publicUrl('/images/xingji/naval-trial/icon-record-progress.svg'),
  iconRecordBattle: publicUrl('/images/xingji/naval-trial/icon-record-battle.svg'),
};

const hsGang = {
  eventIpSceneBg01: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-scene-bg.webp'),
  eventIpCrewDetailShow02: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-hero-character.webp'),
  panel23441: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-main-panel.webp'),
  stateImg0: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-state-locked.webp'),
  stateImg1: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-state-claimable.webp'),
  stateImg2: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-state-claimed.webp'),
  stateImg3: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-state-maxed.webp'),
  panel34651: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-task-panel.webp'),
  sec7HeroDetailImg: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-hero-detail.webp'),
  sec7HeroPortraitImg: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-hero-portrait.webp'),
  collage: publicUrl('/figma/xingji-aodaisai/assets/cleanup-gang-outcome-collage.webp'),
};

type HSAbsProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const HSSectionOffsetContext = React.createContext(0);

function withHSOffset(style: React.CSSProperties | undefined, offset: number): React.CSSProperties | undefined {
  if (!style) return style;
  const next: React.CSSProperties = { ...style };
  if (typeof style.top === 'number') {
    next.top = Math.round(style.top - offset);
  }
  return next;
}

function HSSection({ className, top, height, children }: { className: string; top: number; height?: number; children: React.ReactNode }) {
  return (
    <HSSectionOffsetContext.Provider value={top}>
      <div className={`${className} hs-motion-section`} style={{ top, height }}>
        {children}
      </div>
    </HSSectionOffsetContext.Provider>
  );
}

function HSAbs({ className = '', style, children }: HSAbsProps) {
  const offset = React.useContext(HSSectionOffsetContext);
  return (
    <div className={`abs ${className}`} style={withHSOffset(style, offset)}>
      <HSSectionOffsetContext.Provider value={0}>{children}</HSSectionOffsetContext.Provider>
    </div>
  );
}

function HSImg({ src, className = '', style }: { src: string; className?: string; style?: React.CSSProperties }) {
  const offset = React.useContext(HSSectionOffsetContext);
  return <img alt="" src={src} className={`abs ${className}`} style={withHSOffset(style, offset)} loading="lazy" decoding="async" />;
}

function HSHeader({ n, title, en, top, light = false, accent = 'blue' }: { n: string; title: string; en: string; top: number; light?: boolean; accent?: 'blue' | 'orange' }) {
  return (
    <>
      <HSAbs className={`hs-exact-accent ${accent}`} style={{ left: 120, top: top + 60 }} />
      <HSAbs className="hs-exact-bgnum" style={{ left: 80, top: top + 16 }}>{n}</HSAbs>
      <HSAbs className={`hs-exact-title ${light ? 'light' : ''}`} style={{ left: 120, top: top + 76 }}>{title}</HSAbs>
      <HSAbs className={`hs-exact-en ${light ? 'light' : ''}`} style={{ left: 120, top: top + 120 }}>{en}</HSAbs>
    </>
  );
}

function HSGangHeader({ n, title, en, top, outcome = false }: { n: string; title: string; en: string; top: number; outcome?: boolean }) {
  const numberTop = top + (outcome ? 40 : 0);
  return (
    <>
      <HSAbs className="gang-section-number" style={{ left:80, top:numberTop }}>{n}</HSAbs>
      <HSAbs className="gang-section-title" style={{ left:80, top:numberTop + 40 }}>{title}</HSAbs>
      <HSAbs className="gang-section-en" style={{ left:80, top:numberTop + 82 }}>{en}</HSAbs>
    </>
  );
}

function HSTag({ children, x, y, blue = true }: { children: React.ReactNode; x: number; y: number; blue?: boolean }) {
  return <HSAbs className={`hs-exact-tag ${blue ? 'blue' : 'orange'}`} style={{ left: x, top: y }}>{children}</HSAbs>;
}

function HSInfoCard({ x, y, title, body, icon, orange = false }: { x: number; y: number; title: string; body: string; icon: string; orange?: boolean }) {
  return (
    <HSAbs className={`hs-exact-info-card ${orange ? 'orange' : 'blue'}`} style={{ left: x, top: y }}>
      <div className="hs-exact-card-accent" />
      <div className="hs-exact-card-icon">{icon}</div>
      <div className="hs-exact-card-title">{title}</div>
      <div className="hs-exact-card-body">{body}</div>
    </HSAbs>
  );
}

function HSFlowNode({ x, y, zh, en, orange = false }: { x: number; y: number; zh: string; en: string; orange?: boolean }) {
  return (
    <HSAbs className={`hs-flow-node ${orange ? 'orange' : 'blue'}`} style={{ left: x, top: y }}>
      <div className="hs-flow-zh">{zh}</div>
      <div className="hs-flow-en">{en}</div>
    </HSAbs>
  );
}

function HSArrow({ x, y }: { x: number; y: number }) {
  return <HSAbs className="hs-flow-arrow" style={{ left: x, top: y }} />;
}

function HSMetric({ x, value, label, desc, orange = false }: { x: number; value: string; label: string; desc: string; orange?: boolean }) {
  return (
    <HSAbs className="hs-metric" style={{ left: x, top: 2475 }}>
      <div className={`hs-metric-value ${orange ? 'orange' : 'blue'}`}>{value}</div>
      <div className="hs-metric-label">{label}</div>
      <div className="hs-metric-desc">{desc}</div>
    </HSAbs>
  );
}

export function HighSeasNavyTrialExactCase() {
  const H = 13020;
  const diffCards = [
    ['已解锁', '可选择', 'blue'],
    ['已选中', '高亮+详情', 'orange'],
    ['已通关', '完成标记', 'green'],
    ['未解锁', '灰色置灰', 'gray'],
  ] as const;
  const personalFlow = [
    ['01', '选择难度', '自动定位\n最新解锁', hsTrial.panel4561, false],
    ['02', '确认出战', '二次确认\n不可更改', hsTrial.personalConfirm, true],
    ['03', '进入地图', '镜头跳转\n定位教官', hsTrial.quickAccess, false],
    ['04', '战斗领奖', '击败教官\n领取奖励', hsTrial.rewardPreview, true],
  ] as const;
  type PrototypePreviewItem = {
    id: string;
    step: string;
    group: string;
    title: string;
    caption: string;
    src: string;
    actions: Array<{
      label: string;
      target: string;
      hotspot: { left: number; top: number };
    }>;
  };
  const figmaHotspot = (x: number, y: number, width: number, height: number, frameHeight = 1634) => ({
    left: ((x + width / 2) / 720) * 100,
    top: ((y + height / 2) / frameHeight) * 100,
  });
  const figmaPoint = (x: number, y: number, frameHeight = 1634) => ({
    left: (x / 720) * 100,
    top: (y / frameHeight) * 100,
  });
  const prototypePreview: PrototypePreviewItem[] = [
    {
      id: 'idle', step: '01', group: '入口', title: '挂机界面',
      caption: '活动提示出现后进入将军的试炼。', src: hsTrial.prototypeFrames[0],
      actions: [{ label: '进入活动', target: 'personalPre', hotspot: figmaPoint(570, 208, 1644) }],
    },
    {
      id: 'personalPre', step: '02', group: '个人线', title: '个人挑战-选择难度前',
      caption: '默认展示个人挑战、难度、奖励入口与模式切换。', src: hsTrial.prototypeFrames[1],
      actions: [
        { label: '选择任意难度', target: 'confirm', hotspot: figmaHotspot(20, 470, 680, 620) },
        { label: '奖励预览', target: 'rewardIncomplete', hotspot: figmaHotspot(595, 320, 128, 100) },
        { label: '切换同盟挑战', target: 'allianceGate', hotspot: figmaHotspot(360, 1240, 340, 120) },
      ],
    },
    {
      id: 'personalPreB', step: '03', group: '个人线', title: '个人挑战-难度列表下段',
      caption: '难度列表滚动后的补充状态。', src: hsTrial.prototypeFrames[2],
      actions: [
        { label: '选择任意难度', target: 'confirm', hotspot: figmaHotspot(20, 470, 680, 620) },
        { label: '奖励预览', target: 'rewardIncomplete', hotspot: figmaHotspot(595, 320, 128, 100) },
        { label: '切换同盟挑战', target: 'allianceGate', hotspot: figmaHotspot(360, 1240, 340, 120) },
      ],
    },
    {
      id: 'confirm', step: '04', group: '个人线', title: '二次确认弹窗',
      caption: '确认难度后进入个人挑战，取消或关闭返回难度选择。', src: hsTrial.prototypeFrames[3],
      actions: [
        { label: '取消', target: 'personalPre', hotspot: figmaHotspot(82, 848.5, 276, 146) },
        { label: '确定', target: 'personalChallenge', hotspot: figmaHotspot(362, 848.5, 276, 146) },
        { label: '关闭', target: 'personalPre', hotspot: figmaHotspot(620, 80, 80, 80) },
      ],
    },
    {
      id: 'personalChallenge', step: '05', group: '个人线', title: '个人挑战',
      caption: '难度锁定后可查看奖励或打开挑战详情。', src: hsTrial.prototypeFrames[4],
      actions: [
        { label: '奖励预览', target: 'rewardIncomplete', hotspot: figmaHotspot(595, 320, 128, 100) },
        { label: '挑战详情', target: 'personalDetail', hotspot: figmaHotspot(352, 1219, 256, 131) },
        { label: '任务卡片', target: 'personalDetail', hotspot: figmaHotspot(20, 420, 680, 640) },
      ],
    },
    {
      id: 'personalDetail', step: '06', group: '个人线', title: '个人挑战详情弹窗',
      caption: '查看教官、奖励和推荐战力后进入野外。', src: hsTrial.prototypeFrames[5],
      actions: [
        { label: '进入野外', target: 'personalWorldComplete', hotspot: figmaPoint(286, 1288) },
        { label: '关闭详情', target: 'personalChallenge', hotspot: figmaHotspot(620, 80, 80, 80, 1643) },
      ],
    },
    {
      id: 'personalWorldComplete', step: '07', group: '个人线', title: '野外主界面-个人完成',
      caption: '个人挑战完成后显示奖励气泡。', src: hsTrial.prototypeFrames[6],
      actions: [{ label: '完成后状态', target: 'personalWorldReward', hotspot: figmaPoint(300, 1060, 1643) }],
    },
    {
      id: 'personalWorldReward', step: '08', group: '个人线', title: '野外主界面-可领奖',
      caption: '点击领奖提示进入可领取奖励页。', src: hsTrial.prototypeFrames[7],
      actions: [{ label: '去奖励预览', target: 'rewardAvailable', hotspot: figmaPoint(292, 1265, 1643) }],
    },
    {
      id: 'rewardIncomplete', step: '09', group: '奖励线', title: '奖励预览-未完成',
      caption: '挑战未完成时仅展示奖励进度。', src: hsTrial.prototypeFrames[8], actions: [],
    },
    {
      id: 'rewardAvailable', step: '10', group: '奖励线', title: '奖励预览-可领取',
      caption: '完成挑战后解锁领取按钮。', src: hsTrial.prototypeFrames[9],
      actions: [
        { label: '领取奖励', target: 'rewardClaimed', hotspot: figmaHotspot(513, 641.5, 108, 83) },
        { label: '关闭奖励', target: 'personalWorldReward', hotspot: figmaHotspot(620, 80, 80, 80) },
      ],
    },
    {
      id: 'rewardClaimed', step: '11', group: '奖励线', title: '奖励预览-已领取',
      caption: '奖励领取后更新完成状态。', src: hsTrial.prototypeFrames[10],
      actions: [{ label: '领取后继续', target: 'personalLater', hotspot: figmaPoint(660, 414) }],
    },
    {
      id: 'personalLater', step: '12', group: '个人线', title: '个人挑战-后续阶段',
      caption: '进入更高难度的后续个人挑战。', src: hsTrial.prototypeFrames[11],
      actions: [{ label: '后续挑战', target: 'personalLaterWorld', hotspot: figmaHotspot(352, 1219, 256, 131) }],
    },
    {
      id: 'personalLaterWorld', step: '13', group: '个人线', title: '野外主界面-后续阶段',
      caption: '后续个人任务回到野外推进。', src: hsTrial.prototypeFrames[12], actions: [],
    },
    {
      id: 'allianceGate', step: '14', group: '同盟线', title: '同盟挑战-未加入联盟',
      caption: '未加入联盟时显示加入引导。', src: hsTrial.prototypeFrames[13],
      actions: [
        { label: '立即加入', target: 'allianceChallenge', hotspot: figmaHotspot(232, 1230, 256, 131) },
        { label: '已加入联盟', target: 'allianceChallenge', hotspot: figmaPoint(530, 1420) },
      ],
    },
    {
      id: 'allianceChallenge', step: '15', group: '同盟线', title: '同盟挑战',
      caption: '已加入联盟后可查看记录或选择联盟难度。', src: hsTrial.prototypeFrames[14],
      actions: [
        { label: '打开记录', target: 'allianceRecordEmpty', hotspot: figmaHotspot(595, 333, 128, 74) },
        { label: '挑战', target: 'allianceUnplaced', hotspot: figmaHotspot(50, 1110, 620, 78) },
        { label: '个人挑战', target: 'personalPre', hotspot: figmaHotspot(0, 1240, 340, 120) },
      ],
    },
    {
      id: 'allianceUnplaced', step: '16', group: '同盟线', title: '同盟挑战-未放置野怪',
      caption: '选定难度后进入野怪放置流程。', src: hsTrial.prototypeFrames[15],
      actions: [
        { label: '打开记录', target: 'allianceRecordList', hotspot: figmaHotspot(595, 333, 128, 74) },
        { label: '去放置野怪', target: 'placeMonster', hotspot: figmaHotspot(220, 1230, 280, 120) },
      ],
    },
    {
      id: 'allianceRecordEmpty', step: '17', group: '记录线', title: '同盟记录-空',
      caption: '尚无同盟挑战记录。', src: hsTrial.prototypeFrames[16],
      actions: [{ label: '关闭记录', target: 'allianceChallenge', hotspot: figmaHotspot(620, 80, 80, 80) }],
    },
    {
      id: 'allianceRecordList', step: '18', group: '记录线', title: '同盟记录-有记录',
      caption: '展示已有同盟挑战记录。', src: hsTrial.prototypeFrames[17],
      actions: [{ label: '关闭记录', target: 'allianceUnplaced', hotspot: figmaHotspot(620, 80, 80, 80) }],
    },
    {
      id: 'placeMonster', step: '19', group: '同盟线', title: '放置野怪',
      caption: '在世界地图确认或取消怪物放置。', src: hsTrial.prototypeFrames[18],
      actions: [
        { label: '确认放置', target: 'allianceWorldEntry', hotspot: figmaPoint(490, 1120) },
        { label: '取消放置', target: 'allianceUnplaced', hotspot: figmaPoint(278, 1120) },
        { label: '关闭放置', target: 'allianceUnplaced', hotspot: figmaHotspot(620, 80, 80, 80) },
      ],
    },
    {
      id: 'allianceWorldEntry', step: '20', group: '战斗线', title: '野外大世界-入口',
      caption: '怪物落地后点击地图要塞。', src: hsTrial.prototypeFrames[19],
      actions: [{ label: '点击地图要塞', target: 'alliancePreparing', hotspot: figmaHotspot(370, 760, 290, 360) }],
    },
    {
      id: 'alliancePreparing', step: '21', group: '战斗线', title: '野外大世界-准备中',
      caption: '准备阶段点击怪物气泡查看详情。', src: hsTrial.prototypeFrames[20],
      actions: [{ label: '点击气泡查看', target: 'monsterPreparing', hotspot: figmaHotspot(370, 790, 270, 360) }],
    },
    {
      id: 'monsterPreparing', step: '22', group: '战斗线', title: '公会怪物信息-准备中',
      caption: '查看准备信息并推进到战斗中。', src: hsTrial.prototypeFrames[21],
      actions: [
        { label: '进入战斗中', target: 'allianceWorldBattle', hotspot: figmaPoint(360, 1290) },
        { label: '关闭信息', target: 'alliancePreparing', hotspot: figmaHotspot(620, 80, 80, 80) },
      ],
    },
    {
      id: 'allianceWorldBattle', step: '23', group: '战斗线', title: '野外大世界-战斗中',
      caption: '战斗中再次点击怪物气泡。', src: hsTrial.prototypeFrames[22],
      actions: [{ label: '点击战斗气泡', target: 'monsterBattle', hotspot: figmaHotspot(370, 790, 270, 360) }],
    },
    {
      id: 'monsterBattle', step: '24', group: '战斗线', title: '公会怪物信息-战斗中',
      caption: '在战斗信息中选择攻击或集结。', src: hsTrial.prototypeFrames[23],
      actions: [
        { label: '攻击', target: 'marchAttack', hotspot: figmaHotspot(0, 1040, 360, 220) },
        { label: '集结', target: 'marchRally', hotspot: figmaHotspot(360, 1040, 360, 220) },
        { label: '关闭信息', target: 'allianceWorldBattle', hotspot: figmaHotspot(620, 80, 80, 80) },
      ],
    },
    {
      id: 'marchAttack', step: '25', group: '战斗线', title: '出征界面-攻击',
      caption: '选择舰队并直接出征攻击。', src: hsTrial.prototypeFrames[24],
      actions: [{ label: '出征', target: 'worldAfterBattle', hotspot: figmaPoint(550, 1260, 1643) }],
    },
    {
      id: 'marchRally', step: '26', group: '战斗线', title: '出征界面-集结',
      caption: '设置集结时间后出征。', src: hsTrial.prototypeFrames[25],
      actions: [{ label: '发起集结', target: 'rally', hotspot: figmaPoint(550, 1260, 1643) }],
    },
    {
      id: 'rally', step: '27', group: '战斗线', title: '集结界面',
      caption: '查看集结队伍并结束集结流程。', src: hsTrial.prototypeFrames[26],
      actions: [{ label: '结束集结', target: 'worldAfterBattle', hotspot: figmaPoint(65, 1550, 1643) }],
    },
    {
      id: 'worldAfterBattle', step: '28', group: '收束', title: '野外主界面-战斗后',
      caption: '战斗结束后返回野外主界面。', src: hsTrial.prototypeFrames[27], actions: [],
    },
  ];
  const [prototypeStep, setPrototypeStep] = useState(0);
  const currentPrototype = prototypePreview[prototypeStep];
  const prototypeIndexById = new Map<string, number>(prototypePreview.map((item, i) => [item.id, i]));
  const getPrototypeTitle = (id: string) => prototypePreview[prototypeIndexById.get(id) ?? 0].title;
  const goPrototype = (id: string) => {
    const nextIndex = prototypeIndexById.get(id);
    if (nextIndex !== undefined) setPrototypeStep(nextIndex);
  };
  const configItems = [
    ['portrait', '教官立绘', '后台配置不同难度对应的教官形象'],
    ['rank', '教官等级', '战力数值随难度递增，明确挑战门槛'],
    ['power', '战力展示', '直观显示教官实力，辅助玩家判断'],
    ['pin', '地图坐标', '教官在世界地图的固定刷新位置'],
    ['gift', '掉落预览', '击败后可获得的奖励物品列表'],
  ];
  return (
    <div className="star-case-page hs-exact-page">
      <FigmaScaleStage width={1280} height={H} className="hs-exact-stage hs-trial-stage" maxScale={1} fitToViewport viewportInset={0}>
        <HSSection className="hs-sec hs-dark hs-cover-sec" top={0} height={1120}>
          <HSAbs className="hs-cover-panel" style={{ left: 0, top: 0 }} />
          <div className="hs-hero-orb one" /><div className="hs-hero-orb two" />
          <div className="hs-dot-matrix" style={{ left: 80, top: 80 }} />
          <HSAbs className="hs-cover-line" style={{ left: 120, top: 508, width: 120 }} />
          <HSAbs className="hs-cover-en" style={{ left: 120, top: 533 }}>GENERAL'S TRIAL</HSAbs>
          <HSAbs className="hs-cover-title" style={{ left: 120, top: 573 }}>海军试炼</HSAbs>
          <HSAbs className="hs-cover-sub" style={{ left: 120, top: 667 }}>九重难度递进 × 个人联盟双轨 × 世界地图实战</HSAbs>
          <HSAbs className="hs-cover-endline" style={{ left: 120, top: 717 }} />
          <HSAbs className="hs-prototype-preview" style={{ left: 86, top: 180 }}>
            <div className="hs-prototype-device">
              <div className="hs-prototype-live" aria-label={currentPrototype.title}>
                <img src={currentPrototype.src} alt="" />
                {currentPrototype.actions.map((action) => (
                  <button
                    key={`${currentPrototype.id}-${action.label}`}
                    type="button"
                  className="hs-prototype-hotspot"
                  style={{
                    left: `${action.hotspot.left}%`,
                    top: `${action.hotspot.top}%`,
                  }}
                    onClick={() => goPrototype(action.target)}
                    aria-label={`${action.label}，跳转到${getPrototypeTitle(action.target)}`}
                  >
                    <i />
                    <b>{action.label}</b>
                  </button>
                ))}
              </div>
            </div>
          </HSAbs>
          <div className="hs-cover-diag" />
        </HSSection>

        <div className="hs-trial-rest-offset">
        <HSSection className="hs-sec hs-light" top={900}>
          <HSHeader n="01" title="设计概述" en="DESIGN OVERVIEW" top={900} light />
          <HSInfoCard x={120} y={1110} icon="01" title="设计挑战" body="将军的试炼作为 SLG 核心活动，涵盖九重难度、个人与联盟双轨、世界地图实战等多维系统。如何在保持策略深度的同时，降低理解门槛，让玩家快速进入心流状态？" />
          <HSInfoCard x={230} y={1292} icon="02" title="设计目标" body={'建立清晰的难度递进认知，构建个人 / 联盟双模式的无缝切换体验，打通“选难度 → 进地图 → 战斗 → 领奖”的完整行为链路。'} orange />
          <HSInfoCard x={340} y={1474} icon="03" title="目标用户" body="25–40 岁中重度 SLG 玩家，具备基础策略认知，追求挑战成就感与社交协作体验，并期待高效率入口与清晰状态反馈。" />
          {['九重难度', '双轨模式', '世界地图实战', '高配置化', '渐进挑战'].map((tag, i) => <HSTag key={tag} x={[120,334,547,761,975][i]} y={1672}>{tag}</HSTag>)}
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={1800}>
          <HSHeader n="02" title="系统架构" en="SYSTEM ARCHITECTURE" top={1800} />
          {[
            ['活动入口', 'Entry'], ['难度选择', 'Difficulty'], ['模式分流', 'Mode Split'], ['世界地图', 'World Map'], ['战斗交互', 'Combat'], ['奖励循环', 'Reward'],
          ].map(([zh, en], i) => <React.Fragment key={zh}><HSFlowNode x={120 + i * 182} y={2022} zh={zh} en={en} orange={i % 2 === 1} />{i < 5 ? <HSArrow x={260 + i * 182} y={2071} /> : null}</React.Fragment>)}
          <HSAbs className="hs-branch-tree" style={{ left: 438, top: 2201 }} />
          <HSAbs className="hs-branch-card blue" style={{ left: 359, top: 2283 }}>个人挑战</HSAbs>
          <HSAbs className="hs-branch-card orange" style={{ left: 579, top: 2283 }}>联盟挑战</HSAbs>
          <HSMetric x={187} value="9" label="难度等级" desc="渐进式挑战递进" />
          <HSAbs className="hs-metric-divider" style={{ left: 417, top: 2485 }} />
          <HSMetric x={447} value="2" label="挑战模式" desc="个人 + 联盟双轨" orange />
          <HSAbs className="hs-metric-divider" style={{ left: 677, top: 2485 }} />
          <HSMetric x={707} value="∞" label="配置自由度" desc="全参数后台可配" />
          <HSAbs className="hs-metric-divider" style={{ left: 937, top: 2485 }} />
          <HSMetric x={967} value="3" label="核心闭环" desc="选择→战斗→奖励" orange />
        </HSSection>

        <HSSection className="hs-sec hs-light" top={2700}>
          <HSHeader n="03" title="难度选择系统" en="DIFFICULTY SELECTION" top={2700} light accent="orange" />
          <HSImg src={hsTrial.phoneDifficultyPre} className="hs-phone" style={{ left: 120, top: 2906, width: 240, height: 519 }} />
          <HSImg src={hsTrial.panel2341} className="hs-phone" style={{ left: 441, top: 2905, width: 240, height: 520 }} />
          <HSAbs className="hs-under-label" style={{ left: 183, top: 3440 }}>初始状态 · 自动定位</HSAbs>
          <HSAbs className="hs-under-label" style={{ left: 504, top: 3440 }}>选中状态 · 挑战详情</HSAbs>
          <HSAbs className="hs-click-arrow" style={{ left: 374, top: 3179 }}>点击选择</HSAbs>
          <HSAbs className="hs-panel-title light" style={{ left: 710, top: 2943 }}>难度卡片状态机</HSAbs>
          <HSAbs className="hs-diff-legend" style={{ left: 710, top: 2983 }}>
            {diffCards.map(([title, desc, type], i) => (
              <div key={title} className={`hs-diff-legend-item ${type}`} style={{ left: i * 104 }}>
                <i />
                <b>{title}</b>
                <span>{desc}</span>
              </div>
            ))}
          </HSAbs>
          {diffCards.map(([, , type], i) => (
            <HSAbs key={type} className={`hs-diff-card ${type}`} style={{ left: 710 + i * 104, top: 3051 }}>
              <img className="hs-diff-card-top" src={hsTrial.difficultyCardTop} alt="" />
              {type === 'green' ? <img className="hs-diff-card-check" src={hsTrial.difficultyCardCheck} alt="" /> : null}
              <img className="hs-diff-card-emblem" src={hsTrial.difficultyCard} alt="" />
              {type === 'gray' ? <img className="hs-diff-card-locked" src={hsTrial.difficultyCardLocked} alt="" /> : null}
              <b>难度</b>
              <span><img src={hsTrial.difficultyCardStar} alt="" />X5</span>
            </HSAbs>
          ))}
          <HSAbs className="hs-panel-title light" style={{ left: 710, top: 3291 }}>设计要点</HSAbs>
          <HSAbs className="hs-bullets light" style={{ left: 710, top: 3321 }}>
            <p>• 进入页面自动定位最新解锁难度，减少选择成本</p><p>• 九个等级渐进排列，已通关项展示完成标记</p><p>• 未解锁难度卡片灰度处理，附提示文案引导</p><p>• 图标、难度名称、奖励预览均支持后台配置</p>
          </HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={3600}>
          <HSHeader n="04" title="个人挑战流程" en="PERSONAL CHALLENGE FLOW" top={3600} />
          <HSAbs className="hs-desc" style={{ left: 120, top: 3750 }}>从选择难度到领取奖励，四步完成完整挑战闭环</HSAbs>
          {personalFlow.map(([num, title, desc, img], i) => <HSAbs key={num} className="hs-personal-step" style={{ left: 130 + i * 270, top: 3800 }}><div className="hs-step-num">{num}</div><div className="hs-step-title">{title}</div><div className="hs-step-desc">{desc.split('\n').map((t) => <p key={t}>{t}</p>)}</div><HSImg src={img} className={`hs-phone ${i === 1 || i === 3 ? 'hs-navy-crop' : ''}`} style={{ left: 0, top: 90, width: 210, height: 455 }} />{i < 3 ? <HSArrow x={220} y={30} /> : null}</HSAbs>)}
          <HSAbs className="hs-insight" style={{ left: 130, top: 4430 }}>整个流程强调 <b>不可逆选择设计</b> —— 确认出战后难度锁定，引导玩家认真思考策略，提升决策的仪式感与紧张感。</HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-light" top={4500}>
          <HSHeader n="05" title="确认机制与安全设计" en="CONFIRMATION & SAFETY" top={4500} light accent="orange" />
          <HSImg src={hsTrial.flowPhoneConfirm} className="hs-phone hs-navy-crop" style={{ left: 120, top: 4652, width: 280, height: 605 }} />
          {[
            { title: '不可逆提示', icon: hsTrial.iconSafetyWarning, lines: ['明确告知"选择后不可更改"，', '强化决策仪式感'] },
            { title: '双按钮对比', icon: hsTrial.iconSafetyButtons, lines: ['取消按钮弱化处理，确认按钮', '高亮引导，降低误操作率'] },
            { title: '信息前置', icon: hsTrial.iconSafetyInfo, lines: ['弹窗内展示已选难度与预期挑', '战内容，帮助玩家做最终确认'] },
          ].map((item, i) => (
            <HSAbs key={item.title} className="hs-safety-card" style={{ left: 490, top: 4740 + i * 130 }}>
              <img src={item.icon} alt="" />
              <b>{item.title}</b>
              <span>{item.lines[0]}<br />{item.lines[1]}</span>
            </HSAbs>
          ))}
          <HSAbs className="hs-panel-title light" style={{ left: 120, top: 5279 }}>为什么需要二次确认？</HSAbs>
          <HSAbs className="hs-paragraph light" style={{ left: 120, top: 5309, width: 1046 }}>将军的试炼采用"选定即锁定"机制，每个难度仅一次挑战机会。通过二次确认弹窗，引导玩家在出战前认真评估自身实力与难度匹配度，减少因误触导致的负面体验，同时增强"决策的重量感"——这是 SLG 策略体验的重要组成部分。</HSAbs>
          <HSAbs className="hs-safety-note-line" style={{ left: 120, top: 5350 }} />
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={5400}>
          <HSHeader n="06" title="野外快捷入口" en="QUICK ACCESS" top={5400} />
          <HSImg src={hsTrial.popupFieldInfoPanel1} className="hs-phone" style={{ left: 120, top: 5600, width: 300, height: 650 }} />
          <HSAbs className="hs-quick-callout" style={{ left: 204, top: 6092 }} />
          <HSAbs className="hs-paragraph" style={{ left: 512, top: 5600, width: 620 }}>野外地图作为战斗载体，加入“快捷入口”，可实现“镜头跳转 + 快捷定位 + 浮层引导”三重设计，确保玩家从选择难度到找到目标教官的路径最短化。</HSAbs>
          {['快捷按钮组|一键跳转教官位置，减少地图寻找成本','镜头自动跳转|确认出战后镜头自动移至先锋教官所在区域','任务进度浮层|右侧常驻显示当前挑战任务完成进度'].map((text, i) => { const [t,b]=text.split('|'); return <HSAbs key={t} className="hs-dark-list-card" style={{ left: 512, top: 5767 + i * 131 }}><b>{t}</b><span>{b}</span></HSAbs> })}
        </HSSection>

        <HSSection className="hs-sec hs-light" top={6300}>
          <HSHeader n="07" title="先锋教官系统" en="PIONEER INSTRUCTOR" top={6300} light accent="orange" />
          <HSAbs className="hs-panel-title light" style={{ left: 120, top: 6494 }}>可配置元素</HSAbs>
          {configItems.map(([ico, t, b], i) => <HSAbs key={t} className="hs-config-row" style={{ left: 120, top: 6544 + i * 70 }}><i className={`hs-vector-icon ${ico}`} /><b>{t}</b><span>{b}</span></HSAbs>)}
          <HSImg src={hsTrial.popupFieldInfoPanel31} className="hs-phone" style={{ left: 500, top: 6493, width: 280, height: 607 }} />
          <HSAbs className="hs-panel-title light" style={{ left: 840, top: 6494 }}>交互流程</HSAbs>
          <HSAbs className="hs-timeline-spine" style={{ left: 851, top: 6556 }} />
          {['点击教官 → 弹出信息面板','查看教官战力与掉落预览','选择“攻击”或“集结”','进入战斗 / 等待队友响应'].map((txt, i) => <HSAbs key={txt} className="hs-mini-timeline" style={{ left: 840, top: 6544 + i * 70 }}><em>{i+1}</em><span>{txt}</span></HSAbs>)}
        </HSSection>

        <HSSection className="hs-sec hs-light" top={8100}>
          <HSHeader n="08" title="联盟挑战模式" en="ALLIANCE CHALLENGE" top={8100} light accent="orange" />
          <HSImg src={hsTrial.phoneAllianceNo} className="hs-phone" style={{ left: 120, top: 8293, width: 240, height: 519 }} />
          <HSImg src={hsTrial.panel671} className="hs-phone" style={{ left: 440, top: 8293, width: 240, height: 519 }} />
          <HSAbs className="hs-alliance-transition" style={{ left: 366, top: 8528 }}>
            <span>点击选择</span><i />
          </HSAbs>
          <HSAbs className="hs-alliance-caption" style={{ left: 120, top: 8829, width: 240 }}>同盟挑战（未加入公会）</HSAbs>
          <HSAbs className="hs-alliance-caption" style={{ left: 440, top: 8829, width: 240 }}>同盟挑战（已加入公会）</HSAbs>
          <HSAbs className="hs-panel-title light" style={{ left: 700, top: 8325 }}>联盟模式特性</HSAbs>
          {[
            [hsTrial.iconAllianceEntry, '联盟准入', '未加入联盟时，联盟挑战', 'Tab 灰色不可选，引导加入'],
            [hsTrial.iconAllianceMonster, '公会怪物', '盟主/官员在地图放置怪物，', '成员协力击败'],
            [hsTrial.iconAllianceBattle, '协同战斗', '支持集结攻击，多人同时', '对同一目标发起进攻'],
            [hsTrial.iconAllianceRank, '联盟排名', '联盟维度统计挑战成绩，', '激发组织荣誉感'],
          ].map(([icon, title, line1, line2], i) => (
            <HSAbs key={title} className={`hs-light-list-card hs-alliance-feature ${i % 2 ? 'orange' : 'blue'}`} style={{ left: 700, top: 8375 + i * 105 }}>
              <img className="hs-alliance-icon" src={icon} alt="" />
              <b>{title}</b><span>{line1}<br />{line2}</span>
            </HSAbs>
          ))}
          <HSAbs className="hs-light-strip" style={{ left: 72, top: 8889 }}>个人与联盟双轨并行设计，非联盟玩家不受影响，联盟玩家获得额外社交玩法，两种模式共享同一套难度体系与奖励逻辑，降低理解成本。</HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={9000}>
          <HSHeader n="09" title="联盟怪物" en="ALLIANCE MONSTER" top={9000} />
          <HSAbs className="hs-monster-flow-title" style={{ left: 123, top: 9193 }}>流程逻辑</HSAbs>
          {[
            ['选择挑战等级', <>在同盟挑战的页面里选择<br />当前可挑战的等级</>],
            ['野外布置怪物', <>选中未完成的挑战任务，<br />跳转至野外布置怪物模型</>],
            ['公会集结怪物', <>召集公会成员前往怪物<br />坐标位置</>],
            ['完成联盟挑战', <>击败怪物后模型消失</>],
          ].map(([title, body], i) => (
            <HSAbs key={String(title)} className="hs-monster-flow-step" style={{ left: 123, top: 9233 + i * 110 }}>
              <em>{i + 1}</em>
              <b>{title}</b>
              <span>{body}</span>
              {i < 3 && <i aria-hidden="true" />}
            </HSAbs>
          ))}
          <HSImg src={hsTrial.panel4331} className="hs-phone" style={{ left: 500, top: 9166, width: 280, height: 607 }} />
          <HSImg src={hsTrial.panel3212} className="hs-phone" style={{ left: 882, top: 9166, width: 280, height: 607 }} />
          <HSAbs className="hs-monster-transition" style={{ left: 797, top: 9460 }}>
            <span>确认布置</span>
            <i aria-hidden="true" />
          </HSAbs>
          <HSAbs className="hs-monster-caption" style={{ left: 500, top: 9794, width: 280 }}>怪物布置操作</HSAbs>
          <HSAbs className="hs-monster-caption" style={{ left: 882, top: 9794, width: 280 }}>怪物信息面板</HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={7200}>
          <HSHeader n="10" title="奖励系统" en="REWARD SYSTEM" top={7200} />
          <HSAbs className="hs-reward-shot hs-reward-shot--preview" style={{ left: 120, top: 7394, width: 260, height: 562 }}>
            <img src={hsTrial.flowPhoneReward} alt="奖励预览" loading="lazy" decoding="async" />
          </HSAbs>
          <HSAbs className="hs-reward-shot hs-reward-shot--claimed" style={{ left: 440, top: 7393, width: 260, height: 563 }}>
            <img src={hsTrial.phoneRewardClaimed} alt="已领取状态" loading="lazy" decoding="async" />
          </HSAbs>
          <HSAbs className="hs-reward-caption" style={{ left: 120, top: 7972, width: 260 }}>奖励预览</HSAbs>
          <HSAbs className="hs-reward-caption" style={{ left: 440, top: 7972, width: 260 }}>已领取状态</HSAbs>
          <HSAbs className="hs-reward-arrow-label" style={{ left: 388, top: 7586, width: 48 }}>领取</HSAbs>
          <HSAbs className="hs-reward-arrow" style={{ left: 390, top: 7611, width: 40 }} />
          <HSAbs className="hs-reward-logic-title" style={{ left: 846, top: 7436 }}>奖励设计逻辑</HSAbs>
          {[
            { title: '难度分 Tab', lines: ['每个难度对应独立奖励页签，', '清晰展示各级别回报差异'] },
            { title: '预览驱动挑战', lines: ['先展示奖励再挑战，', '用预期回报激发挑战动机'] },
            { title: '领取状态区分', lines: ['已领/未领/不可领三态视觉分明，', '减少认知负担'] },
            { title: '通关奖励', lines: ['全难度通关额外奖励，', '为高水平玩家提供终极目标'] },
          ].map((item, i) => (
            <HSAbs key={item.title} className={`hs-reward-point${i === 3 ? ' is-last' : ''}`} style={{ left: 846, top: 7485 + i * 100 }}>
              <b>{item.title}</b>
              <span>{item.lines[0]}<br />{item.lines[1]}</span>
            </HSAbs>
          ))}
          <HSAbs className="hs-reward-orbit" style={{ left: 1080, top: 7900 }} />
        </HSSection>

        <HSSection className="hs-sec hs-light" top={9900}>
          <HSHeader n="11" title="战绩记录" en="CHALLENGE RECORD" top={9900} light accent="orange" />
          <HSAbs className="hs-record-shot hs-record-shot-empty" style={{ left: 120, top: 10095 }}>
            <img src={hsTrial.phoneRecord} alt="挑战详情记录空状态" loading="lazy" decoding="async" />
          </HSAbs>
          <HSAbs className="hs-record-shot hs-record-shot-list" style={{ left: 437, top: 10095 }}>
            <img src={hsTrial.panel3451} alt="挑战详情记录" loading="lazy" decoding="async" />
          </HSAbs>
          <HSAbs className="hs-record-caption" style={{ left: 120, top: 10678 }}>挑战详情记录（空状态）</HSAbs>
          <HSAbs className="hs-record-caption" style={{ left: 437, top: 10678 }}>挑战详情记录</HSAbs>
          <HSAbs className="hs-record-panel-title" style={{ left: 813, top: 10138 }}>数据呈现设计</HSAbs>
          {([
            [hsTrial.iconRecordHistory, '挑战历史', <>记录每次挑战的难度、结果、<br />用时，帮助玩家复盘策略</>],
            [hsTrial.iconRecordMedal, '成就展示', <>累计通关次数、最高难度等<br />数据，激发挑战成就感</>],
            [hsTrial.iconRecordProgress, '进度总览', <>各难度通关状态一目了然，<br />明确下一步挑战方向</>],
            [hsTrial.iconRecordBattle, '战场回顾', <>公会战场数据记录，<br />展示联盟协作战果</>],
          ] as [string, string, React.ReactNode][]).map(([icon, title, body], i) => (
            <HSAbs key={title} className={`hs-record-card ${i % 2 ? 'orange' : 'blue'}`} style={{ left: 813, top: 10188 + i * 105 }}>
              <img className="hs-record-card-icon" src={icon} alt="" />
              <div className="hs-record-card-copy"><b>{title}</b><span>{body}</span></div>
            </HSAbs>
          ))}
          <HSAbs className="hs-record-dot-matrix" style={{ left: 1132, top: 10722 }} />
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={10800}>
          <HSHeader n="12" title="设计原则" en="DESIGN PRINCIPLES" top={10800} />
          {[
            {
              number: '01',
              keyword: '架构',
              title: '高配置化架构',
              en: 'Highly Configurable',
              tone: 'blue',
              body: '难度数量、教官形象、任务内容、奖励配置均支持后台热更新。',
              emphasis: '策划团队无需客户端发版即可灵活调整活动参数，大幅提升运营效率。',
            },
            {
              number: '02',
              keyword: '体验',
              title: '双轨并行体验',
              en: 'Dual-Track Design',
              tone: 'orange',
              body: '个人挑战与联盟挑战共享底层系统但独立运作，非联盟玩家不受限制，联盟玩家获得社交增值。',
              emphasis: '两种模式的复用减少了学习成本，同时满足不同社交偏好的用户需求。',
            },
            {
              number: '03',
              keyword: '设计',
              title: '渐进式挑战设计',
              en: 'Progressive Challenge',
              tone: 'green',
              body: '九重难度形成清晰的成长阶梯，“选定即锁定”机制赋予每次挑战策略权重。',
              emphasis: '从难度选择到战斗领奖的完整闭环设计，让玩家在每一轮循环中感受到成长与成就。',
            },
          ].map((item, i) => (
            <HSAbs key={item.title} className={`hs-principle-card hs-principle-card--${item.tone}`} style={{ left: 120 + i * 360, top: 10996 }}>
              <span className="hs-principle-card__keyword">{item.keyword}</span>
              <small>{item.number}</small>
              <i className="hs-principle-card__rule" />
              <b>{item.title}</b>
              <em>{item.en}</em>
              <p>{item.body}</p>
              <p className="hs-principle-card__emphasis">{item.emphasis}</p>
              <i className="hs-principle-card__orb" />
            </HSAbs>
          ))}
        </HSSection>

        <HSSection className="hs-sec hs-outcome" top={11700}>
          <HSHeader n="13" title="设计成果" en="DESIGN OUTCOME" top={11700} />
          <HSAbs className="hs-outcome-points" style={{ left: 120, top: 11868, width: 1020 }}>
            <p>完成难度选择、个人挑战、联盟挑战、先锋教官、奖励预览、战绩记录等核心系统的交互设计</p>
            <p>全链路闭环体验：选择难度 → 确认出战 → 地图定位 → 战斗交互 → 领取奖励</p>
          </HSAbs>
          <HSAbs className="hs-outcome-metric" style={{ left: 120, top: 11952 }}>
            <strong>3+</strong>
            <b>核心界面</b>
            <span>完成交付</span>
          </HSAbs>
          {[hsTrial.outcome1, hsTrial.outcome2, hsTrial.outcome3].map((src, i) => <HSImg key={src} src={src} className="hs-phone" style={{ left: 300 + i*312, top: 11952, width: 280, height: 607 }} />)}
        </HSSection>
        </div>
      </FigmaScaleStage>
    </div>
  );
}

export function HighSeasCleanupGangExactCase() {
  const H = 8435;
  const flow = ['活动主界面|入口聚合', '功能入口|宝箱/英雄/排名', '条件判断|解锁条件校验', '状态分发|弹窗内容适配', '操作反馈|Toast/状态更新'];
  const heroTags = [
    { label: 'IP联动', left: 84 },
    { label: '活动玩法', left: 164 },
    { label: '奖励系统', left: 256 },
    { label: '状态机设计', left: 348 },
    { label: '渐进式披露', left: 452 },
  ] as const;
  const heroScatterDots = [
    { left: 84, top: 576 },
    { left: 184, top: 596 },
    { left: 284, top: 576 },
    { left: 384, top: 596 },
    { left: 484, top: 576 },
  ] as const;
  const resultOffsets = ['-0.03%', '-113.87%', '-341.74%', '-453.02%', '-564.31%'] as const;
  const states = [
    ['状态一: 未解锁', '条件未满足\n显示「前往解锁」按钮', hsGang.stateImg0, 'gray'],
    ['状态二: 可领取', '条件已满足\n显示「领取」按钮+红点', hsGang.stateImg1, 'yellow'],
    ['状态三: 已领取', '奖励已领取\n按钮置灰显示', hsGang.stateImg2, 'green'],
    ['状态四: 已达上限', '全部领完\n显示「已达到上限」', hsGang.stateImg3, 'gray'],
  ] as const;
  return (
    <div className="star-case-page hs-exact-page hs-gang-page">
      <FigmaScaleStage width={1280} height={H} className="hs-exact-stage hs-gang-stage" maxScale={1} fitToViewport viewportInset={0}>
        <div className="hs-gang-bg" />
        <div className="hs-gang-topbar" />
        <HSSection className="hs-sec hs-gang-cover" top={0} height={880}>
          <HSAbs className="gang-kicker" style={{ left: 80, top: 205 }}>INTERACTION DESIGN</HSAbs>
          <HSAbs className="gang-title" style={{ left: 80, top: 219 }}>清理海盗</HSAbs>
          <HSAbs className="gang-subtitle" style={{ left: 80, top: 312 }}>IP联动活动</HSAbs>
          <HSAbs className="gang-title-divider" style={{ left: 84, top: 388 }} />
          <HSAbs className="gang-desc" style={{ left: 84, top: 408, width: 666 }}>基于韩国漫画《入学佣兵》的IP联动合作，设计限时活动玩法，围绕「清理黑帮」核心玩法，构建阶段式进度体系、英雄馈赠奖励系统与目标任务驱动机制，打造沉浸式的联动游戏体验。</HSAbs>
          {heroTags.map((tag) => (
            <HSAbs key={tag.label} className="gang-tag" style={{ left: tag.left, top: 506 }}>
              {tag.label}
            </HSAbs>
          ))}
          <HSAbs className="gang-dot-matrix" style={{ left: 94, top: 87 }}>
            {Array.from({ length: 32 }, (_, idx) => <span key={idx} />)}
          </HSAbs>
          {heroScatterDots.map((dot, index) => (
            <HSAbs key={`${dot.left}-${dot.top}`} className={`gang-cluster-dot cluster-${index}`} style={{ left: dot.left, top: dot.top }} />
          ))}
          <HSAbs className="gang-crosshair-x" style={{ left: 740, top: 50 }} />
          <HSAbs className="gang-crosshair-y" style={{ left: 740, top: 40 }} />
          <HSAbs className="gang-hero-orbit gang-hero-orbit-large" style={{ left: 900, top: -100 }} />
          <HSAbs className="gang-hero-orbit gang-hero-orbit-small" style={{ left: 1050, top: 200 }} />
          <HSAbs className="gang-hero-shell" style={{ left: 790, top: 30 }}>
            <div className="gang-hero-glow" />
            <HSImg src={hsGang.eventIpSceneBg01} className="gang-hero-bg" style={{ left: 30, top: 46, width: 340, height: 737 }} />
            <div className="gang-hero-person-frame abs" style={{ left: 1, top: 103, width: 400, height: 670 }}>
              <img src={hsGang.eventIpCrewDetailShow02} className="gang-hero-person" alt="IP联动角色立绘" />
            </div>
          </HSAbs>
          <HSAbs className="gang-cover-divider" style={{ left: 80, top: 879 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={880} height={540}>
          <HSGangHeader n="01" title="项目概述" en="PROJECT OVERVIEW" top={880} />
          <HSAbs className="gang-desc gang-overview-desc" style={{ left: 80, top: 1000, width: 1120 }}>
            <p>韩国漫画《入学佣兵》IP联动活动「清理黑帮」是一个以多阶段进度推进为核心的限时活动玩法。</p>
            <p>玩家通过参与战区清理任务获得奖励，同时解锁联动英雄的专属馈赠系统。</p>
            <p>整个活动围绕「玩法参与→进度推进→奖励领取→英雄养成」的核心循环展开。</p>
          </HSAbs>
          {[
            '阶段式推进|1~3阶段渐进解锁\n逐步释放玩法内容\n保持长线新鲜感',
            '奖励驱动循环|清理黑帮获取奖励\n英雄馈赠系统激励\n目标任务引导方向',
            'IP角色深度融合|联动英雄立绘展示\n角色养成关联奖励\n情感化体验沉浸',
          ].map((text, i) => {
            const [t, b] = text.split('|');
            return (
              <HSAbs key={t} className="gang-overview-card" style={{ left: 80 + i * 390, top: 1122 }}>
                <small>{`0${i + 1}`}</small>
                <b>{t}</b>
                <i />
                <span>{b.split('\n').map((s) => <p key={s}>{s}</p>)}</span>
              </HSAbs>
            );
          })}
          <HSAbs className="gang-section-divider" style={{ left:80, top:1420 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={1420} height={1025}>
          <HSGangHeader n="02" title="活动主界面设计" en="MAIN ACTIVITY INTERFACE" top={1420} />
          <HSAbs className="gang-principle gang-main-principle" style={{ left:80, top:1587 }}>
            <em>DESIGN PRINCIPLE</em>
            <b>视觉层级 &amp; 信息架构</b>
            <i className="gang-principle-rule" />
            <span>标题区(高权重) → 玩法视窗(中权重) → 功能入口(低权重)<br/>通过视觉权重的三级分层引导视线自然流动，降低认知负担</span>
            <div className="gang-weight-bars" aria-label="视觉权重：高、中、低">
              <div><i /><small>高</small></div>
              <div><i /><small>中</small></div>
              <div><i /><small>低</small></div>
            </div>
          </HSAbs>
          <HSImg src={hsGang.panel23441} className="gang-phone" style={{ left: 552, top: 1586, width: 360, height: 780 }} />
          {[
            [932,1610,'活动标题区','展示活动名称、简介与倒计时，建立活动紧迫感与期待感'],
            [932,1808,'核心玩法视窗','岛屿地图沉浸式视觉呈现，将「清理黑帮」玩法具象化表达'],
            [932,1981,'英雄馈赠入口','Q版角色立绘吸引注意力，红点+数字提示可领取奖励'],
            [452,2109,'进度宝箱','全战区清理进度可视化，宝箱3种状态引导操作反馈'],
            [932,2256,'前往按钮','核心CTA行动召唤按钮，引导玩家进入战斗玩法'],
          ].map(([x,y,t,b])=><HSAbs key={String(t)} className={`gang-annotation ${Number(x)<600?'left':''}`} style={{ left:Number(x), top:Number(y) }}><i/><b>{t}</b><span>{b}</span></HSAbs>)}
          <HSAbs className="gang-section-divider" style={{ left:80, top:2445 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={2445} height={725}>
          <HSGangHeader n="03" title="核心交互流程" en="CORE INTERACTION FLOW" top={2445} />
          <HSAbs className="gang-desc gang-flow-desc" style={{ left:80, top:2565, width:1120 }}>
            <p>活动的交互流程围绕「主界面→子系统弹窗→条件判断→结果反馈」的路径展开。</p>
            <p>通过菱形决策节点（如「解锁条件是否满足？」）实现分支逻辑，</p>
            <p>确保不同状态的玩家都能获得清晰的操作引导与即时反馈。</p>
          </HSAbs>
          {flow.map((text,i)=>{const [t,b]=text.split('|'); return <React.Fragment key={t}><HSAbs className="gang-flow-card" style={{ left:80+i*235, top:2731 }}><small>{i+1}</small><b>{t}</b><span>{b}</span></HSAbs>{i<4?<HSAbs className="gang-flow-arrow" style={{ left:270+i*235, top:2796 }}><i /></HSAbs>:null}</React.Fragment>})}
          <HSAbs className="gang-theory-strip" style={{ left:80, top:2931 }}>
            <em>INTERACTION THEORY</em>
            <b>渐进式披露</b>
            <small>Progressive Disclosure</small>
            <span>活动分1~3阶段逐步解锁玩法内容，避免信息过载。每个阶段仅展示当前可操作的功能与入口，降低玩家的认知成本，提升探索动力与留存率。</span>
            <div className="gang-stage-dots">
              {['阶段1','阶段2','阶段3'].map((label, index) => <div key={label} style={{ left:index * 80 }}><i />{index < 2 && <u />}<small>{label}</small></div>)}
            </div>
          </HSAbs>
          <HSAbs className="gang-section-divider" style={{ left:80, top:3170 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={3170} height={1080}>
          <HSGangHeader n="04" title="英雄馈赠奖励状态机" en="HERO GIFT REWARD STATE MACHINE" top={3170} />
          <HSAbs className="gang-desc" style={{ left:80, top:3290, width:1120 }}>英雄馈赠系统通过4种状态的精确控制，为玩家提供清晰的行为引导与即时反馈。每种状态对应不同的视觉表现与操作逻辑，确保玩家始终理解当前可执行的操作。</HSAbs>
          {states.map(([t,b,img,type],i)=><React.Fragment key={t}><HSAbs className={`gang-state-title ${type}`} style={{ left:80+i*280, top:3381 }}>{t}</HSAbs><HSAbs className="gang-state-phone" style={{ left:80+i*280, top:3416, width:240, height:518 }}><img src={img} alt="" loading="lazy" decoding="async" /></HSAbs><HSAbs className="gang-state-caption" style={{ left:80+i*280, top:3950 }}>{b.split('\n').map(s=><p key={s}>{s}</p>)}</HSAbs>{i<3?<HSAbs className="gang-state-arrow" style={{ left:335+i*280, top:3640 }}>→</HSAbs>:null}</React.Fragment>)}
          <HSAbs className="gang-theory-strip small gang-state-theory" style={{ left:80, top:4038 }}>
            <em>NIELSEN HEURISTIC #1</em><b>系统状态可见性</b>
            <div className="gang-state-chain">{['未解锁','可领取','已领取','已达上限'].map((label,i)=><div key={label} className={`state-${i}`} style={{ left:i*140 }}><i />{i<3&&<><u /><b>→</b></>}<span>{label}</span></div>)}</div>
            <p>4种奖励状态通过差异化的按钮文案、颜色与红点提示，让玩家始终清晰感知当前奖励的领取状态，形成完整的状态闭环。</p>
          </HSAbs>
          <HSAbs className="gang-section-divider" style={{ left:80, top:4250 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={4250} height={1015}>
          <HSGangHeader n="05" title="目标任务系统" en="TARGET TASK SYSTEM" top={4250} />
          <HSAbs className="gang-principle gang-task-principle" style={{ left:80, top:4419 }}><em>GAME DESIGN THEORY</em><b>目标驱动设计</b><span>任务列表将活动目标分解为可量化的子目标，进度条(N/10)提供即时成就反馈，利用Zeigarnik效应——未完成的任务更具驱动力。</span><div className="gang-progress"><i /><b>7/10</b></div></HSAbs>
          <HSAbs className="gang-black-phone" style={{ left:552, top:4419 }}>
            <div className="gang-task-panel-crop abs" style={{ left:23, top:150, width:314, height:472 }}>
              <img src={hsGang.panel34651} alt="" loading="lazy" decoding="async" />
            </div>
          </HSAbs>
          {[
            [937,4665,'任务列表卡片','每条任务独立展示名称、进度(N/10)、奖励道具与操作按钮，信息密度适中'],
            [937,4863,'差异化按钮状态','黄色=待领取，绿色=进行中，蓝色=已完成，灰色=不可操作'],
            [937,5002,'底部Tab切换','「进度奖励」与「个人成就」双Tab，为不同目标导向的玩家提供入口'],
            [467,4769,'奖励道具预览','道具图标+数量直观展示，已获得打勾、未解锁显示锁标识'],
          ].map(([x,y,t,b])=><HSAbs key={String(t)} className={`gang-annotation task ${Number(x)<600?'left':''}`} style={{ left:Number(x), top:Number(y) }}><i/><b>{t}</b><span>{b}</span></HSAbs>)}
          <HSAbs className="gang-section-divider" style={{ left:80, top:5265 }} />
        </HSSection>

        <HSSection className="hs-gang-section" top={5265} height={1070}>
          <HSGangHeader n="06" title="英雄系统设计" en="HERO SYSTEM DESIGN" top={5265} />
          <HSAbs className="gang-desc gang-hero-desc" style={{ left:80, top:5385, width:1120 }}>
            <span>联动英雄系统提供「详情查看」与「立绘展示」两个维度的体验。</span>
            <span>详情面板聚焦功能——属性、技能、养成进度；</span>
            <span>立绘面板聚焦情感——全幅艺术画作沉浸展示。两者互补，满足理性决策与感性体验的双重需求。</span>
          </HSAbs>
          <HSAbs className="gang-hero-crop detail" style={{ left:100, top:5518 }}><img src={hsGang.sec7HeroDetailImg} alt="英雄详情面板" loading="lazy" decoding="async" /></HSAbs>
          <HSAbs className="gang-hero-crop portrait" style={{ left:520, top:5516 }}><img src={hsGang.sec7HeroPortraitImg} alt="联动英雄立绘" loading="lazy" decoding="async" /></HSAbs>
          <HSAbs className="gang-switch" style={{ left:443, top:5795 }}>⇄<span>点击切换</span></HSAbs>
          <HSAbs className="gang-emotion" style={{ left:860, top:5516 }}>
            <em>DON NORMAN'S THREE LEVELS</em>
            <b>情感化设计</b>
            {[
              ['♡','VISCERAL LEVEL','本能层','精美立绘引发审美愉悦'],
              ['⚡','BEHAVIORAL LEVEL','行为层','清晰的上阵/强化操作路径'],
              ['✦','REFLECTIVE LEVEL','反思层','IP角色带来情感共鸣与收藏欲'],
            ].map(([icon, level, title, body], index) => (
              <div key={title} className={`gang-emotion-card c${index}`}>
                <i>{icon}</i><em>{level}</em><b>{title}</b><span>{body}</span>
              </div>
            ))}
          </HSAbs>
          <HSAbs className="gang-hero-caption" style={{ left:100, top:6183 }}><b>英雄详情面板</b><span>展示英雄属性、技能、等级<br/>上阵/强化双CTA按钮<br/>功能导向的理性决策界面</span></HSAbs>
          <HSAbs className="gang-hero-caption" style={{ left:520, top:6183 }}><b>联动英雄立绘</b><span>全屏沉浸式立绘展示<br/>点击空白区域关闭的轻量交互<br/>情感导向的感性体验界面</span></HSAbs>
          <HSAbs className="gang-section-divider" style={{ left:80, top:6335 }} />
        </HSSection>

        <HSSection className="hs-gang-outcome" top={6335} height={2100}>
          <HSGangHeader n="07" title="设计成果" en="DESIGN OUTCOMES" top={6335} outcome />
          <HSAbs className="gang-desc" style={{ left:80, top:6515, width:740 }}>本案例完整展示了IP联动活动的交互设计思路：从宏观的阶段式架构设计，到微观的按钮状态机控制，每一个交互决策都有明确的理论依据支撑。通过视觉层级、渐进式披露、系统状态可见性等核心原则的综合运用，打造了一套兼顾功能性、易用性与情感化的活动交互体系。</HSAbs>
          <HSAbs className="gang-metric" style={{ left:931, top:6515 }}><b>5</b><span>交互界面</span><small>完整的多界面交互稿</small></HSAbs>
          {[0,1,2,3,4].map((i) => (
            <HSAbs key={i} className="gang-result-shot" style={{ left:79 + (i%3)*380 + (i > 2 ? 190 : 0), top:6740 + Math.floor(i/3)*800 }}>
              <img
                alt=""
                src={hsGang.collage}
                style={{ position:'absolute', height:'102.83%', width:'664.35%', maxWidth:'none', left:resultOffsets[i], top:'-2.81%' }}
              />
            </HSAbs>
          ))}
        </HSSection>
        <div className="hs-gang-bottombar" />
      </FigmaScaleStage>
    </div>
  );
}

export function renderStarFigmaCase(caseName?: string | null) {
  const name = String(caseName || '');
  if (name.includes('职力测评') || name.includes('CDST')) return <CdstCase />;
  if (name.includes('海军试炼')) return <HighSeasNavyTrialExactCase />;
  if (name.includes('清理帮派') || name.includes('清理海盗')) return <HighSeasCleanupGangExactCase />;
  if (name.includes('我为球狂')) return <MadCase />;
  return null;
}

export default renderStarFigmaCase;
