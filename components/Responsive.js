"use client"

import { useState, useEffect } from "react"
import useMobile from "../hooks/use-mobile"

export function MobileOnly({ children }) {
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return isMobile ? children : null
}

export function DesktopOnly({ children }) {
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return !isMobile ? children : null
}
