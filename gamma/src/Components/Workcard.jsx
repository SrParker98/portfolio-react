import React from "react";
import datawork from "./Cardinfo";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Fade } from "@mui/material";

export default function Workcard() {
  return (
    <div className="card-container">
      <div>
        <div className="flex-card-div">
          {datawork.map((work) => (
            <div className="card-container" key={work.Nameproject}>
              <div className="project-banner">
                <div className="project-info">
                  <h2 className="project-title"> {work.Nameproject}</h2>
                  <p className="project-description">{work.Description}</p>
                </div>
              </div>
              <div className="image-card-container">
                <img className="card-image-style" src={work.image} alt="" />
              </div>

              <div className="card-btn">
                <a
                  target="blank"
                  href="https://github.com/SrParker98/Githubairbnb"
                >
                  <GitHubIcon className="icons" sx={{ color: "black" }} />
                </a>
                <Button className="btn-mui bnt-mui-card" variant="outlined">
                  <a
                    target="blank"
                    className="toggle-links"
                    href={work.Liveproject}
                  >
                    Live
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 
  return (
    <div className="card-container">
      <div className="card-data">
       
        <h3>{datawork.Nameproject} </h3>
        <div className="image-card-container">
          <img src={datawork.Projectimage} alt="" />
          hola
        </div>
      </div>
    </div>
  );
  */
