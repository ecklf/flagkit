# @flagkit/react

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

All Flags (will result in huge import size):

```tsx
import React from "react";
// FlagIconCode is a type with all available country codes
import Flag, { FlagIconCode } from "@flagkit/react";

const App = () => {
  return <Flag code="DE" />;
};

export default App;
```
