"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Modal from "./Modal"
import { Shield, Upload, Link, CheckCircle2, AlertCircle } from "lucide-react"

export default function VerificationModal({ isOpen, onClose, skill, skillType }) {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [links, setLinks] = useState([""])
  const [walletConnected, setWalletConnected] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setStep(3)
    }, 2000)
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const addLinkField = () => {
    setLinks([...links, ""])
  }

  const updateLink = (index, value) => {
    const newLinks = [...links]
    newLinks[index] = value
    setLinks(newLinks)
  }

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  const connectWallet = () => {
    setWalletConnected(true)
  }

  const resetModal = () => {
    setStep(1)
    setStatus("idle")
    setUploadedFiles([])
    setLinks([""])
    setWalletConnected(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={resetModal} title={`Verify ${skill || "Skill"}`}>
      <div className="py-2">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                }`}
              >
                {i}
              </div>
              <span className="text-xs mt-1 text-gray-500">
                {i === 1 ? "Details" : i === 2 ? "Submit" : "Verified"}
              </span>
            </div>
          ))}

          {/* Connecting lines */}
          <div className="absolute left-1/4 right-1/4 top-[45px] h-[2px] bg-gray-200 dark:bg-gray-700 -z-10">
            <div className="h-full bg-primary transition-all" style={{ width: step >= 2 ? "100%" : "0%" }}></div>
          </div>
        </div>

        {step === 1 && (
          <div>
            <div className="flex items-center mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Shield className="text-primary mr-3" size={20} />
              <div className="text-sm">
                <strong>Why verify?</strong> Verified skills increase your visibility by 40% and help you win more
                projects.
              </div>
            </div>

            <h3 className="font-semibold mb-3">Verification Requirements</h3>

            {skillType === "web3" ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To verify your blockchain skills, we'll need to connect to your wallet and analyze your on-chain
                  activity.
                </p>

                <button
                  onClick={connectWallet}
                  className={`btn-primary w-full ${walletConnected ? "bg-green-600 hover:bg-green-700" : ""}`}
                  disabled={walletConnected}
                >
                  {walletConnected ? "Wallet Connected ✓" : "Connect Wallet"}
                </button>

                {walletConnected && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Additionally, you can provide links to your contributions:
                    </p>

                    {links.map((link, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          value={link}
                          onChange={(e) => updateLink(index, e.target.value)}
                          placeholder="GitHub, etherscan, or project URL"
                          className="flex-grow p-2 border rounded-lg mr-2"
                        />
                        <button onClick={() => removeLink(index)} className="text-red-500 hover:text-red-700">
                          ×
                        </button>
                      </div>
                    ))}

                    <button onClick={addLinkField} className="text-primary text-sm hover:underline">
                      + Add another link
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Upload Portfolio Samples</label>
                  <div
                    className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => document.getElementById("file-upload").click()}
                  >
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400">PDF, PNG, JPG up to 10MB</p>
                    <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Uploaded Files</h4>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded"
                        >
                          <span className="text-sm truncate">{file.name}</span>
                          <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-1">Add Relevant Links</label>
                  {links.map((link, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <div className="mr-2">
                        <Link size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={link}
                        onChange={(e) => updateLink(index, e.target.value)}
                        placeholder="Portfolio, GitHub, or project URL"
                        className="flex-grow p-2 border rounded-lg mr-2"
                      />
                      <button onClick={() => removeLink(index)} className="text-red-500 hover:text-red-700">
                        ×
                      </button>
                    </div>
                  ))}

                  <button onClick={addLinkField} className="text-primary text-sm hover:underline">
                    + Add another link
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="btn-primary"
                disabled={skillType === "web3" && !walletConnected}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Verification Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Skill:</span>
                  <span className="font-medium">{skill}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Type:</span>
                  <span className="font-medium">
                    {skillType === "web3" ? "Blockchain (Web3)" : "Traditional (Web2)"}
                  </span>
                </div>

                {skillType === "web3" ? (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Wallet:</span>
                    <span className="font-medium">Connected (0x1a2...3b4c)</span>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Uploads:</span>
                    <span className="font-medium">{uploadedFiles.length} files</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-500">Links:</span>
                  <span className="font-medium">{links.filter((l) => l.trim()).length} links</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Additional Information (optional)</label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows={3}
                  placeholder="Add any additional context that might help with verification"
                ></textarea>
              </div>

              <div className="flex items-center mb-6">
                <input type="checkbox" id="terms" className="mr-2 h-4 w-4" required />
                <label htmlFor="terms" className="text-sm">
                  I confirm that all information provided is accurate and my own work.
                </label>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="btn-outline">
                  Back
                </button>

                <button type="submit" className="btn-primary" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit for Verification"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-6">
            {status === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Verification Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {skillType === "web3"
                    ? "Your blockchain skill verification is being processed. This usually takes less than 24 hours."
                    : "Your skill verification request has been submitted. Our team will review it within 2-5 business days."}
                </p>
                <button onClick={resetModal} className="btn-primary">
                  Done
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Something Went Wrong</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We couldn't process your verification request. Please try again later.
                </p>
                <div className="flex space-x-3 justify-center">
                  <button onClick={resetModal} className="btn-outline">
                    Cancel
                  </button>
                  <button onClick={() => setStep(2)} className="btn-primary">
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </Modal>
  )
}
