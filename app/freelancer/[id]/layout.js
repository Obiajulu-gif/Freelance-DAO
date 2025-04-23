import { Suspense } from "react"

export default function FreelancerLayout({ children }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
