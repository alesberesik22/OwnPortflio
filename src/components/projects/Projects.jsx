import React from "react";
import SmartHomeLogo from "../../assets/images/aleslogo.jpg";
import Portfolio from "../../assets/images/Portfolio.PNG";

import "./Projects.css";

const data = [
  {
    id: 1,
    image: SmartHomeLogo,
    title: "Smart Home System",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Portfolio,
    title: "My Portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>Projects</h5>
      <h2>I have made</h2>
      <div className="container project_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
