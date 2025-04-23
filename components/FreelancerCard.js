"use client"

import { motion } from "framer-motion"
import { Star, MapPin } from "lucide-react"

export default function FreelancerCard({ freelancer, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 overflow-hidden">
            {freelancer.avatar ? (
              <img
                src={freelancer.avatar || "/placeholder.svg"}
                alt={freelancer.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">{freelancer.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{freelancer.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{freelancer.title}</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(freelancer.rating) ? "currentColor" : "none"}
                    className={i < Math.floor(freelancer.rating) ? "" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">({freelancer.reviews})</span>
            </div>
          </div>
        </div>

        {freelancer.location && (
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <MapPin size={14} className="mr-1" />
            <span>{freelancer.location}</span>
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{freelancer.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills &&
            freelancer.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
          {freelancer.jobSuccess && (
            <span className="text-sm text-gray-500 dark:text-gray-400">{freelancer.jobSuccess}% Job Success</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
