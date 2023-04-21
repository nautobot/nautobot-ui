import { AlertIcon as ChakraAlertIcon } from '@chakra-ui/react';
import type { AlertIconProps as ChakraAlertIconProps } from '@chakra-ui/react';
import React, { useContext, useMemo } from 'react';

import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../..';

import AlertContext from './AlertContext';

export interface AlertIconProps extends ChakraAlertIconProps {}

const AlertIcon = ({ children, ...rest }: AlertIconProps) => {
  const { status } = useContext(AlertContext);

  const Icon = useMemo(() => {
    switch (status) {
      case 'error':
        return ErrorIcon;

      case 'info':
        return InfoIcon;

      case 'success':
        return SuccessIcon;

      case 'warning':
        return WarningIcon;

      default:
        return undefined;
    }
  }, [status]);

  return (
    <ChakraAlertIcon {...rest}>
      {children ?? (Icon ? <Icon /> : children)}
    </ChakraAlertIcon>
  );
};

AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
