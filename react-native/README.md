# @flagkit/react-native

FlagKit creators: [madebybowtie](https://github.com/madebybowtie/FlagKit).

This library provides exported SVG Components for React Native.

## Installation

**Requires `react-native-svg` v9 or higher**

### yarn

```sh
yarn add react-native-svg @flagkit-svg/react-native
```

### npm

```sh
npm i react-native-svg @flagkit/react-native
```

## Usage

Specific icons:

```tsx
import React from "react";
import { FlagIconDE } from "@flagkit/react-native";

const App = () => {
  return <FlagIconDE />;
};

export default App;
```

All Flags (will result in huge import size):

```tsx
import React from "react";
// FlagIconCode is a type with all available country codes
import Flag, { FlagIconCode } from "@flagkit/react-native";

const App = () => {
  return <Flag code="DE" />;
};

export default App;
```
