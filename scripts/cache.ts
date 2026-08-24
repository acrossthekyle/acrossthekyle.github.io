/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { OUTPUT, createDirectory, imagePath, reduceCoordinates, wait, write } from './utils';

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

async function data(id, raw) {
  write(
    `travels/${id}/data.js`,
    {
      category: raw.category,
      coordinates: reduceCoordinates(raw.coordinates),
      country: raw.location.country,
      cover: imagePath(raw.cover, raw.uploads),
      header: raw.header.join(' '),
      notes: raw.notes,
      region: raw.location.region,
      title: raw.title.join(' '),
      when: getWhen(raw.date).long.join(' to '),
    },
  );
};

async function images(id, raw) {
  const items = JSON.parse(fs.readFileSync(`${input}/images/${id}.json`, 'utf8'));

  const images = [];

  raw.images.map((image) => {
    const found = items.find((item) => item.id === image.id);

    if (found) {
      images.push({
        elevation: image.elevation,
        src: found.src,
        thumb: found.thumb,
        title: image.title || image.location.region,
        when: image.date ? getWhen(image.date).long[0] : null,
      });
    }
  });

  if (images.length) {
    write(`travels/${id}/images.js`, images);
  }
};

async function landmarks(id) {
  const path = `${input}/landmarks/${id}.json`;

  if (fs.existsSync(path)) {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    if (data.length) {
      write(`travels/${id}/landmarks.js`, data);
    }
  }
};

async function timeline(id) {
  const path = `${input}/timelines/${id}.json`;

  if (fs.existsSync(path)) {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    write(`travels/${id}/timeline.js`, data.items);
  }
};

async function trail(id) {
  const path = `${input}/trails/${id}.json`;

  if (fs.existsSync(path)) {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    write(`travels/${id}/trail.js`, data);
  }
};

export async function go() {
  console.log('--- running cache script ---');

  const travels = [];

  const files = fs.readdirSync(input).filter((file) => {
    const fullPath = path.join(input, file);

    return (
      fs.statSync(fullPath).isFile() &&
      file.endsWith('.json') &&
      file !== '.DS_Store'
    );
  });

  for (const file of files) {
    const id = file.replace('.json', '');
    console.log('# processing ', id);

    const raw = JSON.parse(fs.readFileSync(`${input}/${file}`, 'utf8'));

    if (raw.images.length > 0) {
      travels.push({
        category: raw.category,
        country: raw.location.country,
        id,
        region: raw.location.region,
        timestamp: raw.timestamp,
        title: raw.title.join(' '),
        year: raw.date[0].split('/')[2],
      });

      await createDirectory(`${OUTPUT}/travels`);
      await createDirectory(`${OUTPUT}/travels/${id}`);
      await wait(100);

      await data(id, raw);
      await wait(100);

      await images(id, raw);
      await wait(100);

      await landmarks(id);
      await wait(100);

      await timeline(id);
      await wait(100);

      await trail(id);
      await wait(100);
    }
  }

  if (travels.length) {
    write(
      'travels.js',
      travels
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ timestamp, ...rest }) => (rest)),
    );
  }
}
