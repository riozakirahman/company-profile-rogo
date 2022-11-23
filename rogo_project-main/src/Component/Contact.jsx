import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import "../CSS/contact.css";
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
        <div className="contact-form">
          <h4 className="contact-form__title">Contact Us</h4>
          <form action="#" className="contact-form__form">
            <div className="form-row">
              <div className="input-data">
                <label htmlFor="name" className="input-text">
                  Your Name
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <label htmlFor="mail" className="input-text">
                  Mail
                  <input
                    type="email"
                    id="mail"
                    className="input-field"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <label htmlFor="phone" className="input-text">
                  Phone
                  <input
                    type="text"
                    id="phone"
                    className="input-field"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <label htmlFor="message" className="input-text">
                  Message
                  <textarea
                    name=""
                    id="message"
                    rows="10"
                    cols="10"
                    className="input-textarea"
                    required
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data-submit">
                <input type="submit" className="input-submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
