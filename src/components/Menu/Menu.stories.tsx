import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import {
  ArrowDownIcon,
  BinIcon,
  Button,
  EditIcon,
  FavoriteFilledIcon,
  FavoriteIcon,
  HistoryIcon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  PlayIcon,
  SearchIcon,
} from '../..';

const Story: Meta<typeof Menu> = {
  component: Menu,
  title: 'Components/Menu',
};

export default Story;

const Template: StoryFn<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuButton as={Button} rightIcon={<ArrowDownIcon />}>
      Actions
    </MenuButton>

    <MenuList>
      <MenuGroup title="Group 1">
        <MenuItem icon={<PlayIcon />}>Run/Schedule</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuItem icon={<SearchIcon />}>Show details</MenuItem>
        <MenuItem icon={<HistoryIcon />}>Change log</MenuItem>
      </MenuGroup>

      <MenuOptionGroup type="checkbox">
        <MenuItemOption
          icon={<FavoriteIcon />}
          iconChecked={<FavoriteFilledIcon />}
          value="isFavorite"
        >
          Make favorite
        </MenuItemOption>
        <MenuItemOption value="jobEnabled">Job enabled</MenuItemOption>
      </MenuOptionGroup>

      <MenuDivider />

      <MenuGroup title="Group 2">
        <MenuItem color="red-1" icon={<BinIcon color="red-1" />}>
          Delete
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  closeOnBlur: { type: { name: 'boolean', required: false } },
  closeOnSelect: { type: { name: 'boolean', required: false } },
};

Basic.args = {
  closeOnBlur: true,
  closeOnSelect: true,
};
