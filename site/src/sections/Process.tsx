import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Search, PenTool, TestTube, Rocket, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: '研究与分析',
    description: '借助Gemini强大的AI搜索能力，深入了解游戏类型、目标用户和竞品分析，建立清晰的设计方向和用户画像。',
    icon: Search,
    details: ['用户调研', '竞品分析', '需求梳理', '设计目标'],
  },
  {
    id: 2,
    title: '原型设计',
    description: '使用Figma软件，并且结合Claude code强大的需求分析与UI设计能力，绘制低/高保真交互原型，快速验证设计概念和交互流程。',
    icon: PenTool,
    details: ['信息架构', '线框图', '交互原型', '视觉设计'],
  },
  {
    id: 3,
    title: '交付与上线',
    description: '在Unity中进行界面制作，与开发团队紧密协作，确保设计完美落地，并持续监控上线效果。',
    icon: Rocket,
    details: ['控件规范', '开发协作', '质量把控', '上线监控'],
  },
  {
    id: 4,
    title: '测试与迭代',
    description: '通过用户测试收集反馈，持续优化设计，确保最佳的用户体验。',
    icon: TestTube,
    details: ['可用性测试', '数据分析', '问题修复', '持续优化'],
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const nodeRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const stepElements = stepRefs.current;
    const cardElements = cardRefs.current;
    const nodeElements = nodeRefs.current;

    if (!section || !line) return;

    const triggers: ScrollTrigger[] = [];

    // Line draw animation
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom 95%',
        scrub: 0.25,
      },
    });

    lineTl.fromTo(
      line,
      { scaleY: 0 },
      { scaleY: 1, duration: 1, ease: 'none' }
    );

    if (lineTl.scrollTrigger) triggers.push(lineTl.scrollTrigger);

    // Step animations
    cardElements.forEach((card, index) => {
      const isLeft = index % 2 === 0;

      const stepTl = gsap.timeline({
        scrollTrigger: {
          trigger: stepElements[index],
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      stepTl.fromTo(
        card,
        { x: isLeft ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      );

      const node = nodeElements[index];
      if (node) {
        stepTl.fromTo(
          node,
          { scale: 0, borderColor: 'rgba(0,245,255,0.25)', backgroundColor: 'rgba(0,245,255,0)' },
          {
            scale: 1,
            borderColor: '#00f5ff',
            backgroundColor: '#00f5ff',
            duration: 0.45,
            ease: 'back.out(2.4)',
          },
          0.05
        );
      }

      if (stepTl.scrollTrigger) triggers.push(stepTl.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToStepRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      stepRefs.current[index] = el;
    }
  };

  const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  const addToNodeRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      nodeRefs.current[index] = el;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 px-6 sm:px-12 lg:px-24 cyber-grid"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold neon-text-purple mb-4">
            设计流程
          </h2>
          <p className="text-cyber-gray max-w-xl mx-auto">
            系统化的设计方法论，确保每个项目都能交付高质量的成果
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-28 w-px -translate-x-1/2 hidden lg:block">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink origin-top"
              style={{ height: '100%', transform: 'scaleY(0)' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  ref={(el) => addToStepRefs(el, index)}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div
                    ref={(el) => addToCardRefs(el, index)}
                    className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}
                  >
                    <div
                      className={`glass-card p-6 sm:p-8 inline-block max-w-lg card-glow ${
                        isLeft ? 'lg:ml-auto' : 'lg:mr-auto'
                      }`}
                    >
                      {/* Step Number */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/50">
                          <Icon className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <span className="font-mono text-sm text-neon-cyan">
                          STEP_{step.id}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-cyber-gray text-sm sm:text-base mb-4">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-400"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Node */}
                  <div
                    ref={(el) => addToNodeRefs(el, index)}
                    className="timeline-node-cyber hidden lg:flex z-10"
                    style={{ transform: 'scale(0)' }}
                  />

                  {/* Empty space */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>

          <div className="relative z-20 mt-16 flex justify-center">
            <Link
              to="/workflow"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-none border border-neon-cyan/70 bg-[#06111d]/78 px-8 py-4 font-display text-[16px] font-bold tracking-[0.18em] text-neon-cyan transition-all duration-300 hover:border-neon-cyan hover:bg-neon-cyan/10 hover:text-white hover:shadow-[0_0_28px_rgba(0,245,255,0.22)]"
            >
              <span className="absolute inset-y-0 left-0 w-px bg-neon-cyan/80 shadow-[0_0_14px_rgba(0,245,255,0.9)]" />
              <span className="relative">流程详情</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
