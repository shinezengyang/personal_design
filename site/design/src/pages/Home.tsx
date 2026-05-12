import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Process from '../sections/Process';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

export default function Home() {
  useEffect(() => {
    const scrollToSectionFromHash = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#') return;

      // HashRouter uses '#/...' for routes. We only treat '#projects' style
      // (plain anchors without leading '/') as in-page scroll targets.
      const normalized = hash.slice(1);
      if (normalized.startsWith('/')) return;

      const el = document.getElementById(normalized);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Initial attempt + on future hash changes
    const raf = requestAnimationFrame(scrollToSectionFromHash);
    window.addEventListener('hashchange', scrollToSectionFromHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('hashchange', scrollToSectionFromHash);
    };
  }, []);

  return (
    <div className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Process />
      <Skills />
      <Contact />
    </div>
  );
}
