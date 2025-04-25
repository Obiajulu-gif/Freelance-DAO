"use client"

import { useState } from "react"
import { Search, Filter, Clock, CheckCircle, XCircle, ClockIcon, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Proposals() {
  const [activeTab, setActiveTab] = useState("all")
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Solana Smart Contract Development",
      company: "CryptoStartup Inc.",
      date: "Submitted 2 days ago",
      status: "pending",
      budget: "$2,000 - $3,500",
      messages: 2,
    },
    {
      id: 2,
      title: "Web3 Frontend Development",
      company: "DeFi Protocol",
      date: "Submitted 1 week ago",
      status: "accepted",
      budget: "$1,500 - $2,500",
      messages: 5,
    },
    {
      id: 3,
      title: "NFT Collection Design",
      company: "NFT Collective",
      date: "Submitted 2 weeks ago",
      status: "rejected",
      budget: "$3,000 - $5,000",
      messages: 0,
    },
    {
      id: 4,
      title: "DeFi Protocol Development",
      company: "YieldMax Finance",
      date: "Submitted 3 days ago",
      status: "pending",
      budget: "$5,000 - $8,000",
      messages: 1,
    },
  ])

  const filteredProposals =
    activeTab === "all" ? proposals : proposals.filter((proposal) => proposal.status === activeTab)

  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Proposals</h1>

      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
            activeTab === "all"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          All Proposals ({proposals.length})
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
            activeTab === "pending"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Pending ({proposals.filter((p) => p.status === "pending").length})
        </button>
        <button
          onClick={() => setActiveTab("accepted")}
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
            activeTab === "accepted"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Accepted ({proposals.filter((p) => p.status === "accepted").length})
        </button>
        <button
          onClick={() => setActiveTab("rejected")}
          className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
            activeTab === "rejected"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Rejected ({proposals.filter((p) => p.status === "rejected").length})
        </button>
      </div>

      {filteredProposals.length > 0 ? (
        <>
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
            {filteredProposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <ClockIcon size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">No {activeTab} proposals</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {activeTab === "all"
              ? "You haven't submitted any proposals yet"
              : `You don't have any ${activeTab} proposals`}
          </p>
          <Link href="/gigs" className="btn-primary inline-flex">
            Browse Jobs
          </Link>
        </div>
      )}
    </div>
  )
}

function ProposalCard({ proposal }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <span className="flex items-center text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full text-xs">
            <Clock size={12} className="mr-1" />
            Pending
          </span>
        )
      case "accepted":
        return (
          <span className="flex items-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
            <CheckCircle size={12} className="mr-1" />
            Accepted
          </span>
        )
      case "rejected":
        return (
          <span className="flex items-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full text-xs">
            <XCircle size={12} className="mr-1" />
            Rejected
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg mb-1">{proposal.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{proposal.company}</p>
          </div>
          {getStatusBadge(proposal.status)}
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{proposal.date}</span>
          <span>{proposal.budget}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {proposal.messages > 0 && (
              <div className="flex items-center text-primary">
                <MessageSquare size={16} className="mr-1" />
                <span className="text-sm">
                  {proposal.messages} new {proposal.messages === 1 ? "message" : "messages"}
                </span>
              </div>
            )}
          </div>
          <button className="btn-outline text-sm py-1 px-3">View Details</button>
        </div>
      </div>
    </div>
  )
}
