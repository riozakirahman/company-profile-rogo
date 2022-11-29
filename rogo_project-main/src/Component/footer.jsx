import "../CSS/footer.css";
import logo from "../assets/Company Logo.png";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
const date = new Date();
const getYears = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer">
        <img className="logo" alt="logo-img" src={logo} />
        <div className="contacts">
          <div className="contact">
            <a
              href="https://api.whatsapp.com/send?phone=6281908826101"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="footer-icon"></FaWhatsapp>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://mailto:riozakirahman@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="footer-icon" />
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.instagram.com/riozakirahman08/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="footer-icon" />
            </a>
          </div>
        </div>
        <ul className="nav">
          <li className="nav__list">
            <a href="/" className="nav__link">
              About Us
            </a>
          </li>
          <li className="nav__list">
            <a href="/service" className="nav__link">
              Service
            </a>
          </li>
          <li className="nav__list">
            <a href="/contact" className="nav__link">
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
