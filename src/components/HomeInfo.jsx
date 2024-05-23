import React from 'react'

const renderContent = {
    1: (
        <h1 className=' relative sm:text-xl rounded sm:leading-snug py-4 px-8 text-white'>Meine Projekte</h1>
    ),
    2: ( 
        <h1 className='relative sm:text-xl rounded sm:leading-snug py-4 px-8 text-white '>I love art in all forms and am passionate about plants.
            For more Information about me
        </h1>
    ),
    3: (
        <h1 className='relative sm:text-xl rounded sm:leading-snug py-4 px-8 text-white  '>Hi :D <br/> My Name is Patrick La Van. <br/> 
        A Graphic Designer | Motion Designer | Front End Developer</h1>
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo