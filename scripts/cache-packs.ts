// @ts-nocheck

import { parse } from 'csv-parse';
import { parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import data from '../src/packs';

const cacheDirectory = './src/cache/packs';

async function getPacksFromCsvs() {
  let packs = [];

  await Promise.all(
    data.map(async ({ file, ...rest }) => {
      const items = await packFromCsv(file);

      packs.push({
        ...rest,
        items,
      });
    }),
  );

  packs.sort((a, b) => {
    return (
      // @ts-expect-error
      parseDate(b.date, 'MMMM do, yyyy', new Date()) -
      // @ts-expect-error
      parseDate(a.date, 'MMMM do, yyyy', new Date())
    );
  });

  return packs;
}

async function packFromCsv(filePath: string) {
  const parser = fs
    .createReadStream(path.resolve('./src/packs', filePath))
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

export function calculateWeight(items) {
  const total = [...items].reduce((sum, item) => sum + item.weight, 0);

  return (total / 16).toFixed(2);
}

export function calculateBaseWeight(items) {
  return calculateWeight(
    [...items].filter((item) => !item.worn && !item.consumable),
  );
}

export function calculateWornWeight(items) {
  return calculateWeight([...items].filter((item) => item.worn));
}

export function calculateConsumableWeight(items) {
  return calculateWeight([...items].filter((item) => item.consumable));
}

export function calculateWeightPerCategory(categories) {
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

export function groupByCategory(items) {
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

function createCacheDirectory(destination) {
  try {
    fs.readdirSync(destination);
  } catch (e) {
    fs.mkdirSync(destination);
  }
}

function writeCacheFile(destination, file, content) {
  createCacheDirectory(destination);

  fs.writeFile(`${destination}/${file}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log(`${destination}/${file} cached`);
  });
}

async function cache() {
  fs.rmSync(cacheDirectory, { recursive: true, force: true }, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Cache:Packs cleared');
    }
  });

  const packs = await getPacksFromCsvs();

  const data = packs.map(({ items, ...rest }) => {
    return {
      ...rest,
      categories: calculateWeightPerCategory(groupByCategory(items)),
      weightBase: calculateBaseWeight(items),
      weightConsumable: calculateConsumableWeight(items),
      weightTotal: calculateWeight(items),
      weightWorn: calculateWornWeight(items),
    };
  });

  const json = `export const packs = ${JSON.stringify(data)};`;

  writeCacheFile(cacheDirectory, 'index.js', json);
}

cache();
