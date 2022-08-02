import React from "react";
import AboutMe from "../../assets/images/about_me.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, Variants } from "framer-motion";

import "./About.css";

const cardVariants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 10,
    transition: { duration: 1, delay: 0.2 },
  },
};

const textVariants = {
  offscreen: {
    x: 300,
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

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <motion.div
            className="about_me-image"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <img src={AboutMe} alt="about me" />
          </motion.div>
        </div>
        <motion.div
          className="about_content"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
        >
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Companies</h5>
              <small>Worked for 3 companies</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>
          <p>
            Hello my name is Ales Beresik and I am a developer. I have been
            employed as manual tester, automation tester and QA enqineer.DOPLNIT
          </p>
          <a href="#contacts" className="btn btn-primary">
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
