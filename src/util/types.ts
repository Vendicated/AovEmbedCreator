import items from "../data/items.json";
import abilities from "../data/abilities.json";

export type item = keyof typeof items;
export type ability = keyof typeof abilities;

export interface IBuild {
    name: string;
    ability: ability;
    items: [item?, item?, item?, item?, item?, item?];
}

export function getTypedObjectEntries<T>(obj: T) {
    return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}
