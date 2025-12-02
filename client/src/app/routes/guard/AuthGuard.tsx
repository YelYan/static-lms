import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";
import type React from "react";
import { LoadingSpinner } from "@/shared/common";

const ProtectedRoute = ({
  children,
  requireVerified = false,
}: {
  children: React.ReactNode;
  requireVerified: boolean;
}) => {
  const { currentUser, isEmailVerified, loading } = useAuth();
  const location = useLocation();

  if (loading) <LoadingSpinner />;

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireVerified && !isEmailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

export default ProtectedRoute;
