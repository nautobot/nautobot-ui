import {
  Box,
  CheckboxIconProps as ChakraCheckboxIconProps,
} from '@chakra-ui/react';
import React from 'react';

import { CheckIcon } from '../../icons';

export interface CheckboxIconProps
  extends Pick<ChakraCheckboxIconProps, 'isChecked' | 'isIndeterminate'> {}

const CheckboxIcon = ({ isChecked, isIndeterminate }: CheckboxIconProps) => (
  <>
    <CheckIcon
      bottom="16.67%"
      height="auto"
      left="16.67%"
      opacity={isChecked ? 1 : 0}
      position="absolute"
      right="16.67%"
      top="16.67%"
      transitionDuration="default"
      transitionProperty="opacity, visibility"
      transitionTimingFunction="default"
      visibility={isChecked ? 'visible' : 'hidden'}
      width="auto"
    />
    <Box
      as="span"
      borderBottomWidth={1}
      borderColor="currentcolor"
      borderStyle="solid"
      display="inline-block"
      left="30%"
      opacity={isIndeterminate ? 1 : 0}
      position="absolute"
      right="30%"
      transitionDuration="default"
      transitionProperty="opacity, visibility"
      transitionTimingFunction="default"
      visibility={isIndeterminate ? 'visible' : 'hidden'}
    />
  </>
);

CheckboxIcon.displayName = 'CheckboxIcon';

export default CheckboxIcon;
