import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';
import React from 'react';

import CheckboxIcon from './CheckboxIcon';

export interface CheckboxProps extends ChakraCheckboxProps {}

const Checkbox = (props: CheckboxProps) => (
  <ChakraCheckbox data-group="" icon={<CheckboxIcon />} {...props} />
);

export default Checkbox;
