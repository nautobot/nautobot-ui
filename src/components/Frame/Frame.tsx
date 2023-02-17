import { useMultiStyleConfig } from '@chakra-ui/react';
import type { ThemingProps } from '@chakra-ui/react';
import React from 'react';

import { Box, Flex } from '../..';
import type { BoxProps, FlexProps } from '../..';

export interface FrameProps extends BoxProps, ThemingProps<'Frame'> {
  contentProps?: FlexProps;
}

const Frame = ({ children, contentProps, variant, ...rest }: FrameProps) => {
  const { frame, content } = useMultiStyleConfig('Frame', { variant });

  return (
    <Box __css={frame} {...rest}>
      <Flex __css={content} {...contentProps}>
        {children}
      </Flex>
    </Box>
  );
};

export default Frame;
