import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Slider from '../Components/Slider';
import About from '../Components/About';
import Tech from '../Components/Tech';
import Interested from '../Components/Interested';

function Home() {
  return (
    <div>
        <Nav />
        <Slider />
        <About />
        <Tech />
        <Interested />
        <Footer />
    </div>
  )
}

export default Home;