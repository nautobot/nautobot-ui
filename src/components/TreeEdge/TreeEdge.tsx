import { Box, ThemingProps, useMultiStyleConfig } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

export interface TreeEdgeProps extends BoxProps, ThemingProps<'TreeEdge'> {
  middle?: BoxProps;
}

const TreeEdge = ({
  _before,
  _after,
  colorScheme,
  middle: middleProp,
  orientation,
  size,
  styleConfig,
  variant,
  ...rest
}: TreeEdgeProps) => {
  const {
    bottom,
    container,
    middle: middleStyle,
    top,
  } = useMultiStyleConfig('TreeEdge', {
    colorScheme,
    orientation,
    size,
    styleConfig,
    variant,
  });

  return (
    <Box
      __css={container}
      _after={{ ...bottom, ..._after }}
      _before={{ ...top, ..._before }}
      as="span"
      {...rest}
    >
      <Box __css={middleStyle} as="span" {...middleProp} />
    </Box>
  );
};

export default TreeEdge;
