import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion, Variants } from "framer-motion";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

const textVariants = {
  offscreen: {
    x: 20,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bound: 0.2,
      duration: 1,
    },
  },
};

const Experiences = () => {
  return (
    <section id="experiences">
      <ParallaxProvider>
        <Parallax
          easing={"easeOutQuad"}
          translateY={[200, 60]}
          speed={-20}
          opacity={[-0.5, 1]}
        >
          <div className="experiences_text" style={{ textAlign: "center" }}>
            <h5>What skills I have</h5>
            <h2>My Experiences</h2>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="experience experience_container">
        <motion.div
          className="experience_frontend"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
        >
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </motion.div>
        <motion.div
          className="experience_backend"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
        >
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </motion.div>
        <motion.div
          className="experience_other"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
        >
          <h3>Other skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>IoT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Alexa</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
