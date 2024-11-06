import { Card } from "@mui/material";

import "./App.css";
import ParticlesBackground from "./ParticlesBackground";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="main-body">
        <Card>
          <h1 className="name">Aubin Lohier</h1>
          <p id="tagline">"I'm interested in making connections."</p>
          <p>Ex Meta/Facebook</p>
          <p>Computer Scientist, Software Engineer, and Web Developer</p>
          <div className="inline-btns">
            <span className="btn">
              <a href="https://www.github.com/aublhr99/">
                <img
                  className="btn-image"
                  id="GitHub"
                  src="assets/GitHub-Icon.png"
                  alt="GitHub"
                />
              </a>
            </span>
            <span className="btn">
              <a href="https://www.linkedin.com/in/aubin-lohier/">
                <img
                  className="btn-image"
                  id="LinkedIn"
                  src="assets/LinkedIn-Icon.png"
                  alt="LinkedIn"
                />
              </a>
            </span>
            <span className="btn">
              <a href="mailto:aublhr99@gmail.com">
                <img
                  className="btn-image"
                  src="assets/email-icon.png"
                  id="Email"
                  alt="Email"
                />
              </a>
            </span>
            <span className="btn">
              <a href="https://aublhr99.github.io/assets/Aubin_Lohier_Resume.pdf">
                <img
                  className="btn-image"
                  id="Resume"
                  src="assets/Resume-Icon.png"
                  alt="Resume"
                />
              </a>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
