import { HeroList } from "@/components/shared/heros/HeroList.tsx";

export const DcPage = () => {
    return (
        <div className="">
            <h1 className="text-4xl">Heros DC</h1>

            <HeroList publisher="DC Comics" />
        </div>
    );
};
