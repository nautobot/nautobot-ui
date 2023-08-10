import type { Meta, StoryFn } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import type { ChangeEvent, ReactElement } from 'react';

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '../..';
import type { InputProps } from '../..';
import * as icons from '../../icons';

const Story: Meta<typeof Input> = {
  args: {
    isDisabled: false,
    isInvalid: false,
    placeholder: 'Write here...',
  },
  argTypes: {
    isDisabled: { type: { name: 'boolean', required: false } },
    isInvalid: { type: { name: 'boolean', required: false } },
  },
  component: Input,
  title: 'Components/Input',
};

export default Story;

interface Props extends InputProps {
  leftElement?: '' | keyof typeof icons;
  rightElement?: '' | keyof typeof icons;
}

const Template: StoryFn<(props: Props) => ReactElement> = ({
  leftElement,
  rightElement,
  value,
  ...restArgs
}: Props) => {
  const [valueState, setValueState] = useState('');

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValueState(event.currentTarget.value);
    },
    [setValueState]
  );

  const LeftElement =
    leftElement && icons[leftElement as unknown as keyof typeof icons];
  const RightElement =
    rightElement && icons[rightElement as unknown as keyof typeof icons];

  return (
    <Box width="200px">
      {LeftElement !== undefined || RightElement !== undefined ? (
        <InputGroup>
          {LeftElement ? (
            <InputLeftElement>
              <LeftElement />
            </InputLeftElement>
          ) : null}
          <Input
            value={value !== undefined ? value : valueState}
            onChange={onChange}
            {...restArgs}
          />
          {RightElement ? (
            <InputRightElement>
              <RightElement />
            </InputRightElement>
          ) : null}
        </InputGroup>
      ) : (
        <Input
          value={value !== undefined ? value : valueState}
          onChange={onChange}
          {...restArgs}
        />
      )}
    </Box>
  );
};

export const Basic = Template.bind({});

export const Controlled = Template.bind({});

Controlled.args = { value: '' };

export const WithElements = Template.bind({});

WithElements.argTypes = {
  leftElement: {
    type: { name: 'enum', required: false, value: Object.keys(icons) },
  },
  rightElement: {
    type: { name: 'enum', required: false, value: Object.keys(icons) },
  },
};

WithElements.args = {
  leftElement: Object.keys(icons).find(
    (icon) => icon === 'SearchIcon'
  ) as keyof typeof icons,
  rightElement: '',
};
