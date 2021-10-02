import { useState } from "react";
import "./Enchantments.scss";
import { useEmbed } from "../util/EmbedManager";

export default function Enchantments() {
    const [imageUrl, setImageUrl] = useEmbed(embed => [embed.enchantment, embed.setEnchantment]);
    const [errored, setErrored] = useState(false);

    return (
        <div className="enchantments-image-picker">
            <input
                onChange={e => {
                    setImageUrl(e.target.value);
                }}
                placeholder="Image URL"
            />
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt=""
                    onLoad={() => setErrored(false)}
                    onError={() => setErrored(true)}
                    hidden={errored}
                />
            )}
            {imageUrl && errored && <p>Failed to load that image :(</p>}
        </div>
    );
}
