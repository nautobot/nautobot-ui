import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    tab: {
      background: 'gray-0',
      borderBottomColor: 'gray-1',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderTopRadius: 'md',
      color: 'gray-3',
      gap: 'xs',
      height: 40,
      marginBottom: '-1px',
      paddingX: 'md',
      textStyle: 'P1',
      transitionDuration: 'default',
      transitionProperty: 'background, border, box-shadow, color',
      transitionTimingFunction: 'default',

      _disabled: {
        color: 'gray-3',
        pointerEvents: 'none',
      },

      _hover: {
        background: 'blue-10%',
        color: 'blue-1',
      },

      _selected: {
        background: 'white-0',
        borderBottomColor: 'white-0',
        boxShadow: 'tab',
        color: 'blue-1',

        _hover: {
          background: 'blue-10%',
          borderBottomColor: 'blue-10%',
          color: 'blue-1',
        },
      },
    },

    tablist: {
      gap: 'sm',
      borderBottomWidth: 1,
      borderColor: 'gray-1',
      borderStyle: 'solid',
    },

    tabpanel: {
      padding: 'md',
    },

    tabpanels: {
      background: 'white-0',
    },
  }),

  defaultProps: {
    variant: 'default',
  },

  variants: {
    default: definePartsStyle({}),

    outline: definePartsStyle({
      tab: {
        position: 'relative',

        _before: {
          borderColor: 'gray-1',
          borderStyle: 'solid',
          borderTopRadius: 'md',
          borderWidth: 0,
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'full',
          transitionDuration: 'default',
          transitionProperty: 'border',
          transitionTimingFunction: 'default',
          width: 'full',
        },

        _selected: {
          _before: {
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
          },
        },
      },
    }),
  },
});
