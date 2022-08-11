import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/images/logo2.png";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import "./Footer.css";

const Footer2 = () => {
  return (
    <footer style={{ height: "60vh", width: "100vw", padding: 0 }}>
      <MouseParallaxContainer
        className="parallax"
        containerStyles={{
          display: "grid",
          gridTemplateColumns: "4rem 4rem 4rem 4rem 4rem 4rem",
          justifyContent: "center",
          gap: "2rem",
          margin: "0 auto 2rem",
          height: "90%",
          top: 0,
        }}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.1}
          updateStyles={{
            background:
              "url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
            backgroundPositionY: "50%",
            transform: "scale(1.2)",
            position: "absolute",
            filter: "blur(4px) brightness(50%)",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "80vh",
            backfaceVisibility: "hidden",
          }}
        />
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            gridColumnStart: 1,
            gridColumnEnd: 6,
            gridRowStart: 1,
            gridRowEnd: 1,
            width: "100%",
            height: "2rem",
            marginLeft: "3rem",
          }}
        >
          <a href="#" className="footer_logo">
            {/* ALES BERESIK */}
            <img src={Logo} alt="logo" className="footer_logo-img" />
          </a>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#">Home</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.07}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#about">About</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.09}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#experiences">Experiences</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.07}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#testimonial">Jobs</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#projects">Projects</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{ gridRowStart: 2, gridRowEnd: 2 }}
        >
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            gridColumnStart: 3,
            gridColumnEnd: 3,
            gridRowStart: 3,
            gridRowEnd: 3,
            marginLeft: "5rem",
            marginTop: "-5rem",
          }}
        >
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
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="footer_copyright">
        <small>&copy; Aleš Berešík. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer2;
