import React from "react";
import GifFusee from "../assets/gif/fuseeQuiGalere.gif";

import "../assets/stylesheets/Intro.css";

const decollageFusee = () => {
  // document.documentElement.requestFullscreen();
  document.getElementById("fuseeKiDecol").style.animationPlayState = "running";
  document.getElementById("button-container").style.opacity = 0;
  document.getElementById("takeoff").style.opacity = 1;
  document.getElementById("testnop").style.opacity = 1;
  document.getElementById("fuseenop").style.opacity = 1;
};

const Intro = () => {
  return (
    <div>
      <div id="fuseenop" className="container-fusee">
        <img id="fuseeKiDecol" src={GifFusee} />
      </div>

      <div id="button-container" class="button-container">
        <button onClick={decollageFusee} class="redbutton">
          <span class="launch">LAUNCH</span>
        </button>
        <div class="redbutton-shadow" />
        <div id="intro-bg" />
      </div>

      <div id="takeoff" className="takeoffplanet">
        <div id="testnop" />
      </div>
    </div>
  );
};

export default Intro;
