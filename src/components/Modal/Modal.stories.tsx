import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '../..';

const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};

export default Story;

const Template: ComponentStory<typeof Modal> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader primary="Are you sure?" secondary="Confirm" />

          <ModalCloseButton />

          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </ModalBody>

          <ModalFooter>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>

            <Button onClick={onClose}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
