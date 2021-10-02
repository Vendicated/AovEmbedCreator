import shallow from "zustand/shallow";
import Arcana from "./components/Arcana";
import Builds from "./components/Builds";
import Enchantments from "./components/Enchantments";
import HeroImage from "./components/HeroImage";
import JsonCodeBlock from "./components/EmbedCodeBlock";
import Select from "./components/Select";
import "./HeroCreator.scss";
import { useEmbed } from "./util/EmbedManager";
import Spotlight from "./components/Spotlight";

const options = ["Jungle", "Slayer Lane", "Middle Lane", "Dragon Lane", "Support"].map(r => ({ value: r, label: r }));

export function HeroCreator() {
    const [hero, heroImage, roles, setRoles] = useEmbed(
        embed => [embed.hero, embed.heroImage, embed.roles, embed.setRoles],
        shallow
    );

    return (
        <div className="hero-wrapper">
            <span id="back-button" className="hover-grow hover-color" onClick={() => (window.location.hash = "#")}>
                &times;
            </span>
            <div className="hero-container">
                <div className="hero-header">
                    <HeroImage hero={heroImage} className="hero-avatar" />
                    <h1>{hero}</h1>
                </div>

                <section className="roles-section">
                    <h2>Roles</h2>
                    <Select
                        isMulti={true}
                        options={options as any}
                        value={roles.map(r => ({ value: r, label: r }))}
                        onChange={r => {
                            // @ts-ignore this lib's typings fucking suck dude
                            setRoles(r.map(i => i.value));
                        }}
                        placeholder="Roles"
                    />
                </section>

                <section className="arcana-section">
                    <h2>Arcana</h2>
                    <Arcana />
                </section>

                <section className="builds-section">
                    <h2>Builds</h2>
                    <Builds />
                </section>

                <section className="enchantments-section">
                    <h2>Enchantments</h2>
                    <Enchantments />
                </section>

                <section className="spotlight-section">
                    <h2>Spotlight</h2>
                    <Spotlight />
                </section>

                <section className="json-codeblock">
                    <h2>JSON</h2>
                    <JsonCodeBlock />
                </section>
            </div>
        </div>
    );
}
