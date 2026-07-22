import FrostedGlassCard from "../../FrostedGlassCard";
import FrostedGlassButton from "../../FrostedGlassButton";

function ContactSection() {
  return (
    <section className="content-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <FrostedGlassCard>
        <p>
          Open to software engineering opportunities where I can ship
          high-quality products and contribute across the stack.
        </p>
        <p>Based in San Francisco Bay Area | Pacific Time</p>
        <div className="inline-btns compact">
          <FrostedGlassButton text="Email Me" link="mailto:aublhr99@gmail.com" />
          <FrostedGlassButton
            text="LinkedIn"
            link="https://www.linkedin.com/in/aubin-lohier/"
          />
        </div>
      </FrostedGlassCard>
    </section>
  );
}

export default ContactSection;
