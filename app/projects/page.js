"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Clock, Tag, X } from "lucide-react"
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

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [timeFilter, setTimeFilter] = useState("any")

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(PROJECTS_DATA)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter projects based on search term and active category
  const filteredProjects = projects.filter((project) => {
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

  const clearFilters = () => {
    setActiveCategory("all")
    setSearchTerm("")
    setPriceRange([0, 5000])
    setTimeFilter("any")
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
            <ProjectCard key={project.id} project={project} />
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
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden hover:border-primary transition-colors"
    >
      <div className="h-40 bg-gray-200 relative">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>

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
          <button className="btn-outline text-sm py-1">View Details</button>
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
