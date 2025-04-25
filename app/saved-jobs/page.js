"use client"

import { useState } from "react"
import { Search, Filter, Clock, DollarSign, Trash2, Star, StarOff } from "lucide-react"
import Link from "next/link"

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
    },
  ])

  const toggleFavorite = (id) => {
    setSavedJobs(savedJobs.map((job) => (job.id === id ? { ...job, favorite: !job.favorite } : job)))
  }

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id))
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
    </div>
  )
}

function SavedJobCard({ job, onToggleFavorite, onRemove }) {
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
          <button className="btn-outline text-sm py-1 px-3">Apply</button>
        </div>
      </div>
    </div>
  )
}
