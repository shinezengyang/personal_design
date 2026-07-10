import './RecallExactCase.css';

/* ===== Assets ===== */
const A = {
  hero: 'https://www.figma.com/api/mcp/asset/6a8b6b1a-dfc8-4d79-9a16-0fd122a4b040',
  s5: 'https://www.figma.com/api/mcp/asset/a04d369b-1d17-4842-af90-f11e0d213979',
  s6a: 'https://www.figma.com/api/mcp/asset/fadb38b3-64ce-4260-97a7-8ecd397f2f2b',
  s6b: 'https://www.figma.com/api/mcp/asset/2ba97cc2-0ed6-4c13-8a25-c691a2b41bde',
  s7: 'https://www.figma.com/api/mcp/asset/cccc939f-cbf4-4edf-8702-e29910047e7b',
  s9: 'https://www.figma.com/api/mcp/asset/3c604582-5649-413f-997c-a3ef4e98684c',
  s10: 'https://www.figma.com/api/mcp/asset/761f9351-f21c-4973-bc1b-92b704e3196b',
  s11: 'https://www.figma.com/api/mcp/asset/eb315a5d-71c0-4165-bf0f-3ab3e30528d5',
  s12: 'https://www.figma.com/api/mcp/asset/816c42cb-edab-4d42-8bb3-c81e4bf1b554',
  journey: 'https://www.figma.com/api/mcp/asset/c02b7eab-2de8-4070-9ad6-4ffdae75ded1',
  ref1: 'https://www.figma.com/api/mcp/asset/47732102-2fc9-4909-8832-fedc0db52c09',
  ref2: 'https://www.figma.com/api/mcp/asset/bd36d190-ba21-4efb-8f92-d3b37f75786e',
  ref3: 'https://www.figma.com/api/mcp/asset/30a8e589-e792-4b1b-bcd3-7555fa8b625d',
  finale: 'https://www.figma.com/api/mcp/asset/9929e735-b5b1-4b1e-9912-96665c3934a8',
};

function Img({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}

/* ===== Section Header ===== */
type Tone = 'ember' | 'teal' | 'red';

function SectionHeader({
  no, eng, title, desc, tone = 'ember', left = 80, top = 70, sm = false,
}: {
  no: string; eng: string; title: string; desc?: string;
  tone?: Tone; left?: number; top?: number; sm?: boolean;
}) {
  const numColor: Record<Tone, string> = {
    ember: 'rgba(237,189,92,.12)',
    teal: 'rgba(77,219,199,.12)',
    red: 'rgba(255,107,92,.12)',
  };
  const engColor: Record<Tone, string> = {
    ember: '#edbd5c',
    teal: '#4ddbc7',
    red: '#ff6b5c',
  };
  return (
    <div className="rc-sec-hdr" style={{ left, top }}>
      <span className={`rc-num${sm ? ' sm' : ''}`} style={{ color: numColor[tone] }}>{no}</span>
      <span className="rc-eng" style={{ color: engColor[tone] }}>{eng}</span>
      <h2>{title}</h2>
      {desc && <p className="rc-desc">{desc}</p>}
    </div>
  );
}

/* ===== Principle Card ===== */
function PrincipleCard({
  title, eng, tone = 'ember', desc,
}: {
  title: string; eng: string; tone?: Tone; desc: string;
}) {
  return (
    <div className={`rc-principle ${tone}`}>
      <h4>{title}</h4>
      <span className="rc-p-eng">{eng}</span>
      <p>{desc}</p>
    </div>
  );
}

/* ===== Annotation ===== */
function Anno({
  title, desc, tone = 'ember', side = 'left',
  style,
}: {
  title: string; desc: string; tone?: Tone; side?: 'left' | 'right';
  style?: React.CSSProperties;
}) {
  return (
    <div className={`rc-anno ${tone} ${side === 'right' ? 'right' : ''}`} style={style}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

/* ===== Screenshot Section ===== */
function ScreenshotSection({
  sectionClass, no, eng, title, desc, tone = 'ember',
  screenshots, annotations, principles, children,
}: {
  sectionClass: string;
  no: string; eng: string; title: string; desc: string; tone?: Tone;
  screenshots: { src: string; caption: string; top: number; left?: number; width?: number; height?: number }[];
  annotations: { title: string; desc: string; tone?: Tone; side: 'left' | 'right'; style: React.CSSProperties }[];
  principles: { title: string; eng: string; tone?: Tone; desc: string }[];
  children?: React.ReactNode;
}) {
  const pTop = screenshots.length > 1 ? 1344 : 824;
  return (
    <section className={`rc-section ${sectionClass}`}>
      <SectionHeader no={no} eng={eng} title={title} desc={desc} tone={tone} sm />
      {screenshots.map((s, i) => (
        <div key={i}>
          <div
            className="rc-shot"
            style={{ left: s.left ?? 290, top: s.top, width: s.width ?? 700, height: s.height ?? 394 }}
          >
            <Img src={s.src} />
          </div>
          <p
            className="rc-caption"
            style={{ left: 0, right: 0, top: s.top + (s.height ?? 394) + 12 }}
          >
            {s.caption}
          </p>
        </div>
      ))}
      {annotations.map((a, i) => (
        <Anno key={i} title={a.title} desc={a.desc} tone={a.tone} side={a.side} style={a.style} />
      ))}
      <div className="rc-principles" style={{ top: pTop, width: 1120 }}>
        {principles.map((p, i) => (
          <PrincipleCard key={i} title={p.title} eng={p.eng} tone={p.tone} desc={p.desc} />
        ))}
      </div>
      {children}
    </section>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export function RecallExactCase() {
  return (
    <div className="rc-canvas">
      {/* ===== 0 · Hero ===== */}
      <section className="rc-section rc-hero">
        <div className="rc-hero-bg" />
        <div className="rc-hero-dot" />
        <p className="rc-hero-overline">回流召回系统 &nbsp;&nbsp;| &nbsp;&nbsp;PLAYER RECALL DESIGN</p>
        <h1>玩家回流</h1>
        <div className="rc-hero-rule" />
        <p className="rc-hero-sub">一串召回码 · 一场双向奔赴</p>
        <p className="rc-hero-desc">
          召回不是一封冷冰冰的邮件，而是老战友的一声呼唤 —— 召回码把在线玩家与离线好友绑成利益共同体，双端各得其礼、共同战斗，让回归成为关系的重逢。
        </p>
        <div className="rc-hero-tags">
          {['双端视角', '召回码裂变', '互惠奖励', '经验追赶 +50%', '7天活跃日历'].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ===== 1 · 项目背景 ===== */}
      <section className="rc-section rc-bg">
        <div className="rc-hairline" style={{ top: 70 }} />
        <SectionHeader
          no="00" eng="BACKGROUND"
          title="项目背景 · 为什么要做「回流召回」"
          desc="拉新越来越贵，沉睡玩家成了最大的增量池 —— 但回归者动机脆弱、极易二次流失。"
        />

        <div className="rc-bg-cards">
          <div className="rc-bg-card">
            <span className="rc-card-no gold">01</span>
            <h3>流失即增量</h3>
            <p>沉睡玩家是最大的潜在盘 —— 召回一个老玩家，远比拉一个新玩家便宜。</p>
          </div>
          <div className="rc-bg-card">
            <span className="rc-card-no teal">02</span>
            <h3>动机脆弱</h3>
            <p>回归者耐心低、易二次流失 —— 每多一步寻找或等待，都是掉队点。</p>
          </div>
          <div className="rc-bg-card">
            <span className="rc-card-no red">03</span>
            <h3>关系是钩子</h3>
            <p>单发奖励留不住人；让老玩家「带人回来」，用社交关系把回归焊进日常。</p>
          </div>
        </div>

        <div className="rc-goal">
          <div className="rc-goal-inner">
            <em>设计目标</em>
            <b>把「带朋友回来」从一次性发码，做成一对人持续咬合的共同目标 —— 关系与回报互相驱动。</b>
          </div>
        </div>
      </section>

      {/* ===== 2 · 玩法概述 ===== */}
      <section className="rc-section rc-overview">
        <SectionHeader
          no="01" eng="OVERVIEW"
          title="玩法概述 · 双视角联动 · 在码上相遇"
          desc="回流系统同时服务两端：在线玩家通过「召回之礼」分享专属召回码、召回失联超过 100 天的好友；回流玩家凭码绑定关系，领取回归之礼、经验追赶加成与 7 天活跃奖励 —— 双方共同战斗，各得其礼。"
        />
        <div className="rc-feat-row">
          {([
            { glyph: '双', title: '双端视角', eng: 'TWO-SIDED', desc: '召回者与回流者各有界面，同构对称、各取所需。' },
            { glyph: '码', title: '召回码裂变', eng: 'RECALL CODE', desc: '一复制一输入，把社交关系变成可追踪的绑定。' },
            { glyph: '惠', title: '互惠奖励', eng: 'RECIPROCITY', desc: '时装·称号·代币，双方都有得拿，召回不再尴尬。', teal: true },
            { glyph: '追', title: '追赶成长', eng: 'CATCH-UP', desc: '经验 +50% 追赶加成，离开的日子不再是差距。', teal: true },
          ] as const).map((f) => (
            <div key={f.title} className={`rc-feat-card${'teal' in f && f.teal ? ' teal' : ''}`}>
              <div className="rc-feat-ring">{f.glyph}</div>
              <h3>{f.title}</h3>
              <span className="rc-eng-sm">{f.eng}</span>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3 · 系统流程 ===== */}
      <section className="rc-section rc-flow">
        <SectionHeader
          no="02" eng="SYSTEM FLOW" tone="teal" sm
          title="系统流程 · 双端联动 · 一套框架两条线"
          desc="召回者负责「带人回来」，回归者负责「愿意留下」—— 两条线在「共同战斗」里咬合成一对进度。"
        />

        {/* Ember lane */}
        <div className="rc-lane ember">
          <div className="rc-lane-label">
            <h3>召回者 · 在线玩家</h3>
            <span>THE CALLER</span>
          </div>
          <div className="rc-lane-steps">
            {[
              { no: '1', t: '入口进入', d: '大世界活动入口' },
              { no: '2', t: '召回之礼', d: '查看奖励与战友列表' },
              { no: '3', t: '复制召回码', d: '分享给离线好友' },
              { no: '4', t: '共同战斗', d: '组队赢取专属奖励' },
            ].map((s) => (
              <div key={s.no} className="rc-lane-step">
                <span className="rc-step-no">{s.no}</span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code box */}
        <div className="rc-code-lines up" />
        <div className="rc-code-box">召回码</div>
        <div className="rc-code-lines down" />

        {/* Teal lane */}
        <div className="rc-lane teal">
          <div className="rc-lane-label">
            <h3>回流者 · 离线好友</h3>
            <span>THE RETURNEE</span>
          </div>
          <div className="rc-lane-steps">
            {[
              { no: '1', t: '收到呼唤', d: '好友召回·短信触达' },
              { no: '2', t: '登录拍脸', d: '全屏弹窗欢迎回归' },
              { no: '3', t: '绑定回归', d: '输入召回码结成战友' },
              { no: '4', t: '共同战斗', d: '组队赢取专属奖励' },
            ].map((s) => (
              <div key={s.no} className="rc-lane-step">
                <span className="rc-step-no">{s.no}</span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Merge */}
        <div className="rc-merge">
          <div className="rc-merge-icon">⇌</div>
          <div>
            <h3>两线咬合</h3>
            <p>召回者的「召回进度」与回归者的「日常活跃」在「共同战斗」里成为同一条进度 —— 关系驱动回报，回报反哺关系。</p>
          </div>
        </div>
      </section>

      {/* ===== 4 · 信息架构 ===== */}
      <section className="rc-section rc-ia">
        <SectionHeader
          no="03" eng="INFO ARCHITECTURE" tone="teal" sm
          title="信息架构 · 一级聚合 · 二级常驻页签"
          desc="一级界面「回归之礼」是营销聚合壳；二级界面每个福利页都常驻全部同级页签，平级切换一步直达、不必回退。"
        />

        <div className="rc-ia-left">
          <h3>一级界面 · 召回之礼</h3>
          <span className="rc-eng-sm">AGGREGATION SHELL</span>
          <p>以角色立绘做情感背书，奖励前置；下方宫格收纳「共同战斗 · 召回豪礼 · 专属商店」三个二级入口。</p>
        </div>

        <p className="rc-ia-arrow">点任意入口</p>

        <div className="rc-ia-right">
          <div className="rc-ia-tabs">
            <span className="active">共同战斗</span>
            <span>召回豪礼</span>
            <span>专属商店</span>
          </div>
          <div className="rc-ia-content">
            <p className="rc-ia-label">当前页内容 · 奖励前置</p>
            <div className="rc-ia-reward-row">
              <div className="rc-ia-reward-box" />
              <span>奖励物品 A · 数量 ×1</span>
              <button type="button">领取</button>
            </div>
            <div className="rc-ia-reward-row">
              <div className="rc-ia-reward-box" />
              <span>奖励物品 B · 数量 ×3</span>
              <button type="button">领取</button>
            </div>
          </div>
        </div>

        <div className="rc-ia-compare row1">
          <div className="rc-ia-dot" />
          <span className="rc-ia-c-label">传统逐级</span>
          <span className="rc-ia-c-desc">进福利 A → 返回一级 → 再进福利 B</span>
          <span className="rc-ia-c-result">＝ 2 步</span>
        </div>
        <div className="rc-ia-compare row2">
          <div className="rc-ia-dot" />
          <span className="rc-ia-c-label">本设计</span>
          <span className="rc-ia-c-desc">在当前页的「持久页签」直接点目标福利，无需回退</span>
          <span className="rc-ia-c-result">＝ 1 步</span>
        </div>
      </section>

      {/* ===== 5 · 04 召回之礼 ===== */}
      <ScreenshotSection
        sectionClass="rc-s5"
        no="04" eng="CALLER ENTRY" title="召回之礼 · 召回者入口"
        desc="先亮奖励、再给工具 —— 一级聚合入口用立绘做情感背书，用专属召回码把「开口找人」的门槛降到最低。"
        screenshots={[{ src: A.s5, caption: '▲ 召回之礼（一级入口）· 召回者视角', top: 352 }]}
        annotations={[
          { title: '标题 · 利益点', desc: '先说清能拿到什么 —— 时装·称号·代币列在最前', side: 'left', style: { left: 78, top: 380 } },
          { title: '功能三宫格', desc: '共同战斗·召回豪礼·专属商店，一屏直达', side: 'left', style: { left: 78, top: 490 } },
          { title: '立绘 · 情感背书', desc: '角色召唤，唤起世界观记忆，比系统通知更打动人', tone: 'ember', side: 'right', style: { left: 1012, top: 380 } },
          { title: '专属召回码', desc: '一键复制，把「开口找人」的门槛降到最低，摆放到界面右下角方便点击', tone: 'ember', side: 'right', style: { left: 1012, top: 500 } },
        ]}
        principles={[
          { title: '互惠原则', eng: 'RECIPROCITY', tone: 'ember', desc: '先把奖励摆上、再请玩家付出（发码召回）—— 利益对等，降低开口找人的心理成本。' },
          { title: '情感化设计', eng: 'EMOTIONAL DESIGN', tone: 'teal', desc: '立绘把功能弹窗变成「角色召唤」，唤起世界观记忆，比系统通知更能驱动行动。' },
        ]}
      />

      {/* ===== 6 · 05 共同战斗 ===== */}
      <ScreenshotSection
        sectionClass="rc-s6"
        no="05" eng="CO-BATTLE" title="共同战斗 · 双轨进度"
        desc="召回者与回归者在同一个活动里各跑各的进度条 —— 回归者每日活跃推动召回者解锁奖励，关系与回报互相驱动。"
        screenshots={[
          { src: A.s6a, caption: '▲ 共同战斗 · 活跃进度（召回者视角）', top: 341, left: 293, width: 697, height: 392 },
          { src: A.s6b, caption: '▲ 共同战斗 · 累计充值（召回者视角）', top: 830, left: 293, width: 697, height: 392 },
        ]}
        annotations={[
          { title: '持久页签', desc: '共同战斗 · 召回豪礼 始终在场，平级切换不回退。', side: 'left', style: { left: 78, top: 370 } },
          { title: '立绘坐镇', desc: '婉儿立绘把「双人共战」演成有温度的同行。', side: 'left', style: { left: 78, top: 490 } },
          { title: '双轨页签', desc: '活跃 + 累计充值两个维度，充值为回归者加速进度。', tone: 'ember', side: 'right', style: { left: 1012, top: 370 } },
          { title: '双人达成条件', desc: '「与回归用户达成条件」—— 进度需两人合力，非单刷。', tone: 'ember', side: 'right', style: { left: 1012, top: 490 } },
          { title: '位次阶梯奖励', desc: '1~4 位逐档解锁，名次越靠前奖励越厚。', tone: 'ember', side: 'right', style: { left: 1012, top: 610 } },
          { title: '充值加速档', desc: '累计充值金额分档领取，付费玩家可加速进度。', side: 'left', style: { left: 78, top: 860 } },
        ]}
        principles={[
          { title: '目标梯度效应', eng: 'GOAL-GRADIENT EFFECT', tone: 'ember', desc: '越接近终点冲劲越足；双进度条把「还差一档」摆在眼前，临门一脚最拼。' },
          { title: '社会助长', eng: 'SOCIAL FACILITATION', tone: 'teal', desc: '有人和你共享进度，「不想拖后腿」的同伴压力，比单机目标更拉动每日上线。' },
          { title: '共同命运', eng: 'SHARED FATE', tone: 'red', desc: '召回者的奖励挂在回归者的活跃上 —— 两人绑成一条进度，关系本身就是留存钩子。' },
        ]}
      />

      {/* ===== 7 · 06 召回豪礼 ===== */}
      <ScreenshotSection
        sectionClass="rc-s7"
        no="06" eng="RECALL REWARDS" title="召回豪礼 · 阶梯领奖"
        desc="召回 1→3→5 人解锁三档奖励 —— 阶梯设计让「多召回一人」始终有新期待，保持持续动力。"
        screenshots={[{ src: A.s7, caption: '▲ 召回豪礼 · 阶梯领奖（召回者视角）', top: 340 }]}
        annotations={[
          { title: '角色立绘', desc: '奖励弹窗带立绘，把数值奖励包装成角色事件', side: 'left', style: { left: 78, top: 380 } },
          { title: '阶梯奖励档位', desc: '1人→3人→5人，每档奖励独立展示、可逐一领取', tone: 'ember', side: 'right', style: { left: 1012, top: 380 } },
        ]}
        principles={[
          { title: '可变比率强化', eng: 'VARIABLE RATIO REINFORCEMENT', tone: 'ember', desc: '每多召回一人都有新奖励等着，不确定下一档有什么，持续驱动行动。' },
          { title: '损失规避', eng: 'LOSS AVERSION', tone: 'teal', desc: '「再召回 2 人就能解锁」—— 已付出的努力让人不愿放弃，推动最后一步。' },
        ]}
      />

      {/* ===== 8 · Divider ===== */}
      <section className="rc-section rc-divider">
        <div className="rc-divider-box">
          <h3>视角切换 · 回归者线</h3>
          <span>RETURNER PERSPECTIVE</span>
        </div>
      </section>

      {/* ===== 9 · 07 拍脸欢迎 ===== */}
      <ScreenshotSection
        sectionClass="rc-s9"
        no="07" eng="WELCOME SPLASH" title="拍脸欢迎 · 零查找成本" tone="teal"
        desc="回归者登录的第一帧就弹出全屏欢迎 —— 零查找成本，所有回归福利一次性呈现。"
        screenshots={[{ src: A.s9, caption: '▲ 拍脸欢迎弹窗 · 回归者登录第一帧', top: 340 }]}
        annotations={[
          { title: '拍脸呼出', desc: '登录第一帧即弹出，无需查找任何入口', tone: 'teal', side: 'left', style: { left: 78, top: 380 } },
          { title: '福利入口聚合', desc: '把全部回归福利一次性呈现，引导进入之礼页', tone: 'teal', side: 'left', style: { left: 78, top: 490 } },
          { title: '包装仪式感', desc: '可通过装饰美化、角色欢迎回归，唤起情感连接与世界观记忆', tone: 'teal', side: 'right', style: { left: 1012, top: 380 } },
        ]}
        principles={[
          { title: '即时满足', eng: 'INSTANT GRATIFICATION', tone: 'teal', desc: '登录第一帧就弹出福利，零等待、零搜寻 —— 在动机最强的瞬间抓住回归者。' },
          { title: '峰值体验', eng: 'PEAK EXPERIENCE', tone: 'red', desc: '全屏弹窗+角色迎接制造情绪高点，让「回来」本身变成一个值得记忆的事件。' },
        ]}
      />

      {/* ===== 10 · 08 回归之礼 ===== */}
      <ScreenshotSection
        sectionClass="rc-s10"
        no="08" eng="RETURN GIFT" title="回归之礼 · 一级聚合入口" tone="teal"
        desc="与召回者的「召回之礼」对称 —— 回归者也拥有专属的一级聚合入口，奖励前置、立绘仪式感。"
        screenshots={[{ src: A.s10, caption: '▲ 回归之礼（一级聚合入口）· 回归者视角', top: 340 }]}
        annotations={[
          { title: '奖励前置', desc: '时装·代币·材料列在标题下方，先说能拿什么', tone: 'teal', side: 'left', style: { left: 78, top: 380 } },
          { title: '二级入口宫格', desc: '活跃奖励·专属礼包·商店，一屏呈现所有福利', tone: 'teal', side: 'left', style: { left: 78, top: 490 } },
          { title: '角色立绘', desc: '与召回之礼对称，回归者也有立绘仪式感', tone: 'teal', side: 'right', style: { left: 1012, top: 380 } },
        ]}
        principles={[
          { title: '锚定效应', eng: 'ANCHORING EFFECT', tone: 'teal', desc: '先看到高价值奖励，再看获取条件 —— 期望被锚高后，任务显得更「划算」。' },
          { title: '选择架构', eng: 'CHOICE ARCHITECTURE', tone: 'ember', desc: '宫格排列替玩家做了信息分类 —— 不需要思考「去哪领」，一眼看到全部入口。' },
        ]}
      />

      {/* ===== 11 · 09 活跃奖励 ===== */}
      <ScreenshotSection
        sectionClass="rc-s11"
        no="09" eng="DAILY REWARDS" title="活跃奖励 · 七天追赶" tone="red"
        desc="7 天日历每天一格 —— 已领/可领/未解锁三态一目了然，持久页签让平级切换零回退。"
        screenshots={[{ src: A.s11, caption: '▲ 活跃奖励（七天日历）· 回归者视角', top: 340 }]}
        annotations={[
          { title: '持久页签', desc: '常驻全部同级福利页签，平级切换零回退', tone: 'red', side: 'left', style: { left: 78, top: 380 } },
          { title: '七天日历', desc: '每天一格，已领/可领/未解锁三态一目了然', tone: 'red', side: 'left', style: { left: 78, top: 490 } },
          { title: '奖励前置预览', desc: '每格奖励图标可见，让玩家知道后面能拿什么', tone: 'red', side: 'right', style: { left: 1012, top: 380 } },
        ]}
        principles={[
          { title: '连续签到效应', eng: 'STREAK EFFECT', tone: 'red', desc: '连续 7 天打卡的链条一旦开始就不想断 —— 沉没成本让回归者每天回来。' },
          { title: '最小行动原则', eng: 'MINIMUM VIABLE ACTION', tone: 'teal', desc: '每天只需登录+领取，行动门槛低到「顺手就做」—— 最小摩擦换最大留存。' },
        ]}
      />

      {/* ===== 12 · 10 专属礼包 ===== */}
      <ScreenshotSection
        sectionClass="rc-s12"
        no="10" eng="EXCLUSIVE PACK" title="专属礼包 · 多档付费" tone="red"
        desc="低/中/高三档覆盖零氪到中氪 —— 限时标签制造紧迫感，性价比标注强化折扣感知。"
        screenshots={[{ src: A.s12, caption: '▲ 专属礼包（限时付费）· 回归者视角', top: 340 }]}
        annotations={[
          { title: '多档价位', desc: '低/中/高三档覆盖零氪到中氪，每人都有合适选择', tone: 'red', side: 'left', style: { left: 78, top: 380 } },
          { title: '限时日期', desc: '制造紧迫感，强化「错过就没有」的感知', tone: 'red', side: 'left', style: { left: 78, top: 490 } },
          { title: '性价比标注', desc: '「原价XX 现价XX」对比锚定，突出折扣力度', tone: 'red', side: 'right', style: { left: 1012, top: 380 } },
        ]}
        principles={[
          { title: '稀缺性原理', eng: 'SCARCITY PRINCIPLE', tone: 'red', desc: '限时标签让「回归专属」多了一层时间压力 —— 不买就没了，推动即时决策。' },
          { title: '价格锚定', eng: 'PRICE ANCHORING', tone: 'ember', desc: '原价与现价并列，折扣幅度一目了然 —— 锚定高价后，现价显得特别「值」。' },
        ]}
      />

      {/* ===== 13 · 心流历程 ===== */}
      <section className="rc-section rc-journey">
        <SectionHeader
          no="11" eng="THE RETURN JOURNEY" sm
          title="心流历程 · 从离开到归来"
          desc="回流者的情绪曲线：一声呼唤打破沉寂，仪式感、加速度与战友情逐级托举，直到重新融入江湖。"
        />

        <div className="rc-journey-chart">
          <Img src={A.journey} />
        </div>

        <div className="rc-journey-cards">
          <div className="rc-journey-card gold">
            <span className="rc-jc-no">01</span>
            <h4>双视角联动</h4>
            <p>召回者与回归者各有完整体验线，在共同战斗里咬合成一条进度。</p>
          </div>
          <div className="rc-journey-card teal">
            <span className="rc-jc-no">02</span>
            <h4>情感化包装</h4>
            <p>每个功能弹窗都有角色立绘，把系统通知升级成叙事场景。</p>
          </div>
          <div className="rc-journey-card red">
            <span className="rc-jc-no">03</span>
            <h4>最短路径</h4>
            <p>持久页签+拍脸弹窗+一键发码，每一步都在减少玩家操作成本。</p>
          </div>
        </div>
      </section>

      {/* ===== 14 · 美术参照 ===== */}
      <section className="rc-section rc-ref">
        <SectionHeader
          no="12" eng="VISUAL RESEARCH · GENSHIN IMPACT" sm
          title="美术参照 · 头部游戏运营活动语法" tone="ember"
          desc="同样要把「限时活动 + 福利 + 进度」装进一块弹窗，头部游戏给出了被验证过的三套构图。"
          top={50}
        />
        <div className="rc-sec-hdr" style={{ left: 80, top: 50 }}>
          <span className="rc-num sm" style={{ color: 'rgba(245,247,250,.12)' }}>12</span>
        </div>

        <div className="rc-ref-cards">
          <div className="rc-ref-card">
            <div className="rc-ref-card-img"><Img src={A.ref1} /></div>
            <div className="rc-ref-card-body">
              <h4>活动一览 · 左页签 + 立绘 + 奖励前置</h4>
              <p>左列页签收纳多活动，右区立绘做情感背书、奖励先行陈列 —— 与召回 / 回归之礼的弹窗构图同源。</p>
              <span className="rc-ref-tag teal">印证 03 / 06 · 之礼弹窗</span>
            </div>
          </div>
          <div className="rc-ref-card">
            <div className="rc-ref-card-img"><Img src={A.ref2} /></div>
            <div className="rc-ref-card-body">
              <h4>纪行 · 里程碑双轨 + 一键领取</h4>
              <p>等级格逐级点亮、免费付费双轨并行、一键领取归拢回报 —— 召回豪礼与七天日历的同构样本。</p>
              <span className="rc-ref-tag ember">印证 05 / 07 · 阶梯福利</span>
            </div>
          </div>
          <div className="rc-ref-card">
            <div className="rc-ref-card-img"><Img src={A.ref3} /></div>
            <div className="rc-ref-card-body">
              <h4>风物之歌 · 任务行 + 就地领取</h4>
              <p>条件行 + 奖励 + 按钮在同一行闭环，完成态打勾留痕 —— 共同战斗与活跃奖励的任务行逻辑一致。</p>
              <span className="rc-ref-tag teal">印证 05 / 07 · 任务行</span>
            </div>
          </div>
        </div>

        <div className="rc-ref-summary">
          <p>弹窗讲情感、轨道讲进度、任务行讲行动 —— 三套语法各管一段心智，拼成完整的运营活动界面。</p>
          <p className="rc-ref-note">参考图取自网络公开内容，仅作设计研究用途</p>
        </div>
      </section>

      {/* ===== 15 · 结语 ===== */}
      <section className="rc-section rc-finale">
        <div className="rc-finale-bg" />
        <div className="rc-finale-content">
          <div className="rc-hairline" style={{ top: 60 }} />
          <p className="rc-finale-overline">结语 · IN CLOSING</p>
          <h2 className="rc-finale-statement">{'召回不是拉新的指标\n而是一次关系的重逢'}</h2>
          <p className="rc-finale-sub">
            回流玩家系统 —— 用一串召回码连接两端，让老玩家有理由呼唤，让离开的人有理由回来。
          </p>
          <div className="rc-finale-metrics">
            {[
              { n: '2', l: '端视角同构' },
              { n: '1', l: '串召回码' },
              { n: '50%', l: '经验追赶加成' },
              { n: '7', l: '天活跃日历' },
            ].map((m) => (
              <div key={m.l} className="rc-finale-metric">
                <b>{m.n}</b>
                <span>{m.l}</span>
              </div>
            ))}
          </div>
          <p className="rc-finale-gallery-label">视觉稿展示</p>
        </div>
      </section>
    </div>
  );
}
