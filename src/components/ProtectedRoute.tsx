"use client"

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: ('owner' | 'admin')[]
  adminOnly?: boolean
  ownerOnly?: boolean
}

export function ProtectedRoute({ 
  children, 
  allowedRoles, 
  adminOnly = false, 
  ownerOnly = false 
}: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return // Still loading, wait

    // No user logged in
    if (!user) {
      router.push('/auth/login')
      return
    }

    // User logged in but no profile (shouldn't happen but just in case)
    if (!profile) {
      router.push('/auth/login')
      return
    }

    // Check role restrictions
    if (adminOnly && profile.role !== 'admin') {
      router.push('/owner-portal/dashboard')
      return
    }

    if (ownerOnly && profile.role !== 'owner') {
      router.push('/admin')
      return
    }

    if (allowedRoles && !allowedRoles.includes(profile.role)) {
      // Redirect based on user role
      if (profile.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/owner-portal/dashboard')
      }
      return
    }
  }, [user, profile, loading, router, allowedRoles, adminOnly, ownerOnly])

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  // Don't render anything if user is not authenticated or doesn't have permission
  if (!user || !profile) {
    return null
  }

  // Check final role restrictions
  if (adminOnly && profile.role !== 'admin') {
    return null
  }

  if (ownerOnly && profile.role !== 'owner') {
    return null
  }

  if (allowedRoles && !allowedRoles.includes(profile.role)) {
    return null
  }

  return <>{children}</>
}

// Convenience components for common use cases
export function AdminOnly({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute adminOnly>{children}</ProtectedRoute>
}

export function OwnerOnly({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute ownerOnly>{children}</ProtectedRoute>
}
