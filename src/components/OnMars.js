import React, { useState, useLayoutEffect, useEffect } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import "../assets/stylesheets/Onmars.css";
import rocket from "../assets/gif/spaceship.gif";
import { gsap } from "gsap/all";

export const OnMars = ({ tl }) => {
  const [explode, setExplode] = useState(false);
  const [size, setSize] = useState([0, 0]);
  function start() {
    setExplode(true);
  }

  function updateSize() {
    setSize([window.innerWidth / 2, window.innerHeight / 2]);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  console.log(size);

  useEffect(() => {
    console.log("inside useffect", size);
    if (size[1] !== 0 && size[0] !== 0) {
      tl.set(".onmars", {
        autoAlpha: 1
      })
        .set(
          ".movespaceshiponmars",

          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            immediateRender: true
          }
        )
        .to(".movespaceshiponmars", {
          duration: 8,
          x: size[0] - 80,
          y: size[1] - 80,
          scaleX: 0.3,
          scaleY: 0.3,
          immediateRender: true,
          onComplete: start
        })
        .set(".spaceshiponmars", {
          x: size[0] - 80,
          y: size[1] - 80,
          opacity: 0
        })
        .to(".endtitle", {
          autoAlpha: 1,
          duration: 5,
          onComplete: () => gsap.globalTimeline.pause()
        });
    }
  }, [size, tl]);

  return (
    <div className="onmars">
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
  );
};
