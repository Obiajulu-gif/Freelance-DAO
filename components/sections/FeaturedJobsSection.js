"use client"

import { motion } from "framer-motion"
import JobCard from "../JobCard"
import FadeInWhenVisible from "../FadeInWhenVisible"

export default function FeaturedJobsSection({ setIsJobModalOpen }) {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Solidity Developer",
      company: "DeFi Protocol",
      logo: "/company-logos/defi-protocol.svg",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      tags: ["Solidity", "DeFi", "Smart Contracts"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Blockchain Frontend Engineer",
      company: "NFT Marketplace",
      logo: "/company-logos/nft-marketplace.svg",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120 / hr",
      tags: ["React", "Web3.js", "TypeScript"],
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Smart Contract Auditor",
      company: "Security DAO",
      logo: "/company-logos/security-dao.svg",
      location: "Remote",
      type: "Part-time",
      salary: "$10k - $15k / audit",
      tags: ["Security", "Solidity", "Auditing"],
      posted: "3 days ago",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Jobs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the latest opportunities in Web3 and blockchain development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <FadeInWhenVisible key={job.id} delay={index * 0.1}>
              <JobCard job={job} onClick={() => setIsJobModalOpen(true)} />
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light text-white font-medium py-3 px-6 rounded-md hover:shadow-lg transition duration-300"
          >
            Browse All Jobs
          </motion.button>
        </div>
      </div>
    </section>
  )
}
