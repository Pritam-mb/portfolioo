import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import ProjectSec from './components/ProjectSec'
import NeuralBackground from './components/ui/flow-field-background'

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Neural Background */}
      <div className="fixed inset-0 z-0">
        <NeuralBackground 
          color="#6366f1" 
          trailOpacity={0.08}
          particleCount={400}
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
          <ProjectSec/>
          
          <div className="text-center mt-8 text-white">
            Welcome to my portfolio
          </div>
        </div>
      </div>
    </div>
  )
}

export default App