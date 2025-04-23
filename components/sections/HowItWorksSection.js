"use client"

import { motion } from "framer-motion"
import Clock from "../Clock"
import FadeInWhenVisible from "../FadeInWhenVisible"

export default function HowItWorksSection({ setIsSignupModalOpen }) {
  const steps = [
    {
      icon: "🔍",
      title: "Find the perfect match",
      description:
        "Browse through our curated list of top Web3 freelancers or post your job to receive proposals from qualified professionals.",
    },
    {
      icon: "🤝",
      title: "Collaborate securely",
      description: "Work together through our platform with secure messaging, file sharing, and milestone tracking.",
    },
    {
      icon: "💰",
      title: "Pay with crypto",
      description:
        "Release payments in cryptocurrency when milestones are completed, with funds held in escrow until you approve the work.",
    },
    {
      icon: "⭐",
      title: "Build your reputation",
      description:
        "Earn reputation tokens and reviews to build your on-chain professional identity in the Web3 ecosystem.",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">How FreeLance DAO works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple, secure, and decentralized way to connect talent with opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Connecting line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-x-1/2"></div>
                )}

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block mb-8">
            <Clock />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            The average time to find and hire a qualified freelancer is just 24 hours. What are you waiting for?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSignupModalOpen(true)}
            className="bg-gradient-to-r from-accent to-accent-light text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  )
}
