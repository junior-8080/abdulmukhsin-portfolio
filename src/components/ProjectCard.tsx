'use client';
import { motion } from 'framer-motion';

export interface Project {
  title:       string;
  subtitle:    string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  gradient:    string;
  wide?:       boolean;
}

export default function ProjectCard({ p, i }: { p: Project; i: number }) {
  const href = p.live ?? p.github ?? '#';
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden
        hover:border-[var(--accent-40)] hover:shadow-2xl hover:shadow-[var(--accent-5)]
        hover:-translate-y-1 transition-all duration-300
        ${p.wide ? 'sm:col-span-2' : ''}`}
    >
      {/* Gradient preview */}
      <div className={`${p.gradient} h-52 relative overflow-hidden shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {p.tech.slice(0, 3).map(t => (
            <span key={t}
              className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-black/50 text-white/90 backdrop-blur-sm border border-white/10">
              {t}
            </span>
          ))}
          {p.tech.length > 3 && (
            <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-black/50 text-white/60 backdrop-blur-sm border border-white/10">
              +{p.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">{p.subtitle}</p>
          <h3 className="font-semibold text-[var(--text)] text-base mb-2 group-hover:text-[var(--accent)] transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">{p.description}</p>
        </div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border)]">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Source
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          )}
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="ml-auto w-8 h-8 rounded-full border border-[var(--border)] grid place-items-center text-[var(--muted)] hover:bg-[var(--text)] hover:text-[var(--bg)] hover:border-[var(--text)] transition-all">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
