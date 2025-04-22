"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
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
  Clock,
  Shield,
  Zap,
  Globe,
  Code,
  Cpu,
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
        className={`absolute right-[-4px] top-0 h-full w-[2px] bg-accent-light ${currentIndex < text.length ? "animate-blink" : "opacity-0"}`}
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

export default function Home() {
  const [category, setCategory] = useState("web3")
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const categories = [
    { id: "web3", label: "Web3 Development" },
    { id: "blockchain", label: "Blockchain" },
    { id: "smart-contracts", label: "Smart Contracts" },
    { id: "nft", label: "NFT & Digital Art" },
    { id: "defi", label: "DeFi" },
    { id: "dao", label: "DAO Management" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Upwork Style with Web3 Elements */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center bg-gradient-primary overflow-hidden pt-16 md:pt-0"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-400/20 blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-green-400/10 blur-3xl"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-[30%] left-[20%] w-40 h-40 rounded-full bg-purple-400/10 blur-3xl"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>

          {/* Web3 Elements */}
          <div className="absolute top-[20%] right-[15%] opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0L49.7 28.7L80 40L49.7 51.3L40 80L30.3 51.3L0 40L30.3 28.7L40 0Z" fill="white" />
            </svg>
          </div>
          <div className="absolute bottom-[15%] left-[25%] opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="white" />
              <path d="M30 10L35 25H50L38 35L42 50L30 40L18 50L22 35L10 25H25L30 10Z" fill="rgba(0,0,0,0.2)" />
            </svg>
          </div>
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
                className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row"
              >
                <div className="flex-grow relative mb-2 md:mb-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder={`Search for ${category} experts...`}
                    className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-accent to-accent-light text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
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

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-accent/20 rounded-xl transform rotate-3"></div>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  className="glass-card rounded-xl p-6 relative z-10"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code size={24} className="text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-bold text-gray-900">Smart Contract Developer</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star size={14} fill="currentColor" className="text-yellow-500 mr-1" />
                          <span>4.9 (120 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Cpu className="w-4 h-4 mr-2 text-primary" />
                      <span>Solana, Rust, Smart Contracts</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="w-4 h-4 mr-2 text-primary" />
                      <span>5 years of Web3 experience</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Zap className="w-4 h-4 mr-2 text-primary" />
                      <span>$85/hr • 40+ hrs/week</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                        JD
                      </div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        AR
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                        TK
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-accent to-accent-light text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Profile
                    </motion.button>
                  </div>
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
            ></path>
          </svg>
        </div>
      </section>

      {/* Trusted Companies Section with Marquee */}
      <section className="py-10 px-4 bg-white">
        <div className="container">
          <p className="text-center text-gray-500 mb-6">Trusted by leading web3 companies</p>
          <Marquee speed={30}>
            <div className="flex items-center gap-16 px-4">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-100"
              >
                <Image src="/placeholder.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-100"
              >
                <Image src="/placeholder.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-100"
              >
                <Image src="/placeholder.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-100"
              >
                <Image src="/placeholder.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-12 w-32 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-500 border border-gray-100"
              >
                <Image src="/placeholder.svg" alt="Company Logo" width={80} height={30} />
              </motion.div>
            </div>
          </Marquee>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="section-title">Browse talent by category</h2>
            <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
              Browse all categories <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Smart Contract Development"
              description="1,234+ freelancers"
              icon={<Code size={24} />}
              skills={["Solana", "Rust", "Ethereum", "Solidity"]}
            />
            <CategoryCard
              title="Web3 Frontend"
              description="876+ freelancers"
              icon={<Globe size={24} />}
              skills={["React", "Next.js", "Web3.js", "ethers.js"]}
            />
            <CategoryCard
              title="Blockchain Architecture"
              description="543+ freelancers"
              icon={<Cpu size={24} />}
              skills={["Consensus", "Tokenomics", "Security"]}
            />
            <CategoryCard
              title="NFT & Digital Art"
              description="987+ freelancers"
              icon={<Image src="/placeholder.svg" alt="NFT Icon" width={24} height={24} />}
              skills={["Illustration", "3D Modeling", "Animation"]}
            />
            <CategoryCard
              title="DeFi Development"
              description="432+ freelancers"
              icon={<DollarSign size={24} />}
              skills={["Lending", "DEX", "Yield Farming"]}
            />
            <CategoryCard
              title="DAO Management"
              description="321+ freelancers"
              icon={<Users size={24} />}
              skills={["Governance", "Treasury", "Community"]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="section-title">Featured jobs</h2>
            <Link href="/jobs" className="flex items-center text-primary hover:text-primary-light font-medium">
              Browse all jobs <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard
              title="Solana Smart Contract Developer"
              budget="$2,000 - $3,500"
              duration="2-4 weeks"
              skills={["Solana", "Rust", "Smart Contracts"]}
              company="CryptoStartup Inc."
              featured={true}
            />
            <JobCard
              title="Web3 Frontend Developer"
              budget="$1,500 - $2,500"
              duration="1-2 months"
              skills={["React", "Next.js", "Web3.js"]}
              company="DeFi Protocol"
              featured={false}
            />
            <JobCard
              title="NFT Collection Designer"
              budget="$3,000 - $5,000"
              duration="1 month"
              skills={["Illustration", "NFT", "Digital Art"]}
              company="NFT Collective"
              featured={false}
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="section-title">Top rated freelancers</h2>
            <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
              View all freelancers <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FreelancerCard
              name="Alex Johnson"
              title="Smart Contract Developer"
              rating={4.9}
              hourlyRate={65}
              skills={["Solana", "Rust", "Smart Contracts"]}
            />
            <FreelancerCard
              name="Sarah Williams"
              title="Web3 Frontend Developer"
              rating={4.8}
              hourlyRate={55}
              skills={["React", "Next.js", "Web3.js"]}
            />
            <FreelancerCard
              name="Michael Chen"
              title="Blockchain Architect"
              rating={5.0}
              hourlyRate={85}
              skills={["Solana", "Ethereum", "Architecture"]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-16">How FreeLance DAO works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Post a job or find work</h3>
              <p className="text-gray-600">
                Create your profile, connect your wallet, and start browsing jobs or posting your requirements.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Collaborate securely</h3>
              <p className="text-gray-600">
                Work together with smart contract escrow protection and on-chain reputation tracking.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Get paid & build reputation</h3>
              <p className="text-gray-600">
                Receive payment in crypto or fiat and grow your verifiable on-chain reputation.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="btn-primary flex items-center bg-gradient-to-r from-accent to-accent-light px-6 py-3 rounded-full shadow-lg"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold mb-2 block">COMMUNITY OWNED</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Shape the future of freelancing with DAO governance
              </h2>
              <p className="text-gray-600 mb-6">
                Unlike traditional platforms, FreeLance DAO gives power back to the community. Vote on platform
                decisions, fee structures, and new features using our governance token.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Vote on platform upgrades and fee structures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Earn governance tokens by completing jobs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Participate in community-funded bounties</span>
                </li>
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/governance" className="btn-outline">
                  Learn about governance
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-accent/20 rounded-xl transform rotate-3"></div>
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Active Proposals</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">3 Active</span>
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

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/governance"
                    className="text-primary hover:text-primary-light font-medium flex items-center justify-center"
                  >
                    View all proposals <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Growing fast with our community</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join thousands of freelancers and clients already using FreeLance DAO to revolutionize how work gets done
              in web3.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number={1234} label="Jobs Posted" icon={<Briefcase size={24} />} />
            <StatCard number={2500000} label="Total Payouts" icon={<DollarSign size={24} />} prefix="$" />
            <StatCard number={5678} label="Active Users" icon={<Users size={24} />} />
            <StatCard number={890} label="DAO Members" icon={<Award size={24} />} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started with FreeLance DAO?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join the revolution in freelancing today and experience the power of decentralized work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/freelancers"
                className="btn-primary bg-gradient-to-r from-primary to-primary-light shadow-lg shadow-primary/20 px-6 py-3 rounded-full"
              >
                Find Talent
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="btn-secondary bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/20 px-6 py-3 rounded-full"
              >
                Start Freelancing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Category Card Component
function CategoryCard({ title, description, icon, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 text-primary font-medium text-sm flex items-center">
        Browse <ChevronRight size={14} className="ml-1" />
      </div>
    </motion.div>
  )
}

// Freelancer Card Component
function FreelancerCard({ name, title, rating, hourlyRate, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            <img src="/placeholder.svg" alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex-grow">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-primary font-medium">{title}</p>

            <div className="flex items-center mt-1 mb-2">
              <div className="flex items-center text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className={i >= Math.floor(rating) ? "opacity-50" : ""} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({rating})</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 flex justify-between items-center">
        <div>
          <span className="font-bold text-lg">${hourlyRate}</span>
          <span className="text-gray-500 text-sm">/hr</span>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-outline text-sm py-1">
          View Profile
        </motion.button>
      </div>
    </motion.div>
  )
}

// Job Card Component
function JobCard({ title, budget, duration, skills, company, featured }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all duration-300 ${
        featured ? "border-accent" : ""
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg">{title}</h3>
          {featured && (
            <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full font-medium">Featured</span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          Looking for an experienced developer to join our team and help build cutting-edge web3 applications.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>{budget}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img src="/placeholder.svg" alt={company} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium">{company}</span>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-outline text-sm py-1">
          Apply
        </motion.button>
      </div>
    </motion.div>
  )
}

// Proposal Item Component
function ProposalItem({ title, votes, daysLeft, votingPower }) {
  return (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-orange-500">{daysLeft} days left</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${votes.for}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>For: {votes.for}%</span>
        <span>Against: {votes.against}%</span>
      </div>
      <div className="mt-2 text-xs text-gray-500">Your voting power: {votingPower} tokens</div>
    </div>
  )
}

// Stat Card Component
function StatCard({ number, label, icon, prefix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(number.toString().replace(/,/g, ""))
    const duration = 2000
    const increment = end / (duration / 16) // 60fps

    if (start < end) {
      const timer = setInterval(() => {
        start += increment
        if (start > end) start = end
        setCount(Math.floor(start))
        if (start === end) clearInterval(timer)
      }, 16)

      return () => clearInterval(timer)
    }
  }, [number])

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M+"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K+"
    }
    return num.toString() + "+"
  }

  return (
    <div className="animate-fade-in">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold">
        {prefix}
        {formatNumber(count)}
      </div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  )
}
