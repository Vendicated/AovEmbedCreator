import items from "../data/items.json";
import abilities from "../data/abilities.json";
import { createEmbed } from "./util";

export type item = keyof typeof items;
export type ability = keyof typeof abilities;

export interface SectionProps {
    updateJson(fn: (json: ReturnType<typeof createEmbed>) => void): void;
}

export function getTypedObjectEntries<T>(obj: T) {
    return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}
