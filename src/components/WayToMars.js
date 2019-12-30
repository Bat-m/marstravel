import React, { useEffect, useState } from "react";
import "../assets/stylesheets/WayToMars.scss";
import rocket from "../assets/gif/spaceship.gif";
import { OnMars } from "./OnMars";
import { BubbleTalk } from "./BubbleTalk";

const WayToMars = ({ tl, animStart }) => {
  const [nextAnim, setNextAnim] = useState(false);

  let stringsWayToMars = [
    "Houston, Everything looks fine, Mars is on the way !!!",
    "Ok Mars 13, you should check motor engine",
    "Houston, motor check",
    "...",
    "wait",
    "we got an issue",
    "Houston ?",
    "Do you copy ?!",
    "we lose control",
    "motor doesn't respond"
  ];

  const toggleNextAnim = () => {
    setNextAnim(true);
  };

  useEffect(() => {
    tl.set(".universe", {
      autoAlpha: 1
    })

      .set(".orbit", {
        rotation: 165,
        immediateRender: true
      })

      .to("#first.orbit", {
        duration: 25.25,
        rotation: -60,
        ease: "linear",
        immediateRender: true
      })
      .to(
        "#second.orbit",
        {
          duration: 25.25,
          rotation: -5,
          ease: "linear",
          immediateRender: true
        },
        "-=25"
      )
      .to([".orbit", "#sun"], {
        duration: 1,
        autoAlpha: 0,
        immediateRender: true
      })
      .fromTo(
        "#spaceship",
        34.5,
        {
          xPercent: 10,
          yPercent: -50,
          transformOrigin: "50% 50%",
          scale: 0.5,
          autoAlpha: 1,
          immediateRender: true
        },
        {
          xPercent: -50,
          yPercent: -50,
          ease: "power1.inOut",
          motionPath: {
            path: "#path",
            align: "#path",
            autoRotate: 90
          },
          immediateRender: true
        },
        "-=30"
      )
      .fromTo(
        "#bubbleship",
        34.5,
        {
          xPercent: -25,
          yPercent: -40,
          transformOrigin: "50% 50%",
          scale: 0.5,
          autoAlpha: 1,
          immediateRender: true,
          onComplete: () => {
            toggleNextAnim();
          }
        },
        {
          ease: "power1.inOut",
          motionPath: {
            path: "#path"
          },
          immediateRender: true
        },
        "-=34.5"
      )
      .to(
        ["#spaceship", "#bubbleship"],
        {
          duration: 1,
          autoAlpha: 0,
          immediateRender: true
        },
        "-=5"
      )

      .set([".universe"], {
        autoAlpha: 0
      });
  }, [tl, animStart]);

  return (
    <div>
      <div className="universe">
        <div id="sun" />

        <div id="first" className="orbit">
          <div id="terre" className="planet terre" />
        </div>

        <div id="second" className="orbit">
          <div id="mars" className="planet mars" />
        </div>

        <div className="svg-container">
          <svg
            version="1.1"
            viewBox="-430 -430 900 900"
            preserveAspectRatio="xMinYMin meet"
            className="svg-content"
          >
            <path
              id="path"
              d="M95.15,186.53c15-9.53,85.56-56.62,103-145.4C201.73,23.05,212-34,179.27-93.3c-5-9-29.92-52.43-84.12-80.47C22.36-211.43-50.41-194-81.59-186.58c-38.2,9.14-100.43,24-138,78.65C-255.11-56.26-247.68.61-242.27,42c3.9,29.8,16,122.19,98.3,193,5.23,4.5,119.83,99.7,267.47,64,22.86-5.53,111.38-26.92,161.62-106.09,52.78-83.16,27.8-174.15,11.34-234.1-12-43.85-35.2-128.21-118.14-189.3C119.2-274,57.31-285.41,25.21-289"
            />

            <g id="spaceship">
              <image alt="fusee" href={rocket} />
            </g>
            <g id="bubbleship">
              <foreignObject id="plop">
                <BubbleTalk string={stringsWayToMars} />
              </foreignObject>
            </g>
          </svg>
        </div>
      </div>
      {nextAnim && <OnMars tl={tl} nextAnim={nextAnim} />}
    </div>
  );
};

export default WayToMars;
