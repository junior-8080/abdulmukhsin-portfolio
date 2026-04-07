'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1200);
  };

  const inputClass =
    'w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent-50)] focus:ring-1 focus:ring-[var(--accent-30)] transition-all';

  return (
    <section id="contact" className="py-28 bg-[var(--bg)]"
      style={{ background: 'color-mix(in srgb, var(--bg) 97%, var(--accent) 3%)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>

            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight leading-tight mb-5">
              Let&apos;s build something{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #06b6d4))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                great together.
              </span>
            </h2>
            <p className="text-[var(--muted)] leading-relaxed text-[15px] mb-10">
              I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
              freelance project, or just a conversation. My inbox is always open.
            </p>

            {/* Contact links */}
            <div className="space-y-3 mb-10">
              <a href="mailto:aabdulmukhsin@gmail.com"
                className="flex items-center gap-4 group p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent-30)] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-10)] border border-[var(--accent-20)] grid place-items-center text-[var(--accent)] shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[var(--muted)] mb-0.5">Email</p>
                  <p className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    aabdulmukhsin@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+233545543359"
                className="flex items-center gap-4 group p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent-30)] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-10)] border border-[var(--accent-20)] grid place-items-center text-[var(--accent)] shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[var(--muted)] mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    +233 54 554 3359
                  </p>
                </div>
              </a>
            </div>

            {/* Social pills */}
            <div className="flex flex-wrap gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border)] text-xs text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent-40)] transition-all">
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.6, ease }}>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease }}
                  className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-10)] border border-[var(--accent-20)] grid place-items-center text-[var(--accent)] mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Message sent!</h3>
                  <p className="text-sm text-[var(--muted)]">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">Name</label>
                      <input
                        type="text" required placeholder="John Doe"
                        className={inputClass}
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">Email</label>
                      <input
                        type="email" required placeholder="john@example.com"
                        className={inputClass}
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">Message</label>
                    <textarea
                      required rows={5} placeholder="Tell me about your project..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit" disabled={status === 'sending'}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #06b6d4))' }}>
                    {status === 'sending' ? 'Sending…' : 'Send message →'}
                  </button>

                  <p className="text-center text-[11px] text-[var(--muted)]">
                    I typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}