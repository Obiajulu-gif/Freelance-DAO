"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function FreelancerCardPortfolio({ freelancer, onClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const portfolio = freelancer.portfolio || []

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % portfolio.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + portfolio.length) % portfolio.length)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      {/* Portfolio carousel */}
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-700">
        {portfolio.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={portfolio[currentImageIndex].image || "/placeholder.svg"}
                  alt={portfolio[currentImageIndex].title || "Portfolio item"}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white text-sm font-medium">{portfolio[currentImageIndex].title}</h4>
                  <p className="text-white/80 text-xs">{portfolio[currentImageIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {portfolio.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {portfolio.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
            No portfolio items
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 overflow-hidden">
              {freelancer.avatar ? (
                <img
                  src={freelancer.avatar || "/placeholder.svg"}
                  alt={freelancer.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-lg font-bold text-gray-500 dark:text-gray-400">{freelancer.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{freelancer.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{freelancer.title}</p>
            </div>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-sm">{freelancer.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {freelancer.skills &&
            freelancer.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-0.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          {freelancer.skills && freelancer.skills.length > 3 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-0.5 rounded-md">
              +{freelancer.skills.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs bg-primary text-white px-3 py-1 rounded-full flex items-center"
          >
            <ExternalLink size={10} className="mr-1" />
            View Portfolio
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
