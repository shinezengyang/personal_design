import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, Sparkles, X } from 'lucide-react';

import { ProjectDetailMenu } from '../components/ProjectDetailMenu';
import { getProjectDetailTabs, type ProjectDetailTabKey } from '../components/ProjectDetailTabViews';

const HOME_NAV_ITEMS = [
  { id: 'projects', label: '作品' },
  { id: 'process', label: '流程' },
  { id: 'contact', label: '反馈' },
] as const;

type NavigationProps = {
  activeDetailTab: ProjectDetailTabKey;
  onDetailTabChange: (tab: ProjectDetailTabKey) => void;
};

export default function Navigation({ activeDetailTab, onDetailTabChange }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isProjectCaseIndexPage = location.pathname.startsWith('/projects/') && location.pathname.endsWith('/cases');
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && !isProjectCaseIndexPage;
  const currentProjectId = isProjectDetailPage ? location.pathname.split('/')[2] : undefined;
  const detailTabs = getProjectDetailTabs(currentProjectId);
  const resolvedActiveDetailTab = detailTabs.some((tab) => tab.key === activeDetailTab)
    ? activeDetailTab
    : 'framework';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 24);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
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

  const handleSectionJump = (sectionId: string) => {
    setMenuOpen(false);

    const scrollToTarget = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scrollToTarget, 140);
      return;
    }

    scrollToTarget();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-neon-cyan/10 bg-[#060913]/95 transition-transform duration-300 ${
        isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-16">
        {location.pathname.startsWith('/projects/') ? (
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="返回"
            className="project-top-icon-button group inline-flex h-12 w-12 items-center justify-center rounded-xl text-neon-cyan transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.75)]"
          >
            <ArrowLeft className="h-7 w-7 drop-shadow-[0_0_12px_rgba(0,245,255,0.7)]" />
          </button>
        ) : (
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-neon-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.7)] transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.7)]" />
              <span className="font-mono text-[14px] font-bold tracking-[0.25em] text-neon-cyan drop-shadow-[0_0_12px_rgba(0,245,255,0.5)] transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.7)] sm:text-[15px]">
                Design
              </span>
            </span>
          </Link>
        )}

        <div ref={menuRef} className="relative flex items-center">
          {isProjectCaseIndexPage ? null : !isProjectDetailPage ? (
            <>
            <nav className="hidden items-center gap-10 md:flex">
              {HOME_NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSectionJump(item.id)}
                  className="font-display text-[18px] text-white/88 transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.3)]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-controls="home-nav-menu"
                aria-label="打开站点导航"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neon-cyan/35 bg-[#08111d]/88 text-neon-cyan transition-all duration-300 hover:border-neon-cyan hover:bg-neon-cyan/10 md:hidden"
              >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div
              id="home-nav-menu"
              className={`absolute right-0 top-[calc(100%+14px)] w-[190px] rounded-2xl border border-neon-cyan/25 bg-[#07101b]/96 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.42)] transition-all duration-300 md:hidden ${
                menuOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-2">
                {HOME_NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSectionJump(item.id)}
                    className="rounded-xl border border-neon-cyan/18 bg-[#0a1420]/80 px-4 py-3 text-left font-display text-base text-white/88 transition-all duration-300 hover:border-neon-cyan/45 hover:bg-neon-cyan/8 hover:text-neon-cyan"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            </>
          ) : (
            <ProjectDetailMenu
              activeTab={resolvedActiveDetailTab}
              buttonVariant="plain"
              isOpen={menuOpen}
              menuId="project-detail-top-tab-menu"
              onOpenChange={setMenuOpen}
              onTabChange={onDetailTabChange}
              tabs={detailTabs}
              buttonClassName="project-top-icon-button"
            />
          )}
        </div>
      </div>
    </header>
  );
}
