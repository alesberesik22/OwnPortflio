import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectInfo.css";
import projectList from "./Projectslist";

function ProjectInfo(props) {
  const [id, setId] = useState(useParams().id);
  const [project, setProject] = useState(projectList[id]);
  useEffect(() => {
    console.log(project);
  }, []);
  return (
    <section id="projectInfo">
      <div className="projectInfo">
        <h4>{project.title}</h4>
      </div>
      <div className="project_content">
        <div className="project_content_intro">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project_content_description">
          <div className="description">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>
          <div className="tags">
            <h3>Technologies used</h3>
            {project.tag.split(",").map((tag, index) => (
              <p key={index} className={"tag_element"}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
