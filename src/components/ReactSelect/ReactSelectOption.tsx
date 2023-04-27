import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import type { GroupBase, OptionProps } from 'react-select';

import { Box, Checkbox } from '../..';

import ReactSelectContext from './ReactSelectContext';

type StylesOption = SystemProps & { _disabled: SystemProps };

export interface ReactSelectOptionProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends OptionProps<Option, IsMulti, Group> {}

const ReactSelectOption = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  innerProps,
  innerRef,
  isDisabled,
  isMulti,
  isSelected,
}: ReactSelectOptionProps<Option, IsMulti, Group>) => {
  const {
    styles: { option },
  } = useContext(ReactSelectContext);

  const { _disabled, ...styles } = option as StylesOption;

  return (
    <Box
      ref={innerRef}
      {...styles}
      {...(isDisabled ? _disabled : undefined)}
      {...innerProps}
    >
      {isMulti ? (
        <Checkbox
          cursor="default"
          isChecked={isSelected}
          isDisabled={isDisabled}
          pointerEvents="none"
          tabIndex={-1}
        >
          {children}
        </Checkbox>
      ) : (
        children
      )}
    </Box>
  );
};

ReactSelectOption.displayName = 'ReactSelectOption';

export default ReactSelectOption;
