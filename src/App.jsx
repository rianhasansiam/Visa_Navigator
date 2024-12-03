import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Header/Navbar"



function App() {


  return (
    <>
    <Navbar/>

    <Outlet/>
    
     <Footer/>
    </>
  )
}

export default App
