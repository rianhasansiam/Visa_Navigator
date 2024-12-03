import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto pt-5">
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
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl font-extrabold  bg-gray-100 "><img className='w-10' src="https://i.ibb.co.com/dBf0TFW/Visa-initial-512.webp" alt="" />VISA NAVIGATOR</h1>
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
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar
