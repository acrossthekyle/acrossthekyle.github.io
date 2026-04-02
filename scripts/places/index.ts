/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { write } from '../utils';

import { compile as compileGpxs } from './gpx';
import { compile as compileImages } from './images';
import { compile as compilePlace } from './place';
import { compile as compileStages } from './stages';
import { compile as compileStats } from './stats';

const input = path.join(process.cwd(), './repository/places');

/* GO */

export async function go() {
  const folders = fs.readdirSync(input).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const cache = {
    places: [],
    stats: [],
    stages: [],
    images: [],
    gpxs: [],
  };

  await Promise.all(
    folders.map(async (folder) => {
      const place = await compilePlace(`${input}/${folder}`);

      cache.places.push(place);

      const stages = await compileStages(`${input}/${folder}/stages`, place);

      cache.stages = [ ...cache.stages, ...stages ];

      const gpx = await compileGpxs(`${input}/${folder}/stages`, place);

      cache.gpxs = [ ...cache.gpxs, ...gpx ];

      const stats = await compileStats(place, stages, gpx);

      cache.stats.push(stats);

      const images = await compileImages(place, stages);

      cache.images = [ ...cache.images, ...images ];
    }),
  );

  if (cache.places.length) {
    write(
      'places.js',
      cache.places
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((data, index) => ({
          ...data,
          index: (cache.places.length - 1) - index,
        })),
    );

    write(
      'stages.js',
      cache.stages,
    );

    write(
      'images.js',
      cache.images,
    );

    write(
      'stats.js',
      cache.stats,
    );

    write(
      'gpx.js',
      cache.gpxs,
    );
  }
}
