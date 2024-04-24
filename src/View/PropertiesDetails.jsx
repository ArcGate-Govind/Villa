import React, { useState } from 'react';
import feature from "../components/constant/jsonData/featured.json"

const PropertiesDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: "Best useful links?",
      content:
        "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
    {
      title: "How does this work?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed does eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Why is Villa Agency the best?",
      content:
        "Dolor almesit amet, consectetur adipiscing elit, sed does eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="">
      <div className="relative">
        <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/page-heading-bg.jpg" alt="Page Heading Background" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-4 py-2 mb-4 sm:mb-0 sm:mr-4  shadow-md">HOME / SINGLE PROPERTIES</button>
          <h1 className="text-white text-2xl font-extrabold px-4 py-2">SINGLE PROPERTIES</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 md:mt-12 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/single-property.jpg" alt="Single Property" className="w-full md:max-w-lg" />
          <button className='bg-pink-100 mt-4 px-4 py-2 rounded-lg shadow-md'>Apartment</button>
          <h1 className='border-b-4 border-indigo-500 py-4 text-lg md:text-xl'>24 New Street Miami, OR 24560</h1>
          <p className="text-sm md:text-base leading-relaxed">
            Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
          </p>
          <div className="bg-[#f2f2f2] mt-4 md:mt-10 rounded-lg shadow-md">
            {accordionItems.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer px-4 py-2 border-b border-gray-300 ${activeIndex === index ? 'bg-gray-200' : ''}`}
                >
                  {item.title}
                </div>
                {index === activeIndex && (
                  <p className="text-sm md:text-base leading-relaxed px-4 py-2 border-b border-gray-300">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 h-[40%] mb-10  shadow">
          {feature.map((value, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mt-4 pb-4 border-b border-gray-300">
              <div className="md:w-1/4 flex justify-center">
                <img src={value?.url} alt={value.title} className="w-20 h-20 md:w-auto md:h-auto" />
              </div>
              <div className="md:w-3/4 ml-4 md:ml-8">
                <h1 className="text-xl md:text-2xl">{value.title}</h1>
                <h2 className="text-stone-500">{value.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
