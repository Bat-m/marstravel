import React from "react";
import { gsap, MotionPathPlugin, TimelineMax } from "gsap/all";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";

import Intro from "./components/Intro";
import Control from "./components/Control";

const App = () => {
  gsap.registerPlugin(MotionPathPlugin);
  console.log("gsap: ", gsap.version);
  console.log("React: ", React.version);
  // const takeTime = () => {
  //   // currentTimeScale = gsap.globalTimeline.time();
  //   var currentTimeScale = gsap.globalTimeline.timeScale(); //gets current timeScale
  // };
  const tl = new TimelineMax({ repeat: 0, yoyo: false });
  return (
    <div className="App" id="intro-bg">
      {/* <OnMars tl={tl} /> */}
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
