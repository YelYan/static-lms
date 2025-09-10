import React, { createContext } from "react";
import { useUser } from "@/services/auth/auth-api-client";

type UserT = Record<"userId" | "email" | "role", string>;

type AuthContextT = {
  user: UserT;
  isLoggedIn: boolean;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextT | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, isError } = useUser();
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn: !isError && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
