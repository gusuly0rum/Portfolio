import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="name">Donguk Kim</Link>
      <div className="tabs">
        <Link to="/projects" className="tabs-projects">Projects</Link>
        <Link to="/skills" className="tabs-skills">Skills</Link>
        <Link to="/interests" className="tabs-interests">Interests</Link>
        <Link to="/education" className="tabs-education">Education</Link>
      </div>
    </div>
  );
};

export default Navbar;