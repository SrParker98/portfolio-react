import { Button } from "@mui/material";
import React from "react";
import { AiFillHtml5 } from "react-icons/Ai";
import { DiCss3 } from "react-icons/Di";
import { SiJavascript } from "react-icons/Si";
import { DiReact } from "react-icons/Di";
import { SiPhp } from "react-icons/Si";
import { DiSass } from "react-icons/Di";
import Fade from "react-reveal/Fade";

const printext = "<h1> About </h1> ";
const printext2 = " <p>Great desire to solve problems.</p>";
const printext3 = " <p> I love the web world .</p>";
const printext4 =
  " <p>I also fell in love with react and all its features.</p>";
const printext5 =
  " <p> My dream is join a IT company where they make meetings to play pintball </p>";
const printext6 = "  <span> Coffe always welcome ☕  </span>";

export default function About() {
  return (
    <div id="About" className="about-section">
      <Fade bottom delay={400}>
        <div className="about-content">
          <h1 className="">{printext}</h1>

          <p>{printext2}</p>
          <p>{printext3}</p>
          <p>{printext4}</p>
          <p>{printext5}</p>
          <span>{printext6}</span>
          <button className="btn-about">
            <a href="#Contact">Contact</a>
          </button>
          <div className="main-tech">
            <span className="span-stack">Tech stack:</span>
            <div className="tech-stack">
              <AiFillHtml5 className="stack-icons" fill="orange" />
              <DiCss3 className="stack-icons" fill="#264de4" />
              <SiJavascript className="stack-icons" fill="#F0DB4F" />
              <DiReact className="stack-icons" fill="#61dbfb" />
              <SiPhp className="stack-icons" fill="#787CB5" />
              <DiSass className="stack-icons" fill="pink" />
            </div>
          </div>
        </div>
      </Fade>
      <div className="about-secondary">
        <Fade right>
          <img
            className="about-img"
            src="../src/assets/about_picture.PNG"
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
}
