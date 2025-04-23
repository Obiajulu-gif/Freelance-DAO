"use client"

import { motion } from "framer-motion"
import Marquee from "../Marquee"

export default function TrustedCompaniesSection() {
  const companies = [
    { name: "Solana", logo: "/company-logos/solana.svg" },
    { name: "Ethereum", logo: "/company-logos/ethereum.svg" },
    { name: "Polygon", logo: "/company-logos/polygon.svg" },
    { name: "Binance", logo: "/company-logos/binance.svg" },
    { name: "Avalanche", logo: "/company-logos/avalanche.svg" },
    { name: "Near", logo: "/company-logos/near.svg" },
    { name: "Chainlink", logo: "/company-logos/chainlink.svg" },
    { name: "Uniswap", logo: "/company-logos/uniswap.svg" },
  ]

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
            Trusted by leading Web3 companies
          </h2>
        </motion.div>

        <Marquee className="py-4">
          <div className="flex space-x-12 md:space-x-16">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center min-w-[120px] md:min-w-[150px]">
                <img
                  src={company.logo || `/placeholder.svg?height=40&width=120&text=${company.name}`}
                  alt={company.name}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}
