import { Shield, CheckCircle, Clock } from "lucide-react"

export default function VerificationBadge({ status, size = "md", showLabel = false }) {
  const getStatusConfig = () => {
    switch (status) {
      case "verified":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bg: "bg-green-100 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-800",
          label: "Verified",
          tooltip: "This skill has been verified by FreeLanceDAO",
        }
      case "pending":
        return {
          icon: Clock,
          color: "text-amber-500",
          bg: "bg-amber-100 dark:bg-amber-900/30",
          border: "border-amber-200 dark:border-amber-800",
          label: "Pending",
          tooltip: "Verification in progress",
        }
      default:
        return {
          icon: Shield,
          color: "text-gray-400",
          bg: "bg-gray-100 dark:bg-gray-800",
          border: "border-gray-200 dark:border-gray-700",
          label: "Unverified",
          tooltip: "This skill has not been verified yet",
        }
    }
  }

  const config = getStatusConfig()
  const sizeClasses = {
    sm: "w-5 h-5 text-xs",
    md: "w-7 h-7 text-sm",
    lg: "w-9 h-9 text-base",
  }

  return (
    <div className="group relative">
      <div className="flex items-center gap-1.5">
        <div
          className={`${sizeClasses[size]} ${config.bg} ${config.border} rounded-full border flex items-center justify-center`}
        >
          <config.icon className={`${config.color} h-3/5 w-3/5`} />
        </div>
        {showLabel && <span className={`${config.color} text-xs font-medium`}>{config.label}</span>}
      </div>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap z-10">
        {config.tooltip}
      </div>
    </div>
  )
}
