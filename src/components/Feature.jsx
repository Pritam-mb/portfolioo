import React from 'react'

function Feature() {
  return (
    <div>
        <div className='flex flex-row gap-7 flex-wrap flex-row w-full h-full justify-between'>
            <div className=' flex flex-col p-8 '
            style={{
                width: '30%',
                height: '30%',
                // border: "2px solid red",
                // backgroundC
                 backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '16px',
                        padding: '24px',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h1></h1>
                <h1  style={{
                    fontSize:"40px"
                }}>Quality focus</h1>
                <h2>Delivering  high quality results while maintaining attention to every detail</h2>
            </div>
            <div  className=' flex flex-col p-8'
            style={{
                 width: '30%',
                height: '30%',
                // border: "2px solid red",
                // backgroundC
                 backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '16px',
                        padding: '24px',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h1  style={{
                    fontSize:"40px"
                }}>Innovation driven</h1>
                <h2>Embracing creativity and new ideas to push the boundaries of what's possible</h2>
            </div>
            <div  className=' flex flex-col p-8'
            style={{
                width: '30%',
                height: '30%',
                // border: "2px solid red",
                // backgroundC
                 backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '16px',
                        padding: '24px',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h1
                className=''
                style={{
                    fontSize:"40px"
                }}>Client centric</h1>
                <h2>Fostering long term relationships built on trust, communication and mutual benefit</h2>
            </div>
        </div>
    </div>
  )
}

export default Feature