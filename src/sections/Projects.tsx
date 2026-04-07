'use client';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    title:       'Farmer Data Platform',
    subtitle:    'Agritech · Backend System',
    description: 'Highly scalable platform managing profiles and geospatial field data for 900,000+ farmers. Features a Kafka-based queue, automated payment dispatching, and Elasticsearch for real-time analytics and dashboard reporting.',
    tech:        ['Node.js', 'Kafka', 'PostgreSQL', 'Elasticsearch', 'Redis'],
    gradient:    'bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700',
    wide:        true,
  },
  {
    title:       'Insyt',
    subtitle:    'SaaS · Data Collection',
    description: 'Dynamic data collection platform for capturing structured field data at scale, with analytics and reporting capabilities.',
    tech:        ['Node.js', 'React', 'PostgreSQL', 'MongoDB'],
    gradient:    'bg-gradient-to-br from-emerald-500 to-teal-700',
  },
  {
    title:       'Agribusiness Marketplace',
    subtitle:    'Marketplace · Agritech',
    description: 'Platform for agribusinesses to buy and sell commodities and services, bridging the gap between producers, aggregators, and buyers.',
    tech:        ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    gradient:    'bg-gradient-to-br from-orange-500 to-rose-600',
  },
  {
    title:       'Agent Management Platform',
    subtitle:    'Operations · Field Management',
    description: 'Scalable backend for thousands of field agents — tracking training progress, computing task-based commissions, and enabling seamless mobile money withdrawals.',
    tech:        ['Node.js', 'PostgreSQL', 'Mobile Money APIs', 'Redis'],
    gradient:    'bg-gradient-to-br from-sky-500 to-blue-700',
  },
  {
    title:       'Multi-vendor E-Commerce',
    subtitle:    'E-Commerce · Fullstack',
    description: 'Multi-vendor e-commerce application enabling vendors to create custom storefronts for product browsing and ordering.',
    tech:        ['React', 'Next.js', 'Node.js', 'MongoDB'],
    gradient:    'bg-gradient-to-br from-pink-500 to-fuchsia-700',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight">Selected projects</h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
            href="https://github.com/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent-40)] transition-all shrink-0">
            View all on GitHub
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i}/>)}
        </div>
      </div>
    </section>
  );
}