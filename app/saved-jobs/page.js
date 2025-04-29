"use client"

import { useState } from "react"
import { Search, Filter, Clock, DollarSign, Trash2, Star, StarOff } from "lucide-react"
import Link from "next/link"
import Modal from "@/components/Modal"

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: "Solana Smart Contract Developer",
      budget: "$2,000 - $3,500",
      duration: "2-4 weeks",
      skills: ["Solana", "Rust", "Smart Contracts"],
      company: "CryptoStartup Inc.",
      date: "Saved 2 days ago",
      favorite: true,
      description:
        "We're looking for an experienced Solana developer to build a custom smart contract for our DeFi platform. The contract will handle staking, rewards distribution, and governance functionality.",
      requirements: [
        "3+ years of experience with Solana development",
        "Strong understanding of Rust programming language",
        "Experience with DeFi protocols and tokenomics",
        "Ability to write secure and optimized code",
        "Knowledge of Solana program architecture",
      ],
      responsibilities: [
        "Design and implement smart contracts on Solana",
        "Optimize for performance and low transaction costs",
        "Integrate with our existing frontend application",
        "Conduct thorough testing and security audits",
        "Document code and provide maintenance support",
      ],
      clientInfo: {
        name: "CryptoStartup Inc.",
        location: "Remote",
        rating: 4.8,
        projectsCompleted: 12,
        memberSince: "Jan 2022",
      },
    },
    {
      id: 2,
      title: "Web3 Frontend Developer",
      budget: "$1,500 - $2,500",
      duration: "1-2 months",
      skills: ["React", "Next.js", "Web3.js"],
      company: "DeFi Protocol",
      date: "Saved 3 days ago",
      favorite: false,
      description:
        "We need a frontend developer to build the user interface for our Web3 application. The UI should connect to Ethereum and Solana wallets, display user balances, and allow for transaction signing.",
      requirements: [
        "Experience with React and Next.js",
        "Familiarity with Web3.js and Ethers.js",
        "Understanding of wallet integration (MetaMask, Phantom)",
        "Knowledge of modern UI/UX principles",
        "Experience with responsive design",
      ],
      responsibilities: [
        "Build responsive and intuitive user interfaces",
        "Implement wallet connection functionality",
        "Create transaction signing and submission flows",
        "Optimize for performance and accessibility",
        "Collaborate with backend developers on API integration",
      ],
      clientInfo: {
        name: "DeFi Protocol",
        location: "Remote",
        rating: 4.5,
        projectsCompleted: 8,
        memberSince: "Mar 2022",
      },
    },
    {
      id: 3,
      title: "NFT Collection Designer",
      budget: "$3,000 - $5,000",
      duration: "1 month",
      skills: ["Illustration", "NFT", "Digital Art"],
      company: "NFT Collective",
      date: "Saved 1 week ago",
      favorite: true,
      description:
        "We're looking for a digital artist to create a collection of 10,000 unique NFTs for our upcoming launch. The collection should have a cyberpunk theme with various traits and rarities.",
      requirements: [
        "Portfolio of digital art or NFT projects",
        "Experience with generative art techniques",
        "Understanding of trait rarity and NFT collections",
        "Proficiency in digital illustration tools",
        "Knowledge of blockchain and NFT standards",
      ],
      responsibilities: [
        "Create base character designs and variations",
        "Design multiple traits with different rarity levels",
        "Ensure compatibility between all trait combinations",
        "Prepare artwork for on-chain storage",
        "Collaborate on marketing materials for the collection",
      ],
      clientInfo: {
        name: "NFT Collective",
        location: "Remote",
        rating: 4.2,
        projectsCompleted: 5,
        memberSince: "May 2022",
      },
    },
  ])

  const [selectedJob, setSelectedJob] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleFavorite = (id) => {
    setSavedJobs(savedJobs.map((job) => (job.id === id ? { ...job, favorite: !job.favorite } : job)))
  }

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id))
  }

  const openApplyModal = (job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  const handleSubmitApplication = (e) => {
    e.preventDefault()
    // Here you would handle the application submission
    alert("Your application has been submitted!")
    closeModal()
  }

  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Saved Jobs</h1>

      {savedJobs.length > 0 ? (
        <>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search saved jobs..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          {/* Saved Jobs List */}
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <SavedJobCard
                key={job.id}
                job={job}
                onToggleFavorite={() => toggleFavorite(job.id)}
                onRemove={() => removeJob(job.id)}
                onApply={() => openApplyModal(job)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">No saved jobs yet</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Jobs you save will appear here for easy access</p>
          <Link href="/gigs" className="btn-primary inline-flex">
            Browse Jobs
          </Link>
        </div>
      )}

      {/* Apply Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Apply for ${selectedJob?.title || "Job"}`}>
        {selectedJob && (
          <div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">Job Description</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedJob.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedJob.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{selectedJob.duration}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={14} className="mr-1" />
                  <span>{selectedJob.budget}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium mb-1">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  rows={5}
                  placeholder="Introduce yourself and explain why you're a good fit for this job..."
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="rate" className="block text-sm font-medium mb-1">
                  Your Rate (USD)
                </label>
                <input
                  type="number"
                  id="rate"
                  placeholder="Enter your rate"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium mb-1">
                  Estimated Timeframe
                </label>
                <select
                  id="timeframe"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select timeframe</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>

              <div>
                <label htmlFor="attachments" className="block text-sm font-medium mb-1">
                  Attachments (Optional)
                </label>
                <div className="border border-dashed rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Drag and drop files here, or click to browse
                  </p>
                  <button type="button" className="text-primary text-sm font-medium">
                    Browse Files
                  </button>
                  <input type="file" className="hidden" id="attachments" multiple />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                <button type="button" onClick={closeModal} className="btn-outline flex-1">
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  )
}

function SavedJobCard({ job, onToggleFavorite, onRemove, onApply }) {
  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg mb-2">{job.title}</h3>
          <div className="flex gap-2">
            <button
              onClick={onToggleFavorite}
              className="text-gray-400 hover:text-yellow-500"
              aria-label={job.favorite ? "Remove from favorites" : "Add to favorites"}
            >
              {job.favorite ? <Star size={20} className="text-yellow-500 fill-yellow-500" /> : <StarOff size={20} />}
            </button>
            <button onClick={onRemove} className="text-gray-400 hover:text-red-500" aria-label="Remove from saved jobs">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {job.skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{job.duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{job.budget}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img src="/abstract-geometric-logo.png" alt="Client" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{job.company}</span>
              <span className="text-xs text-gray-500">{job.date}</span>
            </div>
          </div>
          <button onClick={onApply} className="btn-outline text-sm py-1 px-3">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
