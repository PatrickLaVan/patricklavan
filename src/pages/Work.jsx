import React from 'react'


const Work = () => {
  window.onload = function(){ 
    document.getElementById("cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
  
      
        card.style.setProperty("--mouse-x",`${x}px`);
        card.style.setProperty("--mouse-y",`${y}px`);
      }
    };
  };
  

 


  return (
   
    <div className='flex justify-center items-center h-screen bg-[rgb(20,20,20)] m-0 p-0 overflow-hidden'>
      <div id="cards" className="flex flex-wrap max-w-[960px] w-5/6 gap-[6px]  justify-center align-middle">
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>

      </div>
    </div>


  )

  

}

export default Work