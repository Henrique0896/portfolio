import FadeIn from "./FadeIn";

const projects = [
  {
    title: "FeiraKit",
    description:
      "Led end-to-end development of FeiraKit — a React Native mobile app backed by a Flask REST API and MongoDB connecting rural producers with local consumers in the Jequitinhonha Valley — from architecture to a production-ready handover.",
    outcome:
      "Designed and taught a programming fundamentals curriculum to 30 participants from diverse backgrounds (students, career changers, and aspiring developers). Selected the top 8 to contribute to the application codebase. Delivered a functional, production-ready application for Fundo Social Vale do Jequitinhonha.",
    stack: ["React Native", "Flask", "MongoDB"],
    type: "Mobile · Volunteer · Tech Lead",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <FadeIn>
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
          Things I&apos;ve built
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 100}>
          <div
            className="border border-[var(--color-border)] rounded-xl p-6 flex flex-col gap-4 hover:border-[var(--color-accent)]/40 transition-colors h-full"
          >
            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest mb-2">
                {project.type}
              </p>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] leading-snug">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {project.description}
            </p>

            <div className="border-l-2 border-[var(--color-accent)]/40 pl-4">
              <p className="text-sm text-[var(--color-foreground)] leading-relaxed">
                {project.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 border border-[var(--color-border)] text-[var(--color-muted)] font-mono text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
