import { type Date, Orientation } from '@/types';

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

export function getOrientation(
  ref?: React.RefObject<HTMLButtonElement | null>,
): Orientation | undefined {
  if (ref === undefined || ref === null) {
    return undefined;
  }

  if (!ref.current) {
    return undefined;
  }

  const isLandscape = ref.current.getBoundingClientRect().width >
    ref.current.getBoundingClientRect().height;

  return isLandscape ? Orientation.Landscape : Orientation.Portrait;
};

export function getThreshold(ref: React.RefObject<HTMLButtonElement | null>) {
  const orientation = getOrientation(ref);

  if (orientation === undefined) {
    return 1;
  }

  return orientation === Orientation.Landscape ? 1 : 0.5;
};
