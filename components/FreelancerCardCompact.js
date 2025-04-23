"use client"

import { motion } from "framer-motion"
import { Star, MessageSquare } from "lucide-react"

export default function FreelancerCardCompact({ freelancer, onClick }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-primary dark:hover:border-primary transition-colors"
      onClick={onClick}
    >
      <div className="p-4 flex items-center justify-between">
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
            <div className="flex items-center mt-1">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    fill={i < Math.floor(freelancer.rating) ? "currentColor" : "none"}
                    className={i < Math.floor(freelancer.rating) ? "" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({freelancer.reviews})</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-semibold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 text-xs bg-gray-100 dark:bg-gray-700 text-primary hover:bg-primary hover:text-white px-2 py-1 rounded flex items-center transition-colors"
          >
            <MessageSquare size={10} className="mr-1" />
            Contact
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
