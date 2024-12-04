import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Header/Navbar"
import { useContext } from "react"
import { contextData } from "./Contex"




function App() {


  const {userData}=useContext(contextData)
  if(!userData){
    return <div className="flex justify-center items-center mt-[40vh]"><span className="loading loading-ring w-[100px] md:w-[150px]"></span></div>
  }

  return (
    <>
    <Navbar/>

    <Outlet/>
    
     <Footer/>
    </>
  )
}

export default App
