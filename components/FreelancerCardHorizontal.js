"use client"

import { motion } from "framer-motion"
import { Star, MapPin, Clock, CheckCircle, MessageSquare } from "lucide-react"

export default function FreelancerCardHorizontal({ freelancer, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left column - Avatar and basic info */}
        <div className="md:w-1/4 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
          <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
            {freelancer.avatar ? (
              <img
                src={freelancer.avatar || "/placeholder.svg"}
                alt={freelancer.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-gray-500 dark:text-gray-400">{freelancer.name.charAt(0)}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{freelancer.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{freelancer.title}</p>
          <div className="flex items-center mt-2">
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
          {freelancer.location && (
            <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              <MapPin size={14} className="mr-1" />
              <span>{freelancer.location}</span>
            </div>
          )}
        </div>

        {/* Middle column - Bio and skills */}
        <div className="md:w-2/4 p-6">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">About</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{freelancer.bio}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {freelancer.skills &&
                freelancer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Right column - Stats and action */}
        <div className="md:w-1/4 p-6 bg-gray-50 dark:bg-gray-750">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="mb-4">
                <span className="block text-2xl font-bold text-gray-800 dark:text-white">
                  ${freelancer.hourlyRate}/hr
                </span>
                {freelancer.jobSuccess && (
                  <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                    <CheckCircle size={14} className="mr-1" />
                    <span>{freelancer.jobSuccess}% Job Success</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock size={14} className="mr-2" />
                  <span>{freelancer.availability || "Full Time"}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle size={14} className="mr-2" />
                  <span>{freelancer.projectsCompleted || "10+"} Projects</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              <MessageSquare size={16} className="mr-2" />
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
