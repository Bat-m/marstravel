import React, { useEffect } from "react";
import "../assets/stylesheets/Intro.css";

const Intro = () => {
  useEffect(() => {
    var mars = document.getElementsByClassName("mars");
    var test = mars.getBoundingClientRect();
    console.log(mars);
  });

  return (
    <div id="universe">
      <div id="sun" />

      <div id="saturne" className="orbit">
        <div className="planet terre" />
      </div>

      <div id="pluton" className="orbit">
        <div className="planet mars" />
      </div>
    </div>
  );
};

export default Intro;
