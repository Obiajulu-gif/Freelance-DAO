"use client"

import { motion } from "framer-motion"

export default function CategoryCard({ category, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-primary">{category.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.label}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {category.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-primary font-medium">{category.jobCount} jobs</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{category.avgRate}</span>
        </div>
      </div>
    </motion.div>
  )
}
