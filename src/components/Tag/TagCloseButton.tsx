import { TagCloseButton as ChakraTagCloseButton } from '@chakra-ui/react';
import type { TagCloseButtonProps as ChakraTagCloseButtonProps } from '@chakra-ui/react';
import React from 'react';

import { CloseIcon } from '../../icons';

export interface TagCloseButtonProps extends ChakraTagCloseButtonProps {}

const TagCloseButton = (props: TagCloseButtonProps) => (
  <ChakraTagCloseButton {...props}>
    <CloseIcon size="2xs" />
  </ChakraTagCloseButton>
);

export default TagCloseButton;
