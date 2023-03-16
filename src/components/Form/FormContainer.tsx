import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/react';
import type { ChakraProps, ThemingProps } from '@chakra-ui/react';
import React from 'react';
import type { DetailedHTMLProps, FormHTMLAttributes } from 'react';

type HTMLFormElementProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export interface FormContainerProps
  extends Omit<HTMLFormElementProps, 'color'>,
    ChakraProps,
    ThemingProps<'FormContainer'> {}

const FormContainer = forwardRef<FormContainerProps, 'form'>(
  ({ colorScheme, orientation, size, styleConfig, variant, ...rest }, ref) => {
    const style = useStyleConfig('FormContainer', {
      colorScheme,
      orientation,
      size,
      styleConfig,
      variant,
    });

    return <chakra.form ref={ref} __css={style} as="div" {...rest} />;
  }
);

FormContainer.displayName = 'FormContainer';

export default FormContainer;
