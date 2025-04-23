"use client"

import { useState } from "react"
import FreelancerCard from "./FreelancerCard"
import FreelancerCardFeatured from "./FreelancerCardFeatured"
import FreelancerCardCompact from "./FreelancerCardCompact"
import FreelancerCardHorizontal from "./FreelancerCardHorizontal"
import FreelancerCardPortfolio from "./FreelancerCardPortfolio"
import FreelancerCardTestimonial from "./FreelancerCardTestimonial"

export default function FreelancerCardShowcase() {
  const [activeTab, setActiveTab] = useState("featured")

  // Sample freelancer data with all required fields for all card types
  const sampleFreelancer = {
    id: 1,
    name: "Alex Johnson",
    title: "Senior Blockchain Developer",
    avatar: "/avatars/alex.jpg",
    rating: 4.9,
    reviews: 56,
    hourlyRate: 120,
    skills: ["Solidity", "Rust", "Web3.js", "React", "Smart Contracts", "DeFi"],
    bio: "Experienced blockchain developer with 5+ years specializing in DeFi protocols and NFT marketplaces. I've worked with leading projects in the space and delivered secure, efficient solutions.",
    location: "San Francisco, CA",
    jobSuccess: 98,
    availability: "Full Time",
    projectsCompleted: 32,
    portfolio: [
      {
        title: "DeFi Lending Platform",
        description: "Built a decentralized lending protocol with $10M TVL",
        image: "/portfolio/defi-platform.jpg",
        thumbnail: "/portfolio/defi-platform-thumb.jpg",
      },
      {
        title: "NFT Marketplace",
        description: "Developed smart contracts for a major NFT marketplace",
        image: "/portfolio/nft-marketplace.jpg",
        thumbnail: "/portfolio/nft-marketplace-thumb.jpg",
      },
      {
        title: "DAO Governance System",
        description: "Created a voting mechanism for a community DAO",
        image: "/portfolio/dao-governance.jpg",
        thumbnail: "/portfolio/dao-governance-thumb.jpg",
      },
    ],
    testimonials: [
      {
        text: "Alex delivered exceptional work on our DeFi project. His deep knowledge of Solidity and security best practices was invaluable. We've already hired him for our next phase.",
        clientName: "Sarah Williams",
        clientCompany: "DeFi Protocol Inc.",
        clientAvatar: "/avatars/sarah.jpg",
      },
    ],
  }

  const handleCardClick = () => {
    alert("Freelancer card clicked! In a real app, this would open the freelancer's profile.")
  }

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "standard", label: "Standard" },
    { id: "compact", label: "Compact" },
    { id: "horizontal", label: "Horizontal" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonial", label: "Testimonial" },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Freelancer Card Variations
        </h2>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 mx-1 mb-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "featured" && (
            <FreelancerCardFeatured freelancer={sampleFreelancer} onClick={handleCardClick} />
          )}

          {activeTab === "standard" && <FreelancerCard freelancer={sampleFreelancer} onClick={handleCardClick} />}

          {activeTab === "compact" && (
            <div className="space-y-2">
              <FreelancerCardCompact freelancer={sampleFreelancer} onClick={handleCardClick} />
              <FreelancerCardCompact
                freelancer={{ ...sampleFreelancer, name: "Emma Wilson", title: "UI/UX Designer" }}
                onClick={handleCardClick}
              />
              <FreelancerCardCompact
                freelancer={{ ...sampleFreelancer, name: "Michael Chen", title: "Smart Contract Auditor" }}
                onClick={handleCardClick}
              />
            </div>
          )}

          {activeTab === "horizontal" && (
            <FreelancerCardHorizontal freelancer={sampleFreelancer} onClick={handleCardClick} />
          )}

          {activeTab === "portfolio" && (
            <FreelancerCardPortfolio freelancer={sampleFreelancer} onClick={handleCardClick} />
          )}

          {activeTab === "testimonial" && (
            <FreelancerCardTestimonial freelancer={sampleFreelancer} onClick={handleCardClick} />
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Select different tabs above to preview each card variation.
          </p>
        </div>
      </div>
    </div>
  )
}
