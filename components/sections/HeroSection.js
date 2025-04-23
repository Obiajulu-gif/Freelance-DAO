"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "../TypewriterText"

export default function HeroSection({ categories, category, setCategory, setIsJobModalOpen }) {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-transparent opacity-90"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Find the best{" "}
              <TypewriterText
                words={["Web3 talent", "blockchain developers", "smart contract experts", "NFT designers"]}
                className="text-accent-light"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The first decentralized freelancing platform built on Solana, connecting Web3 talent with innovative
              projects.
            </motion.p>

            {/* Search form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg mb-6 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 mb-2 md:mb-0 md:mr-2">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="web3">Web3 Development</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="smart-contracts">Smart Contracts</option>
                    <option value="nft">NFT & Digital Art</option>
                    <option value="defi">DeFi</option>
                    <option value="dao">DAO Management</option>
                  </select>
                </div>
                <button
                  onClick={() => setIsJobModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-primary-light text-white font-medium py-3 px-6 rounded-md hover:shadow-lg transition duration-300"
                >
                  Find Jobs
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-white"
            >
              <div>
                <span className="block text-2xl md:text-3xl font-bold">10,000+</span>
                <span className="text-white/80">Freelancers</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold">5,000+</span>
                <span className="text-white/80">Projects</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold">$10M+</span>
                <span className="text-white/80">Paid Out</span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              <div className="aspect-square relative">
                <Image
                  src="/hero-image.svg"
                  alt="Freelance DAO Hero"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
