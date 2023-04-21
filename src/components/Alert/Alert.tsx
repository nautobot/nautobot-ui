import { Alert as ChakraAlert, forwardRef } from '@chakra-ui/react';
import type { AlertProps as ChakraAlertProps } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { AlertContextProvider } from './AlertContext';

export interface AlertProps extends ChakraAlertProps {}

const Alert = forwardRef<AlertProps, 'div'>(
  ({ status = 'info', ...rest }, ref) => {
    const color = useMemo(() => {
      switch (status) {
        case 'error':
          return 'red-1';

        case 'info':
          return 'blue-1';

        case 'loading':
          return 'gray-2';

        case 'success':
          return 'green-1';

        case 'warning':
          return 'orange-0';
      }
    }, [status]);

    return (
      <AlertContextProvider status={status}>
        <ChakraAlert ref={ref} color={color} status={status} {...rest} />
      </AlertContextProvider>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
