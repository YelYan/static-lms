import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/shared/hooks/useAuth";
import type { JSX } from "react";
import { LoadingSpinner } from "@/shared/common";

type AuthGuardpropsT = { children: JSX.Element; allowedRoles?: string[] };

const AuthGuard = ({ children, allowedRoles }: AuthGuardpropsT) => {
  const { user, isLoading, isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // store the page user wanted to visit
  if (!user && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Role-based protection
  if (allowedRoles && user && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // Allow access
  return children;
};

export default AuthGuard;
