import type { Date } from '@/types';

export function getDate(date: Date) {
  return date.date ?? date.years.join(' - ');
}

export function getHierarchy(path: string) {
  const segments = path.split('').filter(character => character === '/');

  const isOnChild = segments.length === 2;
  const previous = `/${path.split('/')[1]}`;

  return {
    base: isOnChild ? previous : path,
    isOnRoot: path === '/',
    isOnParent: path !== '/' && segments.length === 1,
    isOnChild,
    previous,
  };
}
