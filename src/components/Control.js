import React from "react";
import { gsap } from "gsap/all";

const Control = () => {
  return (
    <div className="control">
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.play()}
      >
        Play
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.pause()}
      >
        Pause
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.timeScale(-0.5)}
      >
        Backward
      </button>
      <button
        className="btn btn-info"
        onClick={() => gsap.globalTimeline.timeScale(0.5)}
      >
        Forward
      </button>
    </div>
  );
};

export default Control;
