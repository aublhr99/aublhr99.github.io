import FrostedGlassCard from "../../FrostedGlassCard";

function ExperienceSection() {
  return (
    <section className="content-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience Highlights</h2>
      <FrostedGlassCard>
        <ul className="details-list">
          <li>
            Delivered production features from idea to launch by partnering
            across engineering, design, and product.
          </li>
          <li>
            Focused on performance, reliability, and maintainability to keep
            user-facing systems fast and stable.
          </li>
          <li>
            Improved developer workflows through pragmatic tooling,
            documentation, and iterative process improvements.
          </li>
        </ul>
      </FrostedGlassCard>
    </section>
  );
}

export default ExperienceSection;
