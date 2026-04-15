export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto"
    >
      <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
        Software Development Engineer
      </p>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-foreground)] mb-6 leading-tight">
        Henrique Lima
      </h1>

      <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl mb-10 leading-relaxed">
        Building scalable systems with{" "}
        <span className="text-[var(--color-foreground)]">.NET</span>,{" "}
        <span className="text-[var(--color-foreground)]">React</span>, and{" "}
        <span className="text-[var(--color-foreground)]">Azure</span>. 5+ years
        delivering high-impact solutions — from microservices to async
        event-driven pipelines.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://linkedin.com/in/limahb"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/Henrique0896"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-foreground)] font-medium rounded-lg hover:border-[var(--color-accent)] transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="mailto:barrosohenriquelima@gmail.com"
          className="px-6 py-3 text-[var(--color-muted)] font-medium hover:text-[var(--color-foreground)] transition-colors"
        >
          Email →
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-muted)] animate-bounce">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
