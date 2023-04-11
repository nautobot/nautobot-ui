import { forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Flex, Heading } from '../..';
import type { FlexProps } from '../..';

export const StoryContent = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex
    ref={ref}
    align="center"
    background="blue-10%"
    borderRadius="md"
    height="full"
    justify="center"
    width="full"
    {...props}
  >
    <Heading as="h1" color="blue-1" size="H1" textTransform="uppercase">
      Content
    </Heading>
  </Flex>
));

StoryContent.displayName = 'StoryContent';
