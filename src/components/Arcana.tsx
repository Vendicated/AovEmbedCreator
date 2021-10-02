import "./Arcana.scss";
import { useEmbed } from "../util/EmbedManager";

export default function Arcana() {
    return (
        <div className="arcana-body">
            <ArcanaColor color="Red" idx={0} />
            <ArcanaColor color="Purple" idx={1} />
            <ArcanaColor color="Green" idx={2} />
        </div>
    );
}

interface props {
    color: "Red" | "Purple" | "Green";
    idx: 0 | 1 | 2;
}

function ArcanaColor({ color, idx }: props) {
    const [arcana, setArcana] = useEmbed(embed => [embed.arcana, embed.setArcana]);

    return (
        <input
            type="text"
            className={`arcana-input arcana-input-${color.toLowerCase()}`}
            value={arcana[idx]}
            placeholder={color}
            onChange={e => setArcana(idx, e.target.value)}
        />
    );
}
