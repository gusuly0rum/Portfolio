import React from 'react';
import Sidebar from '../sidebar';

const Contact = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-contact">
        <div className="title">Contact</div>
        <hr></hr>
        <div className="stuff">
          <input className="contact-email"></input>
          <input className="contact-title"></input>
          <textarea className="contact-body"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;