/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/albums');

function getWhen(date: string[]) {
  const start = parseDate(date[0], 'M/dd/yyyy', new Date());

  const dayA = formatDate(start, 'dd').trim();
  const monthA = formatDate(start, 'MM').trim();
  const yearA = formatDate(start, 'yy').trim();

  if (date.length > 1) {
    const end = date[1] === 'current' ? '+' : parseDate(date[1], 'M/dd/yyyy', new Date());

    if (end === '+') {
      return `20${yearA}+`;
    }

    const dayB = formatDate(end, 'dd').trim();
    const monthB = formatDate(end, 'MM').trim();
    const yearB = formatDate(end, 'yy').trim();

    const doDaysMatch = dayA === dayB;
    const doMonthsMatch = monthA === monthB;
    const doYearsMatch = yearA === yearB;

    if (!doYearsMatch) {
      return `${monthA} ${dayA} 20${yearA} / ${monthB} ${dayB} 20${yearB}`;
    }

    if (!doMonthsMatch) {
      return `${monthA} ${dayA} / ${monthB} ${dayB} 20${yearA}`;
    }

    return `${monthA} ${dayA}-${dayB} 20${yearA}`;
  }

  return `${monthA} ${dayA} 20${yearA}`;
};

export async function go() {
  const albums = [];

  await Promise.all(
    fs
      .readdirSync(input)
      .filter((directory) => {
        if (directory !== '.DS_Store') {
          return directory;
        }
      })
      .map(async (file) => {
        const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

        albums.push({
          coordinates: data.coordinates,
          id: data.id,
          images: data.images,
          location: data.location,
          timestamp: data.timestamp,
          title: data.title,
          when: getWhen(data.date),
        });
      }),
  );

  if (albums.length) {
    write(
      'albums.js',
      albums.sort((a, b) => b.timestamp - a.timestamp).map(({ coordinates, id, images, location, title, when }) => ({
        coordinates,
        id,
        images,
        location,
        title,
        when,
      })),
    );
  }
}
