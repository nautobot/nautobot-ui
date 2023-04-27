import { Spinner } from '@chakra-ui/react';
import type { SpinnerProps, SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import type { GroupBase, LoadingIndicatorProps } from 'react-select';

import ReactSelectContext from './ReactSelectContext';

type Styles = Omit<SystemProps, '_disabled' | '_focus' | 'color'> &
  Pick<SpinnerProps, 'color'> & {
    _focus: Omit<SystemProps, 'color'> & Pick<SpinnerProps, 'color'>;
    _open: Omit<SystemProps, 'color'> & Pick<SpinnerProps, 'color'>;
  };

export interface ReactSelectLoadingIndicatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends LoadingIndicatorProps<Option, IsMulti, Group> {}

const ReactSelectLoadingIndicator = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isFocused,
  innerProps,
  selectProps: { menuIsOpen },
}: ReactSelectLoadingIndicatorProps<Option, IsMulti, Group>) => {
  const {
    styles: { loadingIndicator },
  } = useContext(ReactSelectContext);

  const { _focus, _open, ...styles } = loadingIndicator as Styles;

  return (
    <Spinner
      {...styles}
      {...(isFocused ? _focus : undefined)}
      {...(menuIsOpen ? _open : undefined)}
      {...innerProps}
    />
  );
};

ReactSelectLoadingIndicator.displayName = 'ReactSelectLoadingIndicator';

export default ReactSelectLoadingIndicator;
