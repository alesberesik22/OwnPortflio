import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/images/logo2.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        {/* ALES BERESIK */}
        <img src={Logo} alt="logo" className="footer_logo-img" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#testimonial">Jobs</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/AlesBeresik6/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/alesberesik/" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/aleš-bereš%C3%ADk-b5584b169/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Aleš Berešík. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
