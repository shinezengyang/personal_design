const NOTES = [
  { n: '1', title: '系统功能导航栏：', desc: '底部切换船舱、挂机、世界等系统的主要入口。' },
  { n: '2', title: '页签栏：', desc: '切换战舰、武器等养成页签的区域。' },
  { n: '3', title: '操作栏：', desc: '放置升级、强化等当前界面核心操作按钮的区域。' },
  { n: '4', title: '战舰信息详情栏：', desc: '展示技能、属性与详情说明的信息区域。' },
  { n: '5', title: '战舰主要信息展示区域：', desc: '展示战舰模型与等级、战力等核心信息的区域。' },
  { n: '6', title: '界面标题栏：', desc: '显示界面标题、角色名与等级等顶部信息区域。' },
];

export function StructureLayerNXVgFNotes({ embedded = false }: { embedded?: boolean }) {
  const outerClass = embedded
    ? ''
    : 'rounded-xl border border-[#87C8BC]/25 bg-[#122338]/55 px-5 py-4 sm:px-6 sm:py-5';
  return (
    <div className={outerClass}>
      <p className="text-center text-[16px] font-semibold leading-relaxed text-[#E8E8E8]">
        在菜单系统中采用了模块化设计，同级系统中采取了相似的布局系统，保证玩家体验的一致性
      </p>
      <div className="mt-4 space-y-3 text-[16px] font-[600] leading-relaxed text-[#C1D4CE]">
        {NOTES.map((item) => (
          <p key={`nxvgf-${item.n}`} className="flex items-start gap-3 leading-relaxed">
            <span className="mt-[5px] inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#A3D9C1] text-[12px] font-bold leading-none text-[#0b1320]">
              {item.n}
            </span>
            <span>
              <span className="font-semibold text-[#A3D9C1]">{item.title}</span>
              {item.desc}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
