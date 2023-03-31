import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'collapseButton',
    'container',
    'logo',
    'menuButton',
    'notificationButton',
    'section',
    'sections',
  ]);

const $chakraColorsBlue1 = cssVar('chakra-colors-blue-1');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    collapseButton: {
      borderRadius: '6px',
      flex: 'none',
      height: 'auto',
      padding: 'xs',
    },

    container: {
      alignItems: 'center',
      display: 'flex',
      gap: 'md',
      paddingX: 'md',
    },

    logo: {
      borderRadius: 'sm',
      flex: 'none',
      transitionDuration: 'default',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'default',

      _focusVisible: {
        boxShadow: `0 0 0 1px ${$chakraColorsBlue1.reference}`,
        outline: 'none',
      },
    },

    menuButton: {
      color: 'gray-3',
      flex: 'none',
      fontSize: 'md',
      height: 'auto',
      padding: 0,

      _focusVisible: {
        color: 'blue-1',
      },

      _hover: {
        color: 'blue-1',
      },
    },

    notificationButton: {
      color: 'gray-3',
      flex: 'none',
      height: 'auto',

      _after: {
        alignItems: 'center',
        background: '#EB5757',
        borderRadius: 'full',
        color: 'white-0',
        display: 'inline-flex',
        height: 14,
        justifyContent: 'center',
        position: 'absolute',
        textStyle: 'P2',
        width: 14,
      },

      _focusVisible: {
        boxShadow: `0 0 0 1px ${$chakraColorsBlue1.reference}`,
      },
    },

    section: {
      color: 'gray-3',
      flex: 'none',
      paddingRight: 'sm',
      paddingY: 6,
      textStyle: 'P2',
      transitionDuration: 'default',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',

      _focusVisible: {
        color: 'blue-1',
        outline: 'none',
        textDecoration: 'none',
      },

      _hover: {
        color: 'blue-1',
        textDecoration: 'none',
      },
    },

    sections: {
      alignItems: 'center',
      background: 'white-0',
      borderRadius: 'md',
      display: 'flex',
      flex: 'none',
      gap: 'md',
      paddingX: 'md',
    },
  }),

  defaultProps: {
    size: 'lg',
    variant: 'default',
  },

  sizes: {
    md: definePartsStyle({
      notificationButton: {
        padding: 8,

        _after: {
          right: 8,
        },
      },

      sections: {
        paddingY: 2,
      },
    }),

    lg: definePartsStyle({
      notificationButton: {
        marginY: 2,
        padding: 'sm',

        _after: {
          right: 'sm',
        },
      },

      sections: {
        paddingY: 6,
      },
    }),
  },

  variants: {
    default: definePartsStyle({}),
  },
});
