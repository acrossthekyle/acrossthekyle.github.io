import { Orientation } from '@/types';

export function padIndex(index: number) {
  return String(index).padStart(2, '0');
}

export function getOrientation(
  ref?: React.RefObject<HTMLButtonElement | HTMLDivElement | null>,
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
