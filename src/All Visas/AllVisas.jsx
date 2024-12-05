import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex'

import CardVisa from '../Home/CardVisa'

const AllVisas = props => {

  const {allVisaData}=useContext(contextData)
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true); 
    }, 500);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  
  return (

<>

{showComponent ? (
      <div className='container mx-auto grid md:grid-cols-2 max-sm:w-[90vw] lg:grid-cols-4 my-20 gap-5'>

      {
        allVisaData.map(eachVisaData => <CardVisa key={eachVisaData._id} visaData={eachVisaData} />)
      }

    </div>
      ) : (
        <div className="flex justify-center items-center my-[30vh]"><span className="loading loading-ring w-[100px] md:w-[150px]"></span></div>
      )}

</>
   



   
  )
}

AllVisas.propTypes = {}

export default AllVisas