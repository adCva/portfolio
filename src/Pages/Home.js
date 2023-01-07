import React from 'react';
import Nav from "../Components/Nav/Nav";
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Redirect from '../Components/Redirect/Redirect';
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Redirect />
      <Footer />
    </div>
  )
}

export default Home