import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollbarContainer: false,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      })

      // Update ScrollTrigger when Locomotive Scroll updates (if available)
      if (window.ScrollTrigger) {
        locomotiveScrollRef.current.on('scroll', window.ScrollTrigger.update)
        
        window.ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length ? locomotiveScrollRef.current.scrollTo(value, 0, 0) : locomotiveScrollRef.current.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
          },
          pinType: scrollRef.current.style.transform ? "transform" : "fixed"
        })
      }
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh()
      }
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

export default SmoothScroll