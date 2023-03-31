import { inputAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const $chakraSpace8 = cssVar('chakra-space-8');
const $chakraSpace12 = cssVar('chakra-space-12');
const $chakraSpaceSm = cssVar('chakra-space-sm');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      borderRadius: 'md',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'black-0',
      paddingX: calc.subtract($chakraSpaceSm.reference, '1px'),
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
      marginX: 'sm',
    },
  }),

  defaultProps: {
    size: 'md',
    variant: 'default',
  },

  sizes: {
    md: definePartsStyle({
      element: {
        marginY: 8,
      },

      field: {
        paddingY: calc.subtract($chakraSpace8.reference, '1px'),
      },
    }),

    lg: definePartsStyle({
      element: {
        marginY: 12,
      },

      field: {
        paddingY: calc.subtract($chakraSpace12.reference, '1px'),
      },
    }),
  },

  variants: {
    default: definePartsStyle({
      field: {
        borderColor: 'gray-1',
      },
    }),

    navbar: definePartsStyle({
      field: {
        borderColor: 'white-0',
      },
    }),
  },
});
