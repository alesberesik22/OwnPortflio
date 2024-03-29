import React from "react";
import "./Experiences2.css";
import { motion } from "framer-motion";
import skills from "./Skills";
import jobs from "./Jobs";
import ReactTooltip from "react-tooltip";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experiences2() {
  return (
    <section id="experiences">
      <div className="experiences_text" style={{ textAlign: "center" }}>
        <h5>What skills I have</h5>
        <h2>My Experiences</h2>
      </div>
      <div className="skills_container">
        <motion.div className="experience_skill_list">
          {skills.map((skill, id) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skill_item"
              key={id}
            >
              <div
                className="skills_flex"
                style={{ backgroundColor: "#edf2f8" }}
              >
                <img src={skill.img} alt="img" />
              </div>
              <p className="p_text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="skills_exp">
          {/* {jobs.map((job, id) => (
            <motion.div key={job.year} className="skills_exp_item">
              <div className="skills_exp_year">
                <p className="bold-text">{job.year}</p>
              </div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="skill_exp_work"
                key={id}
                data-tip
                data-for={job.name}
              >
                <h4 className="exp_h4">{job.name}</h4>
                <p className="p_text">{job.company}</p>
              </motion.div>
              <ReactTooltip
                id={job.name}
                effect="solid"
                arrowColor="#fff"
                className="exp_tooltip"
              >
                {job.description}
              </ReactTooltip>
            </motion.div>
          ))} */}
          <VerticalTimeline className="skills_exp_timeline">
            {jobs.map((job, id) => (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#ffffff",
                  color: "#1d1836",
                  padding: "1rem 15px",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={job.year}
                iconStyle={{
                  background: "#313bac",
                  marginRight: "15px",
                }}
                key={id}
                icon={
                  <img
                    src={job.image}
                    alt={job.company}
                    style={{
                      width: "60%",
                      height: "60%",
                      objectFit: "contain",
                    }}
                  />
                }
              >
                <motion.div key={job.year} className="skills_exp_item">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="skill_exp_work"
                    key={id}
                    data-tip
                    data-for={job.name}
                  >
                    <h4 className="exp_h4">{job.name}</h4>
                    <p className="p_text">{job.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={job.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="exp_tooltip"
                  >
                    {job.description}
                  </ReactTooltip>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}

export default Experiences2;
