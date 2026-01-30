import React from 'react'
import {Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Room } from './Optimized-room.jsx'
import { useMediaQuery } from 'react-responsive'
import * as THREE from 'three'
function House() {
    const isTablet = useMediaQuery({query: '(max-width:1024px)'});
    const isMobile = useMediaQuery({query: '(max-width:768px)'});
    return (
    <Canvas
     camera={{position :[0,10,100],fov : 45}}
     style={{ width: '100%', height: '900px' }}
    >
        {/* <ambientLight intensity={0.5} color="#ffffff"/> */}
        {/* <directionalLight intensity={1} position={[10,10,2]} color="#ffffff"/> */}
    <spotLight
      position={[2, 8, 8]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="#6f0fecff"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 8]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
        <OrbitControls  
            enablePan={true}
            enableZoom={false}
            maxDistance={20}
            minDistance={5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 5}
        />
        <group 
            scale={isMobile ? .5 : isTablet ? .7 : 1}
            position={isMobile ? [-10,-10,0] : isTablet ? [-15,-15,0] : [0,0,0]}
            rotation={[0,Math.PI/3,0]}
        />
        <Room isMobile={isMobile} isTablet={isTablet}/>
    </Canvas>
  )
}

export default House
