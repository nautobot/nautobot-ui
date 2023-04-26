import type { SystemStyleObject } from '@chakra-ui/react';
import React, { createContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import { REACT_SELECT_INNER_COMPONENT_KEYS } from './constants';

export interface ReactSelectContextValue {
  multiValuesCropText: string;
  styles: Partial<
    Record<
      (typeof REACT_SELECT_INNER_COMPONENT_KEYS)[number],
      SystemStyleObject
    >
  >;
}

const ReactSelectContext = createContext<ReactSelectContextValue>({
  multiValuesCropText: '',
  styles: {},
});

ReactSelectContext.displayName = 'ReactSelectContext';

export const { Consumer: ReactSelectContextConsumer } = ReactSelectContext;

export interface ReactSelectContextProviderProps
  extends ReactSelectContextValue {
  children: ReactNode;
}

export const ReactSelectContextProvider = ({
  children,
  multiValuesCropText,
  styles,
}: ReactSelectContextProviderProps) => {
  const value = useMemo(
    () => ({ multiValuesCropText, styles }),
    [multiValuesCropText, styles]
  );

  return (
    <ReactSelectContext.Provider value={value}>
      {children}
    </ReactSelectContext.Provider>
  );
};

ReactSelectContextProvider.displayName = 'ReactSelectContextProvider';

export default ReactSelectContext;
