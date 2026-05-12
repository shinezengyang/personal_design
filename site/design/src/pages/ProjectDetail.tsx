import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

const QINGYU_PERSONAS = [
  {
    title: '剧情沉浸型',
    summary: '跟随主线与角色关系，优先要看清当前剧情目标。',
  },
  {
    title: '成长效率型',
    summary: '关注战力、资源和奖励，入口需要短、反馈要直接。',
  },
  {
    title: '江湖探索型',
    summary: '偏好地图线索、隐藏事件与 NPC 关系，不能丢失场景感。',
  },
] as const;

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
    <div className="project-detail-inner-card rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
      <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.04}>
        <svg viewBox={`0 0 1120 ${viewHeight}`} className="w-[1120px]" role="img" aria-label={ariaLabel}>
          <defs>
            <radialGradient id={`qingyu-map-bg-${idSuffix}`} cx="50%" cy="52%" r="65%">
              <stop offset="0" stopColor="#13304d" />
              <stop offset="1" stopColor="#06111f" />
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
        {QINGYU_PERSONAS.map((persona, idx) => (
          <div
            key={persona.title}
            className="project-detail-inner-card rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4"
          >
            <div className="mb-3 flex items-start gap-3">
              <div className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#87C8BC] font-mono text-sm font-bold text-[#0b1320]">
                {idx + 1}
              </div>
              <div>
                <div className="font-display text-[20px] font-bold leading-tight text-[#A3D9C1]">
                  {persona.title}
                </div>
              </div>
            </div>
            <p className="text-[14px] font-semibold leading-relaxed text-[#C1D4CE]">{persona.summary}</p>
          </div>
        ))}
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
    <div className="project-detail-inner-card rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4">
      <ResponsiveScaleFrame minDesignWidth={1080} maxScale={1.08}>
        <svg viewBox="0 0 1080 560" className="w-[1080px]" role="img" aria-label="庆余年结构层界面承载层级图">
          <defs>
            <linearGradient id="qingyu-stack-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#07111f" />
              <stop offset="1" stopColor="#14233a" />
            </linearGradient>
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
    { line: '#00f5ff', node: '#70efff', text: '#eafcff' },
    { line: '#4fe7ff', node: '#98f1ff', text: '#f4fbff' },
    { line: '#a855f7', node: '#f58cff', text: '#ffe8ff' },
    { line: '#00e1ff', node: '#78f8ff', text: '#f0fcff' },
    { line: '#ff59f8', node: '#ff9bf6', text: '#fff0ff' },
    { line: '#b56cff', node: '#ffadff', text: '#fff1ff' },
    { line: '#16f2ff', node: '#7ef8ff', text: '#ecffff' },
    { line: '#00d0ff', node: '#72ecff', text: '#ecfaff' },
    { line: '#ff6cff', node: '#ffa6ff', text: '#fff1ff' },
    { line: '#23f0ff', node: '#8cf9ff', text: '#eeffff' },
    { line: '#6be5ff', node: '#b0f7ff', text: '#f6fcff' },
  ] as const;

  return (
    <div className="project-detail-inner-card rounded-2xl border border-fuchsia-500/25 bg-[linear-gradient(180deg,rgba(5,10,22,0.98),rgba(7,17,29,0.92))] p-4 shadow-[0_0_36px_rgba(0,245,255,0.08),0_0_42px_rgba(214,35,255,0.08)]">
      <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.02}>
        <svg viewBox="0 0 1120 650" className="w-[1120px]" role="img" aria-label="庆余年界面层级命名与承载图">
          <defs>
            <linearGradient id="qingyu-hierarchy-panel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0b1323" />
              <stop offset="0.52" stopColor="#15182d" />
              <stop offset="1" stopColor="#220f34" />
            </linearGradient>
            <pattern id="qingyu-hierarchy-noise" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.06)" />
              <circle cx="4" cy="3" r="0.5" fill="rgba(0,0,0,0.08)" />
            </pattern>
            <pattern id="qingyu-hierarchy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,245,255,0.12)" strokeWidth="1" />
            </pattern>
            <pattern id="qingyu-hierarchy-scan" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="4" fill="rgba(255,255,255,0.02)" />
            </pattern>
            <linearGradient id="qingyu-hierarchy-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d8e7f2" />
              <stop offset="0.58" stopColor="#edf6ff" />
              <stop offset="1" stopColor="#d8e0ed" />
            </linearGradient>
            <linearGradient id="qingyu-hierarchy-header" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#dcfbff" />
              <stop offset="0.42" stopColor="#f6e8ff" />
              <stop offset="1" stopColor="#c8f5ff" />
            </linearGradient>
            <linearGradient id="qingyu-hierarchy-divider" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff45f6" />
              <stop offset="1" stopColor="#00f5ff" />
            </linearGradient>
            <filter id="qingyu-hierarchy-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00f5ff" floodOpacity="0.24" />
              <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#ff45f6" floodOpacity="0.12" />
            </filter>
            <filter id="qingyu-hierarchy-strong-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#00f5ff" floodOpacity="0.3" />
              <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#ff4df8" floodOpacity="0.18" />
            </filter>
          </defs>
          <rect width="1120" height="650" rx="18" fill="#040915" />
          <rect x="0" y="0" width="332" height="650" fill="url(#qingyu-hierarchy-panel)" />
          <rect x="0" y="0" width="332" height="650" fill="url(#qingyu-hierarchy-noise)" opacity="0.35" />
          <rect x="332" y="0" width="788" height="650" fill="url(#qingyu-hierarchy-right)" />
          <rect x="332" y="0" width="788" height="650" fill="url(#qingyu-hierarchy-grid)" opacity="0.65" />
          <rect x="332" y="0" width="788" height="650" fill="url(#qingyu-hierarchy-scan)" opacity="0.45" />
          <rect x="8" y="8" width="1104" height="634" rx="14" fill="none" stroke="#00f5ff" strokeOpacity="0.3" />
          <rect x="16" y="16" width="1088" height="618" rx="12" fill="none" stroke="#ff45f6" strokeOpacity="0.16" />
          <path d="M346 18 H1054 L1106 42 L1054 66 H346 Z" fill="rgba(8,28,46,0.08)" stroke="rgba(0,217,255,0.35)" />
          <line x1="332" y1="0" x2="332" y2="650" stroke="url(#qingyu-hierarchy-divider)" strokeOpacity="0.9" strokeWidth="3" />
          <line x1="332" y1="64" x2="1120" y2="64" stroke="#00f5ff" strokeOpacity="0.18" strokeWidth="2" />

          <path d="M18 40 l12 8 -12 8 z" fill="#7ef8ff" filter="url(#qingyu-hierarchy-glow)" />
          <rect x="42" y="34" width="18" height="18" rx="3" fill="#141c30" stroke="#ff4ff8" strokeWidth="1.5" />
          <rect x="45.5" y="37.5" width="11" height="11" rx="2" fill="#defaff" />
          <text x="76" y="52" fill="url(#qingyu-hierarchy-header)" fontSize="27" fontWeight="700" filter="url(#qingyu-hierarchy-strong-glow)">UIRoot</text>
          <text x="374" y="49" fill="#091828" fontSize="19" fontWeight="900" letterSpacing="1">界面层级命名与承载说明</text>

          {rows.map((row, idx) => {
            const y = 94 + idx * 49;
            const arrowX = 42;
            const cubeX = 70;
            const textX = 104;
            const lineStartX = 210;
            const tone = rowTones[idx];
            return (
              <g key={row.layer}>
                {row.child ? null : (
                  <path d={`M${arrowX} ${y - 10} l10 8 -10 8 z`} fill={tone.node} fillOpacity="0.95" />
                )}
                <rect x={cubeX} y={y - 16} width="15" height="15" rx="2" fill="#0c1626" stroke={tone.line} strokeWidth="1.5" />
                <rect x={cubeX + 3.5} y={y - 12.5} width="8" height="8" rx="1.4" fill={tone.node} />
                <text x={textX} y={y - 3} fill={tone.text} fontSize="16" fontWeight="600">{row.layer}</text>

                <line x1={lineStartX} y1={y - 9} x2="346" y2={y - 9} stroke={tone.line} strokeWidth="2.6" strokeOpacity="0.95" />
                <circle cx="346" cy={y - 9} r="3.2" fill={tone.line} />
                <text x="370" y={y - 5} fill="#16283b" fontSize="16" fontWeight="800">{row.desc}</text>
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

  const stageClass = 'rounded-2xl border border-neon-cyan/20 bg-[linear-gradient(180deg,rgba(16,29,45,0.98),rgba(11,22,35,0.96))] p-4 shadow-[inset_0_1px_0_rgba(0,245,255,0.06)]';

  const renderPanelFrame = (width: number, height: number, title: string) => (
    <g>
      <rect x="0" y="0" width={width} height={height} fill="#7f7f7f" />
      <rect x="0" y="0" width={width} height="95" fill="#585858" />
      <text x={width / 2} y="46" textAnchor="middle" dominantBaseline="central" fill="#eeeeee" fontSize="24" fontWeight="700">
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
    <div className="project-detail-inner-card rounded-2xl border border-fuchsia-500/22 bg-[linear-gradient(180deg,rgba(4,10,22,0.98),rgba(7,17,29,0.92))] p-4 shadow-[0_0_30px_rgba(0,245,255,0.08),0_0_42px_rgba(214,35,255,0.08)]">
      <div className="mb-5 overflow-hidden rounded-xl border border-neon-cyan/24 bg-[radial-gradient(circle_at_top_left,rgba(255,0,200,0.14),transparent_30%),linear-gradient(180deg,rgba(8,20,36,0.98),rgba(11,24,41,0.94))] px-5 py-5 shadow-[inset_0_1px_0_rgba(0,245,255,0.12)]">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/35 bg-[#0a1322]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-fuchsia-200 shadow-[0_0_18px_rgba(255,76,237,0.16)]">
            <span className="h-2 w-2 rounded-full bg-[#ff4ced] shadow-[0_0_12px_rgba(255,76,237,0.9)]" />
            UI Protocol
          </div>
          <div className="h-px min-w-[88px] flex-1 bg-[linear-gradient(90deg,rgba(255,76,237,0.7),rgba(0,245,255,0.18),transparent)]" />
        </div>
        <div className="mb-3 text-[28px] font-bold text-[#88f7ff] drop-shadow-[0_0_18px_rgba(0,245,255,0.24)]">各类情况下的界面开启关闭规则</div>
        <div className="space-y-3 text-[15px] leading-relaxed text-[#d2d7e8]">
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
          <div className="space-y-4">
            <div className="rounded-lg border border-neon-cyan/18 bg-[linear-gradient(180deg,rgba(22,37,58,0.98),rgba(17,27,42,0.92))] px-4 py-3 text-center text-[18px] font-bold text-[#7ef6ff] shadow-[inset_0_1px_0_rgba(0,245,255,0.08)]">
              玩法入口与副本切换
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl border border-neon-cyan/12 bg-[linear-gradient(180deg,rgba(24,35,50,0.98),rgba(19,29,42,0.96))] p-3">
                <EntrySwitchSvg />
              </div>
              <div className="rounded-xl border border-neon-cyan/12 bg-[linear-gradient(180deg,rgba(24,35,50,0.98),rgba(19,29,42,0.96))] p-3">
                <EntrySwitchSvg withDungeon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QingyuMainScreenDiagram() {
  const panels = [
    { title: '剧情任务', side: 'left', blocks: ['任务目标', '对话选择', '剧情回看'] },
    { title: '角色成长', side: 'middle', blocks: ['武学状态', '装备预览', '伙伴协同'] },
    { title: '江湖探索', side: 'right', blocks: ['地图线索', '机关解谜', 'NPC关系'] },
  ] as const;

  return (
    <div className="mt-10 pb-8">
      <div
        className="w-full min-h-[200px] rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4 overflow-visible space-y-5"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        <div className="py-2 text-center">
          <div className="text-[32px] font-bold leading-none text-[#8FD3C7]">主要游戏画面</div>
        </div>

        <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.12}>
          <div className="grid w-[1120px] grid-cols-3 gap-5">
            {panels.map((panel) => (
              <div key={panel.title} className="project-detail-inner-card">
                <div className="relative rounded-md border border-[#87C8BC]/40 bg-[#07111f] p-4">
                  <div className="mb-3 rounded border border-[#87C8BC]/60 bg-[#122338] px-3 py-2 text-center text-[16px] font-bold text-[#A3D9C1]">
                    {panel.title}
                  </div>
                  <div className="relative h-[390px] rounded border border-[#3E7E90] bg-[#0b1320] p-4">
                    <div className="absolute inset-x-4 top-4 h-[48px] rounded border-2 border-[#87C8BC]" />
                    <div className="absolute inset-x-4 top-[76px] bottom-[78px] rounded border-2 border-[#87C8BC]" />
                    <div className="absolute inset-x-4 bottom-4 h-[46px] rounded border-2 border-[#87C8BC]" />
                    <span className="absolute left-1/2 top-[28px] inline-flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]">3</span>
                    <span className="absolute left-1/2 top-[190px] inline-flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]">2</span>
                    <span className="absolute left-1/2 bottom-[26px] inline-flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]">1</span>
                    <div className="absolute inset-x-9 top-[112px] grid gap-4">
                      {panel.blocks.map((block) => (
                        <div key={block} className="rounded border border-[#3E7E90] bg-[#122338]/80 px-3 py-3 text-center text-[15px] font-semibold text-[#C1D4CE]">
                          {block}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveScaleFrame>

        <div className="project-detail-inner-card rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-center text-[16px] font-semibold leading-relaxed text-[#C1D4CE]">
            同类系统采用一致的界面分区：顶部承载资源与状态，中部聚焦当前玩法内容，底部保留返回、确认和继续任务等高频操作。
          </p>
          <div className="mt-4 space-y-3 text-[16px] font-[600] leading-relaxed text-[#C1D4CE]">
            {[
              ['导航区：', '系统级操作放在底部，降低单手操作成本并强化返回路径。'],
              ['内容区：', '剧情、成长、探索的核心内容集中在画面中部，保证玩家视觉焦点稳定。'],
              ['资源区：', '角色状态、任务追踪和关键资源放在顶部，便于快速确认当前条件。'],
            ].map(([title, desc], idx) => (
              <p key={title} className="flex items-start gap-3 leading-relaxed">
                <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] text-[12px] font-bold leading-none text-[#0b1320]">
                  {idx + 1}
                </span>
                <span>
                  <span className="font-semibold text-[#8FD3C7]">{title}</span>
                  {desc}
                </span>
              </p>
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
                  <div className="mt-6">
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
                  <div className="mt-1 font-display text-base text-cyber-gray/90">界面承载层级</div>
                </div>
                <QingyuInterfaceLayerStack />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">界面层级命名</div>
                </div>
                <QingyuLayerHierarchyDiagram />
              </div>

              <div className="project-detail-module glass-card rounded-2xl p-6 sm:p-8 card-glow">
                <div className="mb-5">
                  <div className="font-display font-bold text-2xl neon-text-pink">结构层</div>
                  <div className="mt-1 font-display text-base text-cyber-gray/90">界面显示规则</div>
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
                  <QingyuWireframeCard
                    title="主界面框架"
                    mode="main"
                    summary="主界面优先保证资源、任务追踪与核心玩法内容的阅读顺序，让玩家在剧情推进和系统成长之间保持明确方向。"
                  />
                  <QingyuWireframeCard
                    title="弹窗界面"
                    mode="modal"
                    summary="弹窗承载确认、奖励、解锁和剧情选择等中断式操作，标题、内容与底部操作区保持统一结构。"
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
                    {pencilNode === '8qvkJ' ? (
                      <div className="mt-10 pb-8">
                        <div
                          className="w-full min-h-[200px] rounded-2xl border border-neon-cyan/25 bg-[#0b1320]/55 p-4 overflow-visible space-y-5"
                          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                        >
                          <div className="py-2 text-center">
                            <div className="text-[32px] font-bold leading-none text-[#8FD3C7]">
                              主要游戏画面
                            </div>
                          </div>

                          <div className="pt-2 pb-7">
                            <ResponsiveScaleFrame minDesignWidth={1120} maxScale={1.12}>
                              <div className="grid w-[1120px] grid-cols-3 gap-5">
                                {[
                                  {
                                    src: 'panel-1.png',
                                    alt: '主要游戏画面左侧',
                                    groupId: 'group-left',
                                    wrapperGroupId: 'group-left-wrapper',
                                    badgeTopPct: { n3: 5.76, n2: 85.2, n1: 98.16 },
                                    nodeIds: ['00zAT', '62lsj', 'HJrnk', 'gZ3DT', 'IgLPU', 'JNiff', 'pvVAE'],
                                  },
                                  {
                                    src: 'panel.png',
                                    alt: '主要游戏画面中间',
                                    groupId: 'group-middle',
                                    wrapperGroupId: 'group-middle-wrapper',
                                    badgeTopPct: { n3: 5.77, n2: 85.4, n1: 98.38 },
                                    nodeIds: ['kW60Q', '4TGFO', '2iPaO', 'COAWy', '6wcZt', 'dC1B2', 'KWmBp'],
                                  },
                                  {
                                    src: 'panel-2.png',
                                    alt: '主要游戏画面右侧',
                                    groupId: 'group-right',
                                    wrapperGroupId: 'group-right-wrapper',
                                    badgeTopPct: { n3: 5.31, n2: 84.95, n1: 97.92 },
                                    nodeIds: ['y6QMs', 'k4WaU', 'zrAVF', 'Vza14', 'a4nR5', 'YBHFa', 'AmmUv'],
                                  },
                                ].map((group) => (
                                  <div
                                    key={group.wrapperGroupId}
                                    className="project-detail-inner-card"
                                    data-pencil-wrapper-group={group.wrapperGroupId}
                                  >
                                    <div
                                      className="relative overflow-visible rounded-md border border-[#87C8BC]/40"
                                      data-pencil-group={group.groupId}
                                      data-pencil-node-ids={group.nodeIds.join(',')}
                                    >
                                      <img
                                        src={publicUrl(group.src)}
                                        alt={group.alt}
                                        className="block h-auto w-full rounded-md"
                                        loading="lazy"
                                        decoding="async"
                                      />

                                      <div className="pointer-events-none absolute inset-0">
                                        <div className="absolute inset-x-0 top-0 h-[7.1%] border-2 border-[#87C8BC]" />
                                        <div className="absolute inset-x-0 top-[8.1%] h-[77.7%] border-2 border-[#87C8BC]" />
                                        <div className="absolute inset-x-0 top-[92%] h-[7.5%] border-2 border-[#87C8BC]" />

                                        <span
                                          className="absolute left-1/2 inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]"
                                          style={{ top: `${group.badgeTopPct.n3}%` }}
                                        >
                                          3
                                        </span>
                                        <span
                                          className="absolute left-1/2 inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]"
                                          style={{ top: `${group.badgeTopPct.n2}%` }}
                                        >
                                          2
                                        </span>
                                        <span
                                          className="absolute left-1/2 inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#87C8BC] text-[13px] font-bold leading-none text-[#0b1320]"
                                          style={{ top: `${group.badgeTopPct.n1}%` }}
                                        >
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </ResponsiveScaleFrame>
                          </div>

                          <div className="pt-2">
                            <div className="project-detail-inner-card rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5">
                              <p className="text-center text-[16px] font-semibold leading-relaxed text-[#C1D4CE]">
                              在菜单系统中采用了模块化设计，同级系统中采取了相似的布局系统，保证玩家体验的一致性
                              </p>
                              <div className="mt-4 space-y-3 text-[16px] font-[600] leading-relaxed text-[#C1D4CE]">
                                <p className="flex items-start gap-3 leading-relaxed">
                                  <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] text-[12px] font-bold leading-none text-[#0b1320]">
                                    1
                                  </span>
                                  <span>
                                    <span className="font-semibold text-[#8FD3C7]">导航区：</span>
                                    系统级导航按钮放底部，方便玩家切换各个系统
                                  </span>
                                </p>
                                <p className="flex items-start gap-3 leading-relaxed">
                                  <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] text-[12px] font-bold leading-none text-[#0b1320]">
                                    2
                                  </span>
                                  <span>
                                    <span className="font-semibold text-[#8FD3C7]">内容区：</span>
                                    最核心的玩法内容放在中间，清晰明确，玩家大部分时间视觉聚焦在此处
                                  </span>
                                </p>
                                <p className="flex items-start gap-3 leading-relaxed">
                                  <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#87C8BC] text-[12px] font-bold leading-none text-[#0b1320]">
                                    3
                                  </span>
                                  <span>
                                    <span className="font-semibold text-[#8FD3C7]">资源区：</span>
                                    资源数量、头像信息、增益等次要的信息放顶部
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    ) : null}
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


