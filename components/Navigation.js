"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Users, Briefcase, FileText, LayoutDashboard, Vote, Wallet, Globe } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-primary text-white flex items-center justify-between px-4 z-50 md:hidden">
        <div className="flex items-center">
          <Image src="/logo.png" alt="FreeLance DAO" width={40} height={40} className="mr-2" />
          <span className="font-bold text-xl">FreeLance DAO</span>
        </div>
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        } md:translate-x-0`}
      >
        <div className="p-4 flex items-center border-b border-primary-light">
          <Image src="/logo.png" alt="FreeLance DAO" width={40} height={40} className="mr-2" />
          <span className="font-bold text-xl">FreeLance DAO</span>
        </div>

        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-primary-dark text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <nav className="mt-2">
          <NavItem icon={<Home size={20} />} text="Home" href="/" onClick={closeMenu} />
          <NavItem icon={<Users size={20} />} text="Browse Freelancers" href="/freelancers" onClick={closeMenu} />
          <NavItem icon={<Briefcase size={20} />} text="Browse Gigs" href="/gigs" onClick={closeMenu} />
          <NavItem icon={<FileText size={20} />} text="Post a Job" href="/post-job" onClick={closeMenu} />
          <NavItem icon={<LayoutDashboard size={20} />} text="My Dashboard" href="/dashboard" onClick={closeMenu} />
          <NavItem icon={<Vote size={20} />} text="DAO Governance" href="/governance" onClick={closeMenu} />

          <div className="border-t border-primary-light my-4"></div>

          <button className="flex items-center w-full px-4 py-3 text-left hover:bg-primary-light transition-colors duration-200">
            <Wallet size={20} className="mr-3" />
            <span>Connect Wallet</span>
          </button>

          <div className="px-4 py-3 flex items-center justify-between">
            <button className="flex items-center text-sm">
              <Globe size={18} className="mr-2" />
              <span>English</span>
            </button>
            <button className="text-sm">
              <span>Pidgin</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

function NavItem({ icon, text, href, onClick }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-3 hover:bg-[var(--primary-light)] transition-colors duration-200"
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </Link>
  )
}
