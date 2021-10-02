import { useState, useEffect } from "react";

export function getEmojiUrl(id: string) {
    return `https://cdn.discordapp.com/emojis/${id}.png`;
}

export function useLocationHash() {
    const [hash, setHash] = useState(window.location.hash.replace("#", ""));

    useEffect(() => {
        const listener = () => setHash(window.location.hash.replace("#", ""));
        window.addEventListener("hashchange", listener);

        return () => window.removeEventListener("hashchange", listener);
    }, []);

    return hash;
}
