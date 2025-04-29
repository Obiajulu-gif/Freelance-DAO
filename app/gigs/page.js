"use client"

import { Search, Filter, Clock, DollarSign, Bookmark, BookmarkCheck } from "lucide-react"
import { useState } from "react"
import Modal from "@/components/Modal"

export default function Gigs() {
  const [selectedGig, setSelectedGig] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const gigs = [
    {
      id: 1,
      title: "Solana Smart Contract Developer",
      budget: "$2,000 - $3,500",
      duration: "2-4 weeks",
      skills: ["Solana", "Rust", "Smart Contracts"],
      company: "CryptoStartup Inc.",
      featured: true,
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
      featured: false,
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
      featured: false,
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
    {
      id: 4,
      title: "Blockchain Security Auditor",
      budget: "$4,000 - $6,000",
      duration: "2-3 weeks",
      skills: ["Security", "Auditing", "Smart Contracts"],
      company: "SecureChain",
      featured: true,
      description:
        "We need a security expert to audit our smart contracts before mainnet deployment. The audit should identify vulnerabilities, suggest improvements, and verify the contract logic matches our intended functionality.",
      requirements: [
        "Experience with smart contract security audits",
        "Deep understanding of common vulnerabilities",
        "Familiarity with auditing tools and techniques",
        "Knowledge of Solidity and EVM",
        "Background in cybersecurity or related field",
      ],
      responsibilities: [
        "Conduct comprehensive security audit of smart contracts",
        "Identify vulnerabilities and potential attack vectors",
        "Suggest code improvements and security enhancements",
        "Verify contract logic and business requirements",
        "Provide detailed audit report with findings",
      ],
      clientInfo: {
        name: "SecureChain",
        location: "Remote",
        rating: 4.9,
        projectsCompleted: 20,
        memberSince: "Dec 2021",
      },
    },
    {
      id: 5,
      title: "DeFi Protocol Developer",
      budget: "$5,000 - $8,000",
      duration: "1-3 months",
      skills: ["Solidity", "DeFi", "Yield Farming"],
      company: "YieldMax Finance",
      featured: false,
      description:
        "We need a full-stack developer to build a yield farming protocol on Ethereum. The protocol should include staking, liquidity pools, and an automated yield optimizer.",
      requirements: [
        "Strong experience with Solidity and smart contract development",
        "Understanding of DeFi protocols and yield farming",
        "Experience with frontend development for DeFi applications",
        "Knowledge of security best practices",
        "Familiarity with auditing tools and processes",
      ],
      responsibilities: [
        "Design and implement yield farming smart contracts",
        "Create staking and reward distribution mechanisms",
        "Build liquidity pool contracts with fair tokenomics",
        "Develop an automated yield optimizer strategy",
        "Integrate with frontend for a seamless user experience",
      ],
      clientInfo: {
        name: "YieldMax Finance",
        location: "Remote",
        rating: 4.7,
        projectsCompleted: 15,
        memberSince: "Nov 2021",
      },
    },
    {
      id: 6,
      title: "DAO Governance Specialist",
      budget: "$2,500 - $4,000",
      duration: "1-2 months",
      skills: ["Governance", "Tokenomics", "Voting Systems"],
      company: "DecentralDAO",
      featured: false,
      description:
        "We're looking for a governance specialist to design and implement our DAO voting system. The system should support proposal creation, voting with token weights, and automatic execution of passed proposals.",
      requirements: [
        "Experience with DAO governance systems",
        "Understanding of tokenomics and voting mechanisms",
        "Knowledge of smart contract development",
        "Familiarity with existing DAO frameworks",
        "Strong communication and documentation skills",
      ],
      responsibilities: [
        "Design a fair and secure governance system",
        "Implement proposal creation and voting mechanisms",
        "Create token-weighted voting with delegation",
        "Develop automatic execution for passed proposals",
        "Document the governance process for community members",
      ],
      clientInfo: {
        name: "DecentralDAO",
        location: "Remote",
        rating: 4.4,
        projectsCompleted: 7,
        memberSince: "Feb 2022",
      },
    },
  ]

  const openApplyModal = (gig) => {
    setSelectedGig(gig)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedGig(null)
  }

  const handleSubmitApplication = (e) => {
    e.preventDefault()
    // Here you would handle the application submission
    alert("Your application has been submitted!")
    closeModal()
  }

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
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} onApply={() => openApplyModal(gig)} />
        ))}
      </div>

      {/* Apply Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Apply for ${selectedGig?.title || "Job"}`}>
        {selectedGig && (
          <div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">Job Description</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedGig.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedGig.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{selectedGig.duration}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={14} className="mr-1" />
                  <span>{selectedGig.budget}</span>
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

function GigCard({ gig, onApply }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
        <img src="/interconnected-future.png" alt="Gig" className="w-full h-full object-cover" />
        {gig.featured && (
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-primary px-2 py-1 rounded text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg mb-2">{gig.title}</h3>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="text-gray-400 hover:text-primary"
            aria-label={isSaved ? "Remove from saved" : "Save job"}
          >
            {isSaved ? <BookmarkCheck size={20} className="text-primary" /> : <Bookmark size={20} />}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {gig.skills.map((skill, index) => (
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
            <span>{gig.duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{gig.budget}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img src="/abstract-geometric-logo.png" alt="Client" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">{gig.company}</span>
          </div>
          <button onClick={onApply} className="btn-outline text-sm py-1 px-3">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
