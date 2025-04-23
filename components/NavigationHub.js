"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Vote,
  Wallet,
  BookOpen,
  LogIn,
  UserPlus,
  Layout,
  User,
  Building,
  FileText,
  PlusCircle,
  Shield,
} from "lucide-react"

export default function NavigationHub() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Pages" },
    { id: "main", label: "Main Pages" },
    { id: "auth", label: "Authentication" },
    { id: "dashboard", label: "Dashboard" },
    { id: "profiles", label: "Profiles" },
    { id: "jobs", label: "Jobs & Gigs" },
    { id: "features", label: "Features" },
  ]

  const pages = [
    {
      id: "landing",
      name: "Homepage (Landing)",
      description: "Main landing page with hero section, features, and testimonials",
      icon: <Home size={20} />,
      href: "/landing",
      category: "main",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    },
    {
      id: "freelancer-cards",
      name: "Freelancer Cards",
      description: "Different card layouts for featuring freelancers",
      icon: <Users size={20} />,
      href: "/freelancer-cards",
      category: "main",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    },
    {
      id: "freelancer-profile",
      name: "Freelancer Profile",
      description: "Detailed freelancer profile with portfolio and reviews",
      icon: <User size={20} />,
      href: "/freelancer/1",
      category: "profiles",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    },
    {
      id: "signup",
      name: "Sign Up",
      description: "Registration page with freelancer/client toggle",
      icon: <UserPlus size={20} />,
      href: "/signup",
      category: "auth",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    },
    {
      id: "login",
      name: "Login",
      description: "Login with email/password or wallet connect",
      icon: <LogIn size={20} />,
      href: "/login",
      category: "auth",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    },
    {
      id: "wallet-connect",
      name: "Wallet Connect",
      description: "Connect with various Web3 wallets",
      icon: <Wallet size={20} />,
      href: "/wallet-connect",
      category: "auth",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      description: "User dashboard with overview and stats",
      icon: <Layout size={20} />,
      href: "/dashboard",
      category: "dashboard",
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",
    },
    {
      id: "client-profile",
      name: "Client Profile",
      description: "Company info and jobs posted",
      icon: <Building size={20} />,
      href: "/client/1",
      category: "profiles",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    },
    {
      id: "job-listings",
      name: "Job Listings",
      description: "Browse available jobs with filters",
      icon: <Briefcase size={20} />,
      href: "/jobs",
      category: "jobs",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    },
    {
      id: "gig-details",
      name: "Gig Details",
      description: "Detailed view of a specific gig",
      icon: <FileText size={20} />,
      href: "/gigs/1",
      category: "jobs",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    },
    {
      id: "post-job",
      name: "Post a Job",
      description: "Form to create a new job listing",
      icon: <PlusCircle size={20} />,
      href: "/post-job",
      category: "jobs",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    },
    {
      id: "messaging",
      name: "Messaging & Chat",
      description: "Real-time messaging with file uploads",
      icon: <MessageSquare size={20} />,
      href: "/messages",
      category: "features",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
    },
    {
      id: "wallet",
      name: "Wallet Integration",
      description: "View balance and transaction history",
      icon: <Wallet size={20} />,
      href: "/wallet",
      category: "features",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
    },
    {
      id: "governance",
      name: "DAO Governance",
      description: "Proposals feed and voting interface",
      icon: <Vote size={20} />,
      href: "/governance",
      category: "features",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
    },
    {
      id: "learning",
      name: "Learning Hub",
      description: "Courses and Web3 freelancing guides",
      icon: <BookOpen size={20} />,
      href: "/learning",
      category: "features",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
    },
    {
      id: "admin",
      name: "Admin Panel",
      description: "Manage users and content (internal only)",
      icon: <Shield size={20} />,
      href: "/admin",
      category: "features",
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    },
  ]

  const filteredPages = activeCategory === "all" ? pages : pages.filter((page) => page.category === activeCategory)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Freelance DAO Navigation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore all the features and pages of the Freelance DAO platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <motion.div
              key={page.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-md ${page.color} mr-4`}>{page.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{page.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{page.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {categories.find((c) => c.id === page.category)?.label}
                  </span>
                  <Link
                    href={page.href}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    View Page
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Status */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Implementation Status</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Implemented Pages: Landing, Freelancer Cards, Freelancer Profile
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">
                In Progress: Authentication, Dashboard, Job Listings
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Planned: Messaging, Wallet Integration, DAO Governance, Learning Hub
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
