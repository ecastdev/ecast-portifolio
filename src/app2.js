// avatar link
// https://models.readyplayer.me/6658b4c836c854537e293781.glb
import React, { useRef, useEffect, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Html, useProgress, useGLTF,  } from '@react-three/drei';
import Header from "./components/header";
// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";
import './App.css';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Section } from "./components/section";
import Skills from "./components/skills";
import Services from './components/services';
import Contact from './components/contact';
import { Email, Facebook, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
// model
const sidebarIcons = () =>{
  return(
        <div className='absolute right-7'>
          <Email color='secondarly'/>
          <Facebook color='secondarly'/>
          <Twitter color='secondarly'/>
          <WhatsApp color='secondarly'/>
          <YouTube color='secondarly'/>
     </div>

  );
}


const Model = () => {
  const model = useLoader(GLTFLoader, 'https://models.readyplayer.me/6658b4c836c854537e293781.glb');
  return <primitive object={model.scene} scale={70} />;
};
// Html content
// canvas

const CanvasComponent = () => {
  
  return (
    <Canvas
    concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh position={[20, -40, 0]}>
         <Model  />
      </mesh>
      
      <OrbitControls />
      {/* <Suspense fallback={<Html center>Loading...</Html>}> */}
     
      {/* </Suspense> */}
    </Canvas>
  );
};
const HiEcast = () =>{
  return(
    <div className="grid">
                <h1 className="text-center text-7xl text-amber-600">
                  Hi! Am Ecast
                </h1>
                <h2 id="frontdeveloper" className="underline mt-10 text-white decoration-amber-600 mt-16text-center text-4xl ">
                  Frontend Developer
                </h2>
                <h3 id="thankyou" className=" mt-10 text-center text-2xl">
                  Thank you for clicking my portifolio
                </h3>

              </div>
  )
}

// app

function App() {

  return (
    <div className=" grid place-content-center bg-zinc-900 w-full h-full ">
      <Header/>
      <div className='grid absolute right-7'>
        <ul> 
          <Email color='secondarly'/>
        </ul>
        <ul>
        <Facebook color='secondarly'/>
        </ul>
        <ul>
        <Twitter color='secondarly'/>
        </ul>
        <ul>
        <WhatsApp color='secondarly'/>
        </ul>
        <ul>
        <YouTube color='secondarly'/>
        </ul>
          
     </div>
      <div className="flex mt-20 items-center  ">
      
        <HiEcast/>
      {/* <CanvasComponent /> */}
      </div>
      <div className=" mt-20">
      <Skills/>
      </div>
      <Services/>
     <Contact/>
    </div>
  );
}

export default App;