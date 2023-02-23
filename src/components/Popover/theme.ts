import { popoverAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(popoverAnatomy.keys);

const $popperBg = cssVar('popper-bg');
const $popperArrowBg = cssVar('popper-arrow-bg');
const $popperArrowShadowColor = cssVar('popper-arrow-shadow-color');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    body: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 180,
      paddingX: 0,
      paddingY: 'sm',
    },

    content: {
      [$popperBg.variable]: 'colors.white-0',
      [$popperArrowBg.variable]: $popperBg.reference,
      [$popperArrowShadowColor.variable]: '#0000001A',
      background: $popperBg.reference,
      borderRadius: 'sm',
      boxShadow: 'sub_menu',
      width: 'auto',
    },
  }),

  defaultProps: {
    variant: 'docked',
  },

  variants: {
    docked: definePartsStyle({
      popper: {
        zIndex: 'docked',
      },
    }),

    'docked+1': definePartsStyle({
      popper: {
        zIndex: 'docked+1',
      },
    }),

    'docked+2': definePartsStyle({
      popper: {
        zIndex: 'docked+2',
      },
    }),
  },
});
