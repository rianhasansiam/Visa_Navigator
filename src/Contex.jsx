import  { createContext } from 'react'
import PropTypes from 'prop-types'
export const contextData=createContext()

const Contex = ({children}) => {

    const info={


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