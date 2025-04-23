"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourRotation = 30 * hours + minutes / 2
  const minuteRotation = 6 * minutes
  const secondRotation = 6 * seconds

  return (
    <div className="relative w-24 h-24 rounded-full border-4 border-primary bg-white dark:bg-gray-800 shadow-lg">
      {/* Clock center */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-800 dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

      {/* Hour hand */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-8 bg-gray-800 dark:bg-white rounded-full origin-bottom transform -translate-x-1/2 -translate-y-full"
        style={{ rotate: hourRotation }}
        animate={{ rotate: hourRotation }}
        transition={{ type: "tween", ease: "linear", duration: 0.5 }}
      ></motion.div>

      {/* Minute hand */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-0.5 h-10 bg-gray-600 dark:bg-gray-300 rounded-full origin-bottom transform -translate-x-1/2 -translate-y-full"
        style={{ rotate: minuteRotation }}
        animate={{ rotate: minuteRotation }}
        transition={{ type: "tween", ease: "linear", duration: 0.5 }}
      ></motion.div>

      {/* Second hand */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-0.5 h-10 bg-primary rounded-full origin-bottom transform -translate-x-1/2 -translate-y-full"
        style={{ rotate: secondRotation }}
        animate={{ rotate: secondRotation }}
        transition={{ type: "tween", ease: "linear", duration: 0.5 }}
      ></motion.div>

      {/* Clock markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-2 bg-gray-400 dark:bg-gray-500"
          style={{
            top: "4px",
            left: "50%",
            transform: `translateX(-50%) rotate(${i * 30}deg)`,
            transformOrigin: "50% 900%",
          }}
        ></div>
      ))}
    </div>
  )
}
