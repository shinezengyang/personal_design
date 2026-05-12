import { Menu, X } from 'lucide-react';
import { PROJECT_DETAIL_TABS, type ProjectDetailTabKey } from './ProjectDetailTabViews';

type ProjectDetailMenuProps = {
  activeTab: ProjectDetailTabKey;
  align?: 'left' | 'right';
  buttonClassName?: string;
  buttonVariant?: 'boxed' | 'plain';
  isOpen: boolean;
  menuId?: string;
  onOpenChange: (open: boolean) => void;
  onTabChange: (tab: ProjectDetailTabKey) => void;
};

export function ProjectDetailMenu({
  activeTab,
  align = 'right',
  buttonClassName = '',
  buttonVariant = 'boxed',
  isOpen,
  menuId = 'project-detail-tab-menu',
  onOpenChange,
  onTabChange,
}: ProjectDetailMenuProps) {
  const buttonBase =
    buttonVariant === 'plain'
      ? `relative z-30 inline-flex items-center gap-3 rounded-none border border-transparent bg-transparent px-6 py-2 font-display text-sm font-semibold tracking-[0.24em] transition-all duration-300 ${
          isOpen
            ? 'text-white drop-shadow-[0_0_14px_rgba(0,245,255,0.78)]'
            : 'text-neon-cyan hover:text-white hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.7)]'
        }`
      : 'cyber-btn inline-flex h-[50px] items-center gap-3 px-4 py-0';

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="打开更多内容页签"
        className={`${buttonBase} ${buttonClassName}`}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span>更多</span>
      </button>

      <div
        id={menuId}
        className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-[calc(100%+12px)] z-20 isolate w-[190px] overflow-hidden rounded-2xl border border-neon-cyan/58 bg-[#06192e]/88 p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.76),0_0_30px_rgba(0,245,255,0.2),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_38px_rgba(0,245,255,0.08)] backdrop-blur-[22px] backdrop-saturate-150 transition-all duration-300 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,245,255,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025)_38%,rgba(0,245,255,0.06))]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/35"
          aria-hidden
        />
        <div className="relative flex flex-col gap-1.5">
          {PROJECT_DETAIL_TABS.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  onTabChange(tab.key);
                  onOpenChange(false);
                }}
                className={`relative overflow-hidden rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-neon-cyan/62 bg-neon-cyan/18 shadow-[0_0_18px_rgba(0,245,255,0.38),inset_0_0_24px_rgba(0,245,255,0.13)] hover:border-neon-cyan hover:bg-neon-cyan/24 hover:shadow-[0_0_24px_rgba(0,245,255,0.52),inset_0_0_28px_rgba(0,245,255,0.16)]'
                    : 'border-white/10 bg-[#050b16]/85 opacity-70 hover:border-neon-cyan/55 hover:bg-neon-cyan/8 hover:opacity-100 hover:shadow-[0_0_14px_rgba(0,245,255,0.18)]'
                }`}
              >
                {isActive ? (
                  <span
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(0,245,255,0.35),rgba(0,245,255,0.08),rgba(255,255,255,0.12))]"
                    aria-hidden
                  />
                ) : null}
                <div
                  className={`relative font-display text-lg font-bold leading-none ${
                    isActive ? 'neon-text-cyan' : 'text-neon-cyan'
                  }`}
                >
                  {tab.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
