import React from 'react'

function Techstack() {
    const techstack = [
        { name: "Celo ", image: "/Celo-Blockchain.jpeg" },
        { name: "H2S", image: "/h2slogo.png" },
        { name: "Hacktoberfest", image: "/hacktoberfest.jpeg" },
        { name: "ICC", image: "/icc.jpeg" },
        { name: "Lovable", image: "/lovable.png" },
        { name: "Stellar", image: "/steller.png" },
        { name: "WOC", image: "/woc.png" },
        { name: "Vite", image: "/vite.svg" }
    ]
    
  return (
    <div className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Tech Stack & Achievements
            </h2>
            <p className="text-gray-300 text-lg">
                Technologies and organizations I work with
            </p>
        </div>
        <div className='marquee h-52'>
            <div className='marquee-box flex flex-row gap-12 items-center'>
                {techstack.map((tech, index) => (
                    <div key={index} className='marquee-item text-white text-xl font-semibold whitespace-nowrap flex items-center gap-4'>
                        <img 
                            src={tech.image} 
                            alt={tech.name}
                            className="w-28 h-24 object-contain rounded-lg"
                            onError={(e) => {
                                e.target.style.display = 'none'
                            }}
                        />
                        {/* <span>{tech.name}</span> */}
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {techstack.map((tech, index) => (
                    <div key={`duplicate-${index}`} className='marquee-item text-white text-xl font-semibold whitespace-nowrap flex items-center gap-4'>
                        <img 
                            src={tech.image} 
                            alt={tech.name}
                            className="w-28 h-24 object-contain rounded-lg"
                            onError={(e) => {
                                e.target.style.display = 'none'
                            }}
                        />
                        {/* <span>{tech.name}</span> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Techstack