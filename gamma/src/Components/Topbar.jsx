import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Work from "./Work";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BasicMenu from "./BasicMenu";

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BasicMenu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" className="menu-link" to="">
              Home
            </a>
            <a href="#About" className="menu-link">
              About
            </a>
            <a href="#Work" className="menu-link" to="/Work">
              Work
            </a>
            <a href="#Contact" className="menu-link" to="#Contact">
              Contact
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
