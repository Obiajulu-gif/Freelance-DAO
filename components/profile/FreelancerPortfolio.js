"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function FreelancerPortfolio({ portfolio = [] }) {
  const [selectedProject, setSelectedProject] = useState(null)

  if (!portfolio || portfolio.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No portfolio items available.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Portfolio ({portfolio.length})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-gray-50 dark:bg-gray-750 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video relative">
              <Image
                src={project.image || "/placeholder.svg?height=200&width=400"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies &&
                  project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <div className="flex justify-end">
                <button className="text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm">
                  View Details
                  <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=400&width=800"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{selectedProject.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies &&
                      selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {selectedProject.testimonial && (
                    <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg mb-4 italic text-gray-600 dark:text-gray-300">
                      "{selectedProject.testimonial}"
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    >
                      Close
                    </button>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        Visit Project
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
