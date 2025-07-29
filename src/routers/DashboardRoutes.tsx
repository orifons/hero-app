import { Navbar } from "@/components/shared/NavBar";
import { DcPage } from "@/pages/dc/DcPage";
import { HeroPage } from "@/pages/hero/HeroPage";
import { MarvelPage } from "@/pages/marvel/MarvelPage";
import { SearchHero } from "@/pages/search/SearchHero";
import { Navigate, Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="px-10 pt-5 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DcPage />} />
                    <Route path="/hero/:heroId" element={<HeroPage />} />
                    <Route path="/search" element={<SearchHero />} />
                    <Route
                        path="*"
                        element={<Navigate to="/marvel" replace />}
                    />
                </Routes>
            </div>
        </>
    );
};
