"use client"

import { useState, useEffect } from "react"
import useMobile from "../hooks/use-mobile"

export default function ResponsiveLayout({
  children,
  mobileClassName = "px-4 py-6",
  desktopClassName = "container mx-auto px-4 py-8",
}) {
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={desktopClassName}>{children}</div>
  }

  return <div className={isMobile ? mobileClassName : desktopClassName}>{children}</div>
}
