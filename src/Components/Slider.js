import React from 'react';
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

function Slider() {
  return (
    <div className='slider-wrapper'>
        <div className='slider-container'>

          {/* ============================== Slider Images ============================== */}
          <div className='slider-frame'>
            <div className='slide-images'>
              <div className='image-container'><img src="images/DSC0042.jpg" alt="Slide" /></div>
              <div className='image-container'><img src="images/DSC0415.jpg" alt="Slide" /></div>
              <div className='image-container'><img src="images/DSC0146.jpg" alt="Slide" /></div>
            </div>
          </div>

          {/* ============================== Text ============================== */}
          <div className="intro-text">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
            <Link to="/projects" className='intro-link'><BsBoxArrowRight />Projects</Link>
          </div>

        </div>
    </div>
  )
}

export default Slider;