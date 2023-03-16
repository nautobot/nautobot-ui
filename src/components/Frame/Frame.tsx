import { forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import type { ThemingProps } from '@chakra-ui/react';
import React from 'react';

import { Box, Flex } from '../..';
import type { BoxProps, FlexProps } from '../..';

export interface FrameProps extends BoxProps, ThemingProps<'Frame'> {
  contentProps?: FlexProps;
}

const Frame = forwardRef<FrameProps, 'div'>(
  ({ children, contentProps, variant, ...rest }, ref) => {
    const { frame, content } = useMultiStyleConfig('Frame', { variant });

    return (
      <Box ref={ref} __css={frame} {...rest}>
        <Flex __css={content} {...contentProps}>
          {children}
        </Flex>
      </Box>
    );
  }
);

Frame.displayName = 'Frame';

export default Frame;
