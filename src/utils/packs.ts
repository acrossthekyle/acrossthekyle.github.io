import type { Packs } from '@/types';

export function getUnitsLabelForGroup(units: Packs.Units) {
  return units === 'metric' ? 'kg' : 'lbs';
}

export function getUnitsLabelForItem(units: Packs.Units) {
  return units === 'metric' ? 'g' : 'oz';
}

export function convertItemWeight(
  weight: string | number,
  units: Packs.Units,
): number {
  const isMetric = units === 'metric';

  return isMetric
    ? Number((Number(weight) * 28.35).toFixed(2))
    : Number(weight);
}

export function convertGroupWeight(
  weight: string | number,
  units: Packs.Units,
): number {
  const isMetric = units === 'metric';

  return isMetric
    ? Number((Number(weight) / 2.205).toFixed(2))
    : Number(weight);
}
