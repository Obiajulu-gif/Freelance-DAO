"use client"

import { useState } from "react"
import { FileText, Tag, DollarSign, CheckCircle } from "lucide-react"

export default function PostJob() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Post a Job</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <StepIndicator number={1} title="Details" active={step >= 1} completed={step > 1} />
          <div className="flex-grow border-t border-gray-300 mx-2"></div>
          <StepIndicator number={2} title="Skills" active={step >= 2} completed={step > 2} />
          <div className="flex-grow border-t border-gray-300 mx-2"></div>
          <StepIndicator number={3} title="Budget" active={step >= 3} completed={step > 3} />
          <div className="flex-grow border-t border-gray-300 mx-2"></div>
          <StepIndicator number={4} title="Review" active={step >= 4} completed={step > 4} />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6 mb-6">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FileText className="mr-2" size={20} />
              Job Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Job Title</label>
                <input
                  type="text"
                  placeholder="e.g., 'Solana Smart Contract Developer Needed'"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Job Description</label>
                <textarea
                  rows={6}
                  placeholder="Describe the job in detail..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a category</option>
                  <option value="web-development">Web Development</option>
                  <option value="smart-contracts">Smart Contracts</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="content">Content Creation</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Tag className="mr-2" size={20} />
              Required Skills
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Skills</label>
                <input
                  type="text"
                  placeholder="e.g., Solana, React, Rust (separate with commas)"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Experience Level</label>
                <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Skills (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., TypeScript, UI/UX (separate with commas)"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <DollarSign className="mr-2" size={20} />
              Budget & Timeline
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Budget Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="budget-type" className="mr-2" />
                    Fixed Price
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="budget-type" className="mr-2" />
                    Hourly Rate
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">From</label>
                  <input
                    type="number"
                    placeholder="Min budget"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">To</label>
                  <input
                    type="number"
                    placeholder="Max budget"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Currency</label>
                <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="usd">USD</option>
                  <option value="sol">SOL</option>
                  <option value="usdc">USDC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Estimated Duration</label>
                <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select duration</option>
                  <option value="less-than-week">Less than 1 week</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="2-4-weeks">2-4 weeks</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="more-than-6-months">More than 6 months</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2" size={20} />
              Review & Post
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Job Details</h3>
                <p className="text-gray-600 dark:text-gray-300">Solana Smart Contract Developer Needed</p>
                <p className="text-sm text-gray-500 mt-1">Category: Smart Contracts</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded">Solana</span>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded">Rust</span>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded">Smart Contracts</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Experience Level: Expert</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Budget & Timeline</h3>
                <p className="text-gray-600 dark:text-gray-300">$1,000 - $2,000 USD</p>
                <p className="text-sm text-gray-500 mt-1">Duration: 2-4 weeks</p>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="dao-bounty" className="mr-2" />
                <label htmlFor="dao-bounty" className="text-sm">
                  Make this a DAO bounty (community-funded job)
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className={`btn-outline ${step === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={step === 1}
        >
          Back
        </button>

        {step < 4 ? (
          <button onClick={nextStep} className="btn-primary">
            Continue
          </button>
        ) : (
          <button className="btn-secondary">Post Job</button>
        )}
      </div>
    </div>
  )
}

function StepIndicator({ number, title, active, completed }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          completed
            ? "bg-accent text-white"
            : active
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-500 dark:bg-gray-700"
        }`}
      >
        {completed ? <CheckCircle size={16} /> : number}
      </div>
      <span className={`text-xs mt-1 ${active ? "font-bold" : "text-gray-500"}`}>{title}</span>
    </div>
  )
}
