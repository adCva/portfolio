import React from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Interested from '../Components/Interested'
import Nav from '../Components/Nav'
import Tech from '../Components/Tech'

function Home() {
  return (
    <div className='home-wrapper'>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <Tech />
        <Interested />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home