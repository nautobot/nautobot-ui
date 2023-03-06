import { selectAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

import inputTheme from '../Input/theme';

const $chakraSizes24 = cssVar('chakra-sizes-24');
const $chakraSpaceSm = cssVar('chakra-space-sm');
const $chakraSpaceXs = cssVar('chakra-space-xs');

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      ...inputTheme.baseStyle?.field,
      appearance: 'none',
      background: 'white-0',
      paddingRight: calc.subtract(
        calc.add(
          $chakraSpaceSm.reference,
          $chakraSizes24.reference,
          $chakraSpaceXs.reference
        ),
        '1px'
      ),
    },

    icon: {
      right: 'sm',
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    md: definePartsStyle({}),
  },

  variants: {
    default: definePartsStyle({}),
  },
});
