'use client';
import { useState, useEffect } from 'react';
import Navbar     from '@/components/Navbar';
import Footer     from '@/components/Footer';
import Hero       from '@/sections/Hero';
import About      from '@/sections/About';
import Projects   from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Skills     from '@/sections/Skills';
import Contact    from '@/sections/Contact';

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => { setDark(document.documentElement.classList.contains('dark')); }, []);

  const toggle = () => setDark(p => {
    const n = !p;
    document.documentElement.classList.toggle('dark', n);
    localStorage.setItem('theme', n ? 'dark' : 'light');
    return n;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar dark={dark} onToggle={toggle} />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}