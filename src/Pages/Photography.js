import React from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Interested from '../Components/Interested';

function Photography() {
  return (
    <div>
      <Nav />

      <div className='images-wrapper'>
        <div className='images-container'>

          <div>
            <img src="images/DSC0042.jpg" alt="Slide" />
          </div>
          
          <div className="vertical-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="vertical-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="vertical-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="horizontal-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div className="big-stretch">
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

          <div>
            <img src="images/DSC0146.jpg" alt="Slide" />
          </div>

        </div>
      </div>

      <Interested />
      <Footer />
    </div>
  )
}

export default Photography;