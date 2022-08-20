import React, { useState } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import SmartHomeLogo from "../../assets/images/aleslogo.jpg";
import Portfolio from "../../assets/images/Portfolio.PNG";
import PhotoPortfolio from "../../assets/images/photo-portfolio.png";
import Restaurant from "../../assets/images/restaurant.png";

import "./Projects.css";

const cardVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const data = [
  {
    id: 1,
    image: SmartHomeLogo,
    title: "Smart Home System",
    github: "https://github.com/alesberesik22/diplomovka",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Portfolio,
    title: "My Portfolio",
    github: "https://github.com/alesberesik22/OwnPortflio",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: PhotoPortfolio,
    title: "Portfolio for a photograph",
    github: "https://github.com/alesberesik22/photo-portfolio",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: Restaurant,
    title: "Restaurant web site",
    github: "https://github.com/alesberesik22/",
    demo: "https://github.com",
  },
];

const Projects = () => {
  const [visibleImg, setvisibleImg] = useState(0);
  return (
    <section id="projects">
      <ParallaxProvider>
        <Parallax
          easing={"easeOutQuad"}
          translateY={[200, 60]}
          speed={-20}
          opacity={[-0.5, 1]}
        >
          <div className="projects_text" style={{ textAlign: "center" }}>
            <h5>Projects</h5>
            <h2>I have made</h2>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="container project_container">
        <div className="project_images">
          {visibleImg === 0 && (
            <img
              src={data[0].image}
              className="project_image"
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
              }}
            />
          )}
          {visibleImg === 1 && (
            <img
              src={data[1].image}
              className="project_image"
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
              }}
            />
          )}
          {visibleImg === 2 && (
            <img
              src={data[2].image}
              className="project_image"
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
              }}
            />
          )}
          {visibleImg === 3 && (
            <img
              src={data[3].image}
              className="project_image"
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
              }}
            />
          )}
        </div>
        <div className="projects">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <motion.article
                key={id}
                id={id}
                className="project_item"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
                onViewportEnter={(change) => {
                  setvisibleImg(change.target.id - 1);
                }}
              >
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
