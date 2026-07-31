'use client'

import { Bell, Search, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function TopNav() {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-40 shadow-sm">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between gap-4 px-6 lg:px-8">
        {/* Left - Greeting */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-serif font-bold text-foreground">
            Welcome back, Alex <span className="wave">👋</span>
          </h2>
          <p className="text-sm text-muted-foreground">Let's continue your learning journey today</p>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:block">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search courses, quizzes..."
                className="w-full rounded-xl border border-border bg-muted pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Notification Bell */}
          <button className="group relative rounded-lg p-2 text-muted-foreground hover:bg-muted transition-colors">
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-accent rounded-full animate-pulse" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              alt="Alex Johnson"
              width={40}
              height={40}
              className="size-10 rounded-lg"
            />
            <Link
              href="/"
              className="ml-2 p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="size-5" />
            </Link>
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
