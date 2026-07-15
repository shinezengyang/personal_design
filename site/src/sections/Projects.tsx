import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Project } from '../lib/projects';
import { loadProjects } from '../lib/projects';
import { publicUrl } from '../lib/publicUrl';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Glitch Text ─────────────── */
const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => (
  <span className={`projects-glitch-text ${className}`} data-text={text}>{text}</span>
);

/* ─────────────── Project Card ─────────────── */
const ProjectCard = ({
  project, index,
}: {
  project: Project; index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* 3D tilt on image hover */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(imgRef.current, { rotateY: x * 12, rotateX: -y * 8, scale: 1.02, duration: 0.4, ease: 'power2.out' });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
  }, []);

  /* ScrollTrigger entrance animation */
  useEffect(() => {
    if (!cardRef.current || !imgRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      // Image slides in from the side
      const imgDir = index % 2 === 0 ? -80 : 80;
      tl.fromTo(imgRef.current,
        { x: imgDir, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' },
        0
      );

      // Content elements stagger in
      const reveals = contentRef.current!.querySelectorAll<HTMLElement>('[data-reveal]');
      tl.fromTo(reveals,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'expo.out' },
        0.15
      );

      // Decorative line grows
      const line = cardRef.current!.querySelector<HTMLElement>('[data-line]');
      if (line) {
        tl.fromTo(line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: 'expo.out' },
          0.1
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const isEven = index % 2 === 0;
  const projectHref =
    project.id === 'xingji-aodaisai'
      ? '/projects/xingji-aodaisai/cases'
      : project.id === 'qingyu-nian'
        ? '/projects/qingyu-nian/cases'
        : `/projects/${project.id}`;

  return (
    <div
      ref={cardRef}
      className={`relative pb-16 lg:pb-24 ${index === 0 ? 'pt-8 lg:pt-12' : 'pt-16 lg:pt-24'}`}
    >
      {/* Ambient glow behind card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.04] ${
          isEven ? 'right-[10%] bg-[#00f5ff]' : 'left-[10%] bg-[#ff00ff]'
        }`} />
      </div>

      {/* Decorative separator line */}
      <div
        data-line
        className="mx-auto mb-12 lg:mb-16 origin-left"
        style={{
          width: 'min(80%, 1100px)',
          height: '1px',
          background: isEven
            ? 'linear-gradient(90deg, rgba(0,245,255,0.4), rgba(0,245,255,0.05) 70%, transparent)'
            : 'linear-gradient(270deg, rgba(255,0,255,0.4), rgba(255,0,255,0.05) 70%, transparent)',
        }}
      />

      {/* Main card layout */}
      <div className={`relative z-10 flex w-full max-w-[1300px] mx-auto px-6 lg:px-12 items-center gap-10 lg:gap-16 ${
        isEven ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'
      }`}>
        {/* Image */}
        <Link
          to={projectHref}
          ref={imgRef}
          className="relative w-full lg:w-[55%] aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group"
          style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          aria-label={`查看${project.title}详情`}
        >
          {/* Neon border glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[#00f5ff]/25 via-transparent to-[#ff00ff]/25 z-20 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

          <img
            src={publicUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={project.imageObjectPosition ? { objectPosition: project.imageObjectPosition } : undefined}
          />

          {/* Scanline overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,245,255,0.03) 2px, rgba(0,245,255,0.03) 4px)',
          }} />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-[#00f5ff]/50 z-20" />
          <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-[#00f5ff]/50 z-20" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-[#ff00ff]/50 z-20" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-[#ff00ff]/50 z-20" />

        </Link>

        {/* Content */}
        <div ref={contentRef} className={`relative w-full lg:w-[45%] space-y-5 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
          {/* Category + Tags */}
          <div data-reveal className={`flex items-center gap-3 flex-wrap ${isEven ? '' : 'lg:justify-end'}`}>
            <span className="font-mono text-xs tracking-[3px] text-[#ff00ff] uppercase">{project.category}</span>
            <span className="w-px h-4 bg-[#ff00ff]/30" />
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-mono tracking-wider border border-[#00f5ff]/20 rounded-full text-[#00f5ff]/60 bg-[#00f5ff]/5 hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]/40 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron',sans-serif] font-black leading-tight">
            <GlitchText text={project.title} className="neon-text-cyan" />
          </h3>

          {/* Publisher */}
          {project.publisher && (
            <p data-reveal className="text-sm font-mono text-[#a0a0b0] tracking-wider">{project.publisher}</p>
          )}

          {/* Description */}
          <p
            data-reveal
            className={`text-base lg:text-lg leading-relaxed text-[#a0a0b0] max-w-md ${
              isEven ? '' : 'lg:ml-auto lg:text-right'
            }`}
          >
            {project.description}
          </p>

          {/* CTA Button */}
          <div data-reveal className={`flex gap-4 pt-3 ${isEven ? '' : 'lg:justify-end'}`}>
            <Link
              to={projectHref}
              className="group/btn relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#b829dd] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 border border-[#00f5ff] group-hover/btn:border-transparent transition-colors duration-500" />
              <Eye className="relative z-10 w-4 h-4 text-[#00f5ff] group-hover/btn:text-[#0a0a0f] transition-colors duration-500" />
              <span className="relative z-10 font-['Orbitron',sans-serif] text-xs tracking-[2px] uppercase text-[#00f5ff] group-hover/btn:text-[#0a0a0f] transition-colors duration-500">
                查看详情
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────── Main Projects Section ─────────────── */
const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const ac = new AbortController();
    loadProjects(ac.signal).then(setProjectsData).catch(() => setProjectsData([]));
    return () => ac.abort();
  }, []);

  /* Header entrance animation */
  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current!.querySelectorAll('[data-header-reveal]'),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  if (projectsData.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 lg:py-32"
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Section header */}
      <div
        ref={headerRef}
        className="relative z-10 mx-auto mb-8 flex w-full max-w-[1300px] flex-col items-center justify-center px-6 text-center lg:mb-12 lg:px-12"
      >
        <h2 data-header-reveal className="text-4xl sm:text-5xl lg:text-6xl font-['Orbitron',sans-serif] font-black neon-text-pink">
          精选作品
        </h2>
        <p data-header-reveal className="mx-auto mt-4 max-w-2xl text-center text-base font-mono tracking-wider text-[#a0a0b0]">
          游戏交互设计实战案例，从需求分析到体验落地
        </p>
      </div>

      {/* Project cards */}
      <div className="relative z-10 space-y-8 lg:space-y-0">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Corner ambient glows */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,0,255,0.03) 0%, transparent 70%)' }} />
    </section>
  );
};

export default Projects;
