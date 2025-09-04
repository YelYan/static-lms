import authRoutes from "./auth/authRoutes";
import allPrivateRoutes from "./private/allPrivateRoutes";

export const publicRoutes = [...authRoutes];
export const privateRoutes = [...allPrivateRoutes];