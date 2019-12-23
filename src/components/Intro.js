import React, { useEffect, useState } from "react";
import "../assets/stylesheets/Intro.css";
import { gsap, MotionPathPlugin } from "gsap/all";

const Intro = () => {
  //register the plugin (just once)

  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    gsap.set("#spaceship", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
      scale: 0.5,
      autoAlpha: 1
    });
    // console.log(gsap.to("#spaceship", { motionPath: { path: "#path" } }));

    gsap.to("#spaceship", {
      duration: 40,
      ease: "power1.inOut",
      immediateRender: true,
      motionPath: {
        path: "#path",
        autoRotate: 90
      }
    });
  }, []);

  const [earth, setEarth] = useState(null);

  // const marsOn = MarsPostion();
  const callIt = () => {
    let moveEarth = document.getElementById("terre").getBoundingClientRect();
    console.log("Updating earth position", moveEarth);
  };
  // console.log("mars is moving...", marsOn);
  return (
    <div id="universe">
      <div id="sun" onClick={callIt} />

      <div id="saturne" className="orbit">
        <div id="terre" className="planet terre" />
      </div>

      <div id="pluton" className="orbit">
        <div id="mars" className="planet mars" />
      </div>
      <div className="svg-container">
        <svg
          className="svg-content"
          width="900"
          height="900"
          viewBox="-420 -422 900 900"
        >
          <path
            id="path"
            d="M95.15,186.53c15-9.53,85.56-56.62,103-145.4C201.73,23.05,212-34,179.27-93.3c-5-9-29.92-52.43-84.12-80.47C22.36-211.43-50.41-194-81.59-186.58c-38.2,9.14-100.43,24-138,78.65C-255.11-56.26-247.68.61-242.27,42c3.9,29.8,16,122.19,98.3,193,5.23,4.5,119.83,99.7,267.47,64,22.86-5.53,111.38-26.92,161.62-106.09,52.78-83.16,27.8-174.15,11.34-234.1-12-43.85-35.2-128.21-118.14-189.3C119.2-274,57.31-285.41,25.21-289"
          />

          <g id="spaceship">
            <image alt="fusee" href="//i.imgur.com/61yLrAb.gif" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Intro;

const MarsPostion = () => {
  const [mars, setMars] = useState(null);

  useEffect(() => {
    let interval = setInterval(() => {
      let move = document.getElementById("mars").getBoundingClientRect();
      setMars(move);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return mars;
};
