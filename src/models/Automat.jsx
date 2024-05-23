import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import automatScene from '../assets/3d/Version_2_Test2_pointlight.glb'

const Automat = ({isRotating, setIsRotating, setCurrentStage, ...props}) => { 
    const automatRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(automatScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches 
            ? e.touches[0].clientX 
            : e.clientX;
        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);            
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if(isRotating) { 
            const clientX = e.touches
            ? e.touches[0].clientX 
            : e.clientX;
   
            const delta = (clientX -lastX.current) / viewport.width;

            automatRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    //Keyboard Movement//


    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft') {
            if(!isRotating) setIsRotating(true);
            automatRef.current.rotation.y += 0.01 * Math.PI;
        } else if(e.key === 'ArrowRight') {
            if(!isRotating) setIsRotating(true);
            automatRef.current.rotation.y -= 0.01 * Math.PI; 
        }
    } 

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            automatRef.current.rotation.y += rotationSpeed.current;

        } else {
            const rotation = automatRef.current.rotation.y;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the object's orientation
            switch (true) {
                case normalizedRotation >= 4.8 && normalizedRotation <= 5.9:
                setCurrentStage(3);
                break;
                case normalizedRotation >= 2.9 && normalizedRotation <= 4.0:
                setCurrentStage(2);
                break;
                case normalizedRotation >= 1.01 && normalizedRotation <= 2.1:
                setCurrentStage(1);
                break;
                default:
                setCurrentStage(null);
            }
        }
    })

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown',handlePointerDown);
        canvas.addEventListener('pointerup',handlePointerUp);
        canvas.addEventListener('pointermove',handlePointerMove);
        document.addEventListener('keydown',handleKeyDown);
        document.addEventListener('keyup',handleKeyUp);

            return () => {
                canvas.removeEventListener('pointerdown',handlePointerDown);
                canvas.removeEventListener('pointerup',handlePointerUp);
                canvas.removeEventListener('pointermove',handlePointerMove);
                document.removeEventListener('keydown',handleKeyDown);
                document.removeEventListener('keyup',handleKeyUp);
            }

    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove] )

    return (
        <a.group ref={automatRef} {...props} >
        <group {...props} dispose={null}>
          <group position={[0.279, 0.298, 0.112]} rotation={[0, -1.051, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials.Couch}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials.Polzter_Kissen}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.kleines_kissen_1.geometry}
            material={materials.Polzter_Kissen}
            position={[0.833, 0.356, -0.077]}
            rotation={[1.122, -0.095, 0.168]}
            scale={[0.1, 0.428, 0.107]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kissenmitte.geometry}
            material={materials.Polzter_Kissen}
            position={[0.008, 0.423, 0.066]}
            rotation={[1.323, 0.218, -0.692]}
            scale={[0.244, 0.884, 0.19]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.kleines_kissen_2.geometry}
            material={materials.Polzter_Kissen}
            position={[0.17, 0.356, 0.062]}
            rotation={[1.182, 0.248, -0.566]}
            scale={[0.1, 0.428, 0.107]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kissenli.geometry}
            material={materials.Polzter_Kissen}
            position={[0.386, 0.418, -0.135]}
            rotation={[-1.777, 0.048, 0.084]}
            scale={[0.199, 0.961, 0.199]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kaffeetisch.geometry}
            material={materials.Pole}
            position={[0.941, 0.267, 0.767]}
            rotation={[Math.PI, -0.356, Math.PI]}
            scale={[1.713, 0.121, 1.713]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lampenstaender.geometry}
            material={materials.Couch}
            position={[0.479, 0.024, -0.452]}
            rotation={[0, -0.704, 0]}
            scale={[0.249, 0.025, 0.249]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lampenschirm.geometry}
            material={materials.Lampe}
            position={[0.479, 0.984, -0.453]}
            rotation={[0, -0.482, 0]}
            scale={[-0.312, -0.072, -0.312]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stuhl.geometry}
            material={materials.Dirt}
            position={[-0.583, 0.215, -0.736]}
            rotation={[0, 0.408, 0]}
            scale={[0.192, 0.158, 0.192]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Polzter_Kissen}
            position={[-0.272, 0.002, -0.465]}
            rotation={[Math.PI, -1.365, Math.PI]}
            scale={[0.306, 0.532, 0.573]}
          />
          <group
            position={[0.921, 0.319, 0.651]}
            rotation={[Math.PI, -0.356, Math.PI]}
            scale={[1.342, 1.127, 1.342]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005.geometry}
              material={materials.Beine}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_1.geometry}
              material={materials.Guitar_dunkel}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Buch2.geometry}
            material={nodes.Buch2.material}
            position={[0.93, 0.286, 0.852]}
            rotation={[0, 0.356, 0]}
            scale={[-0.071, -0.009, -0.053]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Buch1.geometry}
            material={materials.Beine}
            position={[0.93, 0.303, 0.852]}
            rotation={[0, 0.504, 0]}
            scale={[-0.071, -0.009, -0.053]}
          />
          <group position={[0.47, 0.199, -0.996]} rotation={[1.707, 0.178, -2.387]} scale={0.186}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials.Guitar_dunkel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials.Guitar_hell}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Buch2001.geometry}
            material={nodes.Buch2001.material}
            position={[0.755, 0.269, 0.145]}
            rotation={[-Math.PI, 0.704, -Math.PI]}
            scale={[-0.071, -0.009, -0.053]}
          />
          <group
            position={[0.736, 0.278, 0.262]}
            rotation={[-2.942, 0.48, 3.039]}
            scale={[-0.071, -0.009, -0.053]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials.Stamm}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_1.geometry}
              material={materials.Beine}
            />
          </group>
          <group position={[-0.385, 0.511, -0.385]} rotation={[0, 0.725, 0]} scale={[0.75, 1, 0.35]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials['Tisch.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials['Beine.001']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Komode001.geometry}
            material={materials.SchwatzPlastik}
            position={[-0.674, 0.153, 0.087]}
            rotation={[Math.PI, -0.67, Math.PI]}
            scale={[0.465, 0.969, 0.647]}
          />
          <group
            position={[-0.799, 0.735, 0.093]}
            rotation={[0, 0.532, 0]}
            scale={[0.849, 1.132, 0.396]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials['SchwatzPlastik.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-0.886, 0.019, 0.582]}
            rotation={[Math.PI, -0.924, Math.PI]}
            scale={[1.26, 0.089, 1.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021.geometry}
              material={materials.Topf}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021_1.geometry}
              material={materials.Stamm}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021_2.geometry}
              material={materials.Pole}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dirt001.geometry}
            material={materials.Dirt}
            position={[-0.886, 0.019, 0.582]}
            rotation={[Math.PI, -0.924, Math.PI]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_1002.geometry}
            material={materials.Stamm}
            position={[-1.07, 0.868, 0.386]}
            rotation={[0.394, 0.539, -0.072]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_2005.geometry}
            material={materials.Stamm}
            position={[-0.883, 0.052, 0.625]}
            rotation={[Math.PI, -0.924, Math.PI]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_3003.geometry}
            material={materials.Stamm}
            position={[-0.828, 0.4, 0.398]}
            rotation={[0, -0.356, 0]}
            scale={[0.599, 0.042, 0.599]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_4004.geometry}
            material={materials.Stamm}
            position={[-1.28, 0.708, 0.576]}
            rotation={[-1.356, 1.407, 1.241]}
            scale={[1.062, 0.075, 1.062]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_4005.geometry}
            material={materials.Stamm}
            position={[-0.638, 0.594, 0.727]}
            rotation={[-2.839, -1.081, -2.86]}
            scale={[0.825, 0.058, 0.825]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_3004.geometry}
            material={materials.Stamm}
            position={[-1.128, 0.478, 0.486]}
            rotation={[0, 1.066, 0]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_4006.geometry}
            material={materials.Stamm}
            position={[-1.043, 0.769, 0.841]}
            rotation={[-2.734, 0.372, 2.903]}
            scale={[0.662, 0.047, 0.662]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_2006.geometry}
            material={materials.Stamm}
            position={[-0.823, 0.145, 0.605]}
            rotation={[0, -0.674, 0]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_2007.geometry}
            material={materials.Stamm}
            position={[-0.997, 0.381, 0.353]}
            rotation={[0.042, -0.422, 0.212]}
            scale={[0.8, 0.056, 0.8]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_3005.geometry}
            material={materials.Stamm}
            position={[-0.812, 0.444, 0.754]}
            rotation={[Math.PI, -0.345, Math.PI]}
            scale={[0.599, 0.042, 0.599]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_2008.geometry}
            material={materials.Stamm}
            position={[-0.914, 0.094, 0.561]}
            rotation={[0, 1.179, 0]}
            scale={[0.966, 0.068, 0.966]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_1003.geometry}
            material={materials.Stamm}
            position={[-0.794, 0.94, 0.741]}
            rotation={[Math.PI, -0.686, Math.PI]}
            scale={[0.687, 0.048, 0.687]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blatt_2009.geometry}
            material={materials.Stamm}
            position={[-0.903, 0.355, 0.649]}
            rotation={[Math.PI, -0.949, Math.PI]}
            scale={[1.26, 0.089, 1.26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.boden}
            position={[0.007, -0.012, -0.002]}
            scale={2.033}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Schreibtisch003.geometry}
            material={materials.SchwatzPlastik}
            position={[-0.463, 0.511, -0.193]}
            rotation={[0, 0.603, 0]}
            scale={[0.75, 1, 0.35]}
          />
          <group
            position={[-0.494, 0.511, -0.067]}
            rotation={[0, 0.516, 0]}
            scale={[0.963, 1.284, 0.449]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials.SchwatzPlastik}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Schreibtisch005.geometry}
            material={materials['SchwatzPlastik.001']}
            position={[-0.05, 0.571, -0.645]}
            rotation={[0, 0.45, 0]}
            scale={[0.75, 1, 0.35]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dirt002.geometry}
            material={materials['Dirt.001']}
            position={[-0.63, 0.04, 0.902]}
            rotation={[Math.PI, -0.594, Math.PI]}
            scale={[0.845, 0.06, 0.845]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blumentopf003.geometry}
            material={materials['Topf.001']}
            position={[-0.629, 0.022, 0.903]}
            rotation={[Math.PI, -0.594, Math.PI]}
            scale={[0.805, 0.057, 0.805]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dirt008.geometry}
            material={materials['Dirt.007']}
            position={[-0.516, 0.522, 0.196]}
            rotation={[Math.PI, -0.594, Math.PI]}
            scale={[0.236, 0.017, 0.236]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blumentopf009.geometry}
            material={materials['Topf.007']}
            position={[-0.516, 0.517, 0.196]}
            rotation={[Math.PI, -0.594, Math.PI]}
            scale={[0.225, 0.016, 0.225]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dirt009.geometry}
            material={materials['Dirt.008']}
            position={[1.065, 0.051, -0.583]}
            rotation={[-Math.PI, 1.266, -Math.PI]}
            scale={[0.446, 0.031, 0.446]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dirt010.geometry}
            material={materials['Dirt.009']}
            position={[1.341, 0.014, -0.473]}
            rotation={[-Math.PI, 0.059, -Math.PI]}
            scale={[0.391, 0.028, 0.391]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blumentopf010.geometry}
            material={materials['Topf.008']}
            position={[1.065, 0.007, -0.583]}
            rotation={[-Math.PI, 1.266, -Math.PI]}
            scale={[0.425, 0.03, 0.425]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blumentopf011.geometry}
            material={materials['Topf.009']}
            position={[1.341, 0.004, -0.472]}
            rotation={[-Math.PI, 0.059, -Math.PI]}
            scale={[0.372, 0.026, 0.372]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Couch001.geometry}
            material={materials.Polzter_Kissen}
            position={[0.269, 0.298, 0.09]}
            rotation={[0, -1.091, 0]}
            scale={0.763}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Couch002.geometry}
            material={materials.Polzter_Kissen}
            position={[0.279, 0.298, 0.112]}
            rotation={[-0.023, -1.074, 0.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gummiblatt.geometry}
            material={materials.Material}
            position={[0.195, 0.505, -5.684]}
            rotation={[-Math.PI, 0, 2.614]}
            scale={[-0.09, -0.432, -0.064]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={materials.Stamm}
            position={[1.041, 0.535, -0.584]}
            rotation={[0, 0, -1.479]}
            scale={0.308}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_1.geometry}
              material={materials.Material}
              position={[-1.361, 0.118, 0.011]}
              rotation={[0.853, 0.012, -2.511]}
              scale={[-0.216, -1.033, -0.153]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_2.geometry}
              material={materials.Material}
              position={[-1.039, 0.079, -0.052]}
              rotation={[0.654, -0.015, -2.276]}
              scale={[-0.365, -1.745, -0.259]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_3.geometry}
              material={materials.Material}
              position={[-0.782, 0.058, -0.098]}
              rotation={[-1.065, -0.166, -2.069]}
              scale={[-0.437, -2.088, -0.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_4.geometry}
              material={materials.Material}
              position={[-0.611, 0.038, -0.108]}
              rotation={[-2.814, 0.08, -2.044]}
              scale={[-0.431, -2.061, -0.306]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_5.geometry}
              material={materials.Material}
              position={[-0.444, 0.053, -0.099]}
              rotation={[0.656, 0.035, -2.086]}
              scale={[-0.258, -1.234, -0.183]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_6.geometry}
              material={materials.Material}
              position={[-0.258, 0.044, -0.106]}
              rotation={[-1.594, -0.09, -2.182]}
              scale={[-0.32, -1.528, -0.227]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_7.geometry}
              material={materials.Material}
              position={[-0.097, 0.021, -0.083]}
              rotation={[2.982, 0.118, -1.993]}
              scale={[-0.195, -0.934, -0.139]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_8.geometry}
              material={materials.Material}
              position={[0.07, 0.037, -0.076]}
              rotation={[-0.397, -0.063, -2.094]}
              scale={[-0.476, -2.276, -0.338]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_9.geometry}
              material={materials.Material}
              position={[0.202, 0.022, -0.057]}
              rotation={[2.638, 0.04, -2.018]}
              scale={[-0.253, -1.21, -0.18]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_10.geometry}
              material={materials.Material}
              position={[0.451, 0.025, -0.053]}
              rotation={[-1.265, 0.011, -2.205]}
              scale={[-0.246, -1.175, -0.174]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_11.geometry}
              material={materials.Material}
              position={[0.562, 0.027, -0.031]}
              rotation={[0.649, -0.095, -2.07]}
              scale={[-0.179, -0.857, -0.127]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_12.geometry}
              material={materials.Material}
              position={[0.705, 0.008, -0.02]}
              rotation={[2.084, -0.027, -2.082]}
              scale={[-0.513, -2.456, -0.364]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_13.geometry}
              material={materials.Material}
              position={[0.899, -0.008, -0.022]}
              rotation={[-2.807, 0.019, -2.039]}
              scale={[-0.243, -1.161, -0.172]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_14.geometry}
              material={materials.Material}
              position={[1.019, -0.012, -0.023]}
              rotation={[-1.912, 0.125, -2.065]}
              scale={[-0.202, -0.967, -0.143]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath001.geometry}
            material={materials.Stamm}
            position={[1.122, 0.515, -0.54]}
            rotation={[0.132, 0.527, -1.708]}
            scale={[0.154, 0.377, 0.377]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_15.geometry}
              material={materials.Material}
              position={[-1.693, 0.004, 0.027]}
              rotation={[-0.841, -0.045, 1.397]}
              scale={[0.208, 2.357, 0.145]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_16.geometry}
              material={materials.Material}
              position={[-1.465, 0.02, 0.028]}
              rotation={[0.982, -0.014, 1.553]}
              scale={[0.203, 2.371, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_17.geometry}
              material={materials.Material}
              position={[-1.365, 0.023, 0.032]}
              rotation={[2.236, -0.011, 1.593]}
              scale={[0.203, 2.371, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_18.geometry}
              material={materials.Material}
              position={[-1.346, 0.023, 0.03]}
              rotation={[1.533, 0.184, 1.355]}
              scale={[0.218, 2.337, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_19.geometry}
              material={materials.Material}
              position={[-1.227, 0.014, 0.026]}
              rotation={[-0.905, 0.029, 1.371]}
              scale={[0.211, 2.353, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_20.geometry}
              material={materials.Material}
              position={[-0.636, 0.008, 0.011]}
              rotation={[0.406, -0.106, 1.833]}
              scale={[0.217, 2.332, 0.146]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_21.geometry}
              material={materials.Material}
              position={[-0.538, 0.001, 0.019]}
              rotation={[-2.928, -0.244, 1.842]}
              scale={[0.222, 2.294, 0.156]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_22.geometry}
              material={materials.Material}
              position={[-0.297, -0.002, 0.012]}
              rotation={[2.864, -0.228, 1.381]}
              scale={[0.212, 2.318, 0.155]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_23.geometry}
              material={materials.Material}
              position={[-0.233, -0.011, 0.006]}
              rotation={[-1.822, 0.516, 1.786]}
              scale={[0.249, 2.153, 0.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_24.geometry}
              material={materials.Material}
              position={[-0.111, -0.006, -0.002]}
              rotation={[0.481, -0.448, 1.458]}
              scale={[0.221, 2.212, 0.181]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_25.geometry}
              material={materials.Material}
              position={[-0.062, -0.007, 0.006]}
              rotation={[-3.097, -0.02, 1.41]}
              scale={[0.209, 2.359, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_26.geometry}
              material={materials.Material}
              position={[0.334, -0.018, -0.008]}
              rotation={[3.029, -0.015, 1.722]}
              scale={[0.208, 2.36, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_27.geometry}
              material={materials.Material}
              position={[0.628, -0.029, -0.032]}
              rotation={[0.648, 0.064, 1.847]}
              scale={[0.221, 2.332, 0.144]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_28.geometry}
              material={materials.Material}
              position={[1.299, -0.036, -0.017]}
              rotation={[-1.767, -0.414, 2.096]}
              scale={[0.207, 2.18, 0.197]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_29.geometry}
              material={materials.Material}
              position={[1.715, -0.01, -0.012]}
              rotation={[0.341, 0.433, 1.867]}
              scale={[0.245, 2.168, 0.177]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.gummiblatt_30.geometry}
              material={materials.Material}
              position={[2.003, 0.002, -0.005]}
              rotation={[0.636, 0.157, 1.065]}
              scale={[0.259, 2.228, 0.148]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.langesBlatt001.geometry}
            material={materials.Stamm}
            position={[1.341, 0.066, -0.479]}
            rotation={[-3.058, 1.006, 1.293]}
            scale={[-0.16, -0.315, -0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.langesBlatt002.geometry}
            material={materials.Stamm}
            position={[-0.637, 0.141, 0.877]}
            rotation={[-3.058, 1.006, 1.293]}
            scale={[-0.16, -0.315, -0.01]}
          />
          <pointLight
            intensity={5}
            decay={2}
            color="#ffeeca"
            position={[0.479, 0.89, -0.456]}
            rotation={[-Math.PI / 2, 0, 0]}
            
          />
          <group
            position={[0.695, 0.281, -0.588]}
            rotation={[0, -1.227, 0]}
            scale={[0.465, 0.969, 0.647]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials.SchwatzPlastik}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_1.geometry}
              material={materials['Material.005']}
            />
          </group>
          <pointLight
            intensity={6}
            decay={2}
            color="#ff2feb"
            position={[1.299, 1.866, -0.383]}
            rotation={[-Math.PI / 2, 0, 0]}
            
          />
          <pointLight
            intensity={50}
            decay={2}
            color="#ffe4ab"
            position={[-0.012, 4.163, -0.087]}
            rotation={[-Math.PI / 2, 0, 0]}
            
          />
          <pointLight
            intensity={25}
            decay={2}
            color="#29ffd2"
            position={[-1.314, 3.793, 1.925]}
            rotation={[-Math.PI / 2, 0, 0]}
            
          />
        </group>
  












           {/* <group position={[0, 0.298, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Couch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Polzter_Kissen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kleines_kissen_1.geometry}
        material={materials.Polzter_Kissen}
        position={[0.16, 0.356, -0.846]}
        rotation={[1.16, 0.209, -0.47]}
        scale={[0.1, 0.428, 0.107]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kissenre.geometry}
        material={materials.Polzter_Kissen}
        position={[-0.153, 0.469, 0.223]}
        rotation={[-1.637, -0.201, 1.56]}
        scale={[0.249, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kissenmitte.geometry}
        material={materials.Polzter_Kissen}
        position={[-0.205, 0.47, -0.08]}
        rotation={[1.58, 0.329, -1.586]}
        scale={[0.249, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kleines_kissen_2.geometry}
        material={materials.Polzter_Kissen}
        position={[0.092, 0.356, 0.872]}
        rotation={[1.945, 0.271, -2.569]}
        scale={[0.1, 0.428, 0.107]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kissenli.geometry}
        material={materials.Polzter_Kissen}
        position={[-0.033, 0.469, -0.676]}
        rotation={[-1.708, -0.161, 1.169]}
        scale={[0.249, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kaffeetisch.geometry}
        material={materials.Pole}
        position={[1.167, 0.267, -0.238]}
        scale={[1.713, 0.121, 1.713]}
      />
      <group
        position={[-1.174, 0.511, 0.835]}
        rotation={[0, 0.7, 0]}
        scale={[0.75, 1, 0.35]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Tisch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials.Beine}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_2.geometry}
          material={materials.SchwatzPlastik}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lampenstaender.geometry}
        material={materials.Couch}
        position={[-0.392, 0.055, 0.462]}
        scale={[0.249, 0.025, 0.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lampenschirm.geometry}
        material={materials.Lampe}
        position={[-0.392, 0.984, 0.461]}
        scale={[-0.312, -0.072, -0.312]}
      />
      <group position={[-0.495, 0.024, 1.357]} scale={[1.639, 0.116, 1.639]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Topf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.Stamm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials.Pole}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Untertopf.geometry}
        material={materials.Topf}
        position={[-0.499, 0.004, 1.353]}
        scale={[1.639, 0.006, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stuhl.geometry}
        material={materials.Dirt}
        position={[-1.453, 0.215, 0.203]}
        rotation={[0, 0.434, 0]}
        scale={[0.192, 0.158, 0.192]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Polzter_Kissen}
        position={[1.134, 0, 0.048]}
        rotation={[0, 0.369, 0]}
        scale={[0.471, 0.818, 0.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Komode.geometry}
        material={nodes.Komode.material}
        position={[-0.453, 0.216, -0.601]}
        rotation={[0, -0.117, 0]}
        scale={[0.748, 1.127, 0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Staffelei.geometry}
        material={materials.Dirt}
        position={[-0.414, 0.636, -1.435]}
        rotation={[0, -1.477, 0]}
        scale={[0.008, 0.638, 0.015]}
      />
      <group
        position={[0.565, 0.688, 0.435]}
        rotation={[Math.PI, -0.142, Math.PI]}
        scale={0.118}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Körper_plus_Beine001.geometry}
          material={nodes.Körper_plus_Beine001.material}
          position={[-0.165, 2.879, -0.025]}
          scale={[12.026, 9.975, 19.14]}
        />
        <primitive object={nodes.Bone} />
        <primitive object={nodes.hipl} />
        <primitive object={nodes.hipr} />
      </group>
      <group position={[1.145, 0.313, -0.122]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.Beine}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.Guitar_dunkel}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dirt.geometry}
        material={materials.Dirt}
        position={[-0.495, 0.024, 1.357]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_1.geometry}
        material={materials.Stamm}
        position={[-0.544, 1.235, 1.785]}
        rotation={[2.786, 0.329, -2.883]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_2.geometry}
        material={materials.Stamm}
        position={[-0.495, 0.024, 1.357]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_3.geometry}
        material={materials.Stamm}
        position={[-0.733, 0.519, 1.441]}
        rotation={[-Math.PI, 1.28, -Math.PI]}
        scale={[0.779, 0.055, 0.779]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_4001.geometry}
        material={materials.Stamm}
        position={[-0.157, 0.92, 1.798]}
        rotation={[-2.947, -0.602, -Math.PI]}
        scale={[1.381, 0.097, 1.381]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_4002.geometry}
        material={materials.Stamm}
        position={[-0.644, 0.72, 0.968]}
        rotation={[-0.143, 0.174, 0.038]}
        scale={[1.072, 0.076, 1.072]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_3001.geometry}
        material={materials.Stamm}
        position={[-0.371, 0.611, 1.685]}
        rotation={[Math.PI, -0.142, Math.PI]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_4003.geometry}
        material={materials.Stamm}
        position={[-0.123, 0.999, 1.249]}
        rotation={[-1.024, -1.124, -1.06]}
        scale={[0.86, 0.061, 0.86]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_2001.geometry}
        material={materials.Stamm}
        position={[-0.552, 0.311, 1.317]}
        rotation={[0, 1.544, 0]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_2002.geometry}
        material={materials.Stamm}
        position={[-0.59, 0.149, 1.416]}
        rotation={[2.971, 1.343, -2.781]}
        scale={[1.04, 0.073, 1.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_3002.geometry}
        material={materials.Stamm}
        position={[-0.207, 0.576, 1.342]}
        rotation={[0, -1.562, 0]}
        scale={[0.779, 0.055, 0.779]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_2003.geometry}
        material={materials.Stamm}
        position={[-0.481, 0.122, 1.399]}
        rotation={[Math.PI, -0.255, Math.PI]}
        scale={[1.256, 0.089, 1.256]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_1001.geometry}
        material={materials.Stamm}
        position={[-0.364, 1.355, 1.037]}
        rotation={[0, -0.238, 0]}
        scale={[0.893, 0.063, 0.893]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Buch2.geometry}
        material={nodes.Buch2.material}
        position={[1.206, 0.286, -0.314]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.071, -0.009, -0.053]}
      />
      <group
        position={[1.206, 0.303, -0.314]}
        rotation={[Math.PI, -0.148, Math.PI]}
        scale={[-0.071, -0.009, -0.053]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Stamm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Beine}
        />
      </group>
      <group
        position={[0.735, 0.198, -0.62]}
        rotation={[1.39, 0.771, -1.314]}
        scale={0.186}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Guitar_dunkel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Guitar_hell}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kontroller.geometry}
        material={nodes.Kontroller.material}
        position={[0.986, 0.291, -0.187]}
        rotation={[Math.PI, -0.586, Math.PI]}
        scale={[0.337, 0.068, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kontroller001.geometry}
        material={nodes.Kontroller001.material}
        position={[1.039, 0.291, -0.317]}
        rotation={[-Math.PI, 1.076, -Math.PI]}
        scale={[0.337, 0.068, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blatt_2004.geometry}
        material={materials.Stamm}
        position={[-0.406, 0.461, 1.305]}
        rotation={[0, 0.024, 0]}
        scale={[1.639, 0.116, 1.639]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Buch2001.geometry}
        material={nodes.Buch2001.material}
        position={[0.324, 0.293, -0.584]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.071, -0.009, -0.053]}
      />
      <group
        position={[0.324, 0.31, -0.502]}
        rotation={[-2.724, -0.291, -3.007]}
        scale={[-0.071, -0.009, -0.053]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.Stamm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Beine}
        />
      </group> */}
    </a.group>
  );
}

export default Automat;

