"use client"

import { Search, Filter, Clock, DollarSign, Bookmark, BookmarkCheck } from "lucide-react"
import { useState } from "react"

export default function Gigs() {
  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Gigs</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for gigs, projects, or keywords..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
          All Gigs
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
          Smart Contracts
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
          Web3 Development
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
          NFT Collections
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
          DeFi Solutions
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
          DAO Management
        </button>
      </div>

      {/* Gigs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GigCard
          title="Solana Smart Contract Developer"
          budget="$2,000 - $3,500"
          duration="2-4 weeks"
          skills={["Solana", "Rust", "Smart Contracts"]}
          company="CryptoStartup Inc."
          featured={true}
        />
        <GigCard
          title="Web3 Frontend Developer"
          budget="$1,500 - $2,500"
          duration="1-2 months"
          skills={["React", "Next.js", "Web3.js"]}
          company="DeFi Protocol"
          featured={false}
        />
        <GigCard
          title="NFT Collection Designer"
          budget="$3,000 - $5,000"
          duration="1 month"
          skills={["Illustration", "NFT", "Digital Art"]}
          company="NFT Collective"
          featured={false}
        />
        <GigCard
          title="Blockchain Security Auditor"
          budget="$4,000 - $6,000"
          duration="2-3 weeks"
          skills={["Security", "Auditing", "Smart Contracts"]}
          company="SecureChain"
          featured={true}
        />
        <GigCard
          title="DeFi Protocol Developer"
          budget="$5,000 - $8,000"
          duration="1-3 months"
          skills={["Solidity", "DeFi", "Yield Farming"]}
          company="YieldMax Finance"
          featured={false}
        />
        <GigCard
          title="DAO Governance Specialist"
          budget="$2,500 - $4,000"
          duration="1-2 months"
          skills={["Governance", "Tokenomics", "Voting Systems"]}
          company="DecentralDAO"
          featured={false}
        />
      </div>
    </div>
  )
}

function GigCard({ title, budget, duration, skills, company, featured }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
        <img src="/interconnected-future.png" alt="Gig" className="w-full h-full object-cover" />
        {featured && (
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-primary px-2 py-1 rounded text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="text-gray-400 hover:text-primary"
            aria-label={isSaved ? "Remove from saved" : "Save job"}
          >
            {isSaved ? <BookmarkCheck size={20} className="text-primary" /> : <Bookmark size={20} />}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          Looking for an experienced developer to work on a cutting-edge blockchain project.
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{budget}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img src="/abstract-geometric-logo.png" alt="Client" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">{company}</span>
          </div>
          <button className="btn-outline text-sm py-1 px-3">Apply</button>
        </div>
      </div>
    </div>
  )
}
