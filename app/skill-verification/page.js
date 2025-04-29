"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import SkillVerificationSystem from "@/components/skill-verification/SkillVerificationSystem"

export default function SkillVerificationPage() {
  return (
    <div className="p-4 md:p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6">
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Skill Verification</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Verify your skills to increase your visibility and trustworthiness to potential clients. FreeLanceDAO
            supports verification for both traditional (Web2) and blockchain (Web3) skills.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-8">
          <h2 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Why Verify Your Skills?</h2>
          <ul className="list-disc ml-5 space-y-2 text-sm text-blue-700 dark:text-blue-400">
            <li>
              Verified freelancers receive <strong>45% more job invitations</strong> on average
            </li>
            <li>Clients can filter search results to show only verified freelancers</li>
            <li>Verified skills appear higher in search results</li>
            <li>Build trust with potential clients before they even contact you</li>
            <li>Showcase your expertise with official verification badges</li>
          </ul>
        </div>

        <SkillVerificationSystem />
      </div>
    </div>
  )
}
