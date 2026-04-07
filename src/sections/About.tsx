'use client';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;
const vp   = { once: true, margin: '-60px' };

const facts = [
  { label: 'Location', value: 'Accra, Ghana' },
  { label: 'Focus',    value: 'Frontend,Backend & API Engineering' },
  // { label: 'Status',   value: '🟢 Open to work' },
];

const stats = [
  { n: '5+',    l: 'Years experience' },
  { n: '10+',   l: 'Products shipped' },
  { n: '900k+', l: 'Farmers on platform' },
  { n: '5+',    l: 'Companies served' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg)]"
      style={{ background: 'color-mix(in srgb, var(--bg) 97%, var(--accent) 3%)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={vp} transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
          About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] leading-tight mb-6 tracking-tight">
              Building resilient systems<br/>that scale.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4 text-[15px]">
              I&apos;m Abdul Mukhsin Ahmed — a Software Engineer with over five years
              of experience designing and implementing scalable, data-driven systems that
              power enterprise applications across agritech, data collection, farm management,
              voice &amp; SMS messaging, and marketplaces.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-8 text-[15px]">
              I have a deep understanding of API design and microservice architecture, with
              proven expertise in Node.js, Kafka, MongoDB, PostgreSQL, and Redis. I&apos;m
              passionate about optimizing backend performance through asynchronous processing
              and caching strategies that ensure reliability and speed at scale.
            </p>

            {/* Fact list */}
            <div className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--card)] divide-y divide-[var(--border)]">
              {facts.map(f => (
                <div key={f.label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-sm text-[var(--muted)]">{f.label}</span>
                  <span className="text-sm font-medium text-[var(--text)]">{f.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bento cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ delay: 0.12, duration: 0.6, ease }}
            className="grid grid-cols-2 gap-4">

            {/* Profile card — full width */}
            <div className="col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-800 grid place-items-center text-white text-2xl font-bold shrink-0 shadow-lg">
                A
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-[var(--text)]">Abdul Mukhsin Ahmed</p>
                <p className="text-sm text-[var(--muted)] mt-0.5">Software Engineer</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {['Node.js', 'Kafka', 'PostgreSQL', 'Redis'].map(t => (
                    <span key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--accent-10)] text-[var(--accent)] border border-[var(--accent-20)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat cards */}
            {stats.map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp} transition={{ delay: 0.06 * i, duration: 0.4, ease }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--accent-30)] transition-colors">
                <div className="text-3xl font-black text-[var(--text)] mb-1">{s.n}</div>
                <div className="text-xs text-[var(--muted)]">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
