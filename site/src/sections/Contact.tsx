import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Check, Ellipsis, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SubmitState = 'idle' | 'sending';
type FieldErrors = Partial<Record<'name' | 'contact' | 'message', string>>;

const contactPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?\d[\d\s-]{5,}\d$/,
};

const isValidContact = (value: string) => {
  const trimmed = value.trim();
  const digitOnly = trimmed.replace(/[\s-]/g, '');

  return (
    contactPatterns.email.test(trimmed) ||
    (contactPatterns.phone.test(trimmed) && /^\+?\d{7,15}$/.test(digitOnly))
  );
};

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const isSending = submitState === 'sending';

  useEffect(() => {
    if (!contentRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true });

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

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => timeline.restart(),
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const clearFieldError = (field: keyof FieldErrors) => {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validateForm = () => {
    const nextErrors: FieldErrors = {};

    if (!name.trim()) {
      nextErrors.name = '请填写称呼。';
    }

    if (!contact.trim()) {
      nextErrors.contact = '请填写联系方式。';
    } else if (!isValidContact(contact)) {
      nextErrors.contact = '联系方式格式不正确，请填写邮箱或手机号/电话。';
    }

    if (!message.trim()) {
      nextErrors.message = '请填写意见内容。';
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    if (!validateForm()) {
      return;
    }

    setSubmitState('sending');

    await new Promise((resolve) => window.setTimeout(resolve, 1200));

    setName('');
    setContact('');
    setMessage('');
    setFieldErrors({});
    setSubmitState('idle');
    setShowSuccessToast(true);

    window.setTimeout(() => setShowSuccessToast(false), 8000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[760px] overflow-hidden px-6 pb-24 pt-28 sm:px-12 lg:px-24 cyber-grid"
    >
      <div
        className={`fixed left-1/2 top-20 z-[80] inline-flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-neon-cyan bg-[#07101b]/98 px-6 py-4 font-display text-base font-bold tracking-[0.16em] text-neon-cyan shadow-[0_18px_60px_rgba(0,0,0,0.5),0_0_32px_rgba(0,245,255,0.36)] backdrop-blur-xl transition-all duration-300 ${
          showSuccessToast ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-4 scale-95 opacity-0'
        }`}
        role="status"
        aria-live="polite"
      >
        <Check className="h-5 w-5" />
        发送成功
      </div>

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

          <div className="relative z-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label data-contact-field className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">称呼</span>
                <input
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearFieldError('name');
                  }}
                  disabled={isSending}
                  aria-invalid={Boolean(fieldErrors.name)}
                  placeholder="请输入称呼"
                  className={`h-12 w-full rounded-xl border bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 disabled:cursor-not-allowed disabled:opacity-60 ${
                    fieldErrors.name
                      ? 'border-[#ff2a6d]/70 focus:border-[#ff2a6d] focus:shadow-[0_0_24px_rgba(255,42,109,0.18)]'
                      : 'border-neon-cyan/18 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]'
                  }`}
                />
                {fieldErrors.name ? <p className="mt-2 text-sm font-semibold text-[#ff8aae]">{fieldErrors.name}</p> : null}
              </label>

              <label data-contact-field className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">联系方式</span>
                <input
                  value={contact}
                  onChange={(event) => {
                    setContact(event.target.value);
                    clearFieldError('contact');
                  }}
                  disabled={isSending}
                  aria-invalid={Boolean(fieldErrors.contact)}
                  placeholder="邮箱 / 电话"
                  className={`h-12 w-full rounded-xl border bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 disabled:cursor-not-allowed disabled:opacity-60 ${
                    fieldErrors.contact
                      ? 'border-[#ff2a6d]/70 focus:border-[#ff2a6d] focus:shadow-[0_0_24px_rgba(255,42,109,0.18)]'
                      : 'border-neon-cyan/18 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]'
                  }`}
                />
                {fieldErrors.contact ? <p className="mt-2 text-sm font-semibold text-[#ff8aae]">{fieldErrors.contact}</p> : null}
              </label>
            </div>

            <label data-contact-field className="mt-5 block">
              <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">意见内容</span>
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  clearFieldError('message');
                }}
                disabled={isSending}
                aria-invalid={Boolean(fieldErrors.message)}
                placeholder="比如：哪个案例表达不清楚、哪块布局太空、哪个按钮不明显……"
                rows={8}
                className={`w-full resize-none rounded-2xl border bg-[#0b1320]/80 px-4 py-4 text-base leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/24 disabled:cursor-not-allowed disabled:opacity-60 ${
                  fieldErrors.message
                    ? 'border-[#ff2a6d]/70 focus:border-[#ff2a6d] focus:shadow-[0_0_24px_rgba(255,42,109,0.18)]'
                    : 'border-neon-cyan/18 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]'
                }`}
              />
              {fieldErrors.message ? <p className="mt-2 text-sm font-semibold text-[#ff8aae]">{fieldErrors.message}</p> : null}
            </label>

            <div data-contact-field className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-neon-cyan bg-neon-cyan/8 px-7 font-display text-sm font-bold tracking-[0.18em] text-neon-cyan transition-all duration-300 hover:bg-neon-cyan hover:text-[#060913] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] disabled:cursor-not-allowed disabled:border-white/12 disabled:text-white/28 disabled:hover:bg-transparent disabled:hover:shadow-none"
              >
                {isSending ? '发送中' : '发送意见'}
                {isSending ? (
                  <Ellipsis className="h-5 w-5 animate-pulse" />
                ) : (
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
