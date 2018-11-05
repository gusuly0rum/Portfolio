import React from 'react';
import Sidebar from '../sidebar';

const Projects = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-projects">
        <div className="title">Projects</div>
        <hr></hr>
        <div className="stuff"></div>
      </div>
    </div>
  );
};

export default Projects;