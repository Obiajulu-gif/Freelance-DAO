"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Briefcase,
  Wallet,
  Vote,
  MessageSquare,
  Bell,
  Settings,
  User,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "gigs", label: "My Gigs", icon: <Briefcase size={20} /> },
    { id: "wallet", label: "Wallet & Earnings", icon: <Wallet size={20} /> },
    { id: "governance", label: "Governance", icon: <Vote size={20} /> },
    { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <User size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800 dark:text-white">Alex Johnson</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Blockchain Developer</p>
                  </div>
                </div>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? "bg-primary text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <span className="mr-3">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Profile Completeness */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Profile Completeness</h2>
                    <div className="mb-2 flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">75% complete</span>
                      <span className="text-primary font-medium">3/4 steps</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">Basic information</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">Skills & expertise</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">Portfolio items</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle size={16} className="text-yellow-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">Verify your identity</span>
                      </div>
                    </div>
                    <button className="mt-4 text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm">
                      Complete your profile <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Earnings</h3>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">$12,450</p>
                      <span className="text-green-500 text-sm flex items-center mt-1">+12% from last month</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Rating</h3>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">4.9/5.0</p>
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-1">
                        Based on 24 reviews
                      </span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Jobs Completed</h3>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">18</p>
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-1">
                        95% completion rate
                      </span>
                    </div>
                  </div>

                  {/* Ongoing Tasks */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Ongoing Tasks</h2>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">DeFi Dashboard UI Development</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Client: Crypto Ventures Inc.</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>Due in 3 days</span>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">Smart Contract Audit</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Client: NFT Marketplace</p>
                          </div>
                          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-2 py-1 rounded-full">
                            Review
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>Due in 1 week</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm">
                      View all tasks <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>

                  {/* Proposals */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Proposals</h2>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">Solana NFT Marketplace</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Sent 2 days ago</p>
                          </div>
                          <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                            Pending
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Proposed budget: $4,500</p>
                      </div>
                    </div>
                    <button className="mt-4 text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm">
                      View all proposals <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>

                  {/* DAO Tasks */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">DAO Tasks</h2>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">
                              Vote on Fee Structure Proposal
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Ends in 2 days</p>
                          </div>
                          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                            10 FDAO Reward
                          </span>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">
                              Review New Freelancer Applications
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">5 pending reviews</p>
                          </div>
                          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                            5 FDAO Reward
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center text-sm">
                      View all DAO tasks <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab !== "overview" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {tabs.find((tab) => tab.id === activeTab)?.label}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      This section is under development. Check back soon!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
