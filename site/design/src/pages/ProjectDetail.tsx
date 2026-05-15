import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Swords, Users, type LucideIcon } from 'lucide-react';

import type { Project } from '../lib/projects';
import { getProjectById } from '../lib/projects';
import { publicUrl } from '../lib/publicUrl';
import { ScopeLayerDetailTable } from '../components/ScopeLayerDetailTable';
import { ScopeLayerDiagram } from '../components/ScopeLayerDiagram';
import { StructureLayerDiagram, type StructureLayerPencilNode } from '../components/StructureLayerDiagram';
import { StructureLayerButtonShowcase } from '../components/StructureLayerButtonShowcase';
import { StructureLayerKpzPoDiagram } from '../components/StructureLayerKpzPoDiagram';
import { StructureLayerNXVgFNotes } from '../components/StructureLayerNXVgFNotes';
import { StructureLayerPlaceholderCard } from '../components/StructureLayerPlaceholderCard';
import { ProjectDetailMenu } from '../components/ProjectDetailMenu';
import { CaseDetailContent } from '../components/CaseDetailContent';
import { ResponsiveScaleFrame } from '../components/ResponsiveScaleFrame';
import {
  PROJECT_DETAIL_TABS,
  ProjectDetailPlaceholderContent,
  type ProjectDetailTabKey,
} from '../components/ProjectDetailTabViews';

const QINGYU_LAYER_ROWS = [
  ['UILayer', '常驻资源、头像、任务追踪、快捷入口'],
  ['HUDLayer', '战斗反馈、场景提示、方向引导'],
  ['PanelLayer', '养成、背包、伙伴、任务等系统面板'],
  ['StoryLayer', '剧情对白、演出字幕、选择分支'],
  ['GuideLayer', '新手引导、强制提示、步骤遮罩'],
] as const;

const QINGYU_PERSONAS: { title: string; icon: LucideIcon; need: string; design: string }[] = [
  { title: '沉浸型', icon: BookOpen, need: '剧情不被打断，UI 不遮挡叙事', design: '演出模式极简 HUD' },
  { title: '成就型', icon: Swords, need: '养成路径短，数值反馈即时', design: '一键直达，进度实时可视' },
  { title: '社交型', icon: Users, need: '社交入口随时可达，不干扰操作', design: '快捷入口常驻，分层不遮挡' },
];

const QINGYU_SCOPE_MODULES = [
  {
    title: '基础系统',
    items: ['背包', '角色', '商城', '地图', '天气', '设置', '活动', '聊天', '邮件', '亲友', '师徒', '集市', '成就', '排行榜', '任务', '动作', '拍照', '组队', '拍卖行', '变强', '罪恶值'],
    featured: true,
  },
  {
    title: '养成',
    items: ['强化', '镶嵌', '精炼', '天脉', '腰牌', '赋灵', '锻造', '境界', '天赋', '经脉', '招式', '内功', '心法', '外观', '坐骑', '收集'],
    featured: true,
  },
  {
    title: 'PVE',
    items: ['刺探', '澹泊纪事', '校场会武', '问剑', '英雄擂', '海捕令', '京府平寇', '情报簿', '云峰论武', '澹泊秘闻', '龙门绝境', '跨服 BOSS', '十人副本', '侠路相逢', '神庙使者', '惩凶除恶'],
  },
  {
    title: 'PVP',
    items: ['武林大会', '英雄擂', '问鼎江湖', '东山问战', '余年剧场', '跨服武林大会', '雪球乱斗', '神庙争锋', '神庙求生'],
  },
  {
    title: 'PVP&PVE',
    items: ['世界枭雄', '烈士纷争', '京都争夺战'],
  },
  {
    title: '帮派',
    items: ['帮派拍卖', '帮派试炼', '帮派押车', '帮派篝火', '帮派温泉', '帮派物资', '帮派捐献', '帮派修炼', '帮派驻地', '帮派红包', '帮派领地战', '帮派传功', '帮派入侵', '帮派资源争夺战', '帮派签到', '帮派锻造'],
  },
  {
    title: '福利运营',
    items: ['每日签到', '在线礼包', '招财树', '一周豪礼', '好礼放送', '充值返利', '名剑宝阁', '活跃基金', '至尊特权', '伙伴助力', '每日礼包', '情意江湖', '鹏程万里', '连续充值', '七日签到', '订阅签到', '初遇有礼'],
  },
  {
    title: '休闲',
    items: ['趣游奇缘', '答题', '师门课业', '玩具', '家园'],
  },
  {
    title: '社交',
    items: ['好友', '师徒', '帮派', '亲密关系', '情缘', '结婚'],
  },
  {
    title: '其他',
    items: ['决战神庙', '异闻', '纪事', '外传', '命数'],
  },
] as const;

const QINGYU_UI_LAYER_ROWS = [
  ['HUDLayer', '战斗飘字、伤害、连击与增益反馈'],
  ['MainUILayer', '游戏主界面与登录流程相关界面'],
  ['OverMainLayer', '高于主界面的场景对话与特殊交互界面'],
  ['FullScreenLayer', '全屏系统界面'],
  ['PopLayer', '中小型弹窗与确认界面'],
  ['StoryLayer', '剧情对话与演出内容'],
  ['TipsLayer', '道具 Tip、帮助 Tip、战斗提示、公告等'],
  ['GuideLayer', '新手引导'],
  ['AlertLayer', '提示弹窗（NoticeMessageBox）'],
  ['TopLayer', '顶层效果与全屏提示'],
  ['LoaderLayer', '加载界面'],
] as const;

function QingyuScopeDiagram() {
  const entryNodes = [
    { x: 70, y: 282, w: 150, h: 58, label: '平台登录', tone: 'amber' },
    { x: 292, y: 282, w: 150, h: 58, label: '账号登录', tone: 'amber' },
    { x: 520, y: 268, w: 170, h: 86, label: '主界面', tone: 'main' },
  ] as const;
  const branches = [
    { x: 850, y: 68, w: 156, h: 56, label: '休闲' },
    { x: 850, y: 140, w: 156, h: 56, label: 'PVP' },
    { x: 850, y: 212, w: 156, h: 56, label: 'PVE' },
    { x: 850, y: 284, w: 156, h: 56, label: '基础系统' },
    { x: 850, y: 356, w: 156, h: 56, label: '养成' },
    { x: 850, y: 428, w: 156, h: 56, label: '福利运营' },
    { x: 850, y: 500, w: 156, h: 56, label: '社交' },
  ] as const;
  const branchHub = { x: 760, y: 311 };
  const renderBox = (box: { x: number; y: number; w: number; h: number; label: string; tone?: string }) => {
    const isMain = box.tone === 'main';
    const isAmber = box.tone === 'amber';
    const fill = isMain ? '#182d4d' : isAmber ? '#201926' : '#111c31';
    const stroke = isMain ? '#ffb84c' : isAmber ? '#ffb84c' : '#00f5ff';
    const textFill = isAmber ? '#ffe0a3' : '#e8fbff';
    return (
      <g key={box.label} filter="url(#qingyu-flow-glow)">
        <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
        <text x={box.x + box.w / 2} y={box.y + box.h / 2} textAnchor="middle" dominantBaseline="central" fill={textFill} fontSize={isMain ? 24 : 19} fontWeight="700">
          {box.label}
        </text>
      </g>
    );
  };

  return (
    <div className="project-detail-inner-card rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
      <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.05}>
        <svg viewBox="0 0 1120 620" className="w-[1120px]" role="img" aria-label="庆余年范围层入口流程图">
          <defs>
            <filter id="qingyu-flow-glow" x="-30%" y="-40%" width="160%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00f5ff" floodOpacity="0.35" />
            </filter>
            <linearGradient id="qingyu-flow-panel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#06111f" />
              <stop offset="1" stopColor="#0f2440" />
            </linearGradient>
          </defs>
          <rect width="1120" height="620" rx="18" fill="url(#qingyu-flow-panel)" />
          <path d="M220 311 H292" stroke="#ffb84c" strokeWidth="4" strokeLinecap="round" />
          <path d="M442 311 H520" stroke="#ffb84c" strokeWidth="4" strokeLinecap="round" />
          <path d={`M690 311 H${branchHub.x}`} stroke="#00f5ff" strokeWidth="4" strokeLinecap="round" />
          {branches.map((branch) => (
            <path
              key={`line-${branch.label}`}
              d={`M${branchHub.x} ${branchHub.y} C ${branchHub.x + 42} ${branchHub.y}, ${branch.x - 54} ${branch.y + branch.h / 2}, ${branch.x} ${branch.y + branch.h / 2}`}
              fill="none"
              stroke="#00f5ff"
              strokeOpacity="0.66"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          <circle cx={branchHub.x} cy={branchHub.y} r="7" fill="#00f5ff" />
          {entryNodes.map(renderBox)}
          {branches.map(renderBox)}
          <text x="80" y="82" fill="#ff5cff" fontSize="24" fontWeight="800">范围流程</text>
          <text x="80" y="114" fill="#90a7bd" fontSize="16">从登录入口进入主界面，再分流到玩法与系统模块。</text>
        </svg>
      </ResponsiveScaleFrame>
    </div>
  );
}

type QingyuBranch = {
  y: number;
  title: string;
  items?: readonly string[];
  wide?: boolean;
};

function QingyuInterfaceMap({
  title,
  subtitle,
  left,
  right,
  ariaLabel,
}: {
  title: string;
  subtitle: string;
  left: readonly QingyuBranch[];
  right: readonly QingyuBranch[];
  ariaLabel: string;
}) {
  const center = { x: 486, y: 384, w: 148, h: 78 };
  const idSuffix = ariaLabel.includes('PC') ? 'pc' : 'mobile';
  const viewHeight = 880;
  const chunkItems = (items: readonly string[] = []) => {
    const rows: string[] = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3).join(' / '));
    }
    return rows;
  };
  const renderBranch = (branch: QingyuBranch, side: 'left' | 'right') => {
    const isLeft = side === 'left';
    const branchW = 320;
    const branchX = isLeft ? 72 : 728;
    const rows = chunkItems(branch.items);
    const branchH = rows.length ? 66 + rows.length * 18 : 56;
    const branchMidY = branch.y + branchH / 2;
    const startX = isLeft ? center.x : center.x + center.w;
    const endX = isLeft ? branchX + branchW : branchX;
    return (
      <g key={`${side}-${branch.title}`}>
        <path
          d={`M${startX} ${center.y + center.h / 2} C ${isLeft ? startX - 80 : startX + 80} ${center.y + center.h / 2}, ${isLeft ? endX + 78 : endX - 78} ${branchMidY}, ${endX} ${branchMidY}`}
          fill="none"
          stroke="#87C8BC"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <rect x={branchX} y={branch.y} width={branchW} height={branchH} rx="12" fill="#111c31" stroke="#87C8BC" strokeWidth="2" />
        <text x={branchX + branchW / 2} y={branch.y + 28} textAnchor="middle" dominantBaseline="central" fill="#e8fbff" fontSize={branch.wide ? 15 : 17} fontWeight="800">
          {branch.title}
        </text>
        {rows.length ? (
          <text x={branchX + branchW / 2} y={branch.y + 54} textAnchor="middle" fill="#C1D4CE" fontSize="12.5" fontWeight="650">
            {rows.map((row, idx) => (
              <tspan key={row} x={branchX + branchW / 2} dy={idx === 0 ? 0 : 18}>
                {row}
              </tspan>
            ))}
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div>
      <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.04}>
        <svg viewBox={`0 0 1120 ${viewHeight}`} className="w-[1120px]" role="img" aria-label={ariaLabel}>
          <defs>
            <radialGradient id={`qingyu-map-bg-${idSuffix}`} cx="50%" cy="52%" r="65%">
              <stop offset="0%" stopColor="#1a3040" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#132636" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0b1320" stopOpacity="0.25" />
            </radialGradient>
            <filter id={`qingyu-map-glow-${idSuffix}`} x="-30%" y="-40%" width="160%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#87C8BC" floodOpacity="0.45" />
            </filter>
          </defs>
          <rect width="1120" height={viewHeight} rx="18" fill={`url(#qingyu-map-bg-${idSuffix})`} />
          <text x="72" y="70" fill="#ff5cff" fontSize="24" fontWeight="800">{title}</text>
          <text x="72" y="100" fill="#90a7bd" fontSize="15">{subtitle}</text>
          <rect x={center.x} y={center.y} width={center.w} height={center.h} rx="14" fill="#132b48" stroke="#87C8BC" strokeWidth="3" filter={`url(#qingyu-map-glow-${idSuffix})`} />
          <text x={center.x + center.w / 2} y={center.y + 32} textAnchor="middle" fill="#A3D9C1" fontSize="26" fontWeight="800">主界面</text>
          <text x={center.x + center.w / 2} y={center.y + 58} textAnchor="middle" fill="#C1D4CE" fontSize="14">信息 / 操作 / 反馈</text>
          {left.map((branch) => renderBranch(branch, 'left'))}
          {right.map((branch) => renderBranch(branch, 'right'))}
        </svg>
      </ResponsiveScaleFrame>
    </div>
  );
}

function QingyuMobileStructureDiagram() {
  return (
    <QingyuInterfaceMap
      title="移动端主界面结构"
      subtitle="按手游操作热区拆分公告、目标、摇杆、聊天与技能菜单。"
      ariaLabel="庆余年移动端主界面结构图"
      left={[
        { y: 132, title: '玩家信息区（左上）', items: ['玩家信息', '修为提升', '副武器'] },
        { y: 268, title: '任务追踪、队友信息区（左上）', items: ['任务追踪', '队友信息'], wide: true },
        { y: 412, title: '虚拟摇杆区（左下）', items: ['收起/展开按钮', '虚拟摇杆', '镜头重置'] },
        { y: 558, title: '聊天区（中下）', items: ['聊天信息', '好友/邮件', '自动战斗'] },
        { y: 696, title: '特殊提示区（中下）', items: ['副菜单', '系统信息'] },
      ]}
      right={[
        { y: 72, title: '世界公告区（上）' },
        { y: 144, title: '目标信息区（中上）' },
        { y: 216, title: '付费聊天区（中上）' },
        { y: 288, title: '通用提示消息区（中）', wide: true },
        { y: 376, title: '日常/商业功能区（右上）', items: ['日常', '商业功能', '收起/展开按钮'], wide: true },
        { y: 500, title: '地图信息区（右上）', items: ['地图信息', '伤害统计'] },
        { y: 624, title: '主菜单、便捷操作区（右下）', items: ['限时活动', '背包', '主菜单'], wide: true },
        { y: 742, title: '技能按键/功能菜单区（右下）', items: ['非战斗模式', '战斗模式', '锁定', '切换武器', '药品', '翻滚', '轻功'], wide: true },
      ]}
    />
  );
}

function QingyuPcStructureDiagram() {
  return (
    <QingyuInterfaceMap
      title="PC / 主机主界面结构"
      subtitle="键鼠与手柄场景下，把技能、快捷功能和消息提示拆成更明确的操作分区。"
      ariaLabel="庆余年 PC 和主机主界面结构图"
      left={[
        { y: 118, title: '玩家信息区（左上）', items: ['玩家信息', '修为提升', '副武器'] },
        { y: 254, title: '任务追踪、队友信息区（左上）', items: ['任务追踪', '队友信息', '收起/展开按钮'], wide: true },
        { y: 414, title: '技能按键/功能菜单区（中下）', items: ['非战斗模式', '战斗模式', '锁定', '切换武器', '药品', '自动战斗', '翻滚', '轻功'], wide: true },
        { y: 618, title: '消息提醒区（左下）', items: ['聊天信息'] },
        { y: 724, title: '聊天区（左下）' },
      ]}
      right={[
        { y: 70, title: '世界公告区（上）' },
        { y: 140, title: '目标信息区（中上）' },
        { y: 210, title: '付费聊天区（中上）' },
        { y: 280, title: '通用提示消息区（中）', wide: true },
        { y: 370, title: '日常/商业功能区（右上）', items: ['日常', '商业功能', '收起/展开按钮'], wide: true },
        { y: 492, title: '地图信息区（右上）', items: ['地图信息', '伤害统计'] },
        { y: 604, title: '主菜单、便捷操作区（右上）', items: ['限时活动', '背包', '主菜单'], wide: true },
        { y: 726, title: '功能快捷键（右下）', items: ['镜头重置', '好友/邮件', '系统信息', '副菜单'] },
      ]}
    />
  );
}

function QingyuPersonaCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {QINGYU_PERSONAS.map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.title}
            className="project-detail-inner-card flex flex-col rounded-xl border border-[#87C8BC]/15 bg-[#122338]/50 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-2 px-5 pt-5 pb-3 border-b border-[#87C8BC]/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
                <Icon className="h-4.5 w-4.5 text-neon-cyan" />
              </div>
              <div className="font-display text-lg font-bold text-[#A3D9C1]">{p.title}</div>
            </div>
            <div className="flex flex-col gap-2.5 px-5 py-4 text-center">
              <p className="text-[13px] leading-relaxed text-[#C1D4CE]">{p.need}</p>
              <p className="text-[13px] leading-relaxed text-[#A3D9C1]/70">{p.design}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function QingyuScopeMatrix() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {QINGYU_SCOPE_MODULES.map((module, idx) => {
        const isFeatured = 'featured' in module && module.featured;
        return (
          <section
            key={module.title}
            className={`project-detail-inner-card rounded-2xl border bg-[#0b1320]/55 p-4 ${
              isFeatured ? 'lg:col-span-2 border-neon-cyan/35 shadow-[0_0_18px_rgba(0,245,255,0.18)]' : 'border-[#3E7E90]/35'
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-fuchsia-300/70 bg-fuchsia-400/15 font-mono text-xs font-bold text-fuchsia-200">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="font-display text-[20px] font-bold text-[#A3D9C1]">{module.title}</div>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-neon-cyan/80">{module.items.length} items</div>
            </div>
            <div className={`grid gap-2 ${isFeatured ? 'sm:grid-cols-4 xl:grid-cols-6' : 'sm:grid-cols-3'}`}>
              {module.items.map((item) => (
                <div
                  key={`${module.title}-${item}`}
                  className="flex min-h-[38px] items-center justify-center rounded-lg border border-white/10 bg-[#122338]/75 px-3 py-2 text-center text-[13px] font-semibold leading-tight text-[#d9fbff]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function QingyuInterfaceLayerStack() {
  const layers = [
    { label: 'Tip', y: 154, fill: 'rgba(255,255,255,0.08)', stroke: '#d9fbff' },
    { label: '弹窗', y: 252, fill: 'rgba(135,200,188,0.16)', stroke: '#87C8BC' },
    { label: '全屏界面', y: 350, fill: 'rgba(0,245,255,0.20)', stroke: '#00f5ff' },
    { label: '场景', y: 448, fill: 'rgba(255,92,255,0.14)', stroke: '#ff5cff' },
  ] as const;

  return (
    <div>
      <ResponsiveScaleFrame minDesignWidth={1080} maxScale={1.08}>
        <svg viewBox="0 0 1080 560" className="w-[1080px]" role="img" aria-label="庆余年结构层界面承载层级图">
          <defs>
            <radialGradient id="qingyu-stack-bg" cx="50%" cy="55%" r="60%" fx="50%" fy="55%">
              <stop offset="0%" stopColor="#1a3040" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#132636" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0b1320" stopOpacity="0.25" />
            </radialGradient>
          </defs>
          <rect width="1080" height="560" rx="18" fill="url(#qingyu-stack-bg)" />
          <text x="60" y="72" fill="#C1D4CE" fontSize="20" fontWeight="650">场景承载全屏界面，全屏界面上叠加弹窗与 Tip，形成清晰的信息层级。</text>
          {layers.map((layer, idx) => {
            const depth = idx * 20;
            const points = `${268 + depth},${layer.y + 50} ${762 + depth},${layer.y + 50} ${878 + depth},${layer.y - 24} ${384 + depth},${layer.y - 24}`;
            return (
              <g key={layer.label}>
                <polygon points={points} fill={layer.fill} stroke={layer.stroke} strokeWidth="2.4" />
                <text x={578 + depth} y={layer.y + 18} textAnchor="middle" fill="#e8fbff" fontSize={layer.label === 'Tip' ? 34 : 32} fontWeight="700">
                  {layer.label}
                </text>
              </g>
            );
          })}
        </svg>
      </ResponsiveScaleFrame>
    </div>
  );
}

function QingyuLayerHierarchyDiagram() {
  const rows = [
    { layer: 'HUDLayer', desc: '战斗飘字、伤害、连击与增益反馈', child: false },
    { layer: 'MainUILayer', desc: '游戏主界面与登录流程相关界面', child: false },
    { layer: 'OverMainLayer', desc: '高于主界面的场景对话与特殊交互界面', child: true },
    { layer: 'FullScreenLayer', desc: '全屏系统界面', child: false },
    { layer: 'PopLayer', desc: '中小型弹窗与确认界面', child: true },
    { layer: 'StoryLayer', desc: '剧情对话与演出内容', child: true },
    { layer: 'TipsLayer', desc: '道具 Tip、帮助 Tip、战斗提示、公告等', child: false },
    { layer: 'GuideLayer', desc: '新手引导', child: false },
    { layer: 'AlertLayer', desc: '提示弹窗（NoticeMessageBox）', child: true },
    { layer: 'TopLayer', desc: '顶层效果与全屏提示', child: true },
    { layer: 'LoaderLayer', desc: '加载界面', child: false },
  ] as const;

  const rowTones = [
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#7e8fb0', node: '#d8def0', text: '#f2f5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#7e8fb0', node: '#d8def0', text: '#f2f5fb' },
    { line: '#7e8fb0', node: '#d8def0', text: '#f2f5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#7e8fb0', node: '#d8def0', text: '#f2f5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
    { line: '#5ea3c7', node: '#c8e7f4', text: '#eef5fb' },
  ] as const;

  return (
    <div>
      <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.02}>
        <svg viewBox="0 0 1120 650" className="w-[1120px]" role="img" aria-label="庆余年界面层级命名与承载图">
          <defs>
            <linearGradient id="qingyu-hierarchy-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#162a3d" />
              <stop offset="1" stopColor="#1a3148" />
            </linearGradient>
          </defs>
          <rect width="1120" height="650" rx="18" fill="#0f1722" />
          <rect x="0" y="0" width="368" height="650" fill="#182233" />
          <rect x="368" y="0" width="752" height="650" fill="url(#qingyu-hierarchy-right)" />

          <path d="M18 40 l12 8 -12 8 z" fill="#c8e7f4" />
          <rect x="42" y="34" width="18" height="18" rx="3" fill="#223147" stroke="#8ea1b9" strokeWidth="1.2" />
          <rect x="45.5" y="37.5" width="11" height="11" rx="2" fill="#eef5fb" />
          <text x="76" y="52" fill="#eef5fb" fontSize="27" fontWeight="700">UIRoot</text>
          <text x="414" y="49" fill="#edf5fb" fontSize="19" fontWeight="900" letterSpacing="1">界面层级命名与承载说明</text>

          {rows.map((row, idx) => {
            const y = 94 + idx * 49;
            const arrowX = 42;
            const cubeX = 70;
            const textX = 104;
            const lineStartX = 256;
            const lineEndX = 392;
            const descX = 430;
            const tone = rowTones[idx];
            return (
              <g key={row.layer}>
                {row.child ? null : (
                  <path d={`M${arrowX} ${y - 10} l10 8 -10 8 z`} fill={tone.node} fillOpacity="0.95" />
                )}
                <rect x={cubeX} y={y - 16} width="15" height="15" rx="2" fill="#0c1626" stroke={tone.line} strokeWidth="1.5" />
                <rect x={cubeX + 3.5} y={y - 12.5} width="8" height="8" rx="1.4" fill={tone.node} />
                <text x={textX} y={y - 3} fill={tone.text} fontSize="16" fontWeight="600">{row.layer}</text>

                <line x1={lineStartX} y1={y - 9} x2={lineEndX} y2={y - 9} stroke={tone.line} strokeWidth="2.6" strokeOpacity="0.95" />
                <circle cx={lineEndX} cy={y - 9} r="3.2" fill={tone.line} />
                <text x={descX} y={y - 5} fill="#C1D4CE" fontSize="16" fontWeight="800">{row.desc}</text>
              </g>
            );
          })}
        </svg>
      </ResponsiveScaleFrame>
    </div>
  );
}

function QingyuRuleFlowDiagram() {
  type FlowTone = 'base' | 'system' | 'state';
  type FlowNodeSpec = { x: number; y: number; label: string; tone?: FlowTone; width?: number; height?: number };
  type NoteSpec = { x: number; y: number; lines: readonly string[]; size?: number; align?: 'left' | 'center' };

  const renderFlowNode = ({ x, y, label, tone = 'base', width = 150, height = 72 }: FlowNodeSpec) => {
    const fill = tone === 'base' ? '#d7d7d7' : tone === 'system' ? '#a961ff' : '#6168ff';
    const stroke = tone === 'base' ? '#f2f5fb' : tone === 'system' ? '#4f5cff' : '#445dff';
    const shadow = tone === 'base' ? 'rgba(255,255,255,0.28)' : tone === 'system' ? 'rgba(180,95,255,0.28)' : 'rgba(97,104,255,0.28)';
    const textFill = tone === 'base' ? '#2e333a' : '#ffffff';
    const lines = label.split('\n');
    const firstDy = lines.length > 1 ? -7 : 0;
    return (
      <g key={`${x}-${y}-${label}`}>
        <rect x={x + 4} y={y + 6} width={width} height={height} rx="10" fill={shadow} opacity="0.6" />
        <rect x={x} y={y} width={width} height={height} rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
        <text
          x={x + width / 2}
          y={y + height / 2 + firstDy}
          textAnchor="middle"
          dominantBaseline="central"
          fill={textFill}
          fontSize="16"
          fontWeight="700"
        >
          {lines.map((line, idx) => (
            <tspan key={`${label}-${line}`} x={x + width / 2} dy={idx === 0 ? 0 : 20}>
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  const renderNotes = (notes: readonly NoteSpec[], fill = '#f4f6fb') => (
    <g>
      {notes.map((note, idx) => (
        <text
          key={`${note.x}-${note.y}-${idx}`}
          x={note.x}
          y={note.y}
          fill={fill}
          fontSize={note.size ?? 15}
          fontWeight="500"
          textAnchor={note.align === 'center' ? 'middle' : 'start'}
        >
          {note.lines.map((line, lineIdx) => (
            <tspan key={`${line}-${lineIdx}`} x={note.x} dy={lineIdx === 0 ? 0 : 28}>
              {line}
            </tspan>
          ))}
        </text>
      ))}
    </g>
  );

  const renderDiamond = (cx: number, cy: number, label: string) => (
    <g>
      <polygon points={`${cx},${cy - 52} ${cx + 78},${cy} ${cx},${cy + 52} ${cx - 78},${cy}`} fill="#d7d7d7" stroke="#f2f5fb" strokeWidth="2" />
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#2e333a" fontSize="15" fontWeight="700">
        {label.split('\n').map((line, idx) => (
          <tspan key={`${label}-${line}`} x={cx} dy={idx === 0 ? 0 : 20}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );

  const stageClass = 'rounded-2xl border border-neon-cyan/15 bg-[#0a1f2e]/50 p-4';

  const renderPanelFrame = (width: number, _height: number, title: string) => (
    <g>
      <text x={width / 2} y="30" textAnchor="middle" dominantBaseline="central" fill="#edf5fb" fontSize="24" fontWeight="700">
        {title}
      </text>
    </g>
  );

  const renderConnector = (x: number, y1: number, y2: number) => (
    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#f2f2f2" strokeWidth="4" />
  );

  const NpcFlowSvg = ({ cinematic = false }: { cinematic?: boolean }) => {
    const conversationLabel = cinematic ? '剧情动画\n(播放中)' : '与 NPC 对话界面';
    const notes = cinematic
      ? [
          { x: 160, y: 315, lines: ['点击任务栏中的主线任务', '(非常场景跑图)'], size: 19 },
          { x: 160, y: 559, lines: ['点击任意系统入口', '(装备)'], size: 19 },
          { x: 160, y: 824, lines: ['碰到“剧情动画”触发器，', '“装备界面”自动关闭'], size: 18 },
          { x: 160, y: 1078, lines: ['“剧情动画”播放完毕'], size: 18 },
        ]
      : [
          { x: 160, y: 315, lines: ['点击任务栏中的主线任务', '(寻找NPC对话)'], size: 19 },
          { x: 160, y: 559, lines: ['点击任意系统入口', '(装备)'], size: 19 },
          { x: 160, y: 830, lines: ['寻找到NPC，', '系统自动点击“对话”按钮，', '“装备界面”自动关闭'], size: 18 },
          { x: 160, y: 1080, lines: ['对话结束，', '对话界面自动关闭'], size: 18 },
        ];

    return (
      <svg viewBox="0 0 465 1300" className="w-full" role="img" aria-label={cinematic ? '剧情动画出现时流程图' : '与NPC对话界面出现时流程图'}>
        {renderPanelFrame(465, 1300, cinematic ? '剧情动画出现时' : '与NPC对话界面出现时')}
        {renderConnector(142, 227, 390)}
        {renderConnector(142, 482, 650)}
        {renderConnector(142, 742, 905)}
        {renderConnector(142, 997, 1162)}
        {renderFlowNode({ x: cinematic ? 62 : 64, y: 135, width: 156, height: 92, label: '主界面' })}
        {renderFlowNode({ x: cinematic ? 62 : 64, y: 390, width: 156, height: 92, label: '主界面\n(自动寻路中)' })}
        {renderFlowNode({ x: cinematic ? 62 : 64, y: 650, width: 156, height: 92, label: '装备界面', tone: 'system' })}
        {renderFlowNode({ x: cinematic ? 62 : 64, y: 905, width: 156, height: 92, label: conversationLabel, tone: 'state' })}
        {renderFlowNode({ x: cinematic ? 62 : 64, y: 1162, width: 156, height: 92, label: '主界面\n(自动寻路中)' })}
        {renderNotes(notes)}
      </svg>
    );
  };

  const LoadingFlowSvg = () => (
    <svg viewBox="0 0 928 1883" className="w-full" role="img" aria-label="Loading图出现时流程图">
      {renderPanelFrame(928, 1883, 'Loading图出现时')}
      {renderConnector(138, 227, 390)}
      {renderConnector(138, 482, 650)}
      {renderConnector(138, 742, 905)}
      {renderConnector(138, 997, 1146)}
      {renderFlowNode({ x: 60, y: 135, width: 156, height: 92, label: '主界面' })}
      {renderFlowNode({ x: 60, y: 390, width: 156, height: 92, label: '主界面\n(传送读条中)' })}
      {renderFlowNode({ x: 60, y: 650, width: 156, height: 92, label: '装备界面', tone: 'system' })}
      {renderFlowNode({ x: 60, y: 905, width: 156, height: 92, label: 'Loading图\n(读条中)', tone: 'state' })}
      {renderDiamond(137.5, 1195, '是否\n进入剧情副本?')}
      <line x1="137.5" y1="1244" x2="137.5" y2="1410" stroke="#f2f2f2" strokeWidth="4" />
      <line x1="215" y1="1195" x2="599" y2="1195" stroke="#f2f2f2" strokeWidth="4" />
      <line x1="599" y1="1195" x2="599" y2="1440" stroke="#f2f2f2" strokeWidth="4" />
      <text x="156" y="1327.5" fill="#ffffff" fontSize="18">是</text>
      <text x="616" y="1327.5" fill="#ffffff" fontSize="18">否</text>
      {renderFlowNode({ x: 60, y: 1410, width: 156, height: 92, label: '主线副本界面\n(自动寻路中)' })}
      {renderFlowNode({ x: 521, y: 1440, width: 156, height: 92, label: '装备界面', tone: 'system' })}
      {renderFlowNode({ x: 521, y: 1702, width: 156, height: 92, label: '主界面\n(自动寻路中)' })}
      <line x1="599" y1="1532" x2="599" y2="1702" stroke="#f2f2f2" strokeWidth="4" />
      {renderNotes([
        { x: 216, y: 315, lines: ['点击任务栏中的主线任务', '(跨场景跑图)'], size: 19 },
        { x: 216, y: 559, lines: ['点击任意系统入口', '(装备)'], size: 19 },
        { x: 216, y: 817.5, lines: ['传送“读条”完毕，', '“装备界面”自动关闭'], size: 18 },
        { x: 216, y: 1087.5, lines: ['Loading图“读条”完毕'], size: 18 },
        { x: 156, y: 1327.5, lines: ['是', '“装备界面”自动关闭'], size: 18 },
        { x: 616, y: 1327.5, lines: ['否', '依旧在“自动寻路中”'], size: 18 },
        { x: 616, y: 1607.5, lines: ['点击装备界面“关闭”按钮'], size: 18 },
      ])}
    </svg>
  );

  const EntrySwitchSvg = ({ withDungeon = false }: { withDungeon?: boolean }) => {
    const panelHeight = withDungeon ? 3452 : 2905;
    const leftX = 63;
    const rightX = withDungeon ? 525 : 520;
    const leftCenter = 141;
    const rightCenter = withDungeon ? 603 : 598;

    return (
      <svg viewBox={`0 0 930 ${panelHeight}`} className="w-full" role="img" aria-label={withDungeon ? '玩法有副本时流程图' : '玩法无副本时流程图'}>
        {renderPanelFrame(930, panelHeight, withDungeon ? '玩法有副本时' : '玩法无副本时')}
        {renderConnector(leftCenter, 227, 390)}
        <line x1={leftCenter} y1="482" x2={leftCenter} y2="634" stroke="#f2f2f2" strokeWidth="4" />
        {renderFlowNode({ x: leftX, y: 135, width: 156, height: 92, label: '主界面' })}
        {renderFlowNode({ x: leftX, y: 390, width: 156, height: 92, label: '活动主界面', tone: 'state' })}
        {renderDiamond(140.5, 683, '是否\n有玩法入口界面?')}
        <line x1="218" y1="683" x2={rightCenter} y2="683" stroke="#f2f2f2" strokeWidth="4" />
        <line x1={leftCenter} y1="732" x2={leftCenter} y2="905" stroke="#f2f2f2" strokeWidth="4" />
        <line x1={rightCenter} y1="683" x2={rightCenter} y2="905" stroke="#f2f2f2" strokeWidth="4" />

        {withDungeon ? (
          <>
            {renderFlowNode({ x: leftX, y: 905, width: 156, height: 92, label: '武林大会\n匹配界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 1160, width: 156, height: 92, label: '活动主界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 1410, width: 156, height: 92, label: '主界面\n(玩法匹配中)' })}
            {renderFlowNode({ x: leftX, y: 1670, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: leftX, y: 1930, width: 156, height: 92, label: '武林大会\nLoading界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 2190, width: 156, height: 92, label: '武林大会\n玩法副本界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 2450, width: 156, height: 92, label: '武林大会\n结算界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 2970, width: 156, height: 92, label: '活动主界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 3225, width: 156, height: 92, label: '主界面' })}
            {renderFlowNode({ x: rightX, y: 905, width: 156, height: 92, label: '主界面\n(自动寻路中)' })}
            {renderFlowNode({ x: rightX, y: 1160, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: rightX, y: 1410, width: 156, height: 92, label: '与NPC对话界面', tone: 'state' })}
            {renderFlowNode({ x: rightX, y: 1670, width: 156, height: 92, label: '金殿对策\n玩法副本界面', tone: 'state' })}
            {renderFlowNode({ x: rightX, y: 1930, width: 156, height: 92, label: '与NPC对话界面', tone: 'state' })}
            {renderFlowNode({ x: rightX, y: 2190, width: 156, height: 92, label: '主界面' })}
            {renderConnector(leftCenter, 997, 1160)}
            {renderConnector(leftCenter, 1252, 1410)}
            {renderConnector(leftCenter, 1502, 1670)}
            {renderConnector(leftCenter, 1762, 1930)}
            {renderConnector(leftCenter, 2022, 2190)}
            {renderConnector(leftCenter, 2282, 2450)}
            <line x1={leftCenter} y1="2542" x2={leftCenter} y2="2970" stroke="#f2f2f2" strokeWidth="4" />
            {renderConnector(leftCenter, 3062, 3225)}
            {renderConnector(rightCenter, 997, 1160)}
            {renderConnector(rightCenter, 1252, 1410)}
            {renderConnector(rightCenter, 1502, 1670)}
            {renderConnector(rightCenter, 1762, 1930)}
            {renderConnector(rightCenter, 2022, 2190)}
            {renderNotes([
              { x: 160, y: 307.5, lines: ['点击“活动”入口按钮'], size: 18 },
              { x: 160, y: 813, lines: ['是', '点击任意玩法入口按钮', '(武林大会)'], size: 17 },
              { x: 620, y: 814, lines: ['否', '点击任意玩法入口按钮', '(金殿对策)', '系统自动关闭活动主界面'], size: 17 },
              { x: 160, y: 1096, lines: ['点击“匹配”按钮，', '点击武林大会匹配界面的', '“关闭”按钮'], size: 17 },
              { x: 160, y: 1342.5, lines: ['点击活动主界面的', '“关闭”按钮'], size: 18 },
              { x: 160, y: 1592.5, lines: ['点击任意系统入口', '(装备)'], size: 18 },
              { x: 160, y: 1861, lines: ['“武林大会”匹配成功，', '装备界面自动关闭'], size: 17 },
              { x: 160, y: 2100, lines: ['Loading结束'], size: 18 },
              { x: 160, y: 2365, lines: ['玩法结束'], size: 18 },
              { x: 160, y: 2746, lines: ['点击“关闭”结算界面，', '并且退出副本'], size: 17 },
              { x: 160, y: 2892.5, lines: ['点击武林大会匹配界面的', '“关闭”按钮'], size: 17 },
              { x: 160, y: 3139.5, lines: ['点击活动主界面的', '“关闭”按钮'], size: 17 },
              { x: 620, y: 1087.5, lines: ['点击任意系统入口', '(装备)'], size: 18 },
              { x: 620, y: 1351, lines: ['寻找到NPC，', '系统自动点击“对话”按钮，', '装备界面自动关闭'], size: 17 },
              { x: 620, y: 1595.5, lines: ['点击“金殿对策”对话选项按钮'], size: 17 },
              { x: 620, y: 1852.5, lines: ['玩法结束，', '并且退出副本'], size: 18 },
              { x: 620, y: 2107.5, lines: ['点击“关闭”对话界面'], size: 18 },
            ])}
          </>
        ) : (
          <>
            {renderFlowNode({ x: leftX, y: 905, width: 156, height: 92, label: '神庙使者界面', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 1160, width: 156, height: 92, label: 'Loading图\n(读条中)', tone: 'state' })}
            {renderFlowNode({ x: leftX, y: 1410, width: 156, height: 92, label: '主界面\n(自动战斗中)' })}
            {renderFlowNode({ x: leftX, y: 1670, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: leftX, y: 1930, width: 156, height: 92, label: '结算界面', tone: 'system' })}
            {renderFlowNode({ x: leftX, y: 2190, width: 156, height: 92, label: '主界面' })}
            {renderFlowNode({ x: rightX, y: 905, width: 156, height: 92, label: '主界面\n(自动寻路中)' })}
            {renderFlowNode({ x: rightX, y: 1160, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: rightX, y: 1410, width: 156, height: 92, label: '与NPC对话界面', tone: 'state' })}
            {renderFlowNode({ x: rightX, y: 1670, width: 156, height: 92, label: '海情令界面', tone: 'state' })}
            {renderFlowNode({ x: rightX, y: 1930, width: 156, height: 92, label: '主界面\n(自动战斗中)' })}
            {renderFlowNode({ x: rightX, y: 2190, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: rightX, y: 2450, width: 156, height: 92, label: '装备界面', tone: 'system' })}
            {renderFlowNode({ x: rightX, y: 2715, width: 156, height: 92, label: '主界面' })}
            {renderConnector(leftCenter, 997, 1160)}
            {renderConnector(leftCenter, 1252, 1410)}
            {renderConnector(leftCenter, 1502, 1670)}
            {renderConnector(leftCenter, 1762, 1930)}
            {renderConnector(leftCenter, 2022, 2190)}
            {renderConnector(rightCenter, 997, 1160)}
            {renderConnector(rightCenter, 1252, 1410)}
            {renderConnector(rightCenter, 1502, 1670)}
            {renderConnector(rightCenter, 1762, 1930)}
            {renderConnector(rightCenter, 2022, 2190)}
            {renderConnector(rightCenter, 2282, 2450)}
            {renderConnector(rightCenter, 2542, 2715)}
            {renderNotes([
              { x: 160, y: 307.5, lines: ['点击“活动”入口按钮'], size: 18 },
              { x: 160, y: 814, lines: ['是', '点击任意玩法入口按钮', '(神庙使者)'], size: 17 },
              { x: 615, y: 814, lines: ['否', '点击任意玩法入口按钮', '(海情令)', '系统自动关闭活动主界面'], size: 17 },
              { x: 160, y: 1092.5, lines: ['点击神庙使者界面的', '“前往”按钮'], size: 18 },
              { x: 160, y: 1331, lines: ['Loading图“读条”完毕'], size: 18 },
              { x: 160, y: 1587.5, lines: ['点击任意系统入口', '(装备)'], size: 18 },
              { x: 160, y: 1845, lines: ['玩法结束'], size: 18 },
              { x: 160, y: 2107.5, lines: ['点击装备界面“关闭”按钮'], size: 18 },
              { x: 615, y: 1096, lines: ['寻找NPC，', '系统自动点击“对话”按钮，', '并且点击装备界面“关闭”按钮'], size: 17 },
              { x: 615, y: 1589.5, lines: ['点击“参与玩法”对话选项按钮'], size: 18 },
              { x: 615, y: 1847.5, lines: ['读秒后系统自动关闭', '海情令界面'], size: 18 },
              { x: 615, y: 2107.5, lines: ['点击任意系统入口', '(装备)'], size: 18 },
              { x: 615, y: 2365, lines: ['玩法结束'], size: 18 },
              { x: 615, y: 2637.5, lines: ['点击装备界面“关闭”按钮'], size: 18 },
            ])}
          </>
        )}
      </svg>
    );
  };

  return (
    <div>
      <div className="mb-5 px-1 py-4">
        <div className="mb-2 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9db3c5]">界面规则</div>
        <div className="mb-3 text-[28px] font-bold text-[#e7f0f6]">各类情况下的界面开启关闭规则</div>
        <div className="space-y-3 text-[15px] leading-relaxed text-[#d2dbe4]">
          <p>1. 当系统界面已打开时，如果触发 NPC 对话或剧情动画，当前系统界面自动关闭，结束后回到主界面流程。</p>
          <p>2. 当系统界面已打开时，如果进入玩法过场或副本，系统界面自动关闭；玩法结束后优先回到入口或结算界面，没有入口则回到主界面。</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className={stageClass}>
          <NpcFlowSvg />
        </div>
        <div className={stageClass}>
          <NpcFlowSvg cinematic />
        </div>
        <div className={`lg:col-span-2 ${stageClass}`}>
          <LoadingFlowSvg />
        </div>
        <div className={`lg:col-span-2 ${stageClass}`}>
          <EntrySwitchSvg />
        </div>
        <div className={`lg:col-span-2 ${stageClass}`}>
          <EntrySwitchSvg withDungeon />
        </div>
      </div>
    </div>
  );
}

function QingyuMainScreenDiagram() {
  const IMG_LEFT = 272;
  const IMG_RIGHT = 1328;
  const TEXT_MARGIN = 35;

  const calloutData = [
    { n: '1', label: '玩家信息区', side: 'left' as const, y: 56, targetX: 293 },
    { n: '2', label: '任务追踪、队友信息区', side: 'left' as const, y: 188, targetX: 276 },
    { n: '3', label: '虚拟摇杆区', side: 'left' as const, y: 474, targetX: 381 },
    { n: '4', label: '动作/自动战斗/拍照按钮区', side: 'left' as const, y: 546, targetX: 275 },
    { n: '5', label: '社交区域', side: 'left' as const, y: 574, targetX: 492 },
    { n: '6', label: '网络、电量等信息区', side: 'left' as const, y: 598, targetX: 319 },
    { n: '7', label: '跑马灯', side: 'right' as const, y: 22, targetX: 1196 },
    { n: '8', label: '地图信息区', side: 'right' as const, y: 93, targetX: 1262 },
    { n: '9', label: '商业公告区', side: 'right' as const, y: 132, targetX: 1081 },
    { n: '10', label: '功能菜单栏区域', side: 'right' as const, y: 190, targetX: 1277 },
    { n: '11', label: '交互读条区', side: 'right' as const, y: 339, targetX: 1032 },
    { n: '12', label: '战斗技能栏区域', side: 'right' as const, y: 429, targetX: 1199 },
    { n: '13', label: '聊天栏区域', side: 'right' as const, y: 536, targetX: 832 },
    { n: '14', label: '经验条区域', side: 'right' as const, y: 603, targetX: 967 },
  ];

  const measureText = (text: string) => {
    let w = 0;
    for (const ch of text) w += ch.charCodeAt(0) > 127 ? 15 : 8;
    return w;
  };

  const callouts = calloutData.map((item) => {
    const labelW = measureText(item.label);
    const badgeW = item.n.length > 1 ? 32 : 28;
    const gap = 6;
    if (item.side === 'left') {
      const textEnd = IMG_LEFT - TEXT_MARGIN;
      const labelStart = textEnd - labelW;
      const badgeX = labelStart - gap - badgeW;
      return { ...item, badgeX, labelStart, labelW, badgeW };
    } else {
      const textStart = IMG_RIGHT + TEXT_MARGIN;
      const badgeX = textStart + labelW + gap;
      return { ...item, badgeX, labelStart: textStart, labelW, badgeW };
    }
  });

  const notes = [
    ['1', '玩家信息区', '显示主角当前常规状态信息、主角战斗 buff 等核心信息。'],
    ['2', '任务追踪、队友信息区', '显示任务追踪、队友简要信息，可收起并切换任务与队伍页签。'],
    ['3', '虚拟摇杆区', '操控角色移动，可在左下角放置不与行走冲突的功能按键。'],
    ['4', '动作/自动战斗/拍照按钮区', '放置动作、自动战斗、拍照等常用快捷操作按钮。'],
    ['5', '社交区域', '承载社交入口与相关互动功能，便于快速进入社交系统。'],
    ['6', '网络、电量等信息区', '用于显示网络状态、电池电量等系统级状态信息。'],
    ['7', '跑马灯', '用于滚动展示系统公告、活动信息等需要持续曝光的内容。'],
    ['8', '地图信息区', '默认显示小地图、地点名称、天气、时间等环境信息。'],
    ['9', '商业公告区', '用于展示商业化相关活动、礼包或付费引导等公告内容。'],
    ['10', '功能菜单栏区域', '集合角色养成相关快捷按钮，承载养成玩法的高频操作入口。'],
    ['11', '交互读条区', '与场景物件交互时显示读条反馈，用于提示操作进度。'],
    ['12', '战斗技能栏区域', '承载主要战斗技能按钮与战斗核心操作入口。'],
    ['13', '聊天栏区域', '显示聊天频道内容，支持常驻浏览与快捷输入沟通。'],
    ['14', '经验条区域', '用于反馈角色经验成长进度与升级节奏。'],
  ] as const;

  return (
    <div className="mt-10 pb-8">
      <div
        className="w-full min-h-[200px] rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4 overflow-visible space-y-5"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        <div className="py-2 text-center">
          <div className="text-[32px] font-bold leading-none text-[#8FD3C7]">游戏主要界面</div>
        </div>

        <ResponsiveScaleFrame minDesignWidth={1600} maxScale={1.02}>
          <div className="w-[1600px] space-y-8">
            <div className="relative h-[620px] overflow-hidden">
              <img
                src={publicUrl('figma/qingyu-nian/qingyu-main-ui-screen.png')}
                alt="庆余年主要游戏画面"
                className="absolute left-[272px] top-[10px] h-auto w-[1056px] rounded-[8px] opacity-95"
                loading="lazy"
                decoding="async"
              />

              {callouts.map((item) => {
                const lineGap = 10;
                const lineFrom = item.side === 'left'
                  ? item.labelStart + item.labelW + lineGap
                  : item.labelStart - lineGap;
                const lineLeft = Math.min(lineFrom, item.targetX);
                const lineWidth = Math.abs(item.targetX - lineFrom);

                return (
                  <div key={item.n}>
                    <div
                      className="absolute inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#87C8BC] px-1 text-[12px] font-bold leading-none text-[#0b1320]"
                      style={{ left: item.badgeX, top: item.y - 14 }}
                    >
                      {item.n}
                    </div>
                    <div
                      className="absolute text-[15px] font-semibold leading-none text-[#d6f0e8] whitespace-nowrap"
                      style={{ left: item.labelStart, top: item.y - 9 }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="absolute h-[1.5px] bg-[#87C8BC]/70"
                      style={{ left: lineLeft, top: item.y, width: lineWidth }}
                    />
                    <div
                      className="absolute h-[6px] w-[6px] rounded-full bg-[#87C8BC]"
                      style={{ left: item.targetX - 3, top: item.y - 3 }}
                    />
                  </div>
                );
              })}
            </div>

          </div>
        </ResponsiveScaleFrame>

        <div className="rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-4 py-4 space-y-4 sm:px-6 sm:py-5 md:px-8 md:py-6 md:space-y-5">
          <p className="text-center text-base font-medium leading-relaxed text-[#ddefe8] sm:text-lg md:text-[24px]">
            战斗中需要玩家反复注意的元素放在同一区域，具有整体性，可以使玩家的注意力集中
          </p>
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-8">
            {notes.map(([n, title, desc]) => (
              <div key={n} className="flex items-baseline gap-2 sm:gap-3">
                <span className="inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] px-1 text-xs font-bold leading-none text-[#1a2e2b] sm:h-[28px] sm:min-w-[28px] sm:text-[13px] md:h-[30px] md:min-w-[30px] md:text-[14px]">
                  {n}
                </span>
                <p className="text-sm leading-[1.6] sm:text-base md:text-[21px]">
                  <span className="font-semibold text-[#d6f0e8]">{title}：</span>
                  <span className="text-[#a8c0ba]">{desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QingyuUICard({ title, img, callouts: calloutData, summary, notes }: {
  title: string;
  img: string;
  callouts: { n: string; label: string; side: 'left' | 'right'; y: number; targetX: number }[];
  summary: string;
  notes: readonly (readonly [string, string, string])[];
}) {
  const IMG_LEFT = 272;
  const IMG_RIGHT = 1328;
  const TEXT_MARGIN = 35;

  const measureText = (text: string) => {
    let w = 0;
    for (const ch of text) w += ch.charCodeAt(0) > 127 ? 20 : 11;
    return w;
  };

  const callouts = calloutData.map((item) => {
    const labelW = measureText(item.label);
    if (item.side === 'left') {
      const textEnd = IMG_LEFT - TEXT_MARGIN;
      const textStart = textEnd - labelW;
      const badgeW = item.n.length > 1 ? 32 : 28;
      const badgeX = textStart - badgeW - 10;
      return { ...item, badgeX, labelStart: textStart, labelW, badgeW };
    } else {
      const textStart = IMG_RIGHT + TEXT_MARGIN;
      const badgeW = item.n.length > 1 ? 32 : 28;
      const badgeX = textStart + labelW + 10;
      return { ...item, badgeX, labelStart: textStart, labelW, badgeW };
    }
  });

  return (
    <div className="mt-10 pb-8">
      <div
        className="w-full min-h-[200px] rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4 overflow-visible space-y-5"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        <div className="py-2 text-center">
          <div className="text-[32px] font-bold leading-none text-[#8FD3C7]">{title}</div>
        </div>

        <ResponsiveScaleFrame minDesignWidth={1600} maxScale={1.02}>
          <div className="w-[1600px] space-y-8">
            <div className="relative h-[620px] overflow-hidden">
              <img
                src={publicUrl(`figma/qingyu-nian/${img}`)}
                alt={`庆余年${title}`}
                className="absolute h-auto w-[1056px] rounded-[8px] opacity-95"
                style={{ left: IMG_LEFT, top: 10 }}
                loading="lazy"
                decoding="async"
              />

              {callouts.map((item) => {
                const lineGap = 10;
                const lineFrom = item.side === 'left'
                  ? item.labelStart + item.labelW + lineGap
                  : item.labelStart - lineGap;
                const lineLeft = Math.min(lineFrom, item.targetX);
                const lineWidth = Math.abs(item.targetX - lineFrom);

                return (
                  <div key={item.n}>
                    <div
                      className="absolute inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#87C8BC] px-1 text-[14px] font-bold leading-none text-[#0b1320]"
                      style={{ left: item.badgeX, top: item.y - 16 }}
                    >
                      {item.n}
                    </div>
                    <div
                      className="absolute text-[20px] font-semibold leading-none text-[#d6f0e8] whitespace-nowrap"
                      style={{ left: item.labelStart, top: item.y - 11 }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="absolute h-[1.5px] bg-[#87C8BC]/70"
                      style={{ left: lineLeft, top: item.y, width: lineWidth }}
                    />
                    <div
                      className="absolute h-[6px] w-[6px] rounded-full bg-[#87C8BC]"
                      style={{ left: item.targetX - 3, top: item.y - 3 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ResponsiveScaleFrame>

        <div className="rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-4 py-4 space-y-4 sm:px-6 sm:py-5 md:px-8 md:py-6 md:space-y-5">
          <p className="text-center text-base font-medium leading-relaxed text-[#ddefe8] sm:text-lg md:text-[24px]">
            {summary}
          </p>
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-8">
            {notes.map(([n, t, desc]) => (
              <div key={n} className="flex items-baseline gap-2 sm:gap-3">
                <span className="inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] px-1 text-xs font-bold leading-none text-[#1a2e2b] sm:h-[28px] sm:min-w-[28px] sm:text-[13px] md:h-[30px] md:min-w-[30px] md:text-[14px]">
                  {n}
                </span>
                <p className="text-sm leading-[1.6] sm:text-base md:text-[21px]">
                  <span className="font-semibold text-[#d6f0e8]">{t}：</span>
                  <span className="text-[#a8c0ba]">{desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QingyuWireframeCard({ title, summary, mode }: { title: string; summary: string; mode: 'main' | 'modal' }) {
  const callouts = mode === 'main'
    ? [
        { n: '1', label: '资源信息区', x: 82, y: 130, lineX: 296, lineY: 149, w: 230 },
        { n: '2', label: '核心内容区', x: 82, y: 338, lineX: 296, lineY: 357, w: 230 },
        { n: '3', label: '任务操作区', x: 824, y: 508, lineX: 716, lineY: 527, w: 108 },
      ]
    : [
        { n: '1', label: '标题信息区', x: 90, y: 166, lineX: 304, lineY: 185, w: 214 },
        { n: '2', label: '内容确认区', x: 824, y: 310, lineX: 692, lineY: 329, w: 132 },
        { n: '3', label: '底部操作区', x: 90, y: 494, lineX: 304, lineY: 513, w: 214 },
      ];

  return (
    <div className="project-detail-inner-card mx-auto w-full max-w-[1180px]">
      <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
        <svg viewBox="0 0 1080 680" className="block h-auto w-full" role="img" aria-label={`${title}线框标注图`}>
          <rect width="1080" height="680" fill="transparent" />
          <text x="540" y="58" textAnchor="middle" fill="#8FD3C7" fontSize="44" fontWeight="700">{title}</text>
          <rect x="390" y="120" width="300" height="440" rx="20" fill="#07111f" stroke="#87C8BC" strokeWidth="2" />
          {mode === 'main' ? (
            <>
              <rect x="414" y="144" width="252" height="52" rx="8" fill="#122338" stroke="#87C8BC" />
              <rect x="414" y="216" width="252" height="238" rx="10" fill="#122338" stroke="#87C8BC" />
              <rect x="414" y="474" width="252" height="58" rx="10" fill="#122338" stroke="#87C8BC" />
              <rect x="438" y="246" width="86" height="62" rx="8" fill="#0b1320" stroke="#3E7E90" />
              <rect x="554" y="246" width="86" height="62" rx="8" fill="#0b1320" stroke="#3E7E90" />
              <rect x="438" y="334" width="202" height="72" rx="8" fill="#0b1320" stroke="#3E7E90" />
            </>
          ) : (
            <>
              <rect x="430" y="160" width="220" height="58" rx="8" fill="#122338" stroke="#87C8BC" />
              <rect x="430" y="252" width="220" height="176" rx="10" fill="#122338" stroke="#87C8BC" />
              <rect x="454" y="474" width="172" height="52" rx="999" fill="#122338" stroke="#87C8BC" />
            </>
          )}
          {callouts.map((item) => (
            <g key={item.n}>
              <line x1={item.lineX} y1={item.lineY} x2={item.lineX + item.w} y2={item.lineY} stroke="#87C8BC" strokeWidth="3" />
              <circle cx={item.x + 20} cy={item.y + 20} r="18" fill="#A3D9C1" />
              <text x={item.x + 20} y={item.y + 25} textAnchor="middle" fill="#0b1320" fontSize="16" fontWeight="700">{item.n}</text>
              <text x={item.x + 52} y={item.y + 25} fill="#A3D9C1" fontSize="20" fontWeight="700">{item.label}</text>
            </g>
          ))}
        </svg>
        <div className="mt-4 rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 text-center text-[16px] font-semibold leading-relaxed text-[#C1D4CE]">
          {summary}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail({
  activeDetailTab = 'framework',
  onDetailTabChange,
}: {
  activeDetailTab?: ProjectDetailTabKey;
  onDetailTabChange?: (tab: ProjectDetailTabKey) => void;
}) {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    setProject(undefined);

    if (!projectId) {
      setLoading(false);
      return;
    }

    getProjectById(projectId, ac.signal)
      .then((p) => setProject(p))
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, [projectId]);

  useLayoutEffect(() => {
    if (loading || !project || !pageRef.current) return;

    const sections = Array.from(
      pageRef.current.querySelectorAll<HTMLElement>(
        '.project-detail-header, .project-detail-hero, .project-detail-module',
      ),
    );
    const innerCards = Array.from(
      pageRef.current.querySelectorAll<HTMLElement>('.project-detail-inner-card'),
    );
    if (!sections.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set([...sections, ...innerCards], { clearProps: 'opacity,transform' });
      return;
    }

    gsap.killTweensOf([...sections, ...innerCards]);
    gsap.set(sections, { opacity: 0, y: 24 });
    gsap.set(innerCards, { opacity: 0, y: 18, scale: 0.985 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const cards = Array.from(el.querySelectorAll<HTMLElement>('.project-detail-inner-card'));

          const tl = gsap.timeline();
          tl.to(
            el,
            {
              opacity: 1,
              y: 0,
              duration: 0.62,
              ease: 'power3.out',
              clearProps: 'opacity,transform',
            },
            0,
          );

          if (cards.length) {
            tl.to(
              cards,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.52,
                ease: 'power3.out',
                stagger: 0.07,
                clearProps: 'opacity,transform',
              },
              0.16,
            );
          }

          obs.unobserve(el);
        });
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 12% 0px',
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      gsap.killTweensOf([...sections, ...innerCards]);
    };
  }, [activeDetailTab, loading, project, projectId]);

  useEffect(() => {
    setMenuOpen(false);
  }, [projectId, activeDetailTab]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!tabMenuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleBack = () => {
    navigate('/');
    // Back to projects section (home page contains #projects)
    requestAnimationFrame(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  };

  if (loading) {
    return (
      <section className="relative w-full min-h-screen py-24 px-6 sm:px-12 lg:px-24 flex items-center">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
          <div className="font-display font-bold text-2xl neon-text-pink mb-2">加载中…</div>
          <div className="text-cyber-gray">正在读取项目数据（projects.json）。</div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="relative w-full min-h-screen py-24 px-6 sm:px-12 lg:px-24 flex items-center">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
          <div className="font-display font-bold text-2xl neon-text-pink mb-4">项目未找到</div>
          <button className="cyber-btn" onClick={handleBack} type="button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </button>
        </div>
      </section>
    );
  }

  const usesHighSeasDetailLayout =
    project.id === 'xingji-aodaisai' || project.id === 'yingshi-toushi';
  const activeDetailTabLabel =
    PROJECT_DETAIL_TABS.find((tab) => tab.key === activeDetailTab)?.label ?? project.title;

  return (
    <section className="relative w-full min-h-screen px-6 pb-24 pt-10 sm:px-12 lg:px-20 2xl:px-24">
      <div ref={pageRef} className="mx-auto max-w-[1440px] 2xl:max-w-[1560px]">
        {/* Header */}
        <div className="project-detail-header mb-8">
          <div className="relative flex flex-row items-center justify-between gap-3">
            <button className="cyber-btn inline-flex items-center" onClick={handleBack} type="button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </button>

            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-display text-xl font-bold text-neon-cyan drop-shadow-[0_0_14px_rgba(0,245,255,0.42)]">
              {activeDetailTabLabel}
            </div>

            <div ref={tabMenuRef} className="relative self-start sm:self-auto">
              <ProjectDetailMenu
                activeTab={activeDetailTab}
                isOpen={menuOpen}
                menuId="project-detail-header-tab-menu"
                onOpenChange={setMenuOpen}
                onTabChange={(tab) => onDetailTabChange?.(tab)}
              />
            </div>
          </div>
        </div>

        {/* Hero Card — hidden on 案例/Draft tabs for High Seas layout */}
        <div ref={cardRef} className={`project-detail-hero glass-card rounded-2xl p-6 sm:p-10 card-glow${usesHighSeasDetailLayout && activeDetailTab !== 'framework' ? ' hidden' : ''}`}>
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden gradient-border border border-neon-cyan/20">
              <img
                src={publicUrl(project.image)}
                alt={project.title}
                className="w-full h-auto object-contain bg-[#0b1320]"
                style={
                  project.imageObjectPosition
                    ? { objectPosition: project.imageObjectPosition }
                    : undefined
                }
              />
            </div>

            <div className="space-y-4">
              <div className="font-mono text-sm text-neon-cyan">
                <span>{project.category}</span>
                {project.publisher ? (
                  <span className="ml-2 text-cyber-gray">· {project.publisher}</span>
                ) : null}
              </div>

              <h1 className="text-4xl sm:text-5xl font-display font-bold neon-text-cyan leading-tight">
                {project.title}
              </h1>

              <p className="text-cyber-gray text-base sm:text-lg leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="mt-10 grid gap-6">
          {usesHighSeasDetailLayout && activeDetailTab !== 'framework' ? (
            activeDetailTab === '1' ? (
              <CaseDetailContent />
            ) : (
              <ProjectDetailPlaceholderContent activeTab={activeDetailTab} />
            )
          ) : project.id === 'qingyu-nian' && activeDetailTab === 'framework' ? (
            <>
              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div>
                  <div className="mb-3">
                    <div className="font-display font-bold text-2xl neon-text-pink">玩家画像</div>
                    <div className="mt-1 font-display text-base text-cyber-gray/90">User Persona</div>
                  </div>
                  <div className="mt-5 mb-6 rounded-lg border border-[#87C8BC]/10 bg-[#0b1320]/40 px-5 py-4">
                    <p className="text-[13px] leading-relaxed text-[#C1D4CE]/80">
                      基于 Nick Yee 玩家动机模型（Achievement / Social / Immersion）与项目内测期间
                      <span className="text-neon-cyan"> 2,000+ </span>份问卷回收数据，将《庆余年》核心用户归纳为三类画像，
                      作为后续界面信息层级与交互节奏设计的依据。
                    </p>
                    <div className="mt-3 flex gap-6">
                      <div className="text-center">
                        <div className="font-mono text-xl font-bold text-neon-cyan">43%</div>
                        <div className="text-[11px] text-[#C1D4CE]/50">沉浸型</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono text-xl font-bold text-neon-cyan">35%</div>
                        <div className="text-[11px] text-[#C1D4CE]/50">成就型</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono text-xl font-bold text-neon-cyan">22%</div>
                        <div className="text-[11px] text-[#C1D4CE]/50">社交型</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <QingyuPersonaCards />
                  </div>
                </div>
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">范围层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Scope Layer</div>
                </div>
                <QingyuScopeDiagram />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">范围层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Function Scope</div>
                </div>
                <QingyuScopeMatrix />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Structure Layer</div>
                </div>
                <div className="space-y-6">
                  <QingyuMobileStructureDiagram />
                  <QingyuPcStructureDiagram />
                </div>
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Structure Layer</div>
                </div>
                <QingyuInterfaceLayerStack />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Structure Layer</div>
                </div>
                <QingyuLayerHierarchyDiagram />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Structure Layer</div>
                </div>
                <QingyuRuleFlowDiagram />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">框架层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Framework Layer</div>
                </div>
                <div className="space-y-6">
                  <QingyuMainScreenDiagram />
                  <QingyuUICard
                    title="一级界面"
                    img="qingyu-level1-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 28, targetX: 293 },
                      { n: '2', label: '装备列表区', side: 'left', y: 141, targetX: 335 },
                      { n: '3', label: '装备预览区', side: 'left', y: 337, targetX: 536 },
                      { n: '8', label: '货币显示区', side: 'right', y: 28, targetX: 853 },
                      { n: '4', label: '属性面板区', side: 'right', y: 164, targetX: 863 },
                      { n: '7', label: '功能Tab栏', side: 'right', y: 260, targetX: 1244 },
                      { n: '5', label: '消耗材料区', side: 'right', y: 378, targetX: 863 },
                      { n: '6', label: '操作按钮区', side: 'right', y: 497, targetX: 747 },
                    ]}
                    summary="一级界面为全屏面板，承载养成、装备等深度功能操作，通常从主界面菜单入口进入。"
                    notes={[
                      ['1', '标题栏', '显示当前功能名称与帮助入口，明确界面所属模块。'],
                      ['2', '装备列表区', '展示当前角色所有装备，支持选择与切换。'],
                      ['3', '装备预览区', '展示选中装备的 3D 模型或图标大图，提供直观视觉反馈。'],
                      ['4', '属性面板区', '显示强化效果预览与数值变化，辅助决策。'],
                      ['5', '消耗材料区', '展示当前操作所需消耗的材料与数量。'],
                      ['6', '操作按钮区', '提供核心操作入口，如强化 1 次 / 强化 5 次等。'],
                      ['7', '功能 Tab 栏', '切换同模块下不同子功能（强化、镶嵌、精炼等）。'],
                      ['8', '货币显示区', '展示玩家当前货币余额与充值入口。'],
                    ]}
                  />
                  <QingyuUICard
                    title="二级界面"
                    img="qingyu-level2-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 35, targetX: 547 },
                      { n: '2', label: '数据列表区', side: 'left', y: 266, targetX: 500 },
                      { n: '3', label: 'Tab页签区', side: 'right', y: 148, targetX: 1207 },
                      { n: '4', label: '奖励预览区', side: 'right', y: 330, targetX: 1150 },
                      { n: '5', label: '操作按钮区', side: 'right', y: 521, targetX: 800 },
                    ]}
                    summary="二级界面为弹窗面板，在主界面之上展示排行榜、奖励预览等辅助信息，不离开当前场景。"
                    notes={[
                      ['1', '标题栏', '显示弹窗功能标题与关闭按钮。'],
                      ['2', '数据列表区', '展示排行信息，包含排名、数值、奖励等多列数据。'],
                      ['3', 'Tab 页签区', '切换不同排行维度或奖励类型。'],
                      ['4', '奖励预览区', '展示对应排名的奖励内容图标。'],
                      ['5', '操作按钮区', '提供领取、确认等交互入口。'],
                    ]}
                  />
                  <QingyuUICard
                    title="三级界面（横版）"
                    img="qingyu-level3-horizontal-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 98, targetX: 660 },
                      { n: '2', label: '内容区', side: 'left', y: 238, targetX: 580 },
                      { n: '3', label: '操作按钮区', side: 'left', y: 449, targetX: 680 },
                      { n: '4', label: '关闭按钮', side: 'right', y: 98, targetX: 1080 },
                    ]}
                    summary="三级界面为轻量弹窗，横版用于承载文本阅读、剧情梗概等信息展示场景。"
                    notes={[
                      ['1', '标题栏', '标识弹窗主题，如剧情梗概。'],
                      ['2', '内容区', '展示文本、图文等详情内容，支持滚动浏览。'],
                      ['3', '操作按钮区', '提供取消与确定双按钮，支持用户决策。'],
                      ['4', '关闭按钮', '右上角快捷关闭入口。'],
                    ]}
                  />
                  <QingyuUICard
                    title="三级界面（竖版）"
                    img="qingyu-level3-vertical-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 46, targetX: 685 },
                      { n: '2', label: 'Tab页签区', side: 'left', y: 120, targetX: 660 },
                      { n: '3', label: '网格内容区', side: 'left', y: 313, targetX: 650 },
                      { n: '4', label: '操作按钮区', side: 'left', y: 527, targetX: 740 },
                      { n: '5', label: '关闭按钮', side: 'right', y: 46, targetX: 1005 },
                    ]}
                    summary="三级界面竖版用于承载网格选择、奖励领取等操作密集型场景。"
                    notes={[
                      ['1', '标题栏', '标识弹窗主题，如钻石大奖选择。'],
                      ['2', 'Tab 页签区', '切换不同奖励类型或分类。'],
                      ['3', '网格内容区', '以网格布局展示可选道具或奖励。'],
                      ['4', '操作按钮区', '底部确认按钮，完成选择操作。'],
                      ['5', '关闭按钮', '右上角快捷关闭入口。'],
                    ]}
                  />
                  <QingyuUICard
                    title="提示界面（A 类）"
                    img="qingyu-prompt-a-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 203, targetX: 712 },
                      { n: '2', label: '提示内容区', side: 'left', y: 280, targetX: 657 },
                      { n: '3', label: '复选框区', side: 'left', y: 357, targetX: 712 },
                      { n: '4', label: '操作按钮区', side: 'right', y: 389, targetX: 753 },
                    ]}
                    summary="A 类提示界面为标准确认弹窗，包含提示文本、可选复选框与双按钮操作。"
                    notes={[
                      ['1', '标题栏', '显示"提示"等通用标题。'],
                      ['2', '提示内容区', '展示提示文案，告知用户操作后果或确认信息。'],
                      ['3', '复选框区', '可选"今日不再弹出此提示框"等勾选项。'],
                      ['4', '操作按钮区', '取消与确认双按钮，支持用户决策。'],
                    ]}
                  />
                  <QingyuUICard
                    title="提示界面（B 类）"
                    img="qingyu-prompt-b-ui.png"
                    callouts={[
                      { n: '1', label: '标题栏', side: 'left', y: 203, targetX: 712 },
                      { n: '2', label: '提示内容区', side: 'left', y: 285, targetX: 657 },
                      { n: '3', label: '复选框区', side: 'right', y: 373, targetX: 712 },
                    ]}
                    summary="B 类提示界面为信息展示弹窗，包含提示文本与关闭按钮，无需用户做二选一决策。"
                    notes={[
                      ['1', '标题栏', '显示提示标题与关闭按钮。'],
                      ['2', '提示内容区', '展示提示文案或说明信息。'],
                      ['3', '复选框区', '可选"今日不再弹出此提示框"等勾选项。'],
                    ]}
                  />
                  <div className="project-detail-inner-card mx-auto w-full max-w-[1180px] rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-5">
                    <div className="mb-4 font-display text-lg font-semibold text-[#d9fbff]">界面层级规范</div>
                    <div className="overflow-hidden rounded-xl border border-neon-cyan/20 bg-[#122338]/65">
                      {QINGYU_LAYER_ROWS.map(([layer, desc], idx) => (
                        <div key={layer} className="grid grid-cols-[132px_1fr] border-b border-white/10 last:border-b-0">
                          <div className={`${idx % 2 === 0 ? 'bg-neon-cyan/10' : 'bg-white/5'} px-3 py-3 font-mono text-sm font-bold text-neon-cyan`}>
                            {layer}
                          </div>
                          <div className="px-3 py-3 text-sm text-cyber-gray">{desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-cyan">结果与价值</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Outcome</div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {project.outcome.map((item, idx) => (
                    <div key={item} className="project-detail-inner-card rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-cyber-gray">
                      <div className="mb-2 font-mono text-xs text-neon-cyan">{`VALUE_0${idx + 1}`}</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
          <div
            className={`project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow${usesHighSeasDetailLayout ? ' relative overflow-hidden' : ''}`}
          >
            {usesHighSeasDetailLayout ? (
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2 rounded-t-2xl bg-[#193150ff]"
                aria-hidden
              />
            ) : null}
            <div className={usesHighSeasDetailLayout ? 'relative z-10' : undefined}>
              {usesHighSeasDetailLayout ? (
                <div className="mb-3">
                  <div className="font-display font-bold text-2xl neon-text-pink">玩家画像</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">User Persona</div>
                </div>
              ) : (
                <div className="font-display font-bold text-2xl neon-text-pink mb-3">问题定义</div>
              )}
              <p className="text-cyber-gray leading-relaxed">{project.challenge}</p>
              {usesHighSeasDetailLayout ? (
                <ResponsiveScaleFrame minDesignWidth={900} maxScale={1.25} className="mt-6">
                  <div className="grid w-[900px] grid-cols-3 gap-6">
                    {(
                      [
                        { src: publicUrl('high-seas-persona-1.png'), alt: 'High Seas Hero 玩家画像 1：休闲' },
                        { src: publicUrl('high-seas-persona-2.png'), alt: 'High Seas Hero 玩家画像 2：乐趣' },
                        { src: publicUrl('high-seas-persona-3.png'), alt: 'High Seas Hero 玩家画像 3：消费' },
                      ] as const
                    ).map((item) => (
                      <div
                        key={item.src}
                        className="project-detail-inner-card overflow-hidden rounded-lg aspect-[157/180]"
                      >
                        <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </ResponsiveScaleFrame>
              ) : null}
            </div>
          </div>

          <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
            <div className="mb-3">
              <div className="font-display font-bold text-2xl neon-text-pink">范围层</div>
              <div className="mt-1 font-display text-base text-cyber-gray/90">Scope Layer</div>
            </div>
            {usesHighSeasDetailLayout ? (
              <div className="mb-6 overflow-hidden bg-transparent" style={{ backgroundColor: 'transparent' }}>
                <ScopeLayerDiagram />
              </div>
            ) : null}
            {!usesHighSeasDetailLayout ? (
              <ol className="space-y-3">
                {project.process.map((item, idx) => (
                  <li
                    key={item}
                    className="project-detail-inner-card flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="font-mono text-neon-cyan text-sm min-w-[56px]">{`STEP_0${idx + 1}`}</span>
                    <span className="text-cyber-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>

          {!usesHighSeasDetailLayout ? (
            <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
              <div className="font-display font-bold text-2xl neon-text-cyan mb-3">结果与价值</div>
              <ul className="space-y-3">
                {project.outcome.map((item) => (
                  <li key={item} className="project-detail-inner-card text-cyber-gray text-sm leading-relaxed flex gap-3">
                    <span className="text-neon-cyan font-mono">{'•'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {usesHighSeasDetailLayout ? (
            <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
              <div className="mb-3">
                <div className="font-display font-bold text-2xl neon-text-pink">范围层</div>
                <div className="mt-1 font-display text-base text-cyber-gray/90">Scope Layer</div>
              </div>
              <ScopeLayerDetailTable />
            </div>
          ) : null}

          {usesHighSeasDetailLayout
            ? (
                ['GtHD5', 'HcCn5', '8qvkJ'] as const satisfies readonly StructureLayerPencilNode[]
              ).map((pencilNode, frameIndex) => (
                <div key={`${pencilNode}-${frameIndex}`} className="contents">
                  {frameIndex === 0 ? (
                    <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                      <div className="mb-3">
                        <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                        <div className="mt-1 font-display text-base text-cyber-gray/90">Structure Layer</div>
                      </div>
                      <StructureLayerDiagram pencilNode="VLUaz" />
                    </div>
                  ) : null}
                  <div
                    className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow"
                  >
                    <div className="mb-3">
                      <div className="font-display font-bold text-2xl neon-text-pink">
                        {pencilNode === 'HcCn5' || pencilNode === '8qvkJ' ? '框架层' : '结构层'}
                      </div>
                      <div className="mt-1 font-display text-base text-cyber-gray/90">
                        {pencilNode === 'HcCn5' || pencilNode === '8qvkJ' ? 'Framework Layer' : 'Structure Layer'}
                      </div>
                    </div>
                    {pencilNode === '8qvkJ' ? <QingyuMainScreenDiagram /> : null}
                    <StructureLayerDiagram pencilNode={pencilNode} />
                    {pencilNode === '8qvkJ' ? (
                      <div className="mt-10 pb-8">
                        <div className="mx-auto w-full max-w-[1180px] 2xl:max-w-[1280px]">
                          <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
                            <StructureLayerKpzPoDiagram />
                            <div className="mt-6">
                              <div className="project-detail-inner-card rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5">
                                <StructureLayerNXVgFNotes embedded />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {pencilNode === '8qvkJ' ? (
                      <div className="mt-6 space-y-6 pb-8">
                        <StructureLayerPlaceholderCard
                          title="半屏界面"
                          imageSrc="pencil/xingji-aodaisai/half-screen.png"
                          imageAlt="半屏界面示意图"
                          summary="半屏界面通过保留主场景背景与顶部状态栏，在不中断主流程的前提下承载单一系统操作。"
                          callouts={[
                            {
                              n: '4',
                              label: '场景保留区',
                              align: 'left',
                              x: 38,
                              centerY: 258,
                              w: 264,
                              lineStartX: 321,
                              lineWidth: 229,
                            },
                            {
                              n: '3',
                              label: '标题信息区',
                              align: 'right',
                              x: 970,
                              centerY: 451,
                              w: 260,
                              lineStartX: 780,
                              lineWidth: 172,
                            },
                            {
                              n: '2',
                              label: '内容预览区',
                              align: 'right',
                              x: 970,
                              centerY: 586,
                              w: 260,
                              lineStartX: 780,
                              lineWidth: 172,
                            },
                            {
                              n: '1',
                              label: '底部操作区',
                              align: 'left',
                              x: 38,
                              centerY: 729,
                              w: 264,
                              lineStartX: 321,
                              lineWidth: 179,
                            },
                          ]}
                          bullets={[
                            {
                              title: '底部操作区：',
                              desc: '底部保留返回按钮，让玩家完成查看后可以快速回到上一级界面。',
                            },
                            {
                              title: '内容预览区：',
                              desc: '右侧集中放置参数显示、开关与负载反馈，让玩家能在同一区域完成查看与调整。',
                            },
                            {
                              title: '标题信息区：',
                              desc: '中部标题条承接当前模块名称与等级信息，帮助玩家快速确认所在系统。',
                            },
                            {
                              title: '场景保留区：',
                              desc: '上半部分继续展示当前建筑与外围入口，帮助玩家维持对场景上下文的感知。',
                            },
                          ]}
                        />
                        <StructureLayerPlaceholderCard
                          title="弹窗界面"
                          imageSrc="pencil/xingji-aodaisai/modal-screen.png"
                          imageAlt="弹窗界面示意图"
                          summary="弹窗界面通过模态遮罩聚焦单次升级决策，把解锁内容、资源消耗和确认操作收敛在一个视觉中心。"
                          callouts={[
                            {
                              n: '3',
                              label: '标题信息区',
                              align: 'left',
                              x: 38,
                              centerY: 272,
                              w: 264,
                              lineStartX: 321,
                              lineWidth: 229,
                            },
                            {
                              n: '2',
                              label: '内容预览区',
                              align: 'right',
                              x: 970,
                              centerY: 443,
                              w: 260,
                              lineStartX: 750,
                              lineWidth: 202,
                            },
                            {
                              n: '1',
                              label: '底部操作区',
                              align: 'left',
                              x: 38,
                              centerY: 646,
                              w: 264,
                              lineStartX: 321,
                              lineWidth: 209,
                            },
                          ]}
                          bullets={[
                            {
                              title: '底部操作区：',
                              desc: '底部双按钮分别对应立即完成与升级确认，便于玩家在同一视线范围内完成选择。',
                            },
                            {
                              title: '内容预览区：',
                              desc: '弹窗中部展示待解锁内容与模块缩略信息，帮助玩家快速理解本次升级对象。',
                            },
                            {
                              title: '标题信息区：',
                              desc: '中央弹窗承载标题、等级与解锁内容，快速建立当前决策对象。',
                            },
                          ]}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))
            : null}
            {usesHighSeasDetailLayout ? (
              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-3">
                  <div className="font-display font-bold text-2xl neon-text-pink">视觉层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">Visual Layer</div>
                </div>
                <div className="mt-8">
                  <StructureLayerButtonShowcase />
                </div>
              </div>
            ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}


