import { forwardRef } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Button, NotificationIcon } from '../..';
import type { ButtonProps } from '../..';

import NavbarContext from './NavbarContext';

export interface NavbarNotificationButtonProps
  extends Omit<ButtonProps, 'children'> {
  children?: number | string | null | undefined;
}

const NavbarNotificationButton = forwardRef<
  NavbarNotificationButtonProps,
  'button'
>(({ children, ...rest }, ref) => {
  const {
    styles: { notificationButton },
  } = useContext(NavbarContext);

  return (
    <Button
      ref={ref}
      aria-label="Notifications"
      leftIcon={<NotificationIcon margin={2} transform="translateX(-5px)" />}
      variant="unstyled"
      {...(notificationButton as SystemProps)}
      {...(children && children !== '0'
        ? {
            _after: {
              ...(notificationButton as SystemProps)?._after,
              content: `"${Number(children) < 10 ? children : '9+'}"`,
            },
          }
        : undefined)}
      {...rest}
    />
  );
});

NavbarNotificationButton.displayName = 'NavbarNotificationButton';

export default NavbarNotificationButton;
