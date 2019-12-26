import React from "react";
import { gsap, TimelineMax } from "gsap/all";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";

import Intro from "./components/Intro";
import Control from "./components/Control";

const App = () => {
  const takeTime = () => {
    // currentTimeScale = gsap.globalTimeline.time();
    var currentTimeScale = gsap.globalTimeline.timeScale(); //gets current timeScale
    console.log(currentTimeScale);
  };
  const tl = new TimelineMax({
    onUpdate: takeTime,
    yoyo: false,
    repeat: 0,
    repeatDelay: 1
  });
  return (
    <div className="App" id="intro-bg">
      <BrowserView>
        <Control tl={tl} />
        <Intro tl={tl} />
      </BrowserView>
      <MobileView>
        <h1> This site only work on desktop for now ;) </h1>
      </MobileView>
    </div>
  );
};

export default App;
