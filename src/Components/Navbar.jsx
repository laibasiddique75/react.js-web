import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon, FaHome, FaPhone } from "react-icons/fa";
import { IoCard } from "react-icons/io5";

import Card from "./Card";
import Footer from "./Footer";
import Hero from "./Hero";
import Home from "../Home";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark" : "bg-light"} shadow`}>
          <div className="container-fluid">
            {/* Brand */}
            <Link className="navbar-brand text-primary" to="/">
              Laiba
            </Link>

            {/* Toggler for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${darkMode ? "text-light" : "text-dark"}`} to="/">
                    <FaHome /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${darkMode ? "text-light" : "text-dark"}`} to="/hero">
                    <FaHome /> Hero
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${darkMode ? "text-light" : "text-dark"}`} to="/card">
                    <IoCard /> Card
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${darkMode ? "text-light" : "text-dark"}`} to="/footer">
                    <FaPhone /> Footer
                  </Link>
                </li>
              </ul>

              {/* Dark/Light Mode Toggle Icon */}
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary rounded-circle"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className={`content-area ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/card" element={<Card />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;

