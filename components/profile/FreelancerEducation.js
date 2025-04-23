"use client"

import { GraduationCap } from "lucide-react"

export default function FreelancerEducation({ education = [] }) {
  if (!education || education.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No education information available.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Education</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <GraduationCap size={14} className="text-primary" />
            </div>

            {/* Timeline line */}
            {index < education.length - 1 && (
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            )}

            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">{edu.degree}</h3>
              <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="font-medium text-primary">{edu.institution}</span>
                <span>•</span>
                <span>{edu.duration}</span>
              </div>
              {edu.description && <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
