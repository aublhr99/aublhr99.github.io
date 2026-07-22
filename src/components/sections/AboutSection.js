import FrostedGlassCard from "../../FrostedGlassCard";

function AboutSection() {
  return (
    <section className="content-section" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <FrostedGlassCard>
        <p>
          I care about building products that are useful, reliable, and simple
          to understand. Outside of engineering, I enjoy exploring design,
          storytelling, and creative ways to make technical ideas feel
          approachable.
        </p>
      </FrostedGlassCard>
    </section>
  );
}

export default AboutSection;
