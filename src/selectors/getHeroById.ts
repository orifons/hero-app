import { heroes } from "@/data/Heros";

export const getHeroById = (id: string) => {
    return heroes.find((heroe) => id === heroe.id);
};
