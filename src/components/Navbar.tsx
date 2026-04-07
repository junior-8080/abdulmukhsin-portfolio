'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export interface NavbarProps { dark: boolean; onToggle: () => void; }

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('#home');
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { threshold: 0.25 }
    );
    NAV.forEach(n => { const el = document.getElementById(n.href.slice(1)); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-90)] backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[var(--accent)] grid place-items-center text-white text-xs font-bold">A</span>
          <span className="text-sm font-semibold text-[var(--text)]">
            Abdulmukhsin<span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(n => (
            <a key={n.href} href={n.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                active === n.href
                  ? 'bg-[var(--accent-10)] text-[var(--accent)] font-medium'
                  : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
              }`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onToggle} aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg grid place-items-center text-[var(--muted)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
            {dark
              ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            }
          </button>

          <a href="#contact"
            className="hidden md:inline-flex px-4 py-1.5 rounded-lg bg-[var(--text)] text-[var(--bg)] text-xs font-semibold hover:opacity-80 transition-opacity">
            Hire Me
          </a>

          <button onClick={() => setOpen(v => !v)}
            className="md:hidden w-8 h-8 grid place-items-center text-[var(--text)]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--bg-95)] backdrop-blur-xl">
            <div className="px-5 py-3 flex flex-col gap-1">
              {NAV.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm ${
                    active === n.href ? 'text-[var(--accent)] font-medium' : 'text-[var(--muted)]'
                  }`}>
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}