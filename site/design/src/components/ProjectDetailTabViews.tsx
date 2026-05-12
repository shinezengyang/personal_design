import { publicUrl } from '../lib/publicUrl';

export type ProjectDetailTabKey = 'framework' | '1' | '2' | '3';

export const PROJECT_DETAIL_TABS: ReadonlyArray<{
  key: ProjectDetailTabKey;
  label: string;
}> = [
  { key: 'framework', label: '框架' },
  { key: '1', label: '案例一' },
  { key: '2', label: '2' },
  { key: '3', label: '3' },
] as const;

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

const placeholderTabs: Record<Exclude<ProjectDetailTabKey, 'framework'>, PlaceholderTabContent> = {
  '1': {
    eyebrow: 'Functional Draft 01',
    title: '资源舱与建造台专题',
    summary:
      '这一页先作为功能界面的占位长页，用来承接后续的资源管理、建造升级与模块联动设计思路。',
    heroImage: 'pencil/xingji-aodaisai/panel.png',
    heroImageAlt: '资源舱与建造台界面占位图',
    highlights: ['资源总览先行', '操作集中在右侧', '升级确认尽量单次决策'],
    steps: [
      {
        id: '01',
        title: '信息聚焦',
        desc: '先露出最关键的资源状态，再让玩家进入具体调参与升级动作，降低第一次进入时的理解压力。',
      },
      {
        id: '02',
        title: '单屏完成',
        desc: '把查看、切换、确认尽量收在一个工作区域，减少连续跳转带来的断层感。',
      },
      {
        id: '03',
        title: '结果回显',
        desc: '所有升级或切换都需要带来即时数值反馈，让玩家知道这一步改变了什么。',
      },
    ],
    sections: [
      {
        eyebrow: 'Quick Control',
        title: '半屏操作草案',
        copy:
          '半屏界面更适合承载频繁进入的参数调整与短流程操作，让主场景继续保留在玩家视野中。',
        image: 'pencil/xingji-aodaisai/half-screen.png',
        imageAlt: '半屏操作草案',
        bullets: ['保留场景上下文', '右侧聚焦参数与反馈', '底部只保留主操作'],
      },
      {
        eyebrow: 'Decision Dialog',
        title: '高成本升级确认',
        copy:
          '把高成本动作收束成一次性弹窗决策，避免玩家在多处控件之间来回寻找确认入口。',
        image: 'pencil/xingji-aodaisai/modal-screen.png',
        imageAlt: '升级确认弹窗草案',
        bullets: ['升级对象清晰可见', '成本和结果同步展示', '双按钮层级明确'],
      },
    ],
  },
  '2': {
    eyebrow: 'Functional Draft 02',
    title: '探险循环与任务流程专题',
    summary:
      '这一页预留给“流程型系统”的展示方式，重点表现从目标选择、路径进入到结果回显的一整条操作链路。',
    heroImage: 'pencil/xingji-aodaisai/panel-2.png',
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
        image: 'pencil/xingji-aodaisai/coord-fav-flow.png',
        imageAlt: '流程图占位页',
        bullets: ['拆出关键节点', '标明反馈时机', '方便后续扩展为完整专题'],
      },
      {
        eyebrow: 'Combat Entry',
        title: '战前准备信息排布',
        copy:
          '把角色、资源、技能与风险提示集中在一页，让玩家在进入战斗前完成全部准备。',
        image: 'pencil/xingji-aodaisai/panel-1.png',
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
    heroImage: 'pencil/xingji-aodaisai/panel5.png',
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
        image: 'pencil/xingji-aodaisai/tab-buttons.png',
        imageAlt: '页签按钮占位图',
        bullets: ['主次层级清楚', '状态切换统一', '便于扩写成规范章节'],
      },
      {
        eyebrow: 'State Feedback',
        title: '开关与功能反馈占位',
        copy:
          '用更轻量的反馈组件补充界面节奏，让“能不能点、当前是什么状态”始终一眼可见。',
        image: 'pencil/xingji-aodaisai/switch-buttons.png',
        imageAlt: '状态反馈占位图',
        bullets: ['开关状态易识别', '功能反馈不打断主流程', '适合后续扩展为微交互章节'],
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
  activeTab: Exclude<ProjectDetailTabKey, 'framework'>;
}) {
  const content = placeholderTabs[activeTab];

  return (
    <>
      <PlaceholderIntro content={content} />
      <PlaceholderSteps steps={content.steps} />
      {content.sections.map((section) => (
        <PlaceholderSectionCard key={`${activeTab}-${section.title}`} section={section} />
      ))}
    </>
  );
}
