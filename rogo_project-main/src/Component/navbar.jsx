import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../CSS/navbar.css';
import Logo from '../assets/Company Logo.png';

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <>
      <header className="myheader transparant">
        <div className="logo">
          <img src={Logo} alt="hi there this is our logo" />
        </div>

        <div className="content " ref={navRef}>
          <NavLink to="/">
            <button className="h-btn">About us</button>
          </NavLink>
          <NavLink to="/service">
            <button className="h-btn">Service</button>
          </NavLink>
          <NavLink to="/contact" onClick={showNavbar}>
            <button className="h-btn">Contact</button>
          </NavLink>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn hide" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
