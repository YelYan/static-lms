import { LazyAbout, LazyContact } from "../lazy";
import type { RoutesT } from "../../../types/route.type";
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
];

export default allPrivateRoutes;
