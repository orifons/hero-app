import { getHerosByPublisher } from "@/selectors/getHerosByPublisher";
import { CardHero } from "./CardHero";
import { useMemo } from "react";

export const HeroList = ({ publisher }: { publisher: string }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {heros.map((hero) => (
          <CardHero key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
