import React, { useContext, useEffect, useState } from "react";

import CardVisa from "./CardVisa";
import { contextData } from "../Contex";
import { Fade } from "react-awesome-reveal";

import animationData from './Animation.json'
import Lottie from "lottie-react";

const LatestVisa = () => {

 const {visasData}=useContext(contextData)


//  console.log(visasData)

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-10 gap-5">

        <h2 className="text-3xl font-bold text-center ">Latest Visas</h2>
        <h2 className="w-24 h-auto"><Lottie animationData={animationData} /></h2>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Fade cascade damping={0.1}>
      
          {visasData.map( visaData => (
            <CardVisa key={visaData._id} visaData={visaData} />
          ))}
      </Fade>
        </div>
      </div>
    </div>
  );
};

export default LatestVisa;
