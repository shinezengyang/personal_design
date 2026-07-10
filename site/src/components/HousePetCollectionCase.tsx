import { useState } from 'react'
import './HousePetCollectionCase.css'

type Card = {
  title: string
  desc: string
  meta?: string
  tone?: 'blue' | 'orange' | 'red' | 'green' | 'dark'
}

type Step = {
  title: string
  desc: string
}

const assets = {
  worldPet: 'https://www.figma.com/api/mcp/asset/bcaddd7a-ebd0-43c0-b942-42da616f0f71',
  houseTab: 'https://www.figma.com/api/mcp/asset/2b99a333-8a1f-444c-a024-401eaa9f2f8f',
  houseScene: 'https://www.figma.com/api/mcp/asset/cf656c01-45bf-4b20-8da8-2e7eb724535a',
  layoutPet: 'https://www.figma.com/api/mcp/asset/6ccea0e0-a326-4d1a-acca-9cc333229393',
  layoutFurniture: 'https://www.figma.com/api/mcp/asset/4eebd9a0-964e-4e21-a04e-139e9620b947',
  placementGrid: 'https://www.figma.com/api/mcp/asset/e855ad02-a1e2-4307-a165-31a4aded6558',
  placementLimit: 'https://www.figma.com/api/mcp/asset/da46b218-45e9-4415-b220-153925b54abd',
  captureWorld: 'https://www.figma.com/api/mcp/asset/7716fbb8-ad33-446b-baaf-01f1753cce6c',
  makingEntry: 'https://www.figma.com/api/mcp/asset/0f19399b-9c4a-4ddb-836d-ebce7f563889',
  makingWorld: 'https://www.figma.com/api/mcp/asset/80fd9712-1f71-409e-9c8d-60391badb87e',
  makingConfirm: 'https://www.figma.com/api/mcp/asset/8a0a4ccd-bad9-4f89-9230-54df0b14e5ac',
  makingToast: 'https://www.figma.com/api/mcp/asset/fc12a627-3db8-4977-98f7-27638705a1d9',
  tempStorage: 'https://www.figma.com/api/mcp/asset/26a14a48-77ca-4f13-9ad4-cef511d8494b',
  emptyPlace: 'https://www.figma.com/api/mcp/asset/21cbc20f-6729-475d-aa84-a8f0e0ac04bb',
  outcome01: 'https://www.figma.com/api/mcp/asset/65efe756-4371-428e-be6f-db93f4cdea33',
  outcome02: 'https://www.figma.com/api/mcp/asset/dae5ea88-24f8-49d4-812f-d504c9f6604e',
  outcome03: 'https://www.figma.com/api/mcp/asset/95e93647-5b82-4d03-b1b5-4dfd9f1a2635',
  outcome04: 'https://www.figma.com/api/mcp/asset/6feceadf-fe21-460e-8e22-6cb6ce4f75b0',
  outcome05: 'https://www.figma.com/api/mcp/asset/b9966df3-4c10-467d-a634-6f594f5388a4',
  outcome06: 'https://www.figma.com/api/mcp/asset/056fdff1-7655-4dd6-981d-c33dfa1a5f6d',
}

const navItems = [
  ['background', '背景'],
  ['goals', '目标'],
  ['architecture', '架构'],
  ['entry', '入口'],
  ['layout', '布置界面'],
  ['placement', '摆放'],
  ['capture', '抓捕'],
  ['making', '制造'],
  ['storage', '管理'],
  ['save', '保存'],
  ['overview', '总览'],
]

function SmartImage({ src, alt, ratio = '16 / 9' }: { src: string; alt: string; ratio?: string }) {
  const [ok, setOk] = useState(true)

  return (
    <div className="image-shell" style={{ aspectRatio: ratio }}>
      {ok ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
      ) : (
        <div className="image-fallback">
          <strong>{alt}</strong>
          <span>Figma 临时图片链接失效后，请替换为本地素材。</span>
        </div>
      )}
    </div>
  )
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p className="eyebrow">{eyebrow}</p>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  )
}

function InfoCard({ title, desc, meta, tone = 'blue' }: Card) {
  return (
    <article className={`info-card ${tone}`}>
      <div className="card-tag">{meta || title}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

function NumberCard({ index, meta, title, desc }: { index: number; meta: string; title: string; desc: string }) {
  return (
    <article className="number-card">
      <div className="number-badge">{index}</div>
      <span>{meta}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="step-flow">
      {steps.map((step, index) => (
        <div className="step-unit" key={step.title}>
          <div className="step-circle">{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  )
}

function MethodRows({ rows }: { rows: Card[] }) {
  return (
    <div className="method-rows">
      {rows.map((row) => (
        <div className="method-row" key={row.title}>
          <span>{row.title}</span>
          <div>
            <strong>{row.desc}</strong>
            {row.meta && <p>{row.meta}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

function LoopDiagram({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="loop-diagram">
      <div className="loop-center">{title}</div>
      {items.map((item, index) => (
        <div className={`loop-node node-${index}`} key={item}>{item}</div>
      ))}
    </div>
  )
}

export function HousePetCollectionCase() {
  const scrollToCaseSection = (id: string) => {
    const el = document.getElementById(`house-pet-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="house-pet-case">
      <main className="page">
      <header id="house-pet-top" className="hero section-blue">
        <div className="hero-mark">F</div>
        <div className="hero-copy">
          <p className="case-label">交互设计</p>
          <h1>房屋家具 + 宠物搜集</h1>
          <p>通过在大世界捕捉宠物，将宠物摆放在房屋，丰富房屋玩法，提升玩家沉浸感与风雅值。</p>
        </div>
        <div className="hero-lines" aria-hidden="true">
          <span /><span /><span />
        </div>
      </header>

      <section id="house-pet-background" className="section cream">
        <SectionTitle eyebrow="THE BACKGROUND" title="设计背景" desc="为什么要做房屋家具 + 宠物搜集？" />
        <div className="two-col">
          <InfoCard
            title="系统目的"
            desc="通过在大世界捕捉宠物，可将宠物摆放在房屋。增加房屋系统的可玩性和内容深度，提升玩家对房屋的归属感与情感连接。"
            tone="blue"
          />
          <InfoCard
            title="界面需求"
            desc="房屋布置界面新增宠物 Tab 与宠物详情面板，并补齐摆放、回收、移动、旋转等核心交互。"
            tone="orange"
          />
        </div>
        <div className="stakeholders">
          {[
            ['玩家', '更丰富的房屋装饰体验'],
            ['策划', '增加养成深度，提升留存'],
            ['美术', '宠物模型与展示场景'],
            ['实现', '复用现有布置框架'],
          ].map(([name, desc]) => (
            <div className="mini-card" key={name}>
              <span>{name}</span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="house-pet-goals" className="section split-bg">
        <SectionTitle eyebrow="THE GOALS" title="玩家目标" />
        <div className="goal-grid">
          <NumberCard index={1} meta="搜集" title="抓捕" desc="在大世界发现并抓捕限时出没的宠物" />
          <NumberCard index={2} meta="布置" title="摆放" desc="将宠物和家具摆放在自己的房屋中" />
          <NumberCard index={3} meta="成长" title="风雅" desc="通过布置提升风雅值，解锁更多房屋功能" />
        </div>
      </section>

      <section id="house-pet-architecture" className="section cream">
        <SectionTitle eyebrow="SYSTEM ARCHITECTURE" title="系统架构" desc="从入口到核心玩法，构建完整的宠物搜集与房屋布置体验闭环。" />
        <StepFlow
          steps={[
            { title: '大世界', desc: '宠物出没 / 系统广播' },
            { title: '三生石', desc: '房屋入口 / 房屋信息' },
            { title: '房屋布置', desc: '物品列表 / 宠物家具' },
            { title: '摆放交互', desc: '移动 / 旋转 / 回收 / 确认' },
            { title: '宠物抓捕', desc: '追逐玩法 / 成功失败' },
          ]}
        />
        <p className="callout-text">抓捕成功后，宠物进入物品列表，可在房屋中摆放。</p>
      </section>

      <section id="house-pet-entry" className="section">
        <SectionTitle eyebrow="HOUSE ENTRY" title="房屋入口" />
        <div className="image-pair">
          <div>
            <SmartImage src={assets.worldPet} alt="大世界入口界面" />
            <p>用户对“家”有天然认知：从外部世界进入私人空间。将入口放在个人中心区域，可降低寻路认知负担。</p>
          </div>
          <div>
            <SmartImage src={assets.houseTab} alt="三生石房屋信息面板" />
            <p>房屋面板展示等级、资源、状态与功能入口；点击“前往房屋”进入房屋场景。</p>
          </div>
        </div>
        <div className="center-shot">
          <SmartImage src={assets.houseScene} alt="进入房屋后的场景 HUD" />
          <p>进入房屋场景后，HUD 只保留房屋内需要的控件，隐藏无关内容。</p>
        </div>
      </section>

      <section id="house-pet-layout" className="section cream">
        <SectionTitle eyebrow="LAYOUT INTERFACE" title="房屋布置界面" />
        <div className="showcase-block">
          <div className="shot-stack">
            <SmartImage src={assets.layoutPet} alt="物品列表 · 宠物详情" />
            <SmartImage src={assets.layoutFurniture} alt="物品列表 · 家具详情" />
          </div>
          <div className="annotation-list">
            <InfoCard title="宠物详情面板" desc="展示宠物名称、风雅值加成、模型预览、出没时间和描述文本。" />
            <InfoCard title="物品列表" desc="底部横向滚动列表，支持宠物/家具 Tab 切换，并展示持有数量与摆放上限。" tone="orange" />
            <InfoCard title="操作按钮" desc="宠物可“抓捕 / 摆放”，家具可“制作 / 摆放”，操作意图直接对应后续流程。" />
          </div>
        </div>
        <div className="method-panel">
          <h3>设计方法</h3>
          <div className="method-large">7±2</div>
          <MethodRows
            rows={[
              { title: 'Tab 分类', desc: '将家具 / 宠物拆为独立认知空间', meta: '分块 Chunking，避免一次面对全部物品。' },
              { title: '4 列网格', desc: '每屏 8–12 个物品', meta: '控制在工作记忆容量范围内。' },
              { title: '点击展开', desc: '默认只显示缩略图，详情按需展开', meta: '渐进披露，逐层释放信息。' },
            ]}
          />
          <div className="soft-callout">格式塔接近性：同类物品间距小于不同类间距，自动形成视觉分组。</div>
        </div>
      </section>

      <section id="house-pet-placement" className="section pale-blue">
        <SectionTitle eyebrow="PLACEMENT INTERACTION" title="摆放交互" desc="网格化布置系统，精准控制物品位置。" />
        <div className="showcase-block reverse">
          <div className="shot-stack">
            <SmartImage src={assets.placementGrid} alt="进入摆放模式后的俯视网格" />
            <SmartImage src={assets.placementLimit} alt="禁止摆放区域提示" />
          </div>
          <div className="operation-list">
            {[
              ['R', '旋转', '点击使物品沿 Y 轴顺时针旋转 45°'],
              ['M', '移动', '拇指长按并滑动可使物品位移'],
              ['C', '回收', '将物品放进临时收纳处'],
              ['P', '摆放', '确定 / 取消物品当前选择的位置'],
              ['S', '禁止', '超出可摆放区域时禁止摆放'],
            ].map(([key, name, desc]) => (
              <div className="operation-card" key={name}>
                <span>{key}</span>
                <div>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="method-panel">
          <h3>设计方法</h3>
          <p className="formula">T = a + b log₂(D / W + 1)</p>
          <p className="muted">费茨定律 Fitts's Law</p>
          <div className="two-col compact">
            <InfoCard title="W↑ 目标越大 → T↓ 操作越快" desc="底部操作栏按钮采用全宽设计，物品网格卡片保证最小触控面积。" />
            <InfoCard title="D↓ 距离越近 → T↓ 操作越快" desc="确认、取消、旋转按钮置于底部拇指舒适区，缩短视觉与操作距离。" />
          </div>
          <p className="callout-text">大目标 + 近距离 + 直接操纵 = 高效率、低出错的摆放体验。</p>
        </div>
      </section>

      <section id="house-pet-capture" className="section cream">
        <SectionTitle eyebrow="PET CAPTURE" title="宠物抓捕" desc="大世界限时宠物追逐玩法。" />
        <div className="capture-layout">
          <SmartImage src={assets.captureWorld} alt="大世界宠物抓捕入口" />
          <div className="timeline-list">
            {[
              ['01', '宠物出没', '系统广播通知，限时出现'],
              ['02', '前往地点', '点击前往，跑向宠物位置'],
              ['03', '执行抓捕', '靠近后点击“抓捕”交互按钮'],
              ['04', '判定结果', '成功获得宠物 / 失败弹出提示'],
            ].map(([num, title, desc]) => (
              <div className="timeline-row" key={num}>
                <strong>{num}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dark-flow">
          <h3>抓捕判定流程</h3>
          <div className="logic-line">
            <span>执行抓捕</span>
            <span>判定</span>
            <span className="success">抓捕成功</span>
            <span className="danger">抓捕失败</span>
          </div>
          <p>失败分支包含：被其他玩家先行抓捕、刷新结束时间到了、网络异常 / 绘制失败。所有结果均通过通用 Toast 反馈给玩家。</p>
        </div>
        <LoopDiagram title="行为强化循环" items={['随机出没', '限时追逐', '即时反馈', '情感绑定']} />
      </section>

      <section id="house-pet-making" className="section pale-blue">
        <SectionTitle eyebrow="FURNITURE MAKING" title="家具制造" desc="大世界家具制造，连接材料收集与房屋摆放。" />
        <div className="making-grid">
          <div className="vertical-steps">
            {[
              ['01', '获取图纸', '任务 / 玩法获得家具图纸'],
              ['02', '查看条件', '确认材料、数量与消耗'],
              ['03', '调整数量', '步进器控制批量制造'],
              ['04', '确认制造', '消耗材料后即时反馈'],
            ].map(([num, title, desc]) => (
              <div key={num}>
                <strong>{num}</strong>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="shot-ladder">
            <SmartImage src={assets.makingEntry} alt="家具制造入口" />
            <SmartImage src={assets.makingWorld} alt="前往大世界制造家具" />
            <SmartImage src={assets.makingConfirm} alt="制造确认弹窗" />
            <SmartImage src={assets.makingToast} alt="制造成功 Toast" />
          </div>
        </div>
        <div className="method-panel">
          <h3>制造判定流程</h3>
          <div className="logic-line wide">
            <span>点击制造</span>
            <span>判定</span>
            <span className="success">材料充足</span>
            <span className="warning">材料不足</span>
            <span className="warning">数量超限</span>
            <span className="warning">背包不足</span>
          </div>
          <p className="muted">异常用轻提示反馈，不中断玩家当前操作。</p>
          <LoopDiagram title="制作决策循环" items={['图纸目标', '材料收集', '制造反馈', '空间摆放']} />
        </div>
      </section>

      <section id="house-pet-storage" className="section cream">
        <SectionTitle eyebrow="ITEM MANAGEMENT" title="物品管理" desc="临时收纳与物品回收机制。" />
        <div className="image-pair">
          <SmartImage src={assets.emptyPlace} alt="没有临时收纳时的布置状态" />
          <SmartImage src={assets.tempStorage} alt="临时收纳界面" />
        </div>
        <div className="intent-box">
          <strong>设计意图</strong>
          <p>临时收纳的本质不是“回收功能”，而是“安全感设计”——让玩家相信探索是无代价的，从而释放创造力。</p>
        </div>
        <div className="compare-grid">
          <InfoCard title="没有临时收纳" desc="回收 = 永久删除。玩家不敢轻易尝试新布局，探索意愿被恐惧抑制。" tone="red" />
          <InfoCard title="有临时收纳" desc="回收 = 暂存，随时可恢复。操作完全可逆，形成“尝试 → 回收 → 再试”的正向循环。" tone="green" />
        </div>
        <StepFlow
          steps={[
            { title: '长按物品', desc: '触发回收选项浮层' },
            { title: '确认回收', desc: '物品飞入收纳栏动效' },
            { title: '查看收纳', desc: '侧滑展开收纳面板' },
            { title: '重新摆放', desc: '从收纳拖回场景即可' },
          ]}
        />
      </section>

      <section id="house-pet-save" className="section">
        <SectionTitle eyebrow="EXIT & SAVE" title="退出与保存" desc="布置修改保护机制，防止玩家误操作丢失布置进度。" />
        <StepFlow
          steps={[
            { title: '关闭布置界面', desc: '点击关闭按钮' },
            { title: '检测修改', desc: '判断是否有未保存变动' },
            { title: '弹窗确认', desc: '有修改时弹出“是否保存”' },
            { title: '执行操作', desc: '保存布置 / 放弃修改' },
            { title: '退出副本', desc: '再次点击退出可回到大世界' },
          ]}
        />
        <div className="decision-map">
          <div className="decision-title">玩家点击退出按钮 → 弹出确认弹窗：你要保存修改吗？</div>
          <div className="decision-options">
            <InfoCard title="保存并退出" desc="保留全部修改，安全离开。默认选项，最安全。" tone="green" />
            <InfoCard title="不保存退出" desc="放弃本次修改，恢复进入前状态。" tone="orange" />
            <InfoCard title="取消" desc="返回继续编辑，什么都不变。作为误触出口。" tone="blue" />
          </div>
        </div>
        <div className="four-col">
          {[
            ['正常退出', '点击退出按钮', '弹出三选项确认弹窗'],
            ['误触返回', '手势返回 / 物理键', '同样弹出确认弹窗'],
            ['断线 / 切后台', '网络中断 / APP 切换', '自动保存当前状态'],
            ['强制退出', '杀进程 / 崩溃', '下次登录恢复草稿'],
          ].map(([title, desc, meta]) => (
            <InfoCard key={title} title={title} desc={desc} meta={meta} tone="orange" />
          ))}
        </div>
      </section>

      <section id="house-pet-overview" className="section cream">
        <SectionTitle eyebrow="OVERVIEW" title="总览" desc="从发现宠物到完成房屋布置的完整体验链路。" />
        <StepFlow
          steps={[
            { title: '宠物出没', desc: '广播通知' },
            { title: '大世界', desc: '前往抓捕' },
            { title: '抓捕判定', desc: '成功 / 失败' },
            { title: '进入房屋', desc: '布置界面' },
            { title: '选择物品', desc: '进入摆放' },
            { title: '移动旋转', desc: '确定位置' },
            { title: '保存退出', desc: '完成闭环' },
          ]}
        />
        <div className="value-grid">
          <InfoCard title="玩家体验" desc="丰富房屋系统玩法，宠物搜集 + 布置装饰带来双重满足感，提升沉浸感与空间归属感。" />
          <InfoCard title="系统拓展" desc="基于现有房屋布置框架扩展，新增宠物 Tab 与抓捕玩法，为后续物品类型预留扩展空间。" />
          <InfoCard title="开发效率" desc="复用已有布置交互逻辑，关键参数支持后台配置，降低开发与维护成本。" />
        </div>
      </section>

      <section className="section section-blue outcome">
        <SectionTitle eyebrow="DESIGN OUTCOME" title="视觉稿展示" />
        <div className="outcome-grid">
          {[assets.outcome01, assets.outcome02, assets.outcome03, assets.outcome04, assets.outcome05, assets.outcome06].map((src, index) => (
            <SmartImage key={src} src={src} alt={`视觉稿展示 ${index + 1}`} />
          ))}
        </div>
      </section>
      </main>
    </div>
  )
}
