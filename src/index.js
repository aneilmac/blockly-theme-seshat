import * as Blockly from 'blockly';
import * as WebFont from 'webfontloader';

const fontStyle_ = {
  'family': '\'Montserrat\', sans-serif',
  'size': 14,
  'weight': 400,
};

const componentStyles_ = {
  'workspaceBackgroundColour': '#f8f8f8',
  'toolboxBackgroundColour': '#efefef',
  'toolboxForegroundColour': '#323232',
  'flyoutBackgroundColour': '#efefef',
  'flyoutForegroundColour': '#323232',
  'flyoutOpacity': 0.9,
  'scrollbarColour': '#ccc',
  'scrollbarOpacity': 0.8,
  'insertionMarkerColour': '#0079c1',
  'markerColor': '#de2900',
  'cursorColor': '#ab3c16',
};

const blockStyles_ = {
  'colour_blocks': {
    'colourPrimary': '#56a5d8',
  },
  'list_blocks': {
    'colourPrimary': '#e4d154',
  },
  'logic_blocks': {
    'colourPrimary': '#0079c1',
  },
  'loop_blocks': {
    'colourPrimary': '#d17e21',
  },
  'math_blocks': {
    'colourPrimary': '#9bc19c',
  },
  'procedure_blocks': {
    'colourPrimary': '#5a9359',
  },
  'text_blocks': {
    'colourPrimary': '#ab3c16',
  },
  'variable_blocks': {
    'colourPrimary': '#9081bc',
  },
  'variable_dynamic_blocks': {
    'colourPrimary': '#7461a8',
  },
  'hat_blocks': {
    'colourPrimary': '#5a9359',
  },
};

const categoryStyles_ = {
  'colour_category': {
    'colour': '#56a5d8',
  },
  'list_category': {
    'colour': '#e4d154',
  },
  'logic_category': {
    'colour': '#0079c1',
  },
  'loop_category': {
    'colour': '#d17e21',
  },
  'math_category': {
    'colour': '#9bc19c',
  },
  'procedure_category': {
    'colour': '#5a9359',
  },
  'text_category': {
    'colour': '#ab3c16',
  },
  'variable_category': {
    'colour': '#9081bc',
  },
  'variable_dynamic_category': {
    'colour': '#7461a8',
  },
};

const Seshat = Blockly.Theme.defineTheme('seshat', {
  'blockStyles': blockStyles_,
  'categoryStyles': categoryStyles_,
  'componentStyles': componentStyles_,
  'fontStyle': fontStyle_,
  'startHats': true,
});

// Async load the font. If the font loads after the workspace theme has been
// applied, we refresh the themes on all relevent workspaces to ensure the font
// renders correctly. Note that otherwise strange margin/padding errors tend to
// occur.
WebFont.load({
  google: {
    families: ['Montserrat'],
  },
  fontactive: function() {
    for (const w of Blockly.Workspace.getAll()) {
      if (w.options.parentWorkspace) {
        const wSVG = w.options.parentWorkspace;
        if (wSVG.getTheme() === Seshat) {
          wSVG.refreshTheme();
        }
      }
    }
  },
});

export default Seshat;
