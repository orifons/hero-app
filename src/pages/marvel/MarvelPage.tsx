import { HeroList } from "@/components/shared/heros/HeroList.tsx";

export const MarvelPage = () => {
    return (
        <div className="">
            <h1 className="text-4xl">Heros Marvel</h1>

            <HeroList publisher="Marvel Comics" />
        </div>
    );
};
