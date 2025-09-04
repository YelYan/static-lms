import type { RoutesT } from "./route.type";
import { LazyAbout, LazyContact } from "./lazy";

const allPrivateRoutes: RoutesT = [
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
