import React from 'react'
import House from './hero-models/House'
function Hero() {
    const word =[ 'web' , 'web3' , 'python','aiml','backend','frontend','appdev' ]
  return (
    <div>
        <section className='relative overflow-hidden m-5  flex flex-row justify-between '>
            <div className='h-80vh mt-20'>
                <header className='flex flex-col justify-center '>
                    <div className='flex flex-col mb-3 '
                    style={{
                        color: "white"
                    }}>
                        <div className='hero-text'>

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
                    <div className='mb-5'>
                        <p>hello i am pritam, it's great to see u in my page</p>
                    </div>
                    <div>
                         <button
                        className="group pointer-events-auto relative h-12 w-50 cursor-pointer overflow-hidden rounded-full border-2 border-white/20 bg-transparent p-3 px-8 text-center font-semibold backdrop-blur-sm transition-all duration-300 "
                        style={{
                            backgroundColor: "#727070ff",
                            borderRadius: "40px",
                            fontFamily: "cursive",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            padding: "10px 20px",
                            border: "none",
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

            <figure className=' h-full w-full items-center justify-center mt-20' 
            style={{
                // border: "2px solid red"
            }}>
                <div className='border-red-200  '>
                    <House/>
                    
                </div>
            </figure>
        </section>
    </div>
  )
}

export default Hero