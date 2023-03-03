import { calc, cssVar, InputGroup as ChakraInputGroup } from '@chakra-ui/react';
import type { InputGroupProps as ChakraInputGroupProps } from '@chakra-ui/react';
import React from 'react';

export interface InputGroupProps extends ChakraInputGroupProps {
  /**
   * Disconnect elements in a way that they don't inherit `disabled`, `focus`
   * and `hover` styles.
   */
  disconnectElements?: boolean;
}

const $chakraSizes24 = cssVar('chakra-sizes-24');
const $chakraSpaceSm = cssVar('chakra-space-sm');
const $chakraSpaceXs = cssVar('chakra-space-xs');

const InputGroup = ({ disconnectElements, ...rest }: InputGroupProps) => {
  const inputPaddingWithElement = calc.add(
    $chakraSpaceSm.reference,
    $chakraSizes24.reference,
    $chakraSpaceXs.reference
  );

  return (
    <ChakraInputGroup
      flex="none"
      {...(disconnectElements
        ? undefined
        : {
            sx: {
              'input:not(:first-child)': {
                paddingLeft: inputPaddingWithElement,
              },
              'input:not(:last-child)': {
                paddingRight: inputPaddingWithElement,
              },
              '&:has(input:disabled) >': {
                ':first-child, :last-child': {
                  '&:not(input)': { color: 'gray-2', pointerEvents: 'none' },
                },
              },
              '&:hover >, &:has(input:focus) >': {
                ':first-child, :last-child': {
                  '&:not(input)': { color: 'blue-1', pointerEvents: 'none' },
                },
              },
            },
          })}
      {...rest}
    />
  );
};

export default InputGroup;
