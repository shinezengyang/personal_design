import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, GraduationCap, MapPin, Phone, Terminal } from 'lucide-react';

import { DEFAULT_HERO_COPY, loadHeroCopy } from '../lib/heroCopy';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const [copy, setCopy] = useState(DEFAULT_HERO_COPY);

  useEffect(() => {
    const ac = new AbortController();
    loadHeroCopy(ac.signal)
      .then(setCopy)
      .catch(() => {
        setCopy(DEFAULT_HERO_COPY);
      });
    return () => ac.abort();
  }, []);

  // Cyberpunk Grid Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const gridSize = 60;
    const perspective = 0.6;

    const draw = () => {
      // Dark background with slight purple tint
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.02;

      // Draw perspective grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)';
      ctx.lineWidth = 1;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Horizontal lines with perspective
      for (let i = 0; i < 20; i++) {
        const y = centerY + (i * gridSize * perspective) + (Math.sin(time + i * 0.3) * 5);
        const alpha = Math.max(0, 1 - i / 15) * 0.3;
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines converging to center
      for (let i = -20; i <= 20; i++) {
        const x = centerX + i * gridSize;
        const alpha = Math.max(0, 1 - Math.abs(i) / 15) * 0.2;
        ctx.strokeStyle = `rgba(184, 41, 221, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + i) * 3, centerY);
        ctx.lineTo(x * 1.5 + Math.sin(time + i) * 5, canvas.height);
        ctx.stroke();
      }

      // Floating data particles
      for (let i = 0; i < 30; i++) {
        const x = ((time * 50 + i * 100) % (canvas.width + 200)) - 100;
        const y = (Math.sin(time + i) * 100 + canvas.height / 2) + i * 20;
        const size = Math.random() * 2 + 1;
        
        ctx.fillStyle = i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#ff00ff' : '#b829dd';
        ctx.globalAlpha = 0.3 + Math.sin(time * 2 + i) * 0.2;
        ctx.fillRect(x, y, size, size);
      }
      ctx.globalAlpha = 1;

      // Scan line effect
      const scanY = canvas.height > 0 ? (time * 100) % canvas.height : 0;
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.5, 'rgba(0, 245, 255, 0.1)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 50, canvas.width, 100);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const desc = descRef.current;
    const btn = btnRef.current;
    if (!title || !subtitle || !desc || !btn) return;

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo(title, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.1 })
      .to(title, { x: 10, duration: 0.05 })
      .to(title, { x: -5, duration: 0.05 })
      .to(title, { x: 0, duration: 0.05 })
      .fromTo(
        subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        desc,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        btn,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.4'
      );

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);

    return () => {
      tl.kill();
      clearInterval(glitchInterval);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cyberpunk Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          zIndex: 1,
        }}
      >
        {/* Neon rings */}
        <div
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-neon-cyan/30 rounded-full animate-pulse"
          style={{ transform: 'translateZ(-100px)', boxShadow: '0 0 30px rgba(0, 245, 255, 0.2)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 border border-neon-pink/20 rounded-full"
          style={{ transform: 'translateZ(-200px)', animation: 'spin 20s linear infinite' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-neon-purple/40 rounded-full animate-float"
          style={{ transform: 'translateZ(-150px)' }}
        />

        {/* Floating hexagons */}
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 border border-neon-cyan/40"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto flex w-full flex-row flex-wrap items-end justify-between gap-x-6 gap-y-2 absolute top-[60px] px-10 z-20">
        <div className="flex flex-row flex-wrap items-end gap-6">
          <div className="flex items-start justify-start gap-2 text-cyber-gray">
            <MapPin className="w-4 h-4 shrink-0 text-neon-cyan" />
            <span className="text-sm">上海, 中国</span>
          </div>
          <div className="flex items-start justify-start gap-2 text-cyber-gray">
            <Phone className="w-4 h-4 shrink-0 text-neon-cyan" />
            <span className="text-sm">18202172773</span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 text-cyber-gray sm:text-right">
          <GraduationCap className="w-4 h-4 shrink-0 text-neon-cyan" />
          <span className="text-sm">牡丹江师范学院-动画设计-全日制本科</span>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-10"
        style={{
          transform: `rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Terminal-style header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-neon-cyan" />
          <span className="font-mono text-xs text-neon-cyan/70 tracking-widest">
            {copy.terminalLine}
          </span>
        </div>

        <p
          ref={subtitleRef}
          className="font-mono text-[22px] tracking-[0.5em] text-neon-pink mb-4 uppercase"
        >
          {copy.name}
        </p>

        <h1
          ref={titleRef}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 ${
            glitchActive ? 'animate-glitch' : ''
          }`}
        >
          <span className="neon-text-cyan">{copy.titleLine1}</span>
          <br />
          <span className="text-white">{copy.titleLine2}</span>
        </h1>

        <p
          ref={descRef}
          className="text-cyber-gray text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {copy.description}
        </p>

        <button
          ref={btnRef}
          onClick={scrollToProjects}
          className="cyber-btn group"
        >
          <span className="relative z-10 flex items-center gap-2">
            {copy.cta}
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </span>
        </button>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
    </section>
  );
};

export default Hero;
