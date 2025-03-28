import { startCase } from 'lodash';

import type { PackCategory, PackItem } from '@/types/packs';

export function calculateWeight(items: PackItem[], isMetric: boolean) {
  const total = ([ ...items ].reduce((sum, item) => sum + item.weight, 0));

  return ((isMetric ? total/1000 : total/16)).toFixed(2);
};

export function calculateBaseWeight(items: PackItem[], isMetric: boolean) {
  return calculateWeight(
    [ ...items ].filter((item) => !item.worn && !item.consumable),
    isMetric,
  );
};

export function calculateWornWeight(items: PackItem[], isMetric: boolean) {
  return calculateWeight(
    [ ...items ].filter((item) => item.worn),
    isMetric,
  );
};

export function calculateConsumableWeight(
  items: PackItem[],
  isMetric: boolean,
) {
  return calculateWeight(
    [ ...items ].filter((item) => item.consumable),
    isMetric,
  );
};

export function calculateWeightPerCategory(
  categories: PackCategory[],
  isMetric: boolean,
): PackCategory[] {
  let output = [];

  for (let category in categories) {
    output.push({
      category,
      items: categories[category],
      weight: calculateWeight(categories[category] as unknown as PackItem[], isMetric),
    });
  }

  return output;
};

export function markAsWorn(item: PackItem) {
  const cloned = { ...item };

  cloned.worn = true;

  return cloned;
};

export function markAsConsumable(item: PackItem) {
  const cloned = { ...item };

  cloned.consumable = true;

  return cloned;
};

export function markAsLuxury(item: PackItem) {
  const cloned = { ...item };

  cloned.category = 'luxury items';

  return cloned;
};

export function adjustWeightAndQuantity(item: PackItem, quantity: number) {
  const cloned = { ...item };

  cloned.weight = Number((cloned.weight * quantity).toFixed(2));
  cloned.quantity = quantity;

  return cloned;
};

export function convertWeightPerItem(items: PackItem[], isMetric: boolean) {
  return [ ...items ].map((item) => ({
    ...item,
    weight: (isMetric ? Number((item.weight * 28.35).toFixed(2)) : item.weight),
  }));
};

export function groupByCategory(items: PackItem[]): PackCategory[] {
  // @ts-ignore-error
  return [ ...items ].reduce((accumulator, current) => {
    let key = current['category']
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(current);

    return accumulator;
  }, {});
};
