const categories = [
  {
    label: "Backend",
    skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "REST APIs", "Microservices", "OAuth 2.0 / JWT"],
  },
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure", "Azure Service Bus", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Data",
    skills: ["SQL Server", "MongoDB", "Query Optimization"],
  },
  {
    label: "Practices",
    skills: ["Tech Lead", "System Design", "Event-Driven Architecture", "Observability", "Mentoring", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
        Skills
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
        What I work with
      </h2>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col sm:flex-row gap-4">
            <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest w-28 shrink-0 pt-1.5">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-foreground)] font-mono text-sm rounded-md hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
