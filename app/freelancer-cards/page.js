import FreelancerCardShowcase from "@/components/FreelancerCardShowcase"

export default function FreelancerCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Freelancer Card Variations
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Different card layouts for featuring freelancers throughout the platform
          </p>

          <FreelancerCardShowcase />
        </div>
      </div>
    </div>
  )
}
