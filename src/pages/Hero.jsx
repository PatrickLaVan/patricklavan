import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { SectionWrapper  } from '../hoc';
import Bild from '../assets/images/Lanfingpage_Illu.png'

const Hero = () => {
  
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
    <section className="hero-wrapper">
        <div className="hero-background">
            <div className="one">
                <h1>Patrick La Van</h1>
            </div>
            <div className="introtext">
              <h1>Hallo,<br/>wie gehts?</h1>
              <h2>Ich bin Patrick und ich mache <br/> Graphik-, Motion- und Web-Design in München</h2>
              <Link to='/' 
                    className='bton-white' 
                    onClick={() => {
                      // setActive("");
                      window.scrollTo(0, 100);}}
                      >ARBEITEN</Link>
             
              <Link to='/' 
                    className='bton-white' 
                    onClick={() => {
                      // setActive("");
                      window.scrollTo(0, 0);}}
                      >KONTAKT</Link>
            </div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five">
                <h1 className="deco-1">POR<br/>TFO<br/>LIO</h1>
                <h2 className="year">2024</h2>
            </div>
            <img className="Bild" src={Bild} alt="Profilbild" />
        </div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")