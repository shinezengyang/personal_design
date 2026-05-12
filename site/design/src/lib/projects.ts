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
    category: '卡牌+模拟战争手游',
    publisher: '点点互动',
    description:
      '当陆地沦为海底，饥饿、疾病和变种生物摧毁了现代文明，在末世，唯有拼命战斗才能争取资源和权力。',
    tags: ['海上战争', '末日朋克', '欧美卡通'],
    image: 'pencil/xingji-aodaisai/Background.png',
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
    tags: ['双武器切换', 'NPC互动', '多重结局', '探索解密', '古今碰撞'],
    image: 'pencil/qingyu-nian/Background.png',
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
      '完成 10 余个核心系统的交互设计交付',
      '建立并推行全项目统一交互规范',
      '指导团队成员成长，提升整体设计产出质量',
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
