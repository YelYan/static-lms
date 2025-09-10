import authRoutes from "./auth/authRoutes";
import allPrivateRoutes from "./private/allPrivateRoutes";
import adminRoutes from "./admin/adminRoutes";

export const publicRoutes = [...authRoutes];
export const privateRoutes = [...allPrivateRoutes];
export const allAdminRoutes = [...adminRoutes];