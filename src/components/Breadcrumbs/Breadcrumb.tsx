import type { ComponentWithAs, SystemProps } from '@chakra-ui/react';
import React from 'react';
import type { Key, ReactNode } from 'react';

import {
  ArrowDownIcon,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '../..';
import type { LinkProps, MenuProps, MenuItemProps, TextProps } from '../..';

export type BreadcrumbType = 'custom' | 'link' | 'menu' | 'text';

export type BreadcrumbProps = { _styles?: SystemProps } & (
  | ({ type: Extract<BreadcrumbType, 'custom'> } & { children: ReactNode })
  | ({ type: Extract<BreadcrumbType, 'link'> } & LinkProps)
  | ({ type: Extract<BreadcrumbType, 'menu'> } & Omit<MenuProps, 'children'> & {
        children: ReactNode;
        items: (MenuItemProps & {
          key?: Key | null | undefined;
          [prop: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        })[];
      })
  | ({ type: Extract<BreadcrumbType, 'text'> } & TextProps)
);

const Breadcrumb: ComponentWithAs<'div', BreadcrumbProps> = (
  props: BreadcrumbProps
) => {
  switch (props.type) {
    case 'custom':
      return <>{props.children}</>;

    case 'link': {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _styles, type, ...rest } = props;
      return <Link {..._styles} {...rest} />;
    }

    case 'menu': {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _styles, children, items, type, ...rest } = props;
      const isDisabled = (items?.length ?? 0) === 0;

      return (
        <Menu {...rest}>
          <MenuButton
            as={Button}
            variant="unstyled"
            {..._styles}
            {...(isDisabled
              ? { isDisabled: true }
              : { rightIcon: <ArrowDownIcon size="xs" /> })}
          >
            {children}
          </MenuButton>
          {isDisabled ? null : (
            <MenuList>
              {items.map((item, index) => (
                <MenuItem key={item?.id ?? index} {...item} />
              ))}
            </MenuList>
          )}
        </Menu>
      );
    }

    case 'text': {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _styles, type, ...rest } = props;
      return <Text {..._styles} _hover={{}} cursor="default" {...rest} />;
    }

    default:
      return <></>;
  }
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
