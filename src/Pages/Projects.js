import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from '../Components/Footer/Footer';
import ProjectCard from "../Components/ProjectCard/ProjectCard";


function Projects() {
  return (
    <div>
      <Nav />
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <ProjectCard reverse={false} />
      <ProjectCard reverse={true} />
      <Footer />
    </div>
  )
}

export default Projects;