import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

function Intro() {


  
  return (
    <div className="intro-wrapper">
        <div className="intro-container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img src="images/DSC0042.jpg" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src="images/DSC0146.jpg" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src="images/DSC0415.jpg" />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="intro-text">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
              <Link to="/projects" className='intro-link'><BsBoxArrowRight />Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default Intro;