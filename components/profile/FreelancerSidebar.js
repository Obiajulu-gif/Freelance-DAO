"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  DollarSign,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"

export default function FreelancerSidebar({ freelancer }) {
  const [showAllServices, setShowAllServices] = useState(false)
  const [messageText, setMessageText] = useState("")

  const displayedServices = showAllServices ? freelancer.services : freelancer.services?.slice(0, 2)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent to ${freelancer.name}: ${messageText}`)
    setMessageText("")
  }

  return (
    <div className="space-y-6">
      {/* Hire Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Hire {freelancer.name.split(" ")[0]}</h3>
          <span className="text-2xl font-bold text-gray-800 dark:text-white">${freelancer.hourlyRate}/hr</span>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock size={16} className="mr-2 text-primary" />
            <span>
              <span className="font-medium">Availability:</span> {freelancer.availability.status},{" "}
              {freelancer.availability.hours}
            </span>
          </div>

          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>
              <span className="font-medium">Timezone:</span> {freelancer.availability.timezone}
            </span>
          </div>

          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <DollarSign size={16} className="mr-2 text-primary" />
            <span>
              <span className="font-medium">Estimated Budget:</span> ${freelancer.hourlyRate * 40} - $
              {freelancer.hourlyRate * 80}/week
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg mb-4"
        >
          Hire {freelancer.name.split(" ")[0]}
        </motion.button>

        <button className="w-full bg-white dark:bg-gray-800 text-primary border border-primary hover:bg-primary/5 font-medium py-3 px-4 rounded-lg">
          Save to Favorites
        </button>
      </div>

      {/* Services Card */}
      {freelancer.services && freelancer.services.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Services Offered</h3>

          <div className="space-y-4">
            {displayedServices.map((service, index) => (
              <div key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-800 dark:text-white">{service.title}</h4>
                  <span className="text-primary font-semibold">{service.price}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          {freelancer.services.length > 2 && (
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="mt-4 text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm w-full justify-center"
            >
              {showAllServices ? (
                <>
                  Show Less <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  Show All Services <ChevronDown size={16} className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Verification Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Verifications</h3>

        <div className="space-y-4">
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-green-100 dark:bg-green-900 rounded-full">
              <Shield size={16} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">Identity Verified</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">ID verification complete</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-3 p-2 bg-green-100 dark:bg-green-900 rounded-full">
              <Award size={16} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">Skills Certified</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Passed 3 skill assessments</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-3 p-2 bg-green-100 dark:bg-green-900 rounded-full">
              <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-white">Payment Verified</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Secure payment methods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Contact {freelancer.name.split(" ")[0]}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder={`Tell ${freelancer.name.split(" ")[0]} about your project...`}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              rows={4}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg"
          >
            <MessageSquare size={16} className="mr-2" />
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  )
}
