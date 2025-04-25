"use client"

import { useState, useEffect } from "react"
import { Search, Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample data for projects
const PROJECTS_DATA = [
  {
    id: 1,
    title: "NFT Marketplace Setup",
    description: "Complete NFT marketplace setup with minting, listing, and trading functionality.",
    price: 1500,
    duration: "2 weeks delivery",
    priceType: "Fixed price",
    skills: ["NFT", "Marketplace", "Web3"],
    image: "/interconnected-web3.png",
  },
  {
    id: 2,
    title: "Smart Contract Development",
    description: "Custom smart contract development for your DeFi protocol with security audit included.",
    price: 2500,
    duration: "3 weeks delivery",
    priceType: "Fixed price",
    skills: ["Smart Contracts", "Solidity", "DeFi"],
    image: "/placeholder.svg?key=8l4qb",
  },
  {
    id: 3,
    title: "Web3 Frontend Integration",
    description: "Integrate your dApp with popular wallets and blockchain networks for seamless user experience.",
    price: 1200,
    duration: "1 week delivery",
    priceType: "Fixed price",
    skills: ["React", "Web3", "Frontend"],
    image: "/placeholder.svg?height=160&width=400&query=frontend",
  \
]

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  
  // Filter states
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [deliveryTime, setDeliveryTime] = useState("all")

  // Categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "smart-contracts", name: "Smart Contracts" },
    { id: "web3", name: "Web3 Development" },
    { id: "nft", name: "NFT Collections" },
    { id: "defi", name: "DeFi Solutions" },
    { id: "dao", name: "DAO Management" }
  ]

  // Available technologies for filtering
  const availableTechnologies = [
    "React", "Next.js", "Solidity", "Rust", "Solana", "Ethereum", 
    "IPFS", "The Graph", "Hardhat", "Foundry", "Anchor"
  ]

  // Delivery time options
  const deliveryTimeOptions = [
    { value: "all", label: "Any Time" },
    { value: "1week", label: "Up to 1 week" },
    { value: "2weeks", label: "Up to 2 weeks" },
    { value: "1month", label: "Up to 1 month" },
    { value: "3months", label: "Up to 3 months" }
  ]

  // Simulated data loading
  useEffect(() => {
    const loadProjects = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Sample data
      const data = [
        {
          id: 1,
          title: "NFT Marketplace Setup",
          description: "Complete NFT marketplace setup with minting, listing, and trading functionality.",
          price: 1500,
          deliveryTime: "2weeks",
          technologies: ["React", "Next.js", "Solidity", "IPFS"],
          category: "nft",
          image: "/interconnected-web3.png"
        },
        {
          id: 2,
          title: "Smart Contract Development",
          description: "Custom smart contract development for your blockchain project with full testing and deployment.",
          price: 2000,
          deliveryTime: "2weeks",
          technologies: ["Solidity", "Hardhat", "Ethereum"],
          category: "smart-contracts",
          image: "/placeholder.svg?key=y0lrq"
        },
        {
          id: 3,
          title: "DeFi Protocol Setup",
          description: "Complete DeFi protocol with lending, borrowing, and yield farming capabilities.",
          price: 4500,
          deliveryTime: "1month",
          technologies: ["Solidity", "React", "The Graph"],
          category: "defi",
          image: "/placeholder.svg?key=isets"
        },
        {
          id: 4,
          title: "DAO Governance System",
          description: "Complete DAO governance system with proposal creation, voting, and execution.",
          price: 3000,
          deliveryTime: "3months",
          technologies: ["Solidity", "React", "The Graph"],
          category: "dao",
          image: "/placeholder.svg?key=zdbxg"
        },
        {
          id: 5,
          title: "Web3 Frontend Integration",
          description: "Integration of Web3 functionality into your existing frontend application.",
          price: 1200,
          deliveryTime: "1week",
          technologies: ["React", "Next.js", "Ethereum"],
          category: "web3",
          image: "/placeholder.svg?key=6cra9"
        },
        {
          id: 6,
          title: "Solana Program Development",
          description: "Custom Solana program development with Rust and Anchor framework.",
          price: 2800,
          deliveryTime: "1month",
          technologies: ["Rust", "Anchor", "Solana"],
          category: "smart-contracts",
          image: "/placeholder.svg?key=lh5v7"
        }
      ]
      
      setProjects(data)
      setFilteredProjects(data)
      setIsLoading(false)
    }
    
    loadProjects()
  }, [])

  // Handle search, category, and filtering
  useEffect(() => {
    let results = [...projects]
    
    // Apply category filter
    if (activeCategory !== "all") {
      results = results.filter(project => project.category === activeCategory)
    }
    
    // Apply search term
    if (searchTerm) {
      results = results.filter(
        project => 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech => 
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    }
    
    // Apply technology filters
    if (selectedTechnologies.length > 0) {
      results = results.filter(
        project => selectedTechnologies.some(tech => 
          project.technologies.includes(tech)
        )
      )
    }
    
    // Apply price range filter
    results = results.filter(
      project => 
        project.price >= priceRange[0] && 
        project.price <= priceRange[1]
    )
    
    // Apply delivery time filter
    if (deliveryTime !== "all") {
      results = results.filter(
        project => {
          const deliveryTimeMap = {
            "1week": ["1week"],
            "2weeks": ["1week", "2weeks"],
            "1month": ["1week", "2weeks", "1month"],
            "3months": ["1week", "2weeks", "1month", "3months"]
          }
          return deliveryTimeMap[deliveryTime]?.includes(project.deliveryTime)
        }
      )
    }
    
    setFilteredProjects(results)
  }, [searchTerm, activeCategory, selectedTechnologies, priceRange, deliveryTime, projects])

  const toggleTechnology = (tech) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech))
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech])
    }
  }

  const handlePriceChange = (e, index) => {
    const newValue = Number.parseInt(e.target.value)
    const newRange = [...priceRange]
    newRange[index] = newValue
    
    // Ensure min <= max
    if (index === 0 && newValue > priceRange[1]) {
      newRange[1] = newValue
    } else if (index === 1 && newValue < priceRange[0]) {
      newRange[0] = newValue
    }
    
    setPriceRange(newRange)
  }

  const clearFilters = () => {
    setSelectedTechnologies([])
    setPriceRange([0, 5000])
    setDeliveryTime("all")
    setSearchTerm("")
    setActiveCategory("all")
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
              <X size={18} />
            </button>
          )}
        </div>

        <button 
          className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
            showFilters || selectedTechnologies.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000 || deliveryTime !== "all"
              ? "bg-primary text-white border-primary"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          <span>Filters</span>
          
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-6"
          >
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {availableTechnologies.map(tech => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          selectedTechnologies.includes(tech)
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}+</span>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Delivery Time */}
                <div>
                  <h4 className="font-medium mb-2">Delivery Time</h4>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
                  >
                    {deliveryTimeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {filteredProjects.length} projects found
      </div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
