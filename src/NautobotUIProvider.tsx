import { ChakraBaseProvider } from '@chakra-ui/react';
import type { ChakraProviderProps } from '@chakra-ui/react';
import merge from 'lodash.merge';
import React, { useMemo } from 'react';

import theme from './theme';

export interface NautobotUIProviderProps extends ChakraProviderProps {}

const NautobotUIProvider = ({
  theme: themeProp,
  ...rest
}: NautobotUIProviderProps) => {
  const themeMerged = useMemo(() => merge({}, theme, themeProp), [themeProp]);
  return <ChakraBaseProvider theme={themeMerged} {...rest} />;
};

NautobotUIProvider.displayName = 'NautobotUIProvider';

export default NautobotUIProvider;
