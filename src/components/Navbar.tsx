"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain, LogIn, Home, User, LogOut, Settings } from "lucide-react"
import { siteConfig } from "@/site.config"
import { useAuth } from "@/contexts/AuthContext"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, profile, signOut } = useAuth()

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
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user && profile ? (
              // User is logged in
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>{profile.full_name}</span>
                </Button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{profile.full_name}</p>
                      <p className="text-gray-500 capitalize">{profile.role}</p>
                    </div>
                    <Link
                      href={profile.role === 'admin' ? '/admin' : '/owner-portal/dashboard'}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut()
                        setShowUserMenu(false)
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in
              <>
                <Button asChild variant="outline" size="sm">
                  <Link href="/auth/login" className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/auth/signup" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/owner-inquiry" className="flex items-center space-x-2">
                    <Home className="h-4 w-4" />
                    <span>List Your Property</span>
                  </Link>
                </Button>
              </>
            )}
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
                {user && profile ? (
                  // User is logged in - mobile
                  <>
                    <div className="px-3 py-2 border-b">
                      <p className="font-medium text-gray-900">{profile.full_name}</p>
                      <p className="text-sm text-gray-500 capitalize">{profile.role}</p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link 
                        href={profile.role === 'admin' ? '/admin' : '/owner-portal/dashboard'} 
                        onClick={() => setIsOpen(false)} 
                        className="flex items-center justify-center space-x-2"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        signOut()
                        setIsOpen(false)
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  // User is not logged in - mobile
                  <>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/auth/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                        <LogIn className="h-4 w-4" />
                        <span>Sign In</span>
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/auth/signup" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Sign Up</span>
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/owner-inquiry" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                        <Home className="h-4 w-4" />
                        <span>List Your Property</span>
                      </Link>
                    </Button>
                  </>
                )}
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
