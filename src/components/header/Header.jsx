import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/images/me.png";
import arrow from "../../assets/images/arrow.png";
import HeaderSocials from "./HeaderSocials";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        {/* https://reactjsexample.com/portfolio-template-for-developers-build-in-react/ */}
        <div className="me">
          <img src={ME} alt={"me"} />
        </div>
        <div className="header_info">
          <h1>
            Hi I'm{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #8089EA 0%, #1CE6B4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ales
            </span>{" "}
            <span className="hand">🤚</span>
          </h1>
          <h2>I'm a Software Engineer.</h2>
          <div className="header_info_bullets">
            <h3 className="header_bullet_point">
              🎶
              <span style={{ fontSize: "14px", marginLeft: "1.5rem" }}>
                fueld by music
              </span>
            </h3>
            <h3 className="header_bullet_point">
              🌎
              <span style={{ fontSize: "14px", marginLeft: "1.5rem" }}>
                based in SK
              </span>
            </h3>
            <h3 className="header_bullet_point">
              💼
              <span style={{ fontSize: "14px", marginLeft: "1.5rem" }}>
                Engineer at Ness KE
              </span>
            </h3>
            <h3 className="header_bullet_point">
              📧
              <span style={{ fontSize: "14px", marginLeft: "1.5rem" }}>
                beresik.ales@gmail.com
              </span>
            </h3>
          </div>
          <CTA />
          <HeaderSocials />
        </div>
        <div className="glitch">
          <img
            style={{
              marginTop: "-3rem",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "14rem",
              transform: "rotate(180deg)",
            }}
            src={arrow}
            alt="arrow"
          />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
