"use client"

import { useState } from "react"
import { Star, ThumbsUp, Flag } from "lucide-react"

export default function FreelancerReviews({ reviews = [], rating = 0 }) {
  const [filter, setFilter] = useState("all")

  // Calculate rating distribution
  const ratingCounts = reviews.reduce((acc, review) => {
    const ratingKey = Math.floor(review.rating)
    acc[ratingKey] = (acc[ratingKey] || 0) + 1
    return acc
  }, {})

  // Filter reviews based on selected filter
  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true
    const reviewRating = Math.floor(review.rating)
    return reviewRating.toString() === filter
  })

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No reviews available yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Client Reviews</h2>

      {/* Rating Summary */}
      <div className="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{rating.toFixed(1)}</div>
            <div className="flex items-center justify-center mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill={star <= Math.round(rating) ? "currentColor" : "none"}
                  className={star <= Math.round(rating) ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{reviews.length} reviews</div>
          </div>

          {/* Rating Distribution */}
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingCounts[star] || 0
              const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0

              return (
                <div key={star} className="flex items-center mb-2">
                  <div className="flex items-center w-16">
                    <span className="text-sm text-gray-600 dark:text-gray-300 mr-1">{star}</span>
                    <Star size={12} fill="currentColor" className="text-yellow-500" />
                  </div>

                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>

                  <div className="w-12 text-right">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{count}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === "all" ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          All
        </button>

        {[5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            onClick={() => setFilter(star.toString())}
            className={`px-3 py-1 rounded-full text-sm flex items-center ${
              filter === star.toString()
                ? "bg-primary text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {star} <Star size={12} className="ml-1" fill="currentColor" />
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 overflow-hidden">
                    {review.clientAvatar ? (
                      <img
                        src={review.clientAvatar || "/placeholder.svg"}
                        alt={review.clientName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                        {review.clientName.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{review.clientName}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.clientCompany && `${review.clientCompany} • `}
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill={star <= Math.round(review.rating) ? "currentColor" : "none"}
                      className={
                        star <= Math.round(review.rating) ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-3">{review.text}</p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <button className="flex items-center hover:text-gray-700 dark:hover:text-gray-200">
                  <ThumbsUp size={14} className="mr-1" />
                  Helpful
                </button>
                <span className="mx-2">•</span>
                <button className="flex items-center hover:text-gray-700 dark:hover:text-gray-200">
                  <Flag size={14} className="mr-1" />
                  Report
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No reviews match your filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
