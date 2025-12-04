import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router";
import Layout from "@/shared/layouts/Layout";
import DashboardLayout from "@/shared/layouts/DashboardLayout";
import { LazyHome } from "@/app/routes/lazy";
import { privateRoutes, publicRoutes, allAdminRoutes } from "@/app/routes";
import AuthGuard from "@/app/routes/guard/AuthGuard";
import NotFound from "@/features/NotFound/NotFound";
import { LoadingSpinner } from "@/shared/common";

const routes = createRoutesFromElements(
  <Route>
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
              <AuthGuard requireVerified={true}>
                <Suspense fallback={<LoadingSpinner />}>
                  {route.element}
                </Suspense>
              </AuthGuard>
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
    </Route>

    {/* Admin routes */}
    <Route element={<DashboardLayout />}>
      {allAdminRoutes.map((route, index: number) => (
        <Route
          key={route.key + index}
          path={route.path}
          element={
            <AuthGuard requireVerified={true}>
              <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
            </AuthGuard>
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
