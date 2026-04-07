export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[var(--accent)] grid place-items-center text-white text-[10px] font-bold">A</span>
          <span className="text-sm font-semibold text-[var(--text)]">
            Abdulmukhsin<span className="text-[var(--accent)]">.</span>
          </span>
        </div>

        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Abdul Mukhsin Ahmed
        </p>

        <div className="flex gap-5">
          {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
            <a key={s} href={`https://${s.toLowerCase()}.com/`} target="_blank" rel="noopener noreferrer"
              className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}