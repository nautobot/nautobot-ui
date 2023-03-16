import {
  forwardRef,
  TagCloseButton as ChakraTagCloseButton,
} from '@chakra-ui/react';
import type { TagCloseButtonProps as ChakraTagCloseButtonProps } from '@chakra-ui/react';
import React from 'react';

import { CloseIcon } from '../../icons';

export interface TagCloseButtonProps extends ChakraTagCloseButtonProps {}

const TagCloseButton = forwardRef<TagCloseButtonProps, 'button'>(
  (props, ref) => (
    <ChakraTagCloseButton ref={ref} {...props}>
      <CloseIcon size="2xs" />
    </ChakraTagCloseButton>
  )
);

TagCloseButton.displayName = 'TagCloseButton';

export default TagCloseButton;
