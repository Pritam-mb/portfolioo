import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Update ScrollTrigger when Lenis scrolls
    lenisRef.current.on('scroll', ScrollTrigger.update)

    // Refresh ScrollTrigger
    ScrollTrigger.refresh()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <div>{children}</div>
}

export default SmoothScroll