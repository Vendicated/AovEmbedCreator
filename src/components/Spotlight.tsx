import { useEmbed } from "../util/EmbedManager";
import "./Spotlight.scss";

export default function Spotlight() {
    const [spotlight, setSpotlight] = useEmbed(embed => [embed.spotlight, embed.setSpotlight]);

    return (
        <div id="spotlight-input">
            <input
                type="text"
                placeholder="Spotlight"
                value={spotlight || ""}
                onChange={e => setSpotlight(e.target.value)}
            />
        </div>
    );
}
