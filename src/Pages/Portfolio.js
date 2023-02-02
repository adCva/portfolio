import React from 'react';
import Footer from '../Components/Footer';
import Interested from '../Components/Interested';
import MainProjectCard from '../Components/MainProjectCard';
import MiscellaneousProjectCard from '../Components/MiscellaneousProjectCard';
import Nav from '../Components/Nav';
import PageIntro from '../Components/PageIntro';

function Portfolio() {
  return (
    <div className='page-wrapper'>
      <header>
        <Nav />
      </header>
      <main className='page-main-wrapper'>
        <PageIntro title="Portfolio" desc="Here you can find some of the projects that I made. I try to add to this portfolio regularly so make sure you check back for the latest projects." />
        
        <div className='main-projects'>
          <MainProjectCard />
          <MainProjectCard reversed={true} />
        </div>

      </main>
      <footer>
        <Interested />
        <Footer />
      </footer>
    </div>
  )
}

export default Portfolio;