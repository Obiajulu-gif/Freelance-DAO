import { Search, Filter, Clock, DollarSign } from "lucide-react"

export default function Gigs() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Gigs</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for gigs, projects, or keywords..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Gigs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <GigCard key={i} />
        ))}
      </div>
    </div>
  )
}

function GigCard() {
  return (
    <div className="card overflow-hidden hover:border-primary transition-colors">
      <div className="h-40 bg-gray-200 relative">
        <img src="/placeholder.svg" alt="Gig" className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-primary px-2 py-1 rounded text-xs font-bold">
          Featured
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Build a DeFi Dashboard with Solana Integration</h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Solana</span>
          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Web3</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          Looking for an experienced developer to build a dashboard for tracking DeFi investments on Solana blockchain.
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>2 weeks</span>
          </div>
          <div className="flex items-center">
            <DollarSign size={14} className="mr-1" />
            <span>$1,000-$2,000</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="/placeholder.svg" alt="Client" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">CryptoClient</span>
          </div>
          <button className="btn-outline text-sm py-1">Apply</button>
        </div>
      </div>
    </div>
  )
}
