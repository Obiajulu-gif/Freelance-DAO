"use client"

import { motion } from "framer-motion"
import { Star, MapPin, Award, ExternalLink, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function FreelancerCardFeatured({ freelancer, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl shadow-lg overflow-hidden border border-primary/20 dark:border-accent/20 cursor-pointer relative"
      onClick={onClick}
    >
      {/* Featured badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
        <Award size={12} className="mr-1" />
        Featured
      </div>

      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-4">
            <div className="h-full w-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
              {freelancer.avatar ? (
                <Image
                  src={freelancer.avatar || "/placeholder.svg"}
                  alt={freelancer.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-3xl font-bold text-primary">
                  {freelancer.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{freelancer.name}</h3>
          <p className="text-primary dark:text-primary-light font-medium">{freelancer.title}</p>

          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(freelancer.rating) ? "currentColor" : "none"}
                  className={i < Math.floor(freelancer.rating) ? "" : "text-gray-300 dark:text-gray-600"}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 dark:text-gray-300">
              {freelancer.rating} ({freelancer.reviews} reviews)
            </span>
          </div>

          {freelancer.location && (
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
              <MapPin size={14} className="mr-1" />
              <span>{freelancer.location}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">About</h4>
          <p className="text-gray-700 dark:text-gray-300">{freelancer.bio}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {freelancer.skills &&
              freelancer.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-700 text-primary dark:text-primary-light text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>

        {freelancer.portfolio && (
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Portfolio</h4>
            <div className="grid grid-cols-3 gap-2">
              {freelancer.portfolio.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700"
                >
                  <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div>
            <span className="block text-2xl font-bold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
            {freelancer.jobSuccess && (
              <span className="text-sm text-green-600 dark:text-green-400">{freelancer.jobSuccess}% Job Success</span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg"
          >
            <MessageSquare size={16} className="mr-2" />
            Contact
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
