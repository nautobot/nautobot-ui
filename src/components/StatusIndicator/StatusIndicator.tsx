import {
  Box,
  cssVar,
  keyframes,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

export interface StatusIndicatorProps
  extends BoxProps,
    ThemingProps<'StatusIndicator'> {
  breathe?: boolean;
}

const $chakraTransitionEasingDefault = cssVar(
  'chakra-transition-easing-default'
);

const keyframesBlink = keyframes`
  from { opacity: 1; }
  to { opacity: 0.4; }
`;

const StatusIndicator = ({
  breathe,
  colorScheme,
  orientation,
  size,
  styleConfig,
  variant,
  ...rest
}: StatusIndicatorProps) => {
  const style = useStyleConfig('StatusIndicator', {
    colorScheme,
    orientation,
    size,
    styleConfig,
    variant,
  });

  return (
    <Box
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
};

export default StatusIndicator;
