import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { CardHero } from "@/components/shared/heros/CardHero";
import { useForm } from "@/hooks/useForm";
import { getHeroBySuperHero } from "@/selectors/getHeroBySuperHero";
import { useMemo } from "react";

export const SearchHero = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });
    const { searchText = "" } = formValues;

    const heroFiltered = useMemo(() => {
        return getHeroBySuperHero(typeof q === "string" ? q : "");
    }, [q]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <div className="mx-auto p-2">
            {/* Contenedor principal con dos columnas */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Columna izquierda */}
                <div className="p-2 rounded-lg md:w-1/3">
                    <form
                        onSubmit={handleSearchSubmit}
                        className="flex flex-col gap-4"
                    >
                        <label
                            htmlFor="search"
                            className="text-lg font-semibold text-white"
                        >
                            Buscar héroe
                        </label>
                        <input
                            type="text"
                            id="search"
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                            placeholder="Escribe el nombre del héroe..."
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                {/* Columna derecha */}
                <div className="p-2 rounded-lg md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {typeof q === "string" && q.trim() === "" ? (
                            <p className="text-gray-300">
                                Por favor, ingresa el nombre de un héroe para
                                buscar.
                            </p>
                        ) : heroFiltered.length > 0 ? (
                            heroFiltered.map((hero) => (
                                <div
                                    className="animate__animated animate__fadeIn"
                                    key={hero.id}
                                >
                                    <CardHero {...hero} />
                                </div>
                            ))
                        ) : (
                            <p className="text-red-400">
                                No se encontraron héroes con el nombre: "{q}".
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
