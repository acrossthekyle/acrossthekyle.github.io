/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { reduceCoordinates, write } from './utils';

const input = path.join(process.cwd(), './repository');

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

function uppercaseFirst(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

function getWhen(date: null | string | string[]) {
  const DIVIDER = '/';

  if (date === null) {
    return null;
  }

  if (!Array.isArray(date)) {
    const parsed = parseDate(date, 'M/dd/yyyy', new Date());

    return `${formatDate(parsed, 'MM').trim()}${DIVIDER}${formatDate(parsed, 'dd').trim()}${DIVIDER}20${formatDate(parsed, 'yy').trim()}`;
  }

  const start = parseDate(date[0], 'M/dd/yyyy', new Date());

  const dayA = formatDate(start, 'dd').trim();
  const monthA = formatDate(start, 'MM').trim();
  const yearA = formatDate(start, 'yy').trim();

  if (date.length > 1) {
    const end = parseDate(date[1], 'M/dd/yyyy', new Date());

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

    return `${monthA}${DIVIDER}${dayA} - ${monthA}${DIVIDER}${dayB}${DIVIDER}20${yearA}`;
  }

  return `20${yearA}+`;
};

export async function go() {
  console.log('--- running collections script ---');

  const collections = [];
  const images = [];

  const files = fs
    .readdirSync(input)
    .filter((directory) => directory !== '.DS_Store');

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    const when = getWhen(data.date);

    collections.push({
      category: uppercaseFirst(data.category),
      coordinates: reduceCoordinates(data.coordinates),
      count: data.images.length,
      cover: data.cover,
      id: data.id,
      location: data.location,
      notes: data.notes,
      position: data.position,
      tags: data.tags,
      timestamp: data.timestamp,
      title: data.title,
      when,
      year: when !== null ? when.split('/').pop() : null,
    });

    data.images.map(({ date, elevation, exif, location, notes, src, thumb, title }) => {
      images.push({
        camera: exif?.camera || null,
        category: uppercaseFirst(data.category),
        collection: {
          id: data.id,
          position: data.position,
          title: data.title,
        },
        elevation: {
          imperial: formatNumber(elevation),
          metric: formatNumber(elevation / 3.281),
        },
        location,
        notes: notes ? (Array.isArray(notes) ? notes : [notes]) : [],
        src,
        thumb,
        title,
        when: date ? getWhen(date) : null,
      });
    });
  }

  if (collections.length) {
    write(
      'collections.js',
      collections
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ category, coordinates, count, cover, id, location, notes, position, tags, title, when, year }) => ({
          category,
          coordinates,
          count,
          cover,
          id,
          location,
          notes,
          position,
          tags,
          title,
          when,
          year,
        })),
    );
  }

  if (images.length) {
    write(
      'images.js',
      images.sort((a, b) => new Date(b.when) - new Date(a.when)),
    );
  }
}
