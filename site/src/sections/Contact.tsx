import type { FormEvent } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorText, setErrorText] = useState('');

  const endpoint = useMemo(() => {
    return (import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined) || '/api/feedback';
  }, []);

  const canSubmit = message.trim().length >= 4 && submitState !== 'sending';

  useEffect(() => {
    if (!contentRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      });

      timeline
        .fromTo(
          '[data-contact-title]',
          { y: 44, scale: 0.96, opacity: 0, filter: 'blur(14px)' },
          { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'expo.out' }
        )
        .fromTo(
          '[data-contact-form]',
          { y: 70, scale: 0.965, opacity: 0, filter: 'blur(8px)' },
          { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.95, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '[data-contact-field]',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: 'power2.out' },
          '-=0.48'
        );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      setSubmitState('error');
      setErrorText('先写一点意见内容再发送。');
      return;
    }

    setSubmitState('sending');
    setErrorText('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || '匿名访客',
          contact: contact.trim(),
          message: message.trim(),
          source: 'portfolio-contact-section',
          page: window.location.href,
          userAgent: window.navigator.userAgent,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmitState('success');
      setName('');
      setContact('');
      setMessage('');
    } catch (error) {
      console.error('Feedback submit failed:', error);
      setSubmitState('error');
      setErrorText('暂时发送失败，检查服务器接口或 VITE_FEEDBACK_ENDPOINT 配置。');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[760px] overflow-hidden px-6 pb-24 pt-28 sm:px-12 lg:px-24 cyber-grid"
    >
      <div className="pointer-events-none absolute left-[18%] top-[24%] h-72 w-72 rounded-full bg-neon-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[18%] bottom-[12%] h-80 w-80 rounded-full bg-neon-cyan/10 blur-[130px]" />

      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-5xl px-0 sm:px-4 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 data-contact-title className="text-4xl font-display font-bold neon-text-cyan sm:text-5xl lg:text-6xl">
            意见反馈
          </h2>
        </div>

        <form
          data-contact-form
          onSubmit={handleSubmit}
          className="relative w-full overflow-hidden rounded-[28px] border border-neon-cyan/35 bg-[linear-gradient(135deg,rgba(9,39,61,0.82),rgba(15,17,38,0.78))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.42),0_0_70px_rgba(0,245,255,0.1)] backdrop-blur-2xl backdrop-saturate-150 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,245,255,0.14),transparent_38%,rgba(255,0,255,0.1))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-neon-cyan/85" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-neon-purple/85" />

          <div className="relative z-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label data-contact-field className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">称呼</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="可以匿名"
                  className="h-12 w-full rounded-xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
                />
              </label>

              <label data-contact-field className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">联系方式</span>
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder="邮箱 / 微信 / 电话"
                  className="h-12 w-full rounded-xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
                />
              </label>
            </div>

            <label data-contact-field className="mt-5 block">
              <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">意见内容</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="比如：哪个案例表达不清楚、哪块布局太空、哪个按钮不明显……"
                rows={8}
                className="w-full resize-none rounded-2xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 py-4 text-base leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
              />
            </label>

            <div data-contact-field className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-white/42">
                接口：<span className="font-mono text-neon-cyan/70">{endpoint}</span>
              </p>

              <button
                type="submit"
                disabled={!canSubmit}
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-neon-cyan bg-neon-cyan/8 px-7 font-display text-sm font-bold tracking-[0.18em] text-neon-cyan transition-all duration-300 hover:bg-neon-cyan hover:text-[#060913] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] disabled:cursor-not-allowed disabled:border-white/12 disabled:text-white/28 disabled:hover:bg-transparent disabled:hover:shadow-none"
              >
                {submitState === 'sending' ? '发送中' : '发送意见'}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {submitState === 'success' && (
              <div className="mt-5 rounded-xl border border-neon-cyan/35 bg-neon-cyan/10 px-4 py-3 text-sm text-neon-cyan">
                已发送成功，我会在服务器里看到这条反馈。
              </div>
            )}

            {submitState === 'error' && (
              <div className="mt-5 rounded-xl border border-[#ff2a6d]/35 bg-[#ff2a6d]/10 px-4 py-3 text-sm text-[#ff8aae]">
                {errorText}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
