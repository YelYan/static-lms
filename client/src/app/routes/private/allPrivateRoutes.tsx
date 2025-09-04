import {
  LazyAbout,
  LazyContact,
  LazyDashboard,
  LazyDashboardProject,
} from "../lazy";
import type { RoutesT } from "../route.type";
export const allPrivateRoutes: RoutesT = [
  {
    key: "about",
    path: "/about",
    element: <LazyAbout />,
  },
  {
    key: "contact",
    path: "/contact",
    element: <LazyContact />,
  },
  {
    key: "dashboard",
    path: "/dashboard",
    element: <LazyDashboard />,
  },
  {
    key: "dashboard",
    path: "/dashboard",
    element: <LazyDashboard />,
  },
  {
    key: "dashboard-project",
    path: "/dashboard/project",
    element: <LazyDashboardProject />,
  },
];

export default allPrivateRoutes;
