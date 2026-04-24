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
            Full Stack Software Engineer with 5+ years building systems that
            solve real problems.
          </p>
          <p>
            Specialized in architecting and implementing scalable, secure
            solutions — from well-structured microservices to REST APIs that are
            actually intuitive to use. Particularly focused on application
            security (OAuth 2.0/JWT) and CI/CD pipelines that deploy smoothly.
          </p>
          <p>
            As a Tech Lead, I&apos;ve learned to balance technical decisions
            with tight deadlines, mentor developers, and keep critical systems
            running in fast-paced agile environments.
          </p>
          <p>
            Comfortable moving between robust backend architecture and complex
            frontends, always seeking the balance between clean code and
            delivering value.
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
