export function getEmojiUrl(id: string) {
    return `https://cdn.discordapp.com/emojis/${id}.png`;
}

export function createEmbed(filename: string, heroName: string, clazz: string) {
    const location = window.location.href.replace(/\/?#.*$/, "");
    return {
        author: {
            name: heroName,
            icon_url: `${location}/images/classes/${clazz}.png`,
        },
        color: 53380,
        footer: {
            text: `Last updated`,
        },
        timestamp: new Date().toISOString(),
        thumbnail: `${location}/images/heroes/${filename}`,
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
