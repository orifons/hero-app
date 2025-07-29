import { heroes } from "@/data/Heros";

export const getHerosByPublisher = (publisher: string) => {
    const validPublisher = ["DC Comics", "Marvel Comics"];

    if (!validPublisher.includes(publisher)) {
        console.error(
            `Publisher ${publisher} no es correcto. Solo son permitidos los siguientes: ${validPublisher.map(
                (publisher) => ` ${publisher}`
            )}`
        );
    }

    return heroes.filter((heroe) => publisher === heroe.publisher);
};
