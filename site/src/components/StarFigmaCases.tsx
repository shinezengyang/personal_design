import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

/* ─── Navy (MAD Football) assets ─── */
const navy = {
  coverBg:       'https://www.figma.com/api/mcp/asset/de6e2718-957b-41db-89da-83c31bf9e0db',
  coverBadge:    'https://www.figma.com/api/mcp/asset/aaca2a1c-b8d4-46ca-93f9-0a3fe219218a',
  stadium:       'https://www.figma.com/api/mcp/asset/7a13c869-fe27-4ae7-b56b-1f9eee57f312',
  iconBg:        'https://www.figma.com/api/mcp/asset/3e7cb266-956d-4db4-8423-d6550a940e9a',
  iconCircle:    'https://www.figma.com/api/mcp/asset/8102b83a-84af-40cb-baf7-4d4c526cb0ba',
  iconApp:       'https://www.figma.com/api/mcp/asset/e6c543fb-8847-4554-939a-8ab47510acdd',
  guide:         'https://www.figma.com/api/mcp/asset/5a1047cc-0f0c-4470-95a9-5b18827a73a4',
  productBg:     'https://www.figma.com/api/mcp/asset/b8f12a93-9ac0-4a2a-bebc-ff7a38fb747c',
  productPhone:  'https://www.figma.com/api/mcp/asset/a4cb7f15-956f-487f-8f2a-d3792fc04d85',
  recommendBg:   'https://www.figma.com/api/mcp/asset/3f2e8801-398b-48bf-9d42-9b2bd454897a',
  recommendPhone:'https://www.figma.com/api/mcp/asset/4226cc92-b7d5-4dd0-b162-bd00e0e82cf3',
  mePhones:      'https://www.figma.com/api/mcp/asset/b8df2302-4dc5-4020-b812-e4c339e6d466',
  rechargeBg:    'https://www.figma.com/api/mcp/asset/ee6cb13a-2095-4a00-a4f7-8b459dfe134c',
  rechargePhone: 'https://www.figma.com/api/mcp/asset/683e9234-1b1f-46f9-8919-e864ee4b3159',
  dialogPhone:   'https://www.figma.com/api/mcp/asset/bcd71785-bdc3-4031-a705-256bbd25258c',
  structChart:   'https://www.figma.com/api/mcp/asset/d80490bb-7c3a-4ad4-82a1-834e3acdd57b',
  flowChart:     'https://www.figma.com/api/mcp/asset/f170496c-7827-4ed6-a91c-5178b00eb61f',
  wireframe:     'https://www.figma.com/api/mcp/asset/ee82396f-865e-486c-9a07-26b7c8913c01',
  endBg:         'https://www.figma.com/api/mcp/asset/929d4786-f554-46a7-89d1-255173226716',
  endLaptop:     'https://www.figma.com/api/mcp/asset/b689deac-95de-4e48-b812-488209f9fe1c',
  endIcons:      'https://www.figma.com/api/mcp/asset/67e9975a-c978-40be-bd5b-f3f09745f826',
  coverPhone:    'https://www.figma.com/api/mcp/asset/b34b3c8f-71c4-4243-b12d-266e13986115',
};

/* ─── Navy helper components ─── */

function NavyTitle({ x, y, w, align, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; children: React.ReactNode }) {
  return <div className="navy-sec-title abs" style={{ left: x, top: y, width: w, textAlign: align }}>{children}</div>;
}

function NavyLabel({ x, y, w, align, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; children: React.ReactNode }) {
  return <div className="navy-sec-label abs" style={{ left: x, top: y, width: w, textAlign: align }}>{children}</div>;
}

function NavyDivider({ x, y, w, dots }: { x: number; y: number; w: number; dots: [number, number][] }) {
  return (
    <>
      <div className="navy-divider-line abs" style={{ left: x, top: y, width: w }} />
      {dots.map(([dx, dy], i) => (
        <div key={i} className="navy-divider-dot abs" style={{ left: dx, top: dy }} />
      ))}
    </>
  );
}

function NavyCalloutLine({ x, y, w }: { x: number; y: number; w: number }) {
  return <div className="navy-callout-line abs" style={{ left: x, top: y, width: w }} />;
}

/* ─── NavyTrialCase (MAD Football App) ─── */

function NavyTrialCase() {
  const W = 2480;
  const totalH = 34946;

  return (
    <div className="star-case-page">
      <FigmaScaleStage width={W} height={totalH} className="navy-stage">

        {/* ── Cover (y=0, h=2318) ── */}
        <img src={navy.coverBg} className="abs" style={{ left: 0, top: 0, width: 2480, height: 1655 }} />
        <div className="navy-cover-badge abs" style={{ left: 60, top: 49, width: 596, height: 207 }}>
          <span>My Production<br />我的作品</span>
        </div>
        <img src={navy.coverBadge} className="abs" style={{ left: 1994, top: 1187, width: 286, height: 351 }} />
        <div className="navy-cover-intro abs" style={{ left: 219, top: 1763, width: 2043 }}>
          通过调查了解，许多球友对于比赛结果推断不准，导致足球博彩逢赌必输，即使他们能询问一些看球经验很丰富的老球迷，甚至向专业的分析师请教，但是由于不同的比赛有不同的体制，所以很多情况下是凭借运气来购买足球彩票，运气不好就预测不准，造成了很大的经济损失以及浪费了大量的时间精力，所以，对于一些没有太多时间来分析球赛的球友来说，特别是经验水平不足的新人，这款应用是为了广大球友设计的。
        </div>

        {/* ── Analyst (y=2555, h=1312) ── */}
        <img src={navy.stadium} className="abs" style={{ left: 498, top: 2751, width: 1489, height: 1116 }} />
        <NavyTitle x={0} y={2661} w={2480} align="center">Your Personal Analyst<br />你的私人分析师</NavyTitle>

        {/* ── Icon (y=3788, h=2200) ── */}
        <img src={navy.iconBg} className="abs" style={{ left: 0, top: 3788, width: 2480, height: 2200 }} />
        <NavyTitle x={253} y={4197} w={833}>Icon Design<br />图标设计</NavyTitle>
        <img src={navy.iconCircle} className="abs" style={{ left: 384, top: 4741, width: 678, height: 829 }} />
        <img src={navy.iconApp} className="abs" style={{ left: 1470, top: 4745, width: 833, height: 833 }} />

        {/* ── Guide (y=6004, h=2146) — composite for 3D perspective cards ── */}
        <img src={navy.guide} className="abs" style={{ left: 0, top: 6004, width: 2480, height: 2146 }} />
        <NavyTitle x={290} y={6004} w={1026}>Concise Guide<br />简介引导</NavyTitle>

        {/* ── Product (y=8605, h=1662) ── */}
        <NavyTitle x={0} y={8607} w={2480} align="center">Product Detail<br />产品细节</NavyTitle>
        <img src={navy.productBg} className="abs" style={{ left: 0, top: 9031, width: 2480, height: 1236 }} />
        <img src={navy.productPhone} className="abs navy-phone" style={{ left: 1119, top: 9216, width: 592, height: 916 }} />

        {/* ── Recommend (y=10583, h=3487) ── */}
        <NavyTitle x={200} y={10622} w={854}>Recommend<br />推荐</NavyTitle>
        <NavyDivider x={573} y={10761} w={1707} dots={[[554, 10738], [1406, 10738], [2258, 10738]]} />
        <img src={navy.recommendBg} className="abs" style={{ left: 1101, top: 10896, width: 1379, height: 3060 }} />
        <img src={navy.recommendPhone} className="abs navy-phone" style={{ left: 1327, top: 11689, width: 773, height: 2332 }} />
        <NavyLabel x={207} y={11369} w={558}>Forecast<br />预测赛果</NavyLabel>
        <NavyLabel x={207} y={12027} w={421}>Live<br />实时比赛</NavyLabel>

        {/* ── Me (y=14467, h=2345) ── */}
        <NavyTitle x={204} y={14467} w={269}>Me<br />我的</NavyTitle>
        <NavyDivider x={574} y={14624} w={1706} dots={[[555, 14601], [1406, 14601], [2258, 14601]]} />
        <img src={navy.mePhones} className="abs" style={{ left: 633, top: 14880, width: 1670, height: 1768 }} />
        <NavyLabel x={1809} y={14904} w={445} align="right">Classify<br />分类</NavyLabel>
        <NavyCalloutLine x={1424} y={15001} w={347} />
        <NavyLabel x={204} y={15334} w={421}>Record<br />充值记录</NavyLabel>
        <NavyCalloutLine x={641} y={15434} w={302} />
        <NavyLabel x={209} y={16054} w={527}>Invitation<br />邀请码</NavyLabel>
        <NavyCalloutLine x={645} y={16165} w={328} />
        <NavyLabel x={1616} y={16455} w={638} align="right">Unlock<br />已解锁的比赛</NavyLabel>
        <NavyCalloutLine x={1500} y={16538} w={275} />

        {/* ── Recharge (y=17286, h=2147) ── */}
        <NavyTitle x={151} y={17286} w={660}>Recharge<br />充值</NavyTitle>
        <NavyDivider x={573} y={17424} w={1707} dots={[[554, 17401], [1405, 17401], [2258, 17401]]} />
        <img src={navy.rechargeBg} className="abs" style={{ left: 45, top: 17707, width: 2420, height: 1726 }} />
        <img src={navy.rechargePhone} className="abs navy-phone" style={{ left: 298, top: 17805, width: 1952, height: 1391 }} />

        {/* ── Dialog (y=20051, h=3065) ── */}
        <NavyTitle x={0} y={20071} w={2480} align="center">Dialog Box Pops Up<br />弹出对话框</NavyTitle>
        <div className="navy-divider-line abs" style={{ left: 0, top: 20119, width: 2480 }} />
        <img src={navy.dialogPhone} className="abs navy-phone" style={{ left: 633, top: 20616, width: 1209, height: 2500 }} />

        {/* ── Charts (y=23696, h=7579) ── */}
        <NavyTitle x={151} y={23694} w={1111}>Structure Chart<br />结构图</NavyTitle>
        <img src={navy.structChart} className="abs" style={{ left: 2, top: 24178, width: 2480, height: 1402 }} />
        <NavyTitle x={155} y={26010} w={770}>Flow Chart<br />流程图</NavyTitle>
        <img src={navy.flowChart} className="abs" style={{ left: 0, top: 26426, width: 2480, height: 400 }} />
        <NavyTitle x={155} y={27314} w={1172}>Wireframe Chart<br />线框图</NavyTitle>
        <img src={navy.wireframe} className="abs" style={{ left: 25, top: 27815, width: 2433, height: 3460 }} />

        {/* ── End (y=31852, h=3094) ── */}
        <img src={navy.endBg} className="abs" style={{ left: 0, top: 31852, width: 2480, height: 1504 }} />
        <img src={navy.endLaptop} className="abs" style={{ left: 957, top: 32391, width: 765, height: 512 }} />
        <div className="navy-end-badge abs" style={{ left: 1006, top: 33488, width: 475, height: 143 }} />
        <NavyTitle x={1080} y={33527} w={350} align="center">ICON</NavyTitle>
        <div className="navy-divider-line abs" style={{ left: 4, top: 33556, width: 2480 }} />
        <img src={navy.endIcons} className="abs" style={{ left: 444, top: 33883, width: 1600, height: 379 }} />

      </FigmaScaleStage>
    </div>
  );
}

/* ─── CDST assets ────────────────────────────────────────────────
 * The page remains React/CSS driven. Only the original bitmap assets are
 * referenced here. Stable local files are used where available; the remaining
 * Figma image nodes use the refreshed node-specific URLs instead of one long
 * flattened page screenshot.
 */
const cdst = {
  /* 痛点图标：本地单图资源 */
  pain1: publicUrl('/images/xingji/cdst/assets/pain-1.png'),
  pain2: publicUrl('/images/xingji/cdst/assets/pain-2.png'),
  pain3: publicUrl('/images/xingji/cdst/assets/pain-3.png'),
  pain4: publicUrl('/images/xingji/cdst/assets/pain-4.png'),
  pain5: publicUrl('/images/xingji/cdst/assets/pain-5.png'),

  /* 竞品图标卡：底板与 Logo 合并为各自独立的小图 */
  competitorA: publicUrl('/images/xingji/cdst/assets/competitor-a.png'),
  competitorB: publicUrl('/images/xingji/cdst/assets/competitor-b.png'),
  competitorC: publicUrl('/images/xingji/cdst/assets/competitor-c.png'),
  competitorD: publicUrl('/images/xingji/cdst/assets/competitor-d.png'),
  compDivider: publicUrl('/images/xingji/cdst/assets/competitor-divider.png'),

  /* 用户画像：每个人物头像都是独立本地图片 */
  personaA: publicUrl('/images/xingji/cdst/assets/persona-a.png'),
  personaB: publicUrl('/images/xingji/cdst/assets/persona-b.png'),
  personaC: publicUrl('/images/xingji/cdst/assets/persona-c.png'),
  personaD: publicUrl('/images/xingji/cdst/assets/persona-d.png'),

  /* 产品结构 / 流程：本地单图资源 */
  struct: publicUrl('/images/xingji/cdst/assets/product-structure.png'),
  flow: publicUrl('/images/xingji/cdst/assets/product-flow.png'),

  /* 交互原型主画面：刷新为 Figma 中对应的独立图片节点 */
  prototypeSalary: 'https://www.figma.com/api/mcp/asset/82b7305f-e03a-4302-b1be-915e005ea6ed',
  prototypeTest: 'https://www.figma.com/api/mcp/asset/daf7c77d-efd6-45a7-8deb-2c658c297651',
  prototypeStatus: 'https://www.figma.com/api/mcp/asset/2d7e0e0f-1305-44a6-8d59-bc86d6129eab',

  /* UI 视觉：仍按独立手机稿/装饰图分层渲染 */
  uiHome1: 'https://www.figma.com/api/mcp/asset/0b5a4c2e-dddc-4db4-8f8e-e82828ce46ce',
  uiHome2: 'https://www.figma.com/api/mcp/asset/1d0517b5-a46f-46e8-9220-9e779b6391a3',
  uiStrip: 'https://www.figma.com/api/mcp/asset/2b8ee9a3-f8d1-4a78-9898-1a0672d859a3',

  uiLevelMain: 'https://www.figma.com/api/mcp/asset/847cdc21-c552-4af2-bed7-dc939792733e',
  uiLevelMid: 'https://www.figma.com/api/mcp/asset/52a9e1f8-f6b9-49cc-bebd-cdd23d2d0378',
  uiLevelStack1: 'https://www.figma.com/api/mcp/asset/262e6e26-ea0d-44dd-b212-1b03223d7019',
  uiLevelStack2: 'https://www.figma.com/api/mcp/asset/934ced7a-2e3e-495a-b053-4191706d88b2',
  uiLevelStack3: 'https://www.figma.com/api/mcp/asset/db116011-d50c-4a76-8417-9d66930f2bd6',
  uiLevelShadow: 'https://www.figma.com/api/mcp/asset/7e4328c2-3dab-42e4-86f8-ec590510d3cc',

  uiOther1: 'https://www.figma.com/api/mcp/asset/aed443a6-c0ee-4055-a8a4-18c6091fa3ee',
  uiOther2: 'https://www.figma.com/api/mcp/asset/171d6f41-f3eb-4afd-a028-4813d5ba15da',
  uiOther3: 'https://www.figma.com/api/mcp/asset/af452cf9-73e2-4907-8b6b-396f237fa345',
  uiOther4: 'https://www.figma.com/api/mcp/asset/b8a180c6-40f0-4565-b353-545bbb3dab89',
  uiOther5: 'https://www.figma.com/api/mcp/asset/a67660ff-a852-4840-9cc8-37d11b452b5c',
  uiOtherStrip: 'https://www.figma.com/api/mcp/asset/6896e592-1c27-4e72-9428-4f6b57ada457',
};

function CdstCase() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('.cdst-stage > *'));
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
  /* 交互 sub-block bases (frame y inside 交互) */
  const I = {
    salary: SEC.inter + 293,   // 组19  -> 14119.5
    test: SEC.inter + 3289,    // 组20  -> 17115.5
    profile: SEC.inter + 5535, // 组21  -> 19361.5
    status: SEC.inter + 8426,  // 组22  -> 22252.5
  };
  /* 视觉 sub-block bases (frame y inside 视觉) */
  const V = {
    home: SEC.visual + 280.5,   // 组7  -> 24878
    level: SEC.visual + 1861.5, // 组6  -> 26459
    other: SEC.visual + 4923.5, // 组9  -> 29521
    icon: SEC.visual + 6321.5,  // 组10 -> 30919
  };

  return (
    <div ref={pageRef} className="star-case-page cdst-page">
      <FigmaScaleStage width={2480} height={33204} className="cdst-stage">
        {/* ── 头图 hero (y0 h1471) ── */}
        <img
          src={publicUrl('/images/xingji/cdst/cdst-hero-cover.png')}
          className="abs img-cover"
          style={{ left: 0, top: 0, width: 2480, height: 1471 }}
          alt=""
        />

        {/* ── 项目概括 + 市场分析 (base 1495.5, h1887) ── */}
        <CdstTitle y={SEC.project} title="项目概括" en="Project Overview" w={337} />
        <div className="cdst-subtitle blue end" style={{ left: 0, top: SEC.project + 300.5, width: 693 }}>项目介绍 <span>Introduction</span></div>
        <div className="cdst-paragraph black" style={{ left: 210.5, top: SEC.project + 435.5, width: 2060 }}>职力测评(CDST4U)是专门为职场新人提供一战式职业相关能力自测的平台。致力为职场新人提供全方位自测工具，帮助新人建立“知己知彼”的健康职业发展道路。</div>
        <div className="cdst-subtitle blue" style={{ left: 209.5, top: SEC.project + 768.5 }}>市场分析 <span>market analysis</span></div>
        <div className="cdst-paragraph white" style={{ left: 212.5, top: SEC.project + 932.5, width: 1170 }}>经市场调研发现：<br />　　2010-2018年的毕业生人数按照2%-5%的同比增长率逐年增长，近8年间累计毕业生人数达到6526万人。2018年普通高校毕业生人数共计820万人，与2010年相比增长了160万人，再创新高。<br />　　大学生职前教育的主要目标群体为本科毕业生和海归群体，根据2017年中国的本科毕业生和海归学生分别为450万、43万人，以客单价约为4000元来计算，2017年中国的职前教育市场规模约为30亿元。随着我国高校人数的扩招和出国留学热潮，未来职前教育的目标群体将会逐渐扩大，市场规模也将不断攀升。</div>
        <CdstMarketChart left={1378.5} top={SEC.project + 975.5} />

        {/* ── 痛点分析 (base 3695.5, h1373) — all white text ── */}
        <CdstTitle y={SEC.pain} title="痛点分析" en="User Pain Points’Analysis" w={488} />
        <img src={cdst.pain1} className="abs img-cover" style={{ left: 813.5, top: SEC.pain + 625.5, width: 359, height: 359 }} />
        <img src={cdst.pain2} className="abs img-cover" style={{ left: 1358.5, top: SEC.pain + 669.5, width: 319, height: 319 }} />
        <img src={cdst.pain4} className="abs img-cover" style={{ left: 1688.5, top: SEC.pain + 735.5, width: 230, height: 230 }} />
        <img src={cdst.pain3} className="abs img-cover" style={{ left: 1112.5, top: SEC.pain + 863.5, width: 293, height: 293 }} />
        <img src={cdst.pain5} className="abs img-cover" style={{ left: 617.5, top: SEC.pain + 850.5, width: 230, height: 230 }} />
        <div className="pain-text" style={{ left: 975.5, top: SEC.pain + 309.5 }}><b>产业教育分离：</b><br />产教分离导致高校教育和企业需求<br />之间产生的信息差，是大部分大学<br />生职业选择困惑的源头。</div>
        <div className="pain-text" style={{ left: 198.5, top: SEC.pain + 1061.5 }}><b>就业压力巨大：</b><br />宏观经济下行压力加大和结构性改<br />革产生的行业变化，在一定程度上<br />影响就业形势，就业仍然是社会各<br />方都关注的话题。</div>
        <div className="pain-text" style={{ left: 1579.5, top: SEC.pain + 1009.5 }}><b>职业规划缺失：</b><br />老师基本都是院党委书记或学工教<br />师，老师们本身就缺少社会上相关<br />职业的经验，当然也就无法给出实<br />际中行业发展、企业概况、岗位要<br />求，只能照本宣科。</div>

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
          <p>爱思益是与企业合作进行课程教研，甚至将爱思益课程作为新员工入职培训课，作为合作企业的全新招聘渠道。</p>
          <p>职业蛙拥有自主研发“在线求职竞争力评估系统”，数据覆盖学员求职全过程的特色。</p>
          <p>职优你前期在北美独家签约一些高校，成为后续和国内高校合作的背书。</p>
          <p>职梦师具有通过每周两场免费在线讲座获客，以及付费群体90%是中国留学生的优势。</p>
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
        <div className="cdst-paragraph white" style={{ left: 201.5, top: SEC.struct + 249.5, width: 1300 }}>说明：<br />　　该项目共分为小程序-用户端、运营后台系统两部分；<br />　　　本次设计主要针对小程序-用户端展开。</div>
        <img src={cdst.struct} className="abs img-cover" style={{ left: 198.5, top: SEC.struct + 703.5, width: 2082, height: 1052 }} />

        {/* ── 产品流程 (base 12691.5, h819) ── */}
        <CdstTitle y={SEC.flow} title="产品流程" en="Product Flow" w={268} />
        <div className="cdst-paragraph white" style={{ left: 200.5, top: SEC.flow + 256.5, width: 1400, lineHeight: '50px' }}>用户测试与咨询流程</div>
        <img src={cdst.flow} className="abs img-cover" style={{ left: 199.5, top: SEC.flow + 437.5, width: 2080, height: 382 }} />

        {/* ── 交互原型 (base 13826.5, h10413) ── */}
        <CdstTitle y={SEC.inter} title="交互原型" en="Interactive Prototype" w={415} />

        {/* 薪资计算器 (组19 base 14119.5) */}
        <div className="interaction-title" style={{ left: 280.5, top: I.salary - 0.5 }}>|　　薪资计算器　　|<br /><span>用户选择自己所期望的城市、期望的行业、毕业院校、最高学历，系统将估算出用户毕业后大<br />概的工资水平，从而对自身能够有基本的判断，并且了解当地的五险一金情况。</span></div>
        <img src={cdst.prototypeSalary} className="abs proto img-cover" style={{ left: 292.5, top: I.salary + 248.5, width: 1311, height: 2422 }} />
        <Anno x={1263} y={I.salary + 437} text="计算该城市的开支" vertical bar={{ dir: 'v', len: 201, at: -20 }} />
        <Anno x={1190.5} y={I.salary + 750.5} text="进入测试页面" hidden />
        <Anno x={880.5} y={I.salary + 2111.5} text="计算出最低的薪资水平" black />
        <Anno x={244} y={I.salary + 2257} text="当地五险一金明细参考" vertical />
        <Anno x={577} y={I.salary + 2374} text="向下拖动" vertical />
        <Anno x={829.5} y={I.salary + 2709.5} text="进入职力测评小程序" />
        <Anno x={306.5} y={I.salary + 2684.5} dim multiline lines={['位置：底部（Home', ' Indicator 上方）', '交互：页面隐出遮罩', '层，底部弹出，可', '手动关闭']} />
        <Anno x={1625.5} y={I.salary + 1191.5} dim multiline lines={['位置：右部（Home', ' Indicator 上方）', '交互：页面隐出遮罩', '层，向左滑出，点击', '遮罩处操作列表关闭']} />

        {/* 测评 (组20 base 17115.5) */}
        <div className="interaction-title" style={{ left: 273.5, top: I.test - 0.5 }}>|　　测评　　|<br /><span>了解自己适合的职业、职业竞争力上的优劣势以及自我内心的强度；了解职场社会，发现自我<br />职业道路选择项。借力自测工具，不断开发自己的职业潜能，获得更好的职业生涯。</span></div>
        <img src={cdst.prototypeTest} className="abs proto img-cover" style={{ left: 199.5, top: I.test + 238.5, width: 1696, height: 1844 }} />
        <Anno x={533} y={I.test + 336} text="左右滑动" vertical />
        <Anno x={907} y={I.test + 429} text="向下滑动" vertical />
        <Anno x={1190.5} y={I.test + 750.5} text="进入测试页面" />
        <Anno x={1247} y={I.test + 429} text="向下滑动" vertical />
        <Anno x={667.5} y={I.test + 847.5} text="交互：向下推拉" dim />
        <Anno x={1936.5} y={I.test + 1849} multiline lines={['点击单选按钮', '位置：底部', '交互：底部弹出']} firstBig />

        {/* 个人资料 (组21 base 19361.5) */}
        <div className="interaction-title" style={{ left: 284.5, top: I.profile - 0.5 }}>|　　个人资料　　|</div>
        <CdstProfilePrototype left={281.5} top={I.profile + 131.5} />
        <Anno x={918.5} y={I.profile + 2593.5} text="滑动按钮" />
        <Anno x={308.5} y={I.profile + 2565.5} multiline lines={['位置：底部', '交互：页面隐出遮罩', '层，底部弹出，可滚', '动操作列表，点击取', '消关闭(以上与此类页', '面相同的交互一致）']} />
        <Anno x={1361.5} y={I.profile + 2602.5} multiline lines={['位置：页面中部偏上', '交互：5S后渐隐消失']} />

        {/* 状态 / 咨询 (组22 base 22252.5) */}
        <div className="interaction-title" style={{ left: 287.5, top: I.status - 0.5 }}>|　　状态　　|<br /><span>选择职业状态</span></div>
        <img src={cdst.prototypeStatus} className="abs proto img-cover" style={{ left: 235.5, top: I.status + 169.5, width: 1727, height: 1817 }} />
        <Anno x={1028.5} y={I.status + 127.5} text="交互：向下推拉" dim />
        <Anno x={1989.5} y={I.status + 510.5} multiline lines={['位置：页面中部', '交互：底部弹出,', '可手动关闭']} />
        <div className="interaction-title plain" style={{ left: 292.5, top: I.status + 1568.5 }}>|　　咨询　　|</div>
        <Anno x={226} y={I.status + 1130} text="咨询职前教育心理学导师" vertical black />

        {/* ── UI视觉 (base 24597.5, h8607) ── */}
        <CdstTitle y={SEC.visual} title="UI视觉" en="UI Vision" w={201} />
        <div className="visual-note" style={{ left: 1527.5, top: SEC.visual + 2498.5, width: 700 }}>统一视觉风格，设计语言营造品牌基调，加强用户对品牌的认知<br /><br />使用层级化的卡片设计，轻量级的设计让用户长时间翻阅不易引起视觉疲劳</div>

        {/* 主页形象 (组7 base 24878) */}
        <div className="visual-label" style={{ left: 286.5, top: V.home }}>—　　主页形象　　—</div>
        <div className="cdst-paragraph white" style={{ left: 451.5, top: V.home + 146, width: 1700, lineHeight: '50px' }}>创建了一套合理的网络系统和界面规范，来增强软件扩展和统一性</div>
        <img src={cdst.uiStrip} className="abs img-cover" style={{ left: 147.5, top: V.home + 1407, width: 1696, height: 294, opacity: .5 }} />
        <img src={cdst.uiStrip} className="abs img-cover" style={{ left: 680.5, top: V.home + 1496, width: 1696, height: 294, opacity: .5 }} />
        <img src={cdst.uiHome1} className="abs phone-hero img-cover" style={{ left: 504.68, top: V.home + 271.97, width: 920.79, height: 1011.46 }} />
        <img src={cdst.uiHome2} className="abs phone-hero img-cover" style={{ left: 979.32, top: V.home + 366.45, width: 918.29, height: 1010.14 }} />

        {/* 层级页面 (组6 base 26459) */}
        <div className="visual-label dark" style={{ left: 271.5, top: V.level }}>—　　层级页面　　—</div>
        <img src={cdst.uiLevelShadow} className="abs img-cover" style={{ left: 269.5 + 549, top: V.level + 1524 + 811, width: 1346, height: 408, opacity: .9 }} />
        <img src={cdst.uiLevelMain} className="abs phone-hero img-cover" style={{ left: 269.5 + 90, top: V.level + 147, width: 497, height: 1243 }} />
        <img src={cdst.uiLevelMid} className="abs phone-hero img-cover" style={{ left: 269.5 + 627, top: V.level + 372, width: 451, height: 1019 }} />
        <img src={cdst.uiLevelStack3} className="abs phone-hero img-cover" style={{ left: 269.5 + 549 + 0.47, top: V.level + 1524 + 140.99, width: 488.53, height: 1070.01 }} />
        <img src={cdst.uiLevelStack2} className="abs phone-hero img-cover" style={{ left: 269.5 + 549 + 347.6, top: V.level + 1524 + 80, width: 484.4, height: 1064 }} />
        <img src={cdst.uiLevelStack1} className="abs phone-hero img-cover" style={{ left: 269.5 + 549 + 673.74, top: V.level + 1524, width: 486.26, height: 1072 }} />

        {/* 其他界面 (组9 base 29521) */}
        <div className="visual-label" style={{ left: 272.5 + 14, top: V.other }}>—　　其他界面　　—</div>
        <img src={cdst.uiOtherStrip} className="abs img-cover" style={{ left: 272.5, top: V.other + 948, width: 1931, height: 308, opacity: .9 }} />
        <img src={cdst.uiOther1} className="abs phone-hero img-cover" style={{ left: 272.5, top: V.other + 255, width: 371, height: 801 }} />
        <img src={cdst.uiOther2} className="abs phone-hero img-cover" style={{ left: 272.5 + 361, top: V.other + 224, width: 405, height: 875 }} />
        <img src={cdst.uiOther3} className="abs phone-hero img-cover" style={{ left: 272.5 + 741, top: V.other + 161, width: 447, height: 966 }} />
        <img src={cdst.uiOther4} className="abs phone-hero img-cover" style={{ left: 272.5 + 1163, top: V.other + 210, width: 412, height: 891 }} />
        <img src={cdst.uiOther5} className="abs phone-hero img-cover" style={{ left: 272.5 + 1561, top: V.other + 259, width: 370, height: 800 }} />

        {/* ICON & 配色 (组10 base 30919) */}
        <div className="visual-label" style={{ left: 197.5 + 902, top: V.icon }}>ICONH&amp;配色</div>
        {/* icon glyph cluster (组15 @ left 333, top 771 within 组10) */}
        {([
          ['30862268-fbae-4a0f-8f22-334e8440de2d', 425, 4, 113, 147],
          ['f99cf099-573a-4fe3-81b0-24528244e2a0', 834, 15, 137, 127],
          ['023b802d-0e4b-4f98-9129-6fdb5878a954', 1286, 0, 139, 133],
          ['d58cf41b-cdc0-4dad-b1c4-572769b29286', 0, 2, 143, 151],
          ['e6c210b6-61fe-4c11-81e9-f6dec65b898c', 40, 820, 89, 95],
          ['8fc48c89-0ca0-44d0-9a77-85ee46a10cd5', 449, 820, 89, 88],
          ['557718d3-d1d4-403a-bbab-5a00b1c6114d', 858, 818, 89, 88],
          ['6f32134c-eb2b-4651-8a4e-ad428835f6d3', 1312, 816, 88, 88],
          ['fddb2a45-552a-4c22-b178-3146773dc26c', 21, 317, 134, 134],
          ['b7472369-928b-4db5-a630-35056844a323', 62, 317, 41, 134],
          ['accdb998-633a-4e8f-a659-5a1f25974a86', 836, 316, 132, 133],
          ['50a0d443-65a7-4bcd-9102-8b0d7c5f4f36', 1306, 327, 109, 135],
          ['ada66750-7c9a-457b-8f54-4e59dcc4c45a', 422, 324, 132, 129],
          ['1627e91b-031c-4cad-b2cb-4e18de2c7e01', 455, 592, 74, 88],
          ['5cafb531-e97b-4836-a0e6-7a950915acf1', 865, 603, 77, 77],
          ['73ba1c0b-a4dc-427a-b828-1e8071c35f3c', 43, 589, 77, 79],
          ['dc29857d-f17e-4b4c-bce4-e2a96f6871bc', 1310, 602, 89, 78],
        ] as [string, number, number, number, number][]).map(([id, ix, iy, iw, ih], iconIndex) => (
          <span key={id} className="abs cdst-symbol-icon"
            style={{ left: 530.5 + ix, top: V.icon + 771 + iy, width: iw, height: ih }}>
            {['◇', '○', '△', '＋'][iconIndex % 4]}
          </span>
        ))}
        <div className="color-grid" style={{ left: 197.5, top: V.icon + 190 }}>
          {[
            ['#efc28b', '#fff'], ['#ec965d', '#fefefe'], ['#7f8bd3', '#fff'], ['#64a6da', '#fff'], ['#fb6e5a', '#fff'],
            ['#04b77f', '#fff'], ['#56c1bb', '#fefefe'], ['#626a81', '#fff'], ['#fdfdfd', '#111'], ['#979797', '#fff'],
          ].map(([bg, fg]) => <span key={bg} style={{ background: bg, color: fg }}>{bg}</span>)}
        </div>
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

function CdstProfilePrototype({ left, top }: { left: number; top: number }) {
  return (
    <div className="abs cdst-profile-prototype proto" style={{ left, top }}>
      <svg className="cdst-profile-lines" viewBox="0 0 1999 2476" aria-hidden="true">
        <path d="M136 112 H232 V436 H360 V514 H660 V436 H792 V214 H918 V514 H1090 V436 H1212 V116 H1350 V514 H1510 V438 H1782 V112 H1872" />
        <path d="M78 852 H232 V1056 H360 V1130 H660 V1056 H792 V910 H918 V1130 H1090 V1056 H1212 V840 H1350 V1130 H1510 V1056 H1788 V842 H1872" />
        <path d="M78 1434 H232 V1632 H360 V1718 H660 V1632 H792 V1482 H918 V1718 H1090 V1632 H1212 V1498 H1350 V1718 H1510 V1632 H1788 V1440 H1872" />
        <path d="M78 2040 H232 V2234 H360 V2314 H660 V2234 H792 V2172 H918 V2314" />
      </svg>
      {profilePhones.map((phone, index) => (
        <CdstPhone key={`${phone.screen}-${index}`} {...phone} />
      ))}
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
  screen: (typeof profilePhones)[number]['screen'];
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

function PhoneScreen({ type }: { type: (typeof profilePhones)[number]['screen'] }) {
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
function CdstTitle({ y, title, en, w }: { y: number; title: string; en: string; w?: number }) {
  return (
    <div className="cdst-section-title" style={{ top: y, left: 199.5, width: w }}>
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

/* ─── MAD assets (我为球狂 / 原型作品, Figma 9434:2339) ─── */
const mad = {
  /* 组 10 — cover */
  coverBg:        'https://www.figma.com/api/mcp/asset/e9ce4152-571e-40ef-b24f-bd9a6156e1ec',
  coverSplash:    'https://www.figma.com/api/mcp/asset/f744cad6-c12b-43ea-bc0b-3b6f4ccf741f',
  coverBadge:     'https://www.figma.com/api/mcp/asset/a688df50-59e8-42ee-8b47-52307259fd45',
  coverStroke:    'https://www.figma.com/api/mcp/asset/6504e8da-319e-4a45-a6c2-eec7a7d960bc',
  /* 组 13 — analyst */
  analyst:        'https://www.figma.com/api/mcp/asset/bd48a412-b20b-4562-884e-ab17d91b6c66',
  /* 组 12 — icon design */
  iconBg:         'https://www.figma.com/api/mcp/asset/6c2e90e2-adb0-47fc-a3f7-6fdd27cb377b',
  iconPlate:      'https://www.figma.com/api/mcp/asset/6e377531-2e4d-4972-8bfe-412ec8ae0301',
  iconGlyph:      'https://www.figma.com/api/mcp/asset/7f45ea9a-225d-4137-b9b4-6dc39d412a44',
  iconBig:        'https://www.figma.com/api/mcp/asset/0bbe32f4-007c-44eb-8c4f-5b7116572f73',
  /* 组 5 — concise guide (4 perspective cards) */
  guideCard1:     'https://www.figma.com/api/mcp/asset/b3465e13-8578-4f7c-8c14-eae4348e1fdc',
  guideShot1:     'https://www.figma.com/api/mcp/asset/dae70e5a-cf5c-41f3-b874-e700c19a71ac',
  guideCard2:     'https://www.figma.com/api/mcp/asset/e78ba632-b93a-4fc5-872e-1d798f97a64f',
  guideShot2:     'https://www.figma.com/api/mcp/asset/bc07ed99-cf7e-40be-9bcf-75543b7fc1ae',
  guideCard3:     'https://www.figma.com/api/mcp/asset/d9dfc27f-e9fd-4058-96f9-f0741f84b1aa',
  guideShot3:     'https://www.figma.com/api/mcp/asset/48786047-6a28-43e7-ad1e-1d8f21a43105',
  guideCard4:     'https://www.figma.com/api/mcp/asset/99288dfa-3f05-4b52-be0e-2a65d0a26f0a',
  guideShot4:     'https://www.figma.com/api/mcp/asset/56b15bf8-406c-44a3-b890-355881b52ad8',
  /* 组 14 — product detail */
  productBg:      'https://www.figma.com/api/mcp/asset/b9282222-5d6a-4a8e-bb98-45fa4a1a0e86',
  productPhone:   'https://www.figma.com/api/mcp/asset/230c4b93-f203-47f2-a884-84bba508017f',
  /* 组 15 — recommend */
  recommendGlow:  'https://www.figma.com/api/mcp/asset/d161276d-d1e6-4da6-8162-927408f30fe8',
  recommendPhone: 'https://www.figma.com/api/mcp/asset/d56cf839-bd05-4f6f-a65a-d58f222fc0c6',
  recDivider:     'https://www.figma.com/api/mcp/asset/fcb59c61-19f5-45c0-b5b2-79018d373c80',
  recDotL:        'https://www.figma.com/api/mcp/asset/6b71db93-6c06-4fd1-8014-51d478addff7',
  recDotM:        'https://www.figma.com/api/mcp/asset/8f067e1a-63bf-4b37-8a7a-0241d15cc5fe',
  recDotR:        'https://www.figma.com/api/mcp/asset/6b65f6b8-a055-480f-a19e-ebf9a573cae7',
  /* 组 16 — me (cascade of 5 phones + circular zoom callout) */
  mePhones:       'https://www.figma.com/api/mcp/asset/5600e09e-9a9b-4899-94ff-1fb498a9233c',
  meDivider:      'https://www.figma.com/api/mcp/asset/2babb377-d79d-46e3-a790-ed8ad7706d8e',
  meDotL:         'https://www.figma.com/api/mcp/asset/4b26053f-4b25-494e-861f-0355a1fff8cd',
  meDotM:         'https://www.figma.com/api/mcp/asset/a1dbed91-f324-46dd-a976-70b3b5825d7d',
  meDotR:         'https://www.figma.com/api/mcp/asset/d4c1e532-06ae-4ba2-8170-f0bebe1ba7e8',
  /* 组 18 — recharge */
  rechargeBg:     'https://www.figma.com/api/mcp/asset/fec2adf0-f0f8-425b-87c4-34a36bdfddcf',
  rechargePhone:  'https://www.figma.com/api/mcp/asset/1613672d-b91c-4574-accb-52b6b096bca1',
  rcDivider:      'https://www.figma.com/api/mcp/asset/182a4253-c1df-4586-93c7-85e6bce6a0c1',
  rcDotL:         'https://www.figma.com/api/mcp/asset/8f07fd7d-5a5d-4643-9fd5-94040c025066',
  rcDotM:         'https://www.figma.com/api/mcp/asset/e403af55-cca6-49a1-b337-76dd36232054',
  rcDotR:         'https://www.figma.com/api/mcp/asset/d2bffb8d-03d8-400f-a913-f1d22e72996f',
  /* 组 20 — dialog */
  dialogPhone:    'https://www.figma.com/api/mcp/asset/e2b6bf62-8f6c-4801-8f96-31197d34e444',
  dialogDivider:  'https://www.figma.com/api/mcp/asset/17824bff-feb5-4d24-bd0b-c493bd711ce9',
  dialogBar:      'https://www.figma.com/api/mcp/asset/b4ec1a15-7157-4edd-bc57-341229e75920',
  /* 组 21 — charts */
  structChart:    'https://www.figma.com/api/mcp/asset/df833a55-d9dc-42c7-aed5-2818f09920e2',
  flowChart:      'https://www.figma.com/api/mcp/asset/799e17fe-046a-4ed3-9298-3240b6102c18',
  wireframe:      'https://www.figma.com/api/mcp/asset/0e43e079-42a9-4e8f-a46c-36422b18a0ca',
  /* 组 22 — end */
  endBg:          'https://www.figma.com/api/mcp/asset/58f0f3e3-f743-4086-b8ed-18c00ae4d797',
  endLaptop:      'https://www.figma.com/api/mcp/asset/cef304a9-0ada-4447-ac6f-21e950682410',
  endDivider:     'https://www.figma.com/api/mcp/asset/f46d4d85-a5e8-4be7-bc1f-3fc9d5af0c32',
  endBadge:       'https://www.figma.com/api/mcp/asset/16e53659-1364-424b-9951-3c1b3a8f4d9c',
  endIcons:       'https://www.figma.com/api/mcp/asset/b31e9852-b451-455d-974a-61dea4b0e716',
};

/* MAD section title — 128px Inter, #f9f7f2 @ 50% */
function MadTitle({ x, y, w, align, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; children: React.ReactNode }) {
  return <div className="mad-sec-title abs" style={{ left: x, top: y, width: w, textAlign: align }}>{children}</div>;
}

/* MAD section sub-label — 96px Inter, #f9f7f2 @ 50% */
function MadLabel({ x, y, w, align, children }: { x: number; y: number; w: number; align?: 'center' | 'right'; children: React.ReactNode }) {
  return <div className="mad-sec-label abs" style={{ left: x, top: y, width: w, textAlign: align }}>{children}</div>;
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

  return (
    <div className="star-case-page mad-page">
      <FigmaScaleStage width={2480} height={34946} className="mad-stage">

        {/* ── 组 10 cover (y0 h2318) ── */}
        <img src={mad.coverBg} className="abs img-cover" style={{ left: 0, top: S.cover, width: 2480, height: 1655 }} />
        <img src={mad.coverSplash} className="abs img-cover" style={{ left: 696, top: S.cover + 172, width: 1187, height: 1368 }} />
        <img src={mad.coverBadge} className="abs img-cover" style={{ left: 1994, top: S.cover + 1187, width: 286, height: 351 }} />
        <img src={mad.coverStroke} className="abs" style={{ left: 60, top: S.cover + 49, width: 596, height: 207 }} />
        <div className="mad-cover-badge abs" style={{ left: 98, top: S.cover + 81, width: 531 }}>My Production<br />我的作品</div>
        <div className="mad-cover-intro abs" style={{ left: 219, top: S.cover + 1763, width: 2043 }}>通过调查了解，许多球友对于比赛结果推断不准，导致足球博彩逢赌必输，即使他们能询问一些看球经验很丰富的老球迷，甚至向专业的分析师请教，但是由于不同的比赛有不同的体制，所以很多情况下是凭借运气来购买足球彩票，运气不好就预测不准，造成了很大的经济损失以及浪费了大量的时间精力，所以，对于一些没有太多时间来分析球赛的球友来说，特别是经验水平不足的新人，这款应用是为了广大球友设计的。</div>

        {/* ── 组 13 analyst (y2555 h1312) ── */}
        <img src={mad.analyst} className="abs img-cover" style={{ left: 498, top: S.analyst + 196, width: 1489, height: 1116 }} />
        <MadTitle x={497} y={S.analyst + 106} w={1501} align="center">Your Personal Analyst<br />你的私人分析师</MadTitle>

        {/* ── 组 12 icon design (y3788 h2200) ── */}
        <img src={mad.iconBg} className="abs img-cover mad-icon-bg" style={{ left: 0, top: S.icon, width: 2480, height: 2200 }} />
        <img src={mad.iconBig} className="abs img-cover" style={{ left: 384, top: S.icon + 953, width: 678, height: 829 }} />
        <img src={mad.iconPlate} className="abs" style={{ left: 1470, top: S.icon + 957, width: 833, height: 833 }} />
        <img src={mad.iconGlyph} className="abs img-cover" style={{ left: 1594, top: S.icon + 1097, width: 592, height: 596 }} />
        <MadTitle x={252} y={S.icon + 409} w={833}>Icon Design<br />图标设计</MadTitle>

        {/* ── 组 5 concise guide — 4 perspective cards (y6004 h2146) ── */}
        <MadGuideCard x={-5} y={S.guide + 716} card={mad.guideCard1} shot={mad.guideShot1}
          shotStyle={{ left: 208, top: 100, width: 283, height: 696 }}
          num="1" numPos={{ left: 350, top: 1154 }}
          label="登录账号" labelPos={{ left: 273, top: 974, w: 167 }}
          sign={{ inX: 137, inY: 1254, upX: 435, upY: 1188 }} />
        <MadGuideCard x={616} y={S.guide + 750} card={mad.guideCard2} shot={mad.guideShot2}
          shotStyle={{ left: 134, top: 95, width: 290, height: 670 }}
          num="2" numPos={{ left: 262, top: 1124 }}
          label="预测比赛结果" labelPos={{ left: 169, top: 893, w: 204 }}
          sign={{ inX: 85, inY: 1167, upX: 360, upY: 1226 }} />
        <MadGuideCard x={1236} y={S.guide + 750} card={mad.guideCard3} shot={mad.guideShot3}
          shotStyle={{ left: 203, top: 106, width: 290, height: 673 }}
          num="3" numPos={{ left: 349, top: 1123 }}
          label="个人与管理分类" labelPos={{ left: 236, top: 903, w: 233 }}
          sign={{ inX: 133, inY: 1220, upX: 435, upY: 1161 }} />
        <MadGuideCard x={1861} y={S.guide + 750} card={mad.guideCard4} shot={mad.guideShot4}
          shotStyle={{ left: 163, top: 74, width: 294, height: 673 }}
          num="4" numPos={{ left: 257, top: 1127 }}
          label="充值与充值记录" labelPos={{ left: 171, top: 930, w: 238 }}
          sign={{ inX: 82, inY: 1165, upX: 348, upY: 1222 }} />
        <MadTitle x={290} y={S.guide} w={1026}>Concise Guide<br />简介引导</MadTitle>

        {/* ── 组 14 product detail (y8605 h1662) ── */}
        <img src={mad.productBg} className="abs img-cover" style={{ left: 0, top: S.product + 426, width: 2480, height: 1236 }} />
        <img src={mad.productPhone} className="abs img-cover mad-phone" style={{ left: 1119, top: S.product + 611, width: 592, height: 916 }} />
        <MadTitle x={32} y={S.product + 2} w={2480} align="center">Product Detail<br />产品细节</MadTitle>

        {/* ── 组 15 recommend (y10583 h3487) ── */}
        <img src={mad.recommendGlow} className="abs img-cover mad-rec-glow" style={{ left: 1101, top: S.recommend + 313, width: 1379, height: 3060 }} />
        <img src={mad.recommendPhone} className="abs img-cover mad-phone" style={{ left: 1300, top: S.recommend + 1044, width: 905, height: 2442 }} />
        <img src={mad.recDivider} className="abs" style={{ left: 565, top: S.recommend + 166, width: 1719, height: 19 }} />
        <img src={mad.recDotL} className="abs" style={{ left: 547, top: S.recommend + 147, width: 53, height: 53 }} />
        <img src={mad.recDotM} className="abs" style={{ left: 1398, top: S.recommend + 147, width: 53, height: 53 }} />
        <img src={mad.recDotR} className="abs" style={{ left: 2250, top: S.recommend + 147, width: 53, height: 53 }} />
        <MadTitle x={200} y={S.recommend + 39} w={854}>Recommend<br />推荐</MadTitle>
        <MadLabel x={207} y={S.recommend + 786} w={558}>Forecast<br />预测赛果</MadLabel>
        <MadLabel x={207} y={S.recommend + 1444} w={421}>Live<br />实时比赛</MadLabel>

        {/* ── 组 16 me (y14467 h2345) ── */}
        <img src={mad.mePhones} className="abs mad-me-phones" style={{ left: 633, top: S.me + 413, width: 1696, height: 1873 }} />
        <img src={mad.meDivider} className="abs" style={{ left: 569, top: S.me + 145, width: 1719, height: 19 }} />
        <img src={mad.meDotL} className="abs" style={{ left: 550, top: S.me + 127, width: 53, height: 53 }} />
        <img src={mad.meDotM} className="abs" style={{ left: 1402, top: S.me + 127, width: 53, height: 53 }} />
        <img src={mad.meDotR} className="abs" style={{ left: 2254, top: S.me + 127, width: 53, height: 53 }} />
        {/* leader-line connectors: gold square node + thin line per label */}
        <span className="mad-leader-sq abs" style={{ left: 1398, top: S.me + 518, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 1417, top: S.me + 526, width: 358 }} />
        <span className="mad-leader-sq abs" style={{ left: 935, top: S.me + 952, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 633, top: S.me + 960, width: 313 }} />
        <span className="mad-leader-sq abs" style={{ left: 965, top: S.me + 1683, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 637, top: S.me + 1691, width: 339 }} />
        <span className="mad-leader-sq abs" style={{ left: 1474, top: S.me + 2056, width: 30, height: 30 }} />
        <span className="mad-leader-ln abs" style={{ left: 1493, top: S.me + 2064, width: 286 }} />
        <MadTitle x={204} y={S.me} w={269}>Me<br />我的</MadTitle>
        <MadLabel x={1616} y={S.me + 437} w={638} align="right">Classify<br />分类</MadLabel>
        <MadLabel x={204} y={S.me + 867} w={421}>Record<br />充值记录</MadLabel>
        <MadLabel x={209} y={S.me + 1587} w={527}>Invitation<br />邀请码</MadLabel>
        <MadLabel x={1616} y={S.me + 1988} w={638} align="right">Unlock<br />已解锁的比赛</MadLabel>

        {/* ── 组 18 recharge (y17286 h2147) ── */}
        <img src={mad.rechargeBg} className="abs img-cover" style={{ left: 45, top: S.recharge + 421, width: 2420, height: 1726 }} />
        <img src={mad.rechargePhone} className="abs img-cover mad-phone" style={{ left: 298, top: S.recharge + 519, width: 1952, height: 1391 }} />
        <img src={mad.rcDivider} className="abs" style={{ left: 569, top: S.recharge + 127, width: 1719, height: 19 }} />
        <img src={mad.rcDotL} className="abs" style={{ left: 547, top: S.recharge + 108, width: 53, height: 53 }} />
        <img src={mad.rcDotM} className="abs" style={{ left: 1398, top: S.recharge + 108, width: 53, height: 53 }} />
        <img src={mad.rcDotR} className="abs" style={{ left: 2250, top: S.recharge + 108, width: 53, height: 53 }} />
        <MadTitle x={151} y={S.recharge} w={660}>Recharge<br />充值</MadTitle>

        {/* ── 组 20 dialog (y20051 h3065) ── */}
        <img src={mad.dialogPhone} className="abs img-cover mad-dialog-phone" style={{ left: 641, top: S.dialog + 565, width: 1209, height: 2500 }} />
        <img src={mad.dialogDivider} className="abs" style={{ left: 0, top: S.dialog + 60, width: 2495, height: 19 }} />
        <img src={mad.dialogBar} className="abs" style={{ left: 527, top: S.dialog, width: 1438, height: 147 }} />
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
        <img src={mad.endLaptop} className="abs img-cover" style={{ left: 957, top: S.end + 539, width: 765, height: 512 }} />
        <img src={mad.endBadge} className="abs" style={{ left: 1006, top: S.end + 1636, width: 475, height: 143 }} />
        <img src={mad.endDivider} className="abs" style={{ left: -4, top: S.end + 1696, width: 2495, height: 19 }} />
        <img src={mad.endIcons} className="abs img-cover" style={{ left: 444, top: S.end + 2031, width: 1600, height: 379 }} />
        <MadTitle x={1080} y={S.end + 1675} w={350} align="center">ICON</MadTitle>

      </FigmaScaleStage>
    </div>
  );
}



/* ─── High Seas Hero exact detail cases from Figma 9817:4765 / 9817:6955 ─── */
const hsTrial = {
  phoneDifficultyPre: publicUrl('/images/xingji/naval-trial/difficulty-pre.webp'),
  panel2341: publicUrl('/images/xingji/naval-trial/difficulty-selected.webp'),
  flowPhoneConfirm: publicUrl('/images/xingji/naval-trial/confirm-big.webp'),
  popupFieldInfoPanel1: publicUrl('/images/xingji/naval-trial/map-panel.webp'),
  flowPhoneReward: publicUrl('/images/xingji/naval-trial/reward-flow.webp'),
  panel4561: publicUrl('/images/xingji/naval-trial/personal-select.webp'),
  personalConfirm: publicUrl('/images/xingji/naval-trial/personal-confirm.webp'),
  quickAccess: publicUrl('/images/xingji/naval-trial/quick-access.webp'),
  rewardPreview: publicUrl('/images/xingji/naval-trial/reward-preview.webp'),
  popupFieldInfoPanel31: publicUrl('/images/xingji/naval-trial/instructor-panel.webp'),
  phoneAllianceNo: publicUrl('/images/xingji/naval-trial/alliance-no.webp'),
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
};

const hsGang = {
  eventIpSceneBg01: publicUrl('/images/xingji/ip-collab/scene-bg.webp'),
  eventIpCrewDetailShow02: publicUrl('/images/xingji/ip-collab/hero-character.webp'),
  panel23441: 'https://www.figma.com/api/mcp/asset/5e378436-52a2-49de-93d6-3e62e897995d',
  stateImg0: 'https://www.figma.com/api/mcp/asset/67791c81-33f5-4ef1-b4f6-34a925f997d4',
  stateImg1: 'https://www.figma.com/api/mcp/asset/1dc068d5-b05e-42fd-8725-c752ca964daa',
  stateImg2: 'https://www.figma.com/api/mcp/asset/3b75a069-2b59-44e7-ba58-68549717414e',
  stateImg3: 'https://www.figma.com/api/mcp/asset/f563eecf-f14d-481c-b79d-c3db2177b98e',
  panel34651: 'https://www.figma.com/api/mcp/asset/aa5572f5-cece-4931-908c-2263c05d9068',
  sec7HeroDetailImg: 'https://www.figma.com/api/mcp/asset/486fc820-78da-44f4-8d20-2dc402e0bfb9',
  sec7HeroPortraitImg: 'https://www.figma.com/api/mcp/asset/e754f909-832c-4880-8331-709ffbc6907e',
  collage: 'https://www.figma.com/api/mcp/asset/19783108-7c06-4013-905a-adc2c9ffa7ba',
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
  return <img alt="" src={src} className={`abs ${className}`} style={withHSOffset(style, offset)} />;
}

type HSRecordIconKind = 'history' | 'achievement' | 'progress' | 'battle';

function HSRecordIcon({ kind }: { kind: HSRecordIconKind }) {
  if (kind === 'history') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8v-6m-8-1 4-3 4 2 3-3" /></svg>;
  }
  if (kind === 'achievement') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4Zm0 2H5v2a4 4 0 0 0 4 4m7-6h3v2a4 4 0 0 1-4 4m-3 1v4m-4 3h8m-6-3h4" /></svg>;
  }
  if (kind === 'progress') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4zM7 16l3-4 3 2 4-6m-3 0h3v3" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 4 12 12m0-12L6 16m-2 4 4-4m12 4-4-4M5 3l4 1-4 4V3Zm14 0-4 1 4 4V3Z" /></svg>;
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
  const H = 12600;
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
  const configItems = [
    ['portrait', '教官立绘', '后台配置不同难度对应的教官形象'],
    ['rank', '教官等级', '战力数值随难度递增，明确挑战门槛'],
    ['power', '战力展示', '直观显示教官实力，辅助玩家判断'],
    ['pin', '地图坐标', '教官在世界地图的固定刷新位置'],
    ['gift', '掉落预览', '击败后可获得的奖励物品列表'],
  ];
  return (
    <div className="star-case-page hs-exact-page">
      <FigmaScaleStage width={1280} height={H} className="hs-exact-stage hs-trial-stage" maxScale={1} fitToViewport>
        <HSSection className="hs-sec hs-dark" top={0}>
          <div className="hs-hero-orb one" /><div className="hs-hero-orb two" />
          <div className="hs-dot-matrix" style={{ left: 80, top: 80 }} />
          <HSAbs className="hs-cover-line" style={{ left: 120, top: 340, width: 120 }} />
          <HSAbs className="hs-cover-en" style={{ left: 120, top: 360 }}>GENERAL'S TRIAL</HSAbs>
          <HSAbs className="hs-cover-title" style={{ left: 120, top: 390 }}>海军试炼</HSAbs>
          <HSAbs className="hs-cover-sub" style={{ left: 120, top: 484 }}>九重难度递进 × 个人联盟双轨 × 世界地图实战</HSAbs>
          <HSAbs className="hs-cover-endline" style={{ left: 120, top: 534 }} />
          <div className="hs-cover-diag" />
        </HSSection>

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
          <HSAbs className="hs-branch-tree" style={{ left: 438, top: 2121 }} />
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
          <HSImg src={hsTrial.phoneDifficultyPre} className="hs-phone hs-navy-crop" style={{ left: 120, top: 2906, width: 240, height: 519 }} />
          <HSImg src={hsTrial.panel2341} className="hs-phone hs-navy-crop" style={{ left: 441, top: 2905, width: 240, height: 520 }} />
          <HSAbs className="hs-under-label" style={{ left: 183, top: 3440 }}>初始状态 · 自动定位</HSAbs>
          <HSAbs className="hs-under-label" style={{ left: 504, top: 3440 }}>选中状态 · 挑战详情</HSAbs>
          <HSAbs className="hs-click-arrow" style={{ left: 374, top: 3179 }}>点击选择</HSAbs>
          <HSAbs className="hs-panel-title light" style={{ left: 783, top: 2943 }}>难度卡片状态机</HSAbs>
          <HSAbs className="hs-diff-track" style={{ left: 783, top: 2983 }}>{diffCards.map(([title],i)=><i key={title} className={`s${i}`} />)}</HSAbs>
          {diffCards.map(([title, desc, type], i) => <HSAbs key={title} className={`hs-diff-state ${type}`} style={{ left: 783 + i * 114, top: 3051 }}><img src={hsTrial.difficultyCard} alt="" /><b>{title}</b><span>{desc}</span></HSAbs>)}
          <HSAbs className="hs-panel-title light" style={{ left: 783, top: 3291 }}>设计要点</HSAbs>
          <HSAbs className="hs-bullets light" style={{ left: 783, top: 3321 }}>
            <p>• 进入页面自动定位最新解锁难度，减少选择成本</p><p>• 九个等级渐进排列，已通关项展示完成标记</p><p>• 未解锁难度卡片灰度处理，附提示文案引导</p><p>• 图标、难度名称、奖励预览均支持后台配置</p>
          </HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={3600}>
          <HSHeader n="04" title="个人挑战流程" en="PERSONAL CHALLENGE FLOW" top={3600} />
          <HSAbs className="hs-desc" style={{ left: 120, top: 3750 }}>从选择难度到领取奖励，四步完成完整挑战闭环</HSAbs>
          {personalFlow.map(([num, title, desc, img], i) => <HSAbs key={num} className="hs-personal-step" style={{ left: 130 + i * 270, top: 3800 }}><div className="hs-step-num">{num}</div><div className="hs-step-title">{title}</div><div className="hs-step-desc">{desc.split('\n').map((t) => <p key={t}>{t}</p>)}</div><HSImg src={img} className="hs-phone hs-navy-crop" style={{ left: 0, top: 90, width: 210, height: 455 }} />{i < 3 ? <HSArrow x={220} y={30} /> : null}</HSAbs>)}
          <HSAbs className="hs-insight" style={{ left: 130, top: 4430 }}>整个流程强调 <b>不可逆选择设计</b> —— 确认出战后难度锁定，引导玩家认真思考策略，提升决策的仪式感与紧张感。</HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-light" top={4500}>
          <HSHeader n="05" title="确认机制与安全设计" en="CONFIRMATION & SAFETY" top={4500} light accent="orange" />
          <HSImg src={hsTrial.flowPhoneConfirm} className="hs-phone hs-navy-crop" style={{ left: 120, top: 4652, width: 280, height: 605 }} />
          {[['不可逆提示','明确告知选择后不可更改，强化决策仪式感','⚠'],['双按钮对比','取消按钮弱化处理，确认按钮高亮引导，降低误操作率','◧'],['信息前置','弹窗内展示已选难度与预期挑战内容，帮助玩家做最终确认','i']].map((it, i) => <HSAbs key={it[0]} className="hs-safety-card" style={{ left: 490, top: 4740 + i * 130 }}><i>{it[2]}</i><b>{it[0]}</b><span>{it[1]}</span></HSAbs>)}
          <HSAbs className="hs-panel-title light" style={{ left: 120, top: 5276 }}>为什么需要二次确认？</HSAbs>
          <HSAbs className="hs-paragraph light" style={{ left: 120, top: 5302, width: 760 }}>海军试炼采用“选定即锁定”机制，每个难度仅一次挑战机会。通过二次确认弹窗，引导玩家在出战前认真评估自身实力与难度匹配度，减少因误触导致的负面体验，同时增强“决策的重量感”。</HSAbs>
        </HSSection>

        <HSSection className="hs-sec hs-dark" top={5400}>
          <HSHeader n="06" title="野外快捷入口" en="QUICK ACCESS" top={5400} />
          <HSImg src={hsTrial.popupFieldInfoPanel1} className="hs-phone hs-navy-crop" style={{ left: 120, top: 5600, width: 300, height: 650 }} />
          <HSAbs className="hs-quick-callout" style={{ left: 420, top: 5750 }} />
          <HSAbs className="hs-paragraph" style={{ left: 512, top: 5600, width: 620 }}>野外地图作为战斗载体，加入“快捷入口”，可实现“镜头跳转 + 快捷定位 + 浮层引导”三重设计，确保玩家从选择难度到找到目标教官的路径最短化。</HSAbs>
          {['快捷按钮组|一键跳转教官位置，减少地图寻找成本','镜头自动跳转|确认出战后镜头自动移至先锋教官所在区域','任务进度浮层|右侧常驻显示当前挑战任务完成进度'].map((text, i) => { const [t,b]=text.split('|'); return <HSAbs key={t} className="hs-dark-list-card" style={{ left: 512, top: 5767 + i * 131 }}><b>{t}</b><span>{b}</span></HSAbs> })}
        </HSSection>

        <HSSection className="hs-sec hs-light" top={6300}>
          <HSHeader n="07" title="先锋教官系统" en="PIONEER INSTRUCTOR" top={6300} light accent="orange" />
          <HSAbs className="hs-panel-title light" style={{ left: 120, top: 6494 }}>可配置元素</HSAbs>
          {configItems.map(([ico, t, b], i) => <HSAbs key={t} className="hs-config-row" style={{ left: 120, top: 6544 + i * 70 }}><i className={`hs-vector-icon ${ico}`} /><b>{t}</b><span>{b}</span></HSAbs>)}
          <HSImg src={hsTrial.popupFieldInfoPanel31} className="hs-phone hs-navy-crop" style={{ left: 500, top: 6493, width: 280, height: 607 }} />
          <HSAbs className="hs-panel-title light" style={{ left: 840, top: 6494 }}>交互流程</HSAbs>
          <HSAbs className="hs-timeline-spine" style={{ left: 851, top: 6556 }} />
          {['点击教官 → 弹出信息面板','查看教官战力与掉落预览','选择“攻击”或“集结”','进入战斗 / 等待队友响应'].map((txt, i) => <HSAbs key={txt} className="hs-mini-timeline" style={{ left: 840, top: 6544 + i * 70 }}><em>{i+1}</em><span>{txt}</span></HSAbs>)}
        </HSSection>

        <HSSection className="hs-sec hs-light" top={8100}>
          <HSHeader n="08" title="联盟挑战模式" en="ALLIANCE CHALLENGE" top={8100} light accent="orange" />
          <HSImg src={hsTrial.phoneAllianceNo} className="hs-phone hs-source-caption-crop" style={{ left: 120, top: 8293, width: 240, height: 519 }} />
          <HSImg src={hsTrial.panel671} className="hs-phone" style={{ left: 440, top: 8293, width: 240, height: 519 }} />
          <HSAbs className="hs-alliance-transition" style={{ left: 366, top: 8528 }}>
            <span>点击选择</span><i />
          </HSAbs>
          <HSAbs className="hs-alliance-caption" style={{ left: 120, top: 8829, width: 240 }}>同盟挑战（未加入公会）</HSAbs>
          <HSAbs className="hs-alliance-caption" style={{ left: 440, top: 8829, width: 240 }}>同盟挑战（已加入公会）</HSAbs>
          <HSAbs className="hs-panel-title light" style={{ left: 760, top: 8325 }}>联盟模式特性</HSAbs>
          {[
            ['entry', '联盟准入', '未加入联盟时，联盟挑战', 'Tab 灰色不可选，引导加入'],
            ['monster', '公会怪物', '盟主/官员在地图放置怪物，', '成员协力击败'],
            ['battle', '协同战斗', '支持集结攻击，多人同时', '对同一目标发起进攻'],
            ['ranking', '联盟排名', '联盟维度统计挑战成绩，', '激发组织荣誉感'],
          ].map(([icon, title, line1, line2], i) => (
            <HSAbs key={title} className={`hs-light-list-card hs-alliance-feature ${i % 2 ? 'orange' : 'blue'}`} style={{ left: 760, top: 8375 + i * 105 }}>
              <i className={`hs-alliance-icon ${icon}`} aria-hidden="true" />
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
            <img src={hsTrial.flowPhoneReward} alt="奖励预览" />
          </HSAbs>
          <HSAbs className="hs-reward-shot hs-reward-shot--claimed" style={{ left: 440, top: 7393, width: 260, height: 563 }}>
            <img src={hsTrial.phoneRewardClaimed} alt="已领取状态" />
          </HSAbs>
          <HSAbs className="hs-reward-caption" style={{ left: 120, top: 7972, width: 260 }}>奖励预览</HSAbs>
          <HSAbs className="hs-reward-caption" style={{ left: 440, top: 7972, width: 260 }}>已领取状态</HSAbs>
          <HSAbs className="hs-reward-arrow-label" style={{ left: 388, top: 7586, width: 48 }}>领取</HSAbs>
          <HSAbs className="hs-reward-arrow" style={{ left: 390, top: 7611, width: 40 }} />
          <HSAbs className="hs-reward-logic-title" style={{ left: 878, top: 7436 }}>奖励设计逻辑</HSAbs>
          {[
            { title: '难度分 Tab', lines: ['每个难度对应独立奖励页签，', '清晰展示各级别回报差异'] },
            { title: '预览驱动挑战', lines: ['先展示奖励再挑战，', '用预期回报激发挑战动机'] },
            { title: '领取状态区分', lines: ['已领/未领/不可领三态视觉分明，', '减少认知负担'] },
            { title: '通关奖励', lines: ['全难度通关额外奖励，', '为高水平玩家提供终极目标'] },
          ].map((item, i) => (
            <HSAbs key={item.title} className={`hs-reward-point${i === 3 ? ' is-last' : ''}`} style={{ left: 878, top: 7485 + i * 100 }}>
              <b>{item.title}</b>
              <span>{item.lines[0]}<br />{item.lines[1]}</span>
            </HSAbs>
          ))}
          <HSAbs className="hs-reward-orbit" style={{ left: 1080, top: 7900 }} />
        </HSSection>

        <HSSection className="hs-sec hs-light" top={9900}>
          <HSHeader n="11" title="战绩记录" en="CHALLENGE RECORD" top={9900} light accent="orange" />
          <HSAbs className="hs-record-shot hs-record-shot-empty" style={{ left: 120, top: 10095 }}>
            <img src={hsTrial.phoneRecord} alt="挑战详情记录空状态" />
          </HSAbs>
          <HSAbs className="hs-record-shot hs-record-shot-list" style={{ left: 437, top: 10095 }}>
            <img src={hsTrial.panel3451} alt="挑战详情记录" />
          </HSAbs>
          <HSAbs className="hs-record-caption" style={{ left: 120, top: 10678 }}>挑战详情记录（空状态）</HSAbs>
          <HSAbs className="hs-record-caption" style={{ left: 437, top: 10678 }}>挑战详情记录</HSAbs>
          <HSAbs className="hs-record-panel-title" style={{ left: 813, top: 10138 }}>数据呈现设计</HSAbs>
          {([
            ['history', '挑战历史', '记录每次挑战的难度、结果、用时，帮助玩家复盘策略'],
            ['achievement', '成就展示', '累计通关次数、最高难度等数据，激发挑战成就感'],
            ['progress', '进度总览', '各难度通关状态一目了然，明确下一步挑战方向'],
            ['battle', '战场回顾', '公会战场数据记录，展示联盟协作战果'],
          ] as [HSRecordIconKind, string, string][]).map(([icon, title, body], i) => (
            <HSAbs key={title} className={`hs-record-card ${i % 2 ? 'orange' : 'blue'}`} style={{ left: 813, top: 10188 + i * 105 }}>
              <div className="hs-record-card-icon"><HSRecordIcon kind={icon} /></div>
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
      <FigmaScaleStage width={1280} height={H} className="hs-exact-stage hs-gang-stage" maxScale={1} fitToViewport>
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
          {states.map(([t,b,img,type],i)=><React.Fragment key={t}><HSAbs className={`gang-state-title ${type}`} style={{ left:80+i*280, top:3381 }}>{t}</HSAbs><HSAbs className="gang-state-phone" style={{ left:80+i*280, top:3416, width:240, height:518 }}><img src={img} alt="" /></HSAbs><HSAbs className="gang-state-caption" style={{ left:80+i*280, top:3950 }}>{b.split('\n').map(s=><p key={s}>{s}</p>)}</HSAbs>{i<3?<HSAbs className="gang-state-arrow" style={{ left:335+i*280, top:3640 }}>→</HSAbs>:null}</React.Fragment>)}
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
          <HSAbs className="gang-black-phone" style={{ left:552, top:4419 }}><HSImg src={hsGang.panel34651} style={{ left:23, top:150, width:314, height:472 }}/></HSAbs>
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
          <HSAbs className="gang-hero-crop detail" style={{ left:100, top:5518 }}><img src={hsGang.sec7HeroDetailImg} alt="英雄详情面板" /></HSAbs>
          <HSAbs className="gang-hero-crop portrait" style={{ left:520, top:5516 }}><img src={hsGang.sec7HeroPortraitImg} alt="联动英雄立绘" /></HSAbs>
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
