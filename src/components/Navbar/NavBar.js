import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Drawer } from 'antd';
import "antd/dist/antd.css";
import './NavBar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='https://img.pngio.com/tutti-frutti-ice-cream-bar-mazagan-beach-golf-resort-tutti-frutti-png-719_233.png' alt='logo' className="nav-logo"/>
        </NavLink>
        <Bars onClick={showDrawer}/>
        <Drawer
          title="Tutti Frutti Shop"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={visible}
          className="nav-drawler"
        >
          <Link to="/" onClick={closeDrawer}>Home</Link>
          <Link to="/add-fruit" onClick={closeDrawer}>Add Fruit</Link>
          <Link to="/services" onClick={closeDrawer}>Services</Link>
          <Link to="/contact-us" onClick={closeDrawer}>Contact Us</Link>
          <Link to="/login" onClick={closeDrawer}>Sign In</Link>
      </Drawer>
        <NavMenu>
          <NavLink to='/add-fruit'>
            Add Fruit
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;