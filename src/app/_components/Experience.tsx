const experiences = [
  {
    company: "Stefanini Brasil",
    context: "Consultant @ Dell",
    role: "Software Development Engineer",
    period: "Dec 2025 — Present",
    bullets: [
      "Developing frontend features with React and TypeScript for Dell's internal tooling",
      "Building and maintaining REST APIs with ASP.NET Core",
      "Implementing observability practices and system design improvements",
    ],
  },
  {
    company: "Dti Digital",
    context: null,
    role: "Software Development Engineer → Tech Lead",
    period: "May 2021 — Feb 2025 · 3y 10m",
    bullets: [
      "Led backend architecture for a microservices platform serving 400K+ students",
      "Redesigned provisioning pipeline from synchronous to async (Azure Service Bus), reducing execution time from 5+ minutes to seconds with zero timeouts",
      "Optimized critical database queries from 3s to 800ms through indexing and query rewriting",
      "Implemented OAuth 2.0 / JWT authentication across multiple services",
      "Improved CI/CD pipelines, reducing deployment time by 30%",
      "Mentored junior developers and led technical onboarding for new hires",
    ],
  },
  {
    company: "Minas Vale Tecnologia",
    context: null,
    role: "Software Developer",
    period: "Dec 2020 — May 2021 · 6m",
    bullets: [
      "Built mobile features with React Native for field operations",
      "Developed backend services with Django and Python",
    ],
  },
  {
    company: "Centro Especializado em Reabilitação",
    context: null,
    role: "Software Developer",
    period: "Jun 2020 — Nov 2020 · 6m",
    bullets: [
      "Developed and maintained hospital management systems",
      "Improved internal workflows through process automation",
    ],
  },
  {
    company: "UNIMONTES",
    context: "Teaching Assistant",
    role: "Object-Oriented Programming · Java",
    period: "Feb 2019 — Jun 2020 · 1y 5m",
    bullets: [
      "Assisted professor in OOP lectures and lab sessions",
      "Supported students through code reviews and office hours",
    ],
  },
  {
    company: "Next Step Junior Company",
    context: null,
    role: "Quality Director",
    period: "Jan 2018 — Jan 2019 · 1y",
    bullets: [
      "Led quality assurance processes for software projects delivered by the junior company",
      "Established code review and testing standards across teams",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
        Experience
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.company + exp.period}
            className="border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {exp.company}
                  {exp.context && (
                    <span className="text-[var(--color-muted)] font-normal">
                      {" "}
                      · {exp.context}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-mono mt-0.5">
                  {exp.role}
                </p>
              </div>
              <span className="text-sm text-[var(--color-muted)] font-mono whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-[var(--color-muted)] leading-relaxed"
                >
                  <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                    ›
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
