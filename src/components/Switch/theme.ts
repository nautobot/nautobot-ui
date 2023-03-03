import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      cursor: 'pointer',
      flex: 'none',

      _disabled: {
        pointerEvents: 'none',
      },
    },

    thumb: {
      background: 'gray-4',
      borderRadius: 'full',
      height: 'full',
      position: 'relative',
      transform: 'translateX(0)',
      transitionDuration: 'default',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      zIndex: 1,

      _checked: {
        transform: 'translateX(100%)',
        background: 'blue-1',
      },
    },

    track: {
      background: 'gray-0',
      borderRadius: 'full',
      boxSizing: 'border-box',
      position: 'relative',
      transitionDuration: 'default',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'default',
    },
  }),

  defaultProps: {
    size: 'md',
  },

  sizes: {
    sm: definePartsStyle({
      container: {
        alignItems: 'center',
        display: 'inline-flex',
        gap: 'xs',
        height: 'auto',
        width: 'auto',

        ...(() => {
          const baseStylePseudo = {
            display: 'inline-block',
            lineHeight: 1,
            textStyle: 'P3',
            transitionDuration: 'default',
            transitionProperty: 'color, opacity, transform, visibility',
            transitionTimingFunction: 'default',
          };

          return {
            _after: {
              ...baseStylePseudo,
              content: '"Off"',
              opacity: 1,
              transform: 'translateY(0)',
              visibility: 'visible',
            },

            _before: {
              ...baseStylePseudo,
              content: '"On"',
              opacity: 0,
              position: 'absolute',
              right: 2,
              transform: 'translateY(-100%)',
              visibility: 'hidden',
            },
          };
        })(),

        _checked: {
          _after: {
            opacity: 0,
            transform: 'translateY(100%)',
            visibility: 'hidden',
          },

          _before: {
            opacity: 1,
            transform: 'translateY(0)',
            visibility: 'visible',
          },
        },
      },

      thumb: {
        width: 14,
      },

      track: {
        flex: 'none',
        height: 18,
        padding: 2,
        width: 32,
      },
    }),

    md: definePartsStyle({
      container: {
        height: 40,
        width: 72,
      },

      thumb: {
        width: 32,
      },

      track: {
        height: 'full',
        padding: 4,
        width: 'full',

        ...(() => {
          const baseStylePseudo = {
            display: 'inline-block',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            transitionDuration: 'default',
            transitionProperty: 'color',
            transitionTimingFunction: 'default',
          };

          return {
            _after: {
              ...baseStylePseudo,
              color: 'gray-4',
              content: '"Off"',
              right: 8,
            },

            _before: {
              ...baseStylePseudo,
              color: 'blue-1',
              content: '"On"',
              left: 'sm',
            },
          };
        })(),
      },
    }),
  },
});
