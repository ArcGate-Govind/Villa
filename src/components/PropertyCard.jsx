import React from "react";

const PropertyCard = ({ value }) => {
  return (
    <div className="mx-4 my-4 md:mx-10 md:my-10 lg:w-80 p-4 md:p-6 shadow-lg bg-slate-100 rounded-lg  ">
      <img className="w-full h-auto rounded-lg" src={value.url} alt="Property" />
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="md:w-1/2 rounded-lg bg-pink-200 px-4 py-2 text-center md:text-left">
          {value?.type}
        </div>
        <div className="mt-4 md:mt-0">{value.price}</div>
      </div>
      <h1 className="text-lg font-bold mt-2">{value?.address}</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mt-2">
        <div className="flex items-center">
          <div className="mr-2">Bedrooms: {value.Bedrooms}</div>
          <div>Bathrooms: {value.Bathrooms}</div>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <div className="mr-2">Area: {value.Area}</div>
          <div>Floor: {value.Floor}</div>
        </div>
      </div>
      <div className="border-b-2 border-gray-400 mt-2">
        Parking: {value.Parking}
      </div>
      <div className="flex justify-center mt-4">
        <button className="ransition ease-in-out delay-150 bg-orange-600 hover:-translate-y-1 rounded-full hover:scale-110 hover:bg-orange-300 duration-700 px-4 py-2 text-white">Schedule a visit</button>
      </div>
    </div>
  );
};

export default PropertyCard;
