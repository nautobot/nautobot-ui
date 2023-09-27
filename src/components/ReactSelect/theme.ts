import { calc, createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { getCssVar } from '../..';
import selectTheme from '../Select/theme';

import { REACT_SELECT_INNER_COMPONENT_KEYS } from './constants';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(REACT_SELECT_INNER_COMPONENT_KEYS);

const message = {
  color: 'gray-3',
  cursor: 'default',
  paddingX: 'md',
  textAlign: 'left',
};

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      position: 'relative',
    },

    control: {
      ...selectTheme.baseStyle?.field,
      paddingRight: selectTheme.baseStyle?.field.paddingX,
      zIndex: 1,

      _focus: {
        ...selectTheme.baseStyle?.field._focus,

        '> div > [id$="placeholder"]': {
          ...selectTheme.baseStyle?.field._focus?._placeholder,
        },
      },

      '&:hover': {
        '> div > [id$="placeholder"]': {
          ...selectTheme.baseStyle?.field._hover?._placeholder,
        },

        '> div:last-of-type > *': {
          color: 'blue-1',
        },
      },
    },

    dropdownIndicator: {
      _focus: {
        color: 'blue-1',
      },

      _open: {
        variant: 'rotate-180',
      },
    },

    loadingMessage: message,

    loadingIndicator: {
      position: 'absolute',
      right: 'sm',

      _focus: {
        color: 'blue-1',
      },

      _open: {
        variant: 'rotate-180',
      },
    },

    menu: {
      background: 'white-0',
      borderRadius: 'sm',
      boxShadow: 'sub_menu',
      color: 'black-0',
      marginTop: 'xs',
      textStyle: 'P1',
      paddingY: 'sm',
      zIndex: 'docked',
    },

    multiValue: {
      flex: 'none',
      background: 'blue-1',
      borderRadius: 'sm',
      color: 'white-0',
      paddingX: 'xs',
      textStyle: 'P2',

      _disabled: {
        opacity: 0.4,
      },
    },

    noOptionsMessage: message,

    option: {
      cursor: 'default',
      paddingX: 'md',
      paddingY: 'xs',
      transitionDuration: 'default',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      width: 'full',

      _disabled: {
        color: 'gray-2',
        pointerEvents: 'none',
      },

      _hover: {
        background: 'blue-10%',
        color: 'blue-1',

        span: {
          color: 'blue-1',
        },
      },
    },

    placeholder: {
      ...selectTheme.baseStyle?.field._placeholder,
    },

    valueContainer: {
      alignItems: 'center',
      flex: 'none',
      gap: 'xs',
      overflow: 'hidden',
      position: 'relative',
      width: calc.subtract(
        getCssVar('sizes.full').reference,
        getCssVar('sizes.24').reference,
        getCssVar('space.xs').reference
      ),
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    md: definePartsStyle({
      control: {
        ...selectTheme.sizes?.md.field,
      },
    }),
  },

  variants: {
    default: definePartsStyle({
      control: {
        ...selectTheme.variants?.default.field,
      },
    }),
  },
});
