"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/contexts/AuthContext";
import { getCurrentUser, login as loginApi, logout as logoutApi } from "@/lib/api";
import { clearAuthToken, persistAuthToken, readStoredAuthToken } from "@/lib/auth/auth-storage";
import { getApiErrorMessage } from "@/lib/api/errors";
import { getDashboardPathForRole } from "@/lib/auth/auth-guards";
import type { CurrentUser, LoginRequest } from "@/types/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const setAuthState = useCallback((user: CurrentUser | null, authToken: string | null, loading = false) => {
    setCurrentUser(user);
    setToken(authToken);
    setIsLoading(loading);
    if (!authToken) {
      setAuthError(null);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    const storedToken = readStoredAuthToken();

    if (!storedToken) {
      setAuthState(null, null, false);
      return null;
    }

    try {
      const user = await getCurrentUser();
      setAuthState(user, storedToken, false);
      return user;
    } catch (error) {
      clearAuthToken();
      setAuthState(null, null, false);
      setAuthError(getApiErrorMessage(error));
      return null;
    }
  }, [setAuthState]);

  useEffect(() => {
    void refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'auth_token' && !event.newValue) {
        clearAuthToken();
        setCurrentUser(null);
        setToken(null);
        setAuthError(null);
        setIsLoading(false);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const login = useCallback(async (credentials: LoginRequest) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const tokenResponse = await loginApi(credentials);
      persistAuthToken(tokenResponse.access_token);

      const user = await getCurrentUser();
      setAuthState(user, tokenResponse.access_token, false);

      if (user?.role) {
        router.replace(getDashboardPathForRole(user.role) ?? '/login');
      }

      return user;
    } catch (error) {
      clearAuthToken();
      setCurrentUser(null);
      setToken(null);
      setAuthError(getApiErrorMessage(error));
      setIsLoading(false);
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    logoutApi();
    clearAuthToken();
    setCurrentUser(null);
    setToken(null);
    setAuthError(null);
    setIsLoading(false);
    router.replace("/login");
  }, [router]);

  const value = useMemo(
    () => ({
      currentUser,
      token,
      isAuthenticated: Boolean(token && currentUser),
      isLoading,
      login,
      logout,
      refreshUser,
      setAuthState,
    }),
    [currentUser, isLoading, login, logout, refreshUser, setAuthState, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
