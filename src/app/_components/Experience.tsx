import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Stefanini Brasil",
    context: "Consultant @ Dell Technologies",
    role: "Software Development Engineer",
    period: "Dec 2025 — Present",
    bullets: [
      "Build enterprise-grade features using React/TypeScript and ASP.NET Core for global Dell corporate systems, contributing to a distributed architecture serving thousands of internal users across multiple geographies.",
      "Contribute to system design discussions and architecture reviews within a globally distributed engineering team, providing input on API resilience, fault tolerance, and performance in a high-availability corporate platform.",
    ],
  },
  {
    company: "ICOT International College",
    context: "Cork, Ireland",
    role: "Career Development Break",
    period: "Mar 2025 — Nov 2025 · 9m",
    bullets: [
      "Intensive English immersion program focused on professional communication for global engineering roles, improving fluency, cross-cultural collaboration skills, and adaptability in international work environments.",
    ],
  },
  {
    company: "Dti Digital",
    context: "Consultant @ Anima Educação & SuperMix",
    role: "Full Stack Developer",
    period: "May 2021 — Feb 2025 · 3y 10m",
    bullets: [
      "Implemented event-driven microservices using ASP.NET Core and Azure Service Bus, enabling horizontal scalability during peak demand periods.",
      "Participated in an OAuth 2.0 / JWT authentication redesign across multiple services, eliminating critical security vulnerabilities and achieving full LGPD compliance.",
      "Contributed to building end-to-end CI/CD pipelines on Azure DevOps with automated unit, integration, and E2E testing gates, reducing release cycle time and post-deployment defect rate.",
      "Stepped up as Tech Lead, owning code review processes and setting architectural standards that improved codebase consistency and reduced technical debt.",
      "Mentored junior developers on clean architecture, SOLID principles, and testing best practices, significantly reducing average onboarding time.",
      "Optimized high-traffic SQL Server and Oracle queries by fixing missing indexes and introducing in-memory caching, significantly reducing average API response latency.",
      "Redesigned a synchronous provisioning flow into an async pipeline using Azure Service Bus, significantly improving response time and eliminating timeout errors.",
    ],
  },
  {
    company: "Minas Vale Tecnologia",
    context: null,
    role: "Full Stack Developer",
    period: "Dec 2020 — May 2021 · 6m",
    bullets: [
      "Developed mobile features in React Native and REST APIs using Django/Python, delivering user stories across multiple sprints.",
      "Participated in the full requirements lifecycle: refinement, user story creation, prototyping, and client demos to align deliverables with business expectations.",
    ],
  },
  {
    company: "Centro Especializado em Reabilitação — CER II",
    context: null,
    role: "System Analyst",
    period: "Jun 2020 — Nov 2020 · 6m",
    bullets: [
      "Maintained and improved internal hospital management systems, ensuring high availability for critical clinical workflows.",
    ],
  },
  {
    company: "UFVJM",
    context: "Teaching Assistant",
    role: "Object-Oriented Programming · Java",
    period: "Feb 2019 — Jun 2020 · 1y 5m",
    bullets: [
      "Supported 30+ undergraduate students in applying OOP principles and data structures in Java, covering interfaces, abstract classes, polymorphism, and algorithm implementation.",
      "Reinforced foundational concepts — including file I/O, collections, and method design — that directly underpin scalable software engineering practices used in production systems today.",
    ],
  },
  {
    company: "Next Step Junior Company",
    context: null,
    role: "Quality Director",
    period: "Jan 2018 — Jan 2019 · 1y",
    bullets: [
      "Led quality assurance processes for client-facing projects including websites, marketing campaigns, and custom software solutions.",
      "Gained early exposure to the full software delivery lifecycle — from requirements gathering and prototyping to testing and client sign-off — in a student-run consultancy environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto py-24"
    >
      <FadeIn>
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
          Where I&apos;ve worked
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <FadeIn key={exp.company + exp.period} delay={index * 60}>
          <div
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
