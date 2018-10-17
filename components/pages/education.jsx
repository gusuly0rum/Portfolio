import React from 'react';

const Education = () => {
  return (
    <div className="content-education">
      <div className="title">Education</div>
      <hr></hr>
      <div className="stuff">

        <div className="school">
          <div className="photo-imperial"></div>
          <div className="school-description">
            <div><a href="https://www.imperial.ac.uk" target="_blank" className="link-school">Imperial College London</a>, United Kingdom</div>
            <div>Master of Science, Biomedical Engineering</div>
            <div>2014 - 2016</div>
          </div>
        </div>

        <div className="school">
          <div className="photo-newcastle"></div>
          <div className="school-description">
            <div className="school-name"><a href="https://www.ncl.ac.uk" target="_blank" className="link-school">Newcastle University</a>, United Kingdom</div>
            <div className="school-degree">Bachelor of Engineering, Mechanical Engineering</div>
            <div className="school-year">2010 - 2014</div>
          </div>
        </div>

        <div className="education-description">
          Despite studying in great institutions with great teachers, I feel that:
          <ul>
            <li>most of what I know came from self studying</li>
            <li>what I like to do is slightly different, but related to my official degrees</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;