
import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contextData } from '../Contex'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, 
    })
  }, [])
  
  
  const {signoutHandle,dp,disname,userData}=useContext(contextData)


  
  return (
    <div className="navbar bg-base-100 container mx-auto py-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-visas">All Visas</NavLink></li>
      <li><NavLink to="/add-visa">Add Visa</NavLink></li>
      <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
      <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl font-extrabold   "><img className='w-10' src="https://i.ibb.co.com/dBf0TFW/Visa-initial-512.webp" alt="" />VISA NAVIGATOR</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-visas">All Visas</NavLink></li>
      <li><NavLink to="/add-visa">Add Visa</NavLink></li>
      <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
      <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
     
    </ul>
  </div>

  <div className="navbar-end  ">

    {userData?
   
   <div className="dropdown dropdown-hover ">
  <div tabIndex={0} role="button" className=' items-center gap-2 hidden md:flex' ><img className=' w-[45px] h-[45px] rounded-full object-cover' src={dp} alt="" />
 
  <h1 data-aos="fade-left" className='font-semibold text-lg'>{disname}</h1>
  </div>


  <div  tabIndex={0} className="dropdown-content menu bg-base-100 right-[20px] rounded-box z-[1] w-64 p-5  shadow ">
    <h1 className=' text-center font-bold text-xl py-5'>{disname}</h1>
  <button className='bg-gray-200 w-1/2 mx-auto font-semibold rounded-lg p-2  text-red-400 text-base ' onClick={signoutHandle}>LogOut</button>
</div>



</div>
  
    :
     <div className='flex gap-4 underline cursor-pointer font-semibold text-lg'>
   <Link to="/login" className='hover:text-blue-300'>Login</Link>
   <Link to="/register" className='hover:text-blue-300'>Register</Link>
    </div>}
   
    
  
  </div>


</div>
  )
}

export default Navbar
