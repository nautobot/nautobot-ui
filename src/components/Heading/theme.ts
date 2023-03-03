import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    color: 'black-0',
  },

  defaultProps: {
    size: 'H2',
    variant: 'default',
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

  variants: {
    default: {},

    sidebar: {
      alignItems: 'center',
      color: 'white-0',
      display: 'flex',
      gap: 'sm',
      paddingX: 'md',
      paddingY: 'sm',
    },
  },
});
