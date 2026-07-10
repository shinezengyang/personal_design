import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import type { Project } from '../lib/projects';
import { loadProjects } from '../lib/projects';
import { getProjectDetailTabs, type ProjectDetailTabKey } from '../components/ProjectDetailTabViews';

type CaseSearchResult = {
  id: string;
  projectId: string;
  projectTitle: string;
  tabKey: ProjectDetailTabKey;
  label: string;
  group: string;
  keywords: string;
};

/**
 * Hero search control — live-filters the portfolio projects and shows a
 * dropdown of matches. Enter goes to the top match; an empty query scrolls
 * to the projects section (preserving the old CTA behaviour).
 */
const HeroSearch = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    loadProjects(ac.signal).then(setProjects).catch(() => setProjects([]));
    return () => ac.abort();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return projects
      .flatMap<CaseSearchResult>((project) =>
        getProjectDetailTabs(project.id)
          .filter((tab) => tab.key !== 'framework')
          .map((tab) => {
            const [group = '案例'] = tab.label.split('-');
            return {
              id: `${project.id}:${tab.key}`,
              projectId: project.id,
              projectTitle: project.title,
              tabKey: tab.key,
              label: tab.label,
              group,
              keywords: [
                tab.label,
                group,
                project.title,
                project.category,
                project.publisher,
                project.description,
                ...(project.tags || []),
              ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase(),
            };
          }),
      )
      .filter((item) => item.keywords.includes(q))
      .slice(0, 6);
  }, [query, projects]);

  // Close the dropdown when clicking outside.
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const goTo = (result: CaseSearchResult) => {
    navigate(`/projects/${result.projectId}`, { state: { detailTab: result.tabKey } });
    setOpen(false);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length) goTo(results[Math.min(active, results.length - 1)]);
    else scrollToProjects();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-md text-left">
      <form
        onSubmit={onSubmit}
        className="group flex items-center gap-2 rounded-full border border-[#00f5ff]/40 bg-[#06121e]/70 px-3 py-2 backdrop-blur-md transition-all duration-300 focus-within:border-[#00f5ff] focus-within:shadow-[0_0_24px_rgba(0,245,255,0.25)]"
      >
        <Search className="h-5 w-5 shrink-0 text-[#00f5ff]" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="系统/养成/玩法/活动"
          aria-label="搜索作品"
          className="min-w-0 flex-1 bg-transparent font-mono text-sm tracking-wider text-white placeholder:text-[#5b6b7e] focus:outline-none"
        />
        <button
          type="submit"
          aria-label="搜索"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00f5ff]/10 text-[#00f5ff] transition-colors duration-300 hover:bg-[#00f5ff]/20"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-[#00f5ff]/30 bg-[#06141f]/95 shadow-[0_24px_70px_rgba(0,0,0,0.7),0_0_30px_rgba(0,245,255,0.12)] backdrop-blur-xl">
          {results.length > 0 ? (
            <ul className="py-1.5">
              {results.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => goTo(p)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                      i === active ? 'bg-[#00f5ff]/12' : 'hover:bg-[#00f5ff]/8'
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-display text-base font-bold text-white">{p.label}</span>
                      <span className="mt-1 block truncate font-mono text-[10px] tracking-[1.5px] text-[#7b8fa5]">
                        {p.projectTitle}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full border border-[#00f5ff]/25 px-2.5 py-1 font-mono text-[10px] tracking-[2px] text-[#00f5ff]/70">
                      {p.group}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-5 text-center font-mono text-xs tracking-wider text-[#5b6b7e]">
              未找到匹配的案例
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
