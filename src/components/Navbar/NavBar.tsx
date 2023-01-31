import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Drawer from "@mui/material/Drawer";

import "./NavBar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Tutti_Frutti_logo.svg/1280px-Tutti_Frutti_logo.svg.png"
            alt="logo"
            className="nav-logo"
          />
        </NavLink>
        <Bars onClick={() => setIsDrawerOpen(true)} />
        <Drawer
          title="Tutti Frutti Shop"
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className="nav-drawler"
        >
          <Link to="/">Home</Link>
          <Link to="/add-fruit">Add Fruit</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/login">Sign In</Link>
        </Drawer>
        <NavMenu>
          <NavLink to="/add-fruit">Add Fruit</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
