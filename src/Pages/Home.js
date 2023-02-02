import React from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Interested from '../Components/Interested';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className='page-wrapper'>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <About />
      </main>
      <footer>
        <Interested />
        <Footer />
      </footer>
    </div>
  )
}

export default Home;