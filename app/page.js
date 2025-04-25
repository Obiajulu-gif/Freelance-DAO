"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import Modal from "@/components/Modal"
import {
  Search,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  DollarSign,
  Award,
  Briefcase,
  Shield,
  Code,
} from "lucide-react"

// Typewriter effect component
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 40) // Speed of typing

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className="relative">
      {displayText}
      <span
        className={`absolute right-[-4px] top-0 h-full w-[2px] bg-accent-light ${
          currentIndex < text.length ? "animate-blink" : "opacity-0"
        }`}
      ></span>
    </span>
  )
}

// Marquee component
const Marquee = ({ children, speed = 30 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div className="animate-marquee inline-block" style={{ animationDuration: `${speed}s` }}>
        {children}
      </div>
      <div className="animate-marquee2 inline-block absolute top-0" style={{ animationDuration: `${speed}s` }}>
        {children}
      </div>
    </div>
  )
}

// Custom hook to replace react-intersection-observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)

        // If we only want to trigger once and it's in view, unobserve
        if (options.triggerOnce && entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.rootMargin, options.triggerOnce])

  return [ref, isInView]
}

// Animation for sections
const FadeInWhenVisible = ({ children, delay = 0, direction = null }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  )
}

// Category Card Component
function CategoryCard({ title, description, icon, skills, onClick }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Job Card Component
function JobCard({ title, budget, duration, skills, company, featured, onClick }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border ${
        featured ? "border-primary" : "dark:border-gray-700"
      } overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-40 bg-gray-100 dark:bg-gray-800 relative">
        <img src="/placeholder.svg?height=160&width=400" alt="Job" className="w-full h-full object-cover" />
        {featured && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{budget}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <span className="text-sm font-medium">{company}</span>
          <button className="btn-outline text-sm py-1 px-3">Apply</button>
        </div>
      </div>
    </motion.div>
  )
}

// Freelancer Card Component
function FreelancerCard({ name, title, rating, hourlyRate, skills, onClick }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img src="/placeholder.svg?height=64&width=64" alt="Freelancer" className="w-full h-full object-cover" />
        </div>

        <div className="flex-grow">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-primary font-medium">{title}</p>

          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className={i < Math.floor(rating) ? "" : "opacity-50"} />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">({rating})</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${hourlyRate}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">/hr</span>
          </div>
          <button className="btn-outline text-sm py-1 px-3">View Profile</button>
        </div>
      </div>
    </motion.div>
  )
}

// Proposal Item Component
function ProposalItem({ title, votes, daysLeft, votingPower }) {
  return (
    <div className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
      <div className="flex justify-between mb-1">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-primary">{daysLeft} days left</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
        <div className="bg-primary h-2 rounded-full" style={{ width: `${votes.for}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>For: {votes.for}%</span>
        <span>Against: {votes.against}%</span>
      </div>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Your voting power: {votingPower} tokens</div>
    </div>
  )
}

// Stat Card Component
function StatCard({ number, label, icon, prefix = "" }) {
  const formattedNumber =
    number >= 1000000 ? `${(number / 1000000).toFixed(1)}M` : number >= 1000 ? `${(number / 1000).toFixed(1)}K` : number

  return (
    <div className="text-white">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1">
        {prefix}
        {formattedNumber}
      </div>
      <p className="text-white/80">{label}</p>
    </div>
  )
}

// Clock icon component (missing from lucide-react import)
function Clock({ size = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

export default function Home() {
  const [category, setCategory] = useState("web3")
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const categories = [
    {
      id: "web3",
      label: "Web3 Development",
      icon: <Code size={24} />,
      description: "1,234+ freelancers",
      skills: ["React", "Next.js", "Web3.js", "ethers.js"],
    },
    {
      id: "blockchain",
      label: "Blockchain",
      icon: <Image src="/blockchain-icon.svg" width={24} height={24} alt="Blockchain Icon" />,
      description: "876+ freelancers",
      skills: ["Consensus", "Tokenomics", "Security", "Architecture"],
    },
    {
      id: "smart-contracts",
      label: "Smart Contracts",
      icon: <Image src="/smart-contract-icon.svg" width={24} height={24} alt="Smart Contract Icon" />,
      description: "543+ freelancers",
      skills: ["Solidity", "Rust", "Auditing", "Security"],
    },
    {
      id: "nft",
      label: "NFT & Digital Art",
      icon: <Image src="/nft-icon.svg" width={24} height={24} alt="NFT Icon" />,
      description: "987+ freelancers",
      skills: ["Illustration", "3D Modeling", "Animation", "Minting"],
    },
    {
      id: "defi",
      label: "DeFi",
      icon: <Image src="/defi-icon.svg" width={24} height={24} alt="DeFi Icon" />,
      description: "432+ freelancers",
      skills: ["Lending", "DEX", "Yield Farming", "Staking"],
    },
    {
      id: "dao",
      label: "DAO Management",
      icon: <Image src="/dao-icon.svg" width={24} height={24} alt="DAO Icon" />,
      description: "321+ freelancers",
      skills: ["Governance", "Treasury", "Community", "Voting"],
    },
  ]

  const openCategoryModal = (category) => {
    setSelectedCategory(category)
    setIsJobModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Upwork Style with Web3 Elements */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center bg-gradient-primary overflow-hidden pt-16 md:pt-0"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-green-400/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute top-[30%] left-[20%] w-40 h-40 rounded-full bg-purple-400/10 blur-3xl"
          />

          {/* Web3 Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-[20%] right-[15%] opacity-20"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0L49.7 28.7L80 40L49.7 51.3L40 80L30.3 51.3L0 40L30.3 28.7L40 0Z" fill="white" />
            </svg>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-[15%] left-[25%] opacity-20"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="white" />
              <path d="M30 10L35 25H50L38 35L42 50L30 40L18 50L22 35L10 25H25L30 10Z" fill="rgba(0,0,0,0.2)" />
            </svg>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container relative z-10 pt-20 md:pt-0"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Find the perfect <span className="text-accent-light">web3 talent</span> for your project
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 text-white/90 max-w-lg h-16 md:h-auto"
              >
                <TypewriterText text="The first decentralized freelancing platform built on Solana, where talent and opportunity connect." />
              </motion.p>

              {/* Talent Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`category-option px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        category === cat.id
                          ? "bg-white text-primary shadow-lg"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {cat.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 flex flex-col md:flex-row"
              >
                <div className="flex-grow relative mb-2 md:mb-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder={`Search for ${category} experts...`}
                    className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px rgba(0, 200, 83, 0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-accent to-accent-light text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
                  onClick={() => setIsJobModalOpen(true)}
                >
                  Find Talent
                </motion.button>
              </motion.div>

              {/* Popular Searches */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-2 mt-4"
              >
                <span className="text-sm text-white/70">Popular:</span>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-accent-light underline underline-offset-2 transition-colors duration-300"
                >
                  Smart Contract
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-accent-light underline underline-offset-2 transition-colors duration-300"
                >
                  Solana Developer
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-accent-light underline underline-offset-2 transition-colors duration-300"
                >
                  Web3 Design
                </Link>
              </motion.div>
            </div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="hero-illustration">
                <div className="hero-illustration-bg"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/hero-illustration.svg"
                    alt="FreeLance DAO Illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
              fill="white"
              className="dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* Trusted Companies Section with Marquee */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="container">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6">Trusted by leading web3 companies</p>
          <Marquee speed={30}>
            <div className="flex items-center gap-16 px-4">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
              >
                <Image src="/logo.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
              >
                <Image src="/web3-icon.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
              >
                <Image src="/nft-icon.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
              >
                <Image src="/defi-icon.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
              >
                <Image src="/dao-icon.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
            </div>
          </Marquee>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <FadeInWhenVisible direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="section-title">Browse talent by category</h2>
              <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
                Browse all categories <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <FadeInWhenVisible key={cat.id} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <CategoryCard
                  title={cat.label}
                  description={cat.description}
                  icon={cat.icon}
                  skills={cat.skills}
                  onClick={() => openCategoryModal(cat)}
                />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <FadeInWhenVisible direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="section-title">Featured jobs</h2>
              <Link href="/jobs" className="flex items-center text-primary hover:text-primary-light font-medium">
                Browse all jobs <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1} direction="up">
              <JobCard
                title="Solana Smart Contract Developer"
                budget="$2,000 - $3,500"
                duration="2-4 weeks"
                skills={["Solana", "Rust", "Smart Contracts"]}
                company="CryptoStartup Inc."
                featured={true}
                onClick={() => setIsJobModalOpen(true)}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} direction="up">
              <JobCard
                title="Web3 Frontend Developer"
                budget="$1,500 - $2,500"
                duration="1-2 months"
                skills={["React", "Next.js", "Web3.js"]}
                company="DeFi Protocol"
                featured={false}
                onClick={() => setIsJobModalOpen(true)}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3} direction="up">
              <JobCard
                title="NFT Collection Designer"
                budget="$3,000 - $5,000"
                duration="1 month"
                skills={["Illustration", "NFT", "Digital Art"]}
                company="NFT Collective"
                featured={false}
                onClick={() => setIsJobModalOpen(true)}
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <FadeInWhenVisible direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="section-title">Top rated freelancers</h2>
              <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
                View all freelancers <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1} direction="up">
              <FreelancerCard
                name="Alex Johnson"
                title="Smart Contract Developer"
                rating={4.9}
                hourlyRate={65}
                skills={["Solana", "Rust", "Smart Contracts"]}
                onClick={() => setIsContactModalOpen(true)}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} direction="up">
              <FreelancerCard
                name="Sarah Williams"
                title="Web3 Frontend Developer"
                rating={4.8}
                hourlyRate={55}
                skills={["React", "Next.js", "Web3.js"]}
                onClick={() => setIsContactModalOpen(true)}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3} direction="up">
              <FreelancerCard
                name="Michael Chen"
                title="Blockchain Architect"
                rating={5.0}
                hourlyRate={85}
                skills={["Solana", "Ethereum", "Architecture"]}
                onClick={() => setIsContactModalOpen(true)}
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <FadeInWhenVisible direction="up">
            <h2 className="section-title text-center mb-16">How FreeLance DAO works</h2>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1} direction="up">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6"
                >
                  <Users size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">1. Post a job or find work</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create your profile, connect your wallet, and start browsing jobs or posting your requirements.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} direction="up">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6"
                >
                  <Shield size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">2. Collaborate securely</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work together with smart contract escrow protection and on-chain reputation tracking.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3} direction="up">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6"
                >
                  <Award size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">3. Get paid & build reputation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive payment in crypto or fiat and grow your verifiable on-chain reputation.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="flex justify-center mt-12">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                onClick={(e) => {
                  e.preventDefault()
                  setIsSignupModalOpen(true)
                }}
                className="get-started-btn btn-primary flex items-center bg-gradient-to-r from-accent to-accent-light px-6 py-3 rounded-full shadow-lg"
              >
                <span className="relative z-10">Get Started</span>{" "}
                <ArrowRight size={16} className="ml-2 relative z-10" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible direction="left">
              <div>
                <span className="text-accent font-semibold mb-2 block">COMMUNITY OWNED</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Shape the future of freelancing with DAO governance
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Unlike traditional platforms, FreeLance DAO gives power back to the community. Vote on platform
                  decisions, fee structures, and new features using our governance token.
                </p>
                <ul className="space-y-4 mb-8">
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Vote on platform upgrades and fee structures</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Earn governance tokens by completing jobs</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Participate in community-funded bounties</span>
                  </motion.li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/governance"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsLoginModalOpen(true)
                    }}
                    className="btn-outline"
                  >
                    Learn about governance
                  </Link>
                </motion.div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} direction="right">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-accent/20 rounded-xl"
                />
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Active Proposals</h3>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                      3 Active
                    </span>
                  </div>

                  <div className="space-y-4">
                    <ProposalItem
                      title="Reduce platform fees by 1%"
                      votes={{ for: 68, against: 32 }}
                      daysLeft={2}
                      votingPower={1240}
                    />
                    <ProposalItem
                      title="Add support for Ethereum chain"
                      votes={{ for: 82, against: 18 }}
                      daysLeft={5}
                      votingPower={980}
                    />
                    <ProposalItem
                      title="Implement skill verification system"
                      votes={{ for: 95, against: 5 }}
                      daysLeft={1}
                      votingPower={1560}
                    />
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href="/governance"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsLoginModalOpen(true)
                      }}
                      className="text-primary hover:text-primary-light font-medium flex items-center justify-center"
                    >
                      View all proposals <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 stats-section relative overflow-hidden">
        <div className="container relative z-10">
          <FadeInWhenVisible direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Growing fast with our community</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join thousands of freelancers and clients already using FreeLance DAO to revolutionize how work gets
                done in web3.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeInWhenVisible delay={0.1} direction="up">
              <div className="stat-card">
                <StatCard number={1234} label="Jobs Posted" icon={<Briefcase size={24} className="text-white" />} />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} direction="up">
              <div className="stat-card">
                <StatCard
                  number={2500000}
                  label="Total Payouts"
                  icon={<DollarSign size={24} className="text-white" />}
                  prefix="$"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3} direction="up">
              <div className="stat-card">
                <StatCard number={5678} label="Active Users" icon={<Users size={24} className="text-white" />} />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4} direction="up">
              <div className="stat-card">
                <StatCard number={890} label="DAO Members" icon={<Award size={24} className="text-white" />} />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started with FreeLance DAO?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Join the revolution in freelancing today and experience the power of decentralized work.
            </p>
          </FadeInWhenVisible>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FadeInWhenVisible delay={0.1} direction="left">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/freelancers"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsJobModalOpen(true)
                  }}
                  className="btn-primary bg-gradient-to-r from-primary to-primary-light shadow-lg shadow-primary/20 px-6 py-3 rounded-full"
                >
                  Find Talent
                </Link>
              </motion.div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} direction="right">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/register"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsSignupModalOpen(true)
                  }}
                  className="btn-secondary bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/20 px-6 py-3 rounded-full"
                >
                  Start Freelancing
                </Link>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} title="Log In to FreeLance DAO">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email or Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email or username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-2 px-4 rounded-lg">
            Log In
          </button>
          <div className="text-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">Don't have an account?</span>{" "}
            <button
              className="text-primary hover:underline"
              onClick={() => {
                setIsLoginModalOpen(false)
                setIsSignupModalOpen(true)
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                  fill="currentColor"
                />
              </svg>
              <span>GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.19 18.63 6.8 16.69 5.95 14.1H2.27V16.96C4.08 20.57 7.77 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.95 14.1C5.75 13.47 5.63 12.79 5.63 12.09C5.63 11.39 5.75 10.71 5.95 10.08V7.22H2.27C1.54 8.66 1.11 10.3 1.11 12.09C1.11 13.88 1.54 15.52 2.27 16.96L5.95 14.1Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.55C13.5 5.55 14.84 6.06 15.89 7.06L19.05 3.9C17.46 2.42 14.97 1.5 12 1.5C7.77 1.5 4.08 3.93 2.27 7.54L5.95 10.4C6.8 7.81 9.19 5.55 12 5.55Z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google</span>
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} title="Sign Up for FreeLance DAO">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="First name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">I want to...</label>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 flex flex-col items-center">
                <Briefcase className="mb-2 text-primary" />
                <span className="font-medium">Hire for a project</span>
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 flex flex-col items-center">
                <Users className="mb-2 text-primary" />
                <span className="font-medium">Work as a freelancer</span>
              </button>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>
          <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white font-bold py-2 px-4 rounded-lg">
            Create Account
          </button>
          <div className="text-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">Already have an account?</span>{" "}
            <button
              className="text-primary hover:underline"
              onClick={() => {
                setIsSignupModalOpen(false)
                setIsLoginModalOpen(true)
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Contact Freelancer">
        <div className="flex items-center gap-4 mb-4 pb-4 border-b dark:border-gray-700">
          <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img src="/placeholder.svg?height=64&width=64" alt="Freelancer" className="w-full h-full object-cover" />
          </div>

          <div>
            <h4 className="font-bold">Alex Johnson</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Smart Contract Developer</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white font-bold py-2 px-4 rounded-lg">
            Send Message
          </button>
        </div>
      </Modal>

      <Modal isOpen={isJobModalOpen} onClose={() => setIsJobModalOpen(false)} title="Find Web3 Talent">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Web3 Development</option>
              <option>Blockchain</option>
              <option>Smart Contracts</option>
              <option>NFT & Digital Art</option>
              <option>DeFi</option>
              <option>DAO Management</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Skills</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter required skills (e.g., React, Solidity)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your budget"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-2 px-4 rounded-lg">
            Post Job
          </button>
        </div>
      </Modal>
    </div>
  )
}
