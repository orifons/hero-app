import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import useAuth from "@/hooks/useAuth.tsx";
import { LoginPage } from "@/pages/auth/login/LoginPage.tsx";
import { DashboardRoutes } from "./DashboardRoutes.tsx";

// https://www.youtube.com/watch?v=42tFXd1PdCk

// Componente principal de rutas de la aplicación
export const RouterApp = () => {
    const {
        user: { logged },
    } = useAuth();

    const lastPage = localStorage.getItem("lastPage") || "/";

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route
                    path="/login"
                    element={
                        !logged ? <LoginPage /> : <Navigate to={lastPage} />
                    }
                />

                {/* Rutas privadas o protegidas */}
                <Route
                    path="/*"
                    element={<DashboardRoutes isLogged={logged} />}
                />
            </Routes>
        </BrowserRouter>
    );
};
