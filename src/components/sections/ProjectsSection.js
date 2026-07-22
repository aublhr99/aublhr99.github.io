import FrostedGlassCard from "../../FrostedGlassCard";
import FrostedGlassButton from "../../FrostedGlassButton";

function ProjectsSection({ featuredProjects }) {
  return (
    <section className="content-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Selected Projects</h2>
      <div className="stacked-cards">
        {featuredProjects.map((project) => (
          <FrostedGlassCard key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="highlight">{project.impact}</p>
            <p className="stack">Stack: {project.stack}</p>
            <div className="inline-btns compact">
              <FrostedGlassButton text="Live" link={project.liveLink} />
              <FrostedGlassButton text="Code" link={project.codeLink} />
            </div>
          </FrostedGlassCard>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
