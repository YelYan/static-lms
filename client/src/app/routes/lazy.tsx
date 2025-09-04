import { lazy } from "react";

/* Public Pages */
export const LazyLogin = lazy(() => import("@/features/auth/pages/Login"));
export const LazyRegister = lazy(
  () => import("@/features/auth/pages/Register")
);
export const LazyForgotPassword = lazy(
  () => import("@/features/auth/pages/ForgotPassword")
);
export const LazyResetPassword = lazy(
  () => import("@/features/auth/pages/ResetPassword")
);
export const LazyOTPPage = lazy(() => import("@/features/auth/pages/OTPPage"));
export const LazySearch = lazy(() => import("@/features/search/pages/Search"));

/* Private pages */
export const LazyNotFound = lazy(() => import("@/features/NotFound/NotFound"));
export const LazyHome = lazy(() => import("@/features/home/pages/Home"));
export const LazyAbout = lazy(() => import("@/features/about/pages/About"));
export const LazyContact = lazy(
  () => import("@/features/contact/pages/Contact")
);

/* Dashboard pages */
export const LazyDashboard = lazy(
  () => import("@/features/dashborad/pages/Dashboard")
);
export const LazyDashboardProject = lazy(
  () => import("@/features/dashborad/pages/DashboardProject")
);
