import { useState } from "react";
import "./Enchantments.scss";
import { SectionProps } from "../util/types";

export default function Enchantments({ updateJson }: SectionProps) {
    const [imageUrl, setImageUrl] = useState<string>();
    const [errored, setErrored] = useState(false);

    return (
        <div className="enchantments-image-picker">
            <input
                value={imageUrl}
                onChange={e => {
                    const url = e.target.value;
                    setImageUrl(url);
                    updateJson(e => (e.image = url));
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
