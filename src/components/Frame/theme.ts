import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['content', 'frame']);

const $chakraColorsGray1 = cssVar('chakra-colors-gray-1');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    content: {
      background: 'white-0',
      borderRadius: 'md',
      boxShadow: `0 0 0 1px ${$chakraColorsGray1.reference} inset`,
      flexDirection: 'column',
      padding: 'md',
    },

    frame: {
      backdropFilter: 'blur(10px)',
      background: '#FFFFFF03',
      borderRadius: 'md',
      padding: 'md',
    },
  }),

  defaultProps: {
    variant: 'default',
  },

  variants: {
    default: {},

    light: definePartsStyle({
      frame: {
        background: '#FFFFFF33',
      },
    }),

    modal: definePartsStyle({
      content: {
        borderRadius: 'sm',
        height: 'full',
        overflow: 'auto',
        padding: 0,
        position: 'relative',
      },

      frame: {
        height: 'full',
      },
    }),
  },
});
