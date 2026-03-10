/* eslint-disable */
// @ts-nocheck

import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

function calculateWeight(items) {
  const total = [...items].reduce((sum, item) => sum + Number(item.weight.imperial.replace(',', '')), 0);

  return {
    imperial: (total / 16).toFixed(2),
    metric: (total / 35.274).toFixed(2),
  };
};

function calculateBaseWeight(items) {
  return calculateWeight(
    [...items].filter((item) => !item.worn && !item.consumable),
  );
};

function calculateWornWeight(items) {
  return calculateWeight([...items].filter((item) => item.worn));
};

function calculateConsumableWeight(items) {
  return calculateWeight([...items].filter((item) => item.consumable));
};

function groupByCategory(items) {
  const grouped = [...items].reduce((accumulator, current) => {
    let key = current.category
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push({
      link: current.link,
      name: current.name,
      weight: current.weight,
      consumable: current.consumable,
      worn: current.worn,
    });

    return accumulator;
  }, {});

  const results = [];

  for (let category in grouped) {
    results.push({
      title: category,
      items: grouped[category],
      weight: calculateWeight(grouped[category]),
    });
  }

  return results;
};

export async function compile(input: string, place) {
  if (!fs.existsSync(`${input}/gear.csv`)) {
    return null;
  }

  try {
    const parser = fs
      .createReadStream(`${input}/gear.csv`)
      .pipe(
        parse({
          columns: true,
          skip_empty_lines: true,
        }),
      );

    const items = [];

    for await (const item of parser) {
      items.push({
        category: item.category,
        link: item.link,
        name: `${item.name} ${item.type}`.trim(),
        consumable: item.consumable === 'yes',
        weight: {
          imperial: item.weight,
          metric: (Number(item.weight) * 28.35).toFixed(0),
        },
        worn: item.worn === 'yes',
      });
    }

    return {
      categories: groupByCategory(items),
      placeId: place.id,
      weightBase: calculateBaseWeight(items),
      weightConsumable: calculateConsumableWeight(items),
      weightTotal: calculateWeight(items),
      weightWorn: calculateWornWeight(items),
    };
  } catch (e) {
    return null;
  }
};
