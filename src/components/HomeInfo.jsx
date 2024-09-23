import React from 'react'

const renderContent = {
    1: (
        <h1 className=' hero-overlay text-8xl relative leading-1 py-4 px-8 text-white '>POR<br/>TFO<br/>LIO</h1>
    ),
    2: ( 
        <h1 className='hero-overlay relative sm:leading-snug py-4 px-8 text-white '>I love art in all forms and am passionate about plants.
            For more Information about me
        </h1>
    ),
    3: (
        <div>
            <h1 className='hero-overlay relative sm:leading-snug py-4 px-8 text-white  '>Hi :D <br /> My Name is Patrick La Van.</h1> 
            <p className= "hero-sub py-1 px-8">Graphic Design | Motion Design | Front End Development</p>
        </div>
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo