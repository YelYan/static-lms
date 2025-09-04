import authRoutes from "./AuthRoutes";
import allPrivateRoutes from "./allPrivateRoutes";

export const publicRoutes = [...authRoutes];
export const privateRoutes = [...allPrivateRoutes];