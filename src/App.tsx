import { lazy, Suspense } from 'react'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import SmoothScroll from './components/SmoothScroll'
import NeuralBackground from './components/ui/flow-field-background'

// Lazy load heavy components
const ProjectSec = lazy(() => import('./components/ProjectSec'))
const Aboutme = lazy(() => import('./components/Aboutme'))
const Techstack = lazy(() => import('./components/Techstack'))
const Feature = lazy(() => import('./components/Feature'))
const BackgroundMusic = lazy(() => import('./components/BackgroundMusic'))
const JazzCenter = lazy(() => import('./components/JazzCenter'))
const MusicCascade = lazy(() => import('./components/MusicCascade'))
const Experience = lazy(() => import('./components/Experience'))

const App = () => {
  return (
    <SmoothScroll>
      <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center"><div className="text-white text-xl">Loading...</div></div>}>
        <BackgroundMusic />
        <MusicCascade />
        {/* <CDBackground /> */}
        <JazzCenter />
      </Suspense>
      <div className="relative min-h-screen">
        {/* Fixed Neural Background */}
        <div className="fixed inset-0 z-0">
          <NeuralBackground 
            color="#6366f1" 
            trailOpacity={0.08}
            particleCount={250}
            speed={0.6}
          />
        </div>
        
        {/* Content Overlay with subtle backdrop */}
        <div className="relative z-10 min-h-screen">
          {/* Semi-transparent overlay for better readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
          
          {/* Main Content */}
          <div className="relative z-20 items-center justify-center p-8">
            <Navbar/>
            <Hero/>
            <Suspense fallback={<div className="text-white text-center py-8">Loading content...</div>}>
              <ProjectSec/>
              <Aboutme/>
              <Techstack/>
              <Feature/>
              <Experience/>
            </Suspense>
            <div className="text-center mt-8 text-white">
              Welcome to my portfolio
            </div>
          </div>
        </div>
      </div>
    </SmoothScroll>
  )
}

export default App