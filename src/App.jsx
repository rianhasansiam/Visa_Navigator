import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Header/Navbar"
import { useContext, useEffect, useState } from "react"
import { contextData } from "./Contex"




function App() {


    
    
    
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowComponent(true); 
      }, 1000);
  
      // Clean up the timer if the component unmounts
      return () => clearTimeout(timer);
    }, []);
    
    








    

  return (
    <>
    {showComponent ? (
      <div>
        <Navbar/>
 
        <Outlet/>
        
         <Footer/>

      </div>
      ) : (
        <div className="flex justify-center items-center mt-[40vh]"><span className="loading loading-ring w-[100px] md:w-[150px]"></span></div>
      )}


       

    </>
  )
}

export default App
