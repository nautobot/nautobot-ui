import type { AlertStatus } from '@chakra-ui/react';
import React, { createContext, useMemo } from 'react';
import type { ReactNode } from 'react';

export interface AlertContextValue {
  status?: AlertStatus;
}

const AlertContext = createContext<AlertContextValue>({});

AlertContext.displayName = 'AlertContext';

export const { Consumer: AlertContextConsumer } = AlertContext;

export interface AlertContextProviderProps extends AlertContextValue {
  children: ReactNode;
}

export const AlertContextProvider = ({
  children,
  status,
}: AlertContextProviderProps) => {
  const value = useMemo(() => ({ status }), [status]);

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

AlertContextProvider.displayName = 'AlertContextProvider';

export default AlertContext;
