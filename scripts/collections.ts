/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { reduceCoordinates, write } from './utils';

const input = path.join(process.cwd(), './repository');

function uppercaseFirst(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

function getWhen(date: null | string | string[]) {
  if (date === null) {
    return null;
  }

  if (!Array.isArray(date)) {
    const parsed = parseDate(date, 'M/dd/yyyy', new Date());

    return {
      long: [
        `${formatDate(parsed, 'MMMM').trim()} 20${formatDate(parsed, 'yy').trim()}`,
      ],
      short: [
        `${formatDate(parsed, 'MM').trim()}/${formatDate(parsed, 'dd').trim()}/${formatDate(parsed, 'yy').trim()}`,
      ],
    };
  }

  const start = parseDate(date[0], 'M/dd/yyyy', new Date());

  const dayA = formatDate(start, 'dd').trim();
  const monthA = formatDate(start, 'MM').trim();
  const yearA = formatDate(start, 'yy').trim();

  const longDayA = formatDate(start, 'do').trim();
  const longMonthA = formatDate(start, 'MMMM').trim();

  if (date.length > 1) {
    const end = parseDate(date[1], 'M/dd/yyyy', new Date());

    const dayB = formatDate(end, 'dd').trim();
    const monthB = formatDate(end, 'MM').trim();
    const yearB = formatDate(end, 'yy').trim();

    const longDayB = formatDate(end, 'do').trim();
    const longMonthB = formatDate(end, 'MMMM').trim();

    const short = [
      `${monthA}/${dayA}/${yearA}`,
      `${monthB}/${dayB}/${yearB}`,
    ];

    let long = [];

    const doMonthsMatch = monthA === monthB;
    const doYearsMatch = yearA === yearB;

    if (!doYearsMatch) {
      long = [`${longMonthA} ${longDayA}, 20${yearA}`, `${longMonthB} ${longDayB}, 20${yearB}`];
    } else if (!doMonthsMatch) {
      long = [`${longMonthA} ${longDayA}`, `${longMonthB} ${longDayB}, 20${yearA}`];
    } else {
      long = [`${longMonthA} ${longDayA}`, `${longDayB}, 20${yearA}`];
    }

    return {
      long,
      short,
    };
  }

  return {
    long: [`20${yearA}+`, ''],
    short: [`20${yearA}+`, ''],
  };
};

export async function go() {
  console.log('--- running collections script ---');

  const collections = [];
  const images = [];
  const timelines = [];
  const landmarks = [];

  const files = fs.readdirSync(input).filter((file) => {
    const fullPath = path.join(input, file);

    return (
      fs.statSync(fullPath).isFile() &&
      file.endsWith('.json') &&
      file !== '.DS_Store'
    );
  });

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    if (data.images.length > 0) {
      const photos = JSON.parse(fs.readFileSync(`${input}/images/${file}`, 'utf8'));

      const when = getWhen(data.date);
      const year = data.date[0].split('/')[2];

      const cover = photos.find((photo) => photo.type === 'cover');

      if (cover) {
        collections.push({
          category: uppercaseFirst(data.category),
          coordinates: reduceCoordinates(data.coordinates),
          count: data.images.length,
          cover: {
            src: cover.id,
            thumb: cover.thumb,
          },
          header: data.header,
          id: data.id,
          location: data.location,
          notes: data.notes,
          timestamp: data.timestamp,
          title: data.title,
          type: data.type,
          when,
          year,
        });
      }

      data.images.map(({ date, elevation, location, notes, id, title }) => {
        const foundImage = photos.find((photo) => photo.type === 'image' && photo.id.includes(id));

        if (foundImage) {
          images.push({
            camera: foundImage.exif?.camera || null,
            category: uppercaseFirst(data.category),
            collectionId: data.id,
            elevation,
            id: foundImage.id.split('/').pop(),
            location,
            notes: notes ? (Array.isArray(notes) ? notes : [notes]) : [],
            src: foundImage.id,
            thumb: foundImage.thumb,
            title,
            when: date ? getWhen(date) : null,
          });
        }
      });
    }

    if (fs.existsSync(`${input}/timelines/${file}`)) {
      try {
        const timeline = JSON.parse(fs.readFileSync(`${input}/timelines/${file}`, 'utf8'));

        timelines.push({
          collectionId: data.id,
          ...timeline,
        });
      } catch {
        // do nothing
      }
    }

    if (fs.existsSync(`${input}/landmarks/${file}`)) {
      try {
        const items = JSON.parse(fs.readFileSync(`${input}/landmarks/${file}`, 'utf8'));

        landmarks.push({
          collectionId: data.id,
          items,
        });
      } catch {
        // do nothing
      }
    }
  }

  if (collections.length) {
    write(
      'collections.js',
      collections
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ timestamp, ...rest }) => (rest)),
    );
  }

  if (images.length) {
    write(
      'images.js',
      images.sort((a, b) => new Date(a.when) - new Date(b.when)),
    );
  }

  if (timelines.length) {
    write('timelines.js', timelines);
  }

  if (landmarks.length) {
    write('landmarks.js', landmarks);
  }
}
