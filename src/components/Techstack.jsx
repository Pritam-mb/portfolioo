import React from 'react'

function Techstack() {
    const techstack = [
        "C++",
        "Python",
        "Dart",
        "Flutter",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Firebase"
    ]
  return (
    <div>
        <div className='marquee h-52'>
            <div className='marquee-box flex flex-row gap-12 '
            style={{
                fontSize:"20px"
            }}>
                {techstack.map((tech, index) => (
                    <span key={index} className='marquee-item text-white text-4xl font-semibold whitespace-nowrap'>{tech}</span>
                ))}
                {/* Duplicate for seamless loop */}
                {techstack.map((tech, index) => (
                    <span key={`duplicate-${index}`} className='marquee-item text-white text-4xl font-semibold whitespace-nowrap'>{tech}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Techstack