import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiperStyle.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Hero() {
  return (
    <div className='hero-container'>
        <Swiper 
            spaceBetween={20} 
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
        >
            <SwiperSlide>
                <img src="images/DSC0042.jpg" alt="Slide #1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/DSC0146.jpg" alt="Slide #2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/DSC0415.jpg" alt="Slide #3" />
            </SwiperSlide>
        </Swiper>
        <div className="hero-text">
            <h1>Hello</h1>
            <p>Lorem ipsum</p>
            <button>Click Me!</button>
        </div>
    </div>
  )
}

export default Hero