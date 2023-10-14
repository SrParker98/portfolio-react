import React from "react";
import Fade from "react-reveal/Fade";
import "./App.css";
import Topbar from "./Components/Topbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <Fade bottom>
        <About />
      </Fade>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
