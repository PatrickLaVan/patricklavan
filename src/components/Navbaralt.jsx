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
      className={`w-[100%] h-[28px] absolute flex justify-end  top-[55px] z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-screen flex justify-end pr-[calc(2%+1.3rem)]  mx-auto'>
        {/* <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img onMouseEnter = {() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? logo_hover : logo} alt='logo' className='w-15 h-9 object-contain invert' />

        </Link> */}

        {/* <ul className='list-none hidden  flex-row gap-4 lg:gap-9'>
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
        </ul> */}

          {/* mobile Navbar */}

        <div className='flex right-0 z-30 '>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          
        </div>
        <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  menu-container`}
            >
            <ul className='menu-liste'>
              <li>
                <a className='menu-text' href="">Home</a>
              </li>
              <li>
                <a className='menu-text' href="">Arbeiten</a>
              </li>
              <li>
                <a className='menu-text' href="">Kontakt</a>
              </li>
              {/* {navLinks.map((nav) => (
                
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
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
              ))} */}
              <li>
                <a className='menu-text' href="">Über mich</a>
              </li>
              <li>
                <a className='menu-text' href="">Impressum</a>
              </li>
              <li>
                <a className='menu-text' href="">Datenschutz</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;