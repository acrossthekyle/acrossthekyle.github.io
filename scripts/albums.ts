/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/albums');

function getWhen(date: string | string[]) {
  if (!Array.isArray(date)) {
    const parsed = parseDate(date, 'M/dd/yyyy', new Date());

    return `${formatDate(parsed, 'MM').trim()} ${formatDate(parsed, 'dd').trim()} 20${formatDate(parsed, 'yy').trim()}`;
  }

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
  console.log('--- running albums script ---');

  const albums = [];

  const files = fs
    .readdirSync(input)
    .filter((directory) => directory !== '.DS_Store');

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    albums.push({
      category: data.category,
      coordinates: data.coordinates,
      id: data.id,
      images: data.images.map((image) => ({
        ...image,
        when: image.date ? getWhen(image.date) : null,
      })),
      location: data.location,
      tags: data.tags,
      timestamp: data.timestamp,
      title: data.title,
      when: getWhen(data.date),
    });
  }

  if (albums.length) {
    write(
      'albums.js',
      albums
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ category, coordinates, id, images, location, title, when }) => ({
          category,
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
