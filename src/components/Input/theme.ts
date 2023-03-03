import { inputAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const $chakraSpace8 = cssVar('chakra-space-8');
const $chakraSpaceSm = cssVar('chakra-space-sm');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      borderColor: 'gray-2',
      borderRadius: 'md',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'black-0',
      paddingX: calc.subtract($chakraSpaceSm.reference, '1px'),
      paddingY: calc.subtract($chakraSpace8.reference, '1px'),
      textStyle: 'P1',
      transitionDuration: 'default',
      transitionProperty: 'background, border, box-shadow, color',
      transitionTimingFunction: 'default',
      width: 'full',

      _disabled: {
        background: 'gray-1',
        borderColor: 'gray-1',
        color: 'gray-2',
        pointerEvents: 'none',
      },

      _focus: {
        borderColor: 'blue-1',
        boxShadow: 'active_input',
        outline: 'none',

        _placeholder: {
          color: 'black-0',
        },
      },

      _hover: {
        borderColor: 'blue-1',
        boxShadow: 'active_input',
        outline: 'none',

        _placeholder: {
          color: 'black-0',
        },
      },

      _invalid: {
        borderColor: 'red-1',
      },

      _placeholder: {
        color: 'gray-2',
        textStyle: 'P1',
        transitionDuration: 'default',
        transitionProperty: 'color',
        transitionTimingFunction: 'default',
      },
    },

    element: {
      color: 'gray-2',
      marginY: 8,
      marginX: 'sm',
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
    default: definePartsStyle({}),
  },
});
