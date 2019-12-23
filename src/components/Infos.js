import React from "react";
import "../assets/stylesheets/Infos.css";

const Infos = props => {
  console.log(props.children);
  return (
    <div className="infos container">
      <div className="infos arc">Rounded</div>
    </div>
  );
};

export default Infos;
