import React from "react";

const CardVisa = ({ visaData }) => {

// console.log(visaData)

const {imageUrl,country,visaType,processingTime,fee,validity,applicationMethod}=visaData




  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <img
        src={imageUrl}
        alt={country}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{country}</h2>
      <p className="text-sm text-gray-700">Visa Type: {visaType}</p>
      <p className="text-sm text-gray-700">Processing Time: {processingTime}</p>
      <p className="text-sm text-gray-700">Fee: {fee}</p>
      <p className="text-sm text-gray-700">Validity: {validity}</p>
      <p className="text-sm text-gray-700">Application Method: {applicationMethod}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        See Details
      </button>
    </div>
  );
};

export default CardVisa;
