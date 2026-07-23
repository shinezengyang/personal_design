import './GuildSystemExactCase.css';
import type { CSSProperties, ReactNode } from 'react';
import { publicUrl } from '../lib/publicUrl';

const guildAssets = {
  coverOrbitOuter: '/assets/qingyu-guild-cover/orbit-outer.svg',
  coverOrbitMiddle: '/assets/qingyu-guild-cover/orbit-middle.svg',
  coverOrbitInner: '/assets/qingyu-guild-cover/orbit-inner.webp',
  coverOrbitLeft: '/assets/qingyu-guild-cover/orbit-left.svg',
  coverDotTeal: '/assets/qingyu-guild-cover/dot-teal.svg',
  coverDotRed: '/assets/qingyu-guild-cover/dot-red.svg',
  coverStar: '/assets/qingyu-guild-cover/star.svg',
  oldInfo: '/assets/qingyu-guild-portfolio/before-01.jpg',
  oldCreate: '/assets/qingyu-guild-portfolio/before-02.jpg',
  oldMain: '/assets/qingyu-guild-portfolio/before-03.png',
  oldMember: '/assets/qingyu-guild-portfolio/before-04.jpg',
  oldActivity: '/assets/qingyu-guild-portfolio/before-05.jpg',
  oldHome: '/assets/qingyu-guild-portfolio/before-06.jpg',
  oldDonate: '/assets/qingyu-guild-portfolio/before-07.jpg',
  oldPractice: '/assets/qingyu-guild-portfolio/before-08.jpg',
  styleA: '/assets/qingyu-guild-portfolio/style-competitor-01.jpg',
  styleB: '/assets/qingyu-guild-portfolio/style-competitor-02.jpg',
  styleC: '/assets/qingyu-guild-portfolio/style-competitor-03.jpg',
  finalList: '/assets/qingyu-guild-portfolio/final-list.jpg',
  finalMain: '/assets/qingyu-guild-portfolio/final-feature-b.png',
  finalMember: '/assets/qingyu-guild-portfolio/final-member.jpg',
  finalActivity: '/assets/qingyu-guild-portfolio/final-activity.png',
  finalHome: '/assets/qingyu-guild-portfolio/final-base.jpg',
  finalDonate: '/assets/qingyu-guild-portfolio/final-donate.png',
  finalWelfare: '/assets/qingyu-guild-portfolio/final-welfare.png',
  finalPractice: '/assets/qingyu-guild-portfolio/final-practice.jpg',
  finalAlly: '/assets/qingyu-guild-portfolio/final-ally.png',
  finalEnemy: '/assets/qingyu-guild-portfolio/final-enemy.png',
  joinUi: '/assets/qingyu-guild-figma/join-panel.png',
  createUi: '/assets/qingyu-guild-figma/create-panel.png',
  infoUi: '/assets/qingyu-guild-figma/home-panel.png',
  memberInfoUi: '/assets/qingyu-guild-figma/member-info-panel.png',
  memberRankUi: '/assets/qingyu-guild-figma/member-rank-panel.png',
  activityUi: '/assets/qingyu-guild-figma/activity-panel.png',
  baseUi: '/assets/qingyu-guild-figma/base-panel.png',
  welfareUi: '/assets/qingyu-guild-figma/welfare-panel.png',
  donateUi: '/assets/qingyu-guild-figma/donate-panel.png',
  practiceUi: '/assets/qingyu-guild-figma/practice-panel.png',
  diplomacyAllyUi: '/assets/qingyu-guild-figma/ally-panel.png',
  diplomacyEnemyUi: '/assets/qingyu-guild-figma/enemy-panel.png',
  artCompetitorActivity: '/assets/qingyu-guild-figma/art-competitor-activity.png',
  artCompetitorLevel: '/assets/qingyu-guild-figma/art-competitor-level.png',
  artCompetitorLeague: '/assets/qingyu-guild-figma/art-competitor-league.png',
  artQingyuMain: '/assets/qingyu-guild-figma/art-qingyu-main.png',
  artQingyuDiplomacy: '/assets/qingyu-guild-figma/art-qingyu-diplomacy.png',
  finalFeatureA: '/assets/qingyu-guild-figma/final-feature-01.png',
  finalFeatureB: '/assets/qingyu-guild-figma/final-feature-02.png',
  finalListExact: '/assets/qingyu-guild-figma/final-list-exact.png',
  finalMemberInfoExact: '/assets/qingyu-guild-figma/final-member-info-exact.png',
  finalMemberRankExact: '/assets/qingyu-guild-figma/final-member-rank-exact.png',
  finalActivityExact: '/assets/qingyu-guild-figma/final-activity-exact.png',
  finalBaseExact: '/assets/qingyu-guild-figma/final-base-exact.png',
  finalDonateExact: '/assets/qingyu-guild-figma/final-donate-exact.png',
  finalPracticeExact: '/assets/qingyu-guild-figma/final-practice-exact.png',
  finalWelfareExact: '/assets/qingyu-guild-figma/final-welfare-exact.png',
  finalAllyExact: '/assets/qingyu-guild-figma/final-ally-exact.png',
  finalEnemyExact: '/assets/qingyu-guild-figma/final-enemy-exact.png',
} as const;

const oldIssues = [
  ['1', '无帮派界面 · 帮派信息', '帮派名称重复；入帮条件未知；帮主信息不明确，实力未知。', guildAssets.oldInfo],
  ['2', '创建帮派 · 帮派信息设置', '帮派命名重复；帮派帮徽选择状态不明显；设置信息拥挤。', guildAssets.oldCreate],
  ['3', '基本信息 · 主界面', '身份/家底/活跃分散在多个页签，活动状态藏在二级，进帮派难一眼掌握。', guildAssets.oldMain],
  ['4', '成员 · 职位', '成员/职位/日志/申请各占一界面，任命要逐人开菜单，名额满没满靠心算。', guildAssets.oldMember],
  ['5', '帮派活动', '纯文字列表，无大图、无状态、无时间窗，不知何时开放、是否已参与。', guildAssets.oldActivity],
  ['6', '驻地 · 升级信息', '信息冗长难读；捐献单向扣资源、回报不直观，付出—回报链路不闭环。', guildAssets.oldHome],
  ['7', '福利 · 捐献', '信息冗长难读；捐献单向扣资源、回报不直观，付出—回报链路不闭环。', guildAssets.oldDonate],
  ['8', '帮派修炼 · 学习技能', '信息冗长难读；捐献单向扣资源、回报不直观，付出—回报链路不闭环。', guildAssets.oldPractice],
] as const;

const architectureModules: ReadonlyArray<{
  chip?: string;
  desc: string;
  descWidth: number;
  no: string;
  tag: '优化' | '新增';
  title: string;
  top: number;
}> = [
  { no: '01', title: '基本信息', desc: '帮派信息 · 宣言公告 · 活跃度 · 排行', tag: '优化', top: 367, descWidth: 320 },
  { no: '02', title: '成员列表', desc: '成员信息 · 成员职位 · 申请列表', tag: '优化', top: 497, descWidth: 320, chip: '申请列表仅帮主 / 副帮主可见' },
  { no: '03', title: '帮派活动', desc: '活动列表 · 详情条件 · 一键参加', tag: '优化', top: 627, descWidth: 320 },
  { no: '04', title: '帮派驻地', desc: '主厅等六建筑 · 升级与技能', tag: '优化', top: 757, descWidth: 200 },
  { no: '05', title: '帮派福利', desc: '签到 · 商店 · 捐献', tag: '优化', top: 887, descWidth: 200 },
  { no: '06', title: '帮派外交', desc: '友好帮派 · 敌对帮派', tag: '新增', top: 1017, descWidth: 200 },
] as const;

const memberFlow = [
  ['1', '入帮', '快速加入'],
  ['2', '签到', '全天开启'],
  ['3', '参加活动', '次数透明'],
  ['4', '领活跃', '宝箱阶梯'],
  ['5', '捐献', '得帮贡'],
  ['6', '商店兑换', '帮贡消费'],
] as const;

const managerFlow = [
  ['1', '收到申请', '红点提醒'],
  ['2', '批量审批', '处理 / 一键清除'],
  ['3', '职位任命', '编制与称谓'],
  ['4', '驻地升级', '资金与权限'],
  ['5', '频道广播', '全帮共享喜报'],
] as const;

type FigmaNote = {
  align: 'left' | 'right';
  body?: string;
  line: number;
  lineTop?: number;
  top: number;
  title: string;
};

const joinNotes: readonly FigmaNote[] = [
  { align: 'left', top: 386, line: 244, title: '可排序榜单', body: '名称 / 等级 / 人数 / 威望列头可点排序，按威望挑「强帮」一目了然。' },
  { align: 'left', top: 574, line: 84, title: '选中态高亮', body: '高亮当前选中行，左右信息联动 —— 不必来回跳页。' },
  { align: 'left', top: 728, line: 46, title: '三种入会', body: '创建帮派 · 快速加入（系统派单） · 申请加入（指定帮派）。' },
  { align: 'right', top: 406, line: 100, title: '帮派信息预览', body: '右栏实时展示帮主 / 副帮主 / 招募宣言，先看人再决定。' },
  { align: 'right', top: 490, line: 50, title: '详情按钮', body: '点击可跳转至帮主 / 副帮主的个人信息详情。' },
  { align: 'right', top: 728, line: 52, title: '加入门槛外显', body: '等级 / 修为限制直接写明，不达标提前知道，减少无效申请。' },
] as const;

const createNotes: readonly FigmaNote[] = [
  { align: 'left', top: 412, line: 84, title: '初始帮徽选择', body: '摆放至屏幕左侧，方便玩家点击选择。' },
  { align: 'left', top: 715, line: 338, title: '创建帮派按钮', body: '最后一步的按钮也放在屏幕中心的下方，方便注意和点击。' },
  { align: 'right', top: 430, line: 100, title: '招募宣言', body: '宣言设置放置屏幕右侧，方便玩家点击输入。' },
  { align: 'right', top: 614, line: 264, title: '帮派命名', body: '把重要的信息放置在视觉中心。' },
] as const;

const homeNotes: readonly FigmaNote[] = [
  { align: 'left', top: 475, line: 102, title: '帮派身份区', body: '帮徽 + 帮主 + 等级 / 成员 / 威望 / 资金一栏立住「这是谁的家」。' },
  { align: 'left', top: 620, line: 55, title: '宣言 / 公告双签', body: '对外招募、对内通知收在同一处，底部一键发送。' },
  { align: 'right', top: 426, line: 134, title: '活跃度阶梯 · 宝箱', body: '50→250 阶梯宝箱 + 周活跃排名，把「活跃」做成看得见的目标。' },
  { align: 'right', top: 561, line: 30, title: '功能页签导航', body: '基本信息 / 成员 / 活动 / 驻地 / 福利常驻右栏，主功能一步可达。' },
  { align: 'right', top: 672, line: 145, title: '活动 · 状态外显', body: '可领取 / 未达成直接写在卡上，不点开就知道该做什么。' },
] as const;

const memberNotes: readonly FigmaNote[] = [
  { align: 'left', top: 450, line: 100, title: '玩家自己底板显示' },
  { align: 'left', top: 510, line: 100, title: '未选中玩家的底板显示' },
  { align: 'left', top: 561, line: 100, title: '选中玩家的底板显示' },
  { align: 'left', top: 689, line: 100, title: '选中玩家自己的底板显示' },
  { align: 'left', top: 1067, line: 207, title: '累积贡献可排序', body: '按贡献排序，谁付出多一目了然，是任命与汰换的依据。' },
  { align: 'left', top: 1233, line: 42, title: '称谓编辑', body: '帮主可自定义职位称谓，强化帮派身份认同。' },
  { align: 'right', top: 403, line: 445, title: '三页签分流', body: '成员信息 / 成员职位 / 申请列表 —— 看人、任命、审批各归各位。' },
  { align: 'right', top: 637, line: 236, title: '帮派社交按钮', body: '对同帮成员的互动动作直接沉在列表语境里，提高社交密度。' },
  { align: 'right', top: 939, line: 350, title: '职位编制矩阵', body: '帮主0/1·副帮主1/1·堂主2/5·精英3/10 —— 名额占用直接写进表头。' },
  { align: 'right', top: 1122, line: 153, title: '单选即任命', body: '每行每职一个圆点，点选即指派，所见即所得。' },
] as const;

const activityNotes: readonly FigmaNote[] = [
  { align: 'left', top: 395, line: 94, title: '活动列表', body: '左栏纵向罗列全部活动，选中即在右侧展开详情，结构清楚不跳页。' },
  { align: 'left', top: 548, line: 121, title: '开放时间外显', body: '每条活动标「全天开启 / 19:50-20:10」，何时能打写在列表上。' },
  { align: 'right', top: 459, line: 300, title: '活动详情 · 规则', body: '右栏给出活动介绍与规则，先讲清「这是什么、怎么玩」。' },
  { align: 'right', top: 552, line: 412, title: '参加条件门槛', body: '等级/次数/规模/时间四项条件前置，达不达标提前知道。' },
  { align: 'right', top: 710, line: 157, title: '奖励 + 参加', body: '道具奖励直观陈列，「参加」按钮收束在右下，决策—行动闭环。' },
] as const;

const baseNotes: readonly FigmaNote[] = [
  { align: 'left', top: 539, line: 217, title: '可视化驻地地图', body: '主厅/珍宝阁/库房/武馆/试炼塔散布成一座山门 —— 建筑即功能的空间隐喻。' },
  { align: 'left', top: 666, line: 98, title: '建筑等级标牌', body: '每栋楼挂着「一级/二级」标牌，帮派家底强弱一眼可见。' },
  { align: 'right', top: 456, line: 194, title: '主厅 · 等级效果', body: '主厅决定帮派等级与成员上限，点建筑即看它「升级能换什么」。' },
  { align: 'right', top: 576, line: 195, title: '升级条件外显', body: '帮派资金进度条与达标状态直接写给玩家看，目标明确。' },
  { align: 'right', top: 722, line: 187, title: '升级即时反馈', body: '「升级」按钮收在右下，满足条件即可推进帮派整体成长。' },
] as const;

const welfareNotes: readonly FigmaNote[] = [
  { align: 'left', top: 496, line: 215, title: '福利玩法列表', body: '通过这些福利玩法获得帮贡并消耗帮贡，形成持续回流。' },
  { align: 'left', top: 1021, line: 215, title: '捐献记录 · 社会证明', body: '滚动播报「谁又捐了多少」，用同伴行为推动跟随式贡献。' },
  { align: 'left', top: 1197, line: 198, title: '帮贡用途闭环', body: '底部点明帮贡可用于打造/修炼/商店，付出有明确去处。' },
  { align: 'left', top: 1561, line: 215, title: '帮派技能列表', body: '把可修炼技能排成稳定列表，活跃与成长之间关系更清楚。' },
  { align: 'right', top: 928, line: 269, title: '三档捐献分层', body: '普通 / 高级 / 豪华三档，按投入意愿与回报梯度自由选择。' },
  { align: 'right', top: 1073, line: 279, title: '双向回报', body: '一次捐献同时增加个人帮贡与帮派资金，利己与利帮一致。' },
  { align: 'right', top: 1212, line: 125, title: '每日限次', body: '用捐献次数约束每日额度，把贡献摊成长期日常习惯。' },
  { align: 'right', top: 1465, line: 269, title: '技能详情', body: '修炼主要服务被动属性成长，让帮贡去向更加明确。' },
  { align: 'right', top: 1716, line: 148, title: '技能升级', body: '满足资源即可消耗帮贡修炼，把贡献回流到个人成长。' },
] as const;

const allyNotes: readonly FigmaNote[] = [
  { align: 'left', top: 425, lineTop: 438, line: 117, title: '双页签切换', body: '友好 / 敌对同居一个外交界面，一键在「盟友」与「仇敌」间切换。' },
  { align: 'left', top: 712, lineTop: 760, line: 315, title: '友好保护模式', body: '左下可勾选保护，避免盟友间误伤，让合作没有后顾之忧。' },
  { align: 'left', top: 802, lineTop: 802, line: 542, title: '申请—同意双向', body: '「申请」需对方同意，关系由双方达成，比单方指定更稳固。' },
  { align: 'right', top: 547, lineTop: 559, line: 441, title: '唯一盟位', body: '无盟友时给「暂无友好帮派」占位，引导去添加 —— 0/1 名额稀缺。' },
  { align: 'right', top: 751, lineTop: 765, line: 127, title: '添加友好弹窗', body: '「添加」拉起候选帮派弹窗，过滤掉未开外交/已是敌对的帮派。' },
] as const;

const enemyNotes: readonly FigmaNote[] = [
  { align: 'left', top: 424, lineTop: 429, line: 129, title: '双页签切换', body: '红点标记「敌对」当前页，红色基调一眼区分「这是仇敌名单」。' },
  { align: 'left', top: 546, lineTop: 551, line: 142, title: '帮派信息 · 实力', body: '等级/人数/帮主 + 聊天入口，挑战前先掂量对方实力。' },
  { align: 'left', top: 738, lineTop: 740, line: 357, title: '可主动解除 · 仅对方可解除 ·', body: '卡面红字标明：被你列为敌对的仇，只有对方能解除，你撤不掉。' },
  { align: 'right', top: 480, lineTop: 493, line: 261, title: '红色敌对名册', body: '整屏朱红与友好的青蓝形成强对立，色彩即情绪。' },
  { align: 'right', top: 755, lineTop: 760, line: 147, title: '添加 = 单向宣战', body: '「添加」即可宣战、无需对方同意，结仇成本低、传播快。' },
] as const;

const finalGallery = [
  ['帮派列表', guildAssets.finalListExact],
  ['帮派主界面 · 最终效果图', guildAssets.finalFeatureB],
  ['帮派主界面 · 最终效果图', guildAssets.finalFeatureA],
  ['成员信息', guildAssets.finalMemberInfoExact],
  ['成员职位', guildAssets.finalMemberRankExact],
  ['帮派活动', guildAssets.finalActivityExact],
  ['帮派驻地', guildAssets.finalBaseExact],
  ['帮派福利', guildAssets.finalWelfareExact],
  ['帮派捐献', guildAssets.finalDonateExact],
  ['帮派修炼', guildAssets.finalPracticeExact],
  ['友好帮派 · 结盟', guildAssets.finalAllyExact],
  ['敌对帮派 · 宣战', guildAssets.finalEnemyExact],
] as const;

const memberAnnotationPins = [
  { side: 'left', x: 422, y: 448, line: 82 },
  { side: 'left', x: 422, y: 574, line: 82 },
  { side: 'left', x: 422, y: 704, line: 82 },
  { side: 'left', x: 422, y: 836, line: 82 },
  { side: 'left', x: 610, y: 956, line: 270 },
  { side: 'left', x: 396, y: 1084, line: 56 },
  { side: 'right', x: 1026, y: 448, line: 76 },
  { side: 'right', x: 935, y: 590, line: 167 },
  { side: 'right', x: 934, y: 898, line: 168 },
  { side: 'right', x: 1006, y: 1040, line: 96 },
] as const;

type DetailNote = {
  align?: 'left' | 'right';
  body: string;
  title: string;
};

type Principle = {
  body: string;
  no: string;
  title: string;
};

function Header({ no, eyebrow, title, desc }: { no: string; eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="guild-head">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
      <b>{no}</b>
    </div>
  );
}

function Shot({ src, alt = '' }: { src: string; alt?: string }) {
  return <img src={publicUrl(src)} alt={alt} loading="eager" decoding="async" />;
}

function GuildSeal() {
  return (
    <div className="guild-seal" aria-hidden="true">
      <i />
      <b>帮</b>
    </div>
  );
}

function Principles({
  items,
  solution,
}: {
  items: readonly Principle[];
  solution: string;
}) {
  return (
    <div className="guild-principle-area">
      <div className="guild-principle-head">
        <span>交互原则</span>
        <i />
      </div>
      <div className="guild-principle-grid">
        {items.map((item) => (
          <article key={item.no}>
            <b>{item.no}</b>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <div className="guild-solution-bar">{solution}</div>
    </div>
  );
}

function FigmaPrinciples({
  items,
  solution,
  solutionTitle,
}: {
  items: readonly Principle[];
  solution?: string;
  solutionTitle?: string;
}) {
  return (
    <div className="guild-figma-principles">
      <div className="guild-principle-head">
        <span>交互原则</span>
        <i />
      </div>
      <div className="guild-principle-grid">
        {items.map((item) => (
          <article key={item.no}>
            <b>{item.no}</b>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      {solutionTitle && solution ? (
        <div className="guild-figma-solution">
          <strong>{solutionTitle}</strong>
          <span>{solution}</span>
        </div>
      ) : null}
    </div>
  );
}

function FigmaExactDetail({
  caption,
  desc,
  eyebrow,
  image,
  no,
  notes,
  principles,
  solution,
  solutionTitle,
  title,
}: {
  caption: string;
  desc: string;
  eyebrow: string;
  image: string;
  no: string;
  notes: readonly FigmaNote[];
  principles: readonly Principle[];
  solution: string;
  solutionTitle: string;
  title: string;
}) {
  return (
    <section className="guild-section guild-detail guild-figma-detail">
      <Header no={no} eyebrow={eyebrow} title={title} desc={desc} />
      <div className="guild-figma-detail-stage">
        <div className="guild-figma-shot">
          <Shot src={image} alt={`${title}交互稿`} />
        </div>
        <span className="guild-figma-caption">{caption}</span>
        {notes.map((note) => (
          <article
            key={`${note.align}-${note.title}`}
            className={`guild-figma-note ${note.align}`}
            style={{ '--line': `${note.line}px`, top: `${note.top}px` } as CSSProperties}
          >
            <h3>{note.title}</h3>
            {note.body ? <p>{note.body}</p> : null}
          </article>
        ))}
      </div>
      <FigmaPrinciples items={principles} solutionTitle={solutionTitle} solution={solution} />
    </section>
  );
}

type FigmaStackShot = {
  caption: string;
  image: string;
  top: number;
};

function FigmaStackDetail({
  desc,
  eyebrow,
  no,
  notes,
  principles,
  shots,
  solution,
  solutionTitle,
  title,
  variant,
}: {
  desc: string;
  eyebrow: string;
  no: string;
  notes: readonly FigmaNote[];
  principles: readonly Principle[];
  shots: readonly FigmaStackShot[];
  solution: string;
  solutionTitle: string;
  title: string;
  variant: 'two' | 'three';
}) {
  const stackClass = no === '06' ? ' guild-member-stack' : no === '09' ? ' guild-welfare-stack' : '';

  return (
    <section className={`guild-section guild-detail guild-figma-stack-detail ${variant}${stackClass}`}>
      <Header no={no} eyebrow={eyebrow} title={title} desc={desc} />
      <div className="guild-figma-detail-stage">
        {shots.map((shot) => (
          <div key={shot.caption}>
            <div className="guild-figma-shot" style={{ top: `${shot.top}px` }}>
              <Shot src={shot.image} alt={shot.caption} />
            </div>
            <span className="guild-figma-caption" style={{ top: `${shot.top + 417}px` }}>
              {shot.caption}
            </span>
          </div>
        ))}
        {notes.map((note) => (
          <article
            key={`${note.align}-${note.title}`}
            className={`guild-figma-note ${note.align}`}
            style={{ '--line': `${note.line}px`, top: `${note.top}px` } as CSSProperties}
          >
            <h3>{note.title}</h3>
            {note.body ? <p>{note.body}</p> : null}
          </article>
        ))}
      </div>
      <FigmaPrinciples items={principles} solutionTitle={solutionTitle} solution={solution} />
    </section>
  );
}

function DiplomacyExactSection() {
  const summaries = [
    ['促进群体社交', '把社交单位从个人升级为帮派，结盟带来归属与协作。'],
    ['制造竞争压力', '明确敌友关系，让对抗有名有姓，激活帮派荣誉与对立情绪。'],
  ] as const;
  const cards = [
    {
      tone: 'ally',
      title: '友好帮派',
      sub: 'ALLY · ALLIANCE',
      count: '0/1',
      limit: '上限 · 稀缺',
      bullets: [
        ['稀缺结盟', '只能结一个盟，唯一性让「谁是盟友」成为重大决策。'],
        ['保护模式', '可开启保护，避免友好帮派之间误伤，合作更安心。'],
        ['申请—同意双向', '结盟需对方同意，关系是双方共识而非单方面指定。'],
      ],
    },
    {
      tone: 'enemy',
      title: '敌对帮派',
      sub: 'ENEMY · HOSTILITY',
      count: '0/99',
      limit: '上限 · 开放',
      bullets: [
        ['开放宣战', '最多99个敌人，可主动标记，也会被别人标记成敌对。'],
        ['仅对方可解除', '你标记的仇无法自行撤销，对抗一旦结下就有压力。'],
        ['单向添加', '宣战不需对方同意，结仇成本低、传播快。'],
      ],
    },
  ] as const;
  const entries = [
    ['帮派外交页签', '挂在帮派主界面右栏；未开启则隐藏页签。'],
    ['消息提醒入口', '收到友好申请时，从消息列表直达处理。'],
    ['头顶敌友标识', '把帮派关系带到大世界，野外相遇即知敌友。'],
  ] as const;

  return (
    <section className="guild-section guild-diplomacy-code guild-diplomacy-exact">
      <Header
        no="10"
        eyebrow="GUILD DIPLOMACY · 新增系统 · 设计 张永佳"
        title="帮派外交 · 把对抗写进社交"
        desc="个人留存做到顶，就该升级为「帮派荣誉」。外交系统用一对关系 —— 友好与敌对 —— 把帮派之间的合作与对抗摆上台面，制造以帮派为单位的群体社交与竞争压力。"
      />
      <div className="guild-diplomacy-exact-summary">
        {summaries.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="guild-diplomacy-relation-cards">
        {cards.map((card) => (
          <article key={card.title} className={card.tone}>
            <div className="guild-diplomacy-card-top" />
            <h3>{card.title}</h3>
            <span>{card.sub}</span>
            <strong>{card.count}</strong>
            <em>{card.limit}</em>
            <ul>
              {card.bullets.map(([title, body]) => (
                <li key={title}>
                  <b>{title}</b>
                  <p>{body}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="guild-diplomacy-friend-enemy">友敌</div>
      <div className="guild-diplomacy-entry-exact">
        <h3>入口 & 落地</h3>
        <div>
          {entries.map(([title, body]) => (
            <article key={title}>
              <b>{title}</b>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiplomacyDetailSection({
  caption,
  desc,
  image,
  no,
  notes,
  principles,
  solution,
  solutionTitle,
  title,
  tone,
}: {
  caption: string;
  desc: string;
  image: string;
  no: string;
  notes: readonly FigmaNote[];
  principles: readonly Principle[];
  solution?: string;
  solutionTitle?: string;
  title: string;
  tone: 'ally' | 'enemy';
}) {
  return (
    <section className={`guild-section guild-diplomacy-detail ${tone}`}>
      <Header
        no={no}
        eyebrow={`${tone === 'ally' ? 'ALLY' : 'ENEMY'} · 帮派外交 ${tone === 'ally' ? '①' : '②'}`}
        title={title}
        desc={desc}
      />
      <div className="guild-diplomacy-detail-stage">
        <div className="guild-diplomacy-detail-shot">
          <Shot src={image} alt={caption} />
        </div>
        <span className="guild-diplomacy-detail-caption">{caption}</span>
        {notes.map((note) => (
          <article
            key={`${tone}-${note.align}-${note.title}`}
            className={`guild-diplomacy-detail-note ${note.align}`}
            style={{
              '--line': `${note.line}px`,
              '--line-top': `${(note.lineTop ?? note.top + 14) - note.top}px`,
              top: `${note.top}px`,
            } as CSSProperties}
          >
            <h3>{note.title}</h3>
            {note.body ? <p>{note.body}</p> : null}
          </article>
        ))}
      </div>
      <FigmaPrinciples items={principles} solutionTitle={solutionTitle} solution={solution} />
      {tone === 'enemy' ? (
        <div className="guild-diplomacy-world">
          <div>
            <h3>落地大世界 · 头顶敌友标识</h3>
            <p>外交关系不止停在面板里 —— 角色头顶信息增加友好/敌对标识，野外狭路相逢即知敌我，把帮派对抗带到每一次相遇。</p>
          </div>
          <div className="guild-world-tags">
            <article className="ally">
              <span>友 · 盟友帮</span>
              <i />
              <b>江湖侠客</b>
            </article>
            <article className="enemy">
              <span>敌 · 仇敌帮</span>
              <i />
              <b>宿敌门派</b>
            </article>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function PlayerFlowExactSection() {
  const steps = [
    ['① 加入帮派', '挑帮·入帮', '可排序榜单选帮，三种入会方式找到组织。', 210, 605, '好奇·期待'],
    ['② 日常活跃', '活动·阶梯', '日程化活动 + 活跃度阶梯，养成每天上线的习惯。', 485, 539, '归属'],
    ['③ 贡献成长', '捐献·排名', '捐献攒帮贡、冲活跃前排，付出有可见回报。', 760, 491, '成就'],
    ['④ 参与治理', '职位·驻地', '升职位、建驻地，从「待在帮里」变「共同经营」。', 1035, 443, '责任'],
    ['⑤ 帮派外交', '结盟·宣战', '为帮派结盟与对抗投入情感，留存升级为荣誉。', 1290, 389, '荣誉·对抗'],
  ] as const;
  const scenes = [
    ['gold', '周五晚高峰', '固定时段活动(19:30-20:00)一到，全帮上线集结，一起冲活跃度阶梯领宝箱 —— 制造「共同在场」。'],
    ['teal', '帮主治理日常', '用职位矩阵任命堂主、看驻地升级条件凑帮派资金，把帮派当成一家「公司」来经营。'],
    ['red', '外交对抗时刻', '与邻帮结唯一之盟共抗强敌；野外撞见敌对帮，头顶红色标识让一次相遇随时升级为团战。'],
  ] as const;

  return (
    <section className="guild-section guild-player-flow-exact">
      <Header
        no="13"
        eyebrow="PLAYER FLOW · 从「加入」到「为帮而战」"
        title="玩家心流 · 旅程与场景"
        desc="帮派系统的留存逻辑，是把玩家沿着「越陷越深」的曲线往前推：从找到组织，到养成习惯，再到为帮派的荣誉与对抗投入情感。"
      />
      <span className="guild-flow-axis-label">投入 / 沉浸度</span>
      <div className="guild-flow-chart">
        <div className="guild-flow-baseline" />
        <div className="guild-flow-trend" />
        {steps.map(([title, tag, body, x, y, mood], index) => (
          <div key={title}>
            <div className="guild-flow-stem" style={{ left: `${x}px`, top: `${y + 11}px`, height: `${700 - y - 11}px` }} />
            <div className="guild-flow-dot" style={{ left: `${x - 11}px`, top: `${y}px` }} />
            <b className="guild-flow-mood" style={{ left: `${x}px`, top: `${y - 33}px` }}>{mood}</b>
            <article className="guild-flow-step" style={{ left: `${110 + index * 249}px` }}>
              <h3>{title}</h3>
              <span>{tag}</span>
              <p>{body}</p>
            </article>
          </div>
        ))}
      </div>
      <div className="guild-flow-scenes">
        <span>使用场景</span>
        <i />
        <div>
          {scenes.map(([tone, title, body]) => (
            <article key={title} className={tone}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p>场景印证：每一步设计都对应玩家某一刻「想做什么」，把易用性与社交动机落到真实游玩节奏里。</p>
      </div>
    </section>
  );
}

function ArtDirectionExactSection() {
  const competitors = [
    [guildAssets.artCompetitorActivity, '梦幻西游手游 · 帮派活动', '活动条件、奖励与底部活跃度刻度一屏讲清 — 暖纸底服务休闲社交氛围。', '印证 活动详情与活跃刻度'],
    [guildAssets.artCompetitorLevel, '天涯明月刀 · 名望等级', '每一阶一只宝箱，阶梯式里程碑把长目标切成短冲刺。', '印证 五档宝箱阶梯'],
    [guildAssets.artCompetitorLeague, '天涯明月刀 · 帮派联赛', '暗底水墨＋集体积分与下阶奖励 — 组织目标的剧场化呈现。', '印证 集体目标可视化'],
  ] as const;
  const language = [
    ['gold', '墨蓝描金', '暗蓝为底、鎏金描边，沉稳有重量，贴合「帮派＝江湖势力」的厚重。'],
    ['gold', '立绘点睛', '帮主与活动立绘做视觉锚点，给功能界面注入「人」的温度。'],
    ['gold', '等距驻地', '用等距地图把建设做成看得见的家，空间感强化归属。'],
    ['red', '朱红敌 · 青蓝友', '外交用红/青编码敌友，色彩即情绪，一眼分清阵营。'],
  ] as const;

  return (
    <section className="guild-section guild-art-exact">
      <Header
        no="14"
        eyebrow="ART DIRECTION · 界面美术为何这样设计"
        title="美术风格参考"
        desc="帮派与外交界面的美术，本质是把「组织感」与「敌友感」翻译成可感知的视觉 —— 用底色定调性、用立绘给温度、用色彩编码阵营。"
      />
      <h3 className="guild-art-section-title competitors">竞品 · 美术语言参考</h3>
      <div className="guild-art-competitors">
        {competitors.map(([src, title, body, badge]) => (
          <article key={title}>
            <div><Shot src={src} alt={title} /></div>
            <h3>{title}</h3>
            <p>{body}</p>
            <span>{badge}</span>
          </article>
        ))}
      </div>
      <h3 className="guild-art-section-title qingyu">本作 · 庆余年手游的美术语言</h3>
      <div className="guild-art-qingyu-shots">
        <div><Shot src={guildAssets.artQingyuMain} alt="庆余年帮派主界面美术参考" /></div>
        <div><Shot src={guildAssets.artQingyuDiplomacy} alt="庆余年帮派外交美术参考" /></div>
      </div>
      <div className="guild-art-language">
        {language.map(([tone, title, body]) => (
          <article key={title} className={tone}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <h3 className="guild-art-section-title design">竞品 · 设计语言参考</h3>
      <div className="guild-art-design-refs">
        <article>
          <h3>率土之滨</h3>
          <span>ALLIANCE · SLG</span>
          <div><i style={{ background: '#bf382b' }} /><i style={{ background: '#1a1a1a' }} /><i style={{ background: '#f0f0f0' }} /></div>
          <p>奏折式扁平按钮替代传统纹饰，用红/黑/白编码「战火·权谋·礼政」；同盟外交把敌友对立做成核心张力。</p>
        </article>
        <article>
          <h3>逆水寒手游</h3>
          <span>GUILD · MMO</span>
          <div><i style={{ background: '#adccd6' }} /><i style={{ background: '#edede5' }} /><i style={{ background: '#8c9e8c' }} /></div>
          <p>「无招胜有招」弱化 UI 存在感，支持全局自定义；浅蓝剪纸古典风，二级页按功能调色。</p>
        </article>
      </div>
      <div className="guild-art-solution">
        <b>共同心法</b>
        <p>优秀的帮派/外交界面，都在做同一件事：把抽象的「组织与敌友」翻译成直觉化的色彩、空间与角色 —— 本作选择墨蓝描金 + 立绘 + 红青双色，与世界观气质一致。</p>
      </div>
    </section>
  );
}

function FinalVisualsExactSection() {
  return (
    <section className="guild-section guild-final-exact">
      <Header
        no="15"
        eyebrow="FINAL VISUALS · 交互稿落地为效果图"
        title="视觉稿展示"
        desc="前面用黑白交互稿讲清了「为什么这样设计」；这里把同一套结构落地成最终美术效果图 —— 墨蓝描金、立绘点睛，气质与世界观一致。"
      />
      <div className="guild-final-exact-gallery">
        {finalGallery.map(([title, src]) => (
          <article key={`${title}-${src}`}>
            <div><Shot src={src} alt={title} /></div>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function AnnotatedSection({
  children,
  eyebrow,
  no,
  notes,
  principles,
  sectionClassName = '',
  solution,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  no: string;
  notes: readonly DetailNote[];
  principles: readonly Principle[];
  sectionClassName?: string;
  solution: string;
  title: string;
}) {
  return (
    <section className={`guild-section guild-detail guild-annotated ${sectionClassName}`.trim()}>
      <Header no={no} eyebrow={eyebrow} title={title} />
      <div className="guild-annotated-stage">
        {children}
        <div className="guild-callout-column left">
          {notes
            .filter((note) => note.align !== 'right')
            .map((note) => (
              <article key={note.title} className="guild-callout">
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
        </div>
        <div className="guild-callout-column right">
          {notes
            .filter((note) => note.align === 'right')
            .map((note) => (
              <article key={note.title} className="guild-callout">
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
        </div>
      </div>
      <Principles items={principles} solution={solution} />
    </section>
  );
}

export function GuildSystemExactCase() {
  return (
    <div className="guild-case">
      <section className="guild-cover">
        <div className="guild-cover-stars" aria-hidden="true">
          {['a', 'b', 'c', 'd', 'e'].map((dot) => (
            <img key={dot} className={`star-${dot}`} src={publicUrl(guildAssets.coverStar)} alt="" />
          ))}
        </div>
        <img className="guild-cover-orbit orbit-left" src={publicUrl(guildAssets.coverOrbitLeft)} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-outer" src={publicUrl(guildAssets.coverOrbitOuter)} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-middle" src={publicUrl(guildAssets.coverOrbitMiddle)} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-inner" src={publicUrl(guildAssets.coverOrbitInner)} alt="" aria-hidden="true" />
        <img className="guild-cover-dot dot-teal" src={publicUrl(guildAssets.coverDotTeal)} alt="" aria-hidden="true" />
        <img className="guild-cover-dot dot-red" src={publicUrl(guildAssets.coverDotRed)} alt="" aria-hidden="true" />
        <p className="guild-cover-kicker">多人社交系统</p>
        <h1>帮派</h1>
        <div className="guild-cover-badge">优化</div>
        <p className="guild-cover-en">GUILD SYSTEM · UI / UX REDESIGN</p>
        <GuildSeal />
      </section>

      <section className="guild-section guild-before">
        <Header
          no="00"
          eyebrow="BEFORE · 为什么要重做"
          title="旧版体验不足 · 全局盘点"
          desc="优化从「看清旧版的问题」开始。旧版帮派把信息摊在割裂页签里、状态藏在二级菜单中，且没有帮派之间的正式关系。"
        />
        <div className="guild-issue-grid">
          {oldIssues.map(([no, title, text, image]) => (
            <article key={title} className="guild-issue-card">
              <div className="guild-issue-shot"><Shot src={image} alt={title} /></div>
              <i>{no}</i>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="guild-issue-card guild-empty-card">
            <i>9</i>
            <strong>无旧版</strong>
            <h3>帮派外交（新增）</h3>
            <p>旧版没有帮派之间的正式关系，社交止步于个人好友，无法形成组织荣誉与群体对抗。</p>
          </article>
        </div>
        <div className="guild-summary red">
          旧版把信息「散」在多页，把状态「藏」进二级，把关系「缺」成空白。优化的目标不是修一页，而是重新建立玩家愿意为帮停留的完整组织心流。
        </div>
      </section>

      <section className="guild-section guild-architecture">
        <Header
          no="01"
          eyebrow="INFORMATION ARCHITECTURE · 一座帮派的六个房间"
          title="系统架构"
          desc="帮派系统把「入会—运营—福利」六个界面做易用性优化；帮派外交在其上新增一条以帮派为单位的社交主线。"
        />
        <div className="guild-flow-map">
          <div className="guild-arch-entry">主界面 · 帮派入口</div>
          <div className="guild-arch-entry-line" aria-hidden="true" />

          <div className="guild-arch-decision">
            <div className="guild-arch-decision-diamond" aria-hidden="true" />
            <span>已入帮派？</span>
          </div>

          <div className="guild-arch-no-line" aria-hidden="true" />
          <div className="guild-arch-no-label">否</div>
          <div className="guild-arch-join-card">
            <strong>无帮派界面</strong>
            <p>帮派列表 · 搜索 ID</p>
            <p>创建帮派 · 快速加入 · 申请加入</p>
          </div>

          <div className="guild-arch-yes-line" aria-hidden="true" />
          <div className="guild-arch-yes-label">是</div>
          <div className="guild-arch-hub">
            <div className="guild-arch-hub-core">帮</div>
            <span>帮派主界面</span>
          </div>
          <div className="guild-arch-hub-branch" aria-hidden="true" />
          <div className="guild-arch-hub-spine" aria-hidden="true" />

          <div className="guild-arch-modules">
            {architectureModules.map((item) => (
              <article
                key={item.title}
                className={item.tag === '新增' ? 'new' : ''}
                style={{ '--top': `${item.top}px`, '--desc-width': `${item.descWidth}px` } as CSSProperties}
              >
                <div className="guild-arch-module-line" aria-hidden="true" />
                <div className="guild-arch-module-card">
                  <b>{item.no}</b>
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
                <p>{item.desc}</p>
                {item.chip ? <div className="guild-arch-chip">{item.chip}</div> : null}
              </article>
            ))}
          </div>

          <div className="guild-arch-summary">
            <h3>两条主线，一个目标：让帮派「值得待下去」</h3>
            <div className="guild-arch-summary-grid">
              <article>
                <i className="gold" />
                <div>
                  <h4>优化主线</h4>
                  <p>把分散、难读的界面整合清楚 —— 降低留在帮派里的操作与认知成本。</p>
                </div>
              </article>
              <article>
                <i className="teal" />
                <div>
                  <h4>新增主线</h4>
                  <p>用友好 / 敌对关系把个人留存升级为「帮派荣誉」与「群体对抗」。</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="guild-section guild-goals guild-flow-exact">
        <Header
          no="02"
          eyebrow="INFORMATION ARCHITECTURE · 一次帮派日常的情绪节奏"
          title="系统流程"
          desc="双角色旅程 · 成员与帮主走的是两条路"
        />
        <div className="guild-flow-stage">
          <div className="guild-flow-role member">普通成员</div>
          <div className="guild-flow-role manager">管理者</div>
          <span className="guild-flow-subrole">帮主 / 副帮主</span>

          <div className="guild-flow-daily-line" aria-hidden="true"><span>↻ 每日循环</span></div>
          <span className="guild-flow-daily-arrow" aria-hidden="true">▼</span>
          <div className="guild-flow-manager-loop" aria-hidden="true"><span>管理闭环</span></div>
          <div className="guild-flow-fund-line" aria-hidden="true"><span>▼</span><b>帮派资金流入</b></div>
          <div className="guild-flow-benefit-line" aria-hidden="true"><span>▲</span><b>受益</b></div>

          {memberFlow.map(([no, title, desc], index) => (
            <article
              key={title}
              className={`guild-flow-node member${index === memberFlow.length - 1 ? ' last' : ''}`}
              style={{ left: `${267 + index * 190}px`, top: '449px' } as CSSProperties}
            >
              <b>{no}</b>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
          {managerFlow.map(([no, title, desc], index) => (
            <article
              key={title}
              className={`guild-flow-node manager${index === managerFlow.length - 1 ? ' last' : ''}`}
              style={{ left: `${297 + index * 220}px`, top: '689px' } as CSSProperties}
            >
              <b>{no}</b>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
          <div className="guild-flow-management">
            <h3>管理减负</h3>
            <p>批量操作贯穿管理旅程：</p>
            <div>
              {['处 理', '一键清除', '全部忽略', '同 意'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <strong>高频审批从逐条点击，变成一次点击。</strong>
          </div>
        </div>
      </section>

      <FigmaExactDetail
        no="03"
        eyebrow="JOIN A GUILD · 帮派系统"
        title="无帮派 · 找帮 / 建帮 / 入帮"
        desc="没帮派时第一件事是「挑一个帮」。交互稿把帮派列表做成可排序榜单，右侧实时预览帮派信息与加入门槛，底部三种入会方式各取所需。"
        image={guildAssets.joinUi}
        caption="▲ 帮派列表 / 无帮派界面（交互稿）"
        notes={joinNotes}
        principles={[
          { no: '01', title: '决策前置', body: '把关键属性和加入门槛直接摆在选择页，让玩家看清再入会。' },
          { no: '02', title: '识别而非回忆', body: '排序榜单加选中联动，靠识别比较各帮优劣，而不是记忆来回切页。' },
          { no: '03', title: '多路径满足', body: '快速加入服务“随便找个帮”，申请加入服务“我要进这个帮”。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ①"
        solution="旧版列表无排序、信息要逐个点开 —— 新版用「可排序榜单 + 右栏实时预览 + 门槛外显」把挑帮→看帮→入帮收进一屏。"
      />

      <FigmaExactDetail
        no="04"
        eyebrow="CREATE A GUILD · 帮派系统"
        title="创建帮派 · 命名 / 宣言"
        desc="创建帮派时最重要的是把身份一次定清楚：帮徽、帮名、宣言与创建动作分别落在稳定位置，减少玩家犹豫。"
        image={guildAssets.createUi}
        caption="▲ 创建帮派界面（交互稿）"
        notes={createNotes}
        principles={[
          { no: '01', title: '费茨定律', body: '把帮徽 / 宣言这种需要频繁操作修改的控件放置在屏幕两侧，容易操作。' },
          { no: '02', title: '奇数法则', body: '把低频但重要的帮徽展示、命名、创建按钮放在一组的中心位置来强调它们。' },
          { no: '03', title: '留白效应', body: '从拥挤弹窗改为全屏布局，让每块信息都更容易被看清。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ①"
        solution="旧版有重复信息，信息过于密集 —— 新版用全屏把信息排布进行简化，空间离屏幕两侧更近，更容易操作选择，减少创建帮派的犹豫时间。"
      />

      <FigmaExactDetail
        no="05"
        eyebrow="GUILD HOME · 帮派系统"
        title="帮派主界面 · 信息聚合"
        desc="进帮派第一屏：身份、家底、本周活跃、可做的事全部聚到一屏。交互稿把活跃度做成「阶梯宝箱」，让贡献变成看得见的进度与攀比。"
        image={guildAssets.infoUi}
        caption="▲ 帮派主界面 · 基本信息（交互稿）"
        notes={homeNotes}
        principles={[
          { no: '01', title: '信息聚合', body: '一屏掌握帮派状态，减少页签跳转的认知与操作成本（Aggregation）。' },
          { no: '02', title: '状态可见性', body: '活动可领取 / 未达成写在卡面，符合「系统状态始终可见」启发式。' },
          { no: '03', title: '社会比较', body: '活跃度阶梯 + 周排名，用进度与攀比把「活跃」变成持续正反馈。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ②"
        solution="旧版信息分散在多页签、活动状态藏在二级 —— 新版把「身份 / 家底 / 活跃 / 待办」收进一屏，并用活跃度阶梯把贡献可视化。"
      />

      <FigmaStackDetail
        no="06"
        eyebrow="MEMBERS & RANKS · 帮派系统 ③"
        title="帮派成员 · 编制与职位"
        desc="谁在帮、谁管事、谁在申请。交互稿把成员管理拆成「信息 / 职位 / 申请」三页签，职位页用一张矩阵把编制名额与任命一次看全。"
        variant="two"
        shots={[
          { image: guildAssets.memberInfoUi, caption: '▲ 成员信息矩阵（交互稿）', top: 358 },
          { image: guildAssets.memberRankUi, caption: '▲ 成员职位矩阵（交互稿）', top: 871 },
        ]}
        notes={memberNotes}
        principles={[
          { no: '01', title: '矩阵化管理', body: '成员×职位做成一张表，编制名额与任命状态同屏，省去逐人翻查。' },
          { no: '02', title: '约束可见', body: '0/1、2/5 把名额上限写在表头，任命前就知道还能放几个。' },
          { no: '03', title: '职责分流', body: '信息/职位/申请三页签对应「了解—授权—准入」三件不同的事。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ③"
        solution="旧版成员/职位/日志/申请四界面割裂、任命逐人开菜单 —— 新版一张职位矩阵把编制摊开：名额写进表头、单选即任命、贡献可排序。"
      />

      <FigmaExactDetail
        no="07"
        eyebrow="GUILD ACTIVITIES · 帮派系统 ④"
        title="帮派活动 · 日程与活跃"
        desc="帮派为什么值得每天上线？交互稿用「列表 + 详情」的主从布局：左侧列出活动与开放状态，右侧写清条件、规则与奖励 —— 何时、做什么、要什么一眼看懂。"
        image={guildAssets.activityUi}
        caption="▲ 帮派活动 · 列表+详情（交互稿）"
        notes={activityNotes}
        principles={[
          { no: '01', title: '主从布局', body: '左列表选择、右详情展开，浏览与细读分区，避免层层弹窗跳转。' },
          { no: '02', title: '状态可见', body: '开放时间与参与状态写进列表项，符合「系统状态可见」启发式。' },
          { no: '03', title: '门槛前置', body: '参加条件先于行动呈现，减少「点进去才发现不符合」的挫败。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ④"
        solution="旧版活动是纯文字列表、无状态无时间窗 —— 新版列表带开放时间与状态，右侧详情写清条件/规则/奖励，把活动变成有节奏的约定。"
      />

      <FigmaExactDetail
        no="08"
        eyebrow="GUILD BASE · 帮派系统 ⑤"
        title="帮派驻地 · 看得见的家"
        desc="帮派需要一个「物理的家」。交互稿把建设做成驻地地图：建筑即功能、点击即详情，主厅决定全帮上限，升级条件清楚外显 —— 共同经营出归属感。"
        image={guildAssets.baseUi}
        caption="▲ 帮派驻地 · 建筑地图（交互稿）"
        notes={baseNotes}
        principles={[
          { no: '01', title: '空间隐喻', body: '把抽象的「帮派建设」做成可游走的地图，建筑=功能，养成有了「场所感」。' },
          { no: '02', title: '目标可视', body: '升级条件与进度直接画在详情卡，玩家清楚「还差多少、为什么升」。' },
          { no: '03', title: '整体绑定', body: '主厅等级决定全帮上限，把个人贡献与帮派成长绑成共同目标。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ⑤"
        solution="旧版建设以纯数值列表呈现、缺少「家」的空间感 —— 新版用建筑地图让每一次升级都看得见、走得进，并以主厅把全帮成长绑在一起。"
      />

      <FigmaStackDetail
        no="09"
        eyebrow="CONTRIBUTION & PERKS · 帮派系统 ⑥"
        title="帮派福利 · 付出与回报"
        desc="帮派经济的发动机。交互稿把捐献做成「双向回报」：个人换帮贡、帮派涨资金；三档分层各取所需，帮贡再回流到打造/修炼/商店 —— 形成闭环。"
        variant="three"
        shots={[
          { image: guildAssets.welfareUi, caption: '▲ 帮派福利（交互稿）', top: 358 },
          { image: guildAssets.donateUi, caption: '▲ 帮派捐献（交互稿）', top: 865 },
          { image: guildAssets.practiceUi, caption: '▲ 帮派技能修炼（交互稿）', top: 1375 },
        ]}
        notes={welfareNotes}
        principles={[
          { no: '01', title: '激励对齐', body: '个人帮贡与帮派资金同步增长，让「为自己」与「为帮派」指向同一个动作。' },
          { no: '02', title: '分层满足', body: '三档捐献覆盖轻度到重度投入，人人都能找到合适的参与档位。' },
          { no: '03', title: '闭环回流', body: '帮贡→打造/修炼/商店，贡献能换成实在收益，付出循环跑得通。' },
        ]}
        solutionTitle="↳ 解决旧版痛点 ⑥"
        solution="旧版捐献单向扣资源、回报不直观 —— 新版把「付出—帮贡—消费」三段连成可见闭环：双向回报 + 三档分层 + 帮贡用途明示。"
      />

      <DiplomacyExactSection />

      <DiplomacyDetailSection
        no="11"
        tone="ally"
        title="友好帮派 · 唯一的盟约"
        desc="友好与敌对共用一个外交界面，用页签切换。友好帮派上限只有 0/1 —— 唯一性让这段同盟变成郑重选择；结盟走「申请—同意」双向流程，并提供保护模式兜底。"
        image={guildAssets.diplomacyAllyUi}
        caption="▲ 友好帮派 · 一级界面（交互稿 · 空态）"
        notes={allyNotes}
        principles={[
          { no: '01', title: '稀缺即珍贵', body: '0/1 的唯一名额把结盟变成稀缺资源，迫使帮派慎重择友、长期经营。' },
          { no: '02', title: '双向共识', body: '申请—同意确保关系由双方达成，比单方指定更稳固、更有承诺感。' },
          { no: '03', title: '降低摩擦', body: '保护模式 + 候选过滤为同盟兜底，让合作安心、添加不踩坑。' },
        ]}
        solutionTitle="↳ 填补旧版空白"
        solution="旧版帮派之间没有正式关系、社交止于个人好友 —— 友好帮派用「唯一盟约 + 双向同意 + 保护模式」把社交单位从「人」升级为「帮」。"
      />

      <DiplomacyDetailSection
        no="12"
        tone="enemy"
        title="敌对帮派 · 结下的仇"
        desc="与结盟相反，敌对走开放路线：上限 0/99、单方面即可宣战。最关键的是「仅对方可解除」—— 你结下的仇自己撤不掉，对抗一旦开始就带着压力。"
        image={guildAssets.diplomacyEnemyUi}
        caption="▲ 敌对帮派 · 一级界面（交互稿）"
        notes={enemyNotes}
        principles={[
          { no: '01', title: '不对称设计', body: '「仅对方可解除」让仇怨无法自行抹去，把一次宣战变成持续的竞争压力。' },
          { no: '02', title: '开放对抗', body: '0/99 的高上限与单向添加，鼓励帮派间频繁、低门槛地结仇与博弈。' },
          { no: '03', title: '色彩即情绪', body: '敌对朱红 vs 友好青蓝，用颜色把抽象关系翻译成直觉化的敌我感。' },
        ]}
      />

      <PlayerFlowExactSection />
      <ArtDirectionExactSection />
      <FinalVisualsExactSection />
    </div>
  );
}
