import type { RoutesT } from "../../../types/route.type";
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
];

export default allPrivateRoutes;
