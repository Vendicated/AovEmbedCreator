import SyntaxHighLighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";
import { useEmbed } from "../util/EmbedManager";
import abilities from "../data/abilities.json";
import items from "../data/items.json";

let timeout: NodeJS.Timeout;

export default function EmbedCodeBlock() {
    const [didCopy, setDidCopy] = useState(false);
    const embed = useEmbed();

    const location = window.location.href.replace(/\/?#.*$/, "");
    const json = JSON.stringify(
        {
            author: {
                name: embed.hero,
                icon_url: `${location}/images/classes/${embed.heroClass}.png`,
            },
            color: 53380,
            footer: {
                text: `Last updated`,
            },
            timestamp: new Date().toISOString(),
            thumbnail: `${location}/images/heroes/${embed.heroImage}`,
            image: embed.enchantment,
            fields: [
                {
                    name: "Role",
                    value: embed.roles.join(", "),
                    inline: true,
                },
                {
                    name: "Arcana",
                    value: embed.arcana.join("\n"),
                    inline: false,
                },
                ...embed.builds.map(build => ({
                    name: ` {${abilities[build.ability][0]}} ${build.name}`,
                    value: ` ${build.items.map(i => (i ? `{${items[i][0]}}` : "N/A")).join(" ")} `,
                    inline: false,
                })),
                embed.spotlight && {
                    name: "Hero Spotlight",
                    value: embed.spotlight,
                    inline: false,
                },
            ].filter(Boolean),
        },
        null,
        4
    );

    return (
        <>
            <p>{didCopy ? "Copied!" : "Click the codeblock to copy"}</p>
            <SyntaxHighLighter
                language="json"
                style={atomOneDark}
                onClick={() => {
                    window.navigator.clipboard.writeText(json);
                    setDidCopy(true);
                    if (timeout) clearTimeout(timeout);
                    timeout = setTimeout(() => setDidCopy(false), 3000);
                }}
            >
                {json}
            </SyntaxHighLighter>
        </>
    );
}
