import { useState } from "react";
import "./App.scss";
import { HeroCreator } from "./HeroCreator";
import heroes from "./data/heroes.json";
import HeroImage from "./components/HeroImage";
import { Footer } from "./components/Footer";

export default function App() {
    const [currentHero, setCurrentHero] = useState<string>();

    return (
        <div id="wrapper">
            <div>
                {currentHero ? (
                    <HeroCreator hero={currentHero} onBack={() => setCurrentHero(undefined)} />
                ) : (
                    <div id="hero-chooser">
                        <h1>AoV Hero Embed Generator</h1>
                        <div>
                            {Object.values(heroes)
                                .flat()
                                .map(hero => (
                                    <div className="hero-avatar" onClick={() => setCurrentHero(hero)} key={hero}>
                                        <HeroImage hero={hero} />
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
