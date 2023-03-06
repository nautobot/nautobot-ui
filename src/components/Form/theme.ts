import { formAnatomy, formErrorAnatomy } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
} from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(formAnatomy.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    helperText: {
      textStyle: 'P3',
    },

    requiredIndicator: {
      color: 'red-1',
      marginLeft: '3px',
    },
  }),
});

const {
  definePartsStyle: definePartsStyleFormError,
  defineMultiStyleConfig: defineMultiStyleConfigFormError,
} = createMultiStyleConfigHelpers(formErrorAnatomy.keys);

export const FormError = defineMultiStyleConfigFormError({
  baseStyle: definePartsStyleFormError({
    text: {
      color: 'red',
      textStyle: 'P3',
    },
  }),
});

export const FormLabel = defineStyleConfig({
  baseStyle: {
    textStyle: 'P3',

    _disabled: {
      color: 'gray-3',
      pointerEvents: 'none',
    },
  },
});

export const FormContainer = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',
  },
});
