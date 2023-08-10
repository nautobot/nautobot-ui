import type { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
} from '../..';

const Story: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
};

export default Story;

const Template: StoryFn<typeof Accordion> = (args) => {
  const [key, setKey] = useState(0);

  /*
   * Remount `Accordion` when any of the `args` changes. This is a workaround
   * for Chakra UI `Accordion` not reacting when some of its props are changed.
   * WARNING: Don't do the same in production, because it degrades UX!
   */
  useEffect(() => {
    setKey((currentKey) => currentKey + 1);
  }, [args.allowMultiple, args.allowToggle]);

  return (
    <Accordion
      key={key}
      {...(args.variant !== 'default' ? { width: 220 } : undefined)}
      {...args}
    >
      <AccordionItem>
        <Heading>
          <AccordionButton isFirst>
            Lorem ipsum
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          molestie nisi eu tincidunt fringilla. Proin pretium commodo nibh, eu
          ultrices tortor luctus quis.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading>
          <AccordionButton>
            Vestibulum facilisis
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          Vestibulum facilisis risus at libero egestas gravida. Quisque nec
          purus condimentum, molestie est ut, tristique nisl. Suspendisse
          lacinia lectus vel ex dignissim, ac molestie sapien interdum.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading>
          <AccordionButton isLast>
            Sed tortor nisl
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          Sed tortor nisl, ultrices et gravida quis, dictum ac arcu. Phasellus
          placerat tortor sit amet nisi efficitur, at suscipit massa tempus. Sed
          condimentum metus sed fringilla congue.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  allowMultiple: { type: { name: 'boolean', required: false } },
  allowToggle: { type: { name: 'boolean', required: false } },
  variant: {
    type: {
      name: 'enum',
      required: false,
      value: ['default', 'sidebarLevel0', 'sidebarLevel1'],
    },
  },
};

Basic.args = {
  allowMultiple: false,
  allowToggle: false,
  variant: 'default',
};

Basic.parameters = {
  controls: { include: ['allowMultiple', 'allowToggle', 'variant'] },
};
