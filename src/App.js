import React from "react";
import { gsap, MotionPathPlugin, TimelineMax } from "gsap/all";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";

import Intro from "./components/Intro";
import Control from "./components/Control";

const App = () => {
  gsap.registerPlugin(MotionPathPlugin);
  console.log(gsap.version);
  const takeTime = () => {
    // currentTimeScale = gsap.globalTimeline.time();
    var currentTimeScale = gsap.globalTimeline.timeScale(); //gets current timeScale
    console.log(currentTimeScale);
  };
  const tl = new TimelineMax({
    onUpdate: takeTime,
    yoyo: true,
    repeat: 1,
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
