export function getUnitsLabelForGroup(units: string) {
  return units === 'metric' ? 'kg' : 'lbs';
}

export function getUnitsLabelForItem(units: string) {
  return units === 'metric' ? 'g' : 'oz';
}

export function convertItemWeight(
  weight: string | number,
  units: string,
): number {
  const isMetric = units === 'metric';

  return isMetric
    ? Number((Number(weight) * 28.35).toFixed(2))
    : Number(weight);
}

export function convertGroupWeight(
  weight: string | number,
  units: string,
): number {
  const isMetric = units === 'metric';

  return isMetric
    ? Number((Number(weight) / 2.205).toFixed(2))
    : Number(weight);
}
