import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const $menuBg = cssVar('menu-bg');
const $menuShadow = cssVar('menu-shadow');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    divider: {
      borderColor: 'gray-1',
    },

    groupTitle: {
      color: 'gray-4',
      fontWeight: 'medium',
      letterSpacing: '0.5px',
      paddingX: 'md',
      paddingY: '3px',
      textTransform: 'uppercase',
      textStyle: 'P2',
    },

    item: {
      color: 'black-0',
      paddingX: 'md',
      paddingY: 'xs',
      textStyle: 'P2',
      transitionDuration: 'default',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',

      _disabled: {
        color: 'gray-2',
        pointerEvents: 'none',
      },

      /*
       * `_focusVisible` and `_hover` styles are defined separately in
       * `MenuItem` and `MenuItemOption` components.
       */
    },

    list: {
      [$menuBg.variable]: 'colors.white-0',
      [$menuShadow.variable]: 'shadows.sub_menu',
      background: $menuBg.reference,
      borderRadius: 'sm',
      boxShadow: $menuShadow.reference,
      minWidth: 180,
      paddingX: 0,
      paddingY: 'sm',
      width: 'auto',
      zIndex: 1,
    },
  }),

  defaultProps: {},

  variants: {},
});
