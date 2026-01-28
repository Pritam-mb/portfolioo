import React from 'react'
import {Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Room } from './Optimized-room.jsx'
import { useMediaQuery } from 'react-responsive'
function House() {
    const isTablet = useMediaQuery({query: '(max-width:1024px)'});
    const isMobile = useMediaQuery({query: '(max-width:768px)'});
    return (
    <Canvas
     camera={{position :[0,10,100],fov : 45}}
     style={{ width: '100%', height: '900px' }}
    >
        <ambientLight intensity={1} color="#ffffff"/>
        <directionalLight intensity={2} position={[10,10,2]} color="#ffffff"/>
        <OrbitControls  
        enablePan ={false}
        
        enableZoom ={!isTablet}
        maxDistance={20}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 5}
        />
        <pointLight intensity={100} position={[-10,-10,5]} color="#ffffff"/>
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
