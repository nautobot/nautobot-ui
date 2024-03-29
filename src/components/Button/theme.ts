import { calc, cssVar, defineStyleConfig } from '@chakra-ui/react';

const $chakraSpaceMd = cssVar('chakra-space-md');

const variant = {
  list: {
    background: 'none',
    borderRadius: 0,
    justifyContent: 'flex-start',

    _focusVisible: {
      background: 'blue-10%',
      color: 'blue-1',
    },

    _hover: {
      background: 'blue-10%',
      color: 'blue-1',
    },
  },

  primary: {
    background: 'blue-1',
    color: 'white-0',

    _active: {
      boxShadow: 'button',
    },

    _disabled: {
      background: 'gray-1',
    },

    _focusVisible: {
      boxShadow: 'button',
    },

    _hover: {
      boxShadow: 'button',
    },
  },
};

export default defineStyleConfig({
  baseStyle: {
    borderRadius: 'md',
    flex: 'none',
    fontWeight: 'normal',
    lineHeight: 'normal',
    justifyContent: 'center',
    transitionDuration: 'default',
    transitionTimingFunction: 'default',

    _disabled: {
      color: 'gray-2',
      cursor: 'default',
      opacity: 1,
      pointerEvents: 'none',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'primaryAction',
  },

  sizes: {
    xs: {
      fontSize: 'sm',
      height: 'auto',
      minWidth: 0,
      padding: 0,
    },

    sm: {
      fontSize: 'sm',
      height: 34,
      minWidth: 0,
      paddingX: 'md',
    },

    md: {
      fontSize: 'sm',
      height: 40,
      minWidth: 0,
      paddingX: 'md',
    },
  },

  variants: {
    criticalAction: {
      ...variant.primary,
      background: 'red-1',
    },

    list: variant.list,

    listCritical: {
      ...variant.list,
      color: 'red-1',

      _focusVisible: {
        ...variant.list._focusVisible,
        color: 'red-1',
      },

      _hover: {
        ...variant.list._hover,
        color: 'red-1',
      },
    },

    listSecondary: {
      ...variant.list,
      color: 'gray-3',

      _focusVisible: {
        ...variant.list._focusVisible,
        color: 'gray-3',
      },

      _hover: {
        ...variant.list._hover,
        color: 'gray-3',
      },
    },

    primary: variant.primary,

    primaryAction: {
      ...variant.primary,
      background: 'orange-0',
    },

    secondary: {
      background: 'none',
      borderColor: 'blue-1',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'blue-1',
      paddingX: calc.subtract($chakraSpaceMd.reference, '1px'),

      _active: {
        background: 'blue-10%',
        boxShadow: 'button_secondary',
      },

      _disabled: {
        borderColor: 'gray-2',
        color: 'gray-2',
      },

      _focusVisible: {
        background: 'blue-10%',
        boxShadow: 'button_secondary',
      },

      _hover: {
        background: 'blue-10%',
        boxShadow: 'button_secondary',
      },
    },

    table: {
      color: 'gray-4',

      _disabled: {
        color: 'gray-2',
      },

      _focusVisible: {
        color: 'blue-1',
      },

      _hover: {
        color: 'blue-1',
      },
    },
  },
});
