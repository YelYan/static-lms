import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router";
import Layout from "@/shared/layouts/Layout";
import { LazyHome } from "./routes/lazy";
import { privateRoutes, publicRoutes } from "./routes";
import NotFound from "@/features/NotFound/NotFound";
import { LoadingSpinner } from "@/shared/common";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route
      index
      path="/"
      element={
        <Suspense fallback={<LoadingSpinner />}>
          <LazyHome />
        </Suspense>
      }
    />

    {/* Private routes */}
    <Route>
      {privateRoutes.map((route, index: number) => (
        <Route
          key={route.key + index}
          path={route.path}
          element={
            <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
          }
        />
      ))}
    </Route>

    {/* Public routes */}
    <Route>
      {publicRoutes.map((route, index: number) => (
        <Route
          key={route.key + index}
          path={route.path}
          element={
            <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
          }
        />
      ))}
    </Route>

    {/* Redirect any unknown routes to home */}
    <Route path="*" element={<NotFound />} />
    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
  </Route>
);

const router = createBrowserRouter(routes);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
