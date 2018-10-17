import React from 'react';

const Education = () => {
  return (
    <div className="content-education">
      <div className="title">Education</div>
      <hr></hr>
      <div className="stuff">

        <div className="school-list">
          <div className="school">
            <div className="school-description">
              <div className="school-name">Imperial College London, United Kingdom</div>
              <div className="school-degree"><span className="school-year">2014 - 2016</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master of Science, Biomedical Engineering</div>
              {/* <div className="school-ranking">QS 2018 - 5th World</div> */}
            </div>
            <div className="photo-imperial"></div>
          </div>

          <div className="school">
            <div className="school-description">
              <div className="school-name">Newcastle University, United Kingdom</div>
              <div className="school-degree"><span className="school-year">2010 - 2014</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachelor of Engineering, Mechanical Engineering</div>
              {/* <div className="school-ranking">QS 2018 - 20th UK</div> */}
            </div>
            <div className="photo-newcastle"></div>
          </div>
        </div>

        <div className="education-description">
          Despite having two degrees in engineering, my programming skills are mostly self-taught.
        </div>

      </div>
    </div>
  );
};

export default Education;