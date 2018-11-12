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
          <div className="summary">Software Engineer</div>
          <div className="trivia">
            <ul>
              <li><b>Nationality</b>: USA</li>
              <li><b>Grew up in</b>: Korea</li>
              <li><b>IDEs</b>: XCode</li>
              <li><b>Text Editors</b>: VSCode</li>
              <li><b>Operating Systems</b>: Windows 10, MacOS</li>
              <li><b>Default Languages</b>: C++, Ruby</li>
              <li><b>Human Languages</b>: English, Korean, French</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;