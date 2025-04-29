"use client"

import { useState } from "react"
import { Search, Filter, Clock, CheckCircle, XCircle, ClockIcon, MessageSquare, FileText } from "lucide-react"
import Link from "next/link"
import Modal from "@/components/Modal"

export default function Proposals() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProposal, setSelectedProposal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Solana Smart Contract Development",
      company: "CryptoStartup Inc.",
      date: "Submitted 2 days ago",
      status: "pending",
      budget: "$2,000 - $3,500",
      messages: 2,
      description:
        "Looking for an experienced Solana developer to create a smart contract for our DeFi platform. The contract will handle staking, rewards distribution, and governance functionality.",
      requirements: [
        "3+ years of experience with Solana development",
        "Strong understanding of Rust programming language",
        "Experience with DeFi protocols and tokenomics",
        "Ability to write secure and optimized code",
        "Knowledge of Solana program architecture",
      ],
      clientInfo: {
        name: "CryptoStartup Inc.",
        location: "Remote",
        rating: 4.8,
        projectsCompleted: 12,
        memberSince: "Jan 2022",
      },
      timeline: "2-4 weeks",
      attachments: ["Project_Brief.pdf", "Technical_Requirements.pdf"],
    },
    {
      id: 2,
      title: "Web3 Frontend Development",
      company: "DeFi Protocol",
      date: "Submitted 1 week ago",
      status: "accepted",
      budget: "$1,500 - $2,500",
      messages: 5,
      description:
        "We need a frontend developer to build the user interface for our Web3 application. The UI should connect to Ethereum and Solana wallets, display user balances, and allow for transaction signing.",
      requirements: [
        "Experience with React and Next.js",
        "Familiarity with Web3.js and Ethers.js",
        "Understanding of wallet integration (MetaMask, Phantom)",
        "Knowledge of modern UI/UX principles",
        "Experience with responsive design",
      ],
      clientInfo: {
        name: "DeFi Protocol",
        location: "Remote",
        rating: 4.5,
        projectsCompleted: 8,
        memberSince: "Mar 2022",
      },
      timeline: "1-2 months",
      attachments: ["UI_Mockups.pdf", "Technical_Specs.pdf"],
    },
    {
      id: 3,
      title: "NFT Collection Design",
      company: "NFT Collective",
      date: "Submitted 2 weeks ago",
      status: "rejected",
      budget: "$3,000 - $5,000",
      messages: 0,
      description:
        "We're looking for a digital artist to create a collection of 10,000 unique NFTs for our upcoming launch. The collection should have a cyberpunk theme with various traits and rarities.",
      requirements: [
        "Portfolio of digital art or NFT projects",
        "Experience with generative art techniques",
        "Understanding of trait rarity and NFT collections",
        "Proficiency in digital illustration tools",
        "Knowledge of blockchain and NFT standards",
      ],
      clientInfo: {
        name: "NFT Collective",
        location: "Remote",
        rating: 4.2,
        projectsCompleted: 5,
        memberSince: "May 2022",
      },
      timeline: "1 month",
      attachments: ["Art_Direction.pdf", "Collection_Structure.pdf"],
    },
    {
      id: 4,
      title: "DeFi Protocol Development",
      company: "YieldMax Finance",
      date: "Submitted 3 days ago",
      status: "pending",
      budget: "$5,000 - $8,000",
      messages: 1,
      description:
        "We need a full-stack developer to build a yield farming protocol on Ethereum. The protocol should include staking, liquidity pools, and an automated yield optimizer.",
      requirements: [
        "Strong experience with Solidity and smart contract development",
        "Understanding of DeFi protocols and yield farming",
        "Experience with frontend development for DeFi applications",
        "Knowledge of security best practices",
        "Familiarity with auditing tools and processes",
      ],
      clientInfo: {
        name: "YieldMax Finance",
        location: "Remote",
        rating: 4.9,
        projectsCompleted: 15,
        memberSince: "Nov 2021",
      },
      timeline: "2-3 months",
      attachments: ["Protocol_Whitepaper.pdf", "Technical_Architecture.pdf"],
    },
  ])

  const openProposalModal = (proposal) => {
    setSelectedProposal(proposal)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProposal(null)
  }

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
              <ProposalCard key={proposal.id} proposal={proposal} onViewDetails={() => openProposalModal(proposal)} />
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

      {/* Proposal Details Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProposal?.title || "Proposal Details"}>
        {selectedProposal && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              {selectedProposal.status === "pending" && (
                <span className="flex items-center text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full text-xs">
                  <Clock size={12} className="mr-1" />
                  Pending
                </span>
              )}
              {selectedProposal.status === "accepted" && (
                <span className="flex items-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
                  <CheckCircle size={12} className="mr-1" />
                  Accepted
                </span>
              )}
              {selectedProposal.status === "rejected" && (
                <span className="flex items-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full text-xs">
                  <XCircle size={12} className="mr-1" />
                  Rejected
                </span>
              )}
              <span className="text-sm text-gray-500 dark:text-gray-400">{selectedProposal.date}</span>
            </div>

            <div>
              <h4 className="font-bold mb-2">Project Description</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedProposal.description}</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Requirements</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {selectedProposal.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div>
                <span className="font-bold">Timeline:</span> {selectedProposal.timeline}
              </div>
              <div>
                <span className="font-bold">Budget:</span> {selectedProposal.budget}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-bold mb-2">Client Information</h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img src="/abstract-geometric-logo.png" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">{selectedProposal.clientInfo.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{selectedProposal.clientInfo.location}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Rating</p>
                  <p className="font-medium">{selectedProposal.clientInfo.rating}/5</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Projects</p>
                  <p className="font-medium">{selectedProposal.clientInfo.projectsCompleted}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Member Since</p>
                  <p className="font-medium">{selectedProposal.clientInfo.memberSince}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-bold mb-2">Attachments</h4>
              <div className="space-y-2">
                {selectedProposal.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                      <FileText size={16} className="text-gray-500" />
                    </div>
                    <span>{attachment}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedProposal.status === "pending" && (
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="btn-outline flex-1">Edit Proposal</button>
                <button className="btn-primary flex-1">Contact Client</button>
              </div>
            )}
            {selectedProposal.status === "accepted" && (
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="btn-primary flex-1">Start Project</button>
                <button className="btn-outline flex-1">Message Client</button>
              </div>
            )}
            {selectedProposal.status === "rejected" && (
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="btn-outline flex-1">View Feedback</button>
                <button className="btn-primary flex-1">Browse Similar Jobs</button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}

function ProposalCard({ proposal, onViewDetails }) {
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
          <button onClick={onViewDetails} className="btn-outline text-sm py-1 px-3">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
