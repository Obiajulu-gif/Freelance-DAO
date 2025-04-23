"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"

export default function SafeImage({ src, alt, fallbackSrc, ...props }) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  if (error) {
    if (fallbackSrc) {
      return <Image src={fallbackSrc || "/placeholder.svg"} alt={alt} {...props} />
    }

    return (
      <div
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-800"
        style={{ width: props.width || "100%", height: props.height || "100%" }}
      >
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-600">
          <ImageOff size={24} className="mb-2" />
          <span className="text-xs">{alt || "Image not available"}</span>
        </div>
      </div>
    )
  }

  return <Image src={src || "/placeholder.svg"} alt={alt} onError={handleError} {...props} />
}
