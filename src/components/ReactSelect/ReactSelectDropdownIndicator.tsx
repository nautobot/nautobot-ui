import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import type { DropdownIndicatorProps, GroupBase } from 'react-select';

import { ArrowDownIcon } from '../../icons';

import ReactSelectContext from './ReactSelectContext';

type StylesDropdownIndicator = Omit<SystemProps, '_focus'> & {
  _focus: SystemProps;
  _open: SystemProps;
};

export interface ReactSelectDropdownIndicatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends DropdownIndicatorProps<Option, IsMulti, Group> {}

const ReactSelectDropdownIndicator = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  innerProps,
  isFocused,
  selectProps: { isLoading, menuIsOpen },
}: ReactSelectDropdownIndicatorProps<Option, IsMulti, Group>) => {
  const {
    styles: { dropdownIndicator },
  } = useContext(ReactSelectContext);

  const { _focus, _open, ...styles } =
    dropdownIndicator as StylesDropdownIndicator;

  return (
    <ArrowDownIcon
      {...styles}
      {...(isFocused ? _focus : undefined)}
      {...(menuIsOpen ? _open : undefined)}
      {...(isLoading ? { display: 'none' } : undefined)}
      {...(innerProps as Record<string, unknown>)}
    />
  );
};

ReactSelectDropdownIndicator.displayName = 'ReactSelectDropdownIndicator';

export default ReactSelectDropdownIndicator;
