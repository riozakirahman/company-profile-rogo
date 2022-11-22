import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import '../CSS/contact.css';
const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <div className="contact-wrapper">
          <div className="contact-title">
            <h3>Get in touch!</h3>
            <p>Contact us for more info, don't be shy </p>
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="icon-items">
            <HiLocationMarker className="contact-icon" />
            <p>
              jalan, simpang <br />
              kiri kanan
            </p>
          </div>
          <div className="icon-items">
            <IoIosCall className="contact-icon" />
            <p>+62 000 0000 000</p>
          </div>
          <div className="icon-items">
            <AiOutlineMail className="contact-icon" />
            <p>gmail@gmail.com</p>
          </div>
        </div>

        {/* form */}
        <div className="bg-form">
          <div className="form-wrapper-items">
            <div className="form-items-left">
              <label htmlFor="name-user">Your Name</label>
              <input type="text" className="name-user" />
              <label htmlFor="mail-user">Mail</label>
              <input type="text" className="mail-user" />
              <label htmlFor="mail-user">Phone</label>
              <input type="text" className="phone-user" />
            </div>
            <div className="text-area-right">
              <label htmlFor="msg">Message</label>
              <textarea name="txt-area" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="btn-form">
            <button className="my-button">Check it out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
