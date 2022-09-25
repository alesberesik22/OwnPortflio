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
        href="https://www.linkedin.com/in/ale%C5%A1-bere%C5%A1%C3%ADk-b5584b169/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://github.com/alesberesik22"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://sk-sk.facebook.com/AlesBeresik6"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="https://www.instagram.com/alesberesik/"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
