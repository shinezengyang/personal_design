import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorText, setErrorText] = useState('');

  const endpoint = useMemo(() => {
    return (import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined) || '/api/feedback';
  }, []);

  const canSubmit = message.trim().length >= 4 && submitState !== 'sending';

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
      <div className="pointer-events-none absolute left-1/2 top-16 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-neon-cyan/55 to-transparent" />
      <div className="pointer-events-none absolute left-[18%] top-[24%] h-72 w-72 rounded-full bg-neon-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[18%] bottom-[12%] h-80 w-80 rounded-full bg-neon-cyan/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-0 sm:px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="relative w-full overflow-hidden rounded-[28px] border border-neon-cyan/28 bg-[#070b13]/86 p-6 shadow-[0_0_90px_rgba(0,245,255,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,245,255,0.1),transparent_34%,rgba(255,0,255,0.08))]" />
          <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-neon-cyan/85" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-neon-purple/85" />

          <div className="relative z-10">
            <div className="mb-7 flex items-end justify-between gap-4 border-b border-neon-cyan/12 pb-5">
              <div>
                <p className="font-mono text-xs font-bold tracking-[0.28em] text-neon-pink">CONTACT</p>
                <h3 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">意见反馈</h3>
              </div>
              <div className="rounded-full border border-neon-cyan/25 px-3 py-1 font-mono text-xs text-neon-cyan/80">
                POST
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">称呼</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="可以匿名"
                  className="h-12 w-full rounded-xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">联系方式</span>
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder="邮箱 / 微信 / 电话"
                  className="h-12 w-full rounded-xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold tracking-[0.12em] text-white/70">意见内容</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="比如：哪个案例表达不清楚、哪块布局太空、哪个按钮不明显……"
                rows={8}
                className="w-full resize-none rounded-2xl border border-neon-cyan/18 bg-[#0b1320]/80 px-4 py-4 text-base leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/24 focus:border-neon-cyan/70 focus:shadow-[0_0_26px_rgba(0,245,255,0.14)]"
              />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
