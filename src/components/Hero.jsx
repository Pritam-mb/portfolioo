import React from 'react'
import House from './hero-models/House'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from './AnimatedCounter'
function Hero() {
    const word =[ 'web' , 'web3' , 'python','aiml','backend','frontend','appdev' ]
    useGSAP(()=>{
        gsap.fromTo('.heroo h1 ',{
            y:50,
            opacity:0
        },{
            opacity:1,
            y:0,
            stagger:0.2,
            duration:1
        })
        
        gsap.fromTo('.heroo button',{
            y:30,
            opacity:0,
            scale:0.9
        },{
            opacity:1,
            y:0,
            scale:1,
            duration:1,
            delay:0.5
        })
    })
  return (
    <div>
        <section className='heroo relative overflow-visible m-5  flex flex-col md:flex-row justify-between' data-scroll data-scroll-speed="0.5">
            <div className='h-auto md:h-80vh mt-40' data-scroll data-scroll-delay="0.1">
                <header className='flex flex-col justify-center '>
                    <div className='flex flex-col mb-3 '
                    style={{
                        color: "white"
                    }}>
                        <div className='hero-text' data-scroll data-scroll-delay="0.2">

                        <h1>shapping
                        <span className='slide'>
                            <span className='wrapper'>
                                {word.map((item, index)=>{
                                    return(
                                        <span key={index} className='text-red-500'>{item}</span>
                                    )
                                })}
                            </span>
                        </span>
                        </h1>
                        <h1>into real projects</h1>
                        <h1>that deliver results</h1>
                    </div>
                    </div>
                    <div className='mb-5' data-scroll data-scroll-delay="0.3">
                        <p>hola amigo! i am pritam, it's great to see u in my page. If you found this interesting dont forget to follow</p>
                    </div>
                    <div className='heroo' data-scroll data-scroll-delay="0.4">
                         <button
                        className="group pointer-events-auto relative h-12 w-50 cursor-pointer overflow-hidden rounded-l border-2 border-white/20 bg-transparent p-3 px-8 text-center font-semibold backdrop-blur-sm transition-all duration-300 btn-hover"
                        style={{
                            backgroundColor: "#fcf9f9ff",
                            borderRadius: "20px",
                            // fontFamily: "cursive",
                            color: "black",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            padding: "10px 20px",
                            border: "1px ",
                            overflow: "hidden",
                            position: "relative"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "12px"
                        }}>
                            <div style={{
                                height: "12px",
                                width: "12px",
                                borderRadius: "360px",
                                backgroundColor: "black",
                                transition: "all 0.3s ease",
                                transform: "scale(1)"
                            }}
                                className="group-hover:scale-[100]"
                            >
                            </div>
                            <span className="text-center items-center justify-center ml-4">
                                Lets connet
                            </span>
                            <span
                                className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                Let's Connect
                            </span>
                        {/* </div> */}
                       
                        </div>
                    </button>
                    </div>
                </header>
            </div>

            <figure className='flex flex-wrap w-full items-center justify-center pointer-events-auto overflow-visible' 
            data-scroll data-scroll-speed="0.3"
            style={{
                // border: "2px solid red"
                // backgroundColor: "#fff"
            }}>
                <div className='w-full h-auto md:h-60vh justify-center items-center overflow-visible'
                style={{
                    // backgroundColor: "#727070ff",
                    // border:"2px solid yellow"
                }}>
                    <House/>
                    
                </div>
            </figure>
        </section>
            <div data-scroll data-scroll-speed="0.2">
                <AnimatedCounter/>
            </div>
    </div>
  )
}

export default Hero