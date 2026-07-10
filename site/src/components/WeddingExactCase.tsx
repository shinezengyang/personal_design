import './WeddingExactCase.css';

const assets = {
  cover: 'https://www.figma.com/api/mcp/asset/c02d60ac-db52-4956-9d83-1923e16035b7',
  coverOverlay: 'https://www.figma.com/api/mcp/asset/aa76e568-2094-4e7e-a645-33cd1cd7cd93',
  schedule: 'https://www.figma.com/api/mcp/asset/60e7e945-4489-43d5-99bf-1ae32159c05b',
  invite: 'https://www.figma.com/api/mcp/asset/f8c2b3b6-a783-4f96-a374-12cfd5945046',
  scene: 'https://www.figma.com/api/mcp/asset/273ea912-e0fc-4b21-aec5-57ac0803e559',
  bless: 'https://www.figma.com/api/mcp/asset/7aafa71f-6a49-446d-b90b-a38a6bf105c3',
  stone: 'https://www.figma.com/api/mcp/asset/95b1983c-0fa0-406b-9e6e-4b37dd5eaca0',
  ref1: 'https://www.figma.com/api/mcp/asset/69b8d5cf-2bf1-4a2c-b04d-2bd25c6470c2',
  ref2: 'https://www.figma.com/api/mcp/asset/ccaf42f6-f55d-4ebd-a2a0-d2bff7ae1c4c',
  ref3: 'https://www.figma.com/api/mcp/asset/4e7685ff-52a8-4dd9-a889-d2858464bb1b',
};

type Accent = 'gold' | 'orange' | 'rose' | 'purple' | 'cyan';

function Img({ src, className = '', alt = '' }: { src: string; className?: string; alt?: string }) {
  return <img src={src} className={className} alt={alt} loading="lazy" decoding="async" />;
}

function SectionHead({ eyebrow, title, desc, dark = false }: { eyebrow: string; title: string; desc: string; dark?: boolean }) {
  return (
    <header className={`we-head ${dark ? 'dark' : ''}`}>
      <i />
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{desc}</span>
    </header>
  );
}

function NumberPin({ n, x, y, dark = false }: { n: number; x: number; y: number; dark?: boolean }) {
  return <b className={`we-pin ${dark ? 'dark' : ''}`} style={{ left: x, top: y }}>{n}</b>;
}

function ReasonCard({ title, text, tone = 'rose' }: { title: string; text: string; tone?: Accent }) {
  return (
    <article className={`we-reason ${tone}`}>
      <i />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PointList({ title, items, dark = false }: { title: string; items: string[]; dark?: boolean }) {
  return (
    <aside className={`we-point-list ${dark ? 'dark' : ''}`}>
      <h3>{title}</h3>
      {items.map((item, index) => (
        <div className="we-point" key={item}>
          <b>{index + 1}</b>
          <span>{item.split('｜')[0]}</span>
          <p>{item.split('｜')[1]}</p>
        </div>
      ))}
    </aside>
  );
}

function WhyBlock({ title, points, dark = true }: { title: string; points: Array<[string, string, Accent]>; dark?: boolean }) {
  return (
    <div className={`we-why ${dark ? 'dark' : 'light'}`}>
      <i />
      <em>为什么这样设计 · WHY IT WORKS</em>
      <h3>{title}</h3>
      <div className="we-why-grid">
        {points.map(([name, body, tone]) => (
          <ReasonCard key={name} title={name} text={body} tone={tone} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ title, body, tone, icon }: { title: string; body: string; tone: Accent; icon: string }) {
  return (
    <article className={`we-feature ${tone}`}>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function SystemNode({ no, title, desc, tone, icon }: { no: string; title: string; desc: string; tone: Accent; icon: string }) {
  return (
    <article className={`we-system-node ${tone}`}>
      <i>{icon}</i>
      <em>{no}</em>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

function ScreenSection({
  eyebrow,
  title,
  desc,
  image,
  imageClass = '',
  caption,
  pins,
  pointsTitle,
  points,
  whyTitle,
  whyPoints,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  imageClass?: string;
  caption?: string;
  pins: Array<[number, number, number]>;
  pointsTitle: string;
  points: string[];
  whyTitle: string;
  whyPoints: Array<[string, string, Accent]>;
  dark?: boolean;
}) {
  return (
    <section className={`we-section we-screen-section ${dark ? 'dark' : ''}`}>
      <SectionHead eyebrow={eyebrow} title={title} desc={desc} dark={dark} />
      <div className="we-shot-wrap">
        <Img src={image} className={`we-shot ${imageClass}`} />
        {pins.map(([n, x, y]) => <NumberPin key={n} n={n} x={x} y={y} dark={dark} />)}
      </div>
      {caption ? <p className="we-caption">{caption}</p> : null}
      <PointList title={pointsTitle} items={points} dark={dark} />
      <WhyBlock title={whyTitle} points={whyPoints} />
    </section>
  );
}

const journey = [
  ['好奇', '发现', '排期日历里看到吉宴', 152, 528, 'gold'],
  ['被需要', '受邀', '收到定向婚礼邀请', 347, 490, 'orange'],
  ['期待', '预约', '确认预约 · 立下约定', 542, 460, 'rose'],
  ['沉浸', '抵达现场', '步入婚礼场景', 737, 410, 'rose'],
  ['✦ 情绪高潮', '祝福 · 点赞', '祝福刷屏 · 互相点赞', 932, 374, 'rose'],
  ['回味', '分享', '分享频道 · 余韵炫耀', 1127, 440, 'purple'],
] as const;

export function WeddingExactCase() {
  return (
    <div className="we-canvas" data-node-id="8328:17020">
      <section className="we-cover">
        <div className="we-glow a" />
        <div className="we-glow b" />
        <div className="we-cover-copy">
          <i />
          <h1>结缘 · 吉宴</h1>
          <h2>玩家婚礼系统设计</h2>
          <p>把一场私密的婚礼，做成一座会自己传播的社交舞台。</p>
          <span>吉宴 · 受邀 · 现场 · 分享</span>
        </div>
        <div className="we-cover-img">
          <Img src={assets.cover} />
          <Img src={assets.coverOverlay} className="overlay" />
        </div>
      </section>

      <section className="we-section we-bg">
        <SectionHead eyebrow="BACKGROUND · 背景" title="婚礼，不该只是两个人的事" desc="庆余年手游《玩家婚礼优化》—— 把一次性的私密仪式，重做成可被发现、参与和传播的社交事件。" />
        <div className="we-feature-row">
          <FeatureCard tone="orange" icon="✦" title="仪式感强但短暂" body="婚礼是玩家的高光时刻，却办完即散 —— 情绪与社交价值没有沉淀下来。" />
          <FeatureCard tone="gold" icon="◎" title="天然的社交素材" body="婚礼自带情感与话题，是最适合「被围观」的内容，具备放大传播的潜力。" />
          <FeatureCard tone="rose" icon="♥" title="从两个人到一群人" body="用受邀、围观、祝福、分享，把私密仪式变成一座公共的社交舞台。" />
        </div>
        <div className="we-opportunity">
          <em>设计目标 · OPPORTUNITY</em>
          <h3>把婚礼做成「可发现 · 可参与 · 可传播」的社交舞台</h3>
          <p>驱动「新人 — 宾客 — 围观者」三层关系，持续产生互动、情感表达与社交传播。</p>
        </div>
      </section>

      <section className="we-section dark we-system">
        <SectionHead dark eyebrow="SYSTEM MAP · 系统全景" title="一个吉宴平台，串起婚礼全链路" desc="分散的婚礼行为被收敛进统一的「吉宴平台」—— 从入口到传播，五个环节首尾相连。" />
        <div className="we-system-flow">
          <SystemNode no="01" title="入口 · 三生石" desc="大世界情缘入口" tone="gold" icon="石" />
          <SystemNode no="02" title="吉宴平台 · 发现" desc="排期日历 + 一键预约" tone="orange" icon="历" />
          <SystemNode no="03" title="吉宴受邀 · 邀请" desc="定向邀约 + 赴约/谢绝" tone="rose" icon="邀" />
          <SystemNode no="04" title="婚礼现场 · 参与" desc="沉浸场景 + 互动祝福" tone="purple" icon="宴" />
          <SystemNode no="05" title="分享传播 · 裂变" desc="点赞留言 + 频道扩散" tone="cyan" icon="享" />
        </div>
        <div className="we-platform-note">
          <em>为什么把婚礼「平台化」？· WHY A PLATFORM</em>
          <h3>聚合分散行为，把一次性仪式变成可运营的社交内容池</h3>
          <div>
            <ReasonCard tone="gold" title="降低发现成本" text="把「哪里有婚礼」集中成一张日历，预约即承诺。" />
            <ReasonCard tone="orange" title="形成内容池" text="婚礼成为可推荐、可围观、可运营的社交内容。" />
            <ReasonCard tone="cyan" title="闭环可传播" text="现场祝福直连频道分享 —— 参与即扩散。" />
          </div>
        </div>
      </section>

      <section className="we-section we-journey">
        <SectionHead eyebrow="PLAYER JOURNEY × FLOW · 玩家旅程" title="跟着一位宾客，走完一场吉宴" desc="把玩法步骤摊平成一条时间线，再叠上情绪强度 —— 看清体验的起伏与高潮在哪里。" />
        <div className="we-chart">
          <span>情绪强度</span>
          <svg viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true">
            <path d="M40 210 C160 190 220 170 250 170 C390 165 430 120 510 135 C640 150 675 40 800 50 C870 55 900 90 960 115" />
            <path d="M40 260 C170 250 230 230 300 220 C420 205 490 190 600 155 C700 115 765 78 820 55 C890 65 925 110 960 135" />
          </svg>
          {journey.map(([emotion, step, text, x, y, tone], index) => (
            <div key={step} className={`we-journey-node ${tone}`} style={{ left: x, top: y }}>
              <em>{emotion}</em>
              <b>{index + 1}</b>
              <h3>{step}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="we-peak-note">
          <em>峰终定律 · PEAK–END RULE</em>
          <h3>把情绪峰值压在「婚礼现场 + 祝福刷屏」，再用「分享炫耀」收尾</h3>
          <p>玩家记住一段体验，靠的是最高点与结尾。预约埋下「开环」的期待，现场与点赞冲到峰值，分享留下余韵 —— 整条曲线为「记忆」与「传播」服务。</p>
          <div><span>Zeigarnik · 预约开环</span><span>社会认同 · 点赞刷屏</span><span>峰终 · 高潮收尾</span></div>
        </div>
      </section>

      <ScreenSection
        eyebrow="FLOW · 吉宴排期"
        title="吉宴排期 · 让婚礼可被发现"
        desc="像一张婚礼日历：按日期分页陈列吉宴，预约即承诺，把「围观婚礼」变成可计划的事。"
        image={assets.schedule}
        caption="吉宴排期界面"
        pins={[[1,48,46],[2,34,107],[3,568,145],[4,244,183],[5,679,81]]}
        pointsTitle="一张可计划的「婚礼日历」"
        points={[
          '日期分页｜按日期分页陈列吉宴，减少一屏信息过载',
          '婚礼卡片｜开宴时间 · 新人 · 人气，一行看懂一场吉宴',
          '状态按钮｜前往 / 预约 / 已预约 三态，清晰指示下一步',
          '人气数据｜评论·点赞·分享·预约人数，社会认同外显',
          '双入口切换｜吉宴排期（公共发现）与 吉宴受邀（定向邀请）分流',
        ]}
        whyTitle="让「围观婚礼」变成可计划、有期待的事"
        whyPoints={[
          ['承诺与一致', '「预约」是一次轻量承诺，行为一致性显著提高到场率。', 'gold'],
          ['Zeigarnik 开环', '预约后留下未闭合的期待，等待被「吉宴提醒」唤回。', 'orange'],
          ['状态可见性', '前往 / 预约 / 已预约 三态，玩家始终知道自己在哪一步。', 'rose'],
          ['Hick 定律', '按日期分页把长列表切短，降低一屏的选择成本。', 'purple'],
        ]}
      />

      <ScreenSection
        eyebrow="FLOW · 吉宴受邀"
        title="吉宴受邀 · 被点名的归属感"
        desc="新人亲自发来的定向邀请 —— 比公共围观更进一步，也给足「我可以不去」的体面。"
        image={assets.invite}
        caption="吉宴受邀界面"
        pins={[[1,253,89],[2,43,117],[3,476,117],[4,256,372],[5,672,126]]}
        pointsTitle="被新人「点名」的定向邀请"
        points={[
          '邀请抬头｜「XX 邀请您成为他的 XX」，强关系定向邀约',
          '婚礼信息｜开宴时间 · 类型 · 新人，赴约前一目了然',
          '谢绝 / 赴约｜双按钮明确，给足「体面拒绝」的出口',
          '全部谢绝｜一键清空，尊重玩家的「免打扰」控制权',
          '受邀页签｜与公共排期分区，定向邀请独立成列',
        ]}
        whyTitle="把「被需要」做足，也把「拒绝」做体面"
        whyPoints={[
          ['社会联结', '「被点名」带来归属感，强度远高于匿名围观。', 'gold'],
          ['礼貌退出', '谢绝 / 全部谢绝给足体面，降低社交压力。', 'orange'],
          ['用户控制', '玩家掌握「去不去」的主动权 —— 防打扰即留存。', 'rose'],
          ['防错原则', '赴约前完整展示信息，减少误入与反悔。', 'purple'],
        ]}
      />

      <section className="we-section dark we-venue">
        <SectionHead dark eyebrow="PEAK · 婚礼现场" title="婚礼现场 · 情绪的最高点" desc="宾客步入沉浸式场景，祝福刷屏、互相点赞 —— 整条体验曲线在这里冲到峰值。" />
        <div className="we-venue-img scene"><Img src={assets.scene} /></div>
        <div className="we-venue-img bless"><Img src={assets.bless} /></div>
        <NumberPin n={1} x={707} y={592} dark />
        <NumberPin n={2} x={707} y={666} dark />
        <NumberPin n={3} x={933} y={476} dark />
        <NumberPin n={4} x={1040} y={578} dark />
        <NumberPin n={5} x={942} y={698} dark />
        <div className="we-caption-row dark">
          <p><b>婚礼现场 · WEDDING VENUE</b><br />① 吉宴分享(0/8) 一键转发现场<br />② 互动 / 单人 切换参与方式</p>
          <p><b>吉宴祝福 · BLESSING WALL</b><br />③ 评论·点赞·分享 999+<br />④ 祝福墙<br />⑤ 一句祝福即参与</p>
        </div>
        <WhyBlock
          title="让现场成为「被看见、被回应」的情绪放大器"
          points={[
            ['峰终定律', '把最强情绪压在现场与祝福，决定玩家对整段体验的记忆。', 'gold'],
            ['社会认同', '999+ 点赞与祝福刷屏，制造「大家都在场」的热度。', 'orange'],
            ['互惠原则', '你祝福我、我点赞你 —— 关系在一来一回中加深。', 'rose'],
            ['自我表达', '一句祝福就是低门槛 UGC，人人都能参与现场。', 'purple'],
          ]}
        />
      </section>

      <ScreenSection
        eyebrow="FLOW · 分享传播"
        title="分享传播 · 让喜事自己扩散"
        desc="把现场喜悦做成一张贺图，一键转发到频道 —— 一次婚礼，触达世界、好友与帮会。"
        image={assets.cover}
        imageClass="share-shot"
        caption="吉宴分享贺图"
        pins={[[1,305,54],[2,462,162],[3,560,233],[4,336,257],[5,482,337]]}
        pointsTitle="一张可转发的「喜事贺图」"
        points={[
          '婚礼贺图｜「我们结缘了」专属贺图，喜事的视觉主体',
          '新人 · 缔结时间｜谁与谁、何时结缘，信息一图说清',
          '自定义文案｜≤30 字祝词，给传播加一句心里话',
          '频道选择｜世界 / 好友 / 帮会，一次触达三类人群',
          '一键分享｜低门槛把喜悦推送出去',
        ]}
        whyTitle="把一次婚礼，变成一次自发的社交扩散"
        whyPoints={[
          ['社交炫耀', '婚礼是值得 show 的高光，满足自我呈现欲。', 'gold'],
          ['病毒传播', '多频道一键分发，一次喜事触达世界·好友·帮会。', 'orange'],
          ['低成本触达', '预设贺图 + 文案，几乎零门槛完成扩散。', 'rose'],
          ['拉新回流', '围观者被贺图吸引，反向进入吉宴平台。', 'purple'],
        ]}
      />

      <ScreenSection
        eyebrow="ENTRY · 三生石"
        title="三生石 · 婚恋的情缘入口"
        desc="大世界里的情缘广场：发缘签、找有缘人 —— 一段婚礼的前奏，往往从这里开始。"
        image={assets.stone}
        caption="三生石界面"
        pins={[[1,55,140],[2,351,104],[3,356,371],[4,703,76],[5,180,298]]}
        pointsTitle="大世界里的「情缘广场」"
        points={[
          '情缘名片｜称号·城市·星缘，个人婚恋身份外显',
          '我的缘签｜一句话留言 + 阅读量，弱关系破冰',
          '发布缘签｜主动表达，把自己放进情缘广场',
          '三生石页签｜三生石 / 情缘吧 / 约会 多入口',
          '编辑主页｜自定义个人情缘资料',
        ]}
        whyTitle="婚恋是一条漏斗 —— 三生石是它的入口"
        whyPoints={[
          ['自我表达', '缘签与称号让玩家「被看见」，激发表达欲。', 'gold'],
          ['弱关系破冰', '公开广场降低搭讪门槛，扩大潜在缘分。', 'orange'],
          ['婚恋漏斗', '情缘 → 约会 → 结婚 → 吉宴，层层递进。', 'rose'],
          ['场景承接', '把婚恋自然接入大世界，而非孤立功能。', 'purple'],
        ]}
      />

      <section className="we-section we-art">
        <SectionHead eyebrow="ART DIRECTION · 界面美术" title="为什么是「国风贺图 + 暖色仪式感」" desc="界面美术不是装饰 —— 它替系统说出「这是一件郑重又值得炫耀的喜事」。" />
        <div className="we-art-card light-card">
          <em>本作的美术选择 · DESIGN CHOICES</em>
          <h3><i />国风水墨贺图</h3><p>与《庆余年》古风世界观一致，立绘比写实照片更有代入感。</p>
          <h3><i className="gold" /><i />暖金 + 绛红主色</h3><p>红金是中式婚庆的情绪符号，天然唤起喜庆与郑重。</p>
          <h3><i />大幅立绘 + 留白</h3><p>让「人」成为画面主体，弱化系统感、放大情感。</p>
        </div>
        <div className="we-art-card dark-card">
          <em>同类参考 · REFERENCE</em>
          <div className="we-ref"><Img src={assets.ref1} /><b>《剑网3》· 婚礼观礼</b><p>国风场景 + 红绸灯笼营造仪式感，宾客观礼强调「在场」。</p></div>
          <div className="we-ref"><Img src={assets.ref2} /><b>《逆水寒》· 婚嫁分享</b><p>水墨立绘 + 暖色贺卡，强化社交炫耀与对外传播。</p></div>
          <div className="we-ref"><Img src={assets.ref3} /><b>《天涯明月刀》· 情缘</b><p>唯美立绘 + 称号外显，突出身份与浪漫表达。</p></div>
          <small>* 参考为风格示意图，非他游实机截图</small>
        </div>
        <div className="we-art-takeaway">
          <em>共性结论 · TAKEAWAY</em>
          <p>古风 MMO 的婚恋界面，普遍用「暖色 + 立绘 + 仪式化排版」放大情感与社交价值 —— 吉宴沿用并强化了这套视觉语言，让「围观一场婚礼」本身就足够好看、值得转发。</p>
        </div>
      </section>

      <section className="we-final">
        <div className="we-glow c" />
        <em>EPILOGUE · 结语</em>
        <h2>把婚礼，做成一座社交舞台</h2>
        <p>从三生石的一句缘签，到吉宴现场的祝福刷屏，再到频道里的一次转发 —— 吉宴系统把一次性的私密仪式，重做成「发现 · 参与 · 传播」的社交主线。</p>
        <div className="we-final-cards">
          <article><i /><h3>情感联结</h3><span>受邀与祝福，把陌生人连成关系。</span></article>
          <b>→</b>
          <article><i /><h3>参与裂变</h3><span>围观与分享，让喜事自己传播。</span></article>
          <b>→</b>
          <article><i /><h3>长期留存</h3><span>婚恋漏斗持续产出新的吉宴。</span></article>
        </div>
        <strong>—— 发现 · 参与 · 传播 · 回流，构成自我增强的社交增长闭环 ——</strong>
        <h4>结 缘 · 吉 宴</h4>
        <small>交互设计案例 · 感谢观看</small>
      </section>
    </div>
  );
}
