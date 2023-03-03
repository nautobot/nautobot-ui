import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['bottom', 'container', 'middle', 'top']);

const baseStyleBottomTop = {
  content: '""',
  display: 'inline-block',
  height: 'half',
  left: '50%',
  position: 'absolute',
  borderLeftColor: 'currentcolor',
  borderLeftStyle: 'solid',
  borderLeftWidth: 1,
};

const variant = {
  default: { container: { color: 'gray-2' } },
  extension: { middle: { display: 'none' } },
  first: { top: { display: 'none' } },
  last: { bottom: { display: 'none' } },
  sidebar: { container: { color: 'gray-4' } },
};

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    bottom: {
      ...baseStyleBottomTop,
      bottom: 0,
    },

    container: {
      alignSelf: 'stretch',
      display: 'inline-block',
      flex: 'none',
      position: 'relative',
      width: 10,
    },

    middle: {
      borderBottomColor: 'currentcolor',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      display: 'inline-block',
      left: '50%',
      position: 'absolute',
      top: '50%',
      width: 'half',
    },

    top: {
      ...baseStyleBottomTop,
      top: 0,
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    md: definePartsStyle({}),
  },

  variants: {
    default: definePartsStyle({
      ...variant.default,
    }),

    extension: definePartsStyle({
      ...variant.default,
      ...variant.extension,
    }),

    first: definePartsStyle({
      ...variant.default,
      ...variant.first,
    }),

    last: definePartsStyle({
      ...variant.default,
      ...variant.last,
    }),

    sidebar: definePartsStyle({
      ...variant.sidebar,
    }),

    sidebarExtension: definePartsStyle({
      ...variant.sidebar,
      ...variant.extension,
    }),

    sidebarFirst: definePartsStyle({
      ...variant.sidebar,
      ...variant.first,
    }),

    sidebarLast: definePartsStyle({
      ...variant.sidebar,
      ...variant.last,
    }),
  },
});
