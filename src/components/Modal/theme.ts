import { modalAnatomy } from '@chakra-ui/anatomy';
import { calc, createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const $chakraSizesFull = cssVar('chakra-sizes-full');
const $chakraSpaceMd = cssVar('chakra-space-md');

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    body: {
      marginY: 'md',
      overflow: 'auto',
      paddingX: 'md',
      paddingY: 0,
    },

    closeButton: {
      borderRadius: 'sm',
      color: 'gray-3',
      position: 'absolute',
      right: 'md',
      top: 'md',
    },

    dialog: {
      background: 'none',
      marginY: 'md',
      maxHeight: calc.subtract(
        $chakraSizesFull.reference,
        calc.multiply($chakraSpaceMd.reference, 2)
      ),
      maxWidth: 532,
    },

    dialogContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    footer: {
      justifyContent: 'space-between',
      paddingBottom: 'md',
      paddingTop: 0,
      paddingX: 'md',
    },

    overlay: {
      background: '#00000099',
    },
  }),
});
