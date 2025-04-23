"use client"

import { motion } from "framer-motion"
import FreelancerCard from "../FreelancerCard"
import FadeInWhenVisible from "../FadeInWhenVisible"

export default function TopFreelancersSection({ setIsContactModalOpen }) {
  const topFreelancers = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Smart Contract Developer",
      avatar: "/avatars/alex.jpg",
      rating: 4.9,
      reviews: 56,
      hourlyRate: "$120",
      skills: ["Solidity", "Rust", "Web3.js"],
      bio: "Experienced smart contract developer with a focus on security and efficiency.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "Blockchain Architect",
      avatar: "/avatars/sarah.jpg",
      rating: 5.0,
      reviews: 42,
      hourlyRate: "$150",
      skills: ["Architecture", "Solana", "Ethereum"],
      bio: "Designing scalable blockchain solutions for enterprise and DeFi applications.",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Frontend Web3 Developer",
      avatar: "/avatars/michael.jpg",
      rating: 4.8,
      reviews: 38,
      hourlyRate: "$95",
      skills: ["React", "TypeScript", "ethers.js"],
      bio: "Building intuitive and responsive interfaces for decentralized applications.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Top Rated Freelancers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Work with the most talented Web3 professionals from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFreelancers.map((freelancer, index) => (
            <FadeInWhenVisible key={freelancer.id} delay={index * 0.1}>
              <FreelancerCard freelancer={freelancer} onClick={() => setIsContactModalOpen(true)} />
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 text-primary border border-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            View All Freelancers
          </motion.button>
        </div>
      </div>
    </section>
  )
}
