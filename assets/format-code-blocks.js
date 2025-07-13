let braceCount = 0;

function formatLine(line) {
    line = line.trim().replace(/\s{2,}/g, ' ');

    if (line.startsWith("}")) {
        braceCount--;
    }

    var indent = line.startsWith(".") ? 1 : 0;

    for (let i = 0; i < indent + braceCount; i++) {
        line = "&nbsp;&nbsp;" + line;
    }

    if (line.endsWith("{")) {
        braceCount++;
    }

    return line;
}

function formatCodeBlock(el) {
    let text = el.innerHTML;

    text = text.split('\n').map(formatLine).join('\n');

    while (text.startsWith("\n")) {
        text = text.substring(1);
    }

    el.innerHTML = text;
}

try {
    document.querySelectorAll('.code-block').forEach(formatCodeBlock);
}
catch (e) { }
