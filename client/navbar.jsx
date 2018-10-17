import React from 'react';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="name">Donguk Kim</div>
      <div className="tabs">
        <a className="tabs-projects">Projects</a>
        <a className="tabs-skills">Skills</a>
        <a className="tabs-interests">Interests</a>
        <a className="tabs-education">Education</a>
      </div>
    </div>
  );
};

export default Navbar;