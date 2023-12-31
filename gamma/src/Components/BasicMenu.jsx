import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useHref } from "react-router-dom";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="menu-item" onClick={handleClose}>
          <a className="toggle-links" href="/">
            Home
          </a>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          <a className="toggle-links" href="#Work">
            Work
          </a>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          <a className="toggle-links" href="#About">
            About
          </a>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          <a className="toggle-links" href="#Contact">
            Contact
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
