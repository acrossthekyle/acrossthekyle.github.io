/* eslint-disable */
// @ts-nocheck

import { format as formatDate, parse as parseDate } from 'date-fns';
import fs from 'fs';
import path from 'path';

import { reduceCoordinates, write } from '../utils';

import { compile as compileGpx } from './gpx';
import { compile as compileStats } from './stats';

const input = path.join(process.cwd(), './repository/trails');

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
  const trails = [];

  await Promise.all(
    fs
      .readdirSync(input)
      .filter((directory) => {
        if (directory !== '.DS_Store') {
          return directory;
        }
      })
      .map(async (folder) => {
        const data = JSON.parse(fs.readFileSync(`${input}/${folder}/data.json`, 'utf8'));

        let trail = {
          albumId: data.albumId,
          altitudeMax: '',
          continent: data.continent,
          coordinates: reduceCoordinates(data.coordinates),
          days: data.days,
          description: data.description,
          distance: '',
          elevationGain: '',
          elevationLoss: '',
          end: '',
          id: data.id,
          location: data.location,
          stages: [],
          start: '',
          timestamp: data.timestamp,
          title: data.title,
          type: data.type,
          when: getWhen(data.date),
        };

        const gpxs = [];

        if (fs.existsSync(`${input}/${folder}/stages`)) {
          await Promise.all(
            fs
              .readdirSync(`${input}/${folder}/stages`)
              .filter((directory) => {
                if (directory !== '.DS_Store') {
                  return directory;
                }
              })
              .map(async (index) => {
                const gpx = await compileGpx(`${input}/${folder}/stages/${index}`, trail);

                if (gpx) {
                  gpxs.push(gpx);
                }
              }),
          );
        } else {
          const gpx = await compileGpx(`${input}/${folder}`, trail);

          if (gpx) {
            gpxs.push(gpx);
          }
        }

        const stats = await compileStats(gpxs);

        trail.altitudeMax = stats.max;
        trail.distance = stats.distance;
        trail.elevationGain = stats.gain;
        trail.elevationLoss = stats.loss;
        trail.end = gpxs.length > 0 ? gpxs[gpxs.length - 1].ending : '';
        trail.stages = gpxs.sort((a, b) => a.index - b.index);
        trail.start = gpxs.length > 0 ? gpxs[0].beginning : '';

        trails.push(trail);
      }),
  );

  if (trails.length) {
    write(
      'trails.js',
      trails
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(({ albumId, coordinates, id, location, title, type, when }) => ({
          albumId,
          coordinates,
          id,
          location,
          title,
          type,
          when,
        })),
    );

    trails.forEach((trail) => {
      write(
        `cache/trails/${trail.id}.js`,
        trail,
      );
    });
  }
}
