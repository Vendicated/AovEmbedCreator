import { useEffect, useState } from "react";
import "./Builds.scss";

import items from "../data/items.json";
import abilities from "../data/abilities.json";
import { item, ability, getTypedObjectEntries, SectionProps } from "../util/types";
import { getEmojiUrl } from "../util/util";
import ChoiceModal from "./ChoiceModal";

const itemChoices = getTypedObjectEntries(items).map(([name, data]) => ({ name, iconUrl: getEmojiUrl(data[1]) }));
const talentChoices = getTypedObjectEntries(abilities).map(([name, data]) => ({
    name,
    iconUrl: getEmojiUrl(data[1]),
}));

interface IBuild {
    ability: ability;
    items: [item?, item?, item?, item?, item?, item?];
}

const newBuild = () => ({ items: Array(6).fill(undefined), ability: "Sprint" } as IBuild);

export default function Builds({ updateJson }: SectionProps) {
    const [builds, setBuilds] = useState<IBuild[]>([newBuild()]);

    useEffect(() => {
        updateJson(
            json =>
                (json.fields[2].value = builds
                    .map(
                        b =>
                            ` {${abilities[b.ability][0]}} | ${b.items
                                .filter(Boolean)
                                .map(i => `{${items[i!][0]}}`)
                                .join(" ")} `
                    )
                    .join("\n\n"))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [builds]);

    return (
        <>
            {builds.map((build, idx) => (
                <Build
                    key={`build-${idx}`}
                    idx={idx}
                    build={build}
                    remove={() => {
                        const newBuilds = builds.slice();
                        newBuilds.splice(idx, 1);
                        setBuilds(newBuilds);
                    }}
                    buildHasUpdated={() => {
                        setBuilds(builds.slice());
                    }}
                />
            ))}

            <span
                id="new-build-btn"
                className="hover-color"
                onClick={() => {
                    setBuilds([...builds, newBuild()]);
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
    buildHasUpdated(): void;
    remove(): void;
}

function Build({ build, buildHasUpdated, idx, remove }: BuildProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="build-entry">
            {showModal && (
                <ChoiceModal
                    choices={talentChoices}
                    onChoose={choice => {
                        setShowModal(false);
                        build.ability = choice;
                        buildHasUpdated();
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
            <div className="build-entry-header">
                <img src={getEmojiUrl(abilities[build.ability][1])} alt="" onClick={() => setShowModal(true)} />
                <h3>Build {idx + 1}</h3>
                {idx !== 0 && (
                    <span className="hover-color" onClick={remove}>
                        &times;
                    </span>
                )}
            </div>
            <div className="build-box">
                {build.items.map((item, idx) => (
                    <BuildItem
                        iconUrl={item && getEmojiUrl(items[item][1])}
                        onChange={item => {
                            build.items[idx] = item;
                            buildHasUpdated();
                        }}
                        key={`build-box-${idx}`}
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
                console.log("hi");
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
