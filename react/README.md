# @flagkit/react

[![npm version](https://img.shields.io/npm/v/@flagkit/react.svg)](https://www.npmjs.com/package/@flagkit/react)
[![npm downloads](https://img.shields.io/npm/dm/@flagkit/react.svg)](https://www.npmjs.com/package/@flagkit/react)

FlagKit creators: [madebybowtie](https://github.com/madebybowtie/FlagKit).

This library provides exported SVG Components for React instead of relying on a CDN like `react-flagkit`.

## Installation

### yarn

```sh
yarn add @flagkit/react
```

### npm

```sh
npm i @flagkit/react
```

## Usage

Specific icons:

```tsx
import React from "react";
import { FlagIconDE } from "@flagkit/react";

const App = () => {
  return <FlagIconDE />;
};

export default App;
```
