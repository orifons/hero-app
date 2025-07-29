import { Button } from "@/components/ui/button";
import type { Hero } from "@/interfaces/Hero.interface";
import { Link } from "react-router-dom";

export const CardHero = ({ id, superhero, publisher }: Hero) => {
    return (
        <div className="flex flex-col">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col w-full max-w-[300px] h-[450px] mx-auto my-4 transition-transform hover:scale-105">
                <div className="w-full h-[300px] flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={`../heroes/${id}.jpg`}
                        alt={superhero}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-between p-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 mb-1 truncate">
                            {superhero}
                        </h1>
                        <p className="text-sm text-gray-500 mb-1">
                            {publisher}
                        </p>
                    </div>
                    <Link to={`/hero/${id}`}>
                        <Button className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold">
                            Mas ...
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
