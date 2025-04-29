"use client"

import { useState } from "react"
import { Shield, CheckCircle, Clock, X, Award, Code, FileCheck, CreditCard } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import VerificationModal from "./VerificationModal"

const verificationMethods = {
  web2: [
    {
      id: "portfolio",
      name: "Portfolio Review",
      icon: FileCheck,
      description: "Upload your portfolio for expert review",
      difficulty: "Medium",
      timeEstimate: "3-5 days",
      cost: "Free",
    },
    {
      id: "credential",
      name: "Credential Verification",
      icon: Award,
      description: "Verify certifications from recognized institutions",
      difficulty: "Easy",
      timeEstimate: "1-2 days",
      cost: "Free",
    },
    {
      id: "skill_test",
      name: "Skill Assessment",
      icon: Code,
      description: "Complete a timed assessment in your skill area",
      difficulty: "Hard",
      timeEstimate: "1-3 hours",
      cost: "Free",
    },
  ],
  web3: [
    {
      id: "onchain",
      name: "On-chain Verification",
      icon: Shield,
      description: "Verify your blockchain work through deployed smart contracts",
      difficulty: "Medium",
      timeEstimate: "1-3 days",
      cost: "Gas fees only",
    },
    {
      id: "github",
      name: "GitHub Repository Analysis",
      icon: Code,
      description: "Connect your GitHub to verify blockchain contributions",
      difficulty: "Easy",
      timeEstimate: "1-2 days",
      cost: "Free",
    },
    {
      id: "tx_history",
      name: "Transaction History Proof",
      icon: CreditCard,
      description: "Provide transaction history showing blockchain interactions",
      difficulty: "Medium",
      timeEstimate: "2-3 days",
      cost: "Free",
    },
  ],
}

// Example user skills
const exampleUserSkills = [
  {
    id: 1,
    name: "React",
    category: "web2",
    level: "Expert",
    verified: true,
    verificationMethod: "skill_test",
    verifiedDate: "2023-10-15",
  },
  {
    id: 2,
    name: "UI/UX Design",
    category: "web2",
    level: "Intermediate",
    verified: false,
    verificationMethod: null,
    verifiedDate: null,
  },
  {
    id: 3,
    name: "Solidity",
    category: "web3",
    level: "Expert",
    verified: true,
    verificationMethod: "github",
    verifiedDate: "2023-09-22",
  },
  {
    id: 4,
    name: "Smart Contract Auditing",
    category: "web3",
    level: "Advanced",
    verified: false,
    verificationRequested: true,
    verificationMethod: "onchain",
    verifiedDate: null,
  },
  {
    id: 5,
    name: "Content Writing",
    category: "web2",
    level: "Expert",
    verified: true,
    verificationMethod: "credential",
    verifiedDate: "2023-11-05",
  },
  {
    id: 6,
    name: "Solana Development",
    category: "web3",
    level: "Intermediate",
    verified: false,
    verificationMethod: null,
    verifiedDate: null,
  },
]

export default function SkillVerificationSystem() {
  const [skills, setSkills] = useState(exampleUserSkills)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "all") return true
    if (activeTab === "verified") return skill.verified
    if (activeTab === "pending") return skill.verificationRequested && !skill.verified
    if (activeTab === "unverified") return !skill.verified && !skill.verificationRequested
    return skill.category === activeTab
  })

  const requestVerification = (skillId, method) => {
    setSkills(
      skills.map((skill) =>
        skill.id === skillId
          ? {
              ...skill,
              verificationRequested: true,
              verificationMethod: method,
            }
          : skill,
      ),
    )
    setModalOpen(false)
  }

  const openVerificationModal = (skill) => {
    setSelectedSkill(skill)
    setModalOpen(true)
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="text-primary h-6 w-6" />
        <h2 className="text-2xl font-bold">Skill Verification</h2>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All Skills</TabsTrigger>
          <TabsTrigger value="web2">Web2 Skills</TabsTrigger>
          <TabsTrigger value="web3">Web3 Skills</TabsTrigger>
          <TabsTrigger value="verified">Verified</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="unverified">Unverified</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-4">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="border rounded-lg p-4 flex justify-between items-center hover:border-primary transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
                        {skill.level}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                        {skill.category === "web2" ? "Traditional" : "Blockchain"}
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      {skill.verified ? (
                        <>
                          <CheckCircle size={14} className="text-green-500" />
                          <span>
                            Verified on {skill.verifiedDate} via{" "}
                            {
                              verificationMethods[skill.category].find(
                                (method) => method.id === skill.verificationMethod,
                              )?.name
                            }
                          </span>
                        </>
                      ) : skill.verificationRequested ? (
                        <>
                          <Clock size={14} className="text-amber-500" />
                          <span>
                            Verification in progress via{" "}
                            {
                              verificationMethods[skill.category].find(
                                (method) => method.id === skill.verificationMethod,
                              )?.name
                            }
                          </span>
                        </>
                      ) : (
                        <>
                          <X size={14} className="text-gray-400" />
                          <span>Not verified</span>
                        </>
                      )}
                    </div>
                  </div>

                  {!skill.verified && !skill.verificationRequested && (
                    <button onClick={() => openVerificationModal(skill)} className="btn-primary text-sm py-1.5 px-3">
                      Verify Skill
                    </button>
                  )}

                  {skill.verified && (
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                  )}

                  {!skill.verified && skill.verificationRequested && (
                    <div className="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-full">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <Shield className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">No skills found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">No skills match the current filter criteria.</p>
                <button className="btn-primary" onClick={() => setActiveTab("all")}>
                  View All Skills
                </button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <VerificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        skill={selectedSkill}
        verificationMethods={selectedSkill ? verificationMethods[selectedSkill.category] : []}
        onRequestVerification={requestVerification}
      />
    </div>
  )
}
