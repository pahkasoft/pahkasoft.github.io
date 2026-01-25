import { ApiLink } from "@site/src/components/Links";
import DemoSnippets from "./demo-snippets";

# StdFormat - A Powerful String Formatter

StdFormat is a TypeScript/JavaScript library for powerful string formatting using { } notation.

## Resources

[NPM Package](https://www.npmjs.com/package/std-format) |
[GitHub Repository](https://github.com/pahkasoft/std-format)

## API Reference

<ApiLink api_dir="std-format" version="4.1.1">API Reference</ApiLink>

Contains documentaton in the README file.

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

### Usage

```js
const result = format("{:d}", 5);
```

## Demo Snippets

<DemoSnippets />
<br />

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software under the terms of the MIT License.

The full license text is available in the project repository.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
