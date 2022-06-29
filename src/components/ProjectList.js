import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectMap = projects.map((project) =>{
    return <ProjectItem key={project.id} name={project.name} technologies={project.technologies}/>
  })
  return (

    <div id="projects">
      <h2>My Projects</h2>
      {projectMap}
    </div>
  );
}

export default ProjectList;
