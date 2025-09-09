import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/shared/hooks/useAuth";
import type { JSX } from "react";
import { LoadingSpinner } from "@/shared/common";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { user, isLoading, isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoading) return <LoadingSpinner />;

  // store the page user wanted to visit
  if (!user && !isLoggedIn)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default AuthGuard;
