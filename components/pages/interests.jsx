import React from 'react';
import Sidebar from '../sidebar';

const Interests = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-interests">
        <div className="title">Interests</div>
        <hr></hr>
        <div className="stuff">
          <ul>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Web Development</li>
            <li>Historical Linguistics</li>
            <li>Comparative Linguistics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interests;