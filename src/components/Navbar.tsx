"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain, LogIn, Home } from "lucide-react"
import { siteConfig } from "@/site.config"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Our Guarantee", href: "/guarantee" },
    { name: "Coverage", href: "/coverage" },
    { name: "Markets", href: "/markets" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
      <Button asChild variant="outline" size="sm">
        <Link href="/owner-portal/login" className="flex items-center space-x-2">
          <LogIn className="h-4 w-4" />
          <span>Owner Login</span>
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href="/owner-inquiry" className="flex items-center space-x-2">
          <Home className="h-4 w-4" />
          <span>List Your Property</span>
        </Link>
      </Button>
            <Button asChild>
              <Link href="/contact">Email Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/owner-portal/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Owner Login</span>
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/owner-inquiry" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                    <Home className="h-4 w-4" />
                    <span>List Your Property</span>
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Email Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
