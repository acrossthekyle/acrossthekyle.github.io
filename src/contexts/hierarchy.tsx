'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, createContext } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export const HierarchyContext = createContext({
  base: '',
  isOnChild: false,
  isOnParent: false,
  isOnRoot: false,
  path: '',
  previous: '',
  searchParameters: '',
});

export default function Hierarchy({ children }: Props) {
  const current = usePathname();

  const searchParams = useSearchParams();

  const segments = current.split('').filter(character => character === '/');

  const isOnRoot = current === '/';
  const isOnParent = current !== '/' && segments.length === 1;
  const isOnChild = segments.length === 2;

  const previous = `/${current.split('/')[1]}`;

  return (
    <HierarchyContext.Provider
      value={{
        base: isOnChild ? previous : current,
        isOnChild,
        isOnParent,
        isOnRoot,
        path: current,
        previous,
        searchParameters: searchParams.toString(),
      }}
    >
      {children}
    </HierarchyContext.Provider>
  );
};
