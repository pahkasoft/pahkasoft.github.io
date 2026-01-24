import * as React from "react";
import DemoSnippet from "@site/src/components/DemoSnippet";

interface Entry {
    name: string;
    codeRows: string[];
}

const entries: Entry[] = [
    {
        name: "Free experiment",
        codeRows: [
            `format("{}", 0)`,
        ]
    },
    {
        name: "Use int() and float()",
        codeRows: [
            `format("{}", int(55))`,
            `format("{}", float(55))`,
        ]
    },
    {
        name: "Field numbering/naming",
        codeRows: [
            `format("{:d} {:d} {:d}", 0, 1, 2)`,
            `format("{1:d} {0:d} {2:d}", 0, 1, 2)`,
            `format("{a:s} {c:s} {b:s}", { a: "A", b: "B", c: "C" })`,
        ]
    },
    {
        name: "Fill, align and width with numbers",
        codeRows: [
            `format("{0:*<#8x}", 0x123)`,
            `format("{0:*^#8x}", 0x123)`,
            `format("{0:*>#8x}", 0x123)`,
            `format("{0:*=#8x}", 0x123)`,
        ]
    },
    {
        name: "Fill, align and width with strings",
        codeRows: [
            `format("{0:*<8.3s}", "ABCDEF")`,
            `format("{0:*^8.3s}", "ABCDEF")`,
            `format("{0:*>8.3s}", "ABCDEF")`,
        ]
    },
    {
        name: "Sign filler",
        codeRows: [
            `format("'{0:}' '{1:}''", -1, 1)`,
            `format("'{0:+}' '{1:+}'", -1, 1)`,
            `format("'{0:-}' '{1:-}'", -1, 1)`,
            `format("'{0: }' '{1: }'", -1, 1)`,
        ]
    },
    {
        name: "Force positive zero",
        codeRows: [
            `format("'{0:}' '{1:}'", -0, 0)`,
            `format("'{0:z}' '{1:z}'", -0, 0)`,
            `format("'{0:z}' '{1:z}'", -1, 1)`,
        ]
    },
    {
        name: "Width and precision",
        codeRows: [
            `format("'{a:9s}'", { a: "Banana", b: Math.PI })`,
            `format("'{a:9.3s}'", { a: "Banana", b: Math.PI })`,
            `format("'{b:9f}'", { a: "Banana", b: Math.PI })`,
            `format("'{b:9.3f}'", { a: "Banana", b: Math.PI })`,
        ]
    },
    {
        name: "Grouping",
        codeRows: [
            `format("{0:,d}", 1234567890)`,
            `format("{0:_d}", 1234567890)`,
        ]
    },
    {
        name: "With Locale",
        codeRows: [
            `
setLocale("de-DE");
return format("{0:.2Lf}", 123456789.123456789);
`,
        ]
    },
    {
        name: "String type specifiers",
        codeRows: [
            `format("'s': {str:s}", { str: "Banana", chr: 65 } )`,
            `format("'c': {chr:c}", { str: "Banana", chr: 65 } )`,
        ]
    },
    {
        name: "Integer type specifiers",
        codeRows: [
            `format("'d': {int:d}", { int: 12345 } )`,
            `format("'n': {int:n}", { int: 12345 } )`,
            `format("'b': {int:#b}", { int: 12345 } )`,
            `format("'o': {int:#o}", { int: 12345 } )`,
            `format("'x': {int:#x}", { int: 12345 } )`,
        ]
    },
    {
        name: "Float type specifiers",
        codeRows: [
            `format("'e': {flt:.4e}", { flt: Math.PI } )`,
            `format("'f': {flt:.4f}", { flt: Math.PI } )`,
            `format("'%': {flt:.4%}", { flt: Math.PI } )`,
            `format("'g': {flt:.4g}", { flt: Math.PI } )`,
            `format("'a': {flt:.4a}", { flt: Math.PI } )`,
        ]
    },
    {
        name: "Format array",
        codeRows: [
            `format("'': {0::d}", [1, 2, 3, 4])`,
            `format("'d': {0:d:d}", [1, 2, 3, 4])`,
            `format("'n': {0:n:d}", [1, 2, 3, 4])`,
            `format("'b': {0:b:d}", [1, 2, 3, 4])`,
            `format("'m': {0:m:d}", [1, 2, 3, 4])`,
            `format("'s': {0:s:d}", [1, 2, 3, 4])`,
        ]
    },
    {
        name: "Format object",
        codeRows: [
            `format("'': {0::d}", { a: 1231, b: 456 })`,
            `format("'d': {0:d:d}", { a: 1231, b: 456 })`,
            `format("'n': {0:n:d}", { a: 1231, b: 456 })`,
            `format("'b': {0:b:d}", { a: 1231, b: 456 })`,
            `format("'m': {0:m:d}", { a: 1231, b: 456 })`,
            `format("'s': {0:s:d}", { a: 1231, b: 456 })`,
        ]
    },
    {
        name: "Fill and align array",
        codeRows: [
            `format("{0:!<100b:*^30m:=>3d}", [{a: 1, b: 2}, {a: 3, b: 6}])`,
        ]
    },
    {
        name: "Error handling",
        codeRows: [
            `
try {
    return format("{:.2r}", Math.PI);
}
catch(e) {
    return e.toString();
}
            `
        ]
    },
];

function getExampleIndices(): number[] {
    return entries.map((_, id) => id);
}

function getExampleName(id: number): string {
    return entries[id].name;
}

function getExampleCodeRows(id: number): string[] {
    return entries[id].codeRows;
}

export default function DemoSnippets(props: {}) {
    const [exampleId, setExampleId] = React.useState(0);

    return <>
        <select
            value={exampleId}
            onChange={e => setExampleId(Number(e.target.value))}
            className="select"
        >
            {getExampleIndices().map(id => (
                <option key={id} value={id}>
                    {getExampleName(id)}
                </option>
            ))}
        </select>
        <br /><br />
        <DemoSnippet
            key={exampleId}
            codeRows={getExampleCodeRows(exampleId)}
            name={getExampleName(exampleId)}
        />
    </>;
}
