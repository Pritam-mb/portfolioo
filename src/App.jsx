import React from 'react'
import Navbar from './layouts/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjectSec from './components/ProjectSec.jsx'
const App = () => {
  return (
    <div className='items-center justify-center p-8'>
      <Navbar/>
      <Hero/>
      <ProjectSec/>
      wlecome to my portfolio
    </div>
  )
}

export default App
