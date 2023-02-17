import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '../..';

const Story: ComponentMeta<typeof Popover> = {
  component: Popover,
  title: 'Popover',
};

export default Story;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>
      <Button>Open</Button>
    </PopoverTrigger>

    <PopoverContent>
      <PopoverArrow />

      <PopoverBody>
        <Button size="sm" variant="listSecondary">
          Back
        </Button>

        <Button size="sm" variant="list">
          Action
        </Button>

        <Divider />

        <Button size="sm" variant="listCritical">
          Delete
        </Button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    defaultValue: 'docked',
    type: {
      name: 'enum',
      required: false,
      value: ['docked', 'docked+1', 'docked+2'],
    },
  },
};
