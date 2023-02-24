# @ga-innoval/react-native-ui

[![CI](https://github.com/ga-innoval/react-native-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/ga-innoval/react-native-ui/actions/workflows/ci.yml)


A collection of production-ready customizable components for React Native, following @ga-innoval design guidelines.

![Coverage lines](https://github.com/ga-innoval/react-native-ui/coverage/badge-lines.svg)

Una colección de componentes para React Native personalizables y listos para producción, siguiendo las pautas de diseño de Innoval.

**Warning**
This package is WIP. You may encounter errors.


## Installation

```bash
npm install @ga-innoval/react-native-ui
```

or

```bash
yarn add @ga-innoval/react-native-ui
```

## Usage

```js
import React from 'react';
import { View, Text } from 'react-native';
import { ChipButton } from '@ga-innoval/react-native-ui';

export function Component() {
  return (
    <View>
      <ChipButton
        text="Click me!"
        backgroundColor={'green'}
        onPress={() => console.log('Clicked!')}
        icon="alert"
      />
    </View>
  );
}
```

## Docs

[Check the docs](https://innoval-ui-docs.vercel.app/docs/intro)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
