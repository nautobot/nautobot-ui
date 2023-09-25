import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import {
  ArrowRightIcon,
  BinIcon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '../..';

const Story: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Tabs',
};

export default Story;

const Template: StoryFn<typeof Tabs> = (args) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      index={tabIndex}
      onChange={(index) => (index < 3 ? setTabIndex(index) : undefined)}
      {...args}
    >
      <TabList>
        <Tab>Device</Tab>

        <Tab>Notes</Tab>

        <Tab>Change Log</Tab>

        <Tab isDisabled>This tab is disabled</Tab>

        <Tab _active={{}} _hover={{}} color="red-1">
          Delete
          <BinIcon size="sm" />
        </Tab>

        <Tab _active={{}} _hover={{}} color="black-0">
          Help
          <ArrowRightIcon size="sm" />
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          accumsan turpis. Aliquam ac libero felis.
        </TabPanel>

        <TabPanel>
          Donec enim urna, efficitur sed dolor eget, interdum varius mauris. Sed
          sed luctus mauris, at consectetur lorem.
        </TabPanel>

        <TabPanel>
          Praesent quis metus ac ex aliquam placerat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    type: { name: 'enum', required: false, value: ['default', 'outline'] },
  },
};

Basic.args = {
  variant: 'default',
};
