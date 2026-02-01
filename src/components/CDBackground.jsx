import { useEffect, useRef } from 'react'

function CDBackground() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create multiple CDs across the screen
        const createCD = (index) => {
            const cd = document.createElement('div')
            cd.className = 'floating-cd'
            
            // Random position across entire screen
            const x = Math.random() * window.innerWidth
            const y = Math.random() * window.innerHeight
            
            cd.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${Math.random() * 40 + 30}px;
                height: ${Math.random() * 40 + 30}px;
                border-radius: 50%;
                background: radial-gradient(circle at 30% 30%, 
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(99, 102, 241, 0.4) 20%,
                    rgba(139, 92, 246, 0.3) 40%,
                    rgba(59, 130, 246, 0.4) 60%,
                    rgba(99, 102, 241, 0.3) 80%,
                    rgba(0, 0, 0, 0.6) 100%
                );
                border: 1px solid rgba(255, 255, 255, 0.2);
                pointer-events: none;
                z-index: 1;
                animation: floatAndSpin ${Math.random() * 20 + 30}s linear infinite;
                opacity: ${Math.random() * 0.4 + 0.2};
                box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
            `
            
            // Add center hole
            const centerHole = document.createElement('div')
            centerHole.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 25%;
                height: 25%;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `
            
            cd.appendChild(centerHole)
            container.appendChild(cd)
            
            // Remove and recreate after animation
            setTimeout(() => {
                if (cd.parentNode) {
                    cd.parentNode.removeChild(cd)
                    createCD(index) // Recreate for continuous effect
                }
            }, (Math.random() * 20 + 30) * 1000)
        }

        // Create initial CDs
        for (let i = 0; i < 12; i++) {
            setTimeout(() => createCD(i), i * 2000)
        }

        return () => {
            const cds = container.querySelectorAll('.floating-cd')
            cds.forEach(cd => cd.remove())
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-1" />
}

export default CDBackground