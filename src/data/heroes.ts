import heroes from "./heroes.json";

export default Object.entries(heroes).reduce((prev, curr) => {
    const [clazz, heroes] = curr;
    heroes.forEach(hero => {
        const name = hero.substring(0, hero.lastIndexOf("."));
        prev[name] = [clazz, hero];
    });
    return prev;
}, {} as Record<string, [string, string]>);
