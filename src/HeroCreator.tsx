import { useState } from "react";
import Arcana from "./components/Arcana";
import Builds from "./components/Builds";
import Enchantments from "./components/Enchantments";
import HeroImage from "./components/HeroImage";
import JsonCodeBlock from "./components/JsonCodeBlock";
import Select from "./components/Select";
import heroes from "./data/heroes";
import "./HeroCreator.scss";
import { SectionProps } from "./util/types";
import { createEmbed } from "./util/util";

interface props {
    hero: string;
    onBack: () => void;
}

const options = ["Jungle", "Slayer Lane", "Middle Lane", "Dragon Lane", "Support"].map(r => ({ value: r, label: r }));

export function HeroCreator({ hero, onBack }: props) {
    const [clazz, image] = heroes[hero];

    const [roles, setRoles] = useState<readonly string[]>();
    const [json, setJson] = useState(createEmbed(image, hero, clazz));

    const props: SectionProps = {
        updateJson(fn: (j: typeof json) => void) {
            fn(json);
            setJson({ ...json });
        },
    };

    return (
        <div className="hero-wrapper">
            <span id="back-button" className="hover-grow hover-color" onClick={onBack}>
                &times;
            </span>
            <div className="hero-container">
                <div className="hero-header">
                    <HeroImage hero={image} className="hero-avatar" />
                    <h1>{hero}</h1>
                </div>

                <section className="roles-section">
                    <h2>Roles</h2>
                    <Select
                        isMulti={true}
                        options={options as any}
                        value={roles}
                        onChange={r => {
                            setRoles(r);
                            // @ts-ignore this lib fucking sucks dude
                            props.updateJson(j => (j.fields[0].value = r.map(i => i.value).join(", ")));
                        }}
                        placeholder="Roles"
                    />
                </section>

                <section className="arcana-section">
                    <h2>Arcana</h2>
                    <Arcana {...props} />
                </section>

                <section className="builds-section">
                    <h2>Builds</h2>
                    <Builds {...props} />
                </section>

                <section className="enchantments-section">
                    <h2>Enchantments</h2>
                    <Enchantments {...props} />
                </section>

                <section className="json-codeblock">
                    <h2>JSON</h2>
                    <JsonCodeBlock object={json} {...props} />
                </section>
            </div>
        </div>
    );
}
