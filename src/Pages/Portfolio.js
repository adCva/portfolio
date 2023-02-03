import React from 'react';

import Footer from '../Components/Footer';
import Interested from '../Components/Interested';
import MainProjectCard from '../Components/MainProjectCard';
import MiscellaneousProjectCard from '../Components/MiscellaneousProjectCard';
import Nav from '../Components/Nav';
import PageIntro from '../Components/PageIntro';
import Codewars from '../Components/Codewars';

import MainProjects from "../MainProj.json";
import MiscProjects from "../MiscProj.json";

function Portfolio() {
  return (
    <div className='page-wrapper'>
      <header>
        <Nav />
      </header>
      <main className='page-main-wrapper'>
        <PageIntro title="Portfolio" desc="Here you can find some of the projects that I made. I try to add to this portfolio regularly so make sure you check back for the latest projects." />
        
        <div className='main-projects'>
          {MainProjects.project.map((el, i) => {
            return (
              <MainProjectCard key={i} reversed={el.reversed} imagePath={el.imagePath} title={el.title} desc={el.description} code={el.gitHub} page={el.livePage} />
            )
          })}
        </div>

        <div className='misc-projects-wrapper'>
          <div className='misc-projects'>
            {MiscProjects.project.map((el, i) => {
              return (
                <MiscellaneousProjectCard key={i} imagePath={el.imagePath} title={el.title} desc={el.description} code={el.gitHub} page={el.livePage} />
              )
            })}
          </div>
        </div>
      </main>
      <footer>
        <Codewars />
        <Interested />
        <Footer />
      </footer>
    </div>
  )
}

export default Portfolio;