export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 md:px-16 py-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          Henrique Lima Barroso
        </p>
        <p className="font-mono text-xs text-[var(--color-muted)]">
          Belo Horizonte, Brazil · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
