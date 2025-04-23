"use client"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Welcome to Freelance DAO</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The first decentralized freelancing platform built on Solana, connecting Web3 talent with innovative projects.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Hire Freelancers
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg">
            Start Freelancing
          </button>
        </div>
      </div>
    </div>
  )
}
