/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import fsPromises from 'fs/promises';
import os from 'os';
import path from 'path';

import { gpx as parseGpx } from '@tmcw/togeojson';
import { DOMParser } from '@xmldom/xmldom';

import { wait, writeFile } from './utils';

const output = path.join(process.cwd(), './repository/trails');

const input = path.join(
  os.homedir(),
  'Library/Mobile Documents/com~apple~CloudDocs/Hikes and Summits Data/trails',
);

function getCoordinates(data) {
  const items = [];

  data.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((item) => {
      if (Array.isArray(item)) {
        items.push(item);
      }
    });
  });

  return items.filter((item) => item[2] !== null);
};

export async function go() {
  console.log('--- running trails script ---');

  const trails = fs.readdirSync(input).filter((folder) => {
    const fullPath = path.join(input, folder);

    return !fs.statSync(fullPath).isFile() && folder !== '.DS_Store';
  });

  for (const trail of trails) {
    const id = trail;

    if (!fs.existsSync(`${output}/${id}.json`)) {
      const parent = `${input}/${trail}/stages`;

      if (fs.existsSync(parent)) {
        const result = [];

        const stages = fs.readdirSync(parent).filter((folder) => {
          const fullPath = path.join(parent, folder);

          return !fs.statSync(fullPath).isFile() && folder !== '.DS_Store';
        });

        for (const stage of stages) {
          const route = `${parent}/${stage}/route.gpx`;

          if (fs.existsSync(route)) {
            const xml = await fsPromises.readFile(route, 'utf-8');

            const parsed = parseGpx(new DOMParser().parseFromString(xml, 'text/xml'));

            if (parsed) {
              const items = getCoordinates(parsed);

              const coordinates = [];

              for (const item of items) {
                coordinates.push({
                  coordinates: [item[1], item[0]],
                  elevation: item[2],
                });
              }

              result.push(coordinates);
            }

            await wait(100);
          }
        }

        writeFile(output, `${id}.json`, JSON.stringify(result, null, 2));

        await wait(500);
      }
    }
  }
}
