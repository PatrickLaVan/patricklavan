import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { SoftShadows } from "@react-three/drei"
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import Automat from '../models/Automat';
import { Work, About, Contact, Test, Hero, Showreel} from '../pages'
import Navbar from '../components/Navbaralt';

export default function Home() {


  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <Work />
      
      <Contact />
    </div>
  );
}

// const Home = () => {
//   const [isRotating, setIsRotating] = useState(false);
//   const [currentStage, setCurrentStage] = useState(1)

//   const adjustAutomatForScreenSize = () => {
//     let screenScale = null;
//     let screenPosition = [0, 0, 0];
//     let rotation = [0, 1 ,0];
    
//     if(window.innerWidth < 768) {
//       screenScale = [1.1,1.1,1.1]; 
//       screenPosition = [0,-0.6,0];     
//     } else {
//       screenScale = [1.45,1.45,1.45];
//       screenPosition = [0, -0.6, 0];

//     }
//     return [screenScale,screenPosition, rotation]
//   }

//   const [automatScale, automatPosition, automatRotation] = adjustAutomatForScreenSize();

//   return (
//     <section className="w-screen h-screen relative bg-zinc-800 ">

//       <div className='hero-overlay absolute top-[150px] sm:top-[150px] w-[85%] left-[7.5%] right-0 z-10 flex h-[75%] border-white border-2 rounded-2' >
//         {currentStage && <HomeInfo currentStage={currentStage} /> }
//       </div>
    
//         <Canvas 
//           className={ `w-screen h-screen bg-transparent ${isRotating ?
//           'cursor-grabbing' : 'cursor-grab'}`}
//           camera={{ position: [0, 4,-12], fov: 25 }} 
//           shadows
//         >
//           <Suspense fallback={<Loader />}>
            
//             <rectAreaLight/>
//             <directionalLight position={[1,4, 1]} intensity={0.8} castShadow="true" shadow-mapSize={1024}>
//               <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
//             </directionalLight>
//             <ambientLight intensity={0.1} />          
//             <hemisphereLight skyColor={"#ffffff"} groundColor={"#c19059"} intensity={0.3}/>

          
//             {/* <Automat
//               position={automatPosition}
//               scale={automatScale}
//               rotation={automatRotation}
//               isRotating={isRotating}
//               setIsRotating={setIsRotating}
//               setCurrentStage={setCurrentStage}
//             /> */}
//           </Suspense>
//         </Canvas>
        
//         {/* <div className="custom-shape-divider-bottom-1716635517">
//           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
//           </svg>
//         </div> */}
//     </section>
//   )
// }

// export default Home