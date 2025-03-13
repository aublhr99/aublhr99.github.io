import "./App.css";
import ParticlesBackground from "./ParticlesBackground";
import Resume from "./assets/Aubin_Lohier_Resume.pdf";
import ProfilePic from "./assets/Aubin_Lohier_profile_pic.jpeg";
import FrostedGlassCard from "./FrostedGlassCard";
import FrostedGlassButton from "./FrostedGlassButton";

function App() {
  /*
    TODOs
    - add flip profile pic for mouse hover
    - extend for mobile support
    - think interactive resume and portfolio
    - add a currently working on and an experience timeline
    - add animations/personality/whimsy
      - typing animation?
    - add icons to button?
    - font explorations

    Thoughts
    - should the particles be slower? could be distracting
    - keep looking through tv thoughts
    - add a currently working on section
    - custom domain time?
   */

  // Can use bento box styling? Check out grid-area
  // https://youtu.be/v0o1kV-qfVI?si=PHmlkQNYrWiF6uTI

  return (
    <div className="App">
      <ParticlesBackground />
      <div className="main-body">
        <div className="title-card">
          <img src={ProfilePic} alt="Me" id="profile-pic" />
          <FrostedGlassCard id="intro-card">
            <h1 className="name">Aubin Lohier</h1>
            <p id="tagline">"I love building products that empower people."</p>
            <p>Previously @ Meta</p>
            <p>
              Builder, Computer Scientist, Software Engineer, and Web Developer
            </p>
          </FrostedGlassCard>
        </div>
        <div className="inline-btns">
          <FrostedGlassButton text={"Resume"} link={Resume} />
          <FrostedGlassButton
            text={"LinkedIn"}
            link={"https://www.linkedin.com/in/aubin-lohier/"}
          />
          <FrostedGlassButton
            text={"Github"}
            link={"https://www.github.com/aublhr99"}
          />
          <FrostedGlassButton
            text={"Email"}
            link={"mailto:aublhr99@gmail.com"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
