import "../CSS/footer.css";
import logo from "../assets/Company Logo.png";
import { FiInstagram } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
const date = new Date();
const getYears = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer">
        <img className="logo" src={logo} />
        <div className="contact-wrapper">
          <div className="contact">
            <FiPhone className="footer-icon" />
            <p className="contact-text">+6281908826101</p>
          </div>
          <div className="contact">
            <AiOutlineMail className="footer-icon" />
            <p className="contact-text">rogo@gmail.com</p>
          </div>
          <div className="contact">
            <FiInstagram className="footer-icon" />
            <p className="contact-text">@rogo</p>
          </div>
        </div>
        <ul className="nav">
          <li className="nav__list">
            <a href="" className="nav__link">
              About Us
            </a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__link">
              Service
            </a>
          </li>
          <li className="nav__list">
            <a href="" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="copy-right">
        <span>&copy; {getYears}</span>
      </div>
    </footer>
  );
}

export default Footer;
