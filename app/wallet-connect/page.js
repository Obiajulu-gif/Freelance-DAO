"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function WalletConnectPage() {
  const [selectedWallet, setSelectedWallet] = useState(null)

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: "/wallet-icons/metamask.svg",
      description: "Connect to your MetaMask wallet",
    },
    {
      id: "phantom",
      name: "Phantom",
      icon: "/wallet-icons/phantom.svg",
      description: "Connect to your Phantom wallet (Solana)",
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      icon: "/wallet-icons/walletconnect.svg",
      description: "Connect using WalletConnect protocol",
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "/wallet-icons/coinbase.svg",
      description: "Connect to your Coinbase wallet",
    },
  ]

  const handleConnect = (wallet) => {
    setSelectedWallet(wallet)
    // In a real app, this would trigger the wallet connection flow
    console.log(`Connecting to ${wallet.name}...`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Connect Your Wallet</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Choose a wallet to connect to Freelance DAO</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="space-y-4">
                  {wallets.map((wallet) => (
                    <motion.button
                      key={wallet.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleConnect(wallet)}
                      className={`w-full flex items-center p-4 rounded-lg border ${
                        selectedWallet?.id === wallet.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
                      }`}
                    >
                      <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
                        <img
                          src={wallet.icon || `/placeholder.svg?height=40&width=40&text=${wallet.name}`}
                          alt={wallet.name}
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-medium text-gray-800 dark:text-white">{wallet.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {selectedWallet && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 p-4 bg-gray-50 dark:bg-gray-750 rounded-lg"
                  >
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      Please approve the connection request in your {selectedWallet.name} wallet.
                    </p>
                  </motion.div>
                )}

                <div className="mt-6 text-center text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Don't have a wallet?{" "}
                    <a href="#" className="text-primary hover:text-primary-dark font-medium">
                      Learn how to create one
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
