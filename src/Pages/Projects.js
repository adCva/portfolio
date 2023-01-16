import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import MainProjectCard from '../Components/MainProjectCard';
import MiscellaneousProjectCard from '../Components/MiscellaneousProjectCard';
import Interested from '../Components/Interested';

function Projects() {
  return (
    <div>
      <Nav />

      <div className='projects-intro-wrapper projects-intro-wrapper-light'>
        <div className='projects-intro-container'>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className='projects-intro-wrapper'>
        <div className='projects-cards-container'>
          <MainProjectCard />
          <MainProjectCard />
          <MainProjectCard />
        </div>
      </div>

      <div className='projects-intro-wrapper projects-intro-wrapper-dark'>
        <div className='projects-cards-container'>
          <MiscellaneousProjectCard />
          <MiscellaneousProjectCard />
          <MiscellaneousProjectCard />
          <MiscellaneousProjectCard />
          <MiscellaneousProjectCard />
          <MiscellaneousProjectCard />
        </div>
      </div>

      <Interested />
      <Footer />
    </div>
  )
}

export default Projects;