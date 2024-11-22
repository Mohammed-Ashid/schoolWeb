import React, { useState } from 'react';
import "../Styles/NavBar.css";
import { FaBars, FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBook } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-main">
      <div className="logo-div">
        <span>Logo</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`list-div ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <FaHome /> Home
          </li>
          <li>
            <FaInfoCircle /> About
          </li>
          <li>
            <FaUsers /> Staff
          </li>
          <li>
            <FaImages /> Gallery
          </li>
          <li>
            <FaEnvelope /> Contact Us
          </li>
          <li>
            <button>
              <FaBook /> Admission
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
