import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="home-link">
          <span className="highlight">SANJEEVANI</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/skills" className="navbar-link">Skills</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/resume" className="navbar-link">Resume</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
