import React from 'react';
import Nav from "../Components/Nav/Nav";
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Footer />
    </div>
  )
}

export default Home