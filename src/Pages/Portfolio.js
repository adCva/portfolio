import React, { Suspense } from 'react';

import Footer from '../Components/Footer';
import Interested from '../Components/Interested';
import Nav from '../Components/Nav';
import PageIntro from '../Components/PageIntro';
import Codewars from '../Components/Codewars';
import MainProjects from "../MainProj.json";
import MiscProjects from "../MiscProj.json";


const MainProjectCard = React.lazy(() => import('../Components/MainProjectCard'));
const MiscellaneousProjectCard = React.lazy(() => import('../Components/MiscellaneousProjectCard'));

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
              <Suspense fallback={<div className='project-fallback'>Loading Project...</div>}>
                <MainProjectCard key={i} reversed={el.reversed} imagePath={el.imagePath} title={el.title} desc={el.description} code={el.gitHub} page={el.livePage} />
              </Suspense>
            )
          })}
        </div>

        <div className='misc-projects-wrapper'>
          <div className='misc-projects'>
            {MiscProjects.project.map((el, i) => {
              return (
                <Suspense fallback={<div className='project-fallback'>Loading Project...</div>}>
                  <MiscellaneousProjectCard key={i} imagePath={el.imagePath} title={el.title} desc={el.description} code={el.gitHub} page={el.livePage} />
                </Suspense>
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