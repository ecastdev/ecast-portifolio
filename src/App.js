import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.css";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
// Page State
import state from "./components/state";
// R3F
import { Canvas, useFrame } from "react-three-fiber";
// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";
import { useLoader } from '@react-three/fiber';
import { Html, useProgress, useGLTF,  } from '@react-three/drei';
import { OBJLoader } from "three-stdlib";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scroll, ScrollControls } from "@react-three/drei";
import InterfacePortifolio from "./components/interfacePotifolio";
import Navbar1 from "./components/navbar/navbar";
import { ScrollCenter } from "./components/scrollcenter";
import { Email, Facebook, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

function Model({ url }) {
  const gltf = useLoader(GLTFLoader ,'https://models.readyplayer.me/6658b4c836c854537e293781.glb');
  // const gltf = useLoader(GLTFLoader, './gun_satellite_panel_computer.glb');
  return <primitive object={gltf.scene} />;
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};


 
export default function App() {
  const [section, setSection] = useState(0);
  

  return (
    <div className="App bg-zinc-900 flex flex-col items-center justify-center w-full h-full" >
      <Navbar1/>
      {/* < Header/> */}
      {/* socila media icons */}
      <div className=' hidden lg:block gap-10 absolute top-14 right-7'>
        <ul>
          <Email color='secondary'/>
        </ul>
        <ul>
          <Facebook color='secondary'/>  
        </ul>
        <ul>
          <Twitter color='secondary'/>  
        </ul>
        <ul>
          <WhatsApp color='secondary'/>  
       </ul>
        <ul>
          <YouTube color='secondary'/> 
        </ul>
          
          
          
         
          
     </div>
      {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        {/* Lights Component */}
          {/* <color attach="background" args={["rgb(1, 27, 32)"]} > */}
            <ScrollControls  pages={6} damping={0.1}>
              <ScrollCenter  section={section} onSectionChange={setSection}/>
            
                <Lights />
                {/* <mesh >
                  <Model/>

                </mesh> */}
                
                {/* the html content */}
                <Scroll html>
                  <InterfacePortifolio/>
                  
               </Scroll>

            </ScrollControls>
          
          {/* </color> */}
         
      </Canvas>
     
     
    </div>
  );
}
