"use client"

import { motion } from "framer-motion"

export default function FreelancerSkills({ skills = [] }) {
  // Group skills by category
  const categories = {
    "Programming Languages": ["Solidity", "Rust", "JavaScript", "TypeScript", "Python"],
    Blockchain: ["Ethereum", "Solana", "Polkadot", "Avalanche", "Smart Contracts", "DeFi", "NFT Development"],
    "Web Development": ["React", "Next.js", "Node.js", "Web3.js", "ethers.js"],
    "Tools & Frameworks": ["Hardhat", "Truffle", "The Graph", "IPFS", "Anchor"],
  }

  // Function to determine which category a skill belongs to
  const getSkillCategory = (skillName) => {
    for (const [category, skillList] of Object.entries(categories)) {
      if (skillList.includes(skillName)) {
        return category
      }
    }
    return "Other"
  }

  // Group skills by their categories
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = getSkillCategory(skill.name)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {})

  if (!skills || skills.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No skills information available.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Skills & Expertise</h2>

      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">{category}</h3>

          <div className="space-y-4">
            {categorySkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Certifications</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.certifications ? (
            skills.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-800 dark:text-white">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No certifications listed.</p>
          )}
        </div>
      </div>
    </div>
  )
}
