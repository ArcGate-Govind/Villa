import React from 'react';

const BestDeals = () => {
  return (
    <div className=" mt-20 bg-[#fafafa]">
      <div className="mx-4 md:mx-20 my-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-pink-500 font-bold border-l-2 border-l-pink-500 px-2 md:px-0 md:border-l-0 md:text-4xl"> BEST DEAL</h1>
            <h1 className="text-2xl md:text-4xl font-bold mt-4 md:mt-0">Find Your Best Deal Right Now !</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-orange-500 text-white px-6 py-4 rounded-lg">Apartment</button>
            <button className="bg-orange-500 text-white px-6 py-4 rounded-lg">Apartment</button>
            <button className="bg-orange-500 text-white px-6 py-4 rounded-lg">Apartment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
