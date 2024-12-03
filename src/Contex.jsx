import  { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const contextData=createContext()

const Contex = ({children}) => {

  const [visasData,setVisasData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/visas-data')
    .then(res => res.json())
    .then(data => setVisasData(data))
   },[])

    const info={
      visasData,
      

    }
  return (
    <contextData.Provider value={info}>
    {children}
    </contextData.Provider>
  )
}

Contex.propTypes = {
    children: PropTypes.node.isRequired
  }

export default Contex