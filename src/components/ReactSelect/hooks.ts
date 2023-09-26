import { css, useMultiStyleConfig, useTheme } from '@chakra-ui/react';
import { useMemo } from 'react';
import type { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select';

import type { REACT_SELECT_INNER_COMPONENT_KEYS } from './constants';
import type { ReactSelectProps } from './ReactSelect';
import ReactSelectDropdownIndicator from './ReactSelectDropdownIndicator';
import ReactSelectLoadingIndicator from './ReactSelectLoadingIndicator';
import ReactSelectOption from './ReactSelectOption';
import ReactSelectValueContainer from './ReactSelectValueContainer';

export const useReactSelectComponents = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  components,
}: ReactSelectProps<Option, IsMulti, Group>) =>
  useMemo(
    () => ({
      ClearIndicator: () => null,
      DropdownIndicator: ReactSelectDropdownIndicator,
      IndicatorSeparator: () => null,
      LoadingIndicator: ReactSelectLoadingIndicator,
      MultiValueRemove: () => null,
      Option: ReactSelectOption,
      ValueContainer: ReactSelectValueContainer,
      ...components,
    }),
    [components]
  );

export const useReactSelectStyles = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  colorScheme,
  orientation,
  size,
  styleConfig,
  styles: stylesProp,
  variant,
}: ReactSelectProps<Option, IsMulti, Group>) => {
  const theme = useTheme();

  const stylesChakra = useMultiStyleConfig('ReactSelect', {
    colorScheme,
    orientation,
    size,
    styleConfig,
    variant,
  });

  /*
   * Components in `components` prop are partly defined internally and use
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

  return { styles, stylesChakra };
};
