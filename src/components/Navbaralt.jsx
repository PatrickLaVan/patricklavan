import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_hover, logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false)
  const [isHover,setIsHover] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-screen flex items-center py-8 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-screen flex justify-between items-center  mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img onMouseEnter = {() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? logo_hover : logo} alt='logo' className='w-15 h-9 object-contain invert' />

        </Link>

        <ul className='list-none hidden md:flex flex-row gap-4 lg:gap-9'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } cursor-pointer`}
              onClick={() => setActive(nav.title)} 
              onMouseEnter = {() => setIsHover(nav.title)} 
              onMouseLeave={() => setIsHover("")}
            >
              <a href={`#${nav.id}`}>
                <img  src={isHover === nav.title || active === nav.title  ? nav.icon_hover : nav.icon } alt='logo' className='w-15 h-9 object-contain invert' /> 
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    
                  }}
                  onMouseEnter = {() => setIsHover(nav.title)} 
                  onMouseLeave={() => setIsHover("")}
                >
                  <a href={`#${nav.id}`}>
                    <img  src={isHover === nav.title || active === nav.title  ? nav.icon_hover : nav.icon } alt='logo' className='w-15 h-9 object-contain' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;