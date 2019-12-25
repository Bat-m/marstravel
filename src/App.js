import React from "react";

import "./App.css";
import WayToMars from "./components/WayToMars";

import Intro from "./components/Intro";
import Control from "./components/Control";

const App = () => {
  return (
    <div className="App" id="intro-bg">
      <Control />
      <Intro />

      {/* <WayToMars /> */}
    </div>
  );
};

export default App;
