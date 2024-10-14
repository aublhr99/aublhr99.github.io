import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <div class="main-body">
        <h1 class="name">Aubin Lohier</h1>
        <p id="tagline">"I'm interested in making connections."</p>
        <p>Ex Meta/Facebook</p>
        <p>Computer Scientist, Software Engineer, and Web Developer</p>
        <div class="inline-btns">
          <span class="btn">
            <a href="https://www.github.com/aublhr99/">
              <img
                class="btn-image"
                id="GitHub"
                src="assets/GitHub-Icon.png"
                alt="GitHub"
              />
            </a>
          </span>
          <span class="btn">
            <a href="https://www.linkedin.com/in/aubin-lohier/">
              <img
                class="btn-image"
                id="LinkedIn"
                src="assets/LinkedIn-Icon.png"
                alt="LinkedIn"
              />
            </a>
          </span>
          <span class="btn">
            <a href="mailto:aublhr99@gmail.com">
              <img
                class="btn-image"
                src="assets/email-icon.png"
                id="Email"
                alt="Email"
              />
            </a>
          </span>
          <span class="btn">
            <a href="https://aublhr99.github.io/assets/Aubin_Lohier_Resume.pdf">
              <img
                class="btn-image"
                id="Resume"
                src="assets/Resume-Icon.png"
                alt="Resume"
              />
            </a>
          </span>
        </div>
      </div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}

export default App;
