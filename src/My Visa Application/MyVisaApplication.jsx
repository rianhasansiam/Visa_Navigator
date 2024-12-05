import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import SingleApplication from './SingleApplication';
import { contextData } from '../Contex';

const MyVisaApplication = props => {
 

  const {userData,setAllVisaApply,allVisaApply,reloadDelteapply}=useContext(contextData)
  const email = userData?.email;  

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/visa-apply?email=${email}`)
        .then(res => res.json())
        .then(data => setAllVisaApply(data));
    }
  }, [email, setAllVisaApply, reloadDelteapply]);



  

  return (
    <div className='my-10'>
<h1 className="text-3xl font-bold mb-6 text-center">My Visa Applications</h1>
    
    <div className='grid grid-cols-4 gap-5 container mx-auto  my-5'>

    {

       allVisaApply.map(eachData => <SingleApplication key={eachData._id} singleDatavisa={eachData}  />)
      
    }
    
    </div>
    </div>
  )
}

MyVisaApplication.propTypes = {}

export default MyVisaApplication