import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FreeLance DAO",
  description: "Work. Earn. Own the Future of Freelancing.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 md:pt-0 md:pl-64">{children}</main>
      </body>
    </html>
  )
}
