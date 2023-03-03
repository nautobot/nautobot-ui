import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    alignItems: 'center',
    color: 'blue-1',
    display: 'inline-flex',
    textDecoration: 'none',
    textStyle: 'P1',

    _focusVisible: {
      color: 'blue-1',
      textDecoration: 'underline',
      outline: 'none',
    },

    _hover: {
      color: 'blue-1',
      textDecoration: 'underline',
    },
  },

  variants: {
    default: {
      textStyle: 'P1',
    },

    Mono1: {
      textStyle: 'Mono1',
    },
  },
});
