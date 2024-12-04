import { useContext } from "react";
import { contextData } from "../Contex";

const TopCountries = () => {
   
  const {topvisa}=useContext(contextData)
      
    return (
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Countries for Visas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topvisa.map(country => (
              <div key={country._id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src={country.imageUrl} alt={country.country} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold">{country.country}</h3>
                <p className="text-gray-600 mt-2 mb-4">{country.description}</p>
                <p  className="text-blue-500 hover:underline cursor-pointer">Learn More</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TopCountries;
  