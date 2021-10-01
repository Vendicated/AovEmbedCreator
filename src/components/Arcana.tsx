import "./Arcana.scss";
import { SectionProps } from "../util/types";
import { useEffect, useState } from "react";

export default function Arcana({ updateJson }: SectionProps) {
    const [red, setRed] = useState("RED");
    const [purple, setPurple] = useState("PURPLE");
    const [green, setGreen] = useState("GREEN");

    useEffect(() => {
        updateJson(j => (j.fields[1].value = `${red}\n${purple}\n${green}`));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [red, purple, green]);

    return (
        <div className="arcana-body">
            <ArcanaColor color="Red" onChange={setRed} />
            <ArcanaColor color="Purple" onChange={setPurple} />
            <ArcanaColor color="Green" onChange={setGreen} />
        </div>
    );
}

interface props {
    color: "Red" | "Purple" | "Green";
    onChange(val: string): void;
}

function ArcanaColor({ color, onChange }: props) {
    return (
        <input
            className={`arcana-input arcana-input-${color.toLowerCase()}`}
            placeholder={color}
            onChange={e => onChange(e.target.value)}
        />
    );
}
