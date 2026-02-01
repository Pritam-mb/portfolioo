import { useEffect, useRef } from 'react'

function RotatingCD() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create rotating CDs
        const createCD = () => {
            const cd = document.createElement('div')
            cd.className = 'rotating-cd'
            
            // Random position
            const x = Math.random() * (window.innerWidth - 100)
            const y = Math.random() * 200 + 50 // Around navbar area
            
            cd.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(45deg, 
                    rgba(99, 102, 241, 0.8) 0%, 
                    rgba(139, 92, 246, 0.8) 25%,
                    rgba(59, 130, 246, 0.8) 50%,
                    rgba(99, 102, 241, 0.8) 75%,
                    rgba(139, 92, 246, 0.8) 100%
                );
                border: 2px solid rgba(255, 255, 255, 0.3);
                pointer-events: none;
                z-index: 3;
                animation: spinCD ${Math.random() * 10 + 15}s linear infinite;
                opacity: ${Math.random() * 0.4 + 0.3};
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            `
            
            // Add center hole
            const centerHole = document.createElement('div')
            centerHole.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.2);
            `
            
            cd.appendChild(centerHole)
            container.appendChild(cd)
            
            // Remove after animation
            setTimeout(() => {
                if (cd.parentNode) {
                    cd.parentNode.removeChild(cd)
                }
            }, 30000)
        }

        // Create initial CDs
        for (let i = 0; i < 4; i++) {
            setTimeout(() => createCD(), i * 3000)
        }

        // Continue creating CDs
        const interval = setInterval(createCD, 8000)

        return () => {
            clearInterval(interval)
            const cds = container.querySelectorAll('.rotating-cd')
            cds.forEach(cd => cd.remove())
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-3" />
}

export default RotatingCD