'use client'

import { Bell, Search, LogOut, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

export function TeacherTopNav() {
  const router = useRouter()
  const { logout } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = async () => {
    await logout()
    router.replace('/login')
  }

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-40 shadow-sm">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between gap-4 px-6 lg:px-8">
        {/* Left - Greeting */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-serif font-bold text-foreground">
            Good morning, Teacher! <span className="wave">👋</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening with your courses today.
          </p>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:block">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full rounded-xl border border-border bg-muted pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Notification Bell */}
          <button className="group relative rounded-lg p-2 text-muted-foreground hover:bg-muted transition-colors">
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-accent rounded-full animate-pulse" />
          </button>

          {/* Profile with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 pl-4 border-l border-border hover:opacity-80 transition-opacity"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-foreground">
                  Dr. Sarah Johnson
                </p>
                <p className="text-xs text-muted-foreground">Teacher</p>
              </div>
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                alt="Dr. Sarah Johnson"
                width={40}
                height={40}
                className="size-10 rounded-lg"
              />
              <ChevronDown className="size-4 text-muted-foreground hidden sm:block" />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
                <Link
                  href="/teacher-dashboard/settings"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  Settings
                </Link>
                <Link
                  href="/teacher-dashboard/profile"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  Profile
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm text-destructive hover:bg-destructive/10 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
        }
        .wave {
          display: inline-block;
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </nav>
  )
}


