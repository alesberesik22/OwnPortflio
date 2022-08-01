import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        style={{ marginRight: "1rem" }}
        href="https://linkedin.com"
        target="_blank"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://github.com"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://facebook.com"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://instagram.com"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
