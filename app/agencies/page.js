"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Star, Award, Users, X, MapPin, Globe, Mail, Phone, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "@/components/Modal"

// Sample data for agencies
const AGENCIES_DATA = [
  {
    id: 1,
    name: "BlockChain Builders",
    title: "Web3 Development Agency",
    rating: 4.8,
    hourlyRate: 120,
    projects: 25,
    experts: 12,
    skills: ["Smart Contracts", "DeFi", "NFT", "Web3"],
    image: "/abstract-agency-logo.png",
    location: "San Francisco, CA",
    foundedYear: 2018,
    website: "blockchainbuilders.io",
    email: "contact@blockchainbuilders.io",
    phone: "+1 (555) 123-4567",
    description:
      "BlockChain Builders is a leading Web3 development agency specializing in building decentralized applications, smart contracts, and blockchain infrastructure. Our team of experts has worked with numerous startups and established companies to bring their blockchain visions to life.",
    services: [
      "Smart Contract Development",
      "DApp Development",
      "Blockchain Integration",
      "NFT Marketplace Creation",
      "Security Audits",
    ],
    clients: ["CryptoVentures", "DeFi Protocol", "NFT Collective"],
    teamMembers: [
      {
        name: "David Chen",
        role: "Founder & CEO",
        image: "/thoughtful-portrait.png",
      },
      {
        name: "Sarah Johnson",
        role: "Lead Blockchain Developer",
        image: "/diverse-group-chatting.png",
      },
      {
        name: "Michael Rodriguez",
        role: "Smart Contract Specialist",
        image: "/diverse-group-city.png",
      },
    ],
  },
  {
    id: 2,
    name: "Solana Solutions",
    title: "Blockchain Consulting Firm",
    rating: 5.0,
    hourlyRate: 150,
    projects: 42,
    experts: 18,
    skills: ["Solana", "Tokenomics", "DeFi", "Security"],
    image: "/abstract-geometric-logo.png",
    location: "New York, NY",
    foundedYear: 2020,
    website: "solanasolutions.com",
    email: "info@solanasolutions.com",
    phone: "+1 (555) 987-6543",
    description:
      "Solana Solutions is a specialized blockchain consulting firm focused on the Solana ecosystem. We provide end-to-end services from tokenomics design to full implementation of Solana-based applications and protocols.",
    services: [
      "Solana Program Development",
      "Tokenomics Design",
      "Protocol Architecture",
      "Security Audits",
      "Performance Optimization",
    ],
    clients: ["SolFi", "Solana Ventures", "Serum DEX"],
    teamMembers: [
      {
        name: "Emma Wilson",
        role: "Founder & Lead Consultant",
        image: "/diverse-group-chatting.png",
      },
      {
        name: "James Taylor",
        role: "Senior Solana Developer",
        image: "/thoughtful-portrait.png",
      },
      {
        name: "Olivia Brown",
        role: "Tokenomics Specialist",
        image: "/diverse-group-city.png",
      },
    ],
  },
  {
    id: 3,
    name: "NFT Creators Collective",
    title: "Digital Art & NFT Agency",
    rating: 4.7,
    hourlyRate: 95,
    projects: 78,
    experts: 24,
    skills: ["NFT", "Digital Art", "Marketplace", "Community"],
    image: "/abstract-geometric-logo.png",
    location: "Los Angeles, CA",
    foundedYear: 2019,
    website: "nftcreatorscollective.art",
    email: "create@nftcreatorscollective.art",
    phone: "+1 (555) 456-7890",
    description:
      "NFT Creators Collective brings together digital artists, developers, and marketers to create compelling NFT experiences. We handle everything from concept development to marketplace launch and community building.",
    services: [
      "NFT Collection Creation",
      "Marketplace Development",
      "Community Management",
      "Marketing Campaigns",
      "Artist Collaborations",
    ],
    clients: ["Digital Dreams Gallery", "CryptoArtists", "MetaCollectibles"],
    teamMembers: [
      {
        name: "Sophia Martinez",
        role: "Creative Director",
        image: "/diverse-group-chatting.png",
      },
      {
        name: "Lucas Kim",
        role: "Lead NFT Developer",
        image: "/thoughtful-portrait.png",
      },
      {
        name: "Isabella Garcia",
        role: "Community Manager",
        image: "/diverse-group-city.png",
      },
    ],
  },
  {
    id: 4,
    name: "DeFi Architects",
    title: "Financial Protocol Specialists",
    rating: 4.9,
    hourlyRate: 180,
    projects: 31,
    experts: 15,
    skills: ["DeFi", "Yield Farming", "Staking", "Lending"],
    image: "/abstract-geometric-logo.png",
    location: "Miami, FL",
    foundedYear: 2020,
    website: "defiarchitects.finance",
    email: "build@defiarchitects.finance",
    phone: "+1 (555) 789-0123",
    description:
      "DeFi Architects designs and builds cutting-edge decentralized finance protocols. Our team specializes in creating secure, efficient, and innovative DeFi solutions that maximize yield while minimizing risk.",
    services: [
      "Protocol Design & Development",
      "Yield Optimization Strategies",
      "Liquidity Pool Implementation",
      "Governance Systems",
      "Economic Model Design",
    ],
    clients: ["YieldMax Finance", "DeFi Protocol", "Staking Solutions"],
    teamMembers: [
      {
        name: "Robert Johnson",
        role: "Founder & Protocol Architect",
        image: "/thoughtful-portrait.png",
      },
      {
        name: "Amanda Lee",
        role: "Financial Engineer",
        image: "/diverse-group-chatting.png",
      },
      {
        name: "Daniel Smith",
        role: "Smart Contract Auditor",
        image: "/diverse-group-city.png",
      },
    ],
  },
]

// Available categories for filtering
const CATEGORIES = [
  "All",
  "Smart Contracts",
  "DeFi",
  "NFT",
  "Web3",
  "Solana",
  "Ethereum",
  "Security",
  "Tokenomics",
  "Digital Art",
  "Marketplace",
]

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [agencies, setAgencies] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("rating") // rating, price, projects
  const [selectedAgency, setSelectedAgency] = useState(null)
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setAgencies(AGENCIES_DATA)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter and sort agencies
  const filteredAgencies = agencies
    .filter((agency) => {
      const matchesSearch =
        searchTerm === "" ||
        agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || agency.skills.includes(selectedCategory)

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "price") return a.hourlyRate - b.hourlyRate
      if (sortBy === "projects") return b.projects - a.projects
      return 0
    })

  const clearFilters = () => {
    setSelectedCategory("All")
    setSearchTerm("")
  }

  const openAgencyModal = (agency) => {
    setSelectedAgency(agency)
    setIsAgencyModalOpen(true)
  }

  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Agencies</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for agencies, expertise, or keywords..."
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
            isFilterOpen || selectedCategory !== "All"
              ? "bg-primary text-white border-primary"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <Filter size={18} />
          <span>Filters {selectedCategory !== "All" && `(1)`}</span>
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
                <h3 className="font-bold">Filter & Sort</h3>
                {(selectedCategory !== "All" || sortBy !== "rating") && (
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Reset filters
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Sort by</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSortBy("rating")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "rating"
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      Highest Rating
                    </button>
                    <button
                      onClick={() => setSortBy("price")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "price"
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      Lowest Price
                    </button>
                    <button
                      onClick={() => setSortBy("projects")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        sortBy === "projects"
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      Most Projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <AgencyCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredAgencies.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} onViewProfile={() => openAgencyModal(agency)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">No agencies found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your search or filters</p>
          <button onClick={clearFilters} className="btn-primary inline-flex">
            Clear Filters
          </button>
        </div>
      )}

      {/* Agency Details Modal */}
      <Modal isOpen={isAgencyModalOpen} onClose={() => setIsAgencyModalOpen(false)} title="Agency Details">
        {selectedAgency && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={selectedAgency.image || "/placeholder.svg"}
                  alt={selectedAgency.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold">{selectedAgency.name}</h2>
                <p className="text-primary font-medium">{selectedAgency.title}</p>
                <div className="flex items-center justify-center sm:justify-start mt-1">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className={i < Math.floor(selectedAgency.rating) ? "" : "opacity-50"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({selectedAgency.rating})</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{selectedAgency.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-gray-400" />
                <span>Founded in {selectedAgency.foundedYear}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-gray-400" />
                <a
                  href={`https://${selectedAgency.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {selectedAgency.website}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">About</h3>
              <p className="text-gray-600 dark:text-gray-300">{selectedAgency.description}</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Services</h3>
              <ul className="space-y-1">
                {selectedAgency.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-primary mr-2 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgency.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Key Team Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedAgency.teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Notable Clients</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgency.clients.map((client, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {client}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div>
                <span className="font-bold text-lg">${selectedAgency.hourlyRate}</span>
                <span className="text-gray-500 text-sm">/hr</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-outline py-2 px-4 flex items-center gap-2">
                  <Mail size={16} />
                  Contact
                </button>
                <button className="btn-primary py-2 px-4 flex items-center gap-2">
                  <Phone size={16} />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

function AgencyCard({ agency, onViewProfile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-6 hover:border-primary transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden">
          <img src={agency.image || "/placeholder.svg"} alt={agency.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex-grow">
          <h3 className="font-bold text-lg">{agency.name}</h3>
          <p className="text-primary font-medium">{agency.title}</p>

          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className={i < Math.floor(agency.rating) ? "" : "opacity-50"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({agency.rating})</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Award size={14} />
              <span>{agency.projects}+ Projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{agency.experts} Experts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {agency.skills.map((skill) => (
            <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${agency.hourlyRate}</span>
            <span className="text-gray-500 text-sm">/hr</span>
          </div>
          <button onClick={onViewProfile} className="btn-outline text-sm py-1">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function AgencyCardSkeleton() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex-grow">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>

          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-1"></div>
              ))}
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-10"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}
