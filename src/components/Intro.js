import React, { useEffect, useState } from "react";
import Gifspaceship from "../assets/gif/spaceship.gif";
import { gsap } from "gsap/all";
import WayToMars from "./WayToMars";
import "../assets/stylesheets/Intro.css";

const Intro = ({ tl }) => {
  const [animStart, setAnimStart] = useState(false);

  const tsa = function toggleStartAnim() {
    setAnimStart(true);
  };
  useEffect(() => {
    if (!animStart) {
      tl.set(".intro-container", { autoAlpha: 1 })

        .fromTo(
          "#takeoff",
          10,
          { autoAlpha: 1 },
          {
            rotation: 360,
            ease: "linear"
          }
        )
        .set("#spaceshiphop", { autoAlpha: 1 }, "-=10")
        .set("#spaceshiptakeoff", { autoAlpha: 1 }, "-=10")
        .to(
          "#spaceshiptakeoff",
          {
            y: -10,
            scaleY: -0.1,
            scaleX: -0.1,
            duration: 10,
            onComplete: tsa
          },
          "-=10"
        )
        .to(".intro-container", { autoAlpha: 0 });
    }
  }, [tl, animStart]);

  useEffect(() => {
    gsap.globalTimeline.pause();
  }, []);

  return (
    <div>
      {/* Start intro */}

      <div className="intro-container">
        {/* start takeoff */}
        <div id="spaceshiphop" className="container-spaceship">
          <img
            alt="spaceshiptakeoff"
            id="spaceshiptakeoff"
            className="container-spaceship"
            src={Gifspaceship}
          />
        </div>
        {/* Stat rotation earth */}
        <div className="takeoffplanet">
          <div id="takeoff" />
        </div>
      </div>

      {animStart && <WayToMars tl={tl} animStart={animStart} />}
    </div>
  );
};

export default Intro;
