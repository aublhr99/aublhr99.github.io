import Resume from "../../assets/Aubin_Lohier_Resume.pdf";
import ProfilePic from "../../assets/Aubin_Lohier_profile_pic.jpeg";
import FrostedGlassCard from "../../FrostedGlassCard";
import FrostedGlassButton from "../../FrostedGlassButton";

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="title-card">
        <img src={ProfilePic} alt="Portrait of Aubin Lohier" id="profile-pic" />
        <FrostedGlassCard className="intro-card">
          <p className="eyebrow">Software Engineer | Previously at Meta</p>
          <h1 className="name" id="hero-title">
            Aubin Lohier
          </h1>
          <p id="tagline">
            I build thoughtful software products that solve real user problems
            with speed, quality, and care.
          </p>
          <p>
            I enjoy owning product ideas from concept to launch, partnering
            closely with design and product, and shipping experiences that
            people genuinely enjoy using.
          </p>
        </FrostedGlassCard>
      </div>
      <div className="inline-btns" aria-label="Primary links">
        <FrostedGlassButton text="Resume" link={Resume} />
        <FrostedGlassButton
          text="LinkedIn"
          link="https://www.linkedin.com/in/aubin-lohier/"
        />
        <FrostedGlassButton text="GitHub" link="https://www.github.com/aublhr99" />
        <FrostedGlassButton text="Email" link="mailto:aublhr99@gmail.com" />
      </div>
    </section>
  );
}

export default HeroSection;
