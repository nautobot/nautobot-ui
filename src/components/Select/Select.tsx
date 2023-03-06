import { chakra, forwardRef, Select as ChakraSelect } from '@chakra-ui/react';
import type { SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import React from 'react';

import { ArrowDownIcon } from '../../icons';

export interface SelectOption {
  value: string;
  label?: string;
}

export interface SelectProps extends ChakraSelectProps {
  options?: SelectOption[];
}

const Select = forwardRef<SelectProps, 'select'>(
  ({ children, options, placeholder, sx, ...rest }, ref) => (
    <ChakraSelect
      ref={ref}
      icon={<ArrowDownIcon />}
      iconSize="24"
      sx={{
        '&:active:focus + div > svg': { transform: 'rotate(-180deg)' },
        '&:disabled + div': { color: 'gray-2' },
        '&:focus, &:hover': { '+ div': { color: 'blue-1' } },
        ...sx,
      }}
      {...rest}
    >
      {
        /*
         * This `placeholder` is better than Chakra's, because it has `hidden`
         * attribute, which makes it unselectable after the first selection.
         */
        placeholder ? (
          <option hidden value="">
            {placeholder}
          </option>
        ) : null
      }
      {children ??
        options?.map(({ label, value }) => (
          <chakra.option key={value} value={value}>
            {label ?? value}
          </chakra.option>
        ))}
    </ChakraSelect>
  )
);

export default Select;
