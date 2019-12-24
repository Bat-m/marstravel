import React, { useEffect, useState } from "react";
import GifFusee from "../assets/gif/fuseeQuiGalere.gif";
import { gsap, MotionPathPlugin, TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import WayToMars from "./WayToMars";
import "../assets/stylesheets/Intro.css";

const Intro = () => {
  gsap.registerPlugin(MotionPathPlugin);
  // const tl = useRef(gsap.timeline({ paused: true }));
  const [animStart, setAnimStart] = useState(false);
  const [pause, setPause] = useState(false);

  const toggleStartAnim = () => {
    setAnimStart(!animStart);
  };

  const togglePause = () => {
    setPause(!pause);
  };

  useEffect(() => {
    TweenMax.to("#takeoff", 20, { opacity: 10, rotation: 360 });
    TweenMax.to("#fuseehop", 1, { opacity: 1 });
    // TweenMax.to("#fuseeKiDecol", 1, { opacity: 1 });

    TweenMax.to("#fuseeKiDecol", 15, {
      opacity: 10,
      y: -50,
      scaleY: -0.1,
      scaleX: -0.1
    });
    // setAnimation(gsap.to("#takeoff", 1, { opacity: 1 }));
  }, []);

  useEffect(() => {
    gsap.globalTimeline.pause();
  }, []);

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

      <Transition in={true} timeout={150}>
        <WayToMars />
      </Transition>
    </div>
  );
};

export default Intro;
