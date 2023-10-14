import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { DiSass } from "react-icons/Di";
import { Button } from "@mui/material";
import { FaReact } from "react-icons/Fa";
import Topbar from "./Topbar";
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="titles">
        Front-End Developer
        <FaReact className="react-icon" fill="#61dbfb" />
      </h1>
      <p className="p-home">
        Hi, I am Sergi Navarro. A passionate Front-End Developer based in
        Valencia, Spain 📍
      </p>
      <div className="profile-icons-div">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SrParker98"
        >
          <GitHubIcon className="icons" sx={{ color: "#ddd" }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sergi-navarro-24227016a/"
        >
          <LinkedInIcon className="icons" sx={{ color: "#ddd" }} />
        </a>
      </div>

      <Button className="btn-mui" variant="outlined">
        <a className="toggle-links" href="Work">
          See my work
        </a>
      </Button>
    </div>
  );
}
