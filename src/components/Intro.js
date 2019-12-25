import React, { useEffect, useState } from "react";
import GifFusee from "../assets/gif/fuseeQuiGalere.gif";
import { gsap, MotionPathPlugin } from "gsap/all";
import WayToMars from "./WayToMars";
import "../assets/stylesheets/Intro.css";

const Intro = () => {
  let currentTimeScale;
  const [animStart, setAnimStart] = useState(false);
  gsap.registerPlugin(MotionPathPlugin);
  const takeTime = () => {
    currentTimeScale = gsap.globalTimeline.time();
    // console.log("runtime: ", currentTimeScale.toFixed(2));
    // console.log(animStart);
    // if (animStart && currentTimeScale.toFixed(2) < 17.0) {
    //   console.log("if: ", currentTimeScale.toFixed(2));

    //   console.log("if stop:", animStart);
    // }
  };
  const tl = gsap.timeline({ onUpdate: takeTime });

  const toggleStartAnim = () => {
    setAnimStart(!animStart);
  };

  useEffect(() => {
    tl.set("#takeoff", {
      autoAlpha: 1
    })
      .to("#takeoff", {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear"
      })
      .set("#fuseehop", { autoAlpha: 1 })
      .set("#fuseeKiDecol", { autoAlpha: 1 })
      .to("#fuseeKiDecol", {
        y: -10,
        scaleY: -0.1,
        scaleX: -0.1,
        duration: 15,
        onComplete: toggleStartAnim
      });
  });

  useEffect(() => {
    gsap.globalTimeline.pause();
  }, []);

  return (
    <div>
      {/* Debut intro */}
      <div className={`intro-container${!animStart ? "" : " hidden"}`}>
        {/* Debut decollage fusee */}
        <div id="fuseehop" className="container-fusee">
          <img
            alt="fuseekidecol"
            id="fuseeKiDecol"
            className="container-fusee"
            src={GifFusee}
          />
        </div>
        {/* Debut rotation terre */}
        <div className="takeoffplanet">
          <div id="takeoff" />
        </div>
      </div>

      {animStart && <WayToMars changeState={toggleStartAnim} />}
    </div>
  );
};

export default Intro;
