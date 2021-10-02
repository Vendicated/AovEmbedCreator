import create from "zustand";
import { IBuild, item, ability } from "./types";

const newBuild = () => ({ name: "Build", ability: "Sprint", items: Array(6).fill(undefined) } as IBuild);

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
    setEnchantment(enchantment: string): void;
    setSpotlight(spotlight: string): void;
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
            builds: [newBuild()],
            enchantment: undefined,
            spotlight: undefined,
        });
    },

    setRoles: roles => set({ roles }),

    setArcana: (idx, arcana) =>
        set(state => {
            const newArcana = state.arcana.slice() as [string, string, string];
            newArcana[idx] = arcana;
            return { arcana: newArcana };
        }),

    addBuild: () => set(state => ({ builds: [...state.builds, newBuild()] })),
    removeBuild: idx =>
        set(state => {
            const newBuilds = state.builds.slice();
            newBuilds.splice(idx, 1);
            return { builds: newBuilds };
        }),

    setBuildItem: (buildIdx, itemIdx, item) =>
        set(state => {
            const newBuilds = state.builds.slice();
            newBuilds[buildIdx].items[itemIdx] = item;
            return { builds: newBuilds };
        }),

    setBuildAbility: (buildIdx, ability) =>
        set(state => {
            const newBuilds = state.builds.slice();
            newBuilds[buildIdx].ability = ability;
            return { builds: newBuilds };
        }),

    setEnchantment: enchantment => set({ enchantment }),
    setSpotlight: spotlight => set({ spotlight }),
}));
