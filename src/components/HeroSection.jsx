import React from 'react';
import Herosection from "../components/constant/jsonData/HeroSection.json"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Featured from './Featured';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    pauseOnHover: true,
    arrows: false // Hides the arrows
  };

  return (
    <>
      <Slider {...settings}>
      
      {
        Herosection.map((value)=>{
          return (
            <div className="relative">
              <img
                src={value?.url}
                className="w-full"
                alt="Villa Banner"
              />
              <div className="absolute bottom-5 md:bottom-20 left-5 md:left-60 md:w-1/5 py-5 md:py-10 text-white ">
                <button className="bg-white flex gap-2 px-4 py-2 mb-4 md:mb-8">
                  <span className="text-black">{value.firsttitle},</span>
                  <span className="text-orange-500">{value.lasttitle}</span>
                </button>
                <h1 className="text-2xl md:text-5xl font-bold">{value?.subtitle}</h1>
              </div>
            </div>
          );
        })
      }
        
    </Slider>
    <Featured/>
    </>
  );
};

export default HeroSection;
