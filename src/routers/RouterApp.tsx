import { BrowserRouter, Route, Routes } from "react-router-dom";

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

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<LoginPage />} />

                {/* Rutas privadas o protegidas */}
                <Route
                    path="/*"
                    element={<DashboardRoutes isLogged={logged} />}
                />
            </Routes>
        </BrowserRouter>
    );
};
