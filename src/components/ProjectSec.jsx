import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function ProjectSec() {
    const containerRef = useRef(null)
    
    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card')
        const projectTitle = containerRef.current.querySelector('.project-title')
        
        // Set initial state
        gsap.set(cards, { y: 50, opacity: 0 })
        // gsap.set(projectTitle, { y: 50, opacity: 0 })
        
        // Create timeline for scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })
        
        tl.from(projectTitle, {
            y:50,
            opacity:0
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
        .to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.5")
        
        // Add hover animations
        cards.forEach(card => {
            const hoverTl = gsap.timeline({ paused: true })
            
            hoverTl.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            })
            
            card.addEventListener('mouseenter', () => hoverTl.play())
            card.addEventListener('mouseleave', () => hoverTl.reverse())
        })
        
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='project-section mt-30'>
            <div className='hero-text text-center items-center justify-center mt-20 mb-10'>
                <h1 className='project-title  text-center text-4xl md:text-6xl  text-white'
                style={{
                    fontFamily: 'monospace'
                }}>
                     Projects
                </h1>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-6 p-4 m-5 project-sec-container'>
                <div
                    className='flex flex-col items-left gap-6 project-card w-full lg:w-[60%]'
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '16px',
                        padding: '24px',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                    <div className="overflow-hidden rounded-xl">
                        <img 
                            src="/Project1.png" 
                            alt="Geo-space Decentralized real estate"
                            className='project-image rounded-xl cursor-pointer'
                            style={{
                                height: "400px",
                                width: "100%",
                                objectFit: "cover"
                            }} 
                        />
                    </div>
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                         Geo-space Decentralized real estate
                    </h1>
                    <h2 className="text-gray-300 leading-relaxed text-base md:text-lg">
                        GeoLand is a revolutionary NFT-based real estate platform built on the Celo blockchain that transforms how people invest in property. By tokenizing real estate in Kolkata's neighborhoods, we enable fractional ownership, transparent transactions, and growth-linked rewards through our innovative Area Growth Token (AGT) system.
                    </h2>
                </div>
                
                <div className='flex flex-col gap-6 w-full lg:w-[40%]'>
                    <div className='flex flex-col gap-5 project-card'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '16px',
                            padding: '24px',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                        <div className="overflow-hidden rounded-xl">
                            <img 
                                src="/Project2.png" 
                                alt="VIBE TRIP - Collaborative AI Travel Architect"
                                className='project-image rounded-xl w-full cursor-pointer'
                                style={{
                                    objectFit: "cover",
                                    height: "250px"
                                }}
                            />
                        </div>
                        <h1 className="text-white text-xl md:text-3xl font-bold">
                             VIBE TRIP - Collaborative AI Travel Architect
                        </h1>
                        <h2 className="text-gray-300 leading-relaxed text-sm md:text-base">
                            A real-time collaborative travel planning platform powered by AI that helps groups plan trips together with intelligent suggestions and dynamic itinerary management.
                        </h2>
                    </div>
                    
                    <div className='project-card'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: '16px',
                            padding: '24px',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                        <div className="overflow-hidden rounded-xl">
                            <img 
                                src="/Project3.png" 
                                alt="Project 3"
                                className='project-image rounded-xl w-full cursor-pointer'
                                style={{
                                    objectFit: "cover",
                                    height: "200px"
                                }}
                            />
                        </div>
                        <h1 className="text-white text-lg md:text-2xl mt-4 font-bold">
                             EcoSync — Connecting Communities, One Item at a Time
                        </h1>
                        <h2 className="text-gray-300 leading-relaxed mt-2 text-sm md:text-base">
                            EcoSync is a hyperlocal peer-to-peer marketplace designed to revolutionize how neighbors share resources. We believe that the items gathering dust in your closet could be treasures for someone down the street. By enabling lending, borrowing, renting, and auctioning within local communities, we're building a more sustainable and connected world.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default ProjectSec
export default ProjectSec