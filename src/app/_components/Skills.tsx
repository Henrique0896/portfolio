import FadeIn from "./FadeIn";

const categories = [
  {
    label: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["ASP.NET Core", "React", "React Native", "Vue.js", "Next.js", "Django", "Flask", "Entity Framework"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure Service Bus", "Azure DevOps", "Application Insights", "Docker", "CI/CD"],
  },
  {
    label: "Databases",
    skills: ["SQL Server", "Oracle", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Security",
    skills: ["OAuth 2.0 / JWT", "OIDC", "LGPD"],
  },
  {
    label: "Practices",
    skills: ["Microservices", "Clean Architecture", "SOLID", "DDD", "TDD", "Event-Driven", "Tech Lead", "Mentoring"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <FadeIn>
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          Skills
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
          What I work with
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {categories.map((cat, index) => (
          <FadeIn key={cat.label} delay={index * 80}>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
