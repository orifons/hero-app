import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthContext } from "@/auth/AuthContext.ts";
import { LoginPage } from "@/pages/auth/login/LoginPage.tsx";
import { useContext } from "react";
import { DashboardRoutes } from "./DashboardRoutes.tsx";

// https://www.youtube.com/watch?v=42tFXd1PdCk

// Componente principal de rutas de la aplicación
export const RouterApp = () => {
    const {
        user: { logged },
    } = useContext(AuthContext);

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
