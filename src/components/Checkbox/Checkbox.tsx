import { Checkbox as ChakraCheckbox, forwardRef } from '@chakra-ui/react';
import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';
import React from 'react';

import CheckboxIcon from './CheckboxIcon';

export interface CheckboxProps extends ChakraCheckboxProps {}

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => (
  <ChakraCheckbox ref={ref} data-group="" icon={<CheckboxIcon />} {...props} />
));

export default Checkbox;
