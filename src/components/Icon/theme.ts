import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    color: 'currentcolor',
    flex: 'none',
    height: 20,
    transitionDuration: 'default',
    transitionProperty: 'color, transform',
    transitionTimingFunction: 'default',
    width: 20,
  },

  variants: {
    'rotate-45': {
      transform: 'rotate(-45deg)',
    },

    'rotate-90': {
      transform: 'rotate(-90deg)',
    },

    'rotate-180': {
      transform: 'rotate(-180deg)',
    },

    'rotate-270': {
      transform: 'rotate(-270deg)',
    },
  },
});
