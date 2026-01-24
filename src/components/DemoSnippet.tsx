import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import BrowserOnly from "@docusaurus/BrowserOnly";
import { format, int, float, setLocale, FormatError } from "std-format";

function getLivePreviewCode(rowCode: string) {
    rowCode = rowCode.trim();

    if (rowCode.startsWith("format(")) {
        return `
function Example() {
return ${rowCode}${rowCode.endsWith(";") ? "" : ";"}
}
`;
    }
    else {
        return `
function Example() {
${rowCode}
}
`;
    }
}

export default function DemoSnippet(props: { codeRows: string[], name: string, onEdit?: (newCode: string) => void }) {
    const [codeRows, setCodeRows] = React.useState(props.codeRows);

    const onEdit = (rowId: number, newCode: string) => {
        if (props.onEdit) props.onEdit(newCode);
        const newRows = [...codeRows]; // copy
        newRows[rowId] = newCode;      // update
        setCodeRows(newRows);          // set new reference
    };

    return (
        <BrowserOnly>
            {() => {
                return <div>
                    {codeRows.map((rowCode, rowId) => {
                        rowCode = rowCode.trim();

                        if (rowCode.includes("\n")) {
                            return (
                                <div>
                                    <LiveProvider
                                        language="jsx"
                                        code={getLivePreviewCode(rowCode)}
                                        scope={{ format, int, float, setLocale, FormatError }}
                                    >
                                        <div className="format-row">
                                            <textarea
                                                className="format-code"
                                                spellCheck="false"
                                                rows={rowCode.split("\n").length + 1}
                                                value={rowCode}
                                                onChange={(e) => onEdit(rowId, e.target.value)}
                                            />
                                            <LivePreview className="format-preview" />
                                        </div>
                                        <LiveError />
                                    </LiveProvider>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div>
                                    <LiveProvider
                                        language="jsx"
                                        code={getLivePreviewCode(rowCode)}
                                        scope={{ format, int, float, setLocale, FormatError }}
                                    >
                                        <div className="format-row">
                                            <input
                                                type="text"
                                                className="format-code"
                                                spellCheck="false"
                                                value={rowCode}
                                                onChange={(e) => onEdit(rowId, e.target.value)}
                                            />
                                            <LivePreview className="format-preview" />
                                        </div>
                                        <LiveError />
                                    </LiveProvider>
                                </div>
                            );
                        }
                    })}
                    <br />
                    ℹ️ This demo is run with {format("{__LIB_INFO__}")}
                </div>
            }}
        </BrowserOnly>
    );
}
