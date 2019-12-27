import React, { useState, useLayoutEffect, useEffect } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import "../assets/stylesheets/Onmars.css";
import rocket from "../assets/gif/spaceship.gif";

export const OnMars = ({ tl }) => {
  const [explode, setExplode] = useState(false);
  const [size, setSize] = useState([0, 0]);
  function updateSize() {
    setSize([
      Math.round(window.innerWidth / 2),
      Math.round(window.innerHeight / 2)
    ]);
  }
  function start() {
    setExplode(true);
  }
  function stop() {
    setExplode(false);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    console.log("explode: ", explode);
    if (size[1] !== 0 && size[0] !== 0) {
      tl.to(".movespaceshiponmars", {
        duration: 8,
        x: size[0] - 80,
        y: size[1] - 80,
        scaleX: 0.3,
        scaleY: 0.3,
        autoAlpha: 1,
        immediateRender: true,
        onComplete: start
      })
        .to(".spaceshiponmars", { duration: 0.1, opacity: 0 })
        .to(".endtitle", {
          autoAlpha: 1,
          duration: 5,
          onStart: stop
        });
    }
  });

  return (
    <div>
      <div>
        <div id="onmarsplanet" />

        <ParticleEffectButton
          className="movespaceshiponmars"
          color="black"
          hidden={explode}
          type="circle"
          easing="easeOutElastic"
          size={4}
          duration={500}
          speed={5}
          OscillationCoefficient={0}
          direction="left"
        >
          <button>
            <img
              alt="spaceshiponmars"
              className={`spaceshiponmars`}
              src={rocket}
            />
          </button>
        </ParticleEffectButton>
        <h1 className="endtitle"> The end </h1>
      </div>
    </div>
  );
};
