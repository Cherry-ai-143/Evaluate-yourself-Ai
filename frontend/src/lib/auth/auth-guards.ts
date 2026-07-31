import type { CurrentUser } from "@/types/auth";

export type UserRole = CurrentUser["role"];

export function getDashboardPathForRole(role: UserRole | undefined): string | null {
  switch (role) {
    case "student":
      return "/dashboard";
    case "teacher":
      return "/teacher-dashboard";
    case "admin":
      return "/admin-dashboard";
    default:
      return null;
  }
}

export function isAllowedForRole(role: UserRole | undefined, pathname: string): boolean {
  if (pathname === "/dashboard" || pathname === "/teacher-dashboard" || pathname === "/admin-dashboard") {
    const dashboardPath = getDashboardPathForRole(role);
    return dashboardPath === pathname;
  }

  return true;
}
