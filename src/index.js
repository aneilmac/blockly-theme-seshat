import * as WebFont from 'webfontloader';

export const fontStyle = {
  'family': '\'Montserrat\', sans-serif',
  'size': 14,
  'weight': 400,
};

export const componentStyles = {
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

export const blockStyles = {
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

export const categoryStyles = {
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

let Seshat = null;

/**
 * Call with `initTheme(Blockly)`. Registers the new theme with Blockly
 * and returns the Seshat theme. If Seshat has already been registered,
 * will return the already registered theme.
 *
 * @param {Blockly} Blockly The blockly instance to define the Seshat theme.
 * @return {Blockly.Theme} Seshat theme object.
 */
export function initTheme(Blockly) {
  if (Seshat) {
    return Seshat;
  }

  Seshat = Blockly.Theme.defineTheme('seshat', {
    'blockStyles': blockStyles,
    'categoryStyles': categoryStyles,
    'componentStyles': componentStyles,
    'fontStyle': fontStyle,
    'startHats': true,
  });

  // Async load the font. If the font loads after the workspace theme has been
  // applied, we refresh the themes on all relevent workspaces to ensure the
  // font renders correctly. Note that otherwise strange margin/padding errors
  // tend to occur.
  WebFont.load({
    google: {
      families: ['Montserrat'],
    },
    fontactive: function() {
      for (const w of Blockly.Workspace.getAll()) {
        const wSVG = w.options.parentWorkspace;
        if (wSVG && wSVG.getTheme() === Seshat) {
          wSVG.refreshTheme();
        }
      }
    },
  });

  return Seshat;
}
