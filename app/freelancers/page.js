import { Search, Filter, Star } from "lucide-react"

export default function Freelancers() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Freelancers</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for skills, expertise, or keywords..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Freelancers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <FreelancerCard key={i} />
        ))}
      </div>
    </div>
  )
}

function FreelancerCard() {
  return (
    <div className="card p-6 hover:border-primary transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          <img src="/placeholder.svg" alt="Freelancer" className="w-full h-full object-cover" />
        </div>

        <div className="flex-grow">
          <h3 className="font-bold text-lg">John Doe</h3>
          <p className="text-primary font-medium">Full Stack Developer</p>

          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-sm text-gray-500">(4.8)</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Node.js</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Solana</span>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Web3</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">$45</span>
            <span className="text-gray-500 text-sm">/hr</span>
          </div>
          <button className="btn-outline text-sm py-1">View Profile</button>
        </div>
      </div>
    </div>
  )
}
