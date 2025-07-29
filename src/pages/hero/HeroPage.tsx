import { Button } from "@/components/ui/button.tsx";
import { LoadingSkeleton } from "@/components/ui/loading.tsx";
import { getHeroById } from "@/selectors/getHeroById.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

type Params = {
    heroId: string;
};

export const HeroPage = () => {
    const { heroId } = useParams<Params>();
    const [isLoading, setIsLoading] = useState(true);
    const hero = useMemo(() => getHeroById(heroId!), [heroId]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simular tiempo de carga
        const timer = setTimeout(() => {
            if (hero || heroId) setIsLoading(false);
        }, 1000);
        // setIsLoading(false);

        return () => clearTimeout(timer);
    }, [hero, heroId]);

    // Mostrar skeleton mientras carga
    if (isLoading) {
        return <LoadingSkeleton />;
    }

    return !hero ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="text-center">
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Héroe no encontrado
                    </h2>
                    <p className="text-gray-300 text-lg">
                        El héroe que buscas no existe (con ID:{heroId}) en
                        nuestro universo
                    </p>
                </div>
                <Button
                    onClick={() => navigate(-1)}
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Volver al universo
                </Button>
            </div>
        </div>
    ) : (
        <div className="max-w-6xl mx-auto">
            {/* Header con navegación */}
            <div className="mb-8">
                <Button
                    onClick={() => navigate(-1)}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Volver
                </Button>
            </div>

            {/* Contenido principal */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Imagen del héroe */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative overflow-hidden rounded-3xl">
                        <img
                            src={`../heroes/${hero.id}.jpg`}
                            alt={hero.superhero}
                            className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                </div>

                {/* Información del héroe */}
                <div className="space-y-8">
                    {/* Título y alter ego */}
                    <div className="space-y-4">
                        <h1 className="text-5xl font-black bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent leading-tight">
                            {hero.superhero}
                        </h1>
                        <p className="text-2xl text-gray-300 font-light italic">
                            "{hero.alter_ego}"
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 text-red-300 rounded-full text-sm font-medium backdrop-blur-sm">
                            {hero.publisher}
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
                            {hero.characters}
                        </span>
                    </div>

                    {/* Información detallada */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Información del Héroe
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-300 font-medium">
                                    Primera aparición:
                                </span>
                                <span className="text-white">
                                    {hero.first_appearance}
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-300 font-medium">
                                    Editorial:
                                </span>
                                <span className="text-white">
                                    {hero.publisher}
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-300 font-medium">
                                    Personajes:
                                </span>
                                <span className="text-white">
                                    {hero.characters}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Estadísticas simuladas */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                            <div className="text-2xl font-bold text-red-400 mb-1">
                                {hero.strong}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                                Fuerza
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                            <div className="text-2xl font-bold text-purple-400 mb-1">
                                {hero.speed}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                                Velocidad
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4 text-center backdrop-blur-sm">
                            <div className="text-2xl font-bold text-blue-400 mb-1">
                                {hero.inteligense}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                                Inteligencia
                            </div>
                        </div>
                    </div>

                    {/* Botón de acción */}
                    <div className="pt-4">
                        <Button
                            onClick={() => navigate(-1)}
                            className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Explorar más héroes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
