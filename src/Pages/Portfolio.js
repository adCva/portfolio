import React from 'react';
import Footer from '../Components/Footer';
import Interested from '../Components/Interested';
import MainProjectCard from '../Components/MainProjectCard';
import MiscellaneousProjectCard from '../Components/MiscellaneousProjectCard';
import Nav from '../Components/Nav';

function Portfolio() {
  return (
    <div>
      
      <header>
        <Nav />
      </header>

      <main className='portfolio-wrapper'>
        <div className='projects-container'>

          <div className='page-intro'>
            <h1>Portfolio</h1>
            <p>Here you can find some of the projects that I made. I try to add to this portfolio regularly so make sure you check back for the latest projects.</p>
          </div>

          <div className='main-projects'>
            <MainProjectCard />
            <MainProjectCard reversed={true} />
            <MainProjectCard />
            <MainProjectCard reversed={true}/>
          </div>

          <div className='misc-projects'>
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
            <MiscellaneousProjectCard />
          </div>
          
        </div>
        <Interested />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Portfolio;