import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['breadcrumb', 'container', 'divider']);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    breadcrumb: {
      borderRadius: 'sm',
      color: 'black-0',
      cursor: 'pointer',
      fontSize: 'md',
      height: 'auto',
      lineHeight: 'normal',
      padding: 0,
      transitionDuration: 'default',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',

      _disabled: {
        color: 'black-0',
        pointerEvents: 'none',
      },

      _focusVisible: {
        color: 'blue-1',
        outline: 'none',
        textDecoration: 'none',
      },

      _hover: {
        color: 'blue-1',
        textDecoration: 'none',
      },
    },

    container: {
      alignItems: 'center',
      display: 'flex',
    },

    divider: {
      color: 'gray-2',
      cursor: 'default',
      marginX: 'xs',
      textStyle: 'P3',
      userSelect: 'none',
    },
  }),
});
