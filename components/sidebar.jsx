import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="photo-profile"></div>
      <div className="links-sidebar">
        <a href="https://github.com/gusuly0rum" target="_blank" className="link-github"><div className="photo-github"></div>GitHub</a>
        <a href="https://www.linkedin.com/in/donguk-kim/" target="_blank" className="link-linkedin"><div className="photo-linkedin"></div>LinkedIn</a>
        <Link to="/contact" className="link-email"><div className="photo-email"></div>Email</Link>
      </div>
      <div className="date-updated">Last updated: 17 October 2018</div>
    </div>
  );
};

export default Sidebar;