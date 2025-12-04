import { lazy } from "react";

/* Public Pages */
export const LazyLogin = lazy(() => import("@/features/auth/pages/Login"));
export const LazyRegister = lazy(
  () => import("@/features/auth/pages/Register")
);
export const LazyForgotPassword = lazy(
  () => import("@/features/auth/pages/ForgotPassword")
);
export const LazyOTPPage = lazy(() => import("@/features/auth/pages/OTPPage"));

/* Private pages */
export const LazyNotFound = lazy(() => import("@/features/NotFound/NotFound"));
export const LazyHome = lazy(() => import("@/features/home/pages/Home"));

/* Dashboard pages */
export const LazyDashboard = lazy(
  () => import("@/features/dashborad/pages/Dashboard")
);
export const LazyDashboardProject = lazy(
  () => import("@/features/dashborad/pages/DashboardProject")
);
export const LazyCourseDetails = lazy(
  () => import("@/features/courseDetails/pages/CourseDateils")
);
