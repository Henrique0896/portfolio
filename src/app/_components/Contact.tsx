import FadeIn from "./FadeIn";

const links = [
  {
    label: "Email",
    value: "barrosohenriquelima@gmail.com",
    href: "mailto:barrosohenriquelima@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/limahb",
    href: "https://linkedin.com/in/limahb",
  },
  {
    label: "GitHub",
    value: "github.com/Henrique0896",
    href: "https://github.com/Henrique0896",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <FadeIn>
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6">
          Let&apos;s talk
        </h2>

        <p className="text-lg text-[var(--color-muted)] max-w-xl mb-12 leading-relaxed">
          I&apos;m open to new opportunities, technical conversations, or just a
          good chat about software. Feel free to reach out through any of the
          channels below.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <FadeIn key={link.label} delay={index * 80}>
          <a
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="flex items-center justify-between border border-[var(--color-border)] rounded-xl px-6 py-4 hover:border-[var(--color-accent)]/40 transition-colors group max-w-lg"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
                {link.label}
              </span>
              <span className="text-[var(--color-foreground)] text-sm">
                {link.value}
              </span>
            </div>
            <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
              ↗
            </span>
          </a>
          </FadeIn>
        ))}
      </div>

      <p className="font-mono text-xs text-[var(--color-muted)] mt-16">
        Belo Horizonte, Brazil · Available for remote work
      </p>
    </section>
  );
}
