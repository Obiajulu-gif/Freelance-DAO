"use client"

import { useState } from "react"
import { Shield } from "lucide-react"
import VerificationBadge from "./VerificationBadge"
import VerificationModal from "./VerificationModal"

export default function VerifiedSkillsList({ skills = [], canVerify = false }) {
  const [filter, setFilter] = useState("all") // all, web2, web3
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(null)

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  const filteredSkills =
    filter === "all"
      ? groupedSkills
      : Object.keys(groupedSkills).reduce((acc, category) => {
          const filtered = groupedSkills[category].filter((skill) => skill.type === filter)
          if (filtered.length > 0) {
            acc[category] = filtered
          }
          return acc
        }, {})

  const handleVerifyClick = (skill) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Shield className="mr-2 text-primary" size={18} />
          Verified Skills
        </h3>

        <div className="flex items-center">
          <div className="mr-2 text-sm text-gray-500">Filter:</div>
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 text-sm ${filter === "all" ? "bg-primary text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("web2")}
              className={`px-3 py-1 text-sm ${filter === "web2" ? "bg-primary text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              Web2
            </button>
            <button
              onClick={() => setFilter("web3")}
              className={`px-3 py-1 text-sm ${filter === "web3" ? "bg-primary text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              Web3
            </button>
          </div>
        </div>
      </div>

      {Object.keys(filteredSkills).length > 0 ? (
        <div className="space-y-4">
          {Object.entries(filteredSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-gray-500 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <VerificationBadge
                    key={skill.id}
                    type={skill.type}
                    skill={skill.name}
                    verifiedDate={skill.verifiedDate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 border rounded-lg">
          <p className="text-gray-500 mb-2">No verified skills found</p>
          {canVerify && (
            <button onClick={() => setIsModalOpen(true)} className="text-primary text-sm hover:underline">
              + Verify your first skill
            </button>
          )}
        </div>
      )}

      {canVerify && (
        <div className="mt-4">
          <button onClick={() => setIsModalOpen(true)} className="btn-outline text-sm w-full">
            + Verify New Skill
          </button>
        </div>
      )}

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedSkill(null)
        }}
        skill={selectedSkill?.name}
        skillType={selectedSkill?.type || "web2"}
      />
    </div>
  )
}
