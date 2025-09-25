import type { RoutesT } from "../../../types/route.type";
import { LazyCourseDetails } from "../lazy";

const allPublicRoutes: RoutesT = [
  {
    key: "course-details",
    path: "/course-details/:id",
    element: <LazyCourseDetails />,
  },
];

export default allPublicRoutes;
