import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    color: 'black-0',
  },

  defaultProps: {
    size: 'P1',
    variant: 'P',
  },

  sizes: {
    P1: {
      textStyle: 'P1',
    },

    P2: {
      textStyle: 'P2',
    },

    P3: {
      textStyle: 'P3',
    },
  },

  variants: {
    P: {},

    Mono1: {
      textStyle: 'Mono1',
    },
  },
});
