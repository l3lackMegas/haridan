/* 
    Thank you, Smooth scroll from this link: https://codesandbox.io/s/54cz4
*/

import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"

import { checkIsMobile, isSafari } from '../lib/utility'

const SmoothScroll = ({ children }) => {
  // I don't think Safari can smooth when scroll, LMAO
  let isCanSmooth = checkIsMobile() && isSafari()
  // scroll container
  const scrollRef = useRef(null)
  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    if(!isCanSmooth) {
      for (let entry of entries) {
        setPageHeight(entry.contentRect.height)
      }
    }
  }, [isCanSmooth])

  // observe when browser is resizing
  useLayoutEffect(() => {
    if(!isCanSmooth) {
      const resizeObserver = new ResizeObserver(entries =>
        resizePageHeight(entries)
      )
      scrollRef && resizeObserver.observe(scrollRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [isCanSmooth, scrollRef, resizePageHeight]) 

  const { scrollY } = useViewportScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        id="smoothScrolling"
        ref={scrollRef}
        style={isCanSmooth ? {
            position: 'relative'
        } : {
            y: spring
        }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      {!isCanSmooth && <div style={{ height: pageHeight }} />}
    </>
  )
}

export default SmoothScroll
