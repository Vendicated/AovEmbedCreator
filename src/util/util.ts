import heroes from "../data/heroes.json";

export function getEmojiUrl(id: string) {
    return `https://cdn.discordapp.com/emojis/${id}.png`;
}

export function createEmbed(filename: string, heroName: string) {
    return {
        author: {
            name: heroName,
            icon_url: `${window.location.href}images/classes/${
                Object.entries(heroes).find(e => e[1].includes(filename))![0]
            }.png`,
        },
        color: 53380,
        footer: {
            text: `Last updated`,
        },
        timestamp: new Date().toISOString(),
        thumbnail: `${window.location.href}images/heroes/${filename}`,
        image: "UNSPECIFIED",
        fields: [
            {
                name: "Role",
                value: "UNSPECIFIED",
                inline: true,
            },
            {
                name: "Arcana",
                value: "UNSPECIFIED",
                inline: false,
            },
            {
                name: "Build",
                value: "UNSPECIFIED",
                inline: false,
            },
        ],
    };
}
