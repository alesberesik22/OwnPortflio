import React from "react";
import { BiCheck } from "react-icons/bi";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <ParallaxProvider>
        <Parallax
          easing={"easeOutQuad"}
          translateY={[200, 60]}
          speed={-20}
          opacity={[-0.5, 1]}
        >
          <div className="testimonial_text" style={{ textAlign: "center" }}>
            <h5>Jobs</h5>
            <h2>What I have worked with</h2>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="container jobs_container">
        <article className="job">
          <div className="job_head">
            <h3>Descartes</h3>
            <h5>Manual tester - Internship</h5>
          </div>
          <ul className="job_list">
            <li>
              <BiCheck className="job_list-icon" />
              <p>Testing of Web app</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>Writing User Stories</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>API tests</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>MySQL database check</p>
            </li>
          </ul>
        </article>
        {/* END OF DESCARTES INTERNSHIP */}
        <article className="job">
          <div className="job_head">
            <h3>Siemens</h3>
            <h5>Technician - Internship</h5>
          </div>
          <ul className="job_list">
            <li>
              <BiCheck className="job_list-icon" />
              <p>Bug fixes</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>Writing automated tests</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>Rework of tests</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>GIT</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>Jenkins</p>
            </li>
            <li>
              <BiCheck className="job_list-icon" />
              <p>Azure DevOps</p>
            </li>
          </ul>
        </article>
        {/* END OF SIEMENS */}
        <article className="job">
          <div className="job_head">
            <h3>Ness</h3>
            <h5>QA Engineer Internship/Full Time</h5>
          </div>
          <ul className="job_list">
            <li>
              <p>TBA</p>
            </li>
          </ul>
        </article>
        {/* END OF NESS */}
      </div>
    </section>
  );
};

export default Testimonial;
