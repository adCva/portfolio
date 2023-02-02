import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Interested from '../Components/Interested';
import PageIntro from '../Components/PageIntro';

function Gallery() {
  return (
    <div className='page-wrapper'>
      <header>
        <Nav />
      </header>
      <main>
        <PageIntro title="Gallery" desc="Here you can find some of my favourite images. I try to add to this gallery regularly so make sure you check back for the latest images." />
        <div className='images-container'>

          <div>
            <img src="images/1.jpg" alt="Slide" />
          </div>
          
          <div className="vertical-stretch">
            <img src="images/2.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/3.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/4.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/5.jpg" alt="Slide" />
          </div>

          <div className="vertical-stretch">
            <img src="images/6.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/7.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/8.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/9.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/10.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/11.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/12.jpg" alt="Slide" />
          </div>

          <div className="vertical-stretch">
            <img src="images/13.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/14.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/15.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/16.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/17.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/18.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/19.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/20.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/21.jpg" alt="Slide" />
          </div>

        </div>
      </main>
      <footer>
        <Interested />
        <Footer />
      </footer>
    </div>
  )
}

export default Gallery;