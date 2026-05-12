import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';

import Navigation from './sections/Navigation';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import WorkflowDetail from './pages/WorkflowDetail';
import type { ProjectDetailTabKey } from './components/ProjectDetailTabViews';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function AppShell() {
  const location = useLocation();
  const [activeDetailTab, setActiveDetailTab] = useState<ProjectDetailTabKey>('framework');

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
      setActiveDetailTab('framework');
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="fixed inset-0 hex-pattern pointer-events-none opacity-50" />
      <div className="scan-line" />

      <Navigation
        activeDetailTab={activeDetailTab}
        onDetailTabChange={setActiveDetailTab}
      />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workflow" element={<WorkflowDetail />} />
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

