import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "@/pages/auth/login/LoginPage.tsx";
import { DashboardRoutes } from "./DashboardRoutes.tsx";

// Componente principal de rutas de la aplicación
export const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<LoginPage />} />

                {/* Rutas privadas o protegidas */}
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};
