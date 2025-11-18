import type { RoutesT } from "../../../types/route.type";
// import { LazyCourseDetails } from "../lazy";

export const allPrivateRoutes: RoutesT = [
  {
    key: "about",
    path: "/about",
    element: <>private about testing</>,
  },
  {
    key: "contact",
    path: "/contact",
    element: <>private contact testing</>,
  },
  // {
  //   key: "course-details",
  //   path: "/course-details/:courseId",
  //   element: <LazyCourseDetails />,
  // },
];

export default allPrivateRoutes;
