"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/router"
import MobileMenu from "./MobileMenu"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : ""
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Proposals", href: "/proposals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center">
                  <Image src="/logo.png" alt="FreeLance DAO" width={40} height={40} className="mr-2" />
                  <span className="font-bold text-xl">FreeLance DAO</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive("/")}`}
                >
                  Home
                </Link>
                <Link
                  href="/proposals"
                  className={`text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive("/proposals")}`}
                >
                  Proposals
                </Link>
                <Link
                  href="/about"
                  className={`text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive("/about")}`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive("/contact")}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              {/* Add login/register links here if not logged in */}
              <Link
                href="/login"
                className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
