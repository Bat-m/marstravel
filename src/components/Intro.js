import React, { useEffect, useState, useRef } from "react";
import GifFusee from "../assets/gif/fuseeQuiGalere.gif";
import { gsap, MotionPathPlugin, TweenMax, TimelineLite } from "gsap/all";
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

    TweenMax.to("#fuseeKiDecol", 15, { opacity: 10, y: -50 });
    // setAnimation(gsap.to("#takeoff", 1, { opacity: 1 }));
  }, []);

  useEffect(() => {
    gsap.globalTimeline.pause();
  }, []);

  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.play()}
      >
        {!animStart ? "Play" : "Back"}
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.pause()}
      >
        {!pause ? "pause" : "play"}
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.timeScale(-0.5)}
      >
        {!pause ? "retour lent" : "0.5"}
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.timeScale(0.5)}
      >
        {!pause ? "avance lent" : "0.5"}
      </button>

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
    </div>
  );
};

export default Intro;
