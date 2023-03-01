import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      _hover: {
        color: 'blue-1',
      },

      _checked: {
        color: 'blue-1',
      },

      _disabled: {
        color: 'gray-2',
        pointerEvents: 'none',
      },

      color: 'gray-2',
      transitionDuration: 'default',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
    },

    control: {
      _before: {
        borderColor: 'currentcolor',
        borderRadius: 'sm',
        borderStyle: 'solid',
        borderWidth: 1,
        bottom: '8.33%',
        content: '""',
        display: 'block',
        left: '8.33%',
        position: 'absolute',
        right: '8.33%',
        top: '8.33%',
        transitionDuration: 'default',
        transitionProperty: 'background, border, box-shadow',
        transitionTimingFunction: 'default',
      },

      _focusVisible: {
        _before: {
          background: 'blue-10%',
          boxShadow: 'button_secondary',
        },
      },

      _groupHover: {
        _before: {
          background: 'blue-10%',
          boxShadow: 'button_secondary',
        },
      },

      position: 'relative',
    },

    /*
     * `icon` is styled directly in `CheckboxIcon` component, because it
     * requires more sophisticated logic due to the fact that there are two
     * icons to style: indeterminate and check.
     */

    label: {
      _groupHover: {
        color: 'currentcolor',
      },

      _checked: {
        color: 'currentcolor',
      },

      _disabled: {
        color: 'gray-3',
      },

      color: 'black-0',
      marginLeft: 'sm',
      transitionDuration: 'default',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    sm: definePartsStyle({
      control: {
        height: 20,
        width: 20,
      },

      label: {
        textStyle: 'P2',
      },
    }),

    md: definePartsStyle({
      control: {
        height: 24,
        width: 24,
      },

      label: {
        textStyle: 'P1',
      },
    }),
  },

  variants: {
    default: definePartsStyle({}),
  },
});
