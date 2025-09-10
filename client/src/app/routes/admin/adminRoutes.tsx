import type { RoutesT } from "../../../types/route.type";
import { LazyDashboardProject, LazyDashboard } from "../lazy";

const adminRoutes: RoutesT = [
  {
    key: "admin-dashboard",
    path: "/dashboard",
    element: <LazyDashboard />,
  },
  {
    key: "admin-dashboard-project",
    path: "/dashboard/projects",
    element: <LazyDashboardProject />,
  },
];

export default adminRoutes;
