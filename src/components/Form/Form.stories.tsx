import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import {
  FormContainer,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '../..';

const Story: Meta<typeof FormContainer> = {
  component: FormContainer,
  parameters: { controls: { include: [] } },
  title: 'Components/Form',
};

export default Story;

const Template: StoryFn<typeof FormContainer> = (args) => (
  <FormContainer padding="md" width={532} {...args}>
    <FormControl isRequired>
      <FormLabel>Manufacturer</FormLabel>
      <Select
        options={[
          { label: 'Arista', value: 'arista' },
          { label: 'Cisco', value: 'cisco' },
          { label: 'Meraki', value: 'meraki' },
        ]}
      />
    </FormControl>

    <FormControl isRequired>
      <FormLabel>Model</FormLabel>
      <Input />
    </FormControl>

    <FormControl isInvalid isRequired>
      <FormLabel>Slug</FormLabel>
      <Input />
      <FormErrorMessage>Slug is required</FormErrorMessage>
    </FormControl>

    <FormControl isDisabled>
      <FormLabel>Part number</FormLabel>
      <Input />
      <FormHelperText>Part number is temporarily disabled.</FormHelperText>
    </FormControl>
  </FormContainer>
);

export const Basic = Template.bind({});
