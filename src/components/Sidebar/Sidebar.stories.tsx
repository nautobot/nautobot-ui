import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  DcimIcon,
  Heading,
  NautobotLogoIcon,
  Sidebar,
  SidebarButton,
} from '../..';

const Story: ComponentMeta<typeof Sidebar> = {
  argTypes: {
    isCollapsible: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  component: Sidebar,
  title: 'Components/Sidebar',
};

export default Story;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Box height="600px">
    <Sidebar {...args}>
      <Heading as="h1" paddingBottom="md" paddingTop="29px" paddingX="md">
        <Button
          aria-label="Nautobot"
          leftIcon={<NautobotLogoIcon />}
          size="xs"
          variant="unstyled"
        />
      </Heading>

      <Heading variant="sidebar">
        <DcimIcon />
        Inventory
      </Heading>

      <Accordion allowMultiple variant="sidebarLevel0">
        {['Devices', 'Circuits', 'Connections'].map((section, index, array) => (
          <AccordionItem key={section}>
            <Heading>
              <AccordionButton isLast={index < array.length - 1}>
                {section}
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              {['Devices', 'Device Types'].map((page) => (
                <SidebarButton key={page} level={1}>
                  {page}
                </SidebarButton>
              ))}
              <Accordion allowMultiple variant="sidebarLevel1">
                <AccordionItem>
                  <Heading>
                    <AccordionButton isLast>
                      Components
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel>
                    {['Interfaces', 'Front Ports'].map(
                      (nestedPage, index, array) => (
                        <SidebarButton
                          key={nestedPage}
                          isLast={index === array.length - 1}
                          level={2}
                        >
                          {nestedPage}
                        </SidebarButton>
                      )
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Sidebar>
  </Box>
);

export const Basic = Template.bind({});

Basic.parameters = { controls: { include: ['isCollapsible'] } };
