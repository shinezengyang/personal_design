import './GuildSystemExactCase.css';
import type { CSSProperties, ReactNode } from 'react';

const guildAssets = {
  coverOrbitOuter: '/assets/qingyu-guild-cover/orbit-outer.svg',
  coverOrbitMiddle: '/assets/qingyu-guild-cover/orbit-middle.svg',
  coverOrbitInner: '/assets/qingyu-guild-cover/orbit-inner.webp',
  coverOrbitLeft: '/assets/qingyu-guild-cover/orbit-left.svg',
  coverDotTeal: '/assets/qingyu-guild-cover/dot-teal.svg',
  coverDotRed: '/assets/qingyu-guild-cover/dot-red.svg',
  coverStar: '/assets/qingyu-guild-cover/star.svg',
  oldInfo: 'https://www.figma.com/api/mcp/asset/011df3b3-d456-419a-90a0-1ff050969cd3',
  oldCreate: 'https://www.figma.com/api/mcp/asset/038afd9d-6e27-4ac6-a399-f6f604f7cd6d',
  oldMain: 'https://www.figma.com/api/mcp/asset/ee5c071c-e478-4116-8f7b-5315eaa761ea',
  oldMember: 'https://www.figma.com/api/mcp/asset/52aa530e-76d2-4810-ac8c-391f0a8a4daf',
  oldActivity: 'https://www.figma.com/api/mcp/asset/535ddcbf-9a0d-44e6-acd0-d2e8e3c61500',
  oldHome: 'https://www.figma.com/api/mcp/asset/044d3384-06cb-481d-9c58-07d08efcb044',
  oldDonate: 'https://www.figma.com/api/mcp/asset/5affa367-9f1c-485e-aca9-f1087b3df10e',
  oldPractice: 'https://www.figma.com/api/mcp/asset/a75ccfab-34d1-4a9b-baca-7bea42c34087',
  styleA: 'https://www.figma.com/api/mcp/asset/50e36cdc-f53c-4315-a3b4-576ebc3c6f68',
  styleB: 'https://www.figma.com/api/mcp/asset/c1a624f8-bf41-4cfb-aafe-a46e91ecd8b7',
  styleC: 'https://www.figma.com/api/mcp/asset/7d26dae7-1973-4c22-b77c-9d0856ca1624',
  finalList: 'https://www.figma.com/api/mcp/asset/70324221-22aa-4552-974a-2ae32119450e',
  finalMember: 'https://www.figma.com/api/mcp/asset/abf94b16-149a-4008-a099-34e731022019',
  finalActivity: 'https://www.figma.com/api/mcp/asset/b7cedc20-c403-4a22-af71-e4a0c251dde8',
  finalHome: 'https://www.figma.com/api/mcp/asset/68f3a293-1bd7-4be2-80d2-521b4679fef6',
  finalDonate: 'https://www.figma.com/api/mcp/asset/e6047caf-2955-4431-bbbc-0d9867fc41a2',
  finalWelfare: 'https://www.figma.com/api/mcp/asset/cb502618-b22e-48f2-88f2-1213f1647349',
  finalPractice: 'https://www.figma.com/api/mcp/asset/6f30f23d-826e-49b2-acac-13d13cdbdaa7',
  finalAlly: 'https://www.figma.com/api/mcp/asset/683429f4-6266-412c-8683-932402f2132f',
  finalEnemy: 'https://www.figma.com/api/mcp/asset/290975a1-064f-4289-bff6-91e644b3cc3b',
  joinUi: '/assets/qingyu-guild-exact/join-ui.webp',
  createUi: '/assets/qingyu-guild-exact/create-ui.webp',
  infoUi: '/assets/qingyu-guild-exact/info-ui.webp',
  memberInfoUi: '/assets/qingyu-guild-exact/member-info-ui.webp',
  memberRankUi: '/assets/qingyu-guild-exact/member-rank-ui.webp',
  activityUi: '/assets/qingyu-guild-exact/activity-ui.webp',
  baseUi: '/assets/qingyu-guild-exact/base-ui.webp',
  welfareUi: '/assets/qingyu-guild-exact/welfare-ui.webp',
  donateUi: '/assets/qingyu-guild-exact/donate-ui.webp',
  practiceUi: '/assets/qingyu-guild-exact/practice-ui.webp',
  diplomacyAllyUi: '/assets/qingyu-guild-exact/diplomacy-overview-ui.webp',
  diplomacyEnemyUi: '/assets/qingyu-guild-exact/diplomacy-enemy-ui.webp',
} as const;

const oldIssues = [
  ['1', '无帮派界面 · 帮派信息', '帮派列表无排序，帮主与入帮门槛都要点开后才知道。', guildAssets.oldInfo],
  ['2', '创建帮派 · 帮派信息设置', '命名、帮徽、宣言堆在一个小弹窗里，重复信息多，留白不足。', guildAssets.oldCreate],
  ['3', '基本信息 · 主界面', '身份、活跃、排行、活动入口分散在多个页签里，缺少主场景聚合。', guildAssets.oldMain],
  ['4', '成员 · 职位', '成员、职位、申请、日志彼此割裂，任命要逐个打开菜单。', guildAssets.oldMember],
  ['5', '帮派活动', '活动只有文字列表，没有时间、状态和奖励的直观对照。', guildAssets.oldActivity],
  ['6', '驻地 · 升级信息', '建设是纯数值与纯列表，缺少空间感，也看不出共同经营的目标。', guildAssets.oldHome],
  ['7', '福利 · 捐献', '捐献像单向扣钱，帮贡用途不直观，付出与回报链路不完整。', guildAssets.oldDonate],
  ['8', '帮派修炼 · 学习技能', '成长路线和升级收益不清晰，玩家很难判断优先顺序。', guildAssets.oldPractice],
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

const designGoals = [
  ['散', '信息聚合', '把身份、活跃、活动、福利和建设收进稳定入口。'],
  ['藏', '状态外显', '开放时间、可参加、可领取、可升级都直接写给玩家看。'],
  ['慢', '路径压缩', '常用动作前置，减少二级页签和重复确认。'],
  ['缺', '关系补全', '新增外交系统，把帮派从成员容器升级成组织关系。'],
] as const;

const finalGallery = [
  ['帮派列表', 'GUILD', guildAssets.finalList, 'gold'],
  ['帮派主界面', 'FEATURED', guildAssets.finalMember, 'gold'],
  ['帮派成员', 'GUILD', guildAssets.finalMember, 'gold'],
  ['帮派活动', 'GUILD', guildAssets.finalActivity, 'gold'],
  ['帮派驻地', 'GUILD', guildAssets.finalHome, 'gold'],
  ['帮派捐献', 'GUILD', guildAssets.finalDonate, 'gold'],
  ['帮派福利', 'GUILD', guildAssets.finalWelfare, 'gold'],
  ['帮派修炼', 'GUILD', guildAssets.finalPractice, 'gold'],
  ['友好帮派 · 结盟', 'ALLY', guildAssets.finalAlly, 'teal'],
  ['敌对帮派 · 宣战', 'ENEMY', guildAssets.finalEnemy, 'red'],
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
  return <img src={src} alt={alt} loading="lazy" decoding="async" />;
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
            <img key={dot} className={`star-${dot}`} src={guildAssets.coverStar} alt="" />
          ))}
        </div>
        <img className="guild-cover-orbit orbit-left" src={guildAssets.coverOrbitLeft} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-outer" src={guildAssets.coverOrbitOuter} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-middle" src={guildAssets.coverOrbitMiddle} alt="" aria-hidden="true" />
        <img className="guild-cover-orbit orbit-inner" src={guildAssets.coverOrbitInner} alt="" aria-hidden="true" />
        <img className="guild-cover-dot dot-teal" src={guildAssets.coverDotTeal} alt="" aria-hidden="true" />
        <img className="guild-cover-dot dot-red" src={guildAssets.coverDotRed} alt="" aria-hidden="true" />
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

      <section className="guild-section guild-goals">
        <Header
          no="02"
          eyebrow="GOALS · 从功能集合到组织归属"
          title="设计目标"
          desc="帮派系统不是单页优化，而是把玩家加入、经营、贡献、合作、对抗的连续心流重新串起来。"
        />
        <div className="guild-goal-row">
          {designGoals.map(([glyph, title, text]) => (
            <article key={title}>
              <b>{glyph}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="guild-journey">
          {['发现帮派', '申请加入', '看懂组织', '参与活动', '贡献成长', '参与治理', '帮派外交'].map((item, index) => (
            <span key={item} style={{ '--i': index } as CSSProperties}>{item}</span>
          ))}
        </div>
      </section>

      <AnnotatedSection
        no="03"
        eyebrow="JOIN A GUILD · 帮派系统"
        title="无帮派 · 找帮 / 建帮 / 入帮"
        sectionClassName="guild-short-detail"
        notes={[
          { title: '可排序榜单', body: '名称 / 等级 / 人数 / 威望列头可点排序，玩家能按目标快速筛帮。', align: 'left' },
          { title: '选中态高亮', body: '高亮当前选中行，左右信息联动，不必在列表和详情间来回跳页。', align: 'left' },
          { title: '三种入会', body: '创建帮派、快速加入、申请加入并列，让不同心态的玩家都能直接行动。', align: 'left' },
          { title: '帮派信息预览', body: '右栏同步展示帮主、副帮主与招募宣言，先看人再决定。', align: 'right' },
          { title: '详情按钮', body: '点击即可查看帮主和副帮主详情，把组织判断前置到选择页。', align: 'right' },
          { title: '加入门槛外显', body: '等级与修为限制直接写明，不达标提前知道，减少无效申请。', align: 'right' },
        ]}
        principles={[
          { no: '01', title: '决策前置', body: '把关键属性和加入门槛直接摆在选择页，让玩家看清再入会。' },
          { no: '02', title: '识别而非回忆', body: '排序榜单加选中联动，靠识别比较各帮优劣，而不是记忆来回切页。' },
          { no: '03', title: '多路径满足', body: '快速加入服务“随便找个帮”，申请加入服务“我要进这个帮”。' },
        ]}
        solution="↳ 解决旧版痛点 ①：旧版列表无排序、信息要逐个点开；新版用「可排序榜单 + 右栏实时预览 + 门槛外显」把挑帮→看帮→入帮收进一屏。"
      >
        <div className="guild-single-shot">
          <Shot src={guildAssets.joinUi} alt="无帮派 · 招募入会交互稿" />
          <span>▲ 帮派列表 / 无帮派界面（交互稿）</span>
        </div>
      </AnnotatedSection>

      <AnnotatedSection
        no="04"
        eyebrow="CREATE A GUILD · 帮派系统"
        title="创建帮派 · 命名 / 宣言"
        sectionClassName="guild-short-detail"
        notes={[
          { title: '初始帮徽选择', body: '帮徽列表靠左排布，方便连贯点击和横向比较。', align: 'left' },
          { title: '创建帮派按钮', body: '最后一步落在视觉中心下方，让完成动作足够显眼。', align: 'left' },
          { title: '招募宣言', body: '宣言输入放在右侧信息区，写内容时视线不被其它选项干扰。', align: 'right' },
          { title: '帮派命名', body: '命名与核心识别信息放在中心，强调这一步是身份定义。', align: 'right' },
        ]}
        principles={[
          { no: '01', title: '费茨定律', body: '把需要频繁修改的帮徽与宣言放在两侧近手位置，减少操作成本。' },
          { no: '02', title: '奇数法则', body: '把重要但低频的信息放到视觉中心，让命名、帮徽与创建动作形成核心组。' },
          { no: '03', title: '留白效应', body: '从拥挤弹窗改为全屏布局，让每块信息都更容易被看清。' },
        ]}
        solution="↳ 解决旧版痛点 ②：旧版信息重复且过密；新版用全屏布局重组命名、帮徽、宣言与创建动作，减少创建帮派的犹豫时间。"
      >
        <div className="guild-single-shot">
          <Shot src={guildAssets.createUi} alt="创建帮派交互稿" />
          <span>▲ 创建帮派界面（交互稿）</span>
        </div>
      </AnnotatedSection>

      <AnnotatedSection
        no="05"
        eyebrow="GUILD HOME · 帮派系统"
        title="帮派主界面 · 信息聚合"
        sectionClassName="guild-short-detail"
        notes={[
          { title: '帮派身份区', body: '帮徽、帮主、等级、成员、威望、资金同屏展示，先把“这是谁的家”立住。', align: 'left' },
          { title: '宣言 / 公告双签', body: '对外招募与对内通知并置，底部保留一键发送入口。', align: 'left' },
          { title: '活跃度阶梯 · 宝箱', body: '50→250 阶梯宝箱与周活跃排名，把活跃做成可攀爬的目标。', align: 'right' },
          { title: '功能页签导航', body: '成员、活动、驻地、福利等主功能常驻右栏，一步可达。', align: 'right' },
          { title: '活动 · 状态外显', body: '可领取、未达成直接写在卡上，不点开就知道下一步做什么。', align: 'right' },
        ]}
        principles={[
          { no: '01', title: '信息聚合', body: '一屏掌握帮派状态，减少页签跳转和认知成本。' },
          { no: '02', title: '状态可见性', body: '活动卡直接写出可领与未达成，符合系统状态始终可见。' },
          { no: '03', title: '社会比较', body: '活跃度阶梯与周排名叠加，让贡献变成持续正反馈。' },
        ]}
        solution="↳ 解决旧版痛点 ③：旧版信息分散在多页签、活动状态藏在二级；新版把「身份 / 家底 / 活跃 / 待办」收进一屏，并用活跃度阶梯把贡献可视化。"
      >
        <div className="guild-single-shot">
          <Shot src={guildAssets.infoUi} alt="帮派主界面交互稿" />
          <span>▲ 帮派主界面 · 基本信息（交互稿）</span>
        </div>
      </AnnotatedSection>

      <section className="guild-section guild-member-code">
        <Header
          no="06"
          eyebrow="MEMBERS & RANKS · 帮派系统 ③"
          title="帮派成员 · 编制与职位"
          desc="谁在帮、谁管事、谁在申请。交互稿把成员管理拆成「信息 / 职位 / 申请」三页签，职位页用一张矩阵把编制名额与任命一次看全。"
        />
        <div className="guild-double-stack">
          <div className="guild-stack-shot">
            <Shot src={guildAssets.memberInfoUi} alt="成员信息矩阵交互稿" />
            <span>▲ 成员信息矩阵（交互稿）</span>
          </div>
          <div className="guild-stack-shot">
            <Shot src={guildAssets.memberRankUi} alt="成员职位矩阵交互稿" />
            <span>▲ 成员职位矩阵（交互稿）</span>
          </div>
        </div>
        <div className="guild-member-notes left">
          {[
            ['玩家自己底板显示', '自己的行与他人的行视觉区分，帮助玩家先定位自己。'],
            ['未选中玩家的底板显示', '灰阶状态保持列表秩序，不会抢走当前焦点。'],
            ['选中玩家的底板显示', '高亮当前目标，配合右侧操作形成强反馈。'],
            ['选中玩家自己的底板显示', '把“我自己”与“我当前在看谁”两种状态叠清楚。'],
            ['累积贡献可排序', '按贡献排序，谁付出多一目了然，是任命与汰换的依据。'],
            ['称谓编辑', '帮主可自定义职位称谓，强化组织身份与内部文化。'],
          ].map(([title, body]) => (
            <article key={title} className="guild-callout">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="guild-member-notes right">
          {[
            ['三页签分流', '成员信息 / 成员职位 / 申请列表各归各位，看人、任命、审批互不干扰。'],
            ['帮派社交按钮', '对同帮成员的互动动作直接沉在列表语境里，提高社交密度。'],
            ['职位编制矩阵', '帮主 0/1、副帮主 1/1、堂主 2/5、精英 3/10，名额直接写进表头。'],
            ['单选即任命', '每行每职一个圆点，点选即指派，所见即所得。'],
          ].map(([title, body]) => (
            <article key={title} className="guild-callout">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Principles
          items={[
            { no: '01', title: '矩阵化管理', body: '成员×职位做成一张表，编制名额与任命状态同屏，省去逐人翻查。' },
            { no: '02', title: '约束可见', body: '0/1、2/5 把名额上限写在表头，任命前就知道还能放几个。' },
            { no: '03', title: '职责分流', body: '信息 / 职位 / 申请三页签对应「了解—授权—准入」三件不同的事。' },
          ]}
          solution="↳ 解决旧版痛点 ④：旧版成员 / 职位 / 日志 / 申请四界面割裂、任命逐人开菜单；新版一张职位矩阵把编制摊开，名额写进表头，单选即任命。"
        />
      </section>

      <AnnotatedSection
        no="07"
        eyebrow="GUILD ACTIVITIES · 帮派系统 ④"
        title="帮派活动 · 日程与活跃"
        sectionClassName="guild-short-detail"
        notes={[
          { title: '活动列表', body: '左栏纵向罗列全部活动，选中即在右侧展开详情，结构清楚不跳页。', align: 'left' },
          { title: '开放时间外显', body: '每条活动都写明全天开启或具体时段，玩家知道何时上线最值。', align: 'left' },
          { title: '活动详情 · 规则', body: '右栏先讲清这是什么、怎么玩，再让玩家判断是否投入。', align: 'right' },
          { title: '参加条件门槛', body: '等级、次数、规模、时间四项条件前置，达不达标提前知道。', align: 'right' },
          { title: '奖励 + 参加', body: '奖励直观陈列，参加按钮收束在右下，形成决策到行动的闭环。', align: 'right' },
        ]}
        principles={[
          { no: '01', title: '主从布局', body: '左列表选择、右详情展开，浏览与细读分区，避免层层弹窗跳转。' },
          { no: '02', title: '状态可见', body: '开放时间与参与状态直接写进列表项，何时能做一眼可见。' },
          { no: '03', title: '门槛前置', body: '参加条件先于行动呈现，减少“点进去才发现不符合”的挫败。' },
        ]}
        solution="↳ 解决旧版痛点 ⑤：旧版活动是纯文字列表、无状态无时间窗；新版把开放时间、详情规则、参加条件和奖励一并前置，让活动变成有节奏的约定。"
      >
        <div className="guild-single-shot">
          <Shot src={guildAssets.activityUi} alt="帮派活动交互稿" />
          <span>▲ 帮派活动 · 列表 + 详情（交互稿）</span>
        </div>
      </AnnotatedSection>

      <AnnotatedSection
        no="08"
        eyebrow="GUILD BASE · 帮派系统 ⑤"
        title="帮派驻地 · 看得见的家"
        sectionClassName="guild-short-detail"
        notes={[
          { title: '可视化驻地地图', body: '主厅、珍宝阁、库房、武馆、试炼塔散布成一座山门，建筑就是功能。', align: 'left' },
          { title: '建筑等级标牌', body: '每栋楼直接挂出一级、二级，帮派家底强弱一眼可见。', align: 'left' },
          { title: '主厅 · 等级效果', body: '主厅决定帮派等级与成员上限，点建筑就能看升级换来什么。', align: 'right' },
          { title: '升级条件外显', body: '帮派资金进度条与达标状态直接写给玩家看，目标明确。', align: 'right' },
          { title: '升级即时反馈', body: '升级按钮收在右下，满足条件即可推进全帮的整体成长。', align: 'right' },
        ]}
        principles={[
          { no: '01', title: '空间隐喻', body: '把抽象建设做成可游走的地图，建筑 = 功能，养成有了场所感。' },
          { no: '02', title: '目标可视', body: '升级条件和进度直接画在详情卡里，玩家知道还差多少。' },
          { no: '03', title: '整体绑定', body: '主厅等级决定全帮上限，把个人贡献与帮派成长绑成共同目标。' },
        ]}
        solution="↳ 解决旧版痛点 ⑥：旧版建设是纯数值列表、缺少“家”的空间感；新版用建筑地图让每次升级都看得见、走得进，并以主厅把全帮成长绑在一起。"
      >
        <div className="guild-single-shot">
          <Shot src={guildAssets.baseUi} alt="帮派驻地交互稿" />
          <span>▲ 帮派驻地 · 建筑地图（交互稿）</span>
        </div>
      </AnnotatedSection>

      <section className="guild-section guild-welfare-code">
        <Header
          no="09"
          eyebrow="CONTRIBUTION & PERKS · 帮派系统 ⑥"
          title="帮派福利 · 付出与回报"
          desc="帮派经济的发动机。交互稿把捐献做成「双向回报」：个人换帮贡、帮派涨资金；三档分层各取所需，帮贡再回流到打造 / 修炼 / 商店，形成闭环。"
        />
        <div className="guild-triple-stack">
          <div className="guild-stack-shot">
            <Shot src={guildAssets.welfareUi} alt="帮派福利交互稿" />
            <span>▲ 帮派福利（交互稿）</span>
          </div>
          <div className="guild-stack-shot">
            <Shot src={guildAssets.donateUi} alt="帮派捐献交互稿" />
            <span>▲ 帮派捐献（交互稿）</span>
          </div>
          <div className="guild-stack-shot">
            <Shot src={guildAssets.practiceUi} alt="帮派技能修炼交互稿" />
            <span>▲ 帮派技能修炼（交互稿）</span>
          </div>
        </div>
        <div className="guild-welfare-notes left">
          {[
            ['福利玩法列表', '通过这些福利玩法获得帮贡并消耗帮贡，形成持续回流。'],
            ['捐献记录 · 社会证明', '滚动播报谁又捐了多少，用同伴行为推动跟随式贡献。'],
            ['帮贡用途闭环', '底部点明帮贡可用于打造、修炼和商店，付出有明确去处。'],
            ['帮派技能列表', '把可修炼技能排成稳定列表，活跃与成长之间关系更清楚。'],
          ].map(([title, body]) => (
            <article key={title} className="guild-callout">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="guild-welfare-notes right">
          {[
            ['三档捐献分层', '普通 / 高级 / 豪华三档，按投入意愿与回报梯度自由选择。'],
            ['双向回报', '一次捐献同时增加个人帮贡与帮派资金，利己与利帮一致。'],
            ['每日限次', '用捐献次数约束每日额度，把贡献摊成长期习惯。'],
            ['技能详情', '修炼主要服务被动属性成长，让帮贡去向更加明确。'],
            ['技能升级', '满足资源即可消耗帮贡修炼，把贡献回流到个人成长。'],
          ].map(([title, body]) => (
            <article key={title} className="guild-callout">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Principles
          items={[
            { no: '01', title: '激励对齐', body: '个人帮贡与帮派资金同步增长，让“为自己”与“为帮派”指向同一个动作。' },
            { no: '02', title: '分层满足', body: '三档捐献覆盖轻度到重度投入，人人都能找到合适的参与档位。' },
            { no: '03', title: '闭环回流', body: '帮贡流向打造、修炼和商店，贡献能换成玩家看得见的收益。' },
          ]}
          solution="↳ 解决旧版痛点 ⑦：旧版捐献单向扣资源、回报不直观；新版把「付出—帮贡—消费」三段连成可见闭环：双向回报 + 三档分层 + 帮贡用途明示。"
        />
      </section>

      <section className="guild-section guild-diplomacy-code">
        <Header
          no="10"
          eyebrow="GUILD DIPLOMACY · 新增系统"
          title="帮派外交 · 把对抗写进社交"
          desc="个人留存做到顶，就该升级为「帮派荣誉」。外交系统用一对关系 —— 友好与敌对 —— 把帮派之间的合作与对抗摆上台面。"
        />
        <div className="guild-diplomacy-summary">
          <article>
            <h3>促进群体社交</h3>
            <p>把社交单位从个人升级为帮派，结盟带来归属与协作。</p>
          </article>
          <article>
            <h3>制造竞争压力</h3>
            <p>明确敌友关系，让对抗有名有姓，激活帮派荣誉与对立情绪。</p>
          </article>
        </div>
        <div className="guild-diplomacy-panels">
          <article className="ally">
            <div className="guild-diplomacy-shot"><Shot src={guildAssets.diplomacyAllyUi} alt="友好帮派交互稿" /></div>
            <h3>友好帮派</h3>
            <span>ALLY · ALLIANCE</span>
            <ul>
              <li>0/1 唯一盟位，让结盟成为郑重选择。</li>
              <li>申请—同意双向流程，关系由双方达成。</li>
              <li>保护模式兜底，避免盟友误伤。</li>
            </ul>
          </article>
          <article className="enemy">
            <div className="guild-diplomacy-shot"><Shot src={guildAssets.diplomacyEnemyUi} alt="敌对帮派交互稿" /></div>
            <h3>敌对帮派</h3>
            <span>ENEMY · HOSTILITY</span>
            <ul>
              <li>最多 99 个敌人，可主动标记，也会被标记。</li>
              <li>仅对方可解除，让宣战具有持续压力。</li>
              <li>单向添加，降低结仇成本，提升传播速度。</li>
            </ul>
          </article>
        </div>
        <div className="guild-entry-strip">
          <article><h3>帮派外交页签</h3><p>挂在帮派主界面右栏，未开启则隐藏。</p></article>
          <article><h3>消息提醒入口</h3><p>收到友好申请时，从消息列表直达处理。</p></article>
          <article><h3>头顶敌友标识</h3><p>把关系带到大世界，野外相遇即知敌友。</p></article>
        </div>
      </section>

      <section className="guild-section guild-psychology">
        <Header
          no="11"
          eyebrow="PLAYER FLOW · 从加入到为帮而战"
          title="帮派心流体验"
          desc="重做后的帮派把个人操作转化为组织归属：先降低加入门槛，再让贡献、治理和外交持续提供留存理由。"
        />
        <div className="guild-curve">
          {['加入', '识别', '参与', '贡献', '治理', '结盟', '宣战'].map((label, index) => (
            <article key={label} style={{ '--i': index } as CSSProperties}>
              <b>{label}</b>
              <i />
            </article>
          ))}
        </div>
        <div className="guild-principles">
          {[
            ['状态可见性', '把开放、可领、可升级、可宣战放在行动附近，让玩家少猜一步。'],
            ['识别优于记忆', '用固定模块和色彩编码降低跨页寻找成本。'],
            ['社交认同', '把帮派贡献和帮派关系转化为可展示身份。'],
            ['目标梯度', '短期活动、每日福利、长期修炼与外交共同构成长线目标。'],
          ].map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="guild-section guild-art">
        <Header
          no="14"
          eyebrow="ART DIRECTION · 界面美术为何这样设计"
          title="美术风格参考"
          desc="帮派与外交界面的美术，本质是把「组织感」与「敌友感」翻译成可感知的视觉。"
        />
        <div className="guild-art-refs">
          {[guildAssets.styleA, guildAssets.styleB, guildAssets.styleC].map((src, index) => (
            <article key={src}>
              <Shot src={src} alt={`竞品美术参考 ${index + 1}`} />
              <h3>{['梦幻西游手游 · 帮派活动', '天涯明月刀 · 名望等级', '天涯明月刀 · 帮派联赛'][index]}</h3>
              <p>{['活动条件、奖励与底部活跃度刻度一屏讲清。', '每一阶一只宝箱，把长目标切成短冲刺。', '暗底水墨、集体积分与下阶奖励强化组织目标。'][index]}</p>
            </article>
          ))}
        </div>
        <div className="guild-palette">
          {[
            ['墨蓝描金', '#0e1420', '#d7a94b'],
            ['立绘点睛', '#172133', '#edf0ea'],
            ['朱红敌', '#d8504a', '#edf0ea'],
            ['青蓝友', '#3fb6a0', '#edf0ea'],
          ].map(([name, a, b]) => (
            <article key={name}>
              <span style={{ background: a }} />
              <span style={{ background: b }} />
              <b>{name}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="guild-section guild-final">
        <Header
          no="15"
          eyebrow="FINAL VISUALS · 交互稿落地为效果图"
          title="视觉稿展示"
          desc="前面用交互稿讲清「为什么这样设计」；这里把同一套结构落地成最终美术效果图。"
        />
        <div className="guild-final-gallery">
          {finalGallery.map(([title, tag, src, tone]) => (
            <article key={`${title}-${src}`} className={`tone-${tone}`}>
              <div><Shot src={src} alt={title} /></div>
              <h3>{title}</h3>
              <span>{tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="guild-back">
        <GuildSeal />
        <div className="guild-back-line" />
        <p>THANK YOU FOR WATCHING</p>
        <h2>为帮而战</h2>
        <h3>信息更清、关系更深 —— 让玩家从「加入一个帮」到「为一个帮停留」。</h3>
        <span>帮派系统把「入会—运营—福利」整理清楚，帮派外交再补上「合作与对抗」—— 一套系统，把个人留存升级为帮派荣誉。</span>
      </section>
    </div>
  );
}
