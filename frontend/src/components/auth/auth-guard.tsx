'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { getDashboardPathForRole } from '@/lib/auth/auth-guards';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { currentUser, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const publicRoutes = ['/login', '/register'];
    const dashboardRoutes = ['/dashboard', '/teacher-dashboard', '/admin-dashboard'];

    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
      router.replace('/login');
      return;
    }

    if (currentUser && !isAuthenticated) {
      return;
    }

    if (isAuthenticated && currentUser?.role && publicRoutes.includes(pathname)) {
      const destination = getDashboardPathForRole(currentUser?.role);
      if (destination) {
        router.replace(destination);
      }
      return;
    }

    if (isAuthenticated && dashboardRoutes.includes(pathname)) {
      const destination = getDashboardPathForRole(currentUser?.role);
      if (destination && destination !== pathname) {
        router.replace(destination);
      }
    }
  }, [currentUser?.role, isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <span className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Checking session...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
