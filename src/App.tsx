import { useState, useEffect } from "react";
import "./App.scss";
import { HeroCreator } from "./HeroCreator";
import heroes from "./data/heroes";
import HeroImage from "./components/HeroImage";
import { Footer } from "./components/Footer";

export default function App() {
    const [currentHero, setCurrentHero] = useState("");

    useEffect(() => {
        const listener = () => setCurrentHero(window.location.hash.replace("#", ""));

        window.addEventListener("hashchange", listener);

        return () => window.removeEventListener("hashchange", listener);
    }, []);

    return (
        <div id="wrapper">
            <div>
                {currentHero && Object.prototype.hasOwnProperty.call(heroes, currentHero) ? (
                    <HeroCreator hero={currentHero} onBack={() => (window.location.hash = "#")} />
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
