import { AlertTitle, useToast as chakraUseToast } from '@chakra-ui/react';
import type { UseToastOptions as ChakraUseToastOptions } from '@chakra-ui/react';
import React from 'react';

import {
  Alert,
  AlertBody,
  AlertCloseButton,
  AlertDescription,
  AlertIcon,
} from '../..';

export interface UseToastOptions extends ChakraUseToastOptions {}

const useToast = ({
  containerStyle,
  description,
  icon,
  isClosable = true,
  position = 'top-right',
  status = 'info',
  title,
  ...rest
}: UseToastOptions) =>
  chakraUseToast({
    containerStyle: {
      marginBottom: 0,
      marginTop: 'sm',
      marginX: 'sm',
      width: 300,
      ...containerStyle,
    },
    description,
    isClosable,
    position,
    render: ({ onClose }) => (
      <Alert status={status}>
        <AlertIcon>{icon}</AlertIcon>
        <AlertBody hasCloseButton={isClosable}>
          {title ? <AlertTitle>{title}</AlertTitle> : null}
          {description ? (
            <AlertDescription>{description}</AlertDescription>
          ) : null}
        </AlertBody>
        {isClosable ? <AlertCloseButton onClick={onClose} /> : null}
      </Alert>
    ),
    status,
    title,
    ...rest,
  });

export default useToast;
