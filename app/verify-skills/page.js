"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  CheckCircle,
  Award,
  FileCheck,
  Code,
  Paintbrush,
  FileText,
  BarChart3,
  Wallet,
  Database,
  Lock,
  Layers,
} from "lucide-react"

export default function VerifySkillsPage() {
  const [activeTab, setActiveTab] = useState("web2")

  return (
    <div className="p-4 md:p-6 pt-24 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Verify Your Skills</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Boost your profile credibility with verified skills. Our hybrid verification system supports both traditional
          and blockchain-based skill verification.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b mb-8">
        <button
          onClick={() => setActiveTab("web2")}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === "web2"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Traditional Skills (Web2)
        </button>
        <button
          onClick={() => setActiveTab("web3")}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === "web3"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Blockchain Skills (Web3)
        </button>
      </div>

      {/* Content */}
      <div className="mb-12">{activeTab === "web2" ? <Web2VerificationContent /> : <Web3VerificationContent />}</div>

      {/* How It Works */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="mr-2 text-primary" size={24} />
          How Verification Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <VerificationStep
            number={1}
            title="Submit for Verification"
            description="Select the skills you want to verify and submit the required evidence."
          />
          <VerificationStep
            number={2}
            title="Review Process"
            description={
              activeTab === "web2"
                ? "Our expert reviewers evaluate your submissions and may request additional information."
                : "Smart contracts verify your on-chain activity and credentials automatically."
            }
          />
          <VerificationStep
            number={3}
            title="Get Verified"
            description="Once approved, verified badges appear on your profile, increasing visibility and trust."
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Benefits of Skill Verification</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            icon={<CheckCircle className="text-green-500" />}
            title="Higher Visibility"
            description="Verified freelancers appear higher in search results."
          />
          <BenefitCard
            icon={<Award className="text-yellow-500" />}
            title="Premium Rates"
            description="Verified freelancers earn 20% more on average."
          />
          <BenefitCard
            icon={<FileCheck className="text-blue-500" />}
            title="More Opportunities"
            description="Access exclusive job opportunities for verified talent."
          />
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <FAQItem
            question="How long does verification take?"
            answer={
              activeTab === "web2"
                ? "Traditional skill verification typically takes 2-5 business days, depending on the complexity of the skill and volume of requests."
                : "Blockchain skill verification is usually completed within 24 hours as most of the process is automated through smart contracts."
            }
          />
          <FAQItem
            question="Is verification permanent?"
            answer="Verifications are valid for 12 months, after which you'll need to renew to ensure your skills remain current."
          />
          <FAQItem
            question="What if my verification is rejected?"
            answer="You'll receive detailed feedback on why your verification was rejected and guidance on how to improve for your next submission."
          />
        </div>
      </div>
    </div>
  )
}

function Web2VerificationContent() {
  const traditionalSkillCategories = [
    {
      icon: <Code size={24} />,
      name: "Development",
      skills: ["JavaScript", "Python", "React", "Node.js", "Java", "PHP", "Ruby", "C#"],
    },
    {
      icon: <Paintbrush size={24} />,
      name: "Design",
      skills: ["UI/UX", "Graphic Design", "Illustration", "Motion Graphics", "Branding", "3D Modeling"],
    },
    {
      icon: <FileText size={24} />,
      name: "Content",
      skills: ["Copywriting", "Technical Writing", "Editing", "Translation", "SEO Writing", "Scriptwriting"],
    },
    {
      icon: <BarChart3 size={24} />,
      name: "Marketing",
      skills: ["Social Media", "SEO", "Email Marketing", "Content Strategy", "PPC", "Analytics"],
    },
  ]

  return (
    <div>
      <p className="mb-6">
        Our traditional skill verification process combines portfolio review, skill assessments, and professional
        references to ensure your expertise is thoroughly validated.
      </p>

      <div className="grid gap-6">
        {traditionalSkillCategories.map((category, index) => (
          <SkillCategoryCard
            key={index}
            icon={category.icon}
            name={category.name}
            skills={category.skills}
            type="web2"
          />
        ))}
      </div>
    </div>
  )
}

function Web3VerificationContent() {
  const blockchainSkillCategories = [
    {
      icon: <Code size={24} />,
      name: "Smart Contract Development",
      skills: ["Solidity", "Rust", "Vyper", "Cairo", "Ink!"],
    },
    {
      icon: <Wallet size={24} />,
      name: "Blockchain Platforms",
      skills: ["Ethereum", "Solana", "Polkadot", "Avalanche", "Near"],
    },
    {
      icon: <Database size={24} />,
      name: "Web3 Infrastructure",
      skills: ["IPFS", "The Graph", "Chainlink", "Arweave", "Filecoin"],
    },
    {
      icon: <Lock size={24} />,
      name: "Security & Auditing",
      skills: ["Smart Contract Auditing", "Formal Verification", "Penetration Testing"],
    },
    {
      icon: <Layers size={24} />,
      name: "DeFi & NFTs",
      skills: ["DeFi Protocol Development", "NFT Creation", "Tokenomics", "DAO Governance"],
    },
  ]

  return (
    <div>
      <p className="mb-6">
        Our blockchain skill verification leverages on-chain data, contribution history, and cryptographic proof to
        verify your web3 expertise in a trustless, transparent manner.
      </p>

      <div className="grid gap-6">
        {blockchainSkillCategories.map((category, index) => (
          <SkillCategoryCard
            key={index}
            icon={category.icon}
            name={category.name}
            skills={category.skills}
            type="web3"
          />
        ))}
      </div>
    </div>
  )
}

function SkillCategoryCard({ icon, name, skills, type }) {
  return (
    <div className="border rounded-xl p-6 hover:border-primary transition-colors">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`${name}-${skill}`}
              className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor={`${name}-${skill}`} className="text-sm">
              {skill}
            </label>
          </div>
        ))}
      </div>

      <button className="btn-primary w-full mt-2">
        {type === "web2" ? "Submit for Review" : "Connect Wallet to Verify"}
      </button>
    </div>
  )
}

function VerificationStep({ number, title, description }) {
  return (
    <div className="flex">
      <div className="mr-4">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="border rounded-xl p-6 hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 text-sm">{answer}</div>}
    </div>
  )
}
