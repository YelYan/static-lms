import type { RoutesT } from "../../../types/route.type";
import { LazyCourseDetails } from "../lazy";

const allPublicRoutes: RoutesT = [
  {
    key: "course-details",
    path: "/course-details/:courseId",
    element: <LazyCourseDetails />,
  },
];

export default allPublicRoutes;
