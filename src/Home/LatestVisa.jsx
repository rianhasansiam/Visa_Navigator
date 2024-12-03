import React, { useContext, useEffect } from "react";

import CardVisa from "./CardVisa";
import { contextData } from "../Contex";

const LatestVisa = () => {

 const {visasData}=useContext(contextData)
 console.log(visasData)

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Visas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visasData.map( visaData => (
            <CardVisa key={visaData._id} visaData={visaData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVisa;
