import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, TestTube, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: '研究与分析',
    description: '深入了解游戏类型、目标用户和竞品分析，建立清晰的设计方向和用户画像。',
    icon: Search,
    details: ['用户调研', '竞品分析', '需求梳理', '设计目标'],
  },
  {
    id: 2,
    title: '原型设计',
    description: '从低保真线框图到高保真交互原型，快速验证设计概念和交互流程。',
    icon: PenTool,
    details: ['信息架构', '线框图', '交互原型', '视觉设计'],
  },
  {
    id: 3,
    title: '交付与上线',
    description: '与开发团队紧密协作，确保设计完美落地，并持续监控上线效果。',
    icon: Rocket,
    details: ['设计规范', '开发协作', '质量把控', '上线监控'],
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
  const nodeRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const stepElements = stepRefs.current;
    const nodeElements = nodeRefs.current;

    if (!section || !line) return;

    const triggers: ScrollTrigger[] = [];

    // Line draw animation
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });

    lineTl.fromTo(
      line,
      { scaleY: 0 },
      { scaleY: 1, ease: 'none' }
    );

    if (lineTl.scrollTrigger) triggers.push(lineTl.scrollTrigger);

    // Step animations
    stepElements.forEach((step, index) => {
      const isLeft = index % 2 === 0;

      const stepTl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      stepTl.fromTo(
        step,
        { x: isLeft ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      );

      if (stepTl.scrollTrigger) triggers.push(stepTl.scrollTrigger);
    });

    // Node activation
    nodeElements.forEach((node, index) => {
      const nodeTl = gsap.timeline({
        scrollTrigger: {
          trigger: stepRefs.current[index],
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      nodeTl.to(node, {
        scale: 1,
        borderColor: '#00f5ff',
        backgroundColor: '#00f5ff',
        duration: 0.5,
        ease: 'expo.out',
      });

      if (nodeTl.scrollTrigger) triggers.push(nodeTl.scrollTrigger);
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-neon-purple" />
            <span className="section-number">03</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-neon-purple" />
          </div>
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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block">
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
        </div>
      </div>
    </section>
  );
};

export default Process;

