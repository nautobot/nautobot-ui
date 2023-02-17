import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/react';
import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import React from 'react';

export interface IconProps
  extends Omit<HTMLChakraProps<'svg'>, 'orientation'>,
    ThemingProps<'Icon'> {}

const Icon = forwardRef<IconProps, 'svg'>(
  ({ colorScheme, orientation, size, styleConfig, variant, ...rest }, ref) => {
    const styles = useStyleConfig('Icon', {
      colorScheme,
      orientation,
      size,
      styleConfig,
      variant,
    });

    return <chakra.svg ref={ref} __css={styles} {...rest} />;
  }
);

Icon.displayName = 'Icon';

export default Icon;
