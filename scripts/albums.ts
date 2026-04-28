/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { reduceCoordinates, write } from './utils';

const input = path.join(process.cwd(), './repository/albums');

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

function uppercaseFirst(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

function getWhen(date: string | string[]) {
  const DIVIDER = '/';

  if (!Array.isArray(date)) {
    const parsed = parseDate(date, 'M/dd/yyyy', new Date());

    return `${formatDate(parsed, 'MM').trim()}${DIVIDER}${formatDate(parsed, 'dd').trim()}${DIVIDER}20${formatDate(parsed, 'yy').trim()}`;
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
      return `${monthA}${DIVIDER}${dayA}${DIVIDER}20${yearA} – ${monthB}${DIVIDER}${dayB}${DIVIDER}20${yearB}`;
    }

    if (!doMonthsMatch) {
      return `${monthA}${DIVIDER}${dayA} - ${monthB}${DIVIDER}${dayB}${DIVIDER}20${yearA}`;
    }

    return `${monthA}${DIVIDER}${dayA} - ${dayB}${DIVIDER}20${yearA}`;
  }

  return `${monthA}${DIVIDER}${dayA}${DIVIDER}20${yearA}`;
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
      category: uppercaseFirst(data.category),
      coordinates: reduceCoordinates(data.coordinates),
      cover: data.cover,
      id: data.id,
      images: data.images.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }).map((image) => ({
        ...image,
        elevation: {
          imperial: formatNumber(image.elevation),
          metric: formatNumber(image.elevation / 3.281),
        },
        date: image.date ? getWhen(image.date) : null,
      })),
      location: data.location,
      notes: data.notes,
      position: data.position,
      tags: data.tags,
      timestamp: data.timestamp,
      title: data.title,
      when: getWhen(data.date),
    });
  }

  if (albums.length) {
    write(
      'index.js',
      albums
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ category, coordinates, cover, id, images, location, notes, position, tags, title, when }) => ({
          category,
          coordinates,
          cover,
          id,
          images,
          location,
          notes,
          position,
          tags,
          title,
          when,
        })),
    );
  }
}
