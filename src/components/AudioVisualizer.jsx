import { useEffect, useRef } from 'react'

function AudioVisualizer() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create equalizer bars around navbar
        const createEqualizer = () => {
            const equalizer = document.createElement('div')
            equalizer.className = 'audio-equalizer'
            
            // Position around navbar area
            const x = Math.random() * window.innerWidth
            const y = Math.random() * 150 + 20
            
            equalizer.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                display: flex;
                align-items: end;
                gap: 2px;
                pointer-events: none;
                z-index: 4;
                opacity: 0.6;
            `
            
            // Create individual bars
            for (let i = 0; i < 8; i++) {
                const bar = document.createElement('div')
                bar.style.cssText = `
                    width: 3px;
                    height: ${Math.random() * 30 + 10}px;
                    background: linear-gradient(to top, 
                        #ef4444 0%, 
                        #f97316 25%, 
                        #eab308 50%, 
                        #22c55e 75%, 
                        #3b82f6 100%
                    );
                    border-radius: 2px;
                    animation: audioBar ${Math.random() * 0.5 + 0.3}s ease-in-out infinite alternate;
                    animation-delay: ${i * 0.1}s;
                `
                equalizer.appendChild(bar)
            }
            
            container.appendChild(equalizer)
            
            // Remove after some time
            setTimeout(() => {
                if (equalizer.parentNode) {
                    equalizer.parentNode.removeChild(equalizer)
                }
            }, 15000)
        }

        // Create sound waves
        const createSoundWave = () => {
            const wave = document.createElement('div')
            wave.className = 'sound-wave'
            
            const x = Math.random() * window.innerWidth
            const y = Math.random() * 120 + 30
            
            wave.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 40px;
                height: 40px;
                border: 2px solid rgba(99, 102, 241, 0.4);
                border-radius: 50%;
                pointer-events: none;
                z-index: 3;
                animation: soundRipple 3s ease-out infinite;
            `
            
            container.appendChild(wave)
            
            setTimeout(() => {
                if (wave.parentNode) {
                    wave.parentNode.removeChild(wave)
                }
            }, 3000)
        }

        // Create initial elements
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createEqualizer(), i * 2000)
            setTimeout(() => createSoundWave(), i * 1500)
        }

        // Continue creating elements
        const equalizerInterval = setInterval(createEqualizer, 4000)
        const waveInterval = setInterval(createSoundWave, 2000)

        return () => {
            clearInterval(equalizerInterval)
            clearInterval(waveInterval)
            const elements = container.querySelectorAll('.audio-equalizer, .sound-wave')
            elements.forEach(el => el.remove())
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-4" />
}

export default AudioVisualizer