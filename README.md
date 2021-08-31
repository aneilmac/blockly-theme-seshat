# @aneilmac/blockly-theme-seshat [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

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
import Seshat from 'blockly-theme-seshat';

Blockly.inject('blocklyDiv', {
  theme: Seshat,
});

```

## License
Apache 2.0
