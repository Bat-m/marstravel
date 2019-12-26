import React, { useEffect } from "react";
import "../assets/stylesheets/WayToMars.css";
import rocket from "../assets/gif/spaceship.gif";
import { gsap, MotionPathPlugin, TweenMax } from "gsap/all";

const WayToMars = ({ changeState, animStart }) => {
  // var x = window.innerWidth / 2;
  // var y = -Math.abs(window.innerHeight / 2);
  // console.log(x, y);

  const reverted = () => {
    changeState();
    console.log("reverted ok");
  };
  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    if (animStart) {
      gsap.to("#takeoff", {
        autoAlpha: 0
      });
      TweenMax.set("#spaceship", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        scale: 0.5,
        autoAlpha: 1
      });

      TweenMax.to("#spaceship", {
        duration: 40,
        ease: "power1.inOut",
        onReverseComplete: reverted,
        motionPath: {
          path: "#path",
          autoRotate: 90
        }
      });

      TweenMax.set("#bubbleship", {
        xPercent: -40,
        yPercent: -40,
        transformOrigin: "50% 50%",
        scale: 0.5,
        autoAlpha: 1
      });

      TweenMax.to("#bubbleship", {
        duration: 40,
        ease: "power1.inOut",
        motionPath: {
          path: "#path"
        }
      });
      TweenMax.set(".orbit", {
        rotation: 165
      });
      TweenMax.to("#first.orbit", {
        duration: 62.5,
        rotation: -195,
        ease: "linear"
      });
      TweenMax.to("#second.orbit", {
        duration: 83.7,
        rotation: -195,
        ease: "linear"
      });
    }
  });

  // const marsOn = MarsPostion();

  // console.log("mars is moving...", marsOn);
  return (
    <div id={`universe${!animStart ? "" : " hidden"}`}>
      <div id="sun" />

      <div id="first" className="orbit">
        <div id="terre" className="planet terre" />
      </div>

      <div id="second" className="orbit">
        <div id="mars" className="planet mars" />
      </div>

      <div className="svg-container">
        <svg
          version="1.1"
          viewBox="-430 -430 900 900"
          preserveAspectRatio="xMinYMin meet"
          className="svg-content"
        >
          <path
            id="path"
            d="M95.15,186.53c15-9.53,85.56-56.62,103-145.4C201.73,23.05,212-34,179.27-93.3c-5-9-29.92-52.43-84.12-80.47C22.36-211.43-50.41-194-81.59-186.58c-38.2,9.14-100.43,24-138,78.65C-255.11-56.26-247.68.61-242.27,42c3.9,29.8,16,122.19,98.3,193,5.23,4.5,119.83,99.7,267.47,64,22.86-5.53,111.38-26.92,161.62-106.09,52.78-83.16,27.8-174.15,11.34-234.1-12-43.85-35.2-128.21-118.14-189.3C119.2-274,57.31-285.41,25.21-289"
          />

          <g id="spaceship">
            <image alt="fusee" href={rocket} />
          </g>
          <g id="bubbleship">
            <foreignObject id="plop">
              <div className="talk-bubble tri-right border round btm-left-in">
                <div className="talktext">
                  <p>HOUSTON, Everything looks fine, Mars is on the way !!!</p>
                </div>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WayToMars;

// const MarsPostion = () => {
//   const [landingIsOn, setLandingIsOn] = useState(null);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       let moveSpaceship = document
//         .getElementById("spaceship")
//         .getBoundingClientRect();
//       let moveMars = document.getElementById("mars").getBoundingClientRect();

//       if (Math.round(moveMars.y) === Math.round(moveSpaceship.y)) {
//         console.log("ok");
//         return setLandingIsOn(landingIsOn + 1);
//       }
//     }, 5);
//     return () => {
//       clearInterval(interval);
//     };
//   });
//   return landingIsOn;
// };
