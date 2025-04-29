"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Star, X, MapPin, Calendar, Briefcase, CheckCircle, Mail, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import VerificationBadge from "@/components/skill-verification/VerificationBadge"
import Modal from "@/components/Modal"

// Sample data for freelancers
const FREELANCERS_DATA = [
  {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    rating: 4.8,
    hourlyRate: 45,
    skills: ["React", "Node.js", "Solana", "Web3"],
    image: "/thoughtful-portrait.png",
    verified: true,
    location: "San Francisco, CA",
    memberSince: "January 2022",
    completedProjects: 32,
    bio: "Full stack developer with 5+ years of experience in web and blockchain development. Specialized in building decentralized applications and integrating Web3 technologies.",
    languages: ["English (Native)", "Spanish (Fluent)"],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "Stanford University",
        year: "2018",
      },
    ],
    verifiedSkills: ["React", "Solana"],
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Smart Contract Developer",
    rating: 5.0,
    hourlyRate: 65,
    skills: ["Solidity", "Rust", "Smart Contracts", "DeFi"],
    image: "/diverse-group-chatting.png",
    verified: false,
    location: "New York, NY",
    memberSince: "March 2021",
    completedProjects: 47,
    bio: "Blockchain expert specializing in smart contract development. Experienced in DeFi protocols, NFT marketplaces, and DAO governance systems.",
    languages: ["English (Native)", "French (Intermediate)"],
    education: [
      {
        degree: "M.S. Computer Engineering",
        institution: "MIT",
        year: "2020",
      },
    ],
    verifiedSkills: ["Solidity", "DeFi"],
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "UI/UX Designer",
    rating: 4.7,
    hourlyRate: 40,
    skills: ["Figma", "UI/UX", "Web Design", "Mobile Design"],
    image: "/diverse-group-chatting.png",
    verified: true,
    location: "Austin, TX",
    memberSince: "June 2022",
    completedProjects: 18,
    bio: "Creative UI/UX designer with a passion for creating intuitive and engaging user experiences. Specialized in designing interfaces for Web3 applications.",
    languages: ["English (Native)"],
    education: [
      {
        degree: "B.A. Design",
        institution: "Rhode Island School of Design",
        year: "2021",
      },
    ],
    verifiedSkills: ["UI/UX", "Web Design"],
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "Blockchain Architect",
    rating: 4.9,
    hourlyRate: 75,
    skills: ["Ethereum", "Solana", "Architecture", "Security"],
    image: "/diverse-group-chatting.png",
    verified: false,
    location: "London, UK",
    memberSince: "February 2020",
    completedProjects: 56,
    bio: "Blockchain architect with expertise in designing secure and scalable blockchain systems. Experience with multiple blockchain platforms and consensus mechanisms.",
    languages: ["English (Native)", "German (Fluent)"],
    education: [
      {
        degree: "Ph.D. Computer Science",
        institution: "University of Cambridge",
        year: "2019",
      },
    ],
    verifiedSkills: ["Ethereum", "Security"],
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "NFT Developer",
    rating: 4.6,
    hourlyRate: 55,
    skills: ["NFT", "ERC-721", "Marketplace", "Digital Art"],
    image: "/diverse-group-city.png",
    verified: true,
    location: "Vancouver, Canada",
    memberSince: "April 2021",
    completedProjects: 29,
    bio: "NFT developer specializing in creating and implementing NFT collections and marketplaces. Experienced in working with digital artists and creators.",
    languages: ["English (Fluent)", "Mandarin (Native)"],
    education: [
      {
        degree: "B.S. Software Engineering",
        institution: "University of British Columbia",
        year: "2020",
      },
    ],
    verifiedSkills: ["NFT", "ERC-721"],
  },
  {
    id: 6,
    name: "Emily Davis",
    title: "DeFi Specialist",
    rating: 4.8,
    hourlyRate: 60,
    skills: ["DeFi", "Yield Farming", "Staking", "Tokenomics"],
    image: "/diverse-group-city.png",
    verified: true,
    location: "Berlin, Germany",
    memberSince: "August 2021",
    completedProjects: 24,
    bio: "DeFi specialist with deep knowledge of decentralized finance protocols and tokenomics. Experienced in designing and implementing yield farming and staking mechanisms.",
    languages: ["English (Fluent)", "German (Native)"],
    education: [
      {
        degree: "M.S. Financial Engineering",
        institution: "Technical University of Berlin",
        year: "2019",
      },
    ],
    verifiedSkills: ["DeFi", "Tokenomics"],
  },
]

// Available skills for filtering
const AVAILABLE_SKILLS = [
  "React",
  "Node.js",
  "Solana",
  "Web3",
  "Solidity",
  "Rust",
  "Smart Contracts",
  "DeFi",
  "Figma",
  "UI/UX",
  "Web Design",
  "Mobile Design",
  "Ethereum",
  "Architecture",
  "Security",
  "NFT",
  "ERC-721",
  "Marketplace",
  "Digital Art",
  "Yield Farming",
  "Staking",
  "Tokenomics",
]

export default function Freelancers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkills, setSelectedSkills] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [freelancers, setFreelancers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false)
  const [selectedFreelancer, setSelectedFreelancer] = useState(null)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setFreelancers(FREELANCERS_DATA)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter freelancers based on search term and selected skills
  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesSearch =
      searchTerm === "" ||
      freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesSkills =
      selectedSkills.length === 0 || selectedSkills.every((skill) => freelancer.skills.includes(skill))

    const matchesVerified = showVerifiedOnly ? freelancer.verified : true

    return matchesSearch && matchesSkills && matchesVerified
  })

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const clearFilters = () => {
    setSelectedSkills([])
    setSearchTerm("")
    setShowVerifiedOnly(false)
  }

  const openProfileModal = (freelancer) => {
    setSelectedFreelancer(freelancer)
    setIsProfileModalOpen(true)
  }

  return (
    <div className="p-4 md:p-6 pt-24">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Freelancers</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for skills, expertise, or keywords..."
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
            isFilterOpen || selectedSkills.length > 0
              ? "bg-primary text-white border-primary"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <Filter size={18} />
          <span>Filters {selectedSkills.length > 0 && `(${selectedSkills.length})`}</span>
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
                <h3 className="font-bold">Filter by Skills</h3>
                {(selectedSkills.length > 0 || showVerifiedOnly) && (
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Clear all filters
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {AVAILABLE_SKILLS.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedSkills.includes(skill)
                        ? "bg-primary text-white"
                        : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>

              <div className="border-t pt-4 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showVerifiedOnly}
                    onChange={() => setShowVerifiedOnly(!showVerifiedOnly)}
                    className="rounded text-primary"
                  />
                  <span>Show verified freelancers only</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Filters */}
      {(selectedSkills.length > 0 || showVerifiedOnly) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedSkills.map((skill) => (
            <div key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
              {skill}
              <button onClick={() => toggleSkill(skill)} className="ml-2 hover:bg-primary/20 rounded-full">
                <X size={14} />
              </button>
            </div>
          ))}
          {showVerifiedOnly && (
            <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm flex items-center">
              Verified Only
              <button
                onClick={() => setShowVerifiedOnly(false)}
                className="ml-2 hover:bg-green-200 dark:hover:bg-green-800/50 rounded-full"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <FreelancerCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredFreelancers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <FreelancerCard
              key={freelancer.id}
              freelancer={freelancer}
              onViewProfile={() => openProfileModal(freelancer)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">No freelancers found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your search or filters</p>
          <button onClick={clearFilters} className="btn-primary inline-flex">
            Clear Filters
          </button>
        </div>
      )}

      {/* Freelancer Profile Modal */}
      <Modal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="Freelancer Profile">
        {selectedFreelancer && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={selectedFreelancer.image || "/placeholder.svg"}
                  alt={selectedFreelancer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-xl font-bold">{selectedFreelancer.name}</h2>
                  {selectedFreelancer.verified && <VerificationBadge status="verified" />}
                </div>
                <p className="text-primary font-medium">{selectedFreelancer.title}</p>
                <div className="flex items-center justify-center sm:justify-start mt-1">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className={i < Math.floor(selectedFreelancer.rating) ? "" : "opacity-50"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({selectedFreelancer.rating})</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{selectedFreelancer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span>Member since {selectedFreelancer.memberSince}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-gray-400" />
                <span>{selectedFreelancer.completedProjects} projects completed</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">About</h3>
              <p className="text-gray-600 dark:text-gray-300">{selectedFreelancer.bio}</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedFreelancer.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  >
                    <span>{skill}</span>
                    {selectedFreelancer.verifiedSkills.includes(skill) && (
                      <CheckCircle size={14} className="text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {selectedFreelancer.languages.map((language, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Education</h3>
              <div className="space-y-2">
                {selectedFreelancer.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-500">
                      {edu.institution}, {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div>
                <span className="font-bold text-lg">${selectedFreelancer.hourlyRate}</span>
                <span className="text-gray-500 text-sm">/hr</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-outline py-2 px-4 flex items-center gap-2">
                  <Mail size={16} />
                  Contact
                </button>
                <button className="btn-primary py-2 px-4 flex items-center gap-2">
                  <ExternalLink size={16} />
                  Hire Now
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

function FreelancerCard({ freelancer, onViewProfile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-6 hover:border-primary transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={freelancer.image || "/placeholder.svg"}
            alt={freelancer.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{freelancer.name}</h3>
            {freelancer.verified && <VerificationBadge status="verified" size="sm" />}
          </div>
          <p className="text-primary font-medium">{freelancer.title}</p>

          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className={i < Math.floor(freelancer.rating) ? "" : "opacity-50"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({freelancer.rating})</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {freelancer.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded flex items-center gap-1"
              >
                {skill}
                {freelancer.verifiedSkills && freelancer.verifiedSkills.includes(skill) && (
                  <CheckCircle size={12} className="text-green-500" />
                )}
              </span>
            ))}
            {freelancer.skills.length > 3 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                +{freelancer.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${freelancer.hourlyRate}</span>
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

function FreelancerCardSkeleton() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>

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

          <div className="flex flex-wrap gap-2 mt-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}
