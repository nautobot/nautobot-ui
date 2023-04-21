import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Alert,
  AlertBody,
  AlertCloseButton,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '../..';
import type { AlertProps } from '../..';

const Story: ComponentMeta<typeof Alert> = {
  argTypes: {
    status: {
      defaultValue: 'info',
      type: {
        name: 'enum',
        required: false,
        value: ['error', 'info', 'loading', 'success', 'warning'],
      },
    },
  },
  component: Alert,
  parameters: { controls: { include: ['status'] } },
  title: 'Components/Alert',
};

export default Story;

const Template: ComponentStory<typeof Alert> = ({
  hasCloseButton,
  ...rest
}: AlertProps & { hasCloseButton?: boolean }) => (
  <Alert {...rest}>
    <AlertIcon />
    <AlertBody hasCloseButton={hasCloseButton}>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Message</AlertDescription>
    </AlertBody>
    {hasCloseButton ? <AlertCloseButton /> : null}
  </Alert>
);

export const Basic = Template.bind({});

export const HasCloseButton = Template.bind({});

HasCloseButton.args = { hasCloseButton: true };
