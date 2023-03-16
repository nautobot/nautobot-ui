import {
  Box,
  cssVar,
  forwardRef,
  keyframes,
  useStyleConfig,
} from '@chakra-ui/react';
import type { BoxProps, ThemingProps } from '@chakra-ui/react';
import React from 'react';

export interface StatusIndicatorProps
  extends BoxProps,
    ThemingProps<'StatusIndicator'> {
  /**
   * Enables an animation on `StatusIndicator` to give it a dynamic, kind of
   * spinner feel. A nice UX touch when a particular status is only temporary
   * and there is an update expected.
   */
  breathe?: boolean;
}

const $chakraTransitionEasingDefault = cssVar(
  'chakra-transition-easing-default'
);

const keyframesBlink = keyframes`
  from { opacity: 1; }
  to { opacity: 0.4; }
`;

const StatusIndicator = forwardRef<StatusIndicatorProps, 'span'>(
  (
    { breathe, colorScheme, orientation, size, styleConfig, variant, ...rest },
    ref
  ) => {
    const style = useStyleConfig('StatusIndicator', {
      colorScheme,
      orientation,
      size,
      styleConfig,
      variant,
    });

    return (
      <Box
        ref={ref}
        __css={style}
        as="span"
        {...(breathe
          ? {
              animation: `${keyframesBlink} 800ms ${$chakraTransitionEasingDefault.reference} infinite alternate`,
            }
          : undefined)}
        {...rest}
      />
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';

export default StatusIndicator;
