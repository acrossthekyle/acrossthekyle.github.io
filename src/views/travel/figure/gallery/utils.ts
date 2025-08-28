import { Orientation } from './types';

export function getOrientation(
  ref: React.RefObject<HTMLImageElement | null>,
): Orientation | undefined {
  if (ref === null) {
    return undefined;
  }

  if (!ref.current) {
    return undefined;
  }

  const isLandscape = ref.current.getBoundingClientRect().width >
    ref.current.getBoundingClientRect().height;

  return isLandscape ? Orientation.Landscape : Orientation.Portrait;
};

export function getThreshold(ref: React.RefObject<HTMLImageElement | null>) {
  const orientation = getOrientation(ref);

  if (orientation === undefined) {
    return 1;
  }

  return orientation === Orientation.Landscape ? 1 : 0.5;
};
