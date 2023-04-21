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
    render: ({ onClose, ...props }) => (
      <Alert status={props?.status ?? status}>
        <AlertIcon>{props?.icon ?? icon}</AlertIcon>

        <AlertBody hasCloseButton={props?.isClosable ?? isClosable}>
          {props?.title ?? title ? (
            <AlertTitle>{props?.title ?? title}</AlertTitle>
          ) : null}

          {props?.description ?? description ? (
            <AlertDescription>
              {props?.description ?? description}
            </AlertDescription>
          ) : null}
        </AlertBody>

        {props?.isClosable ?? isClosable ? (
          <AlertCloseButton onClick={onClose} />
        ) : null}
      </Alert>
    ),
    status,
    title,
    ...rest,
  });

export default useToast;
