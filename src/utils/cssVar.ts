import { calc, cssVar } from '@chakra-ui/react';

import type {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transition,
  zIndices,
} from '../foundations';

export type CssVarToken =
  | `colors.${keyof typeof colors}`
  | `fonts.${keyof typeof fonts}`
  | `fontSizes.${keyof typeof fontSizes}`
  | `fontWeights.${keyof typeof fontWeights}`
  | `letterSpacings.${keyof typeof letterSpacings}`
  | `lineHeights.${keyof typeof lineHeights}`
  | `radii.${keyof typeof radii}`
  | `shadows.${keyof typeof shadows}`
  | `sizes.${keyof typeof sizes}`
  | `space.${keyof typeof space}`
  | `transition-duration.${keyof (typeof transition)['duration']}`
  | `transition-easing.${keyof (typeof transition)['easing']}`
  | `zIndices.${keyof typeof zIndices}`;

export const getCssVar = (cssVarToken: CssVarToken) => {
  const [prefix, ...name] = cssVarToken.split('.');
  return cssVar(name.join('.'), undefined, `chakra-${prefix}`);
};

export const negateCssVar = (cssVarName: keyof typeof space) => {
  const { reference } = getCssVar(`space.${cssVarName}`);
  return calc.multiply(reference, -1);
};
