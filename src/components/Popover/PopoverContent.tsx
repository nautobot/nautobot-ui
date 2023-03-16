import {
  chakra,
  forwardRef,
  PopoverContent as ChakraPopoverContent,
} from '@chakra-ui/react';
import type { PopoverContentProps as ChakraPopoverContentProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionDiv = chakra(motion.div);

export interface PopoverContentProps extends ChakraPopoverContentProps {}

const PopoverContent = forwardRef<PopoverContentProps, 'section'>(
  (props, ref) => (
    <ChakraPopoverContent
      ref={ref}
      as={MotionDiv}
      /*
       * It's impossible to overwrite `PopoverArrow` `z-index` style neither with
       * theme nor element style, so need to use a hacky workaround like this.
       */
      sx={{ '>': { _first: { zIndex: 'auto!important' } } }}
      {...props}
    />
  )
);

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
