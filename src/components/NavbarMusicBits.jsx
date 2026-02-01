import { useEffect, useRef } from 'react'

function NavbarMusicBits() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create floating music bits around navbar area
        const createMusicBit = () => {
            const bit = document.createElement('div')
            bit.className = 'music-bit'
            
            // Random music symbol
            const symbols = ['♪', '♫', '♬', '♩', '𝄞']
            bit.textContent = symbols[Math.floor(Math.random() * symbols.length)]
            
            // Random position around navbar area (top 100px of screen)
            const x = Math.random() * window.innerWidth
            const y = Math.random() * 100
            
            bit.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                color: rgba(99, 102, 241, 0.6);
                font-size: ${Math.random() * 15 + 10}px;
                pointer-events: none;
                z-index: 5;
                animation: floatMusic ${Math.random() * 10 + 15}s linear infinite;
                opacity: ${Math.random() * 0.5 + 0.3};
            `
            
            container.appendChild(bit)
            
            // Remove after animation
            setTimeout(() => {
                if (bit.parentNode) {
                    bit.parentNode.removeChild(bit)
                }
            }, 25000)
        }

        // Create initial bits
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createMusicBit(), i * 2000)
        }

        // Continue creating bits
        const interval = setInterval(createMusicBit, 3000)

        return () => {
            clearInterval(interval)
            // Clean up existing bits
            const bits = container.querySelectorAll('.music-bit')
            bits.forEach(bit => bit.remove())
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5" />
}

export default NavbarMusicBits