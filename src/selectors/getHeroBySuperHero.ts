import { heroes } from "@/data/Heros";

export function getHeroBySuperHero(superHero: string) {
    superHero = superHero.toLowerCase();

    return superHero == ""
        ? []
        : heroes.filter((heroe) =>
              heroe.superhero.toLowerCase().includes(superHero)
          );
}
