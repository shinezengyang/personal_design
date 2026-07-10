import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Wand2, Film, Terminal, type LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type SkillItem = { name: string; level: number; barWidthPx?: number };

type SkillCategory = { title: string; icon: LucideIcon; skills: SkillItem[] };

const skillCategories: SkillCategory[] = [
  {
    title: '设计工具',
    icon: Wand2,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Photoshop', level: 90 },
    ],
  },
  {
    title: '游戏引擎',
    icon: Code,
    skills: [
      { name: 'Unity UGUI', level: 90 },
      { name: 'Unreal Engine UMG', level: 90 },
    ],
  },
  {
    title: '动效工具',
    icon: Film,
    skills: [{ name: 'After Effects', level: 90 }],
  },
  {
    title: '编程语言',
    icon: Terminal,
    // If your resume lists different languages, tell me and I’ll update the exact set.
    skills: [{ name: 'C#', level: 90 }],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<HTMLDivElement[]>([]);
  const progressRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    // Strict Mode double-mount: progress refs are pushed, so stale detached nodes can remain.
    // Only animate elements still in the document.
    const categories = categoryRefs.current.filter(
      (el): el is HTMLDivElement => el != null && el.isConnected
    );
    const progressBars = progressRefs.current.filter((el) => el.isConnected);

    if (!section) return;

    const triggers: ScrollTrigger[] = [];

    // Category reveal
    categories.forEach((category, index) => {
      const categoryTl = gsap.timeline({
        scrollTrigger: {
          trigger: category,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      categoryTl.fromTo(
        category,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: 'expo.out' }
      );

      if (categoryTl.scrollTrigger) triggers.push(categoryTl.scrollTrigger);
    });

    // Progress bar animation
    progressBars.forEach((bar) => {
      const barPx = bar.getAttribute('data-bar-px');
      const widthPct = bar.getAttribute('data-width');
      const barTl = gsap.timeline({
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      if (barPx != null && barPx !== '') {
        const px = parseFloat(barPx);
        barTl.fromTo(
          bar,
          { width: '0px' },
          { width: `${px}px`, duration: 1, ease: 'expo.out' }
        );
      } else {
        barTl.fromTo(
          bar,
          { width: '0%' },
          { width: `${widthPct}%`, duration: 1, ease: 'expo.out' }
        );
      }

      if (barTl.scrollTrigger) triggers.push(barTl.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      progressRefs.current = progressRefs.current.filter((el) => el.isConnected);
    };
  }, []);

  const addToCategoryRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      categoryRefs.current[index] = el;
    }
  };

  const addToProgressRefs = (el: HTMLDivElement | null) => {
    if (el && !progressRefs.current.includes(el)) {
      progressRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-24 px-6 sm:px-12 lg:px-24 hex-pattern"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">04</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold neon-text-cyan mb-4">
            专业技能
          </h2>
          <p className="text-cyber-gray max-w-xl">
            多年积累的专业技能，涵盖设计、开发、建模等多个领域
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                ref={(el) => addToCategoryRefs(el, categoryIndex)}
                className="glass-card p-6 sm:p-8 card-glow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/30">
                    <Icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <h3 className="text-xl font-display font-bold neon-text-cyan">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm font-mono neon-text-cyan">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="cyber-progress">
                        <div
                          ref={addToProgressRefs}
                          data-width={skill.level}
                          data-bar-px={
                            skill.barWidthPx != null ? String(skill.barWidthPx) : undefined
                          }
                          className="cyber-progress-bar"
                          style={
                            skill.barWidthPx != null
                              ? { width: `${skill.barWidthPx}px` }
                              : undefined
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Stats — full width on large screens (outside max-w-6xl) */}
      <div className="mt-16 w-full max-w-none grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { value: '50+', label: '设计系统' },
          { value: '100+', label: '界面设计' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-6 text-center card-glow">
            <p className="text-4xl font-display font-bold neon-text-pink mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-cyber-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

