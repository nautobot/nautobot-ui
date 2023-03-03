import { SystemStyleObject } from '@chakra-ui/react';
import { createContext, useContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface SidebarContextValue {
  isCollapsed: boolean;
  isCollapsible: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  style: Record<'collapseButton' | 'container' | 'content', SystemStyleObject>;
}

const SidebarContext = createContext<SidebarContextValue>({
  isCollapsed: false,
  isCollapsible: false,
  setIsCollapsed: () => false,
  style: { collapseButton: {}, container: {}, content: {} },
});

export const {
  Consumer: SidebarContextConsumer,
  Provider: SidebarContextProvider,
} = SidebarContext;

export const useSidebarContext = () => useContext(SidebarContext);

export default SidebarContext;
