import SyntaxHighLighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";

interface Props {
    object: any;
}

let timeout: NodeJS.Timeout;

export default function JsonCodeBlock({ object }: Props) {
    const [didCopy, setDidCopy] = useState(false);
    const json = JSON.stringify(object, null, 4);
    return (
        <>
            <p>{didCopy ? "Copied!" : "Click the codeblock to copy"}</p>
            <SyntaxHighLighter
                language="json"
                style={atomOneDark}
                onClick={() => {
                    window.navigator.clipboard.writeText(json);
                    setDidCopy(true);
                    if (timeout) clearTimeout(timeout);
                    timeout = setTimeout(() => setDidCopy(false), 3000);
                }}
            >
                {json}
            </SyntaxHighLighter>
        </>
    );
}
