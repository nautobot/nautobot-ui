import {
  forwardRef,
  MenuList as ChakraMenuList,
  useMenuContext,
} from '@chakra-ui/react';
import type { MenuListProps as ChakraMenuListProps } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

export interface MenuListProps extends ChakraMenuListProps {
  restrictToViewport?: boolean;
}

const MenuList = forwardRef<MenuListProps, 'div'>(
  ({ restrictToViewport, ...rest }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    const menuListRef = ref ?? internalRef;

    const { isOpen } = useMenuContext();

    const [style, setStyle] = useState<
      | { maxHeight?: number | undefined; overflowY?: 'auto' | undefined }
      | undefined
    >();

    useEffect(() => {
      const isMenuListRefValid =
        typeof menuListRef === 'object' && !!menuListRef.current;

      if (isMenuListRefValid && isOpen && restrictToViewport) {
        const menuList: HTMLDivElement = menuListRef.current;
        const nearestScrollableAncestorElement = (() => {
          let ancestorElement: HTMLElement = menuList;
          let isScrollable = false;

          while (!isScrollable) {
            // Return `ancestorElement` if it is already the top-level element.
            if (!ancestorElement.parentElement) {
              return ancestorElement;
            }

            ancestorElement = ancestorElement.parentElement;
            isScrollable =
              ancestorElement.clientHeight < ancestorElement.scrollHeight &&
              ['auto', 'scroll'].includes(
                window.getComputedStyle(ancestorElement).overflowY
              );
          }

          return ancestorElement;
        })();

        const { height, y } = menuList.getBoundingClientRect();
        const { y: nearestScrollableAncestorElementY } =
          nearestScrollableAncestorElement.getBoundingClientRect();
        const { scrollHeight, scrollTop } = nearestScrollableAncestorElement;

        const maxHeight =
          nearestScrollableAncestorElementY + scrollHeight - scrollTop - y;

        setStyle(
          height > maxHeight ? { maxHeight, overflowY: 'auto' } : undefined
        );
      } else {
        setStyle(undefined);
      }
    }, [isOpen, restrictToViewport]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (style?.maxHeight !== undefined) {
        setTimeout(() =>
          setTimeout(() => {
            const isMenuListRefValid =
              typeof menuListRef === 'object' && !!menuListRef.current;

            if (isMenuListRefValid) {
              menuListRef.current.scrollTop = 0;
            }
          })
        );
      }
    }, [style]); // eslint-disable-line react-hooks/exhaustive-deps

    return <ChakraMenuList ref={menuListRef} {...style} {...rest} />;
  }
);

MenuList.displayName = 'MenuList';

export default MenuList;
