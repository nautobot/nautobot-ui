import { accordionAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const $chakraSpaceMd = cssVar('chakra-space-md');
const $chakraSpaceSm = cssVar('chakra-space-sm');

const variant = {
  sidebar: {
    button: {
      border: 'none',
      borderRadius: 0,
      fontSize: 'sm',
      paddingX: 'md',
      paddingY: 0,

      _focusVisible: {
        color: 'orange-0',
      },

      _hover: {
        color: 'orange-0',
      },
    },

    container: {
      _notLast: {
        marginBottom: 0,
      },
    },

    icon: {
      color: 'white-0',
    },

    panel: {
      border: 'none',
      borderRadius: 0,
      color: 'white-0',
      padding: 0,
    },
  },
};

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    button: {
      background: 'white-0',
      borderColor: 'gray-1',
      borderRadius: 'md',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'black-0',
      gap: 'sm',
      paddingX: calc.subtract($chakraSpaceMd.reference, '1px'),
      paddingY: calc.subtract($chakraSpaceSm.reference, '1px'),
      textAlign: 'left',
      textStyle: 'H3',
      transitionDuration: 'default',
      transitionProperty: 'background, border-radius, color',
      transitionTimingFunction: 'default',

      _focusVisible: {
        background: 'blue-10%',
      },

      _hover: {
        background: 'blue-10%',
      },
    },

    container: {
      _notLast: {
        marginBottom: 'md',
      },
    },

    icon: {
      color: 'gray-4',
    },

    panel: {
      background: 'white-0',
      borderBottomRadius: 'md',
      borderColor: 'gray-1',
      borderStyle: 'solid',
      borderWidth: 1,
      borderTopWidth: 0,
      paddingBottom: calc.subtract($chakraSpaceMd.reference, '1px'),
      paddingTop: 'md',
      paddingX: calc.subtract($chakraSpaceMd.reference, '1px'),
      textStyle: 'P1',
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

    sidebarLevel0: definePartsStyle({
      ...variant.sidebar,
      button: {
        ...variant.sidebar.button,
        background: 'navy-0',
        color: 'gray-1',
        textTransform: 'uppercase',

        _focusVisible: {
          ...variant.sidebar.button._focusVisible,
          background: 'navy-1',
        },

        _hover: {
          ...variant.sidebar.button._hover,
          background: 'navy-1',
        },
      },

      icon: {
        ...variant.sidebar.icon,
        marginY: 'sm',
      },

      panel: {
        ...variant.sidebar.panel,
        background: 'navy-1',
      },
    }),

    sidebarLevel1: definePartsStyle({
      ...variant.sidebar,
      button: {
        ...variant.sidebar.button,
        background: 'navy-1',
        color: 'gray-1',
        fontWeight: 'normal',
        gap: 'xs',

        _focusVisible: {
          ...variant.sidebar.button._focusVisible,
          background: 'navy-2',
        },

        _hover: {
          ...variant.sidebar.button._hover,
          background: 'navy-2',
        },
      },

      icon: {
        ...variant.sidebar.icon,
        marginY: 'xs',
      },

      panel: {
        ...variant.sidebar.panel,
        background: 'navy-2',
      },
    }),
  },
});
