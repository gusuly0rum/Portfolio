import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="name">Donguk Kim</Link>
      <div className="links-navbar">
        <Link to="/skills" className="link-skills">Skills</Link>
        <Link to="/projects" className="link-projects">Projects</Link>
        <Link to="/interests" className="link-interests">Interests</Link>
        <Link to="/education" className="link-education">Education</Link>
        <Link to="/contact" className="link-contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;