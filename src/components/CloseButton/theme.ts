import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    borderRadius: 'sm',
    color: 'gray-3',
    transitionDuration: 'default',
    transitionProperty: 'background',
    transitionTimingFunction: 'default',

    _disabled: {
      color: 'gray-1',
      pointerEvents: 'none',
    },

    _focusVisible: {
      background: 'gray-0',
    },

    _hover: {
      background: 'gray-0',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    '2xs': {},
    xs: {},
    sm: {},
    md: {},
    lg: {},
  },

  variants: {
    default: {},
  },
});
