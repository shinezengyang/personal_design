import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import type { AboutCopy } from '../lib/aboutCopy';
import { DEFAULT_ABOUT_COPY, loadAboutCopy } from '../lib/aboutCopy';
import { publicUrl } from '../lib/publicUrl';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [about, setAbout] = useState<AboutCopy>(DEFAULT_ABOUT_COPY);

  const splitByTopicLabel = (text: string) => {
    const chunks = text
      .split('；')
      .map((s) => s.trim())
      .filter(Boolean);

    const isNewTopicChunk = (chunk: string) => {
      const colonIndex = chunk.indexOf('：');
      return colonIndex > 0 && colonIndex <= 12;
    };

    const result: string[] = [];
    let current = '';

    chunks.forEach((chunk, idx) => {
      if (isNewTopicChunk(chunk)) {
        if (current) result.push(current);
        current = chunk;
        return;
      }

      // Continuation of previous topic; keep semicolon between merged parts.
      if (current) {
        current = `${current}；${chunk}`;
      } else {
        current = chunk;
      }

      // Keep tail content if string doesn't end with topic label.
      if (idx === chunks.length - 1 && current) {
        result.push(current);
        current = '';
      }
    });

    if (current) result.push(current);
    return result.length ? result : [text];
  };

  /** 「标签：」全角冒号前的文案统一加粗 */
  const renderDescriptionLine = (line: string) => {
    const colon = '：';
    const i = line.indexOf(colon);
    if (i === -1) {
      return line;
    }
    const label = line.slice(0, i + 1);
    const rest = line.slice(i + 1);
    return (
      <>
        <strong className="font-bold">{label}</strong>
        {rest}
      </>
    );
  };

  useEffect(() => {
    const ac = new AbortController();
    loadAboutCopy(ac.signal)
      .then(setAbout)
      .catch(() => {
        setAbout(DEFAULT_ABOUT_COPY);
      });
    return () => ac.abort();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;

    if (!section || !imageContainer || !image) return;

    const triggers: ScrollTrigger[] = [];

    // Image reveal animation
    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    imgTl.fromTo(
      imageContainer,
      { rotateY: -30, opacity: 0 },
      { rotateY: 0, opacity: 1 }
    );

    if (imgTl.scrollTrigger) triggers.push(imgTl.scrollTrigger);

    // Image parallax
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    parallaxTl.fromTo(image, { rotateY: -10 }, { rotateY: 10 });

    if (parallaxTl.scrollTrigger) triggers.push(parallaxTl.scrollTrigger);

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    const section = sectionRef.current;
    if (!section) return;

    const texts = section.querySelectorAll<HTMLElement>('[data-about-text]');
    texts.forEach((text, index) => {
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      textTl.fromTo(
        text,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: 'expo.out' }
      );

      if (textTl.scrollTrigger) triggers.push(textTl.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [
    about.paragraphs.join('|'),
    about.experienceTitle,
    about.experiences?.map((e) => `${e.heading}|${e.description}`).join('|') ?? '',
  ]);

  const handleImageMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const container = imageContainerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(image, {
      rotateY: x * 20,
      rotateX: -y * 20,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleImageMouseLeave = () => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen py-24 px-6 sm:px-12 lg:px-24 cyber-grid"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">{about.sectionNumber}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold neon-text-cyan">
            {about.sectionTitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image */}
          <div
            ref={imageContainerRef}
            className="relative perspective-container"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <div className="relative aspect-[3/4] lg:aspect-[3/5] overflow-hidden rounded-lg gradient-border">
              <div
                ref={imageRef}
                className="about-portrait-cyber-inner relative h-full w-full overflow-hidden bg-[#050508]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={publicUrl('about-portrait.png')}
                  alt={about.portraitAlt}
                  className="about-portrait-cyber-img h-full w-full object-cover object-[center_15%] scale-[1.06]"
                />
                {/* 青 / 品红双霓虹染色 */}
                <div
                  className="pointer-events-none absolute inset-0 z-[1] mix-blend-color-dodge opacity-90"
                  style={{
                    background:
                      'linear-gradient(125deg, rgba(0,245,255,0.22) 0%, transparent 42%, rgba(255,0,255,0.18) 100%)',
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[2] mix-blend-overlay opacity-80"
                  style={{
                    background:
                      'radial-gradient(ellipse 85% 70% at 50% 35%, rgba(0,245,255,0.12) 0%, transparent 55%)',
                  }}
                />
                {/* 底部压暗，偏雨夜城市氛围 */}
                <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-[#030308] via-[#050510]/40 to-transparent" />
                <div className="about-portrait-cyber-scanlines absolute inset-0 z-[4]" />
                <div className="about-portrait-cyber-chrome absolute inset-0 z-[5]" />
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-xl">
              <p className="font-mono text-xs text-neon-cyan">{about.statusLabel}</p>
              <p className="font-display text-sm text-white font-bold">{about.statusText}</p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-10">
            {/* Bio paragraphs */}
            <div className="space-y-4">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-cyber-gray leading-relaxed text-base sm:text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display text-xl font-bold text-neon-pink mb-6">
                {about.experienceTitle}
              </h3>
              <div className="space-y-6">
                {about.experiences.map((exp, i) => (
                  <div key={i} className="glass-card rounded-xl p-5">
                    <p className="font-mono text-sm text-neon-cyan mb-2">{exp.heading}</p>
                    <div className="space-y-2">
                      {splitByTopicLabel(exp.description).map((chunk, j) => (
                        <p key={j} className="text-cyber-gray text-xs leading-relaxed">
                          {chunk}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
