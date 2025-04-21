import { gpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';
import { parse } from 'csv-parse';
import { parse as parseDate } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

import data from '../packs';

export async function getPacksFromCsvs() {
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

export async function routeFromGpx(filePath: string): Promise<any | undefined> {
  try {
    const xml = await fsPromises.readFile(
      path.join(process.cwd(), './src/gpxs', filePath),
      'utf-8',
    );

    return gpx(new DOMParser().parseFromString(xml, 'text/xml'));
  } catch (e: any) {
    return undefined;
  }
}
