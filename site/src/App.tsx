import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';

import Navigation from './sections/Navigation';
import CursorGlow from './sections/CursorGlow';
import type { ProjectDetailTabKey } from './components/ProjectDetailTabViews';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const HighSeasCaseIndex = lazy(() => import('./pages/HighSeasCaseIndex'));
const QingyuCaseIndex = lazy(() => import('./pages/QingyuCaseIndex'));
const WorkflowDetail = lazy(() => import('./pages/WorkflowDetail'));

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function isProjectDetailTabKey(value: unknown): value is ProjectDetailTabKey {
  return (
    value === 'framework' ||
    value === '1' ||
    value === '2' ||
    value === '3' ||
    value === '4' ||
    value === '5' ||
    value === '6' ||
    value === '7' ||
    value === '8' ||
    value === '9' ||
    value === '10' ||
    value === '11' ||
    value === '12' ||
    value === '13' ||
    value === '14' ||
    value === '15' ||
    value === '16' ||
    value === '17' ||
    value === '18' ||
    value === '19'
  );
}

function AppShell() {
  const location = useLocation();
  const [activeDetailTab, setActiveDetailTab] = useState<ProjectDetailTabKey>('framework');
  const hideAmbientScanLine = location.pathname === '/projects/qingyu-nian' && activeDetailTab === '19';

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    ScrollTrigger.refresh();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0);
      document.documentElement.style.scrollBehavior = 'auto';
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith('/projects/')) {
      const detailTab = (location.state as { detailTab?: unknown } | null)?.detailTab;
      setActiveDetailTab(isProjectDetailTabKey(detailTab) ? detailTab : 'framework');
    }
  }, [location.pathname, location.state]);

  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const frame = window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [location.key]);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="fixed inset-0 hex-pattern pointer-events-none opacity-50" />
      <div className={`scan-line${hideAmbientScanLine ? ' hidden' : ''}`} />
      <CursorGlow />

      <Navigation
        activeDetailTab={activeDetailTab}
        onDetailTabChange={setActiveDetailTab}
      />

      <main className="relative z-10">
        <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflow" element={<WorkflowDetail />} />
            <Route path="/projects/xingji-aodaisai/cases" element={<HighSeasCaseIndex />} />
            <Route path="/projects/qingyu-nian/cases" element={<QingyuCaseIndex />} />
            <Route
              path="/projects/:projectId"
              element={
                <ProjectDetail
                  activeDetailTab={activeDetailTab}
                  onDetailTabChange={setActiveDetailTab}
                />
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

export default App;

