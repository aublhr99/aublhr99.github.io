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
              <a href="https://www.github.com/aublhr99/">GitHub</a>
            </span>
            <span className="btn">
              <a href="https://www.linkedin.com/in/aubin-lohier/">LinkedIn</a>
            </span>
            <span className="btn">
              <a href="mailto:aublhr99@gmail.com">Email</a>
            </span>
            <span className="btn">
              <a href="https://aublhr99.github.io/assets/Aubin_Lohier_Resume.pdf">
                Resume
              </a>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
