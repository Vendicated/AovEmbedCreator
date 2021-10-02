import { useState } from "react";
import "./Builds.scss";

import items from "../data/items.json";
import abilities from "../data/abilities.json";
import { item, getTypedObjectEntries, IBuild } from "../util/types";
import { getEmojiUrl } from "../util/util";
import ChoiceModal from "./ChoiceModal";
import { useEmbed } from "../util/EmbedManager";

const itemChoices = getTypedObjectEntries(items).map(([name, data]) => ({ name, iconUrl: getEmojiUrl(data[1]) }));
const talentChoices = getTypedObjectEntries(abilities).map(([name, data]) => ({
    name,
    iconUrl: getEmojiUrl(data[1]),
}));

export default function Builds() {
    const [builds, addBuild] = useEmbed(embed => [embed.builds, embed.addBuild]);

    return (
        <>
            {builds.map((build, idx) => (
                <Build key={`build-${idx}`} idx={idx} build={build} />
            ))}

            <span
                id="new-build-btn"
                className="hover-color"
                onClick={() => {
                    addBuild();
                }}
            >
                &#43;
            </span>
        </>
    );
}

interface BuildProps {
    idx: number;
    build: IBuild;
}

function Build({ build, idx }: BuildProps) {
    const [remove, setItem, setAbility, setBuildName] = useEmbed(embed => [
        embed.removeBuild,
        embed.setBuildItem,
        embed.setBuildAbility,
        embed.setBuildName,
    ]);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="build-entry">
            {showModal && (
                <ChoiceModal
                    choices={talentChoices}
                    onChoose={choice => {
                        setAbility(idx, choice);
                        setShowModal(false);
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
            <div className="build-entry-header">
                <img src={getEmojiUrl(abilities[build.ability][1])} alt="" onClick={() => setShowModal(true)} />
                <input
                    className="build-name-input"
                    type="text"
                    value={build.name}
                    onChange={e => setBuildName(idx, e.target.value)}
                />
                {idx !== 0 && (
                    <span className="hover-color" onClick={() => remove(idx)}>
                        &times;
                    </span>
                )}
            </div>
            <div className="build-box">
                {build.items.map((item, i) => (
                    <BuildItem
                        iconUrl={item && getEmojiUrl(items[item][1])}
                        onChange={item => {
                            setItem(idx, i, item);
                        }}
                        key={`build-box-${i}`}
                    />
                ))}
            </div>
        </div>
    );
}

interface ItemProps {
    iconUrl?: string;
    onChange: (item: item) => void;
}

function BuildItem({ iconUrl, onChange }: ItemProps) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div
            className="build-item"
            onClick={() => {
                setShowModal(true);
            }}
        >
            {showModal && (
                <ChoiceModal
                    choices={itemChoices}
                    onChoose={choice => {
                        setShowModal(false);
                        onChange(choice);
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
            {iconUrl && <img className="build-item-img" src={iconUrl} alt="" />}
        </div>
    );
}
