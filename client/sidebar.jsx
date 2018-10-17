import React from 'react';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="photo-profile"></div>
      <div className="links-sidebar">
        <a href="https://github.com/gusuly0rum" target="_blank" className="link-github">GitHub</a>
        <a href="https://www.linkedin.com/in/donguk-kim/" target="_blank" className="link-linkedin">LinkedIn</a>
      </div>
    </div>
  );
};

export default Sidebar;