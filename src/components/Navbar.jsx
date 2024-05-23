import { NavLink } from "react-router-dom"

import React, { useEffect, useState } from "react";

import Logo from '../assets/logo.svg'
import Work from '../assets/work.svg'
import About from '../assets/about.svg'
import Contact from '../assets/contact.svg'


const Navbar = () => {
  return (
   <header className="header">
        <NavLink to="/" className="w-35 h-50 items-center justify-center flex ">
            <img  src={Logo} alt='mySvgImage' className="h-20 w-45"/>

        </NavLink> 
        <nav className="flex gap-8 ">
            <NavLink to="/work" className={({ isActive }) => isActive ?
             'fill-orange-700' : 'fill-sky-900' } >
                <img src={Work} alt='mySvgImage'  className="h-10 w-20" />
            </NavLink>
            
            <NavLink to="/about" className={({ isActive }) => isActive ?
            'text-blue-500' : 'text-black' } >
                <img src={About} alt='mySvgImage' className="h-10 w-20"/>
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ?
            'text-blue-500' : 'text-black' } >
                <img src={Contact} alt='mySvgImage' className="h-10 w-28"/>
            </NavLink>
        
        
        </nav> 
    </header>
  )
}




export default Navbar;