import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
// import MainLogo from "../../../public/Assets/header-logo.png"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="logo">
          <img className="logo-image" src="./Assets/header-logo.png" alt="Logo" />
          <div className="menu" onClick={handleToggleMenu}>
            {menuOpen ? (
              <img src="./Assets/close.webp" alt="Close Menu" className="menu-icon1" />
            ) : (
              <img src="./Assets/menu.png" alt="Open Menu" className="menu-icon2" />
            )}
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={() => setMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
