"use client";

import { createContext, useMemo, useState } from "react";

import type { CurrentUser, LoginRequest } from "@/types/auth";

interface AuthContextValue {
  currentUser: CurrentUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<CurrentUser>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<CurrentUser | null>;
  setAuthState: (user: CurrentUser | null, token: string | null, isLoading?: boolean) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      token,
      isAuthenticated: Boolean(token && currentUser),
      isLoading,
      login: async () => {
        throw new Error("Auth login must be handled by the AuthProvider implementation.");
      },
      logout: async () => {},
      refreshUser: async () => null,
      setAuthState: (user, authToken, loading = false) => {
        setCurrentUser(user);
        setToken(authToken);
        setIsLoading(loading);
      },
    }),
    [currentUser, isLoading, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };
export type { AuthContextValue };
