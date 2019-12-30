import React, { useEffect } from "react";
import Typed from "typed.js";
import "../assets/stylesheets/BubbleTalk.scss";

export const BubbleTalk = ({ ...strings }) => {
  console.log(strings.string);
  var options = {
    strings: strings.string,
    typeSpeed: 40,
    backSpeed: 0,
    cursorChar: "..",
    fadeOut: true,
    smartBackspace: true
  };

  useEffect(() => {
    new Typed(".typed", options);
  }, [options]);
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
