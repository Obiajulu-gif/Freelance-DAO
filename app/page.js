"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
  ChevronLeft,
  ChevronDown,
  Clock,
} from "lucide-react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "FreeLance DAO has transformed how I find work. The on-chain reputation system means clients trust me from day one.",
      author: "Alex Johnson",
      role: "Smart Contract Developer",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      quote: "As a client, I love the escrow protection. It gives me confidence when hiring new freelancers.",
      author: "Sarah Williams",
      role: "Startup Founder",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      quote: "The DAO governance is revolutionary. For the first time, I have a say in how the platform evolves.",
      author: "Michael Chen",
      role: "UI/UX Designer",
      rating: 4,
      image: "/placeholder.svg",
    },
    {
      quote: "Getting paid in crypto is seamless. The platform handles all the complexity for me.",
      author: "Emma Rodriguez",
      role: "Content Creator",
      rating: 5,
      image: "/placeholder.svg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Animated Elements */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="flex flex-col items-center text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Find the perfect <span className="text-accent">web3 talent</span> for your project
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl mb-8 max-w-2xl text-white/80">
              The first decentralized freelancing platform built on Solana, where talent and opportunity connect.
            </motion.p>

            {/* Animated Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row"
            >
              <div className="flex-grow relative mb-2 md:mb-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for any skill or service..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Find Talent
              </motion.button>
            </motion.div>

            {/* Popular Searches */}
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-2 mt-4 text-white">
              <span className="text-sm">Popular:</span>
              <Link href="#" className="text-sm hover:text-accent underline underline-offset-2">
                Smart Contract
              </Link>
              <Link href="#" className="text-sm hover:text-accent underline underline-offset-2">
                Solana Developer
              </Link>
              <Link href="#" className="text-sm hover:text-accent underline underline-offset-2">
                Web3 Design
              </Link>
              <Link href="#" className="text-sm hover:text-accent underline underline-offset-2">
                NFT Artist
              </Link>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>

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

      {/* Trusted By Section with Logo Animation */}
      <AnimatedSection>
        <div className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 mb-6">Trusted by leading web3 companies</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500"
              >
                Logo 1
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500"
              >
                Logo 2
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500"
              >
                Logo 3
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500"
              >
                Logo 4
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                className="h-10 w-28 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500"
              >
                Logo 5
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Jobs Section */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                Featured jobs
              </motion.h2>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Link href="/jobs" className="flex items-center text-primary hover:text-primary-light font-medium">
                  Browse all jobs <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
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
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Browse Categories - With Animated Cards */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse talent by category</h2>
              <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
                Browse all categories <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <CategoryCard
                title="Smart Contract Development"
                description="1,234+ freelancers"
                icon={<CodeIcon />}
                index={0}
              />
              <CategoryCard title="Web3 Frontend" description="876+ freelancers" icon={<DesignIcon />} index={1} />
              <CategoryCard
                title="Blockchain Architecture"
                description="543+ freelancers"
                icon={<ArchitectureIcon />}
                index={2}
              />
              <CategoryCard title="NFT & Digital Art" description="987+ freelancers" icon={<ArtIcon />} index={3} />
              <CategoryCard title="DeFi Development" description="432+ freelancers" icon={<DefiIcon />} index={4} />
              <CategoryCard title="Web3 Marketing" description="765+ freelancers" icon={<MarketingIcon />} index={5} />
              <CategoryCard title="Technical Writing" description="321+ freelancers" icon={<WritingIcon />} index={6} />
              <CategoryCard
                title="Community Management"
                description="654+ freelancers"
                icon={<CommunityIcon />}
                index={7}
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Freelancers - With Animated Cards */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top rated freelancers</h2>
              <Link href="/freelancers" className="flex items-center text-primary hover:text-primary-light font-medium">
                View all freelancers <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <FreelancerCard
                name="Alex Johnson"
                title="Smart Contract Developer"
                rating={4.9}
                hourlyRate={65}
                skills={["Solana", "Rust", "Smart Contracts"]}
                index={0}
              />
              <FreelancerCard
                name="Sarah Williams"
                title="Web3 Frontend Developer"
                rating={4.8}
                hourlyRate={55}
                skills={["React", "Next.js", "Web3.js"]}
                index={1}
              />
              <FreelancerCard
                name="Michael Chen"
                title="Blockchain Architect"
                rating={5.0}
                hourlyRate={85}
                skills={["Solana", "Ethereum", "Architecture"]}
                index={2}
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works - With Animated Icons */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">How FreeLance DAO works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <HowItWorksCard
                icon={<Users size={28} />}
                step={1}
                title="Post a job or find work"
                description="Create your profile, connect your wallet, and start browsing jobs or posting your requirements."
              />
              <HowItWorksCard
                icon={<Briefcase size={28} />}
                step={2}
                title="Collaborate securely"
                description="Work together with smart contract escrow protection and on-chain reputation tracking."
              />
              <HowItWorksCard
                icon={<Award size={28} />}
                step={3}
                title="Get paid & build reputation"
                description="Receive payment in crypto or fiat and grow your verifiable on-chain reputation."
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/register"
                  className="btn-primary flex items-center bg-gradient-to-r from-primary to-primary-light"
                >
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* DAO Governance Feature - With Animated Elements */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-semibold mb-2 block">COMMUNITY OWNED</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Shape the future of freelancing with DAO governance
                </h2>
                <p className="text-gray-600 mb-6">
                  Unlike traditional platforms, FreeLance DAO gives power back to the community. Vote on platform
                  decisions, fee structures, and new features using our governance token.
                </p>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                  className="space-y-3 mb-8"
                >
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>Vote on platform upgrades and fee structures</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>Earn governance tokens by completing jobs</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>Participate in community-funded bounties</span>
                  </motion.li>
                </motion.ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/governance" className="btn-outline">
                    Learn about governance
                  </Link>
                </motion.div>
              </motion.div>

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
      </AnimatedSection>

      {/* Stats Section - With Animated Counters */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Growing fast with our community</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join thousands of freelancers and clients already using FreeLance DAO to revolutionize how work gets
                done in web3.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <AnimatedCounter number={1234} label="Jobs Posted" icon={<Briefcase size={24} />} />
              <AnimatedCounter number={2500000} label="Total Payouts" icon={<DollarSign size={24} />} prefix="$" />
              <AnimatedCounter number={5678} label="Active Users" icon={<Users size={24} />} />
              <AnimatedCounter number={890} label="DAO Members" icon={<Award size={24} />} />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials - Carousel */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">What our users say</h2>

            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl shadow-sm border p-6 md:p-8"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${
                              i < testimonials[currentTestimonial].rating ? "text-yellow-500" : "text-gray-300"
                            } mr-1`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-gray-600 text-lg italic">"{testimonials[currentTestimonial].quote}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                          <img
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].author}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{testimonials[currentTestimonial].author}</div>
                          <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex justify-center mt-6 space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            currentTestimonial === index ? "bg-primary" : "bg-gray-300"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                            <Users size={16} />
                          </div>
                          <h3 className="font-bold">Community</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Join a thriving community of web3 professionals and enthusiasts.
                        </p>
                      </motion.div>

                      <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-2">
                            <Shield />
                          </div>
                          <h3 className="font-bold">Security</h3>
                        </div>
                        <p className="text-sm text-gray-600">Smart contract escrow protection for all transactions.</p>
                      </motion.div>

                      <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                            <Award size={16} />
                          </div>
                          <h3 className="font-bold">Reputation</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Build a verifiable on-chain reputation that follows you.
                        </p>
                      </motion.div>

                      <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-2">
                            <DollarSign size={16} />
                          </div>
                          <h3 className="font-bold">Payments</h3>
                        </div>
                        <p className="text-sm text-gray-600">Get paid in crypto or fiat with no hassle.</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary"
                >
                  <ChevronLeft size={16} />
                </motion.button>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary"
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section with Animation */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-60 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Ready to get started with FreeLance DAO?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 max-w-xl mx-auto"
            >
              Join the revolution in freelancing today and experience the power of decentralized work.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/freelancers"
                  className="btn-primary bg-gradient-to-r from-primary to-primary-light shadow-lg shadow-primary/20"
                >
                  Find Talent
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/register"
                  className="btn-secondary bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/20"
                >
                  Start Freelancing
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

// Animated Section Component
function AnimatedSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

// Animated Counter Component
function AnimatedCounter({ number, label, icon, prefix = "" }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(number.toString().replace(/,/g, ""))
    const duration = 2000
    const increment = end / (duration / 16) // 60fps

    if (inView && start < end) {
      const timer = setInterval(() => {
        start += increment
        if (start > end) start = end
        setCount(Math.floor(start))
        if (start === end) clearInterval(timer)
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M+"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K+"
    }
    return num.toString() + "+"
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in"
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold">
        {prefix}
        {formatNumber(count)}
      </div>
      <div className="text-sm opacity-80">{label}</div>
    </motion.div>
  )
}

// Category Card Component
function CategoryCard({ title, description, icon, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } },
      }}
    >
      <Link
        href="#"
        className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 flex flex-col h-full"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-primary mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-4 text-primary font-medium text-sm flex items-center mt-auto">
          Browse <ChevronRight size={14} className="ml-1" />
        </div>
      </Link>
    </motion.div>
  )
}

// Freelancer Card Component
function FreelancerCard({ name, title, rating, hourlyRate, skills, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } },
      }}
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
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
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

// How It Works Card Component
function HowItWorksCard({ icon, step, title, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: step * 0.2, duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ delay: step * 0.2 + 0.2, duration: 0.5, type: "spring" }}
        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">
        {step}. {title}
      </h3>
      <p className="text-gray-600">{description}</p>
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

// Shield Icon Component
function Shield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
}

// Simple icon components
function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      <path d="M2 2l7.586 7.586"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  )
}

function ArchitectureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
      <path d="M12 20v-8"></path>
      <path d="M17 20V8"></path>
      <path d="M22 4v16"></path>
    </svg>
  )
}

function ArtIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="2.5"></circle>
      <circle cx="19" cy="17" r="2"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <path d="M14 7l2.5 3"></path>
      <path d="M18.5 14.5l-1 1"></path>
      <path d="M6.5 15l3.5-2"></path>
    </svg>
  )
}

function DefiIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
      <path d="M12 18V6"></path>
    </svg>
  )
}

function MarketingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  )
}

function WritingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}
