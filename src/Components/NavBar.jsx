import React, { useState } from "react";
import "../Styles/NavBar.css";
import { FaBars, FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigationAndScroll = (id) => {
    navigate("/"); // Navigate to the home route
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Delay ensures the home route is rendered before scrolling
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
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigationAndScroll("home");
              }}
            >
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigationAndScroll("about");
              }}
            >
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/staff");
              }}
            >
              <FaUsers /> Staff
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate("/gallery");
              }}
            >
              <FaImages /> Gallery
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleNavigationAndScroll("footer");
              }}
            >
              <FaEnvelope /> Contact Us
            </a>
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
