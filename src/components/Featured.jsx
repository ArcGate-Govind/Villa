import React, { useState } from "react";
import feature from "./constant/jsonData/featured.json";
import VideoContainer from "./VideoContainer";

const Featured = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: "Best useful links ?",
      content:
        "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
    {
      title: "How does this work ?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed does eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Why is Villa Agency the best ?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed does eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="mx-4 md:mx-20 my-10  flex flex-col justify-around  md:flex-row">
        <div className="md:w-1/2 flex flex-col  md:flex-row md:gap-4">
          <div className="md:w-1/2">
            <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured.jpg" />
          </div>
          <div className="md:w-1/2 mx-6 mt-4 md:mt-0">
            <h1 className="border-l-4 border-purple-600 text-purple-600 px-2">FEATURED</h1>
            <p className="text-black font-extrabold text-2xl md:text-4xl mt-2">
              Best Apartment & Sea View
            </p>
            <div className="bg-[#f2f2f2] mt-4 md:mt-10">
              {accordionItems.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleClick(index)}
                    className="cursor-pointer px-4 py-2 border-b border-gray-300"
                  >
                    {item.title}
                  </div>
                  {index === activeIndex && (
                    <p className="text-black text-justify px-4 py-2 border-b border-gray-300">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/4 mt-8 md:mt-0  shadow">
          {feature.map((value, index) => (
            <div key={index} className="flex px-4 items-center mt-4 md:mt-10 pb-4 border-b border-gray-300">
              <div>
                <img src={value?.url} />
              </div>
              <div className="ml-4">
                <h1 className="text-xl md:text-2xl">{value.title}</h1>
                <h2 className="text-stone-500">{value.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
     <VideoContainer/>
    </>
  );
};

export default Featured;
