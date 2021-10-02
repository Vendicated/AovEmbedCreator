import create from "zustand";
import { IBuild, item, ability } from "./types";

const newBuild = (idx: number) =>
    ({ name: "Build " + idx, ability: "Sprint", items: Array(6).fill(undefined) } as IBuild);

interface EmbedStore {
    hero: string;
    heroImage: string;
    heroClass: string;
    roles: string[];
    arcana: [string, string, string];
    builds: IBuild[];
    enchantment?: string;
    spotlight?: string;

    init(obj: { hero: string; heroImage: string; heroClass: string }): void;
    setRoles(roles: this["roles"]): void;
    setArcana(idx: number, arcana: string): void;
    addBuild(): void;
    removeBuild(idx: number): void;
    setBuildItem(buildIdx: number, itemIdx: number, item: item): void;
    setBuildAbility(buildIdx: number, ability: ability): void;
    setBuildName(buildIdx: number, name: string): void;
    setEnchantment(enchantment: string): void;
    setSpotlight(spotlight: string): void;
}

function mutateChange<T extends Array<unknown>>(arr: T, fn: (arr: T) => void) {
    const newArr = arr.slice() as T;
    fn(newArr);
    return newArr;
}

export const useEmbed = create<EmbedStore>(set => ({
    hero: "",
    heroImage: "",
    heroClass: "",
    roles: [],
    arcana: ["", "", ""],
    builds: [],
    enchantment: undefined,
    spotlight: undefined,

    init: data => {
        set({
            ...data,
            roles: [],
            arcana: ["", "", ""],
            builds: [newBuild(1)],
            enchantment: undefined,
            spotlight: undefined,
        });
    },

    setRoles: roles => set({ roles }),

    setArcana: (idx, arcana) => set(state => ({ arcana: mutateChange(state.arcana, a => (a[idx] = arcana)) })),

    addBuild: () => set(state => ({ builds: [...state.builds, newBuild(state.builds.length + 1)] })),

    removeBuild: idx => set(state => ({ builds: mutateChange(state.builds, b => b.splice(idx, 1)) })),

    setBuildItem: (buildIdx, itemIdx, item) =>
        set(state => ({ builds: mutateChange(state.builds, b => (b[buildIdx].items[itemIdx] = item)) })),

    setBuildAbility: (buildIdx, ability) =>
        set(state => ({ builds: mutateChange(state.builds, b => (b[buildIdx].ability = ability)) })),

    setBuildName: (buildIdx, name) =>
        set(state => ({ builds: mutateChange(state.builds, b => (b[buildIdx].name = name)) })),

    setEnchantment: enchantment => set({ enchantment }),
    setSpotlight: spotlight => set({ spotlight }),
}));
