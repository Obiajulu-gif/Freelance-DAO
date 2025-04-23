"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Marquee({ children, direction = "left", speed = 20, pauseOnHover = true, className = "" }) {
  const marqueeRef = useRef(null)
  const contentRef = useRef(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duplicates, setDuplicates] = useState(1)

  useEffect(() => {
    if (contentRef.current && marqueeRef.current) {
      const updateWidths = () => {
        const contentWidth = contentRef.current.offsetWidth
        const containerWidth = marqueeRef.current.offsetWidth

        setContentWidth(contentWidth)
        setContainerWidth(containerWidth)

        // Calculate how many duplicates we need to fill the container
        const duplicatesNeeded = Math.ceil(containerWidth / contentWidth) + 1
        setDuplicates(duplicatesNeeded)
      }

      updateWidths()
      window.addEventListener("resize", updateWidths)

      return () => {
        window.removeEventListener("resize", updateWidths)
      }
    }
  }, [children])

  // Calculate animation duration based on content width and speed
  const duration = contentWidth / speed

  return (
    <div ref={marqueeRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? [-contentWidth, 0] : [0, -contentWidth],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
        className={`inline-block ${pauseOnHover ? "hover:pause" : ""}`}
      >
        <div ref={contentRef} className="inline-block">
          {children}
        </div>

        {/* Duplicate content to create seamless loop */}
        {[...Array(duplicates)].map((_, i) => (
          <div key={i} className="inline-block">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
