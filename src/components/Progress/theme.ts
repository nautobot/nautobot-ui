import { progressAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(progressAnatomy.keys);

const $chakraSizes40 = cssVar('chakra-sizes-40');
const $chakraSizesFull = cssVar('chakra-sizes-full');
const $chakraSpaceXl = cssVar('chakra-space-xl');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    filledTrack: {
      background: 'blue-1',
      height: 'full',
    },

    label: {
      color: 'black-0',
      fontFamily: 'mono',
      left: 0,
      textAlign: 'left',
      textStyle: 'P1',
      transform: 'translate(-100%, -50%)',
      width: calc.subtract($chakraSizes40.reference, '1px'),
    },

    track: {
      background: 'white-0',
      boxSizing: 'content-box',
      height: 10,
      borderColor: 'gray-1',
      borderRadius: 'full',
      borderStyle: 'solid',
      borderWidth: 1,
      marginLeft: calc.subtract($chakraSpaceXl.reference, '1px'),
      marginY: 6,
      overflow: 'visible',
      width: calc.subtract(
        $chakraSizesFull.reference,
        $chakraSpaceXl.reference,
        '1px'
      ),
    },
  }),
});
