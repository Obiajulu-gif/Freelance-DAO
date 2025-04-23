"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FreelancerCardCompact from "./FreelancerCardCompact"

export default function FreelancerCarousel({ freelancers = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const containerRef = useRef(null)
  const itemsPerView = 3

  // If no freelancers are provided, use sample data
  const displayFreelancers =
    freelancers.length > 0
      ? freelancers
      : [
          {
            id: 1,
            name: "Alex Johnson",
            title: "Smart Contract Developer",
            avatar: "/avatars/alex.jpg",
            rating: 4.9,
            reviews: 56,
            hourlyRate: 120,
          },
          {
            id: 2,
            name: "Sarah Williams",
            title: "Blockchain Architect",
            avatar: "/avatars/sarah.jpg",
            rating: 5.0,
            reviews: 42,
            hourlyRate: 150,
          },
          {
            id: 3,
            name: "Michael Chen",
            title: "Frontend Web3 Developer",
            avatar: "/avatars/michael.jpg",
            rating: 4.8,
            reviews: 38,
            hourlyRate: 95,
          },
          {
            id: 4,
            name: "Emma Wilson",
            title: "UI/UX Designer",
            avatar: "/avatars/emma.jpg",
            rating: 4.7,
            reviews: 29,
            hourlyRate: 85,
          },
          {
            id: 5,
            name: "David Kim",
            title: "Solana Developer",
            avatar: "/avatars/david.jpg",
            rating: 4.9,
            reviews: 31,
            hourlyRate: 110,
          },
        ]

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        setContainerWidth(containerRef.current.offsetWidth)
        setItemWidth(containerRef.current.offsetWidth / itemsPerView)
      }

      updateDimensions()
      window.addEventListener("resize", updateDimensions)

      return () => {
        window.removeEventListener("resize", updateDimensions)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= displayFreelancers.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, displayFreelancers.length - itemsPerView) : prevIndex - 1,
    )
  }

  const handleFreelancerClick = (freelancer) => {
    alert(`Clicked on ${freelancer.name}`)
  }

  return (
    <div className="relative py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Top Rated Freelancers</h3>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          animate={{
            x: -currentIndex * (itemWidth || 300),
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: `${displayFreelancers.length * (itemWidth || 300)}px`,
          }}
        >
          {displayFreelancers.map((freelancer) => (
            <div key={freelancer.id} style={{ width: itemWidth || 300, padding: "0 8px" }}>
              <FreelancerCardCompact freelancer={freelancer} onClick={() => handleFreelancerClick(freelancer)} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
