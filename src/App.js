import React from "react";
import "./App.css";
import WayToMars from "./components/WayToMars";

import Intro from "./components/Intro";

const App = () => {
  return (
    <div className="App" id="intro-bg">
      <Intro />

      {/* <WayToMars /> */}
    </div>
  );
};

export default App;
