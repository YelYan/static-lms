import type { RoutesT } from "./route.type";
import {
  LazyLogin,
  LazyOTPPage,
  LazyResetPassword,
  LazyRegister,
  LazyForgotPassword,
} from "./lazy";

const authRoutes: RoutesT = [
  {
    key: "login",
    path: "/login",
    element: <LazyLogin />,
  },
  {
    key: "register",
    path: "/register",
    element: <LazyRegister />,
  },
  {
    key: "forgot-password",
    path: "/forgot-password",
    element: <LazyForgotPassword />,
  },
  {
    key: "reset-password",
    path: "/reset-password/:userId/:resetToken",
    element: <LazyResetPassword />,
  },
  {
    key: "otp",
    path: "/otp",
    element: <LazyOTPPage />,
  },
];

export default authRoutes;
