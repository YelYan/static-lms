import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import type { UseAuthReturn } from "@/shared/hooks/useAuth";

// Create the context
const AuthContext = createContext<UseAuthReturn | undefined>(undefined);

// Auth Provider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sign up with email and password
  const signup = async (
    email: string,
    password: string,
    displayName = null
  ) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update display name if provided
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      // Send email verification
      await sendEmailVerification(userCredential.user);

      return userCredential.user;
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Login with email and password
  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();

      // Optional: Add scopes
      provider.addScope("email");
      provider.addScope("profile");

      // Optional: Set custom parameters
      provider.setCustomParameters({
        prompt: "select_account", // Forces account selection
      });

      const result = await signInWithPopup(auth, provider);

      // Get Google Access Token (if needed)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      return { user: result.user, token };
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Update user profile
  const updateUserProfile = async (profileData: any) => {
    try {
      setError(null);
      if (currentUser) {
        await updateProfile(currentUser, profileData);
        // Force refresh the current user
        setCurrentUser({ ...currentUser, ...profileData });
      }
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  // Clear error
  const clearError = () => setError(null);

  // Helper function to get user-friendly error messages
  const getErrorMessage = (errorCode: string) => {
    const errorMessages: Record<string, string> = {
      "auth/email-already-in-use": "This email is already registered.",
      "auth/invalid-email": "Invalid email address.",
      "auth/operation-not-allowed": "Operation not allowed.",
      "auth/weak-password": "Password is too weak. Use at least 6 characters.",
      "auth/user-disabled": "This account has been disabled.",
      "auth/user-not-found": "No account found with this email.",
      "auth/wrong-password": "Incorrect password.",
      "auth/invalid-credential": "Invalid email or password.",
      "auth/too-many-requests": "Too many attempts. Please try again later.",
      "auth/popup-closed-by-user": "Sign-in popup was closed.",
      "auth/cancelled-popup-request": "Sign-in was cancelled.",
      "auth/popup-blocked": "Sign-in popup was blocked by the browser.",
      "auth/network-request-failed": "Network error. Check your connection.",
    };
    return errorMessages[errorCode] || "An unexpected error occurred.";
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    clearError,
    isAuthenticated: !!currentUser,
    isEmailVerified: currentUser?.emailVerified ?? false,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
