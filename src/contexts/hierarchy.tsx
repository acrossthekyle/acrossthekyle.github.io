'use client';

import { usePathname } from 'next/navigation';
import { Suspense, createContext } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

type ContextState = {
  isRoot: boolean;
  isParent: boolean;
  isChild: boolean;
  isGrandchild: boolean;
  pathname: string;
};

export const Context = createContext<ContextState>({
  isRoot: false,
  isParent: false,
  isChild: false,
  isGrandchild: false,
  pathname: '',
});

function ContextRenderer({ children }: Props) {
  const pathname = usePathname();

  const level = pathname.split('/').filter(Boolean).length;

  const isRoot = level === 0;
  const isParent = level === 1;
  const isChild = level === 2;
  const isGrandchild = level === 3;

  return (
    <Context.Provider
      value={{
        isChild,
        isGrandchild,
        isParent,
        isRoot,
        pathname,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ContextRenderer>{children}</ContextRenderer>
    </Suspense>
  );
};
