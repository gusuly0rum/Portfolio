import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="name">Donguk Kim</Link>
      <div className="tabs">
        {/* <div className="tabs-projects"><Link to="/projects" className="tabs-link"/>Projects</div>
        <div className="tabs-skills"><Link to="/skills" className="tabs-link"/>Skills</div>
        <div className="tabs-interests"><Link to="/interests" className="tabs-link"/>Interests</div>
        <div className="tabs-education"><Link to="/education" className="tabs-link"/>Education</div> */}


        <Link to="/projects" className="tabs-projects">Projects</Link>
        <Link to="/skills" className="tabs-skills">Skills</Link>
        <Link to="/interests" className="tabs-interests">Interests</Link>
        <Link to="/education" className="tabs-education">Education</Link>
      </div>
    </div>
  );
};

export default Navbar;