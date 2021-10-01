import "./Arcana.scss";
import { SectionProps } from "../util/types";

export default function Arcana(props: SectionProps) {
    return (
        <div className="arcana-body">
            <ArcanaColor color="Red" />
            <ArcanaColor color="Purple" />
            <ArcanaColor color="Green" />
        </div>
    );
}

interface props {
    color: "Red" | "Purple" | "Green";
}
function ArcanaColor({ color }: props) {
    return (
        <>
            <input className={`arcana-input arcana-input-${color.toLowerCase()}`} placeholder={color} />
        </>
    );
}
