import FadeIn from "./FadeIn";

const stack = [
  "C#",
  "ASP.NET Core",
  "React",
  "TypeScript",
  "Azure",
  "SQL Server",
  "Docker",
  "CI/CD",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <FadeIn>
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          About
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
          A bit about me
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <FadeIn delay={100} className="flex flex-col gap-6 text-[var(--color-muted)] leading-relaxed">
          <p>
            I&apos;m a software engineer from Belo Horizonte, Brazil, with a
            genuine passion for building systems that scale. I started coding
            during university, teaching Object-Oriented Programming as a
            teaching assistant — and ever since, I&apos;ve been hooked on the
            craft of turning complex problems into clean, reliable solutions.
          </p>
          <p>
            Most of my career was spent at Dti Digital, where I grew from
            developer to tech lead on a platform serving 400,000+ students.
            That experience shaped how I think about architecture: async
            pipelines, microservices, observability, and the kind of decisions
            that only reveal themselves at scale.
          </p>
          <p>
            Today I work at Stefanini consulting for Dell, focused on
            React and ASP.NET Core. Outside of work, I care about mentoring,
            clean APIs, and the occasional side project that teaches me
            something new.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="flex flex-col gap-6">
          <p className="font-mono text-sm text-[var(--color-muted)] uppercase tracking-widest">
            Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-foreground)] font-mono text-sm rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
