import { ApiLink } from "@site/src/components/Links";
import DemoSnippets from "./demo-snippets";

# StdFormat - A Powerful String Formatter

StdFormat is a TypeScript/JavaScript library for powerful string formatting using { } notation.

## Resources

[NPM Package](https://www.npmjs.com/package/std-format) | [GitHub Repository](https://github.com/pahkasoft/std-format)

## Documentation

<ApiLink api_dir="std-format" version="4.1.1">Documentation</ApiLink>
<br />
<br />

## Quick Start

### Install

```sh
npm install std-format
```

### Import

```js
import { format, int, float, setLocale, FormatError } from "std-format";
```

### Require

```js
const { format, int, float, setLocale, FormatError } = require("std-format");
```

### Browser Script

```html
<!-- either unpkg -->
<script src="https://unpkg.com/std-format@4.1.1/dist/index.global.js"></script>

<!-- or jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/std-format@4.1.1/dist/index.global.js"></script>

<script>
    const { format, int, float, setLocale, FormatError } = window.StdFormat;
</script>
```

### Use Format

```js
const result = format("{:d}", 5);
```

## Demo Snippets

<DemoSnippets />