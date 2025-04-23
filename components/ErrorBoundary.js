"use client"

import { useState, useEffect } from "react"
import { AlertTriangle } from "lucide-react"

export default function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (error) => {
      console.error("Caught error:", error)
      setHasError(true)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return fallback || <DefaultErrorFallback />
  }

  return children
}

function DefaultErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
      <AlertTriangle size={48} className="text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Something went wrong</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
        We encountered an error while loading this content. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg"
      >
        Reload Page
      </button>
    </div>
  )
}
