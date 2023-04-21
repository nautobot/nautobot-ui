import { alertAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const $chakraSpaceXs = cssVar('chakra-space-xs');
const $chakraSpaceSm = cssVar('chakra-space-sm');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      background: 'white-0',
      borderRadius: 'md',
      paddingLeft: calc.add(
        $chakraSpaceSm.reference,
        $chakraSpaceXs.reference,
        $chakraSpaceSm.reference
      ),
      paddingRight: 'sm',
      paddingY: 'sm',

      _before: {
        background: 'currentcolor',
        borderRadius: 'sm',
        bottom: 'sm',
        content: '""',
        display: 'block',
        left: 'sm',
        paddingLeft: 'xs',
        position: 'absolute',
        top: 'sm',
      },
    },

    description: {
      color: 'black-0',
      display: 'block',
      textStyle: 'P1',
    },

    spinner: {
      height: 24,
      width: 24,
    },

    title: {
      color: 'black-0',
      textStyle: 'H3',
    },
  }),
});
