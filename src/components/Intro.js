import React, { useEffect, useState } from "react";
import GifFusee from "../assets/gif/fuseeQuiGalere.gif";
import { gsap, MotionPathPlugin, TweenMax, TimelineMax } from "gsap/all";
import { Transition } from "react-transition-group";
import WayToMars from "./WayToMars";
import "../assets/stylesheets/Intro.css";

const Intro = ({ ctrl }) => {
  console.log(ctrl);
  gsap.registerPlugin(MotionPathPlugin);
  const tl = gsap.timeline();
  const [animStart, setAnimStart] = useState(false);
  const [pause, setPause] = useState(false);

  const toggleStartAnim = () => {
    setAnimStart(!animStart);
  };

  const togglePause = () => {
    setPause(!pause);
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
    // setAnimation(gsap.to("#takeoff", 1, { opacity: 1 }));
  }, []);

  useEffect(() => {
    gsap.globalTimeline.pause();
  }, []);
  console.log(animStart);
  return (
    <div>
      {/* Debut intro */}
      <div className="intro-container">
        {/* Debut decollage fusee */}
        <div id="fuseehop" className="container-fusee">
          <img id="fuseeKiDecol" className="container-fusee" src={GifFusee} />
        </div>
        {/* Debut rotation terre */}
        <div className="takeoffplanet">
          <div id="takeoff" />
        </div>
      </div>
      <button onClick={() => setAnimStart(!animStart)}>Click to Enter</button>
      <Transition in={animStart} timeout={500}>
        {/* <WayToMars /> */}
        <button onClick={() => setAnimStart(!animStart)}>Click to Out</button>
      </Transition>
    </div>
  );
};

export default Intro;
