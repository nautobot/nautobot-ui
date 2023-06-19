import type { Meta, StoryFn } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { Flex, Switch } from '../..';
import type { SwitchProps } from '../..';

const Story: Meta<typeof Switch> = {
  argTypes: {
    isDisabled: { type: { name: 'boolean', required: false } },
    size: { type: { name: 'enum', required: false, value: ['sm', 'md'] } },
  },
  args: {
    isDisabled: false,
    size: 'md',
  },
  component: Switch,
  title: 'Components/Switch',
};

export default Story;

const Template: StoryFn<typeof Switch> = ({
  isChecked,
  ...restArgs
}: SwitchProps) => {
  const [isCheckedState, setIsCheckedState] = useState(false);

  const onChange = useCallback(() => {
    setIsCheckedState((currentIsCheckedState) => !currentIsCheckedState);
  }, [setIsCheckedState]);

  return (
    <Flex background="white-0" padding="md">
      <Switch
        isChecked={isChecked !== undefined ? isChecked : isCheckedState}
        onChange={onChange}
        {...restArgs}
      />
    </Flex>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {};

Basic.args = {};

Basic.parameters = { controls: { include: ['isDisabled', 'size'] } };

export const Controlled = Template.bind({});

Controlled.argTypes = {
  isChecked: { type: { name: 'boolean', required: false } },
};

Controlled.args = {
  isChecked: false,
};

Controlled.parameters = {
  controls: { include: ['isChecked', 'isDisabled', 'size'] },
};
