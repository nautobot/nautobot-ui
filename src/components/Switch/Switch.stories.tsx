import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { Flex, Switch } from '../..';
import type { SwitchProps } from '../..';

const Story: ComponentMeta<typeof Switch> = {
  argTypes: {
    isDisabled: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    size: {
      defaultValue: 'md',
      type: { name: 'enum', required: false, value: ['sm', 'md'] },
    },
  },
  component: Switch,
  title: 'Components/Switch',
};

export default Story;

const Template: ComponentStory<typeof Switch> = ({
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

Basic.parameters = { controls: { include: ['isDisabled', 'size'] } };

export const Controlled = Template.bind({});

Controlled.argTypes = {
  isChecked: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
};

Controlled.parameters = {
  controls: { include: ['isChecked', 'isDisabled', 'size'] },
};
