import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import { useAuth } from "@/hooks/useAuth.tsx";
import { LoginPage } from "@/pages/auth/login/LoginPage";
import { DcPage } from "@/pages/dc/DcPage.tsx";
import { HeroPage } from "@/pages/hero/HeroPage.tsx";
import { MarvelPage } from "@/pages/marvel/MarvelPage.tsx";
import { SearchHero } from "@/pages/search/SearchHero.tsx";
import { useEffect } from "react";
import { Navbar } from "@/components/shared/NavBar";
import { LoadingSpinner } from "@/components/ui/loading";

// https://www.youtube.com/watch?v=42tFXd1PdCk

const PrivateRoute = () => {
  const {
    authState: { logged, isInitialized },
  } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPage", pathname);
  }, [pathname]);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return logged ? (
    <>
      <Navbar />
      <div className="px-10 pt-5 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

const PublicRoute = () => {
  const {
    authState: { logged, isInitialized },
  } = useAuth();

  const lastPage = localStorage.getItem("lastPage") || "/marvel";

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return !logged ? <Outlet /> : <Navigate to={lastPage} replace />;
};

const routes = createBrowserRouter([
  {
    path: "/",
    Component: PrivateRoute,
    children: [
      { path: "marvel", Component: MarvelPage },
      { path: "dc", Component: DcPage },
      { path: "hero/:heroId", Component: HeroPage },
      { path: "search", Component: SearchHero },
      { path: "/*", element: <Navigate to={"/marvel"} /> },
    ],
  },
  {
    path: "auth/",
    Component: PublicRoute,
    children: [
      { path: "login", Component: LoginPage },
      {
        path: "register",
        element: (
          <div>
            <h1>Register</h1>
          </div>
        ),
      },
    ],
  },
]);

// Componente principal de rutas de la aplicación
export const RouterApp = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};
