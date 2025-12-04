import type { RoutesT } from "../../../types/route.type";
import { LazyLogin, LazyRegister, LazyForgotPassword } from "../lazy";

const authRoutes: RoutesT = [
  {
    key: "login",
    path: "/login",
    element: <LazyLogin />,
  },
  {
    key: "signup",
    path: "/signup",
    element: <LazyRegister />,
  },
  {
    key: "forgot-password",
    path: "/forgot-password",
    element: <LazyForgotPassword />,
  },
];

export default authRoutes;
