import React from 'react';
import Sidebar from '../sidebar';

const Interests = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-interests">
        <div className="title">Interests</div>
        <hr></hr>
        <div className="stuff"></div>
      </div>
    </div>
  );
};

export default Interests;