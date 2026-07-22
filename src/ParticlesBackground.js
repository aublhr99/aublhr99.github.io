import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect } from "react";
import "./App.css";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 900px)");

    const updateFlags = () => {
      setPrefersReducedMotion(motionQuery.matches);
      setIsMobile(mobileQuery.matches);
    };

    updateFlags();

    if (motionQuery.addEventListener && mobileQuery.addEventListener) {
      motionQuery.addEventListener("change", updateFlags);
      mobileQuery.addEventListener("change", updateFlags);
    } else {
      motionQuery.addListener(updateFlags);
      mobileQuery.addListener(updateFlags);
    }

    return () => {
      if (motionQuery.removeEventListener && mobileQuery.removeEventListener) {
        motionQuery.removeEventListener("change", updateFlags);
        mobileQuery.removeEventListener("change", updateFlags);
      } else {
        motionQuery.removeListener(updateFlags);
        mobileQuery.removeListener(updateFlags);
      }
    };
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            fullScreen: {
              enable: true,
            },
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#b7dcff",
              },
              move: {
                direction: "bottom-right",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: prefersReducedMotion ? 2.5 : isMobile ? 14 : 22,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 700,
                },
                value: prefersReducedMotion ? 110 : isMobile ? 230 : 360,
              },
              opacity: {
                value: { min: 0.3, max: 0.85 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
