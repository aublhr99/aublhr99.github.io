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
          <p className="eyebrow">Software Engineer II @ Typeface AI | Previously at Meta</p>
          <h1 className="name" id="hero-title">
            Aubin Lohier
          </h1>
          <p id="tagline">
              I enjoy building products that people enjoy using, products that improve their lives.
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
