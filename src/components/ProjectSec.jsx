import React from 'react'

function ProjectSec() {
    return (
        <div className='flex flex-row gap-6   p-4 m-5'
            style={{
                // border: "2px solid white"
            }}>
            <div
                className=' flex flex-col items-left  gap-6 '
                style={{
                    backgroundColor: 'black',
                    width: '60%',
                    height: '100%',
                    // border: "2px solid red",
                    

                }}>
                <img src="../public/Project1.png" alt=""
                className='rounded-xl '
                style={{
                    height:"600px",
                    // width: ""
                }} />
                <h1 style={{
                    color: 'white',
                    font: "-moz-initial",
                    fontSize: "40px"
                }}>Geo-space Decentralized real estate</h1>
                <h2>GeoLand is a revolutionary NFT-based real estate platform built on the Celo blockchain that transforms how people invest in property. By tokenizing real estate in Kolkata's neighborhoods, we enable fractional ownership, transparent transactions, and growth-linked rewards through our innovative Area Growth Token (AGT) system.</h2>

            </div>
            <div className=''
                style={{
                    // backgroundColor: 'red',
                    width: '40%',
                    height: '100%',
                    // border: "2px solid blue"
                }}>
                <div
                className='flex flex-col gap-5 mb-5'>
                    <img src="../public/Project2.png" alt="" 
                      className='rounded-xl '
                    />
                        <h1 style={{
                    color: 'white',
                    font: "-moz-initial",
                    fontSize: "30px"
                }}>VIBE TRIP - Collaborative AI Travel Architect</h1>
                <h2>A real-time collaborative travel planning platform powered by AI that helps groups plan trips together with intelligent suggestions and dynamic itinerary management.</h2>
                </div>
                <div>
                    <img src="../public/Project3.png" alt=""
                      className='rounded-xl ' />
                </div>
            </div>
        </div>
    )
}

export default ProjectSec