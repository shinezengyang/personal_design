import { publicUrl } from './publicUrl';

export type Project = {
  id: string;
  title: string;
  category: string;
  publisher?: string;
  description: string;
  tags: string[];
  image: string;
  imageObjectPosition?: string;
  challenge: string;
  process: string[];
  outcome: string[];
  structureLayerNodes?: { pencilNode: string }[];
};

const PROJECTS_DATA: Project[] = [
  {
    id: 'xingji-aodaisai',
    title: 'High Seas Hero',
    category: '卡牌+SLG 手游',
    publisher: '点点互动',
    description:
      '当陆地沦为海底，饥饿、疾病和变种生物摧毁了现代文明，在末世，唯有拼命战斗才能争取资源和权力。',
    tags: ['海上战争', '末日朋克', '欧美卡通'],
    image: 'pencil/xingji-aodaisai/Background.webp',
    imageObjectPosition: 'center top',
    challenge:
      '游戏核心玩家以 25–40 岁、有 SLG 经验的中重度用户为主。他们对功能深度有明确预期，但同时希望在进入新系统时减少学习成本；他们对重复操作的容忍度低，需要高效率的流程入口与清晰的状态反馈。',
    process: [
      '竞品分析：梳理海外主流 SLG 游戏的界面结构与交互模式',
      '用户调研：结合运营反馈定位高频痛点',
      '信息架构：设计范围层 → 结构层 → 框架层的完整分层',
      '原型设计：在 Figma 中完成交互原型并交付开发评审',
      '可用性测试：版本上线后跟踪数据，持续迭代优化',
    ],
    outcome: [
      '核心菜单系统操作路径缩短约 30%',
      '版本测试阶段用户留存率提升',
      '沉淀可复用的界面组件与交互规范，提升团队协作效率',
    ],
    structureLayerNodes: [{ pencilNode: '8qvkJ' }],
  },
  {
    id: 'qingyu-nian',
    title: '庆余年',
    category: 'MMORPG 手游',
    publisher: '盛趣游戏',
    description:
      '玩家在游戏里将扮演一个初入江湖、向往正义与自由的热血少侠，参与主角范闲一生所经历的，有关爱恨情仇的庙堂纷争与江湖往事。',
    tags: ['多重结局', '探索解密', '古今碰撞'],
    image: 'pencil/qingyu-nian/Background.webp',
    imageObjectPosition: 'center center',
    challenge:
      '《庆余年》作为 IP 改编 MMORPG，玩家对剧情沉浸度与功能完整性均有强烈期待。交互设计需在保持 IP 风格一致性的同时，降低新手引导门槛，并在复杂系统之间建立清晰的导航逻辑。',
    process: [
      '竞品分析：对标多款头部 MMORPG 游戏的系统设计',
      '用户调研：收集玩家痛点并建立优化优先级',
      '交互设计：围绕战斗、任务、社交等核心系统完成全链路原型',
      '规范制定：在 Figma 中建立界面布局、控件与多语言规范',
      '团队协作：带领团队对接视觉、程序、运营各部门',
    ],
    outcome: [
      '基于 2,000+ 问卷与三类玩家画像，明确主界面信息优先级与操作热区',
      '将基础系统、养成、PVE/PVP、帮派、福利运营等模块收敛为清晰的范围层入口与主界面分流',
      '统一移动端、PC/主机主界面结构及 UILayer/HUDLayer/PanelLayer 等界面承载层级',
    ],
  },
  {
    id: 'xingji-ip-collab',
    title: '职力测评',
    category: '应用型产品',
    publisher: '互联网',
    description:
      '面向职场新人能力自测平台，展示项目概括、市场痛点、用户画像、产品结构、流程原型与视觉规范。',
    tags: ['C端'],
    image: 'images/xingji/ip-collab/cdst-showcase.webp',
    imageObjectPosition: 'center',
    challenge:
      '联动活动需要在短时间内建立主题识别度，同时保证任务结构、状态反馈和奖励领取足够直观，避免只热闹不清晰。',
    process: [
      '拆解联动活动主页、任务面板、奖励状态与角色信息展示关系',
      '以角色与主题氛围作为视觉锚点，增强入口吸引力',
      '统一状态标签与按钮逻辑，降低参与门槛',
      '补齐联动专题页面在作品集中的叙事与展示节奏',
    ],
    outcome: [
      '补齐联动活动从主题曝光到任务推进的完整展示',
      '形成更适合专题型运营活动的轻量交互结构',
      '让页面既能体现活动气质，也能快速传达玩法重点',
    ],
  },
  {
    id: 'xingji-naval-trial',
    title: '我为球狂',
    category: '应用型产品',
    publisher: '互联网',
    description:
      '围绕足球赛果预测应用，展示图标设计、引导流程、预测推荐、充值、个人中心与原型线框。',
    tags: ['C端'],
    image: 'images/xingji/naval-trial/cover-composite.webp',
    imageObjectPosition: 'center',
    challenge:
      '需要把复杂的多阶段挑战玩法压缩成玩家能快速理解的决策闭环，让“选难度、进战斗、拿奖励”既清楚又有成长驱动力。',
    process: [
      '梳理活动入口、难度选择、个人挑战、联盟挑战与奖励结算的完整链路',
      '通过信息分层减少玩家首次进入活动时的认知负担',
      '拆解不同阶段的核心反馈点，强化目标感与推进感',
      '沉淀适用于活动型玩法的面板结构与提示规范',
    ],
    outcome: [
      '完成活动核心链路的交互方案与作品集呈现',
      '建立难度递进、挑战反馈、奖励激励三层体验逻辑',
      '让复杂活动玩法能够被一眼看懂并愿意持续参与',
    ],
  },
];

export async function loadProjects(_signal?: AbortSignal): Promise<Project[]> {
  return PROJECTS_DATA;
}

export async function getProjectById(id: string, _signal?: AbortSignal): Promise<Project | undefined> {
  return PROJECTS_DATA.find((p) => p.id === id);
}

// Expose publicUrl so it doesn't get tree-shaken if needed elsewhere
void publicUrl;
