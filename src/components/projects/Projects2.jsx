import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import projectList from "./Projectslist";
import "./Projects2.css";

function Projects2() {
  let navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [ProjectFilter, setProjectFilter] = useState([]);

  useEffect(() => {
    setProjectFilter(projectList);
  }, []);

  const projectRedirect = (event) => {
    console.log(event.target.id);
    navigate(`project/${event.target.id}`);
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setProjectFilter(projectList);
      } else {
        setProjectFilter(
          projectList.filter((project) => project.tag.includes(item))
        );
      }
    }, 500);
  };
  return (
    <section id="projects">
      <div className="projects_text" style={{ textAlign: "center" }}>
        <h5>Projects</h5>
        <h2>I have made</h2>
      </div>
      <div className="project_filter">
        {["React JS", "Cypress", "Docker", "Node JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`project_item_filter ${
                activeFilter === item ? "project_item_active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="project_list"
      >
        {ProjectFilter.map((project, index) => (
          <div className="project_item">
            <div
              className="project_item_img"
              onClick={projectRedirect}
              key={project.id - 1}
              id={project.id - 1}
            >
              {console.log("test")}
              {console.log(project)}
              <img src={project.image} alt={project.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="project_item_hover"
                id={project.id - 1}
              >
                <a id={project.id} onClick={projectRedirect}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="project_item_view"
                    id={project.id - 1}
                  >
                    <AiFillEye id={project.id - 1} />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="project_item_content">
              <h4 className="project_item_title">{project.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects2;
