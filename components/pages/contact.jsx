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
          <input className="contact-email" placeholder="Sender"></input>
          <input className="contact-email" placeholder="Receiver"></input>
          <input className="contact-title" placeholder="Email Title"></input>
          <textarea className="contact-body" placeholder="Email Body"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;