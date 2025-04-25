"use client"

import { Shield, Info } from "lucide-react"
import { useState } from "react"

export default function VerificationBadge({ type, skill, verifiedDate }) {
  const [showTooltip, setShowTooltip] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getBadgeColor = () => {
    if (type === "web3") return "bg-purple-100 text-purple-800 border-purple-200"
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  return (
    <div className="relative inline-flex">
      <div
        className={`text-xs px-2 py-1 rounded-full border flex items-center ${getBadgeColor()}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Shield size={12} className="mr-1" />
        <span>{skill}</span>
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white dark:bg-gray-800 rounded shadow-lg text-xs z-10">
          <div className="flex items-start mb-1">
            <Info size={12} className="mr-1 mt-0.5 flex-shrink-0" />
            <span>
              <strong>{type === "web3" ? "Blockchain" : "Traditional"} skill</strong> verified on{" "}
              {formatDate(verifiedDate)}
            </span>
          </div>
          <div className="text-gray-500 text-[10px]">
            Verification valid until{" "}
            {formatDate(new Date(new Date(verifiedDate).setFullYear(new Date(verifiedDate).getFullYear() + 1)))}
          </div>
        </div>
      )}
    </div>
  )
}
