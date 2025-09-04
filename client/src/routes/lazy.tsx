import { lazy } from "react";

/* Public Pages */
export const LazyLogin = lazy(() => import("@/pages/publicPages/Login"));
export const LazyRegister = lazy(() => import("@/pages/publicPages/Register"));
export const LazyForgotPassword = lazy(
  () => import("@/pages/publicPages/ForgotPassword")
);
export const LazyResetPassword = lazy(
  () => import("@/pages/publicPages/ResetPassword")
);
export const LazyOTPPage = lazy(() => import("@/pages/publicPages/OTPPage"));
export const LazySearch = lazy(() => import("@/pages/publicPages/Search"));

/* Private pages */
export const LazyNotFound = lazy(() => import("@/pages/NotFound"));
export const LazyHome = lazy(() => import("@/pages/privatePages/Home"));
export const LazyAbout = lazy(() => import("@/pages/privatePages/About"));
export const LazyContact = lazy(() => import("@/pages/privatePages/Contact"));
