"use client"
import { Info, ArrowRight } from "lucide-react"
import Modal from "@/components/Modal"
import { useState } from "react"

export default function VerificationModal({ isOpen, onClose, skill, verificationMethods, onRequestVerification }) {
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [currentStep, setCurrentStep] = useState("select") // select, details, confirm

  if (!skill) return null

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId)
    setCurrentStep("details")
  }

  const handleBack = () => {
    if (currentStep === "details") {
      setCurrentStep("select")
    } else if (currentStep === "confirm") {
      setCurrentStep("details")
    }
  }

  const handleRequestVerification = () => {
    onRequestVerification(skill.id, selectedMethod)
  }

  const selectedMethodDetails = verificationMethods.find((method) => method.id === selectedMethod)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Verify ${skill?.name}`}>
      <div className="space-y-6">
        {currentStep === "select" && (
          <>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Choose a verification method for your {skill.category === "web2" ? "traditional" : "blockchain"} skill
            </p>

            <div className="grid gap-3">
              {verificationMethods.map((method) => (
                <button
                  key={method.id}
                  className="flex items-start gap-4 p-4 border rounded-lg hover:border-primary transition-colors text-left"
                  onClick={() => handleSelectMethod(method.id)}
                >
                  <div className="mt-1 flex-shrink-0">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold mb-1">{method.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                    <div className="flex gap-3 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Difficulty:</span> {method.difficulty}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Time:</span> {method.timeEstimate}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Cost:</span> {method.cost}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-50" />
                </button>
              ))}
            </div>
          </>
        )}

        {currentStep === "details" && selectedMethodDetails && (
          <>
            <div className="flex items-center gap-3 pb-3 border-b">
              <selectedMethodDetails.icon className="h-6 w-6 text-primary" />
              <h3 className="font-bold">{selectedMethodDetails.name}</h3>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex gap-3">
              <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="mb-2 text-blue-800 dark:text-blue-300 font-medium">How this verification works</p>
                {selectedMethodDetails.id === "portfolio" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Upload samples of your work to be reviewed by our panel of experts in the field. They will evaluate
                    the quality of your work and determine your skill level.
                  </p>
                )}
                {selectedMethodDetails.id === "credential" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Connect your accounts from training platforms or upload certificates to verify your formal
                    qualifications. We'll confirm with the issuing organizations.
                  </p>
                )}
                {selectedMethodDetails.id === "skill_test" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Complete a timed assessment designed to test your proficiency in this skill area. The test is
                    curated by industry experts and evaluates both theoretical knowledge and practical application.
                  </p>
                )}
                {selectedMethodDetails.id === "onchain" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Provide links to deployed smart contracts or dApps you've worked on. Our verification system will
                    analyze the code and on-chain data to confirm your contributions.
                  </p>
                )}
                {selectedMethodDetails.id === "github" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Connect your GitHub account to verify your blockchain development skills. We'll analyze your
                    repositories, commit history, and contributions to blockchain projects.
                  </p>
                )}
                {selectedMethodDetails.id === "tx_history" && (
                  <p className="text-blue-700 dark:text-blue-400">
                    Connect your wallet or provide transaction hashes of your work on-chain. Our system will verify your
                    interactions with contracts and protocols to confirm your experience.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="font-medium">What you'll need to provide:</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                {selectedMethodDetails.id === "portfolio" && (
                  <>
                    <li>3-5 examples of your best work in this skill area</li>
                    <li>Brief description of your role in each project</li>
                    <li>Any additional context that helps evaluate your contribution</li>
                  </>
                )}
                {selectedMethodDetails.id === "credential" && (
                  <>
                    <li>Digital copies of relevant certificates or diplomas</li>
                    <li>Links to online course completions</li>
                    <li>Contact information for verification (if needed)</li>
                  </>
                )}
                {selectedMethodDetails.id === "skill_test" && (
                  <>
                    <li>60-90 minutes of uninterrupted time</li>
                    <li>Computer with reliable internet connection</li>
                    <li>Any tools or software typically used in this skill area</li>
                  </>
                )}
                {selectedMethodDetails.id === "onchain" && (
                  <>
                    <li>Contract addresses of your deployed work</li>
                    <li>GitHub repositories (if applicable)</li>
                    <li>Documentation explaining your contributions</li>
                  </>
                )}
                {selectedMethodDetails.id === "github" && (
                  <>
                    <li>GitHub account with blockchain-related repositories</li>
                    <li>Permission to analyze your public repositories</li>
                    <li>Brief explanation of your main contributions</li>
                  </>
                )}
                {selectedMethodDetails.id === "tx_history" && (
                  <>
                    <li>Wallet connection or transaction hashes</li>
                    <li>Brief explanation of relevant transactions</li>
                    <li>Timeline of your blockchain interactions</li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="btn-outline text-sm">
                Back
              </button>
              <button onClick={() => setCurrentStep("confirm")} className="btn-primary text-sm">
                Continue
              </button>
            </div>
          </>
        )}

        {currentStep === "confirm" && selectedMethodDetails && (
          <>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium mb-3">Verification Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Skill:</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Type:</span>
                  <span>{skill.category === "web2" ? "Traditional" : "Blockchain"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Method:</span>
                  <span>{selectedMethodDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Time estimate:</span>
                  <span>{selectedMethodDetails.timeEstimate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                  <span>{selectedMethodDetails.cost}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-200">
              <p>
                By proceeding, you agree to complete the verification process truthfully and understand that
                misrepresentation may result in removal of verified status.
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="btn-outline text-sm">
                Back
              </button>
              <button onClick={handleRequestVerification} className="btn-primary text-sm">
                Request Verification
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
