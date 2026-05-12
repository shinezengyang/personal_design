import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    const triggers: ScrollTrigger[] = [];

    // Form animation
    const formTl = gsap.timeline({
      scrollTrigger: {
        trigger: form,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    formTl.fromTo(
      form,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
    );

    if (formTl.scrollTrigger) triggers.push(formTl.scrollTrigger);

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mouse tracking for gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePos({ x, y });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复。');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-[400px] pt-0 pb-12 px-6 sm:px-12 lg:px-24 flex items-start cyber-grid"
    >
      {/* Mouse-following gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 245, 255, 0.1) 0%, transparent 40%)`,
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 pt-10 sm:pt-12">

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 sm:p-10 mb-8"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-neon-cyan font-mono">
                <Phone className="h-4 w-4" />
                电话/微信
              </label>
              <p className="flex h-8 items-center bg-black/50 px-2.5 text-cyber-gray">
                18202172773
              </p>
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-neon-cyan font-mono">
                <Mail className="h-4 w-4" />
                邮箱
              </label>
              <p className="flex h-8 items-center bg-black/50 px-2.5 text-cyber-gray">
                504795591@qq.com
              </p>
            </div>
          </div>

        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-cyber-gray font-mono">
            {'<'} © 2026 曾加熺. 游戏交互设计师. 保留所有权利. {'/>'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

