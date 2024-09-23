import React from 'react'
import video from '../assets/videos/Showreel2022_mp4.mp4'
// import Showreel22 from '../assets/videos/Showreel2022_mp4.Showreel2022_mp4'
// import { SectionWrapper  } from '../hoc';

const Showreel = () => {

    
  return (
    <section className="sr-wrapper">
        <div className="showreel-bg-1">
        <div className="sr-five">
                <h1 className='deco-2-a'>SHOW<br/>REEL</h1>
            </div>
            <video className='videoInsert'src={video} controls autoPlay muted loop/>
            <div className="sr-one"></div>
            <div className="sr-two-a"></div>
            <div className="sr-three"></div>
            <div className="sr-six"></div>
            
            
        </div>
        <div className="showreel-bg-2">
            <h1 className='deco-2-b'>SHOW<br/>REEL</h1>
            <p className="info">Ein kurzer Überblick meiner 2D Animations Arbeiten</p>
            <div className="sr-two-b"></div>
            <div className="sr-four"></div>
        </div>
       
    </section>
    
  )
}

export default Showreel