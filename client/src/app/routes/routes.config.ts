import authRoutes from "./auth/authRoutes";
import allPublicRoutes from "./publicRoutes/publicRoutes";
import allPrivateRoutes from "./private/allPrivateRoutes";
import adminRoutes from "./admin/adminRoutes";

export const publicRoutes = [...authRoutes, ...allPublicRoutes];
export const privateRoutes = [...allPrivateRoutes];
export const allAdminRoutes = [...adminRoutes];