import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';
import { useEffect, type CSSProperties, type ReactNode } from 'react';

const INK = '#00F5FF';
const WORKFLOW_ASSET_BASE = '/assets/qingyu-workflow';

const figmaAssets = {
  directionA: `${WORKFLOW_ASSET_BASE}/direction-a.webp`,
  directionB: `${WORKFLOW_ASSET_BASE}/direction-b.webp`,
  directionC: `${WORKFLOW_ASSET_BASE}/direction-c.webp`,
  prototype: `${WORKFLOW_ASSET_BASE}/prototype.webp`,
  production: `${WORKFLOW_ASSET_BASE}/production.webp`,
  restore: `${WORKFLOW_ASSET_BASE}/restore.webp`,
  testTabState: `${WORKFLOW_ASSET_BASE}/test-tab-state.webp`,
  testBookIcon: `${WORKFLOW_ASSET_BASE}/test-book-icon.webp`,
  visualBamboo: `${WORKFLOW_ASSET_BASE}/visual-bamboo.webp`,
  visualDiamond: `${WORKFLOW_ASSET_BASE}/visual-diamond.webp`,
  visualWoodenDummy: `${WORKFLOW_ASSET_BASE}/visual-wooden-dummy.webp`,
};

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="workflow-section-title mb-[44px] border-[3px] border-black bg-white px-[22px] py-[18px]">
      <h2 className="font-['Microsoft_YaHei',sans-serif] text-[34px] leading-none tracking-[3px] text-black">
        {title}
      </h2>
      <p className="mt-[26px] font-['Microsoft_YaHei',sans-serif] text-[26px] font-light leading-[1.55] tracking-[2px] text-black">
        {desc}
      </p>
    </div>
  );
}

function WorkflowCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="workflow-card h-[342px] w-[284px] border-[3px] border-black bg-white">
      <div className="flex h-[52px] items-center justify-center bg-[#00F5FF] text-[34px] font-bold tracking-[3px] text-[#061417]">
        {title}
      </div>
      <div className="flex flex-col items-center gap-[4px] px-[20px] pt-[30px] text-center text-[26px] leading-[1.25] tracking-[2px] text-black">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

function ConnectorSvg({
  children,
  markerId,
  className = 'absolute inset-0 pointer-events-none',
  viewBox = '0 0 1220 300',
}: {
  children: ReactNode;
  markerId: string;
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg className={`${className} workflow-connector`} viewBox={viewBox} aria-hidden="true">
      <defs>
        <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 2 L8 5 L2 8" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" markerEnd={`url(#${markerId})`}>
        {children}
      </g>
    </svg>
  );
}

function BlueNode({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`workflow-node flex h-[88px] items-center justify-center border border-black bg-[#00F5FF] px-[18px] text-center text-[24px] tracking-[2px] text-[#061417] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function DiamondNode({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`workflow-node absolute flex h-[86px] w-[86px] rotate-45 items-center justify-center border border-black bg-[#00F5FF] ${className}`} style={style}>
      <span className="-rotate-45 text-center text-[18px] leading-[1.25] tracking-[1.5px] text-[#061417]">{children}</span>
    </div>
  );
}

function CircleNode({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`workflow-node absolute flex h-[78px] w-[78px] items-center justify-center rounded-full border border-black bg-[#00F5FF] text-center text-[18px] leading-[1.25] tracking-[1.5px] text-[#061417] ${className}`} style={style}>
      {children}
    </div>
  );
}

function DemandTable() {
  return (
    <table
      className="workflow-table mt-[28px] w-full table-fixed border-[3px] border-black bg-white text-center text-[21px] tracking-[2px] text-black"
      style={{ borderCollapse: 'collapse' }}
    >
      <colgroup>
        <col className="w-[95px]" />
        <col className="w-[204px]" />
        <col className="w-[207px]" />
        <col className="w-[254px]" />
        <col />
      </colgroup>
      <thead>
        <tr className="h-[52px] text-[23px]">
          {['时间', '模块', '需求类别', '功能', '功能详情'].map((head) => (
            <th key={head} className="border-[3px] border-black font-normal">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="h-[88px]">
          <td rowSpan={4} className="border-[3px] border-black align-middle">
            7.11
          </td>
          <td className="border-[3px] border-black">强化效果</td>
          <td className="border-[3px] border-black">信息展示</td>
          <td className="border-[3px] border-black">效果说明</td>
          <td className="border-[3px] border-black px-[12px]">招式强化后的效果描述</td>
        </tr>
        <tr className="h-[88px]">
          <td rowSpan={3} className="border-[3px] border-black align-middle">
            进行强化
          </td>
          <td rowSpan={3} className="border-[3px] border-black align-middle">
            信息展示
          </td>
          <td className="border-[3px] border-black">招式强化</td>
          <td className="border-[3px] border-black px-[12px]">可强化已经选中的招式</td>
        </tr>
        <tr className="h-[88px]">
          <td className="border-[3px] border-black">成功率</td>
          <td className="border-[3px] border-black">100%</td>
        </tr>
        <tr className="h-[88px]">
          <td className="border-[3px] border-black">强化消耗</td>
          <td className="border-[3px] border-black px-[12px]">需要消耗一定数值的进阶招式秘籍</td>
        </tr>
      </tbody>
    </table>
  );
}

function RequirementMap() {
  return (
    <div className="workflow-diagram relative h-[264px]">
      <ConnectorSvg markerId="workflow-req-arrow" viewBox="0 0 1220 264">
        <path d="M222 132 L260 44 H305" />
        <path d="M222 132 L260 220 H305" />
        <path d="M503 44 H614" />
        <path d="M503 220 H614" />
      </ConnectorSvg>
      <BlueNode className="absolute left-[24px] top-[88px] w-[198px]">招式强化</BlueNode>
      <BlueNode className="absolute left-[305px] top-0 w-[198px]">招式列表</BlueNode>
      <BlueNode className="absolute left-[305px] top-[176px] w-[198px]">强化效果</BlueNode>
      <BlueNode className="absolute left-[614px] top-0 w-[584px]">招式页签、招式ICON、招式名称、选中态</BlueNode>
      <BlueNode className="absolute left-[614px] top-[176px] w-[584px]">效果描述、消耗道具、强化按钮、强化完成标签</BlueNode>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-[4px] text-[30px] leading-none text-[#ffb900] [-webkit-text-stroke:1px_white]">
      {'★'.repeat(count)}
    </span>
  );
}

function PsychologyNeedTable() {
  const rows = [
    ['以挑战为目标时', '追求数值更高、战力更强', '需要明确了解强化前后数值的变化', 5],
    ['以成就为目标时', '追求招式强化的成就感，并不关心具体数值', '需要明确看到招式变强，追求强化时获得的成就感，可以在视觉效果上做提升', 3],
    ['以策略为目标时', '追求自己进行操作的沉浸感和掌控力', '感觉自己就能释放这种招式，需要体现招式强化前后的人物动作和特效表现', 4],
    ['消耗道具不足时', '需要知道哪里可以获得缺少的消耗道具', '快捷获得缺少的消耗道具', 3],
    ['强化成功时', '提升自身属性', '直接使用消耗道具', 2],
  ] as const;

  return (
    <table className="workflow-table w-full table-fixed border border-black bg-white text-[18px] leading-[1.42] tracking-[0.6px] text-black" style={{ borderCollapse: 'collapse' }}>
      <colgroup>
        <col className="w-[170px]" />
        <col className="w-[300px]" />
        <col className="w-[540px]" />
        <col className="w-[210px]" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan={4} className="border border-black bg-[#00F5FF] py-[18px] text-center text-[29px] font-normal tracking-[4px] text-[#061417]">
            玩家心理需求分析
          </th>
        </tr>
        <tr className="h-[62px] text-center text-[20px] font-bold">
          {['操作情景', '玩家目标', '追求体验', '需求等级'].map((head) => (
            <th key={head} className="border border-black px-[14px]">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([scene, goal, experience, stars]) => (
          <tr key={scene} className="h-[96px]">
            <td className="border border-black px-[14px] text-center font-bold">{scene}</td>
            <td className="border border-black px-[16px]">{goal}</td>
            <td className="border border-black px-[18px]">{experience}</td>
            <td className="border border-black px-[14px] text-center"><Stars count={stars} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ScenarioTable() {
  const rows = [
    [
      '进入强化',
      '快速找到招式强化入口并开始操作',
      '从主界面进入招式系统，定位到可强化招式',
      '入口路径、当前招式状态、强化按钮是否明确',
      '入口层级要短，默认选中和可操作状态需要清晰',
    ],
    [
      '选择招式',
      '判断当前招式是否值得强化',
      '切换招式，查看强化前后效果与消耗',
      '属性变化、消耗材料、成功率、是否已强化',
      '强化收益与消耗放在同一视线范围，避免只看到按钮',
    ],
    [
      '材料充足',
      '直接完成强化并获得反馈',
      '点击强化，确认结果，查看强化后的状态变化',
      '强化成功反馈、招式状态、按钮变化、消耗扣除',
      '成功反馈要明确，完成态需要立即更新',
    ],
    [
      '材料不足',
      '知道缺什么并快速补足',
      '查看缺少数量，跳转来源，获取后返回强化流程',
      '缺少数量、来源入口、返回路径、获取成本',
      '来源跳转和返回路径要清楚，降低中断感',
    ],
    [
      '重复强化',
      '持续提升招式能力',
      '在同一界面继续选择招式或继续强化',
      '当前进度、下一次消耗、可强化范围',
      '流程应支持连续操作，减少重复进入和确认',
    ],
  ];

  return (
    <table
      className="workflow-table w-full table-fixed border-[3px] border-black bg-white text-[18px] leading-[1.45] tracking-[1px] text-black"
      style={{ borderCollapse: 'collapse' }}
    >
      <colgroup>
        <col className="w-[154px]" />
        <col className="w-[238px]" />
        <col className="w-[286px]" />
        <col className="w-[286px]" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th colSpan={5} className="border-[3px] border-black bg-[#00F5FF] py-[24px] text-[31px] font-normal tracking-[4px] text-[#061417]">
            玩家应用场景分析
          </th>
        </tr>
        <tr className="h-[86px] bg-[#f6f6f6] text-[21px]">
          {['应用场景', '玩家目标', '操作行为', '关注内容', '设计要求'].map((head) => (
            <th key={head} className="border-[3px] border-black px-[12px] font-bold">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]} className="h-[112px]">
            {row.map((cell, idx) => (
              <td
                key={`${row[0]}-${idx}`}
                className={`border-[3px] border-black px-[16px] py-[14px] align-middle ${idx === 0 ? 'text-center text-[22px] font-bold' : ''}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DirectionBlock() {
  return (
    <div>
      <div className="workflow-diagram relative mx-auto mb-[46px] h-[220px] w-[1040px]">
        <ConnectorSvg markerId="workflow-direction-arrow" viewBox="0 0 1040 220">
          <path d="M166 88 H200" />
          <path d="M326 88 H368" />
          <path d="M508 88 H548" />
          <path d="M684 88 H724" />
          <path d="M724 88 V46 H750" />
          <path d="M724 88 V136 H750" />
          <path d="M876 46 H900" />
          <path d="M876 136 H900" />
        </ConnectorSvg>
        <BlueNode className="absolute left-[40px] top-[48px] h-[80px] w-[126px] text-[22px]">主界面</BlueNode>
        <BlueNode className="absolute left-[200px] top-[48px] h-[80px] w-[126px] text-[22px]">招式</BlueNode>
        <BlueNode className="absolute left-[368px] top-[48px] h-[80px] w-[140px] text-[22px]">全部招式</BlueNode>
        <BlueNode className="absolute left-[548px] top-[48px] h-[80px] w-[136px] text-[22px]">招式强化</BlueNode>
        <BlueNode className="absolute left-[750px] top-[6px] h-[80px] w-[126px] text-[22px]">选择招式</BlueNode>
        <BlueNode className="absolute left-[750px] top-[96px] h-[80px] w-[126px] text-[22px]">获取道具</BlueNode>
        <p className="absolute left-[20px] top-[142px] w-[166px] text-center text-[16px] leading-[1.45] tracking-[0.5px] text-black">主界面常规入口</p>
        <p className="absolute left-[520px] top-[142px] w-[192px] text-center text-[16px] leading-[1.45] tracking-[0.5px] text-black">需要满足条件<br />入口才可开启</p>
        <p className="absolute left-[904px] top-[28px] w-[126px] text-[16px] leading-[1.45] tracking-[0.4px] text-black">道具充足时进行强化</p>
        <p className="absolute left-[904px] top-[120px] w-[126px] text-[16px] leading-[1.45] tracking-[0.4px] text-black">道具不足时前往获取道具</p>
      </div>
      <VisualReferenceSection />
      <div className="workflow-panel mt-[40px] border border-black bg-white">
        <div className="bg-[#00F5FF] py-[18px] text-center text-[30px] font-bold tracking-[2px] text-[#061417]">
          《天涯明月刀》手游竞品分析图
        </div>
        <div className="grid grid-cols-3 gap-[30px] px-[28px] pt-[24px]">
          {[figmaAssets.directionA, figmaAssets.directionB, figmaAssets.directionC].map((src, idx) => (
            <img key={src} className="workflow-media h-[206px] w-full object-cover" src={src} alt={`确认设计方向截图 ${idx + 1}`} />
          ))}
        </div>
        <div className="workflow-copy h-[150px] px-[28px] pt-[18px] text-[18px] leading-[1.55] tracking-[1px] text-black">
          <p className="font-bold">设计特点：</p>
          <p>1. 界面层级清晰，招式列表、消耗材料与强化按钮能够形成稳定的操作路径。</p>
          <p>2. 强化前后的状态反馈明确，玩家可以快速判断当前招式是否已经完成强化。</p>
          <p>3. 当消耗道具不足时，界面需要直接提示来源，减少玩家在系统之间来回寻找的成本。</p>
        </div>
      </div>
    </div>
  );
}

function VisualReferenceSection() {
  const cards = [
    {
      title: '竹',
      image: figmaAssets.visualBamboo,
      desc: '竹子节节高代表着步步攀升的寓意，招式强化是进步提升招式强度的功能，与竹子有共同之处。',
      stars: 2,
    },
    {
      title: '钻石',
      image: figmaAssets.visualDiamond,
      desc: '钻石是更坚硬强大的石头，并且更进一步有打磨的含义，招式更进一步打磨就是强化了，通过钻石元素的点缀，具有相得映彰的效果。',
      stars: 3,
    },
    {
      title: '木人桩',
      image: figmaAssets.visualWoodenDummy,
      desc: '利用练习木人桩的环境背景，更加具有真实感，招式技能变强更具有代入感。',
      stars: 5,
    },
  ] as const;

  return (
    <div className="workflow-panel mb-[40px] border border-black bg-white">
      <div className="bg-[#00F5FF] py-[18px] text-center text-[30px] font-bold tracking-[2px] text-[#061417]">
        视觉元素参考图
      </div>
      <div className="grid grid-cols-3 gap-[72px] px-[42px] py-[34px]">
        {cards.map((card) => (
          <article key={card.title} className="workflow-card flex h-[770px] flex-col overflow-hidden border border-black bg-white">
            <div className="h-[448px] bg-[#ececec]">
              <img src={card.image} alt={card.title} className="workflow-media h-full w-full object-contain" />
            </div>
            <div className="flex-1 border-t border-black bg-white px-[22px] py-[18px] text-center">
              <h3 className="text-[26px] font-bold leading-none">{card.title}</h3>
              <p className="mt-[24px] text-left text-[18px] leading-[1.55] tracking-[1px]">{card.desc}</p>
            </div>
            <div className="h-[92px] shrink-0 bg-[#00F5FF] py-[10px] text-center">
              <div className="mb-[8px] text-[18px] font-bold text-[#061417]">适合度</div>
              <Stars count={card.stars} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function SystemFlow() {
  return (
    <div className="workflow-diagram relative h-[500px] border border-black bg-white">
      <div className="absolute left-0 top-0 flex h-[76px] w-full items-center justify-center bg-[#00F5FF] text-[32px] font-bold tracking-[3px] text-[#061417]">
        玩法流程图
      </div>
      <ConnectorSvg markerId="workflow-system-arrow" viewBox="0 0 1220 500" className="absolute inset-0 pointer-events-none">
        <path d="M144 188 H188" />
        <path d="M292 188 H336" />
        <path d="M440 188 H484" />
        <path d="M588 188 H620" />
        <path d="M694 188 H760" />
        <path d="M694 188 V314 H760" />
        <path d="M818 188 H910" />
        <path d="M818 314 H910" />
        <path d="M968 314 H1040" />
        <path d="M1069 343 V398" />
      </ConnectorSvg>
      <BlueNode className="absolute left-[40px] top-[158px] h-[60px] w-[104px] px-[10px] text-[17px] leading-[1.18]">打开主界面</BlueNode>
      <BlueNode className="absolute left-[188px] top-[158px] h-[60px] w-[104px] px-[10px] text-[17px] leading-[1.18]">进入招式</BlueNode>
      <BlueNode className="absolute left-[336px] top-[158px] h-[60px] w-[104px] px-[10px] text-[17px] leading-[1.18]">招式列表</BlueNode>
      <BlueNode className="absolute left-[484px] top-[158px] h-[60px] w-[104px] px-[10px] text-[17px] leading-[1.18]">点击强化</BlueNode>
      <DiamondNode className="h-[74px] w-[74px]" style={{ left: 620, top: 151 }}>材料<br />判断</DiamondNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 760, top: 159 }}>材料<br />足够</CircleNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 910, top: 159 }}>强化<br />成功</CircleNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 760, top: 285 }}>材料<br />不足</CircleNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 910, top: 285 }}>跳转<br />来源</CircleNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 1040, top: 285 }}>获取<br />道具</CircleNode>
      <CircleNode className="h-[58px] w-[58px] text-[15px] leading-[1.18]" style={{ left: 1040, top: 398 }}>退出<br />流程</CircleNode>
      <p className="absolute bottom-[24px] left-[24px] text-[20px] tracking-[2px] text-black">
        操作方式与系统结构的调整、以及部分界面表现概念的分析
      </p>
    </div>
  );
}

function DepartmentMatrix() {
  return (
    <table className="workflow-table w-full table-fixed border-[2px] border-black bg-white text-center text-[22px] tracking-[1.5px] text-black" style={{ borderCollapse: 'collapse' }}>
      <colgroup>
        <col className="w-[86px]" />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th colSpan={4} className="border-[2px] border-black bg-[#00F5FF] py-[24px] text-[32px] font-bold text-[#061417]">
            需要制作的功能
          </th>
        </tr>
        <tr className="h-[86px]">
          <th className="border-[2px] border-black" />
          {['视觉', '预设', '动/特效'].map((head) => (
            <th key={head} className="border-[2px] border-black text-[28px] font-bold">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="h-[178px]">
          <th className="border-[2px] border-black text-[28px] font-bold">通用</th>
          <td className="border-[2px] border-black">
            <span className="inline-flex h-[54px] w-[260px] items-center justify-center rounded-[2px] bg-[#ffae00] font-bold text-white">招式强化</span>
          </td>
          <td className="border-[2px] border-black">
            <span className="inline-flex h-[54px] w-[260px] items-center justify-center rounded-[2px] bg-[#1da1f2] font-bold text-white">招式强化</span>
          </td>
          <td className="border-[2px] border-black" />
        </tr>
        <tr className="h-[178px]">
          <th className="border-[2px] border-black text-[28px] font-bold">特殊</th>
          <td className="border-[2px] border-black">
            <span className="inline-flex h-[54px] w-[260px] items-center justify-center rounded-[2px] bg-[#ffae00] font-bold text-white">招式强化结算界面</span>
          </td>
          <td className="border-[2px] border-black" />
          <td className="border-[2px] border-black" />
        </tr>
        <tr className="h-[178px]">
          <th className="border-[2px] border-black text-[28px] font-bold">复用</th>
          <td className="border-[2px] border-black" />
          <td className="border-[2px] border-black">
            <span className="inline-flex h-[74px] w-[360px] items-center justify-center rounded-[2px] bg-[#1da1f2] px-[20px] font-bold leading-[1.25] text-white">
              招式强化结算界面<br />（预设档名）
            </span>
          </td>
          <td className="border-[2px] border-black">
            <span className="inline-flex h-[74px] w-[360px] items-center justify-center rounded-[2px] bg-[#9b42f4] px-[20px] font-bold leading-[1.25] text-white">
              招式强化结算界面<br />（动/特效档名）
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ImageShowcase({
  src,
  height,
  objectFit = 'contain',
  title,
}: {
  src: string;
  height: number;
  objectFit?: 'cover' | 'contain';
  title?: string;
}) {
  return (
    <div className="workflow-panel overflow-hidden border border-black bg-white">
      {title ? (
        <div className="border-b border-black bg-[#00F5FF] py-[20px] text-center text-[30px] font-bold tracking-[2px] text-[#061417]">
          {title}
        </div>
      ) : null}
      <img
        src={src}
        alt=""
        className={`workflow-media w-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
        style={{ height }}
      />
    </div>
  );
}

function TestOptimizationSection() {
  const rows = [
    {
      detail: '页签点击后，页签状态\n并没有变化',
      image: figmaAssets.testTabState,
      imageClassName: 'h-[26px] w-[198px] object-contain',
      solution: '需要给页签添加点击后\n会高亮的动画',
      status: '已解决',
    },
    {
      detail: '消耗道具中\n没有数字显示',
      image: figmaAssets.testBookIcon,
      imageClassName: 'h-[82px] w-[82px] object-contain',
      solution: '需要把文本遮罩去除，\n或者拉高文本高度',
      status: '',
    },
  ] as const;

  return (
    <div>
      <div className="workflow-copy mb-[54px] text-black">
        <h2 className="text-[34px] leading-none tracking-[3.6px]">测试优化</h2>
        <p className="mt-[38px] text-[28px] font-light leading-[1.55] tracking-[2.8px]">
          对设计内容进行走查，制作问题跟进列表，以便跟踪采纳与优化的实现情况，并自己测试
          <br />
          以确保界面可以达到外放面对玩家的程度
        </p>
      </div>

      <div className="workflow-table mx-auto grid w-[1080px] grid-cols-[78px_192px_174px_190px_126px_118px_126px_76px] border border-black bg-white text-center text-[18px] leading-[1.45] tracking-[0.8px] text-black">
        {['界面', '问题详情', '问题附图', '解决方案', '问题等级', '处理人', '处理时间', '解决情况'].map((head) => (
          <div key={head} className="flex h-[90px] items-center justify-center border-b border-r border-black bg-[#00F5FF] px-[8px] text-[22px] font-bold tracking-[1.6px] text-[#061417] last:border-r-0">
            {head}
          </div>
        ))}

        <div className="row-span-2 flex min-h-[330px] items-center justify-center border-r border-black bg-[#00F5FF] px-[10px] text-[27px] font-bold leading-[1.35] tracking-[2.5px] text-[#061417]">
          招式
          <br />
          强化
        </div>

        {rows.map((row, idx) => (
          <div key={row.detail} className="contents">
            <div className={`flex h-[165px] items-center justify-center whitespace-pre-line border-r border-black px-[14px] ${idx === 0 ? 'border-b' : ''}`}>
              {row.detail}
            </div>
            <div className={`flex h-[165px] items-center justify-center border-r border-black ${idx === 0 ? 'border-b' : ''}`}>
              <img src={row.image} alt="" className={row.imageClassName} />
            </div>
            <div className={`flex h-[165px] items-center justify-center whitespace-pre-line border-r border-black px-[14px] ${idx === 0 ? 'border-b' : ''}`}>
              {row.solution}
            </div>
            <div className={`flex h-[165px] items-center justify-center border-r border-black text-[#f02b39] ${idx === 0 ? 'border-b' : ''}`}>
              高
            </div>
            <div className={`flex h-[165px] items-center justify-center border-r border-black ${idx === 0 ? 'border-b' : ''}`}>UE</div>
            <div className={`flex h-[165px] items-center justify-center border-r border-black ${idx === 0 ? 'border-b' : ''}`}>7.15</div>
            <div className={`flex h-[165px] items-center justify-center px-[12px] ${idx === 0 ? 'border-b border-black' : ''}`}>
              {row.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QingyuWorkflowCase() {
  useEffect(() => {
    const root = document.querySelector('.workflow-no-paper');
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement | SVGSVGElement>(
        [
          '.workflow-entrance',
          '.workflow-card',
          '.workflow-section-title',
          '.workflow-diagram',
          '.workflow-connector',
          '.workflow-node',
          '.workflow-panel',
          '.workflow-copy',
          '.workflow-media',
          '.workflow-table',
          '.workflow-table tr',
          '.workflow-table > div',
          '.workflow-table span',
        ].join(','),
      ),
    );

    targets.forEach((target, index) => {
      target.style.setProperty('--workflow-delay', `${Math.min(index * 48, 820)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-transparent">
      <style>
        {`
          .workflow-no-paper .bg-white,
          .workflow-no-paper .bg-\\[\\#f6f6f6\\],
          .workflow-no-paper .bg-\\[\\#ececec\\] {
            background-color: transparent !important;
          }

          .workflow-no-paper .text-black,
          .workflow-no-paper .text-\\[\\#f02b39\\] {
            color: #00F5FF !important;
          }

          .workflow-no-paper .border-black {
            border-color: #00F5FF !important;
          }

          .workflow-no-paper table,
          .workflow-no-paper article,
          .workflow-no-paper section {
            background-color: transparent !important;
          }

          .workflow-no-paper thead tr:not(:first-child),
          .workflow-no-paper tbody tr:nth-child(even) {
            background-color: rgba(0, 245, 255, 0.06);
          }

          .workflow-no-paper .border-b,
          .workflow-no-paper .border-r,
          .workflow-no-paper .border-t {
            border-color: #00F5FF !important;
          }

          .workflow-no-paper .workflow-entrance,
          .workflow-no-paper .workflow-card,
          .workflow-no-paper .workflow-section-title,
          .workflow-no-paper .workflow-diagram,
          .workflow-no-paper .workflow-panel,
          .workflow-no-paper .workflow-copy,
          .workflow-no-paper .workflow-media,
          .workflow-no-paper .workflow-table,
          .workflow-no-paper .workflow-table tr,
          .workflow-no-paper .workflow-table > div,
          .workflow-no-paper .workflow-table span {
            opacity: 0;
            will-change: opacity, transform, filter;
          }

          .workflow-no-paper .workflow-entrance.is-visible,
          .workflow-no-paper .workflow-section-title.is-visible,
          .workflow-no-paper .workflow-panel.is-visible,
          .workflow-no-paper .workflow-copy.is-visible,
          .workflow-no-paper .workflow-table.is-visible {
            animation: workflow-rise-in 720ms cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-card.is-visible {
            animation: workflow-card-in 760ms cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-node {
            opacity: 0;
            will-change: opacity, filter, box-shadow;
          }

          .workflow-no-paper .workflow-node.is-visible {
            animation: workflow-node-in 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-diagram.is-visible {
            animation: workflow-soft-reveal 680ms ease-out both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-media.is-visible {
            animation: workflow-media-in 820ms cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-table tr.is-visible,
          .workflow-no-paper .workflow-table > div.is-visible,
          .workflow-no-paper .workflow-table span.is-visible {
            animation: workflow-table-line-in 520ms ease-out both;
            animation-delay: var(--workflow-delay, 0ms);
          }

          .workflow-no-paper .workflow-connector > g > path {
            opacity: 0;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }

          .workflow-no-paper .workflow-connector.is-visible > g > path {
            animation: workflow-line-draw 920ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-delay: calc(var(--workflow-delay, 0ms) + 120ms);
          }

          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(2) { animation-delay: calc(var(--workflow-delay, 0ms) + 190ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(3) { animation-delay: calc(var(--workflow-delay, 0ms) + 260ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(4) { animation-delay: calc(var(--workflow-delay, 0ms) + 330ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(5) { animation-delay: calc(var(--workflow-delay, 0ms) + 400ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(6) { animation-delay: calc(var(--workflow-delay, 0ms) + 470ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(7) { animation-delay: calc(var(--workflow-delay, 0ms) + 540ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(8) { animation-delay: calc(var(--workflow-delay, 0ms) + 610ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(9) { animation-delay: calc(var(--workflow-delay, 0ms) + 680ms); }
          .workflow-no-paper .workflow-connector.is-visible > g > path:nth-child(10) { animation-delay: calc(var(--workflow-delay, 0ms) + 750ms); }

          @keyframes workflow-rise-in {
            from {
              opacity: 0;
              transform: translate3d(0, 28px, 0);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              filter: blur(0);
            }
          }

          @keyframes workflow-card-in {
            from {
              opacity: 0;
              transform: translate3d(0, 34px, 0) scale(0.96);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes workflow-node-in {
            from {
              opacity: 0;
              filter: blur(8px) brightness(1.45);
              box-shadow: 0 0 0 rgba(0, 245, 255, 0);
            }
            to {
              opacity: 1;
              filter: blur(0) brightness(1);
              box-shadow: 0 0 28px rgba(0, 245, 255, 0.28);
            }
          }

          @keyframes workflow-soft-reveal {
            from {
              opacity: 0;
              filter: blur(6px);
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }

          @keyframes workflow-media-in {
            from {
              opacity: 0;
              transform: translate3d(0, 20px, 0) scale(1.03);
              filter: blur(8px) saturate(0.85);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
              filter: blur(0) saturate(1);
            }
          }

          @keyframes workflow-table-line-in {
            from {
              opacity: 0;
              transform: translate3d(0, 12px, 0);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              filter: blur(0);
            }
          }

          @keyframes workflow-line-draw {
            from {
              opacity: 0;
              stroke-dashoffset: 1000;
            }
            to {
              opacity: 1;
              stroke-dashoffset: 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .workflow-no-paper .workflow-entrance,
            .workflow-no-paper .workflow-card,
            .workflow-no-paper .workflow-section-title,
            .workflow-no-paper .workflow-diagram,
            .workflow-no-paper .workflow-panel,
            .workflow-no-paper .workflow-copy,
            .workflow-no-paper .workflow-media,
            .workflow-no-paper .workflow-table,
            .workflow-no-paper .workflow-table tr,
            .workflow-no-paper .workflow-table > div,
            .workflow-no-paper .workflow-table span,
            .workflow-no-paper .workflow-node {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }

            .workflow-no-paper .workflow-connector > g > path {
              animation: none !important;
              opacity: 1 !important;
              stroke-dashoffset: 0 !important;
            }
          }
        `}
      </style>
      <ResponsiveScaleFrame minDesignWidth={1280} maxScale={1}>
        <section className="workflow-no-paper w-[1280px] bg-transparent px-[30px] py-[26px] font-['Microsoft_YaHei',sans-serif] text-[#00F5FF]">
          <h1 className="workflow-entrance mb-[42px] text-[46px] font-bold leading-none tracking-[5px] text-[#00F5FF]">工作流程</h1>

          <div className="mb-[78px] flex justify-center gap-[28px]">
            <WorkflowCard title="需求分析" items={['策划需求沟通', '策划需求梳理']} />
            <WorkflowCard title="用户研究" items={['玩家心理需求', '玩家应用场景']} />
            <WorkflowCard title="交互设计" items={['信息框架', '结构层梳理', '系统规范规划', '原型设计', '游戏界面制作']} />
            <WorkflowCard title="体验优化" items={['UI体验反馈', '动效体验反馈', '付费商业优化', '整体统一性规划']} />
          </div>

          <SectionTitle title="策划需求梳理" desc="拿到新需求时，会对需求背景、期望、目的、系统逻辑框架进行梳理" />
          <RequirementMap />
          <DemandTable />

          <div className="mt-[90px]">
            <SectionTitle title="玩家应用场景分析" desc="从玩家目标、完成方法、关注内容与操作频率拆解招式强化流程中的关键体验要求" />
            <PsychologyNeedTable />
            <div className="mt-[40px]">
              <ScenarioTable />
            </div>
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="确认设计方向" desc="操作方式与系统结构的调整、以及部分界面表现概念的分析" />
            <DirectionBlock />
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="系统结构/玩法流程" desc="操作方式与系统结构的调整、以及部分界面表现概念的分析" />
            <SystemFlow />
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="原型绘制" desc="操作方式与系统结构的调整、以及部分界面表现概念的分析" />
            <ImageShowcase src={figmaAssets.prototype} height={2140} title="招式强化原型流程图" />
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="部门合作" desc="在交互稿通过审核后，会对接各部门提交需求表，插单推进优化进程，并进行验收" />
            <DepartmentMatrix />
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="界面制作" desc="参照交互稿，在 unity 中使用 UGUI 进行临时界面预设搭建，搭建完成后交付给对应的客户端开发人员进行功能实现" />
            <ImageShowcase src={figmaAssets.production} height={790} objectFit="cover" title="临时界面预设搭建" />
          </div>

          <div className="mt-[90px]">
            <SectionTitle title="界面还原" desc="在美术绘制完成界面效果图后，把临时资源替换成正式资源，并且制作相应的界面动效" />
            <ImageShowcase src={figmaAssets.restore} height={680} objectFit="cover" title="界面效果图还原" />
          </div>

          <div className="mt-[90px]">
            <TestOptimizationSection />
          </div>
        </section>
      </ResponsiveScaleFrame>
    </div>
  );
}
