import { tableAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const $chakraSpace16 = cssVar('chakra-space-16');
const $chakraSpaceSm = cssVar('chakra-space-sm');

const cell = {
  _first: { paddingLeft: calc.subtract($chakraSpace16.reference, '1px') },
  _last: { paddingRight: calc.subtract($chakraSpace16.reference, '1px') },
  paddingBottom: calc.subtract($chakraSpaceSm.reference, '1px'),
  paddingTop: 'sm',
  paddingX: 8,
  textAlign: 'left',
  textStyle: 'P1',
};

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    table: {
      width: 'full',
    },

    td: cell,

    th: {
      ...cell,
      paddingTop: cell.paddingBottom,
      background: 'gray-0',
      color: 'gray-4',
      fontWeight: 'medium',
      textStyle: 'H3',
    },

    tr: {
      _hover: { background: 'blue-10%' },
      _notFirst: { borderBottom: 'none' },
      borderBottomColor: 'gray-1',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      transitionDuration: 'default',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
    },
  }),
});
