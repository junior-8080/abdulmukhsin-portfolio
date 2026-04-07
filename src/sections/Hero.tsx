'use client';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;
const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg)]">

      {/* Background glow */}
      <div className="glow w-[700px] h-[700px] top-[-150px] left-1/2 -translate-x-1/2 opacity-[0.08] dark:opacity-[0.14]"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, #7c3aed 45%, transparent 70%)' }}/>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}/>

      <div className="relative max-w-5xl mx-auto w-full px-6 pt-28 pb-20 text-center">

        {/* Status pill */}
        <motion.div {...anim(0)} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...anim(0.08)} className="font-bold tracking-tight leading-[1.05] mb-6">
          <span className="block text-[clamp(2.8rem,7vw,6.5rem)] grad-text">
            Abdul Mukhsin Ahmed
          </span>
          <span className="block text-[clamp(1.5rem,3.8vw,3.2rem)] text-[var(--muted)] font-medium mt-3">
            Software Engineer
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p {...anim(0.16)}
          className="text-[var(--muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Designing scalable, data-driven systems for enterprise applications —
          microservice APIs, event-driven pipelines, and high-throughput backends.
        </motion.p>

        {/* CTAs */}
        <motion.div {...anim(0.24)} className="flex flex-wrap justify-center gap-3 mb-20">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] text-sm font-semibold hover:opacity-80 transition-opacity">
            View My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text)] text-sm font-medium hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors">
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...anim(0.32)}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 pt-8 border-t border-[var(--border)]">
          {[
            { n: '5+',   l: 'Years experience' },
            { n: '900k+', l: 'Farmers on platform' },
            { n: '10+',  l: 'Products shipped' },
            { n: '5+',   l: 'Companies served' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-[var(--text)]">{s.n}</div>
              <div className="text-xs text-[var(--muted)] mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <svg className="w-4 h-4 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
