import React from "react";
import PropertyCard from "./PropertyCard";
import property from "../components/constant/jsonData/property.json";

const Propertiy = () => {
  return (
    <div className=" mt-10">
      <div className="pt-10">
        <h1 className="text-center text-xl font-bold text-pink-500">PROPERTIES</h1>
        <h1 className="text-center text-4xl font-bold">We Provide The Best Property You Like</h1>
      </div>
      <div className=" flex flex-wrap justify-center items-center mt-8">
        {property.map((value) => (
          <PropertyCard key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Propertiy;
