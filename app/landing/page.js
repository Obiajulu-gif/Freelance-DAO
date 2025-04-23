"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Wallet, FileText, Shield, Users, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-transparent opacity-90"></div>

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
                Work. Earn. Own the Future of Freelancing.
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  Hire Freelancers
                </button>
                <button className="bg-transparent text-white border-2 border-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  Start Freelancing
                </button>
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
                  <img src="/hero-image.svg" alt="Freelance DAO Hero" className="object-contain" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">How it Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple, secure, and decentralized way to connect talent with opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full mb-4">
                <Wallet className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Connect Wallet / Register</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create your account by connecting your wallet or registering with email. Verify your identity to build
                trust.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full mb-4">
                <FileText className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Post or Apply to Jobs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse available jobs or create your own listing. Connect with clients or freelancers through our secure
                platform.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Get Paid in Crypto or Fiat</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete work and receive payment in your preferred currency. Our escrow system ensures security for all
                parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What makes Freelance DAO different from traditional freelancing platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">On-chain reputation system</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build a verifiable reputation that follows you across the web3 ecosystem.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">DAO governance participation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have a say in platform decisions and earn rewards for active participation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Escrow protection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Secure payments with smart contract escrow that releases funds when work is approved.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Learning Hub</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access resources to improve your skills and stay updated on web3 developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              FreeLance DAO in Numbers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform is growing rapidly, connecting talent with opportunity across the Web3 ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full mr-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">5,000+</h3>
                  <p className="text-gray-500 dark:text-gray-400">Jobs Posted</p>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full mr-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">$10M+</h3>
                  <p className="text-gray-500 dark:text-gray-400">Total Payouts</p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full mr-4">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">10,000+</h3>
                  <p className="text-gray-500 dark:text-gray-400">Active Users</p>
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full mr-4">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">2,500+</h3>
                  <p className="text-gray-500 dark:text-gray-400">DAO Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to revolutionize how you work in Web3?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers and clients already using FreeLance DAO to connect, collaborate, and create
              the future of work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                Get Started <ArrowRight className="inline ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
