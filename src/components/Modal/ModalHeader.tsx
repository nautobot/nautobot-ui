import { Heading, ModalHeader as ChakraModalHeader } from '@chakra-ui/react';
import type { ModalHeaderProps as ChakraModalHeaderProps } from '@chakra-ui/react';
import React from 'react';
import type { ReactNode } from 'react';

export interface ModalHeaderProps extends ChakraModalHeaderProps {
  primary?: ReactNode;
  secondary?: ReactNode;
}

const ModalHeader = ({
  children,
  primary,
  secondary,
  ...rest
}: ModalHeaderProps) => (
  <ChakraModalHeader padding={0} {...rest}>
    {children ? (
      children
    ) : (
      <>
        {secondary ? (
          <Heading
            as="h3"
            color="gray-3"
            paddingLeft="md"
            paddingRight="2xl"
            paddingTop="md"
            size="H3"
          >
            {secondary}
          </Heading>
        ) : null}

        {primary ? (
          <Heading as="h1" paddingTop="xs" paddingX="md" size="H1">
            {primary}
          </Heading>
        ) : null}
      </>
    )}
  </ChakraModalHeader>
);

export default ModalHeader;
