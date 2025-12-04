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
  type User,
} from "firebase/auth";
import {
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  purchasedCourses: string[];
  createdAt: any;
  lastLoginAt: any;
}

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signup: (
    email: string,
    password: string,
    displayName?: string
  ) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  loginWithGoogle: () => Promise<{ user: User; token: string | undefined }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (profileData: Partial<User>) => Promise<void>;
  clearError: () => void;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
  hasPurchased: (courseId: string) => boolean;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createUserInFirestore = async (user: User): Promise<void> => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName,
        photoURL: user.photoURL,
        purchasedCourses: [],
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      });
    } else {
      await updateDoc(userRef, {
        lastLoginAt: serverTimestamp(),
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  };

  const fetchUserProfile = async (uid: string): Promise<UserProfile | null> => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as UserProfile) : null;
  };

  const refreshUserProfile = async (): Promise<void> => {
    if (currentUser) {
      const profile = await fetchUserProfile(currentUser.uid);
      setUserProfile(profile);
    }
  };

  const signup = async (
    email: string,
    password: string,
    displayName?: string
  ): Promise<User> => {
    try {
      setError(null);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (displayName) {
        await updateProfile(user, { displayName });
      }

      await sendEmailVerification(user);

      await createUserInFirestore({
        ...user,
        displayName: displayName || user.displayName,
      } as User);

      const profile = await fetchUserProfile(user.uid);
      setUserProfile(profile);

      return user;
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const login = async (email: string, password: string): Promise<User> => {
    try {
      setError(null);
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      await createUserInFirestore(user);

      const profile = await fetchUserProfile(user.uid);
      setUserProfile(profile);

      return user;
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const loginWithGoogle = async (): Promise<{
    user: User;
    token: string | undefined;
  }> => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      provider.addScope("profile");
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);

      await createUserInFirestore(result.user);

      const profile = await fetchUserProfile(result.user.uid);
      setUserProfile(profile);

      const credential = GoogleAuthProvider.credentialFromResult(result);

      return { user: result.user, token: credential?.accessToken };
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setError(null);
      await signOut(auth);
      setUserProfile(null);
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const updateUserProfile = async (
    profileData: Partial<User>
  ): Promise<void> => {
    try {
      setError(null);
      if (currentUser) {
        await updateProfile(currentUser, profileData);
        setCurrentUser({ ...currentUser, ...profileData } as User);
      }
    } catch (err: any) {
      setError(getErrorMessage(err.code));
      throw err;
    }
  };

  const hasPurchased = (courseId: string): boolean => {
    return userProfile?.purchasedCourses?.includes(courseId) ?? false;
  };

  const clearError = (): void => setError(null);

  const getErrorMessage = (errorCode: string): string => {
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const profile = await fetchUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userProfile,
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
    hasPurchased,
    refreshUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
