"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NavigationHub from "@/components/NavigationHub"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <NavigationHub />
      </div>
      <Footer />
    </div>
  )
}
