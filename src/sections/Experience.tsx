'use client';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const jobs = [
  {
    role:    'Backend Developer',
    company: 'Broadspectrum Limited',
    type:    'Full-time',
    period:  '04/2023 — Present',
    bullets: [
      'Built a Farmer Data Platform managing profiles and geospatial field data for 900,000+ farmers, with a Kafka-based queue, automated payment dispatching, and Elasticsearch for real-time analytics.',
      'Designed an agribusiness marketplace bridging commodity buyers and sellers across the agricultural sector.',
      'Developed a subsidy platform for tracking and managing agricultural subsidy programs.',
      'Built an aggregation platform for monitoring commodity purchases and enabling farmer payments via mobile money, eliminating cash transactions.',
      'Developed a scalable Agent Management Platform for thousands of field agents — tracking training progress, computing commissions, and automating mobile money withdrawals.',
      'Integrated SMS API for notification delivery and code verification.',
    ],
    tech: ['Node.js', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    role:    'Fullstack Developer',
    company: 'Esoko Limited',
    type:    'Full-time',
    period:  '10/2020 — 03/2023',
    bullets: [
      'Optimized system performance by enhancing the retrieval, storage, and processing of large datasets.',
      'Developed Insyt (dynamic data collection), Analytics (reporting & data analysis), People (people management), and Push (SMS & voice messaging) platforms.',
      'Implemented a map widget showing GPS data and geospatial polygons from collected field data.',
      'Designed an internal web application for generating invoices and creating payment links.',
    ],
    tech: ['Node.js', 'React', 'PostgreSQL', 'MongoDB', 'SMS APIs'],
  },
  {
    role:    'Frontend Developer',
    company: 'Freelance — Softinhub · Tomati · BigData Ghana',
    type:    'Contract',
    period:  '2019 — 2020',
    bullets: [
      'Built a multi-vendor e-commerce application enabling vendors to create custom storefronts for browsing and ordering.',
      'Contributed to a Restaurant Management System for Chicken Republic — streamlining order processing, rider tools, and admin oversight.',
      'Developed a bulk SMS web application and integrated Fidelity Bank payment gateway for BigData Ghana.',
    ],
    tech: ['React', 'Next.js', 'JavaScript', 'Payment APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[var(--bg)]"
      style={{ background: 'color-mix(in srgb, var(--bg) 97%, var(--accent) 3%)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease }}
          className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight">Where I&apos;ve worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-[var(--border)] hidden sm:block"/>

          <div className="flex flex-col gap-5">
            {jobs.map((j, i) => (
              <motion.div key={j.company}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="sm:pl-14 relative">

                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-5 w-[38px] h-[38px] rounded-full items-center justify-center bg-[var(--bg)] border-2 border-[var(--accent)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"/>
                </div>

                <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent-30)] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-[var(--text)] text-lg">{j.role}</h3>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-10)] text-[var(--accent)] border border-[var(--accent-20)]">
                          {j.type}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--accent)] mt-0.5 font-medium">{j.company}</p>
                    </div>
                    <span className="text-xs text-[var(--muted)] px-3 py-1.5 rounded-full border border-[var(--border)] shrink-0">
                      {j.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {j.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className="text-[var(--accent)] mt-0.5 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {j.tech.map(t => (
                      <span key={t}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[var(--border)] text-[var(--muted)] border border-[var(--border)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}