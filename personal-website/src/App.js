import "./App.css";
import ParticlesBackground from "./ParticlesBackground";
import { Grid2 } from "@mui/material";
import Resume from "./assets/Aubin_Lohier_Resume.pdf";
import ProfilePic from "./assets/Aubin_Lohier_profile_pic.jpeg";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="main-body">
        <div className="card">
          <Grid2 container spacing={6}>
            <Grid2 item justifyContent="center" alignContent="center" size={4}>
              <img src={ProfilePic} alt="Me" id="profile-pic" />
            </Grid2>
            <Grid2 item justifyItems="start" size={8}>
              <h1 className="name">Aubin Lohier</h1>
              <p id="tagline">
                "I like building beautiful products that users love."
              </p>
              <p>Ex Meta/Facebook</p>
              <p>
                Builder, Computer Scientist, Software Engineer, and Web
                Developer
              </p>
              <div className="inline-btns">
                <span className="btn">
                  <a href="https://www.github.com/aublhr99/">GitHub</a>
                </span>
                <span className="btn">
                  <a href="https://www.linkedin.com/in/aubin-lohier/">
                    LinkedIn
                  </a>
                </span>
                <span className="btn">
                  <a href="mailto:aublhr99@gmail.com">Email</a>
                </span>
                <span className="btn">
                  <a href={Resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </span>
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
}

export default App;
