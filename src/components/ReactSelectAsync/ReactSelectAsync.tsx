import React from 'react';
import type { GroupBase } from 'react-select';
import Async from 'react-select/async';
import type { AsyncProps } from 'react-select/async';

import {
  useReactSelectComponents,
  useReactSelectStyles,
} from '../ReactSelect/hooks';
import type { ReactSelectProps } from '../ReactSelect/ReactSelect';
import { ReactSelectContextProvider } from '../ReactSelect/ReactSelectContext';

export interface ReactSelectAsyncProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends AsyncProps<Option, IsMulti, Group>,
    Pick<ReactSelectProps, 'multiValuesCropText'> {}

const ReactSelectAsync = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ReactSelectAsyncProps<Option, IsMulti, Group>
) => {
  const { multiValuesCropText = '{count} more...', ...rest } = props;

  const components = useReactSelectComponents(props);

  const { styles, stylesChakra } = useReactSelectStyles(props);

  return (
    <ReactSelectContextProvider
      multiValuesCropText={multiValuesCropText}
      styles={stylesChakra}
    >
      <Async
        cacheOptions
        closeMenuOnSelect={!rest.isMulti}
        components={components}
        hideSelectedOptions={false}
        isSearchable
        styles={styles}
        unstyled
        {...rest}
      />
    </ReactSelectContextProvider>
  );
};

ReactSelectAsync.displayName = 'ReactSelectAsync';

export default ReactSelectAsync;
