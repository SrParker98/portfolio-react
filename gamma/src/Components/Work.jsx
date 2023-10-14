import React from "react";
import Workcard from "./Workcard";
import { Fade } from "@mui/material";

export default function Work() {
  return (
    <div id="Work" className="work-container">
      <h1 className="seccion-title-work">Work</h1>
      <div className="flex-card">
        <Workcard />
      </div>
    </div>
  );
}
