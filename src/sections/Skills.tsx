'use client';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const marquee = [
  'Node.js', 'Express.js', 'React', 'Next.js', 'PostgreSQL', 'MySQL',
  'MongoDB', 'Redis', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'TypeScript',
  'Docker', 'REST APIs', 'Payment APIs', 'SMS APIs',
];

const categories = [
  { name: 'Backend',          bar: 'from-violet-500 to-purple-600',  items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'WebSockets', 'GraphQL'] },
  { name: 'Frontend',         bar: 'from-blue-500 to-cyan-600',       items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] },
  { name: 'Databases',        bar: 'from-emerald-500 to-teal-600',    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { name: 'Message Brokers',  bar: 'from-orange-500 to-amber-600',    items: ['Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'Event-driven arch.'] },
  { name: 'Integrations',     bar: 'from-pink-500 to-rose-600',       items: ['Payment APIs', 'Mobile Money', 'SMS APIs', 'Fidelity Bank', 'Stripe'] },
  { name: 'Tools & DevOps',   bar: 'from-slate-400 to-gray-600',      items: ['Git & GitHub', 'Docker', 'Linux', 'Postman', 'VS Code'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease }}
          className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-tight">Tech I work with</h2>
        </motion.div>

        {/* Marquee ticker */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative overflow-hidden mb-14">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}/>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}/>

          <div className="flex gap-3 marquee-track w-max">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i}
                className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted)] whitespace-nowrap hover:border-[var(--accent-40)] hover:text-[var(--text)] transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--accent-30)] transition-all">
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${cat.bar} mb-3`}/>
              <h3 className="font-semibold text-[var(--text)] text-sm mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <span key={item}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-[var(--border)] text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}