import { cssVar, defineStyleConfig } from '@chakra-ui/react';

const $popperArrowBg = cssVar('popper-arrow-bg');
const $popperArrowSize = cssVar('popper-arrow-size');
const $tooltipBg = cssVar('tooltip-bg');
const $tooltipFg = cssVar('tooltip-fg');

export default defineStyleConfig({
  baseStyle: {
    [$tooltipBg.variable]: 'colors.black-0',
    [$tooltipFg.variable]: 'colors.white-0',
    [$popperArrowBg.variable]: $tooltipBg.reference,
    [$popperArrowSize.variable]: 'sizes.6',
    background: $tooltipBg.reference,
    borderRadius: 'sm',
    boxShadow: 'tooltip',
    color: $tooltipFg.reference,
    padding: 'sm',
    textStyle: 'P1',
    zIndex: 'tooltip',
  },
});
