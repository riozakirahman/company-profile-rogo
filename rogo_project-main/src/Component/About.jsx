import React from "react";
import "../CSS/about.css";
import { FiArrowLeft } from "react-icons/fi";
import aboutImg from "../assets/about_img.png";
import clientImg1 from "../assets/client-img-1.png";
import clientImg2 from "../assets/client-img-2.png";
import portoImg1 from "../assets/porto-img-1.png";
import portoImg2 from "../assets/porto-img-2.png";
import portoImg3 from "../assets/porto-img-3.png";

const About = () => {
  return (
    <main className="about">
      <section className="intro">
        <div className="intro__brief">
          <h1 className="intro__title">
            Company profile that reflects your brand identity
          </h1>
          <div className="intro__links">
            <a href="" className="intro__link">
              Our Services
            </a>
            <FiArrowLeft className="intro__icon" />
          </div>
        </div>
        <div className="intro__img-container">
          <img src={aboutImg} className="intro__img" alt="" />
        </div>
      </section>
      <section className="client">
        <h2 className="section__title">Client For Our Services</h2>
        <div className="section__images">
          <img src={clientImg1} alt="" className="section__image" />
          <img src={clientImg2} alt="" className="section__image" />
        </div>
      </section>
      <section className="porto">
        <h2 className="section__title">
          The perfect Agency to boost your company identity
        </h2>
        <div className="section__images">
          <img src={portoImg1} alt="" className="section__image" />
          <img src={portoImg2} alt="" className="section__image" />
          <img src={portoImg3} alt="" className="section__image" />
        </div>
      </section>
    </main>
  );
};

export default About;
