"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  Star,
  MessageSquare,
  Share2,
  Bookmark,
  Globe,
  Briefcase,
} from "lucide-react"

import FreelancerPortfolio from "@/components/profile/FreelancerPortfolio"
import FreelancerSkills from "@/components/profile/FreelancerSkills"
import FreelancerReviews from "@/components/profile/FreelancerReviews"
import FreelancerExperience from "@/components/profile/FreelancerExperience"
import FreelancerEducation from "@/components/profile/FreelancerEducation"
import FreelancerSidebar from "@/components/profile/FreelancerSidebar"
import FreelancerCardHorizontal from "@/components/FreelancerCardHorizontal"
import Container from "@/components/Container"

export default function FreelancerProfilePage() {
  const { id } = useParams()
  const [freelancer, setFreelancer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("portfolio")
  const [isSaved, setIsSaved] = useState(false)

  // In a real app, you would fetch the freelancer data from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFreelancer(sampleFreelancer)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!freelancer) {
    return (
      <div className="min-h-screen pt-20">
        <Container>
          <div className="py-12 text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Freelancer not found</h1>
            <p className="text-gray-600 dark:text-gray-400">
              The freelancer you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </Container>
      </div>
    )
  }

  const tabs = [
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills & Expertise" },
    { id: "reviews", label: "Reviews" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <Container>
          <div className="py-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Avatar and basic info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                    <div className="h-full w-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                      {freelancer.avatar ? (
                        <img
                          src={freelancer.avatar || "/placeholder.svg"}
                          alt={freelancer.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-4xl font-bold text-primary">
                          {freelancer.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  {freelancer.isVerified && (
                    <div className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full">
                      <CheckCircle size={16} />
                    </div>
                  )}
                </div>
              </div>

              {/* Name and details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{freelancer.name}</h1>
                    <p className="text-xl text-primary dark:text-primary-light">{freelancer.title}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {freelancer.location && (
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="mr-1" />
                          <span>{freelancer.location}</span>
                        </div>
                      )}

                      <div className="flex items-center text-yellow-500">
                        <Star size={16} fill="currentColor" className="mr-1" />
                        <span>{freelancer.rating}</span>
                        <span className="ml-1 text-gray-600 dark:text-gray-300">({freelancer.reviews} reviews)</span>
                      </div>

                      {freelancer.memberSince && (
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar size={16} className="mr-1" />
                          <span>Member since {freelancer.memberSince}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg"
                    >
                      <MessageSquare size={16} className="mr-2" />
                      Contact
                    </motion.button>

                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {isSaved ? (
                        <Bookmark size={16} fill="currentColor" className="text-primary" />
                      ) : (
                        <Bookmark size={16} />
                      )}
                    </button>

                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">About</h2>
                  <p className="text-gray-600 dark:text-gray-300">{freelancer.bio}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-6">
                  {freelancer.jobSuccess && (
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-green-100 dark:bg-green-900 rounded-full">
                        <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Job Success</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{freelancer.jobSuccess}%</p>
                      </div>
                    </div>
                  )}

                  {freelancer.projectsCompleted && (
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                        <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{freelancer.projectsCompleted}</p>
                      </div>
                    </div>
                  )}

                  {freelancer.languages && (
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                        <Globe size={16} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Languages</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{freelancer.languages.join(", ")}</p>
                      </div>
                    </div>
                  )}

                  {freelancer.responseTime && (
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                        <Clock size={16} className="text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                        <p className="font-semibold text-gray-800 dark:text-white">{freelancer.responseTime}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Profile Content */}
      <Container className="py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              {activeTab === "portfolio" && <FreelancerPortfolio portfolio={freelancer.portfolio || []} />}
              {activeTab === "skills" && <FreelancerSkills skills={freelancer.skills || []} />}
              {activeTab === "reviews" && (
                <FreelancerReviews reviews={freelancer.testimonials || []} rating={freelancer.rating || 0} />
              )}
              {activeTab === "experience" && <FreelancerExperience experience={freelancer.experience || []} />}
              {activeTab === "education" && <FreelancerEducation education={freelancer.education || []} />}
            </div>

            {/* Similar Freelancers */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Similar Freelancers</h2>
              <div className="space-y-4">
                {similarFreelancers.map((freelancer) => (
                  <FreelancerCardHorizontal key={freelancer.id} freelancer={freelancer} onClick={() => {}} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 order-1 lg:order-2">
            <FreelancerSidebar freelancer={freelancer} />
          </div>
        </div>
      </Container>
    </div>
  )
}

// Sample data for the profile page
const sampleFreelancer = {
  id: 1,
  name: "Alex Johnson",
  title: "Senior Blockchain Developer",
  avatar: "/avatars/alex.jpg",
  bio: "Experienced blockchain developer with 5+ years specializing in DeFi protocols and NFT marketplaces. I've worked with leading projects in the space and delivered secure, efficient solutions. My focus is on creating robust smart contracts and scalable blockchain applications that solve real-world problems.",
  rating: 4.9,
  reviews: 56,
  hourlyRate: 120,
  skills: [
    { name: "Solidity", level: 95 },
    { name: "Rust", level: 85 },
    { name: "Web3.js", level: 90 },
    { name: "React", level: 80 },
    { name: "Smart Contracts", level: 95 },
    { name: "DeFi", level: 90 },
    { name: "NFT Development", level: 85 },
    { name: "Ethereum", level: 90 },
    { name: "Solana", level: 80 },
  ],
  location: "San Francisco, CA",
  jobSuccess: 98,
  availability: "Full Time",
  projectsCompleted: 32,
  responseTime: "< 2 hours",
  languages: ["English", "Spanish"],
  memberSince: "Jan 2020",
  isVerified: true,
  portfolio: [
    {
      id: 1,
      title: "DeFi Lending Platform",
      description:
        "Built a decentralized lending protocol with $10M TVL. Implemented smart contracts for lending, borrowing, and liquidation with comprehensive security measures.",
      image: "/portfolio/defi-platform.jpg",
      link: "https://example.com/defi-platform",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat"],
      testimonial: "Alex's work on our DeFi platform was exceptional. The smart contracts were secure and efficient.",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "Developed smart contracts for a major NFT marketplace supporting ERC-721 and ERC-1155 tokens. Implemented royalty mechanisms and auction functionality.",
      image: "/portfolio/nft-marketplace.jpg",
      link: "https://example.com/nft-marketplace",
      technologies: ["Solidity", "TypeScript", "Next.js", "IPFS"],
      testimonial: "The NFT marketplace Alex built for us has processed over $2M in transactions with zero issues.",
    },
    {
      id: 3,
      title: "DAO Governance System",
      description:
        "Created a voting mechanism for a community DAO with delegation, proposal creation, and execution functionality. Implemented quadratic voting to ensure fair representation.",
      image: "/portfolio/dao-governance.jpg",
      link: "https://example.com/dao-governance",
      technologies: ["Solidity", "React", "The Graph", "Snapshot"],
      testimonial:
        "Our DAO governance system has been running smoothly thanks to Alex's well-designed smart contracts.",
    },
    {
      id: 4,
      title: "Cross-Chain Bridge",
      description:
        "Implemented a secure cross-chain bridge between Ethereum and Solana, enabling asset transfers between the two blockchains.",
      image: "/portfolio/cross-chain-bridge.jpg",
      link: "https://example.com/cross-chain-bridge",
      technologies: ["Solidity", "Rust", "Wormhole", "Anchor"],
      testimonial: "Alex's cross-chain solution has been a game-changer for our protocol's interoperability.",
    },
  ],
  experience: [
    {
      company: "DeFi Protocol Inc.",
      position: "Senior Smart Contract Developer",
      duration: "Jan 2021 - Present",
      description:
        "Leading the development of smart contracts for a DeFi lending protocol. Implemented liquidation mechanisms, interest rate models, and governance features.",
    },
    {
      company: "Blockchain Ventures",
      position: "Blockchain Developer",
      duration: "Mar 2019 - Dec 2020",
      description:
        "Developed and audited smart contracts for various DeFi and NFT projects. Worked on token standards, staking mechanisms, and automated market makers.",
    },
    {
      company: "Tech Innovations",
      position: "Software Engineer",
      duration: "Jun 2017 - Feb 2019",
      description:
        "Full-stack development with a focus on web3 integration. Built dApps and wallet connections for blockchain applications.",
    },
  ],
  education: [
    {
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      duration: "2015 - 2017",
      description: "Specialized in cryptography and distributed systems.",
    },
    {
      institution: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      duration: "2011 - 2015",
      description: "Minor in Mathematics.",
    },
  ],
  certifications: [
    {
      name: "Certified Blockchain Developer",
      issuer: "Blockchain Council",
      date: "2020",
    },
    {
      name: "Smart Contract Security Professional",
      issuer: "ConsenSys Academy",
      date: "2021",
    },
    {
      name: "Solana Certified Developer",
      issuer: "Solana Foundation",
      date: "2022",
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "Alex delivered exceptional work on our DeFi project. His deep knowledge of Solidity and security best practices was invaluable. We've already hired him for our next phase.",
      clientName: "Sarah Williams",
      clientCompany: "DeFi Protocol Inc.",
      clientAvatar: "/avatars/sarah.jpg",
      rating: 5,
      date: "Jun 2023",
    },
    {
      id: 2,
      text: "Working with Alex was a pleasure. He understood our requirements quickly and delivered a secure, well-documented smart contract system that exceeded our expectations.",
      clientName: "Michael Chen",
      clientCompany: "NFT Marketplace",
      clientAvatar: "/avatars/michael.jpg",
      rating: 5,
      date: "Mar 2023",
    },
    {
      id: 3,
      text: "Alex's expertise in both Ethereum and Solana development was exactly what we needed for our cross-chain project. Highly recommended for complex blockchain work.",
      clientName: "Emma Wilson",
      clientCompany: "Bridge Protocol",
      clientAvatar: "/avatars/emma.jpg",
      rating: 4.8,
      date: "Jan 2023",
    },
    {
      id: 4,
      text: "We hired Alex to audit our smart contracts and he identified several critical issues that could have led to significant losses. His attention to detail and security mindset are outstanding.",
      clientName: "David Kim",
      clientCompany: "Security DAO",
      clientAvatar: "/avatars/david.jpg",
      rating: 5,
      date: "Nov 2022",
    },
  ],
  services: [
    {
      title: "Smart Contract Development",
      description: "Custom smart contract development for DeFi, NFTs, DAOs, and more.",
      price: "$120/hr",
    },
    {
      title: "Smart Contract Audit",
      description: "Comprehensive security audit of your smart contracts to identify vulnerabilities.",
      price: "$150/hr",
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic advice on blockchain architecture and implementation.",
      price: "$100/hr",
    },
  ],
  availability: {
    status: "Available",
    hours: "40+ hrs/week",
    timezone: "PST (UTC-8)",
  },
}

const similarFreelancers = [
  {
    id: 2,
    name: "Sarah Williams",
    title: "Blockchain Architect",
    avatar: "/avatars/sarah.jpg",
    rating: 5.0,
    reviews: 42,
    hourlyRate: 150,
    skills: ["Architecture", "Solana", "Ethereum"],
    bio: "Designing scalable blockchain solutions for enterprise and DeFi applications.",
    location: "New York, NY",
    jobSuccess: 100,
    availability: "Full Time",
    projectsCompleted: 28,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Smart Contract Developer",
    avatar: "/avatars/michael.jpg",
    rating: 4.8,
    reviews: 38,
    hourlyRate: 110,
    skills: ["Solidity", "Rust", "Security"],
    bio: "Specialized in secure smart contract development with a focus on DeFi protocols.",
    location: "Austin, TX",
    jobSuccess: 95,
    availability: "Part Time",
    projectsCompleted: 24,
  },
]
