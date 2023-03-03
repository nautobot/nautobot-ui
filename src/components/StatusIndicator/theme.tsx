import { cssVar, defineStyleConfig } from '@chakra-ui/react';

const $chakraColorsBlue1 = cssVar('chakra-colors-blue-1');
const $chakraColorsGray2 = cssVar('chakra-colors-gray-2');

export default defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    flex: 'none',
    transitionDuration: 'default',
    transitionProperty: 'background, box-shadow',
    transitionTimingFunction: 'default',
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    md: {
      height: 10,
      width: 10,
    },
  },

  variants: {
    action: {
      backgroundColor: 'orange-0',
    },

    critical: {
      backgroundColor: 'red-1',
    },

    default: {
      background: 'none',
      boxShadow: `0 0 0 1px ${$chakraColorsGray2.reference} inset`,
    },

    info: {
      backgroundColor: 'blue-1',
    },

    secondary: {
      background: 'none',
      boxShadow: `0 0 0 1px ${$chakraColorsBlue1.reference} inset`,
    },

    success: {
      backgroundColor: 'green-1',
    },

    unknown: {
      backgroundColor: 'gray-1',
    },
  },
});
