import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, GitlabIcon as GitHub } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="FreeLance DAO" width={40} height={40} className="mr-2" />
              <span className="font-bold text-xl text-primary">FreeLance DAO</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              The first decentralized freelancing platform built on Solana, where talent and opportunity connect.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<GitHub size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">For Clients</h3>
            <ul className="space-y-2">
              <FooterLink href="/how-it-works">How it Works</FooterLink>
              <FooterLink href="/find-freelancers">Find Freelancers</FooterLink>
              <FooterLink href="/post-job">Post a Job</FooterLink>
              <FooterLink href="/enterprise">Enterprise Solutions</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">For Freelancers</h3>
            <ul className="space-y-2">
              <FooterLink href="/find-work">Find Work</FooterLink>
              <FooterLink href="/create-profile">Create Profile</FooterLink>
              <FooterLink href="/skills-tests">Skills Tests</FooterLink>
              <FooterLink href="/community">Join Community</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/help-support">Help & Support</FooterLink>
              <FooterLink href="/success-stories">Success Stories</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/governance">DAO Governance</FooterLink>
              <FooterLink href="/developers">Developers</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FreeLance DAO. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-gray-500 dark:text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-500 dark:text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-500 dark:text-gray-500 hover:text-primary">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="text-gray-500 dark:text-gray-500 hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </Link>
  )
}
