"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ChevronDown, DollarSign, Clock, MapPin, Briefcase, Star, X } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function JobListingsPage() {
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    budget: "all",
    experience: "all",
    payment: "all",
  })

  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "web3", label: "Web3 Development" },
    { id: "blockchain", label: "Blockchain" },
    { id: "smart-contracts", label: "Smart Contracts" },
    { id: "nft", label: "NFT & Digital Art" },
    { id: "defi", label: "DeFi" },
    { id: "dao", label: "DAO Management" },
  ]

  const budgetRanges = [
    { id: "all", label: "Any Budget" },
    { id: "under-500", label: "Under $500" },
    { id: "500-1000", label: "$ 500 - 1,000" },
    { id: "1000-5000", label: "$ 1,000 - 5,000" },
    { id: "5000-plus", label: "$ 5,000+" },
  ]

  const experienceLevels = [
    { id: "all", label: "All Levels" },
    { id: "entry", label: "Entry Level" },
    { id: "intermediate", label: "Intermediate" },
    { id: "expert", label: "Expert" },
  ]

  const paymentTypes = [
    { id: "all", label: "All Types" },
    { id: "crypto", label: "Crypto" },
    { id: "fiat", label: "Fiat" },
    { id: "both", label: "Both" },
  ]

  // Sample job data
  const jobs = [
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
      description:
        "We're looking for an experienced Solidity developer to help build our next-generation DeFi protocol. You'll be responsible for designing and implementing smart contracts, ensuring security best practices, and collaborating with our frontend team.",
      featured: true,
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
      description:
        "Join our team to build an innovative NFT marketplace. You'll be working on the frontend, integrating with our smart contracts, and creating a seamless user experience for NFT creators and collectors.",
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
      description:
        "We're seeking experienced smart contract auditors to review and secure blockchain projects. You'll be responsible for identifying vulnerabilities, suggesting improvements, and ensuring the security of our clients' smart contracts.",
    },
    {
      id: 4,
      title: "DAO Community Manager",
      company: "Governance Protocol",
      logo: "/company-logos/governance-protocol.svg",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $90k",
      tags: ["Community", "Discord", "Governance"],
      posted: "5 days ago",
      description:
        "Help us build and manage our DAO community. You'll be responsible for engaging with community members, organizing events, and facilitating governance discussions and proposals.",
    },
    {
      id: 5,
      title: "Solana Developer",
      company: "DeFi Platform",
      logo: "/company-logos/defi-platform.svg",
      location: "Remote",
      type: "Contract",
      salary: "$100 - $150 / hr",
      tags: ["Solana", "Rust", "Web3"],
      posted: "1 day ago",
      description:
        "We're building a new DeFi platform on Solana and need experienced developers to join our team. You'll be working on smart contracts, integrating with our frontend, and optimizing for performance.",
    },
  ]

  const clearFilters = () => {
    setActiveFilters({
      category: "all",
      budget: "all",
      experience: "all",
      payment: "all",
    })
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Find Web3 Jobs</h1>
            <p className="text-gray-600 dark:text-gray-400">Browse the latest opportunities in blockchain and Web3</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Search jobs by title, skills, or keywords"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2">
                {/* Category Filter */}
                <div className="relative">
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Filter size={16} className="mr-2" />
                    <span>Category</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {/* Dropdown would go here */}
                </div>

                {/* Budget Filter */}
                <div className="relative">
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <DollarSign size={16} className="mr-2" />
                    <span>Budget</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {/* Dropdown would go here */}
                </div>

                {/* Experience Filter */}
                <div className="relative">
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Star size={16} className="mr-2" />
                    <span>Experience</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {/* Dropdown would go here */}
                </div>

                {/* Payment Type Filter */}
                <div className="relative">
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Briefcase size={16} className="mr-2" />
                    <span>Payment</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {/* Dropdown would go here */}
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="flex items-center px-4 py-2 text-primary hover:bg-primary/5 rounded-md"
                >
                  <X size={16} className="mr-2" />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            {/* Active Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.entries(activeFilters).some(([_, value]) => value !== "all") && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mr-2 flex items-center">Active filters:</div>
              )}
              {activeFilters.category !== "all" && (
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
                  {categories.find((c) => c.id === activeFilters.category)?.label}
                  <button
                    onClick={() => setActiveFilters({ ...activeFilters, category: "all" })}
                    className="ml-1 hover:text-primary-dark"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {activeFilters.budget !== "all" && (
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
                  {budgetRanges.find((b) => b.id === activeFilters.budget)?.label}
                  <button
                    onClick={() => setActiveFilters({ ...activeFilters, budget: "all" })}
                    className="ml-1 hover:text-primary-dark"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {/* Similar spans for other active filters */}
            </div>
          </div>

          {/* Featured Jobs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Featured Jobs</h2>
            <div className="space-y-4">
              {jobs
                .filter((job) => job.featured)
                .map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl shadow-md overflow-hidden border border-primary/20 dark:border-accent/20"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                            {job.logo ? (
                              <img src={job.logo || "/placeholder.svg"} alt={job.company} className="h-8 w-8" />
                            ) : (
                              <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                                {job.company.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                          </div>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-3 py-1 rounded-full">
                          Featured
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-gray-700 text-primary dark:text-primary-light text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{job.posted}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={14} className="mr-1" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end">
                        <button className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg">
                          View Job
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* All Jobs */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Jobs</h2>
            <div className="space-y-4">
              {jobs
                .filter((job) => !job.featured)
                .map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ y: -3 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                            {job.logo ? (
                              <img src={job.logo || "/placeholder.svg"} alt={job.company} className="h-8 w-8" />
                            ) : (
                              <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                                {job.company.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                          </div>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                          {job.type}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{job.posted}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={14} className="mr-1" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end">
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg">
                          View Job
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
              <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                3
              </button>
              <span className="px-3 py-1 text-gray-500 dark:text-gray-400">...</span>
              <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                10
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
