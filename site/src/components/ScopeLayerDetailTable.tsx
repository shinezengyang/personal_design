import { ResponsiveScaleFrame } from './ResponsiveScaleFrame';

type ScopeRow = {
  module: string;
  features: string[];
  priorities: string[];
  descriptions: string[];
};

const rows: ScopeRow[] = [
  {
    module: '探险系统',
    features: [
      '消耗道具栏区域',
      '战斗场景区域',
      '合成台区域',
      '常规功能菜单栏区域',
      '运营活动菜单栏区域',
      '战舰等级信息区域',
      '技能栏',
      '装置栏',
      '副舰栏',
      '聊天栏',
      '任务栏',
    ],
    priorities: ['1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1'],
    descriptions: [
      '金币、钻石等显示的区域',
      '战舰在海上战斗的场景',
      '能够摆机台或装置的台子',
      '商店、背包、邮件等常规按钮显示的区域',
      '常规活动和节日活动等按钮显示的区域',
      '战舰当前等级和经验条',
      '当前装配的技能可自动释放',
      '当前装配上的装置，通过合成台获得',
      '护卫舰、舰首、藏品、无人机、指挥显示的区域',
      '玩家聊天快捷显示的的区域',
      '当前任务区域',
    ],
  },
  {
    module: '船舱系统',
    features: [
      '能源区域',
      '生活区域',
      '军备区域',
      '俘虏展示',
      '情报中心',
      '侦测气球',
      '城墙',
      '科技',
      '贸易港',
      '修理厂',
      '指挥塔台',
      '仓库区域',
    ],
    priorities: ['1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '2'],
    descriptions: [
      '轮机组、能源采集舱、金属冶炼舱等显示的区域',
      '居住舱、厨房、医疗舱显示的区域',
      '造船厂、舰队、军事指挥舱显示的区域',
      '战胜其他舰长后掠夺对方机械为伴鸽的功能',
      '消耗机段情报可以连续洞察，提升侦查能力值',
      '可以查看各种事件任务的装置',
      '船舱的血量',
      '提升各类经济和战斗相关的能力值',
      '能够进行跑商的功能',
      '能够修理战船的功能',
      '能够实装最新的战船养成情况',
      '储存各类能源的区域',
    ],
  },
  {
    module: '养成系统',
    features: ['战舰系统', '武器系统', '英雄系统'],
    priorities: ['1', '1', '1'],
    descriptions: ['主体设备', '战舰上的武器', '战舰上的船员'],
  },
  {
    module: '公会系统',
    features: ['公会信息', '公会排行', '科技', '公会玩法', '集合', '成员', '设置'],
    priorities: ['1', '1', '2', '1', '1', '1', '1'],
    descriptions: [
      '战舰在海上战斗的场景',
      '能够摆机台或装置的台子',
      '可打开玩家当前的战术属性面板按钮',
      '当前需要完成的任务详情',
      '可打开玩家的勋章详情按钮',
      '战舰',
      '生命值',
    ],
  },
  {
    module: '世界系统',
    features: [
      '消耗道具栏区域',
      '运营活动菜单栏区域',
      '野外区域',
      '野外玩法菜单栏区域',
      '常规功能菜单栏区域',
      '坐骑区域',
      '聊天栏区域',
    ],
    priorities: ['1', '1', '1', '1', '1', '1', '1'],
    descriptions: [
      '金币、钻石等显示的区域',
      '常规活动和节日活动等按钮显示的区域',
      '玩家基地、野怪、资源、地貌等显示的区域',
      '野外相关玩法',
      '商店、背包、邮件等常规按钮显示的区域',
      '野外当前坐标和收藏坐标牵动能',
      '玩家聊天快捷显示的区域',
    ],
  },
];

export function ScopeLayerDetailTable() {
  return (
    <div className="mt-6 sm:p-1">
      <div className="mx-auto max-w-[1440px]">
        <ResponsiveScaleFrame minDesignWidth={1329} maxScale={1.08} className="pb-2">
          <div className="w-[1329px]">
            <div className="mb-6 grid grid-cols-[170px_65px_370px_12px_170px_12px_530px] rounded-[16px] border border-neon-cyan/45 bg-[#131A2A] shadow-[0_0_12px_rgba(0,245,255,0.4)]">
              <div className="py-3 text-center font-display text-[24px] font-bold text-white">模块名称</div>
              <div aria-hidden />
              <div className="py-3 text-center font-display text-[24px] font-bold text-white">功能名称</div>
              <div aria-hidden />
              <div className="py-3 text-center font-display text-[24px] font-bold text-white">优先级</div>
              <div aria-hidden />
              <div className="py-3 text-center font-display text-[24px] font-bold text-white">描述</div>
            </div>

            <div className="space-y-10">
              {rows.map((row) => {
                const lineCount = Math.max(row.features.length, row.priorities.length, row.descriptions.length);

                return (
                  <section key={row.module} className="grid grid-cols-[170px_1fr] items-center gap-[65px]">
                    <div className="flex justify-center">
                      <div className="inline-flex min-h-[122px] w-[170px] items-center justify-center rounded-full border border-fuchsia-400/75 bg-[#131A2A] px-4 text-center font-display text-[24px] font-bold text-white shadow-[0_0_10px_rgba(255,0,255,0.4)]">
                        {row.module}
                      </div>
                    </div>

                    <div className="grid grid-cols-[370px_170px_530px] gap-x-[12px]">
                      <div className="flex flex-col gap-y-[10px] rounded-[8px] border border-neon-cyan/45 bg-[#131A2A] px-[22px] py-4 text-center font-display text-[16px] font-medium text-white shadow-[0_0_12px_rgba(0,245,255,0.4)]">
                        {Array.from({ length: lineCount }).map((_, idx) => (
                          <div key={`${row.module}-feature-${idx}`} className="flex h-[26px] items-center justify-center leading-none">
                            {row.features[idx] ?? ''}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-[10px] rounded-[8px] border border-neon-cyan/45 bg-[#131A2A] px-[14px] py-4 text-center font-mono text-[16px] font-medium text-white shadow-[0_0_12px_rgba(0,245,255,0.4)]">
                        {Array.from({ length: lineCount }).map((_, idx) => (
                          <div key={`${row.module}-priority-${idx}`} className="flex h-[26px] items-center justify-center leading-none">
                            {row.priorities[idx] ?? ''}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-[10px] rounded-[8px] border border-neon-cyan/45 bg-[#131A2A] px-[14px] py-4 text-center font-display text-[14px] font-medium text-white shadow-[0_0_12px_rgba(0,245,255,0.4)]">
                        {Array.from({ length: lineCount }).map((_, idx) => (
                          <div key={`${row.module}-description-${idx}`} className="flex h-[26px] items-center justify-center leading-none">
                            {row.descriptions[idx] ?? ''}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </ResponsiveScaleFrame>
      </div>
    </div>
  );
}
