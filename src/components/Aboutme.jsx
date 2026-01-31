import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Aboutme() {
    // const about = " I am a passionate web developer with expertise in React.js, Node.js, and MongoDB also a ml learner and react native developer. 
    //         With a strong foundation in computer science, I love turning ideas into reality through clean,
    //         efficient code.When I'm not coding, you can find me exploring new technologies, contributing to 
    //         open - source projects, or sharing my knowledge with the developer community."
    const about = "I am a passionate web developer with expertise in React.js, Node.js, and MongoDB also a ml learner and react native developer.With a strong foundation in computer science, I love turning ideas into reality through clean,efficient code.When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
   const who ="WHO AM I?"
    useGSAP(()=>{
        const tl2
          = gsap.timeline()
          tl2.to(".head span",{
            color:"white",
             stagger: 0.05,
      scrollTrigger: {
        trigger: ".head",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
          })
          .to(".first-message span", {
      color: "white",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".first-message",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },})
    })
        
        
        return (


        <div className='mt-80 p-20  text-black h-full gap-6 flex flex-col'>
            <h1 className='text-7xl text-center head'>
               {who.split("").map((char,i)=>(
                    <span key={i}>{char}</span>
                ))}
            </h1>
            <div
                className='items-center justify-center '
                style={{
                    fontSize: "50px",
                    textAlign: "center"
                }}>

                <p className='first-message '>
                    {
                        about.split(" ").map((word, i) => (
                            <span  key={i} style={{ display: "inline-block", padding: "0 5px" }}>{word}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    )


}
export default Aboutme