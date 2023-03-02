import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['collapseButton', 'container', 'content']);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    collapseButton: {
      borderRadius: '6px',
      height: 'auto',
      right: 0,
      padding: 'xs',
      position: 'absolute',
      transform: 'translateX(50%)',
      top: '31px',
      zIndex: 'docked',
    },

    container: {
      height: 'full',
      overflow: 'visible',
      position: 'relative',
      transitionDuration: 'default',
      transitionProperty: 'width',
      transitionTimingFunction: 'default',
    },

    content: {
      background: 'navy-0',
      display: 'flex',
      flexDirection: 'column',
      height: 'full',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'expanded',
  },

  sizes: {
    md: definePartsStyle({}),
  },

  variants: {
    collapsed: definePartsStyle({
      container: {
        width: 70,
      },
    }),

    expanded: definePartsStyle({
      container: {
        width: 220,
      },
    }),
  },
});
