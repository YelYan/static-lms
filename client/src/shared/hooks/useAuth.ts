import { useContext } from "react";
import AuthContext from "@/app/providers/AuthProvider";
import type { User as FirebaseUser } from 'firebase/auth';

export type UseAuthReturn = {
  currentUser: FirebaseUser | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (updates: Partial<{
    displayName?: string;
    photoURL?: string;
  }>) => Promise<void>;
  clearError: () => void;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
};

export const useAuth = (): UseAuthReturn => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};