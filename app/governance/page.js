"use client"

import { useState } from "react"
import { Search, Filter, Users, FileText, CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Governance() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">DAO Governance</h1>
              <p className="text-lg mb-6 text-white/90">
                Shape the future of freelancing by participating in governance decisions. Vote on proposals, submit new
                ideas, and help steer the direction of FreeLance DAO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Submit Proposal
                </button>
                <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
                  View My Votes
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Governance Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 text-sm">Total Proposals</p>
                    <p className="text-2xl font-bold">127</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Active Proposals</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Your Voting Power</p>
                    <p className="text-2xl font-bold">1,240 FLD</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Participation Rate</p>
                    <p className="text-2xl font-bold">67%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-6">
        <div className="container mx-auto max-w-5xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto mb-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === "active"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Active Proposals
            </button>
            <button
              onClick={() => setActiveTab("passed")}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === "passed"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Passed
            </button>
            <button
              onClick={() => setActiveTab("rejected")}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === "rejected"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Rejected
            </button>
            <button
              onClick={() => setActiveTab("executed")}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === "executed"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Executed
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search proposals..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          {/* Proposals List */}
          <div className="space-y-4">
            <ProposalCard
              title="Reduce platform fees by 1%"
              description="Proposal to reduce the platform fee from 5% to 4% to attract more freelancers and clients."
              proposer="0x1a2...3b4c"
              timeLeft="2 days left"
              votes={{ for: 68, against: 32 }}
              status="active"
              category="Fee Structure"
            />
            <ProposalCard
              title="Add support for Ethereum chain"
              description="Expand the platform to support Ethereum blockchain in addition to Solana."
              proposer="0x5d6...7e8f"
              timeLeft="5 days left"
              votes={{ for: 82, against: 18 }}
              status="active"
              category="Platform Development"
            />
            <ProposalCard
              title="Implement skill verification system"
              description="Create a decentralized skill verification system to validate freelancer expertise."
              proposer="0x9g0...1h2i"
              timeLeft="1 day left"
              votes={{ for: 95, against: 5 }}
              status="active"
              category="Platform Features"
            />
            <ProposalCard
              title="Increase governance token rewards"
              description="Increase the governance token rewards for completing jobs to incentivize platform usage."
              proposer="0x3j4...5k6l"
              timeLeft="3 days left"
              votes={{ for: 45, against: 55 }}
              status="active"
              category="Tokenomics"
            />
          </div>

          {/* Learn More Section */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">How Governance Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={20} />
                </div>
                <h4 className="font-bold mb-2">1. Submit a Proposal</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Any token holder can submit a governance proposal for the community to vote on.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={20} />
                </div>
                <h4 className="font-bold mb-2">2. Community Voting</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Token holders vote on proposals with voting power proportional to their holdings.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <h4 className="font-bold mb-2">3. Implementation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If approved, proposals are implemented by the development team or through smart contracts.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/governance/learn"
                className="inline-flex items-center text-primary hover:text-primary-light font-medium"
              >
                Learn more about governance <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProposalCard({ title, description, proposer, timeLeft, votes, status, category }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="flex items-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
            <Clock size={12} className="mr-1" />
            Active
          </span>
        )
      case "passed":
        return (
          <span className="flex items-center text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full text-xs">
            <CheckCircle size={12} className="mr-1" />
            Passed
          </span>
        )
      case "rejected":
        return (
          <span className="flex items-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full text-xs">
            <AlertCircle size={12} className="mr-1" />
            Rejected
          </span>
        )
      case "executed":
        return (
          <span className="flex items-center text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full text-xs">
            <CheckCircle size={12} className="mr-1" />
            Executed
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{category}</span>
            {getStatusBadge(status)}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{timeLeft}</span>
        </div>

        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Votes</span>
            <span>
              {votes.for}% For / {votes.against}% Against
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${votes.for}%` }}></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Proposed by: <span className="font-mono">{proposer}</span>
          </div>
          <Link href={`/governance/proposals/1`} className="btn-outline text-sm py-1 px-3">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
