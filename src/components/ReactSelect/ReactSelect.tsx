import { css, useMultiStyleConfig, useTheme } from '@chakra-ui/react';
import type { ThemingProps } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Select from 'react-select';
import type {
  CSSObjectWithLabel,
  GroupBase,
  Props,
  StylesConfig,
} from 'react-select';

import { REACT_SELECT_INNER_COMPONENT_KEYS } from './constants';
import { ReactSelectContextProvider } from './ReactSelectContext';
import ReactSelectDropdownIndicator from './ReactSelectDropdownIndicator';
import ReactSelectOption from './ReactSelectOption';
import ReactSelectValueContainer from './ReactSelectValueContainer';

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
>({
  colorScheme,
  components: componentsProp,
  multiValuesCropText = '{count} more...',
  orientation,
  size,
  styleConfig,
  styles: stylesProp,
  variant,
  ...rest
}: ReactSelectProps<Option, IsMulti, Group>) => {
  const theme = useTheme();

  const stylesChakra = useMultiStyleConfig('ReactSelect', {
    colorScheme,
    orientation,
    size,
    styleConfig,
    variant,
  });

  const components = useMemo(
    () => ({
      ClearIndicator: () => null,
      DropdownIndicator: ReactSelectDropdownIndicator,
      IndicatorSeparator: () => null,
      MultiValueRemove: () => null,
      Option: ReactSelectOption,
      ValueContainer: ReactSelectValueContainer,
      ...componentsProp,
    }),
    [componentsProp]
  );

  /*
   * Components listed above in `components` are defined internally and use
   * Chakra UI, hence they are fine to use pure `styles` coming from Chakra
   * config. However, there also remain not overridden internal `react-select`
   * components, which don't accept Chakra style dialect and for them styles
   * need to be converted to `styles` object with structure expected by
   * `react-select`, somewhat closer to a standard CSS-in-JS notation.
   */
  const styles = useMemo(
    () =>
      (
        Object.entries(css(stylesChakra)(theme)) as [
          (typeof REACT_SELECT_INNER_COMPONENT_KEYS)[number],
          /*
           * `any` in this type is actually coming from Chakra UI. Not trying to
           * be smarter than the authors, leave the type as they left it.
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Record<string, any>
        ][]
      ).reduce<StylesConfig<Option, IsMulti, Group>>(
        (styles, [key, innerComponentStyles]) => ({
          ...styles,
          /*
           * Type `props` as `any` here, because they are injected by the
           * library anyway, and it's quite difficult to get them right in the
           * client code.
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key]: (baseStyle: CSSObjectWithLabel, props: any) => ({
            ...baseStyle,
            ...innerComponentStyles,
            ...(props?.isDisabled
              ? innerComponentStyles?.[
                  Object.keys(innerComponentStyles).find((key) =>
                    key.includes('&:disabled')
                  ) ?? ''
                ]
              : undefined),
            ...(props?.isFocused
              ? innerComponentStyles?.[
                  Object.keys(innerComponentStyles).find((key) =>
                    key.includes('&:focus')
                  ) ?? ''
                ]
              : undefined),
            ...stylesProp?.[key]?.(baseStyle, props),
          }),
        }),
        {}
      ),
    [stylesChakra, stylesProp, theme]
  );

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
