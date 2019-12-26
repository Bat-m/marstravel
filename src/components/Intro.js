import React, { useEffect, useState } from "react";
import Gifspaceship from "../assets/gif/spaceship.gif";
import { gsap, TimelineMax } from "gsap/all";
import WayToMars from "./WayToMars";
import "../assets/stylesheets/Intro.css";

const Intro = ({ tl }) => {
  // let currentTimeScale;
  const [animStart, setAnimStart] = useState(false);

  const toggleStartAnim = () => {
    setAnimStart(true);
  };

  const toggleStopAnim = () => {
    setAnimStart(false);
    gsap.to("#takeoff", {
      autoAlpha: 1
    });
  };

  useEffect(() => {
    tl.set(".intro-container", { autoAlpha: 1 })
      .set("#takeoff", {
        autoAlpha: 1
      })
      .to("#takeoff", 5, {
        rotation: 360,
        repeat: -1,
        ease: "linear"
      })
      .set("#spaceshiphop", { autoAlpha: 1 })
      .set("#spaceshiptakeoff", { autoAlpha: 1 })
      .to("#spaceshiptakeoff", {
        y: -10,
        scaleY: -0.1,
        scaleX: -0.1,
        duration: 10,
        onComplete: () => {
          toggleStartAnim();
        }
      });
  });

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

      <WayToMars animStart={animStart} changeState={toggleStopAnim} />
    </div>
  );
};

export default Intro;
