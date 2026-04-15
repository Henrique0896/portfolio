import Hero from "./_components/Hero";
import About from "./_components/About";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <section id="experience" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}
