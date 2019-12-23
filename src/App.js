import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WayToMars from "./components/WayToMars";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App" id="intro-bg">
      <WayToMars />
      {/* <Intro /> */}
    </div>
  );
}

export default App;
