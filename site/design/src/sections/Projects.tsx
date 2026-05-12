import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Eye, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Project } from '../lib/projects';
import { loadProjects } from '../lib/projects';
import { publicUrl } from '../lib/publicUrl';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const ac = new AbortController();
    loadProjects(ac.signal)
      .then((list) => setProjectsData(list))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setProjectsData([]);
      });
    return () => ac.abort();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const track = trackRef.current;

    if (!section || !container || !track) return;
    if (projectsData.length === 0) return;

    const cards = cardRefs.current;
    const totalWidth = track.scrollWidth - window.innerWidth;

    // Horizontal scroll animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    scrollTl.to(track, {
      x: -totalWidth,
      ease: 'none',
    });

    // Card tilt based on scroll velocity
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const velocity = (scrollTop - lastScrollTop) * 0.1;
      lastScrollTop = scrollTop;

      cards.forEach((card) => {
        if (card) {
          gsap.to(card, {
            skewY: Math.max(-3, Math.min(3, velocity)),
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollTl.scrollTrigger?.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectsData.length]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const image = card.querySelector('.project-image') as HTMLElement;
    const content = card.querySelector('.project-content') as HTMLElement;

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.5,
      ease: 'power2.out',
    });

    if (image) {
      gsap.to(image, {
        x: x * 20,
        y: y * 20,
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    if (content) {
      gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'expo.out',
      });
    }
  };

  const handleCardMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const image = card.querySelector('.project-image') as HTMLElement;
    const content = card.querySelector('.project-content') as HTMLElement;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      skewY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });

    if (image) {
      gsap.to(image, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    if (content) {
      gsap.to(content, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  };

  const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen overflow-hidden hex-pattern"
    >
      {/* Section Header */}
      <div className="absolute top-0 left-0 w-full pt-24 px-6 sm:px-12 lg:px-24 z-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-number">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-neon-pink to-transparent" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold neon-text-pink">
          精选作品
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-screen pt-40">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 sm:px-12 lg:px-24 h-[70vh] items-center"
          style={{ width: 'fit-content' }}
        >
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => addToCardRefs(el, index)}
              className="relative w-[80vw] sm:w-[60vw] lg:w-[45vw] h-full flex-shrink-0 rounded-xl overflow-hidden cursor-pointer card-3d gradient-border"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              onMouseMove={(e) => handleCardMouseMove(e, index)}
              onMouseLeave={() => handleCardMouseLeave(index)}
            >
              {/* Project Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={publicUrl(project.image)}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                  style={
                    project.imageObjectPosition
                      ? { objectPosition: project.imageObjectPosition }
                      : undefined
                  }
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Category */}
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-4 h-4 text-neon-pink" />
                  <p className="font-mono text-sm text-neon-pink">{project.category}</p>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3 neon-text-cyan">
                  {project.title}
                </h3>

                {/* Description */}
                <div
                  className="project-content opacity-0 translate-y-5"
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                  <p className="text-gray-300 text-sm sm:text-base mb-4 max-w-md">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/projects/${project.id}`}
                      className="cyber-btn text-xs py-2 px-4 inline-flex items-center justify-center"
                    >
                      <Eye className="w-3 h-3 inline mr-1" />
                      查看详情
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2 border border-neon-pink/50 text-neon-pink text-xs rounded hover:bg-neon-pink/10 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      访问链接
                    </button>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-neon-pink/50" />
            </div>
          ))}

          {/* End Card - CTA */}
          <div className="w-[40vw] sm:w-[30vw] h-full flex-shrink-0 flex items-center justify-center">
            <div className="text-center glass-card p-8">
              <p className="text-cyber-gray mb-4 font-mono">{'[ 想看更多？ ]'}</p>
              <a
                href="https://my.feishu.cn/wiki/space/7419895428958044163?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn inline-flex items-center justify-center"
              >
                查看全部作品
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {projectsData.map((_, index) => (
          <div
            key={index}
            className="w-8 h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full"
              style={{ width: '0%', transition: 'width 0.3s' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
