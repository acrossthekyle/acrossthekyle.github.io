'use client';

import { usePathname, useSearchParams } from 'next/navigation';

type Model = {
  base: string;
  isOnChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  path: string;
  previous: string;
  searchParameters: string;
};

export function useHierarchy(): Model {
  const current = usePathname();

  const searchParams = useSearchParams();

  const segments = current.split('').filter(character => character === '/');

  const isOnRoot = current === '/';
  const isOnParent = current !== '/' && segments.length === 1;
  const isOnChild = segments.length === 2;

  const previous = `/${current.split('/')[1]}`;

  return {
    base: isOnChild ? previous : current,
    isOnChild,
    isOnParent,
    isOnRoot,
    path: current,
    previous,
    searchParameters: searchParams.toString(),
  };
}
