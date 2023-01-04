import React from 'react';
import Nav from "../Components/Nav/Nav";
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import Redirect from '../Components/Redirect/Redirect';
import Footer from '../Components/Footer/Footer';


function Projects() {
  return (
    <div>
        <Nav />
        <ProjectCard reverse={false} />
        <ProjectCard reverse={true} />
        <ProjectCard reverse={false} />
        <ProjectCard reverse={true} />
        <Redirect />
        <Footer />
    </div>
  )
}

export default Projects