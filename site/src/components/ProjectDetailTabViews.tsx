import { publicUrl } from '../lib/publicUrl';

import { XingjiTabPage } from './XingjiCaseTabPages';


export type ProjectDetailTabKey =
  | 'framework'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20';

type ProjectDetailTab = {
  key: ProjectDetailTabKey;
  label: string;
};

export const PROJECT_DETAIL_TABS: ReadonlyArray<ProjectDetailTab> = [
  { key: 'framework', label: '框架' },
  { key: '7', label: '系统-HUD' },
  { key: '2', label: '系统-阵容推荐' },
  { key: '3', label: '系统-坐标收藏' },
  { key: '4', label: '系统-野外交互' },
  { key: '6', label: '系统-跨服海战' },
  { key: '5', label: '玩法-海军试炼' },
  { key: '9', label: '玩法-燃海矿区' },
  { key: '8', label: '活动-许愿树' },
  { key: '10', label: '活动-清理海盗' },
] as const;

export const QINGYU_PROJECT_DETAIL_TABS: ReadonlyArray<ProjectDetailTab> = [
  { key: 'framework', label: '框架' },
  { key: '2', label: '系统-房屋' },
  { key: '4', label: '系统-金兰结义' },
  { key: '20', label: '系统-伙伴' },
  { key: '17', label: '系统-图鉴收集' },
  { key: '19', label: '系统-帮派' },
  { key: '3', label: '养成-天脉' },
  { key: '5', label: '养成-绣身' },
  { key: '6', label: '养成-绝学' },
  { key: '14', label: '养成-宝石镶嵌' },
  { key: '10', label: '养成-三才' },
  { key: '7', label: '玩法-绝境试炼' },
  { key: '8', label: '玩法-边境战场' },
  { key: '9', label: '玩法-婚礼结缘' },
  { key: '11', label: '玩法-清泉沐浴' },
  { key: '13', label: '玩法-神庙遗迹' },
  { key: '16', label: '玩法-情报簿' },
  { key: '18', label: '玩法-惩凶除恶' },
  { key: '12', label: '活动-回流召回' },
  { key: '15', label: '活动-荣耀赛季' },
] as const;

export const FRAMEWORK_ONLY_PROJECT_DETAIL_TABS: ReadonlyArray<ProjectDetailTab> = [
  { key: 'framework', label: '框架' },
] as const;

export function getProjectDetailTabs(projectId?: string) {
  if (projectId === 'xingji-aodaisai' || projectId === 'yingshi-toushi') {
    return PROJECT_DETAIL_TABS;
  }

  if (projectId === 'qingyu-nian') {
    return QINGYU_PROJECT_DETAIL_TABS;
  }

  return FRAMEWORK_ONLY_PROJECT_DETAIL_TABS;
}

type PlaceholderSection = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  bullets: readonly string[];
};

type PlaceholderStep = {
  id: string;
  title: string;
  desc: string;
};

type PlaceholderTabContent = {
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  highlights: readonly string[];
  steps: readonly PlaceholderStep[];
  sections: readonly PlaceholderSection[];
};

type PlaceholderTabKey = Extract<ProjectDetailTabKey, '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'>;

const placeholderTabs: Record<PlaceholderTabKey, PlaceholderTabContent> = {
  '2': {
    eyebrow: 'Functional Draft 02',
    title: '探险循环与任务流程专题',
    summary:
      '这一页预留给“流程型系统”的展示方式，重点表现从目标选择、路径进入到结果回显的一整条操作链路。',
    heroImage: 'pencil/xingji-aodaisai/panel-2.webp',
    heroImageAlt: '探险循环界面占位图',
    highlights: ['入口层级减少', '任务链路可预览', '战斗前后状态不断层'],
    steps: [
      {
        id: '01',
        title: '目标选择',
        desc: '让玩家在进入前先理解目标、收益与风险，减少“进去了才发现不对”的挫败感。',
      },
      {
        id: '02',
        title: '编队确认',
        desc: '把编队、消耗与收益预估收成一个准备阶段，提升进入前的判断效率。',
      },
      {
        id: '03',
        title: '结算回流',
        desc: '完成任务后的奖励、成长与下一步建议需要接得顺，让玩家自然进入下一轮操作。',
      },
    ],
    sections: [
      {
        eyebrow: 'Flow Mapping',
        title: '收藏与坐标流程占位',
        copy:
          '用流程图页承接复杂操作链路，后续可以替换成具体的任务系统、地图系统或编队系统说明。',
        image: 'pencil/xingji-aodaisai/coord-fav-flow.webp',
        imageAlt: '流程图占位页',
        bullets: ['拆出关键节点', '标明反馈时机', '方便后续扩展为完整专题'],
      },
      {
        eyebrow: 'Combat Entry',
        title: '战前准备信息排布',
        copy:
          '把角色、资源、技能与风险提示集中在一页，让玩家在进入战斗前完成全部准备。',
        image: 'pencil/xingji-aodaisai/panel-1.webp',
        imageAlt: '战前准备界面占位图',
        bullets: ['入口状态一眼可读', '强弱反馈前置', '避免深层菜单跳转'],
      },
    ],
  },
  '3': {
    eyebrow: 'Functional Draft 03',
    title: '反馈规范与控件语言专题',
    summary:
      '这一页作为视觉反馈与组件规范的占位页，后续可以展开按钮系统、状态反馈、品质色与交互节奏。',
    heroImage: 'pencil/xingji-aodaisai/panel5.webp',
    heroImageAlt: '控件语言占位图',
    highlights: ['主按钮优先级明确', '状态切换反馈一致', '规范页适合长期维护'],
    steps: [
      {
        id: '01',
        title: '规范收口',
        desc: '把颜色、字号、按钮状态和入口层级统一收口，减少后续新增页面的风格偏移。',
      },
      {
        id: '02',
        title: '组件复用',
        desc: '先明确哪些控件是基础模块，哪些控件属于强调型入口，再决定它们的复用频率。',
      },
      {
        id: '03',
        title: '维护节奏',
        desc: '把规范页做成长期可更新的展板，后续新增系统时只需要按版块增补，不必重新整理。',
      },
    ],
    sections: [
      {
        eyebrow: 'Button System',
        title: '页签与常规按钮占位',
        copy:
          '这一块预留给顶部页签、底部页签与常规按钮的系统化说明，后续可以补充状态变化和使用规则。',
        image: 'pencil/xingji-aodaisai/tab-buttons.webp',
        imageAlt: '页签按钮占位图',
        bullets: ['主次层级清楚', '状态切换统一', '便于扩写成规范章节'],
      },
      {
        eyebrow: 'State Feedback',
        title: '开关与功能反馈占位',
        copy:
          '用更轻量的反馈组件补充界面节奏，让“能不能点、当前是什么状态”始终一眼可见。',
        image: 'pencil/xingji-aodaisai/switch-buttons.webp',
        imageAlt: '状态反馈占位图',
        bullets: ['开关状态易识别', '功能反馈不打断主流程', '适合后续扩展为微交互章节'],
      },
    ],
  },
  '4': {
    eyebrow: 'Functional Draft 04',
    title: '联盟协作与信息触达专题',
    summary:
      '这一页作为联盟协作、团队广播与信息触达系统的占位专题，后续可以承接公会通知、协作任务和共享目标等设计内容。',
    heroImage: 'pencil/xingji-aodaisai/panel5.webp',
    heroImageAlt: '联盟协作专题占位图',
    highlights: ['协作信息分层', '通知触达清晰', '团队目标同步'],
    steps: [
      {
        id: '01',
        title: '共享目标',
        desc: '先让玩家明确当前联盟目标与个人任务的对应关系，减少“知道有事但不知道先做什么”的混乱感。',
      },
      {
        id: '02',
        title: '信息分发',
        desc: '把系统公告、公会广播和任务提醒分成不同优先级，让真正重要的信息更容易被注意到。',
      },
      {
        id: '03',
        title: '结果回传',
        desc: '协作完成后的进度更新、奖励回传和下一步提示需要连续衔接，保证联盟节奏不断档。',
      },
    ],
    sections: [
      {
        eyebrow: 'Alliance Broadcast',
        title: '联盟通知与任务广播占位',
        copy:
          '这一块预留给联盟公告、任务广播和协作提醒的版式说明，后续可以扩展为信息触达优先级与入口策略专题。',
        image: 'pencil/xingji-aodaisai/tab-buttons.webp',
        imageAlt: '联盟通知占位图',
        bullets: ['主次信息分层', '入口语义清晰', '适合承接后续协作专题'],
      },
      {
        eyebrow: 'Team Response',
        title: '公会协同反馈占位',
        copy:
          '用一组更偏结果反馈的页面占位，承接联盟成员响应、任务状态变化和目标完成后的团队提示方式。',
        image: 'pencil/xingji-aodaisai/switch-buttons.webp',
        imageAlt: '公会协同反馈占位图',
        bullets: ['团队状态可回看', '反馈链路不断层', '后续可扩写成结果反馈章节'],
      },
    ],
  },
  '5': {
    eyebrow: 'Functional Draft 05',
    title: '活动联动与奖励触达专题',
    summary:
      '这一页先作为活动入口、奖励领取与阶段反馈的占位专题，后续可以承接版本活动、阶段任务与奖励回流等设计内容。',
    heroImage: 'pencil/xingji-aodaisai/panel5.webp',
    heroImageAlt: '活动联动专题占位图',
    highlights: ['活动入口清晰', '奖励反馈集中', '阶段目标连续可见'],
    steps: [
      {
        id: '01',
        title: '活动聚合',
        desc: '把限时活动、阶段任务和奖励领取聚合到清晰的入口层级里，减少玩家在多个界面间来回寻找。',
      },
      {
        id: '02',
        title: '奖励触达',
        desc: '让奖励状态、可领取进度和下一步目标持续可见，避免完成了任务却没有形成及时反馈。',
      },
      {
        id: '03',
        title: '回流闭环',
        desc: '玩家领取奖励后，界面需要自然引导回成长、养成或下一阶段任务，形成连续操作闭环。',
      },
    ],
    sections: [
      {
        eyebrow: 'Event Entry',
        title: '活动入口与阶段任务占位',
        copy:
          '这一块预留给活动总入口、阶段奖励和任务面板的结构说明，后续可以替换为具体活动专题设计。',
        image: 'pencil/xingji-aodaisai/tab-buttons.webp',
        imageAlt: '活动入口占位图',
        bullets: ['活动入口集中', '奖励状态可见', '适合继续扩展为完整案例'],
      },
      {
        eyebrow: 'Reward Flow',
        title: '奖励领取与阶段回流占位',
        copy:
          '用更明确的领取反馈和阶段完成提示串起活动回路，让玩家知道奖励来自哪里、领完后该做什么。',
        image: 'pencil/xingji-aodaisai/switch-buttons-updated.webp',
        imageAlt: '奖励回流占位图',
        bullets: ['奖励状态清楚', '领取动作明确', '回流目标自然承接'],
      },
    ],
  },
  '6': {
    eyebrow: 'Functional Draft 06',
    title: '跨服联动与阶段推进专题',
    summary:
      '这一页预留给跨服活动、阶段目标推进与阵营对抗的结构展示，后续可以承接多阶段事件、阶段奖励与进度回流设计。',
    heroImage: 'pencil/xingji-aodaisai/panel5.webp',
    heroImageAlt: '跨服联动专题占位图',
    highlights: ['阶段目标清晰', '跨服信息聚合', '阵营反馈连续'],
    steps: [
      { id: '01', title: '目标发布', desc: '先让玩家理解当前赛季目标、阵营任务和阶段奖励之间的关系，避免只看到任务不知道为什么做。' },
      { id: '02', title: '进度推进', desc: '把跨服战况、个人贡献和阶段奖励收在同一条链路里，让玩家随时知道自己推进到哪里。' },
      { id: '03', title: '阶段回流', desc: '完成阶段后要自然回到下一轮阵营目标、养成投入和资源分配，不让节奏断掉。' },
    ],
    sections: [
      {
        eyebrow: 'Cross-Server Flow',
        title: '跨服阶段推进占位',
        copy: '这一块预留给跨服活动总览、阶段任务和战况反馈的结构说明，后续可以替换为具体专题内容。',
        image: 'pencil/xingji-aodaisai/tab-buttons.webp',
        imageAlt: '跨服推进占位图',
        bullets: ['阶段目标集中展示', '奖励回流不断层', '适合扩展为完整案例'],
      },
      {
        eyebrow: 'Camp Response',
        title: '阵营反馈与阶段总结占位',
        copy: '用结果页样式承接跨服阶段的胜负、贡献与下一步建议，让玩家的行为能够和阵营结果建立联系。',
        image: 'pencil/xingji-aodaisai/switch-buttons-updated.webp',
        imageAlt: '阵营反馈占位图',
        bullets: ['贡献反馈清晰', '阶段结果可回看', '下一步目标自然承接'],
      },
    ],
  },
  '7': {
    eyebrow: 'Functional Draft 07',
    title: '主城经营与资源回流专题',
    summary:
      '这一页预留给主城建设、资源产出与升级回流的结构展示，后续可以承接资源体系与建筑循环的深入设计。',
    heroImage: 'pencil/xingji-aodaisai/panel.webp',
    heroImageAlt: '主城经营专题占位图',
    highlights: ['产出入口聚合', '升级反馈明确', '资源回流连续'],
    steps: [
      { id: '01', title: '状态读取', desc: '玩家先读懂当前主城状态、资源缺口与待办事项，再决定优先推进什么。' },
      { id: '02', title: '建造升级', desc: '把建造、升级、加速和收益预估集中在一条清晰的操作链路里，降低跳转成本。' },
      { id: '03', title: '收益回流', desc: '完成升级后要把增长结果与下一步推荐自然接起来，让主城循环不断档。' },
    ],
    sections: [
      {
        eyebrow: 'City Build',
        title: '主城建造与升级占位',
        copy: '这一块预留给主城建筑列表、升级链路和收益说明的版式结构，后续可以换成完整经营专题。',
        image: 'pencil/xingji-aodaisai/panel.webp',
        imageAlt: '主城建造占位图',
        bullets: ['状态读取前置', '建造操作集中', '升级反馈明确'],
      },
      {
        eyebrow: 'Resource Return',
        title: '资源回流与结果反馈占位',
        copy: '让玩家完成升级后立刻看到收益变化和下一步目标，减少“升级完不知道然后呢”的断层感。',
        image: 'pencil/xingji-aodaisai/modal-screen.webp',
        imageAlt: '资源回流占位图',
        bullets: ['收益变化即时可见', '结果反馈集中', '下一步推荐清楚'],
      },
    ],
  },
  '8': {
    eyebrow: 'Functional Draft 08',
    title: '战斗准备与战后回流专题',
    summary:
      '这一页预留给战斗前准备、战中目标聚焦与战后奖励回流的完整链路展示，后续可以承接具体战斗系统案例。',
    heroImage: 'pencil/xingji-aodaisai/panel-1.webp',
    heroImageAlt: '战斗准备专题占位图',
    highlights: ['战前准备集中', '目标提示前置', '战后回流明确'],
    steps: [
      { id: '01', title: '战前确认', desc: '进入战斗前，先把编队、资源和收益预估放在一起，帮助玩家快速判断要不要打。' },
      { id: '02', title: '目标聚焦', desc: '战斗过程中保持当前目标、关键提醒和主操作入口稳定，减少切换焦虑。' },
      { id: '03', title: '奖励回流', desc: '战后奖励、掉落与下一步建议收束成统一回流页，让流程自然接回主循环。' },
    ],
    sections: [
      {
        eyebrow: 'Battle Prep',
        title: '战前准备页占位',
        copy: '预留给编队、风险提示、目标说明和奖励预估的统一展示区，后续可以扩展成完整战斗案例。',
        image: 'pencil/xingji-aodaisai/panel-1.webp',
        imageAlt: '战前准备占位图',
        bullets: ['风险与收益并置', '关键入口稳定', '避免深层跳转'],
      },
      {
        eyebrow: 'After Action',
        title: '战后回流页占位',
        copy: '让战斗结束后的奖励、成长和下一步推荐接得更顺，把流程重新带回主循环。',
        image: 'pencil/xingji-aodaisai/half-screen.webp',
        imageAlt: '战后回流占位图',
        bullets: ['结果反馈集中', '成长变化明确', '下一步建议自然承接'],
      },
    ],
  },
  '9': {
    eyebrow: 'Functional Draft 09',
    title: '社交沟通与公会互动专题',
    summary:
      '这一页预留给聊天、公会互动、协作标记与公告系统的整体展示，后续可以承接更完整的社交协作专题。',
    heroImage: 'pencil/xingji-aodaisai/tab-buttons.webp',
    heroImageAlt: '社交沟通专题占位图',
    highlights: ['聊天优先级分明', '公会互动集中', '协作信息不断层'],
    steps: [
      { id: '01', title: '消息分类', desc: '先把系统消息、公会消息和私人沟通拆出优先级，让不同类型的信息不再混成一锅。' },
      { id: '02', title: '协作进入', desc: '让公会任务、集合指令和共享标记在同一条链路上被理解和响应。' },
      { id: '03', title: '结果同步', desc: '行动完成后，把结果同步给个人和团队，形成可回看的沟通闭环。' },
    ],
    sections: [
      {
        eyebrow: 'Communication Layer',
        title: '聊天与公告系统占位',
        copy: '这一块预留给聊天层级、系统公告和公会广播的结构说明，后续可以换成真实社交模块。',
        image: 'pencil/xingji-aodaisai/tab-buttons.webp',
        imageAlt: '聊天公告占位图',
        bullets: ['消息优先级拆分', '社交层级清楚', '适合扩展为完整案例'],
      },
      {
        eyebrow: 'Guild Action',
        title: '公会互动与响应占位',
        copy: '把集合、协作和结果同步做成连续的反馈链路，让团队沟通不只停在喊话层面。',
        image: 'pencil/xingji-aodaisai/switch-buttons.webp',
        imageAlt: '公会互动占位图',
        bullets: ['协作动作集中', '团队响应可见', '结果同步连续'],
      },
    ],
  },
  '10': {
    eyebrow: 'Functional Draft 10',
    title: '长期运营与版本节奏专题',
    summary:
      '这一页预留给版本节奏、长期目标与运营活动串联的展示，后续可以承接更完整的赛季和版本运营设计。',
    heroImage: 'pencil/xingji-aodaisai/panel5.webp',
    heroImageAlt: '长期运营专题占位图',
    highlights: ['赛季目标清晰', '版本活动串联', '长期进度可见'],
    steps: [
      { id: '01', title: '目标发布', desc: '让玩家理解当前版本想让自己做什么，以及这些阶段目标如何连接到长期成长。' },
      { id: '02', title: '活动串联', desc: '把多个短期活动和长期目标串成一条明确路线，避免玩法像散点一样出现。' },
      { id: '03', title: '版本回流', desc: '每个阶段结束后，把奖励、成长和下阶段建议统一回收到主界面节奏里。' },
    ],
    sections: [
      {
        eyebrow: 'Season Planning',
        title: '赛季目标与阶段进度占位',
        copy: '这一块预留给赛季目标、阶段奖励和长期成长的组织方式，后续可以替换成真实版本专题内容。',
        image: 'pencil/xingji-aodaisai/panel5.webp',
        imageAlt: '赛季目标占位图',
        bullets: ['目标层级分明', '阶段反馈连续', '适合扩展为完整案例'],
      },
      {
        eyebrow: 'Version Rhythm',
        title: '版本节奏与活动回流占位',
        copy: '让版本活动不只是一批入口堆上去，而是和长期目标形成连续节奏，帮助玩家理解为什么做、做完去哪里。',
        image: 'pencil/xingji-aodaisai/switch-buttons-updated.webp',
        imageAlt: '版本节奏占位图',
        bullets: ['活动关系清晰', '版本节奏连续', '长期成长自然承接'],
      },
    ],
  },
};

function PlaceholderIntro({ content }: { content: PlaceholderTabContent }) {
  return (
    <div className="project-detail-module glass-card overflow-hidden rounded-2xl p-6 sm:p-8 card-glow">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div className="space-y-5">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan/70">{content.eyebrow}</div>
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {content.title}
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-cyber-gray sm:text-base">
              {content.summary}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {content.highlights.map((item) => (
              <div
                key={item}
                className="project-detail-inner-card rounded-2xl border border-neon-cyan/20 bg-[#0b1320]/65 px-4 py-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neon-cyan/55">Focus</div>
                <div className="mt-2 text-sm font-semibold leading-relaxed text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[26px] border border-neon-cyan/25 bg-[#07111d]">
          <img
            src={publicUrl(content.heroImage)}
            alt={content.heroImageAlt}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111d] to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full border border-neon-cyan/30 bg-[#07111d]/85 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan/80">
            Placeholder Deck
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderSteps({ steps }: { steps: readonly PlaceholderStep[] }) {
  return (
    <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="font-display text-2xl font-bold text-neon-pink">流程段落</div>
          <div className="mt-1 font-display text-base text-cyber-gray/90">Process Blocks</div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan/60">Placeholder Only</div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="project-detail-inner-card rounded-2xl border border-neon-cyan/16 bg-[#0d1624]/75 px-5 py-5"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-cyan/70">
              Step {step.id}
            </div>
            <div className="mt-3 font-display text-xl font-bold text-white">{step.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-cyber-gray">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderSectionCard({ section }: { section: PlaceholderSection }) {
  return (
    <div className="project-detail-module glass-card overflow-hidden rounded-2xl p-6 sm:p-8 card-glow">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="order-2 space-y-4 lg:order-1">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan/70">{section.eyebrow}</div>
          <div className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {section.title}
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-cyber-gray sm:text-base">{section.copy}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {section.bullets.map((bullet) => (
              <div
                key={bullet}
                className="project-detail-inner-card rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-semibold leading-relaxed text-white"
              >
                {bullet}
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail-inner-card order-1 overflow-hidden rounded-[24px] border border-neon-cyan/22 bg-[#09131f] lg:order-2">
          <img
            src={publicUrl(section.image)}
            alt={section.imageAlt}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailPlaceholderContent({
  activeTab,
}: {
  activeTab: ProjectDetailTabKey;
}) {
  return <XingjiTabPage activeTab={activeTab as PlaceholderTabKey} />;
}
