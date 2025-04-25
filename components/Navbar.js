"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  MessageSquare,
  Briefcase,
  Users,
  FileText,
  LayoutDashboard,
  Vote,
  Wallet,
  Globe,
} from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set initial scroll state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  // Don't render anything on the server to prevent hydration mismatch
  if (!mounted) return null

  return (
    <>
      <header
        className={`block w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="FreeLance DAO" width={40} height={40} className="mr-2" />
              <span
                className={`font-bold text-xl ${isScrolled || !isHomePage() ? "text-primary dark:text-white" : "text-white"}`}
              >
                FreeLance DAO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavDropdown
                title="Find Talent"
                isActive={activeDropdown === "talent"}
                onClick={() => toggleDropdown("talent")}
                isScrolled={isScrolled}
                isHomePage={isHomePage()}
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  <DropdownLink
                    href="/freelancers"
                    icon={<Users size={18} />}
                    title="Browse Freelancers"
                    description="Find top Web3 professionals"
                  />
                  <DropdownLink
                    href="/agencies"
                    icon={<Briefcase size={18} />}
                    title="Browse Agencies"
                    description="Hire specialized teams"
                  />
                  <DropdownLink
                    href="/projects"
                    icon={<FileText size={18} />}
                    title="Project Catalog"
                    description="Fixed-scope projects"
                  />
                  <DropdownLink
                    href="/enterprise"
                    icon={<LayoutDashboard size={18} />}
                    title="Enterprise Solutions"
                    description="For large organizations"
                  />
                </div>
              </NavDropdown>

              <NavDropdown
                title="Find Work"
                isActive={activeDropdown === "work"}
                onClick={() => toggleDropdown("work")}
                isScrolled={isScrolled}
                isHomePage={isHomePage()}
              >
                <div className="grid grid-cols-1 gap-2 p-4">
                  <DropdownLink
                    href="/gigs"
                    icon={<Briefcase size={18} />}
                    title="Browse Jobs"
                    description="Find your next opportunity"
                  />
                  <DropdownLink
                    href="/saved-jobs"
                    icon={<FileText size={18} />}
                    title="Saved Jobs"
                    description="View your saved listings"
                  />
                  <DropdownLink
                    href="/proposals"
                    icon={<FileText size={18} />}
                    title="Proposals"
                    description="Track your job applications"
                  />
                </div>
              </NavDropdown>

              <NavItem href="/post-job" isScrolled={isScrolled} isHomePage={isHomePage()}>
                Post a Job
              </NavItem>
              <NavItem href="/verify-skills" isScrolled={isScrolled} isHomePage={isHomePage()}>
                Verify Skills
              </NavItem>
              <NavItem href="/governance" isScrolled={isScrolled} isHomePage={isHomePage()}>
                DAO Governance
              </NavItem>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative ${
                  isScrolled || !isHomePage() ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative ${
                  isScrolled || !isHomePage() ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative ${
                  isScrolled || !isHomePage() ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                <MessageSquare size={20} />
              </button>

              <ThemeToggle
                className={`hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isScrolled || !isHomePage() ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 bg-gradient-to-r from-accent to-accent-light text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                <Wallet size={16} className="mr-2" />
                Connect Wallet
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-md ${
                isScrolled || !isHomePage() ? "text-gray-700 dark:text-gray-300" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavAccordion title="Find Talent" icon={<Users size={20} />}>
                  <Link href="/freelancers" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Browse Freelancers
                  </Link>
                  <Link href="/agencies" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Browse Agencies
                  </Link>
                  <Link href="/projects" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Project Catalog
                  </Link>
                  <Link href="/enterprise" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Enterprise Solutions
                  </Link>
                </MobileNavAccordion>

                <MobileNavAccordion title="Find Work" icon={<Briefcase size={20} />}>
                  <Link href="/gigs" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Browse Jobs
                  </Link>
                  <Link href="/saved-jobs" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Saved Jobs
                  </Link>
                  <Link href="/proposals" className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Proposals
                  </Link>
                </MobileNavAccordion>

                <Link href="/post-job" className="flex items-center py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <FileText size={20} className="mr-3 text-primary" />
                  <span>Post a Job</span>
                </Link>

                <Link href="/dashboard" className="flex items-center py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <LayoutDashboard size={20} className="mr-3 text-primary" />
                  <span>My Dashboard</span>
                </Link>

                <Link
                  href="/governance"
                  className="flex items-center py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Vote size={20} className="mr-3 text-primary" />
                  <span>DAO Governance</span>
                </Link>

                <div className="flex items-center justify-between py-3 px-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm">Toggle theme</span>
                  <ThemeToggle />
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                    <Wallet size={18} className="mr-2" />
                    Connect Wallet
                  </button>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <button className="flex items-center text-sm">
                    <Globe size={16} className="mr-2" />
                    <span>English</span>
                  </button>
                  <button className="text-sm text-primary">
                    <span>Pidgin</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for closing dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40 bg-transparent" onClick={closeDropdowns}></div>}
    </>
  )
}

// Helper function to check if we're on the home page
function isHomePage() {
  if (typeof window !== "undefined") {
    return window.location.pathname === "/" || window.location.pathname === "/home"
  }
  return false
}

// Desktop Navigation Item
function NavItem({ href, children, isScrolled, isHomePage }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
        isScrolled || !isHomePage
          ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          : "text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  )
}

// Desktop Navigation Dropdown
function NavDropdown({ title, children, isActive, onClick, isScrolled, isHomePage }) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
          isActive
            ? isScrolled || !isHomePage
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : "bg-white/10 text-white"
            : isScrolled || !isHomePage
              ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              : "text-white hover:bg-white/10"
        }`}
      >
        {title}
        <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Dropdown Link Item
function DropdownLink({ href, icon, title, description }) {
  return (
    <Link
      href={href}
      className="flex items-start p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      <div className="text-primary mr-3 mt-1">{icon}</div>
      <div>
        <div className="font-medium text-gray-900 dark:text-white">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
      </div>
    </Link>
  )
}

// Mobile Navigation Accordion
function MobileNavAccordion({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <div className="flex items-center">
          <span className="mr-3 text-primary">{icon}</span>
          <span>{title}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50 dark:bg-gray-800"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
