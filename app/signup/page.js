"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Wallet, Mail, Lock, User, Building } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function SignupPage() {
  const [userType, setUserType] = useState("freelancer")
  const [signupMethod, setSignupMethod] = useState("email")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Create an Account</h1>
                <p className="text-gray-600 dark:text-gray-400">Join the Freelance DAO community</p>
              </div>

              {/* User Type Toggle */}
              <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setUserType("freelancer")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    userType === "freelancer"
                      ? "bg-white dark:bg-gray-600 text-primary shadow-sm"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Freelancer
                </button>
                <button
                  onClick={() => setUserType("client")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    userType === "client"
                      ? "bg-white dark:bg-gray-600 text-primary shadow-sm"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Client
                </button>
              </div>

              {/* Signup Method Toggle */}
              <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setSignupMethod("email")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    signupMethod === "email"
                      ? "bg-white dark:bg-gray-600 text-primary shadow-sm"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Email
                </button>
                <button
                  onClick={() => setSignupMethod("wallet")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    signupMethod === "wallet"
                      ? "bg-white dark:bg-gray-600 text-primary shadow-sm"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Wallet
                </button>
              </div>

              {signupMethod === "email" ? (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {userType === "freelancer" ? "Full Name" : "Company Name"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {userType === "freelancer" ? (
                          <User className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Building className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder={userType === "freelancer" ? "John Doe" : "Acme Inc."}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Create Account
                  </motion.button>
                </form>
              ) : (
                <div className="space-y-4">
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                    Connect your wallet to create an account
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Wallet className="mr-2" size={18} />
                    Connect Wallet
                  </motion.button>
                </div>
              )}

              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:text-primary-dark font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
