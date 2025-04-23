"use client"

import useMobile from "../hooks/use-mobile"

export default function ResponsiveGrid({
  children,
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3,
  gap = 6,
  className = "",
}) {
  const isMobile = useMobile()

  const getGridClass = () => {
    return `grid grid-cols-${mobileColumns} md:grid-cols-${tabletColumns} lg:grid-cols-${desktopColumns} gap-${gap}`
  }

  return <div className={`${getGridClass()} ${className}`}>{children}</div>
}
