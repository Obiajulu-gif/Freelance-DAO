"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, DollarSign } from "lucide-react"

export default function JobCard({ job, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
              {job.logo ? (
                <img src={job.logo || "/placeholder.svg"} alt={job.company} className="h-8 w-8 rounded-full" />
              ) : (
                <span className="text-lg font-bold text-gray-500 dark:text-gray-400">{job.company.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
            {job.type}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags &&
            job.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
        </div>

        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{job.posted}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{job.salary}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
