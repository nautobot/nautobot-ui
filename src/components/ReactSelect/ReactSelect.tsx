import type { ThemingProps } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';
import type { GroupBase, Props } from 'react-select';

import { useReactSelectComponents, useReactSelectStyles } from './hooks';
import { ReactSelectContextProvider } from './ReactSelectContext';

export interface ReactSelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Partial<Props<Option, IsMulti, Group>>,
    ThemingProps<'ReactSelect'> {
  multiValuesCropText?: string;
}

const ReactSelect = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ReactSelectProps<Option, IsMulti, Group>
) => {
  const { multiValuesCropText = '{count} more...', ...rest } = props;

  const components = useReactSelectComponents(props);

  const { styles, stylesChakra } = useReactSelectStyles(props);

  return (
    <ReactSelectContextProvider
      multiValuesCropText={multiValuesCropText}
      styles={stylesChakra}
    >
      <Select
        closeMenuOnSelect={!rest.isMulti}
        components={components}
        hideSelectedOptions={false}
        isSearchable={false}
        styles={styles}
        unstyled
        {...rest}
      />
    </ReactSelectContextProvider>
  );
};

ReactSelect.displayName = 'ReactSelect';

export default ReactSelect;
