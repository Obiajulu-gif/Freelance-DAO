"use client"
import { Clock, Check, X } from "lucide-react"

export default function ProposalItem({ proposal, onClick }) {
  return (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">{proposal.id}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                proposal.status === "active"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : proposal.status === "passed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
            </span>
          </div>
          <h4 className="font-medium text-gray-900 dark:text-white mt-1">{proposal.title}</h4>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock size={14} className="mr-1" />
          <span>{proposal.endTime}</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${proposal.votes.for}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Check size={12} className="mr-1 text-green-500" />
            <span>Yes: {proposal.votes.for}%</span>
          </div>
          <div className="flex items-center">
            <X size={12} className="mr-1 text-red-500" />
            <span>No: {proposal.votes.against}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
