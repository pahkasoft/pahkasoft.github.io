import { ApiLink } from "@site/src/components/Links";

# TsUtilsLib - A Personal TypeScript Utils Library

A small collection of TypeScript functions, containers, etc. used in my personal projects.

## Resources

[NPM Package](https://www.npmjs.com/package/@tspro/ts-utils-lib) |
[GitHub Repository](https://github.com/pahkasoft/ts-utils-lib)

## API Reference

<ApiLink api_dir="ts-utils-lib" version="3.3.1">API Reference</ApiLink> (latest)

## Quick Start

### Install

`npm install @tspro/ts-utils-lib`

### Import

```ts
// Import required stuff.
import { UniMap, Utils } from "@tspro/ts-utils-lib";
```

### Require

```ts
// Require required stuff.
const { UniMap, Utils } = require("@tspro/ts-utils-lib");
```

### Browser Script

- Available in version `2.1.0`.
- These bundles are transpiled with `ES5` target.
- With non-polyfilled versions you can use option to your own polyfilling choise.

```html
<!-- Unpkg CDM: Load non-polyfilled or polyfilled bundles. -->
<script src="https://unpkg.com/@tspro/ts-utils-lib@3.3.1/dist/index.es5.iife.js"></script>
<script src="https://unpkg.com/@tspro/ts-utils-lib@3.3.1/dist/index.es5.polyfilled.iife.js"></script>

<!-- jsDelivr CDN: Load non-polyfilled or polyfilled bundles. -->
<script src="https://cdn.jsdelivr.net/npm/@tspro/ts-utils-lib@3.3.1/dist/index.es5.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tspro/ts-utils-lib@3.3.1/dist/index.es5.polyfilled.iife.js"></script>

<script>
    const { UniMap, Utils } = window.TsUtilsLib;
</script>
```

### Usage

```ts
const map = new UniMap<string, number>();

console.log(Utils.Str.stringify(map));
```

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this software under the terms of the MIT License.

The full license text is available in the project repository.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

## API Archive

### Version 3.x
<ApiLink api_dir="ts-utils-lib" version="3.1.1">3.1.1</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="3.3.1">3.3.1</ApiLink>

### Version 2.x
<ApiLink api_dir="ts-utils-lib" version="2.0.0">2.0.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="2.1.0">2.1.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="2.2.0">2.2.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="2.3.0">2.3.0</ApiLink>

### Version 1.x
<ApiLink api_dir="ts-utils-lib" version="1.17.0">1.17.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="1.18.0">1.18.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="1.19.1">1.19.1</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="1.20.0">1.20.0</ApiLink> | 
<ApiLink api_dir="ts-utils-lib" version="1.21.0">1.21.0</ApiLink> 
