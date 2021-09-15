# @aneilmac/blockly-theme-seshat [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly) ![npm](https://img.shields.io/npm/v/@aneilmac/blockly-theme-seshat)

A  clean, colorful [Blockly](https://www.npmjs.com/package/blockly) theme.

![theme_screenshot](./screenshot.png)

## Installation

### Yarn
```
yarn add @aneilmac/blockly-theme-seshat
```

### npm
```
npm install @aneilmac/blockly-theme-seshat --save
```

## Usage

```js
import * as Blockly from 'blockly';
import {initTheme} from 'blockly-theme-seshat';

const Seshat = initTheme(Blockly);

Blockly.inject('blocklyDiv', {
  theme: Seshat,
});

```

## License
Apache 2.0
