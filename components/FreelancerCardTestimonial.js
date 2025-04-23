"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function FreelancerCardTestimonial({ freelancer, onClick }) {
  // Get a featured testimonial if available
  const testimonial = freelancer.testimonials && freelancer.testimonials.length > 0 ? freelancer.testimonials[0] : null

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      {/* Top section with freelancer info */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
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
      </div>

      {/* Testimonial section */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex items-center">
          <Quote size={20} className="text-primary mr-2" />
          <h4 className="text-sm font-medium text-gray-800 dark:text-white">Client Testimonial</h4>
        </div>

        {testimonial ? (
          <>
            <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 flex-grow">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2 overflow-hidden">
                {testimonial.clientAvatar ? (
                  <img
                    src={testimonial.clientAvatar || "/placeholder.svg"}
                    alt={testimonial.clientName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {testimonial.clientName ? testimonial.clientName.charAt(0) : "C"}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">{testimonial.clientName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.clientCompany}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
            No testimonials yet
          </div>
        )}
      </div>

      {/* Bottom section with rate */}
      <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
          {freelancer.jobSuccess && (
            <span className="text-sm text-green-600 dark:text-green-400">{freelancer.jobSuccess}% Job Success</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
