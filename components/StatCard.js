"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function StatCard({ stat, animate = false, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (animate) {
      let start = 0
      const end = Number.parseInt(stat.value)
      const duration = 2000
      const increment = end / (duration / 16) // Update every 16ms for smooth animation

      // Don't start immediately to respect the delay
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += increment
          setCount(Math.min(Math.floor(start), end))

          if (start >= end) {
            clearInterval(counter)
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    } else {
      setCount(stat.value)
    }
  }, [animate, stat.value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full mr-4">
          {stat.icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            {stat.prefix}
            {count.toLocaleString()}
            {stat.suffix}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
        </div>
      </div>
    </motion.div>
  )
}
