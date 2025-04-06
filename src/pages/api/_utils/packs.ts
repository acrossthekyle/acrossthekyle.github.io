import type { Packs } from '@/types';

export function calculateWeight(items: Packs.Item[]) {
  const total = [...items].reduce((sum, item) => sum + item.weight, 0);

  return (total / 16).toFixed(2);
}

export function calculateBaseWeight(items: Packs.Item[]) {
  return calculateWeight(
    [...items].filter((item) => !item.worn && !item.consumable),
  );
}

export function calculateWornWeight(items: Packs.Item[]) {
  return calculateWeight([...items].filter((item) => item.worn));
}

export function calculateConsumableWeight(items: Packs.Item[]) {
  return calculateWeight([...items].filter((item) => item.consumable));
}

export function calculateWeightPerCategory(
  categories: Packs.Category[],
): Packs.Category[] {
  let output = [];

  for (let category in categories) {
    output.push({
      category,
      items: categories[category],
      weight: calculateWeight(categories[category] as unknown as Packs.Item[]),
    });
  }

  return output;
}

export function markAsWorn(item: Packs.Item) {
  const cloned = { ...item };

  cloned.worn = true;

  return cloned;
}

export function markAsConsumable(item: Packs.Item) {
  const cloned = { ...item };

  cloned.consumable = true;

  return cloned;
}

export function markAsLuxury(item: Packs.Item) {
  const cloned = { ...item };

  cloned.category = 'luxury items';

  return cloned;
}

export function adjustWeightAndQuantity(item: Packs.Item, quantity: number) {
  const cloned = { ...item };

  cloned.weight = Number((cloned.weight * quantity).toFixed(2));
  cloned.quantity = quantity;

  return cloned;
}

export function groupByCategory(items: Packs.Item[]): Packs.Category[] {
  // @ts-ignore-error
  return [...items].reduce((accumulator, current) => {
    let key = current['category']
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(current);

    return accumulator;
  }, {});
}
