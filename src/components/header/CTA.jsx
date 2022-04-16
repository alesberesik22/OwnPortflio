import React from "react";
import CV from "../../assets/CV/zivotopis.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};
