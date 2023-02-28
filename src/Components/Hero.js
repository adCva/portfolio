import React from "react";
import { Link } from "react-router-dom";
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
    <div className="hero-container">
        <Swiper 
            spaceBetween={20} 
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
        >
            <SwiperSlide>
                <img src="images/slide/dine.png" alt="Slide #1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/slide/hotel.png" alt="Slide #2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/slide/art.png" alt="Slide #3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/slide/photosnap.png" alt="Slide #4" />
            </SwiperSlide>
        </Swiper>
        
        <div className="hero-text">
            <h1>Hey, I'm Adrian and I love taking photos and building software.</h1>
            <Link to="/projects" className="hero-btn">Portfolio</Link>
        </div>
    </div>
  )
}

export default Hero