import React from 'react';
import Sidebar from '../sidebar';

const Home = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-home">
        <div className="title">About</div>
        <hr></hr>
        <div className="stuff">

          <div className="summary">
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;