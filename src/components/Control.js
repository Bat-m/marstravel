import React from "react";
import { gsap } from "gsap/all";
import "../assets/stylesheets/Control.css";

const Control = () => {
  return (
    <div className="control">
      <span
        className="btn-green"
        onClick={() => {
          gsap.globalTimeline.play();
        }}
      >
        <div className="play"></div>
      </span>
      <span className="btn-red" onClick={() => gsap.globalTimeline.pause()}>
        <div className="pause"></div>
      </span>
      <span
        className="btn-blue"
        onClick={() => gsap.globalTimeline.timeScale(-2.5)}
      >
        <div className="back"></div>
      </span>
      <span
        className="btn-blue"
        onClick={() => gsap.globalTimeline.timeScale(2.5)}
      >
        <div className="front"></div>
      </span>
    </div>
  );
};

export default Control;
