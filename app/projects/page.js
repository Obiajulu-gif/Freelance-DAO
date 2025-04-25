"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  Filter,
  Clock,
  Tag,
  X,
  Star,
  Share2,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample data for projects
const PROJECTS_DATA = [
  {
    id: 1,
    title: "NFT Marketplace Setup",
    description: "Complete NFT marketplace setup with minting, listing, and trading functionality.",
    price: 1500,
    duration: "2 weeks",
    priceType: "Fixed price",
    skills: ["NFT", "Marketplace", "Web3"],
    image: "/interconnected-web3.png",
    category: "nft",
    rating: 4.8,
    reviews: 24,
    creator: {
      name: "CryptoDevs Agency",
      image: "/abstract-agency-logo.png",
      rating: 4.9,
      projectsCompleted: 47,
    },
    longDescription:
      "Our NFT Marketplace setup package provides everything you need to launch your own NFT platform. We handle the smart contract development, frontend integration, and backend services to ensure a seamless user experience. The marketplace will support minting, listing, bidding, and trading of NFTs with support for multiple payment methods including cryptocurrency and credit cards.",
    features: [
      "Custom smart contract development",
      "Frontend and backend integration",
      "Wallet connectivity",
      "Minting functionality",
      "Auction and fixed price listings",
      "User profiles and collections",
      "Admin dashboard",
    ],
  },
  {
    id: 2,
    title: "Smart Contract Development",
    description: "Custom smart contract development for your DeFi protocol with security audit included.",
    price: 2500,
    duration: "3 weeks",
    priceType: "Fixed price",
    skills: ["Smart Contracts", "Solidity", "DeFi"],
    image: "/interconnected-contracts.png",
    category: "smart-contracts",
    rating: 4.9,
    reviews: 36,
    creator: {
      name: "BlockchainBuilders",
      image: "/abstract-geometric-logo.png",
      rating: 5.0,
      projectsCompleted: 62,
    },
    longDescription:
      "Our smart contract development service delivers secure, efficient, and audited smart contracts for your blockchain project. We follow industry best practices and conduct thorough testing to ensure your contracts are free from vulnerabilities. The package includes full documentation, deployment to your chosen network, and a comprehensive security audit by our expert team.",
    features: [
      "Custom smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Deployment to mainnet/testnet",
      "Integration support",
      "Complete documentation",
      "Post-deployment support",
    ],
  },
  {
    id: 3,
    title: "Web3 Frontend Integration",
    description: "Integrate your dApp with popular wallets and blockchain networks for seamless user experience.",
    price: 1200,
    duration: "1 week",
    priceType: "Fixed price",
    skills: ["React", "Web3", "Frontend"],
    image: "/modern-web-interface.png",
    category: "web3",
    rating: 4.7,
    reviews: 19,
    creator: {
      name: "Web3Wizards",
      image: "/abstract-agency-logo.png",
      rating: 4.8,
      projectsCompleted: 31,
    },
    longDescription:
      "Our Web3 Frontend Integration service connects your application to the blockchain ecosystem. We implement wallet connections, transaction signing, and blockchain data fetching to create a seamless user experience. The integration works with popular wallets like MetaMask, WalletConnect, and Phantom, and supports multiple blockchain networks including Ethereum, Polygon, and Solana.",
    features: [
      "Multi-wallet support",
      "Cross-chain compatibility",
      "Transaction signing and broadcasting",
      "Real-time blockchain data",
      "NFT display and management",
      "Token balance tracking",
      "Gas estimation",
    ],
  },
  {
    id: 4,
    title: "DeFi Protocol Setup",
    description: "Complete DeFi protocol with lending, borrowing, and yield farming capabilities.",
    price: 4500,
    duration: "1 month",
    priceType: "Fixed price",
    skills: ["Solidity", "DeFi", "The Graph"],
    image: "/decentralized-finance-network.png",
    category: "defi",
    rating: 4.9,
    reviews: 12,
    creator: {
      name: "DeFi Developers",
      image: "/abstract-geometric-logo.png",
      rating: 4.9,
      projectsCompleted: 28,
    },
    longDescription:
      "Our DeFi Protocol Setup service delivers a complete decentralized finance solution tailored to your requirements. We develop the smart contracts, frontend interface, and backend services needed for lending, borrowing, staking, and yield farming. The protocol includes security features, oracle integration for price feeds, and governance mechanisms for community control.",
    features: [
      "Lending and borrowing functionality",
      "Yield farming and staking",
      "Liquidity pools",
      "Oracle integration",
      "Governance mechanism",
      "Security features",
      "Analytics dashboard",
    ],
  },
  {
    id: 5,
    title: "DAO Governance System",
    description: "Complete DAO governance system with proposal creation, voting, and execution.",
    price: 3000,
    duration: "3 weeks",
    priceType: "Fixed price",
    skills: ["DAO", "Governance", "Smart Contracts"],
    image: "/abstract-daosystem.png",
    category: "dao",
    rating: 4.8,
    reviews: 9,
    creator: {
      name: "DAOBuilders",
      image: "/abstract-agency-logo.png",
      rating: 4.7,
      projectsCompleted: 15,
    },
    longDescription:
      "Our DAO Governance System provides everything needed to establish and run a decentralized autonomous organization. The system includes proposal creation, voting mechanisms, treasury management, and execution of approved proposals. We implement customizable voting parameters, delegation capabilities, and multiple voting strategies to suit your community's needs.",
    features: [
      "Proposal creation and management",
      "On-chain voting",
      "Treasury management",
      "Delegation capabilities",
      "Multiple voting strategies",
      "Member management",
      "Governance dashboard",
    ],
  },
  {
    id: 6,
    title: "Solana Program Development",
    description: "Custom Solana program development with Rust and Anchor framework.",
    price: 2800,
    duration: "1 month",
    priceType: "Fixed price",
    skills: ["Rust", "Solana", "Blockchain"],
    image: "/solana-code-abstract.png",
    category: "smart-contracts",
    rating: 4.9,
    reviews: 7,
    creator: {
      name: "SolanaDevs",
      image: "/abstract-geometric-logo.png",
      rating: 4.8,
      projectsCompleted: 23,
    },
    longDescription:
      "Our Solana Program Development service delivers high-performance, efficient programs for the Solana blockchain. Using Rust and the Anchor framework, we create custom programs optimized for Solana's parallel execution environment. The service includes program design, implementation, testing, and deployment, with a focus on security and efficiency.",
    features: [
      "Custom Solana program development",
      "Anchor framework implementation",
      "Performance optimization",
      "Security auditing",
      "Testing and deployment",
      "Client integration",
      "Documentation and support",
    ],
  },
]

// Categories
const CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "smart-contracts", name: "Smart Contracts" },
  { id: "web3", name: "Web3 Development" },
  { id: "nft", name: "NFT Collections" },
  { id: "defi", name: "DeFi Solutions" },
  { id: "dao", name: "DAO Management" },
]

// Sort options
const SORT_OPTIONS = [
  { id: "relevance", name: "Relevance" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
  { id: "newest", name: "Newest" },
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [timeFilter, setTimeFilter] = useState("any")
  const [sortOption, setSortOption] = useState("relevance")
  const [savedProjects, setSavedProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const sortRef = useRef(null)

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(PROJECTS_DATA)
      setLoading(false)
    }, 800)

    // Load saved projects from localStorage
    const saved = localStorage.getItem("savedProjects")
    if (saved) {
      setSavedProjects(JSON.parse(saved))
    }

    return () => clearTimeout(timer)
  }, [])

  // Save to localStorage when savedProjects changes
  useEffect(() => {
    localStorage.setItem("savedProjects", JSON.stringify(savedProjects))
  }, [savedProjects])

  // Toggle project save/unsave
  const toggleSaveProject = (projectId) => {
    if (savedProjects.includes(projectId)) {
      setSavedProjects(savedProjects.filter((id) => id !== projectId))
    } else {
      setSavedProjects([...savedProjects, projectId])
    }
  }

  // Filter projects based on search term and active category
  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = activeCategory === "all" || project.category === activeCategory

      const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1]

      let matchesTime = true
      if (timeFilter === "1week") {
        matchesTime = project.duration.includes("1 week")
      } else if (timeFilter === "2weeks") {
        matchesTime = project.duration.includes("1 week") || project.duration.includes("2 weeks")
      } else if (timeFilter === "1month") {
        matchesTime = !project.duration.includes("month") || project.duration.includes("1 month")
      }

      return matchesSearch && matchesCategory && matchesPrice && matchesTime
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

  const clearFilters = () => {
    setActiveCategory("all")
    setSearchTerm("")
    setPriceRange([0, 5000])
    setTimeFilter("any")
    setSortOption("relevance")
  }

  // Get related projects based on category and skills
  const getRelatedProjects = (project) => {
    if (!project) return []

    return projects
      .filter(
        (p) =>
          p.id !== project.id &&
          (p.category === project.category || p.skills.some((skill) => project.skills.includes(skill))),
      )
      .slice(0, 3)
  }

  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Project Catalog</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for projects, services, or keywords..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowUpDown size={18} />
              <span className="hidden sm:inline">Sort: </span>
              <span className="truncate max-w-[100px] sm:max-w-none">
                {SORT_OPTIONS.find((option) => option.id === sortOption)?.name}
              </span>
              <ChevronDown size={16} className={`transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-10">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortOption(option.id)
                      setShowSortDropdown(false)
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      sortOption === option.id ? "bg-gray-100 dark:bg-gray-700" : ""
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
              isFilterOpen ||
              activeCategory !== "all" ||
              priceRange[0] > 0 ||
              priceRange[1] < 5000 ||
              timeFilter !== "any"
                ? "bg-primary text-white border-primary"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Filter Projects</h3>
                {(activeCategory !== "all" || priceRange[0] > 0 || priceRange[1] < 5000 || timeFilter !== "any") && (
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Clear all filters
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="5000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                      className="w-full p-2 border rounded"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Delivery Time</h4>
                  <select
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="any">Any time</option>
                    <option value="1week">Up to 1 week</option>
                    <option value="2weeks">Up to 2 weeks</option>
                    <option value="1month">Up to 1 month</option>
                  </select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Rating</h4>
                  <div className="flex items-center gap-2">
                    {[4, 3, 0].map((rating) => (
                      <button
                        key={rating}
                        className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span>{rating > 0 ? `${rating}+` : "Any"}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category.id
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Results count */}
      {!loading && (
        <div className="mb-4 text-sm text-gray-500">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSaved={savedProjects.includes(project.id)}
              onToggleSave={() => toggleSaveProject(project.id)}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">No projects found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your search or filters</p>
          <button onClick={clearFilters} className="btn-primary inline-flex">
            Clear Filters
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 z-10"
                >
                  <X size={20} />
                </button>

                <div className="h-64 bg-gray-200 relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSaveProject(selectedProject.id)
                        }}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                      >
                        {savedProjects.includes(selectedProject.id) ? (
                          <BookmarkCheck size={20} className="text-primary" />
                        ) : (
                          <Bookmark size={20} />
                        )}
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 font-medium">{selectedProject.rating}</span>
                    </div>
                    <span className="text-gray-500">({selectedProject.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 text-primary">✓</div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 mb-6">
                    <h3 className="font-bold text-lg mb-4">About the Creator</h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={selectedProject.creator.image || "/placeholder.svg"}
                        alt={selectedProject.creator.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{selectedProject.creator.name}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="ml-1">{selectedProject.creator.rating}</span>
                          <span className="mx-2">•</span>
                          <span>{selectedProject.creator.projectsCompleted} projects completed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Projects */}
                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Similar Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {getRelatedProjects(selectedProject).map((project) => (
                        <div
                          key={project.id}
                          className="border rounded-lg overflow-hidden hover:border-primary cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                          }}
                        >
                          <div className="h-24 bg-gray-200">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <h4 className="font-medium text-sm line-clamp-1">{project.title}</h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Star size={12} className="text-yellow-400 fill-yellow-400" />
                              <span className="ml-1">{project.rating}</span>
                              <span className="mx-1">•</span>
                              <span>${project.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <div className="text-gray-500 text-sm">Starting at</div>
                      <div className="text-2xl font-bold">${selectedProject.price}</div>
                      <div className="text-gray-500 text-sm">{selectedProject.duration} delivery</div>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button className="btn-outline py-2 px-4 flex-1 sm:flex-initial">Contact Creator</button>
                      <button className="btn-primary py-2 px-4 flex-1 sm:flex-initial">Purchase Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ project, isSaved, onToggleSave, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden hover:border-primary transition-colors"
    >
      <div className="h-40 bg-gray-200 relative">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleSave()
          }}
          className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isSaved ? <BookmarkCheck size={18} className="text-primary" /> : <Bookmark size={18} />}
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{project.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.skills.map((skill) => (
            <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{project.duration} delivery</span>
          </div>
          <div className="flex items-center">
            <Tag size={14} className="mr-1" />
            <span>{project.priceType}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${project.price}</span>
          </div>
          <button onClick={onViewDetails} className="btn-outline text-sm py-1">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCardSkeleton() {
  return (
    <div className="card overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>

      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

        <div className="flex flex-wrap gap-2 mb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          ))}
        </div>

        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>

        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        </div>

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}
