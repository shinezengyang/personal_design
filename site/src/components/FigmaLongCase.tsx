import { useState } from 'react';
import './FigmaLongCase.css';

export type FigmaLongCaseKey = '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

type CaseMetric = {
  label: string;
  value: string;
};

type CaseStage = {
  id: string;
  title: string;
  desc: string;
};

type CaseBlock = {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
};

type FigmaLongCaseData = {
  title: string;
  subtitle: string;
  nodeId: string;
  theme: 'blue' | 'purple' | 'orange' | 'green' | 'red';
  summary: string;
  challenge: string;
  solution: string;
  metrics: CaseMetric[];
  stages: CaseStage[];
  blocks: CaseBlock[];
  preview?: {
    src: string;
    originalWidth: number;
    originalHeight: number;
  };
};

export const figmaLongCases: Record<FigmaLongCaseKey, FigmaLongCaseData> = {
  '3': {
    title: '养成-天脉',
    subtitle: 'GROWTH · TIANMAI SYSTEM',
    nodeId: '8328:14865',
    theme: 'purple',
    summary: '围绕天脉养成的解锁、升级、消耗、反馈建立一条清晰的成长链路，让玩家知道当前能做什么、下一步要做什么。',
    challenge: '养成系统信息密度高，材料、节点、属性和战力反馈容易堆在一起，玩家第一次进入时很难判断优先级。',
    solution: '用「节点地图 + 分级详情 + 即时属性反馈」拆开认知压力，把长期目标和短期操作放在同一个成长节奏里。',
    metrics: [
      { label: '信息层级', value: '3层' },
      { label: '核心路径', value: '解锁 → 升级 → 反馈' },
      { label: '操作重点', value: '材料可见' },
    ],
    stages: [
      { id: '01', title: '入口识别', desc: '在角色养成中突出天脉入口，明确这是长期成长模块。' },
      { id: '02', title: '节点选择', desc: '以脉络节点承载阶段目标，避免把全部属性一次性压给玩家。' },
      { id: '03', title: '材料确认', desc: '升级前展示消耗、持有数量和不足状态，减少来回跳转。' },
      { id: '04', title: '结果反馈', desc: '升级后即时展示属性变化和战力提升，强化正反馈。' },
    ],
    blocks: [
      {
        eyebrow: 'STRUCTURE',
        title: '用脉络地图承接长期目标',
        body: '天脉不是单点升级，而是一条持续推进的成长路径。页面用节点串联阶段，让玩家自然理解「现在解锁到哪了」。',
        items: ['节点状态区分：未解锁 / 可升级 / 已激活', '主路径保持连续，支线作为扩展目标', '当前节点信息固定在右侧详情区'],
      },
      {
        eyebrow: 'FEEDBACK',
        title: '把数值变化变成可感知反馈',
        body: '养成系统最容易变成纯数字堆叠，所以升级结果需要用更明确的变化提示承接玩家操作。',
        items: ['升级前后属性对比', '战力变化突出显示', '材料不足时给出获取入口'],
      },
      {
        eyebrow: 'DESIGN METHOD',
        title: '渐进披露降低认知负担',
        body: '默认只显示当前阶段最重要的信息，深层规则放到说明或详情中，避免首次进入被信息压住。',
        items: ['先目标，再条件，再结果', '高频操作始终在同一视觉区域', '异常状态用轻提示而不是打断弹窗'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/46c0d4cd-566f-4100-a42d-dce4da7f9d09',
      originalWidth: 1280,
      originalHeight: 7050,
    },
  },
  '4': {
    title: '系统-金兰结义',
    subtitle: 'SOCIAL · BROTHERHOOD SYSTEM',
    nodeId: '8328:15243',
    theme: 'orange',
    summary: '将结义关系从「社交申请」扩展成「仪式、关系、任务、奖励」的完整社交系统，强化玩家之间的长期绑定。',
    challenge: '社交系统容易只停留在邀请和确认，缺少仪式感和后续经营目标，玩家结义后没有持续回访动力。',
    solution: '把金兰结义拆成申请、确认、仪式、关系管理、共同任务和奖励回流，让关系建立后仍然有可持续的互动。',
    metrics: [
      { label: '关系链路', value: '6步' },
      { label: '核心价值', value: '绑定感' },
      { label: '反馈形式', value: '仪式+奖励' },
    ],
    stages: [
      { id: '01', title: '发起邀请', desc: '明确邀请对象、结义条件和当前关系状态。' },
      { id: '02', title: '确认关系', desc: '双方确认后进入结义流程，避免误触或关系误建。' },
      { id: '03', title: '完成仪式', desc: '用仪式页面强化关系建立的纪念感。' },
      { id: '04', title: '关系经营', desc: '通过任务、称号、奖励维持长期互动。' },
    ],
    blocks: [
      {
        eyebrow: 'SOCIAL FLOW',
        title: '关系建立前先降低不确定性',
        body: '社交邀请最怕信息不清，玩家需要知道对方是谁、条件是否满足、结义后会发生什么。',
        items: ['邀请对象信息前置', '条件不满足直接标注原因', '确认按钮与取消按钮明确分离'],
      },
      {
        eyebrow: 'CEREMONY',
        title: '用仪式感提高社交记忆点',
        body: '结义是关系节点，不只是一个状态改变。页面通过仪式流程、称号展示和广播反馈强化记忆。',
        items: ['仪式前预览', '结义成功动画反馈', '频道广播形成社交展示'],
      },
      {
        eyebrow: 'RETENTION',
        title: '关系建立后继续给目标',
        body: '结义后需要持续经营，因此加入共同任务、关系等级和奖励回流，形成长期互动闭环。',
        items: ['共同任务促进组队', '关系等级承接长期成长', '奖励回流到角色养成'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/bccee110-5111-482e-b073-33a2e9a278c7',
      originalWidth: 1280,
      originalHeight: 16560,
    },
  },
  '5': {
    title: '养成-绣身',
    subtitle: 'GROWTH · EMBROIDERY BODY SYSTEM',
    nodeId: '8626:7607',
    theme: 'red',
    summary: '围绕绣身部位、纹样、属性和套装效果建立养成结构，让玩家能清楚理解每一次强化带来的收益。',
    challenge: '多部位、多品质、多属性叠加后，玩家很容易迷失，不知道优先升级哪个部位，也不知道套装目标是什么。',
    solution: '以身体部位作为空间结构，用卡片承载纹样详情，用套装目标作为长期牵引。',
    metrics: [
      { label: '信息组织', value: '部位化' },
      { label: '养成节奏', value: '收集+强化' },
      { label: '核心反馈', value: '套装激活' },
    ],
    stages: [
      { id: '01', title: '选择部位', desc: '以可视化部位承载当前绣身状态。' },
      { id: '02', title: '查看纹样', desc: '展示品质、属性、来源和激活条件。' },
      { id: '03', title: '执行强化', desc: '确认材料消耗后完成强化或替换。' },
      { id: '04', title: '套装反馈', desc: '达到组合条件后触发套装效果提示。' },
    ],
    blocks: [
      {
        eyebrow: 'LAYOUT',
        title: '用身体部位建立空间认知',
        body: '部位化布局比列表更容易记忆，玩家能直接把养成状态和角色身体位置建立对应。',
        items: ['部位入口固定', '当前选中状态高亮', '空位和已装备状态分层显示'],
      },
      {
        eyebrow: 'CHOICE',
        title: '让替换决策有依据',
        body: '绣身涉及替换与强化，界面需要把当前属性和目标属性放在一起，帮助玩家判断是否值得操作。',
        items: ['属性变化对比', '品质色区分稀有度', '来源入口承接缺失材料'],
      },
      {
        eyebrow: 'GOAL',
        title: '套装效果驱动长期收集',
        body: '单件强化带来即时收益，套装效果提供长期目标，两者结合能避免养成变成机械点击。',
        items: ['套装进度可视化', '未激活条件清晰', '激活后给出强反馈'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/86e34ed8-7e47-484e-ba1c-9e44bec65c72',
      originalWidth: 1280,
      originalHeight: 11154,
    },
  },
  '6': {
    title: '养成-绝学',
    subtitle: 'GROWTH · ULTIMATE SKILL SYSTEM',
    nodeId: '8626:8140',
    theme: 'purple',
    summary: '将绝学设计为获取、研习、突破、装配和战斗反馈的完整养成模块，突出技能成长的阶段感。',
    challenge: '技能类养成同时包含招式、等级、材料、效果说明和装配关系，信息过多会影响玩家判断。',
    solution: '把绝学拆成「技能库」「当前技能详情」「研习材料」「装配槽位」四个区域，保证看、养、用之间不断层。',
    metrics: [
      { label: '操作链路', value: '看 → 养 → 用' },
      { label: '关键区域', value: '4块' },
      { label: '反馈重点', value: '技能变化' },
    ],
    stages: [
      { id: '01', title: '获得绝学', desc: '通过玩法、任务或活动获得绝学条目。' },
      { id: '02', title: '查看效果', desc: '技能效果、适用场景和升级收益集中展示。' },
      { id: '03', title: '研习突破', desc: '消耗材料提升技能等级或解锁新效果。' },
      { id: '04', title: '装配使用', desc: '放入技能槽并在战斗中形成可感知收益。' },
    ],
    blocks: [
      {
        eyebrow: 'INFORMATION',
        title: '技能说明要服务于决策',
        body: '玩家关心的不是长文本，而是这个技能适合谁、提升什么、值不值得养。',
        items: ['效果摘要前置', '详细规则折叠', '适用场景标签化'],
      },
      {
        eyebrow: 'UPGRADE',
        title: '升级反馈强调阶段变化',
        body: '绝学成长需要让玩家感到技能真的变强，而不只是等级数字增加。',
        items: ['等级变化动效', '新增效果高亮', '突破节点单独反馈'],
      },
      {
        eyebrow: 'EQUIP',
        title: '装配关系保持可回看',
        body: '技能养成最终要落到战斗使用，所以装配槽位和当前搭配需要始终可见。',
        items: ['槽位状态明确', '冲突规则前置', '推荐搭配辅助选择'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/e9c5022c-4ee2-4179-a92c-60e766ba9028',
      originalWidth: 1280,
      originalHeight: 9440,
    },
  },
  '7': {
    title: '玩法-绝境试炼',
    subtitle: 'GAMEPLAY · EXTREME TRIAL',
    nodeId: '8328:13706',
    theme: 'blue',
    summary: '围绕试炼入口、难度选择、规则说明、挑战反馈和奖励结算，构建一条清晰的 PVE 挑战体验。',
    challenge: '试炼玩法通常规则多、难度多、奖励多，若入口页没有讲清楚，玩家会在进入前就产生压力。',
    solution: '用难度卡片承接选择，用规则摘要降低理解成本，用结算反馈推动下一次挑战。',
    metrics: [
      { label: '玩法类型', value: 'PVE挑战' },
      { label: '核心路径', value: '选难度 → 挑战 → 结算' },
      { label: '设计重点', value: '目标清晰' },
    ],
    stages: [
      { id: '01', title: '进入试炼', desc: '入口页展示玩法定位、开放时间和核心奖励。' },
      { id: '02', title: '选择难度', desc: '用推荐战力、奖励差异帮助玩家选择合适档位。' },
      { id: '03', title: '执行挑战', desc: '战斗中保留目标进度和失败条件提示。' },
      { id: '04', title: '结算回流', desc: '展示奖励、评价和下一档挑战建议。' },
    ],
    blocks: [
      {
        eyebrow: 'ENTRY',
        title: '入口页先回答三个问题',
        body: '玩家进入前最需要知道：这是怎么玩、我能不能打、打完能拿什么。',
        items: ['规则一句话摘要', '推荐战力前置', '核心奖励可视化'],
      },
      {
        eyebrow: 'DIFFICULTY',
        title: '难度选择要有安全感',
        body: '难度过高会挫败，过低又无聊。界面需要给出风险提示和推荐选择。',
        items: ['推荐难度标记', '未达条件弱化显示', '奖励差异直接对比'],
      },
      {
        eyebrow: 'LOOP',
        title: '结算页推动下一次挑战',
        body: '结算不只是发奖励，还要告诉玩家为什么赢、哪里可以提升、下一步去哪里。',
        items: ['评价等级', '奖励明细', '继续挑战 / 提升战力入口'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/b7583f06-a688-4943-8d05-b33b2fb49b0c',
      originalWidth: 1280,
      originalHeight: 9750,
    },
  },
  '8': {
    title: '玩法-边境战场',
    subtitle: 'GAMEPLAY · BORDER BATTLEFIELD',
    nodeId: '8328:14223',
    theme: 'green',
    summary: '以阵营对抗、战场目标、地图信息和奖励结算为核心，构建多人战场的参战与决策体验。',
    challenge: '多人战场中信息变化快，玩家需要同时理解阵营、目标、积分、地图和奖励，界面必须压住噪音。',
    solution: '用目标优先的信息层级，让玩家先知道当前要去哪、做什么、怎么赢，再补充积分和奖励。',
    metrics: [
      { label: '玩法类型', value: 'PVP战场' },
      { label: '核心目标', value: '阵营胜利' },
      { label: '信息优先级', value: '目标 > 地图 > 奖励' },
    ],
    stages: [
      { id: '01', title: '报名匹配', desc: '展示开放时间、参与条件和报名状态。' },
      { id: '02', title: '阵营分配', desc: '进入后明确阵营、队伍和当前战场目标。' },
      { id: '03', title: '战场推进', desc: '地图、目标点和积分变化保持可见。' },
      { id: '04', title: '奖励结算', desc: '按个人表现和阵营结果展示奖励。' },
    ],
    blocks: [
      {
        eyebrow: 'BATTLE MAP',
        title: '地图承担方向感',
        body: '战场里最重要的是方向与目标，地图信息要能让玩家快速判断当前应当去哪里。',
        items: ['目标点高亮', '阵营颜色区分', '战况变化实时反馈'],
      },
      {
        eyebrow: 'STATUS',
        title: '积分信息只保留关键值',
        body: '积分、击杀、占点、剩余时间很多，但首屏只能突出影响决策的关键数据。',
        items: ['比分常驻', '剩余时间固定', '个人贡献折叠展示'],
      },
      {
        eyebrow: 'MOTIVATION',
        title: '奖励同时服务参与和胜利',
        body: '既要鼓励普通玩家参与，也要让核心玩家追求胜利和贡献排名。',
        items: ['参与奖励保底', '胜利奖励增强', '排名奖励刺激竞争'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/aa17dda5-bf36-437f-86c8-54f16b0d7ad9',
      originalWidth: 1280,
      originalHeight: 11219,
    },
  },
  '9': {
    title: '玩法-婚礼结缘',
    subtitle: 'GAMEPLAY · WEDDING BOND',
    nodeId: '8328:17020',
    theme: 'red',
    summary: '把结缘从关系确认扩展成预约、邀请、仪式、见证、奖励和展示的完整社交玩法。',
    challenge: '婚礼玩法既要有仪式感，又不能让流程太重；既要服务双方玩家，也要让好友围观参与。',
    solution: '用阶段化流程控制复杂度，仪式前强调准备，仪式中强调见证，仪式后强调关系展示和奖励回流。',
    metrics: [
      { label: '玩法阶段', value: '预约/仪式/展示' },
      { label: '情绪目标', value: '仪式感' },
      { label: '社交对象', value: '伴侣+好友' },
    ],
    stages: [
      { id: '01', title: '预约婚礼', desc: '选择时间、规格和消耗，确认双方意愿。' },
      { id: '02', title: '邀请宾客', desc: '生成邀请入口，让好友参与见证。' },
      { id: '03', title: '完成仪式', desc: '通过流程动画和场景交互强化仪式感。' },
      { id: '04', title: '关系展示', desc: '称号、纪念物和奖励进入长期关系系统。' },
    ],
    blocks: [
      {
        eyebrow: 'PREPARATION',
        title: '婚礼前把成本和收益讲清楚',
        body: '玩家需要在预约前知道不同规格有什么差异，避免付费或消耗后的不确定。',
        items: ['规格差异对比', '消耗资源确认', '宾客人数和奖励说明'],
      },
      {
        eyebrow: 'CEREMONY',
        title: '仪式过程减少操作负担',
        body: '仪式期间玩家更关注情绪体验，不适合复杂操作。界面应尽量轻，只保留关键推进和互动。',
        items: ['流程节点可见', '交互按钮低干扰', '祝福与见证信息轻量展示'],
      },
      {
        eyebrow: 'SOCIAL VALUE',
        title: '婚礼结束后形成社交资产',
        body: '婚礼的价值不应在仪式结束时停止，称号、纪念物和展示入口需要继续存在。',
        items: ['关系称号展示', '纪念奖励回看', '好友频道广播'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/238cf665-8aa3-4baa-a1f5-86b5cb279ba2',
      originalWidth: 1280,
      originalHeight: 11100,
    },
  },
  '10': {
    title: '养成-三才',
    subtitle: 'GROWTH · SANCAI SYSTEM',
    nodeId: '8606:2028',
    theme: 'blue',
    summary: '围绕天地人三才结构建立成长目标，让玩家通过三系养成理解属性来源、升级路径和组合收益。',
    challenge: '三才系统如果只是三个属性入口，玩家很难理解它们之间的关系，也难以形成长期目标。',
    solution: '以天地人三系为主结构，将解锁、升级、组合激活和属性反馈统一到一套可理解的成长模型里。',
    metrics: [
      { label: '系统结构', value: '天地人' },
      { label: '养成目标', value: '三系均衡' },
      { label: '反馈方式', value: '组合激活' },
    ],
    stages: [
      { id: '01', title: '三系入口', desc: '用天地人三块结构建立系统心智。' },
      { id: '02', title: '单系升级', desc: '每一系展示属性、材料和等级收益。' },
      { id: '03', title: '组合激活', desc: '达到条件后激活额外组合效果。' },
      { id: '04', title: '战力回流', desc: '属性变化回到角色战力，形成成长闭环。' },
    ],
    blocks: [
      {
        eyebrow: 'MODEL',
        title: '三系结构让系统更好记',
        body: '天地人比普通列表更有记忆点，也更符合武侠/东方题材的世界观表达。',
        items: ['三系入口并列', '当前进度数字化', '已激活效果直接展示'],
      },
      {
        eyebrow: 'BALANCE',
        title: '引导玩家不要只堆单线',
        body: '三才的设计重点是均衡成长，因此要用组合效果提醒玩家补齐短板。',
        items: ['最低系等级提示', '组合条件明确', '推荐升级路径'],
      },
      {
        eyebrow: 'RESULT',
        title: '结果反馈要同时体现单点和整体',
        body: '每次升级既有当前系收益，也可能推动整体组合激活，两种反馈需要分层呈现。',
        items: ['单系属性增长', '组合效果弹出', '战力变化同步'],
      },
    ],
    preview: {
      src: 'https://www.figma.com/api/mcp/asset/a1bc19f2-723b-4807-acce-d7126c2d84ab',
      originalWidth: 1280,
      originalHeight: 10031,
    },
  },
};

export function isFigmaLongCaseKey(value: string): value is FigmaLongCaseKey {
  return Object.prototype.hasOwnProperty.call(figmaLongCases, value);
}

function FigmaPreview({ data }: { data: FigmaLongCaseData }) {
  const [failed, setFailed] = useState(false);

  if (!data.preview || failed) {
    return (
      <div className="figma-case-preview figma-case-preview--fallback">
        <div>
          <span>FIGMA NODE</span>
          <strong>{data.nodeId}</strong>
          <p>图片预览未加载时，页面仍保留完整代码绘制内容。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="figma-case-preview">
      <img
        src={data.preview.src}
        alt={`${data.title} Figma 原稿预览`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function FigmaLongCase({ caseKey }: { caseKey: string }) {
  const data = isFigmaLongCaseKey(caseKey) ? figmaLongCases[caseKey] : figmaLongCases['3'];

  return (
    <article className={`project-detail-module figma-case figma-case--${data.theme}`} aria-label={data.title}>
      <section className="figma-case-hero">
        <div className="figma-case-hero__copy">
          <div className="figma-case-kicker">Portfolio Case · {data.nodeId}</div>
          <h1>{data.title}</h1>
          <p className="figma-case-subtitle">{data.subtitle}</p>
          <p className="figma-case-summary">{data.summary}</p>
        </div>
        <div className="figma-case-hero__panel">
          {data.metrics.map((metric) => (
            <div className="figma-case-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="figma-case-section figma-case-two-col">
        <div className="figma-case-text-card">
          <span>DESIGN PROBLEM</span>
          <h2>设计问题</h2>
          <p>{data.challenge}</p>
        </div>
        <div className="figma-case-text-card is-strong">
          <span>SOLUTION</span>
          <h2>解决策略</h2>
          <p>{data.solution}</p>
        </div>
      </section>

      <section className="figma-case-section">
        <div className="figma-case-section-title">
          <span>FLOW</span>
          <h2>核心链路</h2>
        </div>
        <div className="figma-case-flow">
          {data.stages.map((stage, index) => (
            <div className="figma-case-stage" key={stage.id}>
              <div className="figma-case-stage__num">{stage.id}</div>
              <h3>{stage.title}</h3>
              <p>{stage.desc}</p>
              {index < data.stages.length - 1 ? <i aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="figma-case-section figma-case-blocks">
        {data.blocks.map((block) => (
          <div className="figma-case-block" key={block.title}>
            <span>{block.eyebrow}</span>
            <h2>{block.title}</h2>
            <p>{block.body}</p>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="figma-case-section figma-case-original">
        <div className="figma-case-section-title">
          <span>REFERENCE</span>
          <h2>Figma 原稿预览</h2>
          <p>上方内容是代码绘制版本；这里保留原稿截图作为视觉对照。</p>
        </div>
        <FigmaPreview data={data} />
      </section>
    </article>
  );
}
