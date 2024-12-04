import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex'

import CardVisa from '../Home/CardVisa'

const AllVisas = props => {

  const {allVisaData}=useContext(contextData)
  
  return (
    <div className='container mx-auto grid md:grid-cols-2 max-sm:w-[90vw] lg:grid-cols-4 my-20 gap-5'>

      {
        allVisaData.map(eachVisaData => <CardVisa key={eachVisaData._id} visaData={eachVisaData} />)
      }

    </div>
  )
}

AllVisas.propTypes = {}

export default AllVisas