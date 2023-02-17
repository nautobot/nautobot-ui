import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    color: 'black-0',
  },

  defaultProps: {
    size: 'H2',
  },

  sizes: {
    H1: {
      textStyle: 'H1',
    },

    H2: {
      textStyle: 'H2',
    },

    H3: {
      textStyle: 'H3',
    },
  },
});
