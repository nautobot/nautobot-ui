import { Flex, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import type { FlexProps, SystemProps, ThemingProps } from '@chakra-ui/react';
import React, { Children, cloneElement, Fragment } from 'react';
import type { ReactElement } from 'react';

import type Breadcrumb from './Breadcrumb';
import type { BreadcrumbProps } from './Breadcrumb';
import BreadcrumbsDivider from './BreadcrumbsDivider';

type ReactElementBreadcrumb = ReactElement<BreadcrumbProps, typeof Breadcrumb>;

export interface BreadcrumbsProps
  extends Omit<FlexProps, 'children'>,
    ThemingProps<'Breadcrumbs'> {
  children: ReactElementBreadcrumb | ReactElementBreadcrumb[];
}

const Breadcrumbs = forwardRef<BreadcrumbsProps, 'div'>(
  (
    { children, colorScheme, orientation, size, styleConfig, variant, ...rest },
    ref
  ) => {
    const { breadcrumb, container, divider } = useMultiStyleConfig(
      'Breadcrumbs',
      {
        colorScheme,
        orientation,
        size,
        styleConfig,
        variant,
      }
    );

    return (
      <Flex ref={ref} __css={container} {...rest}>
        {children
          ? Children.map(children, (child, index) => {
              const isLast = index === Children.count(children) - 1;

              return (
                <Fragment key={child.key ?? index}>
                  {cloneElement(child, {
                    _styles: {
                      ...(breadcrumb as SystemProps),
                      ...(isLast
                        ? {
                            color: 'blue-1',
                            _disabled: {
                              ...(breadcrumb as SystemProps)?._disabled,
                              color: 'blue-1',
                            },
                          }
                        : undefined),
                    },
                    ...child.props,
                  })}
                  {isLast ? null : <BreadcrumbsDivider __css={divider} />}
                </Fragment>
              );
            })
          : null}
      </Flex>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
