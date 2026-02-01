import { useEffect, useRef } from 'react'

function MusicCascade() {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    const elementsRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Music elements array
        const musicElements = []
        
        // Create music elements
        const createMusicElement = () => {
            return {
                x: Math.random() * canvas.width,
                y: -50,
                size: Math.random() * 30 + 20,
                speed: Math.random() * 2 + 1,
                opacity: Math.random() * 0.6 + 0.2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                type: Math.floor(Math.random() * 4), // Different music symbols
                color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue-purple range
                drift: Math.random() * 2 - 1 // Horizontal drift
            }
        }

        // Initialize elements
        for (let i = 0; i < 15; i++) {
            musicElements.push(createMusicElement())
        }

        // Music symbols
        const drawMusicSymbol = (ctx, element) => {
            ctx.save()
            ctx.translate(element.x, element.y)
            ctx.rotate((element.rotation * Math.PI) / 180)
            ctx.globalAlpha = element.opacity
            ctx.fillStyle = element.color
            ctx.font = `${element.size}px Arial`
            ctx.textAlign = 'center'
            
            const symbols = ['♪', '♫', '♬', '♩']
            ctx.fillText(symbols[element.type], 0, 0)
            
            ctx.restore()
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            musicElements.forEach((element, index) => {
                // Update position
                element.y += element.speed
                element.x += element.drift * 0.5
                element.rotation += element.rotationSpeed
                
                // Draw element
                drawMusicSymbol(ctx, element)
                
                // Reset element when it goes off screen
                if (element.y > canvas.height + 50) {
                    musicElements[index] = createMusicElement()
                }
                
                // Keep elements within horizontal bounds
                if (element.x < -50) element.x = canvas.width + 50
                if (element.x > canvas.width + 50) element.x = -50
            })
            
            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 1,
                opacity: 0.4
            }}
        />
    )
}

export default MusicCascade