import type { Meta, StoryFn } from '@storybook/react';
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

const Story: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Popover',
};

export default Story;

const Template: StoryFn<typeof Popover> = (args) => (
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
    type: {
      name: 'enum',
      required: false,
      value: ['docked', 'docked+1', 'docked+2'],
    },
  },
};

Basic.args = {
  variant: 'docked',
};
