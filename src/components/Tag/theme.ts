import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const $chakraColorsBlue1 = cssVar('chakra-colors-blue-1');
const $chakraColorsGray2 = cssVar('chakra-colors-gray-2');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    closeButton: {
      _disabled: {
        pointerEvents: 'none',
      },

      marginLeft: 'sm',
    },

    container: {
      color: 'white-0',
      transitionDuration: 'default',
      transitionProperty: 'background, box-shadow, color',
      transitionTimingFunction: 'default',
    },

    label: {
      color: 'currentcolor',
      textStyle: 'P2',
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    sm: definePartsStyle({
      container: {
        borderRadius: 'full',
        paddingX: 6,
      },

      label: {
        lineHeight: 'short',
      },
    }),

    md: definePartsStyle({
      container: {
        borderRadius: 'sm',
        paddingX: 'xs',
      },
    }),
  },

  variants: {
    action: definePartsStyle({
      container: {
        backgroundColor: 'orange-0',
      },
    }),

    critical: definePartsStyle({
      container: {
        backgroundColor: 'red-1',
      },
    }),

    default: definePartsStyle({
      container: {
        backgroundColor: 'none',
        boxShadow: `0 0 0 1px ${$chakraColorsGray2.reference} inset`,
        color: 'black-0',
      },
    }),

    info: definePartsStyle({
      container: {
        backgroundColor: 'blue-1',
      },
    }),

    secondary: definePartsStyle({
      container: {
        background: 'none',
        boxShadow: `0 0 0 1px ${$chakraColorsBlue1.reference} inset`,
        color: 'blue-1',
      },
    }),

    success: definePartsStyle({
      container: {
        backgroundColor: 'green-1',
      },
    }),

    unknown: definePartsStyle({
      container: {
        backgroundColor: 'gray-1',
        color: 'gray-4',
      },
    }),
  },
});
