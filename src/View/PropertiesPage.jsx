import React from 'react';
import Propertiy from '../components/Propertiy';

const PropertiesPage = ({ totalItems, activeIndex, onClick }) => {
  const renderItems = () => {
    const items = [];
    for (let i = 0; i < totalItems; i++) {
      items.push(
        <button
          key={i}
          className={`w-4 h-4 mx-1 rounded-full border border-gray-500 focus:outline-none ${activeIndex === i ? 'bg-orange-500' : 'bg-white'}`}
          onClick={() => onClick(i)}
        />
      );
    }
    return items;
  };

  return (
    <>
      <div className='relative '>
        <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/page-heading-bg.jpg" alt="pr" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <button className='bg-white px-4 py-2 mb-4 sm:mb-0 sm:mr-4'>HOME / PROPERTIES</button>
          <h1 className='text-white text-2xl font-extrabold px-4 py-2'>PROPERTIES</h1>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center text-white mt-10 '>
        <button className='bg-orange-500 px-4 py-2 rounded-md mb-4 sm:mb-0'>Show All</button>
        <button className='bg-black px-4 py-2 rounded-md'>Apartment</button>
        <button className='bg-black px-4 py-2 rounded-md'>Villa House</button>
        <button className='bg-black px-4 py-2 rounded-md'>Pent House</button>
      </div>
      <Propertiy />
      <div className="flex justify-center items-center mt-4">
        {renderItems()}
      </div>
    </>
  );
};

export default PropertiesPage;
