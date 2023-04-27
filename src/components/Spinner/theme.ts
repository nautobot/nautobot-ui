import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    color: 'currentcolor',
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    '2xs': {
      height: 14,
      width: 14,
    },

    xs: {
      height: 16,
      width: 16,
    },

    sm: {
      height: 20,
      width: 20,
    },

    md: {
      height: 24,
      width: 24,
    },

    lg: {
      height: 28,
      width: 28,
    },
  },

  variants: {
    default: {},
  },
});
