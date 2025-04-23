"use client"

import { motion } from "framer-motion"
import FadeInWhenVisible from "../FadeInWhenVisible"
import ProposalItem from "../ProposalItem"

export default function GovernanceSection({ setIsLoginModalOpen }) {
  const proposals = [
    {
      id: "PROP-42",
      title: "Reduce platform fees for long-term clients",
      status: "active",
      votes: { for: 65, against: 35 },
      endTime: "2 days",
    },
    {
      id: "PROP-41",
      title: "Add support for Arbitrum payments",
      status: "passed",
      votes: { for: 82, against: 18 },
      endTime: "Ended",
    },
    {
      id: "PROP-40",
      title: "Implement skill verification system",
      status: "active",
      votes: { for: 51, against: 49 },
      endTime: "5 days",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Community-owned <br />
              <span className="text-primary">DAO Governance</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              FreeLance DAO is owned and governed by its community. Token holders can propose and vote on platform
              changes, fee structures, and feature development.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Decentralized Decision Making
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    All major platform decisions are made through community voting, ensuring transparency and fairness.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Token-Based Governance</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Earn governance tokens by participating in the platform, giving you voting power proportional to
                    your contribution.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Treasury Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Platform fees go to the community treasury, which is managed through governance proposals.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-white dark:bg-gray-800 text-primary border border-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Join Governance
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - Active proposals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Active Governance Proposals</h3>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {proposals.map((proposal, index) => (
                  <FadeInWhenVisible key={proposal.id} delay={index * 0.1}>
                    <ProposalItem proposal={proposal} onClick={() => setIsLoginModalOpen(true)} />
                  </FadeInWhenVisible>
                ))}
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 text-center">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="text-primary hover:text-primary-dark dark:hover:text-primary-light font-medium"
                >
                  View All Proposals →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
