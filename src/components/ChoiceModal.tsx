import { useState } from "react";
import "./ChoiceModal.scss";

interface props<S extends string> {
    choices: Array<{
        name: S;
        iconUrl: string;
    }>;
    onChoose: (choice: S) => void;
    onCancel?: () => void;
}

export default function ChoiceModal<S extends string>({ choices, onChoose, onCancel }: props<S>) {
    const [filter, setFilter] = useState("");

    return (
        <div
            id="modal"
            onClick={e => {
                e.stopPropagation();
                onCancel?.();
            }}
        >
            <div id="modal-content">
                <input
                    autoFocus
                    id="modal-filter"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    onClick={e => e.stopPropagation()}
                />

                <div>
                    {choices
                        .filter(c => c.name.toLowerCase().includes(filter))
                        .map(choice => (
                            <div
                                className="modal-item"
                                onClick={e => {
                                    e.stopPropagation();
                                    onChoose(choice.name);
                                }}
                                key={choice.name}
                            >
                                <h3>{choice.name}</h3>
                                <img src={choice.iconUrl} alt="?" />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
