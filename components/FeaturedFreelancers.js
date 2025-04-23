"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import FreelancerCardFeatured from "./FreelancerCardFeatured"
import FreelancerCard from "./FreelancerCard"
import FreelancerCardPortfolio from "./FreelancerCardPortfolio"

export default function FeaturedFreelancers({ freelancers = [] }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedFreelancer, setSelectedFreelancer] = useState(null)

  const handleFreelancerClick = (freelancer) => {
    setSelectedFreelancer(freelancer)
    setIsContactModalOpen(true)
  }

  // If no freelancers are provided, use sample data
  const displayFreelancers =
    freelancers.length > 0
      ? freelancers
      : [
          {
            id: 1,
            name: "Alex Johnson",
            title: "Smart Contract Developer",
            avatar: "/avatars/alex.jpg",
            rating: 4.9,
            reviews: 56,
            hourlyRate: 120,
            skills: ["Solidity", "Rust", "Web3.js"],
            bio: "Experienced smart contract developer with a focus on security and efficiency.",
            location: "San Francisco, CA",
            jobSuccess: 98,
            portfolio: [
              {
                title: "DeFi Protocol",
                description: "Built a decentralized lending platform",
                image: "/portfolio/defi.jpg",
              },
            ],
          },
          {
            id: 2,
            name: "Sarah Williams",
            title: "Blockchain Architect",
            avatar: "/avatars/sarah.jpg",
            rating: 5.0,
            reviews: 42,
            hourlyRate: 150,
            skills: ["Architecture", "Solana", "Ethereum"],
            bio: "Designing scalable blockchain solutions for enterprise and DeFi applications.",
            location: "New York, NY",
            jobSuccess: 100,
          },
          {
            id: 3,
            name: "Michael Chen",
            title: "Frontend Web3 Developer",
            avatar: "/avatars/michael.jpg",
            rating: 4.8,
            reviews: 38,
            hourlyRate: 95,
            skills: ["React", "TypeScript", "ethers.js"],
            bio: "Building intuitive and responsive interfaces for decentralized applications.",
            location: "Austin, TX",
            jobSuccess: 95,
          },
        ]

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Freelancers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Work with our top-rated Web3 professionals who consistently deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First freelancer with featured card */}
          <div className="lg:col-span-3">
            <FreelancerCardFeatured
              freelancer={displayFreelancers[0]}
              onClick={() => handleFreelancerClick(displayFreelancers[0])}
            />
          </div>

          {/* Second freelancer with portfolio card */}
          <div className="lg:col-span-1">
            <FreelancerCardPortfolio
              freelancer={displayFreelancers[0]}
              onClick={() => handleFreelancerClick(displayFreelancers[0])}
            />
          </div>

          {/* Other freelancers with standard cards */}
          {displayFreelancers.slice(1).map((freelancer) => (
            <div key={freelancer.id} className="lg:col-span-1">
              <FreelancerCard freelancer={freelancer} onClick={() => handleFreelancerClick(freelancer)} />
            </div>
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
    </div>
  )
}
