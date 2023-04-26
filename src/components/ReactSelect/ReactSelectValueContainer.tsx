import type { SystemProps } from '@chakra-ui/react';
import React, {
  Children,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode, RefObject } from 'react';
import type { GroupBase, ValueContainerProps } from 'react-select';

import { Box, Flex, Tooltip } from '../..';

import ReactSelectContext from './ReactSelectContext';

export interface ReactSelectValueContainerProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends ValueContainerProps<Option, IsMulti, Group> {}

const ReactSelectValueContainer = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  hasValue,
  innerProps,
  isDisabled,
  isMulti,
  selectProps: { controlShouldRenderValue },
}: ReactSelectValueContainerProps<Option, IsMulti, Group>) => {
  const {
    multiValuesCropText,
    styles: { multiValue, valueContainer },
  } = useContext(ReactSelectContext);

  const innerBoxRef = useRef<HTMLDivElement>(null);

  const isMultiValueChild = useCallback(
    (child: ReactNode) =>
      (child as { type?: { name?: string } })?.type?.name === 'MultiValue',
    []
  );

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  const multiValues = useMemo(
    () => childrenArray.filter((child) => isMultiValueChild(child)),
    [childrenArray, isMultiValueChild]
  );

  const restChildren = useMemo(
    () => childrenArray.filter((child) => !isMultiValueChild(child)),
    [childrenArray, isMultiValueChild]
  );

  const [multiValuesCrop, setMultiValuesCrop] = useState<ReactNode[]>([]);

  const [multiValuesShow, setMultiValuesShow] = useState<ReactNode[]>(
    childrenArray.filter((child) => isMultiValueChild(child))
  );

  useEffect(() => {
    const innerBox = (innerBoxRef as RefObject<HTMLDivElement>)?.current;

    if (innerBox) {
      const { x: innerBoxLeft, width: innerBoxWidth } =
        innerBox.getBoundingClientRect();
      const innerBoxRight = innerBoxLeft + innerBoxWidth;

      const firstOverflowingMultiValueIndex = multiValues.reduce<number>(
        (firstOverflowingMultiValueIndex, _, index) => {
          const { x, width } = innerBox.children[index].getBoundingClientRect();
          const isOverflowing = x + width > innerBoxRight;

          return firstOverflowingMultiValueIndex < 0 && isOverflowing
            ? index
            : firstOverflowingMultiValueIndex;
        },
        -1
      );

      /*
       * Slice one index less than the count of overflowing multi values to
       * make required space for `'{count} more...'` tooltip container.
       */
      const sliceIndex = Math.max(0, firstOverflowingMultiValueIndex - 1);
      const shouldCrop = firstOverflowingMultiValueIndex >= 0;

      setMultiValuesCrop(shouldCrop ? multiValues.slice(sliceIndex) : []);
      setMultiValuesShow(
        shouldCrop ? multiValues.slice(0, sliceIndex) : multiValues
      );
    }
  }, [multiValues, setMultiValuesCrop, setMultiValuesShow]);

  return (
    <Box
      display={
        isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid'
      }
      {...(valueContainer as SystemProps)}
      {...innerProps}
    >
      {/*
       * The `Flex` component below is serving only multi value overflow
       * computation purposes. That's why it's completely hidden and always
       * renders all the `multiValues` despite them overflowing or not.
       */}
      <Flex
        {...(valueContainer as SystemProps)}
        ref={innerBoxRef}
        height="full"
        opacity={0}
        position="absolute"
        visibility="hidden"
        width="full"
      >
        {multiValues}
      </Flex>

      {multiValues.length > 0 ? (
        <>
          {multiValuesShow}
          {multiValuesCrop.length > 0 ? (
            <Tooltip label={<Flex gap="xs">{multiValuesCrop}</Flex>}>
              <Box
                {...(multiValue as SystemProps)}
                {...(isDisabled
                  ? ((multiValue as SystemProps)._disabled as SystemProps)
                  : undefined)}
                background="none"
                boxShadow="0 0 0 1px currentcolor inset"
                color="blue-1"
              >
                {multiValuesCropText?.replace(
                  /\{count}/g,
                  String(multiValuesCrop.length)
                )}
              </Box>
            </Tooltip>
          ) : null}
        </>
      ) : null}

      {restChildren}
    </Box>
  );
};

ReactSelectValueContainer.displayName = 'ReactSelectValueContainer';

export default ReactSelectValueContainer;
