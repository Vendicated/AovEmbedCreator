import "./App.scss";
import { HeroCreator } from "./HeroCreator";
import heroes from "./data/heroes";
import HeroImage from "./components/HeroImage";
import { Footer } from "./components/Footer";
import { useLocationHash } from "./util/util";
import { useEffect } from "react";
import { useEmbed } from "./util/EmbedManager";

export default function App() {
    const currentHero = useLocationHash();
    const init = useEmbed(embed => embed.init);

    useEffect(() => {
        const data = heroes[currentHero];
        if (data) {
            init({ hero: currentHero, heroClass: data[0], heroImage: data[1] });
        } else window.location.hash = "#";
    }, [currentHero, init]);

    return (
        <div id="wrapper">
            <div>
                {currentHero && Object.prototype.hasOwnProperty.call(heroes, currentHero) ? (
                    <HeroCreator />
                ) : (
                    <div id="hero-chooser">
                        <h1>AoV Hero Embed Generator</h1>
                        <div>
                            {Object.keys(heroes).map(hero => (
                                <div
                                    className="hero-avatar"
                                    onClick={() => (window.location.hash = `${hero}`)}
                                    key={hero}
                                >
                                    <HeroImage hero={heroes[hero][1]} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
