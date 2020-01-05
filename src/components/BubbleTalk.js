import React, { useState, useEffect } from "react";
import { gsap } from "gsap/all";
import Typed from "typed.js";
import "../assets/stylesheets/BubbleTalk.scss";

export const BubbleTalk = ({ ...strings }) => {
  const [paused, setPaused] = useState(false);
  var options = {
    strings: strings.string,
    typeSpeed: 40,
    backSpeed: 0,
    cursorChar: "",
    fadeOut: true,
    smartBackspace: true
  };

  setInterval(() => {
    setPaused(gsap.globalTimeline.paused());
  }, 500);

  useEffect(() => {
    let typed = new Typed(".typed", options);
    paused ? typed.stop() : typed.start();

    return () => {
      typed.stop();
    };
  });
  return (
    <div>
      <div className="talk-bubble tri-right border round btm-left-in">
        <div className="talktext">
          <p className="typed"></p>
        </div>
      </div>
    </div>
  );
};
