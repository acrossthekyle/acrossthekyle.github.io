import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

import type { Packs } from '@/types';

export async function fromCsv(filePath: string) {
  const parser = fs
    .createReadStream(
      path.resolve('./src/pages/api/_database/packs/csvs', filePath),
    )
    .pipe(
      parse({
        columns: true,
        skip_empty_lines: true,
      }),
    );

  const records = [];

  for await (const record of parser) {
    records.push({
      ...record,
      consumable: record.consumable === 'yes',
      weight: Number(record.weight),
      worn: record.worn === 'yes',
    });
  }

  return records;
}

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
