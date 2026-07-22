import "./App.css";
import ParticlesBackground from "./ParticlesBackground";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SectionNav from "./components/sections/SectionNav";

function App() {
  const featuredProjects = [
    {
      title: "Project Spotlight #1",
      summary:
        "Built a product end-to-end with a focus on usability, reliability, and measurable user impact.",
      impact: "Outcome: add a concrete metric here (adoption, latency, revenue, etc.).",
      stack: "React, TypeScript, Node.js",
      liveLink: "https://example.com",
      codeLink: "https://github.com/aublhr99",
    },
    {
      title: "Project Spotlight #2",
      summary:
        "Designed and shipped a feature that simplified a complex workflow for users.",
      impact: "Outcome: add a concrete metric here (time saved, conversion, NPS, etc.).",
      stack: "Python, APIs, Cloud",
      liveLink: "https://example.com",
      codeLink: "https://github.com/aublhr99",
    },
    {
      title: "Project Spotlight #3",
      summary:
        "Improved developer velocity and product quality through tooling and thoughtful architecture.",
      impact: "Outcome: add a concrete metric here (build time, defect rate, throughput, etc.).",
      stack: "JavaScript, CI/CD, Testing",
      liveLink: "https://example.com",
      codeLink: "https://github.com/aublhr99",
    },
  ];

  return (
    <div className="App">
      <ParticlesBackground />
      <main className="main-body">
        <SectionNav />
        <HeroSection />
        <ProjectsSection featuredProjects={featuredProjects} />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
