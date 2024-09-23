import React from "react";

const Test = () => {
  const menuItem = [
    {
      text: "Benu",
      subtitle: "Animated Short",
      tag: "Ae Pr Ps Ai TV-Paint",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "50y UNI Augsburg",
      subtitle: "Poster Campaign",
      tag: "Ai",
      image:
        "https://images.pexels.com/photos/17216084/pexels-photo-17216084/free-photo-of-nourriture-tasse-fruit-panier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        text: "Die Jagd",
        subtitle: "Bildgeschichte",
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    {
        text: "Vinopolis",
        subtitle: "Winelabels",
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    {
        text: "Blasphemie",
        subtitle: "Typeface",
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    {
      text: "Museum Werdenfells",
      subtitle: "Orientierungsplan",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "M.S Salmon",
      subtitle: "2D Videogame",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className='flex  bg-[#1c1d1b] m-0 p-8 overflow-hidden h-auto'>
        <div id="cards" className="flex justify-center items-center flex-wrap gap-1 m-auto max-w-[960px] w-5/6 dido">
            {/* Card */}
                    
            {/* <div className="card-border"></div> */}
            {menuItem.map(({ text, subtitle, image, tag }, index) => {
                return (
                
                <div key={index} className="card card-styling">
                    {/* Overlay */}
                    
                    <div className="card-border card-styling"></div>
                    <div className="card-content card-styling">
                        <p className="font-bold text-2xl head text-white">{text} </p>
                        <p className="px-2 sub">{subtitle}</p>
                        <p>{tag}</p>
                    </div>
                    
                    {/* <img
                    className="projectpic absolute top-0 p-[1px] rounded-xl "
                    src={image}
                    alt="/"
                    /> */}

                </div>
                );
            })}   
        </div>
    </div>
  );
};

export default Test;