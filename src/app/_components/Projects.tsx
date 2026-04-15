const projects = [
  {
    title: "Async Multi-Branch Provisioning Pipeline",
    description:
      "Re-engineered a synchronous provisioning workflow into a fully async, event-driven pipeline using Azure Service Bus. The original system blocked threads waiting for long-running branch setup operations, causing frequent timeouts and poor user experience at scale.",
    outcome:
      "Reduced execution time from 5+ minutes to seconds. Zero timeouts after rollout.",
    stack: ["ASP.NET Core", "Azure Service Bus", "C#", "Event-Driven"],
    type: "Backend · Dti Digital",
  },
  {
    title: "Social Impact Mobile App",
    description:
      "Built a volunteer mobile application to connect communities with local social initiatives in the Vale do Jequitinhonha region. The project also served as a hands-on programming introduction for 20 beginners, combining real product development with education.",
    outcome:
      "Delivered working app for Fundo Social Vale do Jequitinhonha. Taught programming to 20 first-time developers.",
    stack: ["React Native", "Flask", "MongoDB", "Python"],
    type: "Mobile · Volunteer",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
        Projects
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
        Things I&apos;ve built
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-[var(--color-border)] rounded-xl p-6 flex flex-col gap-4 hover:border-[var(--color-accent)]/40 transition-colors"
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
        ))}
      </div>
    </section>
  );
}
